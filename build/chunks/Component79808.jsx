/** Chunk was on 47129 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function g(e) {
  var t, n;
  let {
    root: g,
    directory: f,
    target: y,
    onClose: O,
    sidebarHeader: E,
    sidebarFooter: b
  } = e, [v, p] = i.useState(true), [T, m] = i.useState(null == (t = f.entry(y)) ? true : t.parentPanel), [N, j] = i.useState({
    target: y,
    targetAccordion: null == (n = f.entry(y)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: S
  });

  function S() {
    j(true)
  }
  let {
    navigateWithValidation: I
  } = (0, s.Cu)(), C = {
    currentPanel: f.typedGet(T),
    navigateTo: e => {
      let t = f.entry(e);
      if ((null == t ? true : t.parentPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: S
      };
      if (t.parentPanel.key !== (null == T ? true : T.key)) {
        let e = t.parentPanel;
        I(() => {
          j(d(c({}, n), {
            animateScroll: false
          })), m(e)
        })
      } else j(d(c({}, n), {
        animateScroll: true
      }))
    },
    navTransition: N,
    showNavigationMobile: v,
    setShowNavigationMobile: p
  };
  return (0, r.jsx)(a.j.Provider, {
    value: C,
    children: (0, r.jsxs)("div", {
      className: u.container,
      children: [(0, r.jsx)(o.P, {
        root: g,
        header: E,
        footer: b
      }), (0, r.jsx)(l.Z, {
        onClose: () => I(O),
        setting: C.currentPanel
      })]
    })
  })
}

function f(e) {
  return (0, r.jsx)(s.Ri, {
    children: (0, r.jsx)(g, c({}, e))
  })
}