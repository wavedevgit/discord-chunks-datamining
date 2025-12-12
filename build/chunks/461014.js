/** Chunk was on web.js **/
/** chunk id: 461014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => c,
  u: () => l
});
var Chunk305325 = require("./305325.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");
let l = e => {
    var t, n;
    return (null == (t = e.features) ? true : t.includes(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == (n = e.features) ? true : n.includes(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))
  },
  c = e => {
    let t = o.Z.getRequest(e);
    null != t && t.applicationStatus !== i.wB.STARTED ? (0, a.uL)(s.Z5c.GUILD_MEMBER_VERIFICATION(e)) : (0, r.hk)(e)
  }