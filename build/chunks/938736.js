/** Chunk was on web.js **/
/** chunk id: 938736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $s: () => u,
  Hg: () => d,
  Kn: () => c
});
var Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk533525 = require("./533525.js"),
  Chunk796634 = require("./796634.js"),
  Chunk388032 = require("./388032.jsx");
let l = e => {
    let {
      hasSentAll: t,
      hasSentAtLeastOne: n,
      helpdeskArticle: r
    } = e;
    return t ? s.intl.format(s.t["TYu+MH"], {
      helpdeskArticle: r
    }) : s.intl.format(s.t["omMr+V"], {
      helpdeskArticle: r
    })
  },
  c = () => {
    let e = (0, Chunk533525.b)(),
      t = (0, Chunk266454.Nj)(Chunk704215.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return module && !exports
  },
  u = e => {
    let {
      hasSentAll: t
    } = e;
    return s.intl.string(s.t.USo4s7)
  },
  d = e => {
    let {
      helpdeskArticle: t,
      referralsStatuses: n
    } = e;
    return l({
      hasSentAll: n.sent >= a.Q,
      hasSentAtLeastOne: n.sent >= 1,
      helpdeskArticle: t
    })
  }