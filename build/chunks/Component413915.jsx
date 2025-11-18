/** Chunk was on 8124 **/
/** chunk id: 413915, original params: a,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk700731 = require("./700731.js");
let b = Chunk473749.memo(function(a) {
  let {
    guildId: e,
    guildProfile: t
  } = a;
  return (0, s.jsx)("div", {
    className: r.tagContainer,
    children: (0, s.jsxs)("div", {
      className: r.tag,
      children: [null != t.badge && (0, s.jsx)(c.eI, {
        src: (0, i.Ic)(e, t.badge, g.Gg.SIZE_32),
        size: g.Gg.SIZE_32,
        className: r.badge
      }), (0, s.jsx)(d.Text, {
        tag: "span",
        variant: "heading-xl/semibold",
        children: t.tag
      })]
    })
  })
})