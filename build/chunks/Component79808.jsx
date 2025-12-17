/** Chunk was on 91968 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk493773 = require("./493773.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk131051 = require("./131051.js"),
  Chunk996435 = require("./996435.js"),
  Chunk785766 = require("./785766.js");

function y(e) {
  var t;
  let {
    partialRoot: n,
    target: y,
    defaultTarget: p,
    onClose: g,
    sidebarFooter: O,
    onPanelChange: m,
    emptyState: j,
    searchQuery: v,
    onSearchChange: h
  } = e, x = d.Z.useField("currentPanelKey"), {
    node: S,
    visibleDirectory: P,
    accessibleDirectory: C
  } = (0, f.ZP)(n, null != v ? v : ""), w = null != y && (null == (t = P.entry(y)) ? true : t.parentPanelKey) != null ? y : p, T = o.useMemo(() => {
    var e;
    let t = null == (e = C.entry(null != x ? x : w)) ? true : e.parentPanelKey;
    if (null != t) return C.getPanelOrThrow(t)
  }, [x, C, w]), {
    navigateWithValidation: k
  } = (0, s.Cu)();
  (0, i.ZP)(() => {
    var e, t, n;
    let r = P.entry(w).parentPanelKey,
      o = null == (e = P.entry(w)) ? true : e.parentTabKey,
      a = null == (t = P.entry(w)) ? true : t.parentCategoryKey,
      i = null == (n = P.entry(w)) ? true : n.parentAccordionKey;
    return d.Z.setState({
      currentPanelKey: r,
      currentTabKeys: null != o ? new Map([
        [r, o]
      ]) : new Map,
      currentCategoryKey: a,
      disableSidebarCategoryAutoSelect: true,
      navTransition: {
        targetKey: w,
        targetAccordionKey: i,
        animateScroll: false
      },
      showNavigationMobile: null == y
    }), () => d.Z.resetState()
  }), o.useEffect(() => d.Z.subscribe(e => ({
    requestedTargetKey: e.requestedTargetKey,
    currentPanelKey: e.currentPanelKey
  }), e => {
    let {
      requestedTargetKey: t,
      currentPanelKey: n
    } = e;
    if (null == t) return;
    let r = P.entry(t);
    if (null == r) {
      null == h || h("");
      return
    }
    let o = r.parentPanelKey;
    if (null == o) return void d.Z.setState({
      requestedTargetKey: true
    });
    let a = d.Z.getField("currentTabKeys"),
      i = null != r.parentTabKey ? new Map(a).set(o, r.parentTabKey) : a,
      l = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === a.get(o)),
      c = () => {
        d.Z.setState({
          requestedTargetKey: true,
          currentPanelKey: r.parentPanelKey,
          currentTabKeys: i,
          currentCategoryKey: r.parentCategoryKey,
          disableSidebarCategoryAutoSelect: true,
          navTransition: {
            targetKey: t,
            targetAccordionKey: r.parentAccordionKey,
            animateScroll: l
          }
        })
      };
    r.parentPanelKey !== n ? k(() => {
      c(), null == m || m(o)
    }) : c()
  }, {
    equalityFn: a.X
  }), [P, k, m, h]);
  let E = o.useMemo(() => ({
      visibleDirectory: P,
      accessibleDirectory: C
    }), [P, C]),
    N = () => k(g),
    Z = null != x ? P.get(x) : true;
  return (0, r.jsx)(u.j.Provider, {
    value: E,
    children: (0, r.jsxs)("div", {
      className: b.container,
      children: [(0, r.jsx)(c.P, {
        root: S,
        footer: O,
        onClose: N,
        emptyState: j,
        searchQuery: v,
        onSearchChange: h
      }), (0, r.jsx)(l.Z, {
        onClose: N,
        setting: null != Z ? Z : T
      })]
    })
  })
}

function p(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(y, function(e) {
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