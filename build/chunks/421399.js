/** Chunk was on 48812 **/
n.d(t, {
  Z: () => k,
  a: () => L
});
var r, i = n(255367),
  l = n(73800),
  o = n(120356),
  a = n.n(o),
  c = n(873546),
  s = n(442837),
  u = n(573385),
  d = n(865672),
  _ = n(481060),
  E = n(607070),
  O = n(100527),
  p = n(906732),
  I = n(385499),
  T = n(821795),
  S = n(892567),
  N = n(7284),
  f = n(372900),
  A = n(172751),
  m = n(606318),
  g = n(402235),
  R = n(477734),
  y = n(670188),
  C = n(485386),
  P = n(768581),
  b = n(585483),
  D = n(463396),
  h = n(935910),
  U = n(981631),
  v = n(848697);

function M(e) {
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

function Z(e, t) {
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
var L = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

function j(e) {
  let {
    compact: t
  } = e;
  return (0, i.jsx)(I.Z, {
    className: t ? v.botTagCompact : v.botTagCozy,
    type: I.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function k(e) {
  var t;
  let {
    author: n,
    message: r,
    channel: o,
    userOverride: I,
    compact: L = !1,
    withMentionPrefix: k = !1,
    showPopout: x = !1,
    hideGuildTag: F = !1,
    hideSystemTag: w = !1,
    className: G,
    onClick: V,
    onContextMenu: B,
    onPopoutRequestClose: H,
    renderPopout: W,
    renderRemixTag: z = !1,
    decorations: Y,
    previewGuildId: K,
    subscribeToGroupId: q
  } = e, X = l.useRef(null), Q = l.useContext(f.Z), J = null != (t = null == o ? void 0 : o.guild_id) ? t : Q, {
    analyticsLocations: $
  } = (0, p.ZP)(O.Z.USERNAME), ee = k ? "@" : "", {
    nick: et,
    colorString: en,
    colorStrings: er,
    colorRoleName: ei,
    displayNameStyles: el
  } = n, eo = (0, s.e7)([E.Z], () => E.Z.roleStyle), ea = "username" === eo, ec = (0, R.X$)(), es = (0, N.j)({
    displayNameStyles: el
  }), eu = (0, s.e7)([C.Z], () => null == n.guildId || null == n.colorRoleId ? null : C.Z.getRole(n.guildId, n.colorRoleId)), ed = (0, g.yH)(null != K ? K : J, eu), e_ = (0, h.Z)(r), eE = l.useContext(u.d), eO = ed && (0, m.S2)(n), ep = ea && eO;
  l.useEffect(() => {
    if (null == q || !ep || null == eE) return;
    let {
      setAnimate: e
    } = eE;
    return b.S.subscribeKeyed(U.LPv.ANIMATE_CHAT_AVATAR, "".concat(q, ":").concat(r.author.id), e), () => void b.S.unsubscribeKeyed(U.LPv.ANIMATE_CHAT_AVATAR, "".concat(q, ":").concat(r.author.id), e)
  }, [r.author.id, q, ep, eE]);
  let {
    gradientStyle: eI,
    gradientClassname: eT
  } = (0, _.Icv)({
    primaryColor: null == er ? void 0 : er.primaryColor,
    secondaryColor: null == er ? void 0 : er.secondaryColor,
    tertiaryColor: null == er ? void 0 : er.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == eE ? void 0 : eE.animate
  }), eS = (0, d.EJ)(ee + et), eN = (null == o ? void 0 : o.isPrivate()) && null != el, ef = {
    className: a()([v.username, ep && eT, es]),
    style: (() => {
      if (ea) return ep && null != er ? Z(M({}, eI), {
        textDecorationColor: null == er ? void 0 : er.primaryColor
      }) : null != en ? {
        color: en
      } : void 0
    })(),
    onClick: V,
    onContextMenu: B,
    children: eN ? (0, i.jsx)(S.Z, {
      userName: eS,
      displayNameStyles: el,
      effectDisplayType: T.F.PLAIN
    }) : eS,
    "data-text": ee + et
  }, eA = l.useMemo(() => L && !F ? (0, i.jsx)(A.ZP, {
    primaryGuild: n.primaryGuild,
    userId: r.author.id,
    contextGuildId: J,
    className: v.clanTagChiplet
  }) : null, [L, n.primaryGuild, J, r.author.id, F]), em = null != I ? I : r.author, eg = null != W && null != x ? (0, i.jsx)(y.Z, {
    targetElementRef: X,
    user: em,
    renderPopout: W,
    shouldShow: x,
    shouldPreload: e_,
    position: c.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != J ? (0, P.JM)({
      guildId: J,
      userId: em.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: H,
    clickTrap: x,
    children: e => {
      var {
        onClick: t
      } = e, n = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["onClick"]);
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.P3F, Z(M({
          tag: "span",
          innerRef: X
        }, n, ef), {
          className: a()(ef.className, v.clickable, G)
        })), eA]
      })
    }
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.P3F, Z(M({}, ef), {
      className: a()(ef.className, G)
    })), eA]
  }), eR = null != Y ? Y[0] : null, ey = null != Y ? Y[1] : null;
  return (0, i.jsxs)(p.Gt, {
    value: $,
    children: [null != eR && !w && L ? (0, i.jsxs)(i.Fragment, {
      children: [" ", eR, " "]
    }) : null, "dot" === eo ? (0, i.jsx)(_.FhE, {
      color: en,
      colors: eO ? er : null,
      name: ei,
      className: v.roleDot,
      hoverOverride: null == eE ? void 0 : eE.animate
    }) : null, eg, !L && !F && (0, i.jsx)(A.ZP, {
      primaryGuild: n.primaryGuild,
      userId: r.author.id,
      contextGuildId: J,
      className: v.clanTagChiplet
    }), null != ey ? ey : null, null == eR || w || L ? null : eR, null != r && (0, D.f)(r) && ec && z ? (0, i.jsx)(j, {}) : null]
  })
}