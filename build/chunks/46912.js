/** Chunk was on 54844 **/
/** chunk id: 46912, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk524437 = require("./524437.js"),
  Chunk656577 = require("./656577.js"),
  Chunk82554 = require("./82554.js"),
  Chunk388032 = require("./388032.jsx");
let s = {
  getTitle: () => Chunk388032.intl.string(Chunk388032.t["Gtck/t"]),
  getDisabledTitle: () => Chunk388032.intl.string(Chunk388032.t.E6UmXa),
  getDescription: () => Chunk388032.intl.string(Chunk388032.t.jcRSp6),
  eligibleReportSubtypes: [Chunk82554.i5.SUB_CSAM, Chunk82554.i5.SUB_LOLI, Chunk82554.i5.SUB_NCP, Chunk82554.i5.SUB_SEXUALLY_DEGRADING_CONTENT, Chunk82554.i5.SUB_UNSOLICITED_PORN],
  onApply: () => (0, Chunk656577.zj)(function() {
    let {
      explicitContentGuilds: e,
      explicitContentFriendDm: t,
      explicitContentNonFriendDm: n
    } = (0, Chunk656577.l4)(), i = {};
    return module === Chunk524437.Q4.SHOW && (Chunk82554.explicitContentGuilds = Chunk524437.Q4.BLUR), exports === Chunk524437.Q4.SHOW && (Chunk82554.explicitContentFriendDm = Chunk524437.Q4.BLUR), require === Chunk524437.Q4.SHOW && (Chunk82554.explicitContentNonFriendDm = Chunk524437.Q4.BLUR), Chunk82554
  }()),
  predicate: () => {
    let {
      explicitContentGuilds: e,
      explicitContentFriendDm: t,
      explicitContentNonFriendDm: n
    } = (0, Chunk656577.l4)();
    return module === Chunk524437.Q4.SHOW || exports === Chunk524437.Q4.SHOW || require === Chunk524437.Q4.SHOW
  }
}