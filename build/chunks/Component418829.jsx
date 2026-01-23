/** Chunk was on 48666 **/
/** chunk id: 418829, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function d(e) {
  var t;
  let {
    partialRoot: r,
    target: d,
    defaultTarget: p,
    onClose: g,
    sidebarFooter: O,
    onPanelChange: j,
    emptyState: h,
    searchQuery: m,
    onSearchChange: v
  } = e, x = f.A.useField("currentPanelKey"), {
    node: S,
    visibleDirectory: P,
    accessibleDirectory: _
  } = (0, y.Ay)(r, null != m ? m : ""), w = null != d && (null == (t = P.entry(d)) ? true : t.parentPanelKey) != null ? d : p, C = l.useMemo(() => {
    var e;
    let t = null == (e = _.entry(null != x ? x : w)) ? true : e.parentPanelKey;
    if (null != t) return _.getPanelOrThrow(t)
  }, [x, _, w]), {
    navigateWithValidation: A
  } = (0, s.L_)();
  (0, a.Ay)(() => {
    var e, t, r;
    let n = P.entry(w).parentPanelKey,
      l = null == (e = P.entry(w)) ? true : e.parentTabKey,
      o = null == (t = P.entry(w)) ? true : t.parentCategoryKey,
      a = null == (r = P.entry(w)) ? true : r.parentAccordionKey;
    return f.A.setState({
      currentPanelKey: n,
      currentTabKeys: null != l ? new Map([
        [n, l]
      ]) : new Map,
      currentCategoryKey: o,
      disableSidebarCategoryAutoSelect: true,
      navTransition: {
        targetKey: w,
        targetAccordionKey: a,
        animateScroll: false
      },
      showNavigationMobile: null == d
    }), () => f.A.resetState()
  }), l.useEffect(() => f.A.subscribe(e => ({
    requestedTargetKey: e.requestedTargetKey,
    currentPanelKey: e.currentPanelKey
  }), e => {
    let {
      requestedTargetKey: t,
      currentPanelKey: r
    } = e;
    if (null == t) return;
    let n = P.entry(t);
    if (null == n) {
      null == v || v("");
      return
    }
    let l = n.parentPanelKey;
    if (null == l) return void f.A.setState({
      requestedTargetKey: true
    });
    let o = f.A.getField("currentTabKeys"),
      a = null != n.parentTabKey ? new Map(o).set(l, n.parentTabKey) : o,
      i = n.parentPanelKey === r && (null == n.parentTabKey || n.parentTabKey === o.get(l)),
      c = () => {
        f.A.setState({
          requestedTargetKey: true,
          currentPanelKey: n.parentPanelKey,
          currentTabKeys: a,
          currentCategoryKey: n.parentCategoryKey,
          disableSidebarCategoryAutoSelect: true,
          navTransition: {
            targetKey: t,
            targetAccordionKey: n.parentAccordionKey,
            animateScroll: i
          }
        })
      };
    n.parentPanelKey !== r ? A(() => {
      c(), null == j || j(l)
    }) : c()
  }, {
    equalityFn: o.x
  }), [P, A, j, v]);
  let T = l.useMemo(() => ({
      visibleDirectory: P,
      accessibleDirectory: _
    }), [P, _]),
    N = l.useMemo(() => () => A(g), [A, g]),
    E = null != x ? P.get(x) : true;
  return (0, n.jsx)(u.x.Provider, {
    value: T,
    children: (0, n.jsxs)("div", {
      className: b.k,
      children: [(0, n.jsx)(c.L, {
        root: S,
        footer: O,
        onClose: N,
        emptyState: h,
        searchQuery: m,
        onSearchChange: v
      }), (0, n.jsx)(i.A, {
        onClose: N,
        setting: null != E ? E : C
      })]
    })
  })
}

function p(e) {
  return (0, n.jsx)(s.ms, {
    children: (0, n.jsx)(d, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e))
  })
}