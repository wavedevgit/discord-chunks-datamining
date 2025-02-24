/** Chunk was on 84335 **/
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  a = n(481060),
  o = n(447543),
  s = n(234383),
  c = n(703656),
  u = n(769654),
  d = n(314897),
  m = n(271383),
  x = n(701190),
  v = n(900849),
  j = n(981631),
  h = n(388032);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    profile: t
  } = e, {
    id: n,
    features: b
  } = t, p = (0, l.e7)([d.default], () => d.default.getId()), y = (0, l.e7)([m.ZP], () => {
    var e;
    return (null === (e = null != n ? m.ZP.getMember(n, p) : null) || void 0 === e ? void 0 : e.joinedAt) != null
  }, [n, p]), O = (0, s.Z)(), I = i.useCallback(() => {
    (0, u.X)(n)
  }, [n]), N = i.useCallback(() => {
    (0, c.uL)(j.Z5c.GUILD_MEMBER_VERIFICATION(n))
  }, [n]), P = i.useCallback(async () => {
    let e = x.Z.getInviteKeyForGuildId(n);
    null != e && await o.Z.acceptInvite({
      inviteKey: e,
      context: {
        location: "guild_profile"
      }
    })
  }, [n]), E = i.useCallback(() => {
    (0, v.Ub)(n, {
      object: j.qAy.GUILD_PROFILE
    })
  }, [n]), C = i.useMemo(() => ({
    size: a.zxk.Sizes.SMALL,
    fullWidth: !0
  }), []);
  return i.useMemo(() => y ? (0, r.jsx)(a.zxk, g(f({}, C), {
    onClick: I,
    children: h.NW.string(h.t.KLOhbG)
  })) : O.includes(n) ? (0, r.jsx)(a.zxk, g(f({}, C), {
    onClick: N,
    children: h.NW.string(h.t["4yfIDg"])
  })) : (null == b ? void 0 : b.includes(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == b ? void 0 : b.includes(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ? (0, r.jsx)(a.zxk, g(f({}, C), {
    onClick: P,
    children: h.NW.string(h.t["7XdMW1"])
  })) : (null == b ? void 0 : b.includes(j.oNc.DISCOVERABLE)) ? (0, r.jsx)(a.zxk, g(f({}, C), {
    onClick: E,
    children: h.NW.string(h.t.d6r93d)
  })) : void 0, [C, b, n, N, I, E, P, y, O])
}