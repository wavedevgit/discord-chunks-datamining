/** Chunk was on 86142 **/
/** chunk id: 337905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Fs: () => o,
  Jn: () => a,
  S4: () => p,
  T8: () => l,
  lU: () => g,
  n7: () => f
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./21862.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk427157 = require("./427157.js");

function l() {
  return window.crypto.subtle.generateKey({
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256"
  }, true, ["decrypt"])
}
async function a(e) {
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
async function p(e, t) {
  let n = new TextDecoder,
    r = await h(e, u(t));
  return n.decode(r)
}
async function g(e, t) {
  return c(await h(e, u(t)))
}
async function f(e, t) {
  let n = (t = await p(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
  if (null == n) throw Error("Invalid encoded user record.");
  let [, r, i, l, a] = n;
  return new s.A({
    id: r,
    discriminator: i,
    avatar: "0" === l ? null : l,
    username: a
  })
}