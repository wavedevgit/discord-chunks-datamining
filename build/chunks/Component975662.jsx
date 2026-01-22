/** Chunk was on web.js **/
/** chunk id: 975662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eg,
  U: () => em
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
  Chunk725177 = require("./725177.js"),
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
  Chunk857266 = require("./857266.js"),
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
  em = function(e) {
    return e.CLIENT_THEMES = "clientThemes", e.CLIPS = "clips", e.EARLY_ACCESS = "earlyAccess", e.ENTRANCE_SOUNDS = "entranceSounds", e.PROFILES = "profiles", e.SERVER_BOOSTS = "serverBoosts", e.GREY_SERVER_BOOSTS = "greyServerBoosts", e.SPECIAL_MEMBER_PRICING = "specialMemberPricing", e.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", e.SPECIAL_SHOP_PERKS = "specialShopPerks", e.SUPER_REACTIONS = "superReactions", e.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", e.CUSTOM_APP_ICONS = "customAppIcons", e.MORE_EMOJI_POWER = "moreEmojiPower", e.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", e.SPECIAL_STICKER_ACCESS = "specialStickerAccess", e.LARGE_UPLOADS = "largeUploads", e.HD_VIDEO = "hdVideo", e.BADGE = "badge", e.GREY_BADGE = "greyBadge", e.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", e.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", e.REFERRAL_PROGRAM = "referralProgram", e.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", e.SERVER_PROFILES = "serverProfiles", e.TENURE_BADGE = "tenureBadge", e.PERMADECOS = "permadecos", e.CUSTOM_THEMES = "customThemes", e.DISPLAY_NAME_STYLES = "displayNameStyles", e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", e.PREMIUM_GROUP = "premiumGroup", e
  }({});
let eg = () => {
  let {
    analyticsLocations: e
  } = (0, c.Ay)(l.A.PREMIUM_MARKETING_PERK_CARD), t = (0, o.Ay)(), n = (0, S.Xq)(L.f3 / 1024, {
    useKibibytes: true
  }), em = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()), eg = null != em ? T.Ay.getPremiumPlanItem(em) : null, eE = (null != eg ? T.Ay.getSkuIdForPlan(eg.planId) : null) === L.pe.TIER_2, eb = A.default.getCurrentUser(), ey = (0, T.TW)(eb, L.PremiumTypes.TIER_2), eO = (0, T.TW)(eb, L.PremiumTypes.TIER_0), eA = (0, d.A)(O.A), {
    isFractionalPremiumActive: ev
  } = (0, u.A)(), eS = null != em && em.hasPremiumAtLeast(L.PremiumTypes.TIER_2), eI = (0, p.JZ)(s.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eT = (0, h.A)({
    scrollPosition: k._F.TRY_IT_OUT,
    analyticsLocations: e
  }), eC = () => {
    (0, y.openUserSettings)(g.X.APPEARANCE_PANEL, {
      section: j.nc_.APPEARANCE,
      analyticsLocations: e
    })
  }, eN = () => {
    (0, y.openUserSettings)(g.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
      section: j.nc_.GUILD_BOOSTING,
      analyticsLocations: e
    })
  }, eR = () => {
    let t = (0, E.qz)("openEntranceSounds") ? g.X.SOUNDBOARD_CATEGORY : g.X.VOICE_AND_VIDEO_PANEL;
    (0, y.openUserSettings)(t, {
      section: j.nc_.VOICE,
      subsection: k.MJ,
      analyticsLocations: e
    })
  }, ew = () => {
    (0, m.pX)(j.BVt.COLLECTIBLES_SHOP)
  }, eP = () => {
    (0, b.A)(U.J.CLIPS, {
      analyticsLocations: e
    })
  }, eD = () => {
    let e = (0, E.WJ)("openCustomAppSettings");
    (0, y.openUserSettings)(e ? g.X.APPEARANCE_IN_APP_ICON : g.X.APPEARANCE_PANEL, {
      section: j.nc_.APPEARANCE,
      scrollPosition: e ? true : k.kq.CUSTOM_APP_ICONS
    })
  }, ex = () => {
    window.open(I.A.getArticleURL(j.MVz.CLIPS), "_blank")
  }, eL = () => {
    eI || (0, p.Dr)(s.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
      dismissAction: M.i.TAKE_ACTION
    }), eT()
  }, ej = i.useCallback(() => {
    (0, y.openUserSettings)(g.X.PROFILE_PANEL, {
      section: j.nc_.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, _.L)({
      analyticsLocations: e
    }))
  }, [e]), eM = new Date, ek = new Date(eM.getFullYear(), eM.getMonth() + 1, 0).getDate(), eU = eM.getDate() / ek * 100, eG = {
    clientThemes: {
      name: "clientThemes",
      title: G.intl.string(G.t.kWM48G),
      subtitle: G.intl.string(G.t.CjRASJ),
      description: G.intl.string(G.t.jBTTws),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eC,
      perkImage: K
    },
    clips: ey ? {
      name: "clips",
      title: G.intl.string(G.t.z2jK6X),
      subtitle: G.intl.string(G.t["hxy0/R"]),
      description: G.intl.string(G.t.Z6v86b),
      descriptionCta: eA ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.hvVgAZ),
      pillText: G.intl.string(G.t.EYxi0o),
      onCtaClick: eA ? eP : ex,
      perkImage: X
    } : {
      name: "clips",
      title: G.intl.string(G.t.z2jK6X),
      subtitle: G.intl.string(G.t["hxy0/R"]),
      description: G.intl.string(G.t.X9IeN3),
      pillText: G.intl.string(G.t.EYxi0o),
      perkImage: X
    },
    earlyAccess: ey ? {
      name: "earlyAccess",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["+r4vdg"]),
      perkImage: Q
    } : {
      name: "earlyAccess",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: Q
    },
    earlyAccessSeeAllVariant: ey ? {
      name: "earlyAccessSeeAllVariant",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["+r4vdg"]),
      perkImage: $
    } : {
      name: "earlyAccess",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: $
    },
    entranceSounds: ey ? {
      name: "entranceSounds",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t.mUT8bO),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eR,
      perkImage: ee
    } : {
      name: "entranceSounds",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t["3smf/f"]),
      perkImage: ee
    },
    entranceSoundsSeeAllVariation: ey ? {
      name: "entranceSoundsSeeAllVariation",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t.mUT8bO),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eR,
      perkImage: et
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t["3smf/f"]),
      perkImage: et
    },
    profiles: {
      name: "profiles",
      title: G.intl.string(G.t.KcyDwF),
      subtitle: G.intl.string(G.t.Mt3U1W),
      description: G.intl.string(G.t.kWcDK8),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eT,
      perkImage: z
    },
    serverBoosts: {
      name: "serverBoosts",
      title: G.intl.string(G.t["NyDu/6"]),
      subtitle: G.intl.string(G.t["4pEwXL"]),
      description: ev ? "" : G.intl.string(G.t.jsyNHm),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: ev ? true : eN,
      perkImage: q,
      hideOnNarrowScreen: !ev,
      imageOverlayText: ev ? G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase() : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: G.intl.string(G.t["NyDu/6"]),
      subtitle: G.intl.string(G.t["4pEwXL"]),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      perkImage: ep.A,
      imageOverlayText: G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase()
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: G.intl.string(G.t["0Mykgq"]),
      subtitle: G.intl.string(G.t.opgqDZ),
      description: G.intl.string(G.t["t+QZSd"]),
      descriptionCta: G.intl.string(G.t.dBJVnZ),
      onCtaClick: ew,
      perkImage: en
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: G.intl.string(G.t["0Mykgq"]),
      subtitle: G.intl.string(G.t.opgqDZ),
      description: G.intl.string(G.t["t+QZSd"]),
      descriptionCta: G.intl.string(G.t.dBJVnZ),
      onCtaClick: ew,
      perkImage: en
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: G.intl.string(G.t.U68LpL),
      subtitle: G.intl.string(G.t.chRZiX),
      description: G.intl.string(G.t["t+QZSd"]),
      descriptionCta: G.intl.string(G.t.dBJVnZ),
      onCtaClick: ew,
      perkImage: en
    },
    superReactions: {
      name: "superReactions",
      title: G.intl.string(G.t["6S7kO7"]),
      subtitle: G.intl.string(G.t.kN1JRI),
      description: G.intl.string(G.t.e7FKCi),
      perkImage: ec
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: G.intl.string(G.t.O5R3hr),
      pillText: G.intl.string(G.t.yhEY5G),
      backgroundImage: ei
    },
    badge: {
      name: "badge",
      title: G.intl.string(G.t.dcFfSJ),
      subtitle: G.intl.string(G.t["37MFFq"]),
      perkImage: B,
      description: G.intl.string(G.t.T1IS4j)
    },
    greyBadge: {
      name: "greyBadge",
      title: G.intl.string(G.t.dcFfSJ),
      subtitle: G.intl.string(G.t["37MFFq"]),
      perkImage: e_.A,
      description: G.intl.string(G.t.T1IS4j),
      imageOverlayText: G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase()
    },
    customAppIcons: {
      name: "customAppIcons",
      title: G.intl.string(G.t.OuItFi),
      subtitle: G.intl.string(G.t.mPyrE6),
      perkImage: Z,
      description: G.intl.string(G.t.e7FKCi),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eD
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: G.intl.string(G.t["R2IV/Q"]),
      subtitle: G.intl.string(G.t.R5Xag2),
      perkImage: J,
      description: G.intl.string(G.t["8lsjSw"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: G.intl.string(G.t.LWsArT),
      subtitle: G.intl.string(G.t.bTzbVk),
      perkImage: (0, x.t4)(t, H, Y),
      description: G.intl.string(G.t.JLnOM2)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: G.intl.string(G.t.tzdIwI),
      subtitle: G.intl.string(G.t.hJG8ZN),
      perkImage: (0, x.t4)(t, W, eo),
      description: G.intl.string(G.t.e7FKCi)
    },
    largeUploads: {
      name: "largeUploads",
      title: G.intl.formatToPlainString(G.t.jqhAdL, {
        premiumMaxSize: n
      }),
      subtitle: G.intl.formatToPlainString(G.t["HI+cfm"], {
        premiumMaxSize: n
      }),
      perkImage: eu,
      description: G.intl.string(G.t["R0gx+0"])
    },
    hdVideo: {
      name: "hdVideo",
      title: G.intl.string(G.t.RSXQYO),
      subtitle: G.intl.string(G.t.ymCPxp),
      perkImage: el,
      description: G.intl.string(G.t["4WgB/4"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: G.intl.string(G.t.XQCSri),
      subtitle: G.intl.string(G.t.HC5wVV),
      description: G.intl.string(G.t.ee7wQ7),
      descriptionCta: ey || eO ? G.intl.string(G.t.y9TxXV) : G.intl.string(G.t.d8o6lc),
      isPremiumGetCta: !(ey || eO),
      onCtaClick: ey || eO ? eD : true,
      perkImage: er
    },
    referralProgram: {
      name: "referralProgram",
      title: G.intl.string(G.t.tPY4o9),
      subtitle: G.intl.string(G.t.JY0grC),
      description: G.intl.format(G.t["2JqTF6"], {
        helpdeskArticle: I.A.getArticleURL(j.MVz.REFERRAL_PROGRAM)
      }),
      descriptionCta: G.intl.string(G.t.JST6jl),
      isPremiumGetCta: !eE || true,
      perkImage: ea
    },
    serverProfiles: {
      name: "serverProfiles",
      title: G.intl.string(G.t.I9TYMg),
      subtitle: G.intl.string(G.t.HMSHeH),
      descriptionCta: ey ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.JST6jl),
      isPremiumGetCta: !ey,
      onCtaClick: ey ? eT : true,
      perkImage: es
    },
    permadecos: {
      name: "permadecos",
      title: G.intl.string(G.t["57ngoo"]),
      subtitle: G.intl.string(G.t.piFFjd),
      description: G.intl.format(G.t.Pd7olh, {
        learnMoreLink: I.A.getArticleURL(j.MVz.PERMADECOS)
      }),
      descriptionCta: ey ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.JST6jl),
      isPremiumGetCta: !ey,
      onCtaClick: ey ? eL : true,
      pillText: eI || !ey ? true : G.intl.string(G.t.y2b7CA).toLocaleUpperCase(),
      perkImage: eh.A
    },
    customThemes: {
      name: "customThemes",
      title: G.intl.string(V.default["76L4b7"]),
      subtitle: G.intl.string(V.default.i3n50h),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: () => {
        (0, f.nf)(f.HP.CUSTOM_THEME)
      },
      perkImage: ef.A
    },
    displayNameStyles: {
      name: "displayNameStyles",
      title: G.intl.string(F.default.ABtBDQ),
      subtitle: G.intl.string(F.default.jhmU5E),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: ej,
      dismissibleContentType: s.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
      perkImage: ed.A,
      pillText: G.intl.string(G.t.y2b7CA).toLocaleUpperCase()
    },
    recurring3PPromotions: {
      name: "recurring3PPromotions",
      title: G.intl.string(G.t.m7PucM),
      subtitle: " ",
      onCtaClick: () => (0, N.uE)({
        analyticsLocations: e
      }),
      pillText: G.intl.string(G.t.oW0eUd).toLocaleUpperCase(),
      description: G.intl.format(G.t.zh1X7u, {}),
      descriptionCta: G.intl.string(G.t.w7s5Qr),
      customContent: (0, r.jsx)(R.U, {
        percentage: eU
      })
    },
    premiumGroup: (0, C.u)()
  };
  return ey && eS && (eG.tenureBadge = {
    name: "tenureBadge",
    title: G.intl.string(G.t.rnsqpa),
    pillText: G.intl.string(G.t["jyYgZ+"]).toLocaleUpperCase(),
    perkComponent: (0, r.jsx)(w.A, {}),
    cardVariant: D.PJ.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, P.D)({
      analyticsLocations: e
    })
  }), eG
}