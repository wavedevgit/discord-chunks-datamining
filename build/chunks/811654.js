/** Chunk was on 30243 (f9bbfb433f11e972.js) **/
r.d(t, {
  HI: () => b,
  _H: () => f,
  af: () => O,
  tx: () => y
}), r(47120);
var n = r(524846),
  l = r(911969),
  i = r(592125),
  o = r(271383),
  a = r(430824),
  c = r(594174),
  s = r(483360),
  u = r(823379),
  d = r(5192),
  p = r(280501);
r(892902);
let b = 1e3;

function f(e, t, r) {
  let n = i.Z.getChannel(r);
  if (null == n) return [];
  let o = e === l.re.USER_SELECT || e === l.re.MENTIONABLE_SELECT,
    a = e === l.re.ROLE_SELECT || e === l.re.MENTIONABLE_SELECT,
    {
      users: c,
      roles: u
    } = s.ZP.queryMentionResults({
      query: t,
      channel: n,
      canMentionEveryone: !1,
      canMentionHere: !1,
      canMentionUsers: o,
      canMentionRoles: a,
      includeAllGuildUsers: !0,
      includeNonMentionableRoles: !0,
      checkRecentlyTalkedOnEmptyQuery: !1,
      limit: 15
    });
  return [...c.map(e => {
    var t;
    let l = d.ZP.getNickname(n.getGuildId(), r, e.user);
    return {
      type: p.tM.USER,
      value: e.user.id,
      label: null !== (t = null != l ? l : e.user.globalName) && void 0 !== t ? t : e.user.username
    }
  }), ...u.map(e => ({
    type: p.tM.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function O(e, t, r) {
  let n = i.Z.getChannel(t);
  return null == n ? [] : s.ZP.queryApplicationCommandChannelResults({
    query: e,
    channel: n,
    channelTypes: r,
    limit: 15
  }).channels.map(e => ({
    type: p.tM.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function y(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let l = a.Z.getGuild(t);
  return e.map(e => {
    switch (e.type) {
      case n.$.USER: {
        var t;
        let r = c.default.getUser(e.id);
        if (null == r) return null;
        let n = null != l ? o.ZP.getNick(l.id, r.id) : void 0;
        return {
          type: p.tM.USER,
          value: r.id,
          label: null !== (t = null != n ? n : r.globalName) && void 0 !== t ? t : r.username
        }
      }
      case n.$.ROLE: {
        if (null == l) return null;
        let t = a.Z.getRole(l.id, e.id);
        if (null == t) return null;
        return {
          type: p.tM.ROLE,
          value: t.id,
          label: t.name
        }
      }
      case n.$.CHANNEL: {
        if (null == l) return null;
        let t = i.Z.getChannel(e.id);
        if (null == t || t.guild_id !== l.id || r.length > 0 && !r.includes(t.type)) return null;
        return {
          type: p.tM.CHANNEL,
          value: t.id,
          label: t.name
        }
      }
    }
  }).filter(u.lm)
}