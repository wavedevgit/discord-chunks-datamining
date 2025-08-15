/** Chunk was on 3500 **/
/** chunk id: 601572, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => S
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

function S(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: S,
    onClose: I
  } = e, w = b.Z.getCameraComponent(), N = (0, p.Dt)(), E = (0, h.Z)(), P = _.qF.useSetting(), [x, R] = i.useState((0, m.P)(C.default.getCurrentUser())), M = (0, s.O)(), {
    analyticsLocations: D
  } = (0, d.ZP)(l.Z.CAMERA_PREVIEW), L = i.useRef(null);
  i.useEffect(() => {
    y.default.track(v.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null == (e = L.current) || e.scrollToTop()
  }, []);
  let U = async () => {
    await j(), o.Z.setVideoEnabled(true), null == S || S()
  }, j = async () => {
    try {
      await (0, f.wG)(x, {
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
          page: v.ZY5.PREVIEW_CAMERA_MODAL
        }, M.location)
      })
    } catch (e) {}
    await I(), (0, g.Up)(x)
  };
  return (0, n.jsx)(d.Gt, {
    value: D,
    children: (0, n.jsx)(c.Z, {
      page: v.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, n.jsxs)(r.Y0X, {
        className: A.modalRoot,
        size: r.CgR.DYNAMIC,
        "aria-labelledby": N,
        transitionState: t,
        parentComponent: "CameraPreviewModal",
        children: [(0, n.jsxs)(r.hzk, {
          className: E ? A.contentWithVideoBackgrounds : A.content,
          scrollerRef: L,
          children: [(0, n.jsx)(r.X6q, {
            id: N,
            className: A.header,
            variant: "heading-xl/semibold",
            children: a ? O.intl.string(O.t.LAwwbW) : O.intl.string(O.t["/HITVF"])
          }), (0, n.jsx)(T.Z, {
            hidePreviewToggle: true,
            showSmallBackgroundOptions: true,
            hideDeviceHeader: true,
            hideCameraSettingsLink: true,
            selectedBackgroundOption: x,
            onSelectBackgroundOption: R,
            hideDeviceSelector: a,
            renderCamera: e => (0, n.jsxs)("div", {
              className: A.cameraPreview,
              children: [(0, n.jsx)("div", {
                className: A.camera,
                children: (0, n.jsx)(w, {
                  disabled: false,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, n.jsx)(T.S, {})]
            }),
            onLearnMore: I
          })]
        }), (0, n.jsxs)(r.mzw, {
          justify: u.Z.Justify.BETWEEN,
          children: [(() => {
            let e = a ? O.intl.string(O.t.KQENho) : O.intl.string(O.t.kgIe9f);
            return (0, n.jsx)(r.zxk, {
              variant: "primary",
              size: "sm",
              text: e,
              onClick: a ? j : U,
              autoFocus: !a
            })
          })(), (0, n.jsx)(r.XZJ, {
            size: 18,
            type: r.XZJ.Types.INVERTED,
            value: P,
            onChange: () => {
              _.qF.updateSetting(!P), y.default.track(v.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !P
              })
            },
            children: (0, n.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: O.intl.string(O.t["3Ppr1t"])
            })
          })]
        }), (0, n.jsx)(r.olH, {
          onClick: I,
          className: A.modalClose
        })]
      })
    })
  })
}