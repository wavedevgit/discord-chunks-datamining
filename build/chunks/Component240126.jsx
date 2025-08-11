/** Chunk was on 34779 **/
/** chunk id: 240126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk499033 = require("./499033.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk35539 = require("./35539.js");

function a(e) {
  let {
    Icon: t,
    header: n,
    tip: a,
    disableStars: c
  } = e;
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsxs)("div", {
      className: s.iconContainer,
      children: [(0, r.jsx)(t, {
        color: "currentColor",
        size: "custom",
        className: s.icon,
        width: 36,
        height: 36
      }), c ? null : (0, r.jsx)(l.Z, {
        className: s.stars
      })]
    }), (0, r.jsx)(i.X6q, {
      className: s.header,
      variant: "heading-xl/semibold",
      children: n
    }), (0, r.jsxs)(i.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      children: [c ? null : (0, r.jsxs)(i.Text, {
        tag: "span",
        className: s.protip,
        variant: "text-xs/bold",
        color: "text-feedback-positive",
        children: [o.intl.string(o.t["8tvIiI"]), ":", " "]
      }), a]
    })]
  })
}