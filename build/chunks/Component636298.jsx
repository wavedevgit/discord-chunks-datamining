/** Chunk was on 46984 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  return (0, r.jsx)(s.hU, {
    onClick: l,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function g(e) {
  let {
    title: t,
    badge: n,
    onClose: l
  } = e, i = (0, u.Ll)();
  return (0, r.jsx)(c.f6W, {
    theme: i,
    children: e => (0, r.jsxs)("div", {
      className: o()(b.contentHeader, e),
      children: [(0, r.jsxs)("div", {
        className: b.contentHeaderLeft,
        children: [a.tq && (0, r.jsx)(y, {
          icon: c.yFM,
          onClick: () => d.Z.setState({
            showNavigationMobile: true
          }),
          label: p.intl.string(p.t["13/7kX"])
        }), (0, r.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "header-secondary",
          children: t
        }), null != n && n]
      }), (0, r.jsx)(y, {
        icon: c.Uz9,
        onClick: l,
        label: p.intl.string(p.t.cpT0Cq)
      })]
    })
  })
}
let v = Chunk473749.memo(function(e) {
  var t, n;
  let {
    onClose: l,
    setting: i
  } = e, s = null != (n = null == i ? true : i.useTitle()) ? n : "", c = null == i || null == (t = i.useBadge) ? true : t.call(i), u = d.Z.useField("showNavigationMobile");
  return (0, r.jsxs)("div", {
    className: o()(b.content, {
      [b.mobile]: a.tq,
      [b.mobileNavigationOpen]: u
    }),
    children: [(0, r.jsx)(g, {
      title: s,
      badge: c,
      onClose: l
    }), (0, r.jsx)("div", {
      className: b.contentBody,
      children: null != i && (0, r.jsx)(f.Z, {
        node: i
      })
    })]
  })
})