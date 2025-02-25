/** Chunk was on 84335 **/
n.d(t, {
  Z: () => p
});
var r = n(200651),
  l = n(192379),
  i = n(442837),
  a = n(481060),
  o = n(447543),
  c = n(234383),
  s = n(703656),
  u = n(769654),
  d = n(314897),
  m = n(271383),
  v = n(701190),
  x = n(900849),
  h = n(981631),
  f = n(388032);

function j(e) {
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

function p(e) {
  let {
    profile: t
  } = e, {
    id: n,
    features: p
  } = t, b = (0, i.e7)([d.default], () => d.default.getId()), y = (0, i.e7)([m.ZP], () => {
    var e;
    return (null === (e = null != n ? m.ZP.getMember(n, b) : null) || void 0 === e ? void 0 : e.joinedAt) != null
  }, [n, b]), O = (0, i.e7)([v.Z], () => v.Z.getInviteKeyForGuildId(n)), I = (0, c.Z)(), N = l.useCallback(() => {
    (0, u.X)(n)
  }, [n]), P = l.useCallback(() => {
    (0, s.uL)(h.Z5c.GUILD_MEMBER_VERIFICATION(n))
  }, [n]), E = l.useCallback(async () => {
    null != O && await o.Z.acceptInvite({
      inviteKey: O,
      context: {
        location: "guild_profile"
      }
    })
  }, [O]), Z = l.useCallback(() => {
    (0, x.Ub)(n, {
      object: h.qAy.GUILD_PROFILE
    })
  }, [n]), C = l.useMemo(() => ({
    size: a.zxk.Sizes.SMALL,
    fullWidth: !0
  }), []);
  return l.useMemo(() => y ? (0, r.jsx)(a.zxk, g(j({}, C), {
    onClick: N,
    children: f.NW.string(f.t.KLOhbG)
  })) : I.includes(n) ? (0, r.jsx)(a.zxk, g(j({}, C), {
    onClick: P,
    children: f.NW.string(f.t["4yfIDg"])
  })) : (null == p ? void 0 : p.includes(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == p ? void 0 : p.includes(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && null != O ? (0, r.jsx)(a.zxk, g(j({}, C), {
    onClick: E,
    children: f.NW.string(f.t["7XdMW1"])
  })) : (null == p ? void 0 : p.includes(h.oNc.DISCOVERABLE)) ? (0, r.jsx)(a.zxk, g(j({}, C), {
    onClick: Z,
    children: f.NW.string(f.t.d6r93d)
  })) : null, [C, p, n, P, N, Z, E, O, y, I])
}