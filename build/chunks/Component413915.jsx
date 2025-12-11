/** Chunk was on 8124 **/
/** chunk id: 413915, original params: e,a,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => r
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk152838 = require("./152838.js");
let r = Chunk473749.memo(function(e) {
  let {
    guildId: a,
    guildProfile: t
  } = e;
  return (0, s.jsx)("div", {
    className: g.tagContainer,
    children: (0, s.jsxs)("div", {
      className: g.tag,
      children: [null != t.badge && (0, s.jsx)(i.eI, {
        src: (0, d.Ic)(a, t.badge, b.Gg.SIZE_32),
        size: b.Gg.SIZE_32,
        className: g.badge
      }), (0, s.jsx)(n.Text, {
        tag: "span",
        variant: "heading-xl/semibold",
        children: t.tag
      })]
    })
  })
})