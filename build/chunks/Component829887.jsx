/** Chunk was on 94503 **/
/** chunk id: 829887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RU: () => c,
  SQ: () => u,
  mb: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk100411 = require("./100411.js");
let o = 16;

function c(e) {
  let {
    description: t,
    name: n,
    icon: r,
    onNavigate: c,
    className: u,
    missingNavIcon: E
  } = e;
  return (0, l.jsxs)(i.DUT, {
    onClick: c,
    className: a()(s.ol, null != c && s.xO, u),
    children: [null != r && (0, l.jsx)("div", {
      className: s.bl,
      children: r
    }), null != n && (0, l.jsx)("div", {
      className: s.NR,
      children: n
    }), (0, l.jsx)("div", {
      className: s.uV,
      children: t
    }), null != c && (0, l.jsx)("div", {
      className: s.Rp,
      children: (0, l.jsx)(i.uhT, {
        size: "custom",
        width: o,
        height: o
      })
    }), null == c && null != E && (0, l.jsx)("div", {
      className: s.Rp,
      children: E
    })]
  })
}

function u(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: s.Fz,
    children: t
  })
}