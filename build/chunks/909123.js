/** Chunk was on web.js **/
/** chunk id: 909123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk179360 = require("./179360.js"),
  Chunk147913 = require("./147913.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk755458 = require("./755458.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk158638 = require("./158638.js"),
  Chunk639777 = require("./639777.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk147913.Z {
  handleSelectedGuildChange() {
    let e = s.Z.getGuildId();
    if (null == e || e === _._ || e === p.I_8) return;
    let t = a.Z.getGuild(e);
    null != t && (d.sT.trackExposure({
      guildId: t.id,
      location: "GuildPowerupsManager"
    }), l.u7.trackExposure({
      guildId: t.id,
      location: "GuildPowerupsManager"
    }), (0, f.D)(o.Z, t) && (u.Z.shouldFetchCatalogForGuild(e) && (0, c.Sn)(e), u.Z.shouldFetchPowerupsForGuild(e) && (0, c.BN)(e)))
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
    true === (0, f.D)(o.Z, a.Z.getGuild(e)) && ((0, c.BN)(e), (0, r.C0)(e))
  }
  constructor(...e) {
    super(...e), h(this, "stores", new Map().set(s.Z, this.handleSelectedGuildChange)), h(this, "actions", {
      GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
      GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
      GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this)
    })
  }
}
let g = new m