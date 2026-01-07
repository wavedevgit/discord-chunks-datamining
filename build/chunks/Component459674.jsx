/** Chunk was on web.js **/
/** chunk id: 459674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, i.e7)([l.ZP], () => l.ZP.disableVoiceChannelChangeAlert);
  return (0, r.jsx)(s.F, {
    setting: u.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
    children: (0, r.jsx)(a.rsf, {
      label: d.intl.string(d.t.e7LIiY),
      description: d.intl.string(d.t.YCCMkJ),
      checked: !e,
      onChange: t => {
        (0, c.Z)("switch_channel_warning_enabled", t, !e), o.ZP.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: !t
        })
      }
    })
  })
}