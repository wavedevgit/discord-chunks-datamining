/** Chunk was on 8787 **/
n.d(t, {
  I: () => eb,
  Z: () => e_
}), n(953529);
var i, r = n(255367);
n(73800);
var s = n(399606),
  l = n(704215),
  a = n(230711),
  o = n(410030),
  c = n(100527),
  d = n(906732),
  u = n(975298),
  m = n(779618),
  g = n(832149),
  p = n(605236),
  h = n(442933),
  f = n(300284),
  b = n(703656),
  _ = n(547972),
  x = n(131951),
  E = n(594174),
  C = n(78839),
  j = n(424218),
  O = n(63063),
  S = n(74538),
  v = n(314684),
  T = n(687362),
  N = n(229555),
  I = n(768865),
  y = n(119269),
  A = n(391110),
  P = n(75077),
  R = n(474936),
  D = n(735825),
  Z = n(981631),
  w = n(215023),
  k = n(921944),
  L = n(526761),
  M = n(332325),
  B = n(388032),
  U = n(593595),
  V = n(660372),
  G = n(926433),
  F = n(302036),
  H = n(994554),
  z = n(567396),
  W = n(925309),
  Y = n(46245),
  K = n(766491),
  q = n(193943),
  X = n(707046),
  Q = n(488459),
  J = n(334347),
  $ = n(132015),
  ee = n(142416),
  et = n(498730),
  en = n(607762),
  ei = n(474106),
  er = n(572501),
  es = n(755590),
  el = n(909910),
  ea = n(637810),
  eo = n(570423),
  ec = n(912429),
  ed = n(91394),
  eu = n(209672),
  em = n(698173),
  eg = n(926262),
  ep = n(371435),
  eh = n(83663),
  ef = n(317194),
  eb = ((i = {}).CLIENT_THEMES = "clientThemes", i.CLIPS = "clips", i.EARLY_ACCESS = "earlyAccess", i.ENTRANCE_SOUNDS = "entranceSounds", i.PROFILES = "profiles", i.REMIXING = "remixing", i.SERVER_BOOSTS = "serverBoosts", i.GREY_SERVER_BOOSTS = "greyServerBoosts", i.SPECIAL_MEMBER_PRICING = "specialMemberPricing", i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", i.SPECIAL_SHOP_PERKS = "specialShopPerks", i.NAMEPLATES = "nameplates", i.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", i.SUPER_REACTIONS = "superReactions", i.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", i.CUSTOM_APP_ICONS = "customAppIcons", i.MORE_EMOJI_POWER = "moreEmojiPower", i.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", i.SPECIAL_STICKER_ACCESS = "specialStickerAccess", i.LARGE_UPLOADS = "largeUploads", i.HD_VIDEO = "hdVideo", i.BADGE = "badge", i.GREY_BADGE = "greyBadge", i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", i.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", i.TENURE_REWARD_COLLECTIBLE = "tenureRewardCollectible", i.REFERRAL_PROGRAM = "referralProgram", i.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", i.SERVER_PROFILES = "serverProfiles", i.TENURE_BADGE = "tenureBadge", i.PERMADECOS = "permadecos", i);
let e_ = () => {
  let {
    analyticsLocations: e
  } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, o.ZP)(), n = (0, j.BU)(R.Uq / 1024, {
    useKibibytes: !0
  }), i = (0, s.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), eb = null != i ? S.ZP.getPremiumPlanItem(i) : null, e_ = (null != eb ? S.ZP.getSkuIdForPlan(eb.planId) : null) === R.Si.TIER_2, ex = E.default.getCurrentUser(), eE = (0, S.I5)(ex, R.p9.TIER_2), eC = (0, S.I5)(ex, R.p9.TIER_0), ej = (0, v.bq)({
    showAnimations: !0
  }), eO = null != ej ? ej.initialPercentage : void 0, eS = null != ej ? ej.percentage : void 0, ev = (0, m.Z)(x.Z), eT = (0, h.H)("usePremiumPerksCards"), eN = (0, T.a)(), eI = (0, v.Kb)(D.qY), {
    isFractionalPremiumActive: ey
  } = (0, u.Z)(), eA = null != i && i.hasPremiumAtLeast(R.p9.TIER_2), eP = (0, p.wE)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), eR = (0, f.Z)({
    scrollPosition: L.Y_.TRY_IT_OUT,
    analyticsLocations: e
  }), eD = () => {
    a.Z.open(Z.oAB.VOICE, L.GA, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eZ = () => {
    (0, b.uL)(Z.Z5c.COLLECTIBLES_SHOP)
  }, ew = () => {
    a.Z.open(Z.oAB.APPEARANCE, null, {
      scrollPosition: L.h1.CUSTOM_APP_ICONS
    })
  }, ek = {
    clientThemes: {
      name: "clientThemes",
      title: B.intl.string(B.t.kWM48P),
      subtitle: B.intl.string(B.t.CjRASE),
      description: B.intl.string(B.t.jBTTws),
      descriptionCta: B.intl.string(B.t.jVcuVV),
      onCtaClick: () => {
        a.Z.open(Z.oAB.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: z
    },
    clips: eE ? {
      name: "clips",
      title: B.intl.string(B.t.z2jK6e),
      subtitle: B.intl.string(B.t["hxy0/f"]),
      description: B.intl.string(B.t.Z6v86e),
      descriptionCta: ev ? B.intl.string(B.t.jVcuVV) : B.intl.string(B.t.hvVgAQ),
      pillText: B.intl.string(B.t.EYxi0t),
      onCtaClick: ev ? () => {
        (0, _.Z)(M.Z.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(O.Z.getArticleURL(Z.BhN.CLIPS), "_blank")
      },
      perkImage: K
    } : {
      name: "clips",
      title: B.intl.string(B.t.z2jK6e),
      subtitle: B.intl.string(B.t["hxy0/f"]),
      description: B.intl.string(B.t.X9IeNz),
      pillText: B.intl.string(B.t.EYxi0t),
      perkImage: K
    },
    earlyAccess: eE ? {
      name: "earlyAccess",
      title: B.intl.string(B.t.UkLVeH),
      subtitle: B.intl.string(B.t.xf9ePj),
      description: B.intl.string(B.t["+r4vdn"]),
      perkImage: X
    } : {
      name: "earlyAccess",
      title: B.intl.string(B.t.UkLVeH),
      subtitle: B.intl.string(B.t.xf9ePj),
      description: B.intl.string(B.t["6+xTcn"]),
      isPremiumGetCta: !0,
      perkImage: X
    },
    earlyAccessSeeAllVariant: eE ? {
      name: "earlyAccessSeeAllVariant",
      title: B.intl.string(B.t.UkLVeH),
      subtitle: B.intl.string(B.t.xf9ePj),
      description: B.intl.string(B.t["+r4vdn"]),
      perkImage: Q
    } : {
      name: "earlyAccess",
      title: B.intl.string(B.t.UkLVeH),
      subtitle: B.intl.string(B.t.xf9ePj),
      description: B.intl.string(B.t["6+xTcn"]),
      isPremiumGetCta: !0,
      perkImage: Q
    },
    entranceSounds: eE ? {
      name: "entranceSounds",
      title: B.intl.string(B.t["f4M+Hx"]),
      subtitle: B.intl.string(B.t["7ZCYvL"]),
      description: B.intl.string(B.t.mUT8bG),
      descriptionCta: B.intl.string(B.t.jVcuVV),
      onCtaClick: eD,
      perkImage: $
    } : {
      name: "entranceSounds",
      title: B.intl.string(B.t["f4M+Hx"]),
      subtitle: B.intl.string(B.t["7ZCYvL"]),
      description: B.intl.string(B.t["3smf/f"]),
      perkImage: $
    },
    entranceSoundsSeeAllVariation: eE ? {
      name: "entranceSoundsSeeAllVariation",
      title: B.intl.string(B.t["f4M+Hx"]),
      subtitle: B.intl.string(B.t["7ZCYvL"]),
      description: B.intl.string(B.t.mUT8bG),
      descriptionCta: B.intl.string(B.t.jVcuVV),
      onCtaClick: eD,
      perkImage: ee
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: B.intl.string(B.t["f4M+Hx"]),
      subtitle: B.intl.string(B.t["7ZCYvL"]),
      description: B.intl.string(B.t["3smf/f"]),
      perkImage: ee
    },
    profiles: {
      name: "profiles",
      title: B.intl.string(B.t.KcyDwM),
      subtitle: B.intl.string(B.t.Mt3U1d),
      description: B.intl.string(B.t.kWcDKy),
      descriptionCta: B.intl.string(B.t.jVcuVV),
      onCtaClick: eR,
      perkImage: W
    },
    remixing: eE ? {
      name: "remixing",
      title: B.intl.string(B.t["H+v6eX"]),
      subtitle: B.intl.string(B.t.wmbOAg),
      description: B.intl.string(B.t.gdA9FB),
      perkImage: es,
      pillText: B.intl.string(B.t.EYxi0t)
    } : {
      name: "remixing",
      title: B.intl.string(B.t["H+v6eX"]),
      subtitle: B.intl.string(B.t.wmbOAg),
      description: B.intl.string(B.t.fiLtJi),
      perkImage: es,
      pillText: B.intl.string(B.t.EYxi0t)
    },
    serverBoosts: {
      name: "serverBoosts",
      title: B.intl.string(B.t["NyDu//"]),
      subtitle: B.intl.string(B.t["4pEwXF"]),
      description: ey ? B.intl.format(B.t.uPiIBQ, {
        link: "https://discord.com"
      }) : B.intl.string(B.t.jsyNHh),
      descriptionCta: B.intl.string(B.t.jVcuVV),
      onCtaClick: ey ? void 0 : () => {
        a.Z.open(Z.oAB.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: Y,
      hideOnNarrowScreen: !ey,
      imageOverlayText: ey ? B.intl.string(B.t.lcYttb) : void 0
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: B.intl.string(B.t["NyDu//"]),
      subtitle: B.intl.string(B.t["4pEwXF"]),
      descriptionCta: B.intl.string(B.t.jVcuVV),
      perkImage: ep.Z,
      imageOverlayText: B.intl.string(B.t.lcYttb)
    },
    specialMemberPricing: eT ? {
      name: "specialMemberPricing",
      title: B.intl.string(B.t["0Mykgo"]),
      subtitle: B.intl.string(B.t.opgqDQ),
      description: B.intl.string(B.t["t+QZSU"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: eZ,
      perkImage: et
    } : eE ? {
      name: "specialMemberPricing",
      title: B.intl.string(B.t["0Mykgo"]),
      subtitle: B.intl.string(B.t.opgqDQ),
      description: B.intl.string(B.t["t+QZSU"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: eZ,
      perkImage: ea
    } : {
      name: "specialMemberPricing",
      title: B.intl.string(B.t["0Mykgo"]),
      subtitle: B.intl.string(B.t.opgqDQ),
      description: B.intl.string(B.t["JE/EWV"]),
      isPremiumGetCta: !0,
      perkImage: ea
    },
    specialMemberPricingSeeAllVariant: eT ? {
      name: "specialMemberPricingSeeAllVariant",
      title: B.intl.string(B.t["0Mykgo"]),
      subtitle: B.intl.string(B.t.opgqDQ),
      description: B.intl.string(B.t["t+QZSU"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: eZ,
      perkImage: et
    } : eE ? {
      name: "specialMemberPricingSeeAllVariant",
      title: B.intl.string(B.t["0Mykgo"]),
      subtitle: B.intl.string(B.t.opgqDQ),
      description: B.intl.string(B.t["t+QZSU"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: eZ,
      perkImage: eo
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: B.intl.string(B.t["0Mykgo"]),
      subtitle: B.intl.string(B.t.opgqDQ),
      description: B.intl.string(B.t["JE/EWV"]),
      isPremiumGetCta: !0,
      perkImage: eo
    },
    specialShopPerks: eT ? {
      name: "specialShopPerks",
      title: B.intl.string(B.t.U68LpK),
      subtitle: B.intl.string(B.t.chRZiY),
      description: B.intl.string(B.t["t+QZSU"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: eZ,
      perkImage: et
    } : eE ? {
      name: "specialShopPerks",
      title: B.intl.string(B.t.U68LpK),
      subtitle: B.intl.string(B.t.chRZiY),
      description: B.intl.string(B.t["t+QZSU"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: eZ,
      perkImage: ea
    } : {
      name: "specialShopPerks",
      title: B.intl.string(B.t.U68LpK),
      subtitle: B.intl.string(B.t.chRZiY),
      description: B.intl.string(B.t["JE/EWV"]),
      descriptionCta: B.intl.string(B.t.dBJVnZ),
      onCtaClick: eZ,
      perkImage: ea
    },
    unlimitedSuperReactions: eE ? {
      name: "unlimitedSuperReactions",
      title: B.intl.string(B.t.hpgmOz),
      subtitle: B.intl.string(B.t.Hxujsr),
      description: B.intl.string(B.t["Cn/z6+"]),
      perkImage: em,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: B.intl.string(B.t.hpgmOz),
      subtitle: B.intl.string(B.t.Hxujsr),
      description: B.intl.string(B.t.TF7cPT),
      isPremiumGetCta: !0,
      perkImage: em,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: B.intl.string(B.t["6S7kOz"]),
      subtitle: B.intl.string(B.t.kN1JRE),
      description: B.intl.string(B.t.e7FKCg),
      perkImage: eu
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: B.intl.string(B.t.O5R3ho),
      pillText: B.intl.string(B.t.yhEY5O),
      backgroundImage: ei
    },
    badge: {
      name: "badge",
      title: B.intl.string(B.t.dcFfSE),
      subtitle: B.intl.string(B.t["37MFFh"]),
      perkImage: V,
      description: B.intl.string(B.t.T1IS4u)
    },
    greyBadge: {
      name: "greyBadge",
      title: B.intl.string(B.t.dcFfSE),
      subtitle: B.intl.string(B.t["37MFFh"]),
      perkImage: eh.Z,
      description: B.intl.string(B.t.T1IS4u),
      imageOverlayText: B.intl.string(B.t.lcYttb)
    },
    customAppIcons: {
      name: "customAppIcons",
      title: B.intl.string(B.t.OuItFh),
      subtitle: B.intl.string(B.t.mPyrEx),
      perkImage: q,
      description: B.intl.string(B.t.e7FKCg),
      descriptionCta: B.intl.string(B.t.jVcuVV),
      onCtaClick: ew
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: B.intl.string(B.t["R2IV/f"]),
      subtitle: B.intl.string(B.t.R5Xag4),
      perkImage: J,
      description: B.intl.string(B.t["8lsjS0"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: B.intl.string(B.t.LWsAra),
      subtitle: B.intl.string(B.t.bTzbVl),
      perkImage: (0, P.gx)(t, G, F),
      description: B.intl.string(B.t.JLnOMz)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: B.intl.string(B.t.tzdIwM),
      subtitle: B.intl.string(B.t.FXlU29),
      perkImage: (0, P.gx)(t, H, ec),
      description: B.intl.string(B.t.e7FKCg)
    },
    largeUploads: {
      name: "largeUploads",
      title: B.intl.formatToPlainString(B.t.jqhAdH, {
        premiumMaxSize: n
      }),
      subtitle: B.intl.formatToPlainString(B.t["HI+cfn"], {
        premiumMaxSize: n
      }),
      perkImage: eg,
      description: B.intl.string(B.t["R0gx+/"])
    },
    hdVideo: {
      name: "hdVideo",
      title: B.intl.string(B.t.RSXQYG),
      subtitle: B.intl.string(B.t.ymCPxs),
      perkImage: ed,
      description: B.intl.string(B.t["4WgB//"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: B.intl.string(B.t.XQCSrq),
      subtitle: B.intl.string(B.t.HC5wVV),
      description: B.intl.string(B.t.ee7wQ0),
      descriptionCta: eE || eC ? B.intl.string(B.t.y9TxXV) : B.intl.string(B.t.d8o6lZ),
      isPremiumGetCta: !(eE || eC),
      onCtaClick: eE || eC ? ew : void 0,
      perkImage: en
    },
    referralProgram: {
      name: "referralProgram",
      title: B.intl.string(B.t.tPY4o6),
      subtitle: B.intl.string(B.t.JY0grK),
      description: B.intl.format(B.t["2JqTFx"], {
        helpdeskArticle: O.Z.getArticleURL(Z.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: B.intl.string(B.t.JST6jo),
      isPremiumGetCta: !e_ || void 0,
      perkImage: er
    },
    serverProfiles: {
      name: "serverProfiles",
      title: B.intl.string(B.t.I9TYMj),
      subtitle: B.intl.string(B.t.HMSHeH),
      descriptionCta: eE ? B.intl.string(B.t.jVcuVV) : B.intl.string(B.t.JST6jo),
      isPremiumGetCta: !eE,
      onCtaClick: eE ? eR : void 0,
      perkImage: el
    },
    permadecos: {
      name: "permadecos",
      title: B.intl.string(B.t["57ngoq"]),
      subtitle: B.intl.string(B.t.piFFjY),
      description: B.intl.format(B.t.Pd7olp, {
        learnMoreLink: O.Z.getArticleURL(Z.BhN.PERMADECOS)
      }),
      descriptionCta: eE ? B.intl.string(B.t.jVcuVV) : B.intl.string(B.t.JST6jo),
      isPremiumGetCta: !eE,
      onCtaClick: eE ? () => {
        eP || (0, p.EW)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
          dismissAction: k.L.TAKE_ACTION
        }), eR()
      } : void 0,
      pillText: eP || !eE ? void 0 : B.intl.string(B.t.y2b7CA).toLocaleUpperCase(),
      perkImage: ef.Z
    },
    nameplates: {
      name: "nameplates",
      title: B.intl.string(B.t.rJbHFx),
      subtitle: B.intl.string(B.t.t2wcb2),
      perkImage: et,
      descriptionCta: B.intl.string(B.t.jVcuVV),
      onCtaClick: eZ
    }
  };
  if (null != eN) {
    let {
      title: t,
      subtitle: n,
      description: i,
      pillText: s,
      ctaDescription: l,
      dismissibleContentType: a
    } = eN;
    ek.tenureRewardCollectible = {
      name: "tenureRewardCollectible",
      title: t,
      subtitle: n,
      description: i,
      perkComponent: (0, r.jsx)("div", {
        className: U.cardComponent,
        children: (0, r.jsx)(y.ZP, {
          progressCircleVariation: y.Qo.AVATAR_DECO,
          avatarDecoAssetId: D.VA,
          avatarDecoAssetDescription: B.intl.string(B.t["9o4F4+"]),
          showAnimations: !0,
          percentage: eS,
          initialPercentage: eO
        })
      }),
      descriptionCta: l,
      onCtaClick: () => {
        null != eI && (0, g.Z)({
          product: eI,
          overrideTitle: B.intl.string(B.t.wRAXra),
          overrideDescription: B.intl.string(B.t.sQX6HR),
          analyticsLocations: e,
          purchaseType: w.o8.TENURE_REWARD
        })
      },
      cardVariant: A.zW.REWARD,
      pillText: s,
      dismissibleContentType: a
    }
  }
  return eE && eA && (ek.tenureBadge = {
    name: "tenureBadge",
    title: B.intl.string(B.t.rnsqpa),
    pillText: B.intl.string(B.t.jyYgZ2).toLocaleUpperCase(),
    perkComponent: (0, r.jsx)(N.Z, {}),
    cardVariant: A.zW.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, I.k)({
      analyticsLocations: e
    })
  }), ek
}