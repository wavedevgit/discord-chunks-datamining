/** Chunk was on web.js **/
/** chunk id: 25251, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => A
});
var i, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = [],
  d = {},
  f = u,
  _ = d,
  p = null,
  h = Chunk70956.Z.Millis.MINUTE,
  m = Chunk70956.Z.Millis.HOUR,
  g = false,
  E = 0,
  b = 0,
  y = e => {
    g = true
  },
  O = e => {
    let {
      presets: t
    } = e;
    0 === t.length ? (f = u, _ = d) : (f = (0, a.cloneDeep)(t), _ = (0, a.keyBy)(f, "id")), E = 1 / 0, b = 0, r = true, g = false
  },
  v = e => {
    let {
      error: t
    } = e;
    f = u, _ = d, E = Date.now() + Math.min(h * 2 ** b, m), b += 1, r = t, g = false
  },
  I = e => {
    let {
      id: t
    } = e;
    p = t
  },
  T = e => {
    f = u, _ = d, p = null, g = false, r = true, E = 0, b = 0
  };
class S extends(i = Chunk442837.ZP.Store) {
  get isFetchingAll() {
    return g
  }
  get fetchError() {
    return r
  }
  get profileEffects() {
    return f
  }
  get tryItOutId() {
    return p
  }
  canFetch() {
    return Date.now() >= E
  }
  getProfileEffectById(e) {
    return null != e ? _[e] : true
  }
}
c(S, "displayName", "ProfileEffectStore");
let A = new S(Chunk570140.Z, {
  PROFILE_EFFECTS_FETCH_ALL: y,
  PROFILE_EFFECTS_FETCH_ALL_SUCCESS: O,
  PROFILE_EFFECTS_FETCH_ALL_FAILURE: v,
  PROFILE_EFFECTS_SET_TRY_IT_OUT: I,
  LOGOUT: T
})