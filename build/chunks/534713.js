/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => i
}), n(301563);
var r = n(69580);

function i(e) {
  var t, n, i, o;
  let a = null == e ? void 0 : e.get("client_id"),
    s = null == e ? void 0 : null === (t = e.get("scope")) || void 0 === t ? void 0 : t.split(" "),
    l = null == e ? void 0 : e.get("state"),
    c = null == e ? void 0 : e.get("redirect_uri"),
    u = null == e ? void 0 : e.get("response_type"),
    d = null !== (n = null == e ? void 0 : e.get("nonce")) && void 0 !== n ? n : void 0,
    f = null !== (i = null == e ? void 0 : e.get("code_challenge")) && void 0 !== i ? i : void 0,
    _ = null !== (o = null == e ? void 0 : e.get("code_challenge_method")) && void 0 !== o ? o : void 0;
  return null == a || null == s || null == c || null == u || ((0, r.openOAuth2Modal)({
    clientId: a,
    scopes: s,
    redirectUri: c,
    state: null != l ? l : void 0,
    responseType: u,
    nonce: d,
    codeChallenge: f,
    codeChallengeMethod: _
  }), !0)
}