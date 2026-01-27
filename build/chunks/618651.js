/** Chunk was on web.js **/
/** chunk id: 618651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
});
var Chunk110259 = require("./110259.js"),
  Chunk861638 = require("./861638.js"),
  Chunk183636 = require("./183636.js");

function o() {
  let e = (0, i.Vc)(),
    t = (0, r.getSuperProperties)(),
    n = {},
    o = null == e ? true : e.uuid;
  o !== (null == t ? true : t.client_heartbeat_session_id) && (n.client_heartbeat_session_id = o);
  let s = a.A.getState();
  s !== (null == t ? true : t.client_app_state) && (n.client_app_state = s), Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n)
}