/** Chunk was on 95477 **/
r.d(t, {
  Z: () => E,
  a: () => T
});
var n, l = r(200651),
  i = r(192379),
  a = r(120356),
  o = r.n(a),
  c = r(873546),
  s = r(442837),
  u = r(481060),
  m = r(607070),
  p = r(100527),
  d = r(906732),
  f = r(385499),
  b = r(979264),
  y = r(372900),
  O = r(142375),
  g = r(477747),
  j = r(477734),
  v = r(823415),
  h = r(670188),
  x = r(768581),
  P = r(463396),
  S = r(935910),
  N = r(848697);

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
var T = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function C(e) {
  let {
    compact: t
  } = e;
  return (0, l.jsx)(f.Z, {
    className: t ? N.botTagCompact : N.botTagCozy,
    type: f.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function E(e) {
  var t;
  let {
    author: r,
    message: n,
    channel: a,
    userOverride: f,
    compact: T = !1,
    withMentionPrefix: E = !1,
    showPopout: Z = !1,
    className: k,
    onClick: A,
    onContextMenu: I,
    onPopoutRequestClose: D,
    renderPopout: _,
    renderRemixTag: F = !1,
    decorations: L,
    previewGuildId: M
  } = e, G = i.useRef(null), B = i.useContext(y.Z), z = null != (t = null == a ? void 0 : a.guild_id) ? t : B, {
    analyticsLocations: U
  } = (0, d.ZP)(p.Z.USERNAME), H = E ? "@" : "", {
    nick: W,
    colorString: J,
    colorStrings: V,
    colorRoleName: X
  } = r, Y = (0, s.e7)([m.Z], () => m.Z.roleStyle), $ = "username" === Y, q = (0, j.X$)(), Q = (0, g.Z)(null != M ? M : z, "BaseUsername"), K = (0, v.ic)({
    location: "BaseUsername"
  }), ee = (0, S.Z)(n), et = $ && Q && null != V && null != V.primaryColor && null != V.secondaryColor, er = (0, O.N)(null == V ? void 0 : V.primaryColor, null == V ? void 0 : V.secondaryColor, null == V ? void 0 : V.tertiaryColor), {
    text: en,
    gradient: el
  } = et ? er : {
    text: {},
    gradient: {}
  }, ei = {
    className: o()([N.username, et && en.gradientClassName, et && el.gradientClassName]),
    style: (() => {
      if ($) return et && null != V ? w({}, en.gradientStyle) : null != J ? {
        color: J
      } : void 0
    })(),
    onClick: A,
    onContextMenu: I,
    children: H + W,
    "data-text": H + W
  }, ea = i.useMemo(() => T ? (0, l.jsx)(b.ZP, {
    primaryGuild: r.primaryGuild,
    userId: n.author.id,
    contextGuildId: z,
    className: N.clanTagChiplet
  }) : null, [T, r.primaryGuild, z, n.author.id]), eo = null != f ? f : n.author, ec = null != _ && null != Z ? (0, l.jsx)(h.Z, {
    targetElementRef: G,
    user: eo,
    renderPopout: _,
    shouldShow: Z,
    shouldShowOnHover: ee && K,
    shouldPreload: ee,
    position: c.tq ? "window_center" : "right",
    avatarUrl: null != r.guildMemberAvatar && null != z ? (0, x.JM)({
      guildId: z,
      userId: eo.id,
      avatar: r.guildMemberAvatar,
      size: 80
    }) : void 0,
    onRequestClose: D,
    clickTrap: Z,
    children: e => {
      var {
        onClick: t
      } = e, r = function(e, t) {
        if (null == e) return {};
        var r, n, l = function(e, t) {
          if (null == e) return {};
          var r, n, l = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
          return l
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
        }
        return l
      }(e, ["onClick"]);
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.P3F, R(w({
          tag: "span",
          innerRef: G
        }, r, ei), {
          className: o()(ei.className, N.clickable, k)
        })), ea]
      })
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.P3F, R(w({}, ei), {
      className: o()(ei.className, k)
    })), ea]
  }), es = null != L ? L[0] : null, eu = null != L ? L[1] : null;
  return (0, l.jsxs)(d.Gt, {
    value: U,
    children: [null != es && T ? (0, l.jsxs)(l.Fragment, {
      children: [" ", es, " "]
    }) : null, "dot" === Y ? (0, l.jsx)(u.FhE, {
      color: J,
      name: X,
      className: N.roleDot
    }) : null, ec, !T && (0, l.jsx)(b.ZP, {
      primaryGuild: r.primaryGuild,
      userId: n.author.id,
      contextGuildId: z,
      className: N.clanTagChiplet
    }), null != eu ? eu : null, null == es || T ? null : es, null != n && (0, P.f)(n) && q && F ? (0, l.jsx)(C, {}) : null]
  })
}