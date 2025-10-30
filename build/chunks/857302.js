/** Chunk was on 58829 **/
/** chunk id: 857302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk232567 = require("./232567.js"),
  Chunk621853 = require("./621853.js");

function o(e, t) {
  if (i.Z.isFetchingFriends(e)) return;
  let n = i.Z.getMutualFriendsCount(e);
  if (0 === n) return;
  let o = i.Z.getMutualFriends(e);
  if (null == n || null == o || o.length !== n) return (0, r.Sr)(e, t)
}