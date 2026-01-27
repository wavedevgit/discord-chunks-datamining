/** Chunk was on web.js **/
/** chunk id: 380450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk406360 = require("./406360.js"),
  Chunk614738 = require("./614738.js"),
  Chunk954571 = require("./954571.js"),
  Chunk964404 = require("./964404.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927961 = require("./927961.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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

function y() {
  let {
    saturation: e,
    useReducedMotion: t,
    roleStyle: n,
    highContrastMode: h,
    switchIconsEnabled: g
  } = (0, i.cf)([s.A], () => ({
    saturation: s.A.saturation,
    useReducedMotion: s.A.useReducedMotion,
    roleStyle: s.A.roleStyle,
    highContrastMode: s.A.isHighContrastModeEnabled,
    switchIconsEnabled: s.A.isSwitchIconsEnabled
  })), y = (0, i.bG)([s.A], () => s.A.displayNameStylesEnabled), b = (0, c.y)("useAccessibilityItems"), O = (0, i.bG)([d.Ay], () => d.Ay.hdrDynamicRange), v = (0, l.i)("useAccessibilityItems"), A = [{
    name: p.intl.string(p.t.D5Fma9),
    value: "no-limit"
  }, {
    name: p.intl.string(p.t.ldcGIH),
    value: "standard"
  }], I = [{
    name: p.intl.string(p.t.YEOEi6),
    value: "username"
  }, {
    name: p.intl.string(p.t.mQaro3),
    value: "dot"
  }, {
    name: p.intl.string(p.t.Ji2EVJ),
    value: "hidden"
  }];

  function S() {
    u.default.track(f.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
      enabled: !y
    }), (0, o.Dm)(!y)
  }
  let T = [(0, r.jsx)(a.rXV, {
    children: (0, r.jsx)(a.sLh, {
      id: "reduced-motion",
      label: p.intl.string(p.t.b3XBzg),
      checked: t,
      action: () => (0, o.qz)(t ? "no-preference" : "reduce")
    })
  }, "reduced-motion"), (0, r.jsx)(a.rXV, {
    children: (0, r.jsx)(a.sLh, {
      id: "high-contrast",
      label: p.intl.string(p.t.aZlePv),
      checked: h,
      action: () => (0, o.uh)(h ? s._.DEFAULT : s._.HIGH)
    })
  }, "high-contrast"), (0, r.jsx)(a.rXV, {
    children: (0, r.jsx)(a.aK1, {
      id: "input",
      label: p.intl.string(p.t["5PWWCY"]),
      control: (t, n) => (0, r.jsx)(a.i42, E(m({}, t), {
        ref: n,
        value: 100 * e,
        onChange: e => (0, o.HU)(e / 100),
        "aria-label": p.intl.string(p.t["5PWWCY"])
      }))
    })
  }, "input")];
  return v && T.push((0, r.jsx)(a.rXV, {
    children: (0, r.jsx)(a.Drp, {
      id: "hdr-dynamic-range",
      label: p.intl.string(p.t.nemtgW),
      children: A.map(e => {
        let {
          name: t,
          value: n
        } = e;
        return (0, r.jsx)(a.iDA, {
          id: n,
          group: "hdr-dynamic-range",
          checked: n === O,
          label: t,
          action: () => (0, o.FU)(n)
        }, n)
      })
    })
  }, "hdr-dynamic-range")), T.push((0, r.jsx)(a.rXV, {
    children: (0, r.jsx)(a.Drp, {
      id: "role-colors",
      label: p.intl.string(p.t.uSOPWm),
      children: I.map(e => {
        let {
          name: t,
          value: i
        } = e;
        return (0, r.jsx)(a.iDA, {
          id: i,
          group: "role-colors",
          checked: i === n,
          label: t,
          action: () => (0, o.IX)(i)
        }, i)
      })
    })
  }, "role-colors"), (0, r.jsx)(a.rXV, {
    children: (0, r.jsx)(a.sLh, {
      id: "display-name-styles",
      label: p.intl.string(_.default["2gFUEw"]),
      checked: y,
      action: S
    })
  }, "display-name-styles")), b && T.push((0, r.jsx)(a.rXV, {
    children: (0, r.jsx)(a.sLh, {
      id: "switch-icons",
      label: p.intl.string(p.t["S3z+pV"]),
      checked: g,
      action: () => (0, o.Gm)(!g)
    })
  }, "switch-icons")), T
}