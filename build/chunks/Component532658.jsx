/** Chunk was on web.js **/
/** chunk id: 532658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => Q,
  e5: () => G,
  px: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk636606 = require("./636606.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk872810 = require("./872810.js"),
  Chunk393238 = require("./393238.js"),
  Chunk586902 = require("./586902.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk415635 = require("./415635.jsx"),
  Chunk701362 = require("./701362.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk456077 = require("./456077.jsx"),
  Chunk597998 = require("./597998.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk355863 = require("./355863.js"),
  Chunk131951 = require("./131951.js"),
  Chunk979651 = require("./979651.js"),
  Chunk136015 = require("./136015.js"),
  Chunk51144 = require("./51144.js"),
  Chunk444295 = require("./444295.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk133214 = require("./133214.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U(e) {
  switch (e) {
    case D.ipw.LARGE:
      return c.EFr.SIZE_32;
    case D.ipw.SMALL:
      return c.EFr.SIZE_24;
    default:
      return c.EFr.SIZE_32
  }
}

function G(e) {
  return c.ny6[e].size
}
let B = () => require.e("43841").then(require.t.bind(require, 737848, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  Z = 1e4,
  F = 2600,
  V = 16,
  H = {
    entering: {
      config: {
        mass: .2,
        tension: 180,
        friction: 14
      }
    },
    exiting: {
      config: {
        mass: 1,
        tension: 80,
        friction: 10,
        clamp: true
      }
    }
  },
  Y = {
    entering: {
      config: {
        mass: .5,
        tension: 240,
        friction: 10
      }
    },
    exiting: {
      config: {
        mass: 1.5,
        tension: 300,
        friction: 30,
        clamp: true
      },
      delay: 300
    }
  };

function W(e, t) {
  let [n, r] = i.useState(null != e && e > Date.now() - Z), [a, o] = i.useState(false), [s, l] = i.useState(true);
  return (0, m.ZP)(() => {
    n && !t && (l(false), setTimeout(() => {
      o(true)
    }, V))
  }), (0, m.ZP)(() => {
    let e = setTimeout(() => {
      r(false), setTimeout(() => {
        o(false)
      }, V)
    }, F);
    return () => clearTimeout(e)
  }), i.useMemo(() => ({
    showConnectedAnimation: a,
    recentlyConnected: n,
    hideConnectedAnimation: s,
    setHideConnectedAnimation: l
  }), [a, n, s, l])
}
let K = Chunk473749.memo(function(e) {
    let {
      nick: t,
      connectedOn: n,
      isSettingsPreview: a,
      voiceBackgroundWidth: u,
      rightAlign: d = false
    } = e, {
      showConnectedAnimation: f,
      recentlyConnected: _,
      hideConnectedAnimation: h,
      setHideConnectedAnimation: m
    } = W(n, a), {
      ref: E,
      width: b
    } = (0, p.ZP)(), y = (0, l.e7)([g.Z], () => g.Z.useReducedMotion), O = _ ? "entering" : "exiting", {
      width: v
    } = (0, s.useSpring)(j(M({}, H[O]), {
      width: f ? b : u
    })), {
      opacity: I
    } = (0, s.useSpring)(j(M({}, Y[O]), {
      opacity: +!!f,
      onRest: () => {
        f || m(true)
      }
    })), T = i.useMemo(() => h || y ? "none" : "block", [h, y]);
    return (0, r.jsx)(s.animated.div, {
      className: o()(L.connectedAnimationContainer, {
        [L.right]: d
      }),
      style: {
        width: v,
        opacity: I,
        display: T
      },
      children: (0, r.jsxs)("div", {
        ref: E,
        className: o()(L.connectedAnimationInnerContainer, {
          [L.exiting]: "exiting" === O,
          [L.left]: !d,
          [L.right]: d
        }),
        children: [d && (0, r.jsx)(c.Fmz, {
          importData: B,
          shouldAnimate: !y,
          className: L.animation
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: w.intl.format(w.t.uFcReq, {
              nick: t
            })
          })
        }), !d && (0, r.jsx)(c.Fmz, {
          importData: B,
          shouldAnimate: !y,
          className: L.animation
        }), (0, r.jsx)("div", {
          className: L.emptySpace
        })]
      })
    })
  }),
  z = Chunk473749.memo(function(e) {
    let {
      avatarSize: t,
      userId: n,
      channelId: i,
      guildId: a
    } = e, o = 2 * t, s = -(t / 2);
    return (0, r.jsx)("div", {
      className: L.effect,
      style: {
        top: s,
        left: s,
        width: o,
        height: o
      },
      children: (0, r.jsx)(E.Z, {
        userId: n,
        channelId: i,
        guildId: a,
        containerDimensions: {
          width: o,
          height: o
        }
      })
    })
  }),
  q = Chunk473749.memo(Chunk481060.qEK),
  X = Chunk473749.memo(function(e) {
    let {
      channel: t,
      flipped: n = false,
      locked: a = false,
      user: s,
      nick: u,
      displayNameMode: d,
      displayUserMode: f,
      size: m = D.ipw.LARGE,
      onClick: g,
      onContextMenu: E,
      context: O,
      guildId: S,
      isSettingsPreview: R = false,
      voiceState: w,
      showStreamPreview: x,
      onShowStreamPreview: M,
      onWatchStream: k,
      connectedOn: j,
      ref: B
    } = e, Z = (0, l.e7)([T.default], () => T.default.getId() === s.id, [s.id]), {
      ref: F,
      width: V
    } = (0, p.ZP)(), {
      showConnectedAnimation: H
    } = W(j, R), Y = null == w ? true : w.sessionId, X = t.id, Q = s.id, [J] = (0, l.e7)([C.Z], () => {
      var e;
      return [null != (e = C.Z.getVoiceStateForChannel(X, Q)) ? e : C.Z.getVoiceStateForSession(Q, Y), C.Z.getVoiceStateVersion()]
    }, [X, Q, Y], N.Q), $ = R ? w : null != J ? J : w, [ee, et, en] = (0, l.Wu)([A.Z], () => Z ? [!A.Z.isSupported() || A.Z.isSelfMute() || A.Z.isSelfMutedTemporarily(), A.Z.isSelfDeaf(), false] : [!A.Z.isSupported() || A.Z.isLocalMute(s.id), false, A.Z.isLocalVideoDisabled(s.id)], [Z, s.id]), er = (0, l.e7)([I.Z], () => {
      let e = I.Z.getCurrentUserActiveStream();
      return null != e && e.ownerId !== s.id && I.Z.getViewerIds(e).filter(e => e === s.id).length > 0
    }, [s.id]), ei = R && (null == w ? true : w.discoverable), ea = (0, h.Z)({
      userId: s.id,
      context: O
    }) || ei, eo = (0, l.e7)([I.Z], () => I.Z.getStreamForUser(s.id, S)), es = null != eo, el = i.useCallback(() => {
      (x || null != es) && M(null)
    }, [M, x, es]), ec = i.useCallback(() => (0, r.jsx)(b.Z, {
      user: s,
      channel: t,
      onWatch: () => {
        null != eo && ((0, _.rn)(eo, {
          forceMultiple: true,
          noFocus: true
        }), el(), k(null != eo ? eo : null))
      },
      onAction: () => k,
      previewIsOpen: x,
      location: D.Sbl.UNLOCKED_OVERLAY,
      hideTip: true
    }), [s, t, eo, x, el, k]), eu = i.useCallback(e => {
      a || null == E || E(e, s)
    }, [a, E, s]), ed = i.useCallback(() => {
      a || null != es && M(s.id)
    }, [a, M, es, s]), ef = a || R, e_ = i.useMemo(() => U(m), [m]), ep = i.useMemo(() => G(e_), [e_]), eh = i.useMemo(() => s.getAvatarURL(S, ep), [s, S, ep]);
    return f === D.OYC.ONLY_WHILE_SPEAKING && ef && !ea || null == $ ? null : n ? (0, r.jsxs)(c.P3F, {
      innerRef: B,
      className: o()(L.voiceUser, {
        [L.speaking]: ea,
        [L.interactive]: !a,
        [L.flipped]: n,
        [L.justConnected]: H
      }),
      onClick: a ? true : e => null == g ? true : g(e, s),
      onContextMenu: eu,
      onMouseEnter: ed,
      onMouseLeave: el,
      children: [ef && (d === D.wC$.NEVER || !ea && d === D.wC$.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.yRy, {
        targetElementRef: F,
        position: "left",
        renderPopout: ec,
        shouldShow: x,
        onRequestClose: el,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: L.username,
          ref: F,
          children: [(0, r.jsx)(v.nm, {
            guildId: S,
            user: s,
            video: $.selfVideo,
            isStreaming: es,
            className: L.voiceIcons,
            iconClassName: L.voiceIcon,
            isWatching: er,
            localMute: ee && !Z,
            localVideoDisabled: en,
            mute: $.isVoiceMuted(),
            deaf: $.isVoiceDeafened() || et && !Z,
            serverMute: $.mute || $.suppress,
            serverDeaf: $.deaf,
            disabled: false
          }), !R && (0, r.jsx)(y.ZP, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: S,
            className: L.clanTag,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, P.Ws)(D.Odu.VOICE_V3, {
                type: P.Qu.VOICE,
                value: P.bk.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          })]
        })
      }), !Z && (0, r.jsx)(K, {
        nick: u,
        connectedOn: j,
        isSettingsPreview: R,
        voiceBackgroundWidth: V,
        rightAlign: true
      }), (0, r.jsx)(q, {
        className: L.avatar,
        size: e_,
        src: eh,
        "aria-hidden": true
      }), (0, r.jsx)(z, {
        avatarSize: ep,
        userId: s.id,
        channelId: t.id,
        guildId: t.getGuildId()
      })]
    }) : (0, r.jsxs)(c.P3F, {
      innerRef: B,
      className: o()(L.voiceUser, {
        [L.speaking]: ea,
        [L.interactive]: !a,
        [L.flipped]: n,
        [L.justConnected]: H
      }),
      onClick: a ? true : e => null == g ? true : g(e, s),
      onContextMenu: eu,
      onMouseEnter: ed,
      onMouseLeave: el,
      children: [(0, r.jsx)(q, {
        className: L.avatar,
        size: e_,
        src: eh,
        "aria-hidden": true
      }), !Z && (0, r.jsx)(K, {
        nick: u,
        connectedOn: j,
        isSettingsPreview: R,
        voiceBackgroundWidth: V
      }), ef && (d === D.wC$.NEVER || !ea && d === D.wC$.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.yRy, {
        targetElementRef: F,
        position: "right",
        renderPopout: ec,
        shouldShow: x,
        onRequestClose: el,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: o()(L.username, {
            [L.streaming]: es
          }),
          ref: F,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          }), !R && (0, r.jsx)(y.ZP, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: S,
            className: L.clanTag,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, P.Ws)(D.Odu.VOICE_V3, {
                type: P.Qu.VOICE,
                value: P.bk.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(v.nm, {
            guildId: S,
            user: s,
            video: $.selfVideo,
            isStreaming: es,
            className: L.voiceIcons,
            iconClassName: L.voiceIcon,
            isWatching: er,
            localMute: ee && !Z,
            localVideoDisabled: en,
            mute: $.isVoiceMuted(),
            deaf: $.isVoiceDeafened() || et && !Z,
            serverMute: $.mute || $.suppress,
            serverDeaf: $.deaf,
            disabled: false
          })]
        })
      })]
    })
  }),
  Q = Chunk473749.memo(function(e) {
    let {
      widgetId: t,
      channel: a,
      sortedVoiceState: o,
      displayNameMode: s,
      displayUserMode: l,
      locked: c,
      flipped: _,
      size: p,
      isPreviewingInGame: h,
      isSettingsPreview: m,
      context: g
    } = e, E = i.useRef(null), {
      user: b,
      member: y,
      voiceState: v,
      connectedOn: I
    } = o, [T, A] = i.useState(null), [C, N] = i.useState(null);
    i.useEffect(() => {
      c && N(null)
    }, [c]), i.useEffect(() => {
      null != T && (0, P.Ws)(D.Odu.VOICE_V3, {
        type: P.Qu.GO_LIVE,
        value: P.bk.STREAM_PREVIEWED
      })
    }, [T]);
    let w = e => {
        A(e)
      },
      L = (e, t) => {
        m || (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
          return (0, P.Ws)(D.Odu.VOICE_V3, {
            type: P.Qu.VOICE,
            value: P.bk.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, j(M({}, n), {
            user: t,
            channelId: null == a ? true : a.id,
            guildId: null == a ? true : a.guild_id,
            mediaEngineContext: g,
            onShowProfile: () => N(t.id),
            appContext: D.IlC.OVERLAY,
            onWatchStream: () => {
              (0, P.Ws)(D.Odu.VOICE_V3, {
                type: P.Qu.GO_LIVE,
                value: P.bk.ENABLED,
                userId: t.id
              })
            }
          }))
        })
      },
      x = i.useCallback(e => {
        var n, r;
        let i = null == (n = S.Z.getWidget(t)) ? true : n.layoutId,
          o = null != i ? null == (r = S.Z.getWidgetsForLayout(i)) ? true : r.find(e => e.type === D.Odu.GO_LIVE) : null;
        null == o || o.pinned || ((0, d.xh)(o.id), f.Z.track(D.rMx.OVERLAY_PIN_TOGGLED, {
          pinned: true,
          guild_id: null == a ? true : a.guild_id,
          channel_id: null == a ? true : a.id,
          channel_type: null == a ? true : a.type,
          widget_type: D.Odu.GO_LIVE
        })), null != e && null != o && (0, P.Ws)(D.Odu.VOICE_V3, {
          type: P.Qu.GO_LIVE,
          value: P.bk.ENABLED,
          userId: e.ownerId
        })
      }, [a, t]);
    if (null == b || null == a || null == v) return null;
    let k = c || h;
    return (0, r.jsx)(O.Z, {
      targetElementRef: E,
      user: b,
      guildId: a.guild_id,
      channelId: a.id,
      appContext: D.IlC.OVERLAY,
      shouldShow: C === b.id,
      onRequestClose: () => N(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)(X, {
          ref: E,
          guildId: null == a ? true : a.guild_id,
          user: b,
          connectedOn: I,
          nick: null != (e = null == y ? true : y.nick) ? e : R.ZP.getName(b),
          flipped: _,
          voiceState: v,
          displayNameMode: s,
          displayUserMode: l,
          size: p,
          locked: k,
          onContextMenu: L,
          onClick: L,
          context: g,
          channel: a,
          showStreamPreview: b.id === T,
          onShowStreamPreview: w,
          onWatchStream: x,
          isSettingsPreview: m
        })
      }
    }, b.id)
  })