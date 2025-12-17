/** Chunk was on web.js **/
/** chunk id: 606669, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk651123 = require("./651123.js"),
  Chunk877371 = require("./877371.js"),
  Chunk626135 = require("./626135.js"),
  Chunk740492 = require("./740492.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk143525 = require("./143525.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b() {
  let {
    saturation: e,
    useReducedMotion: t,
    roleStyle: n,
    highContrastMode: m,
    switchIconsEnabled: g
  } = (0, Chunk442837.cj)([Chunk607070.Z], () => ({
    saturation: Chunk607070.Z.saturation,
    useReducedMotion: Chunk607070.Z.useReducedMotion,
    roleStyle: Chunk607070.Z.roleStyle,
    highContrastMode: Chunk607070.Z.isHighContrastModeEnabled,
    switchIconsEnabled: Chunk607070.Z.isSwitchIconsEnabled
  })), b = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.displayNameStylesEnabled), y = (0, Chunk877371.A)("useAccessibilityItems"), O = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.hdrDynamicRange), v = (0, Chunk651123.z)("useAccessibilityItems"), S = [{
    name: Chunk388032.intl.string(Chunk388032.t.D5Fma9),
    value: "no-limit"
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.ldcGIH),
    value: "standard"
  }], I = [{
    name: Chunk388032.intl.string(Chunk388032.t.YEOEi6),
    value: "username"
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.mQaro3),
    value: "dot"
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.Ji2EVJ),
    value: "hidden"
  }];

  function T() {
    Chunk626135.default.track(Chunk981631.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
      enabled: !b
    }), (0, Chunk857595.X2)(!b)
  }
  let C = [(0, Chunk54381.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "reduced-motion",
      label: Chunk388032.intl.string(Chunk388032.t.b3XBzg),
      checked: exports,
      action: () => (0, Chunk857595.Zt)(exports ? "no-preference" : "reduce")
    })
  }, "reduced-motion"), (0, Chunk54381.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "high-contrast",
      label: Chunk388032.intl.string(Chunk388032.t.aZlePv),
      checked: m,
      action: () => (0, Chunk857595.vW)(m ? Chunk607070.X.DEFAULT : Chunk607070.X.HIGH)
    })
  }, "high-contrast"), (0, Chunk54381.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk54381.jsx)(Chunk481060.II_, {
      id: "input",
      label: Chunk388032.intl.string(Chunk388032.t["5PWWCY"]),
      control: (t, n) => (0, r.jsx)(a._wy, E(h({}, t), {
        ref: n,
        value: 100 * e,
        onChange: e => (0, o.o2)(e / 100),
        "aria-label": p.intl.string(p.t["5PWWCY"])
      }))
    })
  }, "input")];
  return v && C.push((0, Chunk54381.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk54381.jsx)(Chunk481060.sNh, {
      id: "hdr-dynamic-range",
      label: Chunk388032.intl.string(Chunk388032.t.nemtgW),
      children: S.map(e => {
        let {
          name: t,
          value: n
        } = e;
        return (0, r.jsx)(a.k5B, {
          id: n,
          group: "hdr-dynamic-range",
          checked: n === O,
          label: t,
          action: () => (0, o.zH)(n)
        }, n)
      })
    })
  }, "hdr-dynamic-range")), C.push((0, Chunk54381.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk54381.jsx)(Chunk481060.sNh, {
      id: "role-colors",
      label: Chunk388032.intl.string(Chunk388032.t.uSOPWm),
      children: I.map(e => {
        let {
          name: t,
          value: i
        } = e;
        return (0, r.jsx)(a.k5B, {
          id: i,
          group: "role-colors",
          checked: i === n,
          label: t,
          action: () => (0, o.u1)(i)
        }, i)
      })
    })
  }, "role-colors"), (0, Chunk54381.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "display-name-styles",
      label: Chunk388032.intl.string(Chunk143525.default["2gFUEw"]),
      checked: b,
      action: T
    })
  }, "display-name-styles")), y && C.push((0, Chunk54381.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "switch-icons",
      label: Chunk388032.intl.string(Chunk388032.t["S3z+pV"]),
      checked: g,
      action: () => (0, Chunk857595.ky)(!g)
    })
  }, "switch-icons")), C
}