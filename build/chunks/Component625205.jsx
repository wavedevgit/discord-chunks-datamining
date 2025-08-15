/** Chunk was on 30202 **/
/** chunk id: 625205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk28025 = require("./28025.js");
let x = Chunk358085.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function _() {
  var e, t;
  let m = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      canSetInputDevice: _,
      canSetOutputDevice: j
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      canSetInputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: Chunk131951.Z.supports(Chunk65154.AN.AUDIO_OUTPUT_DEVICE)
    })),
    E = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT),
    C = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_OUTPUT),
    [O, v] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_INPUT, {
      location: "UserSettingsDevices"
    }),
    [S, T] = (0, Chunk72897.Ls)(Chunk65154.h7.AUDIO_OUTPUT, {
      location: "UserSettingsDevices"
    }),
    N = O.concat(v),
    I = S.concat(T),
    y = Chunk647438.useMemo(() => {
      let e = x.some(e => {
          var t;
          return null == E || null == (t = E.hardwareId) ? true : t.startsWith(e)
        }),
        t = x.some(e => {
          var t;
          return null == C || null == (t = C.hardwareId) ? true : t.startsWith(e)
        });
      return module && exports && (null == E ? true : E.containerId) != null && E.containerId === (null == C ? true : C.containerId)
    }, [E, C]),
    A = N[0],
    P = I[0],
    R = null != (e = null == A ? true : A.disabled) ? module : !_,
    D = null != (t = null == P ? true : P.disabled) ? exports : !j;

  function Z(e) {
    let t, {
      label: r,
      value: s
    } = e;
    if (d.Z.isCertified(s)) {
      let e = (0, a.ap)(m) ? n(561259) : n(887695);
      t = (0, i.jsx)("img", {
        src: e,
        alt: "Certified",
        className: b.deviceOptionCertified
      })
    }
    return (0, i.jsxs)("span", {
      className: b.deviceOption,
      children: [(0, i.jsx)("span", {
        className: b.deviceOptionLabel,
        children: d.Z.getCertifiedDeviceName(s, r)
      }), t]
    }, s)
  }
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
            isDisabled: R,
            renderOptionLabel: Z
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
            isDisabled: D,
            renderOptionLabel: Z
          })
        })
      })]
    }), y && (0, Chunk951288.jsx)(Chunk494620.Z, {
      look: Chunk494620.z.WARNING,
      children: Chunk388032.intl.string(Chunk388032.t.Ioz3g4)
    })]
  })
}