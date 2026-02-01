/** Chunk was on 61344 **/
/** chunk id: 707890, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var l, r, Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652896 = require("./652896.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js"),
  Chunk814278 = require("./814278.js"),
  Chunk440976 = require("./440976.js"),
  Chunk787392 = require("./787392.js"),
  Chunk652215 = require("./652215.js");
let g = new Map,
  A = new Map,
  b = false,
  _ = null;

function y() {
  return d.A.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, o.Iy)(t), l = true === g.get(n), r = A.get(t) !== l;
    return A.set(t, l), !!r || e
  }, false)
}

function v() {
  var e;
  let t = null != (e = u.A.getUserIds()) ? e : new Set,
    n = c.default.getId(),
    l = true;
  for (let e of t)
    if (n !== e && true !== g.get(e)) {
      l = false;
      break
    } let r = l !== b;
  return b = l, r
}

function E(e) {
  let {
    userId: t
  } = e;
  if (c.default.getId() === t) returnfalse;
  let n = function(e) {
      let t = u.A.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let n = new Uint8Array(t),
        l = f.A.isKeyVerified(e, n) || p.A.isKeyVerified(e, n),
        r = (0, h.m8)(e, [u.A, d.A]),
        i = l && !r,
        a = i !== g.get(e);
      return g.set(e, i), a
    }(t),
    l = y(),
    r = v();
  return n || l || r
}

function O() {
  g.clear(), A.clear(), b = false
}
class C extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default, u.A, d.A, p.A, f.A)
  }
  isCallVerified() {
    return b
  }
  isStreamVerified(e) {
    return A.get(e)
  }
  isUserVerified(e) {
    return g.get(e)
  }
}(r = "displayName") in C ? Object.defineProperty(C, r, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[r] = "SecureFramesVerifiedStore";
let x = new C(Chunk73153.h, {
  CONNECTION_OPEN: O,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === _) returnfalse;
    _ = t, O()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: l
    } = e;
    if (n !== m.S7L.DISCONNECTED) returnfalse;
    switch (l) {
      case a.x.STREAM:
        if (null == t) returnfalse;
        return A.delete(t), v();
      case a.x.DEFAULT:
        O()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = c.default.getId(), l = t.reduce((e, t) => n === t ? e : !!E({
      userId: t
    }) || e, false), r = y(), i = v();
    return l || r || i
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: E,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: E,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: E,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: E,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: E
})