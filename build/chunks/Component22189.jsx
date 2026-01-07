/** Chunk was on web.js **/
/** chunk id: 22189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => ey,
  Z: () => eO
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
  ey = function(e) {
    return e.CLIENT_THEMES = "clientThemes", e.CLIPS = "clips", e.EARLY_ACCESS = "earlyAccess", e.ENTRANCE_SOUNDS = "entranceSounds", e.PROFILES = "profiles", e.SERVER_BOOSTS = "serverBoosts", e.GREY_SERVER_BOOSTS = "greyServerBoosts", e.SPECIAL_MEMBER_PRICING = "specialMemberPricing", e.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", e.SPECIAL_SHOP_PERKS = "specialShopPerks", e.SUPER_REACTIONS = "superReactions", e.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", e.CUSTOM_APP_ICONS = "customAppIcons", e.MORE_EMOJI_POWER = "moreEmojiPower", e.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", e.SPECIAL_STICKER_ACCESS = "specialStickerAccess", e.LARGE_UPLOADS = "largeUploads", e.HD_VIDEO = "hdVideo", e.BADGE = "badge", e.GREY_BADGE = "greyBadge", e.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", e.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", e.REFERRAL_PROGRAM = "referralProgram", e.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", e.SERVER_PROFILES = "serverProfiles", e.TENURE_BADGE = "tenureBadge", e.PERMADECOS = "permadecos", e.CUSTOM_THEMES = "customThemes", e.PROFILE_WIDGETS = "profileWidgets", e.DISPLAY_NAME_STYLES = "displayNameStyles", e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", e.PREMIUM_GROUP = "premiumGroup", e
  }({});
let eO = () => {
  let {
    analyticsLocations: e
  } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, s.ZP)(), n = (0, C.BU)(M.Uq / 1024, {
    useKibibytes: true
  }), ey = (0, a.e7)([T.Z], () => T.Z.getPremiumTypeSubscription()), eO = null != ey ? N.ZP.getPremiumPlanItem(ey) : null, ev = (null != eO ? N.ZP.getSkuIdForPlan(eO.planId) : null) === M.Si.TIER_2, eS = I.default.getCurrentUser(), eI = (0, N.I5)(eS, M.PremiumTypes.TIER_2), eT = (0, N.I5)(eS, M.PremiumTypes.TIER_0), eC = (0, d.Z)(S.Z), {
    isFractionalPremiumActive: eA
  } = (0, u.Z)(), eN = null != ey && ey.hasPremiumAtLeast(M.PremiumTypes.TIER_2), eP = (0, p.Nj)(o.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eR = _.JH.useExperiment({
    location: "usePremiumPerksCards"
  }).enabled, ew = (0, h.Z)({
    scrollPosition: Z.Y_.TRY_IT_OUT,
    analyticsLocations: e
  }), eD = () => {
    (0, v.openUserSettings)(b.n.APPEARANCE_PANEL, {
      section: k.oAB.APPEARANCE,
      analyticsLocations: e
    })
  }, ex = () => {
    (0, v.openUserSettings)(b.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
      section: k.oAB.GUILD_BOOSTING,
      analyticsLocations: e
    })
  }, eL = () => {
    let t = (0, y.Ml)("openEntranceSounds") ? b.n.SOUNDBOARD_CATEGORY : b.n.VOICE_AND_VIDEO_PANEL;
    (0, v.openUserSettings)(t, {
      section: k.oAB.VOICE,
      subsection: Z.GA,
      analyticsLocations: e
    })
  }, ej = () => {
    (0, g.uL)(k.Z5c.COLLECTIBLES_SHOP)
  }, eM = () => {
    (0, O.Z)(F.Z.CLIPS, {
      analyticsLocations: e
    })
  }, ek = () => {
    (0, v.openUserSettings)(b.n.APPEARANCE_PANEL, {
      section: k.oAB.APPEARANCE,
      scrollPosition: Z.h1.CUSTOM_APP_ICONS
    })
  }, eU = () => {
    window.open(A.Z.getArticleURL(k.BhN.CLIPS), "_blank")
  }, eG = () => {
    eP || (0, p.Q3)(o.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
      dismissAction: U.L.TAKE_ACTION
    }), ew()
  }, eZ = () => {
    (0, E.openUserProfileModal)({
      userId: eS.id,
      sourceAnalyticsLocations: e,
      hideRestrictedProfile: true,
      tabSection: G.oh.WIDGETS
    })
  }, eF = i.useCallback(() => {
    (0, v.openUserSettings)(b.n.PROFILE_PANEL, {
      section: k.oAB.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, m.I)({
      analyticsLocations: e
    }))
  }, [e]), eB = new Date, eV = new Date(eB.getFullYear(), eB.getMonth() + 1, 0).getDate(), eH = eB.getDate() / eV * 100, eY = {
    clientThemes: {
      name: "clientThemes",
      title: B.intl.string(B.t.kWM48G),
      subtitle: B.intl.string(B.t.CjRASJ),
      description: B.intl.string(B.t.jBTTws),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: eD,
      perkImage: q
    },
    clips: eI ? {
      name: "clips",
      title: B.intl.string(B.t.z2jK6X),
      subtitle: B.intl.string(B.t["hxy0/R"]),
      description: B.intl.string(B.t.Z6v86b),
      descriptionCta: eC ? B.intl.string(B.t.jVcuVY) : B.intl.string(B.t.hvVgAZ),
      pillText: B.intl.string(B.t.EYxi0o),
      onCtaClick: eC ? eM : eU,
      perkImage: J
    } : {
      name: "clips",
      title: B.intl.string(B.t.z2jK6X),
      subtitle: B.intl.string(B.t["hxy0/R"]),
      description: B.intl.string(B.t.X9IeN3),
      pillText: B.intl.string(B.t.EYxi0o),
      perkImage: J
    },
    earlyAccess: eI ? {
      name: "earlyAccess",
      title: B.intl.string(B.t.UkLVeJ),
      subtitle: B.intl.string(B.t.xf9ePm),
      description: B.intl.string(B.t["+r4vdg"]),
      perkImage: ee
    } : {
      name: "earlyAccess",
      title: B.intl.string(B.t.UkLVeJ),
      subtitle: B.intl.string(B.t.xf9ePm),
      description: B.intl.string(B.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: ee
    },
    earlyAccessSeeAllVariant: eI ? {
      name: "earlyAccessSeeAllVariant",
      title: B.intl.string(B.t.UkLVeJ),
      subtitle: B.intl.string(B.t.xf9ePm),
      description: B.intl.string(B.t["+r4vdg"]),
      perkImage: et
    } : {
      name: "earlyAccess",
      title: B.intl.string(B.t.UkLVeJ),
      subtitle: B.intl.string(B.t.xf9ePm),
      description: B.intl.string(B.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: et
    },
    entranceSounds: eI ? {
      name: "entranceSounds",
      title: B.intl.string(B.t["f4M+H9"]),
      subtitle: B.intl.string(B.t["7ZCYvC"]),
      description: B.intl.string(B.t.mUT8bO),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: eL,
      perkImage: er
    } : {
      name: "entranceSounds",
      title: B.intl.string(B.t["f4M+H9"]),
      subtitle: B.intl.string(B.t["7ZCYvC"]),
      description: B.intl.string(B.t["3smf/f"]),
      perkImage: er
    },
    entranceSoundsSeeAllVariation: eI ? {
      name: "entranceSoundsSeeAllVariation",
      title: B.intl.string(B.t["f4M+H9"]),
      subtitle: B.intl.string(B.t["7ZCYvC"]),
      description: B.intl.string(B.t.mUT8bO),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: eL,
      perkImage: ei
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: B.intl.string(B.t["f4M+H9"]),
      subtitle: B.intl.string(B.t["7ZCYvC"]),
      description: B.intl.string(B.t["3smf/f"]),
      perkImage: ei
    },
    profiles: {
      name: "profiles",
      title: B.intl.string(B.t.KcyDwF),
      subtitle: B.intl.string(B.t.Mt3U1W),
      description: B.intl.string(B.t.kWcDK8),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: ew,
      perkImage: Q
    },
    serverBoosts: {
      name: "serverBoosts",
      title: B.intl.string(B.t["NyDu/6"]),
      subtitle: B.intl.string(B.t["4pEwXL"]),
      description: eA ? "" : B.intl.string(B.t.jsyNHm),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: eA ? true : ex,
      perkImage: X,
      hideOnNarrowScreen: !eA,
      imageOverlayText: eA ? B.intl.string(B.t["/VzCKE"]).toLocaleUpperCase() : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: B.intl.string(B.t["NyDu/6"]),
      subtitle: B.intl.string(B.t["4pEwXL"]),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      perkImage: eg.Z,
      imageOverlayText: B.intl.string(B.t["/VzCKE"]).toLocaleUpperCase()
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: B.intl.string(B.t["0Mykgq"]),
      subtitle: B.intl.string(B.t.opgqDZ),
      description: B.intl.string(B.t["t+QZSd"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: ej,
      perkImage: ea
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: B.intl.string(B.t["0Mykgq"]),
      subtitle: B.intl.string(B.t.opgqDZ),
      description: B.intl.string(B.t["t+QZSd"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: ej,
      perkImage: ea
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: B.intl.string(B.t.U68LpL),
      subtitle: B.intl.string(B.t.chRZiX),
      description: B.intl.string(B.t["t+QZSd"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: ej,
      perkImage: ea
    },
    superReactions: {
      name: "superReactions",
      title: B.intl.string(B.t["6S7kO7"]),
      subtitle: B.intl.string(B.t.kN1JRI),
      description: B.intl.string(B.t.e7FKCi),
      perkImage: ef
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: B.intl.string(B.t.O5R3hr),
      pillText: B.intl.string(B.t.yhEY5G),
      backgroundImage: es
    },
    badge: {
      name: "badge",
      title: B.intl.string(B.t.dcFfSJ),
      subtitle: B.intl.string(B.t["37MFFq"]),
      perkImage: Y,
      description: B.intl.string(B.t.T1IS4j)
    },
    greyBadge: {
      name: "greyBadge",
      title: B.intl.string(B.t.dcFfSJ),
      subtitle: B.intl.string(B.t["37MFFq"]),
      perkImage: eE.Z,
      description: B.intl.string(B.t.T1IS4j),
      imageOverlayText: B.intl.string(B.t["/VzCKE"]).toLocaleUpperCase()
    },
    customAppIcons: {
      name: "customAppIcons",
      title: B.intl.string(B.t.OuItFi),
      subtitle: B.intl.string(B.t.mPyrE6),
      perkImage: $,
      description: B.intl.string(B.t.e7FKCi),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: ek
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: B.intl.string(B.t["R2IV/Q"]),
      subtitle: B.intl.string(B.t.R5Xag2),
      perkImage: en,
      description: B.intl.string(B.t["8lsjSw"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: B.intl.string(B.t.LWsArT),
      subtitle: B.intl.string(B.t.bTzbVk),
      perkImage: (0, j.gx)(t, W, K),
      description: B.intl.string(B.t.JLnOM2)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: B.intl.string(B.t.tzdIwI),
      subtitle: B.intl.string(B.t.hJG8ZN),
      perkImage: (0, j.gx)(t, z, eu),
      description: B.intl.string(B.t.e7FKCi)
    },
    largeUploads: {
      name: "largeUploads",
      title: B.intl.formatToPlainString(B.t.jqhAdL, {
        premiumMaxSize: n
      }),
      subtitle: B.intl.formatToPlainString(B.t["HI+cfm"], {
        premiumMaxSize: n
      }),
      perkImage: ep,
      description: B.intl.string(B.t["R0gx+0"])
    },
    hdVideo: {
      name: "hdVideo",
      title: B.intl.string(B.t.RSXQYO),
      subtitle: B.intl.string(B.t.ymCPxp),
      perkImage: ed,
      description: B.intl.string(B.t["4WgB/4"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: B.intl.string(B.t.XQCSri),
      subtitle: B.intl.string(B.t.HC5wVV),
      description: B.intl.string(B.t.ee7wQ7),
      descriptionCta: eI || eT ? B.intl.string(B.t.y9TxXV) : B.intl.string(B.t.d8o6lc),
      isPremiumGetCta: !(eI || eT),
      onCtaClick: eI || eT ? ek : true,
      perkImage: eo
    },
    referralProgram: {
      name: "referralProgram",
      title: B.intl.string(B.t.tPY4o9),
      subtitle: B.intl.string(B.t.JY0grC),
      description: B.intl.format(B.t["2JqTF6"], {
        helpdeskArticle: A.Z.getArticleURL(k.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: B.intl.string(B.t.JST6jl),
      isPremiumGetCta: !ev || true,
      perkImage: el
    },
    serverProfiles: {
      name: "serverProfiles",
      title: B.intl.string(B.t.I9TYMg),
      subtitle: B.intl.string(B.t.HMSHeH),
      descriptionCta: eI ? B.intl.string(B.t.jVcuVY) : B.intl.string(B.t.JST6jl),
      isPremiumGetCta: !eI,
      onCtaClick: eI ? ew : true,
      perkImage: ec
    },
    permadecos: {
      name: "permadecos",
      title: B.intl.string(B.t["57ngoo"]),
      subtitle: B.intl.string(B.t.piFFjd),
      description: B.intl.format(B.t.Pd7olh, {
        learnMoreLink: A.Z.getArticleURL(k.BhN.PERMADECOS)
      }),
      descriptionCta: eI ? B.intl.string(B.t.jVcuVY) : B.intl.string(B.t.JST6jl),
      isPremiumGetCta: !eI,
      onCtaClick: eI ? eG : true,
      pillText: eP || !eI ? true : B.intl.string(B.t.y2b7CA).toLocaleUpperCase(),
      perkImage: eb.Z
    },
    customThemes: {
      name: "customThemes",
      title: B.intl.string(V.default["76L4b7"]),
      subtitle: B.intl.string(V.default.i3n50h),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: () => {
        (0, f.XO)(f.wh.CUSTOM_THEME)
      },
      perkImage: eh.Z
    },
    profileWidgets: {
      name: "profileWidgets",
      title: B.intl.string(B.t.MyEstD),
      subtitle: B.intl.string(B.t["0/ClMI"]),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: eZ,
      perkImage: em.Z,
      pillText: B.intl.string(B.t.y2b7CA).toLocaleUpperCase()
    },
    displayNameStyles: {
      name: "displayNameStyles",
      title: B.intl.string(H.default.ABtBDQ),
      subtitle: B.intl.string(H.default.jhmU5E),
      descriptionCta: B.intl.string(B.t.jVcuVY),
      onCtaClick: eF,
      canReveal: eR,
      dismissibleContentType: o.z.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
      perkImage: e_.Z,
      pillText: B.intl.string(B.t.y2b7CA).toLocaleUpperCase()
    },
    recurring3PPromotions: {
      name: "recurring3PPromotions",
      title: B.intl.string(B.t.m7PucM),
      subtitle: " ",
      onCtaClick: () => (0, R.wQ)({
        analyticsLocations: e
      }),
      pillText: B.intl.string(B.t.oW0eUd).toLocaleUpperCase(),
      description: B.intl.format(B.t.zh1X7u, {}),
      descriptionCta: B.intl.string(B.t.w7s5Qr),
      customContent: (0, r.jsx)(w.C, {
        percentage: eH
      })
    },
    premiumGroup: (0, P.k)()
  };
  return eI && eN && (eY.tenureBadge = {
    name: "tenureBadge",
    title: B.intl.string(B.t.rnsqpa),
    pillText: B.intl.string(B.t["jyYgZ+"]).toLocaleUpperCase(),
    perkComponent: (0, r.jsx)(D.Z, {}),
    cardVariant: L.zW.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, x.k)({
      analyticsLocations: e
    })
  }), eY
}