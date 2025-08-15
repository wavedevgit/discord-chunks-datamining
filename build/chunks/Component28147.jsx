/** Chunk was on 35755 **/
/** chunk id: 28147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk209173 = require("./209173.js"),
  Chunk110924 = require("./110924.js"),
  Chunk367907 = require("./367907.js"),
  Chunk555573 = require("./555573.js"),
  Chunk895924 = require("./895924.js"),
  Chunk583027 = require("./583027.js"),
  Chunk177653 = require("./177653.js"),
  Chunk585483 = require("./585483.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk392370 = require("./392370.js"),
  Chunk98880 = require("./98880.jsx"),
  Chunk804307 = require("./804307.jsx"),
  Chunk520315 = require("./520315.js"),
  Chunk532309 = require("./532309.js"),
  Chunk561160 = require("./561160.jsx"),
  Chunk41558 = require("./41558.jsx"),
  Chunk106771 = require("./106771.jsx"),
  Chunk79984 = require("./79984.jsx"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk399235 = require("./399235.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let L = Array(6).fill(0).map((e, t) => t),
  R = [, , , ].fill(0).map((e, t) => t),
  Z = [, , , , ].fill(0).map((e, t) => t);

function w(e) {
  return (0, l.jsx)(k, T({}, e))
}

function k(e) {
  let {
    context: t,
    query: n,
    entrypoint: r,
    isScrollCloseToBottom: s
  } = e, c = r === y._b.TEXT, u = r === y._b.TEXT, {
    loading: d,
    isEmptyState: p,
    commandResults: f,
    hasCommandResults: h,
    applicationResults: v
  } = (0, x.pe)({
    context: t,
    query: n,
    searchesActivities: true,
    searchesCommands: c,
    searchesBots: u
  }), {
    fetchState: b,
    applicationResults: g,
    fetchNextPage: j
  } = (0, x.Q2)({
    query: n,
    context: t,
    fetches: true,
    pageLimit: 5,
    entrypoint: r
  });
  i.useEffect(() => {
    s && b === m.M.FETCHED && j()
  }, [j, b, s]);
  let N = null == b || b === m.M.FETCHING,
    E = i.useMemo(() => {
      let e = v.map(e => ({
          application: e,
          installOnDemand: true
        })),
        t = new Set(v.map(e => {
          let {
            id: t
          } = e;
          return t
        }));
      return [...e, ...a().compact(g.map(e => e.type === o.s.CONNECTION || t.has(e.data.id) ? null : {
        application: e.data,
        installOnDemand: true
      }))]
    }, [g, v]),
    P = E.length > 0,
    O = p && !P && !N;
  return d ? (0, l.jsx)(V, {}) : O ? (0, l.jsx)(C.A, {
    type: y.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: r === y._b.TEXT ? I.intl.string(I.t.LSNOYW) : I.intl.string(I.t.Clu7Qk)
  }) : (0, l.jsxs)("div", {
    children: [h && (0, l.jsx)(M, {
      context: t,
      commandResults: f,
      query: n
    }), (P || N) && (0, l.jsx)(D, {
      context: t,
      applicationResults: E,
      includePlaceholder: N,
      query: n,
      searchesBots: u
    })]
  })
}

function M(e) {
  var t, n;
  let {
    context: r,
    commandResults: a,
    query: o
  } = e, m = a.length > 4, x = i.useMemo(() => m ? a.slice(0, 4) : a, [a, m]), [b, g] = i.useState(false), N = null != (t = (0, s.Z)(b)) ? t : b, C = i.useCallback(() => g(e => !e), []), O = (null != (n = (0, s.Z)(o)) ? n : o)[0] !== o[0], T = b && !O;
  i.useLayoutEffect(() => g(false), [O]);
  let {
    ref: L,
    isTransitioning: R,
    onTransitionEnd: Z
  } = (0, j.Z)({
    key: o,
    isExpanded: T,
    durationMs: 200,
    maxAnimationHeight: A.K7
  });
  i.useEffect(() => {
    !N && b && (0, c.yw)(_.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
      section_name: y.L3.SEARCH,
      source: v.Z.entrypoint(),
      num: a.length
    })
  }, [a.length, N, b]);
  let w = T || R,
    k = T ? E.Z.buttonTypes.VIEW_LESS : E.Z.buttonTypes.VIEW_MORE,
    M = w ? a : x;
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(E.Z, {
      title: I.intl.string(I.t["0hKkS0"]),
      buttonType: k,
      onClickViewButton: m ? C : true
    }), (0, l.jsx)("div", {
      className: S.sectionContentContainer,
      ref: L,
      onTransitionEnd: Z,
      children: M.map((e, t) => {
        let {
          command: n,
          application: i,
          section: a
        } = e;
        return (0, l.jsx)(P.Z, {
          command: n,
          application: i,
          query: o,
          searchResultsPosition: t,
          onClick: () => {
            let e = v.Z.entrypoint();
            h.yT(y.ti.DISMISSED), (0, p.Mo)({
              command: n,
              location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
              sectionName: y.L3.SEARCH
            }), "channel" === r.type && (u.Po({
              channelId: r.channel.id,
              command: n,
              section: a,
              location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
              triggerSection: true,
              queryLength: o.length,
              sectionName: y.L3.SEARCH,
              query: o,
              searchResultsPosition: t,
              source: e
            }), f.S.dispatch(_.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: r.channel.id
            }))
          }
        }, n.id)
      })
    })]
  })
}

function U(e) {
  var t, n;
  let {
    trackSearchResultsItemImpressionRef: i
  } = (0, N.Z)({
    applicationId: e.application.id,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  });
  return (0, l.jsx)("div", {
    className: S.searchOpenAppDetailAppCard,
    ref: e => {
      i.current = e
    },
    children: (0, l.jsx)(b.kA, (t = T({}, e), n = n = {
      tracksImpression: false,
      enableVideoBanner: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}

function D(e) {
  let {
    context: t,
    applicationResults: n,
    includePlaceholder: i,
    query: r,
    searchesBots: a
  } = e;
  return a ? (0, l.jsxs)("div", {
    children: [(0, l.jsx)(E.Z, {
      title: I.intl.string(I.t.PHjkRE)
    }), (0, l.jsxs)("div", {
      className: S.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: a
        } = e;
        return (0, l.jsx)(H, {
          context: t,
          application: i,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: y.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: r
        }, i.id)
      }), i && R.map(e => (0, l.jsx)(O.Z, {}, e))]
    })]
  }) : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(E.Z, {
      title: I.intl.string(I.t.shUONj)
    }), (0, l.jsxs)("div", {
      className: S.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: a
        } = e;
        return (0, l.jsx)(U, {
          context: t,
          application: i,
          look: b.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: y.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: r
        }, i.id)
      }), i && Z.map(e => (0, l.jsx)(g.Z, {
        look: b.U4.LARGE_BANNER
      }, e))]
    })]
  })
}

function H(e) {
  let {
    onClickAppCard: t
  } = (0, b.cG)(e);
  return (0, l.jsx)(P.Z, {
    application: e.application,
    onClick: t,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  })
}

function V() {
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["0hKkS0"])
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk399235.sectionContentContainer,
      children: L.map(e => (0, l.jsx)(O.Z, {}, e))
    }), (0, Chunk951288.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.PHjkRE)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk399235.sectionContentContainer,
      children: R.map(e => (0, l.jsx)(O.Z, {}, e))
    })]
  })
}