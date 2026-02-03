/** Chunk was on 13914 **/
/** chunk id: 418829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
    defaultTarget: f,
    onClose: y,
    sidebarFooter: g,
    onPanelChange: m,
    emptyState: h,
    searchQuery: O,
    onSearchChange: j
  } = e, x = _.A.useField("currentPanelKey"), {
    node: v,
    visibleDirectory: S,
    accessibleDirectory: C
  } = (0, d.Ay)(n, null != O ? O : ""), P = null != p && (null == (t = S.entry(p)) ? true : t.parentPanelKey) != null ? p : f, w = o.useMemo(() => {
    var e;
    let t = null == (e = C.entry(null != x ? x : P)) ? true : e.parentPanelKey;
    if (null != t) return C.getPanelOrThrow(t)
  }, [x, C, P]), {
    navigateWithValidation: k
  } = (0, s.L_)();
  (0, l.Ay)(() => {
    var e, t, n;
    let r = S.entry(P).parentPanelKey,
      o = null == (e = S.entry(P)) ? true : e.parentTabKey,
      a = null == (t = S.entry(P)) ? true : t.parentCategoryKey,
      l = null == (n = S.entry(P)) ? true : n.parentAccordionKey;
    return _.A.setState({
      currentPanelKey: r,
      currentTabKeys: null != o ? new Map([
        [r, o]
      ]) : new Map,
      currentCategoryKey: a,
      navTransition: {
        targetKey: P,
        targetAccordionKey: l,
        animateScroll: false
      },
      showNavigationMobile: null == p
    }), () => _.A.resetState()
  }), o.useEffect(() => _.A.subscribe(e => ({
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
    if (null == o) return void _.A.setState({
      requestedTargetKey: true
    });
    let a = _.A.getField("currentTabKeys"),
      l = null != r.parentTabKey ? new Map(a).set(o, r.parentTabKey) : a,
      i = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === a.get(o)),
      c = () => {
        _.A.setState({
          requestedTargetKey: true,
          currentPanelKey: r.parentPanelKey,
          currentTabKeys: l,
          currentCategoryKey: r.parentCategoryKey,
          navTransition: {
            targetKey: t,
            targetAccordionKey: r.parentAccordionKey,
            animateScroll: i
          }
        })
      };
    r.parentPanelKey !== n ? k(() => {
      c(), null == m || m(o)
    }) : c()
  }, {
    equalityFn: a.x
  }), [S, k, m, j]);
  let T = o.useMemo(() => ({
      visibleDirectory: S,
      accessibleDirectory: C
    }), [S, C]),
    A = o.useMemo(() => () => k(y), [k, y]),
    E = null != x ? S.get(x) : true;
  return (0, r.jsx)(u.x.Provider, {
    value: T,
    children: (0, r.jsxs)("div", {
      className: b.k,
      children: [(0, r.jsx)(c.L, {
        root: v,
        footer: g,
        onClose: A,
        emptyState: h,
        searchQuery: O,
        onSearchChange: j
      }), (0, r.jsx)(i.A, {
        onClose: A,
        setting: null != E ? E : w
      })]
    })
  })
}

function f(e) {
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