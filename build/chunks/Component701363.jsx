/** Chunk was on 20725 **/
/** chunk id: 701363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => eg,
  th: () => eb,
  w_: () => ed,
  z9: () => ey
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk308185 = require("./308185.js"),
  Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
  Chunk758879 = require("./758879.js"),
  Chunk110259 = require("./110259.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk960076 = require("./960076.js"),
  Chunk901517 = require("./901517.js"),
  Chunk397244 = require("./397244.js"),
  Chunk714114 = require("./714114.js"),
  Chunk729551 = require("./729551.jsx"),
  Chunk709066 = require("./709066.jsx"),
  Chunk262295 = require("./262295.jsx"),
  Chunk343328 = require("./343328.js"),
  Chunk963027 = require("./963027.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk880714 = require("./880714.jsx"),
  Chunk824994 = require("./824994.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk181079 = require("./181079.js"),
  Chunk954376 = require("./954376.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk461012 = require("./461012.js"),
  Chunk224415 = require("./224415.js"),
  Chunk208823 = require("./208823.js"),
  Chunk111864 = require("./111864.js"),
  Chunk967054 = require("./967054.js"),
  Chunk226540 = require("./226540.js"),
  Chunk227 = require("./227.jsx"),
  Chunk549973 = require("./549973.js"),
  Chunk820286 = require("./820286.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk616356 = require("./616356.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk351906 = require("./351906.js"),
  Chunk741961 = require("./741961.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk45119 = require("./45119.js");

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

function ea(e, t) {
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

function eo(e, t) {
  if (null == e) return {};
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}
let eu = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF,
  ec = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  ed = e => {
    let {
      nameplate: t,
      icon: n,
      forceShow: l = false,
      reducedClickTarget: i = false,
      visibleElementRef: a
    } = e, o = eo(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]), u = (0, F.K)(t);
    return (0, r.jsx)(b.DUT, ea(es({
      className: s()(ei.b, {
        [ei.DQ]: null != t,
        [ei.by]: l,
        [ei.wY]: i
      }),
      style: u
    }, o), {
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
        className: s()({
          [ei.PJ]: null != t
        }),
        children: (0, r.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: s()(ei.ut, {
            [ei.Uq]: null != t
          })
        })
      })
    }))
  },
  ep = () => (0, r.jsx)(b.Gg5, {
    size: "xs",
    color: "currentColor",
    className: ei.wB
  }),
  em = () => (0, r.jsx)(b.G3N, {
    size: "xs",
    color: "currentColor",
    className: ei.wB
  }),
  ef = () => (0, r.jsx)(b.KTN, {
    size: "xs",
    color: "currentColor",
    className: ei.wB
  }),
  ey = e => {
    let {
      route: t,
      selected: n,
      icon: l,
      iconClassName: i,
      interactiveClassName: a,
      text: o,
      children: u,
      locationState: d,
      onClick: p,
      className: f,
      role: y,
      "aria-posinset": g,
      "aria-setsize": A,
      listItemRef: x
    } = e, v = eo(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, r.jsx)(P.A, {
      className: s()(ei.Ix, {
        [ei.Ij]: m.Fr
      }, f),
      onClick: p,
      role: y,
      focusProps: es({
        within: true
      }, ec),
      "aria-posinset": g,
      "aria-setsize": A,
      ref: x,
      children: (0, r.jsx)(b.HG8, {
        as: "div",
        selected: n,
        className: s()(a, ei.bG, ei.$J, {
          [ei.Q2]: n
        }),
        children: (0, r.jsxs)(c.N_, ea(es({
          to: {
            pathname: t,
            state: d
          },
          className: ei.nf
        }, v), {
          children: [(0, r.jsx)(S.A, {
            muted: false,
            avatar: (0, r.jsx)(l, {
              size: "refresh_sm",
              className: s()(ei.e_, i),
              color: "currentColor"
            }),
            name: o,
            innerClassName: ei.xx
          }), u]
        }))
      })
    })
  };

function eb(e) {
  let {
    channel: t,
    selected: i = false,
    user: o,
    activities: m,
    applicationStream: v,
    voiceChannel: O,
    isTyping: Q,
    status: F,
    isMobile: K,
    nameplate: W,
    latestMessage: $,
    ref: ee,
    "aria-posinset": en,
    "aria-setsize": ey
  } = e, [eb, eg] = l.useState(false), [eA, ex] = l.useState(false), [ev, eh] = l.useState(false), eO = l.useRef(null), eE = l.useRef(null), ej = null != ee ? ee : eE, {
    avatarSrc: eS,
    avatarDecorationSrc: eN,
    eventHandlers: eT
  } = (0, z.A)({
    userId: null == o ? true : o.id,
    size: b._3J.SIZE_32,
    animateOnHover: !(i || eb || eA || ev)
  }), e_ = t.isMultiUserDM(), eC = t.isSystemDM(), eP = !e_ && !eC && t.type === er.rbe.DM, eI = eP && (null == o ? true : o.primaryGuild) != null, ew = (0, f.bG)([Z.Ay], () => Z.Ay.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: eM,
    blocked: eR
  } = (0, f.cf)([X.A], () => ({
    ignored: X.A.isIgnored(t.getRecipientId()),
    blocked: X.A.isBlocked(t.getRecipientId())
  })), eD = eP && eM, eL = eP && eR, eU = (ew || eD || eL) && !(i || eb), {
    hasUnreadMessages: ek,
    lastMessageId: eG
  } = (0, f.cf)([Y.Ay], () => ({
    hasUnreadMessages: Y.Ay.getMentionCount(t.id) > 0,
    lastMessageId: Y.Ay.lastMessageId(t.id)
  })), eQ = (0, C.Ay)(t), eF = (0, f.bG)([R.A], () => R.A.isFavorite(t.id)), {
    showMessagePreviews: eH,
    prioritizeOverStatus: eq
  } = G.t.useConfig({
    location: "PrivateChannel"
  }), eV = (0, f.bG)([J.A], () => J.A.hidePersonalInformation), eB = (0, k.r)(t.guild_id), ez = (0, V.e)({
    timestamp: et.default.extractTimestamp(null != eG ? eG : t.id)
  }), eK = l.useRef(null), eW = null != W && (i || eb || ev), eY = () => {
    eg(true)
  }, eX = () => {
    eg(false)
  }, eJ = () => {
    ex(true)
  }, e$ = () => {
    ex(false)
  }, eZ = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), g.A.closePrivateChannel(t.id, i, n)
  }, e0 = () => {
    g.A.preload(er.ME, t.id)
  }, e1 = e => {
    e.stopPropagation()
  }, e2 = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = eO.current) || t.click()
    }
  }, e9 = e => {
    let l = "contextmenu" === e.type ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    eh(true), t.isMultiUserDM() ? (0, A.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("99011"), n.e("60200"), n.e("48402")]).then(n.bind(n, 4027));
      return n => (0, r.jsx)(e, ea(es({}, n), {
        channel: t,
        selected: i
      }))
    }, {
      impressionName: l,
      noBlurEvent: true,
      onClose: () => eh(false)
    }) : (0, A.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("99011"), n.e("29534"), n.e("33818"), n.e("39778"), n.e("71287")]).then(n.bind(n, 385913));
      return n => (0, r.jsx)(e, ea(es({}, n), {
        user: o,
        channel: t,
        channelSelected: i
      }))
    }, {
      impressionName: l,
      onClose: () => eh(false)
    })
  }, e6 = e => {
    e.preventDefault(), e.stopPropagation();
    let l = el.intl.formatToPlainString(el.t.hJ5Ap4, {
        name: eQ
      }),
      i = el.intl.format(el.t.SSIVOu, {
        name: eQ
      });
    t.isManaged() && (l = el.intl.formatToPlainString(el.t.hVGjEW, {
      name: eQ
    }), i = el.intl.format(el.t.IK1Qvs, {
      name: eQ
    })), (0, b.mMO)(async () => {
      let {
        default: e
      } = await n.e("37803").then(n.bind(n, 148166));
      return t => (0, r.jsx)(e, es({
        header: l,
        body: i,
        onSubmit: eZ
      }, t))
    })
  }, e7 = (0, r.jsx)(M.A, {
    userName: eQ,
    displayNameStyles: null == o ? true : o.displayNameStyles,
    effectDisplayType: eb || i || ev ? w.G.ANIMATED : w.G.PLAIN,
    loop: eb,
    boldFontOpacity: .9
  }), e3 = eI ? (0, r.jsxs)(r.Fragment, {
    children: [e7, (0, r.jsx)(L.Ay, {
      primaryGuild: null == o ? true : o.primaryGuild,
      userId: null == o ? true : o.id,
      inline: true,
      disableGuildProfile: true,
      className: s()(ei.fc, {
        [ei.Y_]: eU
      })
    })]
  }) : e7, e4 = l.useRef(null), e8 = (0, I.W)({
    location: "PrivateChannel"
  }) && (null == o ? true : o.displayNameStyles) != null, e5 = [(0, T.Ay)({
    channel: t,
    unread: ek
  }), (0, T.r2)({
    channel: t,
    muted: ew,
    userStatus: F
  })].filter(Boolean).join(", "), te = (0, r.jsxs)(r.Fragment, {
    children: [eF && !ev ? (0, r.jsx)(ep, {}) : null, eD ? (0, r.jsx)(em, {}) : null, eL ? (0, r.jsx)(ef, {}) : null]
  }), tt = eH ? (0, r.jsxs)("div", {
    className: ei.Ym,
    children: [te, eB !== U.P.ALL || eV ? null : (0, r.jsx)(b.Text, {
      variant: "text-xs/normal",
      color: i ? "interactive-text-active" : ek ? "interactive-text-default" : "text-muted",
      className: ei.vE,
      children: ez
    })]
  }) : null;
  return (0, r.jsx)(p.tG, {
    id: t.id,
    children: e => {
      let n, l, d, {
          role: p
        } = e,
        f = eo(e, ["role"]);
      return (0, r.jsxs)(P.A, {
        className: s()(ei.Ix, ei.dm),
        role: p,
        focusProps: ea(es({}, ec), {
          focusTarget: eO,
          ringTarget: ej
        }),
        ref: ej,
        onMouseEnter: eY,
        onMouseLeave: eX,
        onMouseDown: e0,
        onFocus: eJ,
        onBlur: e$,
        onContextMenu: e9,
        "aria-setsize": ey,
        "aria-posinset": en,
        children: [ek ? (0, r.jsx)("div", {
          className: s()(ei.dM, {
            [ei.SU]: eU
          })
        }) : null, (0, r.jsxs)(b.HG8, {
          className: s()(ei.bG, {
            [ei.Q2]: i || ev
          }),
          as: "div",
          onClick: e2,
          muted: eU,
          selected: i,
          children: [(0, r.jsx)(q.A, {
            nameplate: eW ? W : true,
            selected: i,
            hovered: eb,
            content: e4,
            placement: H.u.CHANNEL
          }), (0, r.jsx)(c.N_, ea(es({
            innerRef: eO,
            to: er.BVt.CHANNEL(er.ME, t.id),
            className: ei.nf,
            "aria-label": e5
          }, f), {
            children: (0, r.jsx)(S.A, {
              ref: e4,
              avatar: (() => {
                let e = b._3J.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && null == t.icon) return (0, r.jsx)(D.A, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: Q,
                    status: F
                  });
                  else return (0, r.jsx)(eu, ea(es({}, eT), {
                    src: (0, _.Y)(t),
                    "aria-hidden": true,
                    size: e,
                    status: Q ? er.clD.ONLINE : F,
                    isTyping: Q
                  }));
                u()(null != o, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return o.isSystemUser() || (n = (0, x.A)(m) ? er.clD.STREAMING : F), (0, r.jsx)(eu, ea(es({}, eT), {
                  size: b._3J.SIZE_32,
                  src: eS,
                  avatarDecoration: eN,
                  status: n,
                  isMobile: K,
                  isTyping: Q,
                  "aria-label": o.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: ek && !eU,
              muted: eU,
              subText: (n = (null == m ? true : m.some(e => e.type !== er.$pd.CUSTOM_STATUS)) === true, l = eH && null != $ && !eV ? (0, r.jsx)("div", {
                className: ei.W$,
                children: (0, r.jsx)(B.X, {
                  channel: t,
                  message: $
                })
              }) : null, d = null != $ && null != l && (1 > (0, a.A)(new Date, $.timestamp) || eq && !n || ek), t.isSystemDM() ? (0, r.jsx)("div", {
                className: ei.W$,
                children: (0, N.A)(t.id) ? el.intl.string(el.t.FL5T01) : el.intl.string(el.t.NnY5lc)
              }) : t.isMultiUserDM() ? null != l ? l : (0, r.jsx)("div", {
                className: ei.W$,
                children: el.intl.format(el.t.CxSA5N, {
                  members: t.recipients.length + 1
                })
              }) : !d && (0, h.A)({
                activities: m,
                status: F,
                applicationStream: v,
                voiceChannel: O
              }) ? (0, r.jsx)(E.A, {
                user: o,
                activities: m,
                voiceChannel: O,
                applicationStream: v,
                animateEmoji: eb || eA || ev,
                textClassName: ei.XD,
                iconClassName: eU ? ei.tG : true
              }) : null != l ? l : null),
              subtextClassName: s()(ei.PL, {
                [ei.nF]: eW,
                [ei.un]: eH
              }),
              nameClassName: ei.Xh,
              name: (0, r.jsx)(y.A, {
                className: s()(ei.uN, {
                  [ei.e8]: e8
                }),
                children: e3
              }),
              decorators: t.isSystemDM() ? (0, r.jsx)(j.A, {
                className: ei.G$,
                type: j.A.Types.SYSTEM_DM,
                verified: true
              }) : null,
              rightDecorators: tt,
              withDisplayNameStyles: e8
            })
          })), (0, r.jsxs)("div", {
            className: s()(ei._q, {
              [ei.EY]: eW && !eH
            }),
            children: [!eH && te, (0, r.jsx)(ed, {
              icon: b.PGe,
              "aria-label": e_ ? el.intl.string(el.t["26C4oi"]) : el.intl.string(el.t.jsvgc3),
              onClick: e_ ? e6 : eZ,
              onMouseDown: e1,
              nameplate: W,
              reducedClickTarget: true,
              visibleElementRef: eK
            })]
          })]
        })]
      })
    }
  })
}
let eg = 21552 == require.j ? e => {
  let {
    channel: t,
    selected: n
  } = e, l = eo(e, ["channel", "selected"]), i = (0, f.bG)([ee.default], () => ee.default.getUser(t.getRecipientId())), s = null == i ? true : i.id, a = (0, f.cf)([W.A, K.A], () => {
    let e;
    if (t.isMultiUserDM()) {
      let n = W.A.getState().statuses;
      t.recipients.some(e => n[e] === er.clD.ONLINE) && (e = er.clD.ONLINE)
    } else null != s && (e = W.A.getStatus(s));
    return {
      status: e,
      activities: null != s ? W.A.getActivities(s) : null,
      applicationStream: null != s ? K.A.getAnyStreamForUser(s) : null,
      isMobile: null != s && W.A.isMobileOnline(s)
    }
  }, [t, s]), {
    voiceActivityStatusEnabled: o
  } = (0, v.G)({
    location: "PrivateChannel"
  }), {
    voiceChannel: u
  } = (0, O.A)({
    userId: s
  }), c = (0, Q.r)({
    user: i
  }), d = (0, f.bG)([ee.default, $.A], () => t.isMultiUserDM() ? et.default.keys($.A.getTypingUsers(t.id)).some(e => {
    var t;
    return e !== (null == (t = ee.default.getCurrentUser()) ? true : t.id)
  }) : null != i && $.A.isTyping(t.id, t.getRecipientId()), [t, i]), {
    showMessagePreviews: p
  } = G.t.useConfig({
    location: "PrivateChannel"
  }), m = (0, k.A)(t, {
    disabled: !p
  });
  return t.isMultiUserDM() ? (0, r.jsx)(eb, es({
    channel: t,
    selected: n,
    isTyping: d,
    status: a.status === er.clD.ONLINE ? er.clD.ONLINE : true,
    latestMessage: m
  }, l)) : (0, r.jsx)(eb, es({
    channel: t,
    selected: n,
    user: i,
    voiceChannel: o ? u : true,
    isTyping: d,
    nameplate: c,
    latestMessage: m
  }, l, a))
} : null