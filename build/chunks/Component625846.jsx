/** Chunk was on 46875 **/
/** chunk id: 625846, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => ey
}), require("./747238.js"), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk756287 = require("./756287.js"),
  o = require.n(Chunk756287),
  Chunk942381 = require("./942381.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk741918 = require("./741918.js"),
  Chunk371444 = require("./371444.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk738876 = require("./738876.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk47167 = require("./47167.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk870136 = require("./870136.js"),
  Chunk575293 = require("./575293.jsx"),
  Chunk857071 = require("./857071.js"),
  Chunk228098 = require("./228098.js"),
  Chunk157259 = require("./157259.jsx"),
  Chunk212007 = require("./212007.js"),
  Chunk376708 = require("./376708.js"),
  Chunk715757 = require("./715757.js"),
  Chunk954540 = require("./954540.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk940382 = require("./940382.js"),
  Chunk970278 = require("./970278.js"),
  Chunk424798 = require("./424798.js"),
  Chunk406704 = require("./406704.js"),
  Chunk747926 = require("./747926.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk834942 = require("./834942.js"),
  Chunk309010 = require("./309010.js"),
  Chunk522602 = require("./522602.js"),
  Chunk531685 = require("./531685.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk947094 = require("./947094.js"),
  Chunk919577 = require("./919577.js"),
  Chunk207777 = require("./207777.js"),
  Chunk422844 = require("./422844.js"),
  Chunk435470 = require("./435470.js"),
  Chunk706849 = require("./706849.js"),
  Chunk613999 = require("./613999.js"),
  Chunk853742 = require("./853742.js"),
  Chunk978733 = require("./978733.jsx"),
  Chunk696583 = require("./696583.jsx"),
  Chunk6208 = require("./6208.jsx"),
  Chunk835369 = require("./835369.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk559351 = require("./559351.jsx"),
  Chunk891046 = require("./891046.jsx"),
  Chunk133348 = require("./133348.jsx"),
  Chunk376310 = require("./376310.jsx"),
  Chunk414368 = require("./414368.js"),
  Chunk123653 = require("./123653.jsx"),
  Chunk337666 = require("./337666.js"),
  Chunk848551 = require("./848551.jsx"),
  Chunk375907 = require("./375907.js"),
  Chunk652215 = require("./652215.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk1004 = require("./1004.js");

function ej(e) {
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

function ev(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function e_(e, t) {
  if (null == e) return {};
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function ey(e) {
  let {
    channel: t,
    guild: n,
    sidebarState: l
  } = e;
  return (0, r.jsx)(ei.Cp, {
    channel: t,
    children: (0, r.jsx)(ew, {
      channel: t,
      guild: n,
      sidebarState: l
    })
  }, t.id)
}
let eA = new Chunk414368.JT({
  minWidth: 320,
  maxWidth: 450,
  gap: 16
});

function eC(e) {
  return "forum-grid-header-section-".concat(e)
}

function eO(e) {
  let {
    itemRole: t,
    coords: n,
    section: l
  } = e;
  return (0, r.jsx)("div", {
    className: a()(eb.card, eb.archivedDividerRow, eb.columnsSpan),
    style: n,
    "data-item-role": t,
    children: (0, r.jsx)("div", {
      className: eb.emptyMainCard,
      children: (0, r.jsx)(p.Heading, {
        variant: "eyebrow",
        className: eb.archivedDivider,
        id: eC(l),
        children: ep.intl.string(ep.t["3+LO1w"])
      })
    })
  }, "section-divider")
}

function eT(e) {
  let {
    section: t,
    coords: n,
    key: l,
    isShowingSearchResult: i,
    hasActiveThreads: a
  } = e;
  return () => 2 === t && !i && a ? (0, r.jsx)(eO, {
    section: t,
    coords: null == n ? true : ev(ej({}, n), {
      position: "absolute"
    }),
    itemRole: "section"
  }, l) : null
}

function eS(e, t) {
  return "card-".concat(e, "-").concat(t)
}

function eN(e) {
  if ("string" == typeof e) {
    let t = e.match(/card-{\d+}-({\d+})$/);
    return null == t ? null : t[1]
  }
  return null
}

function ew(e) {
  let {
    channel: t,
    sidebarState: n
  } = e, {
    editorHeight: i,
    editorAdditionRowHeight: s,
    listViewCardHeights: o,
    formOpen: u,
    name: m
  } = (0, ei.kU)(e => {
    let {
      editorHeight: t,
      editorAdditionRowHeight: n,
      listViewCardHeights: r,
      formOpen: l,
      cardHeightVersion: i,
      name: a
    } = e;
    return {
      editorHeight: t,
      editorAdditionRowHeight: n,
      listViewCardHeights: r,
      formOpen: l,
      name: a,
      cardHeightVersion: i
    }
  }, c.x), {
    activeThreadIds: f,
    archivedThreadIds: x,
    searchResults: j,
    canLoadMore: y,
    loadMore: A,
    activeThreadsLoading: C,
    archivedThreadsLoading: O,
    loading: I,
    isSearchLoading: L,
    layoutType: H
  } = function(e) {
    let {
      sortOrder: t,
      tagFilter: n,
      layoutType: r,
      tagSetting: l
    } = (0, Q.R)(e.id), i = (0, Y.V3)({
      channel: e,
      sortOrder: t,
      tagFilter: n,
      tagSetting: l,
      shouldAutomaticallyAck: true
    }), a = (0, g.bG)([M.A, T.A], () => {
      let t = M.A.hasLoaded(e.guild_id),
        n = T.A.isLurking(e.guild_id);
      return !t && !n
    }), {
      threadIds: s,
      canLoadMore: o,
      loadMore: c,
      loading: d
    } = (0, D.Fr)(e, t, n, l), {
      searchResults: u,
      isSearchLoading: m
    } = (0, Y.cA)({
      channelId: e.id
    });
    return (0, Y.yz)(e, t, n, l), {
      activeThreadIds: i,
      archivedThreadIds: s,
      searchResults: u,
      canLoadMore: o,
      loadMore: c,
      loading: a || d || m,
      archivedThreadsLoading: d,
      activeThreadsLoading: a,
      isSearchLoading: m,
      layoutType: r
    }
  }(t), V = f.length > 0, K = V || x.length > 0, W = (0, S.A)(t), {
    tagFilter: X,
    tagSetting: en
  } = (0, Q.R)(t.id);
  (0, Y.o7)(t, X, en, u), (0, v.Ay)(() => {
    !u && m.length > 0 && J.A.updateForumSearchQuery(t.id, m)
  });
  let er = (0, Y.O3)(t),
    ea = (0, Y.An)(t),
    eo = l.useRef(null),
    {
      observePostVisibilityAnalytics: ec
    } = function(e) {
      let {
        guildId: t,
        channelId: n,
        scrollerRef: r
      } = e;
      Z.A.useForumChannelSeenManager({
        guildId: t,
        channelId: n
      });
      let i = l.useRef(null),
        a = l.useCallback((e, t) => {
          for (let n of t) {
            let t = n.target.dataset.itemId;
            if (null == t) return;
            let r = Date.now();
            n.intersectionRatio >= .5 ? (0, $.xx)(e, t, r) : (0, $.O_)(e, t, r)
          }
        }, []);
      return l.useEffect(() => {
        var e;
        let t = null == (e = r.current) ? true : e.getScrollerNode();
        if (null != t) return i.current = new IntersectionObserver(e => a(n, e), {
          root: t,
          rootMargin: "0px 100000px 0px 100000px",
          threshold: .5
        }), () => {
          var e;
          null == (e = i.current) || e.disconnect(), i.current = null
        }
      }, [n, a, r]), {
        observePostVisibilityAnalytics: l.useCallback((e, t) => {
          var r;
          null == e ? (0, $.O_)(n, t, Date.now()) : null == (r = i.current) || r.observe(e)
        }, [n])
      }
    }({
      scrollerRef: eo,
      channelId: t.id,
      guildId: t.guild_id
    }),
    eu = H === h.C.GRID,
    {
      searchQuery: ey
    } = (0, Y.cA)({
      channelId: t.id
    }),
    eO = null != j && null != ey && ey.length > 0,
    ew = l.useRef(null),
    {
      containerRef: eR,
      containerWidth: eM
    } = (0, em.A)();
  l.useEffect(() => {
    if (null == ew.current && null != t.id) {
      let e = U.Ay.getSidebarState(t.id);
      null != e && e.type === k.PE.VIEW_THREAD && (ew.current = e.channelId)
    }
  }, [t.id]);
  let {
    columns: eD
  } = l.useMemo(() => eu ? eA.getRenderOptions(eM) : ed.CV, [eu, eM]), eL = l.useMemo(() => I ? Math.round((window.innerHeight - 200) / 118) : 0, [I]), {
    showResolvedFlags: eF
  } = (0, w.T)(t.id), eU = t.isModeratorReportChannel(), eG = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, ed.iX)(eA.getWidth(eM))) * eD;
    return C ? e : 0
  }, [eM, eD, C]), ez = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, ed.iX)(eA.getWidth(eM))) * eD;
    return O ? e : 0
  }, [eM, eD, O]), eH = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, ed.iX)(eA.getWidth(eM))) * eD;
    return L && eO ? e : 0
  }, [eM, eD, L, eO]), eB = l.useMemo(() => {
    if (eu)
      if (!er && eO) return [1, 0];
      else if (!ea) return [1, f.length + eG, 0];
    else if (eO) return [1, j.length + eH, 0];
    else if (eU && !eF) return [1, f.length + eG, 0];
    else return [1, f.length + eG, x.length + ez];
    if (!er && eO) return [1, 1];
    if (!ea) return [1, f.length, 1];
    if (eO) return [1, j.length, 0, eL];
    if (eU && !eF) return [1, f.length, 0, eL];
    else return [1, f.length, x.length, eL]
  }, [eu, eO, f.length, x.length, er, ea, eL, j, eG, ez, eH, eF, eU]), eV = l.useMemo(() => !er && eO ? [
    [],
    []
  ] : ea ? eO ? [
    [], j, [],
    []
  ] : eU && !eF ? [
    [], f, [],
    []
  ] : [
    [], f, x, []
  ] : [
    [], f, []
  ], [eO, er, ea, j, f, x, eF, eU]), eK = l.useCallback((e, n) => {
    (0, ee.Ml)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: e.id,
      location: {
        page: ef.liQ.GUILD_CHANNEL,
        section: ef.JJy.FORUM_CHANNEL_POST
      }
    }), n ? (0, R.N9)(e, {
      source: ex.H9.BROWSER
    }) : (ew.current = e.id, (0, F.JA)(e))
  }, [t.guild_id, t.id, ew]), [eW, eq] = l.useState(i + s - 24), eJ = l.useCallback((e, n, l) => 0 === e ? (0, r.jsx)(ek, {
    channel: t,
    isEmpty: !V,
    isSearchLoading: L,
    numResults: null == j ? true : j.length,
    coords: n,
    onHeightChange: eq,
    children: !I && (0, r.jsx)(et.A, {
      channel: t,
      hasAnyThread: K,
      hasActiveThreads: V
    }, t.id)
  }, "forum-channel-header") : 2 !== e || ea ? 1 === e && eO && !er ? (0, r.jsx)(eI, {
    channel: t,
    coords: n
  }, "archive-or-search-result") : l() : (0, r.jsx)(eE, {
    channel: t,
    coords: n
  }, "archived-missing-reading-history-perm"), [eO, ea, j, er, t, V, L, I, K]), eX = (0, g.bG)([q.A], () => q.A.hasHidden(t.id)), eQ = {
    editorHeight: i,
    isGridLayout: eu
  }, eY = l.useRef(eQ);
  l.useEffect(() => {
    eY.current = eQ
  }), l.useEffect(() => {
    var e, t;
    let {
      editorHeight: n,
      isGridLayout: r
    } = eY.current, l = r ? e9 : eo, i = null == (e = l.current) ? true : e.getScrollerState();
    null != i && !eX && i.scrollTop > n && (null == (t = l.current) || t.scrollTo({
      to: 0
    }))
  }, [eX]);
  let {
    updateListScrollerRef: eZ,
    renderListSection: e$,
    renderListItem: e0,
    getListSectionHeight: e3,
    getListItemHeight: e1
  } = function(e) {
    let {
      listRef: t,
      hasActiveThreads: n,
      threadIdsBySection: i,
      listViewCardHeights: s,
      editorHeight: o,
      editorAdditionRowHeight: c,
      renderSectionOrItem: d,
      goToThread: u,
      observePostVisibilityAnalytics: m,
      isShowingSearchResult: h
    } = e, f = (0, g.bG)([B.A], () => B.A.getChannelId()), x = l.useCallback(e => n => {
      var r;
      t.current = n, e.current = null != (r = null == n ? true : n.getScrollerNode()) ? r : null
    }, [t]), b = l.useCallback(e => eT({
      section: e.section,
      isShowingSearchResult: h,
      hasActiveThreads: n
    })(), [n, h]), j = l.useCallback(e => d(e.section, true, () => {
      if (3 === e.section) return __OVERLAY__ ? null : (0, r.jsx)("div", {
        "data-item-role": "item",
        className: a()(eb.loadingCard, eb["loadingCard-".concat(e.row % 3)])
      }, "loading-".concat(e.row));
      let t = i[e.section][e.row],
        n = null != f && (0, E.iU)(f) ? P.Ay : el.Ay;
      return (0, r.jsx)("li", {
        className: eb.card,
        "data-item-role": "item",
        children: (0, r.jsx)(p.Fmo, {
          children: (0, r.jsx)(n, {
            className: eb.mainCard,
            threadId: t,
            goToThread: u,
            observePostVisibilityAnalytics: m
          })
        })
      }, "".concat(e.section, "-").concat(t))
    }), [d, i, f, u, m]), v = l.useCallback((e, t) => {
      if (0 === e) return o + c;
      let n = s[i[e][t]];
      return null == n ? 104 : n + 8
    }, [i, s, o, c]);
    return {
      updateListScrollerRef: x,
      renderListSection: b,
      renderListItem: j,
      getListSectionHeight: l.useCallback(e => 2 === e && n ? 40 : 0, [n]),
      getListItemHeight: v
    }
  }({
    listRef: eo,
    hasActiveThreads: V,
    threadIdsBySection: eV,
    listViewCardHeights: o,
    editorHeight: i,
    editorAdditionRowHeight: s,
    renderSectionOrItem: eJ,
    goToThread: eK,
    observePostVisibilityAnalytics: ec,
    isShowingSearchResult: eO
  }), e9 = l.useRef(null), {
    updateMasonryListScrollerRef: e4,
    getItemKey: e8,
    renderGridSection: e6,
    renderGridItem: e7,
    getGridSectionHeight: e5,
    getSectionProps: e2,
    handleGridFocus: te
  } = function(e) {
    let {
      masonryListScrollerRef: t,
      threadIdsBySection: n,
      goToThread: i,
      renderSectionOrItem: s,
      hasActiveThreads: o,
      isShowingSearchResult: c,
      canSearchForumPosts: d,
      canViewArchivedPosts: u,
      observePostVisibilityAnalytics: m,
      focusedThreadId: h,
      headerHeight: g
    } = e, f = l.useRef(null), x = l.useCallback(e => {
      t.current = e, f.current = null == e ? true : e.getScrollerNode()
    }, [t]), p = l.useCallback((e, n) => {
      let {
        current: r
      } = t;
      if (null == r) return;
      let l = document.querySelector(e);
      if (null == l) return;
      let i = r.getCoordsMap()[n],
        a = null != i ? i.height + 20 : 200;
      r.scrollIntoViewNode({
        node: l,
        padding: a,
        callback() {
          requestAnimationFrame(() => {
            var t;
            null == (t = document.querySelector(e)) || t.focus({
              preventScroll: true
            })
          })
        }
      }), h.current = eN(n)
    }, [t, h]), b = l.useCallback(e => {
      let t = eN(e);
      if (null == t) return;
      let n = G.A.getChannel(t);
      null != n && i(n, true)
    }, [i]), j = l.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
      if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
      {
        let r = n[e][t];
        return null == r ? eS(e, t) : eS(e, r)
      }
    }, [n]), v = l.useCallback((e, t, n) => s(e, t, eT({
      section: e,
      coords: t,
      key: n,
      isShowingSearchResult: c,
      hasActiveThreads: o
    })), [s, o, c]), _ = l.useCallback(e => 0 === e ? {} : {
      role: "grid",
      "aria-labelledby": "#".concat(eC(e))
    }, []);
    return {
      updateMasonryListScrollerRef: x,
      masonryListContainerRef: f,
      focusedThreadId: h,
      handleGridFocus: p,
      handleGridSelect: b,
      getItemKey: j,
      renderGridSection: v,
      renderGridItem: l.useCallback((e, t, l, s, o) => {
        if (0 === e) return null;
        let c = n[e][t];
        return null != c ? (0, r.jsx)(es.A, {
          id: "".concat(s),
          threadId: c,
          className: a()(eb.card, eb.mainCard),
          goToThread: i,
          observePostVisibilityAnalytics: m,
          coords: l,
          gridCoords: o.coordinates[s],
          gridSectionBoundaries: o.boundaries
        }, s) : __OVERLAY__ ? null : (0, r.jsx)("div", {
          style: ej({}, l),
          "data-item-role": "item",
          className: a()(eb.loadingCard, eb["loadingCard-".concat(t % 3)])
        }, s)
      }, [n, i, m]),
      getSectionProps: _,
      getGridSectionHeight: l.useCallback(e => 0 === e ? g - 8 - 24 : 2 === e ? o || !u ? 40 : 0 : 1 === e && c && !d ? 40 : 0, [g, c, d, o, u])
    }
  }({
    masonryListScrollerRef: e9,
    threadIdsBySection: eV,
    goToThread: eK,
    renderSectionOrItem: eJ,
    hasActiveThreads: V,
    isShowingSearchResult: eO,
    canSearchForumPosts: er,
    canViewArchivedPosts: ea,
    observePostVisibilityAnalytics: ec,
    focusedThreadId: ew,
    headerHeight: eW
  });
  ! function(e) {
    let {
      masonryListScrollerRef: t,
      containerWidth: n,
      isGridLayout: r,
      threadIdsBySection: i,
      focusedThreadId: a,
      parentId: s
    } = e;
    l.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          if (null == t.current || null == a.current) return;
          let e = a.current;
          if ("string" != typeof e) return;
          null == U.Ay.getSidebarState(s) && (a.current = null);
          let n = i.findIndex(t => t.find(t => t === e)),
            r = t.current.getCoordsMap(),
            l = r["__section__".concat(n)],
            o = r[eS(n, e)];
          null != l && null != o && t.current.scrollIntoViewRect({
            start: l.top + o.top - 100,
            end: l.top + o.top + o.height + 50
          })
        }, 0);
        return () => clearTimeout(e)
      }
    }, [s, n, r, i, a, t])
  }({
    masonryListScrollerRef: e9,
    containerWidth: eM,
    isGridLayout: eu,
    threadIdsBySection: eV,
    parentId: t.id,
    focusedThreadId: ew
  });
  let tt = l.useCallback(() => {
      var e, n;
      if (eO) return;
      let r = eu ? null == (e = e9.current) ? true : e.getScrollerState() : null == (n = eo.current) ? true : n.getScrollerState();
      if (null == r) return;
      (0, ee.pO)({
        guildId: t.guild_id,
        channelId: t.id
      });
      let l = r.scrollTop + r.offsetHeight;
      r.scrollHeight - l < (eu ? Math.max(200, (0, ed.iX)(eM)) : 200) && A()
    }, [eO, eu, t.guild_id, t.id, eM, A]),
    tn = (0, g.bG)([_.A], () => _.A.keyboardModeEnabled),
    tr = (0, ei.kU)(e => e.titleFocused || e.bodyFocused, c.x),
    tl = (0, eh.Ay)({
      id: "forum-grid-view",
      isEnabled: eu && tn && !tr,
      setFocus: te
    }),
    ti = (0, eg.A)({
      listRef: eo,
      padding: 96,
      isEnabled: !eu && tn && !tr,
      channel: t
    }),
    ta = l.useCallback((e, n, r) => 0 === e ? 0 : (0, ed.iX)(r, t.isMediaChannel() ? ed.PL.SIXTEEN_BY_NINE : ed.PL.THREE_BY_TWO), [t]),
    ts = tl.containerProps,
    {
      ref: to
    } = ts,
    tc = e_(ts, ["ref"]),
    td = U.Ay.getSidebarState(t.id),
    tu = null != td && (0, U.JU)(td),
    tm = (0, g.bG)([U.Ay], () => U.Ay.getSection(t.id)) === ef.YvQ.MEMBERS;
  return (0, r.jsx)("div", {
    className: eb.container,
    ref: eR,
    "data-member-list-open": tm,
    children: (0, r.jsx)(p.skg, {
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [u && (0, r.jsx)(b.A, {
          channel: t,
          draftType: z.C.FirstThreadMessage,
          className: eb.uploadArea,
          style: {
            right: tu && (null == n ? true : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0
          }
        }), (0, r.jsx)(eP, {
          channel: t
        }), (0, r.jsx)(p.AC4, {
          children: (0, r.jsx)(p.H, {
            children: ep.intl.string(ep.t.B2panI)
          })
        }), W ? (0, r.jsx)("div", {
          className: eb.optInNotice,
          children: (0, r.jsx)(N.A, {
            channel: t
          })
        }) : null, eu ? (0, r.jsx)(eh.JR, {
          navigator: tl,
          children: (0, r.jsx)(p.a0_, ej({
            ref: e => {
              var t;
              to.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null, e4(e)
            },
            itemGutter: 16,
            padding: 24,
            className: eb.grid,
            columns: eD,
            sections: eB,
            getItemKey: e8,
            getSectionHeight: e5,
            getItemHeight: ta,
            renderSection: e6,
            renderItem: e7,
            getSectionProps: e2,
            onScroll: y ? tt : true,
            chunkSize: 350
          }, tc, e), H)
        }) : (0, r.jsx)(d.hD, {
          navigator: ti,
          children: (0, r.jsx)(d.PR, {
            children: t => {
              let {
                ref: n
              } = t, l = e_(t, ["ref"]);
              return (0, r.jsx)(p.Eie, ev(ej({
                ref: eZ(n),
                className: eb.list,
                sections: eB,
                sectionHeight: e3,
                rowHeight: e1,
                renderRow: e0,
                renderSection: e$,
                chunkSize: 150,
                onScroll: y ? tt : true,
                paddingBottom: 24
              }, l, e), {
                innerRole: "list"
              }), H)
            }
          })
        })]
      })
    })
  })
}

function eE(e) {
  let {
    channel: t,
    coords: n
  } = e, l = (0, y.Ay)(t);
  return (0, r.jsx)("div", {
    className: a()(eb.missingReadHistoryPermission, eb.columnsSpan),
    style: n,
    children: (0, r.jsx)(p.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: ep.intl.format(ep.t.TycmzM, {
        channelName: l
      })
    })
  })
}

function eI(e) {
  let {
    channel: t,
    coords: n
  } = e, l = (0, y.Ay)(t);
  return (0, r.jsx)("div", {
    className: a()(eb.missingReadHistoryPermission, eb.columnsSpan),
    style: n,
    children: (0, r.jsx)(p.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: ep.intl.format(ep.t.OWZJdS, {
        channelName: l
      })
    })
  })
}

function eP(e) {
  let {
    channel: t
  } = e, n = l.useCallback(() => {
    J.A.resort(t.id)
  }, [t]), i = (0, g.bG)([X.A], () => X.A.getNewThreadCount());
  return 0 === i ? null : (0, r.jsx)(p.DUT, {
    className: eb.newPostsButton,
    onClick: n,
    children: (0, r.jsx)(p.Text, {
      color: "text-brand",
      variant: "text-md/medium",
      children: ep.intl.format(ep.t.ue1qfM, {
        count: i
      })
    })
  })
}

function eR() {
  return Promise.resolve()
}

function ek(e) {
  var t, n, i;
  let s, b, v, {
      channel: y,
      isEmpty: T,
      isSearchLoading: S,
      numResults: N,
      children: w,
      coords: P,
      onHeightChange: R
    } = e,
    {
      name: k,
      formOpen: M,
      titleFocused: D,
      hasClickedForm: F,
      textAreaState: U,
      onboardingExpanded: G,
      setEditorAdditionRowHeight: B
    } = (0, ei.kU)(e => {
      let {
        name: t,
        formOpen: n,
        titleFocused: r,
        hasClickedForm: l,
        textAreaState: i,
        onboardingExpanded: a,
        setEditorAdditionRowHeight: s
      } = e;
      return {
        name: t,
        formOpen: n,
        titleFocused: r,
        hasClickedForm: l,
        textAreaState: i,
        onboardingExpanded: a,
        setEditorAdditionRowHeight: s
      }
    }, c.x),
    {
      tagFilter: q,
      layoutType: X
    } = (0, Q.R)(y.id),
    Z = (0, ei.ST)(),
    $ = (0, Q.p)(),
    et = (0, g.bG)([H.A], () => H.A.canChatInGuild(y.guild_id)),
    el = (0, Y.S4)(y),
    es = (0, L.AI)(y),
    [eo, ed] = l.useState(es),
    [, em] = (0, C.c)(null != (t = y.getGuildId()) ? t : true),
    eh = (0, I.V)(y),
    eg = et && (es || eo && em) && !eh,
    ex = y.isMediaChannel();
  l.useEffect(() => {
    es && ed(true)
  }, [es]);
  let {
    ref: ey,
    height: eA
  } = (0, j.Ay)();
  l.useEffect(() => {
    null != eA && R(eA)
  }, [R, eA]);
  let eC = l.useCallback(() => {
    o()(() => {
      null != ey.current && Z.getState().setEditorHeight(ey.current.offsetHeight)
    })
  }, [ey, Z]);
  l.useLayoutEffect(eC, [eC, T, eg, G]), (0, W.Vo)({
    event: ef.jej.REMEASURE_TARGET,
    handler: eC
  });
  let eO = (0, g.bG)([V.A], () => V.A.getUploads(y.id, z.C.FirstThreadMessage)),
    eT = (0, Y.Hv)(y),
    eS = l.useRef(null),
    eN = l.useRef(null),
    [ew, eE] = l.useState(0),
    {
      width: eI
    } = (0, g.bG)([K.A], () => K.A.windowSize()),
    eP = null == (i = eS.current) || null == (n = i.getBoundingClientRect()) ? true : n.width,
    ek = l.useRef(null),
    eD = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    let t = eN.current,
      n = null == t || null == (e = t.children) ? true : e[0];
    if (null != eS.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = eS.current.getBoundingClientRect(), r = 0;
      for (let l of n.children) {
        let {
          right: n,
          top: i,
          height: a
        } = l.getBoundingClientRect();
        if (i - t > a) break;
        n - e > r && (r = n - e)
      }
      eE(r)
    }
  }, [y.availableTags, eI, eP, q]);
  let eL = k.length > 0 && !M && (S || null != N),
    eF = !__OVERLAY__ && !F && !M && D && (0 === U.textValue.trim().length || U.textValue.trim() === eT) && 0 === eO.length && !eh;
  l.useLayoutEffect(() => {
    let e = eL || eF;
    if (!e) return B(0);
    null != ek.current && B(e ? ek.current.clientHeight : 0)
  }, [B, eL, eF, ek]);
  let eU = (0, u.Ay)({
      id: "".concat(y.id, "-tags-navigator"),
      isEnabled: true,
      wrap: true,
      scrollToStart: eR,
      scrollToEnd: eR,
      orientation: m.Gl.HORIZONTAL
    }),
    eG = (0, d.rm)("forum-channel-header"),
    {
      role: ez,
      onFocus: eH
    } = eG,
    eB = e_(eG, ["role", "onFocus"]),
    eV = l.useRef(null),
    eK = (s = l.useRef(false), b = (0, g.bG)([_.A], () => _.A.keyboardModeEnabled), v = l.useCallback(e => {
      s.current = e.shiftKey
    }, [s]), l.useLayoutEffect(() => (b ? window.addEventListener("keydown", v) : window.removeEventListener("keydown", v), () => window.removeEventListener("keydown", v)), [b, v]), s),
    eW = l.useCallback(e => {
      if (eH(), e.target === ey.current && !eK.current) {
        var t;
        null == (t = eV.current) || t.focus()
      }
    }, [eH, ey, eK]),
    eq = l.useMemo(() => eh ? (0, E.Yj)(y.availableTags) : y.availableTags, [y.availableTags, eh]);
  return (0, r.jsx)("div", ev(ej({
    className: a()(eb.card, eb.headerRow, eb.columnsSpan),
    ref: ey,
    onFocus: eW
  }, eB), {
    style: ev(ej({}, P), {
      position: X === h.C.GRID ? "absolute" : "static",
      height: "auto"
    }),
    children: (0, r.jsxs)(W.Ah, {
      children: [null != y.guild_id ? (0, r.jsx)(O.A, {
        className: a()(eb.newMemberBanner, {
          [eb.gridViewBanner]: X === h.C.GRID
        }),
        guildId: y.guild_id,
        channel: y
      }) : null, (0, r.jsx)("div", {
        className: a()(eb.mainCard, eb.header, {
          [eb.headerWithMatchingPosts]: eL || eF
        }),
        children: (0, r.jsx)(ea.A, {
          parentChannel: y,
          onChange: eC,
          isSearchLoading: S,
          numResults: N,
          canCreatePost: eg,
          inputRef: eV
        })
      }), (eL || eF) && (0, r.jsxs)("div", {
        className: eb.matchingPostsRow,
        ref: ek,
        children: [eL && (0, r.jsxs)("div", {
          className: eb.matchingPosts,
          children: [(0, r.jsx)(p.Heading, {
            variant: "text-xs/normal",
            color: "text-default",
            children: S ? ep.intl.string(ep.t["/9i3qq"]) : 0 === N ? ep.intl.string(ep.t.DbgHxi) : ep.intl.formatToPlainString(ep.t["tBz/8b"], {
              numPosts: null != N ? N : "",
              query: k
            })
          }), !S && (0, r.jsx)(p.DUT, {
            onClick: () => {
              (0, ee.hT)({
                guildId: y.guild_id,
                channelId: y.id
              }), J.A.clearForumSearch(y.id), Z.getState().setName("")
            },
            children: (0, r.jsx)(p.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              className: eb.clear,
              children: ep.intl.string(ep.t.VkKicb)
            })
          })]
        }), (0, r.jsx)("div", {
          className: eb.tagsSpacer
        }), eF ? eg ? (0, r.jsxs)("div", {
          className: eb.startPostHelp,
          children: [(0, r.jsx)(p.e7I, {
            shortcut: "SHIFT",
            className: eb.keyboardShortcut
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: "+"
          }), (0, r.jsx)(p.e7I, {
            shortcut: "ENTER",
            className: eb.keyboardShortcut
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: ep.intl.string(ep.t.ZvJ0yh)
          })]
        }) : (0, r.jsxs)("div", {
          className: eb.startPostHelp,
          children: [(0, r.jsx)(p.EpV, {
            size: "custom",
            color: "currentColor",
            height: 14,
            width: 14,
            className: eb.warnIcon
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: ep.intl.string(ep.t.iyzwnD)
          })]
        }) : null]
      }), (0, r.jsx)(en.A, {
        channel: y,
        onChange: eC
      }), (0, r.jsxs)("div", {
        className: eb.tagsContainer,
        ref: eS,
        children: [(0, r.jsx)(eM, {
          channel: y
        }), eq.length > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: eb.divider
          }), (0, r.jsx)("div", {
            className: eb.tagList,
            ref: eN,
            children: (0, r.jsx)(d.hD, {
              navigator: eU,
              children: (0, r.jsx)(d.PR, {
                children: e => {
                  let {
                    ref: t
                  } = e, n = e_(e, ["ref"]);
                  return (0, r.jsx)("div", ev(ej({
                    className: eb.tagListInner,
                    ref: t
                  }, n), {
                    children: eq.map(e => (0, r.jsx)(ec.A, {
                      tag: e,
                      onClick: () => {
                        var t;
                        return t = e.id, void((0, ee.UA)({
                          guildId: y.guild_id,
                          channelId: y.id,
                          tagId: t,
                          filterTagIds: Array.from(q),
                          added: !q.has(t),
                          location: {
                            page: ef.liQ.GUILD_CHANNEL,
                            section: ef.JJy.FORUM_CHANNEL_HEADER,
                            object: ef.ZSU.CHANNEL_TAG
                          }
                        }), $.getState().toggleTagFilter(y.id, t))
                      },
                      selected: q.has(e.id)
                    }, e.id))
                  }))
                }
              })
            })
          }), (0, r.jsx)(p.YNO, {
            targetElementRef: eD,
            renderPopout: e => {
              let {
                closePopout: t,
                setPopoutRef: n
              } = e;
              return (0, r.jsx)(eu.A, {
                channel: y,
                closePopout: t,
                setPopoutRef: n
              })
            },
            position: "bottom",
            align: "right",
            children: (e, t) => {
              let {
                isShown: n
              } = t;
              return (0, r.jsxs)(x.$n, ev(ej({}, e), {
                "data-migration-pending": true,
                buttonRef: eD,
                size: x.$n.Sizes.MIN,
                color: x.$n.Colors.CUSTOM,
                className: a()(eb.tagsButton, {
                  [eb.tagsButtonWithCount]: q.size > 0
                }),
                style: {
                  left: ew
                },
                innerClassName: eb.tagsButtonInner,
                "aria-label": q.size > 0 ? ep.intl.string(ep.t.IkpM1T) : ep.intl.string(ep.t["9vKK/N"]),
                children: [q.size > 0 ? (0, r.jsx)("div", {
                  className: eb.countContainer,
                  children: (0, r.jsx)(p.Text, {
                    className: eb.countText,
                    color: "none",
                    variant: "text-xs/medium",
                    children: q.size
                  })
                }) : ep.intl.string(ep.t.fZ8hzm), n ? (0, r.jsx)(p.tN5, {
                  size: "custom",
                  color: "currentColor",
                  width: 20
                }) : (0, r.jsx)(p.abt, {
                  size: "custom",
                  color: "currentColor",
                  width: 20
                })]
              }))
            }
          }), (0, r.jsxs)(x.$n, {
            "data-migration-pending": true,
            size: x.$n.Sizes.MIN,
            color: x.$n.Colors.CUSTOM,
            className: a()(eb.tagsButton, eb.tagsButtonPlaceholder),
            innerClassName: eb.tagsButtonInner,
            "aria-label": ep.intl.string(ep.t.IkpM1T),
            children: [q.size > 0 ? (0, r.jsx)("div", {
              className: eb.countContainer,
              children: (0, r.jsx)(p.Text, {
                className: eb.countText,
                color: "none",
                variant: "text-xs/medium",
                children: q.size
              })
            }) : null, (0, r.jsx)(p.tN5, {
              size: "custom",
              color: "currentColor",
              width: 24
            })]
          })]
        }) : null]
      }), w, el && !ex && !eh && (0, r.jsx)(A.Ay, {
        contentTypes: [f.M.FORUM_CHANNEL_HELPER_CARD],
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          return t === f.M.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(er.A, {
            onDismiss: n
          }) : null
        }
      })]
    })
  }), "create-form")
}

function eM(e) {
  let {
    channel: t
  } = e, n = t.isMediaChannel(), i = l.useRef(null);
  return (0, r.jsx)(p.YNO, {
    targetElementRef: i,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(eo.A, {
        channel: t,
        closePopout: n
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, r.jsxs)(x.$n, ev(ej({}, e), {
        "data-migration-pending": true,
        buttonRef: i,
        size: x.$n.Sizes.MIN,
        color: x.$n.Colors.CUSTOM,
        className: eb.sortDropdown,
        innerClassName: eb.sortDropdownInner,
        "aria-label": n ? ep.intl.string(ep.t.JxU0wr) : ep.intl.string(ep.t.xyYt8A),
        children: [(0, r.jsx)(p.JNJ, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(p.Text, {
          className: eb.sortDropdownText,
          variant: "text-sm/medium",
          color: "interactive-text-default",
          children: (0, r.jsx)("span", {
            className: eb.sortDropdownTextHighContrastForcedColor,
            children: n ? ep.intl.string(ep.t.JxU0wr) : ep.intl.string(ep.t.xyYt8A)
          })
        }), l ? (0, r.jsx)(p.tN5, {
          size: "custom",
          color: "currentColor",
          width: 20
        }) : (0, r.jsx)(p.abt, {
          size: "custom",
          color: "currentColor",
          width: 20
        })]
      }))
    }
  })
}