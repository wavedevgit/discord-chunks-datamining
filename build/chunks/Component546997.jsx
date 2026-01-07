/** Chunk was on web.js **/
/** chunk id: 546997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _,
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk579806 = require("./579806.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  (0, d.isMac)() && e ? (0, a.Z)({
    title: p.intl.string(p.t["9jf31O"]),
    subtitle: p.intl.string(p.t.uBd6JW),
    variant: "primary",
    onConfirm: () => {
      s.Z.setUseSystemScreensharePicker(e), l.Z.app.relaunch()
    },
    confirmText: p.intl.string(p.t.BddRzS)
  }) : s.Z.setUseSystemScreensharePicker(e)
}

function m() {
  let {
    videoHook: e,
    experimentalSoundshare: t,
    supportsExperimentalSoundshare: n,
    supportsHookSoundshare: a,
    useSystemScreensharePicker: l
  } = (0, i.cj)([u.Z], () => ({
    videoHook: u.Z.getVideoHook(),
    experimentalSoundshare: u.Z.getExperimentalSoundshare(),
    supportsExperimentalSoundshare: u.Z.supportsExperimentalSoundshare(),
    supportsHookSoundshare: u.Z.supportsHookSoundshare(),
    useSystemScreensharePicker: u.Z.getUseSystemScreensharePicker()
  }));
  return (0, r.jsxs)(c.F, {
    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
    children: [(0, r.jsx)(c.F, {
      setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
      children: (0, r.jsx)(o.rsf, {
        label: p.intl.string(p.t.GmWk2E),
        description: p.intl.string(p.t["Fj/xn1"]),
        checked: e,
        onChange: e => s.Z.setVideoHook(e)
      })
    }), n && a && (0, r.jsx)(c.F, {
      setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
      children: (0, r.jsx)(o.rsf, {
        label: p.intl.string(p.t["4I0qzZ"]),
        checked: t,
        onChange: e => s.Z.setExperimentalSoundshare(e)
      })
    }), (0, r.jsx)(c.F, {
      setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
      children: (0, r.jsx)(o.rsf, {
        label: p.intl.string(p.t.ie1mgY),
        checked: l,
        onChange: _
      })
    })]
  })
}