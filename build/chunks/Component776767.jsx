/** Chunk was on 66201 **/
/** chunk id: 776767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Mn: () => o,
  WM: () => c,
  _2: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk608586 = require("./608586.js");
let o = 16;

function u(e) {
  let {
    description: t,
    name: n,
    icon: l,
    onNavigate: u,
    className: c,
    missingNavIcon: E
  } = e;
  return (0, r.jsxs)(a.P3F, {
    onClick: u,
    className: i()(s.modInfoItem, null != u && s.modInfoAction, c),
    children: [null != l && (0, r.jsx)("div", {
      className: s.modInfoItemIcon,
      children: l
    }), null != n && (0, r.jsx)("div", {
      className: s.modInfoItemName,
      children: n
    }), (0, r.jsx)("div", {
      className: s.modInfoItemDescription,
      children: t
    }), null != u && (0, r.jsx)("div", {
      className: s.modInfoItemActionIcon,
      children: (0, r.jsx)(a.LJT, {
        size: "custom",
        width: o,
        height: o
      })
    }), null == u && null != E && (0, r.jsx)("div", {
      className: s.modInfoItemActionIcon,
      children: E
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: s.modInfoItemContainer,
    children: t
  })
}