/** Chunk was on web.js **/
/** chunk id: 597936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BN: () => c,
  li: () => f
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk335871 = require("./335871.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk431162 = require("./431162.js");
let c = e => {
    var t;
    if (!d(e)) returnfalse;
    let n = null == (t = o.A.settings.userContent) ? true : t.safetyUserSentimentNoticeDismissedAt,
      r = null != n ? a.D.toDate(n) : true,
      s = null != r ? i()().diff(r, "days") : null,
      c = null != s && s > 30;
    if (null != n && !c) returnfalse;
    let {
      isEligible: u
    } = l.O.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: true
    });
    return u
  },
  u = 2592e6,
  d = e => null != e && Date.now() - e.createdAt.getTime() > u,
  f = () => {
    let e = a.D.now();
    s.wc.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, s.Sb.INFREQUENT_USER_ACTION)
  }