/** Chunk was on 36878 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function v(e) {
  let {
    icon: t,
    label: n,
    onClick: l
  } = e;
  return (0, i.jsx)(a.h, {
    onClick: l,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function b(e) {
  let {
    title: t,
    onClose: n
  } = e, {
    setShowNavigationMobile: l
  } = (0, c.t)();
  return (0, i.jsxs)("div", {
    className: g.contentHeader,
    children: [(0, i.jsxs)("div", {
      className: g.contentHeaderLeft,
      children: [s.tq && (0, i.jsx)(v, {
        icon: u.yFM,
        onClick: () => l(true),
        label: f.intl.string(f.t["13/7kZ"])
      }), (0, i.jsx)(u.X6q, {
        variant: "heading-md/normal",
        color: "header-secondary",
        children: t
      })]
    }), !s.tq && (0, i.jsx)(v, {
      icon: u.Uz9,
      onClick: n,
      label: f.intl.string(f.t.cpT0Cg)
    })]
  })
}
let m = Chunk647438.memo(function(e) {
  let {
    onClose: t,
    setting: n
  } = e, l = null == n ? true : n.useTitle(), {
    showNavigationMobile: r
  } = (0, c.t)();
  return (0, i.jsxs)("div", {
    className: o()(g.content, {
      [g.mobile]: s.tq,
      [g.mobileNavigationOpen]: r
    }),
    children: [(0, i.jsx)(b, {
      title: l,
      onClose: t
    }), null != n && (0, i.jsx)(d.Z, {
      node: n
    })]
  })
})