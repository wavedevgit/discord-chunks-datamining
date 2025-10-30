/** Chunk was on 93886 **/
/** chunk id: 291533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk562511 = require("./562511.js"),
  Chunk46140 = require("./46140.js");
let u = 12633 == require.j ? 18e4 : null;

function p(e) {
  let t = (0, c.A2)(e),
    n = (0, r.e7)([a.Z], () => a.Z.isOpen()),
    p = (0, r.e7)([s.Z], () => s.Z.hasLayers()),
    {
      isQuestBarEmpty: f,
      hasLoadedQuestBar: _
    } = (0, l.Ws)({
      location: d.dr.QUESTS_BAR
    });
  return (0, o.bf)(t && !n && !p && f && _ ? i.z.GUILD_TAG_AVAILABLE_COACHMARK : null, {
    cooldownDurationMs: u
  })
}