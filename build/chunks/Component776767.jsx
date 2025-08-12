/** Chunk was on 873 **/
/** chunk id: 776767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Mn: () => o,
  WM: () => c,
  _2: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk63177 = require("./63177.js");
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
  return (0, r.jsxs)(i.P3F, {
    onClick: u,
    className: s()(a.modInfoItem, null != u && a.modInfoAction, c),
    children: [null != l && (0, r.jsx)("div", {
      className: a.modInfoItemIcon,
      children: l
    }), null != n && (0, r.jsx)("div", {
      className: a.modInfoItemName,
      children: n
    }), (0, r.jsx)("div", {
      className: a.modInfoItemDescription,
      children: t
    }), null != u && (0, r.jsx)("div", {
      className: a.modInfoItemActionIcon,
      children: (0, r.jsx)(i.LJT, {
        size: "custom",
        width: o,
        height: o
      })
    }), null == u && null != E && (0, r.jsx)("div", {
      className: a.modInfoItemActionIcon,
      children: E
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: a.modInfoItemContainer,
    children: t
  })
}