/** Chunk was on 48812 **/
n.d(t, {
  Z: () => Z,
  a: () => M
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
  T = n(372900),
  S = n(172751),
  N = n(606318),
  f = n(402235),
  m = n(477734),
  A = n(670188),
  g = n(485386),
  R = n(768581),
  C = n(585483),
  P = n(463396),
  y = n(935910),
  b = n(981631),
  D = n(848697);

function h(e) {
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

function U(e, t) {
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
var M = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

function v(e) {
  let {
    compact: t
  } = e;
  return (0, i.jsx)(p.Z, {
    className: t ? D.botTagCompact : D.botTagCozy,
    type: p.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function Z(e) {
  var t;
  let {
    author: n,
    message: r,
    channel: a,
    userOverride: p,
    compact: M = !1,
    withMentionPrefix: Z = !1,
    showPopout: L = !1,
    hideGuildTag: j = !1,
    hideSystemTag: k = !1,
    className: x,
    onClick: F,
    onContextMenu: G,
    onPopoutRequestClose: w,
    renderPopout: V,
    renderRemixTag: B = !1,
    decorations: W,
    previewGuildId: H,
    subscribeToGroupId: z
  } = e, Y = l.useRef(null), K = l.useContext(T.Z), q = null != (t = null == a ? void 0 : a.guild_id) ? t : K, {
    analyticsLocations: X
  } = (0, O.ZP)(I.Z.USERNAME), Q = Z ? "@" : "", {
    nick: J,
    colorString: $,
    colorStrings: ee,
    colorRoleName: et
  } = n, en = (0, s.e7)([E.Z], () => E.Z.roleStyle), er = "username" === en, ei = (0, m.X$)(), el = (0, s.e7)([g.Z], () => null == n.guildId || null == n.colorRoleId ? null : g.Z.getRole(n.guildId, n.colorRoleId)), ea = (0, f.yH)(null != H ? H : q, el), eo = (0, y.Z)(r), ec = l.useContext(u.d), es = ea && (0, N.S2)(n), eu = er && es;
  l.useEffect(() => {
    if (null == z || !eu || null == ec) return;
    let {
      setAnimate: e
    } = ec;
    return C.S.subscribeKeyed(b.LPv.ANIMATE_CHAT_AVATAR, "".concat(z, ":").concat(r.author.id), e), () => void C.S.unsubscribeKeyed(b.LPv.ANIMATE_CHAT_AVATAR, "".concat(z, ":").concat(r.author.id), e)
  }, [r.author.id, z, eu, ec]);
  let {
    gradientStyle: ed,
    gradientClassname: e_
  } = (0, _.Icv)({
    primaryColor: null == ee ? void 0 : ee.primaryColor,
    secondaryColor: null == ee ? void 0 : ee.secondaryColor,
    tertiaryColor: null == ee ? void 0 : ee.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == ec ? void 0 : ec.animate
  }), eE = (0, d.EJ)(Q + J), eI = {
    className: o()([D.username, eu && e_]),
    style: (() => {
      if (er) return eu && null != ee ? U(h({}, ed), {
        textDecorationColor: null == ee ? void 0 : ee.primaryColor
      }) : null != $ ? {
        color: $
      } : void 0
    })(),
    onClick: F,
    onContextMenu: G,
    children: eE,
    "data-text": Q + J
  }, eO = l.useMemo(() => M && !j ? (0, i.jsx)(S.ZP, {
    primaryGuild: n.primaryGuild,
    userId: r.author.id,
    contextGuildId: q,
    className: D.clanTagChiplet
  }) : null, [M, n.primaryGuild, q, r.author.id, j]), ep = null != p ? p : r.author, eT = null != V && null != L ? (0, i.jsx)(A.Z, {
    targetElementRef: Y,
    user: ep,
    renderPopout: V,
    shouldShow: L,
    shouldPreload: eo,
    position: c.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != q ? (0, R.JM)({
      guildId: q,
      userId: ep.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: w,
    clickTrap: L,
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
        children: [(0, i.jsx)(_.P3F, U(h({
          tag: "span",
          innerRef: Y
        }, n, eI), {
          className: o()(eI.className, D.clickable, x)
        })), eO]
      })
    }
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.P3F, U(h({}, eI), {
      className: o()(eI.className, x)
    })), eO]
  }), eS = null != W ? W[0] : null, eN = null != W ? W[1] : null;
  return (0, i.jsxs)(O.Gt, {
    value: X,
    children: [null != eS && !k && M ? (0, i.jsxs)(i.Fragment, {
      children: [" ", eS, " "]
    }) : null, "dot" === en ? (0, i.jsx)(_.FhE, {
      color: $,
      colors: es ? ee : null,
      name: et,
      className: D.roleDot,
      hoverOverride: null == ec ? void 0 : ec.animate
    }) : null, eT, !M && !j && (0, i.jsx)(S.ZP, {
      primaryGuild: n.primaryGuild,
      userId: r.author.id,
      contextGuildId: q,
      className: D.clanTagChiplet
    }), null != eN ? eN : null, null == eS || k || M ? null : eS, null != r && (0, P.f)(r) && ei && B ? (0, i.jsx)(v, {}) : null]
  })
}