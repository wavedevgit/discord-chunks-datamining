/** Chunk was on web.js **/
/** chunk id: 794967, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => p,
  c: () => f
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk611010 = require("./611010.js"),
  Chunk427157 = require("./427157.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function f(e) {
  let t = (await r.Bo.get({
    url: s.Rsh.GUILD_INTEGRATIONS(e),
    query: {
      include_applications: true,
      include_role_connections_metadata: true
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(e => d(c({}, e), {
    application: "application" in e && null != e.application ? a.kJ.createFromServer(e.application) : true,
    user: "user" in e && null != e.user ? new o.A(e.user) : true
  }));
  return i.h.dispatch({
    type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
    guildId: e,
    integrations: t
  }), t
}

function p(e) {
  return r.Bo.get({
    url: s.Rsh.GUILD_WIDGET(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    i.h.dispatch({
      type: "GUILD_SETTINGS_SET_WIDGET",
      enabled: e.body.enabled,
      channelId: e.body.channel_id
    })
  })
}