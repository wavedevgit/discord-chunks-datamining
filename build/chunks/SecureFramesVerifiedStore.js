/** Chunk was on 82224 **/
/** chunk id: 98369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var r, i, Chunk442837 = require("./442837.js"),
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
let g = new Map,
  v = new Map,
  b = false,
  E = null;

function h() {
  return Chunk959457.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, c.my)(t), r = true === g.get(n), i = v.get(t) !== r;
    return v.set(t, r), !!i || e
  }, false)
}

function y() {
  var e;
  let t = null != (e = Chunk19780.Z.getUserIds()) ? module : new Set,
    n = Chunk314897.default.getId(),
    r = true;
  for (let e of exports)
    if (require !== module && true !== g.get(module)) {
      r = false;
      break
    } let i = r !== b;
  return b = r, i
}

function S(e) {
  let {
    userId: t
  } = e;
  if (s.default.getId() === t) returnfalse;
  let n = function(e) {
      let t = u.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let n = new Uint8Array(t),
        r = m.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
        i = (0, f.UB)(e, [u.Z, d.Z]),
        l = r && !i,
        a = l !== g.get(e);
      return g.set(e, l), a
    }(t),
    r = h(),
    i = y();
  return n || r || i
}

function O() {
  g.clear(), v.clear(), b = false
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk19780.Z, Chunk959457.Z, Chunk729303.Z, Chunk651941.Z)
  }
  isCallVerified() {
    return b
  }
  isStreamVerified(e) {
    return v.get(e)
  }
  isUserVerified(e) {
    return g.get(e)
  }
}(i = "displayName") in C ? Object.defineProperty(C, i, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[i] = "SecureFramesVerifiedStore";
let I = new C(Chunk570140.Z, {
  CONNECTION_OPEN: O,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === E) returnfalse;
    E = t, O()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: r
    } = e;
    if (n !== _.hes.DISCONNECTED) returnfalse;
    switch (r) {
      case a.Yn.STREAM:
        if (null == t) returnfalse;
        return v.delete(t), y();
      case a.Yn.DEFAULT:
        O()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = s.default.getId(), r = t.reduce((e, t) => n === t ? e : !!S({
      userId: t
    }) || e, false), i = h(), l = y();
    return r || i || l
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: S,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: S,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: S,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: S,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: S
})