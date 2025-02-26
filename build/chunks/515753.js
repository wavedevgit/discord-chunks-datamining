/** Chunk was on 45847 **/
n.d(t, {
  PZ: () => ee,
  Qj: () => el,
  ZP: () => eo
}), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(512722),
  s = n.n(a),
  c = n(568611),
  u = n(91192),
  d = n(873546),
  E = n(442837),
  f = n(481060),
  h = n(493683),
  _ = n(239091),
  C = n(420660),
  p = n(468363),
  O = n(297369),
  g = n(956221),
  T = n(771173),
  I = n(385499),
  S = n(570908),
  N = n(702321),
  A = n(201895),
  b = n(43267),
  v = n(933557),
  m = n(979264),
  P = n(163889),
  y = n(111028),
  L = n(540059),
  D = n(853856),
  R = n(93687),
  Z = n(785232),
  j = n(516817),
  U = n(878857),
  w = n(518950),
  x = n(199902),
  M = n(158776),
  G = n(306680),
  H = n(699516),
  k = n(111583),
  F = n(9156),
  V = n(594174),
  B = n(709054),
  W = n(998502),
  z = n(981631),
  K = n(388032),
  Y = n(759693);

function Q(e) {
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

function q(e, t) {
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

function X(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let J = W.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
  $ = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  ee = e => (0, r.jsx)(f.P3F, q(Q({
    className: Y.closeButton
  }, e), {
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, r.jsx)(f.Dio, {
      size: "md",
      color: "currentColor",
      className: Y.closeIcon
    })
  })),
  et = () => (0, r.jsx)(f.r7p, {
    size: "xs",
    color: "currentColor",
    className: Y.favoriteIcon
  }),
  en = () => (0, r.jsx)(f.kZF, {
    size: "xs",
    color: "currentColor",
    className: Y.favoriteIcon
  }),
  er = () => (0, r.jsx)(f.t6m, {
    size: "xs",
    color: "currentColor",
    className: Y.favoriteIcon
  }),
  el = e => {
    var {
      route: t,
      selected: n,
      icon: l,
      iconClassName: i,
      avatarWithTextClassName: a,
      interactiveClassName: s,
      text: u,
      children: E,
      locationState: h,
      onClick: _,
      className: C,
      role: p,
      "aria-posinset": O,
      "aria-setsize": g,
      listItemRef: T
    } = e, I = X(e, ["route", "selected", "icon", "iconClassName", "avatarWithTextClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    let N = (0, L.Q3)("PrivateChannelLinkButton");
    return (0, r.jsx)(P.Z, {
      className: o()(Y.channel, {
        [Y.fullWidth]: d.tq
      }, C),
      onClick: _,
      role: p,
      focusProps: Q({
        within: !0
      }, $),
      "aria-posinset": O,
      "aria-setsize": g,
      ref: T,
      children: (0, r.jsx)(f.vjx, {
        as: "div",
        selected: n,
        className: o()(s, Y.interactive, Y.linkButton, {
          [Y.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, q(Q({
          to: {
            pathname: t,
            state: h
          },
          className: Y.link
        }, I), {
          children: [(0, r.jsx)(S.Z, {
            selected: n,
            muted: !1,
            avatar: (0, r.jsx)(l, {
              size: N ? "refresh_sm" : void 0,
              className: o()(Y.linkButtonIcon, i),
              color: "currentColor"
            }),
            name: u,
            innerClassName: o()(Y.avatarWithText, a)
          }), E]
        }))
      })
    })
  };

function ei(e) {
  var t;
  let {
    channel: i,
    isGDMFacepileEnabled: a,
    selected: d = !1,
    user: p,
    activities: g,
    applicationStream: L,
    voiceChannel: R,
    isTyping: x,
    status: M,
    isMobile: k,
    nameplate: V,
    "aria-posinset": B,
    "aria-setsize": W
  } = e, [el, ei] = l.useState(!1), eo = l.useRef(null), ea = l.useRef(null), {
    avatarSrc: es,
    avatarDecorationSrc: ec,
    eventHandlers: eu
  } = (0, w.Z)({
    user: p,
    size: f.EFr.SIZE_32,
    animateOnHover: !(d || el)
  }), ed = (0, E.e7)([F.ZP], () => F.ZP.isChannelMuted(i.getGuildId(), i.id)), {
    ignored: eE,
    blocked: ef
  } = (0, E.cj)([H.Z], () => ({
    ignored: H.Z.isIgnored(i.getRecipientId()),
    blocked: H.Z.isBlocked(i.getRecipientId())
  })), eh = (0, E.e7)([G.ZP], () => G.ZP.getMentionCount(i.id) > 0), e_ = (0, v.ZP)(i), eC = (0, E.e7)([D.Z], () => D.Z.isFavorite(i.id)), ep = () => {
    ei(!0)
  }, eO = () => {
    ei(!1)
  }, eg = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(i.id, d, t)
  }, eT = () => {
    h.Z.preload(z.ME, i.id)
  }, eI = e => {
    e.stopPropagation()
  }, eS = e => {
    if (e.target === e.currentTarget) {
      var t;
      null === (t = eo.current) || void 0 === t || t.click()
    }
  }, eN = e => {
    i.isMultiUserDM() ? (0, _.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70205"), n.e("25421"), n.e("80243")]).then(n.bind(n, 354741));
      return t => (0, r.jsx)(e, q(Q({}, t), {
        channel: i,
        selected: d
      }))
    }, {
      noBlurEvent: !0
    }) : (0, _.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70205"), n.e("98783"), n.e("98254"), n.e("56826"), n.e("11401")]).then(n.bind(n, 131404));
      return t => (0, r.jsx)(e, q(Q({}, t), {
        user: p,
        channel: i,
        channelSelected: d
      }))
    })
  }, eA = e => {
    e.preventDefault(), e.stopPropagation();
    let t = K.NW.formatToPlainString(K.t.hJ5Ap6, {
        name: e_
      }),
      l = K.NW.format(K.t.SSIVOj, {
        name: e_
      });
    i.isManaged() && (t = K.NW.formatToPlainString(K.t.hVGjER, {
      name: e_
    }), l = K.NW.format(K.t.IK1Qvr, {
      name: e_
    })), (0, f.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return n => (0, r.jsx)(e, Q({
        header: t,
        body: l,
        onSubmit: eg
      }, n))
    })
  }, eb = () => i.isSystemDM() ? (0, r.jsx)("div", {
    className: Y.subtext,
    children: (0, N.Z)(i.id) ? K.NW.string(K.t.FL5T09) : K.NW.string(K.t.NnY5lZ)
  }) : i.isMultiUserDM() ? (0, r.jsx)("div", {
    className: Y.subtext,
    children: K.NW.format(K.t.CxSA5O, {
      members: i.recipients.length + 1
    })
  }) : (0, O.Z)({
    activities: g,
    status: M,
    applicationStream: L,
    voiceChannel: R
  }) ? (0, r.jsx)(T.Z, {
    location: "PrivateChannel",
    user: p,
    activities: g,
    voiceChannel: R,
    applicationStream: L,
    animate: el,
    emojiClassName: ed ? Y.mutedEmoji : void 0
  }) : null, ev = () => {
    let e = f.EFr.SIZE_32;
    if (i.isMultiUserDM()) return i.recipients.length >= 2 && a && null == i.icon ? (0, r.jsx)(Z.Z, {
      "aria-hidden": !0,
      recipients: i.recipients,
      size: e,
      isTyping: x,
      status: M
    }) : (0, r.jsx)(J, q(Q({}, eu), {
      src: (0, b.x)(i),
      "aria-hidden": !0,
      size: e,
      status: x ? z.Skl.ONLINE : M,
      isTyping: x
    }));
    s()(null != p, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
    let t = null;
    return p.isSystemUser() || (t = (0, C.Z)(g) ? z.Skl.STREAMING : M), (0, r.jsx)(J, q(Q({}, eu), {
      size: f.EFr.SIZE_32,
      src: es,
      avatarDecoration: ec,
      status: t,
      isMobile: k,
      isTyping: x,
      "aria-label": p.username,
      statusTooltip: !0
    }))
  }, em = i.isMultiUserDM(), eP = i.isSystemDM(), ey = (0, U.Q)(), eL = !em && !eP && i.type === z.d4z.DM, eD = eL && (null == p ? void 0 : p.primaryGuild) != null, eR = eL && eE, eZ = eL && ef, ej = eD ? (0, r.jsxs)(r.Fragment, {
    children: [e_, (0, r.jsx)(m.ZP, {
      primaryGuild: null == p ? void 0 : p.primaryGuild,
      userId: null == p ? void 0 : p.id,
      inline: !0,
      disableGuildProfile: !0,
      className: Y.clanTag
    })]
  }) : e_, eU = null !== (t = ed || eR || eZ) && void 0 !== t && t, ew = l.useRef(null);
  return (0, r.jsx)(u.mh, {
    id: i.id,
    children: e => {
      var {
        role: t
      } = e, n = X(e, ["role"]);
      return (0, r.jsx)(P.Z, {
        className: o()(Y.channel, Y.dm),
        role: t,
        focusProps: q(Q({}, $), {
          focusTarget: eo,
          ringTarget: ea
        }),
        ref: ea,
        onMouseEnter: ep,
        onMouseLeave: eO,
        onMouseDown: eT,
        onContextMenu: eN,
        "aria-setsize": W,
        "aria-posinset": B,
        children: (0, r.jsxs)(f.vjx, {
          className: o()(Y.interactive, {
            [Y.interactiveSystemDM]: ey && eP,
            [Y.interactiveSelected]: d,
            [Y.platedWrapper]: null != V
          }),
          as: "div",
          onClick: eS,
          muted: eU,
          selected: d,
          children: [(0, r.jsx)(j.Z, {
            nameplate: V,
            selected: d,
            hovered: el,
            content: ew.current
          }), (0, r.jsx)(c.rU, q(Q({
            innerRef: eo,
            to: z.Z5c.CHANNEL(z.ME, i.id),
            className: o()(Y.link, {
              [Y.plated]: null != V
            }),
            "aria-label": (0, A.ZP)({
              channel: i,
              unread: eh
            })
          }, n), {
            children: (0, r.jsx)(S.Z, {
              ref: ew,
              avatar: ev(),
              selected: d,
              highlighted: eh,
              muted: eU,
              subText: eb(),
              name: (0, r.jsx)(y.Z, {
                tooltipClassName: Y.overflowTooltip,
                children: ej
              }),
              decorators: i.isSystemDM() ? (0, r.jsx)(I.Z, {
                className: Y.decorator,
                type: I.Z.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          })), eC ? (0, r.jsx)(et, {}) : null, eR ? (0, r.jsx)(en, {}) : null, eZ ? (0, r.jsx)(er, {}) : null, (0, r.jsx)(ee, {
            "aria-label": em ? K.NW.string(K.t["26C4oq"]) : K.NW.string(K.t.jsvgc3),
            onClick: em ? eA : eg,
            onMouseDown: eI
          })]
        })
      })
    }
  })
}
let eo = e => {
  var {
    channel: t,
    selected: n,
    nameplate: l
  } = e, i = X(e, ["channel", "selected", "nameplate"]);
  let o = (0, E.e7)([V.default], () => V.default.getUser(t.getRecipientId())),
    {
      isStatusIndicatorEnabled: a,
      isTypingIndicatorEnabled: s,
      isFacepileEnabled: c
    } = R.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: !0
    }),
    u = null == o ? void 0 : o.id,
    d = (0, E.cj)([M.Z, x.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        if (a) {
          let n = M.Z.getState().statuses;
          t.recipients.some(e => n[e] === z.Skl.ONLINE) && (e = z.Skl.ONLINE)
        }
      } else null != u && (e = M.Z.getStatus(u));
      return {
        status: e,
        activities: null != u ? M.Z.getActivities(u) : null,
        applicationStream: null != u ? x.Z.getAnyStreamForUser(u) : null,
        isMobile: null != u && M.Z.isMobileOnline(u)
      }
    }, [t, u, a]),
    {
      voiceActivityStatusEnabled: f
    } = (0, p.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: h
    } = (0, g.Z)({
      userId: u,
      surface: "private-channel"
    }),
    _ = (0, E.e7)([V.default, k.Z], () => t.isMultiUserDM() ? !!s && B.default.keys(k.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = V.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    }) : null != o && k.Z.isTyping(t.id, t.getRecipientId()), [t, o, s]);
  return t.isMultiUserDM() ? (0, r.jsx)(ei, Q({
    channel: t,
    selected: n,
    isTyping: _,
    status: d.status === z.Skl.ONLINE ? z.Skl.ONLINE : void 0,
    isGDMFacepileEnabled: c
  }, i)) : (0, r.jsx)(ei, Q({
    channel: t,
    selected: n,
    user: o,
    voiceChannel: f ? h : void 0,
    isTyping: _,
    nameplate: l
  }, i, d))
}