/** Chunk was on 91018 **/
/** chunk id: 601572, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk146371 = require("./146371.js");

function y(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: y,
    onClose: P
  } = e, O = w.Z.getCameraComponent(), R = (0, m.Dt)(), S = (0, v.Z)(), A = g.qF.useSetting(), [M, N] = r.useState((0, p.P)(x.default.getCurrentUser())), D = (0, c.O)(), {
    analyticsLocations: T
  } = (0, u.ZP)(d.Z.CAMERA_PREVIEW), Z = r.useRef(null);
  r.useEffect(() => {
    E.default.track(j.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), r.useEffect(() => {
    var e;
    null == (e = Z.current) || e.scrollToTop()
  }, []);
  let I = async () => {
    await V(), l.Z.setVideoEnabled(true), null == y || y()
  }, V = async () => {
    try {
      await (0, f.wG)(M, {
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
          page: j.ZY5.PREVIEW_CAMERA_MODAL
        }, D.location)
      })
    } catch (e) {}
    await P(), (0, _.Up)(M)
  };
  return (0, n.jsx)(u.Gt, {
    value: T,
    children: (0, n.jsx)(s.Z, {
      page: j.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, n.jsxs)(o.Y0X, {
        className: k.modalRoot,
        size: o.CgR.DYNAMIC,
        "aria-labelledby": R,
        transitionState: t,
        parentComponent: "CameraPreviewModal",
        children: [(0, n.jsxs)(o.hzk, {
          className: S ? k.contentWithVideoBackgrounds : k.content,
          scrollerRef: Z,
          children: [(0, n.jsx)(o.X6q, {
            id: R,
            className: k.header,
            variant: "heading-xl/semibold",
            children: a ? b.intl.string(b.t.LAwwbW) : b.intl.string(b.t["/HITVF"])
          }), (0, n.jsx)(C.Z, {
            hidePreviewToggle: true,
            showSmallBackgroundOptions: true,
            hideDeviceHeader: true,
            hideCameraSettingsLink: true,
            selectedBackgroundOption: M,
            onSelectBackgroundOption: N,
            hideDeviceSelector: a,
            renderCamera: e => (0, n.jsxs)("div", {
              className: k.cameraPreview,
              children: [(0, n.jsx)("div", {
                className: k.camera,
                children: (0, n.jsx)(O, {
                  disabled: false,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, n.jsx)(C.S, {})]
            }),
            onLearnMore: P
          })]
        }), (0, n.jsxs)(o.mzw, {
          justify: h.Z.Justify.BETWEEN,
          children: [(() => {
            let e = a ? b.intl.string(b.t.KQENho) : b.intl.string(b.t.kgIe9f);
            return (0, n.jsx)(o.zxk, {
              variant: "primary",
              size: "sm",
              text: e,
              onClick: a ? V : I,
              autoFocus: !a
            })
          })(), (0, n.jsx)(i.$q, {
            size: 18,
            type: i.M0.INVERTED,
            value: A,
            onChange: () => {
              g.qF.updateSetting(!A), E.default.track(j.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !A
              })
            },
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: b.intl.string(b.t["3Ppr1t"])
            })
          })]
        }), (0, n.jsx)(o.olH, {
          onClick: P,
          className: k.modalClose
        })]
      })
    })
  })
}