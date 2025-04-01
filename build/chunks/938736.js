/** Chunk was on 13323 **/
n.d(t, {
  $s: () => d,
  Hg: () => u,
  Kn: () => c
});
var r = n(704215),
  i = n(605236),
  s = n(533525),
  a = n(796634),
  o = n(388032);
let l = e => {
    let {
      hasSentAll: t,
      hasSentAtLeastOne: n,
      numSentUsers: r,
      helpdeskArticle: i
    } = e;
    return t ? o.NW.format(o.t["3OYZMT"], {
      helpdeskArticle: i
    }) : n ? o.NW.format(o.t.EkWiZm, {
      numFriends: a.Q - r,
      helpdeskArticle: i
    }) : o.NW.format(o.t.FjrXCg, {
      numFriends: a.Q,
      helpdeskArticle: i
    })
  },
  c = e => {
    let t = (0, s.b)(e),
      n = (0, i.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !n
  },
  d = e => {
    let {
      hasSentAll: t
    } = e;
    return t ? o.NW.string(o.t.M47CJS) : o.NW.string(o.t.USo4s7)
  },
  u = e => {
    let {
      helpdeskArticle: t,
      referralsStatuses: n
    } = e;
    return l({
      hasSentAll: n.sent >= a.Q,
      hasSentAtLeastOne: n.sent >= 1,
      numSentUsers: n.sent,
      helpdeskArticle: t
    })
  }