/** Chunk was on 9207 **/
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
  } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD), t = (0, o.Ay)(), n = (0, S.Xq)(L.f3 / 1024, {
    useKibibytes: true
  }), r = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()), eg = null != r ? I.Ay.getPremiumPlanItem(r) : null, eA = (null != eg ? I.Ay.getSkuIdForPlan(eg.planId) : null) === L.pe.TIER_2, ef = x.default.getCurrentUser(), eb = (0, I.TW)(ef, L.PremiumTypes.TIER_2), eh = (0, I.TW)(ef, L.PremiumTypes.TIER_0), eE = (0, _.A)(O.A), {
    isFractionalPremiumActive: eO
  } = (0, u.A)(), ex = null != r && r.hasPremiumAtLeast(L.PremiumTypes.TIER_2), eC = (0, m.JZ)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eS = (0, A.A)({
    scrollPosition: G._F.TRY_IT_OUT,
    analyticsLocations: e
  }), eT = () => {
    (0, E.openUserSettings)(b.X.SOUNDBOARD_CATEGORY, {
      section: w.nc_.VOICE,
      subsection: G.MJ,
      analyticsLocations: e
    })
  }, eI = () => {
    (0, f.pX)(w.BVt.COLLECTIBLES_SHOP)
  }, eN = () => {
    let e = (0, h.WJ)("openCustomAppSettings");
    (0, E.openUserSettings)(e ? b.X.APPEARANCE_IN_APP_ICON : b.X.APPEARANCE_PANEL, {
      section: w.nc_.APPEARANCE,
      scrollPosition: e ? true : G.kq.CUSTOM_APP_ICONS
    })
  }, ey = l.useCallback(() => {
    (0, E.openUserSettings)(b.X.PROFILE_PANEL, {
      section: w.nc_.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, g.L)({
      analyticsLocations: e
    }))
  }, [e]), ev = new Date, ej = new Date(ev.getFullYear(), ev.getMonth() + 1, 0).getDate(), eP = ev.getDate() / ej * 100, eR = {
    clientThemes: {
      name: "clientThemes",
      title: U.intl.string(U.t.kWM48G),
      subtitle: U.intl.string(U.t.CjRASJ),
      description: U.intl.string(U.t.jBTTws),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: () => {
        (0, E.openUserSettings)(b.X.APPEARANCE_PANEL, {
          section: w.nc_.APPEARANCE,
          analyticsLocations: e
        })
      },
      perkImage: W
    },
    clips: eb ? {
      name: "clips",
      title: U.intl.string(U.t.z2jK6X),
      subtitle: U.intl.string(U.t["hxy0/R"]),
      description: U.intl.string(U.t.Z6v86b),
      descriptionCta: eE ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.hvVgAZ),
      pillText: U.intl.string(U.t.EYxi0o),
      onCtaClick: eE ? () => {
        (0, E.openUserSettings)(b.X.CLIPS_PANEL, {
          section: w.nc_.CLIPS,
          analyticsLocations: e
        })
      } : () => {
        window.open(T.A.getArticleURL(w.MVz.CLIPS), "_blank")
      },
      perkImage: Z
    } : {
      name: "clips",
      title: U.intl.string(U.t.z2jK6X),
      subtitle: U.intl.string(U.t["hxy0/R"]),
      description: U.intl.string(U.t.X9IeN3),
      pillText: U.intl.string(U.t.EYxi0o),
      perkImage: Z
    },
    earlyAccess: eb ? {
      name: "earlyAccess",
      title: U.intl.string(U.t.UkLVeJ),
      subtitle: U.intl.string(U.t.xf9ePm),
      description: U.intl.string(U.t["+r4vdg"]),
      perkImage: q
    } : {
      name: "earlyAccess",
      title: U.intl.string(U.t.UkLVeJ),
      subtitle: U.intl.string(U.t.xf9ePm),
      description: U.intl.string(U.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: q
    },
    earlyAccessSeeAllVariant: eb ? {
      name: "earlyAccessSeeAllVariant",
      title: U.intl.string(U.t.UkLVeJ),
      subtitle: U.intl.string(U.t.xf9ePm),
      description: U.intl.string(U.t["+r4vdg"]),
      perkImage: J
    } : {
      name: "earlyAccess",
      title: U.intl.string(U.t.UkLVeJ),
      subtitle: U.intl.string(U.t.xf9ePm),
      description: U.intl.string(U.t["6+xTci"]),
      isPremiumGetCta: true,
      perkImage: J
    },
    entranceSounds: eb ? {
      name: "entranceSounds",
      title: U.intl.string(U.t["f4M+H9"]),
      subtitle: U.intl.string(U.t["7ZCYvC"]),
      description: U.intl.string(U.t.mUT8bO),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: eT,
      perkImage: $
    } : {
      name: "entranceSounds",
      title: U.intl.string(U.t["f4M+H9"]),
      subtitle: U.intl.string(U.t["7ZCYvC"]),
      description: U.intl.string(U.t["3smf/f"]),
      perkImage: $
    },
    entranceSoundsSeeAllVariation: eb ? {
      name: "entranceSoundsSeeAllVariation",
      title: U.intl.string(U.t["f4M+H9"]),
      subtitle: U.intl.string(U.t["7ZCYvC"]),
      description: U.intl.string(U.t.mUT8bO),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: eT,
      perkImage: ee
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: U.intl.string(U.t["f4M+H9"]),
      subtitle: U.intl.string(U.t["7ZCYvC"]),
      description: U.intl.string(U.t["3smf/f"]),
      perkImage: ee
    },
    profiles: {
      name: "profiles",
      title: U.intl.string(U.t.KcyDwF),
      subtitle: U.intl.string(U.t.Mt3U1W),
      description: U.intl.string(U.t.kWcDK8),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: eS,
      perkImage: K
    },
    serverBoosts: {
      name: "serverBoosts",
      title: U.intl.string(U.t["NyDu/6"]),
      subtitle: U.intl.string(U.t["4pEwXL"]),
      description: eO ? null : U.intl.string(U.t.jsyNHm),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: eO ? true : () => {
        (0, E.openUserSettings)(b.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: w.nc_.GUILD_BOOSTING,
          analyticsLocations: e
        })
      },
      perkImage: z,
      hideOnNarrowScreen: !eO,
      imageOverlayText: eO ? U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase() : true
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: U.intl.string(U.t["NyDu/6"]),
      subtitle: U.intl.string(U.t["4pEwXL"]),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      perkImage: e_.A,
      imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase()
    },
    specialMemberPricing: {
      name: "specialMemberPricing",
      title: U.intl.string(U.t["0Mykgq"]),
      subtitle: U.intl.string(U.t.opgqDZ),
      description: U.intl.string(U.t["t+QZSd"]),
      descriptionCta: U.intl.string(U.t.dBJVnZ),
      onCtaClick: eI,
      perkImage: et
    },
    specialMemberPricingSeeAllVariant: {
      name: "specialMemberPricingSeeAllVariant",
      title: U.intl.string(U.t["0Mykgq"]),
      subtitle: U.intl.string(U.t.opgqDZ),
      description: U.intl.string(U.t["t+QZSd"]),
      descriptionCta: U.intl.string(U.t.dBJVnZ),
      onCtaClick: eI,
      perkImage: et
    },
    specialShopPerks: {
      name: "specialShopPerks",
      title: U.intl.string(U.t.U68LpL),
      subtitle: U.intl.string(U.t.chRZiX),
      description: U.intl.string(U.t["t+QZSd"]),
      descriptionCta: U.intl.string(U.t.dBJVnZ),
      onCtaClick: eI,
      perkImage: et
    },
    superReactions: {
      name: "superReactions",
      title: U.intl.string(U.t["6S7kO7"]),
      subtitle: U.intl.string(U.t.kN1JRI),
      description: U.intl.string(U.t.e7FKCi),
      perkImage: eo
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: U.intl.string(U.t.O5R3hr),
      pillText: U.intl.string(U.t.yhEY5G),
      backgroundImage: er
    },
    badge: {
      name: "badge",
      title: U.intl.string(U.t.dcFfSJ),
      subtitle: U.intl.string(U.t["37MFFq"]),
      perkImage: H,
      description: U.intl.string(U.t.T1IS4j)
    },
    greyBadge: {
      name: "greyBadge",
      title: U.intl.string(U.t.dcFfSJ),
      subtitle: U.intl.string(U.t["37MFFq"]),
      perkImage: ep.A,
      description: U.intl.string(U.t.T1IS4j),
      imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase()
    },
    customAppIcons: {
      name: "customAppIcons",
      title: U.intl.string(U.t.OuItFi),
      subtitle: U.intl.string(U.t.mPyrE6),
      perkImage: X,
      description: U.intl.string(U.t.e7FKCi),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: eN
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: U.intl.string(U.t["R2IV/Q"]),
      subtitle: U.intl.string(U.t.R5Xag2),
      perkImage: Q,
      description: U.intl.string(U.t["8lsjSw"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: U.intl.string(U.t.LWsArT),
      subtitle: U.intl.string(U.t.bTzbVk),
      perkImage: (0, D.t4)(t, V, F),
      description: U.intl.string(U.t.JLnOM2)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: U.intl.string(U.t.tzdIwI),
      subtitle: U.intl.string(U.t.hJG8ZN),
      perkImage: (0, D.t4)(t, Y, es),
      description: U.intl.string(U.t.e7FKCi)
    },
    largeUploads: {
      name: "largeUploads",
      title: U.intl.formatToPlainString(U.t.jqhAdL, {
        premiumMaxSize: n
      }),
      subtitle: U.intl.formatToPlainString(U.t["HI+cfm"], {
        premiumMaxSize: n
      }),
      perkImage: ec,
      description: U.intl.string(U.t["R0gx+0"])
    },
    hdVideo: {
      name: "hdVideo",
      title: U.intl.string(U.t.RSXQYO),
      subtitle: U.intl.string(U.t.ymCPxp),
      perkImage: ea,
      description: U.intl.string(U.t["4WgB/4"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: U.intl.string(U.t.XQCSri),
      subtitle: U.intl.string(U.t.HC5wVV),
      description: U.intl.string(U.t.ee7wQ7),
      descriptionCta: eb || eh ? U.intl.string(U.t.y9TxXV) : U.intl.string(U.t.d8o6lc),
      isPremiumGetCta: !(eb || eh),
      onCtaClick: eb || eh ? eN : true,
      perkImage: en
    },
    referralProgram: {
      name: "referralProgram",
      title: U.intl.string(U.t.tPY4o9),
      subtitle: U.intl.string(U.t.JY0grC),
      description: U.intl.format(U.t["2JqTF6"], {
        helpdeskArticle: T.A.getArticleURL(w.MVz.REFERRAL_PROGRAM)
      }),
      descriptionCta: U.intl.string(U.t.JST6jl),
      isPremiumGetCta: !eA || true,
      perkImage: ei
    },
    serverProfiles: {
      name: "serverProfiles",
      title: U.intl.string(U.t.I9TYMg),
      subtitle: U.intl.string(U.t.HMSHeH),
      descriptionCta: eb ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
      isPremiumGetCta: !eb,
      onCtaClick: eb ? eS : true,
      perkImage: el
    },
    permadecos: {
      name: "permadecos",
      title: U.intl.string(U.t["57ngoo"]),
      subtitle: U.intl.string(U.t.piFFjd),
      description: U.intl.format(U.t.Pd7olh, {
        learnMoreLink: T.A.getArticleURL(w.MVz.PERMADECOS)
      }),
      descriptionCta: eb ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
      isPremiumGetCta: !eb,
      onCtaClick: eb ? () => {
        eC || (0, m.Dr)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
          dismissAction: M.i.TAKE_ACTION
        }), eS()
      } : true,
      pillText: eC || !eb ? true : U.intl.string(U.t.y2b7CA).toLocaleUpperCase(),
      perkImage: em.A
    },
    customThemes: {
      name: "customThemes",
      title: U.intl.string(k.default["76L4b7"]),
      subtitle: U.intl.string(k.default.i3n50h),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: () => {
        (0, p.nf)(p.HP.CUSTOM_THEME)
      },
      perkImage: eu.A
    },
    displayNameStyles: {
      name: "displayNameStyles",
      title: U.intl.string(B.default.ABtBDQ),
      subtitle: U.intl.string(B.default.jhmU5E),
      descriptionCta: U.intl.string(U.t.jVcuVY),
      onCtaClick: ey,
      dismissibleContentType: a.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
      perkImage: ed.A,
      pillText: U.intl.string(U.t.y2b7CA).toLocaleUpperCase()
    },
    recurring3PPromotions: {
      name: "recurring3PPromotions",
      title: U.intl.string(U.t.m7PucM),
      subtitle: (null == ef ? true : ef.isFractionalPremiumWithNoStandardSub()) ? U.intl.string(U.t.E1ONHQ) : U.intl.format(U.t["43kZKL"], {
        days: ej - ev.getDate()
      }),
      onCtaClick: () => (0, y.uE)({
        analyticsLocations: e
      }),
      pillText: U.intl.string(U.t.oW0eUd).toLocaleUpperCase(),
      description: U.intl.format(U.t.zh1X7u, {}),
      descriptionCta: U.intl.string(U.t.w7s5Qr),
      cardVariant: R.PJ.RECURRING_3P_PROMOTIONS,
      customContent: (0, i.jsx)(v.U, {
        percentage: eP,
        isFNUserWithNoStandardSub: !!(null == ef ? true : ef.isFractionalPremiumWithNoStandardSub())
      })
    },
    premiumGroup: (0, N.u)()
  };
  return eb && ex && (eR.tenureBadge = {
    name: "tenureBadge",
    title: U.intl.string(U.t.rnsqpa),
    pillText: U.intl.string(U.t["jyYgZ+"]).toLocaleUpperCase(),
    perkComponent: (0, i.jsx)(j.A, {}),
    cardVariant: R.PJ.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, P.D)({
      analyticsLocations: e
    })
  }), eR
}