/** Chunk was on 59739 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk990757 = require("./990757.js");

function u(e) {
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

function d(e, t) {
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

function f(e) {
  var t, n, f;
  let {
    root: b,
    directory: m,
    target: p,
    onClose: j,
    sidebarHeader: x,
    sidebarFooter: v,
    onPanelChange: y
  } = e, [g, h] = o.useState(true), [O, C] = o.useState(null == (t = m.entry(p)) ? true : t.parentPanel), [_, P] = o.useState(() => m.typedGet(O)), S = o.useCallback(() => N(true), []), [E, N] = o.useState({
    target: p,
    targetAccordion: null == (n = m.entry(p)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: S
  }), {
    navigateWithValidation: T
  } = (0, a.Cu)(), k = o.useMemo(() => ({
    currentPanel: m.typedGet(O),
    navigateTo: e => {
      let t = m.entry(e);
      if ((null == t ? true : t.parentPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: S
      };
      if (t.parentPanel.key !== (null == O ? true : O.key)) {
        let e = t.parentPanel;
        T(() => {
          N(d(u({}, n), {
            animateScroll: false
          })), P(e), C(e), null == y || y(e.key)
        })
      } else N(d(u({}, n), {
        animateScroll: true
      }))
    },
    navTransition: E,
    showNavigationMobile: g,
    setShowNavigationMobile: h
  }), [m, O, E, g, S, T, y]), w = () => T(j);
  return (0, r.jsx)(s.j.Provider, {
    value: k,
    children: (0, r.jsxs)("div", {
      className: c.container,
      children: [(0, r.jsx)(i.P, {
        root: b,
        header: x,
        footer: v,
        onClose: w
      }), (0, r.jsx)(l.Z, {
        onClose: w,
        setting: null != (f = k.currentPanel) ? f : _
      })]
    })
  })
}

function b(e) {
  return (0, r.jsx)(a.Ri, {
    children: (0, r.jsx)(f, u({}, e))
  })
}