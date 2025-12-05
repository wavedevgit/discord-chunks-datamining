/** Chunk was on 84608 **/
/** chunk id: 857302, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk232567 = require("./232567.js"),
  Chunk621853 = require("./621853.js");

function a(e, t) {
  if (n.Z.isFetchingFriends(e)) return;
  let r = n.Z.getMutualFriendsCount(e);
  if (0 === r) return;
  let a = n.Z.getMutualFriends(e);
  if (null == r || null == a || a.length !== r) return (0, i.Sr)(e, t)
}