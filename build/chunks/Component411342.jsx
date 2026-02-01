/** Chunk was on 9753 **/
/** chunk id: 411342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk317097 = require("./317097.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk364271 = require("./364271.js");

function o(e) {
  let {
    locked: t,
    role: n,
    textVariant: o = "text-xs/medium"
  } = e, c = (0, l.rdh)(l.LU0.colors.INTERACTIVE_TEXT_DEFAULT).hex();
  return (0, r.jsx)("div", {
    className: s.ex,
    children: (0, r.jsxs)("div", {
      className: s.b6,
      children: [(0, r.jsx)("div", {
        className: s.yY,
        style: {
          backgroundColor: (0, i.Hl)(n.color)
        }
      }), (0, r.jsx)(l.hKd, {
        size: 8,
        horizontal: true
      }), (0, r.jsxs)(l.Text, {
        variant: o,
        color: "text-default",
        children: [(0, r.jsx)(l.AC4, {
          children: a.intl.string(a.t.RnyseL)
        }), n.name]
      }), true === t && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.hKd, {
          size: 8,
          horizontal: true
        }), (0, r.jsx)(l.XAi, {
          size: "md",
          color: c
        })]
      })]
    })
  })
}