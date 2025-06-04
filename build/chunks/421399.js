/** Chunk was on 40694 **/
n.d(r, {
  Z: () => _,
  a: () => N
});
var t, l = n(255367),
  o = n(73800),
  i = n(120356),
  u = n.n(i),
  a = n(873546),
  c = n(442837),
  s = n(573385),
  d = n(865672),
  f = n(481060),
  m = n(607070),
  p = n(100527),
  y = n(906732),
  b = n(385499),
  g = n(372900),
  v = n(172751),
  O = n(477747),
  h = n(477734),
  x = n(670188),
  S = n(768581),
  R = n(585483),
  j = n(463396),
  E = n(935910),
  P = n(981631),
  T = n(848697);

function A(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = null != arguments[r] ? arguments[r] : {},
      t = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), t.forEach(function(r) {
      var t;
      t = n[r], r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t
    })
  }
  return e
}

function C(e, r) {
  return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(e);
      n.push.apply(n, t)
    }
    return n
  })(Object(r)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
  }), e
}
var N = ((t = {})[t.SYSTEM_TAG = 0] = "SYSTEM_TAG", t[t.BADGES = 1] = "BADGES", t);

function Z(e) {
  let {
    compact: r
  } = e;
  return (0, l.jsx)(b.Z, {
    className: r ? T.botTagCompact : T.botTagCozy,
    type: b.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function _(e) {
  var r;
  let {
    author: n,
    message: t,
    channel: i,
    userOverride: b,
    compact: N = !1,
    withMentionPrefix: _ = !1,
    showPopout: k = !1,
    hideGuildTag: w = !1,
    hideSystemTag: I = !1,
    className: G,
    onClick: M,
    onContextMenu: D,
    onPopoutRequestClose: F,
    renderPopout: B,
    renderRemixTag: L = !1,
    decorations: U,
    previewGuildId: z,
    subscribeToGroupId: H
  } = e, V = o.useRef(null), X = o.useContext(g.Z), J = null != (r = null == i ? void 0 : i.guild_id) ? r : X, {
    analyticsLocations: Y
  } = (0, y.ZP)(p.Z.USERNAME), q = _ ? "@" : "", {
    nick: K,
    colorString: W,
    colorStrings: $,
    colorRoleName: Q
  } = n, ee = (0, c.e7)([m.Z], () => m.Z.roleStyle), er = "username" === ee, en = (0, h.X$)(), et = (0, O.Z)(null != z ? z : J, "BaseUsername"), el = (0, E.Z)(t), eo = o.useContext(s.d), ei = et && null != $ && null != $.primaryColor && null != $.secondaryColor, eu = er && ei;
  o.useEffect(() => {
    if (null == H || !eu || null == eo) return;
    let {
      setAnimate: e
    } = eo;
    return R.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(H, ":").concat(t.author.id), e), () => void R.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(H, ":").concat(t.author.id), e)
  }, [t.author.id, H, eu, eo]);
  let {
    gradientStyle: ea,
    gradientClassname: ec
  } = (0, f.Icv)({
    primaryColor: null == $ ? void 0 : $.primaryColor,
    secondaryColor: null == $ ? void 0 : $.secondaryColor,
    tertiaryColor: null == $ ? void 0 : $.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == eo ? void 0 : eo.animate
  }), es = (0, d.EJ)(q + K), ed = {
    className: u()([T.username, eu && ec]),
    style: (() => {
      if (er) return eu && null != $ ? C(A({}, ea), {
        textDecorationColor: null == $ ? void 0 : $.primaryColor
      }) : null != W ? {
        color: W
      } : void 0
    })(),
    onClick: M,
    onContextMenu: D,
    children: es,
    "data-text": q + K
  }, ef = o.useMemo(() => N && !w ? (0, l.jsx)(v.ZP, {
    primaryGuild: n.primaryGuild,
    userId: t.author.id,
    contextGuildId: J,
    className: T.clanTagChiplet
  }) : null, [N, n.primaryGuild, J, t.author.id, w]), em = null != b ? b : t.author, ep = null != B && null != k ? (0, l.jsx)(x.Z, {
    targetElementRef: V,
    user: em,
    renderPopout: B,
    shouldShow: k,
    shouldPreload: el,
    position: a.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != J ? (0, S.JM)({
      guildId: J,
      userId: em.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: F,
    clickTrap: k,
    children: e => {
      var {
        onClick: r
      } = e, n = function(e, r) {
        if (null == e) return {};
        var n, t, l = function(e, r) {
          if (null == e) return {};
          var n, t, l = {},
            o = Object.keys(e);
          for (t = 0; t < o.length; t++) n = o[t], r.indexOf(n) >= 0 || (l[n] = e[n]);
          return l
        }(e, r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (t = 0; t < o.length; t++) n = o[t], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
        }
        return l
      }(e, ["onClick"]);
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.P3F, C(A({
          tag: "span",
          innerRef: V
        }, n, ed), {
          className: u()(ed.className, T.clickable, G)
        })), ef]
      })
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f.P3F, C(A({}, ed), {
      className: u()(ed.className, G)
    })), ef]
  }), ey = null != U ? U[0] : null, eb = null != U ? U[1] : null;
  return (0, l.jsxs)(y.Gt, {
    value: Y,
    children: [null != ey && !I && N ? (0, l.jsxs)(l.Fragment, {
      children: [" ", ey, " "]
    }) : null, "dot" === ee ? (0, l.jsx)(f.FhE, {
      color: W,
      colors: ei ? $ : null,
      name: Q,
      className: T.roleDot,
      hoverOverride: null == eo ? void 0 : eo.animate
    }) : null, ep, !N && !w && (0, l.jsx)(v.ZP, {
      primaryGuild: n.primaryGuild,
      userId: t.author.id,
      contextGuildId: J,
      className: T.clanTagChiplet
    }), null != eb ? eb : null, null == ey || I || N ? null : ey, null != t && (0, j.f)(t) && en && L ? (0, l.jsx)(Z, {}) : null]
  })
}