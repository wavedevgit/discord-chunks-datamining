/** Chunk was on 33397 **/
/** chunk id: 98369, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var n, l, Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk570140 = require("./570140.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk630759 = require("./630759.js"),
  Chunk729303 = require("./729303.js"),
  Chunk651941 = require("./651941.js"),
  Chunk981631 = require("./981631.js");
let p = new Map,
  b = new Map,
  m = false,
  O = null;

function S() {
  return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: r
    } = (0, o.my)(t), n = true === p.get(r), l = b.get(t) !== n;
    return b.set(t, n), !!l || e
  }, false)
}

function T() {
  var e;
  let t = null != (e = a.Z.getUserIds()) ? e : new Set,
    r = s.default.getId(),
    n = true;
  for (let e of t)
    if (r !== e && true !== p.get(e)) {
      n = false;
      break
    } let l = n !== m;
  return m = n, l
}

function N(e) {
  let {
    userId: t
  } = e;
  if (s.default.getId() === t) returnfalse;
  let r = function(e) {
      let t = a.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let r = new Uint8Array(t),
        n = g.Z.isKeyVerified(e, r) || E.Z.isKeyVerified(e, r),
        l = (0, d.UB)(e, [a.Z, f.Z]),
        u = n && !l,
        i = u !== p.get(e);
      return p.set(e, u), i
    }(t),
    n = S(),
    l = T();
  return r || n || l
}

function j() {
  p.clear(), b.clear(), m = false
}
class C extends(n = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.default, a.Z, f.Z, E.Z, g.Z)
  }
  isCallVerified() {
    return m
  }
  isStreamVerified(e) {
    return b.get(e)
  }
  isUserVerified(e) {
    return p.get(e)
  }
}(l = "displayName") in C ? Object.defineProperty(C, l, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[l] = "SecureFramesVerifiedStore";
let _ = new C(Chunk570140.Z, {
  CONNECTION_OPEN: j,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === O) returnfalse;
    O = t, j()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: r,
      context: n
    } = e;
    if (r !== y.hes.DISCONNECTED) returnfalse;
    switch (n) {
      case i.Yn.STREAM:
        if (null == t) returnfalse;
        return b.delete(t), T();
      case i.Yn.DEFAULT:
        j()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, r = s.default.getId(), n = t.reduce((e, t) => r === t ? e : !!N({
      userId: t
    }) || e, false), l = S(), u = T();
    return n || l || u
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: N,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: N,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: N,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: N,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: N
})