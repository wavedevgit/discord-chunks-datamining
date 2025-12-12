/** Chunk was on 88569 **/
/** chunk id: 636298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984802 = require("./984802.js"),
  Chunk996435 = require("./996435.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214779 = require("./214779.js");

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
      className: l()(y.contentHeader, e),
      children: [(0, r.jsxs)("div", {
        className: y.contentHeaderLeft,
        children: [a.tq && (0, r.jsx)(p, {
          icon: s.yFM,
          onClick: () => b.Z.setState({
            showNavigationMobile: true
          }),
          label: d.intl.string(d.t["13/7kX"])
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-default",
          children: t
        }), null != n && n]
      }), (0, r.jsx)(p, {
        icon: s.Uz9,
        onClick: o,
        label: d.intl.string(d.t.cpT0Cq)
      })]
    })
  })
}
let O = Chunk473749.memo(function(e) {
  var t, n;
  let {
    onClose: o,
    setting: i
  } = e, c = null != (n = null == i ? true : i.useTitle()) ? n : "", s = null == i || null == (t = i.useBadge) ? true : t.call(i), u = b.Z.useField("showNavigationMobile");
  return (0, r.jsxs)("div", {
    className: l()(y.content, {
      [y.mobile]: a.tq,
      [y.mobileNavigationOpen]: u
    }),
    children: [(0, r.jsx)(g, {
      title: c,
      badge: s,
      onClose: o
    }), (0, r.jsx)("div", {
      className: y.contentBody,
      children: null != i && (0, r.jsx)(f.Z, {
        node: i
      })
    })]
  })
})