/** Chunk was on 47129 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
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

function f(e) {
  let {
    icon: t,
    label: n,
    onClick: r
  } = e;
  return (0, i.jsx)(a.h, {
    onClick: r,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function N(e) {
  let {
    title: t,
    onClose: n
  } = e, {
    setShowNavigationMobile: r
  } = (0, c.t)();
  return (0, i.jsxs)("div", {
    className: E.contentHeader,
    children: [(0, i.jsxs)("div", {
      className: E.contentHeaderLeft,
      children: [s.tq && (0, i.jsx)(f, {
        icon: u.yFM,
        onClick: () => r(true),
        label: _.intl.string(_.t["13/7kZ"])
      }), (0, i.jsx)(u.X6q, {
        variant: "heading-md/normal",
        color: "header-secondary",
        children: t
      })]
    }), (0, i.jsx)(f, {
      icon: u.Uz9,
      onClick: n,
      label: _.intl.string(_.t.cpT0Cg)
    })]
  })
}
let T = Chunk647438.memo(function(e) {
  let {
    onClose: t,
    setting: n
  } = e, r = null == n ? true : n.useTitle(), {
    showNavigationMobile: l
  } = (0, c.t)();
  return (0, i.jsxs)("div", {
    className: o()(E.content, {
      [E.mobile]: s.tq,
      [E.mobileNavigationOpen]: l
    }),
    children: [(0, i.jsx)(N, {
      title: r,
      onClose: t
    }), (0, i.jsx)("div", {
      className: E.contentBody,
      children: null != n && (0, i.jsx)(d.Z, {
        node: n
      })
    })]
  })
})