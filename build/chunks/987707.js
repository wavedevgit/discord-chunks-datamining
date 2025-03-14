/** Chunk was on 15814 **/
r.d(t, {
  Z: () => U
}), r(978209), r(653041), r(47120), r(733860);
var n, l, i, a = r(392711),
  o = r.n(a),
  s = r(149765),
  h = r(442837),
  c = r(570140),
  v = r(387667),
  u = r(131704),
  d = r(271383),
  E = r(430824),
  f = r(981631);
let p = [f.Plq.KICK_MEMBERS, f.Plq.BAN_MEMBERS, f.Plq.ADMINISTRATOR, f.Plq.MANAGE_CHANNELS, f.Plq.MANAGE_GUILD, f.Plq.MANAGE_MESSAGES, f.Plq.MANAGE_NICKNAMES, f.Plq.MANAGE_ROLES, f.Plq.MANAGE_WEBHOOKS, f.Plq.MANAGE_GUILD_EXPRESSIONS, f.Plq.MOVE_MEMBERS, f.Plq.MUTE_MEMBERS, f.Plq.DEAFEN_MEMBERS],
  M = null,
  _ = [],
  O = [],
  g = [],
  b = [],
  A = [],
  T = [],
  Z = [],
  N = [],
  H = !0,
  y = !1,
  j = !1,
  I = !0,
  m = !1,
  V = null,
  S = f.rsA.ALL,
  R = null,
  D = {},
  C = 0;

function x(e) {
  let t = [],
    r = 0;
  return e.reverse().forEach(e => {
    var n, l, i;
    let a = [],
      s = null,
      h = null,
      c = null;
    if (null != e.reason && a.push(new v.ms(f.zUn.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new v.ms(t.key, t.old_value, t.new_value);
        a.push(e), e.key === f.zUn.NAME ? s = e : e.key === f.zUn.TYPE ? c = e : e.key === f.zUn.TITLE && (h = e)
      }
    if (e.action_type === f.rsA.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        r = new v.ms(f.zUn.PRUNE_DELETE_DAYS, null, t);
      a.push(r)
    }
    e.action_type === f.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (l = e.options) || void 0 === l ? void 0 : l.auto_moderation_rule_name) != null && a.push(new v.ms(f.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === f.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (n = e.options) || void 0 === n ? void 0 : n.status) != null && a.push(new v.ms(f.zUn.STATUS, null, e.options.status));
    let d = new v.ZP({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: a,
        options: e.options
      }),
      E = t[0];
    if (function(e, t, r) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && o().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < n && r < l && t.targetType !== f.KFR.INVITE && t.action !== f.rsA.MESSAGE_DELETE && t.action !== f.rsA.MESSAGE_BULK_DELETE && t.action !== f.rsA.MESSAGE_PIN && t.action !== f.rsA.MESSAGE_UNPIN && t.action !== f.rsA.MEMBER_MOVE && t.action !== f.rsA.MEMBER_DISCONNECT && t.action !== f.rsA.BOT_ADD && t.action !== f.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== f.rsA.MEMBER_PRUNE
      }(E, d, r)) {
      t[0] = E.merge({
        changes: [...E.changes, ...d.changes],
        timestampEnd: d.timestampStart
      }), r++;
      return
    }
    if (d.actionType === f.vB8.DELETE && (null != s || null != h)) {
      let e = null !== (i = null == s ? void 0 : s.oldValue) && void 0 !== i ? i : null == h ? void 0 : h.oldValue;
      (d.targetType === f.KFR.CHANNEL || d.targetType === f.KFR.CHANNEL_OVERWRITE) && null !== c && (0, u.r8)(c.oldValue) && (e = "#".concat(e)), null == D[d.targetType] ? D[d.targetType] = {
        [d.targetId]: e
      } : D[d.targetType][d.targetId] = e
    }
    r = 0, t.unshift(d)
  }), t
}

function L(e) {
  let {
    section: t
  } = e;
  if (t !== f.pNK.AUDIT_LOG) return !1;
  let r = d.ZP.getMembers(M),
    n = E.Z.getGuild(M),
    l = null != M ? E.Z.getRoles(M) : void 0;
  g = o()(r).filter(e => e.roles.some(t => {
    if (null != n) {
      if (e.userId === n.ownerId) return !0;
      let r = null == l ? void 0 : l[t];
      return null != r && p.some(e => s.e$(r.permissions, e))
    }
  })).map(e => e.userId).value()
}
class P extends(n = h.ZP.Store) {
  get logs() {
    return _
  }
  get integrations() {
    return O
  }
  get webhooks() {
    return b
  }
  get guildScheduledEvents() {
    return A
  }
  get automodRules() {
    return T
  }
  get threads() {
    return Z
  }
  get applicationCommands() {
    return N
  }
  get isInitialLoading() {
    return H
  }
  get isLoading() {
    return y
  }
  get isLoadingNextPage() {
    return j
  }
  get hasOlderLogs() {
    return I
  }
  get hasError() {
    return m
  }
  get userIds() {
    return g
  }
  get userIdFilter() {
    return V
  }
  get targetIdFilter() {
    return R
  }
  get actionFilter() {
    return S
  }
  get deletedTargets() {
    return D
  }
  get groupedFetchCount() {
    return C
  }
}
i = "GuildSettingsAuditLogStore", (l = "displayName") in P ? Object.defineProperty(P, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : P[l] = i;
let U = new P(c.Z, {
  AUDIT_LOG_FETCH_START: function() {
    y = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    C = 0, H = !1, y = !1, I = !0, m = !1, _ = x(e.logs), O = e.integrations, b = e.webhooks, A = e.guildScheduledEvents, T = null !== (t = e.automodRules) && void 0 !== t ? t : [], Z = e.threads, N = e.applicationCommands, e.logs.length < f.Rg9 && (I = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    y = !1, m = !0, _ = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    j = !0, t && C++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: r,
      webhooks: n,
      guildScheduledEvents: l,
      automodRules: i,
      threads: a,
      applicationCommands: o
    } = e;
    if (j = !1, O = r, b = n, A = l, T = i, Z = a, N = o, (0 === t.length || t.length < f.Rg9) && (I = !1), t.length > 0) {
      let e = x(t);
      _ = [..._, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    j = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    S = t
  },
  AUDIT_LOG_FILTER_BY_USER: function(e) {
    let {
      userId: t
    } = e;
    V = t
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(e) {
    let {
      targetId: t
    } = e;
    R = t
  },
  GUILD_SETTINGS_SET_SECTION: L,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: r
    } = e;
    return M = t, R = null, L({
      section: r
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    _ = [], g = [], S = f.rsA.ALL, V = null, R = null, D = {}, C = 0, H = !0, O = [], b = [], A = [], T = [], Z = []
  }
})