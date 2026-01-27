/** Chunk was on web.js **/
/** chunk id: 716965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Q: () => h,
  Gq: () => p,
  IN: () => E,
  Kf: () => f,
  Vh: () => m,
  cG: () => g,
  qY: () => _,
  zf: () => y
}), require("./747238.js");
var Chunk323125 = require("./323125.js"),
  Chunk562465 = require("./562465.js"),
  Chunk830215 = require("./830215.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");
let c = "10000",
  u = "10000";

function d() {
  var e, t, n;
  let r = s.A.getChannelId(),
    i = o.A.getBasicChannel(r);
  return {
    guild_id: null != (e = null == i ? true : i.guild_id) ? e : c,
    channel_id: null != (t = null == i ? true : i.id) ? t : u,
    channel_type: null != (n = null == i ? true : i.type) ? n : l.rbe.UNKNOWN
  }
}

function f(e) {
  return i.Bo.post({
    url: l.Rsh.OAUTH2_WHITELIST_ACCEPT,
    query: {
      token: e
    },
    oldFormErrors: true,
    rejectWithError: false
  })
}
async function p(e) {
  let {
    authorize: t,
    clientId: n,
    scopes: r,
    responseType: a,
    redirectUri: o,
    codeChallenge: s,
    codeChallengeMethod: c,
    state: u,
    permissions: f,
    guildId: p,
    channelId: _,
    integrationType: h,
    nonce: m,
    dmSettings: g
  } = e;
  return (await i.Bo.post({
    url: l.Rsh.OAUTH2_AUTHORIZE,
    query: {
      client_id: n,
      response_type: a,
      redirect_uri: o,
      code_challenge: s,
      code_challenge_method: c,
      scope: r.join(" "),
      state: u,
      nonce: m
    },
    body: {
      guild_id: p,
      webhook_channel_id: null != p && null != _ ? _ : true,
      channel_id: null == p && null != _ ? _ : true,
      permissions: f,
      authorize: t,
      integration_type: h,
      location_context: d(),
      dm_settings: {
        allow_mobile_push: null == g ? true : g.allowMobilePush
      }
    },
    oldFormErrors: true,
    rejectWithError: false
  })).body
}
async function _(e) {
  let {
    clientId: t,
    scopes: n,
    responseType: r,
    redirectUri: a,
    codeChallenge: o,
    codeChallengeMethod: s,
    state: c,
    integrationType: u,
    nonce: d,
    signal: f
  } = e;
  return (await i.Bo.get({
    url: l.Rsh.OAUTH2_AUTHORIZE,
    query: {
      client_id: t,
      response_type: r,
      redirect_uri: a,
      code_challenge: o,
      code_challenge_method: s,
      scope: n.join(" "),
      state: c,
      integration_type: u,
      nonce: d
    },
    signal: f,
    retries: 3,
    oldFormErrors: true,
    rejectWithError: false
  })).body
}
async function h(e) {
  let {
    body: t
  } = await i.Bo.get({
    url: l.Rsh.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
    query: {
      guild_id: e
    },
    oldFormErrors: true,
    rejectWithError: false
  });
  return t
}

function m(e, t) {
  a.A.logout(t, (0, r.T2)(e.pathname + e.search, false))
}
async function g(e) {
  return await i.Bo.post({
    url: l.Rsh.OAUTH2_DEVICE_VERIFY,
    body: {
      user_code: e
    },
    rejectWithError: false
  })
}
async function E(e, t) {
  return await i.Bo.post({
    url: l.Rsh.OAUTH2_DEVICE_FINISH,
    body: {
      user_code: e,
      result: t
    },
    rejectWithError: false
  })
}
async function y(e, t, n) {
  return await i.Bo.post({
    url: l.Rsh.OAUTH2_DEVICE_FINISH,
    body: {
      user_code: e,
      result: "two_way_link_error",
      error_code: t,
      error_source: n
    },
    rejectWithError: false
  })
}