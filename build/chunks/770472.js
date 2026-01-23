/** Chunk was on 28636 **/
/** chunk id: 770472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk488995 = require("./488995.js"),
  Chunk982339 = require("./982339.js");
let a = 20 + Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
  s = 20 + Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + Chunk488995.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

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
      case l.GlobalDiscoverySearchBarState.DEFAULT:
        r < 20 && c(n ? l.GlobalDiscoverySearchBarState.COLLAPSED : l.GlobalDiscoverySearchBarState.FLOATING);
        break;
      case l.GlobalDiscoverySearchBarState.COLLAPSED:
        r > a && c(l.GlobalDiscoverySearchBarState.DEFAULT);
        break;
      case l.GlobalDiscoverySearchBarState.FLOATING:
        r > s && c(l.GlobalDiscoverySearchBarState.DEFAULT)
    }
  }, [n, t, o, c]), u = r.useCallback(() => {
    c(l.GlobalDiscoverySearchBarState.FLOATING)
  }, [c]), p = r.useCallback(() => {
    o === l.GlobalDiscoverySearchBarState.FLOATING && n && c(l.GlobalDiscoverySearchBarState.COLLAPSED)
  }, [n, o, c]);
  return {
    onTabsAvailableWidthChange: d,
    tabsClassName: o === l.GlobalDiscoverySearchBarState.FLOATING ? i.b6 : true,
    onCollapsedSearchBarClick: u,
    onSearchBarBlur: p
  }
}