// Adds on-screen controls for mobile / touch
export function handleInput(keys) {
  const left = document.createElement("button");
  const right = document.createElement("button");
  const jump = document.createElement("button");

  [left, right, jump].forEach(btn => {
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.width = "60px";
    btn.style.height = "60px";
    btn.style.borderRadius = "50%";
    btn.style.border = "none";
    btn.style.opacity = "0.4";
    btn.style.zIndex = "10";
  });

  left.style.left = "20px";
  left.innerText = "◀";
  right.style.left = "100px";
  right.innerText = "▶";
  jump.style.right = "20px";
  jump.innerText = "⤴";

  document.body.append(left, right, jump);

  left.onpointerdown = () => (keys["ArrowLeft"] = true);
  left.onpointerup = () => (keys["ArrowLeft"] = false);
  right.onpointerdown = () => (keys["ArrowRight"] = true);
  right.onpointerup = () => (keys["ArrowRight"] = false);
  jump.onpointerdown = () => (keys["ArrowUp"] = true);
  jump.onpointerup = () => (keys["ArrowUp"] = false);
}
