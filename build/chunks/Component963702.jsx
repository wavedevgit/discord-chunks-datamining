/** Chunk was on 97492 **/
/** chunk id: 963702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk303727 = require("./303727.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk610688 = require("./610688.js");

function o(e) {
  let {
    Icon: t,
    header: n,
    tip: o,
    disableStars: c
  } = e;
  return (0, r.jsxs)("div", {
    className: s.kL,
    children: [(0, r.jsxs)("div", {
      className: s.zc,
      children: [(0, r.jsx)(t, {
        color: "currentColor",
        size: "custom",
        className: s.Kk,
        width: 36,
        height: 36
      }), c ? null : (0, r.jsx)(i.A, {
        className: s.uf
      })]
    }), (0, r.jsx)(l.Heading, {
      className: s.wx,
      variant: "heading-xl/semibold",
      children: n
    }), (0, r.jsxs)(l.Text, {
      color: "text-default",
      variant: "text-xs/normal",
      children: [c ? null : (0, r.jsxs)(l.Text, {
        tag: "span",
        className: s.PP,
        variant: "text-xs/bold",
        color: "text-feedback-positive",
        children: [a.intl.string(a.t["8tvIiN"]), ":", " "]
      }), o]
    })]
  })
}