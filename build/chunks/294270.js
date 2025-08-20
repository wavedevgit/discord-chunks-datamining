/** Chunk was on web.js **/
/** chunk id: 294270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk460181 = require("./460181.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk697492 = require("./697492.js"),
  Chunk37091 = require("./37091.js"),
  Chunk721264 = require("./721264.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 15 * Chunk70956.Z.Millis.SECOND,
  h = 15 * Chunk70956.Z.Millis.SECOND,
  m = 550,
  g = ["\uD83C\uDDE9", "\uD83C\uDDF4", "\uD83C\uDDF9", "\uD83C\uDDE6"],
  E = g.length,
  b = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    return "".concat(e, ":").concat(t, ":").concat(n)
  },
  y = new Chunk846519.V7,
  O = [],
  v = {},
  I = (0, Chunk460181.tu)("highfive_whistle", "highfive_whistle", .6),
  T = (0, Chunk460181.tu)("highfive_clap", "highfive_clap", .6);

function S(e) {
  let {
    emoji: t,
    channelId: n,
    userId: r
  } = e, a = l.default.getId(), o = d.Z.getEnabled();
  if (null != t) {
    if (o && (0, f.Z)(t.name)) return C(t.name, r, n);
    r === a && (O = [...O, t.name].slice(false * E), i().isEqual(O, g) ? (I.play(), y.stop(), O = [], (0, u.ME)(!o)) : y.start(p, () => O = []))
  }
}

function A(e) {
  let {
    completingUserId: t,
    waitingUserId: n,
    channelId: r
  } = e, i = b("".concat(t).concat(n), r, true);
  v[i] = new a.sW(m, () => {
    delete v[i], (0, u.hu)(t, n, r)
  }), v[i].delay()
}

function C(e, t, n) {
  var r;
  let i = b(t, n);
  if (null != d.Z.getWaitingHighFive(n, t)) return;
  let [o, s] = null != (r = Object.entries(v).find(e => {
    let [t] = e;
    return t !== i
  })) ? r : [];
  if (null != o && null != s) s.cancel(), T.play(), delete v[o], (0, u.Ym)(o.split(":")[0], t, n, e);
  else {
    (0, u._g)(e, t, n), I.play();
    let r = new a.sW(h, () => {
      delete v[t], (0, u.Gd)(t, n)
    });
    v[t] = r, r.delay()
  }
}
class N extends Chunk147913.Z {
  _terminate() {
    Object.values(v).forEach(e => e.cancel()), v = {}
  }
  constructor(...e) {
    super(...e), _(this, "actions", {
      VOICE_CHANNEL_EFFECT_SEND: S,
      HIGH_FIVE_COMPLETE: A
    })
  }
}
let R = new N