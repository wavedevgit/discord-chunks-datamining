/** Chunk was on 30243 **/
/** chunk id: 811654, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  HI: () => b,
  _H: () => m,
  af: () => O,
  tx: () => y
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
let b = 1e3;

function m(e, t, r) {
  let n = i.Z.getChannel(r);
  if (null == n) return [];
  let o = e === l.re.USER_SELECT || e === l.re.MENTIONABLE_SELECT,
    a = e === l.re.ROLE_SELECT || e === l.re.MENTIONABLE_SELECT,
    {
      users: c,
      roles: s
    } = u.ZP.queryMentionResults({
      query: t,
      channel: n,
      canMentionEveryone: false,
      canMentionHere: false,
      canMentionUsers: o,
      canMentionRoles: a,
      includeAllGuildUsers: true,
      includeNonMentionableRoles: true,
      checkRecentlyTalkedOnEmptyQuery: false,
      limit: 15
    });
  return [...c.map(e => {
    var t;
    let l = p.ZP.getNickname(n.getGuildId(), r, e.user);
    return {
      type: f.tM.USER,
      value: e.user.id,
      label: null != (t = null != l ? l : e.user.globalName) ? t : e.user.username
    }
  }), ...s.map(e => ({
    type: f.tM.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function O(e, t, r) {
  let n = i.Z.getChannel(t);
  return null == n ? [] : u.ZP.queryApplicationCommandChannelResults({
    query: e,
    channel: n,
    channelTypes: r,
    limit: 15
  }).channels.map(e => ({
    type: f.tM.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function y(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let l = c.Z.getGuild(t);
  return e.map(e => {
    switch (e.type) {
      case n.$.USER: {
        var t;
        let r = s.default.getUser(e.id);
        if (null == r) return null;
        let n = null != l ? o.ZP.getNick(l.id, r.id) : true;
        return {
          type: f.tM.USER,
          value: r.id,
          label: null != (t = null != n ? n : r.globalName) ? t : r.username
        }
      }
      case n.$.ROLE: {
        if (null == l) return null;
        let t = a.Z.getRole(l.id, e.id);
        if (null == t) return null;
        return {
          type: f.tM.ROLE,
          value: t.id,
          label: t.name
        }
      }
      case n.$.CHANNEL: {
        if (null == l) return null;
        let t = i.Z.getChannel(e.id);
        if (null == t || t.guild_id !== l.id || r.length > 0 && !r.includes(t.type)) return null;
        return {
          type: f.tM.CHANNEL,
          value: t.id,
          label: t.name
        }
      }
    }
  }).filter(d.lm)
}