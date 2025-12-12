/** Chunk was on web.js **/
/** chunk id: 489863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Iq: () => p,
  UR: () => m,
  Ww: () => _,
  c$: () => h,
  g: () => f,
  i2: () => b,
  tR: () => E,
  tV: () => g
}), require("./35282.js");
var Chunk860911 = require("./860911.js"),
  Chunk544891 = require("./544891.js"),
  Chunk893776 = require("./893776.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");
let c = "10000",
  u = "10000";

function d() {
  var e, t, n;
  let r = Chunk944486.Z.getChannelId(),
    i = Chunk592125.Z.getBasicChannel(Chunk860911);
  return {
    guild_id: null != (e = null == Chunk544891 ? true : Chunk544891.guild_id) ? module : c,
    channel_id: null != (t = null == Chunk544891 ? true : Chunk544891.id) ? exports : u,
    channel_type: null != (n = null == Chunk544891 ? true : Chunk544891.type) ? require : Chunk981631.d4z.UNKNOWN
  }
}

function f(e) {
  return i.tn.post({
    url: l.ANM.OAUTH2_WHITELIST_ACCEPT,
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
    integrationType: m,
    nonce: h,
    dmSettings: g
  } = e;
  return (await i.tn.post({
    url: l.ANM.OAUTH2_AUTHORIZE,
    query: {
      client_id: n,
      response_type: a,
      redirect_uri: o,
      code_challenge: s,
      code_challenge_method: c,
      scope: r.join(" "),
      state: u,
      nonce: h
    },
    body: {
      guild_id: p,
      webhook_channel_id: null != p && null != _ ? _ : true,
      channel_id: null == p && null != _ ? _ : true,
      permissions: f,
      authorize: t,
      integration_type: m,
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
  return (await i.tn.get({
    url: l.ANM.OAUTH2_AUTHORIZE,
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
async function m(e) {
  let {
    body: t
  } = await i.tn.get({
    url: l.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
    query: {
      guild_id: e
    },
    oldFormErrors: true,
    rejectWithError: false
  });
  return t
}

function h(e, t) {
  a.Z.logout(t, (0, r.Ui)(e.pathname + e.search, false))
}
async function g(e) {
  return await i.tn.post({
    url: l.ANM.OAUTH2_DEVICE_VERIFY,
    body: {
      user_code: e
    },
    rejectWithError: false
  })
}
async function E(e, t) {
  return await i.tn.post({
    url: l.ANM.OAUTH2_DEVICE_FINISH,
    body: {
      user_code: e,
      result: t
    },
    rejectWithError: false
  })
}
async function b(e, t, n) {
  return await i.tn.post({
    url: l.ANM.OAUTH2_DEVICE_FINISH,
    body: {
      user_code: e,
      result: "two_way_link_error",
      error_code: t,
      error_source: n
    },
    rejectWithError: false
  })
}