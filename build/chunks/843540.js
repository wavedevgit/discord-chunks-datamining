/** Chunk was on 12236 **/
/** chunk id: 843540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk873298 = require("./873298.js"),
  Chunk632119 = require("./632119.js"),
  Chunk17372 = require("./17372.js"),
  Chunk985018 = require("./985018.jsx");
let s = {
  getTitle: () => a.intl.string(a.t["Gtck/t"]),
  getDisabledTitle: () => a.intl.string(a.t.E6UmXa),
  getDescription: () => a.intl.string(a.t.jcRSp6),
  eligibleReportSubtypes: [Chunk17372.TS.SUB_CSAM, Chunk17372.TS.SUB_LOLI, Chunk17372.TS.SUB_NCP, Chunk17372.TS.SUB_SEXUALLY_DEGRADING_CONTENT, Chunk17372.TS.SUB_UNSOLICITED_PORN],
  onApply: () => (0, r.Jz)(function() {
    let {
      explicitContentGuilds: e,
      explicitContentFriendDm: t,
      explicitContentNonFriendDm: n
    } = (0, r.C$)(), i = {};
    return e === l.TO.SHOW && (i.explicitContentGuilds = l.TO.BLUR), t === l.TO.SHOW && (i.explicitContentFriendDm = l.TO.BLUR), n === l.TO.SHOW && (i.explicitContentNonFriendDm = l.TO.BLUR), i
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