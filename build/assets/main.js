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
    twitter: links.twitter,
    sourceCode: links.sourceCode,
  };

  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var key = el.getAttribute("data-bind");
    var value = bindings[key];
    if (value == null) return;
    if (el.tagName === "A") {
      el.setAttribute("href", key === "email" ? "mailto:" + value : value);
    } else {
      el.textContent = value;
    }
  });

  // Mark external link targets (LinkedIn / GitHub / Twitter / Source) as new tabs.
  ["linkedin", "github", "twitter", "sourceCode"].forEach(function (key) {
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
})();
