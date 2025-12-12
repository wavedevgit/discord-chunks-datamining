/** Chunk was on 93886 **/
/** chunk id: 291533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk562511 = require("./562511.js"),
  Chunk324805 = require("./324805.js");
let u = 12633 == require.j ? 18e4 : null;

function f(e) {
  let t = (0, s.A2)(e),
    n = (0, r.e7)([l.Z], () => l.Z.isOpen()),
    f = (0, r.e7)([c.Z], () => c.Z.hasLayers()),
    {
      isQuestBarEmpty: p,
      hasLoadedQuestBar: b
    } = (0, o.Ws)({
      location: d.dr.QUESTS_BAR
    });
  return (0, a.bf)(t && !n && !f && p && b ? i.z.GUILD_TAG_AVAILABLE_COACHMARK : null, {
    cooldownDurationMs: u
  })
}