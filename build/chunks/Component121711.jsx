/** Chunk was on 1272 **/
/** chunk id: 121711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ec
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk772848 = require("./772848.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk213609 = require("./213609.js"),
  Chunk335131 = require("./335131.js"),
  Chunk252618 = require("./252618.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk632285 = require("./632285.js"),
  Chunk979233 = require("./979233.js"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.jsx"),
  Chunk233374 = require("./233374.jsx"),
  Chunk611928 = require("./611928.jsx"),
  Chunk763433 = require("./763433.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk825102 = require("./825102.js"),
  Chunk775451 = require("./775451.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk63063 = require("./63063.js"),
  Chunk617136 = require("./617136.js"),
  Chunk113434 = require("./113434.js"),
  Chunk833435 = require("./833435.js"),
  Chunk497505 = require("./497505.js"),
  Chunk220068 = require("./220068.js"),
  Chunk937797 = require("./937797.js"),
  Chunk110560 = require("./110560.jsx"),
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
  Chunk890631 = require("./890631.js"),
  Chunk164792 = require("./164792.js"),
  Chunk524777 = require("./524777.js"),
  Chunk913713 = require("./913713.js"),
  Chunk431115 = require("./431115.js");

function ea(e) {
  let {
    onLoadComplete: t
  } = e, {
    enabled: n
  } = (0, P.WX)({
    location: q.dr.QUEST_HOME_DESKTOP
  }), l = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), o = (0, u.e7)([x.Z], () => x.Z.isFocused()), {
    ref: s,
    inViewport: c
  } = (0, V.a)(), d = i.useRef(null);
  if (i.useEffect(() => {
      (null == d ? true : d.current) != null && (d.current.paused || o && c && !l ? d.current.paused && !l && c && o && d.current.play() : d.current.pause())
    }, [l, c, o]), n) {
    let e = (0, Z.rO)();
    return (0, r.jsx)(_.Z, {
      ref: e => {
        d.current = e, s.current = e
      },
      loop: true,
      muted: true,
      playsInline: true,
      className: a()($.bannerAsset, $.orbsBannerAsset),
      onProgress: t,
      "data-mtctest-ignore": "true",
      controls: false,
      children: (0, r.jsx)("source", {
        src: e ? et.Z : en.Z,
        type: e ? "video/mp4" : "video/webm"
      })
    })
  }
  return (0, r.jsx)("img", {
    src: ee.ZP,
    className: a()($.bannerAsset, $.oversizedImg),
    alt: "",
    onLoad: t
  })
}

function eo(e) {
  let {
    onLoadComplete: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: er.ZP,
      className: a()($.bannerAsset, $.redirectNoticeBannerAsset),
      alt: ""
    }), (0, r.jsx)("img", {
      src: el.ZP,
      className: a()($.bannerAsset, $.redirectNoticeBannerAsset),
      alt: "",
      onLoad: t
    }), (0, r.jsx)("img", {
      src: ei.ZP,
      className: a()($.bannerAsset, $.redirectNoticeBannerAsset),
      alt: ""
    })]
  })
}

function es(e) {
  let {
    onLoadComplete: t,
    onScroll: n,
    onSelectTab: l,
    selectedTabId: a,
    scrollerRef: o,
    tabs: c
  } = e, u = i.useCallback(() => {
    (0, G.navigateToQuestHome)({
      fromContent: k.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER
    }), A.default.track(Q.rMx.QUEST_CONTENT_CLICKED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      cta_name: L.jZ.VIEW_QUESTS,
      click_id: (0, s.Z)(),
      is_targeted: false
    }, (0, L.mH)(k.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER)))
  }, []);
  return (0, r.jsx)(Y.t.Provider, {
    value: o,
    children: (0, r.jsxs)(T.Z, {
      onScroll: n,
      ref: o,
      children: [(0, r.jsx)(S.a, {
        selectedTabId: a,
        handleTransition: l,
        tabs: c,
        icon: d.qDn
      }), (0, r.jsx)(y.Z, {
        title: J.intl.string(J.t.z8YP2N),
        titleColor: "always-white",
        button: (0, r.jsx)(d.zxk, {
          variant: "overlay-primary",
          text: J.intl.string(J.t.GURBQk),
          onClick: u
        }),
        className: $.redirectNoticeBannerContainer,
        children: (0, r.jsx)(eo, {
          onLoadComplete: t
        })
      }), (0, r.jsx)(v.Z, {
        children: (0, r.jsxs)("div", {
          className: $.redirectNoticeContainer,
          children: [(0, r.jsx)(d.X6q, {
            variant: "heading-xl/semibold",
            children: J.intl.string(J.t.z8YP2N)
          }), (0, r.jsx)(d.Text, {
            color: "text-secondary",
            variant: "text-md/normal",
            children: J.intl.string(J.t["HdKh6+"])
          }), (0, r.jsx)(d.Avr, {
            text: J.intl.string(J.t["1CdL8f"]),
            onClick: u,
            textVariant: "text-md/normal",
            variant: "primary"
          })]
        })
      })]
    })
  })
}
let ec = function() {
  var e;
  let {
    enabled: t
  } = Chunk937797.m8.useConfig({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), n = (0, Chunk843611.TH)(), l = (null == (e = (0, Chunk843611.LX)(require.pathname, Chunk981631.Z5c.QUEST_HOME)) ? true : module.isExact) === true, s = exports && Chunk120356, {
    selectedTab: u,
    onSelectTab: f,
    tabs: _
  } = (0, Chunk452081.z)({
    withClaimedQuestsTab: !Chunk772848
  });
  Chunk647438.useLayoutEffect(() => {
    Chunk772848 && Chunk442837 === Chunk113434.e5.CLAIMED && Chunk220068.Z.setState({
      tab: Chunk113434.e5.ALL
    })
  }, [Chunk772848, Chunk442837]);
  let {
    onScroll: x,
    scrollPosition: A
  } = (0, Chunk979233.M)(), Z = Chunk150560.Z.getState().getUtmCurrentContext(), L = (0, Chunk833435._)({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }) ? Chunk736683.Z : Chunk736683.j, k = (0, Chunk879438.z)(e => e.registerAssetLoad), G = Chunk647438.useRef(Chunk526167);
  Chunk647438.useEffect(() => {
    Chunk110560.current = Chunk526167
  }), Chunk647438.useEffect(() => {
    let {
      current: e
    } = Chunk110560;
    (0, Chunk213609.h)({
      name: Chunk990547.ImpressionNames.QUEST_HOME,
      type: Chunk990547.ImpressionTypes.VIEW,
      properties: {
        utm_source_current: module.utmSourceCurrent,
        utm_medium_current: module.utmMediumCurrent,
        utm_campaign_current: module.utmCampaignCurrent,
        utm_content_current: module.utmContentCurrent,
        tab: Chunk442837
      }
    })
  }, [Chunk442837]);
  let {
    enabled: V
  } = (0, Chunk825102.WX)({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), ee = Chunk647438.useCallback(() => {
    if (Chunk672188) return void window.open(Chunk981631.EYA.PAID_TERMS_ORBS);
    window.open(Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_LEARN_MORE))
  }, [Chunk672188]);
  (0, Chunk252618.Tt)({
    location: Chunk388032.intl.string(Chunk388032.t.JALI2N)
  });
  let et = Chunk672188 ? Chunk388032.intl.format(Chunk388032.t.BCBIlp, {}) : Chunk388032.intl.format(Chunk388032.t.lmMBf3, {}),
    en = Chunk672188 ? Chunk388032.intl.format(Chunk388032.t.U9FY0N, {}) : Chunk388032.intl.string(Chunk388032.t.oWCrBg),
    er = Chunk647438.useRef(null),
    ei = Chunk647438.useCallback(() => {
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
  return Chunk647438.useEffect(() => {
    exports && (0, Chunk150063.Y)(Chunk981631.Z5c.QUEST_HOME_V2)
  }, [exports]), Chunk647438.useEffect(() => {
    Chunk632285.C.trigger()
  }, []), (0, Chunk951288.jsx)(Chunk251360.k.Provider, {
    value: {
      onAssetLoadComplete: Chunk497505
    },
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk728963.container,
      children: Chunk772848 ? (0, Chunk951288.jsx)(es, {
        onSelectTab: Chunk607070,
        onScroll: Chunk451478,
        onLoadComplete: Chunk497505,
        scrollerRef: Chunk524777,
        selectedTabId: Chunk442837,
        tabs: Chunk70097
      }) : Chunk672188 ? (0, Chunk951288.jsx)(Chunk466962.t.Provider, {
        value: Chunk524777,
        children: (0, Chunk951288.jsxs)(Chunk283293.Z, {
          onScroll: Chunk451478,
          ref: Chunk524777,
          children: [(0, Chunk951288.jsx)(Chunk763433.a, {
            selectedTabId: Chunk442837,
            handleTransition: Chunk607070,
            tabs: Chunk70097,
            icon: Chunk481060.qDn,
            children: (0, Chunk951288.jsx)(Chunk775451.V9, {
              analyticsPage: Chunk981631.ZY5.GLOBAL_DISCOVERY_QUESTS,
              cardAlignment: Chunk775451.ek.END,
              ctaText: Chunk388032.intl.string(Chunk388032.t["J+vlIS"]),
              ctaOnClick: Chunk913713
            })
          }), (0, Chunk951288.jsxs)(Chunk17845.Z, {
            title: Chunk890631,
            description: Chunk164792,
            button: Chunk672188 ? (0, Chunk951288.jsxs)(Chunk481060.hE2, {
              children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
                variant: "overlay-primary",
                text: Chunk388032.intl.string(Chunk388032.t["1Wm129"]),
                onClick: () => (0, Chunk335131.mK)({
                  openInLayer: false,
                  tab: Chunk215023.AW.ORBS,
                  analyticsLocations: [],
                  analyticsSource: Chunk100527.Z.INTRO_TO_ORBS_QUEST_BANNER
                })
              }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
                variant: "overlay-secondary",
                text: Chunk388032.intl.string(Chunk388032.t["7kTAgI"]),
                onClick: Chunk13299
              })]
            }) : (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "overlay-primary",
              text: Chunk388032.intl.string(Chunk388032.t.hvVgAQ),
              onClick: Chunk13299,
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
            }), (0, Chunk951288.jsx)(ea, {
              onLoadComplete: Chunk497505
            })]
          }), (0, Chunk951288.jsx)(Chunk374939.Z, {
            children: Chunk442837 === Chunk113434.e5.CLAIMED ? (0, Chunk951288.jsx)(Chunk617136, {
              onSelectTab: Chunk607070
            }) : (0, Chunk951288.jsx)(Chunk558652.Z, {})
          })]
        })
      }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsxs)(Chunk611928.ZP, {
          variant: Chunk611928._6.OVERLAY,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk728963.dragRegion
          }), (0, Chunk951288.jsx)(Chunk611928.z6, {
            scrollPosition: Chunk626135
          }), (0, Chunk951288.jsx)(Chunk611928.aV, {
            icon: Chunk481060.qDn
          })]
        }), (0, Chunk951288.jsx)(Chunk466962.t.Provider, {
          value: Chunk524777,
          children: (0, Chunk951288.jsxs)(Chunk283293.Z, {
            onScroll: Chunk451478,
            ref: Chunk524777,
            children: [(0, Chunk951288.jsxs)(Chunk17845.Z, {
              title: Chunk890631,
              description: Chunk164792,
              button: (0, Chunk951288.jsx)(Chunk481060.zxk, {
                variant: "overlay-primary",
                text: Chunk388032.intl.string(Chunk388032.t.hvVgAQ),
                onClick: Chunk13299,
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
              }), (0, Chunk951288.jsx)(ea, {
                onLoadComplete: Chunk497505
              })]
            }), (0, Chunk951288.jsxs)(Chunk374939.Z, {
              children: [(0, Chunk951288.jsx)("div", {
                className: Chunk728963.tabs,
                children: (0, Chunk951288.jsx)(Chunk233374.Z, {
                  tabs: Chunk70097,
                  selectedTab: Chunk442837,
                  onTabSelect: Chunk607070
                })
              }), Chunk442837 === Chunk113434.e5.CLAIMED ? (0, Chunk951288.jsx)(Chunk617136, {
                onSelectTab: Chunk607070
              }) : (0, Chunk951288.jsx)(Chunk558652.Z, {})]
            })]
          })
        })]
      })
    })
  })
}