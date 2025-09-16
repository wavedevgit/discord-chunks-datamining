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
    sidebarFooter: v
  } = e, [b, T] = i.useState(true), [N, p] = i.useState(null == (t = f.entry(y)) ? true : t.parentPanel), [C, I] = i.useState({
    target: y,
    targetAccordion: null == (n = f.entry(y)) ? true : n.parentAccordion,
    animateScroll: false,
    complete: j
  });

  function j() {
    I(true)
  }
  let {
    navigateWithValidation: m
  } = (0, a.Cu)(), _ = {
    currentPanel: f.typedGet(N),
    navigateTo: e => {
      let t = f.entry(e);
      if ((null == t ? true : t.parentPanel) == null) return;
      let n = {
        target: e,
        targetAccordion: t.parentAccordion,
        complete: j
      };
      if (t.parentPanel.key !== (null == N ? true : N.key)) {
        let e = t.parentPanel;
        m(() => {
          I(d(c({}, n), {
            animateScroll: false
          })), p(e)
        })
      } else I(d(c({}, n), {
        animateScroll: true
      }))
    },
    navTransition: C,
    showNavigationMobile: b,
    setShowNavigationMobile: T
  };
  return (0, r.jsx)(s.j.Provider, {
    value: _,
    children: (0, r.jsxs)("div", {
      className: u.container,
      children: [(0, r.jsx)(o.P, {
        root: g,
        header: E,
        footer: v
      }), (0, r.jsx)(l.Z, {
        onClose: () => m(O),
        setting: _.currentPanel
      })]
    })
  })
}

function f(e) {
  return (0, r.jsx)(a.Ri, {
    children: (0, r.jsx)(g, c({}, e))
  })
}