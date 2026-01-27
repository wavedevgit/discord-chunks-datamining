/** Chunk was on 60667 **/
/** chunk id: 565824, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g,
  I: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk77729 = require("./77729.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  (0, u.isMac)() && e ? (0, l.A)({
    title: p.intl.string(p.t["9jf31O"]),
    subtitle: p.intl.string(p.t.uBd6JW),
    variant: "primary",
    onConfirm: () => {
      a.A.setUseSystemScreensharePicker(e), o.A.app.relaunch()
    },
    confirmText: p.intl.string(p.t.BddRzS)
  }) : a.A.setUseSystemScreensharePicker(e)
}

function g() {
  let {
    videoHook: e,
    experimentalSoundshare: t,
    supportsExperimentalSoundshare: n,
    supportsHookSoundshare: l,
    useSystemScreensharePicker: o
  } = (0, i.cf)([d.A], () => ({
    videoHook: d.A.getVideoHook(),
    experimentalSoundshare: d.A.getExperimentalSoundshare(),
    supportsExperimentalSoundshare: d.A.supportsExperimentalSoundshare(),
    supportsHookSoundshare: d.A.supportsHookSoundshare(),
    useSystemScreensharePicker: d.A.getUseSystemScreensharePicker()
  }));
  return (0, r.jsxs)(c.x, {
    setting: _.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
    children: [(0, r.jsx)(c.x, {
      setting: _.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
      children: (0, r.jsx)(s.dOG, {
        label: p.intl.string(p.t.GmWk2E),
        description: p.intl.string(p.t["Fj/xn1"]),
        checked: e,
        onChange: e => a.A.setVideoHook(e)
      })
    }), n && l && (0, r.jsx)(c.x, {
      setting: _.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
      children: (0, r.jsx)(s.dOG, {
        label: p.intl.string(p.t["4I0qzZ"]),
        checked: t,
        onChange: e => a.A.setExperimentalSoundshare(e)
      })
    }), (0, r.jsx)(c.x, {
      setting: _.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
      children: (0, r.jsx)(s.dOG, {
        label: p.intl.string(p.t.ie1mgY),
        checked: o,
        onChange: m
      })
    })]
  })
}