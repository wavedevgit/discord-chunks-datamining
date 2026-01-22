/** Chunk was on 58652 **/
/** chunk id: 843540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk873298 = require("./873298.js"),
  Chunk632119 = require("./632119.js"),
  Chunk17372 = require("./17372.js"),
  Chunk985018 = require("./985018.jsx");
let s = {
  getTitle: () => i.intl.string(i.t["Gtck/t"]),
  getDisabledTitle: () => i.intl.string(i.t.E6UmXa),
  getDescription: () => i.intl.string(i.t.jcRSp6),
  eligibleReportSubtypes: [Chunk17372.TS.SUB_CSAM, Chunk17372.TS.SUB_LOLI, Chunk17372.TS.SUB_NCP, Chunk17372.TS.SUB_SEXUALLY_DEGRADING_CONTENT, Chunk17372.TS.SUB_UNSOLICITED_PORN],
  onApply: () => (0, r.Jz)(function() {
    let {
      explicitContentGuilds: e,
      explicitContentFriendDm: t,
      explicitContentNonFriendDm: n
    } = (0, r.C$)(), a = {};
    return e === l.TO.SHOW && (a.explicitContentGuilds = l.TO.BLUR), t === l.TO.SHOW && (a.explicitContentFriendDm = l.TO.BLUR), n === l.TO.SHOW && (a.explicitContentNonFriendDm = l.TO.BLUR), a
  }()),
  predicate: () => {
    let {
      explicitContentGuilds: e,
      explicitContentFriendDm: t,
      explicitContentNonFriendDm: n
    } = (0, r.C$)();
    return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW
  }
}