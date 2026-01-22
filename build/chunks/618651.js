/** Chunk was on web.js **/
/** chunk id: 618651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => s
});
var Chunk110259 = require("./110259.js"),
  Chunk861638 = require("./861638.js"),
  Chunk183636 = require("./183636.js");

function s() {
  let e = (0, i.Vc)(),
    t = (0, r.getSuperProperties)(),
    n = {},
    s = null == e ? true : e.uuid;
  s !== (null == t ? true : t.client_heartbeat_session_id) && (n.client_heartbeat_session_id = s);
  let o = a.A.getState();
  o !== (null == t ? true : t.client_app_state) && (n.client_app_state = o), Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n)
}