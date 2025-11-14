/** Chunk was on web.js **/
/** chunk id: 807675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => d,
  y: () => _
}), require("./539854.js"), require("./704826.js"), require("./35282.js");
var Chunk593473 = require("./593473.js"),
  Chunk243814 = require("./243814.js"),
  Chunk149765 = require("./149765.js"),
  Chunk592125 = require("./592125.js"),
  Chunk914010 = require("./914010.js"),
  Chunk700785 = require("./700785.js"),
  Chunk713938 = require("./713938.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let t = e.filter(e => !c.up.includes(e));
  return t.includes(i.x.BOT) && !t.includes(i.x.APPLICATIONS_COMMANDS) && t.push(i.x.APPLICATIONS_COMMANDS), t
}

function f(e) {
  if (![u.ME, u.I_8, u.o_z].includes(e)) return null != e ? e : true
}

function _(e) {
  var t, n, i, c, u;
  let d = (0, r.parse)(e, {
      arrayFormat: "bracket"
    }),
    _ = l.Hn;
  try {
    _ = a.vB(null != d.permissions && "" !== d.permissions ? d.permissions : "0")
  } catch (e) {}
  let p = d.channel_id,
    h = f(null != (i = null != (n = d.guild_id) ? n : null == (t = o.Z.getChannel(p)) ? true : t.guild_id) ? i : s.Z.getGuildId());
  return {
    clientId: null != (c = d.client_id) ? c : "",
    scopes: (null != (u = d.scope) ? u : "").replace(/\+/g, " ").split(" ").filter(e => e.length > 0),
    responseType: d.response_type,
    redirectUri: d.redirect_uri,
    codeChallenge: d.code_challenge,
    codeChallengeMethod: d.code_challenge_method,
    state: d.state,
    permissions: _,
    channelId: p,
    guildId: h,
    prompt: d.prompt,
    disableGuildSelect: "true" === d.disable_guild_select,
    integrationType: null == d.integration_type ? true : Number(d.integration_type),
    nonce: d.nonce
  }
}