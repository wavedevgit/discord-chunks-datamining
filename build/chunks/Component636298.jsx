/** Chunk was on 36878 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk134439 = require("./134439.js");

function m(e) {
  let {
    icon: t,
    onClick: n
  } = e;
  return (0, i.jsx)(s.zx, {
    look: s.zx.Looks.BLANK,
    size: s.zx.Sizes.ICON,
    className: f.contentHeaderButton,
    innerClassName: f.iconButtonInner,
    onClick: n,
    children: (0, i.jsx)(t, {
      size: "sm"
    })
  })
}

function x(e) {
  let {
    title: t,
    onClose: n,
    setShowNavigationMobile: o
  } = e;
  return (0, i.jsxs)("div", {
    className: f.contentHeader,
    children: [(0, i.jsxs)("div", {
      className: f.contentHeaderLeft,
      children: [a.tq && (0, i.jsx)(m, {
        icon: c.yFM,
        onClick: () => o(true)
      }), (0, i.jsx)(c.X6q, {
        variant: "heading-md/normal",
        color: "header-secondary",
        children: t
      })]
    }), !a.tq && (0, i.jsx)(m, {
      icon: c.Uz9,
      onClick: n
    })]
  })
}
let g = Chunk73800.memo(function(e) {
  let {
    onClose: t,
    setShowNavigationMobile: n,
    setting: o
  } = e, l = o.useTitle(), {
    showNavigationMobile: s
  } = (0, u.t)();
  return (0, i.jsxs)("div", {
    className: r()(f.content, {
      [f.mobile]: a.tq,
      [f.mobileNavigationOpen]: s
    }),
    children: [(0, i.jsx)(x, {
      title: l,
      onClose: t,
      setShowNavigationMobile: n
    }), (0, i.jsx)(c.w0Z, {
      className: f.contentScroller,
      children: (0, i.jsx)(d.Z, {
        node: o
      })
    })]
  })
})