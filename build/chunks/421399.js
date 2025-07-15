/** Chunk was on 48812 **/
n.d(t, {
  Z: () => L,
  a: () => v
});
var r, i = n(255367),
  l = n(73800),
  a = n(120356),
  o = n.n(a),
  c = n(873546),
  s = n(442837),
  u = n(573385),
  d = n(865672),
  _ = n(481060),
  E = n(607070),
  I = n(100527),
  O = n(906732),
  p = n(385499),
  T = n(7284),
  S = n(372900),
  N = n(172751),
  f = n(606318),
  m = n(402235),
  A = n(477734),
  g = n(670188),
  R = n(485386),
  C = n(768581),
  P = n(585483),
  y = n(463396),
  b = n(935910),
  D = n(981631),
  h = n(848697);

function U(e) {
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

function M(e, t) {
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
var v = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

function Z(e) {
  let {
    compact: t
  } = e;
  return (0, i.jsx)(p.Z, {
    className: t ? h.botTagCompact : h.botTagCozy,
    type: p.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function L(e) {
  var t;
  let {
    author: n,
    message: r,
    channel: a,
    userOverride: p,
    compact: v = !1,
    withMentionPrefix: L = !1,
    showPopout: j = !1,
    hideGuildTag: k = !1,
    hideSystemTag: x = !1,
    className: F,
    onClick: G,
    onContextMenu: w,
    onPopoutRequestClose: V,
    renderPopout: B,
    renderRemixTag: W = !1,
    decorations: H,
    previewGuildId: z,
    subscribeToGroupId: Y
  } = e, K = l.useRef(null), q = l.useContext(S.Z), X = null != (t = null == a ? void 0 : a.guild_id) ? t : q, {
    analyticsLocations: Q
  } = (0, O.ZP)(I.Z.USERNAME), J = L ? "@" : "", {
    nick: $,
    colorString: ee,
    colorStrings: et,
    colorRoleName: en,
    displayNameStyles: er
  } = n, ei = (0, s.e7)([E.Z], () => E.Z.roleStyle), el = "username" === ei, ea = (0, A.X$)(), eo = (0, T.j)({
    displayNameStyles: er
  }), ec = (0, s.e7)([R.Z], () => null == n.guildId || null == n.colorRoleId ? null : R.Z.getRole(n.guildId, n.colorRoleId)), es = (0, m.yH)(null != z ? z : X, ec), eu = (0, b.Z)(r), ed = l.useContext(u.d), e_ = es && (0, f.S2)(n), eE = el && e_;
  l.useEffect(() => {
    if (null == Y || !eE || null == ed) return;
    let {
      setAnimate: e
    } = ed;
    return P.S.subscribeKeyed(D.LPv.ANIMATE_CHAT_AVATAR, "".concat(Y, ":").concat(r.author.id), e), () => void P.S.unsubscribeKeyed(D.LPv.ANIMATE_CHAT_AVATAR, "".concat(Y, ":").concat(r.author.id), e)
  }, [r.author.id, Y, eE, ed]);
  let {
    gradientStyle: eI,
    gradientClassname: eO
  } = (0, _.Icv)({
    primaryColor: null == et ? void 0 : et.primaryColor,
    secondaryColor: null == et ? void 0 : et.secondaryColor,
    tertiaryColor: null == et ? void 0 : et.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == ed ? void 0 : ed.animate
  }), ep = (0, d.EJ)(J + $), eT = {
    className: o()([h.username, eE && eO, eo]),
    style: (() => {
      if (el) return eE && null != et ? M(U({}, eI), {
        textDecorationColor: null == et ? void 0 : et.primaryColor
      }) : null != ee ? {
        color: ee
      } : void 0
    })(),
    onClick: G,
    onContextMenu: w,
    children: ep,
    "data-text": J + $
  }, eS = l.useMemo(() => v && !k ? (0, i.jsx)(N.ZP, {
    primaryGuild: n.primaryGuild,
    userId: r.author.id,
    contextGuildId: X,
    className: h.clanTagChiplet
  }) : null, [v, n.primaryGuild, X, r.author.id, k]), eN = null != p ? p : r.author, ef = null != B && null != j ? (0, i.jsx)(g.Z, {
    targetElementRef: K,
    user: eN,
    renderPopout: B,
    shouldShow: j,
    shouldPreload: eu,
    position: c.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != X ? (0, C.JM)({
      guildId: X,
      userId: eN.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: V,
    clickTrap: j,
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
        children: [(0, i.jsx)(_.P3F, M(U({
          tag: "span",
          innerRef: K
        }, n, eT), {
          className: o()(eT.className, h.clickable, F)
        })), eS]
      })
    }
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.P3F, M(U({}, eT), {
      className: o()(eT.className, F)
    })), eS]
  }), em = null != H ? H[0] : null, eA = null != H ? H[1] : null;
  return (0, i.jsxs)(O.Gt, {
    value: Q,
    children: [null != em && !x && v ? (0, i.jsxs)(i.Fragment, {
      children: [" ", em, " "]
    }) : null, "dot" === ei ? (0, i.jsx)(_.FhE, {
      color: ee,
      colors: e_ ? et : null,
      name: en,
      className: h.roleDot,
      hoverOverride: null == ed ? void 0 : ed.animate
    }) : null, ef, !v && !k && (0, i.jsx)(N.ZP, {
      primaryGuild: n.primaryGuild,
      userId: r.author.id,
      contextGuildId: X,
      className: h.clanTagChiplet
    }), null != eA ? eA : null, null == em || x || v ? null : em, null != r && (0, y.f)(r) && ea && W ? (0, i.jsx)(Z, {}) : null]
  })
}