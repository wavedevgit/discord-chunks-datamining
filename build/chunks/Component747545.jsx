/** Chunk was on web.js **/
/** chunk id: 747545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => S,
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk938117 = require("./938117.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk988306 = require("./988306.js"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk986752 = require("./986752.js");

function S() {
  let [e, t] = i.useState(false), n = (0, a.e7)([m.Z], () => m.Z.isMediaFilterSettingLoading());
  return (i.useEffect(() => {
    let e = new o.V7;
    return n ? e.start(150, () => {
      t(true)
    }) : (e.stop(), t(false)), () => e.stop()
  }, [n]), e) ? (0, r.jsx)("div", {
    className: v.filterLoadingIndicator,
    children: (0, r.jsx)(s.$jN, {})
  }) : null
}

function I(e) {
  let {
    hideDeviceSelector: t = false,
    hideDeviceHeader: n = false,
    hideCameraSettingsLink: i = false,
    onLearnMore: o,
    selectedBackgroundOption: S,
    onSelectBackgroundOption: I,
    renderCamera: T,
    hidePreviewToggle: C = false,
    onCancelPreview: A
  } = e, {
    analyticsLocations: N
  } = (0, c.ZP)(), {
    id: P
  } = (0, d.p6)(y.h7.VIDEO_INPUT), R = (0, a.e7)([m.Z], () => m.Z.isVideoAvailable()), w = p.qF.useSetting();
  return (0, r.jsxs)(s.Kqy, {
    gap: 20,
    children: [T(P), m.Z.isEnabled() ? null : (0, r.jsx)(s.Text, {
      className: v.permissionWarning,
      color: "interactive-text-default",
      variant: "text-sm/normal",
      children: O.intl.format(O.t.stagfJ, {
        onEnableClick: () => l.Z.enable(true)
      })
    }), C ? null : (0, r.jsx)(s.rsf, {
      label: O.intl.string(O.t["3Ppr1h"]),
      description: O.intl.string(O.t.WNbX4O),
      checked: w,
      onChange: e => {
        p.qF.updateSetting(e), h.default.track(E.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    }), !t && (0, r.jsx)(f.F, {
      setting: b.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
      children: (0, r.jsx)(u.j, {
        label: n ? true : O.intl.string(O.t.FsQ3OR),
        helperText: !i && (0, g.O)() ? O.intl.format(O.t.aJYgRt, {
          onCameraSettingsClick: () => {
            null == A || A(), window.open((0, g.u)(P)), h.default.track(E.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
              location_stack: N
            })
          }
        }) : true,
        deviceType: y.h7.VIDEO_INPUT,
        location: "CameraSettings",
        isDisabled: !R,
        showAllDevices: true
      })
    }), (0, r.jsx)(f.F, {
      setting: b.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
      children: (0, r.jsx)(_.Z, {
        className: v.spacingTop24,
        onLearnMore: o,
        selectedBackgroundOption: S,
        onSelectBackgroundOption: I,
        currentDeviceId: P
      })
    })]
  })
}