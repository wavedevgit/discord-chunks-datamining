/** Chunk was on 81985 **/
/** chunk id: 857302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk232567 = require("./232567.js"),
  Chunk621853 = require("./621853.js");

function l(e, t) {
  if (i.Z.isFetchingFriends(e)) return;
  let n = i.Z.getMutualFriendsCount(e);
  if (0 === n) return;
  let l = i.Z.getMutualFriends(e);
  if (null == n || null == l || l.length !== n) return (0, r.Sr)(e, t)
}