/** Chunk was on 44247 **/
n.d(t, {
  Z: () => M,
  a: () => D
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
  I = n(906732),
  p = n(385499),
  T = n(372900),
  S = n(172751),
  N = n(477747),
  f = n(477734),
  m = n(670188),
  A = n(768581),
  R = n(585483),
  g = n(463396),
  C = n(935910),
  P = n(981631),
  y = n(848697);

function b(e) {
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

function h(e, t) {
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
var D = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

function U(e) {
  let {
    compact: t
  } = e;
  return (0, i.jsx)(p.Z, {
    className: t ? y.botTagCompact : y.botTagCozy,
    type: p.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function M(e) {
  var t;
  let {
    author: n,
    message: r,
    channel: o,
    userOverride: p,
    compact: D = !1,
    withMentionPrefix: M = !1,
    showPopout: v = !1,
    hideGuildTag: k = !1,
    hideSystemTag: L = !1,
    className: Z,
    onClick: j,
    onContextMenu: x,
    onPopoutRequestClose: F,
    renderPopout: w,
    renderRemixTag: G = !1,
    decorations: V,
    previewGuildId: B,
    subscribeToGroupId: W
  } = e, z = l.useRef(null), H = l.useContext(T.Z), Y = null != (t = null == o ? void 0 : o.guild_id) ? t : H, {
    analyticsLocations: K
  } = (0, I.ZP)(O.Z.USERNAME), q = M ? "@" : "", {
    nick: X,
    colorString: J,
    colorStrings: Q,
    colorRoleName: $
  } = n, ee = (0, s.e7)([E.Z], () => E.Z.roleStyle), et = "username" === ee, en = (0, f.X$)(), er = (0, N.Z)(null != B ? B : Y, "BaseUsername"), ei = (0, C.Z)(r), el = l.useContext(u.d), eo = er && null != Q && null != Q.primaryColor && null != Q.secondaryColor, ea = et && eo;
  l.useEffect(() => {
    if (null == W || !ea || null == el) return;
    let {
      setAnimate: e
    } = el;
    return R.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(W, ":").concat(r.author.id), e), () => void R.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(W, ":").concat(r.author.id), e)
  }, [r.author.id, W, ea, el]);
  let {
    gradientStyle: ec,
    gradientClassname: es
  } = (0, _.Icv)({
    primaryColor: null == Q ? void 0 : Q.primaryColor,
    secondaryColor: null == Q ? void 0 : Q.secondaryColor,
    tertiaryColor: null == Q ? void 0 : Q.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == el ? void 0 : el.animate
  }), eu = (0, d.EJ)(q + X), ed = {
    className: a()([y.username, ea && es]),
    style: (() => {
      if (et) return ea && null != Q ? h(b({}, ec), {
        textDecorationColor: null == Q ? void 0 : Q.primaryColor
      }) : null != J ? {
        color: J
      } : void 0
    })(),
    onClick: j,
    onContextMenu: x,
    children: eu,
    "data-text": q + X
  }, e_ = l.useMemo(() => D && !k ? (0, i.jsx)(S.ZP, {
    primaryGuild: n.primaryGuild,
    userId: r.author.id,
    contextGuildId: Y,
    className: y.clanTagChiplet
  }) : null, [D, n.primaryGuild, Y, r.author.id, k]), eE = null != p ? p : r.author, eO = null != w && null != v ? (0, i.jsx)(m.Z, {
    targetElementRef: z,
    user: eE,
    renderPopout: w,
    shouldShow: v,
    shouldPreload: ei,
    position: c.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != Y ? (0, A.JM)({
      guildId: Y,
      userId: eE.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: F,
    clickTrap: v,
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
        children: [(0, i.jsx)(_.P3F, h(b({
          tag: "span",
          innerRef: z
        }, n, ed), {
          className: a()(ed.className, y.clickable, Z)
        })), e_]
      })
    }
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.P3F, h(b({}, ed), {
      className: a()(ed.className, Z)
    })), e_]
  }), eI = null != V ? V[0] : null, ep = null != V ? V[1] : null;
  return (0, i.jsxs)(I.Gt, {
    value: K,
    children: [null != eI && !L && D ? (0, i.jsxs)(i.Fragment, {
      children: [" ", eI, " "]
    }) : null, "dot" === ee ? (0, i.jsx)(_.FhE, {
      color: J,
      colors: eo ? Q : null,
      name: $,
      className: y.roleDot,
      hoverOverride: null == el ? void 0 : el.animate
    }) : null, eO, !D && !k && (0, i.jsx)(S.ZP, {
      primaryGuild: n.primaryGuild,
      userId: r.author.id,
      contextGuildId: Y,
      className: y.clanTagChiplet
    }), null != ep ? ep : null, null == eI || L || D ? null : eI, null != r && (0, g.f)(r) && en && G ? (0, i.jsx)(U, {}) : null]
  })
}