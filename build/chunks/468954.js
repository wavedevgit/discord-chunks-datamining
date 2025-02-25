/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651),
  i = n(192379),
  o = n(28546),
  a = n(98528),
  s = n(429155),
  l = n(810462),
  c = n(235794);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    hasSearchResults: g,
    defaultSearchPlaceholder: m,
    emptySearchPlaceholder: E,
    renderEmptyState: v,
    renderRow: b,
    renderSection: y,
    renderSectionHeader: O,
    renderSectionFooter: S,
    renderInspector: I,
    renderEmptySearchState: T,
    renderCategoryList: N,
    renderHeaderAccessories: A,
    rowHeight: C,
    sectionHeaderHeight: R,
    sectionFooterHeight: P,
    itemNodeWidth: D,
    listPaddingRight: w,
    itemNodeMargin: L,
    listPadding: x,
    gridNavigatorId: M,
    gridNotice: j,
    renderHeader: k,
    renderUpsell: U,
    setShowUpsell: G
  } = e, B = i.useRef(null), F = i.useRef(null), V = i.useRef(null), Z = 0 === t.length, H = (0, o.Iu)(e => e.searchQuery), W = f.useStore(e => e.inspectedExpressionPosition), Y = (0, a.ep)({
    gridWrapperRef: B,
    containerWidth: u,
    showingEmptyState: Z
  }), {
    expressionsGrid: K,
    rowCount: z,
    rowCountBySection: q,
    columnCounts: Q,
    gutterWidth: X
  } = (0, a.yi)({
    categories: t,
    collapsedCategories: n,
    gridWidth: Y,
    listPaddingRight: w,
    itemNodeWidth: D,
    itemNodeMargin: L
  }), {
    getItemProps: J,
    getRowProps: $,
    gridContainerProps: ee,
    handleGridContainerKeyDown: et,
    isUsingKeyboardNavigation: en
  } = (0, a.t$)({
    columnCounts: Q,
    expressionsListRef: F,
    expressionsGrid: K,
    onSelectItem: p,
    store: f,
    gridNavigatorId: M
  }), er = i.useCallback((e, t) => b(K[e], $(e), {
    isUsingKeyboardNavigation: en.current,
    gutterWidth: X,
    rowIndex: e,
    totalRowCount: z,
    sectionIndex: t.sectionIndex
  }, t => J(e, t), t => f.setInspectedExpressionPosition(t, e)), [K, J, $, X, en, b, f, z]), ei = i.useCallback(e => null == y ? void 0 : y(t[e]), [t, y]), eo = i.useCallback(e => null == O ? void 0 : O(t[e], e), [t, O]), ea = i.useCallback(e => null == S ? void 0 : S(t[e], e), [t, S]), es = i.useCallback(() => {
    var e;
    return null == I ? void 0 : I(null == K ? void 0 : null === (e = K[W.rowIndex]) || void 0 === e ? void 0 : e[W.columnIndex])
  }, [K, W.columnIndex, W.rowIndex, I]);
  i.useEffect(() => {
    h(H)
  }, [h, H]), i.useEffect(() => {
    var e, t;
    f.setBottomPosition(null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.getBoundingClientRect().bottom) && void 0 !== t ? t : null)
  }), i.useEffect(() => f.resetStoreState, [f.resetStoreState]), i.useLayoutEffect(() => {
    var e;
    null === (e = V.current) || void 0 === e || e.focus()
  }, []);
  let el = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Z, {
      ref: V,
      store: f,
      hasSendableExpressions: !0,
      onKeyDown: et,
      expressionsListRef: F,
      gridNavigatorId: M,
      defaultSearchPlaceholder: m,
      emptySearchPlaceholder: E
    }), null == A ? void 0 : A()]
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != k ? k(el) : (0, r.jsxs)("div", {
      className: c.header,
      children: [" ", el, " "]
    }), Z && null != v ? v(c.emptyState) : (0, r.jsxs)(r.Fragment, {
      children: [N(F), null != j && (0, r.jsx)("div", {
        className: c.gridNoticeWrapper,
        children: j
      }), (0, r.jsx)("div", _(d({
        ref: B,
        className: c.listWrapper,
        id: M
      }, ee), {
        children: null != Y ? (0, r.jsx)(s.Z, {
          categories: t,
          ref: F,
          store: f,
          hasSearchResults: g,
          listPadding: x,
          renderRow: er,
          renderSection: null != y ? ei : void 0,
          renderSectionHeader: null != O ? eo : void 0,
          renderSectionFooter: null != S ? ea : void 0,
          renderInspector: null != I ? es : void 0,
          renderEmptySearchState: T,
          rowCount: z,
          rowCountBySection: q,
          rowHeight: C,
          sectionHeaderHeight: R,
          sectionFooterHeight: P,
          renderUpsell: U,
          setShowUpsell: G
        }) : null
      }))]
    })]
  })
}