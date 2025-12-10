/** Chunk was on 50751 **/
/** chunk id: 293224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => ey,
  N3: () => ed,
  Ox: () => ec,
  SE: () => eu,
  aG: () => ep,
  c_: () => ef,
  sm: () => eh
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk685072 = require("./685072.jsx"),
  Chunk400354 = require("./400354.jsx"),
  Chunk864094 = require("./864094.jsx"),
  Chunk582019 = require("./582019.jsx"),
  Chunk75735 = require("./75735.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk571250 = require("./571250.js"),
  Chunk628581 = require("./628581.js"),
  Chunk659580 = require("./659580.jsx"),
  Chunk855844 = require("./855844.jsx"),
  Chunk793865 = require("./793865.jsx"),
  Chunk55311 = require("./55311.js"),
  Chunk575175 = require("./575175.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk74299 = require("./74299.js"),
  Chunk803647 = require("./803647.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk853170 = require("./853170.js"),
  Chunk917405 = require("./917405.jsx"),
  Chunk763296 = require("./763296.js"),
  Chunk603074 = require("./603074.jsx"),
  Chunk879815 = require("./879815.js"),
  Chunk189771 = require("./189771.js"),
  Chunk294629 = require("./294629.js"),
  Chunk67844 = require("./67844.js"),
  Chunk544384 = require("./544384.jsx"),
  Chunk890828 = require("./890828.jsx"),
  Chunk560688 = require("./560688.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk875527 = require("./875527.js"),
  Chunk306609 = require("./306609.jsx"),
  Chunk8404 = require("./8404.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk444295 = require("./444295.js"),
  Chunk371053 = require("./371053.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk388627 = require("./388627.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131714 = require("./131714.js");

function eo(e) {
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

function ea(e) {
  let t = r.useRef(null);
  return r.useEffect(() => {
    if (e) {
      var n;
      null == (n = t.current) || n.call(t), t.current = null
    }
  }, [e]), e => (t.current = e, e)
}

function es(e) {
  var {
    ref: t,
    isActive: n,
    disabled: r,
    iconComponent: l,
    iconColor: o,
    tooltip: a,
    defaultColor: s = "primaryDark",
    highlightedColor: c = "primaryDark",
    caretColor: u,
    popoutOpen: d,
    onClick: h,
    popoutDisabled: p,
    onPopoutClick: f,
    onMouseEnter: m,
    onMouseLeave: g,
    onContextMenu: y,
    isTrayButton: O
  } = e, v = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["ref", "isActive", "disabled", "iconComponent", "iconColor", "tooltip", "defaultColor", "highlightedColor", "caretColor", "popoutOpen", "onClick", "popoutDisabled", "onPopoutClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "isTrayButton"]);
  return (0, i.jsx)(V.d, {
    ref: t,
    onClick: null != h ? h : () => {},
    color: n ? c : s,
    className: el.button,
    disabled: r,
    popoutOpen: d,
    popoutDisabled: p,
    label: a,
    isTrayButton: O,
    onMouseEnter: e => {
      null == m || m(e)
    },
    onMouseLeave: e => {
      null == g || g(e)
    },
    iconComponent: l,
    iconColor: o,
    caretColor: u,
    isActive: n,
    onContextMenu: y,
    onPopoutClick: f,
    "aria-label": v["aria-label"]
  })
}

function ec(e) {
  var t;
  let {
    voiceChannel: n,
    locked: o
  } = e, a = r.useRef(null), {
    suppress: s,
    selfMute: c,
    mute: u
  } = (0, D.Z)(n), h = c || u || s, p = (0, O.Z)(c, u, s, false), {
    Component: f,
    play: g,
    events: y
  } = (0, G.b)(h);
  r.useEffect(() => () => g(), [g, h]);
  let b = ea(o),
    _ = e => t => {
      e(t), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: q.Qu.MICROPHONE,
        value: q.bk.SETTINGS_OPENED
      })
    },
    x = null == (t = (0, en.II)()) ? true : t.id,
    I = (0, l.e7)([ee.Z], () => ee.Z.isLimitedInteractionOverrideEnabled(x)),
    j = (0, U.Hu)({
      location: m.Z.OVERLAY,
      autoTrackExposure: true
    }),
    {
      showRefreshedAudioContextMenu: C
    } = (0, N.e)({
      location: "MicrophoneActionButton"
    });
  return (0, i.jsx)(d.yRy, {
    targetElementRef: a,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e, n = b(t);
      return j ? (0, i.jsx)(W.l, {
        wide: true,
        showOutputDevices: true,
        onSettingsButtonClick: n,
        showSearchBar: !I
      }) : C ? (0, i.jsx)(E.Z, {
        onClose: n,
        maybeRenderPTTCheckbox: true,
        renderInputProfiles: true,
        renderInputDevices: true,
        renderInputVolume: true,
        maybeRenderInputMeter: true,
        renderSettingsButton: true
      }) : (0, i.jsx)(v.default, {
        onClose: n,
        renderInputDevices: true,
        renderOutputDevices: true,
        renderInputModes: true,
        renderInputVolume: true,
        renderOutputVolume: true,
        renderDeafen: true,
        minimal: true
      })
    },
    align: "center",
    position: "top",
    animation: d.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(es, {
        ref: a,
        iconComponent: f,
        isActive: h,
        highlightedColor: "red",
        tooltip: p,
        onClick: () => {
          (0, S.Z)(u, s, ei.jXE.OVERLAY), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
            type: q.Qu.MICROPHONE,
            value: h ? q.bk.ENABLED : q.bk.DISABLED,
            userId: H.default.getId()
          })
        },
        onPopoutClick: _(n),
        onContextMenu: _(n),
        popoutOpen: r,
        onMouseEnter: () => {
          y.onMouseEnter()
        },
        onMouseLeave: () => {
          y.onMouseLeave()
        },
        isTrayButton: true
      })
    }
  })
}

function eu(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, l = r.useRef(null), {
    selfDeaf: o,
    deaf: s
  } = (0, A.Z)(t), c = o || s, {
    Component: u,
    play: h,
    events: {
      onMouseEnter: p,
      onMouseLeave: f
    }
  } = (0, a.l)(c ? "undeafen" : "deafen"), m = s ? d.Vm4 : u;
  r.useEffect(() => () => h(), [c, h]);
  let g = () => {
      (0, _.Z)(s, ei.jXE.OVERLAY), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: q.Qu.AUDIO,
        value: s ? q.bk.ENABLED : q.bk.DISABLED,
        userId: H.default.getId()
      })
    },
    O = e => t => {
      e(t), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: q.Qu.AUDIO,
        value: q.bk.SETTINGS_OPENED
      })
    },
    b = ea(n),
    {
      showRefreshedAudioContextMenu: S
    } = (0, N.e)({
      location: "HeadphonesActionButton"
    });
  return (0, i.jsx)(d.yRy, {
    targetElementRef: l,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return S ? (0, i.jsx)(E.Z, {
        onClose: b(t),
        renderDeafenCheckbox: true,
        renderOutputDevices: true,
        renderOutputVolume: true,
        renderSettingsButton: true
      }) : (0, i.jsx)(v.default, {
        onClose: b(t),
        renderOutputDevices: true,
        renderOutputVolume: true,
        appContext: ei.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: d.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(es, {
        ref: l,
        iconComponent: m,
        tooltip: (0, y.Z)(o, s, false),
        isActive: c,
        highlightedColor: "red",
        onClick: g,
        onContextMenu: O(n),
        onMouseEnter: p,
        onMouseLeave: f,
        onPopoutClick: O(n),
        popoutOpen: r,
        isTrayButton: true
      })
    }
  })
}

function ed(e) {
  var t;
  let {
    voiceChannel: n,
    locked: o
  } = e, a = r.useRef(null), s = (0, l.e7)([Y.Z], () => Y.Z.isVideoEnabled()), c = (0, l.e7)([Y.Z], () => Object.values(Y.Z.getVideoDevices())[0]), p = null == (t = null == c ? true : c.disabled) || t, f = false === p, m = (0, k.Z)(n), g = e => {
    h.Z.setVideoEnabled(e)
  }, y = e => t => {
    e(t), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: q.Qu.CAMERA,
      value: q.bk.SETTINGS_OPENED
    })
  }, O = () => {
    p ? f ? g(true) : (0, z.Z)() : g(!s), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: q.Qu.CAMERA,
      value: s ? q.bk.DISABLED : q.bk.ENABLED,
      userId: H.default.getId()
    })
  }, {
    Component: v,
    play: E,
    events: {
      onMouseEnter: _,
      onMouseLeave: S
    }
  } = (0, u.o)(s ? "disable" : "enable"), x = null != n ? (0, R.X)({
    enabled: s,
    cameraUnavailable: p,
    hasPermission: m,
    channel: n
  }) : true;
  r.useEffect(() => () => E(), [s, E]);
  let I = ea(o),
    j = null == n || !m;
  return (0, i.jsx)(d.yRy, {
    targetElementRef: a,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(b.Z, {
        onClose: I(t),
        appContext: ei.IlC.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: d.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(es, {
        ref: a,
        iconComponent: v,
        tooltip: x,
        onClick: O,
        isActive: s,
        highlightedColor: "green",
        onPopoutClick: y(n),
        popoutOpen: r,
        onContextMenu: y(n),
        onMouseEnter: _,
        onMouseLeave: S,
        disabled: j,
        isTrayButton: true
      })
    }
  })
}

function eh(e) {
  let t, {
      voiceChannel: n,
      locked: o
    } = e,
    a = r.useRef(null),
    c = (0, l.e7)([X.default], () => X.default.getCurrentUser()),
    u = (0, k.Z)(n),
    h = (0, l.cj)([Y.Z], () => (0, j.Z)(Y.Z)),
    p = (0, l.e7)([F.Z], () => F.Z.getCurrentUserActiveStream()),
    f = (0, l.e7)([et.Z], () => et.Z.getTargetPID()),
    m = (0, $.P)({
      pid: f,
      allowOneClickGoLive: true,
      analyticsLocation: ei.Sbl.UNLOCKED_OVERLAY
    }),
    g = () => {
      m(), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: q.Qu.GO_LIVE,
        value: q.bk.ENABLED,
        userId: H.default.getId()
      })
    },
    y = null != p;
  if (y) t = er.intl.string(er.t.S5anIc);
  else if (null != n) {
    let e = (0, en.pL)();
    t = u ? null != e ? er.intl.format(er.t.AB5gTy, {
      game: e.name
    }) : er.intl.string(er.t.FeUKeA) : er.intl.string(er.t.uQn9B8)
  }
  let O = () => {
      if (y) return (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: q.Qu.GO_LIVE,
        value: q.bk.DISABLED,
        userId: H.default.getId()
      }), (0, C.Z)(p, false);
      g()
    },
    v = e => t => {
      e(t), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: q.Qu.SCREEN_SHARE,
        value: q.bk.SETTINGS_OPENED
      })
    },
    {
      Component: E,
      events: {
        onMouseEnter: b,
        onMouseLeave: _
      },
      play: S
    } = (0, s.P)(y ? "disable" : "enable");
  r.useEffect(() => () => S(), [y, S]);
  let x = ea(o);
  return (0, i.jsx)(d.yRy, {
    targetElementRef: a,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(L.Z, {
        channel: n,
        currentUser: c,
        activeStreams: y ? [p] : [],
        handleGoLive: g,
        onClose: x(t),
        appContext: ei.IlC.OVERLAY,
        disableChangeWindows: true
      })
    },
    align: "center",
    position: "top",
    animation: d.yRy.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: r
      } = e, {
        isShown: l
      } = n;
      return (0, i.jsx)(es, {
        ref: a,
        iconComponent: E,
        tooltip: t,
        "aria-label": er.intl.string(er.t.FeUKeA),
        isActive: y,
        highlightedColor: "green",
        onClick: O,
        popoutOpen: l,
        popoutDisabled: !y,
        onPopoutClick: v(r),
        onContextMenu: v(r),
        onMouseEnter: b,
        onMouseLeave: _,
        disabled: !h || !u,
        isTrayButton: true
      })
    }
  })
}

function ep(e) {
  var t;
  let {
    voiceChannel: o,
    locked: a
  } = e, s = r.useRef(null), u = null != (t = null == o ? true : o.getGuildId()) ? t : null, {
    mute: h,
    suppress: f
  } = (0, D.Z)(o), m = (0, l.e7)([Y.Z], () => Y.Z.isDeaf()), y = null == o || h || f || m, {
    analyticsLocations: O
  } = (0, g.ZP)();

  function v(e) {
    null != u && ((0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: q.Qu.SOUNDBOARD,
      value: q.bk.SETTINGS_OPENED
    }), (0, p.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, eo({
        sourceAnalyticsLocations: O,
        guildId: u
      }, t))
    }))
  }
  let {
    Component: E,
    events: {
      onClick: b,
      onMouseEnter: _,
      onMouseLeave: S
    }
  } = (0, c.j)(), x = ea(a), I = (0, l.e7)([T.Z, H.default], () => T.Z.isUserPlayingSounds(H.default.getId()), []) ? "green" : true;
  return (0, i.jsx)(d.yRy, {
    targetElementRef: s,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return y || null == o ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(P.Z, {
        guildId: u,
        channel: o,
        onClose: x(t),
        analyticsSource: "action bar button"
      })
    },
    align: "center",
    position: "top",
    animation: d.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(es, {
        ref: s,
        iconComponent: E,
        tooltip: h ? er.intl.string(er.t["Ox4/zU"]) : f ? er.intl.string(er.t["+YBKYI"]) : m ? er.intl.string(er.t.X1lQli) : true,
        onClick: e => {
          b(), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
            type: q.Qu.SOUNDBOARD,
            value: q.bk.PANEL_OPENED,
            userId: H.default.getId()
          }), n(e)
        },
        highlightedColor: I,
        defaultColor: I,
        onContextMenu: v,
        onMouseEnter: _,
        onMouseLeave: S,
        isActive: r,
        popoutOpen: r,
        disabled: y,
        isTrayButton: true
      })
    }
  })
}

function ef(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, a = r.useRef(null), s = (0, l.e7)([K.Z], () => K.Z.getVoiceChannelId() === (null == t ? true : t.id)), c = () => {
    (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: q.Qu.CALL_BUTTON,
      value: q.bk.DISABLED,
      userId: H.default.getId()
    }), s && f.default.disconnect()
  }, u = (e, t) => {
    f.default.selectVoiceChannel(e), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: q.Qu.CALL_BUTTON,
      value: q.bk.ENABLED,
      userId: H.default.getId(),
      secondaryValue: t
    })
  }, [h, p] = r.useTransition(), m = e => t => {
    p(() => {
      e(t)
    }), (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: q.Qu.CALL_BUTTON,
      value: q.bk.SETTINGS_OPENED
    })
  }, {
    Component: g,
    events: {
      onMouseEnter: y,
      onMouseLeave: O
    }
  } = (0, o.K)(), v = ea(n), E = s ? g : d.Csw;
  return (0, i.jsx)(d.yRy, {
    targetElementRef: a,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(M.Z, {
        currentVoiceChannel: t,
        onClose: v(n),
        onSelect: u
      })
    },
    align: "center",
    position: "top",
    animation: d.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(es, {
        ref: a,
        iconComponent: E,
        tooltip: s ? er.intl.string(er.t["6vrfgt"]) : er.intl.string(er.t.S0W8Z5),
        onClick: s ? c : m(n),
        defaultColor: s ? "disconnect" : true,
        onMouseEnter: y,
        onMouseLeave: O,
        onContextMenu: m(n),
        isActive: r,
        onPopoutClick: s ? m(n) : true,
        popoutOpen: r,
        isTrayButton: true
      })
    }
  })
}

function em(e) {
  let {
    voiceChannel: t
  } = e, n = (0, l.e7)([B.Z], () => B.Z.getGuild(t.getGuildId()), [t]);
  switch (true) {
    case t.isGroupDM() || t.isDM():
    case t.isDM():
      return null;
    case null != n:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: el.separatorDot
        }), (0, i.jsxs)("div", {
          className: el.guildIconContainer,
          children: [(0, i.jsx)(Z.Z, {
            guild: n,
            size: Z.Z.Sizes.SMOL,
            className: el.guildIcon
          }), (0, i.jsx)(d.Text, {
            tag: "div",
            variant: "text-sm/medium",
            color: "text-strong",
            className: el.guildName,
            children: n.name
          })]
        })]
      });
    default:
      return null
  }
}

function eg(e) {
  let {
    voiceChannel: t
  } = e, n = (0, I.KS)(t), r = (0, x.ZP)(t);
  return (0, i.jsxs)("div", {
    className: el.voiceChannelNameContainer,
    children: [null != n && (0, i.jsx)(d.Text, {
      tag: "div",
      color: "text-muted",
      variant: "text-xs/normal",
      className: el.channelIcon,
      children: (0, i.jsx)(n, {
        size: "sm",
        color: "currentColor"
      })
    }), null != r && (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: el.channelName,
      children: r
    })]
  })
}

function ey(e) {
  var t, n;
  let {
    voiceChannel: r
  } = e, o = null == r ? true : r.id, a = (0, l.cj)([Q.Z], () => ({
    quality: Q.Z.getQuality(),
    state: Q.Z.getState(),
    lastPing: Q.Z.getLastPing()
  })), s = (0, l.e7)([J.Z], () => null != o && J.Z.hasVideo(o), [o]);
  return null != o && null != r && (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(w.Z, (t = eo({}, a), n = n = {
      channelId: o,
      hasVideo: s,
      connectionStatusTextVariant: "text-sm/medium"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), (0, i.jsx)(em, {
      voiceChannel: r
    }), (0, i.jsx)("div", {
      className: el.separatorDot
    }), (0, i.jsx)(eg, {
      voiceChannel: r
    })]
  })
}