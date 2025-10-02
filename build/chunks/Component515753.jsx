/** Chunk was on 51333 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => ep,
  RS: () => ef,
  ZP: () => em,
  bU: () => es
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk799899 = require("./799899.js"),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk111028 = require("./111028.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk853856 = require("./853856.js"),
  Chunk93687 = require("./93687.js"),
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
  Chunk800525 = require("./800525.js");

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
    let c = (0, F.A)(t);
    return (0, r.jsx)(b.P3F, ei(er({
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
  ec = () => (0, Chunk951288.jsx)(Chunk481060.r7p, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  eu = () => (0, Chunk951288.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  ed = () => (0, Chunk951288.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
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
      role: v,
      "aria-posinset": O,
      "aria-setsize": y,
      listItemRef: h
    } = e, g = el(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(Z.Z, {
      className: a()(en.channel, {
        [en.fullWidth]: p.tq
      }, m),
      onClick: f,
      role: v,
      focusProps: er({
        within: true
      }, eo),
      "aria-posinset": O,
      "aria-setsize": y,
      ref: h,
      children: (0, r.jsx)(b.vjx, {
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
        }, g), {
          children: [(0, r.jsx)(S.Z, {
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
    isGDMFacepileEnabled: l,
    selected: o = false,
    user: p,
    activities: h,
    applicationStream: j,
    voiceChannel: _,
    isTyping: A,
    status: F,
    isMobile: K,
    nameplate: W,
    ref: V,
    "aria-posinset": J,
    "aria-setsize": X
  } = e, [$, ep] = i.useState(false), [ef, em] = i.useState(false), [eb, ev] = i.useState(false), eO = i.useRef(null), ey = i.useRef(null), eh = null != V ? V : ey, {
    avatarSrc: eg,
    avatarDecorationSrc: ej,
    eventHandlers: ex
  } = (0, H.Z)({
    userId: null == p ? true : p.id,
    size: b.EFr.SIZE_32,
    animateOnHover: !(o || $ || ef || eb)
  }), eN = t.isMultiUserDM(), eS = t.isSystemDM(), eP = (0, z.Q)(), eC = !eN && !eS && t.type === ee.d4z.DM, eE = eC && (null == p ? true : p.primaryGuild) != null, ew = (0, m.e7)([q.ZP], () => q.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eZ,
    blocked: eT
  } = (0, m.cj)([Y.Z], () => ({
    ignored: Y.Z.isIgnored(t.getRecipientId()),
    blocked: Y.Z.isBlocked(t.getRecipientId())
  })), eI = eC && eZ, eM = eC && eT, ek = (ew || eI || eM) && !(o || $), eD = (0, m.e7)([Q.ZP], () => Q.ZP.getMentionCount(t.id) > 0), e_ = (0, w.ZP)(t), eR = (0, m.e7)([D.Z], () => D.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eL,
    rearrangeContextMenu: eU
  } = R.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eA = i.useRef(null), eF = null != W && (o || $ || eb), eG = () => {
    ep(true)
  }, eB = () => {
    ep(false)
  }, ez = () => {
    em(true)
  }, eH = () => {
    em(false)
  }, eK = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), v.Z.closePrivateChannel(t.id, o, n)
  }, eW = () => {
    v.Z.preload(ee.ME, t.id)
  }, eQ = e => {
    e.stopPropagation()
  }, eY = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eO.current) || t.click()
    }
  }, eV = e => {
    let i = "contextmenu" === e.type,
      l = eU && !i,
      a = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    ev(true), t.isMultiUserDM() ? (0, O.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, ei(er({}, n), {
        channel: t,
        selected: o
      }))
    }, {
      impressionName: a,
      noBlurEvent: true,
      onClose: () => ev(false)
    }) : (0, O.jW)(e, async () => {
      let {
        default: e
      } = l ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("98783"), n.e("56826"), n.e("36084"), n.e("92998")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, ei(er({}, n), {
        user: p,
        channel: t,
        channelSelected: o
      }))
    }, {
      impressionName: a,
      onClose: () => ev(false)
    })
  }, eq = e => {
    e.preventDefault(), e.stopPropagation();
    let i = et.intl.formatToPlainString(et.t.hJ5Ap6, {
        name: e_
      }),
      l = et.intl.format(et.t.SSIVOj, {
        name: e_
      });
    t.isManaged() && (i = et.intl.formatToPlainString(et.t.hVGjER, {
      name: e_
    }), l = et.intl.format(et.t.IK1Qvr, {
      name: e_
    })), (0, b.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, er({
        header: i,
        body: l,
        onSubmit: eK
      }, t))
    })
  }, eJ = (0, r.jsx)(k.Z, {
    userName: e_,
    displayNameStyles: null == p ? true : p.displayNameStyles,
    effectDisplayType: $ || o || eb ? M.F.ANIMATED : M.F.PLAIN,
    loop: $,
    boldFontOpacity: .9
  }), eX = eE ? (0, r.jsxs)(r.Fragment, {
    children: [eJ, (0, r.jsx)(U.ZP, {
      primaryGuild: null == p ? true : p.primaryGuild,
      userId: null == p ? true : p.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(en.clanTag, {
        [en.clanTagMuted]: ek
      })
    })]
  }) : eJ, e$ = i.useRef(null), e0 = (0, I.Y)({
    location: "PrivateChannel"
  }) && (null == p ? true : p.displayNameStyles) != null, e1 = (0, f.Z)();
  return (0, r.jsx)(d.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, i = el(e, ["role"]);
      return (0, r.jsxs)(Z.Z, {
        className: a()(en.channel, en.dm),
        role: n,
        focusProps: ei(er({}, eo), {
          focusTarget: eO,
          ringTarget: eh
        }),
        ref: eh,
        onMouseEnter: eG,
        onMouseLeave: eB,
        onMouseDown: eW,
        onFocus: ez,
        onBlur: eH,
        onContextMenu: eV,
        "aria-setsize": X,
        "aria-posinset": J,
        children: [eD ? (0, r.jsx)("div", {
          className: a()(en.unreadPill, {
            [en.muted]: ek
          })
        }) : null, (0, r.jsxs)(b.vjx, {
          className: a()(en.interactive, {
            [en.interactiveSystemDM]: eP && eS,
            [en.interactiveSelected]: o || eb
          }),
          as: "div",
          onClick: eY,
          muted: ek,
          selected: o,
          children: [(0, r.jsx)(B.Z, {
            nameplate: eF ? W : true,
            selected: o,
            hovered: $,
            content: e$,
            placement: G.i.CHANNEL
          }), (0, r.jsx)(c.rU, ei(er({
            innerRef: eO,
            to: ee.Z5c.CHANNEL(ee.ME, t.id),
            className: en.link,
            "aria-label": (0, C.ZP)({
              channel: t,
              unread: eD
            })
          }, i), {
            children: (0, r.jsx)(S.Z, {
              ref: e$,
              avatar: (() => {
                let e = b.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && l && null == t.icon) return (0, r.jsx)(L.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: A,
                    status: F
                  });
                  else return (0, r.jsx)(ea, ei(er({}, ex), {
                    src: (0, E.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: A ? ee.Skl.ONLINE : F,
                    isTyping: A
                  }));
                s()(null != p, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return p.isSystemUser() || (n = (0, y.Z)(h) ? ee.Skl.STREAMING : F), (0, r.jsx)(ea, ei(er({}, ex), {
                  size: b.EFr.SIZE_32,
                  src: eg,
                  avatarDecoration: ej,
                  status: n,
                  isMobile: K,
                  isTyping: A,
                  "aria-label": p.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eD && !ek,
              muted: ek,
              subText: t.isSystemDM() ? (0, r.jsx)("div", {
                className: en.subtext,
                children: (0, P.Z)(t.id) ? et.intl.string(et.t.FL5T09) : et.intl.string(et.t.NnY5lZ)
              }) : t.isMultiUserDM() ? (0, r.jsx)("div", {
                className: en.subtext,
                children: et.intl.format(et.t.CxSA5O, {
                  members: t.recipients.length + 1
                })
              }) : (0, g.Z)({
                activities: h,
                status: F,
                applicationStream: j,
                voiceChannel: _
              }) ? (0, r.jsx)(x.Z, {
                location: "PrivateChannel",
                user: p,
                activities: h,
                voiceChannel: _,
                applicationStream: j,
                animateEmoji: $ || ef || eb,
                textClassName: en.activityStatusText,
                iconClassName: ek ? en.mutedIcon : true
              }) : null,
              name: (0, r.jsx)(T.Z, {
                className: a()(en.overflowTooltip, {
                  [en.withDisplayNameStyles]: e0
                }),
                children: eX
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(N.Z, {
                className: en.decorator,
                type: N.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e0
            })
          })), (0, r.jsxs)("div", {
            className: a()(en.iconsContainer, {
              [en.nameplated]: eF
            }),
            children: [eR && !eb ? (0, r.jsx)(ec, {}) : null, eI ? (0, r.jsx)(eu, {}) : null, eM ? (0, r.jsx)(ed, {}) : null, eL && !e1 ? (0, r.jsx)(b.ua7, {
              text: et.intl.string(eN ? et.t.Et8qws : et.t["d+e27u"]),
              delay: 500,
              targetElementRef: eA,
              children: e => {
                var {
                  onClick: t
                } = e, n = el(e, ["onClick"]);
                return (0, r.jsx)(es, ei(er({}, n), {
                  icon: b.xhG,
                  "aria-label": et.intl.string(et.t.PdRCRk),
                  onClick: e => {
                    null == t || t(), eV(e)
                  },
                  onMouseDown: eQ,
                  nameplate: W,
                  forceShow: eb,
                  visibleElementRef: eA
                }))
              }
            }) : (0, r.jsx)(es, {
              icon: b.Dio,
              "aria-label": eN ? et.intl.string(et.t["26C4oq"]) : et.intl.string(et.t.jsvgc3),
              onClick: eN ? eq : eK,
              onMouseDown: eQ,
              nameplate: W,
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
    {
      isStatusIndicatorEnabled: a,
      isTypingIndicatorEnabled: o,
      isFacepileEnabled: s
    } = _.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: true
    }),
    c = null == l ? true : l.id,
    u = (0, m.cj)([W.Z, K.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        if (a) {
          let n = W.Z.getState().statuses;
          t.recipients.some(e => n[e] === ee.Skl.ONLINE) && (e = ee.Skl.ONLINE)
        }
      } else null != c && (e = W.Z.getStatus(c));
      return {
        status: e,
        activities: null != c ? W.Z.getActivities(c) : null,
        applicationStream: null != c ? K.Z.getAnyStreamForUser(c) : null,
        isMobile: null != c && W.Z.isMobileOnline(c)
      }
    }, [t, c, a]),
    {
      voiceActivityStatusEnabled: d
    } = (0, h.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: p
    } = (0, j.Z)({
      userId: c
    }),
    f = (0, A.K)({
      user: l
    }),
    b = (0, m.e7)([J.default, V.Z], () => {
      if (t.isMultiUserDM())
        if (o) return X.default.keys(V.Z.getTypingUsers(t.id)).some(e => {
          var t;
          return e !== (null == (t = J.default.getCurrentUser()) ? true : t.id)
        });
        else returnfalse;
      return null != l && V.Z.isTyping(t.id, t.getRecipientId())
    }, [t, l, o]);
  return t.isMultiUserDM() ? (0, r.jsx)(ef, er({
    channel: t,
    selected: n,
    isTyping: b,
    status: u.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : true,
    isGDMFacepileEnabled: s
  }, i)) : (0, r.jsx)(ef, er({
    channel: t,
    selected: n,
    user: l,
    voiceChannel: d ? p : true,
    isTyping: b,
    nameplate: f
  }, i, u))
} : null