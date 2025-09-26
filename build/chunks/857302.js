/** Chunk was on 74477 **/
/** chunk id: 857302, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk232567 = require("./232567.js"),
  Chunk621853 = require("./621853.js");

function l(e, t) {
  if (i.Z.isFetchingFriends(e)) return;
  let r = i.Z.getMutualFriendsCount(e);
  if (0 === r) return;
  let l = i.Z.getMutualFriends(e);
  if (null == r || null == l || l.length !== r) return (0, n.Sr)(e, t)
}