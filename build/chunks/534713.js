/** Chunk was on web.js **/
/** chunk id: 534713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./35282.js");
var Chunk69580 = require("./69580.jsx");

function i(e) {
  var t, n, i, o;
  let a = null == e ? true : e.get("client_id"),
    s = null == e || null == (t = e.get("scope")) ? true : t.split(" "),
    l = null == e ? true : e.get("state"),
    c = null == e ? true : e.get("redirect_uri"),
    u = null == e ? true : e.get("response_type"),
    d = null != (n = null == e ? true : e.get("nonce")) ? n : true,
    f = null != (i = null == e ? true : e.get("code_challenge")) ? i : true,
    p = null != (o = null == e ? true : e.get("code_challenge_method")) ? o : true;
  return null == a || null == s || null == c || null == u || ((0, r.openOAuth2Modal)({
    clientId: a,
    scopes: s,
    redirectUri: c,
    state: null != l ? l : true,
    responseType: u,
    nonce: d,
    codeChallenge: f,
    codeChallengeMethod: p
  }), true)
}