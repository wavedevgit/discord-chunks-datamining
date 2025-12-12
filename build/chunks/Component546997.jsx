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
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  (0, d.isMac)() && e ? (0, o.Z)({
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
    supportsHookSoundshare: o,
    useSystemScreensharePicker: l
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    videoHook: Chunk131951.Z.getVideoHook(),
    experimentalSoundshare: Chunk131951.Z.getExperimentalSoundshare(),
    supportsExperimentalSoundshare: Chunk131951.Z.supportsExperimentalSoundshare(),
    supportsHookSoundshare: Chunk131951.Z.supportsHookSoundshare(),
    useSystemScreensharePicker: Chunk131951.Z.getUseSystemScreensharePicker()
  }));
  return (0, Chunk54381.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
    children: [(0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.GmWk2E),
        description: Chunk388032.intl.string(Chunk388032.t["Fj/xn1"]),
        checked: module,
        onChange: e => s.Z.setVideoHook(e)
      })
    }), require && Chunk248514 && (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["4I0qzZ"]),
        checked: exports,
        onChange: e => s.Z.setExperimentalSoundshare(e)
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.ie1mgY),
        checked: Chunk579806,
        onChange: _
      })
    })]
  })
}