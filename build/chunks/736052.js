/** Chunk was on 73726 **/
/** chunk id: 736052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./997841.js");
var Chunk399606 = require("./399606.js"),
  Chunk592125 = require("./592125.js"),
  Chunk630388 = require("./630388.js"),
  Chunk637271 = require("./637271.js"),
  Chunk931261 = require("./931261.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function u(e) {
  let t = (0, r.e7)([i.Z, a.Z], () => {
      let t = i.Z.getChannel(e);
      if (null != t && (0, l.yE)(t.flags, c.zZ.IS_GUILD_RESOURCE_CHANNEL) && a.Z.getSelectedResourceChannelId(null == t ? true : t.guild_id) === t.id) return t.guild_id
    }),
    n = (0, o.g)(null != t ? t : s.lds);
  return null != t && n
}