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
      store: a,
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
      renderUpsell: A,
      onScroll: C
    } = e, N = i.useRef(false), R = i.useRef(null), P = (0, l.Iu)(e => e.searchQuery), D = a.useStore(e => e.activeCategoryIndex), w = i.useMemo(() => n.map(e => (0, s._O)(e.categoryInfo) ? {
      isNitroLocked: e.categoryInfo.isNitroLocked
    } : {
      isNitroLocked: false
    }), [n]), x = (0, u.Qs)({
      activeCategoryIndex: D,
      isScrolling: N,
      listRef: R,
      onActiveCategoryIndexChange: a.setActiveCategoryIndex,
      scrollOffset: f,
      searchQuery: P
    }), L = i.useCallback(e => {
      x(e), p({
        listRef: R,
        searchQuery: P,
        nitroLockedSectionStates: w,
        scrollTop: e
      }), null == C || C(e)
    }, [x, P, w, C]);
    return i.useEffect(() => {
      null != R.current && L(0)
    }, [L, R]), (0, u.Xs)({
      searchQuery: P,
      activeCategoryIndex: D,
      listRef: R
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = R.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (t = null == (e = R.current) ? true : e.getRowDescriptors()) ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (t = null == (e = R.current) ? true : e.getSectionDescriptors()) ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = R.current) ? true : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = R.current) ? true : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = R.current) ? true : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = R.current) ? true : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return null != (t = null == (e = R.current) ? true : e.getListDimensions(...r)) ? t : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsxs)("div", {
      className: d.wrapper,
      children: [P.length > 0 && !c && null != y ? y() : (0, r.jsx)(o.Z, {
        role: "none presentation",
        listPadding: _,
        onScroll: L,
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
        ref: R
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
  let a = (0, c.y)({
    listRef: t,
    searchQuery: n,
    nitroLockedSectionStates: r,
    scrollTop: i
  });
  l.Iu.setState({
    isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
    areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible
  })
}
let m = _