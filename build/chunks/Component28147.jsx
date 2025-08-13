/** Chunk was on web.js **/
/** chunk id: 28147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk427845 = require("./427845.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = Array(6).fill(0).map((e, t) => t),
  k = [, , , ].fill(0).map((e, t) => t),
  j = [, , , , ].fill(0).map((e, t) => t),
  U = 4,
  G = 5;

function B(e) {
  return (0, r.jsx)(Z, D({}, e))
}

function Z(e) {
  let {
    context: t,
    query: n,
    entrypoint: o,
    isScrollCloseToBottom: l
  } = e, c = o === g._b.TEXT, u = o === g._b.TEXT, {
    loading: d,
    isEmptyState: f,
    commandResults: p,
    hasCommandResults: h,
    applicationResults: m
  } = (0, E.pe)({
    context: t,
    query: n,
    searchesActivities: true,
    searchesCommands: c,
    searchesBots: u
  }), {
    fetchState: b,
    applicationResults: y,
    fetchNextPage: O
  } = (0, E.Q2)({
    query: n,
    context: t,
    fetches: true,
    pageLimit: G,
    entrypoint: o
  });
  i.useEffect(() => {
    l && b === _.M.FETCHED && O()
  }, [O, b, l]);
  let v = null == b || b === _.M.FETCHING,
    T = i.useMemo(() => {
      let e = m.map(e => ({
          application: e,
          installOnDemand: true
        })),
        t = new Set(m.map(e => {
          let {
            id: t
          } = e;
          return t
        }));
      return [...e, ...a().compact(y.map(e => e.type === s.s.CONNECTION || t.has(e.data.id) ? null : {
        application: e.data,
        installOnDemand: true
      }))]
    }, [y, m]),
    S = T.length > 0,
    A = f && !S && !v;
  return d ? (0, r.jsx)(W, {}) : A ? (0, r.jsx)(I.A, {
    type: g.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: o === g._b.TEXT ? R.intl.string(R.t.LSNOYW) : R.intl.string(R.t.Clu7Qk)
  }) : (0, r.jsxs)("div", {
    children: [h && (0, r.jsx)(F, {
      context: t,
      commandResults: p,
      query: n
    }), (S || v) && (0, r.jsx)(H, {
      context: t,
      applicationResults: T,
      includePlaceholder: v,
      query: n,
      searchesBots: u
    })]
  })
}

function F(e) {
  var t, n;
  let {
    context: o,
    commandResults: a,
    query: s
  } = e, _ = a.length > U, E = i.useMemo(() => _ ? a.slice(0, U) : a, [a, _]), [b, y] = i.useState(false), v = null != (t = (0, l.Z)(b)) ? t : b, I = i.useCallback(() => y(e => !e), []), A = (null != (n = (0, l.Z)(s)) ? n : s)[0] !== s[0], w = b && !A;
  i.useLayoutEffect(() => y(false), [A]);
  let {
    ref: D,
    isTransitioning: L,
    onTransitionEnd: x
  } = (0, O.Z)({
    key: s,
    isExpanded: w,
    durationMs: 200,
    maxAnimationHeight: N.K7
  });
  i.useEffect(() => {
    !v && b && (0, c.yw)(C.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
      section_name: g.L3.SEARCH,
      source: m.Z.entrypoint(),
      num: a.length
    })
  }, [a.length, v, b]);
  let M = w || L,
    k = w ? T.Z.buttonTypes.VIEW_LESS : T.Z.buttonTypes.VIEW_MORE,
    j = M ? a : E;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(T.Z, {
      title: R.intl.string(R.t["0hKkS0"]),
      buttonType: k,
      onClickViewButton: _ ? I : true
    }), (0, r.jsx)("div", {
      className: P.sectionContentContainer,
      ref: D,
      onTransitionEnd: x,
      children: j.map((e, t) => {
        let {
          command: n,
          application: i,
          section: a
        } = e;
        return (0, r.jsx)(S.Z, {
          command: n,
          application: i,
          query: s,
          searchResultsPosition: t,
          onClick: () => {
            let e = m.Z.entrypoint();
            h.yT(g.ti.DISMISSED), (0, f.Mo)({
              command: n,
              location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
              sectionName: g.L3.SEARCH
            }), "channel" === o.type && (u.Po({
              channelId: o.channel.id,
              command: n,
              section: a,
              location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
              triggerSection: true,
              queryLength: s.length,
              sectionName: g.L3.SEARCH,
              query: s,
              searchResultsPosition: t,
              source: e
            }), p.S.dispatch(C.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: o.channel.id
            }))
          }
        }, n.id)
      })
    })]
  })
}

function V(e) {
  let {
    trackSearchResultsItemImpressionRef: t
  } = (0, v.Z)({
    applicationId: e.application.id,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  });
  return (0, r.jsx)("div", {
    className: P.searchOpenAppDetailAppCard,
    ref: e => {
      t.current = e
    },
    children: (0, r.jsx)(b.kA, x(D({}, e), {
      tracksImpression: false,
      enableVideoBanner: true
    }))
  })
}

function H(e) {
  let {
    context: t,
    applicationResults: n,
    includePlaceholder: i,
    query: o,
    searchesBots: a
  } = e;
  return a ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(T.Z, {
      title: R.intl.string(R.t.PHjkRE)
    }), (0, r.jsxs)("div", {
      className: P.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: a
        } = e;
        return (0, r.jsx)(Y, {
          context: t,
          application: i,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: g.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: o
        }, i.id)
      }), i && k.map(e => (0, r.jsx)(A.Z, {}, e))]
    })]
  }) : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(T.Z, {
      title: R.intl.string(R.t.shUONj)
    }), (0, r.jsxs)("div", {
      className: P.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: a
        } = e;
        return (0, r.jsx)(V, {
          context: t,
          application: i,
          look: b.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: g.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: a,
          query: o
        }, i.id)
      }), i && j.map(e => (0, r.jsx)(y.Z, {
        look: b.U4.LARGE_BANNER
      }, e))]
    })]
  })
}

function Y(e) {
  let {
    onClickAppCard: t
  } = (0, b.cG)(e);
  return (0, r.jsx)(S.Z, {
    application: e.application,
    onClick: t,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  })
}

function W() {
  return (0, Chunk255367.jsxs)("div", {
    children: [(0, Chunk255367.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["0hKkS0"])
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk427845.sectionContentContainer,
      children: M.map(e => (0, r.jsx)(A.Z, {}, e))
    }), (0, Chunk255367.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.PHjkRE)
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk427845.sectionContentContainer,
      children: k.map(e => (0, r.jsx)(A.Z, {}, e))
    })]
  })
}