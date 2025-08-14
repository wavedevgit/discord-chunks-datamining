/** Chunk was on 36878 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk214779 = require("./214779.js");

function g(e) {
  let {
    icon: t,
    onClick: n
  } = e;
  return (0, i.jsx)(a.zx, {
    look: a.zx.Looks.BLANK,
    size: a.zx.Sizes.ICON,
    className: f.contentHeaderButton,
    innerClassName: f.iconButtonInner,
    onClick: n,
    children: (0, i.jsx)(t, {
      size: "sm"
    })
  })
}

function m(e) {
  let {
    title: t,
    onClose: n,
    setShowNavigationMobile: l
  } = e;
  return (0, i.jsxs)("div", {
    className: f.contentHeader,
    children: [(0, i.jsxs)("div", {
      className: f.contentHeaderLeft,
      children: [r.tq && (0, i.jsx)(g, {
        icon: u.yFM,
        onClick: () => l(true)
      }), (0, i.jsx)(u.X6q, {
        variant: "heading-md/normal",
        color: "header-secondary",
        children: t
      })]
    }), !r.tq && (0, i.jsx)(g, {
      icon: u.Uz9,
      onClick: n
    })]
  })
}
let v = Chunk73800.memo(function(e) {
  let {
    onClose: t,
    setShowNavigationMobile: n,
    setting: l
  } = e, s = l.useTitle(), {
    showNavigationMobile: a
  } = (0, c.t)();
  return (0, i.jsxs)("div", {
    className: o()(f.content, {
      [f.mobile]: r.tq,
      [f.mobileNavigationOpen]: a
    }),
    children: [(0, i.jsx)(m, {
      title: s,
      onClose: t,
      setShowNavigationMobile: n
    }), (0, i.jsx)(u.w0Z, {
      className: f.contentScroller,
      children: (0, i.jsx)(d.Z, {
        node: l
      })
    })]
  })
})