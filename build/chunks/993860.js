/** Chunk was on web.js **/
/** chunk id: 993860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F3: () => g,
  ZP: () => E,
  sE: () => m
}), require("./997841.js");
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
    return e[e.IS_MEMBER = 0] = "IS_MEMBER", e[e.ADOPT_TAG = 1] = "ADOPT_TAG", e[e.HAS_APPLICATION = 2] = "HAS_APPLICATION", e[e.APPLY_TO_JOIN = 3] = "APPLY_TO_JOIN", e[e.LURK_DISCOVERABLE = 4] = "LURK_DISCOVERABLE", e[e.JOIN_VIA_INVITE = 5] = "JOIN_VIA_INVITE", e
  }({}),
  g = function(e) {
    return e.INVITE = "INVITE", e
  }({});

function E(e, t) {
  let {
    id: n,
    features: m
  } = e, g = (0, a.e7)([l.default], () => l.default.getId()), E = (0, a.e7)([u.Z], () => u.Z.getGuild(n)), b = (0, a.e7)([f.default], () => f.default.getUser(g), [g]), y = (0, a.e7)([c.ZP], () => {
    var e;
    return (null == (e = null != n ? c.ZP.getMember(n, g) : null) ? true : e.joinedAt) != null
  }, [n, g]), {
    validInviteKey: O,
    isBypassInvite: v
  } = (0, a.cj)([d.Z], () => {
    var e;
    let t = d.Z.getInviteKeyForGuildId(n),
      r = null != t ? d.Z.getInvite(t) : null;
    return null == r || r.state === h.r2o.BANNED || r.state === h.r2o.EXPIRED ? {
      validInviteKey: null,
      isBypassInvite: false
    } : {
      validInviteKey: t,
      isBypassInvite: (0, _.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS)
    }
  }), I = (0, s.Z)(), S = r.useMemo(() => {
    if (y) {
      let r = null == b ? true : b.primaryGuild,
        i = (null == r ? true : r.identityGuildId) === n && (null == r ? true : r.identityEnabled) === true;
      return "INVITE" !== t && null != e.tag && !i && null != E && (0, o.up)(E) ? 1 : 0
    }
    return I.includes(n) ? 2 : (null == m ? true : m.includes(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == m ? true : m.includes(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != O || e.visibility === p.k.PUBLIC_WITH_RECRUITMENT) && !v ? 3 : null != O ? 5 : (null == m ? true : m.includes(h.oNc.DISCOVERABLE)) ? 4 : null
  }, [y, I, n, m, O, e.visibility, e.tag, v, null == b ? true : b.primaryGuild, t, E]);
  return {
    guildId: n,
    ctaType: S,
    validInviteKey: O
  }
}