const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");

const screenmax = () => {
  if (screen.textContent.length > 15) {
    alert("Please put just 15 number");
    location.reload();
  }
};

let p = "";
let m = "";
let d = "";
let mu = "";
btn.forEach((en) => {
  en.addEventListener("click", () => {
    let val = en.textContent;
    let screenText = screen.textContent;
    const reg = /^\d+$/;
    screenmax();
    if (Number(val) || val == "0") {
      screen.innerText += en.textContent;
    }

    switch (val) {
      case "+":
        if (p == "") {
            p = screenText;
            screen.innerText = "";
        }
        break;
      case "-":
        if (m == "") {
            m = screenText;
            screen.innerText = "";
        }
        break;
        case "x":
            if (mu == "") {
                mu = screenText;
                screen.innerText = "";
            }
            break;
            case "÷":
                if (d == "") {
                    d = screenText;
                    screen.innerText = "";
                }
            break;
            case "C":
            d = 0;
            p = 0;
            m = 0;
            mu = 0;
            screen.innerText = "";
            break;
      case "←":
        screen.innerText = screenText.slice(0, screenText.length - 1);
        break;
      default:
        break;
    }

    if (val == "=") {
      if (p != "") {
        screen.innerText = Number(p) + Number(screenText);
        p = 0;
      }
      if (m != "") {
        screen.innerText = Number(m) - Number(screenText);
        m = 0;
      }
      if (mu != "") {
        screen.innerText = Number(mu) * Number(screenText);
        mu = 0;
      }
      if (d != "") {
        screen.innerText = Number(d) / Number(screenText);
        d = 0;
      }
    }
  });
});
