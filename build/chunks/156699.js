/** Chunk was on web.js **/
/** chunk id: 156699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => _,
  u: () => h
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
  Chunk388032 = require("./388032.js");
async function _(e, t) {
  return null == e || await p(e, t, {
    removingView: true,
    removingChat: true
  })
}
async function p(e, t, n) {
  var r;
  let i = a.Z.getGuild(e);
  if (null == i) returntrue;
  let o = null != i && (null == (r = i.features) ? true : r.has(d.oNc.GUILD_ONBOARDING));
  if (!o) returntrue;
  o && l.Z.shouldFetchPrompts(e) && await (0, s.eM)(e);
  let f = l.Z.getDefaultChannelIds(e),
    [_, p] = (0, c.d9)(e, f);
  if (!f.includes(t)) returntrue;
  let h = n.removingView && p.length - 1 < u.md,
    m = (n.removingChat || n.removingView) && _.length - 1 < u.X;
  return !h && !m
}
async function h(e, t, n) {
  let a = e.getGuildId();
  if (null == a) returntrue;
  null != n && (t = r.hX(t, r.U_(n)));
  let s = e.permissionOverwrites[a],
    l = null != s ? r.hX(s.deny, r.U_(s.allow)) : r.vB(0),
    c = {
      removingView: r.e$(t, d.Plq.VIEW_CHANNEL) && !r.e$(l, d.Plq.VIEW_CHANNEL),
      removingChat: false
    };
  return e.isForumLikeChannel() ? c.removingChat = r.e$(t, d.Plq.SEND_MESSAGES_IN_THREADS) && !r.e$(l, d.Plq.SEND_MESSAGES_IN_THREADS) : c.removingChat = r.e$(t, d.Plq.SEND_MESSAGES) && !r.e$(l, d.Plq.SEND_MESSAGES), !c.removingChat && !c.removingView || !!await p(a, e.id, c) || (i.Z.show({
    title: f.intl.string(f.t.ut7sq6),
    body: f.intl.format(f.t["Zaz+ur"], {
      onClick: () => {
        i.Z.close(), o.Z.open(a, d.pNK.ONBOARDING)
      }
    })
  }), false)
}