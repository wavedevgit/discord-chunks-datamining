/** Chunk was on 28636 **/
/** chunk id: 701508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk611371 = require("./611371.jsx"),
  Chunk262834 = require("./262834.js");

function p(e) {
  let {
    title: t,
    betaTag: n,
    color: l = "text-strong"
  } = e;
  return (0, r.jsxs)(o.Heading, {
    className: a()(u.DD, u.Zv),
    variant: "display-lg",
    color: l,
    children: [t, n && (0, r.jsx)(d.A, {
      className: u.TN
    })]
  })
}

function h(e) {
  let {
    title: t,
    titleColor: n,
    description: i,
    button: d,
    className: h,
    children: m,
    betaTag: g = false
  } = e, _ = (0, c.Ay)(), b = (0, s.Mw)(_), f = l.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, r.jsx)(p, {
    title: e,
    betaTag: g,
    color: n
  }, t)) : (0, r.jsx)(p, {
    title: t,
    betaTag: g,
    color: n
  }), [t, g, n]);
  return (0, r.jsxs)("div", {
    className: a()(u.kL, h),
    children: [(0, r.jsx)("div", {
      className: u.Qs,
      children: (0, r.jsxs)("div", {
        className: u.FS,
        children: [f, null != i && (0, r.jsx)(o.Text, {
          className: u.h_,
          variant: "text-md/medium",
          color: b ? "text-muted" : "text-strong",
          children: i
        }), null != d && (0, r.jsx)("div", {
          className: u.UD,
          children: d
        })]
      })
    }), m]
  })
}