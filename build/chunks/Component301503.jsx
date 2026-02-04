/** Chunk was on 21738 **/
/** chunk id: 301503, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk178629 = require("./178629.js"),
  Chunk770472 = require("./770472.js"),
  Chunk737823 = require("./737823.jsx"),
  c = (require("./153527.jsx"), require("./876622.jsx")),
  Chunk521974 = require("./521974.jsx"),
  Chunk282026 = require("./282026.js"),
  Chunk881973 = require("./881973.js"),
  Chunk965660 = require("./965660.js"),
  Chunk601193 = require("./601193.js"),
  Chunk424956 = require("./424956.js"),
  Chunk19925 = require("./19925.js"),
  Chunk689817 = require("./689817.js"),
  Chunk38894 = require("./38894.jsx"),
  Chunk299579 = require("./299579.jsx"),
  Chunk324580 = require("./324580.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk734539 = require("./734539.js");

function v() {
  let e = i.useRef((0, h.YP)()),
    {
      onScroll: t,
      scrollPosition: n,
      resetScrollPosition: v
    } = (0, a.G)(),
    {
      tabs: S,
      selectedTab: C,
      setSelectedTab: N
    } = (0, A.f)(),
    T = (0, h.Ub)(C),
    j = !E.R0.has(C),
    {
      searchQuery: x,
      onSearchTextChange: P,
      onClearSearch: w,
      onSearchSubmit: L,
      isSearchVisible: R
    } = (0, m.X)({
      loadId: e.current
    }),
    D = f.A.useField("searchBarState"),
    {
      onTabsAvailableWidthChange: M,
      onCollapsedSearchBarClick: k,
      onSearchBarBlur: U,
      tabsClassName: G
    } = (0, s.p)({
      isSearchBarVisible: j,
      isSearchBarEmpty: "" === x.trim(),
      searchBarState: D,
      setSearchBarState: e => f.A.setState({
        searchBarState: e
      })
    }),
    V = d.A.useField("fetchedQuery"),
    B = i.useCallback(e => {
      N(e), R && w()
    }, [R, w, N]),
    H = i.useMemo(() => R ? S.filter(e => {
      let {
        id: t
      } = e;
      return !E.R0.has(t)
    }) : S, [S, R]),
    F = i.useRef(new p.A(T)),
    {
      onGuildCardSeen: Y,
      onGuildCardClick: K
    } = (0, g.p)({
      guildDiscoveryCardSeenManager: F.current,
      loadId: e.current
    });
  return i.useEffect(() => {
    F.current.flushSeenGuilds(e.current)
  }, [T]), i.useEffect(() => {
    v()
  }, [C, v]), i.useEffect(() => {
    R || d.A.setState({
      scrollPosition: null
    })
  }, [R]), (0, r.jsxs)("div", {
    className: I.kL,
    children: [(0, r.jsxs)(o.Ay, {
      variant: R ? o.Z5.RELATIVE : o.Z5.OVERLAY,
      children: [!R && (0, r.jsx)(o.ns, {
        scrollPosition: n
      }), R ? (0, r.jsx)(o.XQ, {
        icon: l.Zge,
        onClick: w
      }) : (0, r.jsx)(o.T4, {
        icon: l.RR9
      }), !R && (0, r.jsx)(c.A, {
        className: G,
        tabs: H,
        selectedTab: R ? null : C,
        onTabSelect: B,
        onAvailableWidthChange: M
      }), R && (0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        className: I.ov,
        children: y.intl.format(y.t.zHdzqW, {
          query: V
        })
      }), j && (0, r.jsx)(u.A, {
        query: x,
        placeholder: y.intl.string(y.t["5h0QOP"]),
        onTextChange: P,
        onClear: w,
        onSubmit: L,
        onCollapsedClick: k,
        state: R ? O.GlobalDiscoverySearchBarState.DEFAULT : D,
        onBlur: U
      })]
    }), R ? (0, r.jsx)(b.A, {
      loadId: e.current,
      onGuildCardClick: K,
      onGuildCardSeen: Y
    }) : (0, r.jsx)(_.A, {
      selectedTab: C,
      onScroll: t,
      onGuildCardClick: K,
      onGuildCardSeen: Y
    })]
  })
}