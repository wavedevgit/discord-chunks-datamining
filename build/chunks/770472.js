/** Chunk was on 28636 **/
/** chunk id: 770472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk488995 = require("./488995.js"),
  Chunk982339 = require("./982339.js");
let i = 20 + Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
  s = 20 + Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

function c(e) {
  let {
    isSearchBarVisible: t,
    isSearchBarEmpty: n,
    searchBarState: c,
    setSearchBarState: o
  } = e, d = l.useCallback(e => {
    if (!t) return;
    let l = Math.round(e);
    switch (c) {
      case a.GlobalDiscoverySearchBarState.DEFAULT:
        l < 20 && o(n ? a.GlobalDiscoverySearchBarState.COLLAPSED : a.GlobalDiscoverySearchBarState.FLOATING);
        break;
      case a.GlobalDiscoverySearchBarState.COLLAPSED:
        l > i && o(a.GlobalDiscoverySearchBarState.DEFAULT);
        break;
      case a.GlobalDiscoverySearchBarState.FLOATING:
        l > s && o(a.GlobalDiscoverySearchBarState.DEFAULT)
    }
  }, [n, t, c, o]), u = l.useCallback(() => {
    o(a.GlobalDiscoverySearchBarState.FLOATING)
  }, [o]), p = l.useCallback(() => {
    c === a.GlobalDiscoverySearchBarState.FLOATING && n && o(a.GlobalDiscoverySearchBarState.COLLAPSED)
  }, [n, c, o]);
  return {
    onTabsAvailableWidthChange: d,
    tabsClassName: c === a.GlobalDiscoverySearchBarState.FLOATING ? r.b6 : true,
    onCollapsedSearchBarClick: u,
    onSearchBarBlur: p
  }
}