/** Chunk was on 95782 **/
/** chunk id: 745317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h,
  k: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk625841 = require("./625841.jsx"),
  Chunk74848 = require("./74848.js"),
  Chunk253932 = require("./253932.js"),
  Chunk520999 = require("./520999.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk204050 = require("./204050.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk602785 = require("./602785.js");

function A() {
  let [e, t] = r.useState(false), n = (0, l.bG)([O.A], () => O.A.isMediaFilterSettingLoading());
  return (r.useEffect(() => {
    let e = new i.Ep;
    return n ? e.start(150, () => {
      t(true)
    }) : (e.stop(), t(false)), () => e.stop()
  }, [n]), e) ? (0, s.jsx)("div", {
    className: y.mB,
    children: (0, s.jsx)(o.y$y, {})
  }) : null
}

function h(e) {
  let {
    hideDeviceSelector: t = false,
    hideDeviceHeader: n = false,
    hideCameraSettingsLink: r = false,
    onLearnMore: i,
    selectedBackgroundOption: A,
    onSelectBackgroundOption: h,
    renderCamera: v,
    hidePreviewToggle: N = false,
    onCancelPreview: E
  } = e, {
    analyticsLocations: _
  } = (0, c.Ay)(), {
    id: S
  } = (0, d.x5)(b.oh.VIDEO_INPUT), P = (0, l.bG)([O.A], () => O.A.isVideoAvailable()), D = p.bm.useSetting();
  return (0, s.jsxs)(o.BJc, {
    gap: 20,
    children: [v(S), O.A.isEnabled() ? null : (0, s.jsx)(o.Text, {
      className: y.u5,
      color: "interactive-text-default",
      variant: "text-sm/normal",
      children: x.intl.format(x.t.stagfJ, {
        onEnableClick: () => a.A.enable(true)
      })
    }), N ? null : (0, s.jsx)(o.dOG, {
      label: x.intl.string(x.t["3Ppr1h"]),
      description: x.intl.string(x.t.WNbX4O),
      checked: D,
      onChange: e => {
        p.bm.updateSetting(e), f.default.track(g.HAw.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    }), !t && (0, s.jsx)(u.U, {
      label: n ? true : x.intl.string(x.t.FsQ3OR),
      helperText: !r && (0, j.p)() ? x.intl.format(x.t.aJYgRt, {
        onCameraSettingsClick: () => {
          null == E || E(), window.open((0, j.i)(S)), f.default.track(g.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
            location_stack: _
          })
        }
      }) : true,
      deviceType: b.oh.VIDEO_INPUT,
      location: "CameraSettings",
      isDisabled: !P,
      showAllDevices: true
    }), (0, s.jsx)(m.A, {
      className: y.Jp,
      onLearnMore: i,
      selectedBackgroundOption: A,
      onSelectBackgroundOption: h,
      currentDeviceId: S
    })]
  })
}