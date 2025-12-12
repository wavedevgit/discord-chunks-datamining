/** Chunk was on 7891 **/
/** chunk id: 522579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z9: () => l
}), require("./399606.js");
var Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js");

function l(e, t) {
  if (e !== r.default.castChannelIdAsMessageId(t)) returnfalse;
  let n = i.Z.getChannel(t);
  if (null == n || !n.isForumPost()) returnfalse;
  let l = i.Z.getChannel(n.parent_id);
  return (null == l ? true : l.isMediaChannel()) === true
}