/** Chunk was on web.js **/
/** chunk id: 467409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => l
});
var Chunk704215 = require("./704215.js"),
  Chunk314897 = require("./314897.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk57207 = require("./57207.js");
let l = e => {
  let t = o.Z.hasUserHitDCCap(),
    n = (0, a.cv)(),
    l = i.default.getId(),
    c = !(0, s.G5)(l, e),
    u = (0, a.og)(),
    d = null != u ? r.z[u] : "None",
    f = (0, a.Do)();
  return {
    dailyCapReached: t,
    inCooldown: n,
    inAccountTenureRestriction: c,
    lastContentShown: d,
    currentFatigableWinner: null != f ? r.z[f] : "None",
    lastDismissibleContentWinner: d
  }
}