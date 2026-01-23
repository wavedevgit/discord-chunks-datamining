/** Chunk was on web.js **/
/** chunk id: 449754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk982520 = require("./982520.js"),
  i = require.n(Chunk982520),
  Chunk439372 = require("./439372.js"),
  Chunk400492 = require("./400492.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 100,
  c = .5,
  u = 500,
  d = (0, Chunk400492.Qh)("vibing_wumpus", "vibing_wumpus", 0),
  f = 0,
  p = 0,
  _ = null;

function h(e, t) {
  let n = Math.round(100 * e),
    r = Math.round(100 * p),
    a = Math.round(100 * f);
  n > 0 && a >= r || n < 0 && a <= r ? (clearInterval(_), 0 === r && null != t && t()) : (a += n, f = a / 100, d.volume = i()(f, 0, c))
}

function m(e) {
  null != _ && clearInterval(_), p = 0;
  let t = b();
  _ = setInterval(() => {
    h(t, e)
  }, l)
}

function g() {
  null != _ && clearInterval(_), d.loop(), p = c;
  let e = b();
  _ = setInterval(() => h(e), l)
}

function E() {
  m(d.pause.bind(d))
}

function y() {
  m(d.stop.bind(d))
}

function b() {
  return l / u * (p - f)
}
class O extends Chunk439372.A {
  constructor(...e) {
    super(...e), o(this, "actions", {
      VIBING_WUMPUS_PLAY_MUSIC: g,
      VIBING_WUMPUS_STOP_MUSIC: y,
      VIBING_WUMPUS_PAUSE_MUSIC: E
    })
  }
}
let v = new O