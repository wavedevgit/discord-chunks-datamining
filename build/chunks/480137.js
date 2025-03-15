/** Chunk was on 17573 **/
r.d(t, {
  OY: () => c,
  ZX: () => v,
  bY: () => h,
  gV: () => d,
  uo: () => u
});
var n = r(544891),
  l = r(570140),
  i = r(987707),
  a = r(981631);

function o() {
  return i.Z.isLoading || i.Z.isLoadingNextPage
}

function s(e, t) {
  let r = function(e) {
    let {
      before: t,
      userId: r,
      targetId: n,
      action: l
    } = e, o = null != r ? r : i.Z.userIdFilter, s = null != l ? l : i.Z.actionFilter, h = null != n ? n : i.Z.targetIdFilter, c = {
      limit: a.Rg9
    };
    return null != t && (c.before = t), null != o && (c.user_id = o), null != s && (c.action_type = s), null != h && (c.target_id = h), c
  }(t);
  return n.tn.get({
    url: a.ANM.GUILD_AUDIT_LOG(e),
    query: r,
    oldFormErrors: !0,
    rejectWithError: !0
  })
}

function h(e, t, r, n) {
  if (!o() && null != e) return l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), s(e, {
    userId: t,
    action: n,
    targetId: r
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: r,
      users: n,
      webhooks: i,
      guild_scheduled_events: a,
      auto_moderation_rules: o,
      threads: s,
      application_commands: h
    } = e.body;
    l.Z.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: r,
      users: n,
      webhooks: i,
      guildScheduledEvents: a,
      automodRules: o,
      threads: s,
      applicationCommands: h
    })
  }, () => l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!i.Z.hasOlderLogs || o() || null == e) return;
  let r = i.Z.logs,
    n = r[r.length - 1],
    a = null;
  return null != n && (a = n.id), l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: a,
    isGroupedFetch: t
  }), s(e, {
    before: a
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: r,
      users: n,
      webhooks: i,
      guild_scheduled_events: a,
      auto_moderation_rules: o,
      threads: s,
      application_commands: h
    } = e.body;
    l.Z.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: r,
      users: n,
      webhooks: i,
      guildScheduledEvents: a,
      automodRules: o,
      threads: s,
      applicationCommands: h
    })
  }, () => l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function v(e, t) {
  if (!o() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), h(t, null, null, e)
}

function u(e, t) {
  if (!o() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), h(t, e)
}

function d(e, t) {
  if (!o() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), h(t, null, e)
}