document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("completed");
    initApp();
  }
});

const initApp = () => {
  const body = document.querySelector("body");
  const h1 = body.querySelector("#h1");
  const but = body.querySelector("button");
  but.addEventListener("mouseover", (event) => {
    event.target.classList.add("button");
  });
  but.addEventListener("mouseout", (event) => {
    event.target.classList.remove("button");
  });
  but.addEventListener("click", () => {
    const backNum = Math.floor(Math.random() * 900) + 100;
    let back = `#${backNum}`;
    body.style.backgroundColor = back;
  });
};
