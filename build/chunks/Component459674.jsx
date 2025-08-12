/** Chunk was on 20501 **/
/** chunk id: 459674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk921801 = require("./921801.js"),
  Chunk740492 = require("./740492.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk881488 = require("./881488.js");

function p(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, r.e7)([o.ZP], () => o.ZP.disableVoiceChannelChangeAlert);
  return (0, i.jsx)(l.F, {
    setting: d.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
    children: (0, i.jsx)(s.j7V, {
      className: m.marginBottom20,
      note: u.intl.string(u.t.YCCMkJ),
      onChange: e => {
        (0, c.Z)("switch_channel_warning_enabled", e, !n), a.ZP.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: !e
        })
      },
      value: !n,
      hideBorder: t,
      children: (0, i.jsx)(s.X6q, {
        variant: "text-md/medium",
        color: "header-primary",
        className: m.marginBottom8,
        children: u.intl.string(u.t.e7LIiY)
      })
    })
  })
}