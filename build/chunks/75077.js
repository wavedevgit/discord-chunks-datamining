/** Chunk was on 66181 **/
/** chunk id: 75077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZM: () => m,
  gx: () => u,
  mN: () => g,
  re: () => p
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk391110 = require("./391110.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let u = (e, t, n) => (0, r.wj)(e) ? t : n,
  m = e => {
    let {
      perksCards: t,
      variant: n,
      hideCardsOnNarrowScreen: i,
      isPremiumSubscriber: r,
      fractionalState: s,
      isInReverseTrial: a,
      showVoiceFiltersCard: l
    } = e, d = [];
    switch (n) {
      case o.gM.PERKS_DISCOVERABILITY:
        d = false === r ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : s === c.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
        break;
      case o.gM.WHATS_NEW:
        d = (e => {
          let {
            cards: t,
            perksCards: n,
            showVoiceFiltersCard: i
          } = e, r = e => {
            let {
              card: n
            } = e;
            t.length < 3 && t.push(n)
          }, s = h();
          return r(i ? {
            card: n.voiceFilters
          } : {
            card: n.nameplates
          }), null != n.tenureBadge && r({
            card: n.tenureBadge
          }), r({
            card: n.permadecos
          }), s ? 0 === t.length && r({
            card: n.specialShopPerks
          }) : r({
            card: n.referralProgram
          }), r({
            card: n.newAppStylesUpdateJune2024
          }), r({
            card: n.serverProfiles
          }), r({
            card: n.earlyAccess
          }), r({
            card: n.unlimitedSuperReactions
          }), t
        })({
          cards: d,
          perksCards: t,
          showVoiceFiltersCard: l
        });
        break;
      case o.gM.CARD_CAROUSEL_FIRST_ROW:
        d = false === r ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
        break;
      case o.gM.CARD_CAROUSEL_SECOND_ROW:
        d = false === r ? [t.customSoundsEverywhere, t.specialStickerAccess] : s === c.a$.FP_ONLY ? a ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
        break;
      case o.gM.CARD_CAROUSEL_THIRD_ROW:
        d = s === c.a$.FP_ONLY ? a ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge] : [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return i && (d = d.filter(e => !e.hideOnNarrowScreen)), d
  },
  p = e => {
    let t = (0, i.e7)([a.Z], () => a.Z.getPremiumTypeSubscription()),
      n = null != t ? l.ZP.getPremiumPlanItem(t) : null,
      r = (null != n ? l.ZP.getSkuIdForPlan(n.planId) : null) === c.Si.TIER_2;
    return e ? r ? {
      title: d.intl.string(d.t.Aw5DRk),
      subtitle: d.intl.string(d.t.aHdO6u)
    } : {
      title: d.intl.string(d.t.N30YEx),
      subtitle: d.intl.string(d.t.GTUdNT)
    } : {
      title: d.intl.string(d.t["Uh3+CA"]),
      subtitle: d.intl.string(d.t["5TFEXl"])
    }
  },
  g = () => {
    let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
    return (0, Chunk74538.I5)(module)
  },
  h = () => {
    let e = Chunk594174.default.getCurrentUser();
    return (0, Chunk74538.M5)(module, Chunk474936.p9.TIER_2)
  }