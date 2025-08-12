/** Chunk was on 20501 **/
/** chunk id: 938736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $s: () => d,
  Hg: () => u,
  Kn: () => c
});
var Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk533525 = require("./533525.js"),
  Chunk796634 = require("./796634.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
    let {
      hasSentAll: t,
      hasSentAtLeastOne: n,
      helpdeskArticle: i
    } = e;
    return t ? l.intl.format(l.t["TYu+MD"], {
      helpdeskArticle: i
    }) : l.intl.format(l.t["omMr+f"], {
      helpdeskArticle: i
    })
  },
  c = e => {
    let t = (0, s.b)(e),
      n = (0, r.Nj)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !n
  },
  d = e => {
    let {
      hasSentAll: t
    } = e;
    return l.intl.string(l.t.USo4s7)
  },
  u = e => {
    let {
      helpdeskArticle: t,
      referralsStatuses: n
    } = e;
    return o({
      hasSentAll: n.sent >= a.Q,
      hasSentAtLeastOne: n.sent >= 1,
      helpdeskArticle: t
    })
  }