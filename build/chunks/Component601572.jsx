/** Chunk was on 91018 **/
/** chunk id: 601572, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => k
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

function k(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: k,
    onClose: y
  } = e, P = v.Z.getCameraComponent(), O = (0, h.Dt)(), R = (0, f.Z)(), S = m.qF.useSetting(), [A, M] = r.useState((0, p.P)(w.default.getCurrentUser())), N = (0, s.O)(), {
    analyticsLocations: Z
  } = (0, d.ZP)(c.Z.CAMERA_PREVIEW), T = r.useRef(null);
  r.useEffect(() => {
    x.default.track(C.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), r.useEffect(() => {
    var e;
    null == (e = T.current) || e.scrollToTop()
  }, []);
  let D = async () => {
    await I(), o.Z.setVideoEnabled(true), null == k || k()
  }, I = async () => {
    try {
      await (0, _.wG)(A, {
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
          page: C.ZY5.PREVIEW_CAMERA_MODAL
        }, N.location)
      })
    } catch (e) {}
    await y(), (0, g.Up)(A)
  };
  return (0, n.jsx)(d.Gt, {
    value: Z,
    children: (0, n.jsx)(l.Z, {
      page: C.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, n.jsxs)(i.Y0X, {
        className: b.modalRoot,
        size: i.CgR.DYNAMIC,
        "aria-labelledby": O,
        transitionState: t,
        parentComponent: "CameraPreviewModal",
        children: [(0, n.jsxs)(i.hzk, {
          className: R ? b.contentWithVideoBackgrounds : b.content,
          scrollerRef: T,
          children: [(0, n.jsx)(i.X6q, {
            id: O,
            className: b.header,
            variant: "heading-xl/semibold",
            children: a ? j.intl.string(j.t.LAwwbW) : j.intl.string(j.t["/HITVF"])
          }), (0, n.jsx)(E.Z, {
            hidePreviewToggle: true,
            showSmallBackgroundOptions: true,
            hideDeviceHeader: true,
            hideCameraSettingsLink: true,
            selectedBackgroundOption: A,
            onSelectBackgroundOption: M,
            hideDeviceSelector: a,
            renderCamera: e => (0, n.jsxs)("div", {
              className: b.cameraPreview,
              children: [(0, n.jsx)("div", {
                className: b.camera,
                children: (0, n.jsx)(P, {
                  disabled: false,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, n.jsx)(E.S, {})]
            }),
            onLearnMore: y
          })]
        }), (0, n.jsxs)(i.mzw, {
          justify: u.Z.Justify.BETWEEN,
          children: [(() => {
            let e = a ? j.intl.string(j.t.KQENho) : j.intl.string(j.t.kgIe9f);
            return (0, n.jsx)(i.zxk, {
              variant: "primary",
              size: "sm",
              text: e,
              onClick: a ? I : D,
              autoFocus: !a
            })
          })(), (0, n.jsx)(i.XZJ, {
            size: 18,
            type: i.XZJ.Types.INVERTED,
            value: S,
            onChange: () => {
              m.qF.updateSetting(!S), x.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !S
              })
            },
            children: (0, n.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: j.intl.string(j.t["3Ppr1t"])
            })
          })]
        }), (0, n.jsx)(i.olH, {
          onClick: y,
          className: b.modalClose
        })]
      })
    })
  })
}