/** Chunk was on web.js **/
/** chunk id: 555573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GV: () => E,
  Po: () => p,
  Sg: () => _,
  VP: () => h,
  dh: () => g,
  g7: () => m
}), require("./467055.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk314897 = require("./314897.js"),
  Chunk709054 = require("./709054.js"),
  Chunk174212 = require("./174212.js"),
  Chunk895924 = require("./895924.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    channelId: t,
    command: n,
    section: r,
    location: o,
    initialValues: s,
    triggerSection: l,
    queryLength: c,
    sectionName: u,
    query: f,
    searchResultsPosition: p,
    source: _,
    commandOrigin: m
  } = e;
  null != n && i()(n.inputType !== d.iw.PLACEHOLDER, "command should not be placeholder"), a.Z.dispatch({
    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
    channelId: t,
    command: n,
    section: r,
    initialValues: s,
    location: o,
    triggerSection: l,
    queryLength: c,
    sectionName: u,
    query: f,
    searchResultsPosition: p,
    source: _,
    commandOrigin: m
  })
}

function _(e, t) {
  a.Z.dispatch({
    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
    channelId: e,
    commandId: t
  })
}

function m(e, t) {
  a.Z.dispatch({
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId: e,
    changedOptionStates: t
  })
}

function h(e, t) {
  m(e, Object.fromEntries(Object.entries(t).map(e => {
    let [t, n] = e;
    return [t, {
      lastValidationResult: n
    }]
  })))
}

function g(e, t, n, r) {
  return o.tn.put({
    body: {
      permissions: r
    },
    url: f.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
    rejectWithError: false
  })
}

function E(e, t, n) {
  var r;
  i()(null != t.autocomplete, "Missing autocomplete context");
  let {
    query: d,
    name: p
  } = t.autocomplete, _ = c.default.fromTimestamp(Date.now());
  null != t.channel && (a.Z.dispatch({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
    nonce: _,
    channelId: t.channel.id,
    query: d,
    name: p
  }), null == u.Z.getAutocompleteChoices(t.channel.id, p, d) && o.tn.post({
    url: f.ANM.INTERACTIONS,
    body: {
      type: s.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
      application_id: e.applicationId,
      guild_id: null == (r = t.guild) ? true : r.id,
      channel_id: t.channel.id,
      session_id: l.default.getSessionId(),
      data: n,
      nonce: _
    },
    timeout: 3e3,
    rejectWithError: true
  }).catch(() => {
    a.Z.dispatch({
      type: "INTERACTION_FAILURE",
      nonce: _
    })
  }))
}