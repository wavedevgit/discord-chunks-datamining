/** Chunk was on 60667 **/
/** chunk id: 745317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T,
  k: () => C
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
  Chunk195043 = require("./195043.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk520999 = require("./520999.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk204050 = require("./204050.js"),
  Chunk652215 = require("./652215.js"),
  Chunk531525 = require("./531525.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk602785 = require("./602785.js");

function C() {
  let [e, t] = i.useState(false), n = (0, l.bG)([g.A], () => g.A.isMediaFilterSettingLoading());
  return (i.useEffect(() => {
    let e = new s.Ep;
    return n ? e.start(150, () => {
      t(true)
    }) : (e.stop(), t(false)), () => e.stop()
  }, [n]), e) ? (0, r.jsx)("div", {
    className: O.mB,
    children: (0, r.jsx)(a.y$y, {})
  }) : null
}

function T(e) {
  let {
    hideDeviceSelector: t = false,
    hideDeviceHeader: n = false,
    hideCameraSettingsLink: i = false,
    onLearnMore: s,
    selectedBackgroundOption: C,
    onSelectBackgroundOption: T,
    renderCamera: I,
    hidePreviewToggle: S = false,
    onCancelPreview: j
  } = e, {
    analyticsLocations: v
  } = (0, c.Ay)(), {
    id: N
  } = (0, u.x5)(E.oh.VIDEO_INPUT), y = (0, l.bG)([g.A], () => g.A.isVideoAvailable()), P = p.bm.useSetting();
  return (0, r.jsxs)(a.BJc, {
    gap: 20,
    children: [I(N), g.A.isEnabled() ? null : (0, r.jsx)(a.Text, {
      className: O.u5,
      color: "interactive-text-default",
      variant: "text-sm/normal",
      children: x.intl.format(x.t.stagfJ, {
        onEnableClick: () => o.A.enable(true)
      })
    }), S ? null : (0, r.jsx)(a.dOG, {
      label: x.intl.string(x.t["3Ppr1h"]),
      description: x.intl.string(x.t.WNbX4O),
      checked: P,
      onChange: e => {
        p.bm.updateSetting(e), A.default.track(h.HAw.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    }), !t && (0, r.jsx)(_.x, {
      setting: b.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
      children: (0, r.jsx)(d.U, {
        label: n ? true : x.intl.string(x.t.FsQ3OR),
        helperText: !i && (0, f.p)() ? x.intl.format(x.t.aJYgRt, {
          onCameraSettingsClick: () => {
            null == j || j(), window.open((0, f.i)(N)), A.default.track(h.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
              location_stack: v
            })
          }
        }) : true,
        deviceType: E.oh.VIDEO_INPUT,
        location: "CameraSettings",
        isDisabled: !y,
        showAllDevices: true
      })
    }), (0, r.jsx)(_.x, {
      setting: b.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
      children: (0, r.jsx)(m.A, {
        className: O.Jp,
        onLearnMore: s,
        selectedBackgroundOption: C,
        onSelectBackgroundOption: T,
        currentDeviceId: N
      })
    })]
  })
}