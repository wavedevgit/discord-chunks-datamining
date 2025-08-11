/** Chunk was on web.js **/
/** chunk id: 522579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z9: () => o
}), require("./399606.js");
var Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js");

function o(e, t) {
  if (e !== i.default.castChannelIdAsMessageId(t)) returnfalse;
  let n = r.Z.getChannel(t);
  if (null == n || !n.isForumPost()) returnfalse;
  let o = r.Z.getChannel(n.parent_id);
  return (null == o ? true : o.isMediaChannel()) === true
}