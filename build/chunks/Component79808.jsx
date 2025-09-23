/** Chunk was on 47129 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk4640 = require("./4640.js");

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
    root: g,
    directory: y,
    target: O,
    onClose: E,
    sidebarHeader: b,
    sidebarFooter: p
  } = e, [v, T] = i.useState(true), [N, j] = i.useState(null == (t = y.entry(O)) ? true : t.parentPanel), [S, m] = i.useState(() => y.typedGet(N)), C = i.useCallback(() => P(true), []), [_, P] = i.useState({
    target: O,
    targetAccordion: null == (n = y.entry(O)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: C
  }), {
    navigateWithValidation: x
  } = (0, s.Cu)(), I = i.useMemo(() => ({
    currentPanel: y.typedGet(N),
    navigateTo: e => {
      let t = y.entry(e);
      if ((null == t ? true : t.parentPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: C
      };
      if (t.parentPanel.key !== (null == N ? true : N.key)) {
        let e = t.parentPanel;
        x(() => {
          P(d(c({}, n), {
            animateScroll: false
          })), m(e), j(e)
        })
      } else P(d(c({}, n), {
        animateScroll: true
      }))
    },
    navTransition: _,
    showNavigationMobile: v,
    setShowNavigationMobile: T
  }), [y, N, _, v, C, x]);
  return (0, r.jsx)(a.j.Provider, {
    value: I,
    children: (0, r.jsxs)("div", {
      className: u.container,
      children: [(0, r.jsx)(o.P, {
        root: g,
        header: b,
        footer: p
      }), (0, r.jsx)(l.Z, {
        onClose: () => x(E),
        setting: null != (f = I.currentPanel) ? f : S
      })]
    })
  })
}

function g(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(f, c({}, e))
  })
}