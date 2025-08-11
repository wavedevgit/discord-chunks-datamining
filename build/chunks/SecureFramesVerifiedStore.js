/** Chunk was on web.js **/
/** chunk id: 98369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var r, Chunk442837 = require("./442837.js"),
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

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Map,
  g = new Map,
  E = false,
  b = null;

function y(e) {
  let t = c.Z.getSecureFramesRosterMapEntry(e);
  if (null == t) returnfalse;
  let n = new Uint8Array(t),
    r = _.Z.isKeyVerified(e, n) || f.Z.isKeyVerified(e, n),
    i = (0, d.UB)(e, [c.Z, u.Z]),
    o = r && !i,
    a = o !== m.get(e);
  return m.set(e, o), a
}

function O() {
  return Chunk959457.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, s.my)(t), r = true === m.get(n), i = g.get(t) !== r;
    return g.set(t, r), !!i || e
  }, false)
}

function v() {
  var e;
  let t = null != (e = Chunk19780.Z.getUserIds()) ? module : new Set,
    n = Chunk314897.default.getId(),
    r = true;
  for (let e of exports)
    if (require !== module && true !== m.get(module)) {
      r = false;
      break
    } let i = r !== E;
  return E = r, Chunk442837
}

function I(e) {
  let {
    userId: t
  } = e;
  if (l.default.getId() === t) returnfalse;
  let n = y(t),
    r = O(),
    i = v();
  return n || r || i
}

function T(e) {
  let {
    userIds: t
  } = e, n = l.default.getId(), r = t.reduce((e, t) => n === t ? e : !!I({
    userId: t
  }) || e, false), i = O(), o = v();
  return r || i || o
}

function S() {
  m.clear(), g.clear(), E = false
}

function A(e) {
  let {
    channelId: t
  } = e;
  if (t === b) returnfalse;
  b = t, S()
}

function N(e) {
  let {
    streamKey: t,
    state: n,
    context: r
  } = e;
  if (n !== p.hes.DISCONNECTED) returnfalse;
  switch (r) {
    case o.Yn.STREAM:
      if (null == t) returnfalse;
      return g.delete(t), v();
    case o.Yn.DEFAULT:
      S()
  }
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk729303.Z, Chunk651941.Z, Chunk19780.Z, Chunk959457.Z)
  }
  isCallVerified() {
    return E
  }
  isStreamVerified(e) {
    return g.get(e)
  }
  isUserVerified(e) {
    return m.get(e)
  }
}
h(C, "displayName", "SecureFramesVerifiedStore");
let R = new C(Chunk570140.Z, {
  CONNECTION_OPEN: S,
  VOICE_CHANNEL_SELECT: A,
  RTC_CONNECTION_STATE: N,
  RTC_CONNECTION_ROSTER_MAP_UPDATE: T,
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: I,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: I,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: I,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: I,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: I
})