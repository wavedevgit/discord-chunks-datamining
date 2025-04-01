/** Chunk was on 75862 **/
n.d(t, {
  Z: () => x
}), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r, l, i, a = n(442837),
  o = n(46973),
  s = n(570140),
  u = n(569545),
  c = n(314897),
  d = n(19780),
  f = n(959457),
  m = n(630759),
  p = n(729303),
  E = n(651941),
  g = n(981631);
let v = new Map,
  h = new Map,
  S = !1,
  b = null;

function y() {
  return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
    let {
      ownerId: n
    } = (0, u.my)(t), r = !0 === v.get(n), l = h.get(t) !== r;
    return h.set(t, r), !!l || e
  }, !1)
}

function O() {
  var e;
  let t = null !== (e = d.Z.getUserIds()) && void 0 !== e ? e : new Set,
    n = c.default.getId(),
    r = !0;
  for (let e of t)
    if (n !== e && !0 !== v.get(e)) {
      r = !1;
      break
    } let l = r !== S;
  return S = r, l
}

function Z(e) {
  let {
    userId: t
  } = e;
  if (c.default.getId() === t) return !1;
  let n = function(e) {
      let t = d.Z.getSecureFramesRosterMapEntry(e);
      if (null == t) return !1;
      let n = new Uint8Array(t),
        r = E.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
        l = (0, m.UB)(e, [d.Z, f.Z]),
        i = r && !l,
        a = i !== v.get(e);
      return v.set(e, i), a
    }(t),
    r = y(),
    l = O();
  return n || r || l
}

function I() {
  v.clear(), h.clear(), S = !1
}
class j extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(p.Z, E.Z, d.Z, f.Z)
  }
  isCallVerified() {
    return S
  }
  isStreamVerified(e) {
    return h.get(e)
  }
  isUserVerified(e) {
    return v.get(e)
  }
}
i = "SecureFramesVerifiedStore", (l = "displayName") in j ? Object.defineProperty(j, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : j[l] = i;
let x = new j(s.Z, {
  CONNECTION_OPEN: I,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (t === b) return !1;
    b = t, I()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n,
      context: r
    } = e;
    if (n !== g.hes.DISCONNECTED) return !1;
    switch (r) {
      case o.Yn.STREAM:
        if (null == t) return !1;
        return h.delete(t), O();
      case o.Yn.DEFAULT:
        I()
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
    let {
      userIds: t
    } = e, n = c.default.getId(), r = t.reduce((e, t) => n === t ? e : !!Z({
      userId: t
    }) || e, !1), l = y(), i = O();
    return r || l || i
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: Z,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: Z,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: Z,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: Z,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: Z
})