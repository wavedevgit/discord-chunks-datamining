/** Chunk was on 10576 **/
/** chunk id: 987707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
}), require("./583741.js"), require("./539854.js"), require("./388685.js"), require("./290780.js");
var r, l, Chunk392711 = require("./392711.js"),
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
let I = Chunk149765.$e(Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_WEBHOOKS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.MOVE_MEMBERS, Chunk981631.Plq.MUTE_MEMBERS, Chunk981631.Plq.DEAFEN_MEMBERS),
  g = null,
  h = [],
  f = [],
  N = [],
  O = [],
  p = [],
  R = [],
  S = [],
  C = [],
  D = true,
  L = false,
  b = false,
  U = true,
  v = false,
  M = null,
  x = Chunk981631.rsA.ALL,
  P = null,
  j = {},
  y = 0;

function w(e) {
  let t = [],
    n = 0;
  return e.reverse().forEach(e => {
    var r, l, i;
    let s = [],
      o = null,
      u = null,
      E = null;
    if (null != e.reason && s.push(new c.ms(T.zUn.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new c.ms(t.key, t.old_value, t.new_value);
        s.push(e), e.key === T.zUn.NAME ? o = e : e.key === T.zUn.TYPE ? E = e : e.key === T.zUn.TITLE && (u = e)
      }
    if (e.action_type === T.rsA.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        n = new c.ms(T.zUn.PRUNE_DELETE_DAYS, null, t);
      s.push(n)
    }
    e.action_type === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? true : l.auto_moderation_rule_name) != null && s.push(new c.ms(T.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? true : r.status) != null && s.push(new c.ms(T.zUn.STATUS, null, e.options.status));
    let _ = new c.ZP({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: s,
        options: e.options
      }),
      A = t[0];
    if (function(e, t, n) {
        let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 30,
          l = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && a().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < r && n < l && t.targetType !== T.KFR.INVITE && t.action !== T.rsA.MESSAGE_DELETE && t.action !== T.rsA.MESSAGE_BULK_DELETE && t.action !== T.rsA.MESSAGE_PIN && t.action !== T.rsA.MESSAGE_UNPIN && t.action !== T.rsA.MEMBER_MOVE && t.action !== T.rsA.MEMBER_DISCONNECT && t.action !== T.rsA.BOT_ADD && t.action !== T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.rsA.MEMBER_PRUNE
      }(A, _, n)) {
      t[0] = A.merge({
        changes: [...A.changes, ..._.changes],
        timestampEnd: _.timestampStart
      }), n++;
      return
    }
    if (_.actionType === T.vB8.DELETE && (null != o || null != u)) {
      let e = null != (i = null == o ? true : o.oldValue) ? i : null == u ? true : u.oldValue;
      (_.targetType === T.KFR.CHANNEL || _.targetType === T.KFR.CHANNEL_OVERWRITE) && null !== E && (0, d.r8)(E.oldValue) && (e = "#".concat(e)), null == j[_.targetType] ? j[_.targetType] = {
        [_.targetId]: e
      } : j[_.targetType][_.targetId] = e
    }
    n = 0, t.unshift(_)
  }), t
}

function G(e) {
  let {
    section: t
  } = e;
  if (t !== T.pNK.AUDIT_LOG) returnfalse;
  let n = _.ZP.getMembers(g),
    r = m.Z.getGuild(g),
    l = null != g ? A.Z.getUnsafeMutableRoles(g) : true;
  N = a()(n).filter(e => e.roles.some(t => {
    if (null != r) {
      if (e.userId === r.ownerId) returntrue;
      let n = null == l ? true : l[t];
      return null != n && (0, E._N)(n, I)
    }
  })).map(e => e.userId).value()
}
class k extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk485386.Z, Chunk271383.ZP)
  }
  get logs() {
    return h
  }
  get integrations() {
    return f
  }
  get webhooks() {
    return O
  }
  get guildScheduledEvents() {
    return p
  }
  get automodRules() {
    return R
  }
  get threads() {
    return S
  }
  get applicationCommands() {
    return C
  }
  get isInitialLoading() {
    return D
  }
  get isLoading() {
    return L
  }
  get isLoadingNextPage() {
    return b
  }
  get hasOlderLogs() {
    return U
  }
  get hasError() {
    return v
  }
  get userIds() {
    return N
  }
  get userIdFilter() {
    return M
  }
  get targetIdFilter() {
    return P
  }
  get actionFilter() {
    return x
  }
  get deletedTargets() {
    return j
  }
  get groupedFetchCount() {
    return y
  }
}(l = "displayName") in k ? Object.defineProperty(k, l, {
  value: "GuildSettingsAuditLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : k[l] = "GuildSettingsAuditLogStore";
let F = new k(Chunk570140.Z, {
  AUDIT_LOG_FETCH_START: function() {
    L = true
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    y = 0, D = false, L = false, U = true, v = false, h = w(e.logs), f = e.integrations, O = e.webhooks, p = e.guildScheduledEvents, R = null != (t = e.automodRules) ? t : [], S = e.threads, C = e.applicationCommands, e.logs.length < T.Rg9 && (U = false)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    L = false, v = true, h = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    b = true, t && y++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: n,
      webhooks: r,
      guildScheduledEvents: l,
      automodRules: i,
      threads: a,
      applicationCommands: s
    } = e;
    if (b = false, f = n, O = r, p = l, R = i, S = a, C = s, (0 === t.length || t.length < T.Rg9) && (U = false), t.length > 0) {
      let e = w(t);
      h = [...h, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    b = false
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    x = t
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
    P = t
  },
  GUILD_SETTINGS_SET_SECTION: G,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: n
    } = e;
    return g = t, P = null, G({
      section: n
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    h = [], N = [], x = Chunk981631.rsA.ALL, M = null, P = null, j = {}, y = 0, D = true, f = [], O = [], p = [], R = [], S = []
  }
})