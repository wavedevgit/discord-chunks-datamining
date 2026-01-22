/** Chunk was on web.js **/
/** chunk id: 221688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X8: () => u,
  dB: () => d,
  gr: () => c
});
var Chunk554146 = require("./554146.js"),
  Chunk826673 = require("./826673.js"),
  Chunk103411 = require("./103411.js"),
  Chunk664654 = require("./664654.js"),
  Chunk985018 = require("./985018.jsx");
let l = e => {
    let {
      hasSentAll: t,
      hasSentAtLeastOne: n,
      helpdeskArticle: r
    } = e;
    return t ? o.intl.format(o.t["TYu+MH"], {
      helpdeskArticle: r
    }) : o.intl.format(o.t["omMr+V"], {
      helpdeskArticle: r
    })
  },
  c = () => {
    let e = (0, a.m)(),
      t = (0, i.JZ)(r.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return e && !t
  },
  u = e => {
    let {
      hasSentAll: t
    } = e;
    return o.intl.string(o.t.USo4s7)
  },
  d = e => {
    let {
      helpdeskArticle: t,
      referralsStatuses: n
    } = e;
    return l({
      hasSentAll: n.sent >= s.Z,
      hasSentAtLeastOne: n.sent >= 1,
      helpdeskArticle: t
    })
  }