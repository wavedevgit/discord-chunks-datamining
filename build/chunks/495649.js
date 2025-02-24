/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => b
}), n(47120), n(789020);
var r = n(147913),
  i = n(703656),
  o = n(271383),
  a = n(430824),
  s = n(914010),
  l = n(70956),
  c = n(630388),
  u = n(745752),
  d = n(45966),
  f = n(17181),
  p = n(981631),
  _ = n(176505),
  h = n(372897);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = null,
  E = null;
class v extends r.Z {
  constructor(...e) {
    super(...e), m(this, "actions", {
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), m(this, "handleConnectionOpen", e => {
      var t;
      null != (g = null !== (t = null != g ? g : s.Z.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(g)
    }), m(this, "handleChannelSelect", e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (g === t && E === n || (g = null != t ? t : null, E = null != n ? n : null, null == g || null == E)) return;
      let r = a.Z.getGuild(t);
      null != r && r.hasFeature(p.oNc.COMMUNITY) && d.Z.shouldFetchPrompts(g, 8 * l.Z.Millis.HOUR) && (0, u.rj)(g), this._openOnboardingIfIncomplete(g, n)
    }), m(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      (0, f.EI)(t.id)
    }), m(this, "_openOnboardingIfIncomplete", async (e, t) => {
      var n, r;
      if ((0, f.hz)(e)) {
        (0, i.uL)(p.Z5c.CHANNEL(e, _.oC.GUILD_ONBOARDING));
        return
      }
      let s = a.Z.getGuild(e);
      if (null == s || !s.hasFeature(p.oNc.GUILD_ONBOARDING)) return;
      let l = o.ZP.getSelfMember(e);
      !(null == l || (0, c.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, h.q.COMPLETED_ONBOARDING)) && (0, c.yE)(null !== (r = l.flags) && void 0 !== r ? r : 0, h.q.STARTED_ONBOARDING) && (await (0, f.default)({
        guildId: e
      }), (0, i.uL)(p.Z5c.CHANNEL(e, t)))
    })
  }
}
let b = new v