/** Chunk was on 1272 **/
/** chunk id: 879438, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => s
});
var Chunk191336 = require("./191336.js"),
  Chunk731965 = require("./731965.js"),
  Chunk5881 = require("./5881.js"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js");
let s = (0, Chunk191336.U)((e, t) => ({
  startTime: performance.now(),
  elapsed: 0,
  lastOutputLogTime: false,
  logger: null,
  registerAssetLoad: () => {
    var n;
    let r = null != (n = t().logger) ? n : (0, l.T)({
      location: a.dr.QUEST_HOME_DESKTOP
    });
    if (r.info === o.dG || t().elapsed >= 6e4) return;
    let s = performance.now() - t().startTime;
    s > 6e4 && (s = 6e4);
    let c = {
      elapsed: s
    };
    s - t().lastOutputLogTime > 1e3 && (r.info("QuestHome asset loading duration so far: ".concat(s, "ms")), c.lastOutputLogTime = s), null == t().logger && (c.logger = r), (0, i.j)(() => e(c))
  }
}))