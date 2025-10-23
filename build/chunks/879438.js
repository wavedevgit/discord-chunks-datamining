/** Chunk was on 1272 **/
/** chunk id: 879438, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => o
});
var Chunk191336 = require("./191336.js"),
  Chunk731965 = require("./731965.js"),
  Chunk5881 = require("./5881.js"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js");
let o = (0, Chunk191336.U)((e, t) => ({
  startTime: performance.now(),
  elapsed: 0,
  lastOutputLogTime: false,
  logger: null,
  registerAssetLoad: () => {
    var n;
    let r = null != (n = t().logger) ? n : (0, l.T)({
      location: a.dr.QUEST_HOME_DESKTOP
    });
    if (r.info === s.dG || t().elapsed >= 6e4) return;
    let o = performance.now() - t().startTime;
    o > 6e4 && (o = 6e4);
    let c = {
      elapsed: o
    };
    o - t().lastOutputLogTime > 1e3 && (r.info("QuestHome asset loading duration so far: ".concat(o, "ms")), c.lastOutputLogTime = o), null == t().logger && (c.logger = r), (0, i.j)(() => e(c))
  }
}))