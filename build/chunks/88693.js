/** Chunk was on 37697 **/
n.d(t, {
  U: () => s
});
var r = n(192379),
  i = n(49898),
  a = n(264567);
let l = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
  o = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

function s(e) {
  let {
    isSearchBarVisible: t,
    isSearchBarEmpty: n,
    searchBarState: s,
    setSearchBarState: c
  } = e, d = r.useCallback(e => {
    if (!t) return;
    let r = Math.round(e);
    switch (s) {
      case i.GlobalDiscoverySearchBarState.DEFAULT:
        r < 20 && c(n ? i.GlobalDiscoverySearchBarState.COLLAPSED : i.GlobalDiscoverySearchBarState.FLOATING);
        break;
      case i.GlobalDiscoverySearchBarState.COLLAPSED:
        r > l && c(i.GlobalDiscoverySearchBarState.DEFAULT);
        break;
      case i.GlobalDiscoverySearchBarState.FLOATING:
        r > o && c(i.GlobalDiscoverySearchBarState.DEFAULT)
    }
  }, [n, t, s, c]), u = r.useCallback(() => {
    c(i.GlobalDiscoverySearchBarState.FLOATING)
  }, [c]), p = r.useCallback(() => {
    s === i.GlobalDiscoverySearchBarState.FLOATING && n && c(i.GlobalDiscoverySearchBarState.COLLAPSED)
  }, [n, s, c]);
  return {
    onTabsAvailableWidthChange: d,
    tabsClassName: s === i.GlobalDiscoverySearchBarState.FLOATING ? a.floatingSearchTabsMask : void 0,
    onCollapsedSearchBarClick: u,
    onSearchBarBlur: p
  }
}