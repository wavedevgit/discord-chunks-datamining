/** Chunk was on 6164 **/
/** chunk id: 822556, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  } = (0, u.ZP)();
  return (0, n.jsx)(o.sNh, {
    id: "voice-settings",
    label: b.intl.string(b.t.NiTd0e),
    action: () => {
      (0, c.openUserSettings)(l.n.VOICE_AND_VIDEO_PANEL, {
        section: a.oAB.VOICE,
        subsection: s.CO,
        analyticsLocations: t,
        appContext: e
      }), (0, i.i)(e, e === a.IlC.POPOUT)
    },
    icon: o.ewm
  })
}