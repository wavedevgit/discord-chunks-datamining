/** Chunk was on web.js **/
/** chunk id: 769838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk698723 = require("./698723.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function f() {
  let e = l.uh.useSetting(),
    {
      analyticsLocations: t
    } = (0, s.Ay)(),
    n = i.useCallback(e => {
      (0, c.A)("stream_previews_disabled", e, l.uh.getSetting(), t), l.uh.updateSetting(e)
    }, [t]);
  return (0, r.jsx)(o.x, {
    setting: u.H.VOICE_AND_VIDEO_STREAM_PREVIEWS,
    children: (0, r.jsx)(a.dOG, {
      label: d.intl.string(d.t["1CzWUK"]),
      description: d.intl.string(d.t.jTNPHM),
      checked: e,
      onChange: n
    })
  })
}