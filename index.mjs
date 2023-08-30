import { responseTypes, discordWebhookUrl } from "./constant.mjs";

//parameters
const now = new Date().getTime();
const timeOffset = 1000 * 60 * 60 * 9;
const nowStr = `${new Date(now + timeOffset).toISOString().slice(0, 16)}:00`;
const oneHourAgo = now - 1000 * 60 * 60 * 1 + timeOffset;
const oneHourAgoStr = `${new Date(oneHourAgo).toISOString().slice(0, 16)}:00`;
const oneDayAgo = now - 1000 * 60 * 60 * 24 + timeOffset;
const oneDayAgoStr = `${new Date(oneDayAgo).toISOString().slice(0, 16)}:00`;
const authInfo = "user=admin&password=qwerty123456";
console.log("now:", now);
console.log("oneHourAgoStr:", oneHourAgoStr);
console.log("oneDayAgoStr:", oneDayAgoStr);

if (nowStr.slice(11, 13) === "00") {
  //if now is 00:00:00
  getEvetnsSinceAndPushToDiscord(oneDayAgoStr, "daily");
}
getEvetnsSinceAndPushToDiscord(oneHourAgoStr, "hourly");

// 이벤트를 받아서 디스코드로 전송하는 함수
async function getEvetnsSinceAndPushToDiscord(timeStr, type) {
  const resJson = await getEvents(timeStr, authInfo);
  const message = getMessage(timeStr, resJson, type);
  if (message === null) return;
  const discordResJson = await postDiscordMessage(discordWebhookUrl, message);
}

// 이벤트 조회 요청 함수
async function getEvents(timeStr, authInfo) {
  console.log(
    `fetching...: http://ydp-sky.stadium.refutsal.com/api/events?since=${timeStr}`
  );
  const res = await fetch(
    `http://ydp-sky.stadium.refutsal.com/api/events?since=${timeStr}&total=1&limit=1000&${authInfo}`
  );
  const resJson = res.json();
  // console.log("resJson:", resJson);
  return resJson;
}

// 메세지 생성 함수
function getMessage(timeStr, res, type) {
  const resultStr =
    type === "hourly"
      ? `**${timeStr.slice(11, 16)} ~ ${nowStr.slice(11, 16)}**`
      : `**${timeStr.slice(0, 16).split("T").join(" ")} ~ ${nowStr
          .slice(0, 16)
          .split("T")
          .join(" ")}**`;

  if (res.total === 0) {
    return type === "hourly" ? null : `${resultStr}: ✅ 특이사항 없음`;
  } else {
    return `${resultStr}: 🚨 특이사항 ${
      res.total
    }개 발생! @everyone\n${getThread(res)}`;
  }
}

// 스레드 생성 함수
function getThread(res) {
  const eventsSummary = res.events.map((event) => {
    const { type, timestamp, rowid, devices } = event;
    const hour = new Date(timestamp * 1000 + timeOffset).getHours();
    const minute = new Date(timestamp * 1000 + timeOffset).getMinutes();
    return JSON.stringify({
      type: responseTypes[type].Description,
      // timestamp,
      at: `${`${hour}`.padStart(2, "0")}:${`${minute}`.padStart(2, "0")}`,
      devices: devices.map((v) => parseInt(v) + 1).join(", "),
    });
  });
  console.log("eventsSummary:", eventsSummary.length);
  return `${[...new Set(eventsSummary)].join("\n")}
    `;
}

// 디스코드 메세지 전송 함수
async function postDiscordMessage(url, message) {
  const discordRes = await fetch(`${url}?wait=true`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
      type: 11,
    }),
  });

  const discordResStr = await streamToString(discordRes.body);
  const discordResJson = JSON.parse(discordResStr);

  console.log("discordRes:", discordResJson);
  return discordResJson;
}

// 디스코드 스레드 생성 함수
async function postDiscordThread(url, content, message_id, channel_id) {
  console.log("message_id:", message_id);
  const discordRes = await fetch(`${url}?message_id=${message_id}&wait=true`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "event list",
      content,
    }),
  });
  const discordResStr = await streamToString(discordRes.body);
  const discordResJson = JSON.parse(discordResStr);
  console.log("thread reponse:", discordResJson);
  return discordResJson;
}

async function streamToString(stream) {
  const chunks = [];
  const reader = stream.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(decoder.decode(value, { stream: true }));
  }

  return chunks.join("");
}
