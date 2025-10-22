/** Chunk was on 91018 **/
/** chunk id: 601572, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
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

function O(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: O,
    onClose: P
  } = e, _ = m.Z.getCameraComponent(), y = p.qF.useSetting(), [j, x] = n.useState((0, h.P)(w.default.getCurrentUser())), S = (0, s.O)(), {
    analyticsLocations: A
  } = (0, u.ZP)(d.Z.CAMERA_PREVIEW);
  n.useEffect(() => {
    f.default.track(C.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []);
  let M = n.useCallback(async () => {
      try {
        await (0, b.wG)(j, {
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
          }, S.location)
        })
      } catch (e) {}
      await P(), (0, g.Up)(j)
    }, [j, S.location, P]),
    D = n.useCallback(async () => {
      await M(), l.Z.setVideoEnabled(true), null == O || O()
    }, [M, O]),
    I = n.useMemo(() => [{
      variant: "primary",
      text: a ? k.intl.string(k.t.KQENhq) : k.intl.string(k.t.kgIe9a),
      onClick: a ? M : D
    }], [M, D, a]);
  return (0, r.jsx)(u.Gt, {
    value: A,
    children: (0, r.jsx)(o.Z, {
      page: C.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, r.jsx)(i.Modal, {
        size: "md",
        title: a ? k.intl.string(k.t.LAwwbQ) : k.intl.string(k.t["/HITVD"]),
        actionBarInput: (0, r.jsx)(c.Checkbox, {
          label: k.intl.string(k.t["3Ppr1h"]),
          labelType: "secondary",
          checked: y,
          onChange: () => {
            p.qF.updateSetting(!y), f.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, {
              always_preview_video: !y
            })
          }
        }),
        actions: I,
        onClose: P,
        transitionState: t,
        children: (0, r.jsx)(v.Z, {
          hidePreviewToggle: true,
          showSmallBackgroundOptions: true,
          hideDeviceHeader: true,
          hideCameraSettingsLink: true,
          selectedBackgroundOption: j,
          onSelectBackgroundOption: x,
          hideDeviceSelector: a,
          renderCamera: e => (0, r.jsxs)("div", {
            className: E.cameraPreview,
            children: [(0, r.jsx)("div", {
              className: E.camera,
              children: (0, r.jsx)(_, {
                disabled: false,
                deviceId: e,
                width: 430,
                height: 242
              })
            }), (0, r.jsx)(v.S, {})]
          }),
          onLearnMore: P
        })
      })
    })
  })
}