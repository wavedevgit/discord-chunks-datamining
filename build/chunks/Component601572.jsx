/** Chunk was on 91018 **/
/** chunk id: 601572, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
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
  Chunk747545 = require("./747545.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk142768 = require("./142768.js");

function x(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: x,
    onClose: P
  } = e, y = w.Z.getCameraComponent(), O = (0, h.Dt)(), S = (0, f.Z)(), A = m.qF.useSetting(), [R, M] = r.useState((0, g.P)(v.default.getCurrentUser())), N = (0, c.O)(), {
    analyticsLocations: Z
  } = (0, d.ZP)(s.Z.CAMERA_PREVIEW), D = r.useRef(null);
  r.useEffect(() => {
    C.default.track(E.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), r.useEffect(() => {
    var e;
    null == (e = D.current) || e.scrollToTop()
  }, []);
  let I = async () => {
    await L(), o.Z.setVideoEnabled(true), null == x || x()
  }, L = async () => {
    try {
      await (0, _.wG)(R, {
        location: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
              return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = a[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({
          page: E.ZY5.PREVIEW_CAMERA_MODAL
        }, N.location)
      })
    } catch (e) {}
    await P(), (0, p.Up)(R)
  };
  return (0, n.jsx)(d.Gt, {
    value: Z,
    children: (0, n.jsx)(l.Z, {
      page: E.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, n.jsxs)(i.Y0X, {
        className: k.modalRoot,
        size: i.CgR.DYNAMIC,
        "aria-labelledby": O,
        transitionState: t,
        parentComponent: "CameraPreviewModal",
        children: [(0, n.jsxs)(i.hzk, {
          className: S ? k.contentWithVideoBackgrounds : k.content,
          scrollerRef: D,
          children: [(0, n.jsx)(i.X6q, {
            id: O,
            className: k.header,
            variant: "heading-xl/semibold",
            children: a ? j.intl.string(j.t.LAwwbW) : j.intl.string(j.t["/HITVF"])
          }), (0, n.jsx)(b.Z, {
            hidePreviewToggle: true,
            showSmallBackgroundOptions: true,
            hideDeviceHeader: true,
            hideCameraSettingsLink: true,
            selectedBackgroundOption: R,
            onSelectBackgroundOption: M,
            hideDeviceSelector: a,
            renderCamera: e => (0, n.jsxs)("div", {
              className: k.cameraPreview,
              children: [(0, n.jsx)("div", {
                className: k.camera,
                children: (0, n.jsx)(y, {
                  disabled: false,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, n.jsx)(b.S, {})]
            }),
            onLearnMore: P
          })]
        }), (0, n.jsxs)(i.mzw, {
          justify: u.Z.Justify.BETWEEN,
          children: [(() => {
            let e = a ? j.intl.string(j.t.KQENho) : j.intl.string(j.t.kgIe9f);
            return (0, n.jsx)(i.zxk, {
              variant: "primary",
              size: "sm",
              text: e,
              onClick: a ? L : I,
              autoFocus: !a
            })
          })(), (0, n.jsx)(i.XZJ, {
            label: j.intl.string(j.t["3Ppr1t"]),
            labelSize: "small",
            checked: A,
            onChange: () => {
              m.qF.updateSetting(!A), C.default.track(E.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !A
              })
            }
          })]
        }), (0, n.jsx)(i.olH, {
          onClick: P,
          className: k.modalClose
        })]
      })
    })
  })
}