/** Chunk was on 92504 **/
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
  Chunk670837 = require("./670837.js");

function p(e) {
  let {
    title: t,
    betaTag: n,
    color: r = "text-strong"
  } = e;
  return (0, a.jsxs)(o.Heading, {
    className: l()(u.title, u.uppercase),
    variant: "display-lg",
    color: r,
    children: [t, n && (0, a.jsx)(d.Z, {
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
    betaTag: f = false
  } = e, g = (0, c.ZP)(), b = (0, s.wj)(g), x = r.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, a.jsx)(p, {
    title: e,
    betaTag: f,
    color: n
  }, t)) : (0, a.jsx)(p, {
    title: t,
    betaTag: f,
    color: n
  }), [t, f, n]);
  return (0, a.jsxs)("div", {
    className: l()(u.container, m),
    children: [(0, a.jsx)("div", {
      className: u.content,
      children: (0, a.jsxs)("div", {
        className: u.textContainer,
        children: [x, null != i && (0, a.jsx)(o.Text, {
          className: u.description,
          variant: "text-md/medium",
          color: b ? "text-muted" : "text-strong",
          children: i
        }), null != d && (0, a.jsx)("div", {
          className: u.buttonContainer,
          children: d
        })]
      })
    }), h]
  })
}