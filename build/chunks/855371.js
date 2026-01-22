/** Chunk was on 21738 **/
/** chunk id: 855371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk723702 = require("./723702.js"),
  Chunk493540 = require("./493540.js"),
  Chunk652215 = require("./652215.js");
class d extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  _terminate() {
    r.h.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
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
        if ((0, o.isDesktop)() || (0, o.isWeb)()) {
          let e = a.A.getGuildsArray(),
            t = s.default.getCurrentUser(),
            n = e.filter(e => (0, l.bM)(e, t) && !e.features.has(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) || e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)));
          n.length > 0 && await (0, c._8)(n.map(e => e.id))
        }
      })
  }
}
let p = new d