/** Chunk was on web.js **/
/** chunk id: 291533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk562511 = require("./562511.js"),
  Chunk46140 = require("./46140.js");
let d = 18e4;

function f(e) {
  let t = (0, c.A2)(e),
    n = (0, r.e7)([a.Z], () => a.Z.isOpen()),
    f = (0, r.e7)([l.Z], () => l.Z.hasLayers()),
    _ = (0, s.Ws)({
      location: u.dr.QUESTS_BAR
    }),
    p = t && !n && !f && _;
  return (0, o.bf)(p ? i.z.GUILD_TAG_AVAILABLE_COACHMARK : null, {
    cooldownDurationMs: d
  })
}