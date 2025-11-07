/** Chunk was on 88295 **/
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
  Chunk800525 = require("./800525.js");

function el(e) {
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

function ea(e, t) {
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
      forceShow: l = false,
      reducedClickTarget: i = false,
      visibleElementRef: o
    } = e, s = ea(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let c = (0, F.A)(t);
    return (0, r.jsx)(y.P3F, ei(el({
      className: a()(er.closeButton, {
        [er.closeButtonPlated]: null != t,
        [er.closeButtonForceShow]: l,
        [er.reducedClickTarget]: i
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
    className: Chunk800525.favoriteIcon
  }),
  ed = () => (0, Chunk951288.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  ep = () => (0, Chunk951288.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk800525.favoriteIcon
  }),
  ef = e => {
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
      role: b,
      "aria-posinset": O,
      "aria-setsize": v,
      listItemRef: g
    } = e, h = ea(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(w.Z, {
      className: a()(er.channel, {
        [er.fullWidth]: p.tq
      }, m),
      onClick: f,
      role: b,
      focusProps: el({
        within: true
      }, es),
      "aria-posinset": O,
      "aria-setsize": v,
      ref: g,
      children: (0, r.jsx)(y.vjx, {
        as: "div",
        selected: n,
        className: a()(o, er.interactive, er.linkButton, {
          [er.interactiveSelected]: n
        }),
        children: (0, r.jsxs)(c.rU, ei(el({
          to: {
            pathname: t,
            state: d
          },
          className: er.link
        }, h), {
          children: [(0, r.jsx)(P.Z, {
            muted: false,
            avatar: (0, r.jsx)(l, {
              size: "refresh_sm",
              className: a()(er.linkButtonIcon, i),
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
    isGDMFacepileEnabled: i,
    selected: o = false,
    user: p,
    activities: j,
    applicationStream: x,
    voiceChannel: R,
    isTyping: U,
    status: F,
    isMobile: W,
    nameplate: K,
    ref: q,
    "aria-posinset": X,
    "aria-setsize": $
  } = e, [ee, ef] = l.useState(false), [em, eb] = l.useState(false), [eO, ey] = l.useState(false), ev = l.useRef(null), eg = l.useRef(null), eh = null != q ? q : eg, {
    avatarSrc: ej,
    avatarDecorationSrc: eN,
    eventHandlers: ex
  } = (0, Y.Z)({
    userId: null == p ? true : p.id,
    size: y.EFr.SIZE_32,
    animateOnHover: !(o || ee || em || eO)
  }), eS = t.isMultiUserDM(), eE = t.isSystemDM(), eP = (0, H.Q)(), eC = !eS && !eE && t.type === et.d4z.DM, eI = eC && (null == p ? true : p.primaryGuild) != null, eT = (0, m.e7)([J.ZP], () => J.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eZ,
    blocked: ew
  } = (0, m.cj)([V.Z], () => ({
    ignored: V.Z.isIgnored(t.getRecipientId()),
    blocked: V.Z.isBlocked(t.getRecipientId())
  })), eM = eC && eZ, eD = eC && ew, e_ = (eT || eM || eD) && !(o || ee), ek = (0, m.e7)([Q.ZP], () => Q.ZP.getMentionCount(t.id) > 0), eR = (0, Z.ZP)(t), eL = (0, m.e7)([k.Z], () => k.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: eA,
    rearrangeContextMenu: eG
  } = L.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eU = l.useRef(null), eF = null != K && (o || ee || eO), eB = () => {
    ef(true)
  }, ez = () => {
    ef(false)
  }, eH = () => {
    eb(true)
  }, eY = () => {
    eb(false)
  }, eW = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), v.Z.closePrivateChannel(t.id, o, n)
  }, eK = () => {
    v.Z.preload(et.ME, t.id)
  }, eQ = e => {
    e.stopPropagation()
  }, eV = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = ev.current) || t.click()
    }
  }, eq = e => {
    let l = "contextmenu" === e.type,
      i = eG && !l,
      a = l ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    ey(true), t.isMultiUserDM() ? (0, g.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421"), n.e("89183")]).then(n.bind(n, 354741));
      return n => (0, r.jsx)(e, ei(el({}, n), {
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
      } = i ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("90508"), n.e("66165"), n.e("6915"), n.e("56826"), n.e("653")]).then(n.bind(n, 131404));
      return n => (0, r.jsx)(e, ei(el({}, n), {
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
    let l = en.intl.formatToPlainString(en.t.hJ5Ap4, {
        name: eR
      }),
      i = en.intl.format(en.t.SSIVOu, {
        name: eR
      });
    t.isManaged() && (l = en.intl.formatToPlainString(en.t.hVGjEW, {
      name: eR
    }), i = en.intl.format(en.t.IK1Qvs, {
      name: eR
    })), (0, y.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, r.jsx)(e, el({
        header: l,
        body: i,
        onSubmit: eW
      }, t))
    })
  }, eX = (0, r.jsx)(_.Z, {
    userName: eR,
    displayNameStyles: null == p ? true : p.displayNameStyles,
    effectDisplayType: ee || o || eO ? D.F.ANIMATED : D.F.PLAIN,
    loop: ee,
    boldFontOpacity: .9
  }), e$ = eI ? (0, r.jsxs)(r.Fragment, {
    children: [eX, (0, r.jsx)(G.ZP, {
      primaryGuild: null == p ? true : p.primaryGuild,
      userId: null == p ? true : p.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(er.clanTag, {
        [er.clanTagMuted]: e_
      })
    })]
  }) : eX, e0 = l.useRef(null), e1 = (0, M.Y)({
    location: "PrivateChannel"
  }) && (null == p ? true : p.displayNameStyles) != null, e8 = (0, f.Z)();
  return (0, r.jsx)(d.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, l = ea(e, ["role"]);
      return (0, r.jsxs)(w.Z, {
        className: a()(er.channel, er.dm),
        role: n,
        focusProps: ei(el({}, es), {
          focusTarget: ev,
          ringTarget: eh
        }),
        ref: eh,
        onMouseEnter: eB,
        onMouseLeave: ez,
        onMouseDown: eK,
        onFocus: eH,
        onBlur: eY,
        onContextMenu: eq,
        "aria-setsize": $,
        "aria-posinset": X,
        children: [ek ? (0, r.jsx)("div", {
          className: a()(er.unreadPill, {
            [er.muted]: e_
          })
        }) : null, (0, r.jsxs)(y.vjx, {
          className: a()(er.interactive, {
            [er.interactiveSystemDM]: eP && eE,
            [er.interactiveSelected]: o || eO
          }),
          as: "div",
          onClick: eV,
          muted: e_,
          selected: o,
          children: [(0, r.jsx)(z.Z, {
            nameplate: eF ? K : true,
            selected: o,
            hovered: ee,
            content: e0,
            placement: B.i.CHANNEL
          }), (0, r.jsx)(c.rU, ei(el({
            innerRef: ev,
            to: et.Z5c.CHANNEL(et.ME, t.id),
            className: er.link,
            "aria-label": (0, I.ZP)({
              channel: t,
              unread: ek
            })
          }, l), {
            children: (0, r.jsx)(P.Z, {
              ref: e0,
              avatar: (() => {
                let e = y.EFr.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && i && null == t.icon) return (0, r.jsx)(A.Z, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: U,
                    status: F
                  });
                  else return (0, r.jsx)(eo, ei(el({}, ex), {
                    src: (0, T.x)(t),
                    "aria-hidden": true,
                    size: e,
                    status: U ? et.Skl.ONLINE : F,
                    isTyping: U
                  }));
                s()(null != p, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return p.isSystemUser() || (n = (0, h.Z)(j) ? et.Skl.STREAMING : F), (0, r.jsx)(eo, ei(el({}, ex), {
                  size: y.EFr.SIZE_32,
                  src: ej,
                  avatarDecoration: eN,
                  status: n,
                  isMobile: W,
                  isTyping: U,
                  "aria-label": p.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: ek && !e_,
              muted: e_,
              subText: t.isSystemDM() ? (0, r.jsx)("div", {
                className: er.subtext,
                children: (0, C.Z)(t.id) ? en.intl.string(en.t.FL5T01) : en.intl.string(en.t.NnY5lc)
              }) : t.isMultiUserDM() ? (0, r.jsx)("div", {
                className: er.subtext,
                children: en.intl.format(en.t.CxSA5N, {
                  members: t.recipients.length + 1
                })
              }) : (0, N.Z)({
                activities: j,
                status: F,
                applicationStream: x,
                voiceChannel: R
              }) ? (0, r.jsx)(S.Z, {
                location: "PrivateChannel",
                user: p,
                activities: j,
                voiceChannel: R,
                applicationStream: x,
                animateEmoji: ee || em || eO,
                textClassName: er.activityStatusText,
                iconClassName: e_ ? er.mutedIcon : true
              }) : null,
              name: (0, r.jsx)(b.Z, {
                className: a()(er.overflowTooltip, {
                  [er.withDisplayNameStyles]: e1
                }),
                children: e$
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(E.Z, {
                className: er.decorator,
                type: E.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e1
            })
          })), (0, r.jsxs)("div", {
            className: a()(er.iconsContainer, {
              [er.nameplated]: eF
            }),
            children: [eL && !eO ? (0, r.jsx)(eu, {}) : null, eM ? (0, r.jsx)(ed, {}) : null, eD ? (0, r.jsx)(ep, {}) : null, eA && !e8 ? (0, r.jsx)(O.u, {
              asContainer: true,
              text: en.intl.string(eS ? en.t.Et8qwj : en.t["d+e27s"]),
              delay: 500,
              targetElementRef: eU,
              children: (0, r.jsx)(ec, {
                icon: y.xhG,
                "aria-label": en.intl.string(en.t.PdRCRg),
                onClick: e => {
                  eq(e)
                },
                onMouseDown: eQ,
                nameplate: K,
                forceShow: eO,
                visibleElementRef: eU
              })
            }) : (0, r.jsx)(ec, {
              icon: y.Dio,
              "aria-label": eS ? en.intl.string(en.t["26C4oi"]) : en.intl.string(en.t.jsvgc3),
              onClick: eS ? eJ : eW,
              onMouseDown: eQ,
              nameplate: K,
              reducedClickTarget: true,
              visibleElementRef: eU
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
  } = e, l = ea(e, ["channel", "selected"]);
  let i = (0, m.e7)([X.default], () => X.default.getUser(t.getRecipientId())),
    {
      isStatusIndicatorEnabled: a,
      isTypingIndicatorEnabled: o,
      isFacepileEnabled: s
    } = R.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: true
    }),
    c = null == i ? true : i.id,
    u = (0, m.cj)([K.Z, W.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        if (a) {
          let n = K.Z.getState().statuses;
          t.recipients.some(e => n[e] === et.Skl.ONLINE) && (e = et.Skl.ONLINE)
        }
      } else null != c && (e = K.Z.getStatus(c));
      return {
        status: e,
        activities: null != c ? K.Z.getActivities(c) : null,
        applicationStream: null != c ? W.Z.getAnyStreamForUser(c) : null,
        isMobile: null != c && K.Z.isMobileOnline(c)
      }
    }, [t, c, a]),
    {
      voiceActivityStatusEnabled: d
    } = (0, j.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: p
    } = (0, x.Z)({
      userId: c
    }),
    f = (0, U.K)({
      user: i
    }),
    b = (0, m.e7)([X.default, q.Z], () => {
      if (t.isMultiUserDM())
        if (o) return $.default.keys(q.Z.getTypingUsers(t.id)).some(e => {
          var t;
          return e !== (null == (t = X.default.getCurrentUser()) ? true : t.id)
        });
        else returnfalse;
      return null != i && q.Z.isTyping(t.id, t.getRecipientId())
    }, [t, i, o]);
  return t.isMultiUserDM() ? (0, r.jsx)(em, el({
    channel: t,
    selected: n,
    isTyping: b,
    status: u.status === et.Skl.ONLINE ? et.Skl.ONLINE : true,
    isGDMFacepileEnabled: s
  }, l)) : (0, r.jsx)(em, el({
    channel: t,
    selected: n,
    user: i,
    voiceChannel: d ? p : true,
    isTyping: b,
    nameplate: f
  }, l, u))
} : null