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

function _() {
  let e = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.disableVoiceChannelChangeAlert);
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      className: Chunk197571.marginBottom20,
      note: Chunk388032.intl.string(Chunk388032.t.YCCMkJ),
      onChange: t => {
        (0, c.Z)("switch_channel_warning_enabled", t, !e), o.ZP.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: !t
        })
      },
      value: !module,
      hideBorder: true,
      children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "text-md/medium",
        color: "header-primary",
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.e7LIiY)
      })
    })
  })
}