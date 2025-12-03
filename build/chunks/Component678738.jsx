/** Chunk was on web.js **/
/** chunk id: 678738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk729392 = require("./729392.js");

function f(e) {
  let {
    children: t,
    heading: n,
    headingIcon: a,
    introText: f,
    className: p,
    scrollIntoView: _ = false,
    headingClassName: m,
    headingVariant: h = "text-xs/semibold",
    headingColor: g = "text-default"
  } = e, E = (0, u.Dt)(), b = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), y = i.useRef(null);
  return i.useEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: b ? "auto" : "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [b]), (0, r.jsxs)("section", {
    ref: _ ? y : true,
    className: o()(d.section, p),
    "aria-labelledby": null != n ? E : true,
    children: [null != n && (0, r.jsxs)("div", {
      className: d.headings,
      children: [(0, r.jsxs)("div", {
        className: d.header,
        children: [(0, r.jsx)(l.Heading, {
          variant: h,
          color: g,
          className: m,
          id: E,
          children: n
        }), a]
      }), null != f && (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: f
      })]
    }), (0, r.jsx)(l.y5t, {
      children: t
    })]
  })
}