// SVG
const eventMap = document.querySelector(".event-map");

if (eventMap) {
  const firstDetails = document.querySelector("#details-first");
  const secondDetails = document.querySelector("#details-second");
  const thirdDetails = document.querySelector("#details-third");

  function updateSvgPosition() {
    const openDetails = document.querySelector(".accordion-item[open]");

    if (openDetails) {
      eventMap.dataset.position = openDetails.dataset.position;
    } else {
      delete eventMap.dataset.position;
    }
  }

  firstDetails.addEventListener("toggle", updateSvgPosition);
  secondDetails.addEventListener("toggle", updateSvgPosition);
  thirdDetails.addEventListener("toggle", updateSvgPosition);
}

// Opsamling
const eventPass = document.querySelector(".event-pass");

if (eventPass) {
  const nicknameOutput = document.querySelector(".nickname");
  const chipOne = document.querySelector(".chip-one");
  const chipTwo = document.querySelector(".chip-two");
  const chipThree = document.querySelector(".chip-three");
  const reasonOutput = document.querySelector(".reason-output");
  const hypeLevel = document.querySelector(".hype-level");
  const copyLinkButton = document.querySelector(".copy-link-button");
  const copyStatus = document.querySelector(".copy-status");

  const params = new URLSearchParams(window.location.search);

  const nickname = params.get("nickname");
  const reason = params.get("reason");
  const color = params.get("color");
  const style = params.get("style");
  const interests = params.getAll("interest");
  const hypeValue = params.get("slider");

  eventPass.dataset.color = color;
  eventPass.dataset.style = style;

  nicknameOutput.textContent = nickname;

  if (reason === "inspiration") {
    reasonOutput.textContent = "Ny inspiration";
  } else if (reason === "tools") {
    reasonOutput.textContent = "Praktiske værktøjer";
  } else if (reason === "network") {
    reasonOutput.textContent = "Nye kontakter";
  } else {
    reasonOutput.textContent = "Ikke valgt";
  }

  chipOne.textContent = interests[0] || "";
  chipTwo.textContent = interests[1] || "";
  chipThree.textContent = interests[2] || "";

  if (hypeValue >= 75) {
    hypeLevel.textContent = "Crazy";
  } else if (hypeValue >= 50) {
    hypeLevel.textContent = "Moderat";
  } else if (hypeValue >= 25) {
    hypeLevel.textContent = "Kedelig";
  } else {
    hypeLevel.textContent = "Tvunget af chefen, så nej!";
  }

  copyLinkButton.addEventListener("click", function () {
    navigator.clipboard.writeText(window.location.href);
    copyStatus.textContent = "Linket er kopieret";
  });
}
