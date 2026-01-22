/** Chunk was on 79521 **/
/** chunk id: 156699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => f,
  R: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk668781 = require("./668781.js"),
  Chunk434404 = require("./434404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk745752 = require("./745752.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk290511 = require("./290511.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function f(e, t) {
  return null == e || await N(e, t, {
    removingView: true,
    removingChat: true
  })
}
async function N(e, t, n) {
  var l;
  let i = u.Z.getGuild(e);
  if (null == i) returntrue;
  let r = null != i && (null == (l = i.features) ? true : l.has(c.GuildFeatures.GUILD_ONBOARDING));
  if (!r || (r && o.Z.shouldFetchPrompts(e) && await (0, a.eM)(e), !(function(e) {
      let t = o.Z.getDefaultChannelIds(e);
      if (!o.Z.isAdvancedMode(e)) return t;
      let n = o.Z.getOnboardingPromptsForOnboarding(e),
        l = [];
      for (let e of n)
        if (e.required)
          for (let t of e.options) null != t.channelIds && l.push(...t.channelIds);
      return [...new Set([...t, ...l])]
    })(e).includes(t) || !(n.removingChat || n.removingView))) returntrue;
  let E = o.Z.getDefaultChannelIds(e),
    f = o.Z.isAdvancedMode(e) ? o.Z.getOnboardingPromptsForOnboarding(e) : [];
  return !((0, s.kl)(e, E, f, e => e !== t && (0, s.V7)(e)).length < d.X)
}
async function g(e, t, n) {
  let u = e.getGuildId();
  if (null == u) returntrue;
  null != n && (t = l.hX(t, l.U_(n)));
  let a = e.permissionOverwrites[u],
    s = null != a ? l.hX(a.deny, l.U_(a.allow)) : l.vB(0),
    d = {
      removingView: l.e$(t, c.Plq.VIEW_CHANNEL) && !l.e$(s, c.Plq.VIEW_CHANNEL),
      removingChat: false
    };
  if (e.isForumLikeChannel() ? d.removingChat = l.e$(t, c.Plq.SEND_MESSAGES_IN_THREADS) && !l.e$(s, c.Plq.SEND_MESSAGES_IN_THREADS) : d.removingChat = l.e$(t, c.Plq.SEND_MESSAGES) && !l.e$(s, c.Plq.SEND_MESSAGES), !d.removingChat && !d.removingView) returntrue;
  let f = o.Z.isAdvancedMode(u);
  return !!await N(u, e.id, d) || (i.Z.show({
    title: E.intl.string(E.t.ut7sq0),
    body: f ? E.intl.format(E.t.r0UjOO, {
      onClick: () => {
        i.Z.close(), r.Z.open(u, c.pNK.ONBOARDING)
      }
    }) : E.intl.format(E.t["Zaz+un"], {
      onClick: () => {
        i.Z.close(), r.Z.open(u, c.pNK.ONBOARDING)
      }
    })
  }), false)
}