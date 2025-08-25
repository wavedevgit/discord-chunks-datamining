/** Chunk was on web.js **/
/** chunk id: 523255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SI: () => c,
  hZ: () => f
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk835913 = require("./835913.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk905567 = require("./905567.js");
let c = e => {
    var t;
    if (!d(e)) returnfalse;
    let n = null == (t = s.Z.settings.userContent) ? true : t.safetyUserSentimentNoticeDismissedAt,
      r = null != n ? o.E.toDate(n) : true,
      a = null != r ? i()().diff(r, "days") : null,
      c = null != a && a > 30;
    if (null != n && !c) returnfalse;
    let {
      isEligible: u
    } = l.C.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: true
    });
    return u
  },
  u = 2592e6,
  d = e => null != e && Date.now() - e.createdAt.getTime() > u,
  f = () => {
    let e = Chunk835913.E.now();
    Chunk675478.hW.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, Chunk675478.fy.INFREQUENT_USER_ACTION)
  }