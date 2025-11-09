/** Chunk was on web.js **/
/** chunk id: 625205, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk282086 = require("./282086.js");
let p = Chunk358085.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function h() {
  var e, t;
  let {
    canSetInputDevice: n,
    canSetOutputDevice: c
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    canSetInputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_INPUT_DEVICE),
    canSetOutputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_OUTPUT_DEVICE)
  })), h = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT), m = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_OUTPUT), [g, E] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
    location: "UserSettingsDevices"
  }), [b, y] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_OUTPUT, {
    location: "UserSettingsDevices"
  }), O = g.concat(E), v = b.concat(y), I = Chunk647438.useMemo(() => {
    let e = p.some(e => {
        var t;
        return null == h || null == (t = h.hardwareId) ? true : t.startsWith(e)
      }),
      t = p.some(e => {
        var t;
        return null == m || null == (t = m.hardwareId) ? true : t.startsWith(e)
      });
    return module && exports && (null == h ? true : h.containerId) != null && h.containerId === (null == m ? true : m.containerId)
  }, [h, m]), S = O[0], T = v[0], A = null != (e = null == S ? true : S.disabled) ? module : !require, C = null != (t = null == T ? true : T.disabled) ? exports : !Chunk358085;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk282086.devices,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk282086.deviceColumns,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk282086.column,
        children: (0, Chunk951288.jsx)(Chunk670863.j, {
          label: Chunk388032.intl.string(Chunk388032.t.hHMYbb),
          deviceType: Chunk65154.h7.AUDIO_INPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: A
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk282086.column,
        children: (0, Chunk951288.jsx)(Chunk670863.j, {
          label: Chunk388032.intl.string(Chunk388032.t.dl18zb),
          deviceType: Chunk65154.h7.AUDIO_OUTPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: C
        })
      })]
    }), I && (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.Ioz3gx)
    })]
  })
}