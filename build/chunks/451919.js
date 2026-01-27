/** Chunk was on web.js **/
/** chunk id: 451919, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => c,
  Uj: () => d,
  bG: () => u
});
var Chunk495756 = require("./495756.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk90165 = require("./90165.js");
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
    mentionGames: null != (t = null == (n = r.mentionGames) ? true : n.map(e => e.id)) ? t : [],
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
    mentionEveryone: null != (t = s.mention_everyone) && t,
    mentionUsers: null != (n = null == (a = s.mentions) ? true : a.map(e => e.id)) ? n : [],
    mentionRoles: null != (r = s.mention_roles) ? r : [],
    mentionGames: null != (i = null == (o = s.mention_games) ? true : o.map(e => e.id)) ? i : [],
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
      return !r.A.getMute(e) && (null != (t = s.A.getLastPlayedDateTime(e)) ? t : 0) > Date.now() - l
    })) returntrue;
  if (_ || null == d || 0 === d.length) returnfalse;
  let h = i.A.getChannel(n);
  if (null == h) returnfalse;
  let m = h.getGuildId();
  if (null == m || null == o.A.getGuild(m)) returnfalse;
  let g = a.Ay.getMember(m, t);
  return null != g && d.some(e => g.roles.includes(e))
}