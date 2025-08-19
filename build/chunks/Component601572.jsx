/** Chunk was on 73870 **/
/** chunk id: 601572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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

function O(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: O,
    onClose: S
  } = e, w = h.Z.getCameraComponent(), x = (0, u.Dt)(), N = (0, b.Z)(), E = p.qF.useSetting(), [P, k] = o.useState((0, m.P)(C.default.getCurrentUser())), L = (0, s.O)(), {
    analyticsLocations: M
  } = (0, d.ZP)(l.Z.CAMERA_PREVIEW), R = o.useRef(null);
  o.useEffect(() => {
    T.default.track(A.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), o.useEffect(() => {
    var e;
    null == (e = R.current) || e.scrollToTop()
  }, []);
  let U = async () => {
    await D(), r.Z.setVideoEnabled(true), null == O || O()
  }, D = async () => {
    try {
      await (0, f.wG)(P, {
        location: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({
          page: A.ZY5.PREVIEW_CAMERA_MODAL
        }, L.location)
      })
    } catch (e) {}
    await S(), (0, g.Up)(P)
  };
  return (0, a.jsx)(d.Gt, {
    value: M,
    children: (0, a.jsx)(c.Z, {
      page: A.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, a.jsxs)(i.Y0X, {
        className: v.modalRoot,
        size: i.CgR.DYNAMIC,
        "aria-labelledby": x,
        transitionState: t,
        parentComponent: "CameraPreviewModal",
        children: [(0, a.jsxs)(i.hzk, {
          className: N ? v.contentWithVideoBackgrounds : v.content,
          scrollerRef: R,
          children: [(0, a.jsx)(i.X6q, {
            id: x,
            className: v.header,
            variant: "heading-xl/semibold",
            children: n ? I.intl.string(I.t.LAwwbW) : I.intl.string(I.t["/HITVF"])
          }), (0, a.jsx)(y.Z, {
            hidePreviewToggle: true,
            showSmallBackgroundOptions: true,
            hideDeviceHeader: true,
            hideCameraSettingsLink: true,
            selectedBackgroundOption: P,
            onSelectBackgroundOption: k,
            hideDeviceSelector: n,
            renderCamera: e => (0, a.jsxs)("div", {
              className: v.cameraPreview,
              children: [(0, a.jsx)("div", {
                className: v.camera,
                children: (0, a.jsx)(w, {
                  disabled: false,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, a.jsx)(y.S, {})]
            }),
            onLearnMore: S
          })]
        }), (0, a.jsxs)(i.mzw, {
          justify: _.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? I.intl.string(I.t.KQENho) : I.intl.string(I.t.kgIe9f);
            return (0, a.jsx)(i.zxk, {
              variant: "primary",
              size: "sm",
              text: e,
              onClick: n ? D : U,
              autoFocus: !n
            })
          })(), (0, a.jsx)(i.XZJ, {
            size: 18,
            type: i.XZJ.Types.INVERTED,
            value: E,
            onChange: () => {
              p.qF.updateSetting(!E), T.default.track(A.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !E
              })
            },
            children: (0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: I.intl.string(I.t["3Ppr1t"])
            })
          })]
        }), (0, a.jsx)(i.olH, {
          onClick: S,
          className: v.modalClose
        })]
      })
    })
  })
}