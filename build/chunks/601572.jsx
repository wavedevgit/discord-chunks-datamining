/** Chunk was on 43876 **/
/** chunk id: 601572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk695346 = require("./695346.js"),
  Chunk932724 = require("./932724.js"),
  Chunk716161 = require("./716161.js"),
  Chunk672339 = require("./672339.js"),
  Chunk898531 = require("./898531.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk747545 = require("./747545.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk994950 = require("./994950.js");

function k(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: k,
    onClose: y
  } = e, v = C.Z.getCameraComponent(), w = (0, _.Dt)(), x = (0, g.Z)(), I = f.qF.useSetting(), [E, N] = o.useState((0, p.P)(S.default.getCurrentUser())), P = (0, c.O)(), {
    analyticsLocations: R
  } = (0, d.ZP)(s.Z.CAMERA_PREVIEW), j = o.useRef(null);
  o.useEffect(() => {
    h.default.track(O.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), o.useEffect(() => {
    var e;
    null == (e = j.current) || e.scrollToTop()
  }, []);
  let U = async () => {
    await H(), a.Z.setVideoEnabled(true), null == k || k()
  }, H = async () => {
    try {
      await (0, b.wG)(E, {
        location: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          page: O.ZY5.PREVIEW_CAMERA_MODAL
        }, P.location)
      })
    } catch (e) {}
    await y(), (0, m.Up)(E)
  };
  return <d.Gt value={R}><l.Z page={O.ZY5.PREVIEW_CAMERA_MODAL}><i.Y0X className={B.modalRoot} size={i.CgR.DYNAMIC} aria-labelledby={w} transitionState={t} parentComponent={"CameraPreviewModal"}>{<i.hzk className={x ? B.contentWithVideoBackgrounds : B.content} scrollerRef={j}>{<i.X6q id={w} className={B.header} variant={"heading-xl/semibold"}>{n ? A.intl.string(A.t.LAwwbW) : A.intl.string(A.t["/HITVF"])}</i.X6q>}{<T.Z hidePreviewToggle={true} showSmallBackgroundOptions={true} hideDeviceHeader={true} hideCameraSettingsLink={true} selectedBackgroundOption={E} onSelectBackgroundOption={N} hideDeviceSelector={n} renderCamera={e => (0, r.jsxs)("div", {
              className: B.cameraPreview,
              children: [(0, r.jsx)("div", {
                className: B.camera,
                children: (0, r.jsx)(v, {
                  disabled: false,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, r.jsx)(T.S, {})]
            })} onLearnMore={y} />}</i.hzk>}{<i.mzw justify={u.Z.Justify.BETWEEN}>{(() => {
            let e = n ? A.intl.string(A.t.KQENho) : A.intl.string(A.t.kgIe9f);
            return <i.zxk variant={"primary"} size={"sm"} text={e} onClick={n ? H : U} autoFocus={!n} />
          })()}{<i.XZJ size={18} type={i.XZJ.Types.INVERTED} value={I} onChange={() => {
              f.qF.updateSetting(!I), h.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !I
              })
            }}><i.Text variant={"text-sm/normal"}>{A.intl.string(A.t["3Ppr1t"])}</i.Text></i.XZJ>}</i.mzw>}{<i.olH onClick={y} className={B.modalClose} />}</i.Y0X></l.Z></d.Gt>
}