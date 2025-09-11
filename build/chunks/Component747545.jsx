/** Chunk was on web.js **/
/** chunk id: 747545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => x,
  Z: () => L
}), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  l = require.n(Chunk209739),
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
  Chunk180568 = require("./180568.js");
let N = ">=10.0.22000",
  R = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
  P = "{E5323777-F976-4f5b-9B55-B94699C46E44}";

function w() {
  return !!(0, Chunk358085.isWindows)() && !!Chunk358085.isPlatformEmbedded && l().satisfies(Chunk579806.Z.os.release, N)
}

function D(e) {
  return (0, v.getPlatform)() === v.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(R, P))) : "") : ""
}

function x() {
  let [e, t] = Chunk647438.useState(false), n = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isMediaFilterSettingLoading());
  return (Chunk647438.useEffect(() => {
    let e = new Chunk846519.V7;
    return require ? module.start(150, () => {
      exports(true)
    }) : (module.stop(), exports(false)), () => module.stop()
  }, [require]), module) ? (0, Chunk951288.jsx)("div", {
    className: Chunk180568.filterLoadingIndicator,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  }) : null
}

function L(e) {
  let {
    hideDeviceSelector: t = false,
    hideDeviceHeader: n = false,
    hideCameraSettingsLink: i = false,
    onLearnMore: a,
    selectedBackgroundOption: s,
    onSelectBackgroundOption: l,
    renderCamera: u,
    hidePreviewToggle: _ = false,
    showSmallBackgroundOptions: v = false,
    onCancelPreview: N
  } = e, {
    analyticsLocations: R
  } = (0, p.ZP)(), {
    id: P
  } = (0, m.p6)(S.h7.VIDEO_INPUT), x = (0, c.e7)([y.Z], () => y.Z.isVideoAvailable()), L = E.qF.useSetting();
  return (0, r.jsxs)(r.Fragment, {
    children: [u(P), y.Z.isEnabled() ? null : (0, r.jsx)(d.Text, {
      className: C.permissionWarning,
      color: "interactive-normal",
      variant: "text-sm/normal",
      children: A.intl.format(A.t.stagfH, {
        onEnableClick: () => f.Z.enable(true)
      })
    }), _ ? null : (0, r.jsx)(d.j7V, {
      className: C.previewToggle,
      note: A.intl.string(A.t.WNbX4O),
      onChange: e => {
        E.qF.updateSetting(e), O.default.track(I.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      },
      value: L,
      hideBorder: true,
      children: (0, r.jsx)("div", {
        className: C.cameraPreviewTitle,
        children: A.intl.string(A.t["3Ppr1t"])
      })
    }), !t && (0, r.jsx)(g.F, {
      setting: T.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
      children: (0, r.jsxs)(d.xJW, {
        title: n ? null : A.intl.string(A.t.FsQ3OT),
        children: [(0, r.jsx)(h.j, {
          deviceType: S.h7.VIDEO_INPUT,
          location: "CameraSettings",
          className: o()(C.selector, {
            [C.selectorNoHeader]: n
          }),
          isDisabled: !x,
          showAllDevices: true
        }), !i && w() && (0, r.jsx)(d.R94, {
          className: C.cameraDeeplink,
          children: A.intl.format(A.t.aJYgRk, {
            onCameraSettingsClick: () => {
              null == N || N(), window.open(D(P)), O.default.track(I.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
                location_stack: R
              })
            }
          })
        })]
      })
    }), (0, r.jsx)(g.F, {
      setting: T.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
      children: (0, r.jsx)(b.Z, {
        className: C.spacingTop24,
        onLearnMore: a,
        selectedBackgroundOption: s,
        onSelectBackgroundOption: l,
        currentDeviceId: P,
        smallerBackgroundOptions: v
      })
    })]
  })
}