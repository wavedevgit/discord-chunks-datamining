/** Chunk was on 88569 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
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
  Chunk990757 = require("./990757.js");

function y(e) {
  var t;
  let {
    partialRoot: n,
    target: y,
    defaultTarget: p,
    onClose: g,
    sidebarFooter: O,
    onPanelChange: j,
    emptyState: m,
    searchQuery: v,
    onSearchChange: h
  } = e, x = f.Z.useField("currentPanelKey"), {
    directory: S
  } = (0, d.Z)(n, ""), {
    node: P,
    directory: C
  } = (0, d.Z)(n, v), _ = null != y && (null == (t = C.entry(y)) ? true : t.parentPanelKey) != null ? y : p, w = o.useMemo(() => S.get(null != x ? x : _), [S, x, _]), {
    navigateWithValidation: k
  } = (0, s.Cu)();
  (0, l.ZP)(() => {
    var e, t;
    let n = C.entry(_).parentPanelKey,
      r = null == (e = C.entry(_)) ? true : e.parentCategoryKey,
      o = null == (t = C.entry(_)) ? true : t.parentAccordionKey;
    return f.Z.setState({
      currentPanelKey: n,
      currentCategoryKey: r,
      disableSidebarCategoryAutoSelect: true,
      navTransition: {
        targetKey: _,
        targetAccordionKey: o,
        animateScroll: false
      },
      showNavigationMobile: null == y
    }), () => f.Z.resetState()
  }), o.useEffect(() => f.Z.subscribe(e => ({
    requestedTargetKey: e.requestedTargetKey,
    currentPanelKey: e.currentPanelKey
  }), e => {
    let {
      requestedTargetKey: t,
      currentPanelKey: n
    } = e;
    if (null == t) return;
    let r = C.entry(t);
    if (null == r) {
      null == h || h("");
      return
    }
    let o = r.parentPanelKey;
    if (null == o) return void f.Z.setState({
      requestedTargetKey: true
    });
    let i = () => {
      f.Z.setState({
        requestedTargetKey: true,
        currentPanelKey: r.parentPanelKey,
        currentCategoryKey: r.parentCategoryKey,
        disableSidebarCategoryAutoSelect: true,
        navTransition: {
          targetKey: t,
          targetAccordionKey: r.parentAccordionKey,
          animateScroll: r.parentPanelKey === n
        }
      })
    };
    r.parentPanelKey !== n ? k(() => {
      i(), null == j || j(o)
    }) : i()
  }, {
    equalityFn: i.X
  }), [C, k, j, h]);
  let N = o.useMemo(() => ({
      directory: C,
      fallbackDirectory: S
    }), [C, S]),
    E = () => k(g),
    T = null != x ? C.get(x) : true;
  return (0, r.jsx)(u.j.Provider, {
    value: N,
    children: (0, r.jsxs)("div", {
      className: b.container,
      children: [(0, r.jsx)(c.P, {
        root: P,
        footer: O,
        onClose: E,
        emptyState: m,
        searchQuery: v,
        onSearchChange: h
      }), (0, r.jsx)(a.Z, {
        onClose: E,
        setting: null != T ? T : w
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