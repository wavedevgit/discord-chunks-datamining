/** Chunk was on 43342 **/
/** chunk id: 822556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk549879 = require("./549879.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    analyticsLocations: t
  } = (0, l.ZP)();
  return (0, r.jsx)(i.sNh, {
    id: "voice-settings",
    label: u.intl.string(u.t.NiTd0d),
    action: () => {
      (0, s.openUserSettings)(a.n.VOICE_AND_VIDEO_PANEL, {
        section: c.oAB.VOICE,
        analyticsLocations: t,
        appContext: e
      }), (0, o.i)(e)
    },
    icon: i.ewm
  })
}