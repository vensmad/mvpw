// Figma-style "You" cursor, follows the mouse site-wide
(function () {
  // skip touch-only devices
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const style = document.createElement("style");
  style.textContent = `
    *, a, button, [role="button"] { cursor: none !important; }
    #you-cursor {
      position: fixed;
      left: 0; top: 0;
      z-index: 99999;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease;
    }
    #you-cursor.on { opacity: 1; }
    #you-cursor .tag {
      position: absolute;
      left: 13px;
      top: 16px;
      background: #f4501e;
      color: #fff;
      font-family: "Inter", -apple-system, sans-serif;
      font-size: 12.5px;
      font-weight: 600;
      padding: 4px 11px;
      border-radius: 999px;
      white-space: nowrap;
      box-shadow: 0 1px 4px rgba(0,0,0,0.18);
    }
  `;
  document.head.appendChild(style);

  const cur = document.createElement("div");
  cur.id = "you-cursor";
  cur.innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24">' +
      '<path d="M4 2 L18.5 10.8 L11.3 12.2 L7.6 18.8 Z" fill="#f4501e" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>' +
    '</svg>' +
    '<span class="tag">You</span>';
  document.body.appendChild(cur);

  const tag = cur.querySelector(".tag");
  window.addEventListener("mousemove", (e) => {
    cur.style.transform = "translate3d(" + (e.clientX - 3) + "px," + (e.clientY - 2) + "px,0)";
    cur.classList.add("on");
    const tile = e.target && e.target.closest ? e.target.closest("[data-name]") : null;
    tag.textContent = tile ? tile.dataset.name : "You";
  }, { passive: true });

  document.addEventListener("mouseleave", () => cur.classList.remove("on"));
  document.addEventListener("mouseenter", () => cur.classList.add("on"));
})();
