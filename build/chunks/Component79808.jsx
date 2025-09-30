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
    directory: p,
    target: m,
    onClose: j,
    sidebarHeader: y,
    sidebarFooter: x,
    onPanelChange: v
  } = e, [g, h] = o.useState(true), [O, C] = o.useState(null == (t = p.entry(m)) ? true : t.parentPanel), [P, _] = o.useState(() => p.typedGet(O)), S = o.useCallback(() => N(true), []), [E, N] = o.useState({
    target: m,
    targetAccordion: null == (n = p.entry(m)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: S
  }), {
    navigateWithValidation: k
  } = (0, a.Cu)(), w = o.useMemo(() => ({
    currentPanel: p.typedGet(O),
    navigateTo: e => {
      let t = p.entry(e);
      if ((null == t ? true : t.parentPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: S
      };
      if (t.parentPanel.key !== (null == O ? true : O.key)) {
        let e = t.parentPanel;
        k(() => {
          N(d(u({}, n), {
            animateScroll: false
          })), _(e), C(e), null == v || v(e.key)
        })
      } else N(d(u({}, n), {
        animateScroll: true
      }))
    },
    navTransition: E,
    showNavigationMobile: g,
    setShowNavigationMobile: h
  }), [p, O, E, g, S, k, v]), T = () => k(j);
  return (0, r.jsx)(s.j.Provider, {
    value: w,
    children: (0, r.jsxs)("div", {
      className: c.container,
      children: [(0, r.jsx)(i.P, {
        root: b,
        header: y,
        footer: x,
        onClose: T
      }), (0, r.jsx)(l.Z, {
        onClose: T,
        setting: null != (f = w.currentPanel) ? f : P
      })]
    })
  })
}

function b(e) {
  return (0, r.jsx)(a.Ri, {
    children: (0, r.jsx)(f, u({}, e))
  })
}