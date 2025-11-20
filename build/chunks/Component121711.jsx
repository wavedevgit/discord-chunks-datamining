/** Chunk was on 1272 **/
/** chunk id: 121711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eO
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./704826.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
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
  Chunk624138 = require("./624138.js"),
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
  Chunk85517 = require("./85517.jsx"),
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

function eg(e) {
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
}
let em = Chunk473749.createContext({});

function e_(e) {
  let {
    onLoadComplete: t
  } = e, {
    enabled: n
  } = (0, Z.WX)({
    location: er.dr.QUEST_HOME_DESKTOP
  }), l = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), s = (0, u.e7)([L.Z], () => L.Z.isFocused()), {
    ref: o,
    inViewport: c
  } = (0, K.a)(), d = i.useRef(null);
  if (i.useEffect(() => {
      (null == d ? true : d.current) != null && (d.current.paused || s && c && !l ? d.current.paused && !l && c && s && d.current.play() : d.current.pause())
    }, [l, c, s]), n) {
    let e = (0, D.rO)();
    return (0, r.jsx)(y.Z, {
      ref: e => {
        d.current = e, o.current = e
      },
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(eo.bannerAsset, eo.orbsBannerAsset),
      onProgress: t,
      "data-mtctest-ignore": "true",
      controls: false,
      children: (0, r.jsx)("source", {
        src: e ? eu.Z : ed.Z,
        type: e ? "video/mp4" : "video/webm"
      })
    })
  }
  return (0, r.jsx)("img", {
    src: ec.ZP,
    className: a()(eo.bannerAsset, eo.oversizedImg),
    alt: "",
    onLoad: t
  })
}

function eb(e) {
  let {
    onLoadComplete: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: ep.ZP,
      className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
      alt: ""
    }), (0, r.jsx)("img", {
      src: eh.ZP,
      className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
      alt: "",
      onLoad: t
    }), (0, r.jsx)("img", {
      src: ef.ZP,
      className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
      alt: ""
    })]
  })
}

function eE(e) {
  let {
    renderBanner: t,
    children: n,
    header: l,
    withQuestsGrid: s = true
  } = e, {
    isInDiscoverQuestHomeTab: o,
    onScroll: c,
    onSelectTab: u,
    scrollerRef: d,
    selectedTab: p
  } = i.useContext(em), f = (0, B._)({
    location: er.dr.QUEST_HOME_DESKTOP
  }) ? J.Z : J.j, {
    takeover: h,
    isLoading: g
  } = (0, G.Ut)(), {
    enabled: m
  } = (0, Z.WX)({
    location: er.dr.QUEST_HOME_DESKTOP
  }), {
    enabled: _
  } = F.n0.useConfig({
    location: er.dr.QUEST_HOME_DESKTOP
  }), b = i.useRef(null), E = i.useCallback(() => {
    var e;
    null == (e = b.current) || e.resetSortingFiltering()
  }, []);
  return (0, r.jsxs)(ee.t.Provider, {
    value: d,
    children: [l, (0, r.jsxs)(x.Z, {
      onScroll: c,
      ref: d,
      children: [function() {
        if (!o && _) {
          if (p !== G.e5.ALL) return null;
          if (g) return (0, r.jsx)(et.o, {});
          if (null != h) return (0, r.jsx)(et.Z, {
            config: h,
            onQuestCtaClick: E
          })
        }
        return t()
      }(), (0, r.jsx)(T.Z, {
        children: (0, r.jsxs)("div", {
          className: a()(eo.content, {
            [eo.contentWithExtraPadding]: _ && !m && p !== G.e5.ALL
          }),
          children: [n, s ? p === G.e5.CLAIMED ? (0, r.jsx)(f, {
            onSelectTab: u
          }) : p === G.e5.PREVIEW_TOOL ? (0, r.jsx)(Y.Z, {}) : (0, r.jsx)(Q.Z, {
            ref: b
          }) : null]
        })
      })]
    })]
  })
}
let eO = function(e) {
  let {
    topLevelRoute: t
  } = e, n = (0, s.TH)(), l = (0, s.k6)(), h = i.useMemo(() => {
    var e;
    return (null == (e = (0, s.LX)(n.pathname, ei.Z5c.QUEST_HOME)) ? true : e.isExact) === true
  }, [n.pathname]), y = (0, u.e7)([b.Z], () => b.Z.getState("quests")), {
    selectedTab: T,
    onSelectTab: x,
    tabs: L
  } = (0, en.z)({
    withClaimedQuestsTab: !h
  });
  i.useLayoutEffect(() => {
    h && T === G.e5.CLAIMED && V.Z.setState({
      tab: G.e5.ALL
    })
  }, [h, T]);
  let {
    onScroll: D,
    scrollPosition: B
  } = (0, C.M)(), F = q.Z.getState().getUtmCurrentContext(), Y = (0, X.z)(e => e.registerAssetLoad), K = i.useRef(F);
  i.useEffect(() => {
    K.current = F
  }), i.useEffect(() => {
    let {
      current: e
    } = K;
    (0, m.h)({
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
    location: er.dr.QUEST_HOME_DESKTOP
  }), J = i.useCallback(() => {
    if (Q) return void window.open(ei.EYA.PAID_TERMS_ORBS);
    window.open(M.Z.getArticleURL(ei.BhN.QUESTS_LEARN_MORE))
  }, [Q]);
  (0, O.Tt)({
    location: es.intl.string(es.t.JALI2K)
  });
  let ee = Q ? es.intl.format(es.t.BCBIlp, {}) : es.intl.format(es.t.lmMBfy, {}),
    et = Q ? es.intl.format(es.t.U9FY0J, {}) : es.intl.string(es.t.oWCrBq),
    ec = i.useRef(null),
    eu = i.useCallback(() => {
      (0, A.Y)({
        pageType: ei.ZY5.GLOBAL_DISCOVERY_QUESTS,
        sectionType: ei.jXE.ORBS_BALANCE_MENU,
        ctaObject: ei.qAy.CTA_TO_ORBS_SHOP
      }), (0, E.mK)({
        tab: el.AW.ORBS,
        analyticsLocations: [],
        analyticsSource: g.Z.ORBS_BALANCE_MENU
      })
    }, []);
  i.useEffect(() => {
    (0, f.Y)(ei.Z5c.QUEST_HOME_V2)
  }, []), i.useEffect(() => {
    I.C.trigger()
  }, []);
  let ed = (0, z.T)({
    location: er.dr.QUEST_PREVIEW_TOOL_2
  });
  i.useEffect(() => {
    if (null != y) return;
    let e = new URLSearchParams(n.search),
      r = e.get(G.tR.TAB);
    if (ed && r === G.e5.PREVIEW_TOOL) {
      let t = e.get(G.tR.QUEST_ID);
      _.Z.openNativeAppModal("quests", ei.Etm.DEEP_LINK, {
        type: ea.jE.QUEST_PREVIEW_TOOL,
        params: {
          questId: t,
          tab: r
        }
      });
      return
    }
    let i = performance.getEntriesByType("navigation")[0];
    if ("POP" === l.action && (null == i ? true : i.type) === "navigate" && t && r !== G.e5.PREVIEW_TOOL) {
      let t = (0, k.Ew)(n.hash) ? null : n.hash.substring(1),
        r = e.get(G.tR.SORT),
        i = e.get(G.tR.FILTER);
      _.Z.openNativeAppModal("quests", ei.Etm.DEEP_LINK, {
        type: ea.jE.QUEST_HOME,
        params: {
          questId: (0, k.Ew)(t) ? true : t,
          sort: r,
          filter: i
        }
      })
    }
  }, [n.search, y, ed, l.action, n.hash, t]), i.useEffect(() => {
    t && (0, v.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING)
  }, [t]);
  let ep = i.useCallback(() => {
      (0, W.navigateToQuestHome)({
        fromContent: H.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER
      }), R.default.track(ei.rMx.QUEST_CONTENT_CLICKED, eg({
        cta_name: U.jZ.VIEW_QUESTS,
        click_id: (0, o.Z)(),
        is_targeted: false
      }, (0, U.mH)(H.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER)))
    }, []),
    ef = i.useCallback(e => {
      var t, n, r;
      l.replace((n = eg({}, l.location), r = r = {
        hash: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n)), null == (t = ec.current) || t.scrollToTop({
        animate: false
      }), x(e)
    }, [l, x]);
  return (0, r.jsx)($.k.Provider, {
    value: {
      onAssetLoadComplete: Y
    },
    children: (0, r.jsx)(em.Provider, {
      value: i.useMemo(() => ({
        isInDiscoverQuestHomeTab: h,
        onScroll: D,
        onSelectTab: ef,
        scrollerRef: ec,
        selectedTab: T
      }), [h, D, ef, ec, T]),
      children: (0, r.jsx)("div", {
        className: a()(eo.container, {
          [eo.withoutTopBorder]: !t
        }),
        children: h ? (0, r.jsx)(eE, {
          renderBanner: () => (0, r.jsx)(S.Z, {
            title: es.intl.string(es.t.z8YP2A),
            titleColor: "always-white",
            button: (0, r.jsx)(p.Button, {
              variant: "overlay-primary",
              text: es.intl.string(es.t.GURBQl),
              onClick: ep
            }),
            className: eo.redirectNoticeBannerContainer,
            children: (0, r.jsx)(eb, {
              onLoadComplete: Y
            })
          }),
          header: (0, r.jsx)(P.a, {
            selectedTabId: T,
            handleTransition: ef,
            tabs: L,
            icon: p.qDn
          }),
          withQuestsGrid: false,
          children: (0, r.jsxs)("div", {
            className: eo.redirectNoticeContainer,
            children: [(0, r.jsx)(p.Heading, {
              variant: "heading-xl/semibold",
              children: es.intl.string(es.t.z8YP2A)
            }), (0, r.jsx)(p.Text, {
              color: "text-secondary",
              variant: "text-md/normal",
              children: es.intl.string(es.t.HdKh65)
            }), (0, r.jsx)(p.Avr, {
              text: es.intl.string(es.t["1CdL8d"]),
              onClick: ep,
              textVariant: "text-md/normal",
              variant: "primary"
            })]
          })
        }) : Q ? (0, r.jsx)(eE, {
          renderBanner: () => T !== G.e5.PREVIEW_TOOL && (0, r.jsxs)(S.Z, {
            title: ee,
            description: et,
            button: (0, r.jsxs)(p.ButtonGroup, {
              children: [(0, r.jsx)(p.Button, {
                variant: "overlay-primary",
                text: es.intl.string(es.t["1Wm127"]),
                onClick: () => (0, E.mK)({
                  tab: el.AW.ORBS,
                  analyticsLocations: [],
                  analyticsSource: g.Z.INTRO_TO_ORBS_QUEST_BANNER
                })
              }), (0, r.jsx)(p.Button, {
                variant: "overlay-secondary",
                text: es.intl.string(es.t["7kTAgJ"]),
                onClick: J
              })]
            }),
            className: a()(eo.bannerContainer, eo.orbsContainer),
            children: [(0, r.jsx)("div", {
              className: a()(eo.bannerGradient, eo.orbsGradient)
            }), (0, r.jsx)(e_, {
              onLoadComplete: Y
            })]
          }),
          header: (0, r.jsx)(P.a, {
            selectedTabId: T,
            handleTransition: ef,
            tabs: L,
            icon: p.qDn,
            children: (0, r.jsx)(w.V9, {
              analyticsPage: ei.ZY5.GLOBAL_DISCOVERY_QUESTS,
              cardAlignment: w.ek.END,
              ctaText: es.intl.string(es.t["J+vlIR"]),
              ctaOnClick: eu
            })
          })
        }) : (0, r.jsx)(eE, {
          renderBanner: () => (0, r.jsxs)(S.Z, {
            title: ee,
            description: et,
            button: (0, r.jsx)(p.Button, {
              variant: "overlay-primary",
              text: es.intl.string(es.t.hvVgAZ),
              onClick: J,
              icon: p.Gr1,
              iconPosition: "end"
            }),
            className: eo.bannerContainer,
            children: [(0, r.jsx)("div", {
              className: eo.bannerGradient
            }), (0, r.jsx)(e_, {
              onLoadComplete: Y
            })]
          }),
          header: (0, r.jsxs)(j.ZP, {
            variant: j._6.OVERLAY,
            children: [(0, r.jsx)("div", {
              className: eo.dragRegion
            }), (0, r.jsx)(j.z6, {
              scrollPosition: B
            }), (0, r.jsx)(j.aV, {
              icon: p.qDn
            })]
          }),
          children: (0, r.jsx)("div", {
            className: eo.tabs,
            children: (0, r.jsx)(N.Z, {
              tabs: L,
              selectedTab: T,
              onTabSelect: ef
            })
          })
        })
      })
    })
  })
}