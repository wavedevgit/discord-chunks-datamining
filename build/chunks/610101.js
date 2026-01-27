/** Chunk was on web.js **/
/** chunk id: 610101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  h: () => l
});
var Chunk202384 = require("./202384.js"),
  Chunk513461 = require("./513461.js"),
  Chunk212455 = require("./212455.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");
let l = e => {
    var t, n;
    return (null == (t = e.features) ? true : t.includes(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == (n = e.features) ? true : n.includes(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))
  },
  c = e => {
    let t = a.A.getRequest(e);
    null != t && t.applicationStatus !== i.B5.STARTED ? (0, o.pX)(s.BVt.GUILD_MEMBER_VERIFICATION(e)) : (0, r.Ze)(e)
  }