/** Chunk was on 75149 **/
/** chunk id: 134725, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk914430 = require("./914430.js"),
  Chunk924985 = require("./924985.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  return (0, i.bG)([c.A, o.A], () => {
    let t = Object.values(o.A.getMutableBasicGuildChannelsForGuild(e.guild_id)).filter(e => e.type === s.rbe.GUILD_CATEGORY);
    return 0 === t.length || t.every(e => c.A.isCollapsed(e.id))
  }) ? null : (0, r.jsx)(l.Drp, {
    id: "collapse-all-categories",
    label: u.intl.string(u.t["9dqzUr"]),
    action: () => (0, a.rZ)(e.guild_id)
  })
}