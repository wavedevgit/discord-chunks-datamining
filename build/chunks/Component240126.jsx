/** Chunk was on 67000 **/
/** chunk id: 240126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk499033 = require("./499033.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk919864 = require("./919864.js");

function s(e) {
  let {
    Icon: t,
    header: n,
    tip: s,
    disableStars: c
  } = e;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsxs)("div", {
      className: o.iconContainer,
      children: [(0, r.jsx)(t, {
        color: "currentColor",
        size: "custom",
        className: o.icon,
        width: 36,
        height: 36
      }), c ? null : (0, r.jsx)(l.Z, {
        className: o.stars
      })]
    }), (0, r.jsx)(i.Heading, {
      className: o.header,
      variant: "heading-xl/semibold",
      children: n
    }), (0, r.jsxs)(i.Text, {
      color: "text-default",
      variant: "text-xs/normal",
      children: [c ? null : (0, r.jsxs)(i.Text, {
        tag: "span",
        className: o.protip,
        variant: "text-xs/bold",
        color: "text-feedback-positive",
        children: [a.intl.string(a.t["8tvIiN"]), ":", " "]
      }), s]
    })]
  })
}