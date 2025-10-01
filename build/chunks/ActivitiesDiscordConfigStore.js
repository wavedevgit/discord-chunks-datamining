/** Chunk was on web.js **/
/** chunk id: 887614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk823379 = require("./823379.js"),
  Chunk389147 = require("./389147.js"),
  Chunk225604 = require("./225604.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = Object.create(null);

function d(e) {
  let {
    experimentName: t,
    config: n
  } = e;
  if (t === s.G) {
    u[s.G] = new l.Z(n);
    return
  }(0, o.vE)(t)
}

function f() {
  u = Object.create(null)
}
class _ extends(r = Chunk442837.ZP.Store) {
  getOne(e) {
    if (null != u[e]) return u[e]
  }
}
c(_, "displayName", "ActivitiesDiscordConfigStore");
let p = new _(Chunk570140.Z, {
  ACTIVITIES_DISCORD_CONFIG_FETCH_SUCCESS: d,
  LOGOUT: f
})