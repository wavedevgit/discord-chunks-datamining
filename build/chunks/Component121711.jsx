/** Chunk was on 1272 **/
/** chunk id: 121711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eh
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
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
  Chunk625128 = require("./625128.js"),
  Chunk362762 = require("./362762.js"),
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
  Chunk36243 = require("./36243.js"),
  Chunk877109 = require("./877109.jsx"),
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
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk728963 = require("./728963.js"),
  Chunk13299 = require("./13299.js"),
  Chunk890631 = require("./890631.js"),
  Chunk164792 = require("./164792.js"),
  Chunk524777 = require("./524777.js"),
  Chunk913713 = require("./913713.js"),
  Chunk431115 = require("./431115.js");

function ed(e) {
  let {
    onLoadComplete: t
  } = e, {
    enabled: n
  } = (0, A.WX)({
    location: $.dr.QUEST_HOME_DESKTOP
  }), l = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), o = (0, u.e7)([Z.Z], () => Z.Z.isFocused()), {
    ref: s,
    inViewport: c
  } = (0, W.a)(), d = i.useRef(null);
  if (i.useEffect(() => {
      (null == d ? true : d.current) != null && (d.current.paused || o && c && !l ? d.current.paused && !l && c && o && d.current.play() : d.current.pause())
    }, [l, c, o]), n) {
    let e = (0, L.rO)();
    return (0, r.jsx)(E.Z, {
      ref: e => {
        d.current = e, s.current = e
      },
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(ei.bannerAsset, ei.orbsBannerAsset),
      onProgress: t,
      "data-mtctest-ignore": "true",
      controls: false,
      children: (0, r.jsx)("source", {
        src: e ? ea.Z : eo.Z,
        type: e ? "video/mp4" : "video/webm"
      })
    })
  }
  return (0, r.jsx)("img", {
    src: el.ZP,
    className: a()(ei.bannerAsset, ei.oversizedImg),
    alt: "",
    onLoad: t
  })
}

function ep(e) {
  let {
    onLoadComplete: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: es.ZP,
      className: a()(ei.bannerAsset, ei.redirectNoticeBannerAsset),
      alt: ""
    }), (0, r.jsx)("img", {
      src: eu.ZP,
      className: a()(ei.bannerAsset, ei.redirectNoticeBannerAsset),
      alt: "",
      onLoad: t
    }), (0, r.jsx)("img", {
      src: ec.ZP,
      className: a()(ei.bannerAsset, ei.redirectNoticeBannerAsset),
      alt: ""
    })]
  })
}

function ef(e) {
  let {
    onLoadComplete: t,
    onScroll: n,
    onSelectTab: l,
    selectedTabId: a,
    scrollerRef: o,
    tabs: c
  } = e, u = i.useCallback(() => {
    (0, F.navigateToQuestHome)({
      fromContent: U.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER
    }), w.default.track(ee.rMx.QUEST_CONTENT_CLICKED, function(e) {
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
      cta_name: D.jZ.VIEW_QUESTS,
      click_id: (0, s.Z)(),
      is_targeted: false
    }, (0, D.mH)(U.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER)))
  }, []);
  return (0, r.jsx)(X.t.Provider, {
    value: o,
    children: (0, r.jsxs)(P.Z, {
      onScroll: n,
      ref: o,
      children: [(0, r.jsx)(N.a, {
        selectedTabId: a,
        handleTransition: l,
        tabs: c,
        icon: d.qDn
      }), (0, r.jsx)(I.Z, {
        title: er.intl.string(er.t.z8YP2N),
        titleColor: "always-white",
        button: (0, r.jsx)(d.Button, {
          variant: "overlay-primary",
          text: er.intl.string(er.t.GURBQk),
          onClick: u
        }),
        className: ei.redirectNoticeBannerContainer,
        children: (0, r.jsx)(ep, {
          onLoadComplete: t
        })
      }), (0, r.jsx)(C.Z, {
        children: (0, r.jsxs)("div", {
          className: ei.redirectNoticeContainer,
          children: [(0, r.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            children: er.intl.string(er.t.z8YP2N)
          }), (0, r.jsx)(d.Text, {
            color: "text-secondary",
            variant: "text-md/normal",
            children: er.intl.string(er.t["HdKh6+"])
          }), (0, r.jsx)(d.Avr, {
            text: er.intl.string(er.t["1CdL8f"]),
            onClick: u,
            textVariant: "text-md/normal",
            variant: "primary"
          })]
        })
      })]
    })
  })
}
let eh = function(e) {
  var t;
  let {
    withTopBorder: n
  } = e, {
    enabled: l
  } = B.m8.useConfig({
    location: $.dr.QUEST_HOME_DESKTOP
  }), s = (0, o.TH)(), f = (null == (t = (0, o.LX)(s.pathname, ee.Z5c.QUEST_HOME)) ? true : t.isExact) === true, E = l && f, Z = (0, u.e7)([b.Z], () => b.Z.getState("quests")), {
    selectedTab: w,
    onSelectTab: L,
    tabs: D
  } = (0, J.z)({
    withClaimedQuestsTab: !E
  });
  i.useLayoutEffect(() => {
    E && w === k.e5.CLAIMED && G.Z.setState({
      tab: k.e5.ALL
    })
  }, [E, w]);
  let {
    onScroll: U,
    scrollPosition: F
  } = (0, v.M)(), W = z.Z.getState().getUtmCurrentContext(), el = (0, M._)({
    location: $.dr.QUEST_HOME_DESKTOP
  }) ? q.Z : q.j, ea = (0, K.z)(e => e.registerAssetLoad), eo = i.useRef(W);
  i.useEffect(() => {
    eo.current = W
  }), i.useEffect(() => {
    let {
      current: e
    } = eo;
    (0, g.h)({
      name: c.ImpressionNames.QUEST_HOME,
      type: c.ImpressionTypes.VIEW,
      properties: {
        utm_source_current: e.utmSourceCurrent,
        utm_medium_current: e.utmMediumCurrent,
        utm_campaign_current: e.utmCampaignCurrent,
        utm_content_current: e.utmContentCurrent,
        tab: w
      }
    })
  }, [w]);
  let {
    enabled: es
  } = (0, A.WX)({
    location: $.dr.QUEST_HOME_DESKTOP
  }), ec = i.useCallback(() => {
    if (es) return void window.open(ee.EYA.PAID_TERMS_ORBS);
    window.open(R.Z.getArticleURL(ee.BhN.QUESTS_LEARN_MORE))
  }, [es]);
  (0, O.Tt)({
    location: er.intl.string(er.t.JALI2N)
  });
  let eu = es ? er.intl.format(er.t.BCBIlp, {}) : er.intl.format(er.t.lmMBf3, {}),
    ep = es ? er.intl.format(er.t.U9FY0N, {}) : er.intl.string(er.t.oWCrBg),
    eh = i.useRef(null),
    eg = i.useCallback(() => {
      (0, j.Y)({
        pageType: ee.ZY5.GLOBAL_DISCOVERY_QUESTS,
        sectionType: ee.jXE.ORBS_BALANCE_MENU,
        ctaObject: ee.qAy.CTA_TO_ORBS_SHOP
      }), (0, _.mK)({
        tab: et.AW.ORBS,
        analyticsLocations: [],
        analyticsSource: h.Z.ORBS_BALANCE_MENU
      })
    }, []);
  i.useEffect(() => {
    l && (0, p.Y)(ee.Z5c.QUEST_HOME_V2)
  }, [l]), i.useEffect(() => {
    y.C.trigger()
  }, []);
  let em = (0, H.T)({
    location: $.dr.QUEST_PREVIEW_TOOL_2
  });
  return i.useEffect(() => {
    if (null != Z || !em) return;
    let e = new URLSearchParams(s.search),
      t = e.get(k.tR.TAB),
      n = e.get(k.tR.QUEST_ID);
    t === k.e5.PREVIEW_TOOL && m.Z.openNativeAppModal("quests", ee.Etm.DEEP_LINK, {
      type: en.jE.QUEST_PREVIEW_TOOL,
      params: {
        questId: n,
        tab: t
      }
    })
  }, [s.search, Z, em]), (0, r.jsx)(Q.k.Provider, {
    value: {
      onAssetLoadComplete: ea
    },
    children: (0, r.jsx)("div", {
      className: a()(ei.container, {
        [ei.withoutTopBorder]: !n
      }),
      children: E ? (0, r.jsx)(ef, {
        onSelectTab: L,
        onScroll: U,
        onLoadComplete: ea,
        scrollerRef: eh,
        selectedTabId: w,
        tabs: D
      }) : es ? (0, r.jsxs)(X.t.Provider, {
        value: eh,
        children: [(0, r.jsx)(N.a, {
          selectedTabId: w,
          handleTransition: L,
          tabs: D,
          icon: d.qDn,
          children: (0, r.jsx)(x.V9, {
            analyticsPage: ee.ZY5.GLOBAL_DISCOVERY_QUESTS,
            cardAlignment: x.ek.END,
            ctaText: er.intl.string(er.t["J+vlIS"]),
            ctaOnClick: eg
          })
        }), (0, r.jsxs)(P.Z, {
          onScroll: U,
          ref: eh,
          children: [w !== k.e5.PREVIEW_TOOL && (0, r.jsxs)(I.Z, {
            title: eu,
            description: ep,
            button: es ? (0, r.jsxs)(d.ButtonGroup, {
              children: [(0, r.jsx)(d.Button, {
                variant: "overlay-primary",
                text: er.intl.string(er.t["1Wm129"]),
                onClick: () => (0, _.mK)({
                  tab: et.AW.ORBS,
                  analyticsLocations: [],
                  analyticsSource: h.Z.INTRO_TO_ORBS_QUEST_BANNER
                })
              }), (0, r.jsx)(d.Button, {
                variant: "overlay-secondary",
                text: er.intl.string(er.t["7kTAgI"]),
                onClick: ec
              })]
            }) : (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              text: er.intl.string(er.t.hvVgAQ),
              onClick: ec,
              icon: d.Gr1,
              iconPosition: "end"
            }),
            className: a()(ei.bannerContainer, {
              [ei.orbsContainer]: es
            }),
            children: [(0, r.jsx)("div", {
              className: a()(ei.bannerGradient, {
                [ei.orbsGradient]: es
              })
            }), (0, r.jsx)(ed, {
              onLoadComplete: ea
            })]
          }), (0, r.jsx)(C.Z, {
            children: w === k.e5.CLAIMED ? (0, r.jsx)(el, {
              onSelectTab: L
            }) : w === k.e5.PREVIEW_TOOL ? (0, r.jsx)(V.Z, {}) : (0, r.jsx)(Y.Z, {})
          })]
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(T.ZP, {
          variant: T._6.OVERLAY,
          children: [(0, r.jsx)("div", {
            className: ei.dragRegion
          }), (0, r.jsx)(T.z6, {
            scrollPosition: F
          }), (0, r.jsx)(T.aV, {
            icon: d.qDn
          })]
        }), (0, r.jsx)(X.t.Provider, {
          value: eh,
          children: (0, r.jsxs)(P.Z, {
            onScroll: U,
            ref: eh,
            children: [(0, r.jsxs)(I.Z, {
              title: eu,
              description: ep,
              button: (0, r.jsx)(d.Button, {
                variant: "overlay-primary",
                text: er.intl.string(er.t.hvVgAQ),
                onClick: ec,
                icon: d.Gr1,
                iconPosition: "end"
              }),
              className: a()(ei.bannerContainer, {
                [ei.orbsContainer]: es
              }),
              children: [(0, r.jsx)("div", {
                className: a()(ei.bannerGradient, {
                  [ei.orbsGradient]: es
                })
              }), (0, r.jsx)(ed, {
                onLoadComplete: ea
              })]
            }), (0, r.jsxs)(C.Z, {
              children: [(0, r.jsx)("div", {
                className: ei.tabs,
                children: (0, r.jsx)(S.Z, {
                  tabs: D,
                  selectedTab: w,
                  onTabSelect: L
                })
              }), w === k.e5.CLAIMED ? (0, r.jsx)(el, {
                onSelectTab: L
              }) : w === k.e5.PREVIEW_TOOL ? (0, r.jsx)(V.Z, {}) : (0, r.jsx)(Y.Z, {})]
            })]
          })
        })]
      })
    })
  })
}