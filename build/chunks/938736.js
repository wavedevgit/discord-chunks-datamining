/** Chunk was on 93886 (c39579f01d1aedae.js) **/
n.d(t, {
  $s: () => O,
  AV: () => x,
  Hg: () => N,
  Kn: () => y,
  Nq: () => h,
  TW: () => f,
  pn: () => b,
  uv: () => v,
  vx: () => _,
  wG: () => C
});
var r = n(442837),
  a = n(704215),
  i = n(605236),
  l = n(276444),
  o = n(822070),
  s = n(520540),
  c = n(533525),
  d = n(796634),
  u = n(981631),
  m = n(388032);
let h = "40%",
  x = 8,
  p = e => {
    let {
      hasSentAll: t,
      hasSentAtLeastOne: n,
      numSentUsers: r,
      helpdeskArticle: a
    } = e;
    return t ? m.NW.format(m.t["3OYZMT"], {
      helpdeskArticle: a
    }) : n ? m.NW.format(m.t.EkWiZm, {
      numFriends: d.Q - r,
      helpdeskArticle: a
    }) : m.NW.format(m.t.FjrXCg, {
      numFriends: d.Q,
      helpdeskArticle: a
    })
  },
  f = e => {
    let t = v(e);
    return null != t && t !== u.g2L.NOT_ELIGIBLE
  },
  b = e => {
    let t = f(e),
      n = (0, c.b)("PremiumManagementSettings"),
      a = (0, r.e7)([l.Z], () => l.Z.getRecipientStatus());
    return !!t && (!!n || a.size > 0)
  },
  _ = e => {
    let t = g(e),
      n = (0, i.wE)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
    return t && !n
  },
  g = e => {
    let {
      enabled: t
    } = s.g.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }), {
      enabled: n
    } = o.$.useExperiment({
      location: e
    }, {
      autoTrackExposure: !0
    }), a = (0, r.e7)([l.Z], () => l.Z.getIsSenderEligibleForIncentive());
    return t && n && a
  },
  v = e => {
    let {
      enabled: t
    } = s.g.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }), {
      enabled: n
    } = o.$.useExperiment({
      location: e
    }, {
      autoTrackExposure: !0
    }), a = (0, r.e7)([l.Z], () => l.Z.getIsFetchingReferralIncentiveEligibility()), i = (0, r.e7)([l.Z], () => l.Z.getSenderIncentiveState());
    return a ? u.g2L.NOT_ELIGIBLE : n && t ? i : u.g2L.NOT_ELIGIBLE
  },
  j = e => {
    let t = v(e);
    return t === u.g2L.COOLDOWN || t === u.g2L.UNAPPLIED || t === u.g2L.QUALIFIED
  },
  C = e => {
    let t = j(e),
      n = (0, i.wE)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO);
    return t && !n
  },
  y = e => {
    let t = f(e),
      n = (0, c.b)(e),
      r = (0, i.wE)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return !t && n && !r
  },
  O = e => {
    let {
      referralIncentiveLifecycleState: t,
      hasSentAll: n,
      referralsStatuses: r
    } = e;
    switch (t) {
      case u.g2L.NOT_ELIGIBLE:
        return n ? m.NW.string(m.t.M47CJS) : m.NW.string(m.t.USo4s7);
      case u.g2L.ELIGIBLE:
        if (r.sent < 2) return m.NW.formatToPlainString(m.t.md2GU1, {
          discountRate: h
        });
        if (r.redeemed === d.Q) return m.NW.string(m.t.SRJkUV);
        return m.NW.formatToPlainString(m.t.O8mswM, {
          discountRate: h
        });
      case u.g2L.QUALIFIED:
      case u.g2L.COOLDOWN:
      case u.g2L.UNAPPLIED:
        return r.redeemed === d.Q ? m.NW.string(m.t.SRJkUV) : m.NW.string(m.t.MoKnzc)
    }
  },
  N = e => {
    let {
      helpdeskArticle: t,
      referralIncentiveLifecycleState: n,
      referralsStatuses: r,
      isWithinCountdownRange: a
    } = e;
    switch (n) {
      case u.g2L.NOT_ELIGIBLE:
        return p({
          hasSentAll: r.sent >= d.Q,
          hasSentAtLeastOne: r.sent >= 1,
          numSentUsers: r.sent,
          helpdeskArticle: t
        });
      case u.g2L.ELIGIBLE:
        let i = {
          discountRate: h,
          learnMoreLink: t,
          subscriptionInterval: m.NW.string(m.t.FPybU1)
        };
        if (r.redeemed <= 1) return m.NW.format(m.t.nysttb, i);
        return m.NW.format(m.t.nHuzUF, i);
      case u.g2L.QUALIFIED:
      case u.g2L.COOLDOWN:
      case u.g2L.UNAPPLIED:
        if (r.redeemed < d.Q) return m.NW.format(m.t.HGO89v, {
          learnMoreLink: t
        });
        if (!a) return m.NW.format(m.t.iGlQKi, {
          learnMoreLink: t,
          numberOfTimerPeriods: "",
          timePeriodInterval: m.NW.formatToPlainString(m.t["7r7VxM"], {
            time: 6
          })
        });
        return m.NW.format(m.t.Kq6hc3, {
          learnMoreLink: t
        })
    }
  }