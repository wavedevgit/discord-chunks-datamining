/** Chunk was on web.js **/
/** chunk id: 330010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => p,
  i: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk973616 = require("./973616.js"),
  Chunk598077 = require("./598077.js"),
  Chunk981631 = require("./981631.js");

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
  let t = (await r.tn.get({
    url: s.ANM.GUILD_INTEGRATIONS(e),
    query: {
      include_applications: true,
      include_role_connections_metadata: true
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(e => d(c({}, e), {
    application: "application" in e && null != e.application ? o.ZN.createFromServer(e.application) : true,
    user: "user" in e && null != e.user ? new a.Z(e.user) : true
  }));
  return i.Z.dispatch({
    type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
    guildId: e,
    integrations: t
  }), t
}

function p(e) {
  return r.tn.get({
    url: s.ANM.GUILD_WIDGET(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    i.Z.dispatch({
      type: "GUILD_SETTINGS_SET_WIDGET",
      enabled: e.body.enabled,
      channelId: e.body.channel_id
    })
  })
}