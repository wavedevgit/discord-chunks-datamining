/** Chunk was on 38985 **/
/** chunk id: 523599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./264879.js"), require("./321073.js"), require("./896048.js"), require("./667532.js");
var l, r, Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk411153 = require("./411153.js"),
  Chunk95701 = require("./95701.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");
let h = Chunk136722.kg(Chunk652215.xBc.KICK_MEMBERS, Chunk652215.xBc.BAN_MEMBERS, Chunk652215.xBc.ADMINISTRATOR, Chunk652215.xBc.MANAGE_CHANNELS, Chunk652215.xBc.MANAGE_GUILD, Chunk652215.xBc.MANAGE_MESSAGES, Chunk652215.xBc.MANAGE_NICKNAMES, Chunk652215.xBc.MANAGE_ROLES, Chunk652215.xBc.MANAGE_WEBHOOKS, Chunk652215.xBc.MANAGE_GUILD_EXPRESSIONS, Chunk652215.xBc.MOVE_MEMBERS, Chunk652215.xBc.MUTE_MEMBERS, Chunk652215.xBc.DEAFEN_MEMBERS),
  I = null,
  O = [],
  m = [],
  N = [],
  f = [],
  p = [],
  S = [],
  G = [],
  R = [],
  D = true,
  C = false,
  L = false,
  b = true,
  x = false,
  M = null,
  v = Chunk652215.F_X.ALL,
  j = null,
  U = {},
  y = 0;

function k(e) {
  let t = [],
    n = 0;
  return e.reverse().forEach(e => {
    var l, r, a;
    let s = [],
      o = null,
      u = null,
      d = null;
    if (null != e.reason && s.push(new c.QO(T.gGk.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new c.QO(t.key, t.old_value, t.new_value);
        s.push(e), e.key === T.gGk.NAME ? o = e : e.key === T.gGk.TYPE ? d = e : e.key === T.gGk.TITLE && (u = e)
      }
    if (e.action_type === T.F_X.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        n = new c.QO(T.gGk.PRUNE_DELETE_DAYS, null, t);
      s.push(n)
    }
    e.action_type === T.F_X.AUTO_MODERATION_BLOCK_MESSAGE && (null == (r = e.options) ? true : r.auto_moderation_rule_name) != null && s.push(new c.QO(T.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.F_X.VOICE_CHANNEL_STATUS_CREATE && (null == (l = e.options) ? true : l.status) != null && s.push(new c.QO(T.gGk.STATUS, null, e.options.status));
    let _ = new c.Ay({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: s,
        options: e.options
      }),
      g = t[0];
    if (function(e, t, n) {
        let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 30,
          r = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && i().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < l && n < r && t.targetType !== T.GaG.INVITE && t.action !== T.F_X.MESSAGE_DELETE && t.action !== T.F_X.MESSAGE_BULK_DELETE && t.action !== T.F_X.MESSAGE_PIN && t.action !== T.F_X.MESSAGE_UNPIN && t.action !== T.F_X.MEMBER_MOVE && t.action !== T.F_X.MEMBER_DISCONNECT && t.action !== T.F_X.BOT_ADD && t.action !== T.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.F_X.MEMBER_PRUNE
      }(g, _, n)) {
      t[0] = g.merge({
        changes: [...g.changes, ..._.changes],
        timestampEnd: _.timestampStart
      }), n++;
      return
    }
    if (_.actionType === T.RWi.DELETE && (null != o || null != u)) {
      let e = null != (a = null == o ? true : o.oldValue) ? a : null == u ? true : u.oldValue;
      (_.targetType === T.GaG.CHANNEL || _.targetType === T.GaG.CHANNEL_OVERWRITE) && null !== d && (0, E.tr)(d.oldValue) && (e = "#".concat(e)), null == U[_.targetType] ? U[_.targetType] = {
        [_.targetId]: e
      } : U[_.targetType][_.targetId] = e
    }
    n = 0, t.unshift(_)
  }), t
}

function P(e) {
  let {
    section: t
  } = e;
  if (t !== T.BEX.AUDIT_LOG) returnfalse;
  let n = _.Ay.getMembers(I),
    l = A.A.getGuild(I),
    r = null != I ? g.A.getUnsafeMutableRoles(I) : true;
  N = i()(n).filter(e => e.roles.some(t => {
    if (null != l) {
      if (e.userId === l.ownerId) returntrue;
      let n = null == r ? true : r[t];
      return null != n && (0, d.sx)(n, h)
    }
  })).map(e => e.userId).value()
}
class F extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(A.A, g.A, _.Ay)
  }
  get logs() {
    return O
  }
  get integrations() {
    return m
  }
  get webhooks() {
    return f
  }
  get guildScheduledEvents() {
    return p
  }
  get automodRules() {
    return S
  }
  get threads() {
    return G
  }
  get applicationCommands() {
    return R
  }
  get isInitialLoading() {
    return D
  }
  get isLoading() {
    return C
  }
  get isLoadingNextPage() {
    return L
  }
  get hasOlderLogs() {
    return b
  }
  get hasError() {
    return x
  }
  get userIds() {
    return N
  }
  get userIdFilter() {
    return M
  }
  get targetIdFilter() {
    return j
  }
  get actionFilter() {
    return v
  }
  get deletedTargets() {
    return U
  }
  get groupedFetchCount() {
    return y
  }
}(r = "displayName") in F ? Object.defineProperty(F, r, {
  value: "GuildSettingsAuditLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : F[r] = "GuildSettingsAuditLogStore";
let w = new F(Chunk73153.h, {
  AUDIT_LOG_FETCH_START: function() {
    C = true
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    y = 0, D = false, C = false, b = true, x = false, O = k(e.logs), m = e.integrations, f = e.webhooks, p = e.guildScheduledEvents, S = null != (t = e.automodRules) ? t : [], G = e.threads, R = e.applicationCommands, e.logs.length < T.$jw && (b = false)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    C = false, x = true, O = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    L = true, t && y++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: n,
      webhooks: l,
      guildScheduledEvents: r,
      automodRules: a,
      threads: i,
      applicationCommands: s
    } = e;
    if (L = false, m = n, f = l, p = r, S = a, G = i, R = s, (0 === t.length || t.length < T.$jw) && (b = false), t.length > 0) {
      let e = k(t);
      O = [...O, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    L = false
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    v = t
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
  GUILD_SETTINGS_SET_SECTION: P,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: n
    } = e;
    return I = t, j = null, P({
      section: n
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    O = [], N = [], v = T.F_X.ALL, M = null, j = null, U = {}, y = 0, D = true, m = [], f = [], p = [], S = [], G = []
  }
})