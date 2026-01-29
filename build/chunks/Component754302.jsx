/** Chunk was on 45714 **/
/** chunk id: 754302, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  B: () => o,
  q: () => l
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk385104 = require("./385104.js");

function l(e) {
  let {
    children: n
  } = e;
  return (0, s.jsx)("div", {
    className: t.MD,
    children: (0, s.jsx)("div", {
      className: t.Qs,
      children: n
    })
  })
}

function o(e) {
  let {
    icon: n,
    title: a,
    description: r,
    iconClassName: l,
    color: o,
    listType: d = "icon",
    completed: u = false,
    index: x
  } = e;
  return (0, s.jsxs)("div", {
    className: t.Hn,
    children: [(() => {
      if ("numbered" === d && null != x)
        if (u) return (0, s.jsx)("div", {
          className: t.ai,
          children: (0, s.jsx)(c.rOg, {
            color: "green",
            className: i()(t.Kk, l)
          })
        });
        else return (0, s.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: t.ai,
          children: x + 1
        });
      if (null != n) return (0, s.jsx)("div", {
        className: t.zc,
        children: (0, s.jsx)(n, {
          color: null != o ? o : "currentColor",
          className: i()(t.Kk, l)
        })
      })
    })(), (0, s.jsxs)("div", {
      className: t.FS,
      children: [(0, s.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        className: i()({
          [t.VA]: u
        }),
        children: a
      }), null != r && (0, s.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        className: i()({
          [t.VA]: u
        }),
        children: r
      })]
    })]
  })
}