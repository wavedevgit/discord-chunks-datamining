/** Chunk was on 21738 **/
/** chunk id: 992250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk808728 = require("./808728.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");
let u = null;

function d() {
  let e = o.default.getCurrentUser();
  if (null == e || e.mfaEnabled === u) returnfalse;
  u = e.mfaEnabled
}
class p extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.default, s.Ay), this.syncWith([o.default, s.Ay], d)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === c.EkJ.ELEVATED && false === u && s.Ay.hasElevatedPermissions(e.id)
  }
}(r = "displayName") in p ? Object.defineProperty(p, r, {
  value: "GuildMFAWarningStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = "GuildMFAWarningStore";
let f = new p(Chunk73153.h, {
  CONNECTION_OPEN: d,
  GUILD_UPDATE: function() {
    returntrue
  }
})