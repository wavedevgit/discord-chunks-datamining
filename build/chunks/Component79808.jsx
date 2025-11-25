/** Chunk was on 46984 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function p(e) {
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

function b(e, t) {
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

function y(e) {
  var t, n;
  let {
    root: y,
    directory: g,
    target: v,
    defaultTarget: h,
    onClose: m,
    sidebarHeader: x,
    sidebarFooter: j,
    onPanelChange: O,
    emptyState: C
  } = e, S = null != v && (null == (t = g.entry(v)) ? true : t.targetPanelKey) != null ? v : h;
  (0, i.ZP)(() => {
    let e = g.entry(S).targetPanelKey;
    return d.Z.setState({
      targetKey: S,
      currentPanelKey: e,
      showNavigationMobile: null == v
    }), () => d.Z.resetState()
  });
  let P = d.Z.useField("currentPanelKey"),
    _ = d.Z.useField("targetKey"),
    [E, w] = l.useState(g),
    N = l.useMemo(() => E.get(null != P ? P : S), [E, P, S]),
    k = l.useCallback(() => T(true), []),
    [Z, T] = l.useState({
      target: S,
      targetAccordionKey: null == (n = g.entry(S)) ? true : n.parentAccordionKey,
      animateScroll: false,
      complete: k
    }),
    {
      navigateWithValidation: I
    } = (0, c.Cu)();
  l.useEffect(() => {
    if (null == _) return;
    let e = g.entry(_);
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
        }), T(b(p({}, t), {
          animateScroll: false
        })), null == O || O(n)
      })
    } else T(b(p({}, t), {
      animateScroll: true
    })), d.Z.setState({
      targetKey: true
    })
  }, [P, _, k, g, I, O]);
  let D = l.useMemo(() => ({
      navTransition: Z,
      directory: g,
      fallbackDirectory: E
    }), [Z, g, E]),
    A = () => I(m),
    R = null != P ? g.get(P) : true;
  return (0, r.jsx)(u.j.Provider, {
    value: D,
    children: (0, r.jsxs)("div", {
      className: f.container,
      children: [(0, r.jsx)(s.P, {
        root: y,
        header: x,
        footer: j,
        onClose: A,
        emptyState: C
      }), (0, r.jsx)(a.Z, {
        onClose: A,
        setting: null != R ? R : N
      })]
    })
  })
}

function g(e) {
  return (0, r.jsx)(c.Ri, {
    children: (0, r.jsx)(y, p({}, e))
  })
}