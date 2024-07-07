const responseTypes = {
  0: {
    Name: "motion",
    Description: "Motion Detection",
  },
  1: {
    Name: "sensor",
    Description: "Sensor (Digital Input)",
  },
  2: {
    Name: "alarm",
    Description: "Alarm (Digital Output)",
  },
  3: {
    Name: "disk",
    Description: "Disk Error",
  },
  4: {
    Name: "video_loss",
    Description: "Camera Signal Loss",
  },
  5: {
    Name: "phone",
    Description: "Phone",
  },
  6: {
    Name: "analog",
    Description: "ANALOG",
  },
  7: {
    Name: "smart",
    Description: "Disk SMART",
  },
  8: {
    Name: "video_recovery",
    Description: "Camera Signal Recovery",
  },
  9: {
    Name: "vca-presence",
    Description: "VCA Presence",
  },
  10: {
    Name: "vca-enter",
    Description: "VCA Enter",
  },
  11: {
    Name: "vca-exit",
    Description: "VCA Exit",
  },
  12: {
    Name: "vca-appear",
    Description: "VCA Appear",
  },
  13: {
    Name: "vca-disappear",
    Description: "VCA Disappear",
  },
  14: {
    Name: "vca-stop",
    Description: "VCA Stop",
  },
  15: {
    Name: "vca-dwell",
    Description: "VCA Dwell",
  },
  16: {
    Name: "vca-direction",
    Description: "VCA Direction",
  },
  17: {
    Name: "vca-speed",
    Description: "VCA Speed",
  },
  18: {
    Name: "vca-area",
    Description: "VCA Area",
  },
  19: {
    Name: "vca-abobj",
    Description: "VCA Abandoned Object",
  },
  20: {
    Name: "vca-rmobj",
    Description: "VCA Removed Object",
  },
  21: {
    Name: "vca-abrmobj",
    Description: "VCA Abandoned / Removed Object",
  },
  22: {
    Name: "vca-tailgating",
    Description: "VCA Tailgating",
  },
  23: {
    Name: "vca-linecountera",
    Description: "VCA Counting Line: Direction A",
  },
  24: {
    Name: "vca-linecounterb",
    Description: "VCA Counting Line: Direction B",
  },
  25: {
    Name: "vca-custom",
    Description: "VCA Custom",
  },
  26: {
    Name: "vca-colfilter",
    Description: "VCA Color Filter",
  },
  27: {
    Name: "vca-smoke",
    Description: "VCA Smoke",
  },
  28: {
    Name: "vca-fire",
    Description: "VCA Fire",
  },
  29: {
    Name: "vca-tamper",
    Description: "VCA Tamper",
  },
  30: {
    Name: "vca-counter",
    Description: "VCA Counter",
  },
  31: {
    Name: "devalarm",
    Description: "Device Alarm",
  },
  32: {
    Name: "emcall",
    Description: "Emergency Call",
  },
  33: {
    Name: "lpr",
    Description: "License Plate Recognition",
  },
  34: {
    Name: "seaky",
    Description: "SEAKY POS",
  },
  35: {
    Name: "elevator",
    Description: "Elevator",
  },
  36: {
    Name: "232pos",
    Description: "POS",
  },
  37: {
    Name: "flame",
    Description: "Flame",
  },
  38: {
    Name: "smoke",
    Description: "Smoke",
  },
  39: {
    Name: "bill",
    Description: "Bill Counter",
  },
  40: {
    Name: "bmetro",
    Description: "Busan Metro",
  },
  41: {
    Name: "audio-detect",
    Description: "Audio Detection",
  },
  42: {
    Name: "axis-vca",
    Description: "Axis VCA",
  },
  43: {
    Name: "safemate",
    Description: "Safe Mate",
  },
  44: {
    Name: "intellivix-vca",
    Description: "IntelliVIX VCA",
  },
  45: {
    Name: "doowon-vca",
    Description: "Doowon VCA",
  },
  46: {
    Name: "thermal",
    Description: "Thermal",
  },
  47: {
    Name: "optex",
    Description: "Section Sensor",
  },
  48: {
    Name: "heartbeat",
    Description: "Heartbeat Sensor",
  },
  49: {
    Name: "wisenet-vca",
    Description: "Wisenet VCA",
  },
  50: {
    Name: "truen-vca",
    Description: "Truen VCA",
  },
  51: {
    Name: "face",
    Description: "Face Recognition",
  },
  52: {
    Name: "michang",
    Description: "MI-CHANG Fire Detection",
  },
  53: {
    Name: "ivs",
    Description: "IVS",
  },
  54: {
    Name: "itx-ai",
    Description: "ITX AI",
  },
  55: {
    Name: "antkr",
    Description: "Entry",
  },
  56: {
    Name: "wisenet-bestshot",
    Description: "Wisenet BestShot",
  },
  57: {
    Name: "ptz_preset",
    Description: "PTZ Preset",
  },
  58: {
    Name: "nexreal-ai",
    Description: "Nexreal AI",
  },
  59: {
    Name: "onvif-va",
    Description: "Onvif VA",
  },
  60: {
    Name: "truen-ai",
    Description: "Truen AI",
  },
  61: {
    Name: "emda-ai",
    Description: "EMSTONE_D AI",
  },
  62: {
    Name: "parking",
    Description: "Parking",
  },
  63: {
    Name: "intellivix-ai",
    Description: "IntelliVIX AI",
  },
  64: {
    Name: "posco-ai",
    Description: "POSCO AI",
  },
  65: {
    Name: "elsworks-ai",
    Description: "HI&TECH AI",
  },
  66: {
    Name: "critical",
    Description: "Critical Event",
  },
  67: {
    Name: "dongbang",
    Description: "Dongbang Fire Detection",
  },
  68: {
    Name: "ycx-ai",
    Description: "YCX AI",
  },
  69: {
    Name: "critical-system",
    Description: "Critical System Event",
  },
  70: {
    Name: "micro-ai",
    Description: "MICROSYSTEM AI",
  },
  71: {
    Name: "avycon",
    Description: "AVYCON",
  },
  72: {
    Name: "tiandy-ai",
    Description: "TIANDY AI",
  },
  73: {
    Name: "kmt-radar",
    Description: "KMT Radar",
  },
  74: {
    Name: "chaja",
    Description: "Chaja",
  },
  75: {
    Name: "nvr-no-response",
    Description: "NVR Server Error (The device might be off-line)",
  },
};

const urlInfos = [
  {
    stadium: "ydp-sky",
    url: "http://ydp-sky-plab-ai.dvrhost.net:10123",
    authInfo: "user=admin&password=plabai0104!",
  },
  {
    stadium: "gadiem",
    url: "http://gadiem-plab-ai.dvrhost.net:10123",
    authInfo: "user=admin&password=plabai0104!",
  },
];

const msgTexts = {
  "ydp-sky": { hourly: "", daily: "" },
  gadiem: { hourly: "", daily: "" },
};

let sendMessage = false;

//parameters
const now = new Date().getTime();
const timeOffset = 1000 * 60 * 60 * 9;
const nowStr = `${new Date(now + timeOffset).toISOString().slice(0, 16)}:00`;
const oneHourAgo = now - 1000 * 60 * 60 * 1 + timeOffset;
const oneHourAgoStr = `${new Date(oneHourAgo).toISOString().slice(0, 16)}:00`;
const oneDayAgo = now - 1000 * 60 * 60 * 24 + timeOffset;
const oneDayAgoStr = `${new Date(oneDayAgo).toISOString().slice(0, 16)}:00`;

console.log("now:", now);
console.log("oneHourAgoStr:", oneHourAgoStr);
console.log("oneDayAgoStr:", oneDayAgoStr);

// 자피어에 넣을 때에는 코멘트
// let output = {};

for (const urlInfo of urlInfos) {
  let cnt = 0;
  if (nowStr.slice(11, 13) === "00") {
    sendMessage = true;

    //if now is 00:00:00
    try {
      [msgTexts[urlInfo.stadium].daily, cnt] = await getEvetnsSince(
        urlInfo,
        oneDayAgoStr,
        nowStr,
        "daily"
      );
    } catch (e) {
      console.log(e);
      msgTexts[urlInfo.stadium].daily = "🚨Error 서버 응답 없음";
    }
  }

  if (msgTexts[urlInfo.stadium].daily === "🚨Error 서버 응답 없음") continue;

  try {
    [msgTexts[urlInfo.stadium].hourly, cnt] = await getEvetnsSince(
      urlInfo,
      oneHourAgoStr,
      nowStr,
      "hourly"
    );
    if (cnt > 0) sendMessage = true;
  } catch (e) {
    console.log(e);
    msgTexts[urlInfo.stadium].hourly = "🚨Error 서버 응답 없음";
    sendMessage = true;
  }
}

output = { ...msgTexts, sendMessage };
console.log("output\n", output);

////////// Functions //////////

// 이벤트를 받는 함수
async function getEvetnsSince(urlInfo, timeStr, nowStr, type) {
  const resJson = await getEvents(urlInfo.url, timeStr, urlInfo.authInfo);
  const message = getMessage(timeStr, nowStr, resJson, type);
  if (message === null) return ["", resJson.total];
  return [message, resJson.total];
}

// 이벤트 조회 요청 함수
async function getEvents(url, timeStr, authInfo) {
  console.log(
    `fetching...: ${url}/api/events?since=${timeStr}&total=1&limit=1000&${authInfo}`
  );
  const res = await fetch(
    `${url}/api/events?since=${timeStr}&total=1&limit=1000&${authInfo}`,
    { signal: AbortSignal.timeout(5000) }
  );

  //if status is not 200
  if (res.status !== 200) {
    return {
      total: 1,
      events: [{ type: 75, timestamp: now / 1000, rowid: 1, devices: ["-1"] }],
    };
  }

  const resJson = await res.json();
  console.log("resJson:", resJson);
  return resJson;
}

// 메세지 생성 함수
function getMessage(timeStr, nowStr, res, type) {
  const resultStr =
    type === "hourly"
      ? `*${timeStr.slice(11, 16)} ~ ${nowStr.slice(11, 16)}*`
      : `*${timeStr.slice(0, 16).split("T").join(" ")} ~ ${nowStr
          .slice(0, 16)
          .split("T")
          .join(" ")}*`;

  if (res.total === 0) {
    return `${resultStr}: ✅ 특이사항 없음`;
  } else {
    return `${resultStr}: 🚨 특이사항 ${
      res.total
    }개 발생! @channel\n${getThread(res)}`;
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
  const eventsSummaryStr = [...new Set(eventsSummary)].join("\n");
  return `${eventsSummaryStr.slice(0, 1500)} ${
    eventsSummaryStr.length > 1500
      ? `... \n\n+ ${eventsSummary.length - 26}개 이벤트`
      : ""
  }
    `;
}

//////////////////////////
