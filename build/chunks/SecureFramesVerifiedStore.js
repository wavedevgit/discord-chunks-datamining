/** Chunk was on 69813 **/
/** chunk id: 98369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var r, l, Chunk442837 = require("./442837.js"),
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
let m = new Map,
  h = new Map,
  E = false,
  v = null;

function _() {
  return d.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, c.my)(t), r = true === m.get(n), l = h.get(t) !== r;
    return h.set(t, r), !!l || e
  }, false)
}

function y() {
  var e;
  let t = null != (e = u.Z.getUserIds()) ? e : new Set,
    n = s.default.getId(),
    r = true;
  for (let e of t)
    if (n !== e && true !== m.get(e)) {
      r = false;
      break
    } let l = r !== E;
  return E = r, l
}

function O(e) {
  let {
    userId: t
  } = e;
  if (s.default.getId() === t) returnfalse;
  let n = function(e) {
      let t = u.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let n = new Uint8Array(t),
        r = g.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
        l = (0, f.UB)(e, [u.Z, d.Z]),
        i = r && !l,
        a = i !== m.get(e);
      return m.set(e, i), a
    }(t),
    r = _(),
    l = y();
  return n || r || l
}

function S() {
  m.clear(), h.clear(), E = false
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.default, u.Z, d.Z, p.Z, g.Z)
  }
  isCallVerified() {
    return E
  }
  isStreamVerified(e) {
    return h.get(e)
  }
  isUserVerified(e) {
    return m.get(e)
  }
}(l = "displayName") in C ? Object.defineProperty(C, l, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[l] = "SecureFramesVerifiedStore";
let I = new C(Chunk570140.Z, {
  CONNECTION_OPEN: S,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === v) returnfalse;
    v = t, S()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: r
    } = e;
    if (n !== b.hes.DISCONNECTED) returnfalse;
    switch (r) {
      case a.Yn.STREAM:
        if (null == t) returnfalse;
        return h.delete(t), y();
      case a.Yn.DEFAULT:
        S()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = s.default.getId(), r = t.reduce((e, t) => n === t ? e : !!O({
      userId: t
    }) || e, false), l = _(), i = y();
    return r || l || i
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: O,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: O,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: O,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: O,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: O
})