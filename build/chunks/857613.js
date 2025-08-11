/** Chunk was on web.js **/
/** chunk id: 857613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => a
});
var Chunk990547 = require("./990547.js"),
  Chunk912471 = require("./912471.js"),
  Chunk15624 = require("./15624.js");

function a() {
  let e = (0, Chunk912471.Ai)(),
    t = (0, Chunk990547.getSuperProperties)(),
    n = {},
    a = null == module ? true : module.uuid;
  a !== (null == exports ? true : exports.client_heartbeat_session_id) && (require.client_heartbeat_session_id = a);
  let s = Chunk15624.Z.getState();
  s !== (null == exports ? true : exports.client_app_state) && (require.client_app_state = s), Object.keys(require).length > 0 && (0, Chunk990547.extendSuperProperties)(require)
}