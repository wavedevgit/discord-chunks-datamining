/** Chunk was on 88647 **/
/** chunk id: 522579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z9: () => l
}), require("./399606.js");
var Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js");

function l(e, t) {
  if (e !== i.default.castChannelIdAsMessageId(t)) returnfalse;
  let n = r.Z.getChannel(t);
  if (null == n || !n.isForumPost()) returnfalse;
  let l = r.Z.getChannel(n.parent_id);
  return (null == l ? true : l.isMediaChannel()) === true
}