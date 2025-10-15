/** Chunk was on 75685 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk214779 = require("./214779.js");

function p(e) {
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

function j(e) {
  let {
    title: t,
    badge: n,
    onClose: l
  } = e, {
    setShowNavigationMobile: o
  } = (0, d.t)(), s = (0, u.Ll)();
  return (0, r.jsx)(c.f6W, {
    theme: s,
    children: e => (0, r.jsxs)("div", {
      className: i()(b.contentHeader, e),
      children: [(0, r.jsxs)("div", {
        className: b.contentHeaderLeft,
        children: [a.tq && (0, r.jsx)(p, {
          icon: c.yFM,
          onClick: () => o(true),
          label: m.intl.string(m.t["13/7kX"])
        }), (0, r.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "header-secondary",
          children: t
        }), null != n && n]
      }), (0, r.jsx)(p, {
        icon: c.Uz9,
        onClick: l,
        label: m.intl.string(m.t.cpT0Cq)
      })]
    })
  })
}
let v = Chunk647438.memo(function(e) {
  var t, n;
  let {
    onClose: l,
    setting: o
  } = e, s = null != (n = null == o ? true : o.useTitle()) ? n : "", c = null == o || null == (t = o.useBadge) ? true : t.call(o), {
    showNavigationMobile: u
  } = (0, d.t)();
  return (0, r.jsxs)("div", {
    className: i()(b.content, {
      [b.mobile]: a.tq,
      [b.mobileNavigationOpen]: u
    }),
    children: [(0, r.jsx)(j, {
      title: s,
      badge: c,
      onClose: l
    }), (0, r.jsx)("div", {
      className: b.contentBody,
      children: null != o && (0, r.jsx)(f.Z, {
        node: o
      })
    })]
  })
})