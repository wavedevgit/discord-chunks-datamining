/** Chunk was on 873 **/
/** chunk id: 987707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
}), require("./583741.js"), require("./539854.js"), require("./388685.js"), require("./290780.js");
var r, l, s, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
let g = Chunk149765.$e(Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_WEBHOOKS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.MOVE_MEMBERS, Chunk981631.Plq.MUTE_MEMBERS, Chunk981631.Plq.DEAFEN_MEMBERS),
  f = null,
  N = [],
  h = [],
  O = [],
  p = [],
  R = [],
  S = [],
  C = [],
  v = [],
  D = true,
  b = false,
  L = false,
  x = true,
  U = false,
  M = null,
  P = Chunk981631.rsA.ALL,
  j = null,
  y = {},
  w = 0;

function G(e) {
  let t = [],
    n = 0;
  return e.reverse().forEach(e => {
    var r, l, s;
    let i = [],
      o = null,
      u = null,
      c = null;
    if (null != e.reason && i.push(new E.ms(I.zUn.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new E.ms(t.key, t.old_value, t.new_value);
        i.push(e), e.key === I.zUn.NAME ? o = e : e.key === I.zUn.TYPE ? c = e : e.key === I.zUn.TITLE && (u = e)
      }
    if (e.action_type === I.rsA.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        n = new E.ms(I.zUn.PRUNE_DELETE_DAYS, null, t);
      i.push(n)
    }
    e.action_type === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? true : l.auto_moderation_rule_name) != null && i.push(new E.ms(I.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === I.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? true : r.status) != null && i.push(new E.ms(I.zUn.STATUS, null, e.options.status));
    let _ = new E.ZP({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: i,
        options: e.options
      }),
      A = t[0];
    if (function(e, t, n) {
        let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 30,
          l = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && a().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < r && n < l && t.targetType !== I.KFR.INVITE && t.action !== I.rsA.MESSAGE_DELETE && t.action !== I.rsA.MESSAGE_BULK_DELETE && t.action !== I.rsA.MESSAGE_PIN && t.action !== I.rsA.MESSAGE_UNPIN && t.action !== I.rsA.MEMBER_MOVE && t.action !== I.rsA.MEMBER_DISCONNECT && t.action !== I.rsA.BOT_ADD && t.action !== I.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== I.rsA.MEMBER_PRUNE
      }(A, _, n)) {
      t[0] = A.merge({
        changes: [...A.changes, ..._.changes],
        timestampEnd: _.timestampStart
      }), n++;
      return
    }
    if (_.actionType === I.vB8.DELETE && (null != o || null != u)) {
      let e = null != (s = null == o ? true : o.oldValue) ? s : null == u ? true : u.oldValue;
      (_.targetType === I.KFR.CHANNEL || _.targetType === I.KFR.CHANNEL_OVERWRITE) && null !== c && (0, d.r8)(c.oldValue) && (e = "#".concat(e)), null == y[_.targetType] ? y[_.targetType] = {
        [_.targetId]: e
      } : y[_.targetType][_.targetId] = e
    }
    n = 0, t.unshift(_)
  }), t
}

function k(e) {
  let {
    section: t
  } = e;
  if (t !== I.pNK.AUDIT_LOG) returnfalse;
  let n = A.ZP.getMembers(f),
    r = m.Z.getGuild(f),
    l = null != f ? T.Z.getUnsafeMutableRoles(f) : true;
  O = a()(n).filter(e => e.roles.some(t => {
    if (null != r) {
      if (e.userId === r.ownerId) returntrue;
      let n = null == l ? true : l[t];
      return null != n && (0, _._N)(n, g)
    }
  })).map(e => e.userId).value()
}
class F extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk485386.Z, Chunk271383.ZP)
  }
  get logs() {
    return N
  }
  get integrations() {
    return h
  }
  get webhooks() {
    return p
  }
  get guildScheduledEvents() {
    return R
  }
  get automodRules() {
    return S
  }
  get threads() {
    return C
  }
  get applicationCommands() {
    return v
  }
  get isInitialLoading() {
    return D
  }
  get isLoading() {
    return b
  }
  get isLoadingNextPage() {
    return L
  }
  get hasOlderLogs() {
    return x
  }
  get hasError() {
    return U
  }
  get userIds() {
    return O
  }
  get userIdFilter() {
    return M
  }
  get targetIdFilter() {
    return j
  }
  get actionFilter() {
    return P
  }
  get deletedTargets() {
    return y
  }
  get groupedFetchCount() {
    return w
  }
}
s = "GuildSettingsAuditLogStore", (l = "displayName") in F ? Object.defineProperty(F, l, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : F[l] = s;
let z = new F(Chunk570140.Z, {
  AUDIT_LOG_FETCH_START: function() {
    b = true
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    w = 0, D = false, b = false, x = true, U = false, N = G(e.logs), h = e.integrations, p = e.webhooks, R = e.guildScheduledEvents, S = null != (t = e.automodRules) ? t : [], C = e.threads, v = e.applicationCommands, e.logs.length < I.Rg9 && (x = false)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    b = false, U = true, N = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    L = true, t && w++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: n,
      webhooks: r,
      guildScheduledEvents: l,
      automodRules: s,
      threads: i,
      applicationCommands: a
    } = e;
    if (L = false, h = n, p = r, R = l, S = s, C = i, v = a, (0 === t.length || t.length < I.Rg9) && (x = false), t.length > 0) {
      let e = G(t);
      N = [...N, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    L = false
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    P = t
  },
  AUDIT_LOG_FILTER_BY_USER: function(e) {
    let {
      userId: t
    } = e;
    M = t
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(e) {
    let {
      targetId: t
    } = e;
    j = t
  },
  GUILD_SETTINGS_SET_SECTION: k,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: n
    } = e;
    return f = t, j = null, k({
      section: n
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    N = [], O = [], P = Chunk981631.rsA.ALL, M = null, j = null, y = {}, w = 0, D = true, h = [], p = [], R = [], S = [], C = []
  }
})