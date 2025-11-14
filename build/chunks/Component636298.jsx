/** Chunk was on 16985 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984802 = require("./984802.js"),
  Chunk996435 = require("./996435.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214779 = require("./214779.js");

function y(e) {
  let {
    icon: t,
    label: n,
    onClick: l
  } = e;
  return (0, r.jsx)(c.hU, {
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
  } = e, o = (0, u.Ll)();
  return (0, r.jsx)(s.f6W, {
    theme: o,
    children: e => (0, r.jsxs)("div", {
      className: i()(p.contentHeader, e),
      children: [(0, r.jsxs)("div", {
        className: p.contentHeaderLeft,
        children: [a.tq && (0, r.jsx)(y, {
          icon: s.yFM,
          onClick: () => d.Z.setState({
            showNavigationMobile: true
          }),
          label: b.intl.string(b.t["13/7kX"])
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "header-secondary",
          children: t
        }), null != n && n]
      }), (0, r.jsx)(y, {
        icon: s.Uz9,
        onClick: l,
        label: b.intl.string(b.t.cpT0Cq)
      })]
    })
  })
}
let m = Chunk647438.memo(function(e) {
  var t, n;
  let {
    onClose: l,
    setting: o
  } = e, c = null != (n = null == o ? true : o.useTitle()) ? n : "", s = null == o || null == (t = o.useBadge) ? true : t.call(o), u = d.Z.useField("showNavigationMobile");
  return (0, r.jsxs)("div", {
    className: i()(p.content, {
      [p.mobile]: a.tq,
      [p.mobileNavigationOpen]: u
    }),
    children: [(0, r.jsx)(j, {
      title: c,
      badge: s,
      onClose: l
    }), (0, r.jsx)("div", {
      className: p.contentBody,
      children: null != o && (0, r.jsx)(f.Z, {
        node: o
      })
    })]
  })
})