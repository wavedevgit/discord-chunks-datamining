/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => O
}), n(47120);
var r = n(729357),
  i = n.n(r),
  o = n(147913),
  a = n(460181);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = 100,
  c = .5,
  u = 500,
  d = (0, a.tu)("vibing_wumpus", "vibing_wumpus", 0),
  f = 0,
  _ = 0,
  p = null;

function h(e, t) {
  let n = Math.round(100 * e),
    r = Math.round(100 * _),
    o = Math.round(100 * f);
  n > 0 && o >= r || n < 0 && o <= r ? (clearInterval(p), 0 === r && null != t && t()) : (o += n, f = o / 100, d.volume = i()(f, 0, c))
}

function g(e) {
  null != p && clearInterval(p), _ = 0;
  let t = b();
  p = setInterval(() => {
    h(t, e)
  }, l)
}

function m() {
  null != p && clearInterval(p), d.loop(), _ = c;
  let e = b();
  p = setInterval(() => h(e), l)
}

function E() {
  g(d.pause.bind(d))
}

function v() {
  g(d.stop.bind(d))
}

function b() {
  return l / u * (_ - f)
}
class y extends o.Z {
  constructor(...e) {
    super(...e), s(this, "actions", {
      VIBING_WUMPUS_PLAY_MUSIC: m,
      VIBING_WUMPUS_STOP_MUSIC: v,
      VIBING_WUMPUS_PAUSE_MUSIC: E
    })
  }
}
let O = new y