/** Chunk was on web.js **/
/** chunk id: 990851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk15285 = require("./15285.js"),
  Chunk760751 = require("./760751.js"),
  Chunk667269 = require("./667269.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  var t, n;
  let {
    game: r
  } = e, o = i.Ay.isDetectionEnabled(r), l = null != (t = r.id) ? t : null == (n = a.A.getGameByName(r.name)) ? true : n.id;
  null != l && (0, s.J)(l, o)
}
class c extends Chunk439372.A {
  constructor(...e) {
    super(...e), o(this, "actions", {
      RUNNING_GAME_TOGGLE_DETECTION: l,
      RUNNING_GAME_DELETE_ENTRY: l
    })
  }
}
let u = new c