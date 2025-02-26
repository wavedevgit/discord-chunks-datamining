/** Chunk was on 56650 **/
n.d(t, {
  PZ: () => en,
  Qj: () => ea,
  ZP: () => es
}), n(47120);
var l = n(200651),
  r = n(192379),
  i = n(120356),
  a = n.n(i),
  o = n(512722),
  s = n.n(o),
  c = n(568611),
  u = n(91192),
  d = n(873546),
  E = n(442837),
  f = n(481060),
  h = n(493683),
  p = n(239091),
  C = n(420660),
  _ = n(468363),
  g = n(297369),
  O = n(956221),
  T = n(771173),
  I = n(372276),
  S = n(385499),
  N = n(570908),
  v = n(702321),
  m = n(201895),
  b = n(43267),
  A = n(933557),
  P = n(979264),
  y = n(163889),
  L = n(111028),
  Z = n(540059),
  j = n(853856),
  D = n(93687),
  R = n(785232),
  U = n(516817),
  x = n(878857),
  w = n(565640),
  M = n(518950),
  G = n(199902),
  k = n(158776),
  H = n(306680),
  F = n(699516),
  V = n(111583),
  B = n(9156),
  W = n(594174),
  z = n(709054),
  K = n(998502),
  Q = n(981631),
  Y = n(388032),
  q = n(759693);

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function $(e, t) {
  if (null == e) return {};
  var n, l, r = function(e, t) {
    if (null == e) return {};
    var n, l, r = {},
      i = Object.keys(e);
    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let ee = K.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
  et = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  en = e => (0, l.jsx)(f.P3F, J(X({
    className: q.closeButton
  }, e), {
    focusProps: {
      offset: {
        top: -2,
        bottom: -2,
        left: -2,
        right: 6
      }
    },
    children: (0, l.jsx)(f.Dio, {
      size: "md",
      color: "currentColor",
      className: q.closeIcon
    })
  })),
  el = () => (0, l.jsx)(f.r7p, {
    size: "xs",
    color: "currentColor",
    className: q.favoriteIcon
  }),
  er = () => (0, l.jsx)(f.kZF, {
    size: "xs",
    color: "currentColor",
    className: q.favoriteIcon
  }),
  ei = () => (0, l.jsx)(f.t6m, {
    size: "xs",
    color: "currentColor",
    className: q.favoriteIcon
  }),
  ea = e => {
    var {
      route: t,
      selected: n,
      icon: r,
      iconClassName: i,
      avatarWithTextClassName: o,
      interactiveClassName: s,
      text: u,
      children: E,
      locationState: h,
      onClick: p,
      className: C,
      role: _,
      "aria-posinset": g,
      "aria-setsize": O,
      listItemRef: T
    } = e, I = $(e, ["route", "selected", "icon", "iconClassName", "avatarWithTextClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    let S = (0, Z.Q3)("PrivateChannelLinkButton");
    return (0, l.jsx)(y.Z, {
      className: a()(q.channel, {
        [q.fullWidth]: d.tq
      }, C),
      onClick: p,
      role: _,
      focusProps: X({
        within: !0
      }, et),
      "aria-posinset": g,
      "aria-setsize": O,
      ref: T,
      children: (0, l.jsx)(f.vjx, {
        as: "div",
        selected: n,
        className: a()(s, q.interactive, q.linkButton, {
          [q.interactiveSelected]: n
        }),
        children: (0, l.jsxs)(c.rU, J(X({
          to: {
            pathname: t,
            state: h
          },
          className: q.link
        }, I), {
          children: [(0, l.jsx)(N.Z, {
            selected: n,
            muted: !1,
            avatar: (0, l.jsx)(r, {
              size: S ? "refresh_sm" : void 0,
              className: a()(q.linkButtonIcon, i),
              color: "currentColor"
            }),
            name: u,
            innerClassName: a()(q.avatarWithText, o)
          }), E]
        }))
      })
    })
  };

function eo(e) {
  var t;
  let {
    channel: i,
    isGDMFacepileEnabled: o,
    selected: d = !1,
    user: _,
    activities: O,
    applicationStream: Z,
    entry: D,
    voiceChannel: w,
    isTyping: G,
    status: k,
    isMobile: V,
    nameplate: W,
    "aria-posinset": z,
    "aria-setsize": K
  } = e, [ea, eo] = r.useState(!1), es = r.useRef(null), ec = r.useRef(null), {
    avatarSrc: eu,
    avatarDecorationSrc: ed,
    eventHandlers: eE
  } = (0, M.Z)({
    user: _,
    size: f.EFr.SIZE_32,
    animateOnHover: !(d || ea)
  }), ef = (0, E.e7)([B.ZP], () => B.ZP.isChannelMuted(i.getGuildId(), i.id)), {
    ignored: eh,
    blocked: ep
  } = (0, E.cj)([F.Z], () => ({
    ignored: F.Z.isIgnored(i.getRecipientId()),
    blocked: F.Z.isBlocked(i.getRecipientId())
  })), eC = (0, E.e7)([H.ZP], () => H.ZP.getMentionCount(i.id) > 0), e_ = (0, A.ZP)(i), eg = (0, E.e7)([j.Z], () => j.Z.isFavorite(i.id)), eO = () => {
    eo(!0)
  }, eT = () => {
    eo(!1)
  }, eI = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(i.id, d, t)
  }, eS = () => {
    h.Z.preload(Q.ME, i.id)
  }, eN = e => {
    e.stopPropagation()
  }, ev = e => {
    if (e.target === e.currentTarget) {
      var t;
      null === (t = es.current) || void 0 === t || t.click()
    }
  }, em = e => {
    i.isMultiUserDM() ? (0, p.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70205"), n.e("25421"), n.e("80243")]).then(n.bind(n, 354741));
      return t => (0, l.jsx)(e, J(X({}, t), {
        channel: i,
        selected: d
      }))
    }, {
      noBlurEvent: !0
    }) : (0, p.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70205"), n.e("98783"), n.e("98254"), n.e("56826"), n.e("11401")]).then(n.bind(n, 131404));
      return t => (0, l.jsx)(e, J(X({}, t), {
        user: _,
        channel: i,
        channelSelected: d
      }))
    })
  }, eb = e => {
    e.preventDefault(), e.stopPropagation();
    let t = Y.NW.formatToPlainString(Y.t.hJ5Ap6, {
        name: e_
      }),
      r = Y.NW.format(Y.t.SSIVOj, {
        name: e_
      });
    i.isManaged() && (t = Y.NW.formatToPlainString(Y.t.hVGjER, {
      name: e_
    }), r = Y.NW.format(Y.t.IK1Qvr, {
      name: e_
    })), (0, f.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return n => (0, l.jsx)(e, X({
        header: t,
        body: r,
        onSubmit: eI
      }, n))
    })
  }, eA = () => i.isSystemDM() ? (0, l.jsx)("div", {
    className: q.subtext,
    children: (0, v.Z)(i.id) ? Y.NW.string(Y.t.FL5T09) : Y.NW.string(Y.t.NnY5lZ)
  }) : i.isMultiUserDM() ? (0, l.jsx)("div", {
    className: q.subtext,
    children: Y.NW.format(Y.t.CxSA5O, {
      members: i.recipients.length + 1
    })
  }) : (0, g.Z)({
    activities: O,
    status: k,
    applicationStream: Z,
    voiceChannel: w
  }) ? (0, l.jsx)(T.Z, {
    location: "PrivateChannel",
    user: _,
    activities: O,
    voiceChannel: w,
    applicationStream: Z,
    animate: ea,
    emojiClassName: ef ? q.mutedEmoji : void 0
  }) : null != D ? (0, l.jsx)(I.Z, {
    entry: D
  }) : null, eP = () => {
    let e = f.EFr.SIZE_32;
    if (i.isMultiUserDM()) return i.recipients.length >= 2 && o && null == i.icon ? (0, l.jsx)(R.Z, {
      "aria-hidden": !0,
      recipients: i.recipients,
      size: e,
      isTyping: G,
      status: k
    }) : (0, l.jsx)(ee, J(X({}, eE), {
      src: (0, b.x)(i),
      "aria-hidden": !0,
      size: e,
      status: G ? Q.Skl.ONLINE : k,
      isTyping: G
    }));
    s()(null != _, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
    let t = null;
    return _.isSystemUser() || (t = (0, C.Z)(O) ? Q.Skl.STREAMING : k), (0, l.jsx)(ee, J(X({}, eE), {
      size: f.EFr.SIZE_32,
      src: eu,
      avatarDecoration: ed,
      status: t,
      isMobile: V,
      isTyping: G,
      "aria-label": _.username,
      statusTooltip: !0
    }))
  }, ey = i.isMultiUserDM(), eL = i.isSystemDM(), eZ = (0, x.Q)(), ej = !ey && !eL && i.type === Q.d4z.DM, eD = ej && (null == _ ? void 0 : _.primaryGuild) != null, eR = ej && eh, eU = ej && ep, ex = eD ? (0, l.jsxs)(l.Fragment, {
    children: [e_, (0, l.jsx)(P.ZP, {
      primaryGuild: null == _ ? void 0 : _.primaryGuild,
      userId: null == _ ? void 0 : _.id,
      inline: !0,
      disableGuildProfile: !0,
      className: q.clanTag
    })]
  }) : e_, ew = null !== (t = ef || eR || eU) && void 0 !== t && t, eM = r.useRef(null);
  return (0, l.jsx)(u.mh, {
    id: i.id,
    children: e => {
      var {
        role: t
      } = e, n = $(e, ["role"]);
      return (0, l.jsx)(y.Z, {
        className: a()(q.channel, q.dm),
        role: t,
        focusProps: J(X({}, et), {
          focusTarget: es,
          ringTarget: ec
        }),
        ref: ec,
        onMouseEnter: eO,
        onMouseLeave: eT,
        onMouseDown: eS,
        onContextMenu: em,
        "aria-setsize": K,
        "aria-posinset": z,
        children: (0, l.jsxs)(f.vjx, {
          className: a()(q.interactive, {
            [q.interactiveSystemDM]: eZ && eL,
            [q.interactiveSelected]: d,
            [q.platedWrapper]: null != W
          }),
          as: "div",
          onClick: ev,
          muted: ew,
          selected: d,
          children: [(0, l.jsx)(U.Z, {
            nameplate: W,
            selected: d,
            hovered: ea,
            content: eM.current
          }), (0, l.jsx)(c.rU, J(X({
            innerRef: es,
            to: Q.Z5c.CHANNEL(Q.ME, i.id),
            className: a()(q.link, {
              [q.plated]: null != W
            }),
            "aria-label": (0, m.ZP)({
              channel: i,
              unread: eC
            })
          }, n), {
            children: (0, l.jsx)(N.Z, {
              ref: eM,
              avatar: eP(),
              selected: d,
              highlighted: eC,
              muted: ew,
              subText: eA(),
              name: (0, l.jsx)(L.Z, {
                tooltipClassName: q.overflowTooltip,
                children: ex
              }),
              decorators: i.isSystemDM() ? (0, l.jsx)(S.Z, {
                className: q.decorator,
                type: S.Z.Types.SYSTEM_DM,
                verified: !0
              }) : null
            })
          })), eg ? (0, l.jsx)(el, {}) : null, eR ? (0, l.jsx)(er, {}) : null, eU ? (0, l.jsx)(ei, {}) : null, (0, l.jsx)(en, {
            "aria-label": ey ? Y.NW.string(Y.t["26C4oq"]) : Y.NW.string(Y.t.jsvgc3),
            onClick: ey ? eb : eI,
            onMouseDown: eN
          })]
        })
      })
    }
  })
}
let es = e => {
  var {
    channel: t,
    selected: n,
    nameplate: r
  } = e, i = $(e, ["channel", "selected", "nameplate"]);
  let a = (0, E.e7)([W.default], () => W.default.getUser(t.getRecipientId())),
    {
      isStatusIndicatorEnabled: o,
      isTypingIndicatorEnabled: s,
      isFacepileEnabled: c
    } = D.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: !0
    }),
    u = null == a ? void 0 : a.id,
    d = (0, E.cj)([k.Z, G.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        if (o) {
          let n = k.Z.getState().statuses;
          t.recipients.some(e => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE)
        }
      } else null != u && (e = k.Z.getStatus(u));
      return {
        status: e,
        activities: null != u ? k.Z.getActivities(u) : null,
        applicationStream: null != u ? G.Z.getAnyStreamForUser(u) : null,
        isMobile: null != u && k.Z.isMobileOnline(u)
      }
    }, [t, u, o]),
    f = (0, w.Z)(null == a ? void 0 : a.id, "PrivateChannel"),
    {
      voiceActivityStatusEnabled: h
    } = (0, _.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: p
    } = (0, O.Z)({
      userId: u,
      surface: "private-channel"
    }),
    C = (0, E.e7)([W.default, V.Z], () => t.isMultiUserDM() ? !!s && z.default.keys(V.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null === (t = W.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
    }) : null != a && V.Z.isTyping(t.id, t.getRecipientId()), [t, a, s]);
  return t.isMultiUserDM() ? (0, l.jsx)(eo, X({
    channel: t,
    selected: n,
    isTyping: C,
    status: d.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
    isGDMFacepileEnabled: c
  }, i)) : (0, l.jsx)(eo, X({
    channel: t,
    selected: n,
    user: a,
    entry: f,
    voiceChannel: h ? p : void 0,
    isTyping: C,
    nameplate: r
  }, i, d))
}