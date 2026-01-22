/** Chunk was on 28636 **/
/** chunk id: 559607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk873523 = require("./873523.js");
let p = (0, Chunk985018.getAvailableLocales)();

function h(e) {
  let {
    application: t,
    className: n
  } = e, r = (0, s.bG)([o.default], () => o.default.locale), {
    supportedLanguages: h,
    usersLanguageIsFirst: m
  } = a.useMemo(() => {
    var e;
    if ((null == (e = t.directory_entry) ? true : e.supported_locales) != null) {
      let e = new Set(t.directory_entry.supported_locales),
        n = e.has(r),
        l = p.filter(t => e.has(t.value));
      return n && l.sort((e, t) => e.value === r ? false : +(t.value === r)), {
        supportedLanguages: l.map(e => d.intl.string(e.localizedName)),
        usersLanguageIsFirst: n
      }
    }
    return {
      supportedLanguages: [],
      usersLanguageIsFirst: false
    }
  }, [t.directory_entry, r]);
  return (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsx)(c.Heading, {
      variant: "heading-sm/semibold",
      color: "text-strong",
      children: d.intl.string(d.t.Fbjlu3)
    }), (0, l.jsx)("ul", {
      className: u.nw,
      children: h.map((e, t) => (0, l.jsx)("li", {
        className: i()(u.WH, u.O6),
        children: (0, l.jsx)(c.Text, {
          variant: 0 === t && m ? "text-sm/bold" : "text-sm/normal",
          children: e
        })
      }, e))
    }), " "]
  })
}