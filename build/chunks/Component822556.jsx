/** Chunk was on 43342 **/
/** chunk id: 822556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    analyticsLocations: t
  } = (0, o.ZP)();
  return (0, r.jsx)(i.sNh, {
    id: "voice-settings",
    label: d.intl.string(d.t.NiTd0e),
    action: () => {
      (0, s.openUserSettings)(a.n.VOICE_AND_VIDEO_PANEL, {
        section: c.oAB.VOICE,
        subsection: u.CO,
        analyticsLocations: t,
        appContext: e
      }), (0, l.i)(e)
    },
    icon: i.ewm
  })
}