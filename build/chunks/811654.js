/** Chunk was on web.js **/
/** chunk id: 811654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HI: () => m,
  _H: () => h,
  af: () => g,
  tx: () => E
}), require("./388685.js");
var Chunk524846 = require("./524846.js"),
  Chunk911969 = require("./911969.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk483360 = require("./483360.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk280501 = require("./280501.js");
require("./892902.js");
let _ = 15,
  m = 1e3;

function h(e, t, n) {
  let r = a.Z.getChannel(n);
  if (null == r) return [];
  let o = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
    s = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
    {
      users: l,
      roles: c
    } = u.ZP.queryMentionResults({
      query: t,
      channel: r,
      canMentionEveryone: false,
      canMentionHere: false,
      canMentionUsers: o,
      canMentionRoles: s,
      includeAllGuildUsers: true,
      includeNonMentionableRoles: true,
      checkRecentlyTalkedOnEmptyQuery: false,
      limit: _
    });
  return [...l.map(e => {
    var t;
    let i = f.ZP.getNickname(r.getGuildId(), n, e.user);
    return {
      type: p.tM.USER,
      value: e.user.id,
      label: null != (t = null != i ? i : e.user.globalName) ? t : e.user.username
    }
  }), ...c.map(e => ({
    type: p.tM.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function g(e, t, n) {
  let r = a.Z.getChannel(t);
  return null == r ? [] : u.ZP.queryApplicationCommandChannelResults({
    query: e,
    channel: r,
    channelTypes: n,
    limit: _
  }).channels.map(e => ({
    type: p.tM.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let i = l.Z.getGuild(t);
  return e.map(e => {
    switch (e.type) {
      case r.$.USER: {
        var t;
        let n = c.default.getUser(e.id);
        if (null == n) return null;
        let r = null != i ? o.ZP.getNick(i.id, n.id) : true;
        return {
          type: p.tM.USER,
          value: n.id,
          label: null != (t = null != r ? r : n.globalName) ? t : n.username
        }
      }
      case r.$.ROLE: {
        if (null == i) return null;
        let t = s.Z.getRole(i.id, e.id);
        if (null == t) return null;
        return {
          type: p.tM.ROLE,
          value: t.id,
          label: t.name
        }
      }
      case r.$.CHANNEL: {
        if (null == i) return null;
        let t = a.Z.getChannel(e.id);
        if (null == t || t.guild_id !== i.id || n.length > 0 && !n.includes(t.type)) return null;
        return {
          type: p.tM.CHANNEL,
          value: t.id,
          label: t.name
        }
      }
    }
  }).filter(d.lm)
}