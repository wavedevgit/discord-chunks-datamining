/** Chunk was on 97492 **/
/** chunk id: 470743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk523527 = require("./523527.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p() {
  let e = (0, a.Us)(),
    {
      analyticsLocations: t
    } = (0, i.Ay)();
  return (0, r.jsx)(l.Drp, {
    id: "voice-and-video-settings",
    label: d.intl.string(d.t.dsXapM),
    action: () => {
      (0, s.A)(null, e === u.BRT.POPOUT), (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
        section: u.nc_.VOICE,
        analyticsLocations: t
      })
    },
    icon: l.Zes
  })
}