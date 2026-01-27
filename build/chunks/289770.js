/** Chunk was on 20941 **/
/** chunk id: 289770, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S$: () => p,
  YV: () => h,
  iA: () => g,
  z0: () => b
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
let p = 1e3;

function h(e, t, n) {
  let r = a.A.getChannel(n);
  if (null == r) return [];
  let i = e === l.I5.USER_SELECT || e === l.I5.MENTIONABLE_SELECT,
    s = e === l.I5.ROLE_SELECT || e === l.I5.MENTIONABLE_SELECT,
    {
      users: o,
      roles: c
    } = u.Ay.queryMentionResults({
      query: t,
      channel: r,
      canMentionEveryone: false,
      canMentionHere: false,
      canMentionUsers: i,
      canMentionRoles: s,
      includeAllGuildUsers: true,
      includeNonMentionableRoles: true,
      checkRecentlyTalkedOnEmptyQuery: false,
      limit: 15
    });
  return [...o.map(e => {
    var t;
    let l = m.Ay.getNickname(r.getGuildId(), n, e.user);
    return {
      type: f.iw.USER,
      value: e.user.id,
      label: null != (t = null != l ? l : e.user.globalName) ? t : e.user.username
    }
  }), ...c.map(e => ({
    type: f.iw.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function b(e, t, n) {
  let r = a.A.getChannel(t);
  return null == r ? [] : u.Ay.queryApplicationCommandChannelResults({
    query: e,
    channel: r,
    channelTypes: n,
    limit: 15
  }).channels.map(e => ({
    type: f.iw.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let l = o.A.getGuild(t);
  return e.map(e => {
    switch (e.type) {
      case r.i.USER: {
        var t;
        let n = c.default.getUser(e.id);
        if (null == n) return null;
        let r = null != l ? i.Ay.getNick(l.id, n.id) : true;
        return {
          type: f.iw.USER,
          value: n.id,
          label: null != (t = null != r ? r : n.globalName) ? t : n.username
        }
      }
      case r.i.ROLE: {
        if (null == l) return null;
        let t = s.A.getRole(l.id, e.id);
        if (null == t) return null;
        return {
          type: f.iw.ROLE,
          value: t.id,
          label: t.name
        }
      }
      case r.i.CHANNEL: {
        if (null == l) return null;
        let t = a.A.getChannel(e.id);
        if (null == t || t.guild_id !== l.id || n.length > 0 && !n.includes(t.type)) return null;
        return {
          type: f.iw.CHANNEL,
          value: t.id,
          label: t.name
        }
      }
    }
  }).filter(d.Vq)
}