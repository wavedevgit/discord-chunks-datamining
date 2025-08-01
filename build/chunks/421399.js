/** Chunk was on 40694 **/
t.d(n, {
  Z: () => M,
  a: () => C
});
var r, l = t(255367),
  o = t(73800),
  i = t(120356),
  u = t.n(i),
  a = t(873546),
  c = t(442837),
  s = t(573385),
  d = t(865672),
  f = t(481060),
  m = t(607070),
  p = t(100527),
  y = t(906732),
  b = t(385499),
  g = t(821795),
  v = t(892567),
  O = t(7284),
  x = t(372900),
  h = t(172751),
  S = t(606318),
  R = t(402235),
  j = t(477734),
  P = t(670188),
  T = t(485386),
  A = t(768581),
  E = t(585483),
  N = t(463396),
  I = t(935910),
  Z = t(981631),
  _ = t(848697);

function k(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = r
    })
  }
  return e
}

function w(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
var C = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

function G(e) {
  let {
    compact: n
  } = e;
  return (0, l.jsx)(b.Z, {
    className: n ? _.botTagCompact : _.botTagCozy,
    type: b.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function M(e) {
  var n;
  let {
    author: t,
    message: r,
    channel: i,
    userOverride: b,
    compact: C = !1,
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
  } = e, K = o.useRef(null), W = o.useContext(x.Z), $ = null != (n = null == i ? void 0 : i.guild_id) ? n : W, {
    analyticsLocations: Q
  } = (0, y.ZP)(p.Z.USERNAME), ee = M ? "@" : "", {
    nick: en,
    colorString: et,
    colorStrings: er,
    colorRoleName: el,
    displayNameStyles: eo
  } = t, ei = (0, c.e7)([m.Z], () => m.Z.roleStyle), eu = "username" === ei, ea = (0, j.X$)(), ec = (0, O.j)({
    displayNameStyles: eo
  }), es = (0, c.e7)([T.Z], () => null == t.guildId || null == t.colorRoleId ? null : T.Z.getRole(t.guildId, t.colorRoleId)), ed = (0, R.yH)(null != Y ? Y : $, es), ef = (0, I.Z)(r), em = o.useContext(s.d), ep = ed && (0, S.S2)(t), ey = eu && ep;
  o.useEffect(() => {
    if (null == q || !ey || null == em) return;
    let {
      setAnimate: e
    } = em;
    return E.S.subscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(q, ":").concat(r.author.id), e), () => void E.S.unsubscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(q, ":").concat(r.author.id), e)
  }, [r.author.id, q, ey, em]);
  let {
    gradientStyle: eb,
    gradientClassname: eg
  } = (0, f.Icv)({
    colorStrings: er,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == em ? void 0 : em.animate
  }), ev = (0, d.EJ)(ee + en), eO = (null == i ? void 0 : i.isPrivate()) && null != eo, ex = {
    className: u()([_.username, ey && eg, ec]),
    style: (() => {
      if (eu) {
        if (ey && null != er) {
          var e;
          return w(k({}, eb), {
            textDecorationColor: null != (e = null == er ? void 0 : er.primaryColor) ? e : void 0
          })
        }
        return null != et ? {
          color: et
        } : void 0
      }
    })(),
    onClick: U,
    onContextMenu: z,
    children: eO ? (0, l.jsx)(v.Z, {
      userName: ev,
      displayNameStyles: eo,
      effectDisplayType: g.F.PLAIN,
      loop: !0
    }) : ev,
    "data-text": ee + en
  }, eh = o.useMemo(() => C && !F ? (0, l.jsx)(h.ZP, {
    primaryGuild: t.primaryGuild,
    userId: r.author.id,
    contextGuildId: $,
    className: _.clanTagChiplet
  }) : null, [C, t.primaryGuild, $, r.author.id, F]), eS = null != b ? b : r.author, eR = null != V && null != D ? (0, l.jsx)(P.Z, {
    targetElementRef: K,
    user: eS,
    renderPopout: V,
    shouldShow: D,
    shouldPreload: ef,
    position: a.tq ? "window_center" : "right",
    avatarUrl: null != t.guildMemberAvatar && null != $ ? (0, A.JM)({
      guildId: $,
      userId: eS.id,
      avatar: t.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: H,
    clickTrap: D,
    children: e => {
      var {
        onClick: n
      } = e, t = function(e, n) {
        if (null == e) return {};
        var t, r, l = function(e, n) {
          if (null == e) return {};
          var t, r, l = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || (l[t] = e[t]);
          return l
        }(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) t = o[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
        }
        return l
      }(e, ["onClick"]);
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.P3F, w(k({
          tag: "span",
          innerRef: K
        }, t, ex), {
          className: u()(ex.className, _.clickable, L)
        })), eh]
      })
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f.P3F, w(k({}, ex), {
      className: u()(ex.className, L)
    })), eh]
  }), ej = null != J ? J[0] : null, eP = null != J ? J[1] : null;
  return (0, l.jsxs)(y.Gt, {
    value: Q,
    children: [null != ej && !B && C ? (0, l.jsxs)(l.Fragment, {
      children: [" ", ej, " "]
    }) : null, "dot" === ei ? (0, l.jsx)(f.FhE, {
      color: et,
      colors: ep ? er : null,
      name: el,
      className: _.roleDot,
      hoverOverride: null == em ? void 0 : em.animate
    }) : null, eR, !C && !F && (0, l.jsx)(h.ZP, {
      primaryGuild: t.primaryGuild,
      userId: r.author.id,
      contextGuildId: $,
      className: _.clanTagChiplet
    }), null != eP ? eP : null, null == ej || B || C ? null : ej, null != r && (0, N.f)(r) && ea && X ? (0, l.jsx)(G, {}) : null]
  })
}