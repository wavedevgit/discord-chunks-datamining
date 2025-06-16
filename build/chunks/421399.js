/** Chunk was on 48057 **/
n.d(t, {
  Z: () => k,
  a: () => U
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
  I = n(100527),
  O = n(906732),
  T = n(385499),
  p = n(372900),
  N = n(172751),
  S = n(606318),
  A = n(402235),
  f = n(477734),
  R = n(670188),
  m = n(768581),
  C = n(585483),
  g = n(463396),
  P = n(935910),
  y = n(981631),
  D = n(848697);

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
var U = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

function M(e) {
  let {
    compact: t
  } = e;
  return (0, i.jsx)(T.Z, {
    className: t ? D.botTagCompact : D.botTagCozy,
    type: T.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function k(e) {
  var t;
  let {
    author: n,
    message: r,
    channel: o,
    userOverride: T,
    compact: U = !1,
    withMentionPrefix: k = !1,
    showPopout: v = !1,
    hideGuildTag: L = !1,
    hideSystemTag: Z = !1,
    className: j,
    onClick: x,
    onContextMenu: F,
    onPopoutRequestClose: G,
    renderPopout: V,
    renderRemixTag: w = !1,
    decorations: B,
    previewGuildId: W,
    subscribeToGroupId: z
  } = e, H = l.useRef(null), Y = l.useContext(p.Z), K = null != (t = null == o ? void 0 : o.guild_id) ? t : Y, {
    analyticsLocations: q
  } = (0, O.ZP)(I.Z.USERNAME), X = k ? "@" : "", {
    nick: J,
    colorString: Q,
    colorStrings: $,
    colorRoleName: ee
  } = n, et = (0, s.e7)([E.Z], () => E.Z.roleStyle), en = "username" === et, er = (0, f.X$)(), ei = (0, A.Z)(null != W ? W : K, "BaseUsername"), el = (0, P.Z)(r), eo = l.useContext(u.d), ea = ei && (0, S.S2)(n), ec = en && ea;
  l.useEffect(() => {
    if (null == z || !ec || null == eo) return;
    let {
      setAnimate: e
    } = eo;
    return C.S.subscribeKeyed(y.LPv.ANIMATE_CHAT_AVATAR, "".concat(z, ":").concat(r.author.id), e), () => void C.S.unsubscribeKeyed(y.LPv.ANIMATE_CHAT_AVATAR, "".concat(z, ":").concat(r.author.id), e)
  }, [r.author.id, z, ec, eo]);
  let {
    gradientStyle: es,
    gradientClassname: eu
  } = (0, _.Icv)({
    primaryColor: null == $ ? void 0 : $.primaryColor,
    secondaryColor: null == $ ? void 0 : $.secondaryColor,
    tertiaryColor: null == $ ? void 0 : $.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == eo ? void 0 : eo.animate
  }), ed = (0, d.EJ)(X + J), e_ = {
    className: a()([D.username, ec && eu]),
    style: (() => {
      if (en) return ec && null != $ ? h(b({}, es), {
        textDecorationColor: null == $ ? void 0 : $.primaryColor
      }) : null != Q ? {
        color: Q
      } : void 0
    })(),
    onClick: x,
    onContextMenu: F,
    children: ed,
    "data-text": X + J
  }, eE = l.useMemo(() => U && !L ? (0, i.jsx)(N.ZP, {
    primaryGuild: n.primaryGuild,
    userId: r.author.id,
    contextGuildId: K,
    className: D.clanTagChiplet
  }) : null, [U, n.primaryGuild, K, r.author.id, L]), eI = null != T ? T : r.author, eO = null != V && null != v ? (0, i.jsx)(R.Z, {
    targetElementRef: H,
    user: eI,
    renderPopout: V,
    shouldShow: v,
    shouldPreload: el,
    position: c.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != K ? (0, m.JM)({
      guildId: K,
      userId: eI.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: G,
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
          innerRef: H
        }, n, e_), {
          className: a()(e_.className, D.clickable, j)
        })), eE]
      })
    }
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.P3F, h(b({}, e_), {
      className: a()(e_.className, j)
    })), eE]
  }), eT = null != B ? B[0] : null, ep = null != B ? B[1] : null;
  return (0, i.jsxs)(O.Gt, {
    value: q,
    children: [null != eT && !Z && U ? (0, i.jsxs)(i.Fragment, {
      children: [" ", eT, " "]
    }) : null, "dot" === et ? (0, i.jsx)(_.FhE, {
      color: Q,
      colors: ea ? $ : null,
      name: ee,
      className: D.roleDot,
      hoverOverride: null == eo ? void 0 : eo.animate
    }) : null, eO, !U && !L && (0, i.jsx)(N.ZP, {
      primaryGuild: n.primaryGuild,
      userId: r.author.id,
      contextGuildId: K,
      className: D.clanTagChiplet
    }), null != ep ? ep : null, null == eT || Z || U ? null : eT, null != r && (0, g.f)(r) && er && w ? (0, i.jsx)(M, {}) : null]
  })
}