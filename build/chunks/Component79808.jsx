/** Chunk was on 75685 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk493773 = require("./493773.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk996435 = require("./996435.js"),
  Chunk990757 = require("./990757.js");

function f(e) {
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

function m(e) {
  var t;
  let {
    root: n,
    directory: m,
    target: v,
    defaultTarget: p,
    onClose: j,
    sidebarHeader: x,
    sidebarFooter: y,
    onPanelChange: h,
    emptyState: g
  } = e, O = null != v ? v : p;
  (0, o.ZP)(() => {
    var e;
    let t = null == (e = m.entry(O)) ? true : e.targetPanel;
    return u.Z.setState({
      targetKey: O,
      currentPanel: t,
      showNavigationMobile: null == v
    }), () => u.Z.resetState()
  });
  let C = u.Z.useField("currentPanel"),
    S = u.Z.useField("targetKey"),
    [P, _] = l.useState(() => m.typedGet(C)),
    N = l.useCallback(() => T(true), []),
    [E, T] = l.useState({
      target: O,
      targetAccordion: null == (t = m.entry(O)) ? true : t.parentAccordion,
      animateScroll: false,
      complete: N
    }),
    {
      navigateWithValidation: k
    } = (0, s.Cu)();
  l.useEffect(() => {
    let e = null != S ? m.entry(S) : true;
    if (null == S || (null == e ? true : e.targetPanel) == null) return void u.Z.setState({
      targetKey: true
    });
    let t = {
      target: S,
      targetAccordion: e.parentAccordion,
      complete: N
    };
    if (e.targetPanel.key !== (null == C ? true : C.key)) {
      let n = e.targetPanel;
      k(() => {
        u.Z.setState({
          targetKey: true,
          currentPanel: n,
          showNavigationMobile: false
        }), T(b(f({}, t), {
          animateScroll: false
        })), _(n), null == h || h(n.key)
      })
    } else T(b(f({}, t), {
      animateScroll: true
    })), u.Z.setState({
      targetKey: true
    })
  }, [C, S, N, m, k, h]);
  let Z = l.useMemo(() => ({
      navTransition: E
    }), [E]),
    w = () => k(j);
  return (0, r.jsx)(c.j.Provider, {
    value: Z,
    children: (0, r.jsxs)("div", {
      className: d.container,
      children: [(0, r.jsx)(a.P, {
        root: n,
        header: x,
        footer: y,
        onClose: w,
        emptyState: g
      }), (0, r.jsx)(i.Z, {
        onClose: w,
        setting: null != C ? C : P
      })]
    })
  })
}

function v(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(m, f({}, e))
  })
}