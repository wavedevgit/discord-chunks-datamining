/** Chunk was on 51333 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => ef,
  RS: () => em,
  ZP: () => eb,
  bU: () => ec
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
  Chunk551139 = require("./551139.js");

function ei(e) {
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

function ea(e, t) {
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
let eo = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  es = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  ec = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: i = false,
      reducedClickTarget: l = false,
      visibleElementRef: o
    } = e, s = ea(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let c = (0, G.A)(t);
    return (0, r.jsx)(y.P3F, el(ei({
      className: a()(er.closeButton, {
        [er.closeButtonPlated]: null != t,
        [er.closeButtonForceShow]: i,
        [er.reducedClickTarget]: l
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
          [er.innerCloseButtonPlated]: null != t
        }),
        children: (0, r.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: a()(er.closeIcon, {
            [er.closeIconPlated]: null != t
          })
        })
      })
    }))
  },
  eu = () => (0, Chunk951288.jsx)(Chunk481060.r7p, {
    size: "xs",
    color: "currentColor",
    className: Chunk551139.favoriteIcon
  }),
  ed = () => (0, Chunk951288.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk551139.favoriteIcon
  }),
  ep = () => (0, Chunk951288.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk551139.favoriteIcon
  }),
  ef = e => {
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
      "aria-posinset": v,
      "aria-setsize": O,
      listItemRef: g
    } = e, h = ea(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(M.Z, {
      className: a()(er.channel, {
        [er.fullWidth]: p.tq
      }, m),
      onClick: f,
      role: b,
      focusProps: ei({
        within: true
      }, es),
      "aria-posinset": v,
      "aria-setsize": O,
      ref: g,
      children: (0, r.jsx)(y.vjx, {
        as: "div",
        selected: n,
        className: a()(o, er.interactive, er.linkButton, {
          [er.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, el(ei({
          to: {
            pathname: t,
            state: d
          },
          className: er.link
        }, h), {
          children: [(0, r.jsx)(C.Z, {
            muted: false,
            avatar: (0, r.jsx)(i, {
              size: "refresh_sm",
              className: a()(er.linkButtonIcon, l),
              color: "currentColor"
            }),
            name: s,
            innerClassName: er.avatarWithText
          }), u]
        }))
      })
    })
  };

function em(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: l,
    selected: o = false,
    user: p,
    activities: j,
    applicationStream: N,
    voiceChannel: R,
    isTyping: F,
    status: G,
    isMobile: K,
    nameplate: Y,
    ref: q,
    "aria-posinset": X,
    "aria-setsize": $
  } = e, [ee, ef] = i.useState(false), [em, eb] = i.useState(false), [ev, ey] = i.useState(false), eO = i.useRef(null), eg = i.useRef(null), eh = null != q ? q : eg, {
    avatarSrc: ej,
    avatarDecorationSrc: ex,
    eventHandlers: eN
  } = (0, W.Z)({
    userId: null == p ? true : p.id,
    size: y.EFr.SIZE_32,
    animateOnHover: !(o || ee || em || ev)
  }), eS = t.isMultiUserDM(), eP = t.isSystemDM(), eC = (0, H.Q)(), eE = !eS && !eP && t.type === et.d4z.DM, ew = eE && (null == p ? true : p.primaryGuild) != null, eZ = (0, m.e7)([J.ZP], () => J.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eT,
    blocked: eM
  } = (0, m.cj)([V.Z], () => ({
    ignored: V.Z.isIgnored(t.getRecipientId()),
    blocked: V.Z.isBlocked(t.getRecipientId())
  })), eI = eE && eT, eD = eE && eM, ek = (eZ || eI || eD) && !(o || ee), e_ = (0, m.e7)([Q.ZP], () => Q.ZP.getMentionCount(t.id) > 0), eR = (0, T.ZP)(t), eL = (0, m.e7)([_.Z], () => _.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eU,
    rearrangeContextMenu: eA
  } = L.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eF = i.useRef(null), eG = null != Y && (o || ee || ev), eB = () => {
    ef(true)
  }, ez = () => {
    ef(false)
  }, eH = () => {
    eb(true)
  }, eW = () => {
    eb(false)
  }, eK = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), O.Z.closePrivateChannel(t.id, o, n)
  }, eY = () => {
    O.Z.preload(et.ME, t.id)
  }, eQ = e => {
    e.stopPropagation()
  }, eV = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eO.current) || t.click()
    }
  }, eq = e => {
    let i = "contextmenu" === e.type,
      l = eA && !i,
      a = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    ey(true), t.isMultiUserDM() ? (0, g.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, el(ei({}, n), {
        channel: t,
        selected: o
      }))
    }, {
      impressionName: a,
      noBlurEvent: true,
      onClose: () => ey(false)
    }) : (0, g.jW)(e, async () => {
      let {
        default: e
      } = l ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("66165"), n.e("6915"), n.e("56826"), n.e("21524")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, el(ei({}, n), {
        user: p,
        channel: t,
        channelSelected: o
      }))
    }, {
      impressionName: a,
      onClose: () => ey(false)
    })
  }, eJ = e => {
    e.preventDefault(), e.stopPropagation();
    let i = en.intl.formatToPlainString(en.t.hJ5Ap4, {
        name: eR
      }),
      l = en.intl.format(en.t.SSIVOu, {
        name: eR
      });
    t.isManaged() && (i = en.intl.formatToPlainString(en.t.hVGjEW, {
      name: eR
    }), l = en.intl.format(en.t.IK1Qvs, {
      name: eR
    })), (0, y.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, ei({
        header: i,
        body: l,
        onSubmit: eK
      }, t))
    })
  }, eX = (0, r.jsx)(k.Z, {
    userName: eR,
    displayNameStyles: null == p ? true : p.displayNameStyles,
    effectDisplayType: ee || o || ev ? D.F.ANIMATED : D.F.PLAIN,
    loop: ee,
    boldFontOpacity: .9
  }), e$ = ew ? (0, r.jsxs)(r.Fragment, {
    children: [eX, (0, r.jsx)(A.ZP, {
      primaryGuild: null == p ? true : p.primaryGuild,
      userId: null == p ? true : p.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(er.clanTag, {
        [er.clanTagMuted]: ek
      })
    })]
  }) : eX, e0 = i.useRef(null), e1 = (0, I.Y)({
    location: "PrivateChannel"
  }) && (null == p ? true : p.displayNameStyles) != null, e5 = (0, f.Z)(), e8 = [(0, w.ZP)({
    channel: t,
    unread: e_
  }), (0, w.Yb)({
    channel: t,
    muted: eZ,
    userStatus: G
  })].filter(Boolean).join(", ");
  return (0, r.jsx)(d.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, i = ea(e, ["role"]);
      return (0, r.jsxs)(M.Z, {
        className: a()(er.channel, er.dm),
        role: n,
        focusProps: el(ei({}, es), {
          focusTarget: eO,
          ringTarget: eh
        }),
        ref: eh,
        onMouseEnter: eB,
        onMouseLeave: ez,
        onMouseDown: eY,
        onFocus: eH,
        onBlur: eW,
        onContextMenu: eq,
        "aria-setsize": $,
        "aria-posinset": X,
        children: [e_ ? (0, r.jsx)("div", {
          className: a()(er.unreadPill, {
            [er.muted]: ek
          })
        }) : null, (0, r.jsxs)(y.vjx, {
          className: a()(er.interactive, {
            [er.interactiveSystemDM]: eC && eP,
            [er.interactiveSelected]: o || ev
          }),
          as: "div",
          onClick: eV,
          muted: ek,
          selected: o,
          children: [(0, r.jsx)(z.Z, {
            nameplate: eG ? Y : true,
            selected: o,
            hovered: ee,
            content: e0,
            placement: B.i.CHANNEL
          }), (0, r.jsx)(c.rU, el(ei({
            innerRef: eO,
            to: et.Z5c.CHANNEL(et.ME, t.id),
            className: er.link,
            "aria-label": e8
          }, i), {
            children: (0, r.jsx)(C.Z, {
              ref: e0,
              avatar: (() => {
                let e = y.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && l && null == t.icon) return (0, r.jsx)(U.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: F,
                    status: G
                  });
                  else return (0, r.jsx)(eo, el(ei({}, eN), {
                    src: (0, Z.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: F ? et.Skl.ONLINE : G,
                    isTyping: F
                  }));
                s()(null != p, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return p.isSystemUser() || (n = (0, h.Z)(j) ? et.Skl.STREAMING : G), (0, r.jsx)(eo, el(ei({}, eN), {
                  size: y.EFr.SIZE_32,
                  src: ej,
                  avatarDecoration: ex,
                  status: n,
                  isMobile: K,
                  isTyping: F,
                  "aria-label": p.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: e_ && !ek,
              muted: ek,
              subText: t.isSystemDM() ? (0, r.jsx)("div", {
                className: er.subtext,
                children: (0, E.Z)(t.id) ? en.intl.string(en.t.FL5T01) : en.intl.string(en.t.NnY5lc)
              }) : t.isMultiUserDM() ? (0, r.jsx)("div", {
                className: er.subtext,
                children: en.intl.format(en.t.CxSA5N, {
                  members: t.recipients.length + 1
                })
              }) : (0, x.Z)({
                activities: j,
                status: G,
                applicationStream: N,
                voiceChannel: R
              }) ? (0, r.jsx)(S.Z, {
                location: "PrivateChannel",
                user: p,
                activities: j,
                voiceChannel: R,
                applicationStream: N,
                animateEmoji: ee || em || ev,
                textClassName: er.activityStatusText,
                iconClassName: ek ? er.mutedIcon : true
              }) : null,
              name: (0, r.jsx)(b.Z, {
                className: a()(er.overflowTooltip, {
                  [er.withDisplayNameStyles]: e1
                }),
                children: e$
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(P.Z, {
                className: er.decorator,
                type: P.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e1
            })
          })), (0, r.jsxs)("div", {
            className: a()(er.iconsContainer, {
              [er.nameplated]: eG
            }),
            children: [eL && !ev ? (0, r.jsx)(eu, {}) : null, eI ? (0, r.jsx)(ed, {}) : null, eD ? (0, r.jsx)(ep, {}) : null, eU && !e5 ? (0, r.jsx)(v.u, {
              asContainer: true,
              text: en.intl.string(eS ? en.t.Et8qwj : en.t["d+e27s"]),
              delay: 500,
              targetElementRef: eF,
              children: (0, r.jsx)(ec, {
                icon: y.xhG,
                "aria-label": en.intl.string(en.t.PdRCRg),
                onClick: e => {
                  eq(e)
                },
                onMouseDown: eQ,
                nameplate: Y,
                forceShow: ev,
                visibleElementRef: eF
              })
            }) : (0, r.jsx)(ec, {
              icon: y.Dio,
              "aria-label": eS ? en.intl.string(en.t["26C4oi"]) : en.intl.string(en.t.jsvgc3),
              onClick: eS ? eJ : eK,
              onMouseDown: eQ,
              nameplate: Y,
              reducedClickTarget: true,
              visibleElementRef: eF
            })]
          })]
        })]
      })
    }
  })
}
let eb = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, i = ea(e, ["channel", "selected"]);
  let l = (0, m.e7)([X.default], () => X.default.getUser(t.getRecipientId())),
    {
      isStatusIndicatorEnabled: a,
      isTypingIndicatorEnabled: o,
      isFacepileEnabled: s
    } = R.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: true
    }),
    c = null == l ? true : l.id,
    u = (0, m.cj)([Y.Z, K.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        if (a) {
          let n = Y.Z.getState().statuses;
          t.recipients.some(e => n[e] === et.Skl.ONLINE) && (e = et.Skl.ONLINE)
        }
      } else null != c && (e = Y.Z.getStatus(c));
      return {
        status: e,
        activities: null != c ? Y.Z.getActivities(c) : null,
        applicationStream: null != c ? K.Z.getAnyStreamForUser(c) : null,
        isMobile: null != c && Y.Z.isMobileOnline(c)
      }
    }, [t, c, a]),
    {
      voiceActivityStatusEnabled: d
    } = (0, j.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: p
    } = (0, N.Z)({
      userId: c
    }),
    f = (0, F.K)({
      user: l
    }),
    b = (0, m.e7)([X.default, q.Z], () => {
      if (t.isMultiUserDM())
        if (o) return $.default.keys(q.Z.getTypingUsers(t.id)).some(e => {
          var t;
          return e !== (null == (t = X.default.getCurrentUser()) ? true : t.id)
        });
        else returnfalse;
      return null != l && q.Z.isTyping(t.id, t.getRecipientId())
    }, [t, l, o]);
  return t.isMultiUserDM() ? (0, r.jsx)(em, ei({
    channel: t,
    selected: n,
    isTyping: b,
    status: u.status === et.Skl.ONLINE ? et.Skl.ONLINE : true,
    isGDMFacepileEnabled: s
  }, i)) : (0, r.jsx)(em, ei({
    channel: t,
    selected: n,
    user: l,
    voiceChannel: d ? p : true,
    isTyping: b,
    nameplate: f
  }, i, u))
} : null