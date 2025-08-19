/** Chunk was on 66181 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => em,
  RS: () => ep,
  ZP: () => eg,
  bU: () => eo
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk878857 = require("./878857.js"),
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

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function es(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      s = Object.keys(e);
    for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let ea = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  el = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  eo = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: r = false,
      reducedClickTarget: s = false,
      visibleElementRef: l
    } = e, o = es(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let c = (0, U.A)(t);
    return (0, i.jsx)(h.P3F, er(ei({
      className: a()(en.closeButton, {
        [en.closeButtonPlated]: null != t,
        [en.closeButtonForceShow]: r,
        [en.reducedClickTarget]: s
      }),
      style: c
    }, o), {
      focusProps: {
        offset: {
          top: false,
          bottom: false,
          left: false,
          right: 6
        }
      },
      children: (0, i.jsx)("div", {
        ref: l,
        className: a()({
          [en.innerCloseButtonPlated]: null != t
        }),
        children: (0, i.jsx)(n, {
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
  ed = () => (0, Chunk951288.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  eu = () => (0, Chunk951288.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  em = e => {
    var {
      route: t,
      selected: n,
      icon: r,
      iconClassName: s,
      interactiveClassName: l,
      text: o,
      children: d,
      locationState: u,
      onClick: p,
      className: g,
      role: f,
      "aria-posinset": b,
      "aria-setsize": x,
      listItemRef: _
    } = e, j = es(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, i.jsx)(y.Z, {
      className: a()(en.channel, {
        [en.fullWidth]: m.tq
      }, g),
      onClick: p,
      role: f,
      focusProps: ei({
        within: true
      }, el),
      "aria-posinset": b,
      "aria-setsize": x,
      ref: _,
      children: (0, i.jsx)(h.vjx, {
        as: "div",
        selected: n,
        className: a()(l, en.interactive, en.linkButton, {
          [en.interactiveSelected]: n
        }),
        children: (0, i.jsxs)(c.rU, er(ei({
          to: {
            pathname: t,
            state: u
          },
          className: en.link
        }, j), {
          children: [(0, i.jsx)(v.Z, {
            muted: false,
            avatar: (0, i.jsx)(r, {
              size: "refresh_sm",
              className: a()(en.linkButtonIcon, s),
              color: "currentColor"
            }),
            name: o,
            innerClassName: en.avatarWithText
          }), d]
        }))
      })
    })
  };

function ep(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: l = false,
    user: m,
    activities: _,
    applicationStream: E,
    voiceChannel: w,
    isTyping: M,
    status: U,
    isMobile: z,
    nameplate: W,
    ref: q,
    "aria-posinset": J,
    "aria-setsize": Q
  } = e, [$, em] = r.useState(false), [ep, eg] = r.useState(false), [eh, ef] = r.useState(false), eb = r.useRef(null), ex = r.useRef(null), e_ = null != q ? q : ex, {
    avatarSrc: ej,
    avatarDecorationSrc: eE,
    eventHandlers: eC
  } = (0, H.Z)({
    userId: null == m ? true : m.id,
    size: h.EFr.SIZE_32,
    animateOnHover: !(l || $ || ep || eh)
  }), eO = t.isMultiUserDM(), ev = t.isSystemDM(), eS = (0, F.Q)(), eT = !eO && !ev && t.type === ee.d4z.DM, eN = eT && (null == m ? true : m.primaryGuild) != null, eI = (0, g.e7)([X.ZP], () => X.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: ey,
    blocked: eA
  } = (0, g.cj)([K.Z], () => ({
    ignored: K.Z.isIgnored(t.getRecipientId()),
    blocked: K.Z.isBlocked(t.getRecipientId())
  })), eP = eT && ey, eR = eT && eA, eD = (eI || eP || eR) && !(l || $), eZ = (0, g.e7)([Y.ZP], () => Y.ZP.getMentionCount(t.id) > 0), ew = (0, I.ZP)(t), ek = (0, g.e7)([Z.Z], () => Z.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eL,
    rearrangeContextMenu: eB
  } = k.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eM = r.useRef(null), eU = null != W && (l || $ || eh), eV = () => {
    em(true)
  }, eG = () => {
    em(false)
  }, eF = () => {
    eg(true)
  }, eH = () => {
    eg(false)
  }, ez = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), f.Z.closePrivateChannel(t.id, l, n)
  }, eW = () => {
    f.Z.preload(ee.ME, t.id)
  }, eY = e => {
    e.stopPropagation()
  }, eK = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eb.current) || t.click()
    }
  }, eq = e => {
    let r = "contextmenu" === e.type,
      s = eB && !r,
      a = r ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    ef(true), t.isMultiUserDM() ? (0, b.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("70205"), n.e("57789"), n.e("30470")]).then(n.bind(n, 354741));
      return n => (0, i.jsx)(e, er(ei({}, n), {
        channel: t,
        selected: l
      }))
    }, {
      impressionName: a,
      noBlurEvent: true,
      onClose: () => ef(false)
    }) : (0, b.jW)(e, async () => {
      let {
        default: e
      } = s ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("70205"), n.e("98783"), n.e("57789"), n.e("15114"), n.e("56826"), n.e("11926")]).then(n.bind(n, 131404));
      return n => (0, i.jsx)(e, er(ei({}, n), {
        user: m,
        channel: t,
        channelSelected: l
      }))
    }, {
      impressionName: a,
      onClose: () => ef(false)
    })
  }, eX = e => {
    e.preventDefault(), e.stopPropagation();
    let r = et.intl.formatToPlainString(et.t.hJ5Ap6, {
        name: ew
      }),
      s = et.intl.format(et.t.SSIVOj, {
        name: ew
      });
    t.isManaged() && (r = et.intl.formatToPlainString(et.t.hVGjER, {
      name: ew
    }), s = et.intl.format(et.t.IK1Qvr, {
      name: ew
    })), (0, h.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, i.jsx)(e, ei({
        header: r,
        body: s,
        onSubmit: ez
      }, t))
    })
  }, eJ = (0, i.jsx)(D.Z, {
    userName: ew,
    displayNameStyles: null == m ? true : m.displayNameStyles,
    effectDisplayType: $ || l || eh ? R.F.ANIMATED : R.F.PLAIN,
    loop: $
  }), eQ = eN ? (0, i.jsxs)(i.Fragment, {
    children: [eJ, (0, i.jsx)(B.ZP, {
      primaryGuild: null == m ? true : m.primaryGuild,
      userId: null == m ? true : m.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(en.clanTag, {
        [en.clanTagMuted]: eD
      })
    })]
  }) : eJ, e$ = r.useRef(null), e0 = (0, P.Y)({
    location: "PrivateChannel"
  }) && (null == m ? true : m.displayNameStyles) != null, e1 = (0, p.Z)();
  return (0, i.jsx)(u.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, r = es(e, ["role"]);
      return (0, i.jsxs)(y.Z, {
        className: a()(en.channel, en.dm),
        role: n,
        focusProps: er(ei({}, el), {
          focusTarget: eb,
          ringTarget: e_
        }),
        ref: e_,
        onMouseEnter: eV,
        onMouseLeave: eG,
        onMouseDown: eW,
        onFocus: eF,
        onBlur: eH,
        onContextMenu: eq,
        "aria-setsize": Q,
        "aria-posinset": J,
        children: [eZ ? (0, i.jsx)("div", {
          className: a()(en.unreadPill, {
            [en.muted]: eD
          })
        }) : null, (0, i.jsxs)(h.vjx, {
          className: a()(en.interactive, {
            [en.interactiveSystemDM]: eS && ev,
            [en.interactiveSelected]: l || eh
          }),
          as: "div",
          onClick: eK,
          muted: eD,
          selected: l,
          children: [(0, i.jsx)(G.Z, {
            nameplate: eU ? W : true,
            selected: l,
            hovered: $,
            content: e$,
            placement: V.i.CHANNEL
          }), (0, i.jsx)(c.rU, er(ei({
            innerRef: eb,
            to: ee.Z5c.CHANNEL(ee.ME, t.id),
            className: en.link,
            "aria-label": (0, T.ZP)({
              channel: t,
              unread: eZ
            })
          }, r), {
            children: (0, i.jsx)(v.Z, {
              ref: e$,
              avatar: (() => {
                let e = h.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && s && null == t.icon) return (0, i.jsx)(L.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: M,
                    status: U
                  });
                  else return (0, i.jsx)(ea, er(ei({}, eC), {
                    src: (0, N.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: M ? ee.Skl.ONLINE : U,
                    isTyping: M
                  }));
                o()(null != m, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return m.isSystemUser() || (n = (0, x.Z)(_) ? ee.Skl.STREAMING : U), (0, i.jsx)(ea, er(ei({}, eC), {
                  size: h.EFr.SIZE_32,
                  src: ej,
                  avatarDecoration: eE,
                  status: n,
                  isMobile: z,
                  isTyping: M,
                  "aria-label": m.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eZ && !eD,
              muted: eD,
              subText: t.isSystemDM() ? (0, i.jsx)("div", {
                className: en.subtext,
                children: (0, S.Z)(t.id) ? et.intl.string(et.t.FL5T09) : et.intl.string(et.t.NnY5lZ)
              }) : t.isMultiUserDM() ? (0, i.jsx)("div", {
                className: en.subtext,
                children: et.intl.format(et.t.CxSA5O, {
                  members: t.recipients.length + 1
                })
              }) : (0, j.Z)({
                activities: _,
                status: U,
                applicationStream: E,
                voiceChannel: w
              }) ? (0, i.jsx)(C.Z, {
                location: "PrivateChannel",
                user: m,
                activities: _,
                voiceChannel: w,
                applicationStream: E,
                animateEmoji: $ || ep || eh,
                textClassName: en.activityStatusText,
                iconClassName: eD ? en.mutedIcon : true
              }) : null,
              name: (0, i.jsx)(A.Z, {
                className: a()(en.overflowTooltip, {
                  [en.withDisplayNameStyles]: e0
                }),
                children: eQ
              }),
              decorators: t.isSystemDM() ? (0, i.jsx)(O.Z, {
                className: en.decorator,
                type: O.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e0
            })
          })), (0, i.jsxs)("div", {
            className: a()(en.iconsContainer, {
              [en.nameplated]: eU
            }),
            children: [ek && !eh ? (0, i.jsx)(ec, {}) : null, eP ? (0, i.jsx)(ed, {}) : null, eR ? (0, i.jsx)(eu, {}) : null, eL && !e1 ? (0, i.jsx)(h.ua7, {
              text: et.intl.string(eO ? et.t.Et8qws : et.t["d+e27u"]),
              delay: 500,
              targetElementRef: eM,
              children: e => {
                var {
                  onClick: t
                } = e, n = es(e, ["onClick"]);
                return (0, i.jsx)(eo, er(ei({}, n), {
                  icon: h.xhG,
                  "aria-label": et.intl.string(et.t.PdRCRk),
                  onClick: e => {
                    null == t || t(), eq(e)
                  },
                  onMouseDown: eY,
                  nameplate: W,
                  forceShow: eh,
                  visibleElementRef: eM
                }))
              }
            }) : (0, i.jsx)(eo, {
              icon: h.Dio,
              "aria-label": eO ? et.intl.string(et.t["26C4oq"]) : et.intl.string(et.t.jsvgc3),
              onClick: eO ? eX : ez,
              onMouseDown: eY,
              nameplate: W,
              reducedClickTarget: true,
              visibleElementRef: eM
            })]
          })]
        })]
      })
    }
  })
}
let eg = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, r = es(e, ["channel", "selected"]);
  let s = (0, g.e7)([J.default], () => J.default.getUser(t.getRecipientId())),
    {
      isStatusIndicatorEnabled: a,
      isTypingIndicatorEnabled: l,
      isFacepileEnabled: o
    } = w.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: true
    }),
    c = null == s ? true : s.id,
    d = (0, g.cj)([W.Z, z.Z], () => {
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
        applicationStream: null != c ? z.Z.getAnyStreamForUser(c) : null,
        isMobile: null != c && W.Z.isMobileOnline(c)
      }
    }, [t, c, a]),
    {
      voiceActivityStatusEnabled: u
    } = (0, _.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: m
    } = (0, E.Z)({
      userId: c
    }),
    p = (0, M.K)({
      user: s
    }),
    h = (0, g.e7)([J.default, q.Z], () => {
      if (t.isMultiUserDM())
        if (l) return Q.default.keys(q.Z.getTypingUsers(t.id)).some(e => {
          var t;
          return e !== (null == (t = J.default.getCurrentUser()) ? true : t.id)
        });
        else returnfalse;
      return null != s && q.Z.isTyping(t.id, t.getRecipientId())
    }, [t, s, l]);
  return t.isMultiUserDM() ? (0, i.jsx)(ep, ei({
    channel: t,
    selected: n,
    isTyping: h,
    status: d.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : true,
    isGDMFacepileEnabled: o
  }, r)) : (0, i.jsx)(ep, ei({
    channel: t,
    selected: n,
    user: s,
    voiceChannel: u ? m : true,
    isTyping: h,
    nameplate: p
  }, r, d))
} : null