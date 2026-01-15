/** Chunk was on web.js **/
/** chunk id: 495649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk147913 = require("./147913.js"),
  Chunk703656 = require("./703656.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js"),
  Chunk745752 = require("./745752.js"),
  Chunk45966 = require("./45966.js"),
  Chunk17181 = require("./17181.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk372897 = require("./372897.js");

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
class b extends Chunk147913.Z {
  constructor(...e) {
    super(...e), m(this, "actions", {
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), m(this, "handleConnectionOpen", e => {
      var t;
      null != (g = null != (t = null != g ? g : l.Z.getGuildId()) ? t : null) && this._openOnboardingIfIncomplete(g)
    }), m(this, "handleChannelSelect", e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (g === t && E === n || (g = null != t ? t : null, E = null != n ? n : null, null == g || null == E)) return;
      let r = s.Z.getGuild(t);
      null != r && r.features.has(p.GuildFeatures.COMMUNITY) && d.Z.shouldFetchPrompts(g, 8 * c.Z.Millis.HOUR) && (0, u.rj)(g), this._openOnboardingIfIncomplete(g, n)
    }), m(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      (0, f.EI)(t.id)
    }), m(this, "_openOnboardingIfIncomplete", async (e, t) => {
      var n, i;
      if ((0, f.hz)(e)) return void(0, a.uL)(p.Z5c.CHANNEL(e, _.oC.GUILD_ONBOARDING));
      let l = s.Z.getGuild(e);
      if (null == l || !l.features.has(p.GuildFeatures.GUILD_ONBOARDING)) return;
      let c = o.ZP.getSelfMember(e);
      !(null == c || (0, r.yE)(null != (n = c.flags) ? n : 0, h.q.COMPLETED_ONBOARDING)) && (0, r.yE)(null != (i = c.flags) ? i : 0, h.q.STARTED_ONBOARDING) && (await (0, f.default)({
        guildId: e
      }), (0, a.uL)(p.Z5c.CHANNEL(e, t)))
    })
  }
}
let y = new b