/** Chunk was on web.js **/
/** chunk id: 993860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F3: () => g,
  ZP: () => E,
  sE: () => m
}), require("./997841.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk731722 = require("./731722.js"),
  Chunk234383 = require("./234383.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk701190 = require("./701190.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk330705 = require("./330705.js"),
  Chunk981631 = require("./981631.js"),
  m = function(e) {
    return e[e.IS_MEMBER = 0] = "IS_MEMBER", e[e.ADOPT_TAG = 1] = "ADOPT_TAG", e[e.HAS_APPLICATION = 2] = "HAS_APPLICATION", e[e.APPLY_TO_JOIN = 3] = "APPLY_TO_JOIN", e[e.LURK_DISCOVERABLE = 4] = "LURK_DISCOVERABLE", e[e.JOIN_VIA_INVITE = 5] = "JOIN_VIA_INVITE", e[e.ACCEPT_ROLES = 6] = "ACCEPT_ROLES", e
  }({}),
  g = function(e) {
    return e.INVITE = "INVITE", e
  }({});

function E(e, t, n) {
  let {
    id: m,
    features: g
  } = e, E = (0, a.e7)([l.default], () => l.default.getId()), b = (0, a.e7)([u.Z], () => u.Z.getGuild(m)), y = (0, a.e7)([f.default], () => f.default.getUser(E), [E]), O = (0, a.e7)([c.ZP], () => {
    var e;
    return (null == (e = null != m ? c.ZP.getMember(m, E) : null) ? true : e.joinedAt) != null
  }, [m, E]), {
    validInviteKey: v,
    isBypassInvite: I,
    inviteRoles: S
  } = (0, a.cj)([d.Z], () => {
    var e;
    let t = null != n ? n : d.Z.getInviteKeyForGuildId(m),
      r = null != t ? d.Z.getInvite(t) : null;
    return null == r || r.state === h.r2o.BANNED || r.state === h.r2o.EXPIRED ? {
      validInviteKey: null,
      isBypassInvite: false,
      inviteRoles: null
    } : {
      validInviteKey: t,
      isBypassInvite: (0, _.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS),
      inviteRoles: r.roles
    }
  }, [m, n]), T = (0, s.Z)(), A = r.useMemo(() => {
    if (O) {
      if ("INVITE" === t && null != S && S.length > 0 && null != y) {
        var n;
        let e = c.ZP.getMember(m, y.id),
          t = new Set(null != (n = null == e ? true : e.roles) ? n : []);
        if (S.some(e => !t.has(e.id))) return 6
      }
      let r = null == y ? true : y.primaryGuild,
        i = (null == r ? true : r.identityGuildId) === m && (null == r ? true : r.identityEnabled) === true;
      return "INVITE" !== t && null != e.tag && !i && null != b && (0, o.up)(b) ? 1 : 0
    }
    return T.includes(m) ? 2 : (null == g ? true : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == g ? true : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != v || e.visibility === p.k.PUBLIC_WITH_RECRUITMENT) && !I ? 3 : null != v ? 5 : (null == g ? true : g.includes(h.GuildFeatures.DISCOVERABLE)) ? 4 : null
  }, [O, T, m, g, v, e.visibility, e.tag, I, t, b, S, y]);
  return {
    guildId: m,
    ctaType: A,
    validInviteKey: v
  }
}