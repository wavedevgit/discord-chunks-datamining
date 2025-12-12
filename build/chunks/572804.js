/** Chunk was on web.js **/
/** chunk id: 572804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hl: () => u,
  Sz: () => d,
  ZP: () => c
});
var Chunk893642 = require("./893642.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk230307 = require("./230307.js");
let l = 5184e6;

function c(e) {
  var t, n;
  let {
    message: r,
    userId: i,
    suppressEveryone: o = false,
    suppressRoles: a = false
  } = e;
  return d({
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

function u(e) {
  var t, n, r, i, o, a;
  let {
    rawMessage: s,
    userId: l,
    suppressEveryone: c = false,
    suppressRoles: u = false
  } = e;
  return d({
    userId: l,
    channelId: s.channel_id,
    mentionEveryone: null != (r = s.mention_everyone) && r,
    mentionUsers: null != (i = null == (t = s.mentions) ? true : t.map(e => e.id)) ? i : [],
    mentionRoles: null != (o = s.mention_roles) ? o : [],
    mentionGames: null != (a = null == (n = s.mention_games) ? true : n.map(e => e.id)) ? a : [],
    suppressEveryone: c,
    suppressRoles: u
  })
}

function d(e) {
  let {
    userId: t,
    channelId: n,
    mentionEveryone: c,
    mentionUsers: u,
    mentionRoles: d,
    mentionGames: f,
    suppressEveryone: p = false,
    suppressRoles: _ = false
  } = e;
  if (c && !p || u.includes(t) || f.some(e => {
      var t;
      return !r.Z.getMute(e) && (null != (t = s.Z.getLastPlayedDateTime(e)) ? t : 0) > Date.now() - l
    })) returntrue;
  if (_ || null == d || 0 === d.length) returnfalse;
  let m = i.Z.getChannel(n);
  if (null == m) returnfalse;
  let h = m.getGuildId();
  if (null == h || null == a.Z.getGuild(h)) returnfalse;
  let g = o.ZP.getMember(h, t);
  return null != g && d.some(e => g.roles.includes(e))
}