/** Chunk was on 48666 **/
/** chunk id: 250703, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function p(e) {
  let {
    icon: t,
    label: r,
    onClick: l
  } = e;
  return (0, n.jsx)(i.K0, {
    onClick: l,
    icon: t,
    size: "sm",
    variant: "icon-only",
    "aria-label": r
  })
}

function g(e) {
  let {
    title: t,
    badge: r,
    onClose: l
  } = e, o = (0, u.NC)();
  return (0, n.jsx)(s.NPJ, {
    theme: o,
    children: e => (0, n.jsxs)("div", {
      className: a()(d.$Q, e),
      children: [(0, n.jsxs)("div", {
        className: d.y9,
        children: [c.Fr && (0, n.jsx)(p, {
          icon: s.fEi,
          onClick: () => f.A.setState({
            showNavigationMobile: true
          }),
          label: y.intl.string(y.t["13/7kX"])
        }), (0, n.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-default",
          children: t
        }), null != r && r]
      }), (0, n.jsx)(p, {
        icon: s.d$L,
        onClick: l,
        label: y.intl.string(y.t.cpT0Cq)
      })]
    })
  })
}
let O = Chunk64700.memo(function(e) {
  var t, r;
  let {
    onClose: l,
    setting: o
  } = e, i = null != (t = null == o ? true : o.useTitle()) ? t : "", s = null == o || null == (r = o.useBadge) ? true : r.call(o), u = f.A.useField("showNavigationMobile");
  return (0, n.jsxs)("div", {
    className: a()(d.Qs, {
      [d.Hw]: c.Fr,
      [d.n7]: u
    }),
    children: [(0, n.jsx)(g, {
      title: i,
      badge: s,
      onClose: l
    }), (0, n.jsx)("div", {
      className: d.yp,
      children: null != o && (0, n.jsx)(b.A, {
        node: o
      })
    })]
  })
})