/** Chunk was on 97492 **/
/** chunk id: 957283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk940382 = require("./940382.js"),
  Chunk761640 = require("./761640.js");

function s() {
  let e = (0, r.bG)([i.Ay], () => i.Ay.getSidebarState(i.fe)),
    t = (null == e ? true : e.type) === l.PE.VIEW_MESSAGE_REQUEST ? e : null;
  return {
    channelId: null == t ? true : t.channelId,
    hasSingleMessageRequest: (null == t ? true : t.details) != null && t.details.type === l.LU.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
  }
}