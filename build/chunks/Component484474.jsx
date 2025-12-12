/** Chunk was on 69844 **/
/** chunk id: 484474, original params: e,t,n (module,exports,require) **/
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
  Chunk196073 = require("./196073.js");

function p(e) {
  let {
    title: t,
    betaTag: n,
    color: i = "text-strong"
  } = e;
  return (0, r.jsxs)(o.Heading, {
    className: l()(u.title, u.uppercase),
    variant: "display-lg",
    color: i,
    children: [t, n && (0, r.jsx)(d.Z, {
      className: u.betaTag
    })]
  })
}

function m(e) {
  let {
    title: t,
    titleColor: n,
    description: a,
    button: d,
    className: m,
    children: h,
    betaTag: g = false
  } = e, f = (0, c.ZP)(), _ = (0, s.wj)(f), b = i.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, r.jsx)(p, {
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
        children: [b, null != a && (0, r.jsx)(o.Text, {
          className: u.description,
          variant: "text-md/medium",
          color: _ ? "text-muted" : "text-strong",
          children: a
        }), null != d && (0, r.jsx)("div", {
          className: u.buttonContainer,
          children: d
        })]
      })
    }), h]
  })
}