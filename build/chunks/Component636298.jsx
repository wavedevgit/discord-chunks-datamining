/** Chunk was on 91968 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984802 = require("./984802.js"),
  Chunk996435 = require("./996435.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk283924 = require("./283924.js");

function p(e) {
  let {
    icon: t,
    label: n,
    onClick: o
  } = e;
  return (0, r.jsx)(c.hU, {
    onClick: o,
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
    onClose: o
  } = e, i = (0, u.Ll)();
  return (0, r.jsx)(s.f6W, {
    theme: i,
    children: e => (0, r.jsxs)("div", {
      className: a()(y.contentHeader, e),
      children: [(0, r.jsxs)("div", {
        className: y.contentHeaderLeft,
        children: [l.tq && (0, r.jsx)(p, {
          icon: s.yFM,
          onClick: () => f.Z.setState({
            showNavigationMobile: true
          }),
          label: b.intl.string(b.t["13/7kX"])
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-default",
          children: t
        }), null != n && n]
      }), (0, r.jsx)(p, {
        icon: s.Uz9,
        onClick: o,
        label: b.intl.string(b.t.cpT0Cq)
      })]
    })
  })
}
let m = Chunk473749.memo(function(e) {
  var t, n;
  let {
    onClose: o,
    setting: i
  } = e, c = null != (n = null == i ? true : i.useTitle()) ? n : "", s = null == i || null == (t = i.useBadge) ? true : t.call(i), u = f.Z.useField("showNavigationMobile");
  return (0, r.jsxs)("div", {
    className: a()(y.content, {
      [y.mobile]: l.tq,
      [y.mobileNavigationOpen]: u
    }),
    children: [(0, r.jsx)(g, {
      title: c,
      badge: s,
      onClose: o
    }), (0, r.jsx)("div", {
      className: y.contentBody,
      children: null != i && (0, r.jsx)(d.Z, {
        node: i
      })
    })]
  })
})