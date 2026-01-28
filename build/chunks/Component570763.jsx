/** Chunk was on 21738 **/
/** chunk id: 570763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eE
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk835245 = require("./835245.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk944791 = require("./944791.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk139286 = require("./139286.js"),
  Chunk197111 = require("./197111.js"),
  Chunk10088 = require("./10088.js"),
  Chunk979286 = require("./979286.js"),
  Chunk726249 = require("./726249.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk239365 = require("./239365.js"),
  Chunk178629 = require("./178629.js"),
  Chunk701508 = require("./701508.jsx"),
  Chunk979590 = require("./979590.jsx"),
  Chunk45758 = require("./45758.jsx"),
  Chunk737823 = require("./737823.jsx"),
  Chunk153527 = require("./153527.jsx"),
  Chunk783531 = require("./783531.jsx"),
  Chunk545746 = require("./545746.js"),
  Chunk318346 = require("./318346.js"),
  Chunk151252 = require("./151252.js"),
  Chunk142270 = require("./142270.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk676279 = require("./676279.js"),
  Chunk975571 = require("./975571.js"),
  Chunk240248 = require("./240248.js"),
  Chunk341915 = require("./341915.js"),
  Chunk631001 = require("./631001.js"),
  Chunk245853 = require("./245853.js"),
  Chunk807876 = require("./807876.js"),
  Chunk890687 = require("./890687.js"),
  Chunk590202 = require("./590202.js"),
  Chunk885459 = require("./885459.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk419818 = require("./419818.js"),
  Chunk203879 = require("./203879.js"),
  Chunk409389 = require("./409389.jsx"),
  Chunk881172 = require("./881172.jsx"),
  Chunk724339 = require("./724339.js"),
  Chunk516226 = require("./516226.js"),
  Chunk321503 = require("./321503.js"),
  Chunk65513 = require("./65513.jsx"),
  Chunk475529 = require("./475529.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk467303 = require("./467303.js"),
  Chunk318808 = require("./318808.js"),
  Chunk92872 = require("./92872.js"),
  Chunk880440 = require("./880440.js"),
  Chunk522303 = require("./522303.js"),
  Chunk595411 = require("./595411.js"),
  Chunk602557 = require("./602557.js");

function ef(e) {
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
let em = Chunk64700.createContext({});

function eA(e) {
  let {
    onLoadComplete: t
  } = e, {
    enabled: n
  } = (0, L.Z)({
    location: er.rE.QUEST_HOME_DESKTOP
  }), l = (0, u.bG)([g.A], () => g.A.useReducedMotion), s = (0, u.bG)([D.A], () => D.A.isFocused()), {
    ref: o,
    inViewport: c
  } = (0, Q.p)(), d = i.useRef(null);
  if (i.useEffect(() => {
      (null == d ? true : d.current) != null && (d.current.paused || s && c && !l ? d.current.paused && !l && c && s && d.current.play() : d.current.pause())
    }, [l, c, s]), n) {
    let e = (0, k.TM)();
    return (0, r.jsx)(O.A, {
      ref: e => {
        d.current = e, o.current = e
      },
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(eo.BW, eo.Lk),
      onProgress: t,
      "data-mtctest-ignore": "true",
      controls: false,
      children: (0, r.jsx)("source", {
        src: e ? eu.A : ed.A,
        type: e ? "video/mp4" : "video/webm"
      })
    })
  }
  return (0, r.jsx)("img", {
    src: ec.Ay,
    className: a()(eo.BW, eo.J6),
    alt: "",
    onLoad: t
  })
}

function e_(e) {
  let {
    onLoadComplete: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: ep.Ay,
      className: a()(eo.BW, eo.rZ),
      alt: ""
    }), (0, r.jsx)("img", {
      src: eg.Ay,
      className: a()(eo.BW, eo.rZ),
      alt: "",
      onLoad: t
    }), (0, r.jsx)("img", {
      src: eh.Ay,
      className: a()(eo.BW, eo.rZ),
      alt: ""
    })]
  })
}

function eb(e) {
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
  } = i.useContext(em), {
    takeover: h,
    isLoading: g
  } = (0, Y._b)(), {
    enabled: f
  } = (0, L.Z)({
    location: er.rE.QUEST_HOME_DESKTOP
  }), {
    enabled: m
  } = H.XM.useConfig({
    location: er.rE.QUEST_HOME_DESKTOP
  }), A = i.useRef(null), _ = i.useCallback(() => {
    var e;
    null == (e = A.current) || e.resetSortingFiltering()
  }, []);
  return (0, r.jsxs)(ee.X.Provider, {
    value: d,
    children: [l, (0, r.jsxs)(x.A, {
      onScroll: c,
      ref: d,
      children: [function() {
        if (!o && m) {
          if (p !== Y.NC.ALL) return null;
          if (g) return (0, r.jsx)(et.s, {});
          if (null != h) return (0, r.jsx)(et.A, {
            config: h,
            onQuestCtaClick: _
          })
        }
        return t()
      }(), (0, r.jsx)(C.A, {
        children: (0, r.jsxs)("div", {
          className: a()(eo.Qs, {
            [eo.HR]: m && !f && p !== Y.NC.ALL
          }),
          children: [n, s ? p === Y.NC.CLAIMED ? (0, r.jsx)(Z.A, {
            onSelectTab: u
          }) : p === Y.NC.PREVIEW_TOOL ? (0, r.jsx)(W.A, {}) : (0, r.jsx)(X.A, {
            ref: A
          }) : null]
        })
      })]
    })]
  })
}
let eE = function(e) {
  let {
    topLevelRoute: t
  } = e, n = (0, s.zy)(), l = (0, s.W6)(), g = i.useMemo(() => {
    var e;
    return (null == (e = (0, s.B6)(n.pathname, ei.BVt.QUEST_HOME)) ? true : e.isExact) === true
  }, [n.pathname]), O = (0, u.bG)([_.A], () => _.A.getState("quests")), {
    selectedTab: C,
    onSelectTab: x,
    tabs: D
  } = (0, en.J)({
    withClaimedQuestsTab: !g
  });
  i.useLayoutEffect(() => {
    g && C === Y.NC.CLAIMED && B.A.setState({
      tab: Y.NC.ALL
    })
  }, [g, C]);
  let {
    onScroll: k,
    scrollPosition: H
  } = (0, v.G)(), W = z.A.getState().getUtmCurrentContext(), Q = (0, J.W)(e => e.registerAssetLoad), X = i.useRef(W);
  i.useEffect(() => {
    X.current = W
  }), i.useEffect(() => {
    let {
      current: e
    } = X;
    (0, m.x)({
      name: c.ImpressionNames.QUEST_HOME,
      type: c.ImpressionTypes.VIEW,
      properties: {
        utm_source_current: e.utmSourceCurrent,
        utm_medium_current: e.utmMediumCurrent,
        utm_campaign_current: e.utmCampaignCurrent,
        utm_content_current: e.utmContentCurrent,
        tab: C
      }
    })
  }, [C]);
  let {
    enabled: Z
  } = (0, L.Z)({
    location: er.rE.QUEST_HOME_DESKTOP
  }), ee = i.useCallback(() => {
    Z ? window.open(ei.X7G.PAID_TERMS_ORBS) : window.open(U.A.getArticleURL(ei.MVz.QUESTS_LEARN_MORE))
  }, [Z]);
  (0, E.HU)({
    location: es.intl.string(es.t.JALI2K)
  });
  let et = Z ? es.intl.format(es.t.BCBIlp, {}) : es.intl.format(es.t.lmMBfy, {}),
    ec = Z ? es.intl.format(es.t.U9FY0J, {}) : es.intl.string(es.t.oWCrBq),
    eu = i.useRef(null),
    ed = i.useCallback(() => {
      (0, w.Y)({
        pageType: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
        sectionType: ei.JJy.ORBS_BALANCE_MENU,
        ctaObject: ei.ZSU.CTA_TO_ORBS_SHOP
      }), (0, b.Cz)({
        tab: el.G2.ORBS,
        analyticsLocations: [],
        analyticsSource: f.A.ORBS_BALANCE_MENU
      })
    }, []);
  i.useEffect(() => {
    (0, h.I)(ei.BVt.QUEST_HOME_V2)
  }, []), i.useEffect(() => {
    I.g.trigger()
  }, []), (0, P.A)({
    ignoreCacheTTL: true
  });
  let ep = (0, F.U)({
    location: er.rE.QUEST_PREVIEW_TOOL_2
  });
  i.useEffect(() => {
    if (null != O) return;
    let e = new URLSearchParams(n.search),
      r = e.get(Y.L1.TAB);
    if (ep && r === Y.NC.PREVIEW_TOOL) {
      let t = e.get(Y.L1.QUEST_ID);
      A.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
        type: ea.XK.QUEST_PREVIEW_TOOL,
        params: {
          questId: t,
          tab: r
        }
      });
      return
    }
    let i = performance.getEntriesByType("navigation")[0];
    if ("POP" === l.action && (null == i ? true : i.type) === "navigate" && t && r !== Y.NC.PREVIEW_TOOL) {
      let t = (0, G.uJ)(n.hash) ? null : n.hash.substring(1),
        i = e.get(Y.L1.SORT),
        l = e.get(Y.L1.FILTER);
      A.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
        type: ea.XK.QUEST_HOME,
        params: {
          questId: (0, G.uJ)(t) ? true : t,
          sort: i,
          filter: l,
          tab: r
        }
      })
    }
  }, [n.search, O, ep, l.action, n.hash, t]), i.useEffect(() => {
    t && (0, y.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING)
  }, [t]);
  let eh = i.useCallback(() => {
      (0, q.navigateToQuestHome)({
        fromContent: V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER
      }), M.default.track(ei.HAw.QUEST_CONTENT_CLICKED, ef({
        cta_name: K.Cy.VIEW_QUESTS,
        click_id: (0, o.A)(),
        is_targeted: false
      }, (0, K.fF)(V.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER)))
    }, []),
    eg = i.useCallback(e => {
      var t, n, r;
      l.replace((n = ef({}, l.location), r = r = {
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
      }), n)), null == (t = eu.current) || t.scrollToTop({
        animate: false
      }), x(e)
    }, [l, x]);
  return (0, r.jsx)($.M.Provider, {
    value: {
      onAssetLoadComplete: Q
    },
    children: (0, r.jsx)(em.Provider, {
      value: i.useMemo(() => ({
        isInDiscoverQuestHomeTab: g,
        onScroll: k,
        onSelectTab: eg,
        scrollerRef: eu,
        selectedTab: C
      }), [g, k, eg, eu, C]),
      children: (0, r.jsx)("div", {
        className: a()(eo.kL, {
          [eo.KY]: !t
        }),
        children: g ? (0, r.jsx)(eb, {
          renderBanner: () => (0, r.jsx)(S.A, {
            title: es.intl.string(es.t.z8YP2A),
            titleColor: "always-white",
            button: (0, r.jsx)(p.Button, {
              variant: "overlay-primary",
              text: es.intl.string(es.t.GURBQl),
              onClick: eh
            }),
            className: eo.Gj,
            children: (0, r.jsx)(e_, {
              onLoadComplete: Q
            })
          }),
          header: (0, r.jsx)(j.S, {
            selectedTabId: C,
            handleTransition: eg,
            tabs: D,
            icon: p.r2v
          }),
          withQuestsGrid: false,
          children: (0, r.jsxs)("div", {
            className: eo.kj,
            children: [(0, r.jsx)(p.Heading, {
              variant: "heading-xl/semibold",
              children: es.intl.string(es.t.z8YP2A)
            }), (0, r.jsx)(p.Text, {
              color: "text-subtle",
              variant: "text-md/normal",
              children: es.intl.string(es.t.HdKh65)
            }), (0, r.jsx)(p.QWc, {
              text: es.intl.string(es.t["1CdL8d"]),
              onClick: eh,
              textVariant: "text-md/normal",
              variant: "primary"
            })]
          })
        }) : Z ? (0, r.jsx)(eb, {
          renderBanner: () => C !== Y.NC.PREVIEW_TOOL && (0, r.jsxs)(S.A, {
            title: et,
            description: ec,
            button: (0, r.jsxs)(p.ButtonGroup, {
              children: [(0, r.jsx)(p.Button, {
                variant: "overlay-primary",
                text: es.intl.string(es.t["1Wm127"]),
                onClick: () => (0, b.Cz)({
                  tab: el.G2.ORBS,
                  analyticsLocations: [],
                  analyticsSource: f.A.INTRO_TO_ORBS_QUEST_BANNER
                })
              }), (0, r.jsx)(p.Button, {
                variant: "overlay-secondary",
                text: es.intl.string(es.t["7kTAgJ"]),
                onClick: ee
              })]
            }),
            className: a()(eo.cI, eo.GF),
            children: [(0, r.jsx)("div", {
              className: a()(eo.nY, eo.vu)
            }), (0, r.jsx)(eA, {
              onLoadComplete: Q
            })]
          }),
          header: (0, r.jsx)(j.S, {
            selectedTabId: C,
            handleTransition: eg,
            tabs: D,
            icon: p.r2v,
            children: (0, r.jsx)(R.SS, {
              analyticsPage: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
              cardAlignment: R.cP.END,
              ctaText: es.intl.string(es.t["J+vlIR"]),
              ctaOnClick: ed
            })
          })
        }) : (0, r.jsx)(eb, {
          renderBanner: () => (0, r.jsxs)(S.A, {
            title: et,
            description: ec,
            button: (0, r.jsx)(p.Button, {
              variant: "overlay-primary",
              text: es.intl.string(es.t.hvVgAZ),
              onClick: ee,
              icon: p.I9m,
              iconPosition: "end"
            }),
            className: eo.cI,
            children: [(0, r.jsx)("div", {
              className: eo.nY
            }), (0, r.jsx)(eA, {
              onLoadComplete: Q
            })]
          }),
          header: (0, r.jsxs)(T.Ay, {
            variant: T.Z5.OVERLAY,
            children: [(0, r.jsx)("div", {
              className: eo.T_
            }), (0, r.jsx)(T.ns, {
              scrollPosition: H
            }), (0, r.jsx)(T.T4, {
              icon: p.r2v
            })]
          }),
          children: (0, r.jsx)("div", {
            className: eo.vR,
            children: (0, r.jsx)(N.A, {
              tabs: D,
              selectedTab: C,
              onTabSelect: eg
            })
          })
        })
      })
    })
  })
}