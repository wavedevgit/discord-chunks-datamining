/** Chunk was on 83898 **/
/** chunk id: 819027, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk474397 = require("./474397.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    analyticsLocations: t
  } = (0, u.Ay)();
  return (0, n.jsx)(o.Drp, {
    id: "voice-settings",
    label: b.intl.string(b.t.NiTd0e),
    action: () => {
      (0, a.openUserSettings)(l.X.VOICE_AND_VIDEO_PANEL, {
        section: c.nc_.VOICE,
        subsection: s.V5,
        analyticsLocations: t,
        appContext: e
      }), (0, i.A)(e, e === c.BRT.POPOUT)
    },
    icon: o.Zes
  })
}