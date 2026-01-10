/** Chunk was on 69937 **/
/** chunk id: 480137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OY: () => u,
  ZX: () => d,
  bY: () => c,
  gV: () => _,
  uo: () => E
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk233857 = require("./233857.js"),
  Chunk981631 = require("./981631.js");

function s() {
  return i.Z.isLoading || i.Z.isLoadingNextPage
}

function o(e, t) {
  let n = function(e) {
    let {
      before: t,
      userId: n,
      targetId: r,
      action: l
    } = e, s = null != n ? n : i.Z.userIdFilter, o = null != l ? l : i.Z.actionFilter, c = null != r ? r : i.Z.targetIdFilter, u = {
      limit: a.Rg9
    };
    return null != t && (u.before = t), null != s && (u.user_id = s), null != o && (u.action_type = o), null != c && (u.target_id = c), u
  }(t);
  return r.tn.get({
    url: a.ANM.GUILD_AUDIT_LOG(e),
    query: n,
    oldFormErrors: true,
    rejectWithError: true
  })
}

function c(e, t, n, r) {
  if (!s() && null != e) return l.Z.dispatch({
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
      webhooks: i,
      guild_scheduled_events: a,
      auto_moderation_rules: s,
      threads: o,
      application_commands: c
    } = e.body;
    l.Z.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: n,
      users: r,
      webhooks: i,
      guildScheduledEvents: a,
      automodRules: s,
      threads: o,
      applicationCommands: c
    })
  }, () => l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (!i.Z.hasOlderLogs || s() || null == e) return;
  let n = i.Z.logs,
    r = n[n.length - 1],
    a = null;
  return null != r && (a = r.id), l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: a,
    isGroupedFetch: t
  }), o(e, {
    before: a
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: n,
      users: r,
      webhooks: i,
      guild_scheduled_events: a,
      auto_moderation_rules: s,
      threads: o,
      application_commands: c
    } = e.body;
    l.Z.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: n,
      users: r,
      webhooks: i,
      guildScheduledEvents: a,
      automodRules: s,
      threads: o,
      applicationCommands: c
    })
  }, () => l.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function d(e, t) {
  if (!s() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), c(t, null, null, e)
}

function E(e, t) {
  if (!s() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), c(t, e)
}

function _(e, t) {
  if (!s() && null != t) return l.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), c(t, null, e)
}