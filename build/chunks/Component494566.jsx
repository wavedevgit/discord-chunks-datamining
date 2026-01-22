/** Chunk was on 71447 **/
/** chunk id: 494566, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GF: () => ec,
  LK: () => em,
  NO: () => ep,
  Yb: () => es,
  pp: () => eo,
  sm: () => ed,
  un: () => eu
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
  Chunk927258 = require("./927258.js"),
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
    tooltip: o,
    defaultColor: s = "primaryDark",
    highlightedColor: c = "primaryDark",
    caretColor: u,
    popoutOpen: d,
    onClick: p,
    popoutDisabled: h,
    onPopoutClick: f,
    onMouseEnter: m,
    onMouseLeave: g,
    onContextMenu: y,
    isTrayButton: A
  } = e, O = function(e, t) {
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
  return (0, i.jsx)(V.l, {
    ref: t,
    onClick: null != p ? p : () => {},
    color: n ? c : s,
    className: ei.x6,
    disabled: r,
    popoutOpen: d,
    popoutDisabled: h,
    label: o,
    isTrayButton: A,
    onMouseEnter: e => {
      null == m || m(e)
    },
    onMouseLeave: e => {
      null == g || g(e)
    },
    iconComponent: l,
    iconColor: a,
    caretColor: u,
    isActive: n,
    onContextMenu: y,
    onPopoutClick: f,
    "aria-label": O["aria-label"]
  })
}

function eo(e) {
  var t;
  let {
    voiceChannel: n,
    locked: a
  } = e, o = r.useRef(null), {
    suppress: s,
    selfMute: c,
    mute: u
  } = (0, D.A)(n), p = c || u || s, h = (0, A.A)(c, u, s, false), {
    Component: f,
    play: g,
    events: y
  } = (0, G.q)(p);
  r.useEffect(() => () => g(), [g, p]);
  let E = el(a),
    v = e => t => {
      e(t), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
        type: Q.Z5.MICROPHONE,
        value: Q.IP.SETTINGS_OPENED
      })
    },
    S = null == (t = (0, ee.b4)()) ? true : t.id,
    x = (0, l.bG)([q.A], () => q.A.isLimitedInteractionOverrideEnabled(S)),
    j = (0, U.Cg)({
      location: m.A.OVERLAY,
      autoTrackExposure: true
    });
  return (0, i.jsx)(d.YNO, {
    targetElementRef: o,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e, n = E(t);
      return j ? (0, i.jsx)(z.a, {
        wide: true,
        showOutputDevices: true,
        onSettingsButtonClick: n,
        showSearchBar: !x
      }) : (0, i.jsx)(O.A, {
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
        ref: o,
        iconComponent: f,
        isActive: p,
        highlightedColor: "red",
        tooltip: h,
        onClick: () => {
          (0, b.A)(u, s, et.JJy.OVERLAY), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
            type: Q.Z5.MICROPHONE,
            value: p ? Q.IP.ENABLED : Q.IP.DISABLED,
            userId: Y.default.getId()
          })
        },
        onPopoutClick: v(n),
        onContextMenu: v(n),
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

function es(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, l = r.useRef(null), {
    selfDeaf: a,
    deaf: s
  } = (0, _.A)(t), c = a || s, {
    Component: u,
    play: p,
    events: {
      onMouseEnter: h,
      onMouseLeave: f
    }
  } = (0, o.I)(c ? "undeafen" : "deafen"), m = s ? d.TJE : u;
  r.useEffect(() => () => p(), [c, p]);
  let g = () => {
      (0, v.A)(s, et.JJy.OVERLAY), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
        type: Q.Z5.AUDIO,
        value: s ? Q.IP.ENABLED : Q.IP.DISABLED,
        userId: Y.default.getId()
      })
    },
    A = e => t => {
      e(t), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
        type: Q.Z5.AUDIO,
        value: Q.IP.SETTINGS_OPENED
      })
    },
    E = el(n);
  return (0, i.jsx)(d.YNO, {
    targetElementRef: l,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(O.A, {
        onClose: E(t),
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
        iconComponent: m,
        tooltip: (0, y.A)(a, s, false),
        isActive: c,
        highlightedColor: "red",
        onClick: g,
        onContextMenu: A(n),
        onMouseEnter: h,
        onMouseLeave: f,
        onPopoutClick: A(n),
        popoutOpen: r,
        isTrayButton: true
      })
    }
  })
}

function ec(e) {
  var t;
  let {
    voiceChannel: n,
    locked: a
  } = e, o = r.useRef(null), s = (0, l.bG)([K.A], () => K.A.isVideoEnabled()), c = (0, l.bG)([K.A], () => Object.values(K.A.getVideoDevices())[0]), h = null == (t = null == c ? true : c.disabled) || t, f = false === h, m = (0, P.A)(n), g = e => {
    p.A.setVideoEnabled(e)
  }, y = e => t => {
    e(t), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
      type: Q.Z5.CAMERA,
      value: Q.IP.SETTINGS_OPENED
    })
  }, A = () => {
    h ? f ? g(true) : (0, M.A)() : g(!s), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
      type: Q.Z5.CAMERA,
      value: s ? Q.IP.DISABLED : Q.IP.ENABLED,
      userId: Y.default.getId()
    })
  }, {
    Component: O,
    play: v,
    events: {
      onMouseEnter: b,
      onMouseLeave: S
    }
  } = (0, u.K)(s ? "disable" : "enable"), x = null != n ? (0, R.Q)({
    enabled: s,
    cameraUnavailable: h,
    hasPermission: m,
    channel: n
  }) : true;
  r.useEffect(() => () => v(), [s, v]);
  let j = el(a),
    I = null == n || !m;
  return (0, i.jsx)(d.YNO, {
    targetElementRef: o,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(E.A, {
        onClose: j(t),
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
        ref: o,
        iconComponent: O,
        tooltip: x,
        onClick: A,
        isActive: s,
        highlightedColor: "green",
        onPopoutClick: y(n),
        popoutOpen: r,
        onContextMenu: y(n),
        onMouseEnter: b,
        onMouseLeave: S,
        disabled: I,
        isTrayButton: true
      })
    }
  })
}

function eu(e) {
  let t, {
      voiceChannel: n,
      locked: a
    } = e,
    o = r.useRef(null),
    c = (0, l.bG)([B.default], () => B.default.getCurrentUser()),
    u = (0, P.A)(n),
    p = (0, l.cf)([K.A], () => (0, j.A)(K.A)),
    h = (0, l.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
    f = (0, l.bG)([$.A], () => $.A.getTargetPID()),
    m = (0, J.y)({
      pid: f,
      allowOneClickGoLive: true,
      analyticsLocation: et.ThZ.UNLOCKED_OVERLAY
    }),
    g = () => {
      m(), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
        type: Q.Z5.GO_LIVE,
        value: Q.IP.ENABLED,
        userId: Y.default.getId()
      })
    },
    y = null != h;
  if (y) t = en.intl.string(en.t.S5anIc);
  else if (null != n) {
    let e = (0, ee.qv)();
    t = u ? null != e ? en.intl.format(en.t.AB5gTy, {
      game: e.name
    }) : en.intl.string(en.t.FeUKeA) : en.intl.string(en.t.uQn9B8)
  }
  let A = () => {
      if (y) return (0, Q.YX)(et.uss.QUICK_ACTIONS, {
        type: Q.Z5.GO_LIVE,
        value: Q.IP.DISABLED,
        userId: Y.default.getId()
      }), (0, I.A)(h, false);
      g()
    },
    O = e => t => {
      e(t), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
        type: Q.Z5.SCREEN_SHARE,
        value: Q.IP.SETTINGS_OPENED
      })
    },
    {
      Component: E,
      events: {
        onMouseEnter: v,
        onMouseLeave: b
      },
      play: S
    } = (0, s.c)(y ? "disable" : "enable");
  r.useEffect(() => () => S(), [y, S]);
  let x = el(a);
  return (0, i.jsx)(d.YNO, {
    targetElementRef: o,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(L.A, {
        channel: n,
        currentUser: c,
        activeStreams: y ? [h] : [],
        handleGoLive: g,
        onClose: x(t),
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
        ref: o,
        iconComponent: E,
        tooltip: t,
        "aria-label": en.intl.string(en.t.FeUKeA),
        isActive: y,
        highlightedColor: "green",
        onClick: A,
        popoutOpen: l,
        popoutDisabled: !y,
        onPopoutClick: O(r),
        onContextMenu: O(r),
        onMouseEnter: v,
        onMouseLeave: b,
        disabled: !p || !u,
        isTrayButton: true
      })
    }
  })
}

function ed(e) {
  var t;
  let {
    voiceChannel: a,
    locked: o
  } = e, s = r.useRef(null), u = null != (t = null == a ? true : a.getGuildId()) ? t : null, {
    mute: p,
    suppress: f
  } = (0, D.A)(a), m = (0, l.bG)([K.A], () => K.A.isDeaf()), y = null == a || p || f || m, {
    analyticsLocations: A
  } = (0, g.Ay)();

  function O(e) {
    null != u && ((0, Q.YX)(et.uss.QUICK_ACTIONS, {
      type: Q.Z5.SOUNDBOARD,
      value: Q.IP.SETTINGS_OPENED
    }), (0, h.L3)(e, async () => {
      let {
        default: e
      } = await n.e("51111").then(n.bind(n, 323002));
      return t => (0, i.jsx)(e, er({
        sourceAnalyticsLocations: A,
        guildId: u
      }, t))
    }))
  }
  let {
    Component: E,
    events: {
      onClick: v,
      onMouseEnter: b,
      onMouseLeave: S
    }
  } = (0, c.E)(), x = el(o), j = (0, l.bG)([T.A, Y.default], () => T.A.isUserPlayingSounds(Y.default.getId()), []) ? "green" : true;
  return (0, i.jsx)(d.YNO, {
    targetElementRef: s,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return y || null == a ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(C.A, {
        guildId: u,
        channel: a,
        onClose: x(t),
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
        ref: s,
        iconComponent: E,
        tooltip: p ? en.intl.string(en.t["Ox4/zU"]) : f ? en.intl.string(en.t["+YBKYI"]) : m ? en.intl.string(en.t.X1lQli) : true,
        onClick: e => {
          v(), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
            type: Q.Z5.SOUNDBOARD,
            value: Q.IP.PANEL_OPENED,
            userId: Y.default.getId()
          }), n(e)
        },
        highlightedColor: j,
        defaultColor: j,
        onContextMenu: O,
        onMouseEnter: b,
        onMouseLeave: S,
        isActive: r,
        popoutOpen: r,
        disabled: y,
        isTrayButton: true
      })
    }
  })
}

function ep(e) {
  let {
    voiceChannel: t,
    locked: n
  } = e, o = r.useRef(null), s = (0, l.bG)([W.A], () => W.A.getVoiceChannelId() === (null == t ? true : t.id)), c = () => {
    (0, Q.YX)(et.uss.QUICK_ACTIONS, {
      type: Q.Z5.CALL_BUTTON,
      value: Q.IP.DISABLED,
      userId: Y.default.getId()
    }), s && f.default.disconnect()
  }, u = (e, t) => {
    f.default.selectVoiceChannel(e), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
      type: Q.Z5.CALL_BUTTON,
      value: Q.IP.ENABLED,
      userId: Y.default.getId(),
      secondaryValue: t
    })
  }, [p, h] = r.useTransition(), m = e => t => {
    h(() => {
      e(t)
    }), (0, Q.YX)(et.uss.QUICK_ACTIONS, {
      type: Q.Z5.CALL_BUTTON,
      value: Q.IP.SETTINGS_OPENED
    })
  }, {
    Component: g,
    events: {
      onMouseEnter: y,
      onMouseLeave: A
    }
  } = (0, a.O)(), O = el(n), E = s ? g : d._jp;
  return (0, i.jsx)(d.YNO, {
    targetElementRef: o,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(k.A, {
        currentVoiceChannel: t,
        onClose: O(n),
        onSelect: u
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
        iconComponent: E,
        tooltip: s ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
        onClick: s ? c : m(n),
        defaultColor: s ? "disconnect" : true,
        onMouseEnter: y,
        onMouseLeave: A,
        onContextMenu: m(n),
        isActive: r,
        onPopoutClick: s ? m(n) : true,
        popoutOpen: r,
        isTrayButton: true
      })
    }
  })
}

function eh(e) {
  let {
    voiceChannel: t
  } = e, n = (0, l.bG)([F.A], () => F.A.getGuild(t.getGuildId()), [t]);
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
          children: [(0, i.jsx)(N.A, {
            guild: n,
            size: N.A.Sizes.SMOL,
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
  } = e, n = (0, x.gU)(t), r = (0, S.Ay)(t);
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

function em(e) {
  var t, n;
  let {
    voiceChannel: r
  } = e, a = null == r ? true : r.id, o = (0, l.cf)([Z.A], () => ({
    quality: Z.A.getQuality(),
    state: Z.A.getState(),
    lastPing: Z.A.getLastPing()
  })), s = (0, l.bG)([X.A], () => null != a && X.A.hasVideo(a), [a]);
  return null != a && null != r && (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(w.A, (t = er({}, o), n = n = {
      channelId: a,
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
    }), t)), (0, i.jsx)(eh, {
      voiceChannel: r
    }), (0, i.jsx)("div", {
      className: ei.rK
    }), (0, i.jsx)(ef, {
      voiceChannel: r
    })]
  })
}