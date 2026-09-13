// shared site header: profile chip top right + dropdown menu
(function () {
  const ICONS = {
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.03 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.01A1.7 1.7 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.01c.26.62.86 1.03 1.56 1.03H21a2 2 0 1 1 0 4h-.09c-.7 0-1.3.41-1.51 1.03z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
    person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20.5c.8-3.4 3.6-5.3 7-5.3s6.2 1.9 7 5.3"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  };

  const header = document.createElement("header");
  header.className = "site-head";
  header.innerHTML =
    '<div style="position:relative">' +
      '<button class="profile" id="profile-btn" aria-haspopup="menu" aria-expanded="false">' +
        '<span class="avatar">MV</span>' +
        '<span class="who"><strong>Mads Vendelbo</strong></span>' +
      '</button>' +
      '<div class="menu" id="profile-menu" role="menu">' +
        '<a class="menu-item" href="#" role="menuitem">' + ICONS.gear + 'Settings<kbd>&#8984;/</kbd></a>' +
        '<div class="menu-sep"></div>' +
        '<a class="menu-item" href="/" role="menuitem">' + ICONS.home + 'Home</a>' +
        '<a class="menu-item" href="/about" role="menuitem">' + ICONS.person + 'About</a>' +
        '<a class="menu-item" href="#" role="menuitem">' + ICONS.doc + 'CV</a>' +
        '<a class="menu-item" href="/contact" role="menuitem">' + ICONS.mail + 'Email</a>' +
      '</div>' +
    '</div>';

  document.body.prepend(header);

  const btn = header.querySelector("#profile-btn");
  const menu = header.querySelector("#profile-menu");

  function setOpen(open) {
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!menu.classList.contains("open"));
  });

  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
    if ((e.metaKey || e.ctrlKey) && e.key === "/") {
      e.preventDefault();
      setOpen(!menu.classList.contains("open"));
    }
  });
})();
