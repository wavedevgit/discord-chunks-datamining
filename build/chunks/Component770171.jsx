/** Chunk was on web.js **/
/** chunk id: 770171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk962125 = require("./962125.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk151271 = require("./151271.js"),
  Chunk240864 = require("./240864.js"),
  Chunk887695 = require("./887695.js"),
  Chunk198743 = require("./198743.js");
let f = 20,
  p = Chunk64700.forwardRef(function(e, t) {
    let {
      categories: n,
      store: a,
      hasSearchResults: c,
      listPadding: p,
      renderRow: h,
      renderSection: m,
      renderSectionHeader: g,
      renderSectionFooter: E,
      renderInspector: y,
      renderEmptySearchState: b,
      rowCount: O,
      rowCountBySection: v,
      rowHeight: A,
      sectionHeaderHeight: I,
      sectionFooterHeight: S,
      renderUpsell: T,
      onScroll: C
    } = e, N = i.useRef(false), R = i.useRef(null), w = (0, l.RQ)(e => e.searchQuery), P = a.useStore(e => e.activeCategoryIndex), D = i.useMemo(() => n.map(e => (0, o.Em)(e.categoryInfo) ? {
      isNitroLocked: e.categoryInfo.isNitroLocked
    } : {
      isNitroLocked: false
    }), [n]), x = (0, u.Fk)({
      activeCategoryIndex: P,
      isScrolling: N,
      listRef: R,
      onActiveCategoryIndexChange: a.setActiveCategoryIndex,
      scrollOffset: f,
      searchQuery: w
    }), L = i.useCallback(e => {
      x(e), _({
        listRef: R,
        searchQuery: w,
        nitroLockedSectionStates: D,
        scrollTop: e
      }), null == C || C(e)
    }, [x, w, D, C]);
    return i.useEffect(() => {
      null != R.current && L(0)
    }, [L, R]), (0, u.FV)({
      searchQuery: w,
      activeCategoryIndex: P,
      listRef: R
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = R.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (e = null == (t = R.current) ? true : t.getRowDescriptors()) ? e : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (e = null == (t = R.current) ? true : t.getSectionDescriptors()) ? e : []
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
        return null != (e = null == (t = R.current) ? true : t.getListDimensions(...r)) ? e : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsxs)("div", {
      className: d.i,
      children: [w.length > 0 && !c && null != b ? b() : (0, r.jsx)(s.A, {
        role: "none presentation",
        listPadding: p,
        onScroll: L,
        renderRow: h,
        renderSection: m,
        renderSectionHeader: g,
        renderSectionFooter: E,
        rowCount: O,
        rowCountBySection: v,
        rowHeight: A,
        sectionHeaderHeight: I,
        sectionFooterHeight: S,
        stickyHeaders: true,
        ref: R
      }), null == T ? true : T(), null == y ? true : y()]
    })
  }),
  _ = (0, Chunk735438.throttle)(h, 300, {
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
  let a = (0, c.s)({
    listRef: t,
    searchQuery: n,
    nitroLockedSectionStates: r,
    scrollTop: i
  });
  l.RQ.setState({
    isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
    areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible
  })
}
let m = p