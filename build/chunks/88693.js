/** Chunk was on 92504 **/
/** chunk id: 88693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk49898 = require("./49898.js"),
  Chunk748650 = require("./748650.js");
let l = 20 + Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
  s = 20 + Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + Chunk49898.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

function o(e) {
  let {
    isSearchBarVisible: t,
    isSearchBarEmpty: n,
    searchBarState: o,
    setSearchBarState: c
  } = e, d = a.useCallback(e => {
    if (!t) return;
    let a = Math.round(e);
    switch (o) {
      case r.GlobalDiscoverySearchBarState.DEFAULT:
        a < 20 && c(n ? r.GlobalDiscoverySearchBarState.COLLAPSED : r.GlobalDiscoverySearchBarState.FLOATING);
        break;
      case r.GlobalDiscoverySearchBarState.COLLAPSED:
        a > l && c(r.GlobalDiscoverySearchBarState.DEFAULT);
        break;
      case r.GlobalDiscoverySearchBarState.FLOATING:
        a > s && c(r.GlobalDiscoverySearchBarState.DEFAULT)
    }
  }, [n, t, o, c]), u = a.useCallback(() => {
    c(r.GlobalDiscoverySearchBarState.FLOATING)
  }, [c]), p = a.useCallback(() => {
    o === r.GlobalDiscoverySearchBarState.FLOATING && n && c(r.GlobalDiscoverySearchBarState.COLLAPSED)
  }, [n, o, c]);
  return {
    onTabsAvailableWidthChange: d,
    tabsClassName: o === r.GlobalDiscoverySearchBarState.FLOATING ? i.floatingSearchTabsMask : true,
    onCollapsedSearchBarClick: u,
    onSearchBarBlur: p
  }
}