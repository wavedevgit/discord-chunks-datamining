/** Chunk was on 8965 **/
/** chunk id: 411567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211739 = require("./211739.js"),
  Chunk680089 = require("./680089.js"),
  Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  return (0, i.e7)([c.Z, a.Z], () => {
    let t = Object.values(a.Z.getMutableBasicGuildChannelsForGuild(e.guild_id)).filter(e => e.type === s.d4z.GUILD_CATEGORY);
    return 0 === t.length || t.every(e => c.Z.isCollapsed(e.id))
  }) ? null : (0, r.jsx)(l.sNh, {
    id: "collapse-all-categories",
    label: u.intl.string(u.t["9dqzUr"]),
    action: () => (0, o.N5)(e.guild_id)
  })
}