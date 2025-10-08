/** Chunk was on 13608 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984802 = require("./984802.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk269537 = require("./269537.js");

function j(e) {
  let {
    icon: t,
    label: n,
    onClick: l
  } = e;
  return (0, r.jsx)(s.hU, {
    onClick: l,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function p(e) {
  let {
    title: t,
    onClose: n
  } = e, {
    setShowNavigationMobile: l
  } = (0, d.t)(), o = (0, u.Ll)();
  return (0, r.jsx)(c.f6W, {
    theme: o,
    children: e => (0, r.jsxs)("div", {
      className: i()(b.contentHeader, e),
      children: [(0, r.jsxs)("div", {
        className: b.contentHeaderLeft,
        children: [a.tq && (0, r.jsx)(j, {
          icon: c.yFM,
          onClick: () => l(true),
          label: m.intl.string(m.t["13/7kZ"])
        }), (0, r.jsx)(c.X6q, {
          variant: "heading-md/medium",
          color: "header-secondary",
          children: t
        })]
      }), (0, r.jsx)(j, {
        icon: c.Uz9,
        onClick: n,
        label: m.intl.string(m.t.cpT0Cg)
      })]
    })
  })
}
let x = Chunk647438.memo(function(e) {
  let {
    onClose: t,
    setting: n
  } = e, l = null == n ? true : n.useTitle(), {
    showNavigationMobile: o
  } = (0, d.t)();
  return (0, r.jsxs)("div", {
    className: i()(b.content, {
      [b.mobile]: a.tq,
      [b.mobileNavigationOpen]: o
    }),
    children: [(0, r.jsx)(p, {
      title: l,
      onClose: t
    }), (0, r.jsx)("div", {
      className: b.contentBody,
      children: null != n && (0, r.jsx)(f.Z, {
        node: n
      })
    })]
  })
})