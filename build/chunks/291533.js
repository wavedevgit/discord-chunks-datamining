/** Chunk was on 6043 **/
/** chunk id: 291533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk562511 = require("./562511.js"),
  Chunk324805 = require("./324805.js");

function u(e) {
  let t = (0, c.A2)(e),
    n = (0, a.e7)([i.Z], () => i.Z.isOpen()),
    u = (0, a.e7)([o.Z], () => o.Z.hasLayers()),
    {
      isQuestBarEmpty: m,
      hasLoadedQuestBar: p
    } = (0, s.Ws)({
      location: d.dr.QUESTS_BAR
    });
  return (0, l.bf)(t && !n && !u && m && p ? r.z.GUILD_TAG_AVAILABLE_COACHMARK : null, {
    cooldownDurationMs: 18e4
  })
}