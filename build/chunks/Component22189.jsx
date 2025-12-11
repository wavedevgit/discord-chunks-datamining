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
  Chunk594928 = require("./594928.js"),
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
  Chunk939101 = require("./939101.js"),
  Chunk486730 = require("./486730.js"),
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
  Chunk57794 = require("./57794.js"),
  Chunk448360 = require("./448360.js"),
  Chunk253636 = require("./253636.js"),
  Chunk371435 = require("./371435.js"),
  Chunk83663 = require("./83663.js"),
  Chunk317194 = require("./317194.js"),
  eb = function(e) {
    return e.CLIENT_THEMES = "clientThemes", e.CLIPS = "clips", e.EARLY_ACCESS = "earlyAccess", e.ENTRANCE_SOUNDS = "entranceSounds", e.PROFILES = "profiles", e.SERVER_BOOSTS = "serverBoosts", e.GREY_SERVER_BOOSTS = "greyServerBoosts", e.SPECIAL_MEMBER_PRICING = "specialMemberPricing", e.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", e.SPECIAL_SHOP_PERKS = "specialShopPerks", e.SUPER_REACTIONS = "superReactions", e.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", e.CUSTOM_APP_ICONS = "customAppIcons", e.MORE_EMOJI_POWER = "moreEmojiPower", e.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", e.SPECIAL_STICKER_ACCESS = "specialStickerAccess", e.LARGE_UPLOADS = "largeUploads", e.HD_VIDEO = "hdVideo", e.BADGE = "badge", e.GREY_BADGE = "greyBadge", e.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", e.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", e.REFERRAL_PROGRAM = "referralProgram", e.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", e.SERVER_PROFILES = "serverProfiles", e.TENURE_BADGE = "tenureBadge", e.PERMADECOS = "permadecos", e.CUSTOM_THEMES = "customThemes", e.PROFILE_WIDGETS = "profileWidgets", e.DISPLAY_NAME_STYLES = "displayNameStyles", e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", e
  }({});
let ey = () => {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, Chunk410030.ZP)(), n = (0, Chunk424218.BU)(Chunk474936.Uq / 1024, {
    useKibibytes: true
  }), eb = (0, Chunk399606.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()), ey = null != eb ? Chunk74538.ZP.getPremiumPlanItem(eb) : null, eO = (null != ey ? Chunk74538.ZP.getSkuIdForPlan(ey.planId) : null) === Chunk474936.Si.TIER_2, ev = Chunk594174.default.getCurrentUser(), eS = (0, Chunk74538.I5)(ev, Chunk474936.PremiumTypes.TIER_2), eI = (0, Chunk74538.I5)(ev, Chunk474936.PremiumTypes.TIER_0), eT = (0, Chunk779618.Z)(Chunk131951.Z), {
    isFractionalPremiumActive: eC
  } = (0, Chunk975298.Z)(), eA = null != eb && eb.hasPremiumAtLeast(Chunk474936.PremiumTypes.TIER_2), eN = (0, Chunk266454.Nj)(Chunk704215.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eP = Chunk594928.JH.useExperiment({
    location: "usePremiumPerksCards"
  }).enabled, eR = (0, Chunk300284.Z)({
    scrollPosition: Chunk526761.Y_.TRY_IT_OUT,
    analyticsLocations: module
  }), ew = () => {
    (0, Chunk518596.openUserSettings)(Chunk313789.n.APPEARANCE_PANEL, {
      section: Chunk981631.oAB.APPEARANCE,
      analyticsLocations: module
    })
  }, eD = () => {
    (0, Chunk518596.openUserSettings)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
      section: Chunk981631.oAB.GUILD_BOOSTING,
      analyticsLocations: module
    })
  }, ex = () => {
    let t = (0, Chunk526665.Ml)("openEntranceSounds") ? Chunk313789.n.SOUNDBOARD_CATEGORY : Chunk313789.n.VOICE_AND_VIDEO_PANEL;
    (0, Chunk518596.openUserSettings)(exports, {
      section: Chunk981631.oAB.VOICE,
      subsection: Chunk526761.GA,
      analyticsLocations: module
    })
  }, eL = () => {
    (0, Chunk703656.uL)(Chunk981631.Z5c.COLLECTIBLES_SHOP)
  }, ej = () => {
    (0, Chunk547972.Z)(Chunk332325.Z.CLIPS, {
      analyticsLocations: module
    })
  }, eM = () => {
    (0, Chunk518596.openUserSettings)(Chunk313789.n.APPEARANCE_PANEL, {
      section: Chunk981631.oAB.APPEARANCE,
      scrollPosition: Chunk526761.h1.CUSTOM_APP_ICONS
    })
  }, ek = () => {
    window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.CLIPS), "_blank")
  }, eU = () => {
    eN || (0, Chunk266454.Q3)(Chunk704215.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
      dismissAction: Chunk921944.L.TAKE_ACTION
    }), eR()
  }, eG = () => {
    (0, Chunk892001.openUserProfileModal)({
      userId: ev.id,
      sourceAnalyticsLocations: module,
      hideRestrictedProfile: true,
      section: Chunk228168.oh.WIDGETS
    })
  }, eZ = Chunk473749.useCallback(() => {
    (0, Chunk518596.openUserSettings)(Chunk313789.n.PROFILE_PANEL, {
      section: Chunk981631.oAB.PROFILE_CUSTOMIZATION,
      analyticsLocations: module
    }, () => (0, Chunk829716.I)({
      analyticsLocations: module
    }))
  }, [module]), eB = new Date, eF = new Date(eB.getFullYear(), eB.getMonth() + 1, 0).getDate(), eV = eB.getDate() / eF * 100, eH = {
    clientThemes: {
      name: "clientThemes",
      title: Chunk388032.intl.string(Chunk388032.t.kWM48G),
      subtitle: Chunk388032.intl.string(Chunk388032.t.CjRASJ),
      description: Chunk388032.intl.string(Chunk388032.t.jBTTws),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: ew,
      perkImage: Chunk567396
    },
    clips: eS ? {
      name: "clips",
      title: Chunk388032.intl.string(Chunk388032.t.z2jK6X),
      subtitle: Chunk388032.intl.string(Chunk388032.t["hxy0/R"]),
      description: Chunk388032.intl.string(Chunk388032.t.Z6v86b),
      descriptionCta: eT ? Chunk388032.intl.string(Chunk388032.t.jVcuVY) : Chunk388032.intl.string(Chunk388032.t.hvVgAZ),
      pillText: Chunk388032.intl.string(Chunk388032.t.EYxi0o),
      onCtaClick: eT ? ej : ek,
      perkImage: Chunk766491
    } : {
      name: "clips",
      title: Chunk388032.intl.string(Chunk388032.t.z2jK6X),
      subtitle: Chunk388032.intl.string(Chunk388032.t["hxy0/R"]),
      description: Chunk388032.intl.string(Chunk388032.t.X9IeN3),
      pillText: Chunk388032.intl.string(Chunk388032.t.EYxi0o),
      perkImage: Chunk766491
    },
    earlyAccess: eS ? {
      name: "earlyAccess",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeJ),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePm),
      description: Chunk388032.intl.string(Chunk388032.t["+r4vdg"]),
      perkImage: Chunk707046
    } : {
      name: "earlyAccess",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeJ),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePm),
      description: Chunk388032.intl.string(Chunk388032.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: Chunk707046
    },
    earlyAccessSeeAllVariant: eS ? {
      name: "earlyAccessSeeAllVariant",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeJ),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePm),
      description: Chunk388032.intl.string(Chunk388032.t["+r4vdg"]),
      perkImage: Chunk488459
    } : {
      name: "earlyAccess",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeJ),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePm),
      description: Chunk388032.intl.string(Chunk388032.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: Chunk488459
    },
    entranceSounds: eS ? {
      name: "entranceSounds",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+H9"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvC"]),
      description: Chunk388032.intl.string(Chunk388032.t.mUT8bO),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: ex,
      perkImage: Chunk132015
    } : {
      name: "entranceSounds",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+H9"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvC"]),
      description: Chunk388032.intl.string(Chunk388032.t["3smf/f"]),
      perkImage: Chunk132015
    },
    entranceSoundsSeeAllVariation: eS ? {
      name: "entranceSoundsSeeAllVariation",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+H9"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvC"]),
      description: Chunk388032.intl.string(Chunk388032.t.mUT8bO),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: ex,
      perkImage: Chunk142416
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+H9"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvC"]),
      description: Chunk388032.intl.string(Chunk388032.t["3smf/f"]),
      perkImage: Chunk142416
    },
    profiles: {
      name: "profiles",
      title: Chunk388032.intl.string(Chunk388032.t.KcyDwF),
      subtitle: Chunk388032.intl.string(Chunk388032.t.Mt3U1W),
      description: Chunk388032.intl.string(Chunk388032.t.kWcDK8),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: eR,
      perkImage: Chunk925309
    },
    serverBoosts: {
      name: "serverBoosts",
      title: Chunk388032.intl.string(Chunk388032.t["NyDu/6"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["4pEwXL"]),
      description: eC ? "" : Chunk388032.intl.string(Chunk388032.t.jsyNHm),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: eC ? true : eD,
      perkImage: Chunk46245,
      hideOnNarrowScreen: !eC,
      imageOverlayText: eC ? Chunk388032.intl.string(Chunk388032.t["/VzCKE"]).toLocaleUpperCase() : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: Chunk388032.intl.string(Chunk388032.t["NyDu/6"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["4pEwXL"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      perkImage: Chunk371435.Z,
      imageOverlayText: Chunk388032.intl.string(Chunk388032.t["/VzCKE"]).toLocaleUpperCase()
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: Chunk388032.intl.string(Chunk388032.t["0Mykgq"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.opgqDZ),
      description: Chunk388032.intl.string(Chunk388032.t["t+QZSd"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.dBJVnZ),
      onCtaClick: eL,
      perkImage: Chunk498730
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: Chunk388032.intl.string(Chunk388032.t["0Mykgq"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.opgqDZ),
      description: Chunk388032.intl.string(Chunk388032.t["t+QZSd"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.dBJVnZ),
      onCtaClick: eL,
      perkImage: Chunk498730
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: Chunk388032.intl.string(Chunk388032.t.U68LpL),
      subtitle: Chunk388032.intl.string(Chunk388032.t.chRZiX),
      description: Chunk388032.intl.string(Chunk388032.t["t+QZSd"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.dBJVnZ),
      onCtaClick: eL,
      perkImage: Chunk498730
    },
    superReactions: {
      name: "superReactions",
      title: Chunk388032.intl.string(Chunk388032.t["6S7kO7"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.kN1JRI),
      description: Chunk388032.intl.string(Chunk388032.t.e7FKCi),
      perkImage: Chunk209672
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: Chunk388032.intl.string(Chunk388032.t.O5R3hr),
      pillText: Chunk388032.intl.string(Chunk388032.t.yhEY5G),
      backgroundImage: Chunk474106
    },
    badge: {
      name: "badge",
      title: Chunk388032.intl.string(Chunk388032.t.dcFfSJ),
      subtitle: Chunk388032.intl.string(Chunk388032.t["37MFFq"]),
      perkImage: Chunk660372,
      description: Chunk388032.intl.string(Chunk388032.t.T1IS4j)
    },
    greyBadge: {
      name: "greyBadge",
      title: Chunk388032.intl.string(Chunk388032.t.dcFfSJ),
      subtitle: Chunk388032.intl.string(Chunk388032.t["37MFFq"]),
      perkImage: Chunk83663.Z,
      description: Chunk388032.intl.string(Chunk388032.t.T1IS4j),
      imageOverlayText: Chunk388032.intl.string(Chunk388032.t["/VzCKE"]).toLocaleUpperCase()
    },
    customAppIcons: {
      name: "customAppIcons",
      title: Chunk388032.intl.string(Chunk388032.t.OuItFi),
      subtitle: Chunk388032.intl.string(Chunk388032.t.mPyrE6),
      perkImage: Chunk193943,
      description: Chunk388032.intl.string(Chunk388032.t.e7FKCi),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: eM
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: Chunk388032.intl.string(Chunk388032.t["R2IV/Q"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.R5Xag2),
      perkImage: Chunk334347,
      description: Chunk388032.intl.string(Chunk388032.t["8lsjSw"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: Chunk388032.intl.string(Chunk388032.t.LWsArT),
      subtitle: Chunk388032.intl.string(Chunk388032.t.bTzbVk),
      perkImage: (0, Chunk75077.gx)(exports, Chunk926433, Chunk302036),
      description: Chunk388032.intl.string(Chunk388032.t.JLnOM2)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: Chunk388032.intl.string(Chunk388032.t.tzdIwI),
      subtitle: Chunk388032.intl.string(Chunk388032.t.hJG8ZN),
      perkImage: (0, Chunk75077.gx)(exports, Chunk994554, Chunk912429),
      description: Chunk388032.intl.string(Chunk388032.t.e7FKCi)
    },
    largeUploads: {
      name: "largeUploads",
      title: Chunk388032.intl.formatToPlainString(Chunk388032.t.jqhAdL, {
        premiumMaxSize: require
      }),
      subtitle: Chunk388032.intl.formatToPlainString(Chunk388032.t["HI+cfm"], {
        premiumMaxSize: require
      }),
      perkImage: Chunk926262,
      description: Chunk388032.intl.string(Chunk388032.t["R0gx+0"])
    },
    hdVideo: {
      name: "hdVideo",
      title: Chunk388032.intl.string(Chunk388032.t.RSXQYO),
      subtitle: Chunk388032.intl.string(Chunk388032.t.ymCPxp),
      perkImage: Chunk91394,
      description: Chunk388032.intl.string(Chunk388032.t["4WgB/4"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: Chunk388032.intl.string(Chunk388032.t.XQCSri),
      subtitle: Chunk388032.intl.string(Chunk388032.t.HC5wVV),
      description: Chunk388032.intl.string(Chunk388032.t.ee7wQ7),
      descriptionCta: eS || eI ? Chunk388032.intl.string(Chunk388032.t.y9TxXV) : Chunk388032.intl.string(Chunk388032.t.d8o6lc),
      isPremiumGetCta: !(eS || eI),
      onCtaClick: eS || eI ? eM : true,
      perkImage: Chunk607762
    },
    referralProgram: {
      name: "referralProgram",
      title: Chunk388032.intl.string(Chunk388032.t.tPY4o9),
      subtitle: Chunk388032.intl.string(Chunk388032.t.JY0grC),
      description: Chunk388032.intl.format(Chunk388032.t["2JqTF6"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.JST6jl),
      isPremiumGetCta: !eO || true,
      perkImage: Chunk572501
    },
    serverProfiles: {
      name: "serverProfiles",
      title: Chunk388032.intl.string(Chunk388032.t.I9TYMg),
      subtitle: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
      descriptionCta: eS ? Chunk388032.intl.string(Chunk388032.t.jVcuVY) : Chunk388032.intl.string(Chunk388032.t.JST6jl),
      isPremiumGetCta: !eS,
      onCtaClick: eS ? eR : true,
      perkImage: Chunk909910
    },
    permadecos: {
      name: "permadecos",
      title: Chunk388032.intl.string(Chunk388032.t["57ngoo"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.piFFjd),
      description: Chunk388032.intl.format(Chunk388032.t.Pd7olh, {
        learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PERMADECOS)
      }),
      descriptionCta: eS ? Chunk388032.intl.string(Chunk388032.t.jVcuVY) : Chunk388032.intl.string(Chunk388032.t.JST6jl),
      isPremiumGetCta: !eS,
      onCtaClick: eS ? eU : true,
      pillText: eN || !eS ? true : Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase(),
      perkImage: Chunk317194.Z
    },
    customThemes: {
      name: "customThemes",
      title: Chunk388032.intl.string(Chunk939101.default["76L4b7"]),
      subtitle: Chunk388032.intl.string(Chunk939101.default.i3n50h),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: () => {
        (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME)
      },
      perkImage: Chunk253636.Z
    },
    profileWidgets: {
      name: "profileWidgets",
      title: Chunk388032.intl.string(Chunk388032.t.MyEstD),
      subtitle: Chunk388032.intl.string(Chunk388032.t["0/ClMI"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: eG,
      perkImage: Chunk448360.Z,
      pillText: Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase()
    },
    displayNameStyles: {
      name: "displayNameStyles",
      title: Chunk388032.intl.string(Chunk486730.default.ABtBDQ),
      subtitle: Chunk388032.intl.string(Chunk486730.default.jhmU5E),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onCtaClick: eZ,
      canReveal: eP,
      dismissibleContentType: Chunk704215.z.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
      perkImage: Chunk57794.Z,
      pillText: Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase()
    },
    recurring3PPromotions: {
      name: "recurring3PPromotions",
      title: Chunk388032.intl.string(Chunk388032.t.m7PucM),
      subtitle: " ",
      onCtaClick: () => (0, Chunk469165.wQ)({
        analyticsLocations: module
      }),
      pillText: Chunk388032.intl.string(Chunk388032.t.oW0eUd).toLocaleUpperCase(),
      description: Chunk388032.intl.format(Chunk388032.t.zh1X7u, {}),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.w7s5Qr),
      customContent: (0, Chunk54381.jsx)(Chunk554930.C, {
        percentage: eV
      })
    }
  };
  return eS && eA && (eH.tenureBadge = {
    name: "tenureBadge",
    title: Chunk388032.intl.string(Chunk388032.t.rnsqpa),
    pillText: Chunk388032.intl.string(Chunk388032.t["jyYgZ+"]).toLocaleUpperCase(),
    perkComponent: (0, Chunk54381.jsx)(Chunk229555.Z, {}),
    cardVariant: Chunk391110.zW.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, Chunk768865.k)({
      analyticsLocations: module
    })
  }), eH
}