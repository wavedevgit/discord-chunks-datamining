/** Chunk was on 1272 **/
/** chunk id: 121711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eg
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk772848 = require("./772848.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
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
  Chunk266454 = require("./266454.js"),
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
  Chunk838997 = require("./838997.js"),
  Chunk13299 = require("./13299.js"),
  Chunk890631 = require("./890631.js"),
  Chunk164792 = require("./164792.js"),
  Chunk524777 = require("./524777.js"),
  Chunk913713 = require("./913713.js"),
  Chunk431115 = require("./431115.js");

function ef(e) {
  let {
    onLoadComplete: t
  } = e, {
    enabled: n
  } = (0, Z.WX)({
    location: et.dr.QUEST_HOME_DESKTOP
  }), l = (0, u.e7)([m.Z], () => m.Z.useReducedMotion), s = (0, u.e7)([L.Z], () => L.Z.isFocused()), {
    ref: o,
    inViewport: c
  } = (0, q.a)(), d = i.useRef(null);
  if (i.useEffect(() => {
      (null == d ? true : d.current) != null && (d.current.paused || s && c && !l ? d.current.paused && !l && c && s && d.current.play() : d.current.pause())
    }, [l, c, s]), n) {
    let e = (0, D.rO)();
    return (0, r.jsx)(I.Z, {
      ref: e => {
        d.current = e, o.current = e
      },
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(ea.bannerAsset, ea.orbsBannerAsset),
      onProgress: t,
      "data-mtctest-ignore": "true",
      controls: false,
      children: (0, r.jsx)("source", {
        src: e ? eo.Z : ec.Z,
        type: e ? "video/mp4" : "video/webm"
      })
    })
  }
  return (0, r.jsx)("img", {
    src: es.ZP,
    className: a()(ea.bannerAsset, ea.oversizedImg),
    alt: "",
    onLoad: t
  })
}

function em(e) {
  let {
    onLoadComplete: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: eu.ZP,
      className: a()(ea.bannerAsset, ea.redirectNoticeBannerAsset),
      alt: ""
    }), (0, r.jsx)("img", {
      src: ep.ZP,
      className: a()(ea.bannerAsset, ea.redirectNoticeBannerAsset),
      alt: "",
      onLoad: t
    }), (0, r.jsx)("img", {
      src: ed.ZP,
      className: a()(ea.bannerAsset, ea.redirectNoticeBannerAsset),
      alt: ""
    })]
  })
}

function eh(e) {
  let {
    banner: t,
    children: n,
    header: i,
    scrollerRef: l,
    selectedTab: a,
    onScroll: s,
    onSelectTab: o,
    withQuestsGrid: c = true
  } = e, u = (0, G._)({
    location: et.dr.QUEST_HOME_DESKTOP
  }) ? Q.Z : Q.j;
  return (0, r.jsxs)($.t.Provider, {
    value: l,
    children: [i, (0, r.jsxs)(x.Z, {
      onScroll: s,
      ref: l,
      children: [t, (0, r.jsxs)(T.Z, {
        children: [n, c ? a === U.e5.CLAIMED ? (0, r.jsx)(u, {
          onSelectTab: o
        }) : a === U.e5.PREVIEW_TOOL ? (0, r.jsx)(z.Z, {}) : (0, r.jsx)(K.Z, {}) : null]
      })]
    })]
  })
}
let eg = function(e) {
  var t;
  let {
    topLevelRoute: n
  } = e, l = (0, s.TH)(), m = (null == (t = (0, s.LX)(l.pathname, en.Z5c.QUEST_HOME)) ? true : t.isExact) === true, I = (0, u.e7)([b.Z], () => b.Z.getState("quests")), {
    selectedTab: T,
    onSelectTab: x,
    tabs: L
  } = (0, ee.z)({
    withClaimedQuestsTab: !m
  });
  i.useLayoutEffect(() => {
    m && T === U.e5.CLAIMED && H.Z.setState({
      tab: U.e5.ALL
    })
  }, [m, T]);
  let {
    onScroll: D,
    scrollPosition: G
  } = (0, C.M)(), z = W.Z.getState().getUtmCurrentContext(), q = (0, J.z)(e => e.registerAssetLoad), K = i.useRef(z);
  i.useEffect(() => {
    K.current = z
  }), i.useEffect(() => {
    let {
      current: e
    } = K;
    (0, g.h)({
      name: c.ImpressionNames.QUEST_HOME,
      type: c.ImpressionTypes.VIEW,
      properties: {
        utm_source_current: e.utmSourceCurrent,
        utm_medium_current: e.utmMediumCurrent,
        utm_campaign_current: e.utmCampaignCurrent,
        utm_content_current: e.utmContentCurrent,
        tab: T
      }
    })
  }, [T]);
  let {
    enabled: Q
  } = (0, Z.WX)({
    location: et.dr.QUEST_HOME_DESKTOP
  }), $ = i.useCallback(() => {
    if (Q) return void window.open(en.EYA.PAID_TERMS_ORBS);
    window.open(M.Z.getArticleURL(en.BhN.QUESTS_LEARN_MORE))
  }, [Q]);
  (0, O.Tt)({
    location: el.intl.string(el.t.JALI2K)
  });
  let es = Q ? el.intl.format(el.t.BCBIlp, {}) : el.intl.format(el.t.lmMBfy, {}),
    eo = Q ? el.intl.format(el.t.U9FY0J, {}) : el.intl.string(el.t.oWCrBq),
    ec = i.useRef(null),
    eu = i.useCallback(() => {
      (0, A.Y)({
        pageType: en.ZY5.GLOBAL_DISCOVERY_QUESTS,
        sectionType: en.jXE.ORBS_BALANCE_MENU,
        ctaObject: en.qAy.CTA_TO_ORBS_SHOP
      }), (0, E.mK)({
        tab: er.AW.ORBS,
        analyticsLocations: [],
        analyticsSource: h.Z.ORBS_BALANCE_MENU
      })
    }, []);
  i.useEffect(() => {
    (0, f.Y)(en.Z5c.QUEST_HOME_V2)
  }, []), i.useEffect(() => {
    v.C.trigger()
  }, []);
  let ed = (0, F.T)({
    location: et.dr.QUEST_PREVIEW_TOOL_2
  });
  i.useEffect(() => {
    if (null != I || !ed) return;
    let e = new URLSearchParams(l.search),
      t = e.get(U.tR.TAB),
      n = e.get(U.tR.QUEST_ID);
    t === U.e5.PREVIEW_TOOL && _.Z.openNativeAppModal("quests", en.Etm.DEEP_LINK, {
      type: ei.jE.QUEST_PREVIEW_TOOL,
      params: {
        questId: n,
        tab: t
      }
    })
  }, [l.search, I, ed]);
  let {
    enabled: ep
  } = V.GE.useConfig({
    location: et.dr.QUEST_HOME_DESKTOP
  });
  i.useEffect(() => {
    n && ep && (0, y.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING)
  }, [n, ep]);
  let eg = i.useCallback(() => {
    (0, Y.navigateToQuestHome)({
      fromContent: B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER
    }), R.default.track(en.rMx.QUEST_CONTENT_CLICKED, function(e) {
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
      cta_name: k.jZ.VIEW_QUESTS,
      click_id: (0, o.Z)(),
      is_targeted: false
    }, (0, k.mH)(B.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER)))
  }, []);
  return (0, r.jsx)(X.k.Provider, {
    value: {
      onAssetLoadComplete: q
    },
    children: (0, r.jsx)("div", {
      className: a()(ea.container, {
        [ea.withoutTopBorder]: !n
      }),
      children: m ? (0, r.jsx)(eh, {
        banner: (0, r.jsx)(S.Z, {
          title: el.intl.string(el.t.z8YP2A),
          titleColor: "always-white",
          button: (0, r.jsx)(p.Button, {
            variant: "overlay-primary",
            text: el.intl.string(el.t.GURBQl),
            onClick: eg
          }),
          className: ea.redirectNoticeBannerContainer,
          children: (0, r.jsx)(em, {
            onLoadComplete: q
          })
        }),
        header: (0, r.jsx)(P.a, {
          selectedTabId: T,
          handleTransition: x,
          tabs: L,
          icon: p.qDn
        }),
        onScroll: D,
        onSelectTab: x,
        scrollerRef: ec,
        selectedTab: T,
        withQuestsGrid: false,
        children: (0, r.jsxs)("div", {
          className: ea.redirectNoticeContainer,
          children: [(0, r.jsx)(p.Heading, {
            variant: "heading-xl/semibold",
            children: el.intl.string(el.t.z8YP2A)
          }), (0, r.jsx)(p.Text, {
            color: "text-secondary",
            variant: "text-md/normal",
            children: el.intl.string(el.t.HdKh65)
          }), (0, r.jsx)(p.Avr, {
            text: el.intl.string(el.t["1CdL8d"]),
            onClick: eg,
            textVariant: "text-md/normal",
            variant: "primary"
          })]
        })
      }) : Q ? (0, r.jsx)(eh, {
        banner: T !== U.e5.PREVIEW_TOOL && (0, r.jsxs)(S.Z, {
          title: es,
          description: eo,
          button: (0, r.jsxs)(p.ButtonGroup, {
            children: [(0, r.jsx)(p.Button, {
              variant: "overlay-primary",
              text: el.intl.string(el.t["1Wm127"]),
              onClick: () => (0, E.mK)({
                tab: er.AW.ORBS,
                analyticsLocations: [],
                analyticsSource: h.Z.INTRO_TO_ORBS_QUEST_BANNER
              })
            }), (0, r.jsx)(p.Button, {
              variant: "overlay-secondary",
              text: el.intl.string(el.t["7kTAgJ"]),
              onClick: $
            })]
          }),
          className: a()(ea.bannerContainer, ea.orbsContainer),
          children: [(0, r.jsx)("div", {
            className: a()(ea.bannerGradient, ea.orbsGradient)
          }), (0, r.jsx)(ef, {
            onLoadComplete: q
          })]
        }),
        header: (0, r.jsx)(P.a, {
          selectedTabId: T,
          handleTransition: x,
          tabs: L,
          icon: p.qDn,
          children: (0, r.jsx)(w.V9, {
            analyticsPage: en.ZY5.GLOBAL_DISCOVERY_QUESTS,
            cardAlignment: w.ek.END,
            ctaText: el.intl.string(el.t["J+vlIR"]),
            ctaOnClick: eu
          })
        }),
        onScroll: D,
        onSelectTab: x,
        scrollerRef: ec,
        selectedTab: T
      }) : (0, r.jsx)(eh, {
        banner: (0, r.jsxs)(S.Z, {
          title: es,
          description: eo,
          button: (0, r.jsx)(p.Button, {
            variant: "overlay-primary",
            text: el.intl.string(el.t.hvVgAZ),
            onClick: $,
            icon: p.Gr1,
            iconPosition: "end"
          }),
          className: ea.bannerContainer,
          children: [(0, r.jsx)("div", {
            className: ea.bannerGradient
          }), (0, r.jsx)(ef, {
            onLoadComplete: q
          })]
        }),
        header: (0, r.jsxs)(j.ZP, {
          variant: j._6.OVERLAY,
          children: [(0, r.jsx)("div", {
            className: ea.dragRegion
          }), (0, r.jsx)(j.z6, {
            scrollPosition: G
          }), (0, r.jsx)(j.aV, {
            icon: p.qDn
          })]
        }),
        onScroll: D,
        onSelectTab: x,
        scrollerRef: ec,
        selectedTab: T,
        children: (0, r.jsx)("div", {
          className: ea.tabs,
          children: (0, r.jsx)(N.Z, {
            tabs: L,
            selectedTab: T,
            onTabSelect: x
          })
        })
      })
    })
  })
}