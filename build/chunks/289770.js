/** Chunk was on web.js **/
/** chunk id: 289770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S$: () => h,
  YV: () => m,
  iA: () => E,
  z0: () => g
}), require("./896048.js");
var Chunk238136 = require("./238136.js"),
  Chunk155718 = require("./155718.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk248465 = require("./248465.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk489414 = require("./489414.js");
require("./322980.js");
let _ = 15,
  h = 1e3;

function m(e, t, n) {
  let r = a.A.getChannel(n);
  if (null == r) return [];
  let s = e === i.I5.USER_SELECT || e === i.I5.MENTIONABLE_SELECT,
    o = e === i.I5.ROLE_SELECT || e === i.I5.MENTIONABLE_SELECT,
    {
      users: l,
      roles: c
    } = u.Ay.queryMentionResults({
      query: t,
      channel: r,
      canMentionEveryone: false,
      canMentionHere: false,
      canMentionUsers: s,
      canMentionRoles: o,
      includeAllGuildUsers: true,
      includeNonMentionableRoles: true,
      checkRecentlyTalkedOnEmptyQuery: false,
      limit: _
    });
  return [...l.map(e => {
    var t;
    let i = f.Ay.getNickname(r.getGuildId(), n, e.user);
    return {
      type: p.iw.USER,
      value: e.user.id,
      label: null != (t = null != i ? i : e.user.globalName) ? t : e.user.username
    }
  }), ...c.map(e => ({
    type: p.iw.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function g(e, t, n) {
  let r = a.A.getChannel(t);
  return null == r ? [] : u.Ay.queryApplicationCommandChannelResults({
    query: e,
    channel: r,
    channelTypes: n,
    limit: _
  }).channels.map(e => ({
    type: p.iw.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let i = l.A.getGuild(t);
  return e.map(e => {
    switch (e.type) {
      case r.i.USER: {
        var t;
        let n = c.default.getUser(e.id);
        if (null == n) return null;
        let r = null != i ? s.Ay.getNick(i.id, n.id) : true;
        return {
          type: p.iw.USER,
          value: n.id,
          label: null != (t = null != r ? r : n.globalName) ? t : n.username
        }
      }
      case r.i.ROLE: {
        if (null == i) return null;
        let t = o.A.getRole(i.id, e.id);
        if (null == t) return null;
        return {
          type: p.iw.ROLE,
          value: t.id,
          label: t.name
        }
      }
      case r.i.CHANNEL: {
        if (null == i) return null;
        let t = a.A.getChannel(e.id);
        if (null == t || t.guild_id !== i.id || n.length > 0 && !n.includes(t.type)) return null;
        return {
          type: p.iw.CHANNEL,
          value: t.id,
          label: t.name
        }
      }
    }
  }).filter(d.Vq)
}