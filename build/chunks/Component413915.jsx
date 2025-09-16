/** Chunk was on 8124 **/
/** chunk id: 413915, original params: a,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk298282 = require("./298282.js");
let b = Chunk647438.memo(function(a) {
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