/** Chunk was on 35755 **/
n.d(t, {
  Z: () => w
}), n(47120);
var i = n(200651),
  l = n(192379),
  r = n(392711),
  o = n.n(r),
  a = n(209173),
  s = n(110924),
  c = n(367907),
  u = n(555573),
  d = n(895924),
  p = n(583027),
  m = n(177653),
  f = n(585483),
  h = n(499254),
  v = n(541099),
  y = n(827498),
  b = n(392370),
  N = n(98880),
  g = n(804307),
  x = n(520315),
  j = n(532309),
  E = n(561160),
  P = n(41558),
  C = n(106771),
  O = n(79984),
  A = n(314734),
  I = n(981631),
  _ = n(388032),
  S = n(577379);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}
let L = Array(6).fill(0).map((e, t) => t),
  Z = [, , , ].fill(0).map((e, t) => t),
  R = [, , , , ].fill(0).map((e, t) => t);

function w(e) {
  return (0, i.jsx)(M, T({}, e))
}

function M(e) {
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
  } = (0, b.pe)({
    context: t,
    query: n,
    searchesActivities: !0,
    searchesCommands: c,
    searchesBots: u
  }), {
    fetchState: N,
    applicationResults: g,
    fetchNextPage: x
  } = (0, b.Q2)({
    query: n,
    context: t,
    fetches: !0,
    pageLimit: 5,
    entrypoint: r
  });
  l.useEffect(() => {
    s && N === m.M.FETCHED && x()
  }, [x, N, s]);
  let j = null == N || N === m.M.FETCHING,
    P = l.useMemo(() => {
      let e = v.map(e => ({
          application: e,
          installOnDemand: !0
        })),
        t = new Set(v.map(e => {
          let {
            id: t
          } = e;
          return t
        }));
      return [...e, ...o().compact(g.map(e => e.type === a.s.CONNECTION || t.has(e.data.id) ? null : {
        application: e.data,
        installOnDemand: !0
      }))]
    }, [g, v]),
    C = P.length > 0,
    O = p && !C && !j;
  return d ? (0, i.jsx)(H, {}) : O ? (0, i.jsx)(E.A, {
    type: y.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: r === y._b.TEXT ? _.NW.string(_.t.LSNOYW) : _.NW.string(_.t.Clu7Qk)
  }) : (0, i.jsxs)("div", {
    children: [h && (0, i.jsx)(k, {
      context: t,
      commandResults: f,
      query: n
    }), (C || j) && (0, i.jsx)(W, {
      context: t,
      applicationResults: P,
      includePlaceholder: j,
      query: n,
      searchesBots: u
    })]
  })
}

function k(e) {
  var t, n;
  let {
    context: r,
    commandResults: o,
    query: a
  } = e, m = o.length > 4, b = l.useMemo(() => m ? o.slice(0, 4) : o, [o, m]), [N, g] = l.useState(!1), j = null !== (t = (0, s.Z)(N)) && void 0 !== t ? t : N, E = l.useCallback(() => g(e => !e), []), O = (null !== (n = (0, s.Z)(a)) && void 0 !== n ? n : a)[0] !== a[0], T = N && !O;
  l.useLayoutEffect(() => g(!1), [O]);
  let {
    ref: L,
    isTransitioning: Z,
    onTransitionEnd: R
  } = (0, x.Z)({
    key: a,
    isExpanded: T,
    durationMs: 200,
    maxAnimationHeight: A.K7
  });
  l.useEffect(() => {
    !j && N && (0, c.yw)(I.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
      section_name: y.L3.SEARCH,
      source: v.Z.entrypoint(),
      num: o.length
    })
  }, [o.length, j, N]);
  let w = T || Z,
    M = T ? P.Z.buttonTypes.VIEW_LESS : P.Z.buttonTypes.VIEW_MORE,
    k = w ? o : b;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(P.Z, {
      title: _.NW.string(_.t["0hKkS0"]),
      buttonType: M,
      onClickViewButton: m ? E : void 0
    }), (0, i.jsx)("div", {
      className: S.sectionContentContainer,
      ref: L,
      onTransitionEnd: R,
      children: k.map((e, t) => {
        let {
          command: n,
          application: l,
          section: o
        } = e;
        return (0, i.jsx)(C.Z, {
          command: n,
          application: l,
          query: a,
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
              section: o,
              location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
              triggerSection: void 0,
              queryLength: a.length,
              sectionName: y.L3.SEARCH,
              query: a,
              searchResultsPosition: t,
              source: e
            }), f.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: r.channel.id
            }))
          }
        }, n.id)
      })
    })]
  })
}

function D(e) {
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
    ref: e => l.current = e,
    children: (0, i.jsx)(N.kA, (t = T({}, e), n = n = {
      tracksImpression: !1,
      enableVideoBanner: !0
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

function W(e) {
  let {
    context: t,
    applicationResults: n,
    includePlaceholder: l,
    query: r,
    searchesBots: o
  } = e;
  return o ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(P.Z, {
      title: _.NW.string(_.t.PHjkRE)
    }), (0, i.jsxs)("div", {
      className: S.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: l,
          installOnDemand: o
        } = e;
        return (0, i.jsx)(U, {
          context: t,
          application: l,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: y.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: o,
          query: r
        }, l.id)
      }), l && Z.map(e => (0, i.jsx)(O.Z, {}, e))]
    })]
  }) : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(P.Z, {
      title: _.NW.string(_.t.shUONj)
    }), (0, i.jsxs)("div", {
      className: S.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: l,
          installOnDemand: o
        } = e;
        return (0, i.jsx)(D, {
          context: t,
          application: l,
          look: N.U4.LARGE_BANNER,
          location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: y.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: o,
          query: r
        }, l.id)
      }), l && R.map(e => (0, i.jsx)(g.Z, {
        look: N.U4.LARGE_BANNER
      }, e))]
    })]
  })
}

function U(e) {
  let t = (0, N.cG)(e);
  return (0, i.jsx)(C.Z, {
    application: e.application,
    onClick: t,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  })
}

function H() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(P.Z, {
      title: _.NW.string(_.t["0hKkS0"])
    }), (0, i.jsx)("div", {
      className: S.sectionContentContainer,
      children: L.map(e => (0, i.jsx)(O.Z, {}, e))
    }), (0, i.jsx)(P.Z, {
      title: _.NW.string(_.t.PHjkRE)
    }), (0, i.jsx)("div", {
      className: S.sectionContentContainer,
      children: Z.map(e => (0, i.jsx)(O.Z, {}, e))
    })]
  })
}