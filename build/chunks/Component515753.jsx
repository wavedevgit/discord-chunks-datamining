/** Chunk was on 83772 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => eg,
  RS: () => ev,
  ZP: () => ey,
  bU: () => ed
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk896662 = require("./896662.js"),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk319498 = require("./319498.js"),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk420660 = require("./420660.js"),
  Chunk468363 = require("./468363.js"),
  Chunk326255 = require("./326255.js"),
  Chunk956221 = require("./956221.js"),
  Chunk747017 = require("./747017.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk570908 = require("./570908.jsx"),
  Chunk702321 = require("./702321.js"),
  Chunk201895 = require("./201895.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk163889 = require("./163889.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk853856 = require("./853856.js"),
  Chunk785232 = require("./785232.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk85746 = require("./85746.js"),
  Chunk825265 = require("./825265.js"),
  Chunk40620 = require("./40620.js"),
  Chunk850020 = require("./850020.js"),
  Chunk379839 = require("./379839.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk63759 = require("./63759.js"),
  Chunk866834 = require("./866834.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk199902 = require("./199902.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk111583 = require("./111583.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk102599 = require("./102599.js");

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function es(e, t) {
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

function eo(e, t) {
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
let eu = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  ec = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  ed = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: l = false,
      reducedClickTarget: i = false,
      visibleElementRef: s
    } = e, o = eo(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let u = (0, H.A)(t);
    return (0, r.jsx)(v.P3F, es(ea({
      className: a()(ei.closeButton, {
        [ei.closeButtonPlated]: null != t,
        [ei.closeButtonForceShow]: l,
        [ei.reducedClickTarget]: i
      }),
      style: u
    }, o), {
      focusProps: {
        offset: {
          top: false,
          bottom: false,
          left: false,
          right: 6
        }
      },
      children: (0, r.jsx)("div", {
        ref: s,
        className: a()({
          [ei.innerCloseButtonPlated]: null != t
        }),
        children: (0, r.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: a()(ei.closeIcon, {
            [ei.closeIconPlated]: null != t
          })
        })
      })
    }))
  },
  em = () => (0, r.jsx)(v.r7p, {
    size: "xs",
    color: "currentColor",
    className: ei.favoriteIcon
  }),
  ef = () => (0, r.jsx)(v.kZF, {
    size: "xs",
    color: "currentColor",
    className: ei.favoriteIcon
  }),
  ep = () => (0, r.jsx)(v.t6m, {
    size: "xs",
    color: "currentColor",
    className: ei.favoriteIcon
  }),
  eg = e => {
    var {
      route: t,
      selected: n,
      icon: l,
      iconClassName: i,
      interactiveClassName: s,
      text: o,
      children: u,
      locationState: d,
      onClick: m,
      className: p,
      role: g,
      "aria-posinset": y,
      "aria-setsize": x,
      listItemRef: b
    } = e, j = eo(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(I.Z, {
      className: a()(ei.channel, {
        [ei.fullWidth]: f.tq
      }, p),
      onClick: m,
      role: g,
      focusProps: ea({
        within: true
      }, ec),
      "aria-posinset": y,
      "aria-setsize": x,
      ref: b,
      children: (0, r.jsx)(v.vjx, {
        as: "div",
        selected: n,
        className: a()(s, ei.interactive, ei.linkButton, {
          [ei.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, es(ea({
          to: {
            pathname: t,
            state: d
          },
          className: ei.link
        }, j), {
          children: [(0, r.jsx)(T.Z, {
            muted: false,
            avatar: (0, r.jsx)(l, {
              size: "refresh_sm",
              className: a()(ei.linkButtonIcon, i),
              color: "currentColor"
            }),
            name: o,
            innerClassName: ei.avatarWithText
          }), u]
        }))
      })
    })
  };

function ev(e) {
  let {
    channel: t,
    selected: i = false,
    user: o,
    activities: f,
    applicationStream: j,
    voiceChannel: S,
    isTyping: Q,
    status: H,
    isMobile: z,
    nameplate: W,
    latestMessage: J,
    ref: ee,
    "aria-posinset": en,
    "aria-setsize": eg
  } = e, [ev, ey] = l.useState(false), [ex, eb] = l.useState(false), [ej, eh] = l.useState(false), eS = l.useRef(null), eO = l.useRef(null), eE = null != ee ? ee : eO, {
    avatarSrc: eT,
    avatarDecorationSrc: eN,
    eventHandlers: eP
  } = (0, V.Z)({
    userId: null == o ? true : o.id,
    size: v.EFr.SIZE_32,
    animateOnHover: !(i || ev || ex || ej)
  }), eC = t.isMultiUserDM(), e_ = t.isSystemDM(), eI = !eC && !e_ && t.type === er.d4z.DM, eZ = eI && (null == o ? true : o.primaryGuild) != null, ew = (0, p.e7)([$.ZP], () => $.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eA,
    blocked: eM
  } = (0, p.cj)([Y.Z], () => ({
    ignored: Y.Z.isIgnored(t.getRecipientId()),
    blocked: Y.Z.isBlocked(t.getRecipientId())
  })), eU = eI && eA, ek = eI && eM, eD = (ew || eU || ek) && !(i || ev), {
    hasUnreadMessages: eR,
    lastMessageId: eL
  } = (0, p.cj)([K.ZP], () => ({
    hasUnreadMessages: K.ZP.getMentionCount(t.id) > 0,
    lastMessageId: K.ZP.lastMessageId(t.id)
  })), eQ = (0, _.ZP)(t), eH = (0, p.e7)([M.Z], () => M.Z.isFavorite(t.id)), {
    showMessagePreviews: eG,
    prioritizeOverStatus: eF
  } = L.U.useConfig({
    location: "PrivateChannel"
  }), eq = (0, p.e7)([X.Z], () => X.Z.hidePersonalInformation), eB = (0, R.X)(t.guild_id), eV = (0, q.l)({
    timestamp: et.default.extractTimestamp(null != eL ? eL : t.id)
  }), ez = l.useRef(null), eW = null != W && (i || ev || ej), eK = () => {
    ey(true)
  }, eY = () => {
    ey(false)
  }, eX = () => {
    eb(true)
  }, eJ = () => {
    eb(false)
  }, e$ = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), y.Z.closePrivateChannel(t.id, i, n)
  }, e0 = () => {
    y.Z.preload(er.ME, t.id)
  }, e1 = e => {
    e.stopPropagation()
  }, e4 = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eS.current) || t.click()
    }
  }, e5 = e => {
    let l = "contextmenu" === e.type ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    eh(true), t.isMultiUserDM() ? (0, x.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, es(ea({}, n), {
        channel: t,
        selected: i
      }))
    }, {
      impressionName: l,
      noBlurEvent: true,
      onClose: () => eh(false)
    }) : (0, x.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("4040"), n.e("6915"), n.e("56826"), n.e("15160")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, es(ea({}, n), {
        user: o,
        channel: t,
        channelSelected: i
      }))
    }, {
      impressionName: l,
      onClose: () => eh(false)
    })
  }, e6 = e => {
    e.preventDefault(), e.stopPropagation();
    let l = el.intl.formatToPlainString(el.t.hJ5Ap4, {
        name: eQ
      }),
      i = el.intl.format(el.t.SSIVOu, {
        name: eQ
      });
    t.isManaged() && (l = el.intl.formatToPlainString(el.t.hVGjEW, {
      name: eQ
    }), i = el.intl.format(el.t.IK1Qvs, {
      name: eQ
    })), (0, v.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, ea({
        header: l,
        body: i,
        onSubmit: e$
      }, t))
    })
  }, e7 = (0, r.jsx)(A.Z, {
    userName: eQ,
    displayNameStyles: null == o ? true : o.displayNameStyles,
    effectDisplayType: ev || i || ej ? w.F.ANIMATED : w.F.PLAIN,
    loop: ev,
    boldFontOpacity: .9
  }), e3 = eZ ? (0, r.jsxs)(r.Fragment, {
    children: [e7, (0, r.jsx)(k.ZP, {
      primaryGuild: null == o ? true : o.primaryGuild,
      userId: null == o ? true : o.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(ei.clanTag, {
        [ei.clanTagMuted]: eD
      })
    })]
  }) : e7, e8 = l.useRef(null), e9 = (0, Z.Y)({
    location: "PrivateChannel"
  }) && (null == o ? true : o.displayNameStyles) != null, e2 = [(0, P.ZP)({
    channel: t,
    unread: eR
  }), (0, P.Yb)({
    channel: t,
    muted: ew,
    userStatus: H
  })].filter(Boolean).join(", "), te = (0, r.jsxs)(r.Fragment, {
    children: [eH && !ej ? (0, r.jsx)(em, {}) : null, eU ? (0, r.jsx)(ef, {}) : null, ek ? (0, r.jsx)(ep, {}) : null]
  }), tt = eG ? (0, r.jsxs)("div", {
    className: ei.timestampContainer,
    children: [te, eB !== D.Z.ALL || eq ? null : (0, r.jsx)(v.Text, {
      variant: "text-xs/normal",
      color: i ? "interactive-text-active" : eR ? "interactive-text-default" : "text-muted",
      className: ei.timestamp,
      children: eV
    })]
  }) : null;
  return (0, r.jsx)(m.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, l = eo(e, ["role"]);
      return (0, r.jsxs)(I.Z, {
        className: a()(ei.channel, ei.dm),
        role: n,
        focusProps: es(ea({}, ec), {
          focusTarget: eS,
          ringTarget: eE
        }),
        ref: eE,
        onMouseEnter: eK,
        onMouseLeave: eY,
        onMouseDown: e0,
        onFocus: eX,
        onBlur: eJ,
        onContextMenu: e5,
        "aria-setsize": eg,
        "aria-posinset": en,
        children: [eR ? (0, r.jsx)("div", {
          className: a()(ei.unreadPill, {
            [ei.muted]: eD
          })
        }) : null, (0, r.jsxs)(v.vjx, {
          className: a()(ei.interactive, {
            [ei.interactiveSelected]: i || ej
          }),
          as: "div",
          onClick: e4,
          muted: eD,
          selected: i,
          children: [(0, r.jsx)(F.Z, {
            nameplate: eW ? W : true,
            selected: i,
            hovered: ev,
            content: e8,
            placement: G.i.CHANNEL
          }), (0, r.jsx)(c.rU, es(ea({
            innerRef: eS,
            to: er.Z5c.CHANNEL(er.ME, t.id),
            className: ei.link,
            "aria-label": e2
          }, l), {
            children: (0, r.jsx)(T.Z, {
              ref: e8,
              avatar: (() => {
                let e = v.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && null == t.icon) return (0, r.jsx)(U.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: Q,
                    status: H
                  });
                  else return (0, r.jsx)(eu, es(ea({}, eP), {
                    src: (0, C.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: Q ? er.Skl.ONLINE : H,
                    isTyping: Q
                  }));
                u()(null != o, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return o.isSystemUser() || (n = (0, b.Z)(f) ? er.Skl.STREAMING : H), (0, r.jsx)(eu, es(ea({}, eP), {
                  size: v.EFr.SIZE_32,
                  src: eT,
                  avatarDecoration: eN,
                  status: n,
                  isMobile: z,
                  isTyping: Q,
                  "aria-label": o.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eR && !eD,
              muted: eD,
              subText: (() => {
                let e = (null == f ? true : f.some(e => e.type !== er.IIU.CUSTOM_STATUS)) === true,
                  n = eG && null != J && !eq ? (0, r.jsx)("div", {
                    className: ei.subtext,
                    children: (0, r.jsx)(B.o, {
                      channel: t,
                      message: J
                    })
                  }) : null,
                  l = null != J && null != n && (1 > (0, s.Z)(new Date, J.timestamp) || eF && !e || eR);
                return t.isSystemDM() ? (0, r.jsx)("div", {
                  className: ei.subtext,
                  children: (0, N.Z)(t.id) ? el.intl.string(el.t.FL5T01) : el.intl.string(el.t.NnY5lc)
                }) : t.isMultiUserDM() ? null != n ? n : (0, r.jsx)("div", {
                  className: ei.subtext,
                  children: el.intl.format(el.t.CxSA5N, {
                    members: t.recipients.length + 1
                  })
                }) : !l && (0, h.Z)({
                  activities: f,
                  status: H,
                  applicationStream: j,
                  voiceChannel: S
                }) ? (0, r.jsx)(O.Z, {
                  user: o,
                  activities: f,
                  voiceChannel: S,
                  applicationStream: j,
                  animateEmoji: ev || ex || ej,
                  textClassName: ei.activityStatusText,
                  iconClassName: eD ? ei.mutedIcon : true
                }) : null != n ? n : null
              })(),
              subtextClassName: a()(ei.subtextContainer, {
                [ei.subtextNameplated]: eW,
                [ei.moreSpace]: eG
              }),
              nameClassName: ei.username,
              name: (0, r.jsx)(g.Z, {
                className: a()(ei.overflowTooltip, {
                  [ei.withDisplayNameStyles]: e9
                }),
                children: e3
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(E.Z, {
                className: ei.decorator,
                type: E.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              rightDecorators: tt,
              withDisplayNameStyles: e9
            })
          })), (0, r.jsxs)("div", {
            className: a()(ei.iconsContainer, {
              [ei.nameplated]: eW && !eG
            }),
            children: [!eG && te, (0, r.jsx)(ed, {
              icon: v.Dio,
              "aria-label": eC ? el.intl.string(el.t["26C4oi"]) : el.intl.string(el.t.jsvgc3),
              onClick: eC ? e6 : e$,
              onMouseDown: e1,
              nameplate: W,
              reducedClickTarget: true,
              visibleElementRef: ez
            })]
          })]
        })]
      })
    }
  })
}
let ey = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, l = eo(e, ["channel", "selected"]);
  let i = (0, p.e7)([ee.default], () => ee.default.getUser(t.getRecipientId())),
    a = null == i ? true : i.id,
    s = (0, p.cj)([W.Z, z.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        let n = W.Z.getState().statuses;
        t.recipients.some(e => n[e] === er.Skl.ONLINE) && (e = er.Skl.ONLINE)
      } else null != a && (e = W.Z.getStatus(a));
      return {
        status: e,
        activities: null != a ? W.Z.getActivities(a) : null,
        applicationStream: null != a ? z.Z.getAnyStreamForUser(a) : null,
        isMobile: null != a && W.Z.isMobileOnline(a)
      }
    }, [t, a]),
    {
      voiceActivityStatusEnabled: o
    } = (0, j.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: u
    } = (0, S.Z)({
      userId: a
    }),
    c = (0, Q.K)({
      user: i
    }),
    d = (0, p.e7)([ee.default, J.Z], () => t.isMultiUserDM() ? et.default.keys(J.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null == (t = ee.default.getCurrentUser()) ? true : t.id)
    }) : null != i && J.Z.isTyping(t.id, t.getRecipientId()), [t, i]),
    {
      showMessagePreviews: m
    } = L.U.useConfig({
      location: "PrivateChannel"
    }),
    f = (0, R.Z)(t, {
      disabled: !m
    });
  return t.isMultiUserDM() ? (0, r.jsx)(ev, ea({
    channel: t,
    selected: n,
    isTyping: d,
    status: s.status === er.Skl.ONLINE ? er.Skl.ONLINE : true,
    latestMessage: f
  }, l)) : (0, r.jsx)(ev, ea({
    channel: t,
    selected: n,
    user: i,
    voiceChannel: o ? u : true,
    isTyping: d,
    nameplate: c,
    latestMessage: f
  }, l, s))
} : null