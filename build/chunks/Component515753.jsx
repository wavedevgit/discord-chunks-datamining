/** Chunk was on 72472 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => ep,
  RS: () => ef,
  ZP: () => em,
  bU: () => es
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk986081 = require("./986081.js"),
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
  Chunk551139 = require("./551139.js");

function er(e) {
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

function ei(e, t) {
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

function el(e, t) {
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
let ea = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  eo = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  es = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: i = false,
      reducedClickTarget: l = false,
      visibleElementRef: o
    } = e, s = el(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let c = (0, B.A)(t);
    return (0, r.jsx)(O.P3F, ei(er({
      className: a()(en.closeButton, {
        [en.closeButtonPlated]: null != t,
        [en.closeButtonForceShow]: i,
        [en.reducedClickTarget]: l
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
        ref: o,
        className: a()({
          [en.innerCloseButtonPlated]: null != t
        }),
        children: (0, r.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: a()(en.closeIcon, {
            [en.closeIconPlated]: null != t
          })
        })
      })
    }))
  },
  ec = () => (0, Chunk54381.jsx)(Chunk481060.r7p, {
    size: "xs",
    color: "currentColor",
    className: Chunk551139.favoriteIcon
  }),
  eu = () => (0, Chunk54381.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk551139.favoriteIcon
  }),
  ed = () => (0, Chunk54381.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk551139.favoriteIcon
  }),
  ep = e => {
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
      role: b,
      "aria-posinset": y,
      "aria-setsize": v,
      listItemRef: g
    } = e, h = el(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(M.Z, {
      className: a()(en.channel, {
        [en.fullWidth]: p.tq
      }, m),
      onClick: f,
      role: b,
      focusProps: er({
        within: true
      }, eo),
      "aria-posinset": y,
      "aria-setsize": v,
      ref: g,
      children: (0, r.jsx)(O.vjx, {
        as: "div",
        selected: n,
        className: a()(o, en.interactive, en.linkButton, {
          [en.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, ei(er({
          to: {
            pathname: t,
            state: d
          },
          className: en.link
        }, h), {
          children: [(0, r.jsx)(C.Z, {
            muted: false,
            avatar: (0, r.jsx)(i, {
              size: "refresh_sm",
              className: a()(en.linkButtonIcon, l),
              color: "currentColor"
            }),
            name: s,
            innerClassName: en.avatarWithText
          }), u]
        }))
      })
    })
  };

function ef(e) {
  let {
    channel: t,
    selected: l = false,
    user: o,
    activities: p,
    applicationStream: j,
    voiceChannel: N,
    isTyping: A,
    status: B,
    isMobile: W,
    nameplate: K,
    ref: V,
    "aria-posinset": J,
    "aria-setsize": $
  } = e, [X, ep] = i.useState(false), [ef, em] = i.useState(false), [eb, ey] = i.useState(false), eO = i.useRef(null), ev = i.useRef(null), eg = null != V ? V : ev, {
    avatarSrc: eh,
    avatarDecorationSrc: ej,
    eventHandlers: ex
  } = (0, H.Z)({
    userId: null == o ? true : o.id,
    size: O.EFr.SIZE_32,
    animateOnHover: !(l || X || ef || eb)
  }), eN = t.isMultiUserDM(), eS = t.isSystemDM(), eP = (0, z.Q)(), eC = !eN && !eS && t.type === ee.d4z.DM, ew = eC && (null == o ? true : o.primaryGuild) != null, eE = (0, m.e7)([q.ZP], () => q.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eT,
    blocked: eZ
  } = (0, m.cj)([Q.Z], () => ({
    ignored: Q.Z.isIgnored(t.getRecipientId()),
    blocked: Q.Z.isBlocked(t.getRecipientId())
  })), eM = eC && eT, eI = eC && eZ, eD = (eE || eM || eI) && !(l || X), ek = (0, m.e7)([Y.ZP], () => Y.ZP.getMentionCount(t.id) > 0), e_ = (0, Z.ZP)(t), eR = (0, m.e7)([_.Z], () => _.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eL,
    rearrangeContextMenu: eU
  } = R.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eA = i.useRef(null), eB = null != K && (l || X || eb), eG = () => {
    ep(true)
  }, eF = () => {
    ep(false)
  }, ez = () => {
    em(true)
  }, eH = () => {
    em(false)
  }, eW = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), v.Z.closePrivateChannel(t.id, l, n)
  }, eK = () => {
    v.Z.preload(ee.ME, t.id)
  }, eY = e => {
    e.stopPropagation()
  }, eQ = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eO.current) || t.click()
    }
  }, eV = e => {
    let i = "contextmenu" === e.type,
      a = eU && !i,
      s = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    ey(true), t.isMultiUserDM() ? (0, g.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, ei(er({}, n), {
        channel: t,
        selected: l
      }))
    }, {
      impressionName: s,
      noBlurEvent: true,
      onClose: () => ey(false)
    }) : (0, g.jW)(e, async () => {
      let {
        default: e
      } = a ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("66165"), n.e("6915"), n.e("56826"), n.e("21524")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, ei(er({}, n), {
        user: o,
        channel: t,
        channelSelected: l
      }))
    }, {
      impressionName: s,
      onClose: () => ey(false)
    })
  }, eq = e => {
    e.preventDefault(), e.stopPropagation();
    let i = et.intl.formatToPlainString(et.t.hJ5Ap4, {
        name: e_
      }),
      l = et.intl.format(et.t.SSIVOu, {
        name: e_
      });
    t.isManaged() && (i = et.intl.formatToPlainString(et.t.hVGjEW, {
      name: e_
    }), l = et.intl.format(et.t.IK1Qvs, {
      name: e_
    })), (0, O.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, er({
        header: i,
        body: l,
        onSubmit: eW
      }, t))
    })
  }, eJ = (0, r.jsx)(k.Z, {
    userName: e_,
    displayNameStyles: null == o ? true : o.displayNameStyles,
    effectDisplayType: X || l || eb ? D.F.ANIMATED : D.F.PLAIN,
    loop: X,
    boldFontOpacity: .9
  }), e$ = ew ? (0, r.jsxs)(r.Fragment, {
    children: [eJ, (0, r.jsx)(U.ZP, {
      primaryGuild: null == o ? true : o.primaryGuild,
      userId: null == o ? true : o.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(en.clanTag, {
        [en.clanTagMuted]: eD
      })
    })]
  }) : eJ, eX = i.useRef(null), e0 = (0, I.Y)({
    location: "PrivateChannel"
  }) && (null == o ? true : o.displayNameStyles) != null, e1 = (0, f.Z)(), e5 = [(0, E.ZP)({
    channel: t,
    unread: ek
  }), (0, E.Yb)({
    channel: t,
    muted: eE,
    userStatus: B
  })].filter(Boolean).join(", ");
  return (0, r.jsx)(d.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, i = el(e, ["role"]);
      return (0, r.jsxs)(M.Z, {
        className: a()(en.channel, en.dm),
        role: n,
        focusProps: ei(er({}, eo), {
          focusTarget: eO,
          ringTarget: eg
        }),
        ref: eg,
        onMouseEnter: eG,
        onMouseLeave: eF,
        onMouseDown: eK,
        onFocus: ez,
        onBlur: eH,
        onContextMenu: eV,
        "aria-setsize": $,
        "aria-posinset": J,
        children: [ek ? (0, r.jsx)("div", {
          className: a()(en.unreadPill, {
            [en.muted]: eD
          })
        }) : null, (0, r.jsxs)(O.vjx, {
          className: a()(en.interactive, {
            [en.interactiveSystemDM]: eP && eS,
            [en.interactiveSelected]: l || eb
          }),
          as: "div",
          onClick: eQ,
          muted: eD,
          selected: l,
          children: [(0, r.jsx)(F.Z, {
            nameplate: eB ? K : true,
            selected: l,
            hovered: X,
            content: eX,
            placement: G.i.CHANNEL
          }), (0, r.jsx)(c.rU, ei(er({
            innerRef: eO,
            to: ee.Z5c.CHANNEL(ee.ME, t.id),
            className: en.link,
            "aria-label": e5
          }, i), {
            children: (0, r.jsx)(C.Z, {
              ref: eX,
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
                  else return (0, r.jsx)(ea, ei(er({}, ex), {
                    src: (0, T.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: A ? ee.Skl.ONLINE : B,
                    isTyping: A
                  }));
                s()(null != o, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return o.isSystemUser() || (n = (0, h.Z)(p) ? ee.Skl.STREAMING : B), (0, r.jsx)(ea, ei(er({}, ex), {
                  size: O.EFr.SIZE_32,
                  src: eh,
                  avatarDecoration: ej,
                  status: n,
                  isMobile: W,
                  isTyping: A,
                  "aria-label": o.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: ek && !eD,
              muted: eD,
              subText: t.isSystemDM() ? (0, r.jsx)("div", {
                className: en.subtext,
                children: (0, w.Z)(t.id) ? et.intl.string(et.t.FL5T01) : et.intl.string(et.t.NnY5lc)
              }) : t.isMultiUserDM() ? (0, r.jsx)("div", {
                className: en.subtext,
                children: et.intl.format(et.t.CxSA5N, {
                  members: t.recipients.length + 1
                })
              }) : (0, x.Z)({
                activities: p,
                status: B,
                applicationStream: j,
                voiceChannel: N
              }) ? (0, r.jsx)(S.Z, {
                location: "PrivateChannel",
                user: o,
                activities: p,
                voiceChannel: N,
                applicationStream: j,
                animateEmoji: X || ef || eb,
                textClassName: en.activityStatusText,
                iconClassName: eD ? en.mutedIcon : true
              }) : null,
              name: (0, r.jsx)(b.Z, {
                className: a()(en.overflowTooltip, {
                  [en.withDisplayNameStyles]: e0
                }),
                children: e$
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(P.Z, {
                className: en.decorator,
                type: P.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e0
            })
          })), (0, r.jsxs)("div", {
            className: a()(en.iconsContainer, {
              [en.nameplated]: eB
            }),
            children: [eR && !eb ? (0, r.jsx)(ec, {}) : null, eM ? (0, r.jsx)(eu, {}) : null, eI ? (0, r.jsx)(ed, {}) : null, eL && !e1 ? (0, r.jsx)(y.u, {
              asContainer: true,
              text: et.intl.string(eN ? et.t.Et8qwj : et.t["d+e27s"]),
              delay: 500,
              targetElementRef: eA,
              children: (0, r.jsx)(es, {
                icon: O.xhG,
                "aria-label": et.intl.string(et.t.PdRCRg),
                onClick: e => {
                  eV(e)
                },
                onMouseDown: eY,
                nameplate: K,
                forceShow: eb,
                visibleElementRef: eA
              })
            }) : (0, r.jsx)(es, {
              icon: O.Dio,
              "aria-label": eN ? et.intl.string(et.t["26C4oi"]) : et.intl.string(et.t.jsvgc3),
              onClick: eN ? eq : eW,
              onMouseDown: eY,
              nameplate: K,
              reducedClickTarget: true,
              visibleElementRef: eA
            })]
          })]
        })]
      })
    }
  })
}
let em = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, i = el(e, ["channel", "selected"]);
  let l = (0, m.e7)([J.default], () => J.default.getUser(t.getRecipientId())),
    a = null == l ? true : l.id,
    o = (0, m.cj)([K.Z, W.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        let n = K.Z.getState().statuses;
        t.recipients.some(e => n[e] === ee.Skl.ONLINE) && (e = ee.Skl.ONLINE)
      } else null != a && (e = K.Z.getStatus(a));
      return {
        status: e,
        activities: null != a ? K.Z.getActivities(a) : null,
        applicationStream: null != a ? W.Z.getAnyStreamForUser(a) : null,
        isMobile: null != a && K.Z.isMobileOnline(a)
      }
    }, [t, a]),
    {
      voiceActivityStatusEnabled: s
    } = (0, j.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: c
    } = (0, N.Z)({
      userId: a
    }),
    u = (0, A.K)({
      user: l
    }),
    d = (0, m.e7)([J.default, V.Z], () => t.isMultiUserDM() ? $.default.keys(V.Z.getTypingUsers(t.id)).some(e => {
      var t;
      return e !== (null == (t = J.default.getCurrentUser()) ? true : t.id)
    }) : null != l && V.Z.isTyping(t.id, t.getRecipientId()), [t, l]);
  return t.isMultiUserDM() ? (0, r.jsx)(ef, er({
    channel: t,
    selected: n,
    isTyping: d,
    status: o.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : true
  }, i)) : (0, r.jsx)(ef, er({
    channel: t,
    selected: n,
    user: l,
    voiceChannel: s ? c : true,
    isTyping: d,
    nameplate: u
  }, i, o))
} : null