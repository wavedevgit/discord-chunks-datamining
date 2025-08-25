/** Chunk was on web.js **/
/** chunk id: 555573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GV: () => E,
  Po: () => _,
  Sg: () => p,
  VP: () => m,
  dh: () => g,
  g7: () => h
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

function _(e) {
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
    searchResultsPosition: _,
    source: p,
    commandOrigin: h
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
    searchResultsPosition: _,
    source: p,
    commandOrigin: h
  })
}

function p(e, t) {
  a.Z.dispatch({
    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
    channelId: e,
    commandId: t
  })
}

function h(e, t) {
  a.Z.dispatch({
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId: e,
    changedOptionStates: t
  })
}

function m(e, t) {
  h(e, Object.fromEntries(Object.entries(t).map(e => {
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
    name: _
  } = t.autocomplete, p = c.default.fromTimestamp(Date.now());
  null != t.channel && (a.Z.dispatch({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
    nonce: p,
    channelId: t.channel.id,
    query: d,
    name: _
  }), null == u.Z.getAutocompleteChoices(t.channel.id, _, d) && o.tn.post({
    url: f.ANM.INTERACTIONS,
    body: {
      type: s.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
      application_id: e.applicationId,
      guild_id: null == (r = t.guild) ? true : r.id,
      channel_id: t.channel.id,
      session_id: l.default.getSessionId(),
      data: n,
      nonce: p
    },
    timeout: 3e3,
    rejectWithError: true
  }).catch(() => {
    a.Z.dispatch({
      type: "INTERACTION_FAILURE",
      nonce: p
    })
  }))
}