/** Chunk was on 20725 **/
/** chunk id: 701363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => ec,
  th: () => eu,
  w_: () => er,
  z9: () => eo
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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
  Chunk111864 = require("./111864.js"),
  Chunk967054 = require("./967054.js"),
  Chunk226540 = require("./226540.js"),
  Chunk227 = require("./227.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk616356 = require("./616356.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk741961 = require("./741961.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk45119 = require("./45119.js");

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function et(e, t) {
  if (null == e) return {};
  var n, l, r, s = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (s[l] = e[l]);
    return s
  }
  if (s = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        s = Object.getOwnPropertyNames(e);
      for (l = 0; l < s.length; l++) n = s[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }(e, t), Object.getOwnPropertySymbols)
    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (s[l] = e[l]);
  return s
}
let en = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF,
  el = {
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    }
  },
  er = e => {
    let {
      nameplate: t,
      icon: n,
      forceShow: r = false,
      reducedClickTarget: s = false,
      visibleElementRef: a
    } = e, o = et(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]), u = (0, U.K)(t);
    return (0, l.jsx)(b.DUT, ee(Z({
      className: i()(X.b, {
        [X.DQ]: null != t,
        [X.by]: r,
        [X.wY]: s
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
      children: (0, l.jsx)("div", {
        ref: a,
        className: i()({
          [X.PJ]: null != t
        }),
        children: (0, l.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: i()(X.ut, {
            [X.Uq]: null != t
          })
        })
      })
    }))
  },
  es = () => (0, l.jsx)(b.Gg5, {
    size: "xs",
    color: "currentColor",
    className: X.wB
  }),
  ei = () => (0, l.jsx)(b.G3N, {
    size: "xs",
    color: "currentColor",
    className: X.wB
  }),
  ea = () => (0, l.jsx)(b.KTN, {
    size: "xs",
    color: "currentColor",
    className: X.wB
  }),
  eo = e => {
    let {
      route: t,
      selected: n,
      icon: r,
      iconClassName: s,
      interactiveClassName: a,
      text: o,
      children: c,
      locationState: d,
      onClick: f,
      className: m,
      role: y,
      "aria-posinset": E,
      "aria-setsize": v,
      listItemRef: A
    } = e, S = et(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
    return (0, l.jsx)(C.A, {
      className: i()(X.Ix, {
        [X.Ij]: p.Fr
      }, m),
      onClick: f,
      role: y,
      focusProps: Z({
        within: true
      }, el),
      "aria-posinset": E,
      "aria-setsize": v,
      ref: A,
      children: (0, l.jsx)(b.HG8, {
        as: "div",
        selected: n,
        className: i()(a, X.bG, X.$J, {
          [X.Q2]: n
        }),
        children: (0, l.jsxs)(u.N_, ee(Z({
          to: {
            pathname: t,
            state: d
          },
          className: X.nf
        }, S), {
          children: [(0, l.jsx)(x.A, {
            muted: false,
            avatar: (0, l.jsx)(r, {
              size: "refresh_sm",
              className: i()(X.e_, s),
              color: "currentColor"
            }),
            name: o,
            innerClassName: X.xx
          }), c]
        }))
      })
    })
  };

function eu(e) {
  let {
    channel: t,
    selected: s = false,
    user: a,
    activities: p,
    applicationStream: A,
    voiceChannel: O,
    isTyping: L,
    status: U,
    isMobile: F,
    nameplate: q,
    ref: B,
    "aria-posinset": K,
    "aria-setsize": W
  } = e, [Y, eo] = r.useState(false), [eu, ec] = r.useState(false), [ed, ep] = r.useState(false), ef = r.useRef(null), em = r.useRef(null), eb = null != B ? B : em, {
    avatarSrc: ey,
    avatarDecorationSrc: eE,
    eventHandlers: ev
  } = (0, k.A)({
    userId: null == a ? true : a.id,
    size: b._3J.SIZE_32,
    animateOnHover: !(s || Y || eu || ed)
  }), eA = t.isMultiUserDM(), eS = t.isSystemDM(), eO = !eA && !eS && t.type === $.rbe.DM, ej = eO && (null == a ? true : a.primaryGuild) != null, eh = (0, f.bG)([z.Ay], () => z.Ay.isChannelMuted(t.getGuildId(), t.id)), {
    ignored: ex,
    blocked: eg
  } = (0, f.cf)([V.A], () => ({
    ignored: V.A.isIgnored(t.getRecipientId()),
    blocked: V.A.isBlocked(t.getRecipientId())
  })), eN = eO && ex, eT = eO && eg, e_ = (eh || eN || eT) && !(s || Y), eC = (0, f.bG)([H.Ay], () => H.Ay.getMentionCount(t.id) > 0), eP = (0, _.Ay)(t), eI = (0, f.bG)([M.A], () => M.A.isFavorite(t.id)), ew = r.useRef(null), eM = null != q && (s || Y || ed), eR = () => {
    eo(true)
  }, eD = () => {
    eo(false)
  }, eL = () => {
    ec(true)
  }, eU = () => {
    ec(false)
  }, eQ = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != e && (e.preventDefault(), e.stopPropagation()), y.A.closePrivateChannel(t.id, s, n)
  }, eG = () => {
    y.A.preload($.ME, t.id)
  }, ek = e => {
    e.stopPropagation()
  }, eF = e => {
    if (e.target === e.currentTarget) {
      var t;
      null == (t = ef.current) || t.click()
    }
  }, eq = e => {
    let r = "contextmenu" === e.type ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
    ep(true), t.isMultiUserDM() ? (0, E.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("99011"), n.e("60200"), n.e("48402")]).then(n.bind(n, 4027));
      return n => (0, l.jsx)(e, ee(Z({}, n), {
        channel: t,
        selected: s
      }))
    }, {
      impressionName: r,
      noBlurEvent: true,
      onClose: () => ep(false)
    }) : (0, E.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("99011"), n.e("29534"), n.e("33818"), n.e("39778"), n.e("71287")]).then(n.bind(n, 385913));
      return n => (0, l.jsx)(e, ee(Z({}, n), {
        user: a,
        channel: t,
        channelSelected: s
      }))
    }, {
      impressionName: r,
      onClose: () => ep(false)
    })
  }, eH = e => {
    e.preventDefault(), e.stopPropagation();
    let r = J.intl.formatToPlainString(J.t.hJ5Ap4, {
        name: eP
      }),
      s = J.intl.format(J.t.SSIVOu, {
        name: eP
      });
    t.isManaged() && (r = J.intl.formatToPlainString(J.t.hVGjEW, {
      name: eP
    }), s = J.intl.format(J.t.IK1Qvs, {
      name: eP
    })), (0, b.mMO)(async () => {
      let {
        default: e
      } = await n.e("37803").then(n.bind(n, 148166));
      return t => (0, l.jsx)(e, Z({
        title: r,
        body: s,
        onSubmit: eQ
      }, t))
    })
  }, eV = (0, l.jsx)(w.A, {
    userName: eP,
    displayNameStyles: null == a ? true : a.displayNameStyles,
    effectDisplayType: Y || s || ed ? I.G.ANIMATED : I.G.PLAIN,
    loop: Y,
    boldFontOpacity: .9
  }), eB = ej ? (0, l.jsxs)(l.Fragment, {
    children: [eV, (0, l.jsx)(D.Ay, {
      primaryGuild: null == a ? true : a.primaryGuild,
      userId: null == a ? true : a.id,
      inline: true,
      disableGuildProfile: true,
      className: i()(X.fc, {
        [X.Y_]: e_
      })
    })]
  }) : eV, ez = r.useRef(null), eK = (0, P.W)({
    location: "PrivateChannel"
  }) && (null == a ? true : a.displayNameStyles) != null, eW = [(0, N.Ay)({
    channel: t,
    unread: eC
  }), (0, N.r2)({
    channel: t,
    muted: eh,
    userStatus: U
  })].filter(Boolean).join(", ");
  return (0, l.jsx)(d.tG, {
    id: t.id,
    children: e => {
      let {
        role: n
      } = e, r = et(e, ["role"]);
      return (0, l.jsxs)(C.A, {
        className: i()(X.Ix, X.dm),
        role: n,
        focusProps: ee(Z({}, el), {
          focusTarget: ef,
          ringTarget: eb
        }),
        ref: eb,
        onMouseEnter: eR,
        onMouseLeave: eD,
        onMouseDown: eG,
        onFocus: eL,
        onBlur: eU,
        onContextMenu: eq,
        "aria-setsize": W,
        "aria-posinset": K,
        children: [eC ? (0, l.jsx)("div", {
          className: i()(X.dM, {
            [X.SU]: e_
          })
        }) : null, (0, l.jsxs)(b.HG8, {
          className: i()(X.bG, {
            [X.Q2]: s || ed
          }),
          as: "div",
          onClick: eF,
          muted: e_,
          selected: s,
          children: [(0, l.jsx)(G.A, {
            nameplate: eM ? q : true,
            selected: s,
            hovered: Y,
            content: ez,
            placement: Q.u.CHANNEL
          }), (0, l.jsx)(u.N_, ee(Z({
            innerRef: ef,
            to: $.BVt.CHANNEL($.ME, t.id),
            className: X.nf,
            "aria-label": eW
          }, r), {
            children: (0, l.jsx)(x.A, {
              ref: ez,
              avatar: (() => {
                let e = b._3J.SIZE_32;
                if (t.isMultiUserDM())
                  if (t.recipients.length >= 2 && null == t.icon) return (0, l.jsx)(R.A, {
                    "aria-hidden": true,
                    recipients: t.recipients,
                    size: e,
                    isTyping: L,
                    status: U
                  });
                  else return (0, l.jsx)(en, ee(Z({}, ev), {
                    src: (0, T.Y)(t),
                    "aria-hidden": true,
                    size: e,
                    status: L ? $.clD.ONLINE : U,
                    isTyping: L
                  }));
                o()(null != a, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                let n = null;
                return a.isSystemUser() || (n = (0, v.A)(p) ? $.clD.STREAMING : U), (0, l.jsx)(en, ee(Z({}, ev), {
                  size: b._3J.SIZE_32,
                  src: ey,
                  avatarDecoration: eE,
                  status: n,
                  isMobile: F,
                  isTyping: L,
                  "aria-label": a.username,
                  statusTooltip: true
                }))
              })(),
              highlighted: eC && !e_,
              muted: e_,
              subText: t.isSystemDM() ? (0, l.jsx)("div", {
                className: X.W$,
                children: (0, g.A)(t.id) ? J.intl.string(J.t.FL5T01) : J.intl.string(J.t.NnY5lc)
              }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
                className: X.W$,
                children: J.intl.format(J.t.CxSA5N, {
                  members: t.recipients.length + 1
                })
              }) : (0, S.A)({
                activities: p,
                status: U,
                applicationStream: A,
                voiceChannel: O
              }) ? (0, l.jsx)(j.A, {
                user: a,
                activities: p,
                voiceChannel: O,
                applicationStream: A,
                animateEmoji: Y || eu || ed,
                textClassName: X.XD,
                iconClassName: e_ ? X.tG : true
              }) : null,
              name: (0, l.jsx)(m.A, {
                className: i()(X.uN, {
                  [X.e8]: eK
                }),
                children: eB
              }),
              decorators: t.isSystemDM() ? (0, l.jsx)(h.A, {
                className: X.G$,
                type: h.A.Types.SYSTEM_DM,
                verified: true
              }) : null,
              withDisplayNameStyles: eK
            })
          })), (0, l.jsxs)("div", {
            className: i()(X._q, {
              [X.EY]: eM
            }),
            children: [eI && !ed ? (0, l.jsx)(es, {}) : null, eN ? (0, l.jsx)(ei, {}) : null, eT ? (0, l.jsx)(ea, {}) : null, (0, l.jsx)(er, {
              icon: b.PGe,
              "aria-label": eA ? J.intl.string(J.t["26C4oi"]) : J.intl.string(J.t.jsvgc3),
              onClick: eA ? eH : eQ,
              onMouseDown: ek,
              nameplate: q,
              reducedClickTarget: true,
              visibleElementRef: ew
            })]
          })]
        })]
      })
    }
  })
}
let ec = 21552 == require.j ? e => {
  let {
    channel: t,
    selected: n
  } = e, r = et(e, ["channel", "selected"]), s = (0, f.bG)([K.default], () => K.default.getUser(t.getRecipientId())), i = null == s ? true : s.id, a = (0, f.cf)([q.A, F.A], () => {
    let e;
    if (t.isMultiUserDM()) {
      let n = q.A.getState().statuses;
      t.recipients.some(e => n[e] === $.clD.ONLINE) && (e = $.clD.ONLINE)
    } else null != i && (e = q.A.getStatus(i));
    return {
      status: e,
      activities: null != i ? q.A.getActivities(i) : null,
      applicationStream: null != i ? F.A.getAnyStreamForUser(i) : null,
      isMobile: null != i && q.A.isMobileOnline(i)
    }
  }, [t, i]), {
    voiceActivityStatusEnabled: o
  } = (0, A.G)({
    location: "PrivateChannel"
  }), {
    voiceChannel: u
  } = (0, O.A)({
    userId: i
  }), c = (0, L.r)({
    user: s
  }), d = (0, f.bG)([K.default, B.A], () => t.isMultiUserDM() ? W.default.keys(B.A.getTypingUsers(t.id)).some(e => {
    var t;
    return e !== (null == (t = K.default.getCurrentUser()) ? true : t.id)
  }) : null != s && B.A.isTyping(t.id, t.getRecipientId()), [t, s]);
  return t.isMultiUserDM() ? (0, l.jsx)(eu, Z({
    channel: t,
    selected: n,
    isTyping: d,
    status: a.status === $.clD.ONLINE ? $.clD.ONLINE : true
  }, r)) : (0, l.jsx)(eu, Z({
    channel: t,
    selected: n,
    user: s,
    voiceChannel: o ? u : true,
    isTyping: d,
    nameplate: c
  }, r, a))
} : null