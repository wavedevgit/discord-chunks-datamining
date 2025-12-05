/** Chunk was on 72472 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => ed,
  RS: () => ep,
  ZP: () => ef,
  bU: () => ea
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk850020 = require("./850020.js"),
  Chunk379839 = require("./379839.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk199902 = require("./199902.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk111583 = require("./111583.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800525 = require("./800525.js");

function en(e) {
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

function er(e, t) {
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

function ei(e, t) {
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
let el = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  eo = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  ea = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: i = false,
      reducedClickTarget: l = false,
      visibleElementRef: a
    } = e, s = ei(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let c = (0, B.A)(t);
    return (0, r.jsx)(O.P3F, er(en({
      className: o()(et.closeButton, {
        [et.closeButtonPlated]: null != t,
        [et.closeButtonForceShow]: i,
        [et.reducedClickTarget]: l
      }),
      style: c
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
        ref: a,
        className: o()({
          [et.innerCloseButtonPlated]: null != t
        }),
        children: (0, r.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: o()(et.closeIcon, {
            [et.closeIconPlated]: null != t
          })
        })
      })
    }))
  },
  es = () => (0, Chunk54381.jsx)(Chunk481060.r7p, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  ec = () => (0, Chunk54381.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  eu = () => (0, Chunk54381.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  ed = e => {
    var {
      route: t,
      selected: n,
      icon: i,
      iconClassName: l,
      interactiveClassName: a,
      text: s,
      children: u,
      locationState: d,
      onClick: f,
      className: m,
      role: b,
      "aria-posinset": y,
      "aria-setsize": v,
      listItemRef: g
    } = e, h = ei(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(M.Z, {
      className: o()(et.channel, {
        [et.fullWidth]: p.tq
      }, m),
      onClick: f,
      role: b,
      focusProps: en({
        within: true
      }, eo),
      "aria-posinset": y,
      "aria-setsize": v,
      ref: g,
      children: (0, r.jsx)(O.vjx, {
        as: "div",
        selected: n,
        className: o()(a, et.interactive, et.linkButton, {
          [et.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, er(en({
          to: {
            pathname: t,
            state: d
          },
          className: et.link
        }, h), {
          children: [(0, r.jsx)(C.Z, {
            muted: false,
            avatar: (0, r.jsx)(i, {
              size: "refresh_sm",
              className: o()(et.linkButtonIcon, l),
              color: "currentColor"
            }),
            name: s,
            innerClassName: et.avatarWithText
          }), u]
        }))
      })
    })
  };

function ep(e) {
  let {
    channel: t,
    selected: l = false,
    user: a,
    activities: p,
    applicationStream: j,
    voiceChannel: N,
    isTyping: A,
    status: B,
    isMobile: H,
    nameplate: W,
    ref: Q,
    "aria-posinset": q,
    "aria-setsize": J
  } = e, [$, ed] = i.useState(false), [ep, ef] = i.useState(false), [em, eb] = i.useState(false), ey = i.useRef(null), eO = i.useRef(null), ev = null != Q ? Q : eO, {
    avatarSrc: eg,
    avatarDecorationSrc: eh,
    eventHandlers: ej
  } = (0, z.Z)({
    userId: null == a ? true : a.id,
    size: O.EFr.SIZE_32,
    animateOnHover: !(l || $ || ep || em)
  }), ex = t.isMultiUserDM(), eN = t.isSystemDM(), eS = !ex && !eN && t.type === X.d4z.DM, eP = eS && (null == a ? true : a.primaryGuild) != null, eC = (0, m.e7)([V.ZP], () => V.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: ew,
    blocked: eE
  } = (0, m.cj)([Y.Z], () => ({
    ignored: Y.Z.isIgnored(t.getRecipientId()),
    blocked: Y.Z.isBlocked(t.getRecipientId())
  })), eT = eS && ew, eZ = eS && eE, eM = (eC || eT || eZ) && !(l || $), eI = (0, m.e7)([K.ZP], () => K.ZP.getMentionCount(t.id) > 0), eD = (0, Z.ZP)(t), ek = (0, m.e7)([_.Z], () => _.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: e_,
    rearrangeContextMenu: eR
  } = R.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eL = i.useRef(null), eU = null != W && (l || $ || em), eA = () => {
    ed(true)
  }, eB = () => {
    ed(false)
  }, eG = () => {
    ef(true)
  }, eF = () => {
    ef(false)
  }, ez = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), v.Z.closePrivateChannel(t.id, l, n)
  }, eH = () => {
    v.Z.preload(X.ME, t.id)
  }, eW = e => {
    e.stopPropagation()
  }, eK = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = ey.current) || t.click()
    }
  }, eY = e => {
    let i = "contextmenu" === e.type,
      o = eR && !i,
      s = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    eb(true), t.isMultiUserDM() ? (0, g.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, er(en({}, n), {
        channel: t,
        selected: l
      }))
    }, {
      impressionName: s,
      noBlurEvent: true,
      onClose: () => eb(false)
    }) : (0, g.jW)(e, async () => {
      let {
        default: e
      } = o ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("66165"), n.e("6915"), n.e("56826"), n.e("653")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, er(en({}, n), {
        user: a,
        channel: t,
        channelSelected: l
      }))
    }, {
      impressionName: s,
      onClose: () => eb(false)
    })
  }, eQ = e => {
    e.preventDefault(), e.stopPropagation();
    let i = ee.intl.formatToPlainString(ee.t.hJ5Ap4, {
        name: eD
      }),
      l = ee.intl.format(ee.t.SSIVOu, {
        name: eD
      });
    t.isManaged() && (i = ee.intl.formatToPlainString(ee.t.hVGjEW, {
      name: eD
    }), l = ee.intl.format(ee.t.IK1Qvs, {
      name: eD
    })), (0, O.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, en({
        header: i,
        body: l,
        onSubmit: ez
      }, t))
    })
  }, eV = (0, r.jsx)(k.Z, {
    userName: eD,
    displayNameStyles: null == a ? true : a.displayNameStyles,
    effectDisplayType: $ || l || em ? D.F.ANIMATED : D.F.PLAIN,
    loop: $,
    boldFontOpacity: .9
  }), eq = eP ? (0, r.jsxs)(r.Fragment, {
    children: [eV, (0, r.jsx)(U.ZP, {
      primaryGuild: null == a ? true : a.primaryGuild,
      userId: null == a ? true : a.id,
      inline: true,
      disableGuildProfile: true,
      className: o()(et.clanTag, {
        [et.clanTagMuted]: eM
      })
    })]
  }) : eV, eJ = i.useRef(null), e$ = (0, I.Y)({
    location: "PrivateChannel"
  }) && (null == a ? true : a.displayNameStyles) != null, eX = (0, f.Z)(), e0 = [(0, E.ZP)({
    channel: t,
    unread: eI
  }), (0, E.Yb)({
    channel: t,
    muted: eC,
    userStatus: B
  })].filter(Boolean).join(", ");
  return (0, r.jsx)(d.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, i = ei(e, ["role"]);
      return (0, r.jsxs)(M.Z, {
        className: o()(et.channel, et.dm),
        role: n,
        focusProps: er(en({}, eo), {
          focusTarget: ey,
          ringTarget: ev
        }),
        ref: ev,
        onMouseEnter: eA,
        onMouseLeave: eB,
        onMouseDown: eH,
        onFocus: eG,
        onBlur: eF,
        onContextMenu: eY,
        "aria-setsize": J,
        "aria-posinset": q,
        children: [eI ? (0, r.jsx)("div", {
          className: o()(et.unreadPill, {
            [et.muted]: eM
          })
        }) : null, (0, r.jsxs)(O.vjx, {
          className: o()(et.interactive, {
            [et.interactiveSelected]: l || em
          }),
          as: "div",
          onClick: eK,
          muted: eM,
          selected: l,
          children: [(0, r.jsx)(F.Z, {
            nameplate: eU ? W : true,
            selected: l,
            hovered: $,
            content: eJ,
            placement: G.i.CHANNEL
          }), (0, r.jsx)(c.rU, er(en({
            innerRef: ey,
            to: X.Z5c.CHANNEL(X.ME, t.id),
            className: et.link,
            "aria-label": e0
          }, i), {
            children: (0, r.jsx)(C.Z, {
              ref: eJ,
              avatar: (() => {
                let e = O.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && null == t.icon) return (0, r.jsx)(L.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: A,
                    status: B
                  });
                  else return (0, r.jsx)(el, er(en({}, ej), {
                    src: (0, T.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: A ? X.Skl.ONLINE : B,
                    isTyping: A
                  }));
                s()(null != a, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return a.isSystemUser() || (n = (0, h.Z)(p) ? X.Skl.STREAMING : B), (0, r.jsx)(el, er(en({}, ej), {
                  size: O.EFr.SIZE_32,
                  src: eg,
                  avatarDecoration: eh,
                  status: n,
                  isMobile: H,
                  isTyping: A,
                  "aria-label": a.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eI && !eM,
              muted: eM,
              subText: t.isSystemDM() ? (0, r.jsx)("div", {
                className: et.subtext,
                children: (0, w.Z)(t.id) ? ee.intl.string(ee.t.FL5T01) : ee.intl.string(ee.t.NnY5lc)
              }) : t.isMultiUserDM() ? (0, r.jsx)("div", {
                className: et.subtext,
                children: ee.intl.format(ee.t.CxSA5N, {
                  members: t.recipients.length + 1
                })
              }) : (0, x.Z)({
                activities: p,
                status: B,
                applicationStream: j,
                voiceChannel: N
              }) ? (0, r.jsx)(S.Z, {
                location: "PrivateChannel",
                user: a,
                activities: p,
                voiceChannel: N,
                applicationStream: j,
                animateEmoji: $ || ep || em,
                textClassName: et.activityStatusText,
                iconClassName: eM ? et.mutedIcon : true
              }) : null,
              name: (0, r.jsx)(b.Z, {
                className: o()(et.overflowTooltip, {
                  [et.withDisplayNameStyles]: e$
                }),
                children: eq
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(P.Z, {
                className: et.decorator,
                type: P.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e$
            })
          })), (0, r.jsxs)("div", {
            className: o()(et.iconsContainer, {
              [et.nameplated]: eU
            }),
            children: [ek && !em ? (0, r.jsx)(es, {}) : null, eT ? (0, r.jsx)(ec, {}) : null, eZ ? (0, r.jsx)(eu, {}) : null, e_ && !eX ? (0, r.jsx)(y.u, {
              asContainer: true,
              text: ee.intl.string(ex ? ee.t.Et8qwj : ee.t["d+e27s"]),
              delay: 500,
              targetElementRef: eL,
              children: (0, r.jsx)(ea, {
                icon: O.xhG,
                "aria-label": ee.intl.string(ee.t.PdRCRg),
                onClick: e => {
                  eY(e)
                },
                onMouseDown: eW,
                nameplate: W,
                forceShow: em,
                visibleElementRef: eL
              })
            }) : (0, r.jsx)(ea, {
              icon: O.Dio,
              "aria-label": ex ? ee.intl.string(ee.t["26C4oi"]) : ee.intl.string(ee.t.jsvgc3),
              onClick: ex ? eQ : ez,
              onMouseDown: eW,
              nameplate: W,
              reducedClickTarget: true,
              visibleElementRef: eL
            })]
          })]
        })]
      })
    }
  })
}
let ef = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, i = ei(e, ["channel", "selected"]);
  let l = (0, m.e7)([q.default], () => q.default.getUser(t.getRecipientId())),
    o = null == l ? true : l.id,
    a = (0, m.cj)([W.Z, H.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        let n = W.Z.getState().statuses;
        t.recipients.some(e => n[e] === X.Skl.ONLINE) && (e = X.Skl.ONLINE)
      } else null != o && (e = W.Z.getStatus(o));
      return {
        status: e,
        activities: null != o ? W.Z.getActivities(o) : null,
        applicationStream: null != o ? H.Z.getAnyStreamForUser(o) : null,
        isMobile: null != o && W.Z.isMobileOnline(o)
      }
    }, [t, o]),
    {
      voiceActivityStatusEnabled: s
    } = (0, j.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: c
    } = (0, N.Z)({
      userId: o
    }),
    u = (0, A.K)({
      user: l
    }),
    d = (0, m.e7)([q.default, Q.Z], () => t.isMultiUserDM() ? J.default.keys(Q.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null == (t = q.default.getCurrentUser()) ? true : t.id)
    }) : null != l && Q.Z.isTyping(t.id, t.getRecipientId()), [t, l]);
  return t.isMultiUserDM() ? (0, r.jsx)(ep, en({
    channel: t,
    selected: n,
    isTyping: d,
    status: a.status === X.Skl.ONLINE ? X.Skl.ONLINE : true
  }, i)) : (0, r.jsx)(ep, en({
    channel: t,
    selected: n,
    user: l,
    voiceChannel: s ? c : true,
    isTyping: d,
    nameplate: u
  }, i, a))
} : null