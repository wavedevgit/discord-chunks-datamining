/** Chunk was on web.js **/
/** chunk id: 975662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eh,
  U: () => e_
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk915618 = require("./915618.js"),
  Chunk793943 = require("./793943.js"),
  Chunk826673 = require("./826673.js"),
  Chunk259065 = require("./259065.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk976860 = require("./976860.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk255438 = require("./255438.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk364558 = require("./364558.jsx"),
  Chunk161319 = require("./161319.jsx"),
  Chunk55691 = require("./55691.jsx"),
  Chunk95859 = require("./95859.jsx"),
  Chunk30084 = require("./30084.jsx"),
  Chunk322631 = require("./322631.js"),
  Chunk17307 = require("./17307.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk520650 = require("./520650.js"),
  Chunk927961 = require("./927961.js"),
  Chunk561852 = require("./561852.js"),
  Chunk522799 = require("./522799.js"),
  Chunk795710 = require("./795710.js"),
  Chunk484813 = require("./484813.js"),
  Chunk659980 = require("./659980.js"),
  Chunk881784 = require("./881784.js"),
  Chunk8330 = require("./8330.js"),
  Chunk554452 = require("./554452.js"),
  Chunk992186 = require("./992186.js"),
  Chunk380529 = require("./380529.js"),
  Chunk159312 = require("./159312.js"),
  Chunk629139 = require("./629139.js"),
  Chunk2908 = require("./2908.js"),
  Chunk499309 = require("./499309.js"),
  Chunk866223 = require("./866223.js"),
  Chunk804368 = require("./804368.js"),
  Chunk201337 = require("./201337.js"),
  Chunk754316 = require("./754316.js"),
  Chunk977838 = require("./977838.js"),
  Chunk330290 = require("./330290.js"),
  Chunk260972 = require("./260972.js"),
  Chunk899225 = require("./899225.js"),
  Chunk106731 = require("./106731.js"),
  Chunk419455 = require("./419455.js"),
  Chunk509442 = require("./509442.js"),
  Chunk20462 = require("./20462.js"),
  Chunk307966 = require("./307966.js"),
  Chunk864579 = require("./864579.js"),
  e_ = function(e) {
    return e.CLIENT_THEMES = "clientThemes", e.CLIPS = "clips", e.EARLY_ACCESS = "earlyAccess", e.ENTRANCE_SOUNDS = "entranceSounds", e.PROFILES = "profiles", e.SERVER_BOOSTS = "serverBoosts", e.GREY_SERVER_BOOSTS = "greyServerBoosts", e.SPECIAL_MEMBER_PRICING = "specialMemberPricing", e.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", e.SPECIAL_SHOP_PERKS = "specialShopPerks", e.SUPER_REACTIONS = "superReactions", e.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", e.CUSTOM_APP_ICONS = "customAppIcons", e.MORE_EMOJI_POWER = "moreEmojiPower", e.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", e.SPECIAL_STICKER_ACCESS = "specialStickerAccess", e.LARGE_UPLOADS = "largeUploads", e.HD_VIDEO = "hdVideo", e.BADGE = "badge", e.GREY_BADGE = "greyBadge", e.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", e.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", e.REFERRAL_PROGRAM = "referralProgram", e.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", e.SERVER_PROFILES = "serverProfiles", e.TENURE_BADGE = "tenureBadge", e.PERMADECOS = "permadecos", e.CUSTOM_THEMES = "customThemes", e.DISPLAY_NAME_STYLES = "displayNameStyles", e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", e.PREMIUM_GROUP = "premiumGroup", e
  }({});
let eh = () => {
  let {
    analyticsLocations: e
  } = (0, c.Ay)(l.A.PREMIUM_MARKETING_PERK_CARD), t = (0, o.Ay)(), n = (0, A.Xq)(x.f3 / 1024, {
    useKibibytes: true
  }), e_ = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()), eh = null != e_ ? S.Ay.getPremiumPlanItem(e_) : null, em = (null != eh ? S.Ay.getSkuIdForPlan(eh.planId) : null) === x.pe.TIER_2, eg = O.default.getCurrentUser(), eE = (0, S.TW)(eg, x.PremiumTypes.TIER_2), ey = (0, S.TW)(eg, x.PremiumTypes.TIER_0), eb = (0, d.A)(b.A), {
    isFractionalPremiumActive: eO
  } = (0, u.A)(), ev = null != e_ && e_.hasPremiumAtLeast(x.PremiumTypes.TIER_2), eA = (0, p.JZ)(s.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eI = (0, h.A)({
    scrollPosition: M._F.TRY_IT_OUT,
    analyticsLocations: e
  }), eS = () => {
    (0, y.openUserSettings)(g.X.APPEARANCE_PANEL, {
      section: L.nc_.APPEARANCE,
      analyticsLocations: e
    })
  }, eT = () => {
    (0, y.openUserSettings)(g.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
      section: L.nc_.GUILD_BOOSTING,
      analyticsLocations: e
    })
  }, eC = () => {
    let t = (0, E.qz)("openEntranceSounds") ? g.X.SOUNDBOARD_CATEGORY : g.X.VOICE_AND_VIDEO_PANEL;
    (0, y.openUserSettings)(t, {
      section: L.nc_.VOICE,
      subsection: M.MJ,
      analyticsLocations: e
    })
  }, eN = () => {
    (0, m.pX)(L.BVt.COLLECTIBLES_SHOP)
  }, ew = () => {
    (0, y.openUserSettings)(g.X.CLIPS_PANEL)
  }, eR = () => {
    let e = (0, E.WJ)("openCustomAppSettings");
    (0, y.openUserSettings)(e ? g.X.APPEARANCE_IN_APP_ICON : g.X.APPEARANCE_PANEL, {
      section: L.nc_.APPEARANCE,
      scrollPosition: e ? true : M.kq.CUSTOM_APP_ICONS
    })
  }, eP = () => {
    window.open(I.A.getArticleURL(L.MVz.CLIPS), "_blank")
  }, eD = () => {
    eA || (0, p.Dr)(s.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
      dismissAction: j.i.TAKE_ACTION
    }), eI()
  }, ex = i.useCallback(() => {
    (0, y.openUserSettings)(g.X.PROFILE_PANEL, {
      section: L.nc_.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, _.L)({
      analyticsLocations: e
    }))
  }, [e]), eL = new Date, ej = new Date(eL.getFullYear(), eL.getMonth() + 1, 0).getDate(), eM = eL.getDate() / ej * 100, ek = {
    clientThemes: {
      name: "clientThemes",
      title: k.intl.string(k.t.kWM48G),
      subtitle: k.intl.string(k.t.CjRASJ),
      description: k.intl.string(k.t.jBTTws),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: eS,
      perkImage: Y
    },
    clips: eE ? {
      name: "clips",
      title: k.intl.string(k.t.z2jK6X),
      subtitle: k.intl.string(k.t["hxy0/R"]),
      description: k.intl.string(k.t.Z6v86b),
      descriptionCta: eb ? k.intl.string(k.t.jVcuVY) : k.intl.string(k.t.hvVgAZ),
      pillText: k.intl.string(k.t.EYxi0o),
      onCtaClick: eb ? ew : eP,
      perkImage: z
    } : {
      name: "clips",
      title: k.intl.string(k.t.z2jK6X),
      subtitle: k.intl.string(k.t["hxy0/R"]),
      description: k.intl.string(k.t.X9IeN3),
      pillText: k.intl.string(k.t.EYxi0o),
      perkImage: z
    },
    earlyAccess: eE ? {
      name: "earlyAccess",
      title: k.intl.string(k.t.UkLVeJ),
      subtitle: k.intl.string(k.t.xf9ePm),
      description: k.intl.string(k.t["+r4vdg"]),
      perkImage: Z
    } : {
      name: "earlyAccess",
      title: k.intl.string(k.t.UkLVeJ),
      subtitle: k.intl.string(k.t.xf9ePm),
      description: k.intl.string(k.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: Z
    },
    earlyAccessSeeAllVariant: eE ? {
      name: "earlyAccessSeeAllVariant",
      title: k.intl.string(k.t.UkLVeJ),
      subtitle: k.intl.string(k.t.xf9ePm),
      description: k.intl.string(k.t["+r4vdg"]),
      perkImage: X
    } : {
      name: "earlyAccess",
      title: k.intl.string(k.t.UkLVeJ),
      subtitle: k.intl.string(k.t.xf9ePm),
      description: k.intl.string(k.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: X
    },
    entranceSounds: eE ? {
      name: "entranceSounds",
      title: k.intl.string(k.t["f4M+H9"]),
      subtitle: k.intl.string(k.t["7ZCYvC"]),
      description: k.intl.string(k.t.mUT8bO),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: eC,
      perkImage: J
    } : {
      name: "entranceSounds",
      title: k.intl.string(k.t["f4M+H9"]),
      subtitle: k.intl.string(k.t["7ZCYvC"]),
      description: k.intl.string(k.t["3smf/f"]),
      perkImage: J
    },
    entranceSoundsSeeAllVariation: eE ? {
      name: "entranceSoundsSeeAllVariation",
      title: k.intl.string(k.t["f4M+H9"]),
      subtitle: k.intl.string(k.t["7ZCYvC"]),
      description: k.intl.string(k.t.mUT8bO),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: eC,
      perkImage: $
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: k.intl.string(k.t["f4M+H9"]),
      subtitle: k.intl.string(k.t["7ZCYvC"]),
      description: k.intl.string(k.t["3smf/f"]),
      perkImage: $
    },
    profiles: {
      name: "profiles",
      title: k.intl.string(k.t.KcyDwF),
      subtitle: k.intl.string(k.t.Mt3U1W),
      description: k.intl.string(k.t.kWcDK8),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: eI,
      perkImage: W
    },
    serverBoosts: {
      name: "serverBoosts",
      title: k.intl.string(k.t["NyDu/6"]),
      subtitle: k.intl.string(k.t["4pEwXL"]),
      description: eO ? "" : k.intl.string(k.t.jsyNHm),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: eO ? true : eT,
      perkImage: K,
      hideOnNarrowScreen: !eO,
      imageOverlayText: eO ? k.intl.string(k.t["/VzCKE"]).toLocaleUpperCase() : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: k.intl.string(k.t["NyDu/6"]),
      subtitle: k.intl.string(k.t["4pEwXL"]),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      perkImage: ed.A,
      imageOverlayText: k.intl.string(k.t["/VzCKE"]).toLocaleUpperCase()
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: k.intl.string(k.t["0Mykgq"]),
      subtitle: k.intl.string(k.t.opgqDZ),
      description: k.intl.string(k.t["t+QZSd"]),
      descriptionCta: k.intl.string(k.t.dBJVnZ),
      onCtaClick: eN,
      perkImage: ee
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: k.intl.string(k.t["0Mykgq"]),
      subtitle: k.intl.string(k.t.opgqDZ),
      description: k.intl.string(k.t["t+QZSd"]),
      descriptionCta: k.intl.string(k.t.dBJVnZ),
      onCtaClick: eN,
      perkImage: ee
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: k.intl.string(k.t.U68LpL),
      subtitle: k.intl.string(k.t.chRZiX),
      description: k.intl.string(k.t["t+QZSd"]),
      descriptionCta: k.intl.string(k.t.dBJVnZ),
      onCtaClick: eN,
      perkImage: ee
    },
    superReactions: {
      name: "superReactions",
      title: k.intl.string(k.t["6S7kO7"]),
      subtitle: k.intl.string(k.t.kN1JRI),
      description: k.intl.string(k.t.e7FKCi),
      perkImage: eo
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: k.intl.string(k.t.O5R3hr),
      pillText: k.intl.string(k.t.yhEY5G),
      backgroundImage: en
    },
    badge: {
      name: "badge",
      title: k.intl.string(k.t.dcFfSJ),
      subtitle: k.intl.string(k.t["37MFFq"]),
      perkImage: V,
      description: k.intl.string(k.t.T1IS4j)
    },
    greyBadge: {
      name: "greyBadge",
      title: k.intl.string(k.t.dcFfSJ),
      subtitle: k.intl.string(k.t["37MFFq"]),
      perkImage: ef.A,
      description: k.intl.string(k.t.T1IS4j),
      imageOverlayText: k.intl.string(k.t["/VzCKE"]).toLocaleUpperCase()
    },
    customAppIcons: {
      name: "customAppIcons",
      title: k.intl.string(k.t.OuItFi),
      subtitle: k.intl.string(k.t.mPyrE6),
      perkImage: q,
      description: k.intl.string(k.t.e7FKCi),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: eR
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: k.intl.string(k.t["R2IV/Q"]),
      subtitle: k.intl.string(k.t.R5Xag2),
      perkImage: Q,
      description: k.intl.string(k.t["8lsjSw"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: k.intl.string(k.t.LWsArT),
      subtitle: k.intl.string(k.t.bTzbVk),
      perkImage: (0, D.t4)(t, F, B),
      description: k.intl.string(k.t.JLnOM2)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: k.intl.string(k.t.tzdIwI),
      subtitle: k.intl.string(k.t.hJG8ZN),
      perkImage: (0, D.t4)(t, H, ea),
      description: k.intl.string(k.t.e7FKCi)
    },
    largeUploads: {
      name: "largeUploads",
      title: k.intl.formatToPlainString(k.t.jqhAdL, {
        premiumMaxSize: n
      }),
      subtitle: k.intl.formatToPlainString(k.t["HI+cfm"], {
        premiumMaxSize: n
      }),
      perkImage: el,
      description: k.intl.string(k.t["R0gx+0"])
    },
    hdVideo: {
      name: "hdVideo",
      title: k.intl.string(k.t.RSXQYO),
      subtitle: k.intl.string(k.t.ymCPxp),
      perkImage: es,
      description: k.intl.string(k.t["4WgB/4"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: k.intl.string(k.t.XQCSri),
      subtitle: k.intl.string(k.t.HC5wVV),
      description: k.intl.string(k.t.ee7wQ7),
      descriptionCta: eE || ey ? k.intl.string(k.t.y9TxXV) : k.intl.string(k.t.d8o6lc),
      isPremiumGetCta: !(eE || ey),
      onCtaClick: eE || ey ? eR : true,
      perkImage: et
    },
    referralProgram: {
      name: "referralProgram",
      title: k.intl.string(k.t.tPY4o9),
      subtitle: k.intl.string(k.t.JY0grC),
      description: k.intl.format(k.t["2JqTF6"], {
        helpdeskArticle: I.A.getArticleURL(L.MVz.REFERRAL_PROGRAM)
      }),
      descriptionCta: k.intl.string(k.t.JST6jl),
      isPremiumGetCta: !em || true,
      perkImage: er
    },
    serverProfiles: {
      name: "serverProfiles",
      title: k.intl.string(k.t.I9TYMg),
      subtitle: k.intl.string(k.t.HMSHeH),
      descriptionCta: eE ? k.intl.string(k.t.jVcuVY) : k.intl.string(k.t.JST6jl),
      isPremiumGetCta: !eE,
      onCtaClick: eE ? eI : true,
      perkImage: ei
    },
    permadecos: {
      name: "permadecos",
      title: k.intl.string(k.t["57ngoo"]),
      subtitle: k.intl.string(k.t.piFFjd),
      description: k.intl.format(k.t.Pd7olh, {
        learnMoreLink: I.A.getArticleURL(L.MVz.PERMADECOS)
      }),
      descriptionCta: eE ? k.intl.string(k.t.jVcuVY) : k.intl.string(k.t.JST6jl),
      isPremiumGetCta: !eE,
      onCtaClick: eE ? eD : true,
      pillText: eA || !eE ? true : k.intl.string(k.t.y2b7CA).toLocaleUpperCase(),
      perkImage: ep.A
    },
    customThemes: {
      name: "customThemes",
      title: k.intl.string(U.default["76L4b7"]),
      subtitle: k.intl.string(U.default.i3n50h),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: () => {
        (0, f.nf)(f.HP.CUSTOM_THEME)
      },
      perkImage: eu.A
    },
    displayNameStyles: {
      name: "displayNameStyles",
      title: k.intl.string(G.default.ABtBDQ),
      subtitle: k.intl.string(G.default.jhmU5E),
      descriptionCta: k.intl.string(k.t.jVcuVY),
      onCtaClick: ex,
      dismissibleContentType: s.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
      perkImage: ec.A,
      pillText: k.intl.string(k.t.y2b7CA).toLocaleUpperCase()
    },
    recurring3PPromotions: {
      name: "recurring3PPromotions",
      title: k.intl.string(k.t.m7PucM),
      subtitle: " ",
      onCtaClick: () => (0, C.uE)({
        analyticsLocations: e
      }),
      pillText: k.intl.string(k.t.oW0eUd).toLocaleUpperCase(),
      description: k.intl.format(k.t.zh1X7u, {}),
      descriptionCta: k.intl.string(k.t.w7s5Qr),
      customContent: (0, r.jsx)(N.U, {
        percentage: eM
      })
    },
    premiumGroup: (0, T.u)()
  };
  return eE && ev && (ek.tenureBadge = {
    name: "tenureBadge",
    title: k.intl.string(k.t.rnsqpa),
    pillText: k.intl.string(k.t["jyYgZ+"]).toLocaleUpperCase(),
    perkComponent: (0, r.jsx)(w.A, {}),
    cardVariant: P.PJ.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, R.D)({
      analyticsLocations: e
    })
  }), ek
}