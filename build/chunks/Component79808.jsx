/** Chunk was on 47129 **/
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

function c(e) {
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
    directory: y,
    target: O,
    onClose: g,
    sidebarHeader: E,
    sidebarFooter: p,
    onPanelChange: v
  } = e, [T, S] = i.useState(true), [j, N] = i.useState(null == (t = y.entry(O)) ? true : t.parentPanel), [m, C] = i.useState(() => y.typedGet(j)), _ = i.useCallback(() => x(true), []), [P, x] = i.useState({
    target: O,
    targetAccordion: null == (n = y.entry(O)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: _
  }), {
    navigateWithValidation: I
  } = (0, s.Cu)(), A = i.useMemo(() => ({
    currentPanel: y.typedGet(j),
    navigateTo: e => {
      let t = y.entry(e);
      if ((null == t ? true : t.parentPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: _
      };
      if (t.parentPanel.key !== (null == j ? true : j.key)) {
        let e = t.parentPanel;
        I(() => {
          x(d(c({}, n), {
            animateScroll: false
          })), C(e), N(e), null == v || v(e.key)
        })
      } else x(d(c({}, n), {
        animateScroll: true
      }))
    },
    navTransition: P,
    showNavigationMobile: T,
    setShowNavigationMobile: S
  }), [y, j, P, T, _, I, v]), h = () => I(g);
  return (0, r.jsx)(a.j.Provider, {
    value: A,
    children: (0, r.jsxs)("div", {
      className: u.container,
      children: [(0, r.jsx)(o.P, {
        root: b,
        header: E,
        footer: p,
        onClose: h
      }), (0, r.jsx)(l.Z, {
        onClose: h,
        setting: null != (f = A.currentPanel) ? f : m
      })]
    })
  })
}

function b(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(f, c({}, e))
  })
}