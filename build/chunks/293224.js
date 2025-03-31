/** Chunk was on 9424 **/
n.d(t, {
  L: () => eu,
  N3: () => er,
  Ox: () => en,
  SE: () => ei,
  aG: () => el,
  c_: () => ea,
  sm: () => eo
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(442837),
  l = n(685072),
  a = n(400354),
  s = n(652844),
  c = n(864094),
  u = n(582019),
  d = n(75735),
  p = n(481060),
  h = n(846027),
  f = n(239091),
  m = n(287734),
  g = n(571250),
  v = n(628581),
  y = n(659580),
  O = n(793865),
  b = n(55311),
  _ = n(575175),
  E = n(933557),
  x = n(471445),
  I = n(74299),
  j = n(803647),
  C = n(565138),
  S = n(917405),
  N = n(763296),
  Z = n(603074),
  w = n(879815),
  P = n(189771),
  T = n(294629),
  k = n(67844),
  D = n(544384),
  A = n(890828),
  L = n(560688),
  R = n(871499),
  W = n(199902),
  M = n(314897),
  z = n(430824),
  V = n(131951),
  U = n(19780),
  G = n(944486),
  F = n(594174),
  B = n(979651),
  H = n(145597),
  Y = n(444295),
  Q = n(388627),
  K = n(810632),
  X = n(981631),
  J = n(388032),
  q = n(9662);

function $(e) {
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

function ee(e) {
  let t = r.useRef(null);
  return r.useEffect(() => {
    if (e) {
      var n;
      null === (n = t.current) || void 0 === n || n.call(t), t.current = null
    }
  }, [e]), e => (t.current = e, e)
}

function et(e) {
  var {
    isActive: t,
    disabled: n,
    iconComponent: r,
    iconColor: o,
    tooltip: l,
    defaultColor: a = "primaryDark",
    highlightedColor: s = "primaryDark",
    caretColor: c,
    popoutOpen: u,
    onClick: d,
    popoutDisabled: p,
    onPopoutClick: h,
    onMouseEnter: f,
    onMouseLeave: m,
    onContextMenu: g,
    fullRegionButton: v
  } = e, y = function(e, t) {
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
  }(e, ["isActive", "disabled", "iconComponent", "iconColor", "tooltip", "defaultColor", "highlightedColor", "caretColor", "popoutOpen", "onClick", "popoutDisabled", "onPopoutClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "fullRegionButton"]);
  return (0, i.jsx)(R.d, {
    onClick: null != d ? d : () => {},
    color: t ? s : a,
    className: q.button,
    disabled: n,
    popoutOpen: u,
    popoutDisabled: p,
    label: l,
    fullRegionButton: v,
    forceGroupedButtons: !0,
    onMouseEnter: e => {
      null == f || f(e)
    },
    onMouseLeave: e => {
      null == m || m(e)
    },
    ignoreColorForCaret: !u,
    iconComponent: r,
    iconColor: o,
    caretColor: c,
    isActive: t,
    onContextMenu: g,
    onPopoutClick: h,
    "aria-label": y["aria-label"]
  })
}

function en(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, {
    suppress: o,
    selfMute: l,
    mute: a
  } = (0, T.Z)(t), c = l || a || o, u = (0, v.Z)(l, a, o, !1), {
    Component: d,
    play: h,
    events: f
  } = (0, s.O)(c ? "unmute" : "mute");
  r.useEffect(() => () => h(), [h, c]);
  let m = ee(n),
    g = e => t => {
      e(t), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
        type: Y.Qu.MICROPHONE,
        value: Y.bk.SETTINGS_OPENED
      })
    };
  return (0, i.jsx)(p.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(y.default, {
        onClose: m(t),
        renderInputDevices: !0,
        renderInputModes: !0,
        appContext: X.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: p.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(et, {
        iconComponent: d,
        isActive: c,
        highlightedColor: "red",
        tooltip: u,
        onClick: () => {
          (0, _.Z)(a, o, X.jXE.OVERLAY), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
            type: Y.Qu.MICROPHONE,
            value: c ? Y.bk.ENABLED : Y.bk.DISABLED,
            userId: M.default.getId()
          })
        },
        onPopoutClick: g(n),
        onContextMenu: g(n),
        popoutOpen: r,
        onMouseEnter: () => {
          f.onMouseEnter()
        },
        onMouseLeave: () => {
          f.onMouseLeave()
        }
      })
    }
  })
}

function ei(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, {
    selfDeaf: o,
    deaf: l
  } = (0, w.Z)(t), s = o || l, {
    Component: c,
    play: u,
    events: {
      onMouseEnter: d,
      onMouseLeave: h
    }
  } = (0, a.l)(s ? "undeafen" : "deafen"), f = l ? p.Vm4 : c;
  r.useEffect(() => () => u(), [s, u]);
  let m = () => {
      (0, b.Z)(l, X.jXE.OVERLAY), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
        type: Y.Qu.AUDIO,
        value: l ? Y.bk.ENABLED : Y.bk.DISABLED,
        userId: M.default.getId()
      })
    },
    v = e => t => {
      e(t), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
        type: Y.Qu.AUDIO,
        value: Y.bk.SETTINGS_OPENED
      })
    },
    O = ee(n);
  return (0, i.jsx)(p.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(y.default, {
        onClose: O(t),
        renderOutputDevices: !0,
        renderOutputVolume: !0,
        appContext: X.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: p.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(et, {
        iconComponent: f,
        tooltip: (0, g.Z)(o, l, !1),
        isActive: s,
        highlightedColor: "red",
        onClick: m,
        onContextMenu: v(n),
        onMouseEnter: d,
        onMouseLeave: h,
        onPopoutClick: v(n),
        popoutOpen: r
      })
    }
  })
}

function er(e) {
  var t;
  let {
    voiceChannel: n,
    locked: l
  } = e, a = (0, o.e7)([V.Z], () => V.Z.isVideoEnabled()), s = (0, o.e7)([V.Z], () => Object.values(V.Z.getVideoDevices())[0]), c = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t, u = !1 === c, f = (0, P.Z)(n), m = e => {
    h.Z.setVideoEnabled(e)
  }, g = () => {
    u ? m(!0) : (0, L.Z)()
  }, v = e => t => {
    e(t), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
      type: Y.Qu.CAMERA,
      value: Y.bk.SETTINGS_OPENED
    })
  }, y = () => {
    c ? g() : m(!a), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
      type: Y.Qu.CAMERA,
      value: a ? Y.bk.DISABLED : Y.bk.ENABLED,
      userId: M.default.getId()
    })
  }, {
    Component: b,
    play: _,
    events: {
      onMouseEnter: E,
      onMouseLeave: x
    }
  } = (0, d.o)(a ? "disable" : "enable"), I = null != n ? (0, k.X)({
    enabled: a,
    cameraUnavailable: c,
    hasPermission: f,
    channel: n
  }) : void 0;
  r.useEffect(() => () => _(), [a, _]);
  let j = ee(l),
    C = null == n || !f;
  return (0, i.jsx)(p.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(O.Z, {
        onClose: j(t),
        appContext: X.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: p.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(et, {
        iconComponent: b,
        tooltip: I,
        onClick: y,
        isActive: a,
        highlightedColor: "green",
        onPopoutClick: v(n),
        popoutOpen: r,
        onContextMenu: v(n),
        onMouseEnter: E,
        onMouseLeave: x,
        disabled: C
      })
    }
  })
}

function eo(e) {
  let t, {
      voiceChannel: n,
      locked: l
    } = e,
    a = (0, o.e7)([F.default], () => F.default.getCurrentUser()),
    s = (0, P.Z)(n),
    u = (0, o.cj)([V.Z], () => (0, I.Z)(V.Z)),
    d = (0, o.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
    h = (0, K.g)((0, H.getPID)()),
    f = () => {
      h(), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
        type: Y.Qu.GO_LIVE,
        value: Y.bk.ENABLED,
        userId: M.default.getId()
      })
    },
    m = null != d;
  if (m) t = J.NW.string(J.t.S5anIS);
  else if (null != n) {
    let e = (0, Q.pL)();
    t = s ? null != e ? J.NW.format(J.t.AB5gT0, {
      game: e.name
    }) : J.NW.string(J.t.FeUKeH) : J.NW.string(J.t.uQn9Bw)
  }
  let g = () => {
      if (m) return (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
        type: Y.Qu.GO_LIVE,
        value: Y.bk.DISABLED,
        userId: M.default.getId()
      }), (0, j.Z)(d, !1);
      f()
    },
    v = e => t => {
      e(t), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
        type: Y.Qu.SCREEN_SHARE,
        value: Y.bk.SETTINGS_OPENED
      })
    },
    {
      Component: y,
      events: {
        onMouseEnter: O,
        onMouseLeave: b
      },
      play: _
    } = (0, c.P)(m ? "disable" : "enable");
  r.useEffect(() => () => _(), [m, _]);
  let E = ee(l);
  return (0, i.jsx)(p.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(D.Z, {
        channel: n,
        currentUser: a,
        activeStreams: m ? [d] : [],
        handleGoLive: f,
        onClose: E(t),
        appContext: X.IlC.OVERLAY,
        disableChangeWindows: !0
      })
    },
    align: "center",
    position: "top",
    animation: p.yRy.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: r
      } = e, {
        isShown: o
      } = n;
      return (0, i.jsx)(et, {
        iconComponent: y,
        tooltip: t,
        "aria-label": J.NW.string(J.t.FeUKeH),
        isActive: m,
        highlightedColor: "green",
        onClick: g,
        popoutOpen: o,
        popoutDisabled: !m,
        onPopoutClick: v(r),
        onContextMenu: v(r),
        onMouseEnter: O,
        onMouseLeave: b,
        disabled: !u || !s
      })
    }
  })
}

function el(e) {
  var t;
  let {
    voiceChannel: r,
    locked: l
  } = e, a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null, {
    mute: s,
    suppress: c
  } = (0, T.Z)(r), d = (0, o.e7)([V.Z], () => V.Z.isDeaf()), h = null == r || s || c || d;

  function m(e) {
    null != a && ((0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
      type: Y.Qu.SOUNDBOARD,
      value: Y.bk.SETTINGS_OPENED
    }), (0, f.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, $({
        guildId: a
      }, t))
    }))
  }
  let {
    Component: g,
    events: {
      onClick: v,
      onMouseEnter: y,
      onMouseLeave: O
    }
  } = (0, u.j)(), b = ee(l), _ = (0, o.e7)([N.Z, M.default], () => N.Z.isUserPlayingSounds(M.default.getId()), []) ? "green" : void 0;
  return (0, i.jsx)(p.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return h || null == r ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(Z.Z, {
        guildId: a,
        channel: r,
        onClose: b(t),
        analyticsSource: "action bar button"
      })
    },
    align: "center",
    position: "top",
    animation: p.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(et, {
        iconComponent: g,
        tooltip: s ? J.NW.string(J.t["Ox4/zc"]) : c ? J.NW.string(J.t["+YBKYG"]) : d ? J.NW.string(J.t.X1lQlp) : void 0,
        onClick: e => {
          v(), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
            type: Y.Qu.SOUNDBOARD,
            value: Y.bk.PANEL_OPENED,
            userId: M.default.getId()
          }), n(e)
        },
        highlightedColor: _,
        defaultColor: _,
        onContextMenu: m,
        onMouseEnter: y,
        onMouseLeave: O,
        isActive: r,
        popoutOpen: r,
        disabled: h
      })
    }
  })
}

function ea(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, a = (0, o.e7)([G.Z], () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)), s = () => {
    (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
      type: Y.Qu.CALL_BUTTON,
      value: Y.bk.DISABLED,
      userId: M.default.getId()
    }), a && m.default.disconnect()
  }, c = e => {
    m.default.selectVoiceChannel(e), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
      type: Y.Qu.CALL_BUTTON,
      value: Y.bk.ENABLED,
      userId: M.default.getId()
    })
  }, [u, d] = r.useTransition(), h = e => t => {
    d(() => {
      e(t)
    }), (0, Y.Ws)(X.Odu.QUICK_ACTIONS, {
      type: Y.Qu.CALL_BUTTON,
      value: Y.bk.SETTINGS_OPENED
    })
  }, {
    Component: f,
    events: {
      onMouseEnter: g,
      onMouseLeave: v
    }
  } = (0, l.K)(), y = ee(n), O = a ? f : p.Csw;
  return (0, i.jsx)(p.yRy, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(A.Z, {
        currentVoiceChannel: t,
        onClose: y(n),
        onSelect: c
      })
    },
    align: "center",
    position: "top",
    animation: p.yRy.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: r
      } = e, {
        isShown: o
      } = n;
      return (0, i.jsx)(et, {
        iconComponent: O,
        tooltip: null != t ? J.NW.string(J.t["6vrfgo"]) : J.NW.string(J.t.S0W8Z2),
        onClick: a ? s : h(r),
        defaultColor: a ? "disconnect" : void 0,
        onMouseEnter: g,
        onMouseLeave: v,
        onContextMenu: h(r),
        isActive: o,
        onPopoutClick: a ? h(r) : void 0,
        popoutOpen: o
      })
    }
  })
}

function es(e) {
  let {
    voiceChannel: t
  } = e, n = (0, o.e7)([z.Z], () => z.Z.getGuild(t.getGuildId()), [t]);
  switch (!0) {
    case t.isGroupDM() || t.isDM():
    case t.isDM():
      return null;
    case null != n:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: q.separatorDot
        }), (0, i.jsxs)("div", {
          className: q.guildIconContainer,
          children: [(0, i.jsx)(C.Z, {
            guild: n,
            size: C.Z.Sizes.SMOL,
            className: q.guildIcon
          }), (0, i.jsx)(p.Text, {
            tag: "div",
            variant: "text-xs/semibold",
            color: "text-primary",
            className: q.guildName,
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
  } = e, n = (0, x.KS)(t), r = (0, E.ZP)(t);
  return (0, i.jsxs)("div", {
    className: q.voiceChannelNameContainer,
    children: [null != n && (0, i.jsx)(p.Text, {
      tag: "div",
      color: "text-muted",
      variant: "text-xs/normal",
      className: q.channelIcon,
      children: (0, i.jsx)(n, {
        size: "sm",
        color: "currentColor"
      })
    }), null != r && (0, i.jsx)(p.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      className: q.channelName,
      children: r
    })]
  })
}

function eu(e) {
  var t, n;
  let {
    voiceChannel: r
  } = e, l = null == r ? void 0 : r.id, a = (0, o.cj)([U.Z], () => ({
    channelId: U.Z.getChannelId(),
    quality: U.Z.getQuality(),
    state: U.Z.getState(),
    lastPing: U.Z.getLastPing()
  })), s = null != l, c = (0, o.e7)([B.Z], () => null != l && B.Z.hasVideo(l), [l]);
  return s && null != r && (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(S.Z, (t = $({}, a), n = n = {
      hasVideo: c,
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
    }), t)), (0, i.jsx)(es, {
      voiceChannel: r
    }), (0, i.jsx)("div", {
      className: q.separatorDot
    }), (0, i.jsx)(ec, {
      voiceChannel: r
    })]
  })
}