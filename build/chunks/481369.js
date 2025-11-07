/** Chunk was on 13140 **/
/** chunk id: 481369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk399606 = require("./399606.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk592125 = require("./592125.js"),
  Chunk226027 = require("./226027.js"),
  Chunk918559 = require("./918559.js");
let u = "no_text_activity",
  d = {
    [u]: [Chunk226027.E.NEW_MESSAGES, Chunk226027.E.OPT_IN_CHANNEL, Chunk226027.E.SUMMARIES],
    [Chunk918559.Ez.DISCONNECTED]: [Chunk226027.E.NEW_MESSAGES, Chunk226027.E.OPT_IN_CHANNEL, Chunk226027.E.SUMMARIES],
    [Chunk918559.Ez.LAUNCHING_WITH_ORIENTATION_CHANGE]: [Chunk226027.E.NEW_MESSAGES, Chunk226027.E.OPT_IN_CHANNEL, Chunk226027.E.SUMMARIES],
    [Chunk918559.Ez.PANEL]: [],
    [Chunk918559.Ez.PIP]: [Chunk226027.E.NEW_MESSAGES, Chunk226027.E.OPT_IN_CHANNEL, Chunk226027.E.SUMMARIES],
    [Chunk918559.Ez.ACTIVITY_POPOUT_WINDOW]: [Chunk226027.E.NEW_MESSAGES, Chunk226027.E.OPT_IN_CHANNEL, Chunk226027.E.SUMMARIES]
  };

function p() {
  let e = (0, Chunk399606.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getCurrentEmbeddedActivity()),
    t = (0, Chunk399606.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getActivityPanelMode()),
    n = (0, Chunk16609.p)(null == module ? true : module.location);
  return true === module || (0, Chunk917107.Z)(require, Chunk592125.Z) ? d[u] : d[exports]
}