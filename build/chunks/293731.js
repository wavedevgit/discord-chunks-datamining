/** Chunk was on 86142 **/
/** chunk id: 293731, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => o,
  v: () => c
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js"), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./747238.js"), require("./812715.js"), require("./457529.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009);

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function a(e) {
  if (null != e) return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
async function o(e, t) {
  var n;
  let r, o = JSON.parse(e),
    c = PublicKeyCredential.parseRequestOptionsFromJSON(o.publicKey),
    u = l(s({}, o), {
      publicKey: c,
      signal: t
    });
  return r = (n = await navigator.credentials.get(u)).response, i()(r instanceof AuthenticatorAssertionResponse, "WebAuthn: Cannot parse attestation response for assertion"), JSON.stringify({
    authenticatorAttachment: n.authenticatorAttachment,
    clientExtensionResults: n.getClientExtensionResults(),
    id: n.id,
    rawId: a(n.rawId),
    response: {
      authenticatorData: a(r.authenticatorData),
      clientDataJSON: a(r.clientDataJSON),
      signature: a(r.signature),
      userHandle: a(r.userHandle)
    },
    type: n.type
  })
}
async function c(e, t) {
  var n;
  let r, o = JSON.parse(e),
    c = PublicKeyCredential.parseCreationOptionsFromJSON(o.publicKey),
    u = l(s({}, o), {
      publicKey: c,
      signal: t
    });
  return r = (n = await navigator.credentials.create(u)).response, i()(r instanceof AuthenticatorAttestationResponse, "WebAuthn: Cannot parse assertion response for attestation"), JSON.stringify({
    authenticatorAttachment: n.authenticatorAttachment,
    clientExtensionResults: n.getClientExtensionResults(),
    id: n.id,
    rawId: a(n.rawId),
    response: {
      attestationObject: a(r.attestationObject),
      authenticatorData: a(r.getAuthenticatorData()),
      clientDataJSON: a(r.clientDataJSON),
      publicKey: a(r.getPublicKey()),
      publicKeyAlgorithm: r.getPublicKeyAlgorithm(),
      transports: r.getTransports()
    },
    type: n.type
  })
}