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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let L = Array(6).fill(0).map((e, t) => t),
  R = [, , , ].fill(0).map((e, t) => t),
  Z = [, , , , ].fill(0).map((e, t) => t);

function w(e) {
  return (0, i.jsx)(k, T({}, e))
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
  } = (0, g.pe)({
    context: t,
    query: n,
    searchesActivities: true,
    searchesCommands: c,
    searchesBots: u
  }), {
    fetchState: x,
    applicationResults: b,
    fetchNextPage: N
  } = (0, g.Q2)({
    query: n,
    context: t,
    fetches: true,
    pageLimit: 5,
    entrypoint: r
  });
  l.useEffect(() => {
    s && x === m.M.FETCHED && N()
  }, [N, x, s]);
  let j = null == x || x === m.M.FETCHING,
    E = l.useMemo(() => {
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
      return [...e, ...a().compact(b.map(e => e.type === o.s.CONNECTION || t.has(e.data.id) ? null : {
        application: e.data,
        installOnDemand: true
      }))]
    }, [b, v]),
    P = E.length > 0,
    A = p && !P && !j;
  return d ? (0, i.jsx)(B, {}) : A ? (0, i.jsx)(C.A, {
    type: y.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: r === y._b.TEXT ? I.intl.string(I.t.LSNOYf) : I.intl.string(I.t.Clu7Qh)
  }) : (0, i.jsxs)("div", {
    children: [h && (0, i.jsx)(M, {
      context: t,
      commandResults: f,
      query: n
    }), (P || j) && (0, i.jsx)(D, {
      context: t,
      applicationResults: E,
      includePlaceholder: j,
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
  } = e, m = a.length > 4, g = l.useMemo(() => m ? a.slice(0, 4) : a, [a, m]), [x, b] = l.useState(false), j = null != (t = (0, s.Z)(x)) ? t : x, C = l.useCallback(() => b(e => !e), []), A = (null != (n = (0, s.Z)(o)) ? n : o)[0] !== o[0], T = x && !A;
  l.useLayoutEffect(() => b(false), [A]);
  let {
    ref: L,
    isTransitioning: R,
    onTransitionEnd: Z
  } = (0, N.Z)({
    key: o,
    isExpanded: T,
    durationMs: 200,
    maxAnimationHeight: _.K7
  });
  l.useEffect(() => {
    !j && x && (0, c.yw)(O.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
      section_name: y.L3.SEARCH,
      source: v.Z.entrypoint(),
      num: a.length
    })
  }, [a.length, j, x]);
  let w = T || R,
    k = T ? E.Z.buttonTypes.VIEW_LESS : E.Z.buttonTypes.VIEW_MORE,
    M = w ? a : g;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(E.Z, {
      title: I.intl.string(I.t["0hKkS+"]),
      buttonType: k,
      onClickViewButton: m ? C : true
    }), (0, i.jsx)("div", {
      className: S.sectionContentContainer,
      ref: L,
      onTransitionEnd: Z,
      children: M.map((e, t) => {
        let {
          command: n,
          application: l,
          section: a
        } = e;
        return (0, i.jsx)(P.Z, {
          command: n,
          application: l,
          query: o,
          searchResultsPosition: t,
          onClick: () => {
            let e = v.Z.entrypoint();
            h.y(y.ti.DISMISSED), (0, p.Mo)({
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
            }), f.S.dispatch(O.CkL.FOCUS_CHANNEL_TEXT_AREA, {
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
    trackSearchResultsItemImpressionRef: l
  } = (0, j.Z)({
    applicationId: e.application.id,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  });
  return (0, i.jsx)("div", {
    className: S.searchOpenAppDetailAppCard,
    ref: e => {
      l.current = e
    },
    children: (0, i.jsx)(x.kA, (t = T({}, e), n = n = {
      tracksImpression: false,
      enableVideoBanner: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
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
    includePlaceholder: l,
    query: r,
    searchesBots: a
  } = e;
  return a ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(E.Z, {
      title: I.intl.string(I.t.PHjkRE)
    }), (0, i.jsxs)("div", {
      className: S.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: l,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(H, {
          context: t,
          application: l,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: y.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: r
        }, l.id)
      }), l && R.map(e => (0, i.jsx)(A.Z, {}, e))]
    })]
  }) : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(E.Z, {
      title: I.intl.string(I.t.shUONg)
    }), (0, i.jsxs)("div", {
      className: S.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: l,
          installOnDemand: a
        } = e;
        return (0, i.jsx)(U, {
          context: t,
          application: l,
          look: x.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: y.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: r
        }, l.id)
      }), l && Z.map(e => (0, i.jsx)(b.Z, {
        look: x.U4.LARGE_BANNER
      }, e))]
    })]
  })
}

function H(e) {
  let {
    onClickAppCard: t
  } = (0, x.cG)(e);
  return (0, i.jsx)(P.Z, {
    application: e.application,
    onClick: t,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  })
}

function B() {
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["0hKkS+"])
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk399235.sectionContentContainer,
      children: L.map(e => (0, i.jsx)(A.Z, {}, e))
    }), (0, Chunk951288.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.PHjkRE)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk399235.sectionContentContainer,
      children: R.map(e => (0, i.jsx)(A.Z, {}, e))
    })]
  })
}