/** Chunk was on 92351 **/
/** chunk id: 460648, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
    r = new ArrayBuffer(n.length),
    o = new Uint8Array(r);
  for (let e = 0; e < n.length; e++) o[e] = n.charCodeAt(e);
  return r
}

function o(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
require.d(exports, {
  Jt: () => m,
  vt: () => y
});
var i = "copy",
  a = "convert";

function c(e, t, n) {
  if (t === i) return n;
  if (t === a) return e(n);
  if (t instanceof Array) return n.map(n => c(e, t[0], n));
  if (t instanceof Object) {
    let r = {};
    for (let [o, i] of Object.entries(t)) {
      if (i.derive) {
        let e = i.derive(n);
        true !== e && (n[o] = e)
      }
      if (!(o in n)) {
        if (i.required) throw Error(`Missing key: ${o}`);
        continue
      }
      if (null == n[o]) {
        r[o] = null;
        continue
      }
      r[o] = c(e, i.schema, n[o])
    }
    return r
  }
}

function u(e, t) {
  return {
    required: true,
    schema: e,
    derive: t
  }
}

function s(e) {
  return {
    required: true,
    schema: e
  }
}

function l(e) {
  return {
    required: false,
    schema: e
  }
}
var f = {
    type: s(i),
    id: s(a),
    transports: l(i)
  },
  d = {
    appid: l(i),
    appidExclude: l(i),
    credProps: l(i)
  },
  p = {
    appid: l(i),
    appidExclude: l(i),
    credProps: l(i)
  },
  h = {
    publicKey: s({
      rp: s(i),
      user: s({
        id: s(a),
        name: s(i),
        displayName: s(i)
      }),
      challenge: s(a),
      pubKeyCredParams: s(i),
      timeout: l(i),
      excludeCredentials: l([f]),
      authenticatorSelection: l(i),
      attestation: l(i),
      extensions: l(d)
    }),
    signal: l(i)
  },
  v = {
    type: s(i),
    id: s(i),
    rawId: s(a),
    authenticatorAttachment: l(i),
    response: s({
      clientDataJSON: s(a),
      attestationObject: s(a),
      transports: u(i, e => {
        var t;
        return (null == (t = e.getTransports) ? true : t.call(e)) || []
      })
    }),
    clientExtensionResults: u(p, e => e.getClientExtensionResults())
  },
  g = {
    mediation: l(i),
    publicKey: s({
      challenge: s(a),
      timeout: l(i),
      rpId: l(i),
      allowCredentials: l([f]),
      userVerification: l(i),
      extensions: l(d)
    }),
    signal: l(i)
  },
  w = {
    type: s(i),
    id: s(i),
    rawId: s(a),
    authenticatorAttachment: l(i),
    response: s({
      clientDataJSON: s(a),
      authenticatorData: s(a),
      signature: s(a),
      userHandle: s(a)
    }),
    clientExtensionResults: u(p, e => e.getClientExtensionResults())
  };
async function y(e) {
  let t = await navigator.credentials.create(c(r, h, e));
  return c(o, v, t)
}
async function m(e) {
  let t = await navigator.credentials.get(c(r, g, e));
  return c(o, w, t)
}