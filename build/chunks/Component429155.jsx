/** Chunk was on web.js **/
/** chunk id: 429155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk28546 = require("./28546.js"),
  Chunk122567 = require("./122567.js"),
  Chunk98528 = require("./98528.js"),
  Chunk557340 = require("./557340.js");
let f = 20,
  _ = Chunk647438.forwardRef(function(e, t) {
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
    } = e, C = i.useRef(false), N = i.useRef(null), R = (0, l.Iu)(e => e.searchQuery), P = o.useStore(e => e.activeCategoryIndex), w = n.map(e => (0, s._O)(e.categoryInfo) ? {
      isNitroLocked: e.categoryInfo.isNitroLocked
    } : {
      isNitroLocked: false
    }), D = (0, u.Qs)({
      activeCategoryIndex: P,
      isScrolling: C,
      listRef: N,
      onActiveCategoryIndexChange: o.setActiveCategoryIndex,
      scrollOffset: f,
      searchQuery: R
    }), x = i.useCallback(e => {
      D(e), p({
        listRef: N,
        searchQuery: R,
        nitroLockedSectionStates: w,
        scrollTop: e
      })
    }, [D, R, w]);
    return (0, u.Xs)({
      searchQuery: R,
      activeCategoryIndex: P,
      listRef: N
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = N.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (t = null == (e = N.current) ? true : e.getRowDescriptors()) ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (t = null == (e = N.current) ? true : e.getSectionDescriptors()) ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = N.current) ? true : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = N.current) ? true : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = N.current) ? true : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = N.current) ? true : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return null != (t = null == (e = N.current) ? true : e.getListDimensions(...r)) ? t : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsxs)("div", {
      className: d.wrapper,
      children: [R.length > 0 && !c && null != y ? y() : (0, r.jsx)(a.Z, {
        role: "none presentation",
        listPadding: _,
        onScroll: x,
        renderRow: h,
        renderSection: m,
        renderSectionHeader: g,
        renderSectionFooter: E,
        rowCount: O,
        rowCountBySection: v,
        rowHeight: I,
        sectionHeaderHeight: T,
        sectionFooterHeight: S,
        stickyHeaders: true,
        ref: N
      }), null == A ? true : A(), null == b ? true : b()]
    })
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