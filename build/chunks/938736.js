/** Chunk was on 66181 **/
/** chunk id: 938736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $s: () => c,
  Hg: () => d,
  Kn: () => o
});
var Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk533525 = require("./533525.js"),
  Chunk796634 = require("./796634.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
    let t = (0, s.b)(e),
      n = (0, r.Nj)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !n
  },
  c = e => {
    let {
      hasSentAll: t
    } = e;
    return l.intl.string(l.t.USo4s7)
  },
  d = e => {
    let {
      helpdeskArticle: t,
      referralsStatuses: n
    } = e;
    return (e => {
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
    })({
      hasSentAll: n.sent >= a.Q,
      hasSentAtLeastOne: n.sent >= 1,
      helpdeskArticle: t
    })
  }