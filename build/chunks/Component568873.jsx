/** Chunk was on 71742 **/
/** chunk id: 568873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, r.bG)([a.Ay], () => a.Ay.isMuteScheduledEventsEnabled(e), [e]);
  return (0, i.jsx)(d.sLh, {
    id: "mute-events",
    label: l.intl.string(l.t.ONG3Yz),
    action: () => {
      var n;
      return n = {
        mute_scheduled_events: !t
      }, void s.A.updateGuildNotificationSettings(e, n, c.G_.mutedEvents(n.mute_scheduled_events))
    },
    checked: t
  })
}