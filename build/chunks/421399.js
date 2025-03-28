/** Chunk was on 95477 **/
r.d(t, {
  Z: () => E,
  a: () => R
});
var n, o = r(200651),
  i = r(192379),
  l = r(120356),
  a = r.n(l),
  c = r(873546),
  s = r(442837),
  u = r(481060),
  m = r(607070),
  p = r(100527),
  d = r(906732),
  f = r(385499),
  b = r(979264),
  y = r(372900),
  g = r(477734),
  O = r(823415),
  h = r(754047),
  j = r(184301),
  v = r(768581),
  x = r(463396),
  P = r(981631),
  S = r(432957);

function T(e) {
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

function w(e, t) {
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
var R = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function N(e) {
  let {
    compact: t
  } = e;
  return (0, o.jsx)(f.Z, {
    className: t ? S.botTagCompact : S.botTagCozy,
    type: f.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function E(e) {
  var t;
  let r, {
      author: n,
      message: l,
      channel: f,
      userOverride: R,
      compact: E = !1,
      withMentionPrefix: I = !1,
      showPopout: k = !1,
      className: C,
      onClick: Z,
      onContextMenu: A,
      onPopoutRequestClose: _,
      renderPopout: M,
      renderRemixTag: D = !1,
      decorations: L
    } = e,
    F = i.useRef(null),
    G = i.useContext(y.Z),
    B = null !== (t = null == f ? void 0 : f.guild_id) && void 0 !== t ? t : G,
    {
      analyticsLocations: z
    } = (0, d.ZP)(p.Z.USERNAME),
    {
      nick: U,
      colorString: H,
      colorRoleName: W
    } = n,
    J = null != l.messageReference && null != l.webhookId && l.hasFlag(P.iLy.IS_CROSSPOST),
    X = (0, s.e7)([m.Z], () => m.Z.roleStyle),
    V = (0, g.X$)(),
    Y = {
      className: S.username,
      style: "username" === X && null != H ? {
        color: H
      } : void 0,
      onClick: Z,
      onContextMenu: A,
      children: (I ? "@" : "") + U
    };

  function q() {
    let e = null != R ? R : l.author;
    return (0, j.Z)(e.id, null != n.guildMemberAvatar && null != B ? (0, v.JM)({
      guildId: B,
      userId: e.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : e.getAvatarURL(B, 80), {
      guildId: B,
      channelId: l.channel_id
    })
  }
  let $ = i.useMemo(() => E ? (0, o.jsx)(b.ZP, {
      primaryGuild: n.primaryGuild,
      userId: l.author.id,
      contextGuildId: B,
      className: S.clanTagChiplet
    }) : null, [E, n.primaryGuild, B, l.author.id]),
    Q = (0, O.nT)({
      location: "BaseUsername"
    }),
    {
      showPopoutFromHover: K,
      handleMouseEnter: ee,
      handleMouseLeave: et
    } = (0, h.Z)({
      shouldShowPopoutOnHover: Q,
      handlePreload: q
    });
  if (null != M && null != k) {
    let e = (0, o.jsx)(u.yRy, {
      targetElementRef: F,
      preload: J ? void 0 : q,
      renderPopout: M,
      shouldShow: k || K,
      position: c.tq ? "window_center" : "right",
      onRequestClose: _,
      clickTrap: k,
      children: e => {
        var {
          onClick: t
        } = e, r = function(e, t) {
          if (null == e) return {};
          var r, n, o = function(e, t) {
            if (null == e) return {};
            var r, n, o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
          }
          return o
        }(e, ["onClick"]);
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(u.P3F, w(T({
            tag: "span",
            innerRef: F
          }, r, Y), {
            className: a()(Y.className, S.clickable, C)
          })), $]
        })
      }
    });
    r = Q ? (0, o.jsx)("div", {
      className: S.hoverable,
      onMouseEnter: ee,
      onMouseLeave: et,
      children: e
    }) : e
  } else r = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(u.P3F, w(T({}, Y), {
      className: a()(Y.className, C)
    })), $]
  });
  let er = null != L ? L[0] : null,
    en = null != L ? L[1] : null;
  return (0, o.jsxs)(d.Gt, {
    value: z,
    children: [null != er && E ? (0, o.jsxs)(o.Fragment, {
      children: [" ", er, " "]
    }) : null, "dot" === X ? (0, o.jsx)(u.FhE, {
      color: H,
      name: W,
      className: S.roleDot
    }) : null, r, !E && (0, o.jsx)(b.ZP, {
      primaryGuild: n.primaryGuild,
      userId: l.author.id,
      contextGuildId: B,
      className: S.clanTagChiplet
    }), null != en ? en : null, null == er || E ? null : er, null != l && (0, x.f)(l) && V && D ? (0, o.jsx)(N, {}) : null]
  })
}