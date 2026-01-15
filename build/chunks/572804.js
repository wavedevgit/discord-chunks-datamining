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
    suppressEveryone: a = false,
    suppressRoles: o = false
  } = e;
  return d({
    userId: i,
    channelId: r.channel_id,
    mentionEveryone: r.mentionEveryone,
    mentionUsers: r.mentions,
    mentionRoles: r.mentionRoles,
    mentionGames: null != (n = null == (t = r.mentionGames) ? true : t.map(e => e.id)) ? n : [],
    suppressEveryone: a,
    suppressRoles: o
  })
}

function u(e) {
  var t, n, r, i, a, o;
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
    mentionRoles: null != (a = s.mention_roles) ? a : [],
    mentionGames: null != (o = null == (n = s.mention_games) ? true : n.map(e => e.id)) ? o : [],
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
  let h = i.Z.getChannel(n);
  if (null == h) returnfalse;
  let m = h.getGuildId();
  if (null == m || null == o.Z.getGuild(m)) returnfalse;
  let g = a.ZP.getMember(m, t);
  return null != g && d.some(e => g.roles.includes(e))
}