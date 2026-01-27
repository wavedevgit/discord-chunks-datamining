/** Chunk was on web.js **/
/** chunk id: 461888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => E,
  SP: () => m,
  cn: () => g
}), require("./938796.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk685073 = require("./685073.js"),
  Chunk928568 = require("./928568.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk299091 = require("./299091.js"),
  Chunk287809 = require("./287809.js"),
  Chunk348943 = require("./348943.js"),
  Chunk652215 = require("./652215.js"),
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
  } = e, E = (0, o.bG)([c.default], () => c.default.getId()), y = (0, o.bG)([d.A], () => d.A.getGuild(m)), b = (0, o.bG)([p.default], () => p.default.getUser(E), [E]), O = (0, o.bG)([u.Ay], () => {
    var e;
    return (null == (e = null != m ? u.Ay.getMember(m, E) : null) ? true : e.joinedAt) != null
  }, [m, E]), {
    validInviteKey: v,
    isBypassInvite: A,
    inviteRoles: I
  } = (0, o.cf)([f.A], () => {
    var e;
    let t = null != n ? n : f.A.getInviteKeyForGuildId(m),
      r = null != t ? f.A.getInvite(t) : null;
    return null == r || r.state === h.elq.BANNED || r.state === h.elq.EXPIRED ? {
      validInviteKey: null,
      isBypassInvite: false,
      inviteRoles: null
    } : {
      validInviteKey: t,
      isBypassInvite: (0, a.Lt)(null != (e = r.flags) ? e : 0, i.Q.IS_APPLICATION_BYPASS),
      inviteRoles: r.roles
    }
  }, [m, n]), S = (0, l.A)(), T = r.useMemo(() => {
    if (O) {
      if ("INVITE" === t && null != I && I.length > 0 && null != b) {
        var n;
        let e = u.Ay.getMember(m, b.id),
          t = new Set(null != (n = null == e ? true : e.roles) ? n : []);
        if (I.some(e => !t.has(e.id))) return 6
      }
      let r = null == b ? true : b.primaryGuild,
        i = (null == r ? true : r.identityGuildId) === m && (null == r ? true : r.identityEnabled) === true;
      return "INVITE" !== t && null != e.tag && !i && null != y && (0, s.Rg)(y) ? 1 : 0
    }
    return S.includes(m) ? 2 : (null == g ? true : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == g ? true : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != v || e.visibility === _.n.PUBLIC_WITH_RECRUITMENT) && !A ? 3 : null != v ? 5 : (null == g ? true : g.includes(h.GuildFeatures.DISCOVERABLE)) ? 4 : null
  }, [O, S, m, g, v, e.visibility, e.tag, A, t, y, I, b]);
  return {
    guildId: m,
    ctaType: T,
    validInviteKey: v
  }
}