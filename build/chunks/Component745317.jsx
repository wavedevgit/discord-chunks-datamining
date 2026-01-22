/** Chunk was on web.js **/
/** chunk id: 745317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S,
  k: () => v
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

function v() {
  let [e, t] = i.useState(false), n = (0, a.bG)([h.A], () => h.A.isMediaFilterSettingLoading());
  return (i.useEffect(() => {
    let e = new s.Ep;
    return n ? e.start(150, () => {
      t(true)
    }) : (e.stop(), t(false)), () => e.stop()
  }, [n]), e) ? (0, r.jsx)("div", {
    className: A.mB,
    children: (0, r.jsx)(o.y$y, {})
  }) : null
}

function S(e) {
  let {
    hideDeviceSelector: t = false,
    hideDeviceHeader: n = false,
    hideCameraSettingsLink: i = false,
    onLearnMore: s,
    selectedBackgroundOption: v,
    onSelectBackgroundOption: S,
    renderCamera: I,
    hidePreviewToggle: T = false,
    onCancelPreview: C
  } = e, {
    analyticsLocations: N
  } = (0, c.Ay)(), {
    id: R
  } = (0, d.x5)(y.oh.VIDEO_INPUT), w = (0, a.bG)([h.A], () => h.A.isVideoAvailable()), P = p.bm.useSetting();
  return (0, r.jsxs)(o.BJc, {
    gap: 20,
    children: [I(R), h.A.isEnabled() ? null : (0, r.jsx)(o.Text, {
      className: A.u5,
      color: "interactive-text-default",
      variant: "text-sm/normal",
      children: O.intl.format(O.t.stagfJ, {
        onEnableClick: () => l.A.enable(true)
      })
    }), T ? null : (0, r.jsx)(o.dOG, {
      label: O.intl.string(O.t["3Ppr1h"]),
      description: O.intl.string(O.t.WNbX4O),
      checked: P,
      onChange: e => {
        p.bm.updateSetting(e), m.default.track(E.HAw.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }
    }), !t && (0, r.jsx)(f.x, {
      setting: b.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
      children: (0, r.jsx)(u.U, {
        label: n ? true : O.intl.string(O.t.FsQ3OR),
        helperText: !i && (0, g.p)() ? O.intl.format(O.t.aJYgRt, {
          onCameraSettingsClick: () => {
            null == C || C(), window.open((0, g.i)(R)), m.default.track(E.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
              location_stack: N
            })
          }
        }) : true,
        deviceType: y.oh.VIDEO_INPUT,
        location: "CameraSettings",
        isDisabled: !w,
        showAllDevices: true
      })
    }), (0, r.jsx)(f.x, {
      setting: b.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
      children: (0, r.jsx)(_.A, {
        className: A.Jp,
        onLearnMore: s,
        selectedBackgroundOption: v,
        onSelectBackgroundOption: S,
        currentDeviceId: R
      })
    })]
  })
}