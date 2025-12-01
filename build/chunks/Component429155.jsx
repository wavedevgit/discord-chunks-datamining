/** Chunk was on web.js **/
/** chunk id: 429155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk28546 = require("./28546.js"),
  Chunk122567 = require("./122567.js"),
  Chunk98528 = require("./98528.js"),
  Chunk557340 = require("./557340.js");
let f = 20,
  p = Chunk473749.forwardRef(function(e, t) {
    let {
      categories: n,
      store: a,
      hasSearchResults: c,
      listPadding: p,
      renderRow: m,
      renderSection: h,
      renderSectionHeader: g,
      renderSectionFooter: E,
      renderInspector: b,
      renderEmptySearchState: y,
      rowCount: O,
      rowCountBySection: v,
      rowHeight: S,
      sectionHeaderHeight: I,
      sectionFooterHeight: T,
      renderUpsell: A,
      onScroll: C
    } = e, N = i.useRef(false), P = i.useRef(null), R = (0, l.Iu)(e => e.searchQuery), w = a.useStore(e => e.activeCategoryIndex), D = i.useMemo(() => n.map(e => (0, s._O)(e.categoryInfo) ? {
      isNitroLocked: e.categoryInfo.isNitroLocked
    } : {
      isNitroLocked: false
    }), [n]), x = (0, u.Qs)({
      activeCategoryIndex: w,
      isScrolling: N,
      listRef: P,
      onActiveCategoryIndexChange: a.setActiveCategoryIndex,
      scrollOffset: f,
      searchQuery: R
    }), L = i.useCallback(e => {
      x(e), _({
        listRef: P,
        searchQuery: R,
        nitroLockedSectionStates: D,
        scrollTop: e
      }), null == C || C(e)
    }, [x, R, D, C]);
    return i.useEffect(() => {
      null != P.current && L(0)
    }, [L, P]), (0, u.Xs)({
      searchQuery: R,
      activeCategoryIndex: w,
      listRef: P
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = P.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (t = null == (e = P.current) ? true : e.getRowDescriptors()) ? t : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (t = null == (e = P.current) ? true : e.getSectionDescriptors()) ? t : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = P.current) ? true : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = P.current) ? true : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = P.current) ? true : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = P.current) ? true : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return null != (t = null == (e = P.current) ? true : e.getListDimensions(...r)) ? t : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsxs)("div", {
      className: d.wrapper,
      children: [R.length > 0 && !c && null != y ? y() : (0, r.jsx)(o.Z, {
        role: "none presentation",
        listPadding: p,
        onScroll: L,
        renderRow: m,
        renderSection: h,
        renderSectionHeader: g,
        renderSectionFooter: E,
        rowCount: O,
        rowCountBySection: v,
        rowHeight: S,
        sectionHeaderHeight: I,
        sectionFooterHeight: T,
        stickyHeaders: true,
        ref: P
      }), null == A ? true : A(), null == b ? true : b()]
    })
  }),
  _ = (0, Chunk392711.throttle)(m, 300, {
    leading: false,
    trailing: true
  });

function m(e) {
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
let h = p