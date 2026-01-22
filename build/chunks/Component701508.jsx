/** Chunk was on 28636 **/
/** chunk id: 701508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk611371 = require("./611371.jsx"),
  Chunk262834 = require("./262834.js");

function p(e) {
  let {
    title: t,
    betaTag: n,
    color: a = "text-strong"
  } = e;
  return (0, l.jsxs)(c.Heading, {
    className: i()(u.DD, u.Zv),
    variant: "display-lg",
    color: a,
    children: [t, n && (0, l.jsx)(d.A, {
      className: u.TN
    })]
  })
}

function h(e) {
  let {
    title: t,
    titleColor: n,
    description: r,
    button: d,
    className: h,
    children: m,
    betaTag: b = false
  } = e, f = (0, o.Ay)(), g = (0, s.Mw)(f), x = a.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, l.jsx)(p, {
    title: e,
    betaTag: b,
    color: n
  }, t)) : (0, l.jsx)(p, {
    title: t,
    betaTag: b,
    color: n
  }), [t, b, n]);
  return (0, l.jsxs)("div", {
    className: i()(u.kL, h),
    children: [(0, l.jsx)("div", {
      className: u.Qs,
      children: (0, l.jsxs)("div", {
        className: u.FS,
        children: [x, null != r && (0, l.jsx)(c.Text, {
          className: u.h_,
          variant: "text-md/medium",
          color: g ? "text-muted" : "text-strong",
          children: r
        }), null != d && (0, l.jsx)("div", {
          className: u.UD,
          children: d
        })]
      })
    }), m]
  })
}