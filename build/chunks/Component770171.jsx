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
    } = e, N = i.useRef(false), w = i.useRef(null), R = (0, l.RQ)(e => e.searchQuery), P = a.useStore(e => e.activeCategoryIndex), D = i.useMemo(() => n.map(e => (0, s.Em)(e.categoryInfo) ? {
      isNitroLocked: e.categoryInfo.isNitroLocked
    } : {
      isNitroLocked: false
    }), [n]), L = (0, u.Fk)({
      activeCategoryIndex: P,
      isScrolling: N,
      listRef: w,
      onActiveCategoryIndexChange: a.setActiveCategoryIndex,
      scrollOffset: f,
      searchQuery: R
    }), x = i.useCallback(e => {
      L(e), _({
        listRef: w,
        searchQuery: R,
        nitroLockedSectionStates: D,
        scrollTop: e
      }), null == C || C(e)
    }, [L, R, D, C]);
    return i.useEffect(() => {
      null != w.current && x(0)
    }, [x, w]), (0, u.FV)({
      searchQuery: R,
      activeCategoryIndex: P,
      listRef: w
    }), i.useImperativeHandle(t, () => ({
      scrollTo: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = w.current) ? true : e.scrollTo(...n)
      },
      getRowDescriptors: () => {
        var e, t;
        return null != (e = null == (t = w.current) ? true : t.getRowDescriptors()) ? e : []
      },
      getSectionDescriptors: () => {
        var e, t;
        return null != (e = null == (t = w.current) ? true : t.getSectionDescriptors()) ? e : []
      },
      scrollToSectionTop: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = w.current) ? true : e.scrollToSectionTop(...n)
      },
      scrollRowIntoView: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = w.current) ? true : e.scrollRowIntoView(...n)
      },
      getScrollerNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = w.current) ? true : e.getScrollerNode(...n)
      },
      scrollIntoViewNode: function() {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return null == (e = w.current) ? true : e.scrollIntoViewNode(...n)
      },
      getListDimensions: function() {
        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return null != (e = null == (t = w.current) ? true : t.getListDimensions(...r)) ? e : {
          height: false,
          totalHeight: false
        }
      }
    }), []), (0, r.jsxs)("div", {
      className: d.i,
      children: [R.length > 0 && !c && null != b ? b() : (0, r.jsx)(o.A, {
        role: "none presentation",
        listPadding: p,
        onScroll: x,
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
        ref: w
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