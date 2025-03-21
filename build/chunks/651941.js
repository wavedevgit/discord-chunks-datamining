/** Chunk was on 33397 **/
r.d(t, {
  Z: () => d
}), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(610885), r(126298), r(47120);
var n, l = r(442837),
  i = r(253135),
  u = r(570140),
  s = r(709054);

function a(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let o = {};
class c extends(n = l.ZP.PersistedStore) {
  initialize(e) {
    var t;
    o = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {}
  }
  getState() {
    return {
      users: o
    }
  }
  getKeyTrustedAt(e, t) {
    var r;
    let n = (0, i.MK)(t);
    return null === (r = o[e]) || void 0 === r ? void 0 : r[n]
  }
  isKeyVerified(e, t) {
    return null != this.getKeyTrustedAt(e, t)
  }
  getUserIds() {
    return s.default.keys(o)
  }
  getUserVerifiedKeys(e) {
    return o[e]
  }
}
a(c, "displayName", "VerifiedKeyStore"), a(c, "persistKey", "VerifiedKeyStore");
let d = new c(u.Z, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
    let {
      userId: t,
      key: r
    } = e, n = function(e) {
      var t;
      let r = null !== (t = o[e]) && void 0 !== t ? t : {};
      return o[e] = r, r
    }(t), l = new Uint8Array(r);
    n[(0, i.MK)(l)] = Date.now()
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
    let {
      userId: t,
      serializedKey: r
    } = e, n = o[t];
    if (null == n) return !1;
    let l = delete n[r],
      i = !1;
    return 0 === Object.keys(n).length && (delete o[t], i = !0), l || i
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
    let {
      userId: t
    } = e;
    return null != o[t] && delete o[t]
  }
})