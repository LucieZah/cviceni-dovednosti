const html = prompt("Zadejte svou uroven znalosti HTML na urovni 0-100", "10")
const css = prompt("Zadejte svou uroven znalosti CSS na urovni 0-100", "70")
const javaScript = prompt("Zadejte svou uroven znalosti JavaScriptu na urovni 0-100", "100")

const updateSkill = (selector, value) => {
    const skillProgress = document.querySelector(selector + " .skill__progress")
    skillProgress.style.width = value + "%"
    const skillValue = document.querySelector(selector + " .skill__value")
    skillValue.innerHTML = value + "/100"
}

updateSkill("#skill1", html)
updateSkill("#skill2", css)
updateSkill("#skill3", javaScript)
