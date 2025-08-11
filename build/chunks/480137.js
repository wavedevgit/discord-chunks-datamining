/** Chunk was on 12097 **/
/** chunk id: 480137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OY: () => c,
  ZX: () => E,
  bY: () => u,
  gV: () => _,
  uo: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk987707 = require("./987707.js"),
  Chunk981631 = require("./981631.js");

function a() {
  return Chunk987707.Z.isLoading || Chunk987707.Z.isLoadingNextPage
}

function o(e, t) {
  let n = function(e) {
    let {
      before: t,
      userId: n,
      targetId: r,
      action: l
    } = e, a = null != n ? n : s.Z.userIdFilter, o = null != l ? l : s.Z.actionFilter, u = null != r ? r : s.Z.targetIdFilter, c = {
      limit: i.Rg9
    };
    return null != t && (c.before = t), null != a && (c.user_id = a), null != o && (c.action_type = o), null != u && (c.target_id = u), c
  }(t);
  return r.tn.get({
    url: i.ANM.GUILD_AUDIT_LOG(e),
    query: n,
    oldFormErrors: true,
    rejectWithError: true
  })
}

function u(e, t, n, r) {
  if (!a() && null != e) return l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), o(e, {
    userId: t,
    action: r,
    targetId: n
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: n,
      users: r,
      webhooks: s,
      guild_scheduled_events: i,
      auto_moderation_rules: a,
      threads: o,
      application_commands: u
    } = e.body;
    l.Z.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: n,
      users: r,
      webhooks: s,
      guildScheduledEvents: i,
      automodRules: a,
      threads: o,
      applicationCommands: u
    })
  }, () => l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (!s.Z.hasOlderLogs || a() || null == e) return;
  let n = s.Z.logs,
    r = n[n.length - 1],
    i = null;
  return null != r && (i = r.id), l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: i,
    isGroupedFetch: t
  }), o(e, {
    before: i
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: n,
      users: r,
      webhooks: s,
      guild_scheduled_events: i,
      auto_moderation_rules: a,
      threads: o,
      application_commands: u
    } = e.body;
    l.Z.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: n,
      users: r,
      webhooks: s,
      guildScheduledEvents: i,
      automodRules: a,
      threads: o,
      applicationCommands: u
    })
  }, () => l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function E(e, t) {
  if (!a() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), u(t, null, null, e)
}

function d(e, t) {
  if (!a() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), u(t, e)
}

function _(e, t) {
  if (!a() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), u(t, null, e)
}