/** Chunk was on 10534 **/
/** chunk id: 308229, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk212245 = require("./212245.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk329551 = require("./329551.js"),
  Chunk987384 = require("./987384.js"),
  Chunk413339 = require("./413339.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk745317 = require("./745317.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk682225 = require("./682225.js");

function v(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: v,
    onClose: y
  } = e, E = A.A.getCameraComponent(), O = p.bm.useSetting(), [j, S] = i.useState((0, g.i)(w.default.getCurrentUser())), P = (0, s.p)(), {
    analyticsLocations: x
  } = (0, u.Ay)(d.A.CAMERA_PREVIEW);
  i.useEffect(() => {
    C.default.track(f.HAw.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []);
  let M = i.useCallback(async () => {
      try {
        await (0, b.gB)(j, {
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
            page: f.liQ.PREVIEW_CAMERA_MODAL
          }, P.location)
        })
      } catch (e) {}
      await y(), (0, h._C)(j)
    }, [j, P.location, y]),
    D = i.useCallback(async () => {
      await M(), c.A.setVideoEnabled(true), null == v || v()
    }, [M, v]),
    I = i.useMemo(() => [{
      variant: "primary",
      text: a ? m.intl.string(m.t.KQENhq) : m.intl.string(m.t.kgIe9a),
      onClick: a ? M : D
    }], [M, D, a]);
  return (0, n.jsx)(u.f5, {
    value: x,
    children: (0, n.jsx)(o.A, {
      page: f.liQ.PREVIEW_CAMERA_MODAL,
      children: (0, n.jsx)(r.Modal, {
        size: "md",
        title: a ? m.intl.string(m.t.LAwwbQ) : m.intl.string(m.t["/HITVD"]),
        actionBarInput: (0, n.jsx)(l.Checkbox, {
          label: m.intl.string(m.t["3Ppr1h"]),
          labelType: "secondary",
          checked: O,
          onChange: () => {
            p.bm.updateSetting(!O), C.default.track(f.HAw.UPDATE_USER_SETTINGS_LOCAL, {
              always_preview_video: !O
            })
          }
        }),
        actions: I,
        onClose: y,
        transitionState: t,
        children: (0, n.jsx)(_.A, {
          hidePreviewToggle: true,
          hideDeviceHeader: true,
          hideCameraSettingsLink: true,
          selectedBackgroundOption: j,
          onSelectBackgroundOption: S,
          hideDeviceSelector: a,
          renderCamera: e => (0, n.jsxs)("div", {
            className: k.S,
            children: [(0, n.jsx)("div", {
              className: k.U,
              children: (0, n.jsx)(E, {
                disabled: false,
                deviceId: e,
                width: 430,
                height: 242
              })
            }), (0, n.jsx)(_.k, {})]
          }),
          onLearnMore: y
        })
      })
    })
  })
}