/** Chunk was on 54844 **/
/** chunk id: 218471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk524437 = require("./524437.js"),
  Chunk925513 = require("./925513.js"),
  Chunk82554 = require("./82554.js"),
  Chunk388032 = require("./388032.jsx");
let s = {
  getTitle: () => a.intl.string(a.t.RVX1zT),
  getDisabledTitle: () => a.intl.string(a.t.SYkEBi),
  getDescription: () => a.intl.string(a.t.aqlmp8),
  eligibleReportSubtypes: [Chunk82554.i5.SUB_GORE, Chunk82554.i5.SUB_GLORIFYING_VIOLENCE],
  onApply: () => (0, l.Jr)(function() {
    let {
      goreContentGuilds: e,
      goreContentFriendDm: t,
      goreContentNonFriendDm: n
    } = (0, l.O6)(), i = {};
    return e === r.Q4.SHOW && (i.goreContentGuilds = r.Q4.BLUR), t === r.Q4.SHOW && (i.goreContentFriendDm = r.Q4.BLUR), n === r.Q4.SHOW && (i.goreContentNonFriendDm = r.Q4.BLUR), i
  }()),
  predicate: () => {
    let {
      goreContentGuilds: e,
      goreContentFriendDm: t,
      goreContentNonFriendDm: n
    } = (0, l.O6)();
    return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW
  }
}