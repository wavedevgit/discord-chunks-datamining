/** Chunk was on web.js **/
/** chunk id: 429155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk28546 = require("./28546.js"),
  Chunk122567 = require("./122567.js"),
  Chunk98528 = require("./98528.js"),
  Chunk204922 = require("./204922.js");
let f = 20,
  _ = Chunk73800.forwardRef(function(e, t) {
    let {
      categories: n,
      store: o,
      hasSearchResults: c,
      listPadding: _,
      renderRow: h,
      renderSection: m,
      renderSectionHeader: g,
      renderSectionFooter: E,
      renderInspector: b,
      renderEmptySearchState: y,
      rowCount: O,
      rowCountBySection: v,
      rowHeight: I,
      sectionHeaderHeight: T,
      sectionFooterHeight: S,
      renderUpsell: A
    } = e, N = i.useRef(false), C = i.useRef(null), R = (0, l.Iu)(e => e.searchQuery), P = o.useStore(e => e.activeCategoryIndex), w = n.map(e => (0, s._O)(e.categoryInfo) ? {
      isNitroLocked: e.categoryInfo.isNitroLocked
    } : {
      isNitroLocked: false
    }), D = (0, u.Qs)({
      activeCategoryIndex: P,
      isScrolling: N,
      listRef: C,
      onActiveCategoryIndexChange: o.setActiveCategoryIndex,
      scrollOffset: f,
      searchQuery: R
    }), L = i.useCallback(e => {
      D(e), p({
        listRef: C,
        searchQuery: R,
        nitroLockedSectionStates: w,
        scrollTop: e
      })
    }, [D, R, w]);
    return (0, u.Xs)({
      searchQuery: R,
      activeCategoryIndex: P,
      listRef: C
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (t = null == (e = C.current) ? true : e.getRowDescriptors()) ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (t = null == (e = C.current) ? true : e.getSectionDescriptors()) ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = C.current) ? true : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return null != (t = null == (e = C.current) ? true : e.getListDimensions(...r)) ? t : {
          height: false,
          totalHeight: false
        }
      }
    }), []), <div className={d.wrapper}>{R.length > 0 && !c && null != y ? y() : <a.Z role={"none presentation"} listPadding={_} onScroll={L} renderRow={h} renderSection={m} renderSectionHeader={g} renderSectionFooter={E} rowCount={O} rowCountBySection={v} rowHeight={I} sectionHeaderHeight={T} sectionFooterHeight={S} stickyHeaders={true} ref={C} />}{null == A ? true : A()}{null == b ? true : b()}</div>
  }),
  p = (0, Chunk392711.throttle)(h, 300, {
    leading: false,
    trailing: true
  });

function h(e) {
  let {
    listRef: t,
    searchQuery: n,
    nitroLockedSectionStates: r,
    scrollTop: i
  } = e;
  if (null == t.current) return;
  let o = (0, c.y)({
    listRef: t,
    searchQuery: n,
    nitroLockedSectionStates: r,
    scrollTop: i
  });
  l.Iu.setState({
    isNitroLockedSectionVisible: o.isNitroLockedSectionVisible,
    areOnlyNitroLockedSectionsVisible: o.areOnlyNitroLockedSectionsVisible
  })
}
let m = _