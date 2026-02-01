/** Chunk was on 61344 **/
/** chunk id: 265869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk417597 = require("./417597.js"),
  Chunk734057 = require("./734057.js"),
  Chunk220706 = require("./220706.js"),
  Chunk473529 = require("./473529.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function u(e) {
  let t = (0, r.bG)([i.A, a.A], () => {
      let t = i.A.getChannel(e);
      if (null != t && (0, l.Lt)(t.flags, c.lx.IS_GUILD_RESOURCE_CHANNEL) && a.A.getSelectedResourceChannelId(null == t ? true : t.guild_id) === t.id) return t.guild_id
    }),
    n = (0, s.d)(null != t ? t : o.dJq);
  return null != t && n
}