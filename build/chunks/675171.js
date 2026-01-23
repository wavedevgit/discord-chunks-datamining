/** Chunk was on 97492 **/
/** chunk id: 675171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk417597 = require("./417597.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk108959 = require("./108959.js"),
  Chunk734057 = require("./734057.js"),
  Chunk626360 = require("./626360.js"),
  Chunk5867 = require("./5867.js");
let u = "no_text_activity",
  d = {
    [u]: [Chunk626360.i.NEW_MESSAGES, Chunk626360.i.OPT_IN_CHANNEL, Chunk626360.i.SUMMARIES],
    [Chunk5867.Gd.DISCONNECTED]: [Chunk626360.i.NEW_MESSAGES, Chunk626360.i.OPT_IN_CHANNEL, Chunk626360.i.SUMMARIES],
    [Chunk5867.Gd.LAUNCHING_WITH_ORIENTATION_CHANGE]: [Chunk626360.i.NEW_MESSAGES, Chunk626360.i.OPT_IN_CHANNEL, Chunk626360.i.SUMMARIES],
    [Chunk5867.Gd.PANEL]: [],
    [Chunk5867.Gd.PIP]: [Chunk626360.i.NEW_MESSAGES, Chunk626360.i.OPT_IN_CHANNEL, Chunk626360.i.SUMMARIES],
    [Chunk5867.Gd.ACTIVITY_POPOUT_WINDOW]: [Chunk626360.i.NEW_MESSAGES, Chunk626360.i.OPT_IN_CHANNEL, Chunk626360.i.SUMMARIES]
  };

function p() {
  let e = (0, r.bG)([l.Ay], () => l.Ay.getCurrentEmbeddedActivity()),
    t = (0, r.bG)([l.Ay], () => l.Ay.getActivityPanelMode()),
    n = (0, i.H)(null == e ? true : e.location);
  return true === e || (0, s.A)(n, a.A) ? d[u] : d[t]
}