/** Chunk was on 1272 **/
/** chunk id: 823169, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
  Chunk53365 = require("./53365.js"),
  Chunk981631 = require("./981631.js");
class d extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "maybeFetchEligiblity", async () => {
        if ((0, s.isDesktop)() || (0, s.isWeb)()) {
          let e = a.Z.getGuildsArray(),
            t = o.default.getCurrentUser(),
            n = e.filter(e => (0, l.eM)(e, t) && !e.features.has(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) || e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)));
          n.length > 0 && await (0, c.av)(n.map(e => e.id))
        }
      })
  }
}
let p = new d