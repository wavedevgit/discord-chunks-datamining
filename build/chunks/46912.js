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
  getTitle: () => a.intl.string(a.t["Gtck/t"]),
  getDisabledTitle: () => a.intl.string(a.t.E6UmXa),
  getDescription: () => a.intl.string(a.t.jcRSp6),
  eligibleReportSubtypes: [Chunk82554.i5.SUB_CSAM, Chunk82554.i5.SUB_LOLI, Chunk82554.i5.SUB_NCP, Chunk82554.i5.SUB_SEXUALLY_DEGRADING_CONTENT, Chunk82554.i5.SUB_UNSOLICITED_PORN],
  onApply: () => (0, l.zj)(function() {
    let {
      explicitContentGuilds: e,
      explicitContentFriendDm: t,
      explicitContentNonFriendDm: n
    } = (0, l.l4)(), i = {};
    return e === r.Q4.SHOW && (i.explicitContentGuilds = r.Q4.BLUR), t === r.Q4.SHOW && (i.explicitContentFriendDm = r.Q4.BLUR), n === r.Q4.SHOW && (i.explicitContentNonFriendDm = r.Q4.BLUR), i
  }()),
  predicate: () => {
    let {
      explicitContentGuilds: e,
      explicitContentFriendDm: t,
      explicitContentNonFriendDm: n
    } = (0, l.l4)();
    return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW
  }
}