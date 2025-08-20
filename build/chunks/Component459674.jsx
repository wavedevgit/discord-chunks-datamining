/** Chunk was on web.js **/
/** chunk id: 459674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk921801 = require("./921801.js"),
  Chunk740492 = require("./740492.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function _(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, i.e7)([l.ZP], () => l.ZP.disableVoiceChannelChangeAlert);
  return (0, r.jsx)(s.F, {
    setting: u.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
    children: (0, r.jsx)(a.j7V, {
      className: f.marginBottom20,
      note: d.intl.string(d.t.YCCMkJ),
      onChange: e => {
        (0, c.Z)("switch_channel_warning_enabled", e, !n), o.ZP.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: !e
        })
      },
      value: !n,
      hideBorder: t,
      children: (0, r.jsx)(a.X6q, {
        variant: "text-md/medium",
        color: "header-primary",
        className: f.marginBottom8,
        children: d.intl.string(d.t.e7LIiY)
      })
    })
  })
}