/** Chunk was on 75708 **/
/** chunk id: 747545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => y,
  Z: () => A
}), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk579806 = require("./579806.js"),
  Chunk906732 = require("./906732.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk938117 = require("./938117.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602985 = require("./602985.js");
let N = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;

function y() {
  let [e, t] = Chunk73800.useState(false), n = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isMediaFilterSettingLoading());
  return (Chunk73800.useEffect(() => {
    let e = new Chunk846519.V7;
    return require ? module.start(150, () => {
      exports(true)
    }) : (module.stop(), exports(false)), () => module.stop()
  }, [require]), module) ? <div className={Chunk602985.filterLoadingIndicator}><Chunk481060.$jN /></div> : null
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
  return <i.Fragment>{y(Z)}{j.Z.isEnabled() ? null : <u.Text className={I.permissionWarning} color={"interactive-normal"} variant={"text-sm/normal"}>{T.intl.format(T.t.stagfH, {
        onEnableClick: () => m.Z.enable(true)
      })}</u.Text>}{A ? null : <u.j7V className={I.previewToggle} note={T.intl.string(T.t.WNbX4O)} onChange={e => {
        x.qF.updateSetting(e), E.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }} value={k} hideBorder={true}><div className={I.cameraPreviewTitle}>{T.intl.string(T.t["3Ppr1t"])}</div></u.j7V>}{!t && <b.F setting={v.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW}><u.xJW title={n ? null : T.intl.string(T.t.FsQ3OT)}>{<h.j deviceType={S.h7.VIDEO_INPUT} location={"CameraSettings"} className={a()(I.selector, {
            [I.selectorNoHeader]: n
          })} isDisabled={!w} showAllDevices={true} />}{!r && !!(0, C.isWindows)() && !!C.isPlatformEmbedded && o().satisfies(p.Z.os.release, ">=10.0.22000") && <u.R94 className={I.cameraDeeplink}>{T.intl.format(T.t.aJYgRk, {
            onCameraSettingsClick: () => {
              null == R || R(), window.open((0, C.getPlatform)() === C.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != Z ? "?cameraId=".concat(encodeURIComponent(Z.replace(N, "{E5323777-F976-4f5b-9B55-B94699C46E44}"))) : "") : ""), E.default.track(O.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
                location_stack: D
              })
            }
          })}</u.R94>}</u.xJW></b.F>}{<b.F setting={v.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND}><_.Z className={I.spacingTop24} onLearnMore={s} selectedBackgroundOption={l} onSelectBackgroundOption={d} currentDeviceId={Z} smallerBackgroundOptions={P} /></b.F>}</i.Fragment>
}