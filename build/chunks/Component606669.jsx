/** Chunk was on 27325 **/
/** chunk id: 606669, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./290780.js"), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk877371 = require("./877371.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352609 = require("./352609.js");

function h() {
  let {
    saturation: e,
    useReducedMotion: t,
    roleStyle: n,
    highContrastMode: h,
    switchIconsEnabled: j
  } = (0, Chunk442837.cj)([Chunk607070.Z], () => ({
    saturation: Chunk607070.Z.saturation,
    useReducedMotion: Chunk607070.Z.useReducedMotion,
    roleStyle: Chunk607070.Z.roleStyle,
    highContrastMode: Chunk607070.Z.isHighContrastModeEnabled,
    switchIconsEnabled: Chunk607070.Z.isSwitchIconsEnabled
  })), y = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.displayNameStylesEnabled), m = Chunk299363.U.useExperiment({
    location: "useAccessibilityItems"
  }, {
    autoTrackExposure: true
  }).enabled, g = (0, Chunk877371.A)("useAccessibilityItems"), f = [{
    name: Chunk388032.intl.string(Chunk388032.t.YEOEi6),
    value: "username"
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.mQaro3),
    value: "dot"
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.Ji2EVJ),
    value: "hidden"
  }], O = [(0, Chunk951288.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "reduced-motion",
      label: Chunk388032.intl.string(Chunk388032.t.b3XBzg),
      checked: exports,
      action: () => (0, Chunk857595.Zt)(exports ? "no-preference" : "reduce")
    })
  }, "reduced-motion"), (0, Chunk951288.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk951288.jsx)(Chunk481060.II_, {
      id: "input",
      label: Chunk388032.intl.string(Chunk388032.t["5PWWCY"]),
      control: (t, n) => {
        var i, s;
        return (0, r.jsx)(o._wy, (i = function(e) {
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
        }({}, t), s = s = {
          ref: n,
          value: 100 * e,
          onChange: e => (0, l.o2)(e / 100),
          "aria-label": p.intl.string(p.t["5PWWCY"])
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    })
  }, "input"), (0, Chunk951288.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk951288.jsx)(Chunk481060.sNh, {
      id: "role-colors",
      label: Chunk388032.intl.string(Chunk388032.t.uSOPWm),
      children: f.map(e => {
        let {
          name: t,
          value: i
        } = e;
        return (0, r.jsx)(o.k5B, {
          id: i,
          group: "role-colors",
          checked: i === n,
          label: t,
          action: () => (0, l.u1)(i)
        }, i)
      })
    })
  }, "role-colors"), (0, Chunk951288.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "display-name-styles",
      label: Chunk388032.intl.string(Chunk352609.default["2gFUEw"]),
      checked: y,
      action: function() {
        Chunk626135.default.track(Chunk981631.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
          enabled: !y
        }), (0, Chunk857595.X2)(!y)
      }
    })
  }, "display-name-styles")];
  return m && O.unshift((0, Chunk951288.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "high-contrast",
      label: Chunk388032.intl.string(Chunk388032.t.aZlePv),
      checked: h,
      action: () => (0, Chunk857595.vW)(h ? Chunk607070.X.DEFAULT : Chunk607070.X.HIGH)
    })
  }, "high-contrast")), g && O.push((0, Chunk951288.jsx)(Chunk481060.kSQ, {
    children: (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "switch-icons",
      label: Chunk388032.intl.string(Chunk388032.t["S3z+pV"]),
      checked: j,
      action: () => (0, Chunk857595.ky)(!j)
    })
  }, "switch-icons")), O
}