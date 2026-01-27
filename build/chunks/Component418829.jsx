/** Chunk was on 51901 **/
/** chunk id: 418829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk964486 = require("./964486.js"),
  Chunk250703 = require("./250703.jsx"),
  Chunk877260 = require("./877260.jsx"),
  Chunk823092 = require("./823092.jsx"),
  Chunk199966 = require("./199966.js"),
  Chunk669550 = require("./669550.js"),
  Chunk894858 = require("./894858.js"),
  Chunk500425 = require("./500425.js");

function p(e) {
  var t;
  let {
    partialRoot: n,
    target: p,
    defaultTarget: _,
    onClose: y,
    sidebarFooter: m,
    onPanelChange: g,
    emptyState: h,
    searchQuery: O,
    onSearchChange: j
  } = e, v = b.A.useField("currentPanelKey"), {
    node: x,
    visibleDirectory: S,
    accessibleDirectory: C
  } = (0, d.Ay)(n, null != O ? O : ""), P = null != p && (null == (t = S.entry(p)) ? true : t.parentPanelKey) != null ? p : _, w = o.useMemo(() => {
    var e;
    let t = null == (e = C.entry(null != v ? v : P)) ? true : e.parentPanelKey;
    if (null != t) return C.getPanelOrThrow(t)
  }, [v, C, P]), {
    navigateWithValidation: A
  } = (0, s.L_)();
  (0, l.Ay)(() => {
    var e, t, n;
    let r = S.entry(P).parentPanelKey,
      o = null == (e = S.entry(P)) ? true : e.parentTabKey,
      a = null == (t = S.entry(P)) ? true : t.parentCategoryKey,
      l = null == (n = S.entry(P)) ? true : n.parentAccordionKey;
    return b.A.setState({
      currentPanelKey: r,
      currentTabKeys: null != o ? new Map([
        [r, o]
      ]) : new Map,
      currentCategoryKey: a,
      disableSidebarCategoryAutoSelect: true,
      navTransition: {
        targetKey: P,
        targetAccordionKey: l,
        animateScroll: false
      },
      showNavigationMobile: null == p
    }), () => b.A.resetState()
  }), o.useEffect(() => b.A.subscribe(e => ({
    requestedTargetKey: e.requestedTargetKey,
    currentPanelKey: e.currentPanelKey
  }), e => {
    let {
      requestedTargetKey: t,
      currentPanelKey: n
    } = e;
    if (null == t) return;
    let r = S.entry(t);
    if (null == r) {
      null == j || j("");
      return
    }
    let o = r.parentPanelKey;
    if (null == o) return void b.A.setState({
      requestedTargetKey: true
    });
    let a = b.A.getField("currentTabKeys"),
      l = null != r.parentTabKey ? new Map(a).set(o, r.parentTabKey) : a,
      i = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === a.get(o)),
      c = () => {
        b.A.setState({
          requestedTargetKey: true,
          currentPanelKey: r.parentPanelKey,
          currentTabKeys: l,
          currentCategoryKey: r.parentCategoryKey,
          disableSidebarCategoryAutoSelect: true,
          navTransition: {
            targetKey: t,
            targetAccordionKey: r.parentAccordionKey,
            animateScroll: i
          }
        })
      };
    r.parentPanelKey !== n ? A(() => {
      c(), null == g || g(o)
    }) : c()
  }, {
    equalityFn: a.x
  }), [S, A, g, j]);
  let T = o.useMemo(() => ({
      visibleDirectory: S,
      accessibleDirectory: C
    }), [S, C]),
    N = o.useMemo(() => () => A(y), [A, y]),
    E = null != v ? S.get(v) : true;
  return (0, r.jsx)(u.x.Provider, {
    value: T,
    children: (0, r.jsxs)("div", {
      className: f.k,
      children: [(0, r.jsx)(c.L, {
        root: x,
        footer: m,
        onClose: N,
        emptyState: h,
        searchQuery: O,
        onSearchChange: j
      }), (0, r.jsx)(i.A, {
        onClose: N,
        setting: null != E ? E : w
      })]
    })
  })
}

function _(e) {
  return (0, r.jsx)(s.ms, {
    children: (0, r.jsx)(p, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e))
  })
}