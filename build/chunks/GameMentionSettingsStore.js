/** Chunk was on web.js **/
/** chunk id: 495756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk352505 = require("./352505.js"),
  Chunk894010 = require("./894010.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {};

function u(e) {
  let {
    settings: t
  } = e;
  c = t
}

function d() {
  o.m.getCurrentConfig({
    location: "GameMentionSettingsStore"
  }).enabled && (0, s.G)()
}

function f() {
  c = {}
}
class p extends(r = Chunk311907.Ay.Store) {
  getMute(e) {
    return c[e]
  }
}
l(p, "displayName", "GameMentionSettingsStore");
let _ = new p(Chunk73153.h, {
  REPLACE_GAME_MENTION_SETTINGS: u,
  CONNECTION_OPEN: d,
  LOGOUT: f
})