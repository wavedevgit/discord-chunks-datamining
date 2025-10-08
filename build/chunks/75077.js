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
      showProfileWidgets: r
    } = e, i = f, a = e => {
      let {
        card: n
      } = e;
      t.length < i && t.push(n)
    };
    return r && a({
      card: n.profileWidgets
    }), a({
      card: n.customThemes
    }), null != n.tenureBadge && a({
      card: n.tenureBadge
    }), a({
      card: n.permadecos
    }), a({
      card: n.newAppStylesUpdateJune2024
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
      showProfileWidgets: s
    } = e, u = [];
    switch (n) {
      case l.gM.PERKS_DISCOVERABILITY:
        u = false === i ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : a === c.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
        break;
      case l.gM.WHATS_NEW:
        u = _({
          cards: u,
          perksCards: t,
          showProfileWidgets: s
        });
        break;
      case l.gM.CARD_CAROUSEL_FIRST_ROW:
        u = false === i ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
        break;
      case l.gM.CARD_CAROUSEL_SECOND_ROW:
        u = false === i ? [t.customSoundsEverywhere, t.specialStickerAccess] : a === c.a$.FP_ONLY ? o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
        break;
      case l.gM.CARD_CAROUSEL_THIRD_ROW:
        u = a === c.a$.FP_ONLY ? o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge] : [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return r && (u = u.filter(e => !e.hideOnNarrowScreen)), u
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
  }