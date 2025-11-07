/** Chunk was on 86642 **/
/** chunk id: 98369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var i, r, Chunk442837 = require("./442837.js"),
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
  y = false,
  C = null;

function _() {
  return Chunk959457.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, s.my)(t), i = true === g.get(n), r = b.get(t) !== i;
    return b.set(t, i), !!r || e
  }, false)
}

function v() {
  var e;
  let t = null != (e = Chunk19780.Z.getUserIds()) ? module : new Set,
    n = Chunk314897.default.getId(),
    i = true;
  for (let e of exports)
    if (require !== module && true !== g.get(module)) {
      i = false;
      break
    } let r = i !== y;
  return y = i, r
}

function x(e) {
  let {
    userId: t
  } = e;
  if (c.default.getId() === t) returnfalse;
  let n = function(e) {
      let t = u.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) returnfalse;
      let n = new Uint8Array(t),
        i = h.Z.isKeyVerified(e, n) || f.Z.isKeyVerified(e, n),
        r = (0, p.UB)(e, [u.Z, d.Z]),
        l = i && !r,
        a = l !== g.get(e);
      return g.set(e, l), a
    }(t),
    i = _(),
    r = v();
  return n || i || r
}

function O() {
  g.clear(), b.clear(), y = false
}
class E extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk19780.Z, Chunk959457.Z, Chunk729303.Z, Chunk651941.Z)
  }
  isCallVerified() {
    return y
  }
  isStreamVerified(e) {
    return b.get(e)
  }
  isUserVerified(e) {
    return g.get(e)
  }
}(r = "displayName") in E ? Object.defineProperty(E, r, {
  value: "SecureFramesVerifiedStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : E[r] = "SecureFramesVerifiedStore";
let j = new E(Chunk570140.Z, {
  CONNECTION_OPEN: O,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === C) returnfalse;
    C = t, O()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: i
    } = e;
    if (n !== m.hes.DISCONNECTED) returnfalse;
    switch (i) {
      case a.Yn.STREAM:
        if (null == t) returnfalse;
        return b.delete(t), v();
      case a.Yn.DEFAULT:
        O()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = c.default.getId(), i = t.reduce((e, t) => n === t ? e : !!x({
      userId: t
    }) || e, false), r = _(), l = v();
    return i || r || l
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: x,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: x,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: x,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: x,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: x
})