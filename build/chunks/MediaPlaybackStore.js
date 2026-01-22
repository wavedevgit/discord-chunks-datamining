/** Chunk was on web.js **/
/** chunk id: 713021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => A,
  dx: () => h,
  k0: () => _
});
var r, Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var _ = function(e) {
  return e.VOICE_MESSAGE = "voice_message", e
}({});
let h = (e, t) => "".concat(e, "-").concat(t),
  m = 25,
  g = {
    rates: {
      voice_message: 1
    },
    positions: new(a())({
      max: m
    })
  },
  E = c({}, g);

function b(e) {
  let {
    rate: t,
    playbackType: n
  } = e;
  E = d(c({}, E), {
    rates: d(c({}, E.rates), {
      [n]: t
    })
  })
}

function y(e) {
  let {
    cacheKey: t,
    position: n,
    duration: r
  } = e;
  n > .5 && n < .95 * r ? E.positions.set(t, n) : E.positions.del(t)
}
class O extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    let t = null != e ? e : {},
      {
        positions: n
      } = t;
    E = c({}, g, f(t, ["positions"])), null != n && E.positions.load(n)
  }
  getUserAgnosticState() {
    return {
      rates: E.rates,
      positions: E.positions.dump()
    }
  }
  getPlaybackRate(e) {
    var t;
    return null != (t = E.rates[e]) ? t : 1
  }
  getPlaybackPosition(e) {
    var t;
    return null != (t = E.positions.get(e)) ? t : 0
  }
}
l(O, "displayName", "MediaPlaybackStore"), l(O, "persistKey", "MediaPlaybackStore");
let A = new O(Chunk73153.h, {
  MEDIA_PLAYBACK_RATE_UPDATE: b,
  MEDIA_PLAYBACK_POSITION_UPDATE: y
})