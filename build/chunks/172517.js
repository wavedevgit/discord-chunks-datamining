/** Chunk was on 27978 **/
/** chunk id: 172517, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  FW: () => f,
  Pk: () => o,
  Rq: () => m,
  W_: () => a,
  dK: () => l,
  qd: () => g
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./608445.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk598077 = require("./598077.js");

function a() {
  return window.crypto.subtle.generateKey({
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256"
  }, true, ["decrypt"])
}
async function l(e) {
  return i()(null != e.publicKey, "public key cannot be null"), btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
}
async function o(e) {
  return i()(null != e.publicKey, "public key cannot be null"), d(await window.crypto.subtle.exportKey("spki", e.publicKey))
}

function c(e) {
  return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
}

function u(e) {
  return Uint8Array.from(atob(e), e => e.charCodeAt(0))
}
async function d(e) {
  return c(await window.crypto.subtle.digest({
    name: "SHA-256"
  }, e))
}

function h(e, t) {
  return i()(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
    name: "RSA-OAEP",
    hash: "SHA-256"
  }, e.privateKey, t)
}
async function f(e, t) {
  let n = new TextDecoder,
    r = await h(e, u(t));
  return n.decode(r)
}
async function g(e, t) {
  return c(await h(e, u(t)))
}
async function m(e, t) {
  let n = (t = await f(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
  if (null == n) throw Error("Invalid encoded user record.");
  let [, r, i, a, l] = n;
  return new s.Z({
    id: r,
    discriminator: i,
    avatar: "0" === a ? null : a,
    username: l
  })
}