/** Chunk was on 91018 **/
/** chunk id: 601572, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk932724 = require("./932724.js"),
  Chunk716161 = require("./716161.js"),
  Chunk672339 = require("./672339.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk747545 = require("./747545.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk142768 = require("./142768.js");

function P(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: P,
    onClose: _
  } = e, k = w.Z.getCameraComponent(), y = p.qF.useSetting(), [j, S] = n.useState((0, g.P)(b.default.getCurrentUser())), x = (0, s.O)(), {
    analyticsLocations: A
  } = (0, u.ZP)(d.Z.CAMERA_PREVIEW);
  n.useEffect(() => {
    f.default.track(C.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []);
  let M = n.useCallback(async () => {
      try {
        await (0, m.wG)(j, {
          location: function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(a);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = a[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            page: C.ZY5.PREVIEW_CAMERA_MODAL
          }, x.location)
        })
      } catch (e) {}
      await _(), (0, h.Up)(j)
    }, [j, x.location, _]),
    Z = n.useCallback(async () => {
      await M(), l.Z.setVideoEnabled(true), null == P || P()
    }, [M, P]),
    I = n.useMemo(() => [{
      variant: "primary",
      text: a ? E.intl.string(E.t.KQENho) : E.intl.string(E.t.kgIe9f),
      onClick: a ? M : Z
    }], [M, Z, a]);
  return (0, r.jsx)(u.Gt, {
    value: A,
    children: (0, r.jsx)(o.Z, {
      page: C.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, r.jsx)(i.Modal, {
        size: "md",
        title: a ? E.intl.string(E.t.LAwwbW) : E.intl.string(E.t["/HITVF"]),
        actionBarInput: (0, r.jsx)(c.XZJ, {
          label: E.intl.string(E.t["3Ppr1t"]),
          labelType: "secondary",
          checked: y,
          onChange: () => {
            p.qF.updateSetting(!y), f.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, {
              always_preview_video: !y
            })
          }
        }),
        actions: I,
        onClose: _,
        transitionState: t,
        children: (0, r.jsx)(v.Z, {
          hidePreviewToggle: true,
          showSmallBackgroundOptions: true,
          hideDeviceHeader: true,
          hideCameraSettingsLink: true,
          selectedBackgroundOption: j,
          onSelectBackgroundOption: S,
          hideDeviceSelector: a,
          renderCamera: e => (0, r.jsxs)("div", {
            className: O.cameraPreview,
            children: [(0, r.jsx)("div", {
              className: O.camera,
              children: (0, r.jsx)(k, {
                disabled: false,
                deviceId: e,
                width: 430,
                height: 242
              })
            }), (0, r.jsx)(v.S, {})]
          }),
          onLearnMore: _
        })
      })
    })
  })
}