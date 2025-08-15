/** Chunk was on 33397 **/
/** chunk id: 98369, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
  m = new Map,
  b = false,
  S = null;

function _() {
  return Chunk959457.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: r
    } = (0, s.my)(t), n = true === p.get(r), l = m.get(t) !== n;
    return m.set(t, n), !!l || e
  }, false)
}

function h() {
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

function O(e) {
  let {
    userId: t
  } = e;
  if (o.default.getId() === t) returnfalse;
  let r = function(e) {
      let t = c.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let r = new Uint8Array(t),
        n = y.Z.isKeyVerified(e, r) || E.Z.isKeyVerified(e, r),
        l = (0, f.UB)(e, [c.Z, d.Z]),
        i = n && !l,
        u = i !== p.get(e);
      return p.set(e, i), u
    }(t),
    n = _(),
    l = h();
  return r || n || l
}

function v() {
  p.clear(), m.clear(), b = false
}
class j extends(n = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk729303.Z, Chunk651941.Z, Chunk19780.Z, Chunk959457.Z)
  }
  isCallVerified() {
    return b
  }
  isStreamVerified(e) {
    return m.get(e)
  }
  isUserVerified(e) {
    return p.get(e)
  }
}(l = "displayName") in j ? Object.defineProperty(j, l, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : j[l] = "SecureFramesVerifiedStore";
let N = new j(Chunk570140.Z, {
  CONNECTION_OPEN: v,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === S) returnfalse;
    S = t, v()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: r,
      context: n
    } = e;
    if (r !== g.hes.DISCONNECTED) returnfalse;
    switch (n) {
      case u.Yn.STREAM:
        if (null == t) returnfalse;
        return m.delete(t), h();
      case u.Yn.DEFAULT:
        v()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, r = o.default.getId(), n = t.reduce((e, t) => r === t ? e : !!O({
      userId: t
    }) || e, false), l = _(), i = h();
    return n || l || i
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: O,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: O,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: O,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: O,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: O
})