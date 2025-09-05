/** Chunk was on 46290 **/
/** chunk id: 293224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => ey,
  N3: () => ed,
  Ox: () => ec,
  SE: () => eu,
  aG: () => ef,
  c_: () => eh,
  sm: () => ep
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk145597 = require("./145597.js"),
  Chunk444295 = require("./444295.js"),
  Chunk371053 = require("./371053.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk388627 = require("./388627.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131714 = require("./131714.js");

function el(e) {
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
    iconComponent: o,
    iconColor: l,
    tooltip: a,
    defaultColor: s = "primaryDark",
    highlightedColor: c = "primaryDark",
    caretColor: u,
    popoutOpen: d,
    onClick: p,
    popoutDisabled: f,
    onPopoutClick: h,
    onMouseEnter: m,
    onMouseLeave: g,
    onContextMenu: y,
    isTrayButton: O
  } = e, v = function(e, t) {
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
  }(e, ["ref", "isActive", "disabled", "iconComponent", "iconColor", "tooltip", "defaultColor", "highlightedColor", "caretColor", "popoutOpen", "onClick", "popoutDisabled", "onPopoutClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "isTrayButton"]);
  return (0, i.jsx)(U.d, {
    ref: t,
    onClick: null != p ? p : () => {},
    color: n ? c : s,
    className: eo.button,
    disabled: r,
    popoutOpen: d,
    popoutDisabled: f,
    label: a,
    isTrayButton: O,
    onMouseEnter: e => {
      null == m || m(e)
    },
    onMouseLeave: e => {
      null == g || g(e)
    },
    iconComponent: o,
    iconColor: l,
    caretColor: u,
    isActive: n,
    onContextMenu: y,
    onPopoutClick: h,
    "aria-label": v["aria-label"]
  })
}

function ec(e) {
  var t;
  let {
    voiceChannel: n,
    locked: l
  } = e, a = r.useRef(null), {
    suppress: s,
    selfMute: c,
    mute: u
  } = (0, D.Z)(n), p = c || u || s, f = (0, O.Z)(c, u, s, false), {
    Component: h,
    play: g,
    events: y
  } = (0, G.b)(p);
  r.useEffect(() => () => g(), [g, p]);
  let E = ea(l),
    _ = e => t => {
      e(t), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: $.Qu.MICROPHONE,
        value: $.bk.SETTINGS_OPENED
      })
    },
    S = null == (t = (0, en.II)()) ? true : t.id,
    x = (0, o.e7)([et.Z], () => et.Z.isLimitedInteractionOverrideEnabled(S)),
    j = (0, V.Hu)({
      location: m.Z.OVERLAY,
      autoTrackExposure: true
    }),
    {
      showRefreshedAudioContextMenu: C
    } = (0, w.e)({
      location: "MicrophoneActionButton"
    });
  return (0, i.jsx)(d.yRy, {
    targetElementRef: a,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e, n = E(t);
      return j ? (0, i.jsx)(W.l, {
        wide: true,
        showOutputDevices: true,
        onSettingsButtonClick: n,
        showSearchBar: !x
      }) : C ? (0, i.jsx)(b.Z, {
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
        iconComponent: h,
        isActive: p,
        highlightedColor: "red",
        tooltip: f,
        onClick: () => {
          (0, I.Z)(u, s, ei.jXE.OVERLAY), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
            type: $.Qu.MICROPHONE,
            value: p ? $.bk.ENABLED : $.bk.DISABLED,
            userId: B.default.getId()
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
  } = e, o = r.useRef(null), {
    selfDeaf: l,
    deaf: s
  } = (0, A.Z)(t), c = l || s, {
    Component: u,
    play: p,
    events: {
      onMouseEnter: f,
      onMouseLeave: h
    }
  } = (0, a.l)(c ? "undeafen" : "deafen"), m = s ? d.Vm4 : u;
  r.useEffect(() => () => p(), [c, p]);
  let g = () => {
      (0, _.Z)(s, ei.jXE.OVERLAY), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: $.Qu.AUDIO,
        value: s ? $.bk.ENABLED : $.bk.DISABLED,
        userId: B.default.getId()
      })
    },
    O = e => t => {
      e(t), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: $.Qu.AUDIO,
        value: $.bk.SETTINGS_OPENED
      })
    },
    E = ea(n),
    {
      showRefreshedAudioContextMenu: I
    } = (0, w.e)({
      location: "HeadphonesActionButton"
    });
  return (0, i.jsx)(d.yRy, {
    targetElementRef: o,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return I ? (0, i.jsx)(b.Z, {
        onClose: E(t),
        renderDeafenCheckbox: true,
        renderOutputDevices: true,
        renderOutputVolume: true,
        renderSettingsButton: true
      }) : (0, i.jsx)(v.default, {
        onClose: E(t),
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
        ref: o,
        iconComponent: m,
        tooltip: (0, y.Z)(l, s, false),
        isActive: c,
        highlightedColor: "red",
        onClick: g,
        onContextMenu: O(n),
        onMouseEnter: f,
        onMouseLeave: h,
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
    locked: l
  } = e, a = r.useRef(null), s = (0, o.e7)([Y.Z], () => Y.Z.isVideoEnabled()), c = (0, o.e7)([Y.Z], () => Object.values(Y.Z.getVideoDevices())[0]), f = null == (t = null == c ? true : c.disabled) || t, h = false === f, m = (0, k.Z)(n), g = e => {
    p.Z.setVideoEnabled(e)
  }, y = e => t => {
    e(t), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: $.Qu.CAMERA,
      value: $.bk.SETTINGS_OPENED
    })
  }, O = () => {
    f ? h ? g(true) : (0, z.Z)() : g(!s), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: $.Qu.CAMERA,
      value: s ? $.bk.DISABLED : $.bk.ENABLED,
      userId: B.default.getId()
    })
  }, {
    Component: v,
    play: b,
    events: {
      onMouseEnter: _,
      onMouseLeave: I
    }
  } = (0, u.o)(s ? "disable" : "enable"), S = null != n ? (0, R.X)({
    enabled: s,
    cameraUnavailable: f,
    hasPermission: m,
    channel: n
  }) : true;
  r.useEffect(() => () => b(), [s, b]);
  let x = ea(l),
    j = null == n || !m;
  return (0, i.jsx)(d.yRy, {
    targetElementRef: a,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(E.Z, {
        onClose: x(t),
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
        tooltip: S,
        onClick: O,
        isActive: s,
        highlightedColor: "green",
        onPopoutClick: y(n),
        popoutOpen: r,
        onContextMenu: y(n),
        onMouseEnter: _,
        onMouseLeave: I,
        disabled: j,
        isTrayButton: true
      })
    }
  })
}

function ep(e) {
  let t, {
      voiceChannel: n,
      locked: l
    } = e,
    a = r.useRef(null),
    c = (0, o.e7)([X.default], () => X.default.getCurrentUser()),
    u = (0, k.Z)(n),
    p = (0, o.cj)([Y.Z], () => (0, j.Z)(Y.Z)),
    f = (0, o.e7)([F.Z], () => F.Z.getCurrentUserActiveStream()),
    h = (0, ee.P)({
      pid: (0, J.getPID)(),
      allowOneClickGoLive: true,
      analyticsLocation: ei.Sbl.UNLOCKED_OVERLAY
    }),
    m = () => {
      h(), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: $.Qu.GO_LIVE,
        value: $.bk.ENABLED,
        userId: B.default.getId()
      })
    },
    g = null != f;
  if (g) t = er.intl.string(er.t.S5anIS);
  else if (null != n) {
    let e = (0, en.pL)();
    t = u ? null != e ? er.intl.format(er.t.AB5gT0, {
      game: e.name
    }) : er.intl.string(er.t.FeUKeH) : er.intl.string(er.t.uQn9Bw)
  }
  let y = () => {
      if (g) return (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: $.Qu.GO_LIVE,
        value: $.bk.DISABLED,
        userId: B.default.getId()
      }), (0, C.Z)(f, false);
      m()
    },
    O = e => t => {
      e(t), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
        type: $.Qu.SCREEN_SHARE,
        value: $.bk.SETTINGS_OPENED
      })
    },
    {
      Component: v,
      events: {
        onMouseEnter: b,
        onMouseLeave: E
      },
      play: _
    } = (0, s.P)(g ? "disable" : "enable");
  r.useEffect(() => () => _(), [g, _]);
  let I = ea(l);
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
        activeStreams: g ? [f] : [],
        handleGoLive: m,
        onClose: I(t),
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
        isShown: o
      } = n;
      return (0, i.jsx)(es, {
        ref: a,
        iconComponent: v,
        tooltip: t,
        "aria-label": er.intl.string(er.t.FeUKeH),
        isActive: g,
        highlightedColor: "green",
        onClick: y,
        popoutOpen: o,
        popoutDisabled: !g,
        onPopoutClick: O(r),
        onContextMenu: O(r),
        onMouseEnter: b,
        onMouseLeave: E,
        disabled: !p || !u,
        isTrayButton: true
      })
    }
  })
}

function ef(e) {
  var t;
  let {
    voiceChannel: l,
    locked: a
  } = e, s = r.useRef(null), u = null != (t = null == l ? true : l.getGuildId()) ? t : null, {
    mute: p,
    suppress: h
  } = (0, D.Z)(l), m = (0, o.e7)([Y.Z], () => Y.Z.isDeaf()), y = null == l || p || h || m, {
    analyticsLocations: O
  } = (0, g.ZP)();

  function v(e) {
    null != u && ((0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: $.Qu.SOUNDBOARD,
      value: $.bk.SETTINGS_OPENED
    }), (0, f.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, el({
        sourceAnalyticsLocations: O,
        guildId: u
      }, t))
    }))
  }
  let {
    Component: b,
    events: {
      onClick: E,
      onMouseEnter: _,
      onMouseLeave: I
    }
  } = (0, c.j)(), S = ea(a), x = (0, o.e7)([P.Z, B.default], () => P.Z.isUserPlayingSounds(B.default.getId()), []) ? "green" : true;
  return (0, i.jsx)(d.yRy, {
    targetElementRef: s,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return y || null == l ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(T.Z, {
        guildId: u,
        channel: l,
        onClose: S(t),
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
        iconComponent: b,
        tooltip: p ? er.intl.string(er.t["Ox4/zc"]) : h ? er.intl.string(er.t["+YBKYG"]) : m ? er.intl.string(er.t.X1lQlp) : true,
        onClick: e => {
          E(), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
            type: $.Qu.SOUNDBOARD,
            value: $.bk.PANEL_OPENED,
            userId: B.default.getId()
          }), n(e)
        },
        highlightedColor: x,
        defaultColor: x,
        onContextMenu: v,
        onMouseEnter: _,
        onMouseLeave: I,
        isActive: r,
        popoutOpen: r,
        disabled: y,
        isTrayButton: true
      })
    }
  })
}

function eh(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, a = r.useRef(null), s = (0, o.e7)([K.Z], () => K.Z.getVoiceChannelId() === (null == t ? true : t.id)), c = () => {
    (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: $.Qu.CALL_BUTTON,
      value: $.bk.DISABLED,
      userId: B.default.getId()
    }), s && h.default.disconnect()
  }, u = e => {
    h.default.selectVoiceChannel(e), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: $.Qu.CALL_BUTTON,
      value: $.bk.ENABLED,
      userId: B.default.getId()
    })
  }, [p, f] = r.useTransition(), m = e => t => {
    f(() => {
      e(t)
    }), (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
      type: $.Qu.CALL_BUTTON,
      value: $.bk.SETTINGS_OPENED
    })
  }, {
    Component: g,
    events: {
      onMouseEnter: y,
      onMouseLeave: O
    }
  } = (0, l.K)(), v = ea(n), b = s ? g : d.Csw;
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
        iconComponent: b,
        tooltip: s ? er.intl.string(er.t["6vrfgo"]) : er.intl.string(er.t.S0W8Z2),
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
  } = e, n = (0, o.e7)([H.Z], () => H.Z.getGuild(t.getGuildId()), [t]);
  switch (true) {
    case t.isGroupDM() || t.isDM():
    case t.isDM():
      return null;
    case null != n:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: eo.separatorDot
        }), (0, i.jsxs)("div", {
          className: eo.guildIconContainer,
          children: [(0, i.jsx)(N.Z, {
            guild: n,
            size: N.Z.Sizes.SMOL,
            className: eo.guildIcon
          }), (0, i.jsx)(d.Text, {
            tag: "div",
            variant: "text-sm/medium",
            color: "text-primary",
            className: eo.guildName,
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
  } = e, n = (0, x.KS)(t), r = (0, S.ZP)(t);
  return (0, i.jsxs)("div", {
    className: eo.voiceChannelNameContainer,
    children: [null != n && (0, i.jsx)(d.Text, {
      tag: "div",
      color: "text-muted",
      variant: "text-xs/normal",
      className: eo.channelIcon,
      children: (0, i.jsx)(n, {
        size: "sm",
        color: "currentColor"
      })
    }), null != r && (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: eo.channelName,
      children: r
    })]
  })
}

function ey(e) {
  var t, n;
  let {
    voiceChannel: r
  } = e, l = null == r ? true : r.id, a = (0, o.cj)([Q.Z], () => ({
    quality: Q.Z.getQuality(),
    state: Q.Z.getState(),
    lastPing: Q.Z.getLastPing()
  })), s = (0, o.e7)([q.Z], () => null != l && q.Z.hasVideo(l), [l]);
  return null != l && null != r && (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(Z.Z, (t = el({}, a), n = n = {
      channelId: l,
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
      className: eo.separatorDot
    }), (0, i.jsx)(eg, {
      voiceChannel: r
    })]
  })
}