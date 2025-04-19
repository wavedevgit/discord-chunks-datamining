/** Chunk was on 44114 **/
n.d(t, {
  Dp: () => g,
  Gw: () => h,
  Op: () => E,
  gx: () => b,
  iG: () => f,
  mN: () => j,
  oo: () => p,
  sP: () => x
}), n(539854), n(314940);
var i = n(278074),
  r = n(442837),
  s = n(780384),
  l = n(594174),
  a = n(78839),
  o = n(74538),
  c = n(391110),
  d = n(474936),
  u = n(735825),
  m = n(388032);
let g = e => {
    switch (e) {
      case u.EB.PENDING:
        return m.intl.string(m.t["9o4F4+"]);
      case u.EB.REDEEMABLE:
      case u.EB.REDEEMED:
        return m.intl.string(m.t["3R9pPD"]);
      default:
        return ""
    }
  },
  p = e => {
    switch (e) {
      case u.EB.PENDING:
        return m.intl.string(m.t.nlcs6O);
      case u.EB.REDEEMABLE:
      case u.EB.REDEEMED:
        return m.intl.string(m.t.F915ra);
      default:
        return
    }
  },
  h = e => {
    switch (e) {
      case u.EB.PENDING:
        return m.intl.string(m.t.LAFMBQ);
      case u.EB.REDEEMABLE:
      case u.EB.REDEEMED:
        return m.intl.string(m.t["4cCWPT"]);
      default:
        return
    }
  };

function f(e, t) {
  switch (e) {
    case u.EB.PENDING:
      return null != t ? m.intl.formatToPlainString(m.t.a1eKDg, {
        days: t
      }) : "";
    case u.EB.REDEEMABLE:
      return m.intl.string(m.t.B9eJyc);
    case u.EB.REDEEMED:
      return m.intl.string(m.t.hpy7PD);
    default:
      return ""
  }
}
let b = (e, t, n) => (0, s.wj)(e) ? t : n,
  _ = e => {
    let {
      cards: t,
      perksCards: n,
      isFullScreen: i,
      showTenureCard: r
    } = e, s = i ? 3 : 2, l = e => {
      let {
        card: n
      } = e;
      t.length < s && t.push(n)
    }, a = () => {
      l({
        card: n.specialShopPerks
      })
    }, o = C();
    return null != n.collectibleDeco && l({
      card: n.collectibleDeco
    }), null != n.tenureBadge && l({
      card: n.tenureBadge
    }), null != n.tenureRewardCollectible && !0 === r && l({
      card: n.tenureRewardCollectible
    }), l({
      card: n.permadecos
    }), i && o ? (0 === t.length && a(), l({
      card: n.newAppStylesUpdateJune2024
    }), l({
      card: n.serverProfiles
    })) : i && !o && (l({
      card: n.referralProgram
    }), l({
      card: n.newAppStylesUpdateJune2024
    }), l({
      card: n.serverProfiles
    })), l({
      card: n.earlyAccess
    }), a(), l({
      card: n.unlimitedSuperReactions
    }), t
  },
  x = e => {
    let {
      perksCards: t,
      variant: n,
      isFullScreen: r,
      showTenureCard: s,
      isPremiumSubscriber: l,
      fractionalState: a,
      isInReverseTrial: o
    } = e, u = [];
    switch (n) {
      case c.R0.PERKS_DISCOVERABILITY:
        u = (0, i.EQ)({
          isPremiumSubscriber: l,
          fractionalState: a
        }).with({
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]).with({
          fractionalState: d.a$.FP_ONLY
        }, () => [t.profiles, t.clientThemes, t.hdVideo]).otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
        break;
      case c.R0.WHATS_NEW:
        u = _({
          cards: u,
          perksCards: t,
          isFullScreen: r,
          showTenureCard: s
        });
        break;
      case c.R0.CARD_CAROUSEL_FIRST_ROW:
        u = (0, i.EQ)({
          isPremiumSubscriber: l
        }).with({
          isPremiumSubscriber: !1
        }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
        break;
      case c.R0.CARD_CAROUSEL_SECOND_ROW:
        u = (0, i.EQ)({
          isPremiumSubscriber: l,
          fractionalState: a
        }).with({
          isPremiumSubscriber: !1
        }, () => [t.customSoundsEverywhere, t.specialStickerAccess]).with({
          fractionalState: d.a$.FP_ONLY
        }, () => o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]).otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
        break;
      case c.R0.CARD_CAROUSEL_THIRD_ROW:
        u = (0, i.EQ)({
          fractionalState: a
        }).with({
          fractionalState: d.a$.FP_ONLY
        }, () => o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]).otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge])
    }
    return r || (u = u.filter(e => !e.hideOnNarrowScreen)), u
  },
  E = e => {
    let t = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
      n = null != t ? o.ZP.getPremiumPlanItem(t) : null,
      i = (null != n ? o.ZP.getSkuIdForPlan(n.planId) : null) === d.Si.TIER_2;
    return e ? i ? {
      title: m.intl.string(m.t.Aw5DRk),
      subtitle: m.intl.string(m.t.aHdO6u)
    } : {
      title: m.intl.string(m.t.N30YEx),
      subtitle: m.intl.string(m.t.GTUdNT)
    } : {
      title: m.intl.string(m.t["Uh3+CA"]),
      subtitle: m.intl.string(m.t["5TFEXl"])
    }
  },
  j = () => {
    let e = (0, r.e7)([l.default], () => l.default.getCurrentUser());
    return (0, o.I5)(e)
  },
  C = () => {
    let e = l.default.getCurrentUser();
    return (0, o.M5)(e, d.p9.TIER_2)
  }