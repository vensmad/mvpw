// shared site footer: location · temp · clock, message, links
(function () {
  const footer = document.createElement("footer");
  footer.innerHTML =
    '<span><span class="script-city">Copenhagen</span><span id="ft-temp"></span>&nbsp;&nbsp;<span id="ft-clock">--:--:--</span></span>' +
    '<span class="links">' +
      '<a href="#">LinkedIn</a>' +      // TODO: real URLs
      '<a href="#">Instagram</a>' +
      '<a href="#">CV</a>' +
    '</span>';
  document.body.appendChild(footer);

  const clock = footer.querySelector("#ft-clock");
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Copenhagen", hour: "2-digit", minute: "2-digit", second: "2-digit" });
  (function tick() { clock.textContent = fmt.format(new Date()); setTimeout(tick, 1000); })();

  fetch("https://api.open-meteo.com/v1/forecast?latitude=55.68&longitude=12.57&current=temperature_2m")
    .then(r => r.json())
    .then(d => {
      const t = Math.round(d.current.temperature_2m);
      footer.querySelector("#ft-temp").innerHTML = "&nbsp;&nbsp;" + t + "&deg;C";
    })
    .catch(() => {});
})();
