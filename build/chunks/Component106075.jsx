/** Chunk was on 1272 **/
/** chunk id: 106075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk979233 = require("./979233.js"),
  Chunk88693 = require("./88693.js"),
  Chunk611928 = require("./611928.jsx"),
  c = (require("./763433.jsx"), require("./175118.jsx")),
  Chunk680180 = require("./680180.jsx"),
  Chunk164991 = require("./164991.js"),
  Chunk444324 = require("./444324.js"),
  Chunk726115 = require("./726115.js"),
  Chunk859921 = require("./859921.js"),
  Chunk750910 = require("./750910.js"),
  Chunk28494 = require("./28494.js"),
  Chunk29086 = require("./29086.js"),
  Chunk590771 = require("./590771.jsx"),
  Chunk273596 = require("./273596.jsx"),
  Chunk128449 = require("./128449.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk146927 = require("./146927.js");

function C() {
  let e = i.useRef((0, f.PM)()),
    {
      onScroll: t,
      scrollPosition: n,
      resetScrollPosition: C
    } = (0, a.M)(),
    {
      tabs: S,
      selectedTab: T,
      setSelectedTab: N
    } = (0, b.Y)(),
    j = (0, f.lg)(T),
    x = !O.MU.has(T),
    {
      searchQuery: P,
      onSearchTextChange: A,
      onClearSearch: Z,
      onSearchSubmit: w,
      isSearchVisible: L
    } = (0, m.H)({
      loadId: e.current
    }),
    R = g.Z.useField("searchBarState"),
    {
      onTabsAvailableWidthChange: D,
      onCollapsedSearchBarClick: M,
      onSearchBarBlur: k,
      tabsClassName: U
    } = (0, o.U)({
      isSearchBarVisible: x,
      isSearchBarEmpty: "" === P.trim(),
      searchBarState: R,
      setSearchBarState: e => g.Z.setState({
        searchBarState: e
      })
    }),
    G = d.Z.useField("fetchedQuery"),
    H = i.useCallback(e => {
      N(e), L && Z()
    }, [L, Z, N]),
    B = i.useMemo(() => L ? S.filter(e => {
      let {
        id: t
      } = e;
      return !O.MU.has(t)
    }) : S, [S, L]),
    V = i.useRef(new p.Z(j)),
    {
      onGuildCardSeen: F,
      onGuildCardClick: z
    } = (0, h.H)({
      guildDiscoveryCardSeenManager: V.current,
      loadId: e.current
    });
  return i.useEffect(() => {
    V.current.flushSeenGuilds(e.current)
  }, [j]), i.useEffect(() => {
    C()
  }, [T, C]), i.useEffect(() => {
    L || d.Z.setState({
      scrollPosition: null
    })
  }, [L]), (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsxs)(s.ZP, {
      variant: L ? s._6.RELATIVE : s._6.OVERLAY,
      children: [!L && (0, r.jsx)(s.z6, {
        scrollPosition: n
      }), L ? (0, r.jsx)(s.Cm, {
        icon: l.j9r,
        onClick: Z
      }) : (0, r.jsx)(s.aV, {
        icon: l.QTo
      }), !L && (0, r.jsx)(c.Z, {
        className: U,
        tabs: B,
        selectedTab: L ? null : T,
        onTabSelect: H,
        onAvailableWidthChange: D
      }), L && (0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        className: y.searchResultsHeader,
        children: v.intl.format(v.t.zHdzqW, {
          query: G
        })
      }), x && (0, r.jsx)(u.Z, {
        query: P,
        placeholder: v.intl.string(v.t["5h0QOP"]),
        onTextChange: A,
        onClear: Z,
        onSubmit: w,
        onCollapsedClick: M,
        state: L ? I.GlobalDiscoverySearchBarState.DEFAULT : R,
        onBlur: k
      })]
    }), L ? (0, r.jsx)(_.Z, {
      loadId: e.current,
      onGuildCardClick: z,
      onGuildCardSeen: F
    }) : (0, r.jsx)(E.Z, {
      selectedTab: T,
      onScroll: t,
      onGuildCardClick: z,
      onGuildCardSeen: F
    })]
  })
}