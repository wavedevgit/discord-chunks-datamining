/** Chunk was on 1272 **/
/** chunk id: 121711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eE
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
  Chunk49436 = require("./49436.js"),
  Chunk283833 = require("./283833.js"),
  Chunk937797 = require("./937797.js"),
  Chunk36243 = require("./36243.js"),
  Chunk968843 = require("./968843.js"),
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
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk359236 = require("./359236.js"),
  Chunk770354 = require("./770354.js"),
  Chunk457218 = require("./457218.js"),
  Chunk179306 = require("./179306.js"),
  Chunk588 = require("./588.js"),
  Chunk445620 = require("./445620.js"),
  Chunk120550 = require("./120550.js");

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

function eh(e) {
  let {
    onLoadComplete: t
  } = e, {
    enabled: n
  } = (0, Z.W)({
    location: en.dr.QUEST_HOME_DESKTOP
  }), l = (0, u.e7)([g.Z], () => g.Z.useReducedMotion), o = (0, u.e7)([L.Z], () => L.Z.isFocused()), {
    ref: s,
    inViewport: c
  } = (0, q.a)(), d = i.useRef(null);
  if (i.useEffect(() => {
      (null == d ? true : d.current) != null && (d.current.paused || o && c && !l ? d.current.paused && !l && c && o && d.current.play() : d.current.pause())
    }, [l, c, o]), n) {
    let e = (0, D.rO)();
    return (0, r.jsx)(v.Z, {
      ref: e => {
        d.current = e, s.current = e
      },
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(eo.bannerAsset, eo.orbsBannerAsset),
      onProgress: t,
      "data-mtctest-ignore": "true",
      controls: false,
      children: (0, r.jsx)("source", {
        src: e ? ec.Z : eu.Z,
        type: e ? "video/mp4" : "video/webm"
      })
    })
  }
  return (0, r.jsx)("img", {
    src: es.ZP,
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
      src: ed.ZP,
      className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
      alt: ""
    }), (0, r.jsx)("img", {
      src: ef.ZP,
      className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
      alt: "",
      onLoad: t
    }), (0, r.jsx)("img", {
      src: ep.ZP,
      className: a()(eo.bannerAsset, eo.redirectNoticeBannerAsset),
      alt: ""
    })]
  })
}

function e_(e) {
  let {
    renderBanner: t,
    children: n,
    header: l,
    withQuestsGrid: o = true
  } = e, {
    isInDiscoverQuestHomeTab: s,
    onScroll: c,
    onSelectTab: u,
    scrollerRef: d,
    selectedTab: p
  } = i.useContext(em), {
    takeover: f,
    isLoading: g
  } = (0, F.Nm)(), {
    enabled: m
  } = (0, Z.W)({
    location: en.dr.QUEST_HOME_DESKTOP
  }), {
    enabled: h
  } = B.n0.useConfig({
    location: en.dr.QUEST_HOME_DESKTOP
  }), b = i.useRef(null), _ = i.useCallback(() => {
    var e;
    null == (e = b.current) || e.resetSortingFiltering()
  }, []);
  return (0, r.jsxs)($.t.Provider, {
    value: d,
    children: [l, (0, r.jsxs)(x.Z, {
      onScroll: c,
      ref: d,
      children: [function() {
        if (!s && h) {
          if (p !== F.e5.ALL) return null;
          if (g) return (0, r.jsx)(ee.o, {});
          if (null != f) return (0, r.jsx)(ee.Z, {
            config: f,
            onQuestCtaClick: _
          })
        }
        return t()
      }(), (0, r.jsx)(T.Z, {
        children: (0, r.jsxs)("div", {
          className: a()(eo.content, {
            [eo.contentWithExtraPadding]: h && !m && p !== F.e5.ALL
          }),
          children: [n, o ? p === F.e5.CLAIMED ? (0, r.jsx)(Q.Z, {
            onSelectTab: u
          }) : p === F.e5.PREVIEW_TOOL ? (0, r.jsx)(z.Z, {}) : (0, r.jsx)(K.Z, {
            ref: b
          }) : null]
        })
      })]
    })]
  })
}
let eE = function(e) {
  let {
    topLevelRoute: t
  } = e, n = (0, o.TH)(), l = (0, o.k6)(), g = i.useMemo(() => {
    var e;
    return (null == (e = (0, o.LX)(n.pathname, er.Z5c.QUEST_HOME)) ? true : e.isExact) === true
  }, [n.pathname]), v = (0, u.e7)([_.Z], () => _.Z.getState("quests")), {
    selectedTab: T,
    onSelectTab: x,
    tabs: L
  } = (0, et.z)({
    withClaimedQuestsTab: !g
  });
  i.useLayoutEffect(() => {
    g && T === F.e5.CLAIMED && H.Z.setState({
      tab: F.e5.ALL
    })
  }, [g, T]);
  let {
    onScroll: D,
    scrollPosition: B
  } = (0, C.M)(), z = W.Z.getState().getUtmCurrentContext(), q = (0, J.z)(e => e.registerAssetLoad), K = i.useRef(z);
  i.useEffect(() => {
    K.current = z
  }), i.useEffect(() => {
    let {
      current: e
    } = K;
    (0, h.h)({
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
  } = (0, Z.W)({
    location: en.dr.QUEST_HOME_DESKTOP
  }), $ = i.useCallback(() => {
    if (Q) return void window.open(er.EYA.PAID_TERMS_ORBS);
    window.open(M.Z.getArticleURL(er.BhN.QUESTS_LEARN_MORE))
  }, [Q]);
  (0, O.Tt)({
    location: ea.intl.string(ea.t.JALI2K)
  });
  let ee = Q ? ea.intl.format(ea.t.BCBIlp, {}) : ea.intl.format(ea.t.lmMBfy, {}),
    es = Q ? ea.intl.format(ea.t.U9FY0J, {}) : ea.intl.string(ea.t.oWCrBq),
    ec = i.useRef(null),
    eu = i.useCallback(() => {
      (0, A.Y)({
        pageType: er.ZY5.GLOBAL_DISCOVERY_QUESTS,
        sectionType: er.jXE.ORBS_BALANCE_MENU,
        ctaObject: er.qAy.CTA_TO_ORBS_SHOP
      }), (0, E.mK)({
        tab: ei.AW.ORBS,
        analyticsLocations: [],
        analyticsSource: m.Z.ORBS_BALANCE_MENU
      })
    }, []);
  i.useEffect(() => {
    (0, f.Y)(er.Z5c.QUEST_HOME_V2)
  }, []), i.useEffect(() => {
    I.C.trigger()
  }, []);
  let ed = (0, V.T)({
    location: en.dr.QUEST_PREVIEW_TOOL_2
  });
  i.useEffect(() => {
    if (null != v) return;
    let e = new URLSearchParams(n.search),
      r = e.get(F.tR.TAB);
    if (ed && r === F.e5.PREVIEW_TOOL) {
      let t = e.get(F.tR.QUEST_ID);
      b.Z.openNativeAppModal("quests", er.Etm.DEEP_LINK, {
        type: el.jE.QUEST_PREVIEW_TOOL,
        params: {
          questId: t,
          tab: r
        }
      });
      return
    }
    let i = performance.getEntriesByType("navigation")[0];
    if ("POP" === l.action && (null == i ? true : i.type) === "navigate" && t && r !== F.e5.PREVIEW_TOOL) {
      let t = (0, k.Ew)(n.hash) ? null : n.hash.substring(1),
        i = e.get(F.tR.SORT),
        l = e.get(F.tR.FILTER);
      b.Z.openNativeAppModal("quests", er.Etm.DEEP_LINK, {
        type: el.jE.QUEST_HOME,
        params: {
          questId: (0, k.Ew)(t) ? true : t,
          sort: i,
          filter: l,
          tab: r
        }
      })
    }
  }, [n.search, v, ed, l.action, n.hash, t]), i.useEffect(() => {
    t && (0, y.Q3)(d.z.QUEST_HOME_ENTRYPOINT_ONBOARDING)
  }, [t]);
  let ep = i.useCallback(() => {
      (0, Y.navigateToQuestHome)({
        fromContent: G.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER
      }), R.default.track(er.rMx.QUEST_CONTENT_CLICKED, eg({
        cta_name: U.jZ.VIEW_QUESTS,
        click_id: (0, s.Z)(),
        is_targeted: false
      }, (0, U.mH)(G.jn.QUEST_HOME_MOVE_CALLOUT_DISCOVER)))
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
  return (0, r.jsx)(X.k.Provider, {
    value: {
      onAssetLoadComplete: q
    },
    children: (0, r.jsx)(em.Provider, {
      value: i.useMemo(() => ({
        isInDiscoverQuestHomeTab: g,
        onScroll: D,
        onSelectTab: ef,
        scrollerRef: ec,
        selectedTab: T
      }), [g, D, ef, ec, T]),
      children: (0, r.jsx)("div", {
        className: a()(eo.container, {
          [eo.withoutTopBorder]: !t
        }),
        children: g ? (0, r.jsx)(e_, {
          renderBanner: () => (0, r.jsx)(S.Z, {
            title: ea.intl.string(ea.t.z8YP2A),
            titleColor: "always-white",
            button: (0, r.jsx)(p.Button, {
              variant: "overlay-primary",
              text: ea.intl.string(ea.t.GURBQl),
              onClick: ep
            }),
            className: eo.redirectNoticeBannerContainer,
            children: (0, r.jsx)(eb, {
              onLoadComplete: q
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
              children: ea.intl.string(ea.t.z8YP2A)
            }), (0, r.jsx)(p.Text, {
              color: "text-subtle",
              variant: "text-md/normal",
              children: ea.intl.string(ea.t.HdKh65)
            }), (0, r.jsx)(p.Avr, {
              text: ea.intl.string(ea.t["1CdL8d"]),
              onClick: ep,
              textVariant: "text-md/normal",
              variant: "primary"
            })]
          })
        }) : Q ? (0, r.jsx)(e_, {
          renderBanner: () => T !== F.e5.PREVIEW_TOOL && (0, r.jsxs)(S.Z, {
            title: ee,
            description: es,
            button: (0, r.jsxs)(p.ButtonGroup, {
              children: [(0, r.jsx)(p.Button, {
                variant: "overlay-primary",
                text: ea.intl.string(ea.t["1Wm127"]),
                onClick: () => (0, E.mK)({
                  tab: ei.AW.ORBS,
                  analyticsLocations: [],
                  analyticsSource: m.Z.INTRO_TO_ORBS_QUEST_BANNER
                })
              }), (0, r.jsx)(p.Button, {
                variant: "overlay-secondary",
                text: ea.intl.string(ea.t["7kTAgJ"]),
                onClick: $
              })]
            }),
            className: a()(eo.bannerContainer, eo.orbsContainer),
            children: [(0, r.jsx)("div", {
              className: a()(eo.bannerGradient, eo.orbsGradient)
            }), (0, r.jsx)(eh, {
              onLoadComplete: q
            })]
          }),
          header: (0, r.jsx)(P.a, {
            selectedTabId: T,
            handleTransition: ef,
            tabs: L,
            icon: p.qDn,
            children: (0, r.jsx)(w.V9, {
              analyticsPage: er.ZY5.GLOBAL_DISCOVERY_QUESTS,
              cardAlignment: w.ek.END,
              ctaText: ea.intl.string(ea.t["J+vlIR"]),
              ctaOnClick: eu
            })
          })
        }) : (0, r.jsx)(e_, {
          renderBanner: () => (0, r.jsxs)(S.Z, {
            title: ee,
            description: es,
            button: (0, r.jsx)(p.Button, {
              variant: "overlay-primary",
              text: ea.intl.string(ea.t.hvVgAZ),
              onClick: $,
              icon: p.Gr1,
              iconPosition: "end"
            }),
            className: eo.bannerContainer,
            children: [(0, r.jsx)("div", {
              className: eo.bannerGradient
            }), (0, r.jsx)(eh, {
              onLoadComplete: q
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