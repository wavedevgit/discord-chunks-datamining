/** Chunk was on web.js **/
/** chunk id: 58217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk439372 = require("./439372.js"),
  Chunk976860 = require("./976860.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk927813 = require("./927813.js"),
  Chunk817818 = require("./817818.js"),
  Chunk591552 = require("./591552.js"),
  Chunk967305 = require("./967305.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk340837 = require("./340837.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = null,
  E = null;
class y extends Chunk439372.A {
  constructor(...e) {
    super(...e), m(this, "actions", {
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), m(this, "handleConnectionOpen", e => {
      var t;
      null != (g = null != (t = null != g ? g : l.A.getGuildId()) ? t : null) && this._openOnboardingIfIncomplete(g)
    }), m(this, "handleChannelSelect", e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (g === t && E === n || (g = null != t ? t : null, E = null != n ? n : null, null == g || null == E)) return;
      let r = s.A.getGuild(t);
      null != r && r.features.has(p.GuildFeatures.COMMUNITY) && d.A.shouldFetchPrompts(g, 8 * c.A.Millis.HOUR) && (0, u.Tg)(g), this._openOnboardingIfIncomplete(g, n)
    }), m(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      (0, f.Jg)(t.id)
    }), m(this, "_openOnboardingIfIncomplete", async (e, t) => {
      var n, i;
      if ((0, f.Ih)(e)) return void(0, a.pX)(p.BVt.CHANNEL(e, _.VV.GUILD_ONBOARDING));
      let l = s.A.getGuild(e);
      if (null == l || !l.features.has(p.GuildFeatures.GUILD_ONBOARDING)) return;
      let c = o.Ay.getSelfMember(e);
      !(null == c || (0, r.Lt)(null != (n = c.flags) ? n : 0, h.D.COMPLETED_ONBOARDING)) && (0, r.Lt)(null != (i = c.flags) ? i : 0, h.D.STARTED_ONBOARDING) && (await (0, f.default)({
        guildId: e
      }), (0, a.pX)(p.BVt.CHANNEL(e, t)))
    })
  }
}
let b = new y