/** Chunk was on 33397 **/
/** chunk id: 98369, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  S = new Map,
  b = false,
  _ = null;

function m() {
  return Chunk959457.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: r
    } = (0, s.my)(t), n = true === p.get(r), l = S.get(t) !== n;
    return S.set(t, n), !!l || e
  }, false)
}

function O() {
  var e;
  let t = null != (e = Chunk19780.Z.getUserIds()) ? module : new Set,
    r = Chunk314897.default.getId(),
    n = true;
  for (let e of exports)
    if (require !== module && true !== p.get(module)) {
      n = false;
      break
    } let l = n !== b;
  return b = n, l
}

function v(e) {
  let {
    userId: t
  } = e;
  if (c.default.getId() === t) returnfalse;
  let r = function(e) {
      let t = o.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let r = new Uint8Array(t),
        n = y.Z.isKeyVerified(e, r) || E.Z.isKeyVerified(e, r),
        l = (0, d.UB)(e, [o.Z, f.Z]),
        u = n && !l,
        i = u !== p.get(e);
      return p.set(e, u), i
    }(t),
    n = m(),
    l = O();
  return r || n || l
}

function R() {
  p.clear(), S.clear(), b = false
}
class T extends(n = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk729303.Z, Chunk651941.Z, Chunk19780.Z, Chunk959457.Z)
  }
  isCallVerified() {
    return b
  }
  isStreamVerified(e) {
    return S.get(e)
  }
  isUserVerified(e) {
    return p.get(e)
  }
}(l = "displayName") in T ? Object.defineProperty(T, l, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : T[l] = "SecureFramesVerifiedStore";
let h = new T(Chunk570140.Z, {
  CONNECTION_OPEN: R,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === _) returnfalse;
    _ = t, R()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: r,
      context: n
    } = e;
    if (r !== g.hes.DISCONNECTED) returnfalse;
    switch (n) {
      case i.Yn.STREAM:
        if (null == t) returnfalse;
        return S.delete(t), O();
      case i.Yn.DEFAULT:
        R()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, r = c.default.getId(), n = t.reduce((e, t) => r === t ? e : !!v({
      userId: t
    }) || e, false), l = m(), u = O();
    return n || l || u
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v
})