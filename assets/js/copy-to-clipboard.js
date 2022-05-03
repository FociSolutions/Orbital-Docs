/**
 * Adapted from https://github.com/marcoaugustoandrade/jekyll-clipboardjs
 */

document.addEventListener("DOMContentLoaded", function (event) {
  let codes = document.querySelectorAll("code");
  let countID = 0;

  codes.forEach((code) => {
    console.log("Located code block", code);

    code.setAttribute("id", "code" + countID);

    let btn = document.createElement("button");
    btn.innerHTML = "Copy";
    btn.className = "btn-copy";
    btn.setAttribute("data-clipboard-action", "copy");
    btn.setAttribute("data-clipboard-target", "#code" + countID);

    let div = document.createElement("div");
    div.appendChild(btn);

    code.before(div);

    countID++;
  });

  new ClipboardJS(".btn-copy");
});
