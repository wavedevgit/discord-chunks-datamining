/** Chunk was on web.js **/
/** chunk id: 468954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk28546 = require("./28546.js"),
  Chunk98528 = require("./98528.js"),
  Chunk429155 = require("./429155.jsx"),
  Chunk810462 = require("./810462.jsx"),
  Chunk681561 = require("./681561.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    categories: t,
    collapsedCategories: n,
    containerWidth: u,
    store: f,
    onSelectItem: p,
    onSearchExpressions: h,
    hasSearchResults: m,
    defaultSearchPlaceholder: g,
    emptySearchPlaceholder: E,
    renderEmptyState: b,
    renderRow: y,
    renderSection: O,
    renderSectionHeader: v,
    renderSectionFooter: I,
    renderInspector: T,
    renderEmptySearchState: S,
    renderCategoryList: A,
    renderHeaderAccessories: N,
    rowHeight: C,
    sectionHeaderHeight: R,
    sectionFooterHeight: P,
    itemNodeWidth: w,
    listPaddingRight: D,
    itemNodeMargin: L,
    listPadding: x,
    gridNavigatorId: M,
    gridNotice: k,
    renderHeader: j,
    renderUpsell: U
  } = e, G = i.useRef(null), B = i.useRef(null), Z = i.useRef(null), F = 0 === t.length, V = (0, o.Iu)(e => e.searchQuery), H = f.useStore(e => e.inspectedExpressionPosition), Y = (0, a.ep)({
    gridWrapperRef: G,
    containerWidth: u,
    showingEmptyState: F
  }), {
    expressionsGrid: W,
    rowCount: K,
    rowCountBySection: z,
    columnCounts: q,
    gutterWidth: X
  } = (0, a.yi)({
    categories: t,
    collapsedCategories: n,
    gridWidth: Y,
    listPaddingRight: D,
    itemNodeWidth: w,
    itemNodeMargin: L
  }), {
    getItemProps: Q,
    getRowProps: J,
    gridContainerProps: $,
    handleGridContainerKeyDown: ee,
    isUsingKeyboardNavigation: et
  } = (0, a.t$)({
    columnCounts: q,
    expressionsListRef: B,
    expressionsGrid: W,
    onSelectItem: p,
    store: f,
    gridNavigatorId: M
  }), en = i.useCallback((e, t) => y(W[e], J(e), {
    isUsingKeyboardNavigation: et.current,
    gutterWidth: X,
    rowIndex: e,
    totalRowCount: K,
    sectionIndex: t.sectionIndex
  }, t => Q(e, t), t => f.setInspectedExpressionPosition(t, e)), [W, Q, J, X, et, y, f, K]), er = i.useCallback(e => null == O ? true : O(t[e]), [t, O]), ei = i.useCallback(e => null == v ? true : v(t[e], e), [t, v]), eo = i.useCallback(e => null == I ? true : I(t[e], e), [t, I]), ea = i.useCallback(() => {
    var e;
    return null == T ? true : T(null == W || null == (e = W[H.rowIndex]) ? true : e[H.columnIndex])
  }, [W, H.columnIndex, H.rowIndex, T]);
  i.useEffect(() => {
    h(V)
  }, [h, V]), i.useEffect(() => {
    var e, t;
    f.setBottomPosition(null != (t = null == (e = G.current) ? true : e.getBoundingClientRect().bottom) ? t : null)
  }), i.useEffect(() => f.resetStoreState, [f.resetStoreState]), i.useLayoutEffect(() => {
    var e;
    null == (e = Z.current) || e.focus()
  }, []);
  let es = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Z, {
      ref: Z,
      store: f,
      hasSendableExpressions: true,
      onKeyDown: ee,
      expressionsListRef: B,
      gridNavigatorId: M,
      defaultSearchPlaceholder: g,
      emptySearchPlaceholder: E
    }), null == N ? true : N()]
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != j ? j(es) : (0, r.jsxs)("div", {
      className: c.header,
      children: [" ", es, " "]
    }), F && null != b ? b(c.emptyState) : (0, r.jsxs)(r.Fragment, {
      children: [A(B), null != k && (0, r.jsx)("div", {
        className: c.gridNoticeWrapper,
        children: k
      }), (0, r.jsx)("div", _(d({
        ref: G,
        className: c.listWrapper,
        id: M
      }, $), {
        children: null != Y ? (0, r.jsx)(s.Z, {
          categories: t,
          ref: B,
          store: f,
          hasSearchResults: m,
          listPadding: x,
          renderRow: en,
          renderSection: null != O ? er : true,
          renderSectionHeader: null != v ? ei : true,
          renderSectionFooter: null != I ? eo : true,
          renderInspector: null != T ? ea : true,
          renderEmptySearchState: S,
          rowCount: K,
          rowCountBySection: z,
          rowHeight: C,
          sectionHeaderHeight: R,
          sectionFooterHeight: P,
          renderUpsell: U
        }) : null
      }))]
    })]
  })
}