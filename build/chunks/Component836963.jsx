/** Chunk was on web.js **/
/** chunk id: 836963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk151271 = require("./151271.js"),
  Chunk887695 = require("./887695.js"),
  Chunk770171 = require("./770171.jsx"),
  Chunk101024 = require("./101024.jsx"),
  Chunk990675 = require("./990675.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    categories: t,
    collapsedCategories: n,
    containerWidth: u,
    store: f,
    onSelectItem: _,
    onSearchExpressions: h,
    onScroll: m,
    hasSearchResults: g,
    defaultSearchPlaceholder: E,
    emptySearchPlaceholder: y,
    renderEmptyState: b,
    renderRow: O,
    renderSection: v,
    renderSectionHeader: A,
    renderSectionFooter: I,
    renderInspector: S,
    renderEmptySearchState: T,
    renderCategoryList: C,
    renderHeaderAccessories: N,
    rowHeight: w,
    sectionHeaderHeight: R,
    sectionFooterHeight: P,
    itemNodeWidth: D,
    listPaddingRight: x,
    itemNodeMargin: L,
    listPadding: j,
    gridNavigatorId: M,
    gridNotice: k,
    renderHeader: U,
    renderUpsell: G
  } = e, V = i.useRef(null), F = i.useRef(null), B = i.useRef(null), H = 0 === t.length, Y = (0, a.RQ)(e => e.searchQuery), W = f.useStore(e => e.inspectedExpressionPosition), K = (0, s.oV)({
    gridWrapperRef: V,
    containerWidth: u,
    showingEmptyState: H
  }), {
    expressionsGrid: z,
    rowCount: q,
    rowCountBySection: Z,
    columnCounts: X,
    gutterWidth: Q
  } = (0, s.se)({
    categories: t,
    collapsedCategories: n,
    gridWidth: K,
    listPaddingRight: x,
    itemNodeWidth: D,
    itemNodeMargin: L
  }), {
    getItemProps: J,
    getRowProps: $,
    gridContainerProps: ee,
    handleGridContainerKeyDown: et,
    isUsingKeyboardNavigation: en
  } = (0, s.JZ)({
    columnCounts: X,
    expressionsListRef: F,
    expressionsGrid: z,
    onSelectItem: _,
    store: f,
    gridNavigatorId: M
  }), er = i.useCallback((e, t) => O(z[e], $(e), {
    isUsingKeyboardNavigation: en.current,
    gutterWidth: Q,
    rowIndex: e,
    totalRowCount: q,
    sectionIndex: t.sectionIndex
  }, t => J(e, t), t => f.setInspectedExpressionPosition(t, e)), [z, J, $, Q, en, O, f, q]), ei = i.useCallback(e => null == A ? true : A(t[e], e), [t, A]), ea = i.useCallback(e => null == I ? true : I(t[e], e), [t, I]), es = i.useCallback(() => {
    var e;
    return null == S ? true : S(null == z || null == (e = z[W.rowIndex]) ? true : e[W.columnIndex])
  }, [z, W.columnIndex, W.rowIndex, S]);
  i.useEffect(() => {
    h(Y)
  }, [h, Y]), i.useEffect(() => {
    var e, t;
    f.setBottomPosition(null != (e = null == (t = V.current) ? true : t.getBoundingClientRect().bottom) ? e : null)
  }), i.useEffect(() => f.resetStoreState, [f.resetStoreState]), i.useLayoutEffect(() => {
    var e;
    null == (e = B.current) || e.focus()
  }, []);
  let eo = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.A, {
      ref: B,
      store: f,
      hasSendableExpressions: true,
      onKeyDown: et,
      expressionsListRef: F,
      gridNavigatorId: M,
      defaultSearchPlaceholder: E,
      emptySearchPlaceholder: y
    }), null == N ? true : N()]
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != U ? U(eo) : (0, r.jsxs)("div", {
      className: c.wx,
      children: [" ", eo, " "]
    }), H && null != b ? b(c.p$) : (0, r.jsxs)(r.Fragment, {
      children: [C(F), null != k && (0, r.jsx)("div", {
        className: c.Eb,
        children: k
      }), (0, r.jsx)("div", p(d({
        ref: V,
        className: c.AD,
        id: M
      }, ee), {
        children: null != K ? (0, r.jsx)(o.A, {
          categories: t,
          ref: F,
          store: f,
          hasSearchResults: g,
          listPadding: j,
          renderRow: er,
          renderSection: v,
          renderSectionHeader: null != A ? ei : true,
          renderSectionFooter: null != I ? ea : true,
          renderInspector: null != S ? es : true,
          renderEmptySearchState: T,
          rowCount: q,
          rowCountBySection: Z,
          rowHeight: w,
          sectionHeaderHeight: R,
          sectionFooterHeight: P,
          renderUpsell: G,
          onScroll: m
        }) : null
      }))]
    })]
  })
}