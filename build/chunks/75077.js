/** Chunk was on web.js **/
/** chunk id: 75077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZM: () => p,
  gx: () => d,
  mN: () => m,
  re: () => h
}), require("./539854.js"), require("./388685.js");
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
      showProfileWidgets: r,
      showDisplayNameStyles: i
    } = e, a = null != n.tenureBadge ? [n.tenureBadge] : [], o = f - a.length, s = e => {
      let {
        card: n
      } = e;
      t.length < o && t.push(n)
    };
    return r && s({
      card: n.profileWidgets
    }), i && s({
      card: n.displayNameStyles
    }), s({
      card: n.customThemes
    }), s({
      card: n.permadecos
    }), s({
      card: n.newAppStylesUpdateJune2024
    }), t.push(...a), t
  },
  p = e => {
    let {
      perksCards: t,
      variant: n,
      hideCardsOnNarrowScreen: r,
      isPremiumSubscriber: i,
      fractionalState: a,
      isInReverseTrial: o,
      showProfileWidgets: s,
      showDisplayNameStyles: u
    } = e, d = [];
    switch (n) {
      case l.gM.PERKS_DISCOVERABILITY:
        d = false === i ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : a === c.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
        break;
      case l.gM.WHATS_NEW:
        d = _({
          cards: d,
          perksCards: t,
          showProfileWidgets: s,
          showDisplayNameStyles: u
        });
        break;
      case l.gM.CARD_CAROUSEL_FIRST_ROW:
        d = false === i ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
        break;
      case l.gM.CARD_CAROUSEL_SECOND_ROW:
        d = false === i ? [t.customSoundsEverywhere, t.specialStickerAccess] : a === c.a$.FP_ONLY ? o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
        break;
      case l.gM.CARD_CAROUSEL_THIRD_ROW:
        d = a === c.a$.FP_ONLY ? o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge] : [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return r && (d = d.filter(e => !e.hideOnNarrowScreen)), d
  },
  h = e => {
    let t = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()),
      n = null != t ? s.ZP.getPremiumPlanItem(t) : null,
      i = (null != n ? s.ZP.getSkuIdForPlan(n.planId) : null) === c.Si.TIER_2;
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
    let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
    return (0, Chunk74538.I5)(module)
  }