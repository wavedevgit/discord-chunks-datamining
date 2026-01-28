/** Chunk was on 69114 **/
/** chunk id: 308229, original params: e,o,t (module,exports,require) **/
require.d(exports, {
  default: () => y
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

function y(e) {
  let {
    transitionState: o,
    videoEnabled: t,
    onEnable: y,
    onClose: S
  } = e, w = p.A.getCameraComponent(), v = s.bm.useSetting(), [T, I] = a.useState((0, u.i)(g.default.getCurrentUser())), B = (0, d.p)(), {
    analyticsLocations: R
  } = (0, b.Ay)(l.A.CAMERA_PREVIEW);
  a.useEffect(() => {
    C.default.track(x.HAw.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []);
  let O = a.useCallback(async () => {
      try {
        await (0, f.gB)(T, {
          location: function(e) {
            for (var o = 1; o < arguments.length; o++) {
              var t = null != arguments[o] ? arguments[o] : {},
                n = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), n.forEach(function(o) {
                var n;
                n = t[o], o in e ? Object.defineProperty(e, o, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[o] = n
              })
            }
            return e
          }({
            page: x.liQ.PREVIEW_CAMERA_MODAL
          }, B.location)
        })
      } catch (e) {}
      await S(), (0, m._C)(T)
    }, [T, B.location, S]),
    E = a.useCallback(async () => {
      await O(), _.A.setVideoEnabled(true), null == y || y()
    }, [O, y]),
    L = a.useMemo(() => [{
      variant: "primary",
      text: t ? k.intl.string(k.t.KQENhq) : k.intl.string(k.t.kgIe9a),
      onClick: t ? O : E
    }], [O, E, t]);
  return (0, n.jsx)(b.f5, {
    value: R,
    children: (0, n.jsx)(c.A, {
      page: x.liQ.PREVIEW_CAMERA_MODAL,
      children: (0, n.jsx)(r.Modal, {
        size: "md",
        title: t ? k.intl.string(k.t.LAwwbQ) : k.intl.string(k.t["/HITVD"]),
        actionBarInput: (0, n.jsx)(i.Checkbox, {
          label: k.intl.string(k.t["3Ppr1h"]),
          labelType: "secondary",
          checked: v,
          onChange: () => {
            s.bm.updateSetting(!v), C.default.track(x.HAw.UPDATE_USER_SETTINGS_LOCAL, {
              always_preview_video: !v
            })
          }
        }),
        actions: L,
        onClose: S,
        transitionState: o,
        children: (0, n.jsx)(h.A, {
          hidePreviewToggle: true,
          hideDeviceHeader: true,
          hideCameraSettingsLink: true,
          selectedBackgroundOption: T,
          onSelectBackgroundOption: I,
          hideDeviceSelector: t,
          renderCamera: e => (0, n.jsxs)("div", {
            className: A.S,
            children: [(0, n.jsx)("div", {
              className: A.U,
              children: (0, n.jsx)(w, {
                disabled: false,
                deviceId: e,
                width: 430,
                height: 242
              })
            }), (0, n.jsx)(h.k, {})]
          }),
          onLearnMore: S
        })
      })
    })
  })
}