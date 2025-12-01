/** Chunk was on web.js **/
/** chunk id: 993860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F3: () => g,
  ZP: () => E,
  sE: () => h
}), require("./997841.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk731722 = require("./731722.js"),
  Chunk234383 = require("./234383.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk701190 = require("./701190.js"),
  Chunk594174 = require("./594174.js"),
  Chunk330705 = require("./330705.js"),
  Chunk981631 = require("./981631.js"),
  h = function(e) {
    return e[e.IS_MEMBER = 0] = "IS_MEMBER", e[e.ADOPT_TAG = 1] = "ADOPT_TAG", e[e.HAS_APPLICATION = 2] = "HAS_APPLICATION", e[e.APPLY_TO_JOIN = 3] = "APPLY_TO_JOIN", e[e.LURK_DISCOVERABLE = 4] = "LURK_DISCOVERABLE", e[e.JOIN_VIA_INVITE = 5] = "JOIN_VIA_INVITE", e[e.ACCEPT_ROLES = 6] = "ACCEPT_ROLES", e
  }({}),
  g = function(e) {
    return e.INVITE = "INVITE", e
  }({});

function E(e, t, n) {
  let {
    id: h,
    features: g
  } = e, E = (0, o.e7)([c.default], () => c.default.getId()), b = (0, o.e7)([d.Z], () => d.Z.getGuild(h)), y = (0, o.e7)([p.default], () => p.default.getUser(E), [E]), O = (0, o.e7)([u.ZP], () => {
    var e;
    return (null == (e = null != h ? u.ZP.getMember(h, E) : null) ? true : e.joinedAt) != null
  }, [h, E]), {
    validInviteKey: v,
    isBypassInvite: S,
    inviteRoles: I
  } = (0, o.cj)([f.Z], () => {
    var e;
    let t = null != n ? n : f.Z.getInviteKeyForGuildId(h),
      r = null != t ? f.Z.getInvite(t) : null;
    return null == r || r.state === m.r2o.BANNED || r.state === m.r2o.EXPIRED ? {
      validInviteKey: null,
      isBypassInvite: false,
      inviteRoles: null
    } : {
      validInviteKey: t,
      isBypassInvite: (0, a.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS),
      inviteRoles: r.roles
    }
  }, [h, n]), T = (0, l.Z)(), A = r.useMemo(() => {
    if (O) {
      if ("INVITE" === t && null != I && I.length > 0 && null != y) {
        var n;
        let e = u.ZP.getMember(h, y.id),
          t = new Set(null != (n = null == e ? true : e.roles) ? n : []);
        if (I.some(e => !t.has(e.id))) return 6
      }
      let r = null == y ? true : y.primaryGuild,
        i = (null == r ? true : r.identityGuildId) === h && (null == r ? true : r.identityEnabled) === true;
      return "INVITE" !== t && null != e.tag && !i && null != b && (0, s.up)(b) ? 1 : 0
    }
    return T.includes(h) ? 2 : (null == g ? true : g.includes(m.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == g ? true : g.includes(m.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != v || e.visibility === _.k.PUBLIC_WITH_RECRUITMENT) && !S ? 3 : null != v ? 5 : (null == g ? true : g.includes(m.GuildFeatures.DISCOVERABLE)) ? 4 : null
  }, [O, T, h, g, v, e.visibility, e.tag, S, t, b, I, y]);
  return {
    guildId: h,
    ctaType: A,
    validInviteKey: v
  }
}