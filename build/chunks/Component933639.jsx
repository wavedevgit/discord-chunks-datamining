/** Chunk was on web.js **/
/** chunk id: 933639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk101555 = require("./101555.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk940463 = require("./940463.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = 300,
  A = e => (0, c.mMO)(async () => {
    let {
      default: t
    } = await n.e("41091").then(n.bind(n, 431374));
    return n => (0, r.jsx)(t, y(E({}, n), {
      sourceAnalyticsLocations: e
    }))
  });

function v(e) {
  let {
    isVisible: t,
    isExpandable: n,
    onCloseProfile: a
  } = e, {
    analyticsLocations: g
  } = (0, d.Ay)(), {
    trackUserProfileAction: E
  } = (0, _.NJ)(), b = i.useRef(null), y = i.useRef(null), [v, S] = (0, o.yK)([u.A], () => [u.A.useReducedMotion, u.A.keyboardModeEnabled]), I = !n || v || S ? 0 : O, T = () => {
    E({
      action: "PRESS_EDIT_CUSTOM_STATUS"
    }), A(g), null == a || a()
  }, C = () => {
    E({
      action: "PRESS_CLEAR_CUSTOM_STATUS"
    }), p.G2.updateSetting(true)
  };
  return (0, r.jsxs)(f.Ay, {
    className: s()(m.oO, {
      [m.RK]: t,
      [m.lu]: n
    }),
    children: [(0, r.jsx)(l.m, {
      asContainer: true,
      targetElementRef: b,
      text: h.intl.string(h.t.bt75uw),
      delay: I,
      ariaHidden: true,
      children: (0, r.jsx)(f.$n, {
        ref: b,
        className: s()(m.x6, m.kb),
        "aria-label": h.intl.string(h.t.QdHxos),
        "aria-haspopup": "dialog",
        onClick: T,
        children: (0, r.jsx)(c.R2l, {
          size: "xs",
          colorClass: m.Kk
        })
      })
    }), (0, r.jsx)(l.m, {
      asContainer: true,
      text: h.intl.string(h.t.VkKicb),
      delay: I,
      ariaHidden: true,
      children: (0, r.jsx)(f.$n, {
        ref: y,
        className: s()(m.x6, m.pG),
        "aria-label": h.intl.string(h.t.wfYTHe),
        onClick: C,
        children: (0, r.jsx)(c.ucK, {
          size: "xs",
          colorClass: m.Kk
        })
      })
    })]
  })
}