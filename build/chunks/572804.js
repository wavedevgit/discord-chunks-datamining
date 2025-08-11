/** Chunk was on web.js **/
/** chunk id: 572804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hl: () => c,
  Sz: () => u,
  ZP: () => l
});
var Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk230307 = require("./230307.js");
let s = 5184e6;

function l(e) {
  var t, n;
  let {
    message: r,
    userId: i,
    suppressEveryone: o = false,
    suppressRoles: a = false
  } = e;
  return u({
    userId: i,
    channelId: r.channel_id,
    mentionEveryone: r.mentionEveryone,
    mentionUsers: r.mentions,
    mentionRoles: r.mentionRoles,
    mentionGames: null != (n = null == (t = r.mentionGames) ? true : t.map(e => e.id)) ? n : [],
    suppressEveryone: o,
    suppressRoles: a
  })
}

function c(e) {
  var t, n, r, i, o, a;
  let {
    rawMessage: s,
    userId: l,
    suppressEveryone: c = false,
    suppressRoles: d = false
  } = e;
  return u({
    userId: l,
    channelId: s.channel_id,
    mentionEveryone: null != (r = s.mention_everyone) && r,
    mentionUsers: null != (i = null == (t = s.mentions) ? true : t.map(e => e.id)) ? i : [],
    mentionRoles: null != (o = s.mention_roles) ? o : [],
    mentionGames: null != (a = null == (n = s.mention_games) ? true : n.map(e => e.id)) ? a : [],
    suppressEveryone: c,
    suppressRoles: d
  })
}

function u(e) {
  let {
    userId: t,
    channelId: n,
    mentionEveryone: l,
    mentionUsers: c,
    mentionRoles: u,
    mentionGames: d,
    suppressEveryone: f = false,
    suppressRoles: _ = false
  } = e;
  if (l && !f || c.includes(t) || d.some(e => {
      var t;
      return (null != (t = a.Z.getLastPlayedDateTime(e)) ? t : 0) > Date.now() - s
    })) returntrue;
  if (_ || null == u || 0 === u.length) returnfalse;
  let p = r.Z.getChannel(n);
  if (null == p) returnfalse;
  let h = p.getGuildId();
  if (null == h || null == o.Z.getGuild(h)) returnfalse;
  let m = i.ZP.getMember(h, t);
  return null != m && u.some(e => m.roles.includes(e))
}