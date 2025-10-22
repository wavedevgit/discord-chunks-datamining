/** Chunk was on 84283 **/
/** chunk id: 953989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk649912 = require("./649912.js");
let p = (0, Chunk388032.getAvailableLocales)();

function m(e) {
  let {
    application: t,
    className: n
  } = e, i = (0, s.e7)([c.default], () => c.default.locale), {
    supportedLanguages: m,
    usersLanguageIsFirst: h
  } = a.useMemo(() => {
    var e;
    if ((null == (e = t.directory_entry) ? true : e.supported_locales) != null) {
      let e = new Set(t.directory_entry.supported_locales),
        n = e.has(i),
        r = p.filter(t => e.has(t.value));
      return n && r.sort((e, t) => e.value === i ? false : +(t.value === i)), {
        supportedLanguages: r.map(e => d.intl.string(e.localizedName)),
        usersLanguageIsFirst: n
      }
    }
    return {
      supportedLanguages: [],
      usersLanguageIsFirst: false
    }
  }, [t.directory_entry, i]);
  return (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      children: d.intl.string(d.t.Fbjlu3)
    }), (0, r.jsx)("ul", {
      className: u.outerContainer,
      children: m.map((e, t) => (0, r.jsx)("li", {
        className: l()(u.innerContainer, u.languageItem),
        children: (0, r.jsx)(o.Text, {
          variant: 0 === t && h ? "text-sm/bold" : "text-sm/normal",
          children: e
        })
      }, e))
    }), " "]
  })
}