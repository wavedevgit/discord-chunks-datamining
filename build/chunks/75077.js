/** Chunk was on 624 **/
n.d(t, {
  BS: () => E,
  Dp: () => N,
  Gw: () => j,
  Op: () => y,
  gx: () => v,
  iG: () => O,
  k3: () => b,
  mN: () => A,
  oo: () => _,
  sP: () => I,
  t2: () => C,
  vZ: () => x
}), n(653041), n(627341);
var r = n(278074),
  i = n(442837),
  s = n(780384),
  a = n(410154),
  l = n(594174),
  o = n(78839),
  c = n(74538),
  d = n(331119),
  u = n(575595),
  m = n(650032),
  g = n(391110),
  p = n(474936),
  h = n(735825),
  f = n(388032);
let b = e => {
    switch (e) {
      case h.EB.PENDING:
        return f.NW.string(f.t.fhK8ho);
      case h.EB.REDEEMABLE:
        return f.NW.string(f.t["084A8/"]);
      case h.EB.REDEEMED:
        return f.NW.string(f.t["5kxiMz"]);
      default:
        return ""
    }
  },
  N = e => {
    switch (e) {
      case h.EB.PENDING:
        return f.NW.string(f.t["9o4F4+"]);
      case h.EB.REDEEMABLE:
      case h.EB.REDEEMED:
        return f.NW.string(f.t["3R9pPD"]);
      default:
        return ""
    }
  },
  x = (e, t, n) => {
    switch (e) {
      case h.EB.PENDING:
        return t === h.Ft.FREE_GUILD_BOOST_1_MONTH ? f.NW.string(f.t.hnbagI) : f.NW.string(f.t["73+DnJ"]);
      case h.EB.REDEEMABLE:
        if (t === h.Ft.FREE_GUILD_BOOST_1_MONTH) return n ? f.NW.string(f.t.RrwI8f) : f.NW.string(f.t.P1Xqqa);
        return f.NW.string(f.t.K687hI);
      case h.EB.REDEEMED:
        return f.NW.string(f.t["QvW/MT"]);
      default:
        return
    }
  },
  _ = e => {
    switch (e) {
      case h.EB.PENDING:
        return f.NW.string(f.t.nlcs6O);
      case h.EB.REDEEMABLE:
      case h.EB.REDEEMED:
        return f.NW.string(f.t.F915ra);
      default:
        return
    }
  },
  E = e => {
    switch (e) {
      case h.EB.PENDING:
        return f.NW.string(f.t.tncFsb);
      case h.EB.REDEEMABLE:
        return;
      case h.EB.REDEEMED:
        return f.NW.string(f.t.OcdQND);
      default:
        return
    }
  },
  j = e => {
    switch (e) {
      case h.EB.PENDING:
        return f.NW.string(f.t.LAFMBQ);
      case h.EB.REDEEMABLE:
      case h.EB.REDEEMED:
        return f.NW.string(f.t["4cCWPT"]);
      default:
        return
    }
  };

function C(e, t) {
  switch (e) {
    case h.EB.PENDING:
      return null != t ? f.NW.formatToPlainString(f.t.FULtam, {
        days: t
      }) : "";
    case h.EB.REDEEMABLE:
      return f.NW.string(f.t["+zx47e"]);
    case h.EB.REDEEMED:
      return f.NW.string(f.t["5kxiMz"]);
    default:
      return ""
  }
}

function O(e, t) {
  switch (e) {
    case h.EB.PENDING:
      return null != t ? f.NW.formatToPlainString(f.t.a1eKDg, {
        days: t
      }) : "";
    case h.EB.REDEEMABLE:
      return f.NW.string(f.t.B9eJyc);
    case h.EB.REDEEMED:
      return f.NW.string(f.t.hpy7PD);
    default:
      return ""
  }
}
let v = (e, t, n) => (0, s.wj)(e) ? t : n,
  S = "getWhatsNewRow",
  T = e => {
    let {
      cards: t,
      perksCards: n,
      isFullScreen: r,
      showTenureCard: i,
      shopMarketingVariation: s
    } = e, l = r ? 3 : 2, o = e => {
      let {
        card: n
      } = e;
      t.length < l && t.push(n)
    }, c = () => {
      s !== a.C5.DEFAULT ? o({
        card: n.specialShopPerks
      }) : o({
        card: n.specialMemberPricing
      })
    }, {
      enabled: g
    } = m._.getCurrentConfig({
      location: S
    }, {
      autoTrackExposure: !1
    }), {
      enabled: p
    } = u.r.getCurrentConfig({
      location: S
    }, {
      autoTrackExposure: !1
    }), {
      enabled: h
    } = d.C.getCurrentConfig({
      location: S
    }, {
      autoTrackExposure: !1
    }), f = g && !p && !h, b = P();
    return null != n.tenureBadge && o({
      card: n.tenureBadge
    }), null != n.tenureRewardCollectible && !0 === i && o({
      card: n.tenureRewardCollectible
    }), null != n.freeBoost && !0 === i && o({
      card: n.freeBoost
    }), null != n.shyProject && o({
      card: n.shyProject
    }), r && b ? (0 === t.length && c(), o({
      card: n.newAppStylesUpdateJune2024
    }), o({
      card: n.serverProfiles
    })) : r && !b && (f || null != n.shyProject ? f && o({
      card: n.referralProgram
    }) : c(), o({
      card: n.newAppStylesUpdateJune2024
    }), o({
      card: n.serverProfiles
    })), o({
      card: n.earlyAccess
    }), c(), o({
      card: n.unlimitedSuperReactions
    }), t
  },
  I = e => {
    let {
      perksCards: t,
      variant: n,
      shopMarketingVariation: i,
      isFullScreen: s,
      showTenureCard: a,
      isPremiumSubscriber: l,
      fractionalState: o,
      isInReverseTrial: c
    } = e, d = [];
    switch (n) {
      case g.R0.PERKS_DISCOVERABILITY:
        d = (0, r.EQ)({
          isPremiumSubscriber: l,
          fractionalState: o
        }).with({
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]).with({
          fractionalState: p.a$.FP_ONLY
        }, () => [t.profiles, t.clientThemes, t.hdVideo]).otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
        break;
      case g.R0.WHATS_NEW:
        d = T({
          cards: d,
          perksCards: t,
          isFullScreen: s,
          showTenureCard: a,
          shopMarketingVariation: i
        });
        break;
      case g.R0.CARD_CAROUSEL_FIRST_ROW:
        d = (0, r.EQ)({
          isPremiumSubscriber: l
        }).with({
          isPremiumSubscriber: !1
        }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
        break;
      case g.R0.CARD_CAROUSEL_SECOND_ROW:
        d = (0, r.EQ)({
          isPremiumSubscriber: l,
          fractionalState: o
        }).with({
          isPremiumSubscriber: !1
        }, () => [t.customSoundsEverywhere, t.specialStickerAccess]).with({
          fractionalState: p.a$.FP_ONLY
        }, () => c ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]).otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
        break;
      case g.R0.CARD_CAROUSEL_THIRD_ROW:
        d = (0, r.EQ)({
          fractionalState: o
        }).with({
          fractionalState: p.a$.FP_ONLY
        }, () => c ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]).otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge])
    }
    return s || (d = d.filter(e => !e.hideOnNarrowScreen)), d
  },
  y = e => {
    let t = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
      n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
      r = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === p.Si.TIER_2;
    return e ? r ? {
      title: f.NW.string(f.t.Aw5DRk),
      subtitle: f.NW.string(f.t.aHdO6u)
    } : {
      title: f.NW.string(f.t.N30YEx),
      subtitle: f.NW.string(f.t.GTUdNT)
    } : {
      title: f.NW.string(f.t["Uh3+CA"]),
      subtitle: f.NW.string(f.t["5TFEXl"])
    }
  },
  A = () => {
    let e = (0, i.e7)([l.default], () => l.default.getCurrentUser());
    return (0, c.I5)(e)
  },
  P = () => {
    let e = l.default.getCurrentUser();
    return (0, c.M5)(e, p.p9.TIER_2)
  }