/** Chunk was on web.js **/
/** chunk id: 98528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qs: () => E,
  VO: () => b,
  Xs: () => h,
  ep: () => m,
  fe: () => g,
  t$: () => O,
  yi: () => y
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk536895 = require("./536895.js"),
  Chunk566064 = require("./566064.js"),
  Chunk611144 = require("./611144.js"),
  Chunk468194 = require("./468194.js"),
  Chunk477690 = require("./477690.js"),
  Chunk691251 = require("./691251.js"),
  Chunk981631 = require("./981631.js");
let p = (0, Chunk468194.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  _ = 8,
  m = e => {
    let {
      gridWrapperRef: t,
      containerWidth: n,
      showingEmptyState: i,
      listPaddingLeft: a = p,
      listScrollbarWidth: s = _
    } = e, [l, c] = r.useState(true), u = r.useCallback(() => {
      if (null == t.current) return null;
      c(t.current.offsetWidth - a - s)
    }, [t, a, s]);
    return r.useLayoutEffect(() => {
      u()
    }, [n, u, i]), r.useEffect(() => {
      let e = o().debounce(u, 250);
      return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, [u]), l
  },
  h = e => {
    let {
      activeCategoryIndex: t,
      listRef: n,
      searchQuery: i
    } = e, o = r.useRef(i), a = r.useRef(true);
    r.useLayoutEffect(() => {
      if ("" === i && "" !== o.current) {
        var e;
        null == (e = n.current) || e.scrollToSectionTop(t)
      }
      o.current = i
    }, [i, t, n]), r.useLayoutEffect(() => {
      if (a.current) {
        var e;
        null == (e = n.current) || e.scrollToSectionTop(t), a.current = false
      }
    }, [t, n]), r.useEffect(() => {
      o.current = i
    }, [i])
  },
  g = e => {
    let {
      listRef: t,
      searchQuery: n,
      nitroLockedSectionStates: i,
      setUpsellGlowOpacity: o
    } = e, a = r.useCallback(e => {
      if ("" !== n) {
        null == o || o(0);
        return
      }
      if (null == t.current) return;
      let r = i.findIndex(e => e.isNitroLocked);
      if (false === r) {
        null == o || o(0);
        return
      }
      let a = t.current.getSectionDescriptors();
      if (null == a || 0 === a.length || a.length !== i.length) return;
      let s = a[r],
        l = e + t.current.getListDimensions().height - 250,
        c = 250,
        u = Math.min(Math.max((s.offset.top - l) / c, 0), 1);
      null == o || o(u)
    }, [n, t, i, o]);
    return r.useCallback(e => {
      a(e)
    }, [a])
  },
  E = e => {
    let {
      activeCategoryIndex: t,
      listRef: n,
      isScrolling: i,
      searchQuery: a,
      scrollOffset: s = 0,
      onActiveCategoryIndexChange: l,
      disableForSearch: c = true
    } = e, u = r.useRef(f.xAR), d = r.useMemo(() => o().debounce(() => {
      i.current = false
    }, 250), [i]), p = r.useMemo(() => o().debounce(e => {
      "" !== a && c || (window.cancelAnimationFrame(u.current), u.current = window.requestAnimationFrame(() => {
        var r;
        let i = null == (r = n.current) ? true : r.getSectionDescriptors();
        if (null == i) return;
        let o = i.findIndex((t, n) => {
            let r = i[n + 1],
              o = e + s >= t.offset.top,
              a = null != r && e + s < r.offset.top;
            return null != r && !o && !a || o && a || o && null == r
          }),
          a = false === o ? 0 : o;
        t !== a && l(a)
      }))
    }, 0), [a, n, t, s, l, c]);
    return r.useCallback(e => {
      i.current = true, d(), p(e)
    }, [i, d, p])
  },
  b = e => {
    let {
      columnCounts: t,
      gridNavigatorId: n,
      itemGrid: i,
      itemList: o,
      onGridNavigatorItemSelect: l,
      onGridNavigatorPositionChange: c
    } = e, u = r.useRef(false), d = r.useCallback((e, t) => {
      let n = i[t];
      if (null != n) return n[e]
    }, [i]), f = r.useCallback(e => {
      let {
        focusedX: t,
        focusedY: n
      } = e;
      u.current = true;
      let r = d(t, n);
      if (null == r) return;
      let {
        visibleRowIndex: i,
        columnIndex: a
      } = r;
      c(a, i), null != o.current && o.current.scrollRowIntoView(n)
    }, [d, o, c]), p = r.useCallback((e, t, n) => {
      switch (n.type) {
        case a.Us.NAVIGATE_UP:
        case a.Us.NAVIGATE_DOWN:
        case a.Us.NAVIGATE_RIGHT:
        case a.Us.NAVIGATE_LEFT:
        case a.Us.NAVIGATE_INLINE_START:
        case a.Us.NAVIGATE_INLINE_END:
        case a.Us.NAVIGATE_START:
        case a.Us.NAVIGATE_END:
        case a.Us.NAVIGATE_CROSSLINE_START:
        case a.Us.NAVIGATE_CROSSLINE_END:
          f(t)
      }
    }, [f]), _ = r.useCallback((e, t, n) => {
      let r = d(e, t);
      null != r && l(r, n)
    }, [d, l]), {
      dispatch: m,
      getItemProps: h,
      getRowProps: g,
      getContainerProps: E
    } = (0, s.Z)({
      navId: n,
      columnCounts: t,
      onDispatch: p,
      onSelect: _,
      autoFocusElement: false,
      useVirtualFocus: true
    }), {
      gridContainerProps: b,
      handleGridContainerKeyDown: y
    } = r.useMemo(() => {
      let e = E();
      return {
        gridContainerProps: e,
        handleGridContainerKeyDown: e.onKeyDown
      }
    }, [E]);
    return r.useEffect(() => {
      let e = () => {
        u.current = false
      };
      return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
    }, []), {
      gridDispatch: m,
      getItemProps: h,
      getRowProps: g,
      gridContainerProps: b,
      handleGridContainerKeyDown: y,
      isUsingKeyboardNavigation: u
    }
  };

function y(e) {
  let {
    categories: t,
    collapsedCategories: n,
    gridWidth: i = 0,
    listPaddingRight: o = 0,
    itemNodeWidth: a,
    itemNodeMargin: s = 0
  } = e;
  return r.useMemo(() => {
    let e = Math.max(1, Math.floor((i - o + s) / (a + s))),
      r = Math.floor(Math.max(s, (i - o - a * e) / (e - 1))),
      l = [],
      c = [],
      u = [],
      d = 0,
      f = 0,
      p = 0;
    if (0 !== i) {
      let r = function(t, n) {
        let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
          i = Math.ceil(t.length / e);
        c[f] = r ? 0 : i;
        for (let o = 0; o < i; o++) {
          let i = o * e,
            a = i + e,
            s = t.slice(i, a).map((e, t) => ({
              item: e,
              gridSectionIndex: f,
              rowIndex: d,
              columnIndex: t,
              visibleRowIndex: p,
              category: n
            }));
          r || (p++, u.push(s), l.push(s.length)), d++
        }
        f++
      };
      for (let e of t)
        if (e.items.length > 0) {
          var _;
          r(e.items, e.categoryInfo.type, null != (_ = null == n ? true : n.has("".concat(e.key))) && _)
        }
    }
    return {
      expressionsGrid: u,
      rowCount: d,
      rowCountBySection: c,
      columnCounts: l,
      gutterWidth: r
    }
  }, [t, n, i, s, a, o])
}

function O(e) {
  let {
    columnCounts: t,
    expressionsGrid: n,
    expressionsListRef: i,
    store: o,
    gridNavigatorId: a,
    onSelectItem: s
  } = e, {
    gridDispatch: c,
    getItemProps: u,
    getRowProps: f,
    gridContainerProps: p,
    handleGridContainerKeyDown: _,
    isUsingKeyboardNavigation: m
  } = b({
    columnCounts: t,
    gridNavigatorId: a,
    itemGrid: n,
    itemList: i,
    onGridNavigatorItemSelect: s,
    onGridNavigatorPositionChange: o.setInspectedExpressionPosition
  });
  return r.useEffect(() => o.subscribe(e => e.inspectedExpressionPosition, e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: n,
      source: r
    } = e;
    r !== d.u.GRID_NAVIGATOR_EVENT && c({
      type: l.s.SET_FOCUSED_POSITION,
      x: t,
      y: n
    })
  }), [c, o]), {
    getItemProps: u,
    getRowProps: f,
    gridContainerProps: p,
    handleGridContainerKeyDown: _,
    isUsingKeyboardNavigation: m
  }
}