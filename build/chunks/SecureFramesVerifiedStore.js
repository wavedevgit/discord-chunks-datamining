/** Chunk was on 31748 **/
/** chunk id: 707890, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
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
let m = new Map,
  h = new Map,
  A = false,
  y = null;

function _() {
  return d.A.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, o.Iy)(t), l = true === m.get(n), r = h.get(t) !== l;
    return h.set(t, l), !!r || e
  }, false)
}

function E() {
  var e;
  let t = null != (e = u.A.getUserIds()) ? e : new Set,
    n = c.default.getId(),
    l = true;
  for (let e of t)
    if (n !== e && true !== m.get(e)) {
      l = false;
      break
    } let r = l !== A;
  return A = l, r
}

function v(e) {
  let {
    userId: t
  } = e;
  if (c.default.getId() === t) returnfalse;
  let n = function(e) {
      let t = u.A.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let n = new Uint8Array(t),
        l = b.A.isKeyVerified(e, n) || p.A.isKeyVerified(e, n),
        r = (0, f.m8)(e, [u.A, d.A]),
        i = l && !r,
        a = i !== m.get(e);
      return m.set(e, i), a
    }(t),
    l = _(),
    r = E();
  return n || l || r
}

function O() {
  m.clear(), h.clear(), A = false
}
class x extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default, u.A, d.A, p.A, b.A)
  }
  isCallVerified() {
    return A
  }
  isStreamVerified(e) {
    return h.get(e)
  }
  isUserVerified(e) {
    return m.get(e)
  }
}(r = "displayName") in x ? Object.defineProperty(x, r, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : x[r] = "SecureFramesVerifiedStore";
let S = new x(Chunk73153.h, {
  CONNECTION_OPEN: O,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === y) returnfalse;
    y = t, O()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: l
    } = e;
    if (n !== g.S7L.DISCONNECTED) returnfalse;
    switch (l) {
      case a.x.STREAM:
        if (null == t) returnfalse;
        return h.delete(t), E();
      case a.x.DEFAULT:
        O()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = c.default.getId(), l = t.reduce((e, t) => n === t ? e : !!v({
      userId: t
    }) || e, false), r = _(), i = E();
    return l || r || i
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v
})