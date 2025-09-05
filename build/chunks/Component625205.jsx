/** Chunk was on web.js **/
/** chunk id: 625205, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk210887 = require("./210887.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk282086 = require("./282086.js");
let E = Chunk358085.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function b() {
  var e, t;
  let f = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      canSetInputDevice: b,
      canSetOutputDevice: y
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      canSetInputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_OUTPUT_DEVICE)
    })),
    O = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT),
    v = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_OUTPUT),
    [I, T] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
      location: "UserSettingsDevices"
    }),
    [S, A] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_OUTPUT, {
      location: "UserSettingsDevices"
    }),
    C = I.concat(T),
    N = S.concat(A),
    R = Chunk647438.useMemo(() => {
      let e = E.some(e => {
          var t;
          return null == O || null == (t = O.hardwareId) ? true : t.startsWith(e)
        }),
        t = E.some(e => {
          var t;
          return null == v || null == (t = v.hardwareId) ? true : t.startsWith(e)
        });
      return module && exports && (null == O ? true : O.containerId) != null && O.containerId === (null == v ? true : v.containerId)
    }, [O, v]),
    P = C[0],
    w = N[0],
    D = null != (e = null == P ? true : P.disabled) ? module : !b,
    x = null != (t = null == w ? true : w.disabled) ? exports : !y;

  function L(e) {
    let t, {
      label: i,
      value: a
    } = e;
    if (u.Z.isCertified(a)) {
      let e = (0, o.ap)(f) ? n(561259) : n(887695);
      t = (0, r.jsx)("img", {
        src: e,
        alt: "Certified",
        className: g.deviceOptionCertified
      })
    }
    return (0, r.jsxs)("span", {
      className: g.deviceOption,
      children: [(0, r.jsx)("span", {
        className: g.deviceOptionLabel,
        children: u.Z.getCertifiedDeviceName(a, i)
      }), t]
    }, a)
  }
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk282086.devices,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk282086.deviceColumns,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk282086.column,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          title: Chunk388032.intl.string(Chunk388032.t.hHMYbW),
          children: (0, Chunk951288.jsx)(Chunk670863.j, {
            deviceType: Chunk65154.h7.AUDIO_INPUT,
            location: "UserSettingsDevices",
            hideDeviceTypeIcon: true,
            isDisabled: D,
            renderOptionLabel: L
          })
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk282086.column,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          title: Chunk388032.intl.string(Chunk388032.t.dl18zc),
          children: (0, Chunk951288.jsx)(Chunk670863.j, {
            deviceType: Chunk65154.h7.AUDIO_OUTPUT,
            location: "UserSettingsDevices",
            hideDeviceTypeIcon: true,
            isDisabled: x,
            renderOptionLabel: L
          })
        })
      })]
    }), R && (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.Ioz3g4)
    })]
  })
}