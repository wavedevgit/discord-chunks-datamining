/** Chunk was on 27978 **/
n.d(t, {
  GB: () => y,
  JI: () => C,
  UM: () => P,
  V6: () => T,
  WT: () => I,
  X7: () => E,
  jq: () => A,
  mx: () => N
}), n(411104);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  s = n(388905),
  c = n(118012),
  u = n(925329),
  d = n(372769),
  h = n(768581),
  p = n(51144),
  g = n(245335),
  m = n(981631),
  _ = n(888592),
  f = n(388032),
  b = n(72171);
let N = 100,
  x = e => {
    var t, n;
    let r = {
      onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
      memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
    };
    return 0 === r.memberCount && 0 === r.memberCount ? null : r
  },
  v = e => e.target_type === g.Iq.STREAM && null != e.target_user,
  I = e => {
    var t;
    return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === m.d4z.GROUP_DM
  },
  E = e => null == e.channel && null == e.guild && null != e.inviter,
  O = e => {
    var t;
    let n = x(e);
    return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > N
  },
  j = e => e.state === m.r2o.ACCEPTED,
  C = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t
  },
  S = e => !C(e) && (!!E(e) || null != e.inviter && !j(e) && !O(e)),
  y = e => {
    let {
      guild: t,
      user: n,
      application: i
    } = e;
    return null != i ? (0, r.jsx)(u.Z, {
      className: b.appIcon,
      game: i,
      size: b.appIconSize
    }) : null != n ? (0, r.jsx)(s.qE, {
      src: n.getAvatarURL(void 0, 100),
      size: l.EFr.DEPRECATED_SIZE_100,
      className: b.avatar
    }) : null != t ? (0, r.jsx)(s.Vj, {
      guild: t,
      size: s.Vj.Sizes.LARGER,
      className: b.guildIcon,
      animate: !0
    }) : null
  };

function T(e) {
  var t;
  let {
    invite: n,
    textClassName: i,
    className: o
  } = e, l = x(n);
  return null == l || S(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === _.fQ ? null : (0, r.jsx)(s.EJ, {
    className: a()(b.activityCount, o),
    online: l.onlineCount,
    total: l.memberCount,
    textClassName: i,
    flat: !0
  })
}

function A(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, o = i.useMemo(() => n ? null : v(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : S(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null, [t, n]), a = f.NW.string(f.t["3rE1Pz"]);
  if (I(t)) {
    var c, u;
    a = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? f.NW.format(f.t.Lu4h19, {
      username: t.inviter.username
    }) : f.NW.string(f.t.OsdY8P)
  } else v(t) && null != t.target_user ? a = f.NW.formatToPlainString(f.t.x2L32d, {
    username: t.target_user.username
  }) : j(t) ? a = f.NW.string(f.t["FDsl+P"]) : S(t) && null != t.inviter && (a = f.NW.format(f.t.spU2mJ, {
    username: p.ZP.getFormattedName(t.inviter)
  }));
  return (0, r.jsxs)("div", {
    className: b.inviteJoinContainer,
    children: [null != o && (0, r.jsx)("div", {
      className: b.inviterIconWrapper,
      children: (0, r.jsx)(s.qE, {
        src: o,
        size: l.EFr.SIZE_24
      })
    }), (0, r.jsx)(s.DK, {
      className: b.__invalid_inviteJoinSubTitle,
      children: a
    })]
  })
}

function P(e) {
  let t, n, i, {
    user: o,
    guild: a,
    channel: u,
    application: h,
    showBigUserIcon: g
  } = e;
  if (null != a) g && null == h && (t = (0, r.jsx)(s.Vj, {
    guild: a,
    size: s.Vj.Sizes.SMALL
  })), n = a.name, null != h && (n = h.name, i = (0, r.jsxs)("div", {
    className: b.inviteJoinContainer,
    children: [(0, r.jsx)(s.DK, {
      className: b.appIn,
      children: f.NW.string(f.t["3gg9fH"])
    }), (0, r.jsxs)("div", {
      className: b.guildContainer,
      children: [(0, r.jsx)(s.Vj, {
        guild: a,
        size: s.Vj.Sizes.SMALL
      }), (0, r.jsx)(c.Z, {
        className: b.appGuildName,
        color: c.Z.Colors.CUSTOM,
        tag: "span",
        size: c.Z.Sizes.SIZE_24,
        children: a.name
      })]
    })]
  }));
  else if (null != u) {
    if (null == o) throw Error("no inviter in group DM invite");
    let e = p.ZP.getFormattedName(o);
    null != u.name && "" !== u.name ? (n = u.name, null != u.icon && (t = (0, r.jsx)(s.MC, {
      channel: u,
      size: l.EFr.SIZE_32
    }))) : n = e
  } else if (null != o) {
    let e = p.ZP.getFormattedName(o);
    n = f.NW.formatToPlainString(f.t["4aF92d"], {
      username: e
    }), i = (0, r.jsx)(s.DK, {
      className: b.directInviteSubTitle,
      children: f.NW.format(f.t.Quj7HR, {
        username: e
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.Dx, {
      className: b.title,
      children: [null != a ? (0, r.jsx)(d.Z, {
        guild: a,
        className: b.guildBadge,
        tooltipPosition: "left"
      }) : null, t, n]
    }), i]
  })
}