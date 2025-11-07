/** Chunk was on 64982 **/
/** chunk id: 30624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk421535 = require("./421535.js");

function i(e, t) {
  var n;
  return t.owner_user_id === e || (null === (n = t.members.find(t => t.user.id === e)) || true === n ? true : n.role) === r.T.ADMIN
}