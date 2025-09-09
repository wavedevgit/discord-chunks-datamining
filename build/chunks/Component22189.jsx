/** Chunk was on web.js **/
/** chunk id: 22189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => eh,
  Z: () => em
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk230711 = require("./230711.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk803038 = require("./803038.js"),
  Chunk779618 = require("./779618.js"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk300284 = require("./300284.js"),
  Chunk703656 = require("./703656.js"),
  Chunk547972 = require("./547972.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk585483 = require("./585483.js"),
  Chunk424218 = require("./424218.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk229555 = require("./229555.jsx"),
  Chunk768865 = require("./768865.jsx"),
  Chunk951570 = require("./951570.js"),
  Chunk220331 = require("./220331.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk526761 = require("./526761.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119475 = require("./119475.js"),
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
  Chunk755590 = require("./755590.js"),
  Chunk909910 = require("./909910.js"),
  Chunk912429 = require("./912429.js"),
  Chunk91394 = require("./91394.js"),
  Chunk209672 = require("./209672.js"),
  Chunk698173 = require("./698173.js"),
  Chunk926262 = require("./926262.js"),
  Chunk217379 = require("./217379.js"),
  Chunk117771 = require("./117771.js"),
  Chunk253636 = require("./253636.js"),
  Chunk371435 = require("./371435.js"),
  Chunk83663 = require("./83663.js"),
  Chunk317194 = require("./317194.js"),
  eh = function(e) {
    return e.CLIENT_THEMES = "clientThemes", e.CLIPS = "clips", e.EARLY_ACCESS = "earlyAccess", e.ENTRANCE_SOUNDS = "entranceSounds", e.PROFILES = "profiles", e.REMIXING = "remixing", e.SERVER_BOOSTS = "serverBoosts", e.GREY_SERVER_BOOSTS = "greyServerBoosts", e.SPECIAL_MEMBER_PRICING = "specialMemberPricing", e.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", e.SPECIAL_SHOP_PERKS = "specialShopPerks", e.NAMEPLATES = "nameplates", e.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", e.SUPER_REACTIONS = "superReactions", e.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", e.CUSTOM_APP_ICONS = "customAppIcons", e.MORE_EMOJI_POWER = "moreEmojiPower", e.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", e.SPECIAL_STICKER_ACCESS = "specialStickerAccess", e.LARGE_UPLOADS = "largeUploads", e.HD_VIDEO = "hdVideo", e.BADGE = "badge", e.GREY_BADGE = "greyBadge", e.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", e.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", e.REFERRAL_PROGRAM = "referralProgram", e.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", e.SERVER_PROFILES = "serverProfiles", e.TENURE_BADGE = "tenureBadge", e.PERMADECOS = "permadecos", e.VOICE_FILTERS = "voiceFilters", e.CUSTOM_THEMES = "customThemes", e.SEPTEMBER_2025_MARKETING_MOMENT = "september2025MarketingMoment", e
  }({});
let em = () => {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, Chunk410030.ZP)(), n = (0, Chunk424218.BU)(Chunk474936.Uq / 1024, {
    useKibibytes: true
  }), eh = (0, Chunk399606.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()), em = null != eh ? Chunk74538.ZP.getPremiumPlanItem(eh) : null, eg = (null != em ? Chunk74538.ZP.getSkuIdForPlan(em.planId) : null) === Chunk474936.Si.TIER_2, eE = Chunk594174.default.getCurrentUser(), eb = (0, Chunk74538.I5)(eE, Chunk474936.p9.TIER_2), ey = (0, Chunk74538.I5)(eE, Chunk474936.p9.TIER_0), eO = (0, Chunk779618.Z)(Chunk131951.Z), {
    isFractionalPremiumActive: ev
  } = (0, Chunk975298.Z)(), eI = null != eh && eh.hasPremiumAtLeast(Chunk474936.p9.TIER_2), eT = (0, Chunk266454.Nj)(Chunk704215.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eS = Chunk803038.Mc.useExperiment({
    location: "usePremiumPerksCards"
  }).v2EditorEnabled, eA = (0, Chunk300284.Z)({
    scrollPosition: Chunk526761.Y_.TRY_IT_OUT,
    analyticsLocations: module
  }), eC = () => {
    Chunk230711.Z.open(Chunk981631.oAB.APPEARANCE, null, {
      openWithoutBackstack: true,
      analyticsLocations: module
    })
  }, eN = () => {
    Chunk230711.Z.open(Chunk981631.oAB.GUILD_BOOSTING, null, {
      openWithoutBackstack: true,
      analyticsLocations: module
    })
  }, eR = () => {
    Chunk230711.Z.open(Chunk981631.oAB.VOICE, Chunk526761.GA, {
      openWithoutBackstack: true,
      analyticsLocations: module
    })
  }, eP = () => {
    (0, Chunk703656.uL)(Chunk981631.Z5c.COLLECTIBLES_SHOP)
  }, ew = () => {
    (0, Chunk547972.Z)(Chunk332325.Z.CLIPS, {
      openWithoutBackstack: true,
      analyticsLocations: module
    })
  }, eD = () => {
    Chunk230711.Z.open(Chunk981631.oAB.APPEARANCE, null, {
      scrollPosition: Chunk526761.h1.CUSTOM_APP_ICONS
    })
  }, ex = () => {
    window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.CLIPS), "_blank")
  }, eL = () => {
    eT || (0, Chunk266454.Q3)(Chunk704215.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
      dismissAction: Chunk921944.L.TAKE_ACTION
    }), eA()
  }, ej = {
    clientThemes: {
      name: "clientThemes",
      title: Chunk388032.intl.string(Chunk388032.t.kWM48P),
      subtitle: Chunk388032.intl.string(Chunk388032.t.CjRASE),
      description: Chunk388032.intl.string(Chunk388032.t.jBTTws),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: eC,
      perkImage: Chunk567396
    },
    clips: eb ? {
      name: "clips",
      title: Chunk388032.intl.string(Chunk388032.t.z2jK6e),
      subtitle: Chunk388032.intl.string(Chunk388032.t["hxy0/f"]),
      description: Chunk388032.intl.string(Chunk388032.t.Z6v86e),
      descriptionCta: eO ? Chunk388032.intl.string(Chunk388032.t.jVcuVV) : Chunk388032.intl.string(Chunk388032.t.hvVgAQ),
      pillText: Chunk388032.intl.string(Chunk388032.t.EYxi0t),
      onCtaClick: eO ? ew : ex,
      perkImage: Chunk766491
    } : {
      name: "clips",
      title: Chunk388032.intl.string(Chunk388032.t.z2jK6e),
      subtitle: Chunk388032.intl.string(Chunk388032.t["hxy0/f"]),
      description: Chunk388032.intl.string(Chunk388032.t.X9IeNz),
      pillText: Chunk388032.intl.string(Chunk388032.t.EYxi0t),
      perkImage: Chunk766491
    },
    earlyAccess: eb ? {
      name: "earlyAccess",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeH),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePj),
      description: Chunk388032.intl.string(Chunk388032.t["+r4vdn"]),
      perkImage: Chunk707046
    } : {
      name: "earlyAccess",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeH),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePj),
      description: Chunk388032.intl.string(Chunk388032.t["6+xTcn"]),
      isPremiumGetCta: true,
      perkImage: Chunk707046
    },
    earlyAccessSeeAllVariant: eb ? {
      name: "earlyAccessSeeAllVariant",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeH),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePj),
      description: Chunk388032.intl.string(Chunk388032.t["+r4vdn"]),
      perkImage: Chunk488459
    } : {
      name: "earlyAccess",
      title: Chunk388032.intl.string(Chunk388032.t.UkLVeH),
      subtitle: Chunk388032.intl.string(Chunk388032.t.xf9ePj),
      description: Chunk388032.intl.string(Chunk388032.t["6+xTcn"]),
      isPremiumGetCta: true,
      perkImage: Chunk488459
    },
    entranceSounds: eb ? {
      name: "entranceSounds",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+Hx"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvL"]),
      description: Chunk388032.intl.string(Chunk388032.t.mUT8bG),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: eR,
      perkImage: Chunk132015
    } : {
      name: "entranceSounds",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+Hx"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvL"]),
      description: Chunk388032.intl.string(Chunk388032.t["3smf/f"]),
      perkImage: Chunk132015
    },
    entranceSoundsSeeAllVariation: eb ? {
      name: "entranceSoundsSeeAllVariation",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+Hx"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvL"]),
      description: Chunk388032.intl.string(Chunk388032.t.mUT8bG),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: eR,
      perkImage: Chunk142416
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: Chunk388032.intl.string(Chunk388032.t["f4M+Hx"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7ZCYvL"]),
      description: Chunk388032.intl.string(Chunk388032.t["3smf/f"]),
      perkImage: Chunk142416
    },
    profiles: {
      name: "profiles",
      title: Chunk388032.intl.string(Chunk388032.t.KcyDwM),
      subtitle: Chunk388032.intl.string(Chunk388032.t.Mt3U1d),
      description: Chunk388032.intl.string(Chunk388032.t.kWcDKy),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: eA,
      perkImage: Chunk925309
    },
    remixing: eb ? {
      name: "remixing",
      title: Chunk388032.intl.string(Chunk388032.t["H+v6eX"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.wmbOAg),
      description: Chunk388032.intl.string(Chunk388032.t.gdA9FB),
      perkImage: Chunk755590,
      pillText: Chunk388032.intl.string(Chunk388032.t.EYxi0t)
    } : {
      name: "remixing",
      title: Chunk388032.intl.string(Chunk388032.t["H+v6eX"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.wmbOAg),
      description: Chunk388032.intl.string(Chunk388032.t.fiLtJi),
      perkImage: Chunk755590,
      pillText: Chunk388032.intl.string(Chunk388032.t.EYxi0t)
    },
    serverBoosts: {
      name: "serverBoosts",
      title: Chunk388032.intl.string(Chunk388032.t["NyDu//"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["4pEwXF"]),
      description: ev ? Chunk388032.intl.format(Chunk388032.t.uPiIBQ, {
        link: "https://discord.com"
      }) : Chunk388032.intl.string(Chunk388032.t.jsyNHh),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: ev ? true : eN,
      perkImage: Chunk46245,
      hideOnNarrowScreen: !ev,
      imageOverlayText: ev ? Chunk388032.intl.string(Chunk388032.t.lcYttb) : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: Chunk388032.intl.string(Chunk388032.t["NyDu//"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t["4pEwXF"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      perkImage: Chunk371435.Z,
      imageOverlayText: Chunk388032.intl.string(Chunk388032.t.lcYttb)
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: Chunk388032.intl.string(Chunk388032.t["0Mykgo"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.opgqDQ),
      description: Chunk388032.intl.string(Chunk388032.t["t+QZSU"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.dBJVnZ),
      onCtaClick: eP,
      perkImage: Chunk498730
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: Chunk388032.intl.string(Chunk388032.t["0Mykgo"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.opgqDQ),
      description: Chunk388032.intl.string(Chunk388032.t["t+QZSU"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.dBJVnZ),
      onCtaClick: eP,
      perkImage: Chunk498730
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: Chunk388032.intl.string(Chunk388032.t.U68LpK),
      subtitle: Chunk388032.intl.string(Chunk388032.t.chRZiY),
      description: Chunk388032.intl.string(Chunk388032.t["t+QZSU"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.dBJVnZ),
      onCtaClick: eP,
      perkImage: Chunk498730
    },
    unlimitedSuperReactions: eb ? {
      name: "unlimitedSuperReactions",
      title: Chunk388032.intl.string(Chunk388032.t.hpgmOz),
      subtitle: Chunk388032.intl.string(Chunk388032.t.Hxujsr),
      description: Chunk388032.intl.string(Chunk388032.t["Cn/z6+"]),
      perkImage: Chunk698173,
      hideOnNarrowScreen: true
    } : {
      name: "unlimitedSuperReactions",
      title: Chunk388032.intl.string(Chunk388032.t.hpgmOz),
      subtitle: Chunk388032.intl.string(Chunk388032.t.Hxujsr),
      description: Chunk388032.intl.string(Chunk388032.t.TF7cPT),
      isPremiumGetCta: true,
      perkImage: Chunk698173,
      hideOnNarrowScreen: true
    },
    superReactions: {
      name: "superReactions",
      title: Chunk388032.intl.string(Chunk388032.t["6S7kOz"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.kN1JRE),
      description: Chunk388032.intl.string(Chunk388032.t.e7FKCg),
      perkImage: Chunk209672
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: Chunk388032.intl.string(Chunk388032.t.O5R3ho),
      pillText: Chunk388032.intl.string(Chunk388032.t.yhEY5O),
      backgroundImage: Chunk474106
    },
    badge: {
      name: "badge",
      title: Chunk388032.intl.string(Chunk388032.t.dcFfSE),
      subtitle: Chunk388032.intl.string(Chunk388032.t["37MFFh"]),
      perkImage: Chunk660372,
      description: Chunk388032.intl.string(Chunk388032.t.T1IS4u)
    },
    greyBadge: {
      name: "greyBadge",
      title: Chunk388032.intl.string(Chunk388032.t.dcFfSE),
      subtitle: Chunk388032.intl.string(Chunk388032.t["37MFFh"]),
      perkImage: Chunk83663.Z,
      description: Chunk388032.intl.string(Chunk388032.t.T1IS4u),
      imageOverlayText: Chunk388032.intl.string(Chunk388032.t.lcYttb)
    },
    customAppIcons: {
      name: "customAppIcons",
      title: Chunk388032.intl.string(Chunk388032.t.OuItFh),
      subtitle: Chunk388032.intl.string(Chunk388032.t.mPyrEx),
      perkImage: Chunk193943,
      description: Chunk388032.intl.string(Chunk388032.t.e7FKCg),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: eD
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: Chunk388032.intl.string(Chunk388032.t["R2IV/f"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.R5Xag4),
      perkImage: Chunk334347,
      description: Chunk388032.intl.string(Chunk388032.t["8lsjS0"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: Chunk388032.intl.string(Chunk388032.t.LWsAra),
      subtitle: Chunk388032.intl.string(Chunk388032.t.bTzbVl),
      perkImage: (0, Chunk75077.gx)(exports, Chunk926433, Chunk302036),
      description: Chunk388032.intl.string(Chunk388032.t.JLnOMz)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: Chunk388032.intl.string(Chunk388032.t.tzdIwM),
      subtitle: Chunk388032.intl.string(Chunk388032.t.FXlU29),
      perkImage: (0, Chunk75077.gx)(exports, Chunk994554, Chunk912429),
      description: Chunk388032.intl.string(Chunk388032.t.e7FKCg)
    },
    largeUploads: {
      name: "largeUploads",
      title: Chunk388032.intl.formatToPlainString(Chunk388032.t.jqhAdH, {
        premiumMaxSize: require
      }),
      subtitle: Chunk388032.intl.formatToPlainString(Chunk388032.t["HI+cfn"], {
        premiumMaxSize: require
      }),
      perkImage: Chunk926262,
      description: Chunk388032.intl.string(Chunk388032.t["R0gx+/"])
    },
    hdVideo: {
      name: "hdVideo",
      title: Chunk388032.intl.string(Chunk388032.t.RSXQYG),
      subtitle: Chunk388032.intl.string(Chunk388032.t.ymCPxs),
      perkImage: Chunk91394,
      description: Chunk388032.intl.string(Chunk388032.t["4WgB//"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: Chunk388032.intl.string(Chunk388032.t.XQCSrq),
      subtitle: Chunk388032.intl.string(Chunk388032.t.HC5wVV),
      description: Chunk388032.intl.string(Chunk388032.t.ee7wQ0),
      descriptionCta: eb || ey ? Chunk388032.intl.string(Chunk388032.t.y9TxXV) : Chunk388032.intl.string(Chunk388032.t.d8o6lZ),
      isPremiumGetCta: !(eb || ey),
      onCtaClick: eb || ey ? eD : true,
      perkImage: Chunk607762
    },
    referralProgram: {
      name: "referralProgram",
      title: Chunk388032.intl.string(Chunk388032.t.tPY4o6),
      subtitle: Chunk388032.intl.string(Chunk388032.t.JY0grK),
      description: Chunk388032.intl.format(Chunk388032.t["2JqTFx"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.JST6jo),
      isPremiumGetCta: !eg || true,
      perkImage: Chunk572501
    },
    serverProfiles: {
      name: "serverProfiles",
      title: Chunk388032.intl.string(Chunk388032.t.I9TYMj),
      subtitle: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
      descriptionCta: eb ? Chunk388032.intl.string(Chunk388032.t.jVcuVV) : Chunk388032.intl.string(Chunk388032.t.JST6jo),
      isPremiumGetCta: !eb,
      onCtaClick: eb ? eA : true,
      perkImage: Chunk909910
    },
    permadecos: {
      name: "permadecos",
      title: Chunk388032.intl.string(Chunk388032.t["57ngoq"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.piFFjY),
      description: Chunk388032.intl.format(Chunk388032.t.Pd7olp, {
        learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PERMADECOS)
      }),
      descriptionCta: eb ? Chunk388032.intl.string(Chunk388032.t.jVcuVV) : Chunk388032.intl.string(Chunk388032.t.JST6jo),
      isPremiumGetCta: !eb,
      onCtaClick: eb ? eL : true,
      pillText: eT || !eb ? true : Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase(),
      perkImage: Chunk317194.Z
    },
    nameplates: {
      name: "nameplates",
      title: Chunk388032.intl.string(Chunk388032.t.rJbHFx),
      subtitle: Chunk388032.intl.string(Chunk388032.t.t2wcb2),
      perkImage: Chunk498730,
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: eP
    },
    voiceFilters: {
      name: "voiceFilters",
      title: Chunk388032.intl.string(Chunk388032.t.QrbNGh),
      subtitle: Chunk388032.intl.string(Chunk388032.t.O1qkvb),
      description: Chunk388032.intl.format(Chunk388032.t.qS2Gmp, {
        learnMoreLink: Chunk981631.EYA.VOICE_FILTERS_BLOG
      }),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      perkImage: Chunk217379,
      onCtaClick: () => {
        Chunk585483.S.dispatch(Chunk981631.CkL.OPEN_VOICE_FILTER_POPOUT)
      },
      pillText: Chunk388032.intl.string(Chunk388032.t.EYxi0t).toLocaleUpperCase(),
      hasNitroGradientBackground: true
    },
    customThemes: {
      name: "customThemes",
      title: Chunk388032.intl.string(Chunk119475.default["76L4b2"]),
      subtitle: Chunk388032.intl.string(Chunk119475.default.i3n50t),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onCtaClick: () => {
        (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME)
      },
      perkImage: Chunk253636.Z,
      canReveal: eS,
      dismissibleContentType: Chunk704215.z.CUSTOM_THEMES_NITRO_HOME_TILE,
      pillText: Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase()
    },
    september2025MarketingMoment: {
      name: "september2025MarketingMoment",
      title: Chunk388032.intl.string(Chunk388032.t.CbHUrK),
      subtitle: Chunk388032.intl.format(Chunk388032.t.dA8CJi, {
        helpCenterLink: Chunk951570.lB
      }),
      pillText: Chunk388032.intl.string(Chunk388032.t.OS9KPj).toLocaleUpperCase(),
      cardVariant: Chunk391110.zW.PROMOTION_REDEMPTION,
      perkImage: Chunk117771.Z,
      customContent: (0, Chunk951288.jsx)(Chunk220331.R, {})
    }
  };
  return eb && eI && (ej.tenureBadge = {
    name: "tenureBadge",
    title: Chunk388032.intl.string(Chunk388032.t.rnsqpa),
    pillText: Chunk388032.intl.string(Chunk388032.t.jyYgZ2).toLocaleUpperCase(),
    perkComponent: (0, Chunk951288.jsx)(Chunk229555.Z, {}),
    cardVariant: Chunk391110.zW.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, Chunk768865.k)({
      analyticsLocations: module
    })
  }), ej
}