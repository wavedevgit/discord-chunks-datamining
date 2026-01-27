/** Chunk was on 60667 **/
/** chunk id: 975662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eA,
  U: () => eg
});
var r, Chunk627968 = require("./627968.js"),
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
  eg = ((r = {}).CLIENT_THEMES = "clientThemes", r.CLIPS = "clips", r.EARLY_ACCESS = "earlyAccess", r.ENTRANCE_SOUNDS = "entranceSounds", r.PROFILES = "profiles", r.SERVER_BOOSTS = "serverBoosts", r.GREY_SERVER_BOOSTS = "greyServerBoosts", r.SPECIAL_MEMBER_PRICING = "specialMemberPricing", r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", r.SPECIAL_SHOP_PERKS = "specialShopPerks", r.SUPER_REACTIONS = "superReactions", r.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", r.CUSTOM_APP_ICONS = "customAppIcons", r.MORE_EMOJI_POWER = "moreEmojiPower", r.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", r.SPECIAL_STICKER_ACCESS = "specialStickerAccess", r.LARGE_UPLOADS = "largeUploads", r.HD_VIDEO = "hdVideo", r.BADGE = "badge", r.GREY_BADGE = "greyBadge", r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", r.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", r.REFERRAL_PROGRAM = "referralProgram", r.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", r.SERVER_PROFILES = "serverProfiles", r.TENURE_BADGE = "tenureBadge", r.PERMADECOS = "permadecos", r.CUSTOM_THEMES = "customThemes", r.DISPLAY_NAME_STYLES = "displayNameStyles", r.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", r.PREMIUM_GROUP = "premiumGroup", r);
let eA = () => {
  let {
    analyticsLocations: e
  } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD), t = (0, o.Ay)(), n = (0, I.Xq)(w.f3 / 1024, {
    useKibibytes: true
  }), r = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()), eg = null != r ? S.Ay.getPremiumPlanItem(r) : null, eA = (null != eg ? S.Ay.getSkuIdForPlan(eg.planId) : null) === w.pe.TIER_2, ef = O.default.getCurrentUser(), eh = (0, S.TW)(ef, w.PremiumTypes.TIER_2), eb = (0, S.TW)(ef, w.PremiumTypes.TIER_0), eE = (0, _.A)(x.A), {
    isFractionalPremiumActive: ex
  } = (0, u.A)(), eO = null != r && r.hasPremiumAtLeast(w.PremiumTypes.TIER_2), eC = (0, m.JZ)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eI = (0, A.A)({
    scrollPosition: U._F.TRY_IT_OUT,
    analyticsLocations: e
  }), eT = () => {
    let t = (0, b.qz)("openEntranceSounds") ? h.X.SOUNDBOARD_CATEGORY : h.X.VOICE_AND_VIDEO_PANEL;
    (0, E.openUserSettings)(t, {
      section: L.nc_.VOICE,
      subsection: U.MJ,
      analyticsLocations: e
    })
  }, eS = () => {
    (0, f.pX)(L.BVt.COLLECTIBLES_SHOP)
  }, ej = () => {
    let e = (0, b.WJ)("openCustomAppSettings");
    (0, E.openUserSettings)(e ? h.X.APPEARANCE_IN_APP_ICON : h.X.APPEARANCE_PANEL, {
      section: L.nc_.APPEARANCE,
      scrollPosition: e ? true : U.kq.CUSTOM_APP_ICONS
    })
  }, ev = l.useCallback(() => {
    (0, E.openUserSettings)(h.X.PROFILE_PANEL, {
      section: L.nc_.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, g.L)({
      analyticsLocations: e
    }))
  }, [e]), eN = new Date, ey = new Date(eN.getFullYear(), eN.getMonth() + 1, 0).getDate(), eP = eN.getDate() / ey * 100, eR = {
    clientThemes: {
      name: "clientThemes",
      title: G.intl.string(G.t.kWM48G),
      subtitle: G.intl.string(G.t.CjRASJ),
      description: G.intl.string(G.t.jBTTws),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: () => {
        (0, E.openUserSettings)(h.X.APPEARANCE_PANEL, {
          section: L.nc_.APPEARANCE,
          analyticsLocations: e
        })
      },
      perkImage: W
    },
    clips: eh ? {
      name: "clips",
      title: G.intl.string(G.t.z2jK6X),
      subtitle: G.intl.string(G.t["hxy0/R"]),
      description: G.intl.string(G.t.Z6v86b),
      descriptionCta: eE ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.hvVgAZ),
      pillText: G.intl.string(G.t.EYxi0o),
      onCtaClick: eE ? () => {
        (0, E.openUserSettings)(h.X.CLIPS_PANEL)
      } : () => {
        window.open(T.A.getArticleURL(L.MVz.CLIPS), "_blank")
      },
      perkImage: Z
    } : {
      name: "clips",
      title: G.intl.string(G.t.z2jK6X),
      subtitle: G.intl.string(G.t["hxy0/R"]),
      description: G.intl.string(G.t.X9IeN3),
      pillText: G.intl.string(G.t.EYxi0o),
      perkImage: Z
    },
    earlyAccess: eh ? {
      name: "earlyAccess",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["+r4vdg"]),
      perkImage: q
    } : {
      name: "earlyAccess",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: q
    },
    earlyAccessSeeAllVariant: eh ? {
      name: "earlyAccessSeeAllVariant",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["+r4vdg"]),
      perkImage: J
    } : {
      name: "earlyAccess",
      title: G.intl.string(G.t.UkLVeJ),
      subtitle: G.intl.string(G.t.xf9ePm),
      description: G.intl.string(G.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: J
    },
    entranceSounds: eh ? {
      name: "entranceSounds",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t.mUT8bO),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eT,
      perkImage: $
    } : {
      name: "entranceSounds",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t["3smf/f"]),
      perkImage: $
    },
    entranceSoundsSeeAllVariation: eh ? {
      name: "entranceSoundsSeeAllVariation",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t.mUT8bO),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eT,
      perkImage: ee
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: G.intl.string(G.t["f4M+H9"]),
      subtitle: G.intl.string(G.t["7ZCYvC"]),
      description: G.intl.string(G.t["3smf/f"]),
      perkImage: ee
    },
    profiles: {
      name: "profiles",
      title: G.intl.string(G.t.KcyDwF),
      subtitle: G.intl.string(G.t.Mt3U1W),
      description: G.intl.string(G.t.kWcDK8),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: eI,
      perkImage: z
    },
    serverBoosts: {
      name: "serverBoosts",
      title: G.intl.string(G.t["NyDu/6"]),
      subtitle: G.intl.string(G.t["4pEwXL"]),
      description: ex ? "" : G.intl.string(G.t.jsyNHm),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: ex ? true : () => {
        (0, E.openUserSettings)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: L.nc_.GUILD_BOOSTING,
          analyticsLocations: e
        })
      },
      perkImage: K,
      hideOnNarrowScreen: !ex,
      imageOverlayText: ex ? G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase() : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: G.intl.string(G.t["NyDu/6"]),
      subtitle: G.intl.string(G.t["4pEwXL"]),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      perkImage: e_.A,
      imageOverlayText: G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase()
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: G.intl.string(G.t["0Mykgq"]),
      subtitle: G.intl.string(G.t.opgqDZ),
      description: G.intl.string(G.t["t+QZSd"]),
      descriptionCta: G.intl.string(G.t.dBJVnZ),
      onCtaClick: eS,
      perkImage: et
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: G.intl.string(G.t["0Mykgq"]),
      subtitle: G.intl.string(G.t.opgqDZ),
      description: G.intl.string(G.t["t+QZSd"]),
      descriptionCta: G.intl.string(G.t.dBJVnZ),
      onCtaClick: eS,
      perkImage: et
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: G.intl.string(G.t.U68LpL),
      subtitle: G.intl.string(G.t.chRZiX),
      description: G.intl.string(G.t["t+QZSd"]),
      descriptionCta: G.intl.string(G.t.dBJVnZ),
      onCtaClick: eS,
      perkImage: et
    },
    superReactions: {
      name: "superReactions",
      title: G.intl.string(G.t["6S7kO7"]),
      subtitle: G.intl.string(G.t.kN1JRI),
      description: G.intl.string(G.t.e7FKCi),
      perkImage: eo
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: G.intl.string(G.t.O5R3hr),
      pillText: G.intl.string(G.t.yhEY5G),
      backgroundImage: er
    },
    badge: {
      name: "badge",
      title: G.intl.string(G.t.dcFfSJ),
      subtitle: G.intl.string(G.t["37MFFq"]),
      perkImage: H,
      description: G.intl.string(G.t.T1IS4j)
    },
    greyBadge: {
      name: "greyBadge",
      title: G.intl.string(G.t.dcFfSJ),
      subtitle: G.intl.string(G.t["37MFFq"]),
      perkImage: ep.A,
      description: G.intl.string(G.t.T1IS4j),
      imageOverlayText: G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase()
    },
    customAppIcons: {
      name: "customAppIcons",
      title: G.intl.string(G.t.OuItFi),
      subtitle: G.intl.string(G.t.mPyrE6),
      perkImage: X,
      description: G.intl.string(G.t.e7FKCi),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: ej
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: G.intl.string(G.t["R2IV/Q"]),
      subtitle: G.intl.string(G.t.R5Xag2),
      perkImage: Q,
      description: G.intl.string(G.t["8lsjSw"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: G.intl.string(G.t.LWsArT),
      subtitle: G.intl.string(G.t.bTzbVk),
      perkImage: (0, D.t4)(t, B, F),
      description: G.intl.string(G.t.JLnOM2)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: G.intl.string(G.t.tzdIwI),
      subtitle: G.intl.string(G.t.hJG8ZN),
      perkImage: (0, D.t4)(t, Y, es),
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
      perkImage: ec,
      description: G.intl.string(G.t["R0gx+0"])
    },
    hdVideo: {
      name: "hdVideo",
      title: G.intl.string(G.t.RSXQYO),
      subtitle: G.intl.string(G.t.ymCPxp),
      perkImage: ea,
      description: G.intl.string(G.t["4WgB/4"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: G.intl.string(G.t.XQCSri),
      subtitle: G.intl.string(G.t.HC5wVV),
      description: G.intl.string(G.t.ee7wQ7),
      descriptionCta: eh || eb ? G.intl.string(G.t.y9TxXV) : G.intl.string(G.t.d8o6lc),
      isPremiumGetCta: !(eh || eb),
      onCtaClick: eh || eb ? ej : true,
      perkImage: en
    },
    referralProgram: {
      name: "referralProgram",
      title: G.intl.string(G.t.tPY4o9),
      subtitle: G.intl.string(G.t.JY0grC),
      description: G.intl.format(G.t["2JqTF6"], {
        helpdeskArticle: T.A.getArticleURL(L.MVz.REFERRAL_PROGRAM)
      }),
      descriptionCta: G.intl.string(G.t.JST6jl),
      isPremiumGetCta: !eA || true,
      perkImage: ei
    },
    serverProfiles: {
      name: "serverProfiles",
      title: G.intl.string(G.t.I9TYMg),
      subtitle: G.intl.string(G.t.HMSHeH),
      descriptionCta: eh ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.JST6jl),
      isPremiumGetCta: !eh,
      onCtaClick: eh ? eI : true,
      perkImage: el
    },
    permadecos: {
      name: "permadecos",
      title: G.intl.string(G.t["57ngoo"]),
      subtitle: G.intl.string(G.t.piFFjd),
      description: G.intl.format(G.t.Pd7olh, {
        learnMoreLink: T.A.getArticleURL(L.MVz.PERMADECOS)
      }),
      descriptionCta: eh ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.JST6jl),
      isPremiumGetCta: !eh,
      onCtaClick: eh ? () => {
        eC || (0, m.Dr)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
          dismissAction: M.i.TAKE_ACTION
        }), eI()
      } : true,
      pillText: eC || !eh ? true : G.intl.string(G.t.y2b7CA).toLocaleUpperCase(),
      perkImage: em.A
    },
    customThemes: {
      name: "customThemes",
      title: G.intl.string(k.default["76L4b7"]),
      subtitle: G.intl.string(k.default.i3n50h),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: () => {
        (0, p.nf)(p.HP.CUSTOM_THEME)
      },
      perkImage: eu.A
    },
    displayNameStyles: {
      name: "displayNameStyles",
      title: G.intl.string(V.default.ABtBDQ),
      subtitle: G.intl.string(V.default.jhmU5E),
      descriptionCta: G.intl.string(G.t.jVcuVY),
      onCtaClick: ev,
      dismissibleContentType: a.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
      perkImage: ed.A,
      pillText: G.intl.string(G.t.y2b7CA).toLocaleUpperCase()
    },
    recurring3PPromotions: {
      name: "recurring3PPromotions",
      title: G.intl.string(G.t.m7PucM),
      subtitle: " ",
      onCtaClick: () => (0, v.uE)({
        analyticsLocations: e
      }),
      pillText: G.intl.string(G.t.oW0eUd).toLocaleUpperCase(),
      description: G.intl.format(G.t.zh1X7u, {}),
      descriptionCta: G.intl.string(G.t.w7s5Qr),
      customContent: (0, i.jsx)(N.U, {
        percentage: eP
      })
    },
    premiumGroup: (0, j.u)()
  };
  return eh && eO && (eR.tenureBadge = {
    name: "tenureBadge",
    title: G.intl.string(G.t.rnsqpa),
    pillText: G.intl.string(G.t["jyYgZ+"]).toLocaleUpperCase(),
    perkComponent: (0, i.jsx)(y.A, {}),
    cardVariant: R.PJ.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, P.D)({
      analyticsLocations: e
    })
  }), eR
}