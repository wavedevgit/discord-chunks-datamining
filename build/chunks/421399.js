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
    className: I,
    onClick: G,
    onContextMenu: M,
    onPopoutRequestClose: D,
    renderPopout: F,
    renderRemixTag: B = !1,
    decorations: L,
    previewGuildId: U,
    subscribeToGroupId: z
  } = e, H = o.useRef(null), V = o.useContext(g.Z), X = null != (r = null == i ? void 0 : i.guild_id) ? r : V, {
    analyticsLocations: J
  } = (0, y.ZP)(p.Z.USERNAME), Y = _ ? "@" : "", {
    nick: q,
    colorString: K,
    colorStrings: W,
    colorRoleName: $
  } = n, Q = (0, c.e7)([m.Z], () => m.Z.roleStyle), ee = "username" === Q, er = (0, h.X$)(), en = (0, O.Z)(null != U ? U : X, "BaseUsername"), et = (0, E.Z)(t), el = o.useContext(s.d), eo = en && null != W && null != W.primaryColor && null != W.secondaryColor, ei = ee && eo;
  o.useEffect(() => {
    if (null == z || !ei || null == el) return;
    let {
      setAnimate: e
    } = el;
    return R.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(z, ":").concat(t.author.id), e), () => void R.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(z, ":").concat(t.author.id), e)
  }, [t.author.id, z, ei, el]);
  let {
    gradientStyle: eu,
    gradientClassname: ea
  } = (0, f.Icv)({
    primaryColor: null == W ? void 0 : W.primaryColor,
    secondaryColor: null == W ? void 0 : W.secondaryColor,
    tertiaryColor: null == W ? void 0 : W.tertiaryColor,
    roleStyle: "username",
    includeConvenienceGlow: !0,
    animateGradient: null == el ? void 0 : el.animate
  }), ec = (0, d.EJ)(Y + q), es = {
    className: u()([T.username, ei && ea]),
    style: (() => {
      if (ee) return ei && null != W ? C(A({}, eu), {
        textDecorationColor: null == W ? void 0 : W.primaryColor
      }) : null != K ? {
        color: K
      } : void 0
    })(),
    onClick: G,
    onContextMenu: M,
    children: ec,
    "data-text": Y + q
  }, ed = o.useMemo(() => N && !w ? (0, l.jsx)(v.ZP, {
    primaryGuild: n.primaryGuild,
    userId: t.author.id,
    contextGuildId: X,
    className: T.clanTagChiplet
  }) : null, [N, n.primaryGuild, X, t.author.id, w]), ef = null != b ? b : t.author, em = null != F && null != k ? (0, l.jsx)(x.Z, {
    targetElementRef: H,
    user: ef,
    renderPopout: F,
    shouldShow: k,
    shouldPreload: et,
    position: a.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != X ? (0, S.JM)({
      guildId: X,
      userId: ef.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: D,
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
          innerRef: H
        }, n, es), {
          className: u()(es.className, T.clickable, I)
        })), ed]
      })
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f.P3F, C(A({}, es), {
      className: u()(es.className, I)
    })), ed]
  }), ep = null != L ? L[0] : null, ey = null != L ? L[1] : null;
  return (0, l.jsxs)(y.Gt, {
    value: J,
    children: [null != ep && N ? (0, l.jsxs)(l.Fragment, {
      children: [" ", ep, " "]
    }) : null, "dot" === Q ? (0, l.jsx)(f.FhE, {
      color: K,
      colors: eo ? W : null,
      name: $,
      className: T.roleDot
    }) : null, em, !N && !w && (0, l.jsx)(v.ZP, {
      primaryGuild: n.primaryGuild,
      userId: t.author.id,
      contextGuildId: X,
      className: T.clanTagChiplet
    }), null != ey ? ey : null, null == ep || N ? null : ep, null != t && (0, j.f)(t) && er && B ? (0, l.jsx)(Z, {}) : null]
  })
}