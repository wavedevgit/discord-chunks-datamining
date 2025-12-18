/** Chunk was on web.js **/
/** chunk id: 747545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => w,
  Z: () => D
}), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk579806 = require("./579806.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk938117 = require("./938117.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk986752 = require("./986752.js");
let C = ">=10.0.22000",
  A = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
  N = "{E5323777-F976-4f5b-9B55-B94699C46E44}";

function P() {
  return !!(0, Chunk358085.isWindows)() && !!Chunk358085.isPlatformEmbedded && o().satisfies(Chunk579806.Z.os.release, C)
}

function R(e) {
  return (0, y.getPlatform)() === y.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(A, N))) : "") : ""
}

function w() {
  let [e, t] = Chunk473749.useState(false), n = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isMediaFilterSettingLoading());
  return (Chunk473749.useEffect(() => {
    let e = new Chunk846519.V7;
    return require ? module.start(150, () => {
      exports(true)
    }) : (module.stop(), exports(false)), () => module.stop()
  }, [require]), module) ? (0, Chunk54381.jsx)("div", {
    className: Chunk986752.filterLoadingIndicator,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  }) : null
}

function D(e) {
  let {
    hideDeviceSelector: t = false,
    hideDeviceHeader: n = false,
    hideCameraSettingsLink: i = false,
    onLearnMore: a,
    selectedBackgroundOption: o,
    onSelectBackgroundOption: l,
    renderCamera: d,
    hidePreviewToggle: y = false,
    onCancelPreview: C
  } = e, {
    analyticsLocations: A
  } = (0, f.ZP)(), {
    id: N
  } = (0, _.p6)(S.h7.VIDEO_INPUT), w = (0, s.e7)([E.Z], () => E.Z.isVideoAvailable()), D = h.qF.useSetting();
  return (0, r.jsxs)(c.Kqy, {
    gap: 20,
    children: [d(N), E.Z.isEnabled() ? null : (0, r.jsx)(c.Text, {
      className: T.permissionWarning,
      color: "interactive-text-default",
      variant: "text-sm/normal",
      children: I.intl.format(I.t.stagfJ, {
        onEnableClick: () => u.Z.enable(true)
      })
    }), y ? null : (0, r.jsx)(c.rsf, {
      label: I.intl.string(I.t["3Ppr1h"]),
      description: I.intl.string(I.t.WNbX4O),
      checked: D,
      onChange: e => {
        h.qF.updateSetting(e), b.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    }), !t && (0, r.jsx)(m.F, {
      setting: v.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
      children: (0, r.jsx)(p.j, {
        label: n ? true : I.intl.string(I.t.FsQ3OR),
        helperText: !i && P() ? I.intl.format(I.t.aJYgRt, {
          onCameraSettingsClick: () => {
            null == C || C(), window.open(R(N)), b.default.track(O.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
              location_stack: A
            })
          }
        }) : true,
        deviceType: S.h7.VIDEO_INPUT,
        location: "CameraSettings",
        isDisabled: !w,
        showAllDevices: true
      })
    }), (0, r.jsx)(m.F, {
      setting: v.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
      children: (0, r.jsx)(g.Z, {
        className: T.spacingTop24,
        onLearnMore: a,
        selectedBackgroundOption: o,
        onSelectBackgroundOption: l,
        currentDeviceId: N
      })
    })]
  })
}