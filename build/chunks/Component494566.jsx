/** Chunk was on 71447 **/
/** chunk id: 494566, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GF: () => eu,
  LK: () => eg,
  NO: () => eh,
  Yb: () => eo,
  pp: () => es,
  sm: () => ed,
  un: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk377802 = require("./377802.jsx"),
  Chunk348858 = require("./348858.jsx"),
  Chunk416696 = require("./416696.jsx"),
  Chunk621956 = require("./621956.jsx"),
  Chunk446080 = require("./446080.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk442433 = require("./442433.js"),
  Chunk956793 = require("./956793.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk617354 = require("./617354.js"),
  Chunk980923 = require("./980923.js"),
  Chunk206018 = require("./206018.jsx"),
  Chunk750765 = require("./750765.jsx"),
  Chunk18235 = require("./18235.js"),
  Chunk183184 = require("./183184.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk880144 = require("./880144.js"),
  Chunk338771 = require("./338771.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk178442 = require("./178442.jsx"),
  Chunk209932 = require("./209932.js"),
  Chunk989799 = require("./989799.jsx"),
  Chunk167579 = require("./167579.js"),
  Chunk704877 = require("./704877.js"),
  Chunk173660 = require("./173660.js"),
  Chunk675991 = require("./675991.js"),
  Chunk848362 = require("./848362.jsx"),
  Chunk594831 = require("./594831.jsx"),
  Chunk222692 = require("./222692.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk996744 = require("./996744.js"),
  Chunk85612 = require("./85612.jsx"),
  Chunk277342 = require("./277342.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk810412 = require("./810412.js"),
  Chunk823901 = require("./823901.jsx"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk243612 = require("./243612.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk991256 = require("./991256.js");

function er(e) {
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

function el(e) {
  let t = r.useRef(null);
  return r.useEffect(() => {
    if (e) {
      var n;
      null == (n = t.current) || n.call(t), t.current = null
    }
  }, [e]), e => (t.current = e, e)
}

function ea(e) {
  let {
    ref: t,
    isActive: n,
    disabled: r,
    iconComponent: l,
    iconColor: a,
    tooltip: s,
    defaultColor: o = "primaryDark",
    highlightedColor: u = "primaryDark",
    caretColor: c,
    popoutOpen: d,
    onClick: h,
    popoutDisabled: p,
    onPopoutClick: f,
    onMouseEnter: g,
    onMouseLeave: m,
    onContextMenu: y,
    isTrayButton: A
  } = e, v = function(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["ref", "isActive", "disabled", "iconComponent", "iconColor", "tooltip", "defaultColor", "highlightedColor", "caretColor", "popoutOpen", "onClick", "popoutDisabled", "onPopoutClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "isTrayButton"]);
  return (0, i.jsx)(U.l, {
    ref: t,
    onClick: null != h ? h : () => {},
    color: n ? u : o,
    className: ei.x6,
    disabled: r,
    popoutOpen: d,
    popoutDisabled: p,
    label: s,
    isTrayButton: A,
    onMouseEnter: e => {
      null == g || g(e)
    },
    onMouseLeave: e => {
      null == m || m(e)
    },
    iconComponent: l,
    iconColor: a,
    caretColor: c,
    isActive: n,
    onContextMenu: y,
    onPopoutClick: f,
    "aria-label": v["aria-label"]
  })
}

function es(e) {
  var t;
  let {
    voiceChannel: n,
    locked: a
  } = e, s = r.useRef(null), {
    suppress: o,
    selfMute: u,
    mute: c
  } = (0, D.A)(n), h = u || c || o, p = (0, A.A)(u, c, o, false), {
    Component: f,
    play: m,
    events: y
  } = (0, z.q)(h);
  r.useEffect(() => () => m(), [m, h]);
  let b = el(a),
    E = e => t => {
      e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
        type: J.Z5.MICROPHONE,
        value: J.IP.SETTINGS_OPENED
      })
    },
    x = null == (t = (0, ee.b4)()) ? true : t.id,
    _ = (0, l.bG)([q.A], () => q.A.isLimitedInteractionOverrideEnabled(x)),
    S = (0, G.Cg)({
      location: g.A.OVERLAY,
      autoTrackExposure: true
    });
  return (0, i.jsx)(d.YNO, {
    targetElementRef: s,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e, n = b(t);
      return S ? (0, i.jsx)(V.a, {
        wide: true,
        showOutputDevices: true,
        onSettingsButtonClick: n,
        showSearchBar: !_
      }) : (0, i.jsx)(v.A, {
        onClose: n,
        maybeRenderPTTCheckbox: true,
        renderInputProfiles: true,
        renderInputDevices: true,
        renderInputVolume: true,
        maybeRenderInputMeter: true,
        renderSettingsButton: true,
        appContext: et.BRT.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: d.YNO.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(ea, {
        ref: s,
        iconComponent: f,
        isActive: h,
        highlightedColor: "red",
        tooltip: p,
        onClick: () => {
          (0, O.A)(c, o, et.JJy.OVERLAY), (0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.MICROPHONE,
            value: h ? J.IP.ENABLED : J.IP.DISABLED,
            userId: H.default.getId()
          })
        },
        onPopoutClick: E(n),
        onContextMenu: E(n),
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

function eo(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, l = r.useRef(null), {
    selfDeaf: a,
    deaf: o
  } = (0, w.A)(t), u = a || o, {
    Component: c,
    play: h,
    events: {
      onMouseEnter: p,
      onMouseLeave: f
    }
  } = (0, s.I)(u ? "undeafen" : "deafen"), g = o ? d.TJE : c;
  r.useEffect(() => () => h(), [u, h]);
  let m = () => {
      (0, E.A)(o, et.JJy.OVERLAY), (0, J.YX)(et.uss.QUICK_ACTIONS, {
        type: J.Z5.AUDIO,
        value: o ? J.IP.ENABLED : J.IP.DISABLED,
        userId: H.default.getId()
      })
    },
    A = e => t => {
      e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
        type: J.Z5.AUDIO,
        value: J.IP.SETTINGS_OPENED
      })
    },
    b = el(n);
  return (0, i.jsx)(d.YNO, {
    targetElementRef: l,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(v.A, {
        onClose: b(t),
        renderDeafenCheckbox: true,
        renderOutputDevices: true,
        renderOutputVolume: true,
        renderSettingsButton: true,
        appContext: et.BRT.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: d.YNO.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(ea, {
        ref: l,
        iconComponent: g,
        tooltip: (0, y.A)(a, o, false),
        isActive: u,
        highlightedColor: "red",
        onClick: m,
        onContextMenu: A(n),
        onMouseEnter: p,
        onMouseLeave: f,
        onPopoutClick: A(n),
        popoutOpen: r,
        isTrayButton: true
      })
    }
  })
}

function eu(e) {
  var t;
  let {
    voiceChannel: n,
    locked: a
  } = e, s = r.useRef(null), o = (0, l.bG)([W.A], () => W.A.isVideoEnabled()), u = (0, l.bG)([W.A], () => Object.values(W.A.getVideoDevices())[0]), p = null == (t = null == u ? true : u.disabled) || t, f = false === p, g = (0, P.A)(n), m = e => {
    h.A.setVideoEnabled(e)
  }, y = e => t => {
    e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
      type: J.Z5.CAMERA,
      value: J.IP.SETTINGS_OPENED
    })
  }, A = () => {
    p ? f ? m(true) : (0, L.A)() : m(!o), (0, J.YX)(et.uss.QUICK_ACTIONS, {
      type: J.Z5.CAMERA,
      value: o ? J.IP.DISABLED : J.IP.ENABLED,
      userId: H.default.getId()
    })
  }, {
    Component: v,
    play: E,
    events: {
      onMouseEnter: O,
      onMouseLeave: x
    }
  } = (0, c.K)(o ? "disable" : "enable"), _ = null != n ? (0, R.Q)({
    enabled: o,
    cameraUnavailable: p,
    hasPermission: g,
    channel: n
  }) : true;
  r.useEffect(() => () => E(), [o, E]);
  let S = el(a),
    I = null == n || !g;
  return (0, i.jsx)(d.YNO, {
    targetElementRef: s,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(b.A, {
        onClose: S(t),
        appContext: et.BRT.OVERLAY
      })
    },
    align: "center",
    position: "top",
    animation: d.YNO.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(ea, {
        ref: s,
        iconComponent: v,
        tooltip: _,
        onClick: A,
        isActive: o,
        highlightedColor: "green",
        onPopoutClick: y(n),
        popoutOpen: r,
        onContextMenu: y(n),
        onMouseEnter: O,
        onMouseLeave: x,
        disabled: I,
        isTrayButton: true
      })
    }
  })
}

function ec(e) {
  let t, {
      voiceChannel: n,
      locked: a
    } = e,
    s = r.useRef(null),
    u = (0, l.bG)([Z.default], () => Z.default.getCurrentUser()),
    c = (0, P.A)(n),
    h = (0, l.cf)([W.A], () => (0, S.A)(W.A)),
    p = (0, l.bG)([F.A], () => F.A.getCurrentUserActiveStream()),
    f = (0, l.bG)([$.A], () => $.A.getTargetPID()),
    g = (0, Q.y)({
      pid: f,
      allowOneClickGoLive: true,
      analyticsLocation: et.ThZ.UNLOCKED_OVERLAY
    }),
    m = () => {
      g(), (0, J.YX)(et.uss.QUICK_ACTIONS, {
        type: J.Z5.GO_LIVE,
        value: J.IP.ENABLED,
        userId: H.default.getId()
      })
    },
    y = null != p;
  if (y) t = en.intl.string(en.t.S5anIc);
  else if (null != n) {
    let e = (0, ee.qv)();
    t = c ? null != e ? en.intl.format(en.t.AB5gTy, {
      game: e.name
    }) : en.intl.string(en.t.FeUKeA) : en.intl.string(en.t.uQn9B8)
  }
  let A = () => {
      if (y) return (0, J.YX)(et.uss.QUICK_ACTIONS, {
        type: J.Z5.GO_LIVE,
        value: J.IP.DISABLED,
        userId: H.default.getId()
      }), (0, I.A)(p, false);
      m()
    },
    v = e => t => {
      e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, {
        type: J.Z5.SCREEN_SHARE,
        value: J.IP.SETTINGS_OPENED
      })
    },
    {
      Component: b,
      events: {
        onMouseEnter: E,
        onMouseLeave: O
      },
      play: x
    } = (0, o.c)(y ? "disable" : "enable");
  r.useEffect(() => () => x(), [y, x]);
  let _ = el(a);
  return (0, i.jsx)(d.YNO, {
    targetElementRef: s,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(k.A, {
        channel: n,
        currentUser: u,
        activeStreams: y ? [p] : [],
        handleGoLive: m,
        onClose: _(t),
        appContext: et.BRT.OVERLAY,
        disableChangeWindows: true
      })
    },
    align: "center",
    position: "top",
    animation: d.YNO.Animation.FADE,
    children: (e, n) => {
      let {
        onClick: r
      } = e, {
        isShown: l
      } = n;
      return (0, i.jsx)(ea, {
        ref: s,
        iconComponent: b,
        tooltip: t,
        "aria-label": en.intl.string(en.t.FeUKeA),
        isActive: y,
        highlightedColor: "green",
        onClick: A,
        popoutOpen: l,
        popoutDisabled: !y,
        onPopoutClick: v(r),
        onContextMenu: v(r),
        onMouseEnter: E,
        onMouseLeave: O,
        disabled: !h || !c,
        isTrayButton: true
      })
    }
  })
}

function ed(e) {
  var t;
  let {
    voiceChannel: a,
    locked: s
  } = e, o = r.useRef(null), c = null != (t = null == a ? true : a.getGuildId()) ? t : null, {
    mute: h,
    suppress: f
  } = (0, D.A)(a), g = (0, l.bG)([W.A], () => W.A.isDeaf()), y = null == a || h || f || g, {
    analyticsLocations: A
  } = (0, m.Ay)();

  function v(e) {
    null != c && ((0, J.YX)(et.uss.QUICK_ACTIONS, {
      type: J.Z5.SOUNDBOARD,
      value: J.IP.SETTINGS_OPENED
    }), (0, p.L3)(e, async () => {
      let {
        default: e
      } = await n.e("51111").then(n.bind(n, 323002));
      return t => (0, i.jsx)(e, er({
        sourceAnalyticsLocations: A,
        guildId: c
      }, t))
    }))
  }
  let {
    Component: b,
    events: {
      onClick: E,
      onMouseEnter: O,
      onMouseLeave: x
    }
  } = (0, u.E)(), _ = el(s), S = (0, l.bG)([C.A, H.default], () => C.A.isUserPlayingSounds(H.default.getId()), []) ? "green" : true;
  return (0, i.jsx)(d.YNO, {
    targetElementRef: o,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return y || null == a ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(N.A, {
        guildId: c,
        channel: a,
        onClose: _(t),
        analyticsSource: "action bar button"
      })
    },
    align: "center",
    position: "top",
    animation: d.YNO.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(ea, {
        ref: o,
        iconComponent: b,
        tooltip: h ? en.intl.string(en.t["Ox4/zU"]) : f ? en.intl.string(en.t["+YBKYI"]) : g ? en.intl.string(en.t.X1lQli) : true,
        onClick: e => {
          E(), (0, J.YX)(et.uss.QUICK_ACTIONS, {
            type: J.Z5.SOUNDBOARD,
            value: J.IP.PANEL_OPENED,
            userId: H.default.getId()
          }), n(e)
        },
        highlightedColor: S,
        defaultColor: S,
        onContextMenu: v,
        onMouseEnter: O,
        onMouseLeave: x,
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
  } = e, s = r.useRef(null), o = (0, l.bG)([B.A], () => B.A.getVoiceChannelId() === (null == t ? true : t.id)), u = () => {
    (0, J.YX)(et.uss.QUICK_ACTIONS, {
      type: J.Z5.CALL_BUTTON,
      value: J.IP.DISABLED,
      userId: H.default.getId()
    }), o && f.default.disconnect()
  }, c = (e, t) => {
    f.default.selectVoiceChannel(e), (0, J.YX)(et.uss.QUICK_ACTIONS, {
      type: J.Z5.CALL_BUTTON,
      value: J.IP.ENABLED,
      userId: H.default.getId(),
      secondaryValue: t
    })
  }, [h, p] = r.useTransition(), g = e => t => {
    p(() => {
      e(t)
    }), (0, J.YX)(et.uss.QUICK_ACTIONS, {
      type: J.Z5.CALL_BUTTON,
      value: J.IP.SETTINGS_OPENED
    })
  }, {
    Component: m,
    events: {
      onMouseEnter: y,
      onMouseLeave: A
    }
  } = (0, a.O)(), v = el(n), b = (0, M.qZ)(), E = o ? m : d._jp;
  return (0, i.jsx)(d.YNO, {
    targetElementRef: s,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(M.Ay, {
        allAvailableChannelRows: b,
        currentVoiceChannel: t,
        onClose: v(n),
        onSelect: c
      })
    },
    align: "center",
    position: "top",
    animation: d.YNO.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(ea, {
        ref: s,
        iconComponent: E,
        tooltip: o ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
        onClick: o ? u : g(n),
        defaultColor: o ? "disconnect" : true,
        onMouseEnter: y,
        onMouseLeave: A,
        onContextMenu: g(n),
        isActive: r,
        onPopoutClick: o ? g(n) : true,
        popoutOpen: r,
        isTrayButton: true
      })
    }
  })
}

function ep(e) {
  let {
    voiceChannel: t
  } = e, n = (0, l.bG)([Y.A], () => Y.A.getGuild(t.getGuildId()), [t]);
  switch (true) {
    case t.isGroupDM() || t.isDM():
    case t.isDM():
      return null;
    case null != n:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: ei.rK
        }), (0, i.jsxs)("div", {
          className: ei._C,
          children: [(0, i.jsx)(j.A, {
            guild: n,
            size: j.A.Sizes.SMOL,
            className: ei.$f
          }), (0, i.jsx)(d.Text, {
            tag: "div",
            variant: "text-sm/medium",
            color: "text-strong",
            className: ei.J5,
            children: n.name
          })]
        })]
      });
    default:
      return null
  }
}

function ef(e) {
  let {
    voiceChannel: t
  } = e, n = (0, _.gU)(t), r = (0, x.Ay)(t);
  return (0, i.jsxs)("div", {
    className: ei.Wh,
    children: [null != n && (0, i.jsx)(d.Text, {
      tag: "div",
      color: "text-muted",
      variant: "text-xs/normal",
      className: ei.p,
      children: (0, i.jsx)(n, {
        size: "sm",
        color: "currentColor"
      })
    }), null != r && (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: ei.HA,
      children: r
    })]
  })
}

function eg(e) {
  var t, n;
  let {
    voiceChannel: r
  } = e, a = null == r ? true : r.id, s = (0, l.cf)([K.A], () => ({
    quality: K.A.getQuality(),
    state: K.A.getState(),
    lastPing: K.A.getLastPing()
  })), o = (0, l.bG)([X.A], () => null != a && X.A.hasVideo(a), [a]);
  return null != a && null != r && (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(T.A, (t = er({}, s), n = n = {
      channelId: a,
      hasVideo: o,
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
    }), t)), (0, i.jsx)(ep, {
      voiceChannel: r
    }), (0, i.jsx)("div", {
      className: ei.rK
    }), (0, i.jsx)(ef, {
      voiceChannel: r
    })]
  })
}