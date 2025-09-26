/** Chunk was on 64170 **/
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

function el(e, t) {
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
      forceShow: l = false,
      reducedClickTarget: i = false,
      visibleElementRef: o
    } = e, s = ei(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let c = (0, G.A)(t);
    return (0, r.jsx)(b.P3F, el(er({
      className: a()(en.closeButton, {
        [en.closeButtonPlated]: null != t,
        [en.closeButtonForceShow]: l,
        [en.reducedClickTarget]: i
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
      icon: l,
      iconClassName: i,
      interactiveClassName: o,
      text: s,
      children: u,
      locationState: d,
      onClick: f,
      className: m,
      role: O,
      "aria-posinset": y,
      "aria-setsize": v,
      listItemRef: h
    } = e, g = ei(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(I.Z, {
      className: a()(en.channel, {
        [en.fullWidth]: p.tq
      }, m),
      onClick: f,
      role: O,
      focusProps: er({
        within: true
      }, eo),
      "aria-posinset": y,
      "aria-setsize": v,
      ref: h,
      children: (0, r.jsx)(b.vjx, {
        as: "div",
        selected: n,
        className: a()(o, en.interactive, en.linkButton, {
          [en.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, el(er({
          to: {
            pathname: t,
            state: d
          },
          className: en.link
        }, g), {
          children: [(0, r.jsx)(N.Z, {
            muted: false,
            avatar: (0, r.jsx)(l, {
              size: "refresh_sm",
              className: a()(en.linkButtonIcon, i),
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
    isGDMFacepileEnabled: i,
    selected: o = false,
    user: p,
    activities: h,
    applicationStream: j,
    voiceChannel: _,
    isTyping: U,
    status: G,
    isMobile: Y,
    nameplate: Q,
    ref: q,
    "aria-posinset": J,
    "aria-setsize": X
  } = e, [$, ep] = l.useState(false), [ef, em] = l.useState(false), [eb, eO] = l.useState(false), ey = l.useRef(null), ev = l.useRef(null), eh = null != q ? q : ev, {
    avatarSrc: eg,
    avatarDecorationSrc: ej,
    eventHandlers: eE
  } = (0, H.Z)({
    userId: null == p ? true : p.id,
    size: b.EFr.SIZE_32,
    animateOnHover: !(o || $ || ef || eb)
  }), eS = t.isMultiUserDM(), eN = t.isSystemDM(), ex = (0, z.Q)(), eP = !eS && !eN && t.type === ee.d4z.DM, eC = eP && (null == p ? true : p.primaryGuild) != null, eT = (0, m.e7)([V.ZP], () => V.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eI,
    blocked: eZ
  } = (0, m.cj)([K.Z], () => ({
    ignored: K.Z.isIgnored(t.getRecipientId()),
    blocked: K.Z.isBlocked(t.getRecipientId())
  })), ew = eP && eI, eM = eP && eZ, ek = (eT || ew || eM) && !(o || $), eD = (0, m.e7)([W.ZP], () => W.ZP.getMentionCount(t.id) > 0), e_ = (0, T.ZP)(t), eR = (0, m.e7)([D.Z], () => D.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eA,
    rearrangeContextMenu: eL
  } = R.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eU = l.useRef(null), eG = null != Q && (o || $ || eb), eF = () => {
    ep(true)
  }, eB = () => {
    ep(false)
  }, ez = () => {
    em(true)
  }, eH = () => {
    em(false)
  }, eY = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), O.Z.closePrivateChannel(t.id, o, n)
  }, eQ = () => {
    O.Z.preload(ee.ME, t.id)
  }, eW = e => {
    e.stopPropagation()
  }, eK = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = ey.current) || t.click()
    }
  }, eq = e => {
    let l = "contextmenu" === e.type,
      i = eL && !l,
      a = l ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    eO(true), t.isMultiUserDM() ? (0, y.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, el(er({}, n), {
        channel: t,
        selected: o
      }))
    }, {
      impressionName: a,
      noBlurEvent: true,
      onClose: () => eO(false)
    }) : (0, y.jW)(e, async () => {
      let {
        default: e
      } = i ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("98783"), n.e("56826"), n.e("36084"), n.e("92998")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, el(er({}, n), {
        user: p,
        channel: t,
        channelSelected: o
      }))
    }, {
      impressionName: a,
      onClose: () => eO(false)
    })
  }, eV = e => {
    e.preventDefault(), e.stopPropagation();
    let l = et.intl.formatToPlainString(et.t.hJ5Ap6, {
        name: e_
      }),
      i = et.intl.format(et.t.SSIVOj, {
        name: e_
      });
    t.isManaged() && (l = et.intl.formatToPlainString(et.t.hVGjER, {
      name: e_
    }), i = et.intl.format(et.t.IK1Qvr, {
      name: e_
    })), (0, b.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, er({
        header: l,
        body: i,
        onSubmit: eY
      }, t))
    })
  }, eJ = (0, r.jsx)(k.Z, {
    userName: e_,
    displayNameStyles: null == p ? true : p.displayNameStyles,
    effectDisplayType: $ || o || eb ? M.F.ANIMATED : M.F.PLAIN,
    loop: $,
    boldFontOpacity: .9
  }), eX = eC ? (0, r.jsxs)(r.Fragment, {
    children: [eJ, (0, r.jsx)(L.ZP, {
      primaryGuild: null == p ? true : p.primaryGuild,
      userId: null == p ? true : p.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(en.clanTag, {
        [en.clanTagMuted]: ek
      })
    })]
  }) : eJ, e$ = l.useRef(null), e0 = (0, w.Y)({
    location: "PrivateChannel"
  }) && (null == p ? true : p.displayNameStyles) != null, e1 = (0, f.Z)();
  return (0, r.jsx)(d.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, l = ei(e, ["role"]);
      return (0, r.jsxs)(I.Z, {
        className: a()(en.channel, en.dm),
        role: n,
        focusProps: el(er({}, eo), {
          focusTarget: ey,
          ringTarget: eh
        }),
        ref: eh,
        onMouseEnter: eF,
        onMouseLeave: eB,
        onMouseDown: eQ,
        onFocus: ez,
        onBlur: eH,
        onContextMenu: eq,
        "aria-setsize": X,
        "aria-posinset": J,
        children: [eD ? (0, r.jsx)("div", {
          className: a()(en.unreadPill, {
            [en.muted]: ek
          })
        }) : null, (0, r.jsxs)(b.vjx, {
          className: a()(en.interactive, {
            [en.interactiveSystemDM]: ex && eN,
            [en.interactiveSelected]: o || eb
          }),
          as: "div",
          onClick: eK,
          muted: ek,
          selected: o,
          children: [(0, r.jsx)(B.Z, {
            nameplate: eG ? Q : true,
            selected: o,
            hovered: $,
            content: e$,
            placement: F.i.CHANNEL
          }), (0, r.jsx)(c.rU, el(er({
            innerRef: ey,
            to: ee.Z5c.CHANNEL(ee.ME, t.id),
            className: en.link,
            "aria-label": (0, P.ZP)({
              channel: t,
              unread: eD
            })
          }, l), {
            children: (0, r.jsx)(N.Z, {
              ref: e$,
              avatar: (() => {
                let e = b.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && i && null == t.icon) return (0, r.jsx)(A.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: U,
                    status: G
                  });
                  else return (0, r.jsx)(ea, el(er({}, eE), {
                    src: (0, C.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: U ? ee.Skl.ONLINE : G,
                    isTyping: U
                  }));
                s()(null != p, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return p.isSystemUser() || (n = (0, v.Z)(h) ? ee.Skl.STREAMING : G), (0, r.jsx)(ea, el(er({}, eE), {
                  size: b.EFr.SIZE_32,
                  src: eg,
                  avatarDecoration: ej,
                  status: n,
                  isMobile: Y,
                  isTyping: U,
                  "aria-label": p.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eD && !ek,
              muted: ek,
              subText: t.isSystemDM() ? (0, r.jsx)("div", {
                className: en.subtext,
                children: (0, x.Z)(t.id) ? et.intl.string(et.t.FL5T09) : et.intl.string(et.t.NnY5lZ)
              }) : t.isMultiUserDM() ? (0, r.jsx)("div", {
                className: en.subtext,
                children: et.intl.format(et.t.CxSA5O, {
                  members: t.recipients.length + 1
                })
              }) : (0, g.Z)({
                activities: h,
                status: G,
                applicationStream: j,
                voiceChannel: _
              }) ? (0, r.jsx)(E.Z, {
                location: "PrivateChannel",
                user: p,
                activities: h,
                voiceChannel: _,
                applicationStream: j,
                animateEmoji: $ || ef || eb,
                textClassName: en.activityStatusText,
                iconClassName: ek ? en.mutedIcon : true
              }) : null,
              name: (0, r.jsx)(Z.Z, {
                className: a()(en.overflowTooltip, {
                  [en.withDisplayNameStyles]: e0
                }),
                children: eX
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(S.Z, {
                className: en.decorator,
                type: S.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e0
            })
          })), (0, r.jsxs)("div", {
            className: a()(en.iconsContainer, {
              [en.nameplated]: eG
            }),
            children: [eR && !eb ? (0, r.jsx)(ec, {}) : null, ew ? (0, r.jsx)(eu, {}) : null, eM ? (0, r.jsx)(ed, {}) : null, eA && !e1 ? (0, r.jsx)(b.ua7, {
              text: et.intl.string(eS ? et.t.Et8qws : et.t["d+e27u"]),
              delay: 500,
              targetElementRef: eU,
              children: e => {
                var {
                  onClick: t
                } = e, n = ei(e, ["onClick"]);
                return (0, r.jsx)(es, el(er({}, n), {
                  icon: b.xhG,
                  "aria-label": et.intl.string(et.t.PdRCRk),
                  onClick: e => {
                    null == t || t(), eq(e)
                  },
                  onMouseDown: eW,
                  nameplate: Q,
                  forceShow: eb,
                  visibleElementRef: eU
                }))
              }
            }) : (0, r.jsx)(es, {
              icon: b.Dio,
              "aria-label": eS ? et.intl.string(et.t["26C4oq"]) : et.intl.string(et.t.jsvgc3),
              onClick: eS ? eV : eY,
              onMouseDown: eW,
              nameplate: Q,
              reducedClickTarget: true,
              visibleElementRef: eU
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
  } = e, l = ei(e, ["channel", "selected"]);
  let i = (0, m.e7)([J.default], () => J.default.getUser(t.getRecipientId())),
    {
      isStatusIndicatorEnabled: a,
      isTypingIndicatorEnabled: o,
      isFacepileEnabled: s
    } = _.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: true
    }),
    c = null == i ? true : i.id,
    u = (0, m.cj)([Q.Z, Y.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        if (a) {
          let n = Q.Z.getState().statuses;
          t.recipients.some(e => n[e] === ee.Skl.ONLINE) && (e = ee.Skl.ONLINE)
        }
      } else null != c && (e = Q.Z.getStatus(c));
      return {
        status: e,
        activities: null != c ? Q.Z.getActivities(c) : null,
        applicationStream: null != c ? Y.Z.getAnyStreamForUser(c) : null,
        isMobile: null != c && Q.Z.isMobileOnline(c)
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
    f = (0, U.K)({
      user: i
    }),
    b = (0, m.e7)([J.default, q.Z], () => {
      if (t.isMultiUserDM())
        if (o) return X.default.keys(q.Z.getTypingUsers(t.id)).some(e => {
          var t;
          return e !== (null == (t = J.default.getCurrentUser()) ? true : t.id)
        });
        else returnfalse;
      return null != i && q.Z.isTyping(t.id, t.getRecipientId())
    }, [t, i, o]);
  return t.isMultiUserDM() ? (0, r.jsx)(ef, er({
    channel: t,
    selected: n,
    isTyping: b,
    status: u.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : true,
    isGDMFacepileEnabled: s
  }, l)) : (0, r.jsx)(ef, er({
    channel: t,
    selected: n,
    user: i,
    voiceChannel: d ? p : true,
    isTyping: b,
    nameplate: f
  }, l, u))
} : null