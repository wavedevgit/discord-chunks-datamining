/** Chunk was on web.js **/
/** chunk id: 857613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => o
});
var Chunk990547 = require("./990547.js"),
  Chunk912471 = require("./912471.js"),
  Chunk15624 = require("./15624.js");

function o() {
  let e = (0, i.Ai)(),
    t = (0, r.getSuperProperties)(),
    n = {},
    o = null == e ? true : e.uuid;
  o !== (null == t ? true : t.client_heartbeat_session_id) && (n.client_heartbeat_session_id = o);
  let s = a.Z.getState();
  s !== (null == t ? true : t.client_app_state) && (n.client_app_state = s), Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n)
}