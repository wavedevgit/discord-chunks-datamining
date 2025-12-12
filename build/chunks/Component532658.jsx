/** Chunk was on web.js **/
/** chunk id: 532658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => $,
  e5: () => F,
  px: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
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
  Chunk538870 = require("./538870.js"),
  Chunk415635 = require("./415635.jsx"),
  Chunk701362 = require("./701362.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk597998 = require("./597998.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk355863 = require("./355863.js"),
  Chunk131951 = require("./131951.js"),
  Chunk606304 = require("./606304.js"),
  Chunk979651 = require("./979651.js"),
  Chunk136015 = require("./136015.js"),
  Chunk51144 = require("./51144.js"),
  Chunk444295 = require("./444295.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213285 = require("./213285.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  switch (e) {
    case x.ipw.LARGE:
      return c.EFr.SIZE_32;
    case x.ipw.SMALL:
      return c.EFr.SIZE_24;
    default:
      return c.EFr.SIZE_32
  }
}

function F(e) {
  return c.ny6[e].size
}
let B = () => require.e("43841").then(require.t.bind(require, 737848, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  V = 1e4,
  H = 2600,
  Y = 16,
  W = {
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
  K = {
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

function z(e, t) {
  let [n, r] = i.useState(null != e && e > Date.now() - V), [o, a] = i.useState(false), [s, l] = i.useState(true);
  return (0, h.ZP)(() => {
    n && !t && (l(false), setTimeout(() => {
      a(true)
    }, Y))
  }), (0, h.ZP)(() => {
    let e = setTimeout(() => {
      r(false), setTimeout(() => {
        a(false)
      }, Y)
    }, H);
    return () => clearTimeout(e)
  }), i.useMemo(() => ({
    showConnectedAnimation: o,
    recentlyConnected: n,
    hideConnectedAnimation: s,
    setHideConnectedAnimation: l
  }), [o, n, s, l])
}
let q = Chunk473749.memo(function(e) {
    let {
      nick: t,
      connectedOn: n,
      isSettingsPreview: o,
      voiceBackgroundWidth: u,
      rightAlign: d = false
    } = e, {
      showConnectedAnimation: f,
      recentlyConnected: p,
      hideConnectedAnimation: m,
      setHideConnectedAnimation: h
    } = z(n, o), {
      ref: E,
      width: b
    } = (0, _.ZP)(), y = (0, l.e7)([g.Z], () => g.Z.useReducedMotion), O = p ? "entering" : "exiting", {
      width: v
    } = (0, s.useSpring)(G(k({}, W[O]), {
      width: f ? b : u
    })), {
      opacity: S
    } = (0, s.useSpring)(G(k({}, K[O]), {
      opacity: +!!f,
      onRest: () => {
        f || h(true)
      }
    })), I = i.useMemo(() => m || y ? "none" : "block", [m, y]);
    return (0, r.jsx)(s.animated.div, {
      className: a()(j.connectedAnimationContainer, {
        [j.right]: d
      }),
      style: {
        width: v,
        opacity: S,
        display: I
      },
      children: (0, r.jsxs)("div", {
        ref: E,
        className: a()(j.connectedAnimationInnerContainer, {
          [j.exiting]: "exiting" === O,
          [j.left]: !d,
          [j.right]: d
        }),
        children: [d && (0, r.jsx)(c.Fmz, {
          importData: B,
          shouldAnimate: !y,
          className: j.animation
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: L.intl.format(L.t.uFcReq, {
              nick: t
            })
          })
        }), !d && (0, r.jsx)(c.Fmz, {
          importData: B,
          shouldAnimate: !y,
          className: j.animation
        }), (0, r.jsx)("div", {
          className: j.emptySpace
        })]
      })
    })
  }),
  Q = Chunk473749.memo(function(e) {
    let {
      avatarSize: t,
      userId: n,
      channelId: i,
      guildId: o
    } = e, a = 2 * t, s = -(t / 2);
    return (0, r.jsx)("div", {
      className: j.effect,
      style: {
        top: s,
        left: s,
        width: a,
        height: a
      },
      children: (0, r.jsx)(b.Z, {
        userId: n,
        channelId: i,
        guildId: o,
        containerDimensions: {
          width: a,
          height: a
        }
      })
    })
  }),
  X = Chunk473749.memo(Chunk481060.qEK),
  J = Chunk473749.memo(function(e) {
    let {
      channel: t,
      flipped: n = false,
      locked: o = false,
      user: s,
      nick: u,
      displayNameMode: d,
      displayUserMode: f,
      size: h = x.ipw.LARGE,
      onClick: g,
      onContextMenu: b,
      context: v,
      guildId: C,
      isSettingsPreview: w = false,
      voiceState: L,
      showStreamPreview: M,
      onShowStreamPreview: k,
      onWatchStream: U,
      connectedOn: G,
      ref: B
    } = e, V = (0, l.e7)([T.default], () => T.default.getId() === s.id, [s.id]), {
      ref: H,
      width: Y
    } = (0, _.ZP)(), {
      showConnectedAnimation: W
    } = z(G, w), K = null == L ? true : L.sessionId, J = t.id, $ = s.id, [ee] = (0, l.e7)([P.Z], () => {
      var e;
      return [null != (e = P.Z.getVoiceStateForChannel(J, $)) ? e : P.Z.getVoiceStateForSession($, K), P.Z.getVoiceStateVersion()]
    }, [J, $, K], R.Q), et = w ? L : null != ee ? ee : L, [en, er, ei] = (0, l.Wu)([A.Z], () => V ? [!A.Z.isSupported() || A.Z.isSelfMute() || A.Z.isSelfMutedTemporarily(), A.Z.isSelfDeaf(), false] : [!A.Z.isSupported() || A.Z.isLocalMute(s.id), false, A.Z.isLocalVideoDisabled(s.id)], [V, s.id]), eo = (0, l.e7)([I.Z], () => {
      let e = I.Z.getCurrentUserActiveStream();
      return null != e && e.ownerId !== s.id && I.Z.getViewerIds(e).filter(e => e === s.id).length > 0
    }, [s.id]), ea = w && (null == L ? true : L.discoverable), es = (0, m.Z)({
      userId: s.id,
      context: v
    }) || ea, el = (0, l.e7)([I.Z], () => I.Z.getStreamForUser(s.id, C)), ec = null != el, eu = i.useCallback(() => {
      (M || null != ec) && k(null)
    }, [k, M, ec]), ed = i.useCallback(() => (0, r.jsx)(y.Z, {
      user: s,
      channel: t,
      onWatch: () => {
        null != el && ((0, p.rn)(el, {
          forceMultiple: true,
          noFocus: true
        }), eu(), U(null != el ? el : null))
      },
      onAction: () => U,
      previewIsOpen: M,
      location: x.Sbl.UNLOCKED_OVERLAY,
      hideTip: true
    }), [s, t, el, M, eu, U]), ef = i.useCallback(e => {
      o || null == b || b(e, s)
    }, [o, b, s]), ep = i.useCallback(() => {
      o || null != ec && k(s.id)
    }, [o, k, ec, s]), e_ = o || w, em = i.useMemo(() => Z(h), [h]), eh = i.useMemo(() => F(em), [em]), eg = i.useMemo(() => s.getAvatarURL(C, eh), [s, C, eh]), eE = (0, l.e7)([N.Z], () => N.Z.getVoiceVolume($));
    return f === x.OYC.ONLY_WHILE_SPEAKING && e_ && !es || null == et ? null : n ? (0, r.jsxs)(c.P3F, {
      innerRef: B,
      className: a()(j.voiceUser, {
        [j.speaking]: es,
        [j.interactive]: !o,
        [j.flipped]: n,
        [j.justConnected]: W
      }),
      onClick: o ? true : e => null == g ? true : g(e, s),
      onContextMenu: ef,
      onMouseEnter: ep,
      onMouseLeave: eu,
      children: [e_ && (d === x.wC$.NEVER || !es && d === x.wC$.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.yRy, {
        targetElementRef: H,
        position: "left",
        renderPopout: ed,
        shouldShow: M,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: j.username,
          ref: H,
          children: [(0, r.jsx)(S.nm, {
            guildId: C,
            user: s,
            video: et.selfVideo,
            isStreaming: ec,
            className: j.voiceIcons,
            iconClassName: j.voiceIcon,
            isWatching: eo,
            localMute: en && !V,
            localVideoDisabled: ei,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !V,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          }), !w && (0, r.jsx)(O.ZP, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: C,
            className: j.clanTag,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, D.Ws)(x.Odu.VOICE_V3, {
                type: D.Qu.VOICE,
                value: D.bk.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          })]
        })
      }), !V && (0, r.jsx)(q, {
        nick: u,
        connectedOn: G,
        isSettingsPreview: w,
        voiceBackgroundWidth: Y,
        rightAlign: true
      }), (0, r.jsx)(X, {
        className: j.avatar,
        size: em,
        src: eg,
        isSpeaking: es,
        voiceDb: eE,
        speakingStylesConfig: {
          spreadDirection: E.h.OUTSET_ONLY,
          maxOuterSpreadRadius: 4
        },
        "aria-hidden": true
      }), (0, r.jsx)(Q, {
        avatarSize: eh,
        userId: s.id,
        channelId: t.id,
        guildId: t.getGuildId()
      })]
    }) : (0, r.jsxs)(c.P3F, {
      innerRef: B,
      className: a()(j.voiceUser, {
        [j.speaking]: es,
        [j.interactive]: !o,
        [j.flipped]: n,
        [j.justConnected]: W
      }),
      onClick: o ? true : e => null == g ? true : g(e, s),
      onContextMenu: ef,
      onMouseEnter: ep,
      onMouseLeave: eu,
      children: [(0, r.jsx)(X, {
        className: j.avatar,
        size: em,
        src: eg,
        isSpeaking: es,
        voiceDb: eE,
        speakingStylesConfig: {
          spreadDirection: E.h.OUTSET_ONLY,
          maxOuterSpreadRadius: 4
        },
        "aria-hidden": true
      }), !V && (0, r.jsx)(q, {
        nick: u,
        connectedOn: G,
        isSettingsPreview: w,
        voiceBackgroundWidth: Y
      }), e_ && (d === x.wC$.NEVER || !es && d === x.wC$.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.yRy, {
        targetElementRef: H,
        position: "right",
        renderPopout: ed,
        shouldShow: M,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: a()(j.username, {
            [j.streaming]: ec
          }),
          ref: H,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          }), !w && (0, r.jsx)(O.ZP, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: C,
            className: j.clanTag,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, D.Ws)(x.Odu.VOICE_V3, {
                type: D.Qu.VOICE,
                value: D.bk.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(S.nm, {
            guildId: C,
            user: s,
            video: et.selfVideo,
            isStreaming: ec,
            className: j.voiceIcons,
            iconClassName: j.voiceIcon,
            isWatching: eo,
            localMute: en && !V,
            localVideoDisabled: ei,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !V,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          })]
        })
      })]
    })
  }),
  $ = Chunk473749.memo(function(e) {
    let {
      widgetId: t,
      channel: o,
      sortedVoiceState: a,
      displayNameMode: s,
      displayUserMode: l,
      locked: c,
      flipped: p,
      size: _,
      isPreviewingInGame: m,
      isSettingsPreview: h,
      context: g
    } = e, E = i.useRef(null), {
      user: b,
      member: y,
      voiceState: O,
      connectedOn: S
    } = a, [I, T] = i.useState(null), [A, N] = i.useState(null);
    i.useEffect(() => {
      c && N(null)
    }, [c]), i.useEffect(() => {
      null != I && (0, D.Ws)(x.Odu.VOICE_V3, {
        type: D.Qu.GO_LIVE,
        value: D.bk.STREAM_PREVIEWED
      })
    }, [I]);
    let P = e => {
        T(e)
      },
      R = (e, t) => {
        h || (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
          return (0, D.Ws)(x.Odu.VOICE_V3, {
            type: D.Qu.VOICE,
            value: D.bk.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, G(k({}, n), {
            user: t,
            channelId: null == o ? true : o.id,
            guildId: null == o ? true : o.guild_id,
            mediaEngineContext: g,
            onShowProfile: () => N(t.id),
            appContext: x.IlC.OVERLAY,
            onWatchStream: () => {
              (0, D.Ws)(x.Odu.VOICE_V3, {
                type: D.Qu.GO_LIVE,
                value: D.bk.ENABLED,
                userId: t.id
              })
            }
          }))
        })
      },
      L = i.useCallback(e => {
        var n, r;
        let i = null == (n = C.Z.getWidget(t)) ? true : n.layoutId,
          a = null != i ? null == (r = C.Z.getWidgetsForLayout(i)) ? true : r.find(e => e.type === x.Odu.GO_LIVE) : null;
        null == a || a.pinned || ((0, d.xh)(a.id), f.Z.track(x.rMx.OVERLAY_PIN_TOGGLED, {
          pinned: true,
          guild_id: null == o ? true : o.guild_id,
          channel_id: null == o ? true : o.id,
          channel_type: null == o ? true : o.type,
          widget_type: x.Odu.GO_LIVE
        })), null != e && null != a && (0, D.Ws)(x.Odu.VOICE_V3, {
          type: D.Qu.GO_LIVE,
          value: D.bk.ENABLED,
          userId: e.ownerId
        })
      }, [o, t]);
    if (null == b || null == o || null == O) return null;
    let j = c || m;
    return (0, r.jsx)(v.Z, {
      targetElementRef: E,
      user: b,
      guildId: o.guild_id,
      channelId: o.id,
      appContext: x.IlC.OVERLAY,
      shouldShow: A === b.id,
      onRequestClose: () => N(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)(J, {
          ref: E,
          guildId: null == o ? true : o.guild_id,
          user: b,
          connectedOn: S,
          nick: null != (e = null == y ? true : y.nick) ? e : w.ZP.getName(b),
          flipped: p,
          voiceState: O,
          displayNameMode: s,
          displayUserMode: l,
          size: _,
          locked: j,
          onContextMenu: R,
          onClick: R,
          context: g,
          channel: o,
          showStreamPreview: b.id === I,
          onShowStreamPreview: P,
          onWatchStream: L,
          isSettingsPreview: h
        })
      }
    }, b.id)
  })