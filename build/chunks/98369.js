/** Chunk was on 55697 **/
n.d(t, {
  Z: () => w
}), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r, i, l, o = n(442837),
  a = n(46973),
  s = n(570140),
  c = n(569545),
  u = n(314897),
  d = n(19780),
  f = n(959457),
  m = n(630759),
  p = n(729303),
  h = n(651941),
  v = n(981631);
let b = new Map,
  g = new Map,
  y = !1,
  E = null;

function O() {
  return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, c.my)(t), r = !0 === b.get(n), i = g.get(t) !== r;
    return g.set(t, r), !!i || e
  }, !1)
}

function S() {
  var e;
  let t = null !== (e = d.Z.getUserIds()) && void 0 !== e ? e : new Set,
    n = u.default.getId(),
    r = !0;
  for (let e of t)
    if (n !== e && !0 !== b.get(e)) {
      r = !1;
      break
    } let i = r !== y;
  return y = r, i
}

function j(e) {
  let {
    userId: t
  } = e;
  if (u.default.getId() === t) return !1;
  let n = function(e) {
      let t = d.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) return !1;
      let n = new Uint8Array(t),
        r = h.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
        i = (0, m.UB)(e, [d.Z, f.Z]),
        l = r && !i,
        o = l !== b.get(e);
      return b.set(e, l), o
    }(t),
    r = O(),
    i = S();
  return n || r || i
}

function x() {
  b.clear(), g.clear(), y = !1
}
class Z extends(r = o.ZP.Store) {
  initialize() {
    this.waitFor(p.Z, h.Z, d.Z, f.Z)
  }
  isCallVerified() {
    return y
  }
  isStreamVerified(e) {
    return g.get(e)
  }
  isUserVerified(e) {
    return b.get(e)
  }
}
l = "SecureFramesVerifiedStore", (i = "displayName") in Z ? Object.defineProperty(Z, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : Z[i] = l;
let w = new Z(s.Z, {
  CONNECTION_OPEN: x,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === E) return !1;
    E = t, x()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: r
    } = e;
    if (n !== v.hes.DISCONNECTED) return !1;
    switch (r) {
      case a.Yn.STREAM:
        if (null == t) return !1;
        return g.delete(t), S();
      case a.Yn.DEFAULT:
        x()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = u.default.getId(), r = t.reduce((e, t) => n === t ? e : !!j({
      userId: t
    }) || e, !1), i = O(), l = S();
    return r || i || l
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: j,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: j,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: j,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: j,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: j
})