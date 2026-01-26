/** Chunk was on 39048 **/
/** chunk id: 818191, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  i: () => s
}), require("./321073.js");
var Chunk954571 = require("./954571.js"),
  Chunk834720 = require("./834720.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let t = i.Ay.getDiscoveryChecklist(e),
    n = [];
  if (!(null == t ? true : t.sufficient)) {
    var s;
    (null == t ? true : t.safeEnvironment) || n.push("TNS"), (!(null == t ? true : t.healthy) || (null == t ? true : t.healthScorePending)) && n.push("HEALTH"), (null == t ? true : t.size) || n.push("MEMBER_COUNT"), Object.keys(null != (s = null == t ? true : t.nsfwProperties) ? s : {}).length > 0 && n.push("BAD_WORDS"), (null == t ? true : t.protected) || n.push("2FA")
  }
  r.default.track(l.HAw.GUILD_SETTINGS_DISCOVERY_VIEWED, {
    guild_id: e,
    failed_reasons: n
  })
}