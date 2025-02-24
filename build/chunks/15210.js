/** Chunk was on 84335 **/
n.d(t, {
  Z: () => b
});
var r = n(200651),
  l = n(192379),
  i = n(442837),
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
  } = t, p = (0, i.e7)([d.default], () => d.default.getId()), y = (0, i.e7)([m.ZP], () => {
    var e;
    return (null === (e = null != n ? m.ZP.getMember(n, p) : null) || void 0 === e ? void 0 : e.joinedAt) != null
  }, [n, p]), O = (0, i.e7)([x.Z], () => x.Z.getInviteKeyForGuildId(n)), I = (0, s.Z)(), N = l.useCallback(() => {
    (0, u.X)(n)
  }, [n]), P = l.useCallback(() => {
    (0, c.uL)(j.Z5c.GUILD_MEMBER_VERIFICATION(n))
  }, [n]), E = l.useCallback(async () => {
    null != O && await o.Z.acceptInvite({
      inviteKey: O,
      context: {
        location: "guild_profile"
      }
    })
  }, [O]), C = l.useCallback(() => {
    (0, v.Ub)(n, {
      object: j.qAy.GUILD_PROFILE
    })
  }, [n]), Z = l.useMemo(() => ({
    size: a.zxk.Sizes.SMALL,
    fullWidth: !0
  }), []);
  return l.useMemo(() => y ? (0, r.jsx)(a.zxk, g(f({}, Z), {
    onClick: N,
    children: h.NW.string(h.t.KLOhbG)
  })) : I.includes(n) ? (0, r.jsx)(a.zxk, g(f({}, Z), {
    onClick: P,
    children: h.NW.string(h.t["4yfIDg"])
  })) : (null == b ? void 0 : b.includes(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == b ? void 0 : b.includes(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && null != O ? (0, r.jsx)(a.zxk, g(f({}, Z), {
    onClick: E,
    children: h.NW.string(h.t["7XdMW1"])
  })) : (null == b ? void 0 : b.includes(j.oNc.DISCOVERABLE)) ? (0, r.jsx)(a.zxk, g(f({}, Z), {
    onClick: C,
    children: h.NW.string(h.t.d6r93d)
  })) : null, [Z, b, n, P, N, C, E, O, y, I])
}