const btnEl = document.getElementById("btn");
const h2El = document.getElementById("text");

btnEl.addEventListener("click", (_e) => {
    setTimeout(() => {
        h2El.innerHTML = "ボタンをクリックしました";
    }, 2000);
});
