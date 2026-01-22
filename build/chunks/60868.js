/** Chunk was on 33372 **/
/** chunk id: 60868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => f,
  n: () => g
}), require("./321073.js"), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk157559 = require("./157559.js"),
  Chunk997509 = require("./997509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk817818 = require("./817818.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk539916 = require("./539916.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
async function f(e, t) {
  return null == e || await A(e, t, {
    removingView: true,
    removingChat: true
  })
}
async function A(e, t, n) {
  var l;
  let i = u.A.getGuild(e);
  if (null == i) returntrue;
  let r = null != i && (null == (l = i.features) ? true : l.has(c.GuildFeatures.GUILD_ONBOARDING));
  if (!r || (r && o.A.shouldFetchPrompts(e) && await (0, a.jx)(e), !(function(e) {
      let t = o.A.getDefaultChannelIds(e);
      if (!o.A.isAdvancedMode(e)) return t;
      let n = o.A.getOnboardingPromptsForOnboarding(e),
        l = [];
      for (let e of n)
        if (e.required)
          for (let t of e.options) null != t.channelIds && l.push(...t.channelIds);
      return [...new Set([...t, ...l])]
    })(e).includes(t) || !(n.removingChat || n.removingView))) returntrue;
  let E = o.A.getDefaultChannelIds(e),
    f = o.A.isAdvancedMode(e) ? o.A.getOnboardingPromptsForOnboarding(e) : [];
  return !((0, s.G4)(e, E, f, e => e !== t && (0, s.VU)(e)).length < d.Kd)
}
async function g(e, t, n) {
  let u = e.getGuildId();
  if (null == u) returntrue;
  null != n && (t = l.pb(t, l.B8(n)));
  let a = e.permissionOverwrites[u],
    s = null != a ? l.pb(a.deny, l.B8(a.allow)) : l.iu(0),
    d = {
      removingView: l.zy(t, c.xBc.VIEW_CHANNEL) && !l.zy(s, c.xBc.VIEW_CHANNEL),
      removingChat: false
    };
  if (e.isForumLikeChannel() ? d.removingChat = l.zy(t, c.xBc.SEND_MESSAGES_IN_THREADS) && !l.zy(s, c.xBc.SEND_MESSAGES_IN_THREADS) : d.removingChat = l.zy(t, c.xBc.SEND_MESSAGES) && !l.zy(s, c.xBc.SEND_MESSAGES), !d.removingChat && !d.removingView) returntrue;
  let f = o.A.isAdvancedMode(u);
  return !!await A(u, e.id, d) || (i.A.show({
    title: E.intl.string(E.t.ut7sq0),
    body: f ? E.intl.format(E.t.r0UjOO, {
      onClick: () => {
        i.A.close(), r.A.open(u, c.BEX.ONBOARDING)
      }
    }) : E.intl.format(E.t["Zaz+un"], {
      onClick: () => {
        i.A.close(), r.A.open(u, c.BEX.ONBOARDING)
      }
    })
  }), false)
}