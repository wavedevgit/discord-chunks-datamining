/** Chunk was on web.js **/
/** chunk id: 611184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594190 = require("./594190.js"),
  Chunk404577 = require("./404577.js"),
  Chunk454293 = require("./454293.js");

function s(e, t, n) {
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
  } = e, s = i.ZP.isDetectionEnabled(r), l = null != (n = r.id) ? n : null == (t = a.Z.getGameByName(r.name)) ? true : t.id;
  null != l && (0, o.M)(l, s)
}
class c extends Chunk147913.Z {
  constructor(...e) {
    super(...e), s(this, "actions", {
      RUNNING_GAME_TOGGLE_DETECTION: l,
      RUNNING_GAME_DELETE_ENTRY: l
    })
  }
}
let u = new c