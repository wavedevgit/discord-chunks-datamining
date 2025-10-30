/** Chunk was on web.js **/
/** chunk id: 747545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => w,
  Z: () => D
}), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk938117 = require("./938117.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk612232 = require("./612232.js");
let A = ">=10.0.22000",
  C = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
  N = "{E5323777-F976-4f5b-9B55-B94699C46E44}";

function R() {
  return !!(0, Chunk358085.isWindows)() && !!Chunk358085.isPlatformEmbedded && o().satisfies(Chunk579806.Z.os.release, A)
}

function P(e) {
  return (0, y.getPlatform)() === y.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(C, N))) : "") : ""
}

function w() {
  let [e, t] = Chunk647438.useState(false), n = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isMediaFilterSettingLoading());
  return (Chunk647438.useEffect(() => {
    let e = new Chunk846519.V7;
    return require ? module.start(150, () => {
      exports(true)
    }) : (module.stop(), exports(false)), () => module.stop()
  }, [require]), module) ? (0, Chunk951288.jsx)("div", {
    className: Chunk612232.filterLoadingIndicator,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
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
    showSmallBackgroundOptions: A = false,
    onCancelPreview: C
  } = e, {
    analyticsLocations: N
  } = (0, f.ZP)(), {
    id: w
  } = (0, p.p6)(I.h7.VIDEO_INPUT), D = (0, s.e7)([E.Z], () => E.Z.isVideoAvailable()), L = m.qF.useSetting();
  return (0, r.jsxs)(c.Kqy, {
    gap: 20,
    children: [d(w), E.Z.isEnabled() ? null : (0, r.jsx)(c.Text, {
      className: T.permissionWarning,
      color: "interactive-normal",
      variant: "text-sm/normal",
      children: S.intl.format(S.t.stagfJ, {
        onEnableClick: () => u.Z.enable(true)
      })
    }), y ? null : (0, r.jsx)(c.rsf, {
      label: S.intl.string(S.t["3Ppr1h"]),
      description: S.intl.string(S.t.WNbX4O),
      checked: L,
      onChange: e => {
        m.qF.updateSetting(e), b.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    }), !t && (0, r.jsx)(h.F, {
      setting: v.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
      children: (0, r.jsx)(_.j, {
        label: n ? true : S.intl.string(S.t.FsQ3OR),
        helperText: !i && R() ? S.intl.format(S.t.aJYgRt, {
          onCameraSettingsClick: () => {
            null == C || C(), window.open(P(w)), b.default.track(O.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
              location_stack: N
            })
          }
        }) : true,
        deviceType: I.h7.VIDEO_INPUT,
        location: "CameraSettings",
        isDisabled: !D,
        showAllDevices: true
      })
    }), (0, r.jsx)(h.F, {
      setting: v.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
      children: (0, r.jsx)(g.Z, {
        className: T.spacingTop24,
        onLearnMore: a,
        selectedBackgroundOption: o,
        onSelectBackgroundOption: l,
        currentDeviceId: w,
        smallerBackgroundOptions: A
      })
    })]
  })
}