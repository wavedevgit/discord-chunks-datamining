/** Chunk was on 88647 **/
/** chunk id: 488634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk897473 = require("./897473.js"),
  Chunk433355 = require("./433355.js");

function a() {
  let e = (0, Chunk442837.e7)([Chunk433355.ZP], () => Chunk433355.ZP.getSidebarState(Chunk433355.uZ)),
    t = (null == module ? true : module.type) === Chunk897473.tI.VIEW_MESSAGE_REQUEST ? module : null;
  return {
    channelId: null == exports ? true : exports.channelId,
    hasSingleMessageRequest: (null == exports ? true : exports.details) != null && exports.details.type === Chunk897473.Ff.MESSAGE_REQUEST && exports.details.hasSingleMessageRequest
  }
}