/** Chunk was on web.js **/
/** chunk id: 574868, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f() {
  let e = (0, i.bG)([l.Ay], () => l.Ay.disableVoiceChannelChangeAlert);
  return (0, r.jsx)(o.x, {
    setting: u.H.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
    children: (0, r.jsx)(a.dOG, {
      label: d.intl.string(d.t.e7LIiY),
      description: d.intl.string(d.t.YCCMkJ),
      checked: !e,
      onChange: t => {
        (0, c.A)("switch_channel_warning_enabled", t, !e), s.Ay.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: !t
        })
      }
    })
  })
}