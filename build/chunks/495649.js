/** Chunk was on web.js **/
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
  _ = n(981631),
  p = n(176505),
  h = n(372897);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let m = null,
  E = null;
class v extends r.Z {
  constructor(...e) {
    super(...e), g(this, "actions", {
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), g(this, "handleConnectionOpen", e => {
      var t;
      null != (m = null !== (t = null != m ? m : s.Z.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(m)
    }), g(this, "handleChannelSelect", e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (m === t && E === n || (m = null != t ? t : null, E = null != n ? n : null, null == m || null == E)) return;
      let r = a.Z.getGuild(t);
      null != r && r.hasFeature(_.oNc.COMMUNITY) && d.Z.shouldFetchPrompts(m, 8 * l.Z.Millis.HOUR) && (0, u.rj)(m), this._openOnboardingIfIncomplete(m, n)
    }), g(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      (0, f.EI)(t.id)
    }), g(this, "_openOnboardingIfIncomplete", async (e, t) => {
      var n, r;
      if ((0, f.hz)(e)) {
        (0, i.uL)(_.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING));
        return
      }
      let s = a.Z.getGuild(e);
      if (null == s || !s.hasFeature(_.oNc.GUILD_ONBOARDING)) return;
      let l = o.ZP.getSelfMember(e);
      !(null == l || (0, c.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, h.q.COMPLETED_ONBOARDING)) && (0, c.yE)(null !== (r = l.flags) && void 0 !== r ? r : 0, h.q.STARTED_ONBOARDING) && (await (0, f.default)({
        guildId: e
      }), (0, i.uL)(_.Z5c.CHANNEL(e, t)))
    })
  }
}
let b = new v