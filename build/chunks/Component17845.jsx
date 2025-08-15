/** Chunk was on 32561 **/
/** chunk id: 17845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk196073 = require("./196073.js");

function p(e) {
  let {
    title: t,
    betaTag: n
  } = e;
  return (0, r.jsxs)(o.X6q, {
    className: l()(u.title, u.uppercase),
    variant: "display-lg",
    color: "header-primary",
    children: [t, n && (0, r.jsx)(d.Z, {
      className: u.betaTag
    })]
  })
}

function m(e) {
  let {
    title: t,
    description: n,
    button: i,
    className: d,
    children: m,
    betaTag: h = false
  } = e, g = (0, c.ZP)(), f = (0, s.wj)(g), _ = a.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, r.jsx)(p, {
    title: e,
    betaTag: h
  }, t)) : (0, r.jsx)(p, {
    title: t,
    betaTag: h
  }), [t, h]);
  return (0, r.jsxs)("div", {
    className: l()(u.container, d),
    children: [(0, r.jsx)("div", {
      className: u.content,
      children: (0, r.jsxs)("div", {
        className: u.textContainer,
        children: [_, null != n && (0, r.jsx)(o.Text, {
          className: u.description,
          variant: "text-md/medium",
          color: f ? "text-muted" : "header-primary",
          children: n
        }), null != i && (0, r.jsx)("div", {
          className: u.buttonContainer,
          children: i
        })]
      })
    }), m]
  })
}