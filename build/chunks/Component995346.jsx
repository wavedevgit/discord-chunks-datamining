/** Chunk was on web.js **/
/** chunk id: 995346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk935573 = require("./935573.js"),
  Chunk475743 = require("./475743.js"),
  Chunk58149 = require("./58149.js"),
  Chunk721768 = require("./721768.js"),
  Chunk392054 = require("./392054.js"),
  Chunk390756 = require("./390756.js"),
  Chunk651753 = require("./651753.js"),
  Chunk203982 = require("./203982.js"),
  Chunk211401 = require("./211401.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk837983 = require("./837983.js"),
  Chunk169909 = require("./169909.jsx"),
  Chunk155940 = require("./155940.jsx"),
  Chunk396533 = require("./396533.js"),
  Chunk448137 = require("./448137.js"),
  Chunk444230 = require("./444230.jsx"),
  Chunk783608 = require("./783608.jsx"),
  Chunk862183 = require("./862183.jsx"),
  Chunk698779 = require("./698779.jsx");
require("./60809.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk515636 = require("./515636.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = Array(6).fill(0).map((e, t) => t),
  j = [, , , ].fill(0).map((e, t) => t),
  M = [, , , , ].fill(0).map((e, t) => t),
  k = 4,
  U = 5;

function G(e) {
  return (0, r.jsx)(V, P({}, e))
}

function V(e) {
  let {
    context: t,
    query: n,
    entrypoint: a,
    isScrollCloseToBottom: l
  } = e, c = a === g.s4.TEXT, u = a === g.s4.TEXT, {
    loading: d,
    isEmptyState: f,
    commandResults: _,
    hasCommandResults: h,
    applicationResults: m
  } = (0, E.j_)({
    context: t,
    query: n,
    searchesActivities: true,
    searchesCommands: c,
    searchesBots: u
  }), {
    fetchState: y,
    applicationResults: b,
    fetchNextPage: O
  } = (0, E.pd)({
    query: n,
    context: t,
    fetches: true,
    pageLimit: U,
    entrypoint: a
  });
  i.useEffect(() => {
    l && y === p.e.FETCHED && O()
  }, [O, y, l]);
  let v = null == y || y === p.e.FETCHING,
    I = i.useMemo(() => {
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
      return [...e, ...s().compact(b.map(e => e.type === o.j.CONNECTION || t.has(e.data.id) ? null : {
        application: e.data,
        installOnDemand: true
      }))]
    }, [b, m]),
    S = I.length > 0,
    T = f && !S && !v;
  return d ? (0, r.jsx)(W, {}) : T ? (0, r.jsx)(A.U, {
    type: g.wg.SEARCH_EMPTY,
    searchQuery: n,
    textContent: a === g.s4.TEXT ? N.intl.string(N.t.LSNOYf) : N.intl.string(N.t.Clu7Qh)
  }) : (0, r.jsxs)("div", {
    children: [h && (0, r.jsx)(F, {
      context: t,
      commandResults: _,
      query: n
    }), (S || v) && (0, r.jsx)(H, {
      context: t,
      applicationResults: I,
      includePlaceholder: v,
      query: n,
      searchesBots: u
    })]
  })
}

function F(e) {
  var t, n;
  let {
    context: a,
    commandResults: s,
    query: o
  } = e, p = s.length > k, E = i.useMemo(() => p ? s.slice(0, k) : s, [s, p]), [y, b] = i.useState(false), v = null != (t = (0, l.A)(y)) ? t : y, A = i.useCallback(() => b(e => !e), []), T = (null != (n = (0, l.A)(o)) ? n : o)[0] !== o[0], R = y && !T;
  i.useLayoutEffect(() => b(false), [T]);
  let {
    ref: P,
    isTransitioning: D,
    onTransitionEnd: x
  } = (0, O.A)({
    key: o,
    isExpanded: R,
    durationMs: 200,
    maxAnimationHeight: 680
  });
  i.useEffect(() => {
    !v && y && (0, c.zV)(C.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
      section_name: g.yK.SEARCH,
      source: m.A.entrypoint(),
      num: s.length
    })
  }, [s.length, v, y]);
  let L = R || D,
    j = R ? I.A.buttonTypes.VIEW_LESS : I.A.buttonTypes.VIEW_MORE,
    M = L ? s : E;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(I.A, {
      title: N.intl.string(N.t["0hKkS+"]),
      buttonType: j,
      onClickViewButton: p ? A : true
    }), (0, r.jsx)("div", {
      className: w._,
      ref: P,
      onTransitionEnd: x,
      children: M.map((e, t) => {
        let {
          command: n,
          application: i,
          section: s
        } = e;
        return (0, r.jsx)(S.A, {
          command: n,
          application: i,
          query: o,
          searchResultsPosition: t,
          onClick: () => {
            let e = m.A.entrypoint();
            h.k(g.Se.DISMISSED), (0, f.Mv)({
              command: n,
              location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
              sectionName: g.yK.SEARCH
            }), "channel" === a.type && (u.Gf({
              channelId: a.channel.id,
              command: n,
              section: s,
              location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
              triggerSection: true,
              queryLength: o.length,
              sectionName: g.yK.SEARCH,
              query: o,
              searchResultsPosition: t,
              source: e
            }), _._.dispatch(C.jej.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: a.channel.id
            }))
          }
        }, n.id)
      })
    })]
  })
}

function B(e) {
  let {
    trackSearchResultsItemImpressionRef: t
  } = (0, v.A)({
    applicationId: e.application.id,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  });
  return (0, r.jsx)("div", {
    className: w.Gn,
    ref: e => {
      t.current = e
    },
    children: (0, r.jsx)(y.Gt, x(P({}, e), {
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
    searchesBots: s
  } = e;
  return s ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(I.A, {
      title: N.intl.string(N.t.PHjkRE)
    }), (0, r.jsxs)("div", {
      className: w._,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: s
        } = e;
        return (0, r.jsx)(Y, {
          context: t,
          application: i,
          location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: g.yK.SEARCH,
          resultsPosition: n,
          installOnDemand: s,
          query: a
        }, i.id)
      }), i && j.map(e => (0, r.jsx)(T.A, {}, e))]
    })]
  }) : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(I.A, {
      title: N.intl.string(N.t.shUONg)
    }), (0, r.jsxs)("div", {
      className: w.H$,
      children: [n.map((e, n) => {
        let {
          application: i,
          installOnDemand: s
        } = e;
        return (0, r.jsx)(B, {
          context: t,
          application: i,
          look: y.r0.LARGE_BANNER,
          location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: g.yK.SEARCH,
          resultsPosition: n,
          installOnDemand: s,
          query: a
        }, i.id)
      }), i && M.map(e => (0, r.jsx)(b.A, {
        look: y.r0.LARGE_BANNER
      }, e))]
    })]
  })
}

function Y(e) {
  let {
    onClickAppCard: t
  } = (0, y.Ps)(e);
  return (0, r.jsx)(S.A, {
    application: e.application,
    onClick: t,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  })
}

function W() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(I.A, {
      title: N.intl.string(N.t["0hKkS+"])
    }), (0, r.jsx)("div", {
      className: w._,
      children: L.map(e => (0, r.jsx)(T.A, {}, e))
    }), (0, r.jsx)(I.A, {
      title: N.intl.string(N.t.PHjkRE)
    }), (0, r.jsx)("div", {
      className: w._,
      children: j.map(e => (0, r.jsx)(T.A, {}, e))
    })]
  })
}