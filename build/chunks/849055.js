/** Chunk was on web.js **/
/** chunk id: 849055, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
    r = new ArrayBuffer(n.length),
    i = new Uint8Array(r);
  for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
  return r
}

function i(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
require.d(exports, {
  U2: () => S,
  Ue: () => y
});
var o = "copy",
  a = "convert";

function s(e, t, n) {
  if (t === o) return n;
  if (t === a) return e(n);
  if (t instanceof Array) return n.map(n => s(e, t[0], n));
  if (t instanceof Object) {
    let r = {};
    for (let [i, o] of Object.entries(t)) {
      if (o.derive) {
        let e = o.derive(n);
        true !== e && (n[i] = e)
      }
      if (!(i in n)) {
        if (o.required) throw Error(`Missing key: ${i}`);
        continue
      }
      if (null == n[i]) {
        r[i] = null;
        continue
      }
      r[i] = s(e, o.schema, n[i])
    }
    return r
  }
}

function l(e, t) {
  return {
    required: true,
    schema: e,
    derive: t
  }
}

function c(e) {
  return {
    required: true,
    schema: e
  }
}

function u(e) {
  return {
    required: false,
    schema: e
  }
}
var d = {
    type: c(o),
    id: c(a),
    transports: u(o)
  },
  f = {
    appid: u(o),
    appidExclude: u(o),
    credProps: u(o)
  },
  p = {
    appid: u(o),
    appidExclude: u(o),
    credProps: u(o)
  },
  _ = {
    publicKey: c({
      rp: c(o),
      user: c({
        id: c(a),
        name: c(o),
        displayName: c(o)
      }),
      challenge: c(a),
      pubKeyCredParams: c(o),
      timeout: u(o),
      excludeCredentials: u([d]),
      authenticatorSelection: u(o),
      attestation: u(o),
      extensions: u(f)
    }),
    signal: u(o)
  },
  m = {
    type: c(o),
    id: c(o),
    rawId: c(a),
    authenticatorAttachment: u(o),
    response: c({
      clientDataJSON: c(a),
      attestationObject: c(a),
      transports: l(o, e => {
        var t;
        return (null == (t = e.getTransports) ? true : t.call(e)) || []
      })
    }),
    clientExtensionResults: l(p, e => e.getClientExtensionResults())
  },
  h = {
    mediation: u(o),
    publicKey: c({
      challenge: c(a),
      timeout: u(o),
      rpId: u(o),
      allowCredentials: u([d]),
      userVerification: u(o),
      extensions: u(f)
    }),
    signal: u(o)
  },
  g = {
    type: c(o),
    id: c(o),
    rawId: c(a),
    authenticatorAttachment: u(o),
    response: c({
      clientDataJSON: c(a),
      authenticatorData: c(a),
      signature: c(a),
      userHandle: c(a)
    }),
    clientExtensionResults: l(p, e => e.getClientExtensionResults())
  };

function E(e) {
  return s(r, _, e)
}

function b(e) {
  return s(i, m, e)
}
async function y(e) {
  return b(await navigator.credentials.create(E(e)))
}

function O(e) {
  return s(r, h, e)
}

function v(e) {
  return s(i, g, e)
}
async function S(e) {
  return v(await navigator.credentials.get(O(e)))
}