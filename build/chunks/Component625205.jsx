/** Chunk was on web.js **/
/** chunk id: 625205, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28025 = require("./28025.js");
let h = Chunk358085.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function m() {
  var e, t;
  let {
    canSetInputDevice: n,
    canSetOutputDevice: u
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    canSetInputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_INPUT_DEVICE),
    canSetOutputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_OUTPUT_DEVICE)
  })), m = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT), g = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_OUTPUT), [E, b] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
    location: "UserSettingsDevices"
  }), [y, O] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_OUTPUT, {
    location: "UserSettingsDevices"
  }), v = E.concat(b), I = y.concat(O), T = Chunk647438.useMemo(() => {
    let e = h.some(e => {
        var t;
        return null == m || null == (t = m.hardwareId) ? true : t.startsWith(e)
      }),
      t = h.some(e => {
        var t;
        return null == g || null == (t = g.hardwareId) ? true : t.startsWith(e)
      });
    return module && exports && (null == m ? true : m.containerId) != null && m.containerId === (null == g ? true : g.containerId)
  }, [m, g]), S = v[0], A = I[0], C = null != (e = null == S ? true : S.disabled) ? module : !require, N = null != (t = null == A ? true : A.disabled) ? exports : !Chunk358085;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk28025.devices,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk28025.deviceColumns,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk28025.column,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          title: Chunk388032.intl.string(Chunk388032.t.hHMYbW),
          children: (0, Chunk951288.jsx)(Chunk670863.j, {
            deviceType: Chunk65154.h7.AUDIO_INPUT,
            location: "UserSettingsDevices",
            hideDeviceTypeIcon: true,
            isDisabled: C
          })
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk28025.column,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          title: Chunk388032.intl.string(Chunk388032.t.dl18zc),
          children: (0, Chunk951288.jsx)(Chunk670863.j, {
            deviceType: Chunk65154.h7.AUDIO_OUTPUT,
            location: "UserSettingsDevices",
            hideDeviceTypeIcon: true,
            isDisabled: N
          })
        })
      })]
    }), T && (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.Ioz3g4)
    })]
  })
}