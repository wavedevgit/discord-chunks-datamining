/** Chunk was on 1272 **/
/** chunk id: 121711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk213609 = require("./213609.js"),
  Chunk335131 = require("./335131.js"),
  Chunk252618 = require("./252618.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk979233 = require("./979233.js"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.jsx"),
  Chunk233374 = require("./233374.jsx"),
  Chunk611928 = require("./611928.jsx"),
  Chunk763433 = require("./763433.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk794231 = require("./794231.js"),
  Chunk822857 = require("./822857.js"),
  Chunk775451 = require("./775451.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk526167 = require("./526167.js"),
  Chunk63063 = require("./63063.js"),
  Chunk113434 = require("./113434.js"),
  Chunk833435 = require("./833435.js"),
  Chunk150560 = require("./150560.js"),
  Chunk672188 = require("./672188.js"),
  Chunk558652 = require("./558652.jsx"),
  Chunk736683 = require("./736683.jsx"),
  Chunk879438 = require("./879438.js"),
  Chunk251360 = require("./251360.js"),
  Chunk466962 = require("./466962.js"),
  Chunk452081 = require("./452081.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk728963 = require("./728963.js"),
  Chunk13299 = require("./13299.js"),
  Chunk606199 = require("./606199.js"),
  Chunk164792 = require("./164792.js");

function q(e) {
  let {
    onLoadComplete: t
  } = e, {
    enabled: n
  } = (0, N.WX)({
    location: B.dr.QUEST_HOME_DESKTOP
  }), l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), o = (0, s.e7)([P.Z], () => P.Z.isFocused()), {
    ref: c,
    inViewport: u
  } = (0, L.a)(), p = i.useRef(null);
  if (i.useEffect(() => {
      (null == p ? true : p.current) != null && (p.current.paused || o && u && !l ? p.current.paused && !l && u && o && p.current.play() : p.current.pause())
    }, [l, u, o]), n) {
    let e = (0, j.rO)();
    return (0, r.jsx)(m.Z, {
      ref: e => {
        p.current = e, c.current = e
      },
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(z.bannerAsset, z.orbsBannerAsset),
      onProgress: t,
      "data-mtctest-ignore": "true",
      controls: false,
      children: (0, r.jsx)("source", {
        src: e ? Y.Z : K.Z,
        type: e ? "video/mp4" : "video/webm"
      })
    })
  }
  return (0, r.jsx)("img", {
    src: W.ZP,
    className: a()(z.bannerAsset, z.oversizedImg),
    alt: "",
    onLoad: t
  })
}
let X = function() {
  let {
    selectedTab: e,
    onSelectTab: t,
    tabs: n
  } = (0, Chunk452081.z)(), {
    onScroll: l,
    scrollPosition: s
  } = (0, Chunk979233.M)(), d = Chunk150560.Z.getState().getUtmCurrentContext(), m = (0, Chunk833435._)({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }) ? Chunk736683.Z : Chunk736683.j, P = (0, Chunk879438.z)(e => e.registerAssetLoad), j = Chunk647438.useRef(Chunk607070);
  Chunk647438.useEffect(() => {
    Chunk526167.current = Chunk607070
  }), Chunk647438.useEffect(() => {
    let {
      current: t
    } = Chunk526167;
    (0, Chunk213609.h)({
      name: Chunk990547.ImpressionNames.QUEST_HOME,
      type: Chunk990547.ImpressionTypes.VIEW,
      properties: {
        utm_source_current: exports.utmSourceCurrent,
        utm_medium_current: exports.utmMediumCurrent,
        utm_campaign_current: exports.utmCampaignCurrent,
        utm_content_current: exports.utmContentCurrent,
        tab: module
      }
    })
  }, [module]);
  let {
    enabled: L
  } = (0, Chunk822857.WX)({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), {
    showBetaTag: W
  } = Chunk794231.Z.useExperiment({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), Y = Chunk647438.useCallback(() => {
    if (Chunk672188) return void window.open(Chunk981631.EYA.PAID_TERMS_ORBS);
    window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_LEARN_MORE))
  }, [Chunk672188]);
  (0, Chunk252618.Tt)({
    location: Chunk388032.intl.string(Chunk388032.t.JALI2N)
  });
  let K = Chunk672188 ? Chunk388032.intl.format(Chunk388032.t.BCBIlp, {}) : Chunk388032.intl.format(Chunk388032.t.lmMBf3, {}),
    X = Chunk672188 ? Chunk388032.intl.format(Chunk388032.t.U9FY0N, {}) : Chunk388032.intl.string(Chunk388032.t.oWCrBg),
    Q = Chunk647438.useRef(null),
    J = Chunk647438.useCallback(() => {
      (0, Chunk507808.Y)({
        pageType: Chunk981631.ZY5.GLOBAL_DISCOVERY_QUESTS,
        sectionType: Chunk981631.jXE.ORBS_BALANCE_MENU,
        ctaObject: Chunk981631.qAy.CTA_TO_ORBS_SHOP
      }), (0, Chunk335131.mK)({
        openInLayer: false,
        tab: Chunk215023.AW.ORBS,
        analyticsLocations: [],
        analyticsSource: Chunk100527.Z.ORBS_BALANCE_MENU
      })
    }, []);
  return (0, Chunk951288.jsx)(Chunk251360.k.Provider, {
    value: {
      onAssetLoadComplete: Chunk451478
    },
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk728963.container,
      children: Chunk672188 ? (0, Chunk951288.jsx)(Chunk466962.t.Provider, {
        value: Q,
        children: (0, Chunk951288.jsxs)(Chunk283293.Z, {
          onScroll: Chunk120356,
          ref: Q,
          children: [(0, Chunk951288.jsx)(Chunk763433.a, {
            selectedTabId: module,
            handleTransition: exports,
            tabs: require,
            icon: Chunk481060.qDn,
            children: (0, Chunk951288.jsx)(Chunk775451.V9, {
              analyticsPage: Chunk981631.ZY5.GLOBAL_DISCOVERY_QUESTS,
              cardAlignment: Chunk775451.ek.END,
              ctaText: Chunk388032.intl.string(Chunk388032.t["J+vlIS"]),
              ctaOnClick: J
            })
          }), (0, Chunk951288.jsxs)(Chunk17845.Z, {
            title: Chunk164792,
            description: X,
            betaTag: Chunk672188 && Chunk13299,
            button: Chunk672188 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
              children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
                variant: "overlay-primary",
                text: Chunk388032.intl.string(Chunk388032.t["1Wm129"]),
                onClick: () => (0, Chunk335131.mK)({
                  openInLayer: false,
                  tab: Chunk215023.AW.ORBS,
                  analyticsLocations: [],
                  analyticsSource: Chunk100527.Z.INTRO_TO_ORBS_QUEST_BANNER
                })
              }), (0, Chunk951288.jsx)(Chunk755721.zx, {
                look: Chunk755721.iL.LINK,
                color: Chunk755721.Tt.CUSTOM,
                className: Chunk728963.orbsTermsButton,
                onClick: Chunk606199,
                children: Chunk388032.intl.string(Chunk388032.t["7kTAgI"])
              })]
            }) : (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "overlay-primary",
              text: Chunk388032.intl.string(Chunk388032.t.hvVgAQ),
              onClick: Chunk606199,
              icon: Chunk481060.Gr1,
              iconPosition: "end"
            }),
            className: a()(Chunk728963.bannerContainer, {
              [Chunk728963.orbsContainer]: Chunk672188
            }),
            children: [(0, Chunk951288.jsx)("div", {
              className: a()(Chunk728963.bannerGradient, {
                [Chunk728963.orbsGradient]: Chunk672188
              })
            }), (0, Chunk951288.jsx)(q, {
              onLoadComplete: Chunk451478
            })]
          }), (0, Chunk951288.jsx)(Chunk374939.Z, {
            children: module === Chunk113434.e5.CLAIMED ? (0, Chunk951288.jsx)(Chunk70097, {
              onSelectTab: exports
            }) : (0, Chunk951288.jsx)(Chunk558652.Z, {})
          })]
        })
      }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsxs)(Chunk611928.ZP, {
          variant: Chunk611928._6.OVERLAY,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk728963.dragRegion
          }), (0, Chunk951288.jsx)(Chunk611928.z6, {
            scrollPosition: Chunk442837
          }), (0, Chunk951288.jsx)(Chunk611928.aV, {
            icon: Chunk481060.qDn
          })]
        }), (0, Chunk951288.jsx)(Chunk466962.t.Provider, {
          value: Q,
          children: (0, Chunk951288.jsxs)(Chunk283293.Z, {
            onScroll: Chunk120356,
            ref: Q,
            children: [(0, Chunk951288.jsxs)(Chunk17845.Z, {
              title: Chunk164792,
              description: X,
              button: (0, Chunk951288.jsx)(Chunk481060.zxk, {
                variant: "overlay-primary",
                text: Chunk388032.intl.string(Chunk388032.t.hvVgAQ),
                onClick: Chunk606199,
                icon: Chunk481060.Gr1,
                iconPosition: "end"
              }),
              className: a()(Chunk728963.bannerContainer, {
                [Chunk728963.orbsContainer]: Chunk672188
              }),
              children: [(0, Chunk951288.jsx)("div", {
                className: a()(Chunk728963.bannerGradient, {
                  [Chunk728963.orbsGradient]: Chunk672188
                })
              }), (0, Chunk951288.jsx)(q, {
                onLoadComplete: Chunk451478
              })]
            }), (0, Chunk951288.jsxs)(Chunk374939.Z, {
              children: [(0, Chunk951288.jsx)("div", {
                className: Chunk728963.tabs,
                children: (0, Chunk951288.jsx)(Chunk233374.Z, {
                  tabs: require,
                  selectedTab: module,
                  onTabSelect: exports
                })
              }), module === Chunk113434.e5.CLAIMED ? (0, Chunk951288.jsx)(Chunk70097, {
                onSelectTab: exports
              }) : (0, Chunk951288.jsx)(Chunk558652.Z, {})]
            })]
          })
        })]
      })
    })
  })
}