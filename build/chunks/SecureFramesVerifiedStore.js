/** Chunk was on 69634 **/
/** chunk id: 98369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
let g = new Map,
  b = new Map,
  S = false,
  v = null;

function h() {
  return Chunk959457.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, u.my)(t), r = true === g.get(n), l = b.get(t) !== r;
    return b.set(t, r), !!l || e
  }, false)
}

function O() {
  var e;
  let t = null != (e = Chunk19780.Z.getUserIds()) ? module : new Set,
    n = Chunk314897.default.getId(),
    r = true;
  for (let e of exports)
    if (require !== module && true !== g.get(module)) {
      r = false;
      break
    } let l = r !== S;
  return S = r, l
}

function y(e) {
  let {
    userId: t
  } = e;
  if (s.default.getId() === t) returnfalse;
  let n = function(e) {
      let t = c.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let n = new Uint8Array(t),
        r = m.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
        l = (0, f.UB)(e, [c.Z, d.Z]),
        i = r && !l,
        a = i !== g.get(e);
      return g.set(e, i), a
    }(t),
    r = h(),
    l = O();
  return n || r || l
}

function _() {
  g.clear(), b.clear(), S = false
}
class j extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk729303.Z, Chunk651941.Z, Chunk19780.Z, Chunk959457.Z)
  }
  isCallVerified() {
    return S
  }
  isStreamVerified(e) {
    return b.get(e)
  }
  isUserVerified(e) {
    return g.get(e)
  }
}(l = "displayName") in j ? Object.defineProperty(j, l, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : j[l] = "SecureFramesVerifiedStore";
let Z = new j(Chunk570140.Z, {
  CONNECTION_OPEN: _,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === v) returnfalse;
    v = t, _()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: r
    } = e;
    if (n !== E.hes.DISCONNECTED) returnfalse;
    switch (r) {
      case a.Yn.STREAM:
        if (null == t) returnfalse;
        return b.delete(t), O();
      case a.Yn.DEFAULT:
        _()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = s.default.getId(), r = t.reduce((e, t) => n === t ? e : !!y({
      userId: t
    }) || e, false), l = h(), i = O();
    return r || l || i
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: y,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: y,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: y,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: y,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: y
})