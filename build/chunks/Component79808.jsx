/** Chunk was on 13608 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  var t;
  let {
    root: n,
    directory: y,
    target: j,
    defaultTarget: m,
    onClose: v,
    sidebarHeader: g,
    sidebarFooter: h,
    onPanelChange: O,
    emptyState: x
  } = e, P = null != j ? j : m;
  (0, o.ZP)(() => {
    var e;
    let t = null == (e = y.entry(P)) ? true : e.targetPanel;
    return d.Z.setState({
      targetKey: P,
      currentPanel: t,
      showNavigationMobile: null == j
    }), () => d.Z.resetState()
  });
  let S = d.Z.useField("currentPanel"),
    C = d.Z.useField("targetKey"),
    [_, w] = l.useState(() => y.typedGet(S)),
    E = l.useCallback(() => k(true), []),
    [N, k] = l.useState({
      target: P,
      targetAccordion: null == (t = y.entry(P)) ? true : t.parentAccordion,
      animateScroll: false,
      complete: E
    }),
    {
      navigateWithValidation: T
    } = (0, s.Cu)();
  l.useEffect(() => {
    if (null == C) return;
    let e = y.entry(C);
    if (null == e) return void i.Z.setState({
      query: ""
    });
    if (null == e.targetPanel) return void d.Z.setState({
      targetKey: true
    });
    let t = {
      target: C,
      targetAccordion: e.parentAccordion,
      complete: E
    };
    if (e.targetPanel.key !== (null == S ? true : S.key)) {
      let n = e.targetPanel;
      T(() => {
        d.Z.setState({
          targetKey: true,
          currentPanel: n,
          showNavigationMobile: false
        }), k(p(b({}, t), {
          animateScroll: false
        })), w(n), null == O || O(n.key)
      })
    } else k(p(b({}, t), {
      animateScroll: true
    })), d.Z.setState({
      targetKey: true
    })
  }, [S, C, E, y, T, O]);
  let Z = l.useMemo(() => ({
      navTransition: N
    }), [N]),
    D = () => T(v);
  return (0, r.jsx)(u.j.Provider, {
    value: Z,
    children: (0, r.jsxs)("div", {
      className: f.container,
      children: [(0, r.jsx)(c.P, {
        root: n,
        header: g,
        footer: h,
        onClose: D,
        emptyState: x
      }), (0, r.jsx)(a.Z, {
        onClose: D,
        setting: null != S ? S : _
      })]
    })
  })
}

function j(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(y, b({}, e))
  })
}