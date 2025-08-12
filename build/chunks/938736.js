/** Chunk was on 20501 **/
/** chunk id: 938736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $s: () => u,
  Hg: () => m,
  Kn: () => d
});
var Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk53521 = require("./53521.js"),
  Chunk533525 = require("./533525.js"),
  Chunk796634 = require("./796634.js"),
  Chunk388032 = require("./388032.jsx");
let c = e => {
    let {
      hasSentAll: t,
      hasSentAtLeastOne: n,
      numSentUsers: i,
      helpdeskArticle: r
    } = e, a = s.Z.getCurrentConfig({
      location: "getStandardExperienceSubheaderCopy"
    }, {
      autoTrackExposure: false
    });
    return t ? a.enabled ? o.intl.format(o.t["TYu+MD"], {
      helpdeskArticle: r
    }) : o.intl.format(o.t["3OYZMT"], {
      helpdeskArticle: r
    }) : n ? a.enabled ? o.intl.format(o.t["omMr+f"], {
      helpdeskArticle: r
    }) : o.intl.format(o.t.EkWiZm, {
      numFriends: l.Q - i,
      helpdeskArticle: r
    }) : a.enabled ? o.intl.format(o.t["omMr+f"], {
      helpdeskArticle: r
    }) : o.intl.format(o.t.FjrXCg, {
      numFriends: l.Q,
      helpdeskArticle: r
    })
  },
  d = e => {
    let t = (0, a.b)(e),
      n = (0, r.Nj)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !n
  },
  u = e => {
    let {
      hasSentAll: t
    } = e, n = s.Z.getCurrentConfig({
      location: "getHeaderCopy"
    }, {
      autoTrackExposure: false
    });
    return t ? n.enabled ? o.intl.string(o.t.USo4s7) : o.intl.string(o.t.M47CJS) : o.intl.string(o.t.USo4s7)
  },
  m = e => {
    let {
      helpdeskArticle: t,
      referralsStatuses: n
    } = e;
    return c({
      hasSentAll: n.sent >= l.Q,
      hasSentAtLeastOne: n.sent >= 1,
      numSentUsers: n.sent,
      helpdeskArticle: t
    })
  }