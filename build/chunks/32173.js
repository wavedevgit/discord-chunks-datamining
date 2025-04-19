/** Chunk was on 44114 **/
n.d(t, {
  Z: () => eS,
  u: () => eO
}), n(953529);
var i, r = n(200651);
n(192379);
var s = n(399606),
  l = n(704215),
  a = n(481060),
  o = n(230711),
  c = n(410030),
  d = n(607070),
  u = n(100527),
  m = n(906732),
  g = n(975298),
  p = n(779618),
  h = n(832149),
  f = n(605236),
  b = n(300284),
  _ = n(703656),
  x = n(547972),
  E = n(131951),
  j = n(594174),
  C = n(78839),
  O = n(424218),
  S = n(63063),
  v = n(74538),
  T = n(715037),
  I = n(780525),
  N = n(314684),
  y = n(687362),
  A = n(943180),
  P = n(229555),
  R = n(768865),
  D = n(119269),
  Z = n(740479),
  w = n(391110),
  k = n(75077),
  L = n(474936),
  B = n(735825),
  M = n(981631),
  U = n(215023),
  V = n(921944),
  G = n(526761),
  F = n(332325),
  H = n(388032),
  z = n(344253),
  Y = n(660372),
  W = n(926433),
  K = n(302036),
  q = n(994554),
  X = n(704565),
  Q = n(393305),
  J = n(338879),
  $ = n(766491),
  ee = n(193943),
  et = n(707046),
  en = n(488459),
  ei = n(334347),
  er = n(132015),
  es = n(142416),
  el = n(607762),
  ea = n(474106),
  eo = n(572501),
  ec = n(755590),
  ed = n(909910),
  eu = n(637810),
  em = n(570423),
  eg = n(912429),
  ep = n(91394),
  eh = n(209672),
  ef = n(698173),
  eb = n(926262),
  e_ = n(482668),
  ex = n(21504),
  eE = n(371435),
  ej = n(83663),
  eC = n(317194),
  eO = ((i = {}).CLIENT_THEMES = "clientThemes", i.CLIPS = "clips", i.COLLECTIBLE_DECO = "collectibleDeco", i.EARLY_ACCESS = "earlyAccess", i.ENTRANCE_SOUNDS = "entranceSounds", i.PROFILES = "profiles", i.REMIXING = "remixing", i.SERVER_BOOSTS = "serverBoosts", i.GREY_SERVER_BOOSTS = "greyServerBoosts", i.SPECIAL_MEMBER_PRICING = "specialMemberPricing", i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", i.SPECIAL_SHOP_PERKS = "specialShopPerks", i.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", i.SUPER_REACTIONS = "superReactions", i.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", i.CUSTOM_APP_ICONS = "customAppIcons", i.MORE_EMOJI_POWER = "moreEmojiPower", i.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", i.SPECIAL_STICKER_ACCESS = "specialStickerAccess", i.LARGE_UPLOADS = "largeUploads", i.HD_VIDEO = "hdVideo", i.BADGE = "badge", i.GREY_BADGE = "greyBadge", i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", i.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", i.TENURE_REWARD_COLLECTIBLE = "tenureRewardCollectible", i.REFERRAL_PROGRAM = "referralProgram", i.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024", i.SERVER_PROFILES = "serverProfiles", i.TENURE_BADGE = "tenureBadge", i.PERMADECOS = "permadecos", i);
let eS = () => {
  let {
    analyticsLocations: e
  } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, c.ZP)(), i = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), eO = (0, O.BU)(L.Uq / 1024, {
    useKibibytes: !0
  }), {
    premiumSubscription: eS,
    isEligibleForReward: ev
  } = (0, s.cj)([C.ZP], () => ({
    premiumSubscription: C.ZP.getPremiumTypeSubscription(),
    isEligibleForReward: C.ZP.getIsSubscriptionEligibleForReward()
  })), eT = null != eS ? v.ZP.getPremiumPlanItem(eS) : null, eI = (null != eT ? v.ZP.getSkuIdForPlan(eT.planId) : null) === L.Si.TIER_2, eN = j.default.getCurrentUser(), ey = (0, v.I5)(eN, L.p9.TIER_2), eA = (0, v.I5)(eN, L.p9.TIER_0), eP = (0, N.bq)({
    showAnimations: !0
  }), eR = null != eP ? eP.initialPercentage : void 0, eD = null != eP ? eP.percentage : void 0, eZ = (0, p.Z)(E.Z), ew = (0, y.a)(), ek = (0, N.Kb)(B.qY), {
    isFractionalPremiumActive: eL
  } = (0, g.Z)(), eB = null != eS && eS.hasPremiumAtLeast(L.p9.TIER_2), eM = (0, f.wE)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE), {
    enabled: eU
  } = T.Z.useExperiment({
    location: "usePerksDiscoverabilityCards"
  }), eV = (0, b.Z)({
    scrollPosition: G.Y_.TRY_IT_OUT,
    analyticsLocations: e
  }), eG = () => {
    o.Z.open(M.oAB.VOICE, G.GA, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eF = () => {
    (0, _.uL)(M.Z5c.COLLECTIBLES_SHOP)
  }, eH = () => {
    o.Z.open(M.oAB.APPEARANCE, null, {
      scrollPosition: G.h1.CUSTOM_APP_ICONS
    })
  }, ez = {
    clientThemes: {
      name: "clientThemes",
      title: H.intl.string(H.t.kWM48P),
      subtitle: H.intl.string(H.t.CjRASE),
      description: H.intl.string(H.t.jBTTws),
      descriptionCta: H.intl.string(H.t.jVcuVV),
      onCtaClick: () => {
        o.Z.open(M.oAB.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: X
    },
    clips: ey ? {
      name: "clips",
      title: H.intl.string(H.t.z2jK6e),
      subtitle: H.intl.string(H.t["hxy0/f"]),
      description: H.intl.string(H.t.Z6v86e),
      descriptionCta: eZ ? H.intl.string(H.t.jVcuVV) : H.intl.string(H.t.hvVgAQ),
      pillText: H.intl.string(H.t.EYxi0t),
      onCtaClick: eZ ? () => {
        (0, x.Z)(F.Z.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(S.Z.getArticleURL(M.BhN.CLIPS), "_blank")
      },
      perkImage: $
    } : {
      name: "clips",
      title: H.intl.string(H.t.z2jK6e),
      subtitle: H.intl.string(H.t["hxy0/f"]),
      description: H.intl.string(H.t.X9IeNz),
      pillText: H.intl.string(H.t.EYxi0t),
      perkImage: $
    },
    earlyAccess: ey ? {
      name: "earlyAccess",
      title: H.intl.string(H.t.UkLVeH),
      subtitle: H.intl.string(H.t.xf9ePj),
      description: H.intl.string(H.t["+r4vdn"]),
      perkImage: et
    } : {
      name: "earlyAccess",
      title: H.intl.string(H.t.UkLVeH),
      subtitle: H.intl.string(H.t.xf9ePj),
      description: H.intl.string(H.t["6+xTcn"]),
      isPremiumGetCta: !0,
      perkImage: et
    },
    earlyAccessSeeAllVariant: ey ? {
      name: "earlyAccessSeeAllVariant",
      title: H.intl.string(H.t.UkLVeH),
      subtitle: H.intl.string(H.t.xf9ePj),
      description: H.intl.string(H.t["+r4vdn"]),
      perkImage: en
    } : {
      name: "earlyAccess",
      title: H.intl.string(H.t.UkLVeH),
      subtitle: H.intl.string(H.t.xf9ePj),
      description: H.intl.string(H.t["6+xTcn"]),
      isPremiumGetCta: !0,
      perkImage: en
    },
    entranceSounds: ey ? {
      name: "entranceSounds",
      title: H.intl.string(H.t["f4M+Hx"]),
      subtitle: H.intl.string(H.t["7ZCYvL"]),
      description: H.intl.string(H.t.mUT8bG),
      descriptionCta: H.intl.string(H.t.jVcuVV),
      onCtaClick: eG,
      perkImage: er
    } : {
      name: "entranceSounds",
      title: H.intl.string(H.t["f4M+Hx"]),
      subtitle: H.intl.string(H.t["7ZCYvL"]),
      description: H.intl.string(H.t["3smf/f"]),
      perkImage: er
    },
    entranceSoundsSeeAllVariation: ey ? {
      name: "entranceSoundsSeeAllVariation",
      title: H.intl.string(H.t["f4M+Hx"]),
      subtitle: H.intl.string(H.t["7ZCYvL"]),
      description: H.intl.string(H.t.mUT8bG),
      descriptionCta: H.intl.string(H.t.jVcuVV),
      onCtaClick: eG,
      perkImage: es
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: H.intl.string(H.t["f4M+Hx"]),
      subtitle: H.intl.string(H.t["7ZCYvL"]),
      description: H.intl.string(H.t["3smf/f"]),
      perkImage: es
    },
    profiles: {
      name: "profiles",
      title: H.intl.string(H.t.KcyDwM),
      subtitle: H.intl.string(H.t.Mt3U1d),
      description: H.intl.string(H.t.kWcDKy),
      descriptionCta: H.intl.string(H.t.jVcuVV),
      onCtaClick: eV,
      perkImage: Q
    },
    remixing: ey ? {
      name: "remixing",
      title: H.intl.string(H.t["H+v6eX"]),
      subtitle: H.intl.string(H.t.wmbOAg),
      description: H.intl.string(H.t.gdA9FB),
      perkImage: ec,
      pillText: H.intl.string(H.t.EYxi0t)
    } : {
      name: "remixing",
      title: H.intl.string(H.t["H+v6eX"]),
      subtitle: H.intl.string(H.t.wmbOAg),
      description: H.intl.string(H.t.fiLtJi),
      perkImage: ec,
      pillText: H.intl.string(H.t.EYxi0t)
    },
    serverBoosts: {
      name: "serverBoosts",
      title: H.intl.string(H.t["NyDu//"]),
      subtitle: H.intl.string(H.t["4pEwXF"]),
      description: eL ? H.intl.format(H.t.uPiIBQ, {
        link: "https://discord.com"
      }) : H.intl.string(H.t.jsyNHh),
      descriptionCta: H.intl.string(H.t.jVcuVV),
      onCtaClick: eL ? void 0 : () => {
        o.Z.open(M.oAB.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: J,
      hideOnNarrowScreen: !eL,
      imageOverlayText: eL ? H.intl.string(H.t.lcYttb) : void 0
    },
    greyServerBoosts: {
      name: "greyServerBoosts",
      title: H.intl.string(H.t["NyDu//"]),
      subtitle: H.intl.string(H.t["4pEwXF"]),
      descriptionCta: H.intl.string(H.t.jVcuVV),
      perkImage: eE.Z,
      imageOverlayText: H.intl.string(H.t.lcYttb)
    },
    specialMemberPricing: ey ? {
      name: "specialMemberPricing",
      title: H.intl.string(H.t["0Mykgo"]),
      subtitle: H.intl.string(H.t.opgqDQ),
      description: H.intl.string(H.t["t+QZSU"]),
      descriptionCta: H.intl.string(H.t.dBJVnZ),
      onCtaClick: eF,
      perkImage: eu
    } : {
      name: "specialMemberPricing",
      title: H.intl.string(H.t["0Mykgo"]),
      subtitle: H.intl.string(H.t.opgqDQ),
      description: H.intl.string(H.t["JE/EWV"]),
      isPremiumGetCta: !0,
      perkImage: eu
    },
    specialMemberPricingSeeAllVariant: ey ? {
      name: "specialMemberPricingSeeAllVariant",
      title: H.intl.string(H.t["0Mykgo"]),
      subtitle: H.intl.string(H.t.opgqDQ),
      description: H.intl.string(H.t["t+QZSU"]),
      descriptionCta: H.intl.string(H.t.dBJVnZ),
      onCtaClick: eF,
      perkImage: em
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: H.intl.string(H.t["0Mykgo"]),
      subtitle: H.intl.string(H.t.opgqDQ),
      description: H.intl.string(H.t["JE/EWV"]),
      isPremiumGetCta: !0,
      perkImage: em
    },
    specialShopPerks: ey ? {
      name: "specialShopPerks",
      title: H.intl.string(H.t.U68LpK),
      subtitle: H.intl.string(H.t.chRZiY),
      description: H.intl.string(H.t["t+QZSU"]),
      descriptionCta: H.intl.string(H.t.dBJVnZ),
      onCtaClick: eF,
      perkImage: eu
    } : {
      name: "specialShopPerks",
      title: H.intl.string(H.t.U68LpK),
      subtitle: H.intl.string(H.t.chRZiY),
      description: H.intl.string(H.t["JE/EWV"]),
      descriptionCta: H.intl.string(H.t.dBJVnZ),
      onCtaClick: eF,
      perkImage: eu
    },
    unlimitedSuperReactions: ey ? {
      name: "unlimitedSuperReactions",
      title: H.intl.string(H.t.hpgmOz),
      subtitle: H.intl.string(H.t.Hxujsr),
      description: H.intl.string(H.t["Cn/z6+"]),
      perkImage: ef,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: H.intl.string(H.t.hpgmOz),
      subtitle: H.intl.string(H.t.Hxujsr),
      description: H.intl.string(H.t.TF7cPT),
      isPremiumGetCta: !0,
      perkImage: ef,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: H.intl.string(H.t["6S7kOz"]),
      subtitle: H.intl.string(H.t.kN1JRE),
      description: H.intl.string(H.t.e7FKCg),
      perkImage: eh
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: H.intl.string(H.t.O5R3ho),
      pillText: H.intl.string(H.t.yhEY5O),
      backgroundImage: ea
    },
    badge: {
      name: "badge",
      title: H.intl.string(H.t.dcFfSE),
      subtitle: H.intl.string(H.t["37MFFh"]),
      perkImage: Y,
      description: H.intl.string(H.t.T1IS4u)
    },
    greyBadge: {
      name: "greyBadge",
      title: H.intl.string(H.t.dcFfSE),
      subtitle: H.intl.string(H.t["37MFFh"]),
      perkImage: ej.Z,
      description: H.intl.string(H.t.T1IS4u),
      imageOverlayText: H.intl.string(H.t.lcYttb)
    },
    customAppIcons: {
      name: "customAppIcons",
      title: H.intl.string(H.t.OuItFh),
      subtitle: H.intl.string(H.t.mPyrEx),
      perkImage: ee,
      description: H.intl.string(H.t.e7FKCg),
      descriptionCta: H.intl.string(H.t.jVcuVV),
      onCtaClick: eH
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: H.intl.string(H.t["R2IV/f"]),
      subtitle: H.intl.string(H.t.R5Xag4),
      perkImage: ei,
      description: H.intl.string(H.t["8lsjS0"])
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: H.intl.string(H.t.LWsAra),
      subtitle: H.intl.string(H.t.bTzbVl),
      perkImage: (0, k.gx)(t, W, K),
      description: H.intl.string(H.t.JLnOMz)
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: H.intl.string(H.t.tzdIwM),
      subtitle: H.intl.string(H.t.FXlU29),
      perkImage: (0, k.gx)(t, q, eg),
      description: H.intl.string(H.t.e7FKCg)
    },
    largeUploads: {
      name: "largeUploads",
      title: H.intl.formatToPlainString(H.t.jqhAdH, {
        premiumMaxSize: eO
      }),
      subtitle: H.intl.formatToPlainString(H.t["HI+cfn"], {
        premiumMaxSize: eO
      }),
      perkImage: eb,
      description: H.intl.string(H.t["R0gx+/"])
    },
    hdVideo: {
      name: "hdVideo",
      title: H.intl.string(H.t.RSXQYG),
      subtitle: H.intl.string(H.t.ymCPxs),
      perkImage: ep,
      description: H.intl.string(H.t["4WgB//"])
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: H.intl.string(H.t.XQCSrq),
      subtitle: H.intl.string(H.t.HC5wVV),
      description: H.intl.string(H.t.ee7wQ0),
      descriptionCta: ey || eA ? H.intl.string(H.t.y9TxXV) : H.intl.string(H.t.d8o6lZ),
      isPremiumGetCta: !(ey || eA),
      onCtaClick: ey || eA ? eH : void 0,
      perkImage: el
    },
    referralProgram: {
      name: "referralProgram",
      title: H.intl.string(H.t.tPY4o6),
      subtitle: H.intl.string(H.t.JY0grK),
      description: H.intl.format(H.t["2JqTFx"], {
        helpdeskArticle: S.Z.getArticleURL(M.BhN.REFERRAL_PROGRAM)
      }),
      descriptionCta: H.intl.string(H.t.JST6jo),
      isPremiumGetCta: !eI || void 0,
      perkImage: eo
    },
    serverProfiles: {
      name: "serverProfiles",
      title: H.intl.string(H.t.I9TYMj),
      subtitle: H.intl.string(H.t.HMSHeH),
      descriptionCta: ey ? H.intl.string(H.t.jVcuVV) : H.intl.string(H.t.JST6jo),
      isPremiumGetCta: !ey,
      onCtaClick: ey ? eV : void 0,
      perkImage: ed
    },
    permadecos: {
      name: "permadecos",
      title: H.intl.string(H.t["57ngoq"]),
      subtitle: H.intl.string(H.t.piFFjY),
      description: H.intl.format(H.t.Pd7olp, {
        learnMoreLink: S.Z.getArticleURL(M.BhN.PERMADECOS)
      }),
      descriptionCta: ey ? H.intl.string(H.t.jVcuVV) : H.intl.string(H.t.JST6jo),
      isPremiumGetCta: !ey,
      onCtaClick: ey ? () => {
        eM || (0, f.EW)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
          dismissAction: V.L.TAKE_ACTION
        }), eV()
      } : void 0,
      pillText: eM || !ey ? void 0 : H.intl.string(H.t.y2b7CA).toLocaleUpperCase(),
      perkImage: eC.Z
    }
  };
  if (null != ew) {
    let {
      title: t,
      subtitle: n,
      description: i,
      pillText: s,
      ctaDescription: l,
      dismissibleContentType: a
    } = ew;
    ez.tenureRewardCollectible = {
      name: "tenureRewardCollectible",
      title: t,
      subtitle: n,
      description: i,
      perkComponent: (0, r.jsx)("div", {
        className: z.cardComponent,
        children: (0, r.jsx)(D.ZP, {
          progressCircleVariation: D.Qo.AVATAR_DECO,
          avatarDecoAssetId: B.VA,
          avatarDecoAssetDescription: H.intl.string(H.t["9o4F4+"]),
          showAnimations: !0,
          percentage: eD,
          initialPercentage: eR
        })
      }),
      descriptionCta: l,
      onCtaClick: () => {
        null != ek && (0, h.Z)({
          product: ek,
          overrideTitle: H.intl.string(H.t.wRAXra),
          overrideDescription: H.intl.string(H.t.sQX6HR),
          analyticsLocations: e,
          purchaseType: U.o8.TENURE_REWARD
        })
      },
      cardVariant: w.zW.REWARD,
      pillText: s,
      dismissibleContentType: a
    }
  }
  let {
    enabled: eY
  } = (0, A.D)();
  return eY && ey && eB && (ez.tenureBadge = {
    name: "tenureBadge",
    title: H.intl.string(H.t.rnsqpa),
    pillText: H.intl.string(H.t.jyYgZ2).toLocaleUpperCase(),
    perkComponent: (0, r.jsx)(P.Z, {}),
    cardVariant: w.zW.NITRO_GRADIENT_HOVER_BORDER,
    onClick: () => (0, R.k)({
      analyticsLocations: e
    })
  }), ev && eU && (ez.collectibleDeco = {
    name: "collectibleDeco",
    title: H.intl.string(H.t.fzn5eH),
    subtitle: H.intl.format(H.t["8Ud+Qk"], {
      date: new Date(I._H),
      termsLink: I.Ps
    }),
    perkComponent: (0, r.jsx)(Z.Z, {
      image: i ? ex.Z : e_.Z,
      cta: H.intl.string(H.t.s0w7a2),
      onClick: () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("74824").then(n.bind(n, 817357));
          return t => (0, r.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = i
              })
            }
            return e
          }({}, t))
        })
      }
    }),
    pillText: H.intl.string(H.t.OS9KPj).toLocaleUpperCase()
  }), ez
}