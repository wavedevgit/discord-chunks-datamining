/** Chunk was on 51333 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => eh,
  RS: () => eO,
  ZP: () => ev,
  bU: () => em
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
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk489618 = require("./489618.js"),
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

function eu(e) {
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

function ec(e, t) {
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

function ed(e, t) {
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
}
let ef = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  ep = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  em = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: i = false,
      reducedClickTarget: l = false,
      visibleElementRef: o
    } = e, s = ed(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let u = (0, z.A)(t);
    return (0, r.jsx)(h.P3F, ec(eu({
      className: a()(es.closeButton, {
        [es.closeButtonPlated]: null != t,
        [es.closeButtonForceShow]: i,
        [es.reducedClickTarget]: l
      }),
      style: u
    }, s), {
      focusProps: {
        offset: {
          top: false,
          bottom: false,
          left: false,
          right: 6
        }
      },
      children: (0, r.jsx)("div", {
        ref: o,
        className: a()({
          [es.innerCloseButtonPlated]: null != t
        }),
        children: (0, r.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: a()(es.closeIcon, {
            [es.closeIconPlated]: null != t
          })
        })
      })
    }))
  },
  eg = () => (0, r.jsx)(h.r7p, {
    size: "xs",
    color: "currentColor",
    className: es.favoriteIcon
  }),
  ey = () => (0, r.jsx)(h.kZF, {
    size: "xs",
    color: "currentColor",
    className: es.favoriteIcon
  }),
  eb = () => (0, r.jsx)(h.t6m, {
    size: "xs",
    color: "currentColor",
    className: es.favoriteIcon
  }),
  eh = e => {
    var {
      route: t,
      selected: n,
      icon: i,
      iconClassName: l,
      interactiveClassName: o,
      text: s,
      children: u,
      locationState: d,
      onClick: f,
      className: m,
      role: g,
      "aria-posinset": y,
      "aria-setsize": b,
      listItemRef: O
    } = e, v = ed(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(k.Z, {
      className: a()(es.channel, {
        [es.fullWidth]: p.tq
      }, m),
      onClick: f,
      role: g,
      focusProps: eu({
        within: true
      }, ep),
      "aria-posinset": y,
      "aria-setsize": b,
      ref: O,
      children: (0, r.jsx)(h.vjx, {
        as: "div",
        selected: n,
        className: a()(o, es.interactive, es.linkButton, {
          [es.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, ec(eu({
          to: {
            pathname: t,
            state: d
          },
          className: es.link
        }, v), {
          children: [(0, r.jsx)(C.Z, {
            muted: false,
            avatar: (0, r.jsx)(i, {
              size: "refresh_sm",
              className: a()(es.linkButtonIcon, l),
              color: "currentColor"
            }),
            name: s,
            innerClassName: es.avatarWithText
          }), u]
        }))
      })
    })
  };

function eO(e) {
  let {
    channel: t,
    selected: l = false,
    user: s,
    activities: p,
    applicationStream: j,
    voiceChannel: S,
    isTyping: B,
    status: z,
    isMobile: V,
    nameplate: J,
    latestMessage: et,
    ref: er,
    "aria-posinset": el,
    "aria-setsize": eh
  } = e, [eO, ev] = i.useState(false), [ex, ej] = i.useState(false), [eP, eS] = i.useState(false), eN = i.useRef(null), eE = i.useRef(null), eC = null != er ? er : eE, {
    avatarSrc: eT,
    avatarDecorationSrc: eZ,
    eventHandlers: ew
  } = (0, q.Z)({
    userId: null == s ? true : s.id,
    size: h.EFr.SIZE_32,
    animateOnHover: !(l || eO || ex || eP)
  }), eI = t.isMultiUserDM(), ek = t.isSystemDM(), eM = !eI && !ek && t.type === ea.d4z.DM, eD = eM && (null == s ? true : s.primaryGuild) != null, e_ = (0, g.e7)([en.ZP], () => en.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eU,
    blocked: eR
  } = (0, g.cj)([$.Z], () => ({
    ignored: $.Z.isIgnored(t.getRecipientId()),
    blocked: $.Z.isBlocked(t.getRecipientId())
  })), eL = eM && eU, eA = eM && eR, eF = (e_ || eL || eA) && !(l || eO), {
    hasUnreadMessages: eG,
    lastMessageId: eH
  } = (0, g.cj)([Q.ZP], () => ({
    hasUnreadMessages: Q.ZP.getMentionCount(t.id) > 0,
    lastMessageId: Q.ZP.lastMessageId(t.id)
  })), eB = (0, I.ZP)(t), ez = (0, g.e7)([U.Z], () => U.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eK,
    rearrangeContextMenu: eY
  } = R.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), {
    showMessagePreviews: eW,
    prioritizeOverStatus: eX
  } = H.U.useConfig({
    location: "PrivateChannel"
  }), eq = (0, g.e7)([ee.Z], () => ee.Z.hidePersonalInformation), eV = (0, G.X)(t.guild_id), eJ = (0, W.l)({
    timestamp: ei.default.extractTimestamp(null != eH ? eH : t.id)
  }), eQ = i.useRef(null), e$ = null != J && (l || eO || eP), e0 = () => {
    ev(true)
  }, e1 = () => {
    ev(false)
  }, e5 = () => {
    ej(true)
  }, e4 = () => {
    ej(false)
  }, e6 = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), O.Z.closePrivateChannel(t.id, l, n)
  }, e3 = () => {
    O.Z.preload(ea.ME, t.id)
  }, e8 = e => {
    e.stopPropagation()
  }, e7 = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eN.current) || t.click()
    }
  }, e9 = e => {
    let i = "contextmenu" === e.type,
      a = eY && !i,
      o = i ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    eS(true), t.isMultiUserDM() ? (0, v.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, ec(eu({}, n), {
        channel: t,
        selected: l
      }))
    }, {
      impressionName: o,
      noBlurEvent: true,
      onClose: () => eS(false)
    }) : (0, v.jW)(e, async () => {
      let {
        default: e
      } = a ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("66165"), n.e("6915"), n.e("56826"), n.e("15160")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, ec(eu({}, n), {
        user: s,
        channel: t,
        channelSelected: l
      }))
    }, {
      impressionName: o,
      onClose: () => eS(false)
    })
  }, e2 = e => {
    e.preventDefault(), e.stopPropagation();
    let i = eo.intl.formatToPlainString(eo.t.hJ5Ap4, {
        name: eB
      }),
      l = eo.intl.format(eo.t.SSIVOu, {
        name: eB
      });
    t.isManaged() && (i = eo.intl.formatToPlainString(eo.t.hVGjEW, {
      name: eB
    }), l = eo.intl.format(eo.t.IK1Qvs, {
      name: eB
    })), (0, h.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, eu({
        header: i,
        body: l,
        onSubmit: e6
      }, t))
    })
  }, te = (0, r.jsx)(_.Z, {
    userName: eB,
    displayNameStyles: null == s ? true : s.displayNameStyles,
    effectDisplayType: eO || l || eP ? D.F.ANIMATED : D.F.PLAIN,
    loop: eO,
    boldFontOpacity: .9
  }), tt = eD ? (0, r.jsxs)(r.Fragment, {
    children: [te, (0, r.jsx)(A.ZP, {
      primaryGuild: null == s ? true : s.primaryGuild,
      userId: null == s ? true : s.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(es.clanTag, {
        [es.clanTagMuted]: eF
      })
    })]
  }) : te, tn = i.useRef(null), tr = (0, M.Y)({
    location: "PrivateChannel"
  }) && (null == s ? true : s.displayNameStyles) != null, ti = (0, m.Z)(), tl = [(0, Z.ZP)({
    channel: t,
    unread: eG
  }), (0, Z.Yb)({
    channel: t,
    muted: e_,
    userStatus: z
  })].filter(Boolean).join(", "), ta = (0, r.jsxs)(r.Fragment, {
    children: [ez && !eP ? (0, r.jsx)(eg, {}) : null, eL ? (0, r.jsx)(ey, {}) : null, eA ? (0, r.jsx)(eb, {}) : null]
  }), to = eW ? (0, r.jsxs)("div", {
    className: es.timestampContainer,
    children: [ta, eV !== F.Z.ALL || eq ? null : (0, r.jsx)(h.Text, {
      variant: "text-xs/normal",
      color: l ? "interactive-text-active" : eG ? "interactive-text-default" : "text-muted",
      className: es.timestamp,
      children: eJ
    })]
  }) : null;
  return (0, r.jsx)(f.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, i = ed(e, ["role"]);
      return (0, r.jsxs)(k.Z, {
        className: a()(es.channel, es.dm),
        role: n,
        focusProps: ec(eu({}, ep), {
          focusTarget: eN,
          ringTarget: eC
        }),
        ref: eC,
        onMouseEnter: e0,
        onMouseLeave: e1,
        onMouseDown: e3,
        onFocus: e5,
        onBlur: e4,
        onContextMenu: e9,
        "aria-setsize": eh,
        "aria-posinset": el,
        children: [eG ? (0, r.jsx)("div", {
          className: a()(es.unreadPill, {
            [es.muted]: eF
          })
        }) : null, (0, r.jsxs)(h.vjx, {
          className: a()(es.interactive, {
            [es.interactiveSelected]: l || eP
          }),
          as: "div",
          onClick: e7,
          muted: eF,
          selected: l,
          children: [(0, r.jsx)(Y.Z, {
            nameplate: e$ ? J : true,
            selected: l,
            hovered: eO,
            content: tn,
            placement: K.i.CHANNEL
          }), (0, r.jsx)(c.rU, ec(eu({
            innerRef: eN,
            to: ea.Z5c.CHANNEL(ea.ME, t.id),
            className: es.link,
            "aria-label": tl
          }, i), {
            children: (0, r.jsx)(C.Z, {
              ref: tn,
              avatar: (() => {
                let e = h.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && null == t.icon) return (0, r.jsx)(L.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: B,
                    status: z
                  });
                  else return (0, r.jsx)(ef, ec(eu({}, ew), {
                    src: (0, w.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: B ? ea.Skl.ONLINE : z,
                    isTyping: B
                  }));
                u()(null != s, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return s.isSystemUser() || (n = (0, x.Z)(p) ? ea.Skl.STREAMING : z), (0, r.jsx)(ef, ec(eu({}, ew), {
                  size: h.EFr.SIZE_32,
                  src: eT,
                  avatarDecoration: eZ,
                  status: n,
                  isMobile: V,
                  isTyping: B,
                  "aria-label": s.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eG && !eF,
              muted: eF,
              subText: (() => {
                let e = (null == p ? true : p.some(e => e.type !== ea.IIU.CUSTOM_STATUS)) === true,
                  n = eW && null != et && !eq ? (0, r.jsx)("div", {
                    className: es.subtext,
                    children: (0, r.jsx)(X.o, {
                      channel: t,
                      message: et
                    })
                  }) : null,
                  i = null != et && null != n && (1 > (0, o.Z)(new Date, et.timestamp) || eX && !e || eG);
                return t.isSystemDM() ? (0, r.jsx)("div", {
                  className: es.subtext,
                  children: (0, T.Z)(t.id) ? eo.intl.string(eo.t.FL5T01) : eo.intl.string(eo.t.NnY5lc)
                }) : t.isMultiUserDM() ? null != n ? n : (0, r.jsx)("div", {
                  className: es.subtext,
                  children: eo.intl.format(eo.t.CxSA5N, {
                    members: t.recipients.length + 1
                  })
                }) : !i && (0, P.Z)({
                  activities: p,
                  status: z,
                  applicationStream: j,
                  voiceChannel: S
                }) ? (0, r.jsx)(N.Z, {
                  user: s,
                  activities: p,
                  voiceChannel: S,
                  applicationStream: j,
                  animateEmoji: eO || ex || eP,
                  textClassName: es.activityStatusText,
                  iconClassName: eF ? es.mutedIcon : true
                }) : null != n ? n : null
              })(),
              subtextClassName: a()(es.subtextContainer, {
                [es.subtextNameplated]: e$,
                [es.moreSpace]: eW
              }),
              nameClassName: es.username,
              name: (0, r.jsx)(y.Z, {
                className: a()(es.overflowTooltip, {
                  [es.withDisplayNameStyles]: tr
                }),
                children: tt
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(E.Z, {
                className: es.decorator,
                type: E.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              rightDecorators: to,
              withDisplayNameStyles: tr
            })
          })), (0, r.jsxs)("div", {
            className: a()(es.iconsContainer, {
              [es.nameplated]: e$ && !eW
            }),
            children: [!eW && ta, eK && !ti ? (0, r.jsx)(b.u, {
              asContainer: true,
              text: eo.intl.string(eI ? eo.t.Et8qwj : eo.t["d+e27s"]),
              delay: 500,
              targetElementRef: eQ,
              children: (0, r.jsx)(em, {
                icon: h.xhG,
                "aria-label": eo.intl.string(eo.t.PdRCRg),
                onClick: e => {
                  e9(e)
                },
                onMouseDown: e8,
                nameplate: J,
                forceShow: eP,
                visibleElementRef: eQ
              })
            }) : (0, r.jsx)(em, {
              icon: h.Dio,
              "aria-label": eI ? eo.intl.string(eo.t["26C4oi"]) : eo.intl.string(eo.t.jsvgc3),
              onClick: eI ? e2 : e6,
              onMouseDown: e8,
              nameplate: J,
              reducedClickTarget: true,
              visibleElementRef: eQ
            })]
          })]
        })]
      })
    }
  })
}
let ev = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, i = ed(e, ["channel", "selected"]);
  let l = (0, g.e7)([er.default], () => er.default.getUser(t.getRecipientId())),
    a = null == l ? true : l.id,
    o = (0, g.cj)([J.Z, V.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        let n = J.Z.getState().statuses;
        t.recipients.some(e => n[e] === ea.Skl.ONLINE) && (e = ea.Skl.ONLINE)
      } else null != a && (e = J.Z.getStatus(a));
      return {
        status: e,
        activities: null != a ? J.Z.getActivities(a) : null,
        applicationStream: null != a ? V.Z.getAnyStreamForUser(a) : null,
        isMobile: null != a && J.Z.isMobileOnline(a)
      }
    }, [t, a]),
    {
      voiceActivityStatusEnabled: s
    } = (0, j.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: u
    } = (0, S.Z)({
      userId: a
    }),
    c = (0, B.K)({
      user: l
    }),
    d = (0, g.e7)([er.default, et.Z], () => t.isMultiUserDM() ? ei.default.keys(et.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null == (t = er.default.getCurrentUser()) ? true : t.id)
    }) : null != l && et.Z.isTyping(t.id, t.getRecipientId()), [t, l]),
    {
      showMessagePreviews: f
    } = H.U.useConfig({
      location: "PrivateChannel"
    }),
    p = (0, G.Z)(t, {
      disabled: !f
    });
  return t.isMultiUserDM() ? (0, r.jsx)(eO, eu({
    channel: t,
    selected: n,
    isTyping: d,
    status: o.status === ea.Skl.ONLINE ? ea.Skl.ONLINE : true,
    latestMessage: p
  }, i)) : (0, r.jsx)(eO, eu({
    channel: t,
    selected: n,
    user: l,
    voiceChannel: s ? u : true,
    isTyping: d,
    nameplate: c,
    latestMessage: p
  }, i, o))
} : null