/** Chunk was on 76210 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
    onClick: i
  } = e;
  return (0, l.jsx)(o.h, {
    onClick: i,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function m(e) {
  let {
    title: t,
    onClose: n
  } = e, {
    setShowNavigationMobile: i
  } = (0, c.t)();
  return (0, l.jsxs)("div", {
    className: g.contentHeader,
    children: [(0, l.jsxs)("div", {
      className: g.contentHeaderLeft,
      children: [u.tq && (0, l.jsx)(v, {
        icon: a.yFM,
        onClick: () => i(true),
        label: f.intl.string(f.t["13/7kZ"])
      }), (0, l.jsx)(a.X6q, {
        variant: "heading-md/normal",
        color: "header-secondary",
        children: t
      })]
    }), (0, l.jsx)(v, {
      icon: a.Uz9,
      onClick: n,
      label: f.intl.string(f.t.cpT0Cg)
    })]
  })
}
let j = Chunk647438.memo(function(e) {
  let {
    onClose: t,
    setting: n
  } = e, i = null == n ? true : n.useTitle(), {
    showNavigationMobile: r
  } = (0, c.t)();
  return (0, l.jsxs)("div", {
    className: s()(g.content, {
      [g.mobile]: u.tq,
      [g.mobileNavigationOpen]: r
    }),
    children: [(0, l.jsx)(m, {
      title: i,
      onClose: t
    }), null != n && (0, l.jsx)(d.Z, {
      node: n
    })]
  })
})