/** Chunk was on 1272 **/
/** chunk id: 742171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367843 = require("./367843.js");

function d(e) {
  let {
    item: t
  } = e, n = "contentInventory" === t.data.kind ? t.data.content : null, d = null == n ? true : n.extra, p = null == n ? true : n.author_id, f = null == n ? true : n.content_type, g = (null == d ? true : d.type) === "played_game_extra" || (null == d ? true : d.type) === "launched_activity_extra" ? d.application_id : true, h = (0, s.q)(g), m = (0, l.e7)([o.default], () => null != p ? o.default.getUser(p) : null, [p]), b = f === i.s.TOP_GAME, _ = null == h ? true : h.getIconURL(240);
  return (null == d ? true : d.type) !== "played_game_extra" || "contentInventory" !== t.data.kind || null == h || null == m || null == _ ? null : (0, r.jsx)("div", {
    className: u.container,
    children: (0, r.jsxs)("div", {
      className: u.card,
      children: [(0, r.jsx)("img", {
        src: _,
        alt: h.name,
        className: u.gameIcon
      }), (0, r.jsxs)("div", {
        className: u.gameInfo,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: h.name
        }), b && (0, r.jsx)("div", {
          className: u.badge,
          children: (0, r.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: c.intl.string(c.t["/50eHi"])
          })
        })]
      })]
    })
  })
}