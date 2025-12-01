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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends Chunk147913.Z {
  handleSelectedGuildChange() {
    let e = Chunk914010.Z.getGuildId();
    if (null == module || module === Chunk647086._ || module === Chunk981631.I_8) return;
    let t = Chunk430824.Z.getGuild(module);
    null != exports && (Chunk158638.sT.trackExposure({
      guildId: exports.id,
      location: "GuildPowerupsManager"
    }), Chunk755458.u7.trackExposure({
      guildId: exports.id,
      location: "GuildPowerupsManager"
    }), (0, Chunk639777.D)(Chunk496675.Z, exports) && (Chunk905128.Z.shouldFetchCatalogForGuild(module) && (0, Chunk713081.Sn)(module), Chunk905128.Z.shouldFetchPowerupsForGuild(module) && (0, Chunk713081.BN)(module)))
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
    super(...e), m(this, "stores", new Map().set(s.Z, this.handleSelectedGuildChange)), m(this, "actions", {
      GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
      GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
      GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this)
    })
  }
}
let g = new h