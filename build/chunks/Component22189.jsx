/** Chunk was on web.js **/
/** chunk id: 22189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => eb,
  Z: () => ey
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk779618 = require("./779618.js"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk703656 = require("./703656.js"),
  Chunk892001 = require("./892001.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk547972 = require("./547972.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk424218 = require("./424218.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk489574 = require("./489574.jsx"),
  Chunk469165 = require("./469165.jsx"),
  Chunk554930 = require("./554930.jsx"),
  Chunk229555 = require("./229555.jsx"),
  Chunk768865 = require("./768865.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk526761 = require("./526761.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831989 = require("./831989.js"),
  Chunk143525 = require("./143525.js"),
  Chunk660372 = require("./660372.js"),
  Chunk926433 = require("./926433.js"),
  Chunk302036 = require("./302036.js"),
  Chunk994554 = require("./994554.js"),
  Chunk567396 = require("./567396.js"),
  Chunk925309 = require("./925309.js"),
  Chunk46245 = require("./46245.js"),
  Chunk766491 = require("./766491.js"),
  Chunk193943 = require("./193943.js"),
  Chunk707046 = require("./707046.js"),
  Chunk488459 = require("./488459.js"),
  Chunk334347 = require("./334347.js"),
  Chunk132015 = require("./132015.js"),
  Chunk142416 = require("./142416.js"),
  Chunk498730 = require("./498730.js"),
  Chunk607762 = require("./607762.js"),
  Chunk474106 = require("./474106.js"),
  Chunk572501 = require("./572501.js"),
  Chunk909910 = require("./909910.js"),
  Chunk912429 = require("./912429.js"),
  Chunk91394 = require("./91394.js"),
  Chunk209672 = require("./209672.js"),
  Chunk926262 = require("./926262.js"),
  Chunk272827 = require("./272827.js"),
  Chunk142192 = require("./142192.js"),
  Chunk6472 = require("./6472.js"),
  Chunk275021 = require("./275021.js"),
  Chunk146614 = require("./146614.js"),
  Chunk242514 = require("./242514.js"),
  eb = function(e) {
    return e.CLIENT_THEMES = "clientThemes", e.CLIPS = "clips", e.EARLY_ACCESS = "earlyAccess", e.ENTRANCE_SOUNDS = "entranceSounds", e.PROFILES = "profiles", e.SERVER_BOOSTS = "serverBoosts", e.GREY_SERVER_BOOSTS = "greyServerBoosts", e.SPECIAL_MEMBER_PRICING = "specialMemberPricing", e.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", e.SPECIAL_SHOP_PERKS = "specialShopPerks", e.SUPER_REACTIONS = "superReactions", e.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", e.CUSTOM_APP_ICONS = "customAppIcons", e.MORE_EMOJI_POWER = "moreEmojiPower", e.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", e.SPECIAL_STICKER_ACCESS = "specialStickerAccess", e.LARGE_UPLOADS = "largeUploads", e.HD_VIDEO = "hdVideo", e.BADGE = "badge", e.GREY_BADGE = "greyBadge", e.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", e.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", e.REFERRAL_PROGRAM = "referralProgram", e.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", e.SERVER_PROFILES = "serverProfiles", e.TENURE_BADGE = "tenureBadge", e.PERMADECOS = "permadecos", e.CUSTOM_THEMES = "customThemes", e.PROFILE_WIDGETS = "profileWidgets", e.DISPLAY_NAME_STYLES = "displayNameStyles", e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", e.PREMIUM_GROUP = "premiumGroup", e
  }({});
let ey = () => {
  let {
    analyticsLocations: e
  } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, s.ZP)(), n = (0, T.BU)(j.Uq / 1024, {
    useKibibytes: true
  }), eb = (0, a.e7)([I.Z], () => I.Z.getPremiumTypeSubscription()), ey = null != eb ? A.ZP.getPremiumPlanItem(eb) : null, eO = (null != ey ? A.ZP.getSkuIdForPlan(ey.planId) : null) === j.Si.TIER_2, ev = S.default.getCurrentUser(), eS = (0, A.I5)(ev, j.PremiumTypes.TIER_2), eI = (0, A.I5)(ev, j.PremiumTypes.TIER_0), eT = (0, d.Z)(v.Z), {
    isFractionalPremiumActive: eC
  } = (0, u.Z)(), eA = null != eb && eb.hasPremiumAtLeast(j.PremiumTypes.TIER_2), eN = (0, p.Nj)(o.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eP = (0, m.Z)({
    scrollPosition: G.Y_.TRY_IT_OUT,
    analyticsLocations: e
  }), eR = () => {
    (0, O.openUserSettings)(E.n.APPEARANCE_PANEL, {
      section: M.oAB.APPEARANCE,
      analyticsLocations: e
    })
  }, ew = () => {
    (0, O.openUserSettings)(E.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
      section: M.oAB.GUILD_BOOSTING,
      analyticsLocations: e
    })
  }, eD = () => {
    let t = (0, b.Ml)("openEntranceSounds") ? E.n.SOUNDBOARD_CATEGORY : E.n.VOICE_AND_VIDEO_PANEL;
    (0, O.openUserSettings)(t, {
      section: M.oAB.VOICE,
      subsection: G.GA,
      analyticsLocations: e
    })
  }, ex = () => {
    (0, h.uL)(M.Z5c.COLLECTIBLES_SHOP)
  }, eL = () => {
    (0, y.Z)(Z.Z.CLIPS, {
      analyticsLocations: e
    })
  }, ej = () => {
    let e = (0, b.Gl)("openCustomAppSettings");
    (0, O.openUserSettings)(e ? E.n.APPEARANCE_IN_APP_ICON : E.n.APPEARANCE_PANEL, {
      section: M.oAB.APPEARANCE,
      scrollPosition: e ? true : G.h1.CUSTOM_APP_ICONS
    })
  }, eM = () => {
    window.open(C.Z.getArticleURL(M.BhN.CLIPS), "_blank")
  }, ek = () => {
    eN || (0, p.Q3)(o.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
      dismissAction: k.L.TAKE_ACTION
    }), eP()
  }, eU = () => {
    (0, g.openUserProfileModal)({
      userId: ev.id,
      sourceAnalyticsLocations: e,
      hideRestrictedProfile: true,
      tabSection: U.oh.WIDGETS
    })
  }, eG = i.useCallback(() => {
    (0, O.openUserSettings)(E.n.PROFILE_PANEL, {
      section: M.oAB.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, _.I)({
      analyticsLocations: e
    }))
  }, [e]), eZ = new Date, eF = new Date(eZ.getFullYear(), eZ.getMonth() + 1, 0).getDate(), eB = eZ.getDate() / eF * 100, eV = {
    clientThemes: {
      name: "clientThemes",
      title: F.intl.string(F.t.kWM48G),
      subtitle: F.intl.string(F.t.CjRASJ),
      description: F.intl.string(F.t.jBTTws),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: eR,
      perkImage: z
    },
    clips: eS ? {
      name: "clips",
      title: F.intl.string(F.t.z2jK6X),
      subtitle: F.intl.string(F.t["hxy0/R"]),
      description: F.intl.string(F.t.Z6v86b),
      descriptionCta: eT ? F.intl.string(F.t.jVcuVY) : F.intl.string(F.t.hvVgAZ),
      pillText: F.intl.string(F.t.EYxi0o),
      onCtaClick: eT ? eL : eM,
      perkImage: X
    } : {
      name: "clips",
      title: F.intl.string(F.t.z2jK6X),
      subtitle: F.intl.string(F.t["hxy0/R"]),
      description: F.intl.string(F.t.X9IeN3),
      pillText: F.intl.string(F.t.EYxi0o),
      perkImage: X
    },
    earlyAccess: eS ? {
      name: "earlyAccess",
      title: F.intl.string(F.t.UkLVeJ),
      subtitle: F.intl.string(F.t.xf9ePm),
      description: F.intl.string(F.t["+r4vdg"]),
      perkImage: $
    } : {
      name: "earlyAccess",
      title: F.intl.string(F.t.UkLVeJ),
      subtitle: F.intl.string(F.t.xf9ePm),
      description: F.intl.string(F.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: $
    },
    earlyAccessSeeAllVariant: eS ? {
      name: "earlyAccessSeeAllVariant",
      title: F.intl.string(F.t.UkLVeJ),
      subtitle: F.intl.string(F.t.xf9ePm),
      description: F.intl.string(F.t["+r4vdg"]),
      perkImage: ee
    } : {
      name: "earlyAccess",
      title: F.intl.string(F.t.UkLVeJ),
      subtitle: F.intl.string(F.t.xf9ePm),
      description: F.intl.string(F.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: ee
    },
    entranceSounds: eS ? {
      name: "entranceSounds",
      title: F.intl.string(F.t["f4M+H9"]),
      subtitle: F.intl.string(F.t["7ZCYvC"]),
      description: F.intl.string(F.t.mUT8bO),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: eD,
      perkImage: en
    } : {
      name: "entranceSounds",
      title: F.intl.string(F.t["f4M+H9"]),
      subtitle: F.intl.string(F.t["7ZCYvC"]),
      description: F.intl.string(F.t["3smf/f"]),
      perkImage: en
    },
    entranceSoundsSeeAllVariation: eS ? {
      name: "entranceSoundsSeeAllVariation",
      title: F.intl.string(F.t["f4M+H9"]),
      subtitle: F.intl.string(F.t["7ZCYvC"]),
      description: F.intl.string(F.t.mUT8bO),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: eD,
      perkImage: er
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: F.intl.string(F.t["f4M+H9"]),
      subtitle: F.intl.string(F.t["7ZCYvC"]),
      description: F.intl.string(F.t["3smf/f"]),
      perkImage: er
    },
    profiles: {
      name: "profiles",
      title: F.intl.string(F.t.KcyDwF),
      subtitle: F.intl.string(F.t.Mt3U1W),
      description: F.intl.string(F.t.kWcDK8),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: eP,
      perkImage: q
    },
    serverBoosts: {
      name: "serverBoosts",
      title: F.intl.string(F.t["NyDu/6"]),
      subtitle: F.intl.string(F.t["4pEwXL"]),
      description: eC ? "" : F.intl.string(F.t.jsyNHm),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: eC ? true : ew,
      perkImage: Q,
      hideOnNarrowScreen: !eC,
      imageOverlayText: eC ? F.intl.string(F.t["/VzCKE"]).toLocaleUpperCase() : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: F.intl.string(F.t["NyDu/6"]),
      subtitle: F.intl.string(F.t["4pEwXL"]),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      perkImage: eh.Z,
      imageOverlayText: F.intl.string(F.t["/VzCKE"]).toLocaleUpperCase()
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: F.intl.string(F.t["0Mykgq"]),
      subtitle: F.intl.string(F.t.opgqDZ),
      description: F.intl.string(F.t["t+QZSd"]),
      descriptionCta: F.intl.string(F.t.dBJVnZ),
      onCtaClick: ex,
      perkImage: ei
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: F.intl.string(F.t["0Mykgq"]),
      subtitle: F.intl.string(F.t.opgqDZ),
      description: F.intl.string(F.t["t+QZSd"]),
      descriptionCta: F.intl.string(F.t.dBJVnZ),
      onCtaClick: ex,
      perkImage: ei
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: F.intl.string(F.t.U68LpL),
      subtitle: F.intl.string(F.t.chRZiX),
      description: F.intl.string(F.t["t+QZSd"]),
      descriptionCta: F.intl.string(F.t.dBJVnZ),
      onCtaClick: ex,
      perkImage: ei
    },
    superReactions: {
      name: "superReactions",
      title: F.intl.string(F.t["6S7kO7"]),
      subtitle: F.intl.string(F.t.kN1JRI),
      description: F.intl.string(F.t.e7FKCi),
      perkImage: ed
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: F.intl.string(F.t.O5R3hr),
      pillText: F.intl.string(F.t.yhEY5G),
      backgroundImage: eo
    },
    badge: {
      name: "badge",
      title: F.intl.string(F.t.dcFfSJ),
      subtitle: F.intl.string(F.t["37MFFq"]),
      perkImage: H,
      description: F.intl.string(F.t.T1IS4j)
    },
    greyBadge: {
      name: "greyBadge",
      title: F.intl.string(F.t.dcFfSJ),
      subtitle: F.intl.string(F.t["37MFFq"]),
      perkImage: eg.Z,
      description: F.intl.string(F.t.T1IS4j),
      imageOverlayText: F.intl.string(F.t["/VzCKE"]).toLocaleUpperCase()
    },
    customAppIcons: {
      name: "customAppIcons",
      title: F.intl.string(F.t.OuItFi),
      subtitle: F.intl.string(F.t.mPyrE6),
      perkImage: J,
      description: F.intl.string(F.t.e7FKCi),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: ej
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: F.intl.string(F.t["R2IV/Q"]),
      subtitle: F.intl.string(F.t.R5Xag2),
      perkImage: et,
      description: F.intl.string(F.t["8lsjSw"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: F.intl.string(F.t.LWsArT),
      subtitle: F.intl.string(F.t.bTzbVk),
      perkImage: (0, L.gx)(t, Y, W),
      description: F.intl.string(F.t.JLnOM2)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: F.intl.string(F.t.tzdIwI),
      subtitle: F.intl.string(F.t.hJG8ZN),
      perkImage: (0, L.gx)(t, K, ec),
      description: F.intl.string(F.t.e7FKCi)
    },
    largeUploads: {
      name: "largeUploads",
      title: F.intl.formatToPlainString(F.t.jqhAdL, {
        premiumMaxSize: n
      }),
      subtitle: F.intl.formatToPlainString(F.t["HI+cfm"], {
        premiumMaxSize: n
      }),
      perkImage: ef,
      description: F.intl.string(F.t["R0gx+0"])
    },
    hdVideo: {
      name: "hdVideo",
      title: F.intl.string(F.t.RSXQYO),
      subtitle: F.intl.string(F.t.ymCPxp),
      perkImage: eu,
      description: F.intl.string(F.t["4WgB/4"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: F.intl.string(F.t.XQCSri),
      subtitle: F.intl.string(F.t.HC5wVV),
      description: F.intl.string(F.t.ee7wQ7),
      descriptionCta: eS || eI ? F.intl.string(F.t.y9TxXV) : F.intl.string(F.t.d8o6lc),
      isPremiumGetCta: !(eS || eI),
      onCtaClick: eS || eI ? ej : true,
      perkImage: ea
    },
    referralProgram: {
      name: "referralProgram",
      title: F.intl.string(F.t.tPY4o9),
      subtitle: F.intl.string(F.t.JY0grC),
      description: F.intl.format(F.t["2JqTF6"], {
        helpdeskArticle: C.Z.getArticleURL(M.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: F.intl.string(F.t.JST6jl),
      isPremiumGetCta: !eO || true,
      perkImage: es
    },
    serverProfiles: {
      name: "serverProfiles",
      title: F.intl.string(F.t.I9TYMg),
      subtitle: F.intl.string(F.t.HMSHeH),
      descriptionCta: eS ? F.intl.string(F.t.jVcuVY) : F.intl.string(F.t.JST6jl),
      isPremiumGetCta: !eS,
      onCtaClick: eS ? eP : true,
      perkImage: el
    },
    permadecos: {
      name: "permadecos",
      title: F.intl.string(F.t["57ngoo"]),
      subtitle: F.intl.string(F.t.piFFjd),
      description: F.intl.format(F.t.Pd7olh, {
        learnMoreLink: C.Z.getArticleURL(M.BhN.PERMADECOS)
      }),
      descriptionCta: eS ? F.intl.string(F.t.jVcuVY) : F.intl.string(F.t.JST6jl),
      isPremiumGetCta: !eS,
      onCtaClick: eS ? ek : true,
      pillText: eN || !eS ? true : F.intl.string(F.t.y2b7CA).toLocaleUpperCase(),
      perkImage: eE.Z
    },
    customThemes: {
      name: "customThemes",
      title: F.intl.string(B.default["76L4b7"]),
      subtitle: F.intl.string(B.default.i3n50h),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: () => {
        (0, f.XO)(f.wh.CUSTOM_THEME)
      },
      perkImage: em.Z
    },
    profileWidgets: {
      name: "profileWidgets",
      title: F.intl.string(F.t.MyEstD),
      subtitle: F.intl.string(F.t["0/ClMI"]),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: eU,
      perkImage: e_.Z,
      pillText: F.intl.string(F.t.y2b7CA).toLocaleUpperCase()
    },
    displayNameStyles: {
      name: "displayNameStyles",
      title: F.intl.string(V.default.ABtBDQ),
      subtitle: F.intl.string(V.default.jhmU5E),
      descriptionCta: F.intl.string(F.t.jVcuVY),
      onCtaClick: eG,
      dismissibleContentType: o.z.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
      perkImage: ep.Z,
      pillText: F.intl.string(F.t.y2b7CA).toLocaleUpperCase()
    },
    recurring3PPromotions: {
      name: "recurring3PPromotions",
      title: F.intl.string(F.t.m7PucM),
      subtitle: " ",
      onCtaClick: () => (0, P.wQ)({
        analyticsLocations: e
      }),
      pillText: F.intl.string(F.t.oW0eUd).toLocaleUpperCase(),
      description: F.intl.format(F.t.zh1X7u, {}),
      descriptionCta: F.intl.string(F.t.w7s5Qr),
      customContent: (0, r.jsx)(R.C, {
        percentage: eB
      })
    },
    premiumGroup: (0, N.k)()
  };
  return eS && eA && (eV.tenureBadge = {
    name: "tenureBadge",
    title: F.intl.string(F.t.rnsqpa),
    pillText: F.intl.string(F.t["jyYgZ+"]).toLocaleUpperCase(),
    perkComponent: (0, r.jsx)(w.Z, {}),
    cardVariant: x.zW.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, D.k)({
      analyticsLocations: e
    })
  }), eV
}