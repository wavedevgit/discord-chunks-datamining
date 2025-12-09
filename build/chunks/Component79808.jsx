/** Chunk was on 88569 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function y(e) {
  var t;
  let {
    root: n,
    directory: y,
    target: p,
    defaultTarget: g,
    onClose: O,
    sidebarHeader: j,
    sidebarFooter: m,
    onPanelChange: v,
    emptyState: h
  } = e, x = null != p && (null == (t = y.entry(p)) ? true : t.parentPanelKey) != null ? p : g, S = f.Z.useField("currentPanelKey"), [P, C] = o.useState(y), _ = o.useMemo(() => P.get(null != S ? S : x), [P, S, x]), {
    navigateWithValidation: w
  } = (0, u.Cu)();
  (0, l.ZP)(() => {
    var e, t;
    let n = y.entry(x).parentPanelKey,
      r = null == (e = y.entry(x)) ? true : e.parentCategoryKey,
      o = null == (t = y.entry(x)) ? true : t.parentAccordionKey;
    return f.Z.setState({
      currentPanelKey: n,
      currentCategoryKey: r,
      disableSidebarCategoryAutoSelect: true,
      navTransition: {
        targetKey: x,
        targetAccordionKey: o,
        animateScroll: false
      },
      showNavigationMobile: null == p
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
    let r = y.entry(t);
    if (null == r) return void a.Z.setState({
      query: ""
    });
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
    r.parentPanelKey !== n ? w(() => {
      i(), null == v || v(o)
    }) : i()
  }, {
    equalityFn: i.X
  }), [w, v, y]);
  let k = o.useMemo(() => ({
      visibleDirectory: y,
      accessibleDirectory: P
    }), [y, P]),
    E = () => w(O),
    N = null != S ? y.get(S) : true;
  return (0, r.jsx)(d.j.Provider, {
    value: k,
    children: (0, r.jsxs)("div", {
      className: b.container,
      children: [(0, r.jsx)(s.P, {
        root: n,
        header: j,
        footer: m,
        onClose: E,
        emptyState: h
      }), (0, r.jsx)(c.Z, {
        onClose: E,
        setting: null != N ? N : _
      })]
    })
  })
}

function p(e) {
  return (0, r.jsx)(u.Ri, {
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