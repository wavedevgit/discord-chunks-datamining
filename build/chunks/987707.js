/** Chunk was on 57738 **/
n.d(t, {
  Z: () => W
}), n(978209), n(653041), n(47120), n(733860);
var r, l, a, i = n(392711),
  o = n.n(i),
  s = n(149765),
  E = n(442837),
  c = n(570140),
  u = n(387667),
  _ = n(131704),
  d = n(271383),
  A = n(430824),
  T = n(981631);
let N = [T.Plq.KICK_MEMBERS, T.Plq.BAN_MEMBERS, T.Plq.ADMINISTRATOR, T.Plq.MANAGE_CHANNELS, T.Plq.MANAGE_GUILD, T.Plq.MANAGE_MESSAGES, T.Plq.MANAGE_NICKNAMES, T.Plq.MANAGE_ROLES, T.Plq.MANAGE_WEBHOOKS, T.Plq.MANAGE_GUILD_EXPRESSIONS, T.Plq.MOVE_MEMBERS, T.Plq.MUTE_MEMBERS, T.Plq.DEAFEN_MEMBERS],
  I = null,
  O = [],
  g = [],
  R = [],
  f = [],
  S = [],
  p = [],
  U = [],
  D = [],
  L = !0,
  C = !1,
  h = !1,
  m = !0,
  M = !1,
  v = null,
  b = T.rsA.ALL,
  P = null,
  x = {},
  y = 0;

function j(e) {
  let t = [],
    n = 0;
  return e.reverse().forEach(e => {
    var r, l, a;
    let i = [],
      s = null,
      E = null,
      c = null;
    if (null != e.reason && i.push(new u.ms(T.zUn.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new u.ms(t.key, t.old_value, t.new_value);
        i.push(e), e.key === T.zUn.NAME ? s = e : e.key === T.zUn.TYPE ? c = e : e.key === T.zUn.TITLE && (E = e)
      }
    if (e.action_type === T.rsA.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        n = new u.ms(T.zUn.PRUNE_DELETE_DAYS, null, t);
      i.push(n)
    }
    e.action_type === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (l = e.options) || void 0 === l ? void 0 : l.auto_moderation_rule_name) != null && i.push(new u.ms(T.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (r = e.options) || void 0 === r ? void 0 : r.status) != null && i.push(new u.ms(T.zUn.STATUS, null, e.options.status));
    let d = new u.ZP({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: i,
        options: e.options
      }),
      A = t[0];
    if (function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && o().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < r && n < l && t.targetType !== T.KFR.INVITE && t.action !== T.rsA.MESSAGE_DELETE && t.action !== T.rsA.MESSAGE_BULK_DELETE && t.action !== T.rsA.MESSAGE_PIN && t.action !== T.rsA.MESSAGE_UNPIN && t.action !== T.rsA.MEMBER_MOVE && t.action !== T.rsA.MEMBER_DISCONNECT && t.action !== T.rsA.BOT_ADD && t.action !== T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.rsA.MEMBER_PRUNE
      }(A, d, n)) {
      t[0] = A.merge({
        changes: [...A.changes, ...d.changes],
        timestampEnd: d.timestampStart
      }), n++;
      return
    }
    if (d.actionType === T.vB8.DELETE && (null != s || null != E)) {
      let e = null !== (a = null == s ? void 0 : s.oldValue) && void 0 !== a ? a : null == E ? void 0 : E.oldValue;
      (d.targetType === T.KFR.CHANNEL || d.targetType === T.KFR.CHANNEL_OVERWRITE) && null !== c && (0, _.r8)(c.oldValue) && (e = "#".concat(e)), null == x[d.targetType] ? x[d.targetType] = {
        [d.targetId]: e
      } : x[d.targetType][d.targetId] = e
    }
    n = 0, t.unshift(d)
  }), t
}

function G(e) {
  let {
    section: t
  } = e;
  if (t !== T.pNK.AUDIT_LOG) return !1;
  let n = d.ZP.getMembers(I),
    r = A.Z.getGuild(I),
    l = null != I ? A.Z.getRoles(I) : void 0;
  R = o()(n).filter(e => e.roles.some(t => {
    if (null != r) {
      if (e.userId === r.ownerId) return !0;
      let n = null == l ? void 0 : l[t];
      return null != n && N.some(e => s.e$(n.permissions, e))
    }
  })).map(e => e.userId).value()
}
class F extends(r = E.ZP.Store) {
  get logs() {
    return O
  }
  get integrations() {
    return g
  }
  get webhooks() {
    return f
  }
  get guildScheduledEvents() {
    return S
  }
  get automodRules() {
    return p
  }
  get threads() {
    return U
  }
  get applicationCommands() {
    return D
  }
  get isInitialLoading() {
    return L
  }
  get isLoading() {
    return C
  }
  get isLoadingNextPage() {
    return h
  }
  get hasOlderLogs() {
    return m
  }
  get hasError() {
    return M
  }
  get userIds() {
    return R
  }
  get userIdFilter() {
    return v
  }
  get targetIdFilter() {
    return P
  }
  get actionFilter() {
    return b
  }
  get deletedTargets() {
    return x
  }
  get groupedFetchCount() {
    return y
  }
}
a = "GuildSettingsAuditLogStore", (l = "displayName") in F ? Object.defineProperty(F, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : F[l] = a;
let W = new F(c.Z, {
  AUDIT_LOG_FETCH_START: function() {
    C = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    y = 0, L = !1, C = !1, m = !0, M = !1, O = j(e.logs), g = e.integrations, f = e.webhooks, S = e.guildScheduledEvents, p = null !== (t = e.automodRules) && void 0 !== t ? t : [], U = e.threads, D = e.applicationCommands, e.logs.length < T.Rg9 && (m = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    C = !1, M = !0, O = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    h = !0, t && y++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: n,
      webhooks: r,
      guildScheduledEvents: l,
      automodRules: a,
      threads: i,
      applicationCommands: o
    } = e;
    if (h = !1, g = n, f = r, S = l, p = a, U = i, D = o, (0 === t.length || t.length < T.Rg9) && (m = !1), t.length > 0) {
      let e = j(t);
      O = [...O, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    h = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    b = t
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
  GUILD_SETTINGS_SET_SECTION: G,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: n
    } = e;
    return I = t, P = null, G({
      section: n
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    O = [], R = [], b = T.rsA.ALL, v = null, P = null, x = {}, y = 0, L = !0, g = [], f = [], S = [], p = [], U = []
  }
})