/** Chunk was on 40694 **/
t.d(r, {
  Z: () => k,
  a: () => Z
});
var n, l = t(255367),
  o = t(73800),
  i = t(120356),
  a = t.n(i),
  u = t(873546),
  c = t(442837),
  s = t(573385),
  d = t(865672),
  f = t(481060),
  m = t(607070),
  p = t(100527),
  y = t(906732),
  b = t(385499),
  g = t(372900),
  v = t(172751),
  O = t(606318),
  h = t(402235),
  x = t(477734),
  S = t(670188),
  R = t(768581),
  j = t(585483),
  P = t(463396),
  T = t(935910),
  E = t(981631),
  A = t(848697);

function N(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      var n;
      n = t[r], r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n
    })
  }
  return e
}

function C(e, r) {
  return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e
}
var Z = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function _(e) {
  let {
    compact: r
  } = e;
  return (0, l.jsx)(b.Z, {
    className: r ? A.botTagCompact : A.botTagCozy,
    type: b.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function k(e) {
  var r;
  let {
    author: t,
    message: n,
    channel: i,
    userOverride: b,
    compact: Z = !1,
    withMentionPrefix: k = !1,
    showPopout: w = !1,
    hideGuildTag: I = !1,
    hideSystemTag: G = !1,
    className: M,
    onClick: D,
    onContextMenu: F,
    onPopoutRequestClose: B,
    renderPopout: U,
    renderRemixTag: L = !1,
    decorations: z,
    previewGuildId: V,
    subscribeToGroupId: H
  } = e, X = o.useRef(null), J = o.useContext(g.Z), Y = null != (r = null == i ? void 0 : i.guild_id) ? r : J, {
    analyticsLocations: q
  } = (0, y.ZP)(p.Z.USERNAME), K = k ? "@" : "", {
    nick: W,
    colorString: $,
    colorStrings: Q,
    colorRoleName: ee
  } = t, er = (0, c.e7)([m.Z], () => m.Z.roleStyle), et = "username" === er, en = (0, x.X$)(), el = (0, h.ZP)(null != V ? V : Y, t.authorId), eo = (0, T.Z)(n), ei = o.useContext(s.d), ea = el && (0, O.S2)(t), eu = et && ea;
  o.useEffect(() => {
    if (null == H || !eu || null == ei) return;
    let {
      setAnimate: e
    } = ei;
    return j.S.subscribeKeyed(E.LPv.ANIMATE_CHAT_AVATAR, "".concat(H, ":").concat(n.author.id), e), () => void j.S.unsubscribeKeyed(E.LPv.ANIMATE_CHAT_AVATAR, "".concat(H, ":").concat(n.author.id), e)
  }, [n.author.id, H, eu, ei]);
  let {
    gradientStyle: ec,
    gradientClassname: es
  } = (0, f.Icv)({
    primaryColor: null == Q ? void 0 : Q.primaryColor,
    secondaryColor: null == Q ? void 0 : Q.secondaryColor,
    tertiaryColor: null == Q ? void 0 : Q.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == ei ? void 0 : ei.animate
  }), ed = (0, d.EJ)(K + W), ef = {
    className: a()([A.username, eu && es]),
    style: (() => {
      if (et) return eu && null != Q ? C(N({}, ec), {
        textDecorationColor: null == Q ? void 0 : Q.primaryColor
      }) : null != $ ? {
        color: $
      } : void 0
    })(),
    onClick: D,
    onContextMenu: F,
    children: ed,
    "data-text": K + W
  }, em = o.useMemo(() => Z && !I ? (0, l.jsx)(v.ZP, {
    primaryGuild: t.primaryGuild,
    userId: n.author.id,
    contextGuildId: Y,
    className: A.clanTagChiplet
  }) : null, [Z, t.primaryGuild, Y, n.author.id, I]), ep = null != b ? b : n.author, ey = null != U && null != w ? (0, l.jsx)(S.Z, {
    targetElementRef: X,
    user: ep,
    renderPopout: U,
    shouldShow: w,
    shouldPreload: eo,
    position: u.tq ? "window_center" : "right",
    avatarUrl: null != t.guildMemberAvatar && null != Y ? (0, R.JM)({
      guildId: Y,
      userId: ep.id,
      avatar: t.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: B,
    clickTrap: w,
    children: e => {
      var {
        onClick: r
      } = e, t = function(e, r) {
        if (null == e) return {};
        var t, n, l = function(e, r) {
          if (null == e) return {};
          var t, n, l = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) t = o[n], r.indexOf(t) >= 0 || (l[t] = e[t]);
          return l
        }(e, r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) t = o[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
        }
        return l
      }(e, ["onClick"]);
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.P3F, C(N({
          tag: "span",
          innerRef: X
        }, t, ef), {
          className: a()(ef.className, A.clickable, M)
        })), em]
      })
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f.P3F, C(N({}, ef), {
      className: a()(ef.className, M)
    })), em]
  }), eb = null != z ? z[0] : null, eg = null != z ? z[1] : null;
  return (0, l.jsxs)(y.Gt, {
    value: q,
    children: [null != eb && !G && Z ? (0, l.jsxs)(l.Fragment, {
      children: [" ", eb, " "]
    }) : null, "dot" === er ? (0, l.jsx)(f.FhE, {
      color: $,
      colors: ea ? Q : null,
      name: ee,
      className: A.roleDot,
      hoverOverride: null == ei ? void 0 : ei.animate
    }) : null, ey, !Z && !I && (0, l.jsx)(v.ZP, {
      primaryGuild: t.primaryGuild,
      userId: n.author.id,
      contextGuildId: Y,
      className: A.clanTagChiplet
    }), null != eg ? eg : null, null == eb || G || Z ? null : eb, null != n && (0, P.f)(n) && en && L ? (0, l.jsx)(_, {}) : null]
  })
}