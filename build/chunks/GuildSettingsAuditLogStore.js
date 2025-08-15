/** Chunk was on 78079 **/
/** chunk id: 987707, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./583741.js"), require("./539854.js"), require("./388685.js"), require("./290780.js");
var n, r, Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk387667 = require("./387667.js"),
  Chunk131704 = require("./131704.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");
let E = Chunk149765.$e(Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_WEBHOOKS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.MOVE_MEMBERS, Chunk981631.Plq.MUTE_MEMBERS, Chunk981631.Plq.DEAFEN_MEMBERS),
  C = null,
  B = [],
  w = [],
  D = [],
  M = [],
  p = [],
  I = [],
  H = [],
  b = [],
  O = true,
  Q = false,
  P = false,
  j = true,
  V = false,
  m = null,
  T = Chunk981631.rsA.ALL,
  y = null,
  L = {},
  x = 0;

function N(A) {
  let e = [],
    t = 0;
  return A.reverse().forEach(A => {
    var n, r, l;
    let a = [],
      s = null,
      o = null,
      f = null;
    if (null != A.reason && a.push(new g.ms(d.zUn.REASON, null, A.reason)), null != A.changes)
      for (let e of A.changes) {
        let A = new g.ms(e.key, e.old_value, e.new_value);
        a.push(A), A.key === d.zUn.NAME ? s = A : A.key === d.zUn.TYPE ? f = A : A.key === d.zUn.TITLE && (o = A)
      }
    if (A.action_type === d.rsA.MEMBER_PRUNE) {
      let e = null != A && null != A.options && null != A.options.delete_member_days ? A.options.delete_member_days : 1,
        t = new g.ms(d.zUn.PRUNE_DELETE_DAYS, null, e);
      a.push(t)
    }
    A.action_type === d.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (r = A.options) ? true : r.auto_moderation_rule_name) != null && a.push(new g.ms(d.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, A.options.auto_moderation_rule_name)), A.action_type === d.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (n = A.options) ? true : n.status) != null && a.push(new g.ms(d.zUn.STATUS, null, A.options.status));
    let v = new g.ZP({
        id: A.id,
        action: A.action_type,
        targetId: A.target_id,
        userId: A.user_id,
        changes: a,
        options: A.options
      }),
      u = e[0];
    if (function(A, e, t) {
        let n = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 30,
          r = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 50;
        return null != A && A.action === e.action && A.targetId === e.targetId && A.userId === e.userId && i().isEqual(A.options, e.options) && e.timestampStart.diff(A.timestampStart, "minutes") < n && t < r && e.targetType !== d.KFR.INVITE && e.action !== d.rsA.MESSAGE_DELETE && e.action !== d.rsA.MESSAGE_BULK_DELETE && e.action !== d.rsA.MESSAGE_PIN && e.action !== d.rsA.MESSAGE_UNPIN && e.action !== d.rsA.MEMBER_MOVE && e.action !== d.rsA.MEMBER_DISCONNECT && e.action !== d.rsA.BOT_ADD && e.action !== d.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && e.action !== d.rsA.MEMBER_PRUNE
      }(u, v, t)) {
      e[0] = u.merge({
        changes: [...u.changes, ...v.changes],
        timestampEnd: v.timestampStart
      }), t++;
      return
    }
    if (v.actionType === d.vB8.DELETE && (null != s || null != o)) {
      let A = null != (l = null == s ? true : s.oldValue) ? l : null == o ? true : o.oldValue;
      (v.targetType === d.KFR.CHANNEL || v.targetType === d.KFR.CHANNEL_OVERWRITE) && null !== f && (0, c.r8)(f.oldValue) && (A = "#".concat(A)), null == L[v.targetType] ? L[v.targetType] = {
        [v.targetId]: A
      } : L[v.targetType][v.targetId] = A
    }
    t = 0, e.unshift(v)
  }), e
}

function Z(A) {
  let {
    section: e
  } = A;
  if (e !== d.pNK.AUDIT_LOG) returnfalse;
  let t = v.ZP.getMembers(C),
    n = h.Z.getGuild(C),
    r = null != C ? u.Z.getUnsafeMutableRoles(C) : true;
  D = i()(t).filter(A => A.roles.some(e => {
    if (null != n) {
      if (A.userId === n.ownerId) returntrue;
      let t = null == r ? true : r[e];
      return null != t && (0, f._N)(t, E)
    }
  })).map(A => A.userId).value()
}
class S extends(n = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk485386.Z, Chunk271383.ZP)
  }
  get logs() {
    return B
  }
  get integrations() {
    return w
  }
  get webhooks() {
    return M
  }
  get guildScheduledEvents() {
    return p
  }
  get automodRules() {
    return I
  }
  get threads() {
    return H
  }
  get applicationCommands() {
    return b
  }
  get isInitialLoading() {
    return O
  }
  get isLoading() {
    return Q
  }
  get isLoadingNextPage() {
    return P
  }
  get hasOlderLogs() {
    return j
  }
  get hasError() {
    return V
  }
  get userIds() {
    return D
  }
  get userIdFilter() {
    return m
  }
  get targetIdFilter() {
    return y
  }
  get actionFilter() {
    return T
  }
  get deletedTargets() {
    return L
  }
  get groupedFetchCount() {
    return x
  }
}(r = "displayName") in S ? Object.defineProperty(S, r, {
  value: "GuildSettingsAuditLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : S[r] = "GuildSettingsAuditLogStore";
let R = new S(Chunk570140.Z, {
  AUDIT_LOG_FETCH_START: function() {
    Q = true
  },
  AUDIT_LOG_FETCH_SUCCESS: function(A) {
    var e;
    x = 0, O = false, Q = false, j = true, V = false, B = N(A.logs), w = A.integrations, M = A.webhooks, p = A.guildScheduledEvents, I = null != (e = A.automodRules) ? e : [], H = A.threads, b = A.applicationCommands, A.logs.length < d.Rg9 && (j = false)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    Q = false, V = true, B = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(A) {
    let {
      isGroupedFetch: e
    } = A;
    P = true, e && x++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(A) {
    let {
      logs: e,
      integrations: t,
      webhooks: n,
      guildScheduledEvents: r,
      automodRules: l,
      threads: i,
      applicationCommands: a
    } = A;
    if (P = false, w = t, M = n, p = r, I = l, H = i, b = a, (0 === e.length || e.length < d.Rg9) && (j = false), e.length > 0) {
      let A = N(e);
      B = [...B, ...A]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    P = false
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(A) {
    let {
      action: e
    } = A;
    T = e
  },
  AUDIT_LOG_FILTER_BY_USER: function(A) {
    let {
      userId: e
    } = A;
    m = e
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(A) {
    let {
      targetId: e
    } = A;
    y = e
  },
  GUILD_SETTINGS_SET_SECTION: Z,
  GUILD_SETTINGS_INIT: function(A) {
    let {
      guildId: e,
      section: t
    } = A;
    return C = e, y = null, Z({
      section: t
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    B = [], D = [], T = Chunk981631.rsA.ALL, m = null, y = null, L = {}, x = 0, O = true, w = [], M = [], p = [], I = [], H = []
  }
})