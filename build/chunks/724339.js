/** Chunk was on 21738 **/
/** chunk id: 724339, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => o
});
var Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk943849 = require("./943849.js"),
  Chunk654487 = require("./654487.js"),
  Chunk818348 = require("./818348.js");
let o = (0, Chunk353640.v)((e, t) => ({
  startTime: performance.now(),
  elapsed: 0,
  lastOutputLogTime: false,
  logger: null,
  registerAssetLoad: () => {
    var n;
    let r = null != (n = t().logger) ? n : (0, l.L)({
      location: a.rE.QUEST_HOME_DESKTOP
    });
    if (r.info === s.tE || t().elapsed >= 6e4) return;
    let o = performance.now() - t().startTime;
    o > 6e4 && (o = 6e4);
    let c = {
      elapsed: o
    };
    o - t().lastOutputLogTime > 1e3 && (r.info("QuestHome asset loading duration so far: ".concat(o, "ms")), c.lastOutputLogTime = o), null == t().logger && (c.logger = r), (0, i.r)(() => e(c))
  }
}))