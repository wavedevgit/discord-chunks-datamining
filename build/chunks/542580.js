/** Chunk was on web.js **/
/** chunk id: 542580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AL: () => l,
  C8: () => p,
  Jw: () => u,
  Ni: () => _,
  T0: () => c,
  gV: () => d,
  hu: () => f
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk721768 = require("./721768.js"),
  Chunk168186 = require("./168186.js"),
  Chunk652215 = require("./652215.js");

function l() {
  i.h.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
  })
}

function c(e, t, n) {
  i.h.dispatch({
    applicationId: e,
    commandId: t,
    permissions: n,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
  })
}

function u(e, t) {
  r.Bo.get({
    url: o.Rsh.GUILD_COMMANDS_FOR_APPLICATION(e, t),
    rejectWithError: true
  }).then(n => {
    i.h.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
      applicationId: t,
      commands: n.body.application_commands,
      guildId: e,
      permissions: n.body.permissions
    })
  }, () => {
    i.h.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
      applicationId: t
    })
  })
}
async function d(e, t, n) {
  let a = [];
  try {
    let i = await r.Bo.get({
      url: o.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
      rejectWithError: false
    });
    i.ok && (a = i.body.permissions)
  } catch (r) {
    if (404 !== r.status) return void i.h.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
      applicationId: e,
      commandId: n,
      guildId: t
    })
  }
  i.h.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: e,
    commandId: n,
    guildId: t,
    permissions: a
  })
}

function f(e) {
  i.h.dispatch({
    applicationId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
  })
}

function p(e) {
  i.h.dispatch({
    commandId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
  })
}
async function _(e) {
  let {
    applicationId: t,
    commandId: n,
    defaultEveryoneValue: r,
    defaultEverywhereValue: s,
    guildId: o,
    permissions: l
  } = e, c = n === t ? h(o, l, r, s) : l, u = await a.yL(t, o, n, c);
  u.ok && i.h.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: t,
    commandId: n,
    guildId: o,
    permissions: u.body.permissions
  })
}

function h(e, t, n, r) {
  if (!n || !r) return t;
  let i = {
    [e]: n,
    [(0, s.Ap)(e)]: r
  };
  return t.filter(e => {
    let t = i[e.id];
    return null == t || e.permission !== t
  })
}