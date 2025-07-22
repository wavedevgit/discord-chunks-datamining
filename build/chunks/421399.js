/** Chunk was on 40694 **/
n.d(r, {
  Z: () => M,
  a: () => w
});
var t, l = n(255367),
  o = n(73800),
  i = n(120356),
  a = n.n(i),
  u = n(873546),
  c = n(442837),
  s = n(573385),
  d = n(865672),
  f = n(481060),
  m = n(607070),
  p = n(100527),
  y = n(906732),
  b = n(385499),
  g = n(821795),
  v = n(892567),
  O = n(7284),
  x = n(372900),
  h = n(172751),
  S = n(606318),
  R = n(402235),
  j = n(477734),
  P = n(670188),
  T = n(485386),
  A = n(768581),
  E = n(585483),
  N = n(463396),
  I = n(935910),
  C = n(981631),
  Z = n(848697);

function _(e) {
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

function k(e, r) {
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
var w = ((t = {})[t.SYSTEM_TAG = 0] = "SYSTEM_TAG", t[t.BADGES = 1] = "BADGES", t);

function G(e) {
  let {
    compact: r
  } = e;
  return (0, l.jsx)(b.Z, {
    className: r ? Z.botTagCompact : Z.botTagCozy,
    type: b.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function M(e) {
  var r;
  let {
    author: n,
    message: t,
    channel: i,
    userOverride: b,
    compact: w = !1,
    withMentionPrefix: M = !1,
    showPopout: D = !1,
    hideGuildTag: F = !1,
    hideSystemTag: B = !1,
    className: L,
    onClick: U,
    onContextMenu: z,
    onPopoutRequestClose: H,
    renderPopout: V,
    renderRemixTag: X = !1,
    decorations: J,
    previewGuildId: Y,
    subscribeToGroupId: q
  } = e, K = o.useRef(null), W = o.useContext(x.Z), $ = null != (r = null == i ? void 0 : i.guild_id) ? r : W, {
    analyticsLocations: Q
  } = (0, y.ZP)(p.Z.USERNAME), ee = M ? "@" : "", {
    nick: er,
    colorString: en,
    colorStrings: et,
    colorRoleName: el,
    displayNameStyles: eo
  } = n, ei = (0, c.e7)([m.Z], () => m.Z.roleStyle), ea = "username" === ei, eu = (0, j.X$)(), ec = (0, O.j)({
    displayNameStyles: eo
  }), es = (0, c.e7)([T.Z], () => null == n.guildId || null == n.colorRoleId ? null : T.Z.getRole(n.guildId, n.colorRoleId)), ed = (0, R.yH)(null != Y ? Y : $, es), ef = (0, I.Z)(t), em = o.useContext(s.d), ep = ed && (0, S.S2)(n), ey = ea && ep;
  o.useEffect(() => {
    if (null == q || !ey || null == em) return;
    let {
      setAnimate: e
    } = em;
    return E.S.subscribeKeyed(C.LPv.ANIMATE_CHAT_AVATAR, "".concat(q, ":").concat(t.author.id), e), () => void E.S.unsubscribeKeyed(C.LPv.ANIMATE_CHAT_AVATAR, "".concat(q, ":").concat(t.author.id), e)
  }, [t.author.id, q, ey, em]);
  let {
    gradientStyle: eb,
    gradientClassname: eg
  } = (0, f.Icv)({
    primaryColor: null == et ? void 0 : et.primaryColor,
    secondaryColor: null == et ? void 0 : et.secondaryColor,
    tertiaryColor: null == et ? void 0 : et.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == em ? void 0 : em.animate
  }), ev = (0, d.EJ)(ee + er), eO = (null == i ? void 0 : i.isPrivate()) && null != eo, ex = {
    className: a()([Z.username, ey && eg, ec]),
    style: (() => {
      if (ea) return ey && null != et ? k(_({}, eb), {
        textDecorationColor: null == et ? void 0 : et.primaryColor
      }) : null != en ? {
        color: en
      } : void 0
    })(),
    onClick: U,
    onContextMenu: z,
    children: eO ? (0, l.jsx)(v.Z, {
      userName: ev,
      displayNameStyles: eo,
      effectDisplayType: g.F.PLAIN
    }) : ev,
    "data-text": ee + er
  }, eh = o.useMemo(() => w && !F ? (0, l.jsx)(h.ZP, {
    primaryGuild: n.primaryGuild,
    userId: t.author.id,
    contextGuildId: $,
    className: Z.clanTagChiplet
  }) : null, [w, n.primaryGuild, $, t.author.id, F]), eS = null != b ? b : t.author, eR = null != V && null != D ? (0, l.jsx)(P.Z, {
    targetElementRef: K,
    user: eS,
    renderPopout: V,
    shouldShow: D,
    shouldPreload: ef,
    position: u.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != $ ? (0, A.JM)({
      guildId: $,
      userId: eS.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: H,
    clickTrap: D,
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
        children: [(0, l.jsx)(f.P3F, k(_({
          tag: "span",
          innerRef: K
        }, n, ex), {
          className: a()(ex.className, Z.clickable, L)
        })), eh]
      })
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f.P3F, k(_({}, ex), {
      className: a()(ex.className, L)
    })), eh]
  }), ej = null != J ? J[0] : null, eP = null != J ? J[1] : null;
  return (0, l.jsxs)(y.Gt, {
    value: Q,
    children: [null != ej && !B && w ? (0, l.jsxs)(l.Fragment, {
      children: [" ", ej, " "]
    }) : null, "dot" === ei ? (0, l.jsx)(f.FhE, {
      color: en,
      colors: ep ? et : null,
      name: el,
      className: Z.roleDot,
      hoverOverride: null == em ? void 0 : em.animate
    }) : null, eR, !w && !F && (0, l.jsx)(h.ZP, {
      primaryGuild: n.primaryGuild,
      userId: t.author.id,
      contextGuildId: $,
      className: Z.clanTagChiplet
    }), null != eP ? eP : null, null == ej || B || w ? null : ej, null != t && (0, N.f)(t) && eu && X ? (0, l.jsx)(G, {}) : null]
  })
}