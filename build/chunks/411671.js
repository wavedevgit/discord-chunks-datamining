/** Chunk was on 39048 **/
/** chunk id: 411671, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => i
});
var Chunk290349 = require("./290349.js");

function i(e, t) {
  var n;
  return t.owner_user_id === e || (null === (n = t.members.find(t => t.user.id === e)) || true === n ? true : n.role) === r.D.ADMIN
}