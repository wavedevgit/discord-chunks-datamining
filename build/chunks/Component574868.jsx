/** Chunk was on 60667 **/
/** chunk id: 574868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk964404 = require("./964404.js"),
  Chunk698723 = require("./698723.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function _() {
  let e = (0, i.bG)([o.Ay], () => o.Ay.disableVoiceChannelChangeAlert);
  return (0, r.jsx)(a.x, {
    setting: d.H.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
    children: (0, r.jsx)(l.dOG, {
      label: u.intl.string(u.t.e7LIiY),
      description: u.intl.string(u.t.YCCMkJ),
      checked: !e,
      onChange: t => {
        (0, c.A)("switch_channel_warning_enabled", t, !e), s.Ay.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: !t
        })
      }
    })
  })
}