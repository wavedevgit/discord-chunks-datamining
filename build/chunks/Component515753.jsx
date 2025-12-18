/** Chunk was on 51333 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => eb,
  RS: () => ev,
  ZP: () => eh,
  bU: () => ef
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
  Chunk771173 = require("./771173.jsx"),
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

function es(e) {
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

function eu(e, t) {
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

function ec(e, t) {
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
let ed = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  em = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  ef = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: i = false,
      reducedClickTarget: l = false,
      visibleElementRef: o
    } = e, s = ec(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let u = (0, B.A)(t);
    return (0, r.jsx)(v.P3F, eu(es({
      className: a()(eo.closeButton, {
        [eo.closeButtonPlated]: null != t,
        [eo.closeButtonForceShow]: i,
        [eo.reducedClickTarget]: l
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
          [eo.innerCloseButtonPlated]: null != t
        }),
        children: (0, r.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: a()(eo.closeIcon, {
            [eo.closeIconPlated]: null != t
          })
        })
      })
    }))
  },
  ep = () => (0, Chunk54381.jsx)(Chunk481060.r7p, {
    size: "xs",
    color: "currentColor",
    className: Chunk102599.favoriteIcon
  }),
  eg = () => (0, Chunk54381.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk102599.favoriteIcon
  }),
  ey = () => (0, Chunk54381.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk102599.favoriteIcon
  }),
  eb = e => {
    var {
      route: t,
      selected: n,
      icon: i,
      iconClassName: l,
      interactiveClassName: o,
      text: s,
      children: u,
      locationState: d,
      onClick: m,
      className: p,
      role: g,
      "aria-posinset": y,
      "aria-setsize": b,
      listItemRef: h
    } = e, O = ec(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(k.Z, {
      className: a()(eo.channel, {
        [eo.fullWidth]: f.tq
      }, p),
      onClick: m,
      role: g,
      focusProps: es({
        within: true
      }, em),
      "aria-posinset": y,
      "aria-setsize": b,
      ref: h,
      children: (0, r.jsx)(v.vjx, {
        as: "div",
        selected: n,
        className: a()(o, eo.interactive, eo.linkButton, {
          [eo.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, eu(es({
          to: {
            pathname: t,
            state: d
          },
          className: eo.link
        }, O), {
          children: [(0, r.jsx)(C.Z, {
            muted: false,
            avatar: (0, r.jsx)(i, {
              size: "refresh_sm",
              className: a()(eo.linkButtonIcon, l),
              color: "currentColor"
            }),
            name: s,
            innerClassName: eo.avatarWithText
          }), u]
        }))
      })
    })
  };

function ev(e) {
  let {
    channel: t,
    selected: l = false,
    user: s,
    activities: f,
    applicationStream: j,
    voiceChannel: S,
    isTyping: G,
    status: H,
    isMobile: B,
    nameplate: V,
    latestMessage: X,
    ref: ee,
    "aria-posinset": en,
    "aria-setsize": ei
  } = e, [eb, ev] = i.useState(false), [eh, eO] = i.useState(false), [ex, ej] = i.useState(false), eP = i.useRef(null), eS = i.useRef(null), eN = null != ee ? ee : eS, {
    avatarSrc: eE,
    avatarDecorationSrc: eC,
    eventHandlers: eT
  } = (0, q.Z)({
    userId: null == s ? true : s.id,
    size: v.EFr.SIZE_32,
    animateOnHover: !(l || eb || eh || ex)
  }), eZ = t.isMultiUserDM(), eI = t.isSystemDM(), ew = !eZ && !eI && t.type === el.d4z.DM, ek = ew && (null == s ? true : s.primaryGuild) != null, eM = (0, g.e7)([et.ZP], () => et.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eD,
    blocked: e_
  } = (0, g.cj)([Q.Z], () => ({
    ignored: Q.Z.isIgnored(t.getRecipientId()),
    blocked: Q.Z.isBlocked(t.getRecipientId())
  })), eU = ew && eD, eR = ew && e_, eA = (eM || eU || eR) && !(l || eb), {
    hasUnreadMessages: eL,
    lastMessageId: eG
  } = (0, g.cj)([J.ZP], () => ({
    hasUnreadMessages: J.ZP.getMentionCount(t.id) > 0,
    lastMessageId: J.ZP.lastMessageId(t.id)
  })), eF = (0, w.ZP)(t), eH = (0, g.e7)([U.Z], () => U.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eB,
    rearrangeContextMenu: ez
  } = R.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), {
    showMessagePreviews: eY,
    prioritizeOverStatus: eW
  } = F.U.useConfig({
    location: "PrivateChannel"
  }), eK = (0, g.e7)([$.Z], () => $.Z.hidePersonalInformation), eq = (0, W.l)({
    timestamp: er.default.extractTimestamp(null != eG ? eG : t.id)
  }), eV = i.useRef(null), eX = null != V && (l || eb || ex), eJ = () => {
    ev(true)
  }, eQ = () => {
    ev(false)
  }, e$ = () => {
    eO(true)
  }, e0 = () => {
    eO(false)
  }, e1 = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(t.id, l, n)
  }, e5 = () => {
    h.Z.preload(el.ME, t.id)
  }, e4 = e => {
    e.stopPropagation()
  }, e3 = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eP.current) || t.click()
    }
  }, e6 = e => {
    let i = "contextmenu" === e.type,
      a = ez && !i,
      o = i ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    ej(true), t.isMultiUserDM() ? (0, O.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, eu(es({}, n), {
        channel: t,
        selected: l
      }))
    }, {
      impressionName: o,
      noBlurEvent: true,
      onClose: () => ej(false)
    }) : (0, O.jW)(e, async () => {
      let {
        default: e
      } = a ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("66165"), n.e("6915"), n.e("56826"), n.e("15160")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, eu(es({}, n), {
        user: s,
        channel: t,
        channelSelected: l
      }))
    }, {
      impressionName: o,
      onClose: () => ej(false)
    })
  }, e8 = e => {
    e.preventDefault(), e.stopPropagation();
    let i = ea.intl.formatToPlainString(ea.t.hJ5Ap4, {
        name: eF
      }),
      l = ea.intl.format(ea.t.SSIVOu, {
        name: eF
      });
    t.isManaged() && (i = ea.intl.formatToPlainString(ea.t.hVGjEW, {
      name: eF
    }), l = ea.intl.format(ea.t.IK1Qvs, {
      name: eF
    })), (0, v.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, es({
        header: i,
        body: l,
        onSubmit: e1
      }, t))
    })
  }, e7 = (0, r.jsx)(_.Z, {
    userName: eF,
    displayNameStyles: null == s ? true : s.displayNameStyles,
    effectDisplayType: eb || l || ex ? D.F.ANIMATED : D.F.PLAIN,
    loop: eb,
    boldFontOpacity: .9
  }), e9 = ek ? (0, r.jsxs)(r.Fragment, {
    children: [e7, (0, r.jsx)(L.ZP, {
      primaryGuild: null == s ? true : s.primaryGuild,
      userId: null == s ? true : s.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(eo.clanTag, {
        [eo.clanTagMuted]: eA
      })
    })]
  }) : e7, e2 = i.useRef(null), te = (0, M.Y)({
    location: "PrivateChannel"
  }) && (null == s ? true : s.displayNameStyles) != null, tt = (0, p.Z)(), tn = [(0, Z.ZP)({
    channel: t,
    unread: eL
  }), (0, Z.Yb)({
    channel: t,
    muted: eM,
    userStatus: H
  })].filter(Boolean).join(", "), tr = (0, r.jsxs)(r.Fragment, {
    children: [eH && !ex ? (0, r.jsx)(ep, {}) : null, eU ? (0, r.jsx)(eg, {}) : null, eR ? (0, r.jsx)(ey, {}) : null]
  }), ti = eY ? (0, r.jsxs)("div", {
    className: eo.timestampContainer,
    children: [tr, (0, r.jsx)(v.Text, {
      variant: "text-xs/normal",
      color: l ? "interactive-text-active" : eL ? "interactive-text-default" : "text-muted",
      className: eo.timestamp,
      children: eq
    })]
  }) : null;
  return (0, r.jsx)(m.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, i = ec(e, ["role"]);
      return (0, r.jsxs)(k.Z, {
        className: a()(eo.channel, eo.dm),
        role: n,
        focusProps: eu(es({}, em), {
          focusTarget: eP,
          ringTarget: eN
        }),
        ref: eN,
        onMouseEnter: eJ,
        onMouseLeave: eQ,
        onMouseDown: e5,
        onFocus: e$,
        onBlur: e0,
        onContextMenu: e6,
        "aria-setsize": ei,
        "aria-posinset": en,
        children: [eL ? (0, r.jsx)("div", {
          className: a()(eo.unreadPill, {
            [eo.muted]: eA
          })
        }) : null, (0, r.jsxs)(v.vjx, {
          className: a()(eo.interactive, {
            [eo.interactiveSelected]: l || ex
          }),
          as: "div",
          onClick: e3,
          muted: eA,
          selected: l,
          children: [(0, r.jsx)(Y.Z, {
            nameplate: eX ? V : true,
            selected: l,
            hovered: eb,
            content: e2,
            placement: z.i.CHANNEL
          }), (0, r.jsx)(c.rU, eu(es({
            innerRef: eP,
            to: el.Z5c.CHANNEL(el.ME, t.id),
            className: eo.link,
            "aria-label": tn
          }, i), {
            children: (0, r.jsx)(C.Z, {
              ref: e2,
              avatar: (() => {
                let e = v.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && null == t.icon) return (0, r.jsx)(A.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: G,
                    status: H
                  });
                  else return (0, r.jsx)(ed, eu(es({}, eT), {
                    src: (0, I.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: G ? el.Skl.ONLINE : H,
                    isTyping: G
                  }));
                u()(null != s, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return s.isSystemUser() || (n = (0, x.Z)(f) ? el.Skl.STREAMING : H), (0, r.jsx)(ed, eu(es({}, eT), {
                  size: v.EFr.SIZE_32,
                  src: eE,
                  avatarDecoration: eC,
                  status: n,
                  isMobile: B,
                  isTyping: G,
                  "aria-label": s.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eL && !eA,
              muted: eA,
              subText: (() => {
                let e = (null == f ? true : f.some(e => e.type !== el.IIU.CUSTOM_STATUS)) === true,
                  n = eY && null != X && !eK ? (0, r.jsx)("div", {
                    className: eo.subtext,
                    children: (0, r.jsx)(K.o, {
                      channel: t,
                      message: X
                    })
                  }) : null,
                  i = null != X && null != n && (1 > (0, o.Z)(new Date, X.timestamp) || eW && !e || eL);
                return t.isSystemDM() ? (0, r.jsx)("div", {
                  className: eo.subtext,
                  children: (0, T.Z)(t.id) ? ea.intl.string(ea.t.FL5T01) : ea.intl.string(ea.t.NnY5lc)
                }) : t.isMultiUserDM() ? null != n ? n : (0, r.jsx)("div", {
                  className: eo.subtext,
                  children: ea.intl.format(ea.t.CxSA5N, {
                    members: t.recipients.length + 1
                  })
                }) : !i && (0, P.Z)({
                  activities: f,
                  status: H,
                  applicationStream: j,
                  voiceChannel: S
                }) ? (0, r.jsx)(N.Z, {
                  location: "PrivateChannel",
                  user: s,
                  activities: f,
                  voiceChannel: S,
                  applicationStream: j,
                  animateEmoji: eb || eh || ex,
                  textClassName: eo.activityStatusText,
                  iconClassName: eA ? eo.mutedIcon : true
                }) : null != n ? n : null
              })(),
              subtextClassName: eX ? eo.subtextNameplated : true,
              nameClassName: eo.username,
              name: (0, r.jsx)(y.Z, {
                className: a()(eo.overflowTooltip, {
                  [eo.withDisplayNameStyles]: te
                }),
                children: e9
              }),
              decorators: (0, r.jsxs)(r.Fragment, {
                children: [t.isSystemDM() ? (0, r.jsx)(E.Z, {
                  className: eo.decorator,
                  type: E.Z.Types.SYSTEM_DM,
                  verified: true
                }) : null, ti]
              }),
              withDisplayNameStyles: te,
              fullWidth: true
            })
          })), (0, r.jsxs)("div", {
            className: a()(eo.iconsContainer, {
              [eo.nameplated]: eX && !eY
            }),
            children: [!eY && tr, eB && !tt ? (0, r.jsx)(b.u, {
              asContainer: true,
              text: ea.intl.string(eZ ? ea.t.Et8qwj : ea.t["d+e27s"]),
              delay: 500,
              targetElementRef: eV,
              children: (0, r.jsx)(ef, {
                icon: v.xhG,
                "aria-label": ea.intl.string(ea.t.PdRCRg),
                onClick: e => {
                  e6(e)
                },
                onMouseDown: e4,
                nameplate: V,
                forceShow: ex,
                visibleElementRef: eV
              })
            }) : (0, r.jsx)(ef, {
              icon: v.Dio,
              "aria-label": eZ ? ea.intl.string(ea.t["26C4oi"]) : ea.intl.string(ea.t.jsvgc3),
              onClick: eZ ? e8 : e1,
              onMouseDown: e4,
              nameplate: V,
              reducedClickTarget: true,
              visibleElementRef: eV
            })]
          })]
        })]
      })
    }
  })
}
let eh = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, i = ec(e, ["channel", "selected"]);
  let l = (0, g.e7)([en.default], () => en.default.getUser(t.getRecipientId())),
    a = null == l ? true : l.id,
    o = (0, g.cj)([X.Z, V.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        let n = X.Z.getState().statuses;
        t.recipients.some(e => n[e] === el.Skl.ONLINE) && (e = el.Skl.ONLINE)
      } else null != a && (e = X.Z.getStatus(a));
      return {
        status: e,
        activities: null != a ? X.Z.getActivities(a) : null,
        applicationStream: null != a ? V.Z.getAnyStreamForUser(a) : null,
        isMobile: null != a && X.Z.isMobileOnline(a)
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
    c = (0, H.K)({
      user: l
    }),
    d = (0, g.e7)([en.default, ee.Z], () => t.isMultiUserDM() ? er.default.keys(ee.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null == (t = en.default.getCurrentUser()) ? true : t.id)
    }) : null != l && ee.Z.isTyping(t.id, t.getRecipientId()), [t, l]),
    {
      showMessagePreviews: m
    } = F.U.useConfig({
      location: "PrivateChannel"
    }),
    f = (0, G.Z)(t, {
      disabled: !m
    });
  return t.isMultiUserDM() ? (0, r.jsx)(ev, es({
    channel: t,
    selected: n,
    isTyping: d,
    status: o.status === el.Skl.ONLINE ? el.Skl.ONLINE : true,
    latestMessage: f
  }, i)) : (0, r.jsx)(ev, es({
    channel: t,
    selected: n,
    user: l,
    voiceChannel: s ? u : true,
    isTyping: d,
    nameplate: c,
    latestMessage: f
  }, i, o))
} : null