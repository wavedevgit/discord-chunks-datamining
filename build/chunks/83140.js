/** Chunk was on 58652 **/
/** chunk id: 83140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk873298 = require("./873298.js"),
  Chunk444802 = require("./444802.js"),
  Chunk17372 = require("./17372.js"),
  Chunk985018 = require("./985018.jsx");
let s = {
  getTitle: () => i.intl.string(i.t.RVX1zT),
  getDisabledTitle: () => i.intl.string(i.t.SYkEBi),
  getDescription: () => i.intl.string(i.t.aqlmp8),
  eligibleReportSubtypes: [Chunk17372.TS.SUB_GORE, Chunk17372.TS.SUB_GLORIFYING_VIOLENCE],
  onApply: () => (0, r.qY)(function() {
    let {
      goreContentGuilds: e,
      goreContentFriendDm: t,
      goreContentNonFriendDm: n
    } = (0, r.T4)(), a = {};
    return e === l.TO.SHOW && (a.goreContentGuilds = l.TO.BLUR), t === l.TO.SHOW && (a.goreContentFriendDm = l.TO.BLUR), n === l.TO.SHOW && (a.goreContentNonFriendDm = l.TO.BLUR), a
  }()),
  predicate: () => {
    let {
      goreContentGuilds: e,
      goreContentFriendDm: t,
      goreContentNonFriendDm: n
    } = (0, r.T4)();
    return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW
  }
}