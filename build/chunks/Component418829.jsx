/** Chunk was on 59024 **/
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
    onClose: g,
    sidebarFooter: m,
    onPanelChange: h,
    emptyState: j,
    searchQuery: O,
    onSearchChange: v
  } = e, _ = b.A.useField("currentPanelKey"), {
    node: x,
    visibleDirectory: S,
    accessibleDirectory: P
  } = (0, d.Ay)(n, null != O ? O : ""), w = null != p && (null == (t = S.entry(p)) ? true : t.parentPanelKey) != null ? p : f, C = l.useMemo(() => {
    var e;
    let t = null == (e = P.entry(null != _ ? _ : w)) ? true : e.parentPanelKey;
    if (null != t) return P.getPanelOrThrow(t)
  }, [_, P, w]), {
    navigateWithValidation: A
  } = (0, s.L_)();
  (0, a.Ay)(() => {
    var e, t, n;
    let r = S.entry(w).parentPanelKey,
      l = null == (e = S.entry(w)) ? true : e.parentTabKey,
      o = null == (t = S.entry(w)) ? true : t.parentCategoryKey,
      a = null == (n = S.entry(w)) ? true : n.parentAccordionKey;
    return b.A.setState({
      currentPanelKey: r,
      currentTabKeys: null != l ? new Map([
        [r, l]
      ]) : new Map,
      currentCategoryKey: o,
      disableSidebarCategoryAutoSelect: true,
      navTransition: {
        targetKey: w,
        targetAccordionKey: a,
        animateScroll: false
      },
      showNavigationMobile: null == p
    }), () => b.A.resetState()
  }), l.useEffect(() => b.A.subscribe(e => ({
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
      null == v || v("");
      return
    }
    let l = r.parentPanelKey;
    if (null == l) return void b.A.setState({
      requestedTargetKey: true
    });
    let o = b.A.getField("currentTabKeys"),
      a = null != r.parentTabKey ? new Map(o).set(l, r.parentTabKey) : o,
      i = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === o.get(l)),
      c = () => {
        b.A.setState({
          requestedTargetKey: true,
          currentPanelKey: r.parentPanelKey,
          currentTabKeys: a,
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
      c(), null == h || h(l)
    }) : c()
  }, {
    equalityFn: o.x
  }), [S, A, h, v]);
  let N = l.useMemo(() => ({
      visibleDirectory: S,
      accessibleDirectory: P
    }), [S, P]),
    E = l.useMemo(() => () => A(g), [A, g]),
    T = null != _ ? S.get(_) : true;
  return (0, r.jsx)(u.x.Provider, {
    value: N,
    children: (0, r.jsxs)("div", {
      className: y.k,
      children: [(0, r.jsx)(c.L, {
        root: x,
        footer: m,
        onClose: E,
        emptyState: j,
        searchQuery: O,
        onSearchChange: v
      }), (0, r.jsx)(i.A, {
        onClose: E,
        setting: null != T ? T : C
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