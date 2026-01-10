/** Chunk was on 69937 **/
/** chunk id: 233857, original params: e,t,n (module,exports,require) **/
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
let g = Chunk149765.$e(Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_WEBHOOKS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.MOVE_MEMBERS, Chunk981631.Plq.MUTE_MEMBERS, Chunk981631.Plq.DEAFEN_MEMBERS),
  I = null,
  m = [],
  h = [],
  N = [],
  O = [],
  p = [],
  R = [],
  S = [],
  C = [],
  b = true,
  D = false,
  L = false,
  U = true,
  M = false,
  v = null,
  x = Chunk981631.rsA.ALL,
  P = null,
  j = {},
  y = 0;

function G(e) {
  let t = [],
    n = 0;
  return e.reverse().forEach(e => {
    var r, l, i;
    let s = [],
      o = null,
      c = null,
      E = null;
    if (null != e.reason && s.push(new u.ms(T.zUn.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new u.ms(t.key, t.old_value, t.new_value);
        s.push(e), e.key === T.zUn.NAME ? o = e : e.key === T.zUn.TYPE ? E = e : e.key === T.zUn.TITLE && (c = e)
      }
    if (e.action_type === T.rsA.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        n = new u.ms(T.zUn.PRUNE_DELETE_DAYS, null, t);
      s.push(n)
    }
    e.action_type === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? true : l.auto_moderation_rule_name) != null && s.push(new u.ms(T.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? true : r.status) != null && s.push(new u.ms(T.zUn.STATUS, null, e.options.status));
    let _ = new u.ZP({
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
    if (_.actionType === T.vB8.DELETE && (null != o || null != c)) {
      let e = null != (i = null == o ? true : o.oldValue) ? i : null == c ? true : c.oldValue;
      (_.targetType === T.KFR.CHANNEL || _.targetType === T.KFR.CHANNEL_OVERWRITE) && null !== E && (0, d.r8)(E.oldValue) && (e = "#".concat(e)), null == j[_.targetType] ? j[_.targetType] = {
        [_.targetId]: e
      } : j[_.targetType][_.targetId] = e
    }
    n = 0, t.unshift(_)
  }), t
}

function k(e) {
  let {
    section: t
  } = e;
  if (t !== T.pNK.AUDIT_LOG) returnfalse;
  let n = _.ZP.getMembers(I),
    r = f.Z.getGuild(I),
    l = null != I ? A.Z.getUnsafeMutableRoles(I) : true;
  N = a()(n).filter(e => e.roles.some(t => {
    if (null != r) {
      if (e.userId === r.ownerId) returntrue;
      let n = null == l ? true : l[t];
      return null != n && (0, E._N)(n, g)
    }
  })).map(e => e.userId).value()
}
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(f.Z, A.Z, _.ZP)
  }
  get logs() {
    return m
  }
  get integrations() {
    return h
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
    return b
  }
  get isLoading() {
    return D
  }
  get isLoadingNextPage() {
    return L
  }
  get hasOlderLogs() {
    return U
  }
  get hasError() {
    return M
  }
  get userIds() {
    return N
  }
  get userIdFilter() {
    return v
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
}(l = "displayName") in w ? Object.defineProperty(w, l, {
  value: "GuildSettingsAuditLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : w[l] = "GuildSettingsAuditLogStore";
let F = new w(Chunk570140.Z, {
  AUDIT_LOG_FETCH_START: function() {
    D = true
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    y = 0, b = false, D = false, U = true, M = false, m = G(e.logs), h = e.integrations, O = e.webhooks, p = e.guildScheduledEvents, R = null != (t = e.automodRules) ? t : [], S = e.threads, C = e.applicationCommands, e.logs.length < T.Rg9 && (U = false)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    D = false, M = true, m = []
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
      webhooks: r,
      guildScheduledEvents: l,
      automodRules: i,
      threads: a,
      applicationCommands: s
    } = e;
    if (L = false, h = n, O = r, p = l, R = i, S = a, C = s, (0 === t.length || t.length < T.Rg9) && (U = false), t.length > 0) {
      let e = G(t);
      m = [...m, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    L = false
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
    v = t
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(e) {
    let {
      targetId: t
    } = e;
    P = t
  },
  GUILD_SETTINGS_SET_SECTION: k,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: n
    } = e;
    return I = t, P = null, k({
      section: n
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    m = [], N = [], x = T.rsA.ALL, v = null, P = null, j = {}, y = 0, b = true, h = [], O = [], p = [], R = [], S = []
  }
})