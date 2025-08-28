/** Chunk was on 47129 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function N(e) {
  let {
    icon: t,
    label: n,
    onClick: r
  } = e;
  return (0, i.jsx)(s.h, {
    onClick: r,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function g(e) {
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
      children: [a.tq && (0, i.jsx)(N, {
        icon: u.yFM,
        onClick: () => r(true),
        label: _.intl.string(_.t["13/7kZ"])
      }), (0, i.jsx)(u.X6q, {
        variant: "heading-md/normal",
        color: "header-secondary",
        children: t
      })]
    }), (0, i.jsx)(N, {
      icon: u.Uz9,
      onClick: n,
      label: _.intl.string(_.t.cpT0Cg)
    })]
  })
}
let O = Chunk647438.memo(function(e) {
  let {
    onClose: t,
    setting: n
  } = e, r = null == n ? true : n.useTitle(), {
    showNavigationMobile: l
  } = (0, c.t)();
  return (0, i.jsxs)("div", {
    className: o()(E.content, {
      [E.mobile]: a.tq,
      [E.mobileNavigationOpen]: l
    }),
    children: [(0, i.jsx)(g, {
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