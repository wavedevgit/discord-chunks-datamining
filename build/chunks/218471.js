/** Chunk was on 45410 **/
/** chunk id: 218471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk524437 = require("./524437.js"),
  Chunk925513 = require("./925513.js"),
  Chunk82554 = require("./82554.js"),
  Chunk388032 = require("./388032.jsx");
let o = {
  getTitle: () => Chunk388032.intl.string(Chunk388032.t.RVX1zc),
  getDisabledTitle: () => Chunk388032.intl.string(Chunk388032.t.SYkEBg),
  getDescription: () => Chunk388032.intl.string(Chunk388032.t.aqlmp6),
  eligibleReportSubtypes: [Chunk82554.i5.SUB_GORE, Chunk82554.i5.SUB_GLORIFYING_VIOLENCE],
  onApply: () => (0, Chunk925513.Jr)(function() {
    let {
      goreContentGuilds: e,
      goreContentFriendDm: t,
      goreContentNonFriendDm: n
    } = (0, Chunk925513.O6)(), l = {};
    return module === Chunk524437.Q4.SHOW && (Chunk82554.goreContentGuilds = Chunk524437.Q4.BLUR), exports === Chunk524437.Q4.SHOW && (Chunk82554.goreContentFriendDm = Chunk524437.Q4.BLUR), require === Chunk524437.Q4.SHOW && (Chunk82554.goreContentNonFriendDm = Chunk524437.Q4.BLUR), Chunk82554
  }()),
  predicate: () => {
    let {
      goreContentGuilds: e,
      goreContentFriendDm: t,
      goreContentNonFriendDm: n
    } = (0, Chunk925513.O6)();
    return module === Chunk524437.Q4.SHOW || exports === Chunk524437.Q4.SHOW || require === Chunk524437.Q4.SHOW
  }
}