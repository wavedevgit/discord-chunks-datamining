/** Chunk was on 99277 **/
n.d(t, {
  $s: () => T,
  AV: () => E,
  Hg: () => S,
  Kn: () => C,
  Nq: () => p,
  TW: () => m,
  pn: () => h,
  uv: () => O,
  vx: () => b,
  wG: () => I
});
var r = n(442837),
  i = n(704215),
  o = n(605236),
  l = n(276444),
  a = n(822070),
  s = n(520540),
  c = n(533525),
  u = n(796634),
  d = n(981631),
  _ = n(388032);
let p = "40%",
  E = 8,
  f = e => {
    let {
      hasSentAll: t,
      hasSentAtLeastOne: n,
      numSentUsers: r,
      helpdeskArticle: i
    } = e;
    return t ? _.NW.format(_.t["3OYZMT"], {
      helpdeskArticle: i
    }) : n ? _.NW.format(_.t.EkWiZm, {
      numFriends: u.Q - r,
      helpdeskArticle: i
    }) : _.NW.format(_.t.FjrXCg, {
      numFriends: u.Q,
      helpdeskArticle: i
    })
  },
  m = e => {
    let t = O(e);
    return null != t && t !== d.g2L.NOT_ELIGIBLE
  },
  h = e => {
    let t = m(e),
      n = (0, c.b)("PremiumManagementSettings"),
      i = (0, r.e7)([l.Z], () => l.Z.getRecipientStatus());
    return !!t && (!!n || i.size > 0)
  },
  b = e => {
    let t = g(e),
      n = (0, o.wE)(i.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
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
    } = a.$.useExperiment({
      location: e
    }, {
      autoTrackExposure: !0
    }), i = (0, r.e7)([l.Z], () => l.Z.getIsSenderEligibleForIncentive());
    return t && n && i
  },
  O = e => {
    let {
      enabled: t
    } = s.g.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }), {
      enabled: n
    } = a.$.useExperiment({
      location: e
    }, {
      autoTrackExposure: !0
    }), i = (0, r.e7)([l.Z], () => l.Z.getIsFetchingReferralIncentiveEligibility()), o = (0, r.e7)([l.Z], () => l.Z.getSenderIncentiveState());
    return i ? d.g2L.NOT_ELIGIBLE : n && t ? o : d.g2L.NOT_ELIGIBLE
  },
  N = e => {
    let t = O(e);
    return t === d.g2L.COOLDOWN || t === d.g2L.UNAPPLIED || t === d.g2L.QUALIFIED
  },
  I = e => {
    let t = N(e),
      n = (0, o.wE)(i.z.REFERRAL_INCENTIVE_AWARDED_INFO);
    return t && !n
  },
  C = e => {
    let t = m(e),
      n = (0, c.b)(e),
      r = (0, o.wE)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return !t && n && !r
  },
  T = e => {
    let {
      referralIncentiveLifecycleState: t,
      hasSentAll: n,
      referralsStatuses: r
    } = e;
    switch (t) {
      case d.g2L.NOT_ELIGIBLE:
        return n ? _.NW.string(_.t.M47CJS) : _.NW.string(_.t.USo4s7);
      case d.g2L.ELIGIBLE:
        if (r.sent < 2) return _.NW.formatToPlainString(_.t.md2GU1, {
          discountRate: p
        });
        if (r.redeemed === u.Q) return _.NW.string(_.t.SRJkUV);
        return _.NW.formatToPlainString(_.t.O8mswM, {
          discountRate: p
        });
      case d.g2L.QUALIFIED:
      case d.g2L.COOLDOWN:
      case d.g2L.UNAPPLIED:
        return r.redeemed === u.Q ? _.NW.string(_.t.SRJkUV) : _.NW.string(_.t.MoKnzc)
    }
  },
  S = e => {
    let {
      helpdeskArticle: t,
      referralIncentiveLifecycleState: n,
      referralsStatuses: r,
      isWithinCountdownRange: i
    } = e;
    switch (n) {
      case d.g2L.NOT_ELIGIBLE:
        return f({
          hasSentAll: r.sent >= u.Q,
          hasSentAtLeastOne: r.sent >= 1,
          numSentUsers: r.sent,
          helpdeskArticle: t
        });
      case d.g2L.ELIGIBLE:
        let o = {
          discountRate: p,
          learnMoreLink: t,
          subscriptionInterval: _.NW.string(_.t.FPybU1)
        };
        if (r.redeemed <= 1) return _.NW.format(_.t.nysttb, o);
        return _.NW.format(_.t.nHuzUF, o);
      case d.g2L.QUALIFIED:
      case d.g2L.COOLDOWN:
      case d.g2L.UNAPPLIED:
        if (r.redeemed < u.Q) return _.NW.format(_.t.HGO89v, {
          learnMoreLink: t
        });
        if (!i) return _.NW.format(_.t.iGlQKi, {
          learnMoreLink: t,
          numberOfTimerPeriods: "",
          timePeriodInterval: _.NW.formatToPlainString(_.t["7r7VxM"], {
            time: 6
          })
        });
        return _.NW.format(_.t.Kq6hc3, {
          learnMoreLink: t
        })
    }
  }