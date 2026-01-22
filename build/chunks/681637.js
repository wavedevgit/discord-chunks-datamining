/** Chunk was on web.js **/
/** chunk id: 681637, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk923408 = require("./923408.js"),
  Chunk439372 = require("./439372.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk488803 = require("./488803.js"),
  Chunk942975 = require("./942975.js"),
  Chunk645619 = require("./645619.js"),
  Chunk840120 = require("./840120.js"),
  Chunk363487 = require("./363487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk439372.A {
  handleSelectedGuildChange() {
    let e = o.A.getGuildId();
    if (null == e || e === _.V || e === p.YYv) return;
    let t = a.A.getGuild(e);
    null == t || (d.Qb.trackExposure({
      guildId: t.id,
      location: "GuildPowerupsManager"
    }), l.x1.trackExposure({
      guildId: t.id,
      location: "GuildPowerupsManager"
    }), (0, f.G)(s.A, t) && (u.A.shouldFetchCatalogForGuild(e) && (0, c.AK)(e), u.A.shouldFetchPowerupsForGuild(e) && (0, c.Xd)(e)))
  }
  handleEntitlementUpdate(e) {
    let {
      guildId: t
    } = e;
    this.refreshGuildPowerups(t)
  }
  handleAppliedBoostUpdate(e) {
    let {
      guildId: t
    } = e;
    this.refreshGuildPowerups(t)
  }
  refreshGuildPowerups(e) {
    true === (0, f.G)(s.A, a.A.getGuild(e)) && ((0, c.Xd)(e), (0, r.VU)(e))
  }
  constructor(...e) {
    super(...e), h(this, "stores", new Map().set(o.A, this.handleSelectedGuildChange)), h(this, "actions", {
      GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
      GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
      GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this)
    })
  }
}
let g = new m