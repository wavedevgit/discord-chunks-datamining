/** Chunk was on web.js **/
/** chunk id: 17307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G4: () => h,
  LQ: () => m,
  t4: () => d,
  vx: () => _
}), require("./321073.js"), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk322631 = require("./322631.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let d = (e, t, n) => (0, i.Mw)(e) ? t : n,
  f = 3,
  p = e => {
    let {
      cards: t,
      perksCards: n,
      recurring3PPromotionExperiment: r,
      showPremiumGroup: i
    } = e, a = null != n.tenureBadge ? [n.tenureBadge] : [], s = f - a.length, o = e => {
      let {
        card: n
      } = e;
      t.length < s && t.push(n)
    };
    return i && o({
      card: n.premiumGroup
    }), r && o({
      card: n.recurring3PPromotions
    }), o({
      card: n.displayNameStyles
    }), o({
      card: n.customThemes
    }), o({
      card: n.permadecos
    }), o({
      card: n.newAppStylesUpdateJune2024
    }), t.push(...a), t
  },
  _ = e => {
    let {
      perksCards: t,
      variant: n,
      hideCardsOnNarrowScreen: r,
      isPremiumSubscriber: i,
      fractionalState: a,
      isInReverseTrial: s,
      recurring3PPromotionExperiment: o,
      showPremiumGroup: u,
      isPremiumGroupMember: d
    } = e, f = [];
    switch (n) {
      case l.cJ.PERKS_DISCOVERABILITY:
        f = false === i ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : a === c.xc.FP_ONLY || d ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
        break;
      case l.cJ.WHATS_NEW:
        f = p({
          cards: f,
          perksCards: t,
          recurring3PPromotionExperiment: o,
          showPremiumGroup: u
        });
        break;
      case l.cJ.CARD_CAROUSEL_FIRST_ROW:
        f = false === i ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
        break;
      case l.cJ.CARD_CAROUSEL_SECOND_ROW:
        f = false === i ? [t.customSoundsEverywhere, t.specialStickerAccess] : a === c.xc.FP_ONLY ? s ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
        break;
      case l.cJ.CARD_CAROUSEL_THIRD_ROW:
        f = a === c.xc.FP_ONLY ? s ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge] : [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return r && (f = f.filter(e => !e.hideOnNarrowScreen)), f
  },
  h = e => {
    let t = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
      n = null != t ? o.Ay.getPremiumPlanItem(t) : null,
      i = (null != n ? o.Ay.getSkuIdForPlan(n.planId) : null) === c.pe.TIER_2;
    return e ? i ? {
      title: u.intl.string(u.t.Aw5DRm),
      subtitle: u.intl.string(u.t.aHdO6o)
    } : {
      title: u.intl.string(u.t.N30YE4),
      subtitle: u.intl.string(u.t.GTUdNf)
    } : {
      title: u.intl.string(u.t["Uh3+CA"]),
      subtitle: u.intl.string(u.t["5TFEXv"])
    }
  },
  m = () => {
    let e = (0, r.bG)([a.default], () => a.default.getCurrentUser());
    return (0, o.TW)(e)
  }