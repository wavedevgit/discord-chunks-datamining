/** Chunk was on web.js **/
/** chunk id: 28147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk425838 = require("./425838.js");

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

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = Array(6).fill(0).map((e, t) => t),
  M = [, , , ].fill(0).map((e, t) => t),
  k = [, , , , ].fill(0).map((e, t) => t),
  U = 4,
  G = 5;

function Z(e) {
  return (0, r.jsx)(F, D({}, e))
}

function F(e) {
  let {
    context: t,
    query: n,
    entrypoint: a,
    isScrollCloseToBottom: l
  } = e, c = a === g._b.TEXT, u = a === g._b.TEXT, {
    loading: d,
    isEmptyState: f,
    commandResults: _,
    hasCommandResults: m,
    applicationResults: h
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
    entrypoint: a
  });
  i.useEffect(() => {
    l && b === p.M.FETCHED && O()
  }, [O, b, l]);
  let v = null == b || b === p.M.FETCHING,
    I = i.useMemo(() => {
      let e = h.map(e => ({
          application: e,
          installOnDemand: true
        })),
        t = new Set(h.map(e => {
          let {
            id: t
          } = e;
          return t
        }));
      return [...e, ...o().compact(y.map(e => e.type === s.s.CONNECTION || t.has(e.data.id) ? null : {
        application: e.data,
        installOnDemand: true
      }))]
    }, [y, h]),
    T = I.length > 0,
    C = f && !T && !v;
  return d ? (0, r.jsx)(W, {}) : C ? (0, r.jsx)(S.A, {
    type: g.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: a === g._b.TEXT ? P.intl.string(P.t.LSNOYf) : P.intl.string(P.t.Clu7Qh)
  }) : (0, r.jsxs)("div", {
    children: [m && (0, r.jsx)(B, {
      context: t,
      commandResults: _,
      query: n
    }), (T || v) && (0, r.jsx)(H, {
      context: t,
      applicationResults: I,
      includePlaceholder: v,
      query: n,
      searchesBots: u
    })]
  })
}

function B(e) {
  var t, n;
  let {
    context: a,
    commandResults: o,
    query: s
  } = e, p = o.length > U, E = i.useMemo(() => p ? o.slice(0, U) : o, [o, p]), [b, y] = i.useState(false), v = null != (t = (0, l.Z)(b)) ? t : b, S = i.useCallback(() => y(e => !e), []), C = (null != (n = (0, l.Z)(s)) ? n : s)[0] !== s[0], w = b && !C;
  i.useLayoutEffect(() => y(false), [C]);
  let {
    ref: D,
    isTransitioning: x,
    onTransitionEnd: L
  } = (0, O.Z)({
    key: s,
    isExpanded: w,
    durationMs: 200,
    maxAnimationHeight: A.K7
  });
  i.useEffect(() => {
    !v && b && (0, c.yw)(N.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
      section_name: g.L3.SEARCH,
      source: h.Z.entrypoint(),
      num: o.length
    })
  }, [o.length, v, b]);
  let j = w || x,
    M = w ? I.Z.buttonTypes.VIEW_LESS : I.Z.buttonTypes.VIEW_MORE,
    k = j ? o : E;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(I.Z, {
      title: P.intl.string(P.t["0hKkS+"]),
      buttonType: M,
      onClickViewButton: p ? S : true
    }), (0, r.jsx)("div", {
      className: R.sectionContentContainer,
      ref: D,
      onTransitionEnd: L,
      children: k.map((e, t) => {
        let {
          command: n,
          application: i,
          section: o
        } = e;
        return (0, r.jsx)(T.Z, {
          command: n,
          application: i,
          query: s,
          searchResultsPosition: t,
          onClick: () => {
            let e = h.Z.entrypoint();
            m.y(g.ti.DISMISSED), (0, f.Mo)({
              command: n,
              location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
              sectionName: g.L3.SEARCH
            }), "channel" === a.type && (u.Po({
              channelId: a.channel.id,
              command: n,
              section: o,
              location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
              triggerSection: true,
              queryLength: s.length,
              sectionName: g.L3.SEARCH,
              query: s,
              searchResultsPosition: t,
              source: e
            }), _.S.dispatch(N.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: a.channel.id
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
    className: R.searchOpenAppDetailAppCard,
    ref: e => {
      t.current = e
    },
    children: (0, r.jsx)(b.kA, L(D({}, e), {
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
    query: a,
    searchesBots: o
  } = e;
  return o ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(I.Z, {
      title: P.intl.string(P.t.PHjkRE)
    }), (0, r.jsxs)("div", {
      className: R.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: o
        } = e;
        return (0, r.jsx)(Y, {
          context: t,
          application: i,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: g.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: o,
          query: a
        }, i.id)
      }), i && M.map(e => (0, r.jsx)(C.Z, {}, e))]
    })]
  }) : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(I.Z, {
      title: P.intl.string(P.t.shUONg)
    }), (0, r.jsxs)("div", {
      className: R.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: o
        } = e;
        return (0, r.jsx)(V, {
          context: t,
          application: i,
          look: b.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: g.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: o,
          query: a
        }, i.id)
      }), i && k.map(e => (0, r.jsx)(y.Z, {
        look: b.U4.LARGE_BANNER
      }, e))]
    })]
  })
}

function Y(e) {
  let {
    onClickAppCard: t
  } = (0, b.cG)(e);
  return (0, r.jsx)(T.Z, {
    application: e.application,
    onClick: t,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  })
}

function W() {
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["0hKkS+"])
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk425838.sectionContentContainer,
      children: j.map(e => (0, r.jsx)(C.Z, {}, e))
    }), (0, Chunk54381.jsx)(Chunk41558.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.PHjkRE)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk425838.sectionContentContainer,
      children: M.map(e => (0, r.jsx)(C.Z, {}, e))
    })]
  })
}