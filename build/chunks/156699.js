/** Chunk was on 79521 **/
/** chunk id: 156699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => f,
  u: () => g
}), require("./388685.js");
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
  if (!r) returntrue;
  r && o.Z.shouldFetchPrompts(e) && await (0, a.eM)(e);
  let E = o.Z.getDefaultChannelIds(e),
    [f] = (0, s.d9)(e, E);
  return !E.includes(t) || !((n.removingChat || n.removingView) && f.length - 1 < d.X)
}
async function g(e, t, n) {
  let u = e.getGuildId();
  if (null == u) returntrue;
  null != n && (t = l.hX(t, l.U_(n)));
  let a = e.permissionOverwrites[u],
    o = null != a ? l.hX(a.deny, l.U_(a.allow)) : l.vB(0),
    s = {
      removingView: l.e$(t, c.Plq.VIEW_CHANNEL) && !l.e$(o, c.Plq.VIEW_CHANNEL),
      removingChat: false
    };
  return e.isForumLikeChannel() ? s.removingChat = l.e$(t, c.Plq.SEND_MESSAGES_IN_THREADS) && !l.e$(o, c.Plq.SEND_MESSAGES_IN_THREADS) : s.removingChat = l.e$(t, c.Plq.SEND_MESSAGES) && !l.e$(o, c.Plq.SEND_MESSAGES), !s.removingChat && !s.removingView || !!await N(u, e.id, s) || (i.Z.show({
    title: E.intl.string(E.t.ut7sq0),
    body: E.intl.format(E.t["Zaz+un"], {
      onClick: () => {
        i.Z.close(), r.Z.open(u, c.pNK.ONBOARDING)
      }
    })
  }), false)
}