/** Chunk was on 13914 **/
/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97469 = require("./97469.js"),
  Chunk894858 = require("./894858.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk379763 = require("./379763.js");

function f(e) {
  let {
    icon: t,
    label: n,
    onClick: o
  } = e;
  return (0, r.jsx)(c.K0, {
    onClick: o,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": n
  })
}

function y(e) {
  let {
    title: t,
    badge: n,
    onClose: o
  } = e, a = (0, u.NC)();
  return (0, r.jsx)(s.NPJ, {
    theme: a,
    children: e => (0, r.jsxs)("div", {
      className: l()(p.$Q, e),
      children: [(0, r.jsxs)("div", {
        className: p.y9,
        children: [i.Fr && (0, r.jsx)(f, {
          icon: s.fEi,
          onClick: () => d.A.setState({
            showNavigationMobile: true
          }),
          label: b.intl.string(b.t["13/7kX"])
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-default",
          children: t
        }), null != n && n]
      }), (0, r.jsx)(f, {
        icon: s.d$L,
        onClick: o,
        label: b.intl.string(b.t.cpT0Cq)
      })]
    })
  })
}
let g = Chunk64700.memo(function(e) {
  var t, n;
  let {
    onClose: o,
    setting: a
  } = e, c = null != (t = null == a ? true : a.useTitle()) ? t : "", s = null == a || null == (n = a.useBadge) ? true : n.call(a), u = d.A.useField("showNavigationMobile");
  return (0, r.jsxs)("div", {
    className: l()(p.Qs, {
      [p.Hw]: i.Fr,
      [p.n7]: u
    }),
    children: [(0, r.jsx)(y, {
      title: c,
      badge: s,
      onClose: o
    }), (0, r.jsx)("div", {
      className: p.yp,
      children: null != a && (0, r.jsx)(_.A, {
        node: a
      })
    })]
  })
})