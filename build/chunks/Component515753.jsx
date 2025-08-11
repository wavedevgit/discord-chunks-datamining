/** Chunk was on 75708 **/
/** chunk id: 515753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qj: () => eu,
  RS: () => em,
  ZP: () => ep,
  bU: () => el
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk688642 = require("./688642.js"),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
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
  Chunk425154 = require("./425154.js");

function en(e) {
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

function ei(e, t) {
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

function er(e, t) {
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
let es = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  ea = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  el = e => {
    var {
      nameplate: t,
      icon: n,
      forceShow: r = false,
      reducedClickTarget: s = false,
      visibleElementRef: l
    } = e, o = er(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
    let c = (0, B.A)(t);
    return (0, i.jsx)(g.P3F, ei(en({
      className: a()(et.closeButton, {
        [et.closeButtonPlated]: null != t,
        [et.closeButtonForceShow]: r,
        [et.reducedClickTarget]: s
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
          [et.innerCloseButtonPlated]: null != t
        }),
        children: (0, i.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: a()(et.closeIcon, {
            [et.closeIconPlated]: null != t
          })
        })
      })
    }))
  },
  eo = () => (0, Chunk255367.jsx)(Chunk481060.r7p, {
    size: "xs",
    color: "currentColor",
    className: Chunk425154.favoriteIcon
  }),
  ec = () => (0, Chunk255367.jsx)(Chunk481060.kZF, {
    size: "xs",
    color: "currentColor",
    className: Chunk425154.favoriteIcon
  }),
  ed = () => (0, Chunk255367.jsx)(Chunk481060.t6m, {
    size: "xs",
    color: "currentColor",
    className: Chunk425154.favoriteIcon
  }),
  eu = e => {
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
      className: h,
      role: f,
      "aria-posinset": b,
      "aria-setsize": x,
      listItemRef: _
    } = e, j = er(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, i.jsx)(N.Z, {
      className: a()(et.channel, {
        [et.fullWidth]: m.tq
      }, h),
      onClick: p,
      role: f,
      focusProps: en({
        within: true
      }, ea),
      "aria-posinset": b,
      "aria-setsize": x,
      ref: _,
      children: (0, i.jsx)(g.vjx, {
        as: "div",
        selected: n,
        className: a()(l, et.interactive, et.linkButton, {
          [et.interactiveSelected]: n
        }),
        children: (0, i.jsxs)(c.rU, ei(en({
          to: {
            pathname: t,
            state: u
          },
          className: et.link
        }, j), {
          children: [(0, i.jsx)(O.Z, {
            muted: false,
            avatar: (0, i.jsx)(r, {
              size: "refresh_sm",
              className: a()(et.linkButtonIcon, s),
              color: "currentColor"
            }),
            name: o,
            innerClassName: et.avatarWithText
          }), d]
        }))
      })
    })
  };

function em(e) {
  let {
    channel: t,
    isGDMFacepileEnabled: s,
    selected: l = false,
    user: m,
    activities: x,
    applicationStream: j,
    voiceChannel: Z,
    isTyping: M,
    status: B,
    isMobile: H,
    nameplate: z,
    ref: K,
    "aria-posinset": X,
    "aria-setsize": J
  } = e, [Q, eu] = r.useState(false), [em, ep] = r.useState(false), [eg, eh] = r.useState(false), ef = r.useRef(null), eb = r.useRef(null), ex = null != K ? K : eb, {
    avatarSrc: e_,
    avatarDecorationSrc: ej,
    eventHandlers: eE
  } = (0, F.Z)({
    userId: null == m ? true : m.id,
    size: g.EFr.SIZE_32,
    animateOnHover: !(l || Q || em || eg)
  }), eC = t.isMultiUserDM(), eO = t.isSystemDM(), ev = (0, G.Q)(), eS = !eC && !eO && t.type === $.d4z.DM, eT = eS && (null == m ? true : m.primaryGuild) != null, eI = (0, p.e7)([q.ZP], () => q.ZP.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eN,
    blocked: ey
  } = (0, p.cj)([Y.Z], () => ({
    ignored: Y.Z.isIgnored(t.getRecipientId()),
    blocked: Y.Z.isBlocked(t.getRecipientId())
  })), eA = eS && eN, eP = eS && ey, eR = (eI || eA || eP) && !(l || Q), eD = (0, p.e7)([W.ZP], () => W.ZP.getMentionCount(t.id) > 0), eZ = (0, I.ZP)(t), ew = (0, p.e7)([D.Z], () => D.Z.isFavorite(t.id)), {
    dotsInsteadOfCloseButton: ek,
    rearrangeContextMenu: eL
  } = w.Z.useExperiment({
    location: "private_channel"
  }, {
    autoTrackExposure: true
  }), eM = r.useRef(null), eB = null != z && (l || Q || eg), eU = () => {
    eu(true)
  }, eV = () => {
    eu(false)
  }, eG = () => {
    ep(true)
  }, eF = () => {
    ep(false)
  }, eH = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(t.id, l, n)
  }, ez = () => {
    h.Z.preload($.ME, t.id)
  }, eW = e => {
    e.stopPropagation()
  }, eY = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = ef.current) || t.click()
    }
  }, eK = e => {
    let r = "contextmenu" === e.type,
      s = eL && !r,
      a = r ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    eh(true), t.isMultiUserDM() ? (0, f.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70205"), n.e("57789"), n.e("19549")]).then(n.bind(n, 354741));
      return n => (0, i.jsx)(e, ei(en({}, n), {
        channel: t,
        selected: l
      }))
    }, {
      impressionName: a,
      noBlurEvent: true,
      onClose: () => eh(false)
    }) : (0, f.jW)(e, async () => {
      let {
        default: e
      } = s ? await n.e("56167").then(n.bind(n, 416951)) : await Promise.all([n.e("79695"), n.e("70205"), n.e("98783"), n.e("57789"), n.e("56826"), n.e("67326")]).then(n.bind(n, 131404));
      return n => (0, i.jsx)(e, ei(en({}, n), {
        user: m,
        channel: t,
        channelSelected: l
      }))
    }, {
      impressionName: a,
      onClose: () => eh(false)
    })
  }, eq = e => {
    e.preventDefault(), e.stopPropagation();
    let r = ee.intl.formatToPlainString(ee.t.hJ5Ap6, {
        name: eZ
      }),
      s = ee.intl.format(ee.t.SSIVOj, {
        name: eZ
      });
    t.isManaged() && (r = ee.intl.formatToPlainString(ee.t.hVGjER, {
      name: eZ
    }), s = ee.intl.format(ee.t.IK1Qvr, {
      name: eZ
    })), (0, g.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14604").then(n.bind(n, 960670));
      return t => (0, i.jsx)(e, en({
        header: r,
        body: s,
        onSubmit: eH
      }, t))
    })
  }, eX = () => t.isSystemDM() ? (0, i.jsx)("div", {
    className: et.subtext,
    children: (0, v.Z)(t.id) ? ee.intl.string(ee.t.FL5T09) : ee.intl.string(ee.t.NnY5lZ)
  }) : t.isMultiUserDM() ? (0, i.jsx)("div", {
    className: et.subtext,
    children: ee.intl.format(ee.t.CxSA5O, {
      members: t.recipients.length + 1
    })
  }) : (0, _.Z)({
    activities: x,
    status: B,
    applicationStream: j,
    voiceChannel: Z
  }) ? (0, i.jsx)(E.Z, {
    location: "PrivateChannel",
    user: m,
    activities: x,
    voiceChannel: Z,
    applicationStream: j,
    animateEmoji: Q || em || eg,
    textClassName: et.activityStatusText,
    iconClassName: eR ? et.mutedIcon : true
  }) : null, eJ = () => {
    let e = g.EFr.SIZE_32;
    if (t.isMultiUserDM())
      if (t.recipients.length >= 2 && s && null == t.icon) return (0, i.jsx)(k.Z, {
        "aria-hidden": true,
        recipients: t.recipients,
        size: e,
        isTyping: M,
        status: B
      });
      else return (0, i.jsx)(es, ei(en({}, eE), {
        src: (0, T.x)(t),
        "aria-hidden": true,
        size: e,
        status: M ? $.Skl.ONLINE : B,
        isTyping: M
      }));
    o()(null != m, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
    let n = null;
    return m.isSystemUser() || (n = (0, b.Z)(x) ? $.Skl.STREAMING : B), (0, i.jsx)(es, ei(en({}, eE), {
      size: g.EFr.SIZE_32,
      src: e_,
      avatarDecoration: ej,
      status: n,
      isMobile: H,
      isTyping: M,
      "aria-label": m.username,
      statusTooltip: true
    }))
  }, eQ = (0, i.jsx)(R.Z, {
    userName: eZ,
    displayNameStyles: null == m ? true : m.displayNameStyles,
    effectDisplayType: Q || l || eg ? P.F.ANIMATED : P.F.PLAIN,
    loop: Q
  }), e$ = eT ? (0, i.jsxs)(i.Fragment, {
    children: [eQ, (0, i.jsx)(L.ZP, {
      primaryGuild: null == m ? true : m.primaryGuild,
      userId: null == m ? true : m.id,
      inline: true,
      disableGuildProfile: true,
      className: a()(et.clanTag, {
        [et.clanTagMuted]: eR
      })
    })]
  }) : eQ, e0 = r.useRef(null), e3 = (0, A.Y)({
    location: "PrivateChannel"
  }) && (null == m ? true : m.displayNameStyles) != null;
  return (0, i.jsx)(u.mh, {
    id: t.id,
    children: e => {
      var {
        role: n
      } = e, r = er(e, ["role"]);
      return (0, i.jsxs)(N.Z, {
        className: a()(et.channel, et.dm),
        role: n,
        focusProps: ei(en({}, ea), {
          focusTarget: ef,
          ringTarget: ex
        }),
        ref: ex,
        onMouseEnter: eU,
        onMouseLeave: eV,
        onMouseDown: ez,
        onFocus: eG,
        onBlur: eF,
        onContextMenu: eK,
        "aria-setsize": J,
        "aria-posinset": X,
        children: [eD ? (0, i.jsx)("div", {
          className: a()(et.unreadPill, {
            [et.muted]: eR
          })
        }) : null, (0, i.jsxs)(g.vjx, {
          className: a()(et.interactive, {
            [et.interactiveSystemDM]: ev && eO,
            [et.interactiveSelected]: l || eg
          }),
          as: "div",
          onClick: eY,
          muted: eR,
          selected: l,
          children: [(0, i.jsx)(V.Z, {
            nameplate: eB ? z : true,
            selected: l,
            hovered: Q,
            content: e0,
            placement: U.i.CHANNEL
          }), (0, i.jsx)(c.rU, ei(en({
            innerRef: ef,
            to: $.Z5c.CHANNEL($.ME, t.id),
            className: a()(et.link, {
              [et.linkPlated]: eB
            }),
            "aria-label": (0, S.ZP)({
              channel: t,
              unread: eD
            })
          }, r), {
            children: (0, i.jsx)(O.Z, {
              ref: e0,
              avatar: eJ(),
              highlighted: eD && !eR,
              muted: eR,
              subText: eX(),
              name: (0, i.jsx)(y.Z, {
                className: a()(et.overflowTooltip, {
                  [et.withDisplayNameStyles]: e3
                }),
                children: e$
              }),
              decorators: t.isSystemDM() ? (0, i.jsx)(C.Z, {
                className: et.decorator,
                type: C.Z.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: e3
            })
          })), ew && !eg ? (0, i.jsx)(eo, {}) : null, eA ? (0, i.jsx)(ec, {}) : null, eP ? (0, i.jsx)(ed, {}) : null, ek ? (0, i.jsx)(g.ua7, {
            text: ee.intl.string(eC ? ee.t.Et8qws : ee.t["d+e27u"]),
            delay: 500,
            targetElementRef: eM,
            children: e => {
              var {
                onClick: t
              } = e, n = er(e, ["onClick"]);
              return (0, i.jsx)(el, ei(en({}, n), {
                icon: g.xhG,
                "aria-label": ee.intl.string(ee.t.PdRCRk),
                onClick: e => {
                  null == t || t(), eK(e)
                },
                onMouseDown: eW,
                nameplate: z,
                forceShow: eg,
                visibleElementRef: eM
              }))
            }
          }) : (0, i.jsx)(el, {
            icon: g.Dio,
            "aria-label": eC ? ee.intl.string(ee.t["26C4oq"]) : ee.intl.string(ee.t.jsvgc3),
            onClick: eC ? eq : eH,
            onMouseDown: eW,
            nameplate: z,
            reducedClickTarget: true,
            visibleElementRef: eM
          })]
        })]
      })
    }
  })
}
let ep = 12633 == require.j ? e => {
  var {
    channel: t,
    selected: n
  } = e, r = er(e, ["channel", "selected"]);
  let s = (0, p.e7)([X.default], () => X.default.getUser(t.getRecipientId())),
    {
      isStatusIndicatorEnabled: a,
      isTypingIndicatorEnabled: l,
      isFacepileEnabled: o
    } = Z.Z.useExperiment({
      location: "private_channel"
    }, {
      autoTrackExposure: true
    }),
    c = null == s ? true : s.id,
    d = (0, p.cj)([z.Z, H.Z], () => {
      let e;
      if (t.isMultiUserDM()) {
        if (a) {
          let n = z.Z.getState().statuses;
          t.recipients.some(e => n[e] === $.Skl.ONLINE) && (e = $.Skl.ONLINE)
        }
      } else null != c && (e = z.Z.getStatus(c));
      return {
        status: e,
        activities: null != c ? z.Z.getActivities(c) : null,
        applicationStream: null != c ? H.Z.getAnyStreamForUser(c) : null,
        isMobile: null != c && z.Z.isMobileOnline(c)
      }
    }, [t, c, a]),
    {
      voiceActivityStatusEnabled: u
    } = (0, x.U)({
      location: "PrivateChannel"
    }),
    {
      voiceChannel: m
    } = (0, j.Z)({
      userId: c
    }),
    g = (0, M.K)({
      user: s
    }),
    h = (0, p.e7)([X.default, K.Z], () => {
      if (t.isMultiUserDM())
        if (l) return J.default.keys(K.Z.getTypingUsers(t.id)).some(e => {
          var t;
          return e !== (null == (t = X.default.getCurrentUser()) ? true : t.id)
        });
        else returnfalse;
      return null != s && K.Z.isTyping(t.id, t.getRecipientId())
    }, [t, s, l]);
  return t.isMultiUserDM() ? (0, i.jsx)(em, en({
    channel: t,
    selected: n,
    isTyping: h,
    status: d.status === $.Skl.ONLINE ? $.Skl.ONLINE : true,
    isGDMFacepileEnabled: o
  }, r)) : (0, i.jsx)(em, en({
    channel: t,
    selected: n,
    user: s,
    voiceChannel: u ? m : true,
    isTyping: h,
    nameplate: g
  }, r, d))
} : null