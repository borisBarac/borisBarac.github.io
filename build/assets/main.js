(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};
  var links = cfg.links || {};

  var bindings = {
    brand: cfg.brand,
    email: cfg.email,
    home: links.home,
    contact: links.contact,
    linkedin: links.linkedin,
    github: links.github,
    blog: links.blog,
    sourceCode: links.sourceCode,
    profileDesc: window.PROFILE_DESC,
  };

  // HTML bindings (opt-in via data-bind-html). Injects markup, so only use
  // for trusted config values authored alongside this file.
  var htmlBindings = {
    profileHero: window.PROFILE_HERO,
  };

  // Keep document.title in sync with config (brand + role) — home page only,
  // so we don't clobber page-specific titles like contact.html's.
  if (window.PROFILE_ROLE && document.getElementById("md-content")) {
    document.title = cfg.brand + " — " + window.PROFILE_ROLE;
  }

  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var key = el.getAttribute("data-bind");
    var value = bindings[key];
    if (value == null) return;
    if (el.tagName === "A") {
      if (key === "brand") {
        el.textContent = value;
      } else {
        el.setAttribute("href", key === "email" ? "mailto:" + value : value);
      }
    } else {
      el.textContent = value;
    }
  });

  // HTML bindings (data-bind-html) — injects trusted markup from config.
  document.querySelectorAll("[data-bind-html]").forEach(function (el) {
    var key = el.getAttribute("data-bind-html");
    var value = htmlBindings[key];
    if (value == null) return;
    el.innerHTML = value;
  });

  // Mark external link targets (LinkedIn / GitHub / Blog / Source) as new tabs.
  ["linkedin", "github", "blog", "sourceCode"].forEach(function (key) {
    document.querySelectorAll('[data-bind="' + key + '"]').forEach(function (el) {
      if (el.tagName === "A" && /^(https?:)?\/\//i.test(el.getAttribute("href") || "")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });
  });

  // Mobile nav toggle.
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-nav-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-locked", open);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-locked");
      });
    });
  }

  // Terminal cursor focus states (contact form).
  document.querySelectorAll(".terminal-input").forEach(function (input) {
    var cursor = input.nextElementSibling;
    input.addEventListener("focus", function () {
      if (cursor && cursor.classList.contains("cursor")) {
        cursor.classList.remove("is-hidden");
      }
    });
    input.addEventListener("blur", function () {
      if (cursor && cursor.classList.contains("cursor")) {
        cursor.classList.add("is-hidden");
      }
    });
  });

  // Contact form -> mailto: built from the config email + field contents.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = ((document.getElementById("name") || {}).value || "").trim();
      var from = ((document.getElementById("email") || {}).value || "").trim();
      var message = ((document.getElementById("message") || {}).value || "").trim();
      var subject = encodeURIComponent("Portfolio contact" + (name ? " — " + name : ""));
      var body = encodeURIComponent(
        (name ? "Name: " + name + "\n" : "") +
          (from ? "Email: " + from + "\n" : "") +
          "\n" +
          message
      );
      window.location.href = "mailto:" + cfg.email + "?subject=" + subject + "&body=" + body;
    });
  }

  // Render profile markdown into #md-content (home page only).
  var mdEl = document.getElementById("md-content");
  if (mdEl && typeof window.PROFILE_MD === "string") {
    if (window.marked && typeof marked.parse === "function") {
      mdEl.innerHTML = marked.parse(window.PROFILE_MD, { breaks: false, gfm: true });
      // Open external links rendered from the markdown in a new tab.
      mdEl.querySelectorAll('a[href^="http"]').forEach(function (a) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      });
    } else {
      // No parser available — fall back to plain preformatted text.
      var pre = document.createElement("pre");
      pre.textContent = window.PROFILE_MD;
      mdEl.replaceChildren(pre);
    }
  }
})();
