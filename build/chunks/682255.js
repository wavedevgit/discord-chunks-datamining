/** Chunk was on 32923 **/
/** chunk id: 682255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => a
}), require("./539854.js");
var Chunk626135 = require("./626135.js"),
  Chunk733895 = require("./733895.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let t = i.ZP.getDiscoveryChecklist(e),
    n = [];
  if (!(null == t ? true : t.sufficient)) {
    var a;
    (null == t ? true : t.safeEnvironment) || n.push("TNS"), (!(null == t ? true : t.healthy) || (null == t ? true : t.healthScorePending)) && n.push("HEALTH"), (null == t ? true : t.size) || n.push("MEMBER_COUNT"), Object.keys(null != (a = null == t ? true : t.nsfwProperties) ? a : {}).length > 0 && n.push("BAD_WORDS"), (null == t ? true : t.protected) || n.push("2FA")
  }
  r.default.track(l.rMx.GUILD_SETTINGS_DISCOVERY_VIEWED, {
    guild_id: e,
    failed_reasons: n
  })
}