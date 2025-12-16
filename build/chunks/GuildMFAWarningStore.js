/** Chunk was on 1272 **/
/** chunk id: 192513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk984933 = require("./984933.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
let u = null;

function d() {
  let e = Chunk594174.default.getCurrentUser();
  if (null == module || module.mfaEnabled === u) returnfalse;
  u = module.mfaEnabled
}
class p extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk984933.ZP), this.syncWith([Chunk594174.default, Chunk984933.ZP], d)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === c.BpS.ELEVATED && false === u && o.ZP.hasElevatedPermissions(e.id)
  }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
  value: "GuildMFAWarningStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = "GuildMFAWarningStore";
let f = new p(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  GUILD_UPDATE: function() {
    returntrue
  }
})