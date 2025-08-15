/** Chunk was on 38697 **/
/** chunk id: 156699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => E,
  u: () => N
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
async function E(e, t) {
  return null == e || await S(e, t, {
    removingView: true,
    removingChat: true
  })
}
async function S(e, t, n) {
  var r;
  let i = u.Z.getGuild(e);
  if (null == i) returntrue;
  let l = null != i && (null == (r = i.features) ? true : r.has(d.oNc.GUILD_ONBOARDING));
  if (!l) returntrue;
  l && o.Z.shouldFetchPrompts(e) && await (0, a.eM)(e);
  let f = o.Z.getDefaultChannelIds(e),
    [E, S] = (0, s.d9)(e, f);
  if (!f.includes(t)) returntrue;
  let N = n.removingView && S.length - 1 < c.md,
    g = (n.removingChat || n.removingView) && E.length - 1 < c.X;
  return !N && !g
}
async function N(e, t, n) {
  let u = e.getGuildId();
  if (null == u) returntrue;
  null != n && (t = r.hX(t, r.U_(n)));
  let a = e.permissionOverwrites[u],
    o = null != a ? r.hX(a.deny, r.U_(a.allow)) : r.vB(0),
    s = {
      removingView: r.e$(t, d.Plq.VIEW_CHANNEL) && !r.e$(o, d.Plq.VIEW_CHANNEL),
      removingChat: false
    };
  return e.isForumLikeChannel() ? s.removingChat = r.e$(t, d.Plq.SEND_MESSAGES_IN_THREADS) && !r.e$(o, d.Plq.SEND_MESSAGES_IN_THREADS) : s.removingChat = r.e$(t, d.Plq.SEND_MESSAGES) && !r.e$(o, d.Plq.SEND_MESSAGES), !s.removingChat && !s.removingView || !!await S(u, e.id, s) || (i.Z.show({
    title: f.intl.string(f.t.ut7sq6),
    body: f.intl.format(f.t["Zaz+ur"], {
      onClick: () => {
        i.Z.close(), l.Z.open(u, d.pNK.ONBOARDING)
      }
    })
  }), false)
}