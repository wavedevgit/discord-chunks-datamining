/** Chunk was on 69844 **/
/** chunk id: 88693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk49898 = require("./49898.js"),
  Chunk20379 = require("./20379.js");
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
      case i.GlobalDiscoverySearchBarState.DEFAULT:
        r < 20 && c(n ? i.GlobalDiscoverySearchBarState.COLLAPSED : i.GlobalDiscoverySearchBarState.FLOATING);
        break;
      case i.GlobalDiscoverySearchBarState.COLLAPSED:
        r > l && c(i.GlobalDiscoverySearchBarState.DEFAULT);
        break;
      case i.GlobalDiscoverySearchBarState.FLOATING:
        r > s && c(i.GlobalDiscoverySearchBarState.DEFAULT)
    }
  }, [n, t, o, c]), u = r.useCallback(() => {
    c(i.GlobalDiscoverySearchBarState.FLOATING)
  }, [c]), p = r.useCallback(() => {
    o === i.GlobalDiscoverySearchBarState.FLOATING && n && c(i.GlobalDiscoverySearchBarState.COLLAPSED)
  }, [n, o, c]);
  return {
    onTabsAvailableWidthChange: d,
    tabsClassName: o === i.GlobalDiscoverySearchBarState.FLOATING ? a.floatingSearchTabsMask : true,
    onCollapsedSearchBarClick: u,
    onSearchBarBlur: p
  }
}