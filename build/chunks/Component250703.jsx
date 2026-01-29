/** Chunk was on 59024 **/
/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    onClick: l
  } = e;
  return (0, r.jsx)(c.K0, {
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
  } = e, o = (0, u.NC)();
  return (0, r.jsx)(s.NPJ, {
    theme: o,
    children: e => (0, r.jsxs)("div", {
      className: a()(p.$Q, e),
      children: [(0, r.jsxs)("div", {
        className: p.y9,
        children: [i.Fr && (0, r.jsx)(f, {
          icon: s.fEi,
          onClick: () => d.A.setState({
            showNavigationMobile: true
          }),
          label: y.intl.string(y.t["13/7kX"])
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-default",
          children: t
        }), null != n && n]
      }), (0, r.jsx)(f, {
        icon: s.d$L,
        onClick: l,
        label: y.intl.string(y.t.cpT0Cq)
      })]
    })
  })
}
let m = Chunk64700.memo(function(e) {
  var t, n;
  let {
    onClose: l,
    setting: o
  } = e, c = null != (t = null == o ? true : o.useTitle()) ? t : "", s = null == o || null == (n = o.useBadge) ? true : n.call(o), u = d.A.useField("showNavigationMobile");
  return (0, r.jsxs)("div", {
    className: a()(p.Qs, {
      [p.Hw]: i.Fr,
      [p.n7]: u
    }),
    children: [(0, r.jsx)(g, {
      title: c,
      badge: s,
      onClose: l
    }), (0, r.jsx)("div", {
      className: p.yp,
      children: null != o && (0, r.jsx)(b.A, {
        node: o
      })
    })]
  })
})