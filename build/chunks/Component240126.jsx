/** Chunk was on 64271 **/
/** chunk id: 240126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk499033 = require("./499033.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818398 = require("./818398.js");

function s(e) {
  let {
    Icon: t,
    header: n,
    tip: s,
    disableStars: c
  } = e;
  return (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsxs)("div", {
      className: a.iconContainer,
      children: [(0, r.jsx)(t, {
        color: "currentColor",
        size: "custom",
        className: a.icon,
        width: 36,
        height: 36
      }), c ? null : (0, r.jsx)(l.Z, {
        className: a.stars
      })]
    }), (0, r.jsx)(i.Heading, {
      className: a.header,
      variant: "heading-xl/semibold",
      children: n
    }), (0, r.jsxs)(i.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      children: [c ? null : (0, r.jsxs)(i.Text, {
        tag: "span",
        className: a.protip,
        variant: "text-xs/bold",
        color: "text-feedback-positive",
        children: [o.intl.string(o.t["8tvIiN"]), ":", " "]
      }), s]
    })]
  })
}