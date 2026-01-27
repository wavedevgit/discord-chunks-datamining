/** Chunk was on web.js **/
/** chunk id: 123677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => p,
  e: () => d
}), require("./321073.js"), require("./747238.js"), require("./812715.js");
var Chunk492462 = require("./492462.js"),
  Chunk179771 = require("./179771.js"),
  Chunk136722 = require("./136722.js"),
  Chunk734057 = require("./734057.js"),
  Chunk967198 = require("./967198.js"),
  Chunk488926 = require("./488926.js"),
  Chunk647053 = require("./647053.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let t = e.filter(e => !c.A8.includes(e));
  return t.includes(i.F.BOT) && !t.includes(i.F.APPLICATIONS_COMMANDS) && t.push(i.F.APPLICATIONS_COMMANDS), t
}

function f(e) {
  if (![u.ME, u.YYv, u.c$g].includes(e)) return null != e ? e : true
}

function p(e) {
  var t, n, i, c, u;
  let d = (0, r.parse)(e, {
      arrayFormat: "bracket"
    }),
    p = l.x3;
  try {
    p = a.iu(null != d.permissions && "" !== d.permissions ? d.permissions : "0")
  } catch (e) {}
  let _ = d.channel_id,
    h = f(null != (t = null != (n = d.guild_id) ? n : null == (u = o.A.getChannel(_)) ? true : u.guild_id) ? t : s.A.getGuildId());
  return {
    clientId: null != (i = d.client_id) ? i : "",
    scopes: (null != (c = d.scope) ? c : "").replace(/\+/g, " ").split(" ").filter(e => e.length > 0),
    responseType: d.response_type,
    redirectUri: d.redirect_uri,
    codeChallenge: d.code_challenge,
    codeChallengeMethod: d.code_challenge_method,
    state: d.state,
    permissions: p,
    channelId: _,
    guildId: h,
    prompt: d.prompt,
    disableGuildSelect: "true" === d.disable_guild_select,
    integrationType: null == d.integration_type ? true : Number(d.integration_type),
    nonce: d.nonce
  }
}