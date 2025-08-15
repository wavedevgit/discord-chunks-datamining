/** Chunk was on 31253 **/
/** chunk id: 523255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SI: () => s,
  hZ: () => _
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk835913 = require("./835913.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk905567 = require("./905567.js");
let s = e => {
    var t;
    if (!u(e)) returnfalse;
    let n = null == (t = a.Z.settings.userContent) ? true : t.safetyUserSentimentNoticeDismissedAt,
      r = null != n ? l.E.toDate(n) : true,
      o = null != r ? i()().diff(r, "days") : null;
    if (null != n && !(null != o && o > 30)) returnfalse;
    let {
      isEligible: s
    } = c.C.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: true
    });
    return s
  },
  u = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
  _ = () => {
    let e = Chunk835913.E.now();
    Chunk675478.hW.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, Chunk675478.fy.INFREQUENT_USER_ACTION)
  }