/** Chunk was on web.js **/
/** chunk id: 75077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZM: () => p,
  gx: () => d,
  mN: () => m,
  re: () => h
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk391110 = require("./391110.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let d = (e, t, n) => (0, i.wj)(e) ? t : n,
  f = 3,
  _ = e => {
    let {
      cards: t,
      perksCards: n,
      showVoiceFiltersCard: r,
      showCustomThemesCard: i,
      isSeptember2025MarketingMomentEligible: a
    } = e, o = f, s = e => {
      let {
        card: n
      } = e;
      t.length < o && t.push(n)
    }, l = () => {
      s({
        card: n.specialShopPerks
      })
    }, c = g();
    return a && s({
      card: n.september2025MarketingMoment
    }), r ? s({
      card: n.voiceFilters
    }) : i ? s({
      card: n.customThemes
    }) : s({
      card: n.nameplates
    }), null != n.tenureBadge && s({
      card: n.tenureBadge
    }), s({
      card: n.permadecos
    }), c ? 0 === t.length && l() : s({
      card: n.referralProgram
    }), s({
      card: n.newAppStylesUpdateJune2024
    }), s({
      card: n.serverProfiles
    }), s({
      card: n.earlyAccess
    }), s({
      card: n.unlimitedSuperReactions
    }), t
  },
  p = e => {
    let {
      perksCards: t,
      variant: n,
      hideCardsOnNarrowScreen: r,
      isPremiumSubscriber: i,
      fractionalState: a,
      isInReverseTrial: o,
      showVoiceFiltersCard: s,
      showCustomThemesCard: u,
      isSeptember2025MarketingMomentEligible: d
    } = e, f = [];
    switch (n) {
      case l.gM.PERKS_DISCOVERABILITY:
        f = false === i ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : a === c.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
        break;
      case l.gM.WHATS_NEW:
        f = _({
          cards: f,
          perksCards: t,
          showVoiceFiltersCard: s,
          showCustomThemesCard: u,
          isSeptember2025MarketingMomentEligible: d
        });
        break;
      case l.gM.CARD_CAROUSEL_FIRST_ROW:
        f = false === i ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
        break;
      case l.gM.CARD_CAROUSEL_SECOND_ROW:
        f = false === i ? [t.customSoundsEverywhere, t.specialStickerAccess] : a === c.a$.FP_ONLY ? o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
        break;
      case l.gM.CARD_CAROUSEL_THIRD_ROW:
        f = a === c.a$.FP_ONLY ? o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge] : [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return r && (f = f.filter(e => !e.hideOnNarrowScreen)), f
  },
  h = e => {
    let t = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()),
      n = null != t ? s.ZP.getPremiumPlanItem(t) : null,
      i = (null != n ? s.ZP.getSkuIdForPlan(n.planId) : null) === c.Si.TIER_2;
    return e ? i ? {
      title: u.intl.string(u.t.Aw5DRk),
      subtitle: u.intl.string(u.t.aHdO6u)
    } : {
      title: u.intl.string(u.t.N30YEx),
      subtitle: u.intl.string(u.t.GTUdNT)
    } : {
      title: u.intl.string(u.t["Uh3+CA"]),
      subtitle: u.intl.string(u.t["5TFEXl"])
    }
  },
  m = () => {
    let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
    return (0, Chunk74538.I5)(module)
  },
  g = () => {
    let e = Chunk594174.default.getCurrentUser();
    return (0, Chunk74538.M5)(module, Chunk474936.p9.TIER_2)
  }