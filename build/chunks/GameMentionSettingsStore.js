/** Chunk was on web.js **/
/** chunk id: 893642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk627050 = require("./627050.js"),
  Chunk406763 = require("./406763.js");

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
  o.d.getCurrentConfig({
    location: "GameMentionSettingsStore"
  }).enabled && (0, s.Q)()
}

function f() {
  c = {}
}
class p extends(r = Chunk442837.ZP.Store) {
  getMute(e) {
    return c[e]
  }
}
l(p, "displayName", "GameMentionSettingsStore");
let _ = new p(Chunk570140.Z, {
  REPLACE_GAME_MENTION_SETTINGS: u,
  CONNECTION_OPEN: d,
  LOGOUT: f
})