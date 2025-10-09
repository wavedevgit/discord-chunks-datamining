/** Chunk was on 75685 **/
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
    sidebarHeader: v,
    sidebarFooter: x,
    onPanelChange: y,
    emptyState: h
  } = e, [g, O] = l.useState(true), [C, S] = l.useState(null == (t = m.entry(p)) ? true : t.targetPanel), [P, _] = l.useState(() => m.typedGet(C)), E = l.useCallback(() => k(true), []), [N, k] = l.useState({
    target: p,
    targetAccordion: null == (n = m.entry(p)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: E
  }), {
    navigateWithValidation: T
  } = (0, a.Cu)(), w = l.useMemo(() => ({
    currentPanel: m.typedGet(C),
    navigateTo: e => {
      let t = m.entry(e);
      if ((null == t ? true : t.targetPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: E
      };
      if (t.targetPanel.key !== (null == C ? true : C.key)) {
        let e = t.targetPanel;
        T(() => {
          k(d(u({}, n), {
            animateScroll: false
          })), _(e), S(e), null == y || y(e.key)
        })
      } else k(d(u({}, n), {
        animateScroll: true
      }))
    },
    navTransition: N,
    showNavigationMobile: g,
    setShowNavigationMobile: O
  }), [m, C, N, g, E, T, y]), Z = () => T(j);
  return (0, r.jsx)(s.j.Provider, {
    value: w,
    children: (0, r.jsxs)("div", {
      className: c.container,
      children: [(0, r.jsx)(i.P, {
        root: b,
        header: v,
        footer: x,
        onClose: Z,
        emptyState: h
      }), (0, r.jsx)(o.Z, {
        onClose: Z,
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