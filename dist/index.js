import { jsxs, jsx } from 'preact/jsx-runtime';

// src/i18n/locales/en-US.ts
var en_US_default = {
  components: {
    footer: {
      createdWith: "Created with"
    }
  }
};

// src/i18n/index.ts
var locales = {
  "en-US": en_US_default
};
function i18n(locale) {
  return locales[locale] || en_US_default;
}

// src/components/styles/footer.scss
var footer_default = "footer {\n  text-align: left;\n  margin-bottom: 4rem;\n  opacity: 0.7;\n}\nfooter ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  margin-top: -1rem;\n}";
var Footer_default = ((opts) => {
  const Footer = ({ displayClass, cfg }) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const links = opts?.links ?? [];
    return /* @__PURE__ */ jsxs("footer", { class: `${displayClass ?? ""}`, children: [
      /* @__PURE__ */ jsxs("p", { children: [
        i18n(cfg?.locale ?? "en-US").components.footer.createdWith,
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://quartz.jzhao.xyz/", children: "Quartz" }),
        " \xA9 ",
        year
      ] }),
      /* @__PURE__ */ jsx("ul", { children: Object.entries(links).map(([text, link]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link, children: text }) })) })
    ] });
  };
  Footer.css = footer_default;
  return Footer;
});

export { Footer_default as Footer };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map