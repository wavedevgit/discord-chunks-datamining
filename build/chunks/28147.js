/** Chunk was on 35755 **/
n.d(t, {
  Z: () => k
}), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(392711),
  o = n.n(l),
  a = n(209173),
  c = n(110924),
  s = n(367907),
  d = n(555573),
  u = n(895924),
  p = n(583027),
  m = n(177653),
  f = n(585483),
  h = n(499254),
  b = n(541099),
  v = n(827498),
  C = n(392370),
  _ = n(98880),
  x = n(804307),
  y = n(520315),
  N = n(532309),
  g = n(561160),
  j = n(41558),
  P = n(106771),
  E = n(79984),
  A = n(314734),
  O = n(981631),
  I = n(388032),
  S = n(563285);

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
  R = [, , , ].fill(0).map((e, t) => t),
  w = [, , , , ].fill(0).map((e, t) => t);

function k(e) {
  return (0, i.jsx)(Z, T({}, e))
}

function Z(e) {
  let {
    context: t,
    query: n,
    entrypoint: l,
    isScrollCloseToBottom: c
  } = e, s = l === v._b.TEXT, d = l === v._b.TEXT, {
    loading: u,
    isEmptyState: p,
    commandResults: f,
    hasCommandResults: h,
    applicationResults: b
  } = (0, C.pe)({
    context: t,
    query: n,
    searchesActivities: !0,
    searchesCommands: s,
    searchesBots: d
  }), {
    fetchState: _,
    applicationResults: x,
    fetchNextPage: y
  } = (0, C.Q2)({
    query: n,
    context: t,
    fetches: !0,
    pageLimit: 5,
    entrypoint: l
  });
  r.useEffect(() => {
    c && _ === m.M.FETCHED && y()
  }, [y, _, c]);
  let N = null == _ || _ === m.M.FETCHING,
    j = r.useMemo(() => {
      let e = b.map(e => ({
          application: e,
          installOnDemand: !0
        })),
        t = new Set(b.map(e => {
          let {
            id: t
          } = e;
          return t
        }));
      return [...e, ...o().compact(x.map(e => e.type === a.s.CONNECTION || t.has(e.data.id) ? null : {
        application: e.data,
        installOnDemand: !0
      }))]
    }, [x, b]),
    P = j.length > 0,
    E = p && !P && !N;
  return u ? (0, i.jsx)(B, {}) : E ? (0, i.jsx)(g.A, {
    type: v.LG.SEARCH_EMPTY,
    searchQuery: n,
    textContent: l === v._b.TEXT ? I.NW.string(I.t.LSNOYW) : I.NW.string(I.t.Clu7Qk)
  }) : (0, i.jsxs)("div", {
    children: [h && (0, i.jsx)(M, {
      context: t,
      commandResults: f,
      query: n
    }), (P || N) && (0, i.jsx)(W, {
      context: t,
      applicationResults: j,
      includePlaceholder: N,
      query: n,
      searchesBots: d
    })]
  })
}

function M(e) {
  var t, n;
  let {
    context: l,
    commandResults: o,
    query: a
  } = e, m = o.length > 4, C = r.useMemo(() => m ? o.slice(0, 4) : o, [o, m]), [_, x] = r.useState(!1), N = null !== (t = (0, c.Z)(_)) && void 0 !== t ? t : _, g = r.useCallback(() => x(e => !e), []), E = (null !== (n = (0, c.Z)(a)) && void 0 !== n ? n : a)[0] !== a[0], T = _ && !E;
  r.useLayoutEffect(() => x(!1), [E]);
  let {
    ref: L,
    isTransitioning: R,
    onTransitionEnd: w
  } = (0, y.Z)({
    key: a,
    isExpanded: T,
    durationMs: 200,
    maxAnimationHeight: A.K7
  });
  r.useEffect(() => {
    !N && _ && (0, s.yw)(O.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
      section_name: v.L3.SEARCH,
      source: b.Z.entrypoint(),
      num: o.length
    })
  }, [o.length, N, _]);
  let k = T || R,
    Z = T ? j.Z.buttonTypes.VIEW_LESS : j.Z.buttonTypes.VIEW_MORE,
    M = k ? o : C;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(j.Z, {
      title: I.NW.string(I.t["0hKkS0"]),
      buttonType: Z,
      onClickViewButton: m ? g : void 0
    }), (0, i.jsx)("div", {
      className: S.sectionContentContainer,
      ref: L,
      onTransitionEnd: w,
      children: M.map((e, t) => {
        let {
          command: n,
          application: r,
          section: o
        } = e;
        return (0, i.jsx)(P.Z, {
          command: n,
          application: r,
          query: a,
          searchResultsPosition: t,
          onClick: () => {
            let e = b.Z.entrypoint();
            h.yT(v.ti.DISMISSED), (0, p.Mo)({
              command: n,
              location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
              sectionName: v.L3.SEARCH
            }), "channel" === l.type && (d.Po({
              channelId: l.channel.id,
              command: n,
              section: o,
              location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
              triggerSection: void 0,
              queryLength: a.length,
              sectionName: v.L3.SEARCH,
              query: a,
              searchResultsPosition: t,
              source: e
            }), f.S.dispatch(O.CkL.FOCUS_CHANNEL_TEXT_AREA, {
              channelId: l.channel.id
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
    trackSearchResultsItemImpressionRef: r
  } = (0, N.Z)({
    applicationId: e.application.id,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  });
  return (0, i.jsx)("div", {
    className: S.searchOpenAppDetailAppCard,
    ref: e => r.current = e,
    children: (0, i.jsx)(_.kA, (t = T({}, e), n = n = {
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
    includePlaceholder: r,
    query: l,
    searchesBots: o
  } = e;
  return o ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(j.Z, {
      title: I.NW.string(I.t.PHjkRE)
    }), (0, i.jsxs)("div", {
      className: S.sectionContentContainer,
      children: [n.map((e, n) => {
        let {
          application: r,
          installOnDemand: o
        } = e;
        return (0, i.jsx)(U, {
          context: t,
          application: r,
          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: v.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: o,
          query: l
        }, r.id)
      }), r && R.map(e => (0, i.jsx)(E.Z, {}, e))]
    })]
  }) : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(j.Z, {
      title: I.NW.string(I.t.shUONj)
    }), (0, i.jsxs)("div", {
      className: S.sectionActivitiesContentContainer,
      children: [n.map((e, n) => {
        let {
          application: r,
          installOnDemand: o
        } = e;
        return (0, i.jsx)(D, {
          context: t,
          application: r,
          look: _.U4.LARGE_BANNER,
          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
          sectionName: v.L3.SEARCH,
          resultsPosition: n,
          installOnDemand: o,
          query: l
        }, r.id)
      }), r && w.map(e => (0, i.jsx)(x.Z, {
        look: _.U4.LARGE_BANNER
      }, e))]
    })]
  })
}

function U(e) {
  let t = (0, _.cG)(e);
  return (0, i.jsx)(P.Z, {
    application: e.application,
    onClick: t,
    query: e.query,
    searchResultsPosition: e.resultsPosition
  })
}

function B() {
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(j.Z, {
      title: I.NW.string(I.t["0hKkS0"])
    }), (0, i.jsx)("div", {
      className: S.sectionContentContainer,
      children: L.map(e => (0, i.jsx)(E.Z, {}, e))
    }), (0, i.jsx)(j.Z, {
      title: I.NW.string(I.t.PHjkRE)
    }), (0, i.jsx)("div", {
      className: S.sectionContentContainer,
      children: R.map(e => (0, i.jsx)(E.Z, {}, e))
    })]
  })
}