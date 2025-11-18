/** Chunk was on 84283 **/
/** chunk id: 88693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk49898 = require("./49898.js"),
  Chunk999363 = require("./999363.js");
let l = 20 + Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
  s = 20 + Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

function o(e) {
  let {
    isSearchBarVisible: t,
    isSearchBarEmpty: n,
    searchBarState: o,
    setSearchBarState: c
  } = e, d = r.useCallback(e => {
    if (!t) return;
    let r = Math.round(e);
    switch (o) {
      case a.GlobalDiscoverySearchBarState.DEFAULT:
        r < 20 && c(n ? a.GlobalDiscoverySearchBarState.COLLAPSED : a.GlobalDiscoverySearchBarState.FLOATING);
        break;
      case a.GlobalDiscoverySearchBarState.COLLAPSED:
        r > l && c(a.GlobalDiscoverySearchBarState.DEFAULT);
        break;
      case a.GlobalDiscoverySearchBarState.FLOATING:
        r > s && c(a.GlobalDiscoverySearchBarState.DEFAULT)
    }
  }, [n, t, o, c]), u = r.useCallback(() => {
    c(a.GlobalDiscoverySearchBarState.FLOATING)
  }, [c]), p = r.useCallback(() => {
    o === a.GlobalDiscoverySearchBarState.FLOATING && n && c(a.GlobalDiscoverySearchBarState.COLLAPSED)
  }, [n, o, c]);
  return {
    onTabsAvailableWidthChange: d,
    tabsClassName: o === a.GlobalDiscoverySearchBarState.FLOATING ? i.floatingSearchTabsMask : true,
    onCollapsedSearchBarClick: u,
    onSearchBarBlur: p
  }
}