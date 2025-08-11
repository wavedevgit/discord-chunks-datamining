/** Chunk was on 75708 **/
/** chunk id: 413915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk729495 = require("./729495.js");
let d = Chunk73800.memo(function(e) {
  let {
    guildId: t,
    guildProfile: n
  } = e;
  return (0, i.jsx)("div", {
    className: c.tagContainer,
    children: (0, i.jsxs)("div", {
      className: c.tag,
      children: [null != n.badge && (0, i.jsx)(l.eI, {
        src: (0, a.Ic)(t, n.badge, o.Gg.SIZE_32),
        tag: n.tag,
        size: o.Gg.SIZE_32,
        className: c.badge
      }), (0, i.jsx)(s.Text, {
        tag: "span",
        variant: "heading-xl/semibold",
        children: n.tag
      })]
    })
  })
})