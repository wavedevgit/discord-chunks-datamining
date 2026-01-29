/** Chunk was on 82277 **/
/** chunk id: 308229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
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

function w(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: w,
    onClose: I
  } = e, j = O.A.getCameraComponent(), D = p.bm.useSetting(), [C, S] = r.useState((0, g.i)(f.default.getCurrentUser())), x = (0, s.p)(), {
    analyticsLocations: P
  } = (0, d.Ay)(u.A.CAMERA_PREVIEW);
  r.useEffect(() => {
    m.default.track(y.HAw.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []);
  let A = r.useCallback(async () => {
      try {
        await (0, b.gB)(C, {
          location: function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                o = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), o.forEach(function(t) {
                var o;
                o = n[t], t in e ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = o
              })
            }
            return e
          }({
            page: y.liQ.PREVIEW_CAMERA_MODAL
          }, x.location)
        })
      } catch (e) {}
      await I(), (0, _._C)(C)
    }, [C, x.location, I]),
    E = r.useCallback(async () => {
      await A(), l.A.setVideoEnabled(true), null == w || w()
    }, [A, w]),
    T = r.useMemo(() => [{
      variant: "primary",
      text: n ? h.intl.string(h.t.KQENhq) : h.intl.string(h.t.kgIe9a),
      onClick: n ? A : E
    }], [A, E, n]);
  return (0, o.jsx)(d.f5, {
    value: P,
    children: (0, o.jsx)(c.A, {
      page: y.liQ.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsx)(i.Modal, {
        size: "md",
        title: n ? h.intl.string(h.t.LAwwbQ) : h.intl.string(h.t["/HITVD"]),
        actionBarInput: (0, o.jsx)(a.Checkbox, {
          label: h.intl.string(h.t["3Ppr1h"]),
          labelType: "secondary",
          checked: D,
          onChange: () => {
            p.bm.updateSetting(!D), m.default.track(y.HAw.UPDATE_USER_SETTINGS_LOCAL, {
              always_preview_video: !D
            })
          }
        }),
        actions: T,
        onClose: I,
        transitionState: t,
        children: (0, o.jsx)(v.A, {
          hidePreviewToggle: true,
          hideDeviceHeader: true,
          hideCameraSettingsLink: true,
          selectedBackgroundOption: C,
          onSelectBackgroundOption: S,
          hideDeviceSelector: n,
          renderCamera: e => (0, o.jsxs)("div", {
            className: k.S,
            children: [(0, o.jsx)("div", {
              className: k.U,
              children: (0, o.jsx)(j, {
                disabled: false,
                deviceId: e,
                width: 430,
                height: 242
              })
            }), (0, o.jsx)(v.k, {})]
          }),
          onLearnMore: I
        })
      })
    })
  })
}