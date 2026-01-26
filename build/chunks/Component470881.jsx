/** Chunk was on 21738 **/
/** chunk id: 470881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk681154 = require("./681154.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk707934 = require("./707934.js");

function d(e) {
  let {
    item: t
  } = e, n = "contentInventory" === t.data.kind ? t.data.content : null, d = null == n ? true : n.extra, p = null == n ? true : n.author_id, h = null == n ? true : n.content_type, g = (null == d ? true : d.type) === "played_game_extra" || (null == d ? true : d.type) === "launched_activity_extra" ? d.application_id : true, f = (0, s.h)(g), m = (0, l.bG)([o.default], () => null != p ? o.default.getUser(p) : null, [p]), A = h === i.ContentInventoryEntryType.TOP_GAME, _ = null == f ? true : f.getIconURL(240);
  return (null == d ? true : d.type) !== "played_game_extra" || "contentInventory" !== t.data.kind || null == f || null == m || null == _ ? null : (0, r.jsx)("div", {
    className: u.kL,
    children: (0, r.jsxs)("div", {
      className: u.Nr,
      children: [(0, r.jsx)("img", {
        src: _,
        alt: f.name,
        className: u.Gt
      }), (0, r.jsxs)("div", {
        className: u.Vx,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: f.name
        }), A && (0, r.jsx)("div", {
          className: u.qS,
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