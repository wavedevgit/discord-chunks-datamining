/** Chunk was on 84335 **/
n.d(t, {
  Z: () => b
});
var r = n(200651),
  l = n(192379),
  i = n(481060),
  a = n(447543),
  o = n(66511),
  c = n(703656),
  s = n(769654),
  u = n(900849),
  d = n(405222),
  m = n(993860),
  v = n(981631),
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

function x(e, t) {
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
    guildId: n,
    validInviteKey: b,
    ctaType: h
  } = (0, m.Z)(t), I = l.useCallback(() => {
    (0, s.X)(n)
  }, [n]), p = l.useCallback(() => {
    (0, c.uL)(v.Z5c.GUILD_MEMBER_VERIFICATION(n))
  }, [n]), g = l.useCallback(() => {
    null != b && a.ZP.acceptInvite({
      inviteKey: b,
      context: {
        location: "guild_profile"
      }
    })
  }, [b]), O = l.useCallback(() => {
    t.visibility !== d.k.PUBLIC_WITH_RECRUITMENT && null != b ? g() : o.Z.openMemberVerificationModal(n, void 0, b)
  }, [n, g, t.visibility, b]), y = l.useCallback(() => {
    (0, u.Ub)(n, {
      object: v.qAy.GUILD_PROFILE
    })
  }, [n]), P = l.useMemo(() => ({
    size: i.zxk.Sizes.SMALL,
    fullWidth: !0
  }), []);
  switch (h) {
    case m.s.IS_MEMBER:
      return (0, r.jsx)(i.zxk, x(j({}, P), {
        onClick: I,
        children: f.NW.string(f.t.KLOhbG)
      }));
    case m.s.HAS_APPLICATION:
      return (0, r.jsx)(i.zxk, x(j({}, P), {
        onClick: p,
        children: f.NW.string(f.t["4yfIDg"])
      }));
    case m.s.APPLY_TO_JOIN:
      return (0, r.jsx)(i.zxk, x(j({}, P), {
        onClick: O,
        children: f.NW.string(f.t["7XdMW1"])
      }));
    case m.s.LURK_DISCOVERABLE:
      return (0, r.jsx)(i.zxk, x(j({}, P), {
        onClick: y,
        children: f.NW.string(f.t.eb9gDA)
      }));
    case m.s.JOIN_VIA_INVITE:
      return (0, r.jsx)(i.zxk, x(j({}, P), {
        onClick: g,
        children: f.NW.string(f.t.eb9gDA)
      }));
    default:
      return null
  }
}