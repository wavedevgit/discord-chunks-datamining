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
  Chunk921801 = require("./921801.js"),
  Chunk740492 = require("./740492.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.disableVoiceChannelChangeAlert);
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.e7LIiY),
      description: Chunk388032.intl.string(Chunk388032.t.YCCMkJ),
      checked: !module,
      onChange: t => {
        (0, c.Z)("switch_channel_warning_enabled", t, !e), a.ZP.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: !t
        })
      }
    })
  })
}