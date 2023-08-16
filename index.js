const res = fetch("http://ydp-sky.stadium.refutsal.com/api/events/notify").then(
  (response) => {
    console.log(response.headers);
    return response
  }
)

res.onmessage = (event) => {
  console.log(event.data);
}

res.addEventListener("ping", (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping at ${time}`;
  eventList.appendChild(newElement);
});

// const evtSource = new EventSource("http://ydp-sky.stadium.refutsal.com/api/events/notify", {
//   withCredentials: false,
// });

// evtSource.onmessage = (event) => {
//   const newElement = document.createElement("li");
//   const eventList = document.getElementById("list");

//   newElement.textContent = `message: ${event.data}`;
//   eventList.appendChild(newElement);
// };