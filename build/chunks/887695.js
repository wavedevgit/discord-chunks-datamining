/** Chunk was on web.js **/
/** chunk id: 887695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FV: () => m,
  Ff: () => y,
  Fk: () => E,
  JZ: () => O,
  ci: () => g,
  oV: () => h,
  se: () => b
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk741918 = require("./741918.js"),
  Chunk118057 = require("./118057.js"),
  Chunk788413 = require("./788413.js"),
  Chunk23339 = require("./23339.js"),
  Chunk319060 = require("./319060.js"),
  Chunk60587 = require("./60587.js"),
  Chunk652215 = require("./652215.js");
let p = (0, Chunk23339.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  _ = 8,
  h = e => {
    let {
      gridWrapperRef: t,
      containerWidth: n,
      showingEmptyState: i,
      listPaddingLeft: o = p,
      listScrollbarWidth: s = _
    } = e, [l, c] = r.useState(true), u = r.useCallback(() => {
      if (null == t.current) return null;
      c(t.current.offsetWidth - o - s)
    }, [t, o, s]);
    return r.useLayoutEffect(() => {
      u()
    }, [n, u, i]), r.useEffect(() => {
      let e = a().debounce(u, 250);
      return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, [u]), l
  },
  m = e => {
    let {
      activeCategoryIndex: t,
      listRef: n,
      searchQuery: i
    } = e, a = r.useRef(i), o = r.useRef(true);
    r.useLayoutEffect(() => {
      if ("" === i && "" !== a.current) {
        var e;
        null == (e = n.current) || e.scrollToSectionTop(t)
      }
      a.current = i
    }, [i, t, n]), r.useLayoutEffect(() => {
      if (o.current) {
        var e;
        null == (e = n.current) || e.scrollToSectionTop(t), o.current = false
      }
    }, [t, n]), r.useEffect(() => {
      a.current = i
    }, [i])
  },
  g = e => {
    let {
      listRef: t,
      searchQuery: n,
      nitroLockedSectionStates: i,
      setUpsellGlowOpacity: a
    } = e, o = r.useCallback(e => {
      if ("" !== n) {
        null == a || a(0);
        return
      }
      if (null == t.current) return;
      let r = i.findIndex(e => e.isNitroLocked);
      if (false === r) {
        null == a || a(0);
        return
      }
      let o = t.current.getSectionDescriptors();
      if (null == o || 0 === o.length || o.length !== i.length) return;
      let s = o[r],
        l = e + t.current.getListDimensions().height - 250,
        c = 250,
        u = Math.min(Math.max((s.offset.top - l) / c, 0), 1);
      null == a || a(u)
    }, [n, t, i, a]);
    return r.useCallback(e => {
      o(e)
    }, [o])
  },
  E = e => {
    let {
      activeCategoryIndex: t,
      listRef: n,
      isScrolling: i,
      searchQuery: o,
      scrollOffset: s = 0,
      onActiveCategoryIndexChange: l,
      disableForSearch: c = true
    } = e, u = r.useRef(f.An1), d = r.useMemo(() => a().debounce(() => {
      i.current = false
    }, 250), [i]), p = r.useMemo(() => a().debounce(e => {
      "" !== o && c || (window.cancelAnimationFrame(u.current), u.current = window.requestAnimationFrame(() => {
        var r;
        let i = null == (r = n.current) ? true : r.getSectionDescriptors();
        if (null == i) return;
        let a = i.findIndex((t, n) => {
            let r = i[n + 1],
              a = e + s >= t.offset.top,
              o = null != r && e + s < r.offset.top;
            return null != r && !a && !o || a && o || a && null == r
          }),
          o = false === a ? 0 : a;
        t !== o && l(o)
      }))
    }, 0), [o, n, t, s, l, c]);
    return r.useCallback(e => {
      i.current = true, d(), p(e)
    }, [i, d, p])
  },
  y = e => {
    let {
      columnCounts: t,
      gridNavigatorId: n,
      itemGrid: i,
      itemList: a,
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
        columnIndex: o
      } = r;
      c(o, i), null != a.current && a.current.scrollRowIntoView(n)
    }, [d, a, c]), p = r.useCallback((e, t, n) => {
      switch (n.type) {
        case o.X2.NAVIGATE_UP:
        case o.X2.NAVIGATE_DOWN:
        case o.X2.NAVIGATE_RIGHT:
        case o.X2.NAVIGATE_LEFT:
        case o.X2.NAVIGATE_INLINE_START:
        case o.X2.NAVIGATE_INLINE_END:
        case o.X2.NAVIGATE_START:
        case o.X2.NAVIGATE_END:
        case o.X2.NAVIGATE_CROSSLINE_START:
        case o.X2.NAVIGATE_CROSSLINE_END:
          f(t)
      }
    }, [f]), _ = r.useCallback((e, t, n) => {
      let r = d(e, t);
      null != r && l(r, n)
    }, [d, l]), {
      dispatch: h,
      getItemProps: m,
      getRowProps: g,
      getContainerProps: E
    } = (0, s.A)({
      navId: n,
      columnCounts: t,
      onDispatch: p,
      onSelect: _,
      autoFocusElement: false,
      useVirtualFocus: true
    }), {
      gridContainerProps: y,
      handleGridContainerKeyDown: b
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
      gridDispatch: h,
      getItemProps: m,
      getRowProps: g,
      gridContainerProps: y,
      handleGridContainerKeyDown: b,
      isUsingKeyboardNavigation: u
    }
  };

function b(e) {
  let {
    categories: t,
    collapsedCategories: n,
    gridWidth: i = 0,
    listPaddingRight: a = 0,
    itemNodeWidth: o,
    itemNodeMargin: s = 0
  } = e;
  return r.useMemo(() => {
    let e = Math.max(1, Math.floor((i - a + s) / (o + s))),
      r = Math.floor(Math.max(s, (i - a - o * e) / (e - 1))),
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
        for (let a = 0; a < i; a++) {
          let i = a * e,
            o = i + e,
            s = t.slice(i, o).map((e, t) => ({
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
  }, [t, n, i, s, o, a])
}

function O(e) {
  let {
    columnCounts: t,
    expressionsGrid: n,
    expressionsListRef: i,
    store: a,
    gridNavigatorId: o,
    onSelectItem: s
  } = e, {
    gridDispatch: c,
    getItemProps: u,
    getRowProps: f,
    gridContainerProps: p,
    handleGridContainerKeyDown: _,
    isUsingKeyboardNavigation: h
  } = y({
    columnCounts: t,
    gridNavigatorId: o,
    itemGrid: n,
    itemList: i,
    onGridNavigatorItemSelect: s,
    onGridNavigatorPositionChange: a.setInspectedExpressionPosition
  });
  return r.useEffect(() => a.subscribe(e => e.inspectedExpressionPosition, e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: n,
      source: r
    } = e;
    r !== d.t.GRID_NAVIGATOR_EVENT && c({
      type: l.n.SET_FOCUSED_POSITION,
      x: t,
      y: n
    })
  }), [c, a]), {
    getItemProps: u,
    getRowProps: f,
    gridContainerProps: p,
    handleGridContainerKeyDown: _,
    isUsingKeyboardNavigation: h
  }
}