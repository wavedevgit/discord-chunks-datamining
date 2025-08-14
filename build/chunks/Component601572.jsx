/** Chunk was on 18126 **/
/** chunk id: 601572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function B(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: B,
    onClose: k
  } = e, v = C.Z.getCameraComponent(), w = (0, _.Dt)(), x = (0, g.Z)(), I = f.qF.useSetting(), [E, N] = i.useState((0, p.P)(S.default.getCurrentUser())), P = (0, c.O)(), {
    analyticsLocations: R
  } = (0, d.ZP)(s.Z.CAMERA_PREVIEW), j = i.useRef(null);
  i.useEffect(() => {
    h.default.track(A.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null == (e = j.current) || e.scrollToTop()
  }, []);
  let U = async () => {
    await H(), a.Z.setVideoEnabled(true), null == B || B()
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
          page: A.ZY5.PREVIEW_CAMERA_MODAL
        }, P.location)
      })
    } catch (e) {}
    await k(), (0, m.Up)(E)
  };
  return (0, r.jsx)(d.Gt, {
    value: R,
    children: (0, r.jsx)(l.Z, {
      page: A.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, r.jsxs)(o.Y0X, {
        className: y.modalRoot,
        size: o.CgR.DYNAMIC,
        "aria-labelledby": w,
        transitionState: t,
        parentComponent: "CameraPreviewModal",
        children: [(0, r.jsxs)(o.hzk, {
          className: x ? y.contentWithVideoBackgrounds : y.content,
          scrollerRef: j,
          children: [(0, r.jsx)(o.X6q, {
            id: w,
            className: y.header,
            variant: "heading-xl/semibold",
            children: n ? T.intl.string(T.t.LAwwbW) : T.intl.string(T.t["/HITVF"])
          }), (0, r.jsx)(O.Z, {
            hidePreviewToggle: true,
            showSmallBackgroundOptions: true,
            hideDeviceHeader: true,
            hideCameraSettingsLink: true,
            selectedBackgroundOption: E,
            onSelectBackgroundOption: N,
            hideDeviceSelector: n,
            renderCamera: e => (0, r.jsxs)("div", {
              className: y.cameraPreview,
              children: [(0, r.jsx)("div", {
                className: y.camera,
                children: (0, r.jsx)(v, {
                  disabled: false,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, r.jsx)(O.S, {})]
            }),
            onLearnMore: k
          })]
        }), (0, r.jsxs)(o.mzw, {
          justify: u.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? T.intl.string(T.t.KQENho) : T.intl.string(T.t.kgIe9f);
            return (0, r.jsx)(o.zxk, {
              variant: "primary",
              size: "sm",
              text: e,
              onClick: n ? H : U,
              autoFocus: !n
            })
          })(), (0, r.jsx)(o.XZJ, {
            size: 18,
            type: o.XZJ.Types.INVERTED,
            value: I,
            onChange: () => {
              f.qF.updateSetting(!I), h.default.track(A.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !I
              })
            },
            children: (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: T.intl.string(T.t["3Ppr1t"])
            })
          })]
        }), (0, r.jsx)(o.olH, {
          onClick: k,
          className: y.modalClose
        })]
      })
    })
  })
}