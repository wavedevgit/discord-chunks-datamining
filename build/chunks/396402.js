/** Chunk was on 20501 **/
/** chunk id: 396402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk731722 = require("./731722.js");

function l() {
  return (0, Chunk442837.Wu)([Chunk430824.Z, Chunk271383.ZP], () => Chunk430824.Z.getGuildsArray().filter(e => {
    var t, n;
    return (0, a.up)(e) && (null == (t = r.ZP.getSelfMember(e.id)) ? true : t.joinedAt) != null && (null == (n = e.profile) ? true : n.tag) != null
  }))
}