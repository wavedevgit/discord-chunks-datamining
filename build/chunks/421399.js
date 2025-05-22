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
    className: L,
    onClick: Z,
    onContextMenu: j,
    onPopoutRequestClose: x,
    renderPopout: F,
    renderRemixTag: w = !1,
    decorations: G,
    previewGuildId: V,
    subscribeToGroupId: B
  } = e, W = l.useRef(null), z = l.useContext(T.Z), H = null != (t = null == o ? void 0 : o.guild_id) ? t : z, {
    analyticsLocations: Y
  } = (0, I.ZP)(O.Z.USERNAME), K = M ? "@" : "", {
    nick: q,
    colorString: X,
    colorStrings: J,
    colorRoleName: Q
  } = n, $ = (0, s.e7)([E.Z], () => E.Z.roleStyle), ee = "username" === $, et = (0, f.X$)(), en = (0, N.Z)(null != V ? V : H, "BaseUsername"), er = (0, C.Z)(r), ei = l.useContext(u.d), el = en && null != J && null != J.primaryColor && null != J.secondaryColor, eo = ee && el;
  l.useEffect(() => {
    if (null == B || !eo || null == ei) return;
    let {
      setAnimate: e
    } = ei;
    return R.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(B, ":").concat(r.author.id), e), () => void R.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(B, ":").concat(r.author.id), e)
  }, [r.author.id, B, eo, ei]);
  let {
    gradientStyle: ea,
    gradientClassname: ec
  } = (0, _.Icv)({
    primaryColor: null == J ? void 0 : J.primaryColor,
    secondaryColor: null == J ? void 0 : J.secondaryColor,
    tertiaryColor: null == J ? void 0 : J.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == ei ? void 0 : ei.animate
  }), es = (0, d.EJ)(K + q), eu = {
    className: a()([y.username, eo && ec]),
    style: (() => {
      if (ee) return eo && null != J ? h(b({}, ea), {
        textDecorationColor: null == J ? void 0 : J.primaryColor
      }) : null != X ? {
        color: X
      } : void 0
    })(),
    onClick: Z,
    onContextMenu: j,
    children: es,
    "data-text": K + q
  }, ed = l.useMemo(() => D && !k ? (0, i.jsx)(S.ZP, {
    primaryGuild: n.primaryGuild,
    userId: r.author.id,
    contextGuildId: H,
    className: y.clanTagChiplet
  }) : null, [D, n.primaryGuild, H, r.author.id, k]), e_ = null != p ? p : r.author, eE = null != F && null != v ? (0, i.jsx)(m.Z, {
    targetElementRef: W,
    user: e_,
    renderPopout: F,
    shouldShow: v,
    shouldPreload: er,
    position: c.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != H ? (0, A.JM)({
      guildId: H,
      userId: e_.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: x,
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
          innerRef: W
        }, n, eu), {
          className: a()(eu.className, y.clickable, L)
        })), ed]
      })
    }
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.P3F, h(b({}, eu), {
      className: a()(eu.className, L)
    })), ed]
  }), eO = null != G ? G[0] : null, eI = null != G ? G[1] : null;
  return (0, i.jsxs)(I.Gt, {
    value: Y,
    children: [null != eO && D ? (0, i.jsxs)(i.Fragment, {
      children: [" ", eO, " "]
    }) : null, "dot" === $ ? (0, i.jsx)(_.FhE, {
      color: X,
      colors: el ? J : null,
      name: Q,
      className: y.roleDot
    }) : null, eE, !D && !k && (0, i.jsx)(S.ZP, {
      primaryGuild: n.primaryGuild,
      userId: r.author.id,
      contextGuildId: H,
      className: y.clanTagChiplet
    }), null != eI ? eI : null, null == eO || D ? null : eO, null != r && (0, g.f)(r) && et && w ? (0, i.jsx)(U, {}) : null]
  })
}