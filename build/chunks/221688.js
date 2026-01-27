/** Chunk was on 60667 **/
/** chunk id: 221688, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X8: () => c,
  dB: () => d,
  gr: () => o
});
var Chunk554146 = require("./554146.js"),
  Chunk826673 = require("./826673.js"),
  Chunk103411 = require("./103411.js"),
  Chunk664654 = require("./664654.js"),
  Chunk985018 = require("./985018.jsx");
let o = () => {
    let e = (0, l.m)(),
      t = (0, i.JZ)(r.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return e && !t
  },
  c = e => {
    let {
      hasSentAll: t
    } = e;
    return a.intl.string(a.t.USo4s7)
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
        helpdeskArticle: r
      } = e;
      return t ? a.intl.format(a.t["TYu+MH"], {
        helpdeskArticle: r
      }) : a.intl.format(a.t["omMr+V"], {
        helpdeskArticle: r
      })
    })({
      hasSentAll: n.sent >= s.Z,
      hasSentAtLeastOne: n.sent >= 1,
      helpdeskArticle: t
    })
  }