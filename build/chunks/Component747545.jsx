/** Chunk was on 66181 **/
/** chunk id: 747545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => y,
  Z: () => A
}), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let I = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;

function y() {
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

function A(e) {
  let {
    hideDeviceSelector: t = false,
    hideDeviceHeader: n = false,
    hideCameraSettingsLink: r = false,
    onLearnMore: s,
    selectedBackgroundOption: l,
    onSelectBackgroundOption: d,
    renderCamera: y,
    hidePreviewToggle: A = false,
    showSmallBackgroundOptions: P = false,
    onCancelPreview: R
  } = e, {
    analyticsLocations: D
  } = (0, g.ZP)(), {
    id: Z
  } = (0, f.p6)(S.h7.VIDEO_INPUT), w = (0, c.e7)([j.Z], () => j.Z.isVideoAvailable()), k = x.qF.useSetting();
  return (0, i.jsxs)(i.Fragment, {
    children: [y(Z), j.Z.isEnabled() ? null : (0, i.jsx)(u.Text, {
      className: N.permissionWarning,
      color: "interactive-normal",
      variant: "text-sm/normal",
      children: T.intl.format(T.t.stagfH, {
        onEnableClick: () => m.Z.enable(true)
      })
    }), A ? null : (0, i.jsx)(u.j7V, {
      className: N.previewToggle,
      note: T.intl.string(T.t.WNbX4O),
      onChange: e => {
        x.qF.updateSetting(e), E.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      },
      value: k,
      hideBorder: true,
      children: (0, i.jsx)("div", {
        className: N.cameraPreviewTitle,
        children: T.intl.string(T.t["3Ppr1t"])
      })
    }), !t && (0, i.jsx)(b.F, {
      setting: v.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
      children: (0, i.jsxs)(u.xJW, {
        title: n ? null : T.intl.string(T.t.FsQ3OT),
        children: [(0, i.jsx)(h.j, {
          deviceType: S.h7.VIDEO_INPUT,
          location: "CameraSettings",
          className: a()(N.selector, {
            [N.selectorNoHeader]: n
          }),
          isDisabled: !w,
          showAllDevices: true
        }), !r && !!(0, C.isWindows)() && !!C.isPlatformEmbedded && o().satisfies(p.Z.os.release, ">=10.0.22000") && (0, i.jsx)(u.R94, {
          className: N.cameraDeeplink,
          children: T.intl.format(T.t.aJYgRk, {
            onCameraSettingsClick: () => {
              null == R || R(), window.open((0, C.getPlatform)() === C.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != Z ? "?cameraId=".concat(encodeURIComponent(Z.replace(I, "{E5323777-F976-4f5b-9B55-B94699C46E44}"))) : "") : ""), E.default.track(O.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
                location_stack: D
              })
            }
          })
        })]
      })
    }), (0, i.jsx)(b.F, {
      setting: v.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
      children: (0, i.jsx)(_.Z, {
        className: N.spacingTop24,
        onLearnMore: s,
        selectedBackgroundOption: l,
        onSelectBackgroundOption: d,
        currentDeviceId: Z,
        smallerBackgroundOptions: P
      })
    })]
  })
}