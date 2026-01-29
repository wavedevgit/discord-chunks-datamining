/** Chunk was on 73734 **/
/** chunk id: 597936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BN: () => c,
  li: () => E
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk335871 = require("./335871.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk431162 = require("./431162.js");
let c = e => {
    var t;
    if (!u(e)) returnfalse;
    let n = null == (t = o.A.settings.userContent) ? true : t.safetyUserSentimentNoticeDismissedAt,
      r = null != n ? l.D.toDate(n) : true,
      a = null != r ? i()().diff(r, "days") : null;
    if (null != n && !(null != a && a > 30)) returnfalse;
    let {
      isEligible: c
    } = s.O.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: true
    });
    return c
  },
  u = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
  E = () => {
    let e = l.D.now();
    a.wc.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, a.Sb.INFREQUENT_USER_ACTION)
  }