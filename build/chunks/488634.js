/** Chunk was on 40184 **/
/** chunk id: 488634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk897473 = require("./897473.js"),
  Chunk433355 = require("./433355.js");

function a() {
  let e = (0, i.e7)([l.ZP], () => l.ZP.getSidebarState(l.uZ)),
    t = (null == e ? true : e.type) === r.tI.VIEW_MESSAGE_REQUEST ? e : null;
  return {
    channelId: null == t ? true : t.channelId,
    hasSingleMessageRequest: (null == t ? true : t.details) != null && t.details.type === r.Ff.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
  }
}