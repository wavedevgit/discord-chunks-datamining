/** Chunk was on 88657 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk4640 = require("./4640.js");

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

function p(e, t) {
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
    directory: j,
    target: m,
    defaultTarget: v,
    onClose: g,
    sidebarHeader: x,
    sidebarFooter: h,
    onPanelChange: O,
    emptyState: P
  } = e, S = null != m && (null == (t = j.entry(m)) ? true : t.targetPanelKey) != null ? m : v;
  (0, i.ZP)(() => {
    let e = j.entry(S).targetPanelKey;
    return d.Z.setState({
      targetKey: S,
      currentPanelKey: e,
      showNavigationMobile: null == m
    }), () => d.Z.resetState()
  });
  let C = d.Z.useField("currentPanelKey"),
    _ = d.Z.useField("targetKey"),
    [N, E] = l.useState(j),
    w = l.useMemo(() => N.get(null != C ? C : S), [N, C, S]),
    T = l.useCallback(() => Z(true), []),
    [k, Z] = l.useState({
      target: S,
      targetAccordionKey: null == (n = j.entry(S)) ? true : n.parentAccordionKey,
      animateScroll: false,
      complete: T
    }),
    {
      navigateWithValidation: I
    } = (0, s.Cu)();
  l.useEffect(() => {
    if (null == _) return;
    let e = j.entry(_);
    if (null == e) return void o.Z.setState({
      query: ""
    });
    if (null == e.targetPanelKey) return void d.Z.setState({
      targetKey: true
    });
    let t = {
      target: _,
      targetAccordion: e.parentAccordionKey,
      complete: T
    };
    if (e.targetPanelKey !== C) {
      let n = e.targetPanelKey;
      I(() => {
        d.Z.setState({
          targetKey: true,
          currentPanelKey: n,
          showNavigationMobile: false
        }), Z(p(b({}, t), {
          animateScroll: false
        })), null == O || O(n)
      })
    } else Z(p(b({}, t), {
      animateScroll: true
    })), d.Z.setState({
      targetKey: true
    })
  }, [C, _, T, j, I, O]);
  let D = l.useMemo(() => ({
      navTransition: k,
      directory: j
    }), [k, j]),
    R = () => I(g),
    A = null != C ? j.get(C) : true;
  return (0, r.jsx)(u.j.Provider, {
    value: D,
    children: (0, r.jsxs)("div", {
      className: f.container,
      children: [(0, r.jsx)(c.P, {
        root: y,
        header: x,
        footer: h,
        onClose: R,
        emptyState: P
      }), (0, r.jsx)(a.Z, {
        onClose: R,
        setting: null != A ? A : w
      })]
    })
  })
}

function j(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(y, b({}, e))
  })
}