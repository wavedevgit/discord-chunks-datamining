/** Chunk was on 84283 **/
/** chunk id: 17845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk795396 = require("./795396.js");

function p(e) {
  let {
    title: t,
    betaTag: n,
    color: a = "header-primary"
  } = e;
  return (0, r.jsxs)(o.Heading, {
    className: l()(u.title, u.uppercase),
    variant: "display-lg",
    color: a,
    children: [t, n && (0, r.jsx)(d.Z, {
      className: u.betaTag
    })]
  })
}

function m(e) {
  let {
    title: t,
    titleColor: n,
    description: i,
    button: d,
    className: m,
    children: h,
    betaTag: g = false
  } = e, _ = (0, c.ZP)(), f = (0, s.wj)(_), b = a.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, r.jsx)(p, {
    title: e,
    betaTag: g,
    color: n
  }, t)) : (0, r.jsx)(p, {
    title: t,
    betaTag: g,
    color: n
  }), [t, g, n]);
  return (0, r.jsxs)("div", {
    className: l()(u.container, m),
    children: [(0, r.jsx)("div", {
      className: u.content,
      children: (0, r.jsxs)("div", {
        className: u.textContainer,
        children: [b, null != i && (0, r.jsx)(o.Text, {
          className: u.description,
          variant: "text-md/medium",
          color: f ? "text-muted" : "header-primary",
          children: i
        }), null != d && (0, r.jsx)("div", {
          className: u.buttonContainer,
          children: d
        })]
      })
    }), h]
  })
}