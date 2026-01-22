/** Chunk was on 97492 **/
/** chunk id: 229187, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk803306 = require("./803306.js"),
  Chunk622543 = require("./622543.js");

function i(e, t) {
  if (l.A.isFetchingFriends(e)) return;
  let n = l.A.getMutualFriendsCount(e);
  if (0 === n) return;
  let i = l.A.getMutualFriends(e);
  if (null == n || null == i || i.length !== n) return (0, r.q0)(e, t)
}