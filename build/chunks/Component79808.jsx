/** Chunk was on 75685 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
    root: m,
    directory: b,
    target: j,
    onClose: x,
    sidebarHeader: p,
    sidebarFooter: v,
    onPanelChange: y
  } = e, [h, g] = l.useState(true), [O, C] = l.useState(null == (t = b.entry(j)) ? true : t.targetPanel), [_, P] = l.useState(() => b.typedGet(O)), S = l.useCallback(() => E(true), []), [N, E] = l.useState({
    target: j,
    targetAccordion: null == (n = b.entry(j)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: S
  }), {
    navigateWithValidation: k
  } = (0, a.Cu)(), T = l.useMemo(() => ({
    currentPanel: b.typedGet(O),
    navigateTo: e => {
      let t = b.entry(e);
      if ((null == t ? true : t.targetPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: S
      };
      if (t.targetPanel.key !== (null == O ? true : O.key)) {
        let e = t.targetPanel;
        k(() => {
          E(d(u({}, n), {
            animateScroll: false
          })), P(e), C(e), null == y || y(e.key)
        })
      } else E(d(u({}, n), {
        animateScroll: true
      }))
    },
    navTransition: N,
    showNavigationMobile: h,
    setShowNavigationMobile: g
  }), [b, O, N, h, S, k, y]), w = () => k(x);
  return (0, r.jsx)(s.j.Provider, {
    value: T,
    children: (0, r.jsxs)("div", {
      className: c.container,
      children: [(0, r.jsx)(i.P, {
        root: m,
        header: p,
        footer: v,
        onClose: w
      }), (0, r.jsx)(o.Z, {
        onClose: w,
        setting: null != (f = T.currentPanel) ? f : _
      })]
    })
  })
}

function m(e) {
  return (0, r.jsx)(a.Ri, {
    children: (0, r.jsx)(f, u({}, e))
  })
}