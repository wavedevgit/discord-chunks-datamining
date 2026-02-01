/** Chunk was on 61344 **/
/** chunk id: 306680, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Co: () => i
}), require("./417597.js");
var Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js");

function i(e, t) {
  if (e !== r.default.castChannelIdAsMessageId(t)) returnfalse;
  let n = l.A.getChannel(t);
  if (null == n || !n.isForumPost()) returnfalse;
  let i = l.A.getChannel(n.parent_id);
  return (null == i ? true : i.isMediaChannel()) === true
}