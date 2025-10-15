/** Chunk was on 75685 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function m(e, t) {
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

function v(e) {
  var t;
  let {
    root: n,
    directory: v,
    target: p,
    defaultTarget: j,
    onClose: x,
    sidebarHeader: y,
    sidebarFooter: h,
    onPanelChange: g,
    emptyState: O
  } = e, C = null != p ? p : j;
  (0, o.ZP)(() => {
    var e;
    let t = null == (e = v.entry(C)) ? true : e.targetPanel;
    return d.Z.setState({
      targetKey: C,
      currentPanel: t,
      showNavigationMobile: null == p
    }), () => d.Z.resetState()
  });
  let S = d.Z.useField("currentPanel"),
    P = d.Z.useField("targetKey"),
    [_, N] = l.useState(() => v.typedGet(S)),
    E = l.useCallback(() => k(true), []),
    [T, k] = l.useState({
      target: C,
      targetAccordion: null == (t = v.entry(C)) ? true : t.parentAccordion,
      animateScroll: false,
      complete: E
    }),
    {
      navigateWithValidation: Z
    } = (0, c.Cu)();
  l.useEffect(() => {
    if (null == P) return;
    let e = v.entry(P);
    if (null == e) return void i.Z.setState({
      query: ""
    });
    if (null == e.targetPanel) return void d.Z.setState({
      targetKey: true
    });
    let t = {
      target: P,
      targetAccordion: e.parentAccordion,
      complete: E
    };
    if (e.targetPanel.key !== (null == S ? true : S.key)) {
      let n = e.targetPanel;
      Z(() => {
        d.Z.setState({
          targetKey: true,
          currentPanel: n,
          showNavigationMobile: false
        }), k(m(b({}, t), {
          animateScroll: false
        })), N(n), null == g || g(n.key)
      })
    } else k(m(b({}, t), {
      animateScroll: true
    })), d.Z.setState({
      targetKey: true
    })
  }, [S, P, E, v, Z, g]);
  let w = l.useMemo(() => ({
      navTransition: T
    }), [T]),
    I = () => Z(x);
  return (0, r.jsx)(u.j.Provider, {
    value: w,
    children: (0, r.jsxs)("div", {
      className: f.container,
      children: [(0, r.jsx)(s.P, {
        root: n,
        header: y,
        footer: h,
        onClose: I,
        emptyState: O
      }), (0, r.jsx)(a.Z, {
        onClose: I,
        setting: null != S ? S : _
      })]
    })
  })
}

function p(e) {
  return (0, r.jsx)(c.Ri, {
    children: (0, r.jsx)(v, b({}, e))
  })
}