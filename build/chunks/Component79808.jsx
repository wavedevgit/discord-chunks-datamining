/** Chunk was on 88569 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk493773 = require("./493773.js"),
  Chunk996733 = require("./996733.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk996435 = require("./996435.js"),
  Chunk990757 = require("./990757.js");

function b(e) {
  var t;
  let {
    root: n,
    directory: b,
    target: y,
    defaultTarget: g,
    onClose: v,
    sidebarHeader: m,
    sidebarFooter: h,
    onPanelChange: x,
    emptyState: j
  } = e, O = null != y && (null == (t = b.entry(y)) ? true : t.parentPanelKey) != null ? y : g, P = f.Z.useField("currentPanelKey"), [C, S] = l.useState(b), _ = l.useMemo(() => C.get(null != P ? P : O), [C, P, O]), {
    navigateWithValidation: E
  } = (0, u.Cu)();
  (0, o.ZP)(() => {
    var e, t;
    let n = b.entry(O).parentPanelKey,
      r = null == (e = b.entry(O)) ? true : e.parentCategoryKey,
      l = null == (t = b.entry(O)) ? true : t.parentAccordionKey;
    return f.Z.setState({
      currentPanelKey: n,
      currentCategoryKey: r,
      disableSidebarCategoryAutoSelect: true,
      navTransition: {
        targetKey: O,
        targetAccordionKey: l,
        animateScroll: false
      },
      showNavigationMobile: null == y
    }), () => f.Z.resetState()
  }), l.useEffect(() => f.Z.subscribe(e => ({
    requestedTargetKey: e.requestedTargetKey,
    currentPanelKey: e.currentPanelKey
  }), e => {
    let {
      requestedTargetKey: t,
      currentPanelKey: n
    } = e;
    if (null == t) return;
    let r = b.entry(t);
    if (null == r) return void a.Z.setState({
      query: ""
    });
    let l = r.parentPanelKey;
    if (null == l) return void f.Z.setState({
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
    r.parentPanelKey !== n ? E(() => {
      i(), null == x || x(l)
    }) : i()
  }, {
    equalityFn: i.X
  }), [b, E, x]);
  let w = l.useMemo(() => ({
      directory: b,
      fallbackDirectory: C
    }), [b, C]),
    N = () => E(v),
    Z = null != P ? b.get(P) : true;
  return (0, r.jsx)(d.j.Provider, {
    value: w,
    children: (0, r.jsxs)("div", {
      className: p.container,
      children: [(0, r.jsx)(c.P, {
        root: n,
        header: m,
        footer: h,
        onClose: N,
        emptyState: j
      }), (0, r.jsx)(s.Z, {
        onClose: N,
        setting: null != Z ? Z : _
      })]
    })
  })
}

function y(e) {
  return (0, r.jsx)(u.Ri, {
    children: (0, r.jsx)(b, function(e) {
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