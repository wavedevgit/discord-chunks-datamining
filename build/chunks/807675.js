/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  K: () => u,
  y: () => d
}), n(653041), n(301563);
var r = n(593473),
  i = n(243814),
  o = n(149765),
  a = n(592125),
  s = n(914010),
  l = n(700785),
  c = n(713938);

function u(e) {
  let t = e.filter(e => !c.up.includes(e));
  return t.includes(i.x.BOT) && !t.includes(i.x.APPLICATIONS_COMMANDS) && t.push(i.x.APPLICATIONS_COMMANDS), t
}

function d(e) {
  var t, n, i, c, u, d;
  let f = (0, r.parse)(e, {
      arrayFormat: "bracket"
    }),
    p = l.Hn;
  try {
    p = o.vB(null != f.permissions && "" !== f.permissions ? f.permissions : "0")
  } catch (e) {}
  let _ = f.channel_id,
    h = null !== (c = null !== (i = null !== (n = f.guild_id) && void 0 !== n ? n : null === (t = a.Z.getChannel(_)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== i ? i : s.Z.getGuildId()) && void 0 !== c ? c : void 0;
  return {
    clientId: null !== (u = f.client_id) && void 0 !== u ? u : "",
    scopes: (null !== (d = f.scope) && void 0 !== d ? d : "").split(" ").filter(e => e.length > 0),
    responseType: f.response_type,
    redirectUri: f.redirect_uri,
    codeChallenge: f.code_challenge,
    codeChallengeMethod: f.code_challenge_method,
    state: f.state,
    permissions: p,
    channelId: _,
    guildId: h,
    prompt: f.prompt,
    disableGuildSelect: "true" === f.disable_guild_select,
    integrationType: null == f.integration_type ? void 0 : Number(f.integration_type),
    nonce: f.nonce
  }
}