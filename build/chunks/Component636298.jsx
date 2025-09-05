/** Chunk was on 47129 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk861066 = require("./861066.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214779 = require("./214779.js");

function y(e) {
  let {
    icon: t,
    label: n,
    onClick: i
  } = e;
  return (0, r.jsx)(a.h, {
    onClick: i,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function O(e) {
  let {
    title: t,
    onClose: n
  } = e, {
    setShowNavigationMobile: i
  } = (0, c.t)();
  return (0, r.jsxs)("div", {
    className: f.contentHeader,
    children: [(0, r.jsxs)("div", {
      className: f.contentHeaderLeft,
      children: [s.tq && (0, r.jsx)(y, {
        icon: u.yFM,
        onClick: () => i(true),
        label: g.intl.string(g.t["13/7kZ"])
      }), (0, r.jsx)(u.X6q, {
        variant: "heading-md/normal",
        color: "header-secondary",
        children: t
      })]
    }), (0, r.jsx)(y, {
      icon: u.Uz9,
      onClick: n,
      label: g.intl.string(g.t.cpT0Cg)
    })]
  })
}
let v = Chunk647438.memo(function(e) {
  let {
    onClose: t,
    setting: n
  } = e, i = null == n ? true : n.useTitle(), {
    showNavigationMobile: l
  } = (0, c.t)();
  return (0, r.jsxs)("div", {
    className: o()(f.content, {
      [f.mobile]: s.tq,
      [f.mobileNavigationOpen]: l
    }),
    children: [(0, r.jsx)(O, {
      title: i,
      onClose: t
    }), (0, r.jsx)("div", {
      className: f.contentBody,
      children: null != n && (0, r.jsx)(d.Z, {
        node: n
      })
    })]
  })
})