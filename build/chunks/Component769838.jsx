/** Chunk was on 60667 **/
/** chunk id: 769838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _() {
  let e = o.uh.useSetting(),
    {
      analyticsLocations: t
    } = (0, s.Ay)(),
    n = i.useCallback(e => {
      (0, c.A)("stream_previews_disabled", e, o.uh.getSetting(), t), o.uh.updateSetting(e)
    }, [t]);
  return (0, r.jsx)(a.x, {
    setting: d.H.VOICE_AND_VIDEO_STREAM_PREVIEWS,
    children: (0, r.jsx)(l.dOG, {
      label: u.intl.string(u.t["1CzWUK"]),
      description: u.intl.string(u.t.jTNPHM),
      checked: e,
      onChange: n
    })
  })
}