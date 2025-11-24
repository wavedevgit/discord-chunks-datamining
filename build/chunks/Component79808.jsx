/** Chunk was on 46984 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk493773 = require("./493773.js"),
  Chunk996733 = require("./996733.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk996435 = require("./996435.js"),
  Chunk990757 = require("./990757.js");

function b(e) {
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
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  var t, n;
  let {
    root: p,
    directory: v,
    target: j,
    defaultTarget: g,
    onClose: m,
    sidebarHeader: h,
    sidebarFooter: x,
    onPanelChange: O,
    emptyState: S
  } = e, C = null != j && (null == (t = v.entry(j)) ? true : t.targetPanelKey) != null ? j : g;
  (0, i.ZP)(() => {
    let e = v.entry(C).targetPanelKey;
    return d.Z.setState({
      targetKey: C,
      currentPanelKey: e,
      showNavigationMobile: null == j
    }), () => d.Z.resetState()
  });
  let P = d.Z.useField("currentPanelKey"),
    _ = d.Z.useField("targetKey"),
    [E, N] = l.useState(v),
    w = l.useMemo(() => E.get(null != P ? P : C), [E, P, C]),
    k = l.useCallback(() => T(true), []),
    [Z, T] = l.useState({
      target: C,
      targetAccordionKey: null == (n = v.entry(C)) ? true : n.parentAccordionKey,
      animateScroll: false,
      complete: k
    }),
    {
      navigateWithValidation: I
    } = (0, s.Cu)();
  l.useEffect(() => {
    if (null == _) return;
    let e = v.entry(_);
    if (null == e) return void o.Z.setState({
      query: ""
    });
    if (null == e.targetPanelKey) return void d.Z.setState({
      targetKey: true
    });
    let t = {
      target: _,
      targetAccordion: e.parentAccordionKey,
      complete: k
    };
    if (e.targetPanelKey !== P) {
      let n = e.targetPanelKey;
      I(() => {
        d.Z.setState({
          targetKey: true,
          currentPanelKey: n,
          showNavigationMobile: false
        }), T(y(b({}, t), {
          animateScroll: false
        })), null == O || O(n)
      })
    } else T(y(b({}, t), {
      animateScroll: true
    })), d.Z.setState({
      targetKey: true
    })
  }, [P, _, k, v, I, O]);
  let D = l.useMemo(() => ({
      navTransition: Z,
      directory: v
    }), [Z, v]),
    A = () => I(m),
    R = null != P ? v.get(P) : true;
  return (0, r.jsx)(u.j.Provider, {
    value: D,
    children: (0, r.jsxs)("div", {
      className: f.container,
      children: [(0, r.jsx)(c.P, {
        root: p,
        header: h,
        footer: x,
        onClose: A,
        emptyState: S
      }), (0, r.jsx)(a.Z, {
        onClose: A,
        setting: null != R ? R : w
      })]
    })
  })
}

function v(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(p, b({}, e))
  })
}