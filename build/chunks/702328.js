/** Chunk was on 1815 **/
n.d(t, {
  Z: () => ef
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(622535),
  c = n(780384),
  d = n(481060),
  u = n(634894),
  m = n(410030),
  p = n(607070),
  g = n(100527),
  h = n(906732),
  f = n(70097),
  b = n(464824),
  N = n(214852),
  x = n(594174),
  _ = n(78839),
  E = n(626135),
  j = n(526167),
  C = n(74538),
  O = n(140465),
  v = n(278605),
  S = n(286961),
  T = n(351367),
  I = n(91802),
  y = n(639119),
  A = n(879214),
  P = n(8647),
  R = n(568126),
  D = n(605289),
  Z = n(346497),
  w = n(218390),
  k = n(823188),
  W = n(241158),
  L = n(114625),
  B = n(711896),
  M = n(135785),
  U = n(498765),
  V = n(635921),
  G = n(177839),
  F = n(794484),
  H = n(392521),
  z = n(349803),
  Y = n(179984),
  K = n(706542),
  q = n(851001),
  X = n(304576),
  J = n(409100),
  Q = n(391110),
  $ = n(71363),
  ee = n(781800),
  et = n(474936),
  en = n(981631),
  er = n(869783),
  ei = n(388032),
  es = n(658249),
  ea = n(499317),
  el = n(865215),
  eo = n(735035),
  ec = n(786362),
  ed = n(181960),
  eu = n(313199),
  em = n(821969);
let ep = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: n
    } = e;
    return t && null == n || n === et.p9.TIER_2 && t ? null : (0, r.jsx)(G.Z, {
      className: t ? es.perkCardsContainerSpacingFullscreen : es.perkCardsContainerSpacingSettings
    })
  },
  eg = e => {
    let {
      isFullscreen: t,
      inOfferExperience: n
    } = e;
    return t || n ? (0, r.jsx)(U.Z, {
      lifted: !t && n
    }) : null
  },
  eh = e => {
    let {
      isFullscreen: t,
      inOfferExperience: n,
      setIsAllPerksVisible: i,
      hasRenderedOnce: s,
      isMarketingPageV2Enabled: l,
      isReducedMotion: o
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: a()(es.whatsNewSectionBackground, {
        [es.whatsNewSectionBackgroundV2]: l
      }),
      children: [!l && (0, r.jsx)(F.Z, {
        variant: Q.R0.WHATS_NEW,
        isFullScreen: t
      }), l && (0, r.jsx)(W.Z, {
        shouldLoadVideo: s,
        isReducedMotion: o
      }), l && (0, r.jsx)(W.Z, {
        isBestOfNitro: !0,
        shouldLoadVideo: s,
        isReducedMotion: o
      }), !l && (0, r.jsx)(F.Z, {
        isFullScreen: t,
        showAllPerksButton: t ? (0, r.jsx)(ee.Z, {
          setIsAllPerksVisible: i,
          previousComponent: Q.MQ.MARKETING
        }) : void 0
      }), n && !l && (0, r.jsx)(H.ZP, {
        className: es.pdSparklesTop,
        variant: H.u0.TOP
      }), n && !l && (0, r.jsx)(H.ZP, {
        className: es.pdSparklesBottom,
        variant: H.u0.BOTTOM
      })]
    }) : null
  },
  ef = e => {
    var t, n, s;
    let {
      isFullscreen: W,
      entrypoint: U
    } = e;
    (0, N.z)(b.X);
    let G = U === et.EZ.ApplicationStoreHome,
      F = i.useRef(null),
      H = i.useRef(null),
      ee = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
      ef = (0, m.ZP)(),
      eb = (0, c.wj)(ef),
      eN = x.default.getCurrentUser(),
      ex = (0, C.I5)(eN),
      e_ = (0, v.xP)("PremiumMarketingHome") && !ex && G,
      [eE, ej] = i.useState(!1),
      [eC, eO] = i.useState(!1),
      [ev, eS] = i.useState(!1),
      [eT, eI] = i.useState(!1),
      ey = (0, j.rO)(),
      [eA, eP] = i.useState(!1),
      eR = (0, l.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
      eD = null != eR ? (0, C.Af)(eR) : null,
      eZ = null != eD ? C.ZP.getSkuIdForPlan(eD.planId) : null,
      ew = null !== eZ && eZ !== et.Si.TIER_2 ? et.Si.TIER_2 : null,
      ek = (0, I.n)(),
      eW = null != ek,
      [eL, eB] = i.useState(!1),
      eM = (0, y.N)(),
      eU = null == eM ? void 0 : null === (t = eM.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
      eV = (0, O.Nx)(),
      eG = (0, Z.Vi)(),
      eF = (0, T.m)({
        location: "PremiumMarketingHome"
      }),
      eH = null !== (s = eG || eF) && void 0 !== s && s,
      ez = null === (n = (0, S.Z)()) || void 0 === n ? void 0 : n.billingSettingsMarketingBanner,
      {
        analyticsLocations: eY
      } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
      eK = "PremiumMarketingHome";
    (0, u.j)({
      location: eK + " auto on",
      autoTrackExposure: !0
    }), (0, u.j)({
      location: eK + " auto off",
      autoTrackExposure: !1
    }), i.useEffect(() => {
      eP(!0)
    }, []);
    let eq = (0, r.jsx)("div", {
        className: a()({
          [es.premiumTierCardsContainerSettings]: !W,
          [es.premiumTierCardsContainerFullscreen]: W
        }),
        children: (0, r.jsx)(o.$, {
          onChange: e => eS(e),
          threshold: .1,
          active: !0,
          children: (0, r.jsx)(k.ZP, {
            variant: e_ ? k.NN.MARKETING_PAGE_V2 : k.NN.DEFAULT,
            showWumpus: !e_,
            tier0CTAButton: e_ ? (0, r.jsx)(J.Z, {
              forceInverted: eb && !e_,
              showIcon: !1,
              subscriptionTier: et.Si.TIER_0,
              className: es.marginTopForButtons,
              buttonTextClassName: e_ ? es.v2SubButtonText : es.subButtonText,
              buttonShineClassName: es.buttonShine
            }) : (0, r.jsx)(J.Z, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: et.Si.TIER_0,
              className: es.marginTopForButtons,
              look: d.iLD.OUTLINED,
              color: d.Ttl.WHITE,
              buttonShineClassName: es.buttonShine
            }),
            tier2CTAButton: eU !== et.Si.TIER_0 || e_ ? (0, r.jsx)(J.Z, {
              forceInverted: !e_,
              showIcon: !1,
              subscriptionTier: et.Si.TIER_2,
              className: es.marginTopForButtons,
              hasActivePromotion: eH,
              buttonTextClassName: e_ ? es.v2SubButtonText : es.subButtonText,
              buttonShineClassName: es.buttonShine,
              confirmationFooter: eF ? (0, r.jsx)(L.Z, {}) : void 0,
              planSelectBanner: eF ? (0, r.jsx)(B.Z, {}) : void 0
            }) : (0, r.jsx)(J.Z, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: et.Si.TIER_2,
              className: es.marginTopForButtons,
              look: d.iLD.OUTLINED,
              color: d.Ttl.WHITE,
              buttonShineClassName: es.buttonShine
            })
          })
        })
      }),
      eX = (0, r.jsxs)("div", {
        className: a()(es.container, {
          [es.settingsContainer]: !W,
          [es.containerBackground]: e_ && eb
        }),
        "data-cy": "tier-0-marketing-page",
        children: [e_ && (0, r.jsx)("div", {
          className: es.heroHeaderSideGradient
        }), e_ && (0, r.jsx)("img", {
          src: ea,
          className: es.heroHeaderBackgroundStars,
          alt: ""
        }), (0, r.jsx)(M.Z, {
          premiumSubscription: eR,
          className: a()(W ? es.fullscreenExistingSubscriberSpacing : es.existingSubscriberSpacing, {
            [es.zIndex1]: eV
          }),
          isFullscreen: W
        }), !e_ && (0, r.jsx)(eg, {
          isFullscreen: W,
          inOfferExperience: eV
        }), !W && eW ? (0, r.jsx)(D.Z, {
          localizedPricingPromo: ek,
          smallGap: !0
        }) : (0, r.jsxs)("div", {
          className: a()({
            [es.heroHeadingV2Container]: e_
          }),
          children: [(0, r.jsx)(o.$, {
            onChange: e => ej(e),
            threshold: 0,
            active: !0,
            children: e_ ? (0, r.jsx)(X.Z, {
              subscriptionTier: ew,
              isFullscreen: W || eV,
              entrypoint: U,
              isDarkMode: eb
            }) : (0, r.jsx)(V.ZP, {
              subscriptionTier: ew,
              isFullscreen: W || eV,
              isMarketingPageV2Enabled: e_,
              className: a()({
                [es.fullscreenHero]: W,
                [es.settingsHeroNoBackground]: !W && eV,
                [es.trialMarketingMargin]: eV,
                [es.settingsHeroBogoHeight]: !W && eG,
                [es.settingsHeroBogoMarginFullscreen]: W && eG,
                [es.noTopPaddingOverride]: null != eR
              }),
              entrypoint: U,
              isDarkMode: eb
            })
          }), !e_ && !0 === eF && (0, r.jsx)(A.W, {
            isFullScreen: W,
            analyticsLocations: eY
          }), e_ && (0, r.jsx)("div", {
            className: es.heroHeadingV2ArtContainer,
            children: (0, r.jsx)(f.Z, {
              autoPlay: !ee,
              playsInline: !0,
              preload: "auto",
              poster: eu.Z,
              loop: !0,
              className: es.heroHeadingV2Art,
              ref: H,
              children: (0, r.jsx)("source", {
                src: ey ? ed.Z : em.Z,
                type: ey ? er.m.MP4 : er.m.WEBM
              })
            })
          })]
        }), (0, r.jsxs)("div", {
          className: es.promoBannerContainer,
          children: [(0, r.jsx)(P.Z, {
            isFullScreen: W
          }), W && eW && (0, r.jsx)(R.Z, {
            localizedPricingPromo: ek
          })]
        }), !e_ && eq, U === et.EZ.UserSettings && null != ez && (0, r.jsx)(w.C, {
          className: es.giftPromoCard,
          config: ez
        }), (0, r.jsx)(eh, {
          isFullscreen: W,
          inOfferExperience: eV,
          setIsAllPerksVisible: eB,
          hasRenderedOnce: eA,
          isMarketingPageV2Enabled: e_,
          isReducedMotion: ee
        }), !e_ && (0, r.jsx)(ep, {
          isFullscreen: W
        }), e_ && eq, (0, r.jsxs)("div", {
          className: es.planComparisonTableContainer,
          children: [e_ ? (0, r.jsx)(K.Z, {
            className: es.planComparisonTableV2
          }) : (0, r.jsx)(Y.Z, {
            className: es.planComparisonTable,
            hideCTAs: !0
          }), W && !e_ ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("img", {
              src: eo,
              className: es.tableLeftSideDecoration,
              width: 197,
              height: 486,
              alt: ei.NW.string(ei.t.X4IxWF)
            }), (0, r.jsx)("img", {
              src: ec,
              className: es.tableRightSideDecoration,
              width: 241,
              height: 552,
              alt: ei.NW.string(ei.t.X4IxWF)
            })]
          }) : null]
        }), !e_ && (0, r.jsx)("div", {
          className: W ? es.footerSpacingFullscreen : es.footerSpacing
        }), (0, r.jsx)(z.Z, {
          isVisible: !eE && !ev && !eC && eA,
          isFullscreen: W,
          subscriptionTier: ew,
          isMarketingPageV2: e_
        }), (0, r.jsx)(o.$, {
          onChange: e => {
            e && !eT && (E.default.track(en.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: eY
            }), eI(!0))
          },
          children: (0, r.jsx)("div", {
            className: es.bottomOfPageVisibilitySensor
          })
        }), !e_ && (0, r.jsx)("img", {
          src: el,
          className: es.bottomIllustration,
          width: 112,
          height: 85,
          alt: ei.NW.string(ei.t.X4IxWF)
        }), e_ && (0, r.jsx)(o.$, {
          onChange: e => {
            eO(e)
          },
          children: (0, r.jsx)(q.Z, {
            isFooterVisible: eC,
            isDarkMode: eb,
            isReducedMotion: ee
          })
        })]
      });
    return W ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.yWw, {
        className: es.scroller,
        ref: F,
        children: eX
      }), (0, r.jsx)($.Z, {
        previousComponent: Q.MQ.MARKETING,
        isAllPerksVisible: eL,
        setIsAllPerksVisible: eB,
        isFullScreen: W
      })]
    }) : eX
  }