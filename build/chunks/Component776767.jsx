/** Chunk was on 12630 **/
/** chunk id: 776767, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Mn: () => s,
  WM: () => g,
  _2: () => o
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk938556 = require("./938556.js");
let s = 16;

function o(A) {
  let {
    description: e,
    name: t,
    icon: r,
    onNavigate: o,
    className: g,
    missingNavIcon: c
  } = A;
  return (0, n.jsxs)(i.P3F, {
    onClick: o,
    className: l()(a.modInfoItem, null != o && a.modInfoAction, g),
    children: [null != r && (0, n.jsx)("div", {
      className: a.modInfoItemIcon,
      children: r
    }), null != t && (0, n.jsx)("div", {
      className: a.modInfoItemName,
      children: t
    }), (0, n.jsx)("div", {
      className: a.modInfoItemDescription,
      children: e
    }), null != o && (0, n.jsx)("div", {
      className: a.modInfoItemActionIcon,
      children: (0, n.jsx)(i.LJT, {
        size: "custom",
        width: s,
        height: s
      })
    }), null == o && null != c && (0, n.jsx)("div", {
      className: a.modInfoItemActionIcon,
      children: c
    })]
  })
}

function g(A) {
  let {
    children: e
  } = A;
  return (0, n.jsx)("div", {
    className: a.modInfoItemContainer,
    children: e
  })
}