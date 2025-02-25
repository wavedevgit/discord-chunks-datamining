/** Chunk was on 50751 **/
n.d(t, {
  L: () => ed,
  N3: () => eo,
  Ox: () => ei,
  SE: () => er,
  aG: () => es,
  c_: () => ea,
  sm: () => el
});
var i = n(200651),
  r = n(192379),
  o = n(691324),
  l = n(442837),
  s = n(685072),
  a = n(400354),
  u = n(652844),
  c = n(864094),
  d = n(582019),
  p = n(75735),
  h = n(481060),
  f = n(846027),
  m = n(239091),
  g = n(287734),
  O = n(571250),
  v = n(628581),
  y = n(659580),
  E = n(793865),
  b = n(55311),
  x = n(575175),
  j = n(933557),
  S = n(471445),
  I = n(44315),
  C = n(74299),
  Z = n(803647),
  N = n(565138),
  w = n(917405),
  _ = n(763296),
  P = n(603074),
  T = n(879815),
  A = n(189771),
  D = n(294629),
  k = n(67844),
  L = n(544384),
  R = n(892807),
  M = n(560688),
  W = n(871499),
  V = n(199902),
  z = n(314897),
  U = n(430824),
  F = n(131951),
  G = n(19780),
  Y = n(944486),
  B = n(594174),
  H = n(979651),
  Q = n(444295),
  K = n(388627),
  X = n(810632),
  J = n(981631),
  q = n(388032),
  $ = n(322487);

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function et(e) {
  let t = r.useRef(null);
  return r.useEffect(() => {
    if (e) {
      var n;
      null === (n = t.current) || void 0 === n || n.call(t), t.current = null
    }
  }, [e]), e => (t.current = e, e)
}

function en(e) {
  var {
    isToggled: t,
    disabled: n,
    iconComponent: r,
    iconColor: o,
    tooltip: l,
    defaultColor: s = "primaryDark",
    highlightedColor: a = "white",
    popoutOpen: u,
    onClick: c,
    popoutDisabled: d,
    onPopoutClick: p,
    onMouseEnter: h,
    onMouseLeave: f,
    onContextMenu: m,
    fullRegionButton: g
  } = e, O = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        o = Object.keys(e);
      for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["isToggled", "disabled", "iconComponent", "iconColor", "tooltip", "defaultColor", "highlightedColor", "popoutOpen", "onClick", "popoutDisabled", "onPopoutClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "fullRegionButton"]);
  return (0, i.jsx)(W.d, {
    onClick: null != c ? c : () => {},
    color: t ? a : s,
    className: $.button,
    disabled: n,
    popoutOpen: u,
    popoutDisabled: d,
    label: l,
    fullRegionButton: g,
    forceGroupedButtons: !0,
    onMouseEnter: e => {
      null == h || h(e)
    },
    onMouseLeave: e => {
      null == f || f(e)
    },
    ignoreColorForCaret: !u,
    iconComponent: r,
    iconColor: o,
    isActive: t,
    onContextMenu: m,
    onPopoutClick: p,
    "aria-label": O["aria-label"]
  })
}

function ei(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, {
    suppress: l,
    selfMute: s,
    mute: a
  } = (0, D.Z)(t), c = s || a || l, d = (0, v.Z)(s, a, l, !1), {
    Component: p,
    play: f,
    events: m
  } = (0, u.O)(c ? "unmute" : "mute");
  r.useEffect(() => () => f(), [f, c]);
  let g = et(n),
    O = e => t => {
      e(t), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
        type: Q.Qu.MICROPHONE,
        value: Q.bk.SETTINGS_OPENED
      })
    };
  return (0, i.jsx)(h.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(y.default, {
        onClose: g(t),
        renderInputDevices: !0,
        renderInputModes: !0,
        appContext: J.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: h.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(en, {
        iconComponent: p,
        tooltip: d,
        onClick: () => {
          (0, x.Z)(a, l, J.jXE.OVERLAY), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
            type: Q.Qu.MICROPHONE,
            value: c ? Q.bk.ENABLED : Q.bk.DISABLED,
            userId: z.default.getId()
          })
        },
        onPopoutClick: O(n),
        onContextMenu: O(n),
        popoutOpen: r,
        iconColor: c ? (0, I.Lq)(o.I.RED_400) : void 0,
        onMouseEnter: () => {
          m.onMouseEnter()
        },
        onMouseLeave: () => {
          m.onMouseLeave()
        }
      })
    }
  })
}

function er(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, {
    selfDeaf: o,
    deaf: l
  } = (0, T.Z)(t), s = o || l, {
    Component: u,
    play: c,
    events: {
      onMouseEnter: d,
      onMouseLeave: p
    }
  } = (0, a.l)(s ? "undeafen" : "deafen"), f = l ? h.Vm4 : u;
  r.useEffect(() => () => c(), [s, c]);
  let m = () => {
      (0, b.Z)(l, J.jXE.OVERLAY), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
        type: Q.Qu.AUDIO,
        value: l ? Q.bk.ENABLED : Q.bk.DISABLED,
        userId: z.default.getId()
      })
    },
    g = e => t => {
      e(t), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
        type: Q.Qu.AUDIO,
        value: Q.bk.SETTINGS_OPENED
      })
    },
    v = et(n);
  return (0, i.jsx)(h.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(y.default, {
        onClose: v(t),
        renderOutputDevices: !0,
        renderOutputVolume: !0,
        appContext: J.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: h.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(en, {
        iconComponent: f,
        tooltip: (0, O.Z)(o, l, !1),
        isToggled: s,
        onClick: m,
        onContextMenu: g(n),
        onMouseEnter: d,
        onMouseLeave: p,
        onPopoutClick: g(n),
        popoutOpen: r
      })
    }
  })
}

function eo(e) {
  var t;
  let {
    voiceChannel: n,
    locked: o
  } = e, s = (0, l.e7)([F.Z], () => F.Z.isVideoEnabled()), a = (0, l.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]), u = null === (t = null == a ? void 0 : a.disabled) || void 0 === t || t, c = !1 === u, d = (0, A.Z)(n), m = e => {
    f.Z.setVideoEnabled(e)
  }, g = () => {
    c ? m(!0) : (0, M.Z)()
  }, O = e => t => {
    e(t), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
      type: Q.Qu.CAMERA,
      value: Q.bk.SETTINGS_OPENED
    })
  }, v = () => {
    u ? g() : m(!s), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
      type: Q.Qu.CAMERA,
      value: s ? Q.bk.DISABLED : Q.bk.ENABLED,
      userId: z.default.getId()
    })
  }, {
    Component: y,
    play: b,
    events: {
      onMouseEnter: x,
      onMouseLeave: j
    }
  } = (0, p.o)(s ? "disable" : "enable"), S = null != n ? (0, k.X)({
    enabled: s,
    cameraUnavailable: u,
    hasPermission: d,
    channel: n
  }) : void 0;
  r.useEffect(() => () => b(), [s, b]);
  let I = et(o),
    C = null == n || !d;
  return (0, i.jsx)(h.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(E.Z, {
        onClose: I(t),
        appContext: J.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: h.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(en, {
        iconComponent: y,
        tooltip: S,
        onClick: v,
        isToggled: s,
        highlightedColor: s ? "green" : "white",
        defaultColor: s ? "green" : "primaryDark",
        onPopoutClick: O(n),
        popoutOpen: r,
        onContextMenu: O(n),
        onMouseEnter: x,
        onMouseLeave: j,
        disabled: C
      })
    }
  })
}

function el(e) {
  let t, {
      voiceChannel: n,
      locked: o
    } = e,
    s = (0, l.e7)([B.default], () => B.default.getCurrentUser()),
    a = (0, A.Z)(n),
    u = (0, l.cj)([F.Z], () => (0, C.Z)(F.Z)),
    d = (0, l.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
    p = (0, X.B)(),
    f = () => {
      p(), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
        type: Q.Qu.GO_LIVE,
        value: Q.bk.ENABLED,
        userId: z.default.getId()
      })
    },
    m = null != d;
  if (m) t = q.NW.string(q.t.S5anIS);
  else if (null != n) {
    let e = (0, K.pL)();
    t = a ? null != e ? q.NW.format(q.t.AB5gT0, {
      game: e.name
    }) : q.NW.string(q.t.FeUKeH) : q.NW.string(q.t.uQn9Bw)
  }
  let g = () => {
      if (m) return (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
        type: Q.Qu.GO_LIVE,
        value: Q.bk.DISABLED,
        userId: z.default.getId()
      }), (0, Z.Z)(d, !1);
      f()
    },
    O = e => t => {
      e(t), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
        type: Q.Qu.SCREEN_SHARE,
        value: Q.bk.SETTINGS_OPENED
      })
    },
    {
      Component: v,
      events: {
        onMouseEnter: y,
        onMouseLeave: E
      },
      play: b
    } = (0, c.P)(m ? "disable" : "enable");
  r.useEffect(() => () => b(), [m, b]);
  let x = et(o);
  return (0, i.jsx)(h.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(L.Z, {
        channel: n,
        currentUser: s,
        activeStreams: m ? [d] : [],
        handleGoLive: f,
        onClose: x(t),
        appContext: J.IlC.OVERLAY,
        disableChangeWindows: !0
      })
    },
    align: "center",
    position: "top",
    animation: h.yRy.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: r
      } = e, {
        isShown: o
      } = n;
      return (0, i.jsx)(en, {
        iconComponent: v,
        tooltip: t,
        "aria-label": q.NW.string(q.t.FeUKeH),
        isToggled: m,
        onClick: g,
        popoutOpen: o,
        popoutDisabled: !m,
        onPopoutClick: O(r),
        onContextMenu: O(r),
        onMouseEnter: y,
        onMouseLeave: E,
        highlightedColor: m ? "green" : "white",
        defaultColor: m ? "green" : "primaryDark",
        disabled: !u || !a
      })
    }
  })
}

function es(e) {
  var t;
  let {
    voiceChannel: r,
    locked: o
  } = e, s = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null, {
    mute: a,
    suppress: u
  } = (0, D.Z)(r), c = (0, l.e7)([F.Z], () => F.Z.isDeaf()), p = null == r || a || u || c;

  function f(e) {
    null != s && ((0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
      type: Q.Qu.SOUNDBOARD,
      value: Q.bk.SETTINGS_OPENED
    }), (0, m.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, ee({
        guildId: s
      }, t))
    }))
  }
  let {
    Component: g,
    events: {
      onClick: O,
      onMouseEnter: v,
      onMouseLeave: y
    }
  } = (0, d.j)(), E = et(o), b = (0, l.e7)([_.Z, z.default], () => _.Z.isUserPlayingSounds(z.default.getId()), []);
  return (0, i.jsx)(h.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return p || null == r ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(P.Z, {
        guildId: s,
        channel: r,
        onClose: E(t),
        analyticsSource: "action bar button"
      })
    },
    align: "center",
    position: "top",
    animation: h.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(en, {
        iconComponent: g,
        tooltip: a ? q.NW.string(q.t["Ox4/zc"]) : u ? q.NW.string(q.t["+YBKYG"]) : c ? q.NW.string(q.t.X1lQlp) : void 0,
        onClick: e => {
          O(), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
            type: Q.Qu.SOUNDBOARD,
            value: Q.bk.PANEL_OPENED,
            userId: z.default.getId()
          }), n(e)
        },
        highlightedColor: b ? "green" : "white",
        defaultColor: b ? "green" : "primaryDark",
        onContextMenu: f,
        onMouseEnter: v,
        onMouseLeave: y,
        isToggled: r,
        popoutOpen: r,
        disabled: p
      })
    }
  })
}

function ea(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, r = (0, l.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)), o = () => {
    (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
      type: Q.Qu.CALL_BUTTON,
      value: Q.bk.DISABLED,
      userId: z.default.getId()
    }), r && g.default.disconnect()
  }, a = e => {
    g.default.selectVoiceChannel(e.id), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
      type: Q.Qu.CALL_BUTTON,
      value: Q.bk.ENABLED,
      userId: z.default.getId()
    })
  }, u = e => t => {
    e(t), (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
      type: Q.Qu.CALL_BUTTON,
      value: Q.bk.SETTINGS_OPENED
    })
  }, {
    Component: c,
    events: {
      onMouseEnter: d,
      onMouseLeave: p
    }
  } = (0, s.K)(), f = et(n), m = r ? c : h.Csw;
  return (0, i.jsx)(h.yRy, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(R.Z, {
        currentVoiceChannel: t,
        onClose: f(n),
        onSelect: a
      })
    },
    align: "center",
    position: "top",
    animation: h.yRy.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: l
      } = e, {
        isShown: s
      } = n;
      return (0, i.jsx)(en, {
        iconComponent: m,
        tooltip: null != t ? q.NW.string(q.t["6vrfgo"]) : q.NW.string(q.t.S0W8Z2),
        onClick: r ? o : u(l),
        defaultColor: r ? "disconnect" : "primaryDark",
        onMouseEnter: d,
        onMouseLeave: p,
        onContextMenu: u(l),
        isToggled: s,
        onPopoutClick: r ? u(l) : void 0,
        popoutOpen: s
      })
    }
  })
}

function eu(e) {
  let {
    voiceChannel: t
  } = e, n = (0, l.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
  switch (!0) {
    case t.isGroupDM() || t.isDM():
    case t.isDM():
      return null;
    case null != n:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: $.separatorDot
        }), (0, i.jsxs)("div", {
          className: $.guildIconContainer,
          children: [(0, i.jsx)(N.Z, {
            guild: n,
            size: N.Z.Sizes.SMOL,
            className: $.guildIcon
          }), (0, i.jsx)(h.Text, {
            tag: "div",
            variant: "text-xs/semibold",
            color: "text-primary",
            className: $.guildName,
            children: n.name
          })]
        })]
      });
    default:
      return null
  }
}

function ec(e) {
  let {
    voiceChannel: t
  } = e, n = (0, S.KS)(t), r = (0, j.ZP)(t);
  return (0, i.jsxs)("div", {
    className: $.voiceChannelNameContainer,
    children: [null != n && (0, i.jsx)(h.Text, {
      tag: "div",
      color: "text-muted",
      variant: "text-xs/normal",
      className: $.channelIcon,
      children: (0, i.jsx)(n, {
        size: "sm",
        color: "currentColor"
      })
    }), null != r && (0, i.jsx)(h.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      className: $.channelName,
      children: r
    })]
  })
}

function ed(e) {
  var t, n;
  let {
    voiceChannel: r
  } = e, o = null == r ? void 0 : r.id, s = (0, l.cj)([G.Z], () => ({
    channelId: G.Z.getChannelId(),
    quality: G.Z.getQuality(),
    state: G.Z.getState(),
    lastPing: G.Z.getLastPing()
  })), a = null != o, u = (0, l.e7)([H.Z], () => null != o && H.Z.hasVideo(o), [o]);
  return a && null != r && (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(w.Z, (t = ee({}, s), n = n = {
      hasVideo: u,
      connectionStatusTextVariant: "text-xs/semibold"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), (0, i.jsx)(eu, {
      voiceChannel: r
    }), (0, i.jsx)("div", {
      className: $.separatorDot
    }), (0, i.jsx)(ec, {
      voiceChannel: r
    })]
  })
}