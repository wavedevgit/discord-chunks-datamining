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
  let e = Chunk473749.useRef((0, Chunk726115.PM)()),
    {
      onScroll: t,
      scrollPosition: n,
      resetScrollPosition: C
    } = (0, Chunk979233.M)(),
    {
      tabs: S,
      selectedTab: T,
      setSelectedTab: N
    } = (0, Chunk29086.Y)(),
    j = (0, Chunk726115.lg)(T),
    P = !Chunk128449.MU.has(T),
    {
      searchQuery: x,
      onSearchTextChange: A,
      onClearSearch: Z,
      onSearchSubmit: w,
      isSearchVisible: L
    } = (0, Chunk28494.H)({
      loadId: module.current
    }),
    R = Chunk859921.Z.useField("searchBarState"),
    {
      onTabsAvailableWidthChange: D,
      onCollapsedSearchBarClick: M,
      onSearchBarBlur: k,
      tabsClassName: U
    } = (0, Chunk88693.U)({
      isSearchBarVisible: P,
      isSearchBarEmpty: "" === x.trim(),
      searchBarState: R,
      setSearchBarState: e => g.Z.setState({
        searchBarState: e
      })
    }),
    G = Chunk164991.Z.useField("fetchedQuery"),
    B = Chunk473749.useCallback(e => {
      N(e), L && Z()
    }, [L, Z, N]),
    H = Chunk473749.useMemo(() => L ? S.filter(e => {
      let {
        id: t
      } = e;
      return !O.MU.has(t)
    }) : S, [S, L]),
    V = Chunk473749.useRef(new Chunk444324.Z(j)),
    {
      onGuildCardSeen: F,
      onGuildCardClick: z
    } = (0, Chunk750910.H)({
      guildDiscoveryCardSeenManager: V.current,
      loadId: module.current
    });
  return Chunk473749.useEffect(() => {
    V.current.flushSeenGuilds(module.current)
  }, [j]), Chunk473749.useEffect(() => {
    C()
  }, [T, C]), Chunk473749.useEffect(() => {
    L || Chunk164991.Z.setState({
      scrollPosition: null
    })
  }, [L]), (0, Chunk54381.jsxs)("div", {
    className: Chunk146927.container,
    children: [(0, Chunk54381.jsxs)(Chunk611928.ZP, {
      variant: L ? Chunk611928._6.RELATIVE : Chunk611928._6.OVERLAY,
      children: [!L && (0, Chunk54381.jsx)(Chunk611928.z6, {
        scrollPosition: require
      }), L ? (0, Chunk54381.jsx)(Chunk611928.Cm, {
        icon: Chunk481060.j9r,
        onClick: Z
      }) : (0, Chunk54381.jsx)(Chunk611928.aV, {
        icon: Chunk481060.QTo
      }), !L && (0, Chunk54381.jsx)(c.Z, {
        className: U,
        tabs: H,
        selectedTab: L ? null : T,
        onTabSelect: B,
        onAvailableWidthChange: D
      }), L && (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: Chunk146927.searchResultsHeader,
        children: Chunk388032.intl.format(Chunk388032.t.zHdzqW, {
          query: G
        })
      }), P && (0, Chunk54381.jsx)(Chunk680180.Z, {
        query: x,
        placeholder: Chunk388032.intl.string(Chunk388032.t["5h0QOP"]),
        onTextChange: A,
        onClear: Z,
        onSubmit: w,
        onCollapsedClick: M,
        state: L ? Chunk49898.GlobalDiscoverySearchBarState.DEFAULT : R,
        onBlur: k
      })]
    }), L ? (0, Chunk54381.jsx)(Chunk273596.Z, {
      loadId: module.current,
      onGuildCardClick: z,
      onGuildCardSeen: F
    }) : (0, Chunk54381.jsx)(Chunk590771.Z, {
      selectedTab: T,
      onScroll: exports,
      onGuildCardClick: z,
      onGuildCardSeen: F
    })]
  })
}