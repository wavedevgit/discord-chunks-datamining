/** Chunk was on 1272 **/
/** chunk id: 192513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk984933 = require("./984933.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
let d = null;

function p() {
  let e = Chunk594174.default.getCurrentUser();
  if (null == module || module.mfaEnabled === d) returnfalse;
  d = module.mfaEnabled
}
class f extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk984933.ZP), this.syncWith([Chunk594174.default, Chunk984933.ZP], p)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === u.BpS.ELEVATED && false === d && s.ZP.hasElevatedPermissions(e.id)
  }
}
i = "GuildMFAWarningStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : f[r] = i;
let h = new f(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  GUILD_UPDATE: function() {
    returntrue
  }
})