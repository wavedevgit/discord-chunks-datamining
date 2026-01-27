/** Chunk was on web.js **/
/** chunk id: 721768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gf: () => p,
  H2: () => h,
  WL: () => E,
  _y: () => m,
  e0: () => _,
  yL: () => g
}), require("./446912.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk961350 = require("./961350.js"),
  Chunk661191 = require("./661191.js"),
  Chunk166862 = require("./166862.js"),
  Chunk392054 = require("./392054.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  let {
    channelId: t,
    command: n,
    section: r,
    location: a,
    initialValues: s,
    triggerSection: l,
    queryLength: c,
    sectionName: u,
    query: f,
    searchResultsPosition: p,
    source: _,
    commandOrigin: h
  } = e;
  null != n && i()(n.inputType !== d.y$.PLACEHOLDER, "command should not be placeholder"), o.h.dispatch({
    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
    channelId: t,
    command: n,
    section: r,
    initialValues: s,
    location: a,
    triggerSection: l,
    queryLength: c,
    sectionName: u,
    query: f,
    searchResultsPosition: p,
    source: _,
    commandOrigin: h
  })
}

function _(e, t) {
  o.h.dispatch({
    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
    channelId: e,
    commandId: t
  })
}

function h(e, t) {
  o.h.dispatch({
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
  return a.Bo.put({
    body: {
      permissions: r
    },
    url: f.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
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
  null == t.channel || (o.h.dispatch({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
    nonce: _,
    channelId: t.channel.id,
    query: d,
    name: p
  }), null == u.A.getAutocompleteChoices(t.channel.id, p, d) && a.Bo.post({
    url: f.Rsh.INTERACTIONS,
    body: {
      type: s.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
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
    o.h.dispatch({
      type: "INTERACTION_FAILURE",
      nonce: _
    })
  }))
}