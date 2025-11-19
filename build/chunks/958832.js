/** Chunk was on 384 **/
/** chunk id: 958832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let l = {};
class a extends Chunk442837.ZP.Store {
  hasFetched(e) {
    return null != l[e]
  }
  getTopChannelIds(e) {
    return "874345844743213126" === e ? ["1041887225819955252", "985996080107892776", "1035280727610241166"] : l[e]
  }
}
let s = new a(Chunk570140.Z, {
  GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topChannelIds: n
    } = e;
    l[t] = n
  }
})