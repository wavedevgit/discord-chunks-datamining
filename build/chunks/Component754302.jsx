/** Chunk was on 45714 **/
/** chunk id: 754302, original params: e,a,c (module,exports,require) **/
require.d(exports, {
  B: () => t,
  q: () => i
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk385104 = require("./385104.js");

function i(e) {
  let {
    children: a
  } = e;
  return (0, s.jsx)("div", {
    className: n.MD,
    children: (0, s.jsx)("div", {
      className: n.Qs,
      children: a
    })
  })
}

function t(e) {
  let {
    icon: a,
    title: c,
    description: d,
    iconClassName: i,
    color: t,
    listType: o = "icon",
    completed: b = false,
    index: f
  } = e;
  return (0, s.jsxs)("div", {
    className: n.Hn,
    children: [(() => {
      if ("numbered" === o && null != f)
        if (b) return (0, s.jsx)("div", {
          className: n.ai,
          children: (0, s.jsx)(l.rOg, {
            color: "green",
            className: r()(n.Kk, i)
          })
        });
        else return (0, s.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: n.ai,
          children: f + 1
        });
      if (null != a) return (0, s.jsx)("div", {
        className: n.zc,
        children: (0, s.jsx)(a, {
          color: null != t ? t : "currentColor",
          className: r()(n.Kk, i)
        })
      })
    })(), (0, s.jsxs)("div", {
      className: n.FS,
      children: [(0, s.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        className: r()({
          [n.VA]: b
        }),
        children: c
      }), null != d && (0, s.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        className: r()({
          [n.VA]: b
        }),
        children: d
      })]
    })]
  })
}