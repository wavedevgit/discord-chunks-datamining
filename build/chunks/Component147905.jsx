/** Chunk was on web.js **/
/** chunk id: 147905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => J,
  FT: () => V,
  Ob: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk401843 = require("./401843.js"),
  Chunk765671 = require("./765671.js"),
  Chunk717558 = require("./717558.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk659974 = require("./659974.js"),
  Chunk66004 = require("./66004.jsx"),
  Chunk142524 = require("./142524.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk481947 = require("./481947.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk555528 = require("./555528.js"),
  Chunk430452 = require("./430452.js"),
  Chunk485296 = require("./485296.js"),
  Chunk977997 = require("./977997.js"),
  Chunk996439 = require("./996439.js"),
  Chunk427262 = require("./427262.js"),
  Chunk810412 = require("./810412.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk585990 = require("./585990.js");

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

function V(e) {
  switch (e) {
    case x.OSZ.LARGE:
      return c._3J.SIZE_32;
    case x.OSZ.SMALL:
      return c._3J.SIZE_24;
    default:
      return c._3J.SIZE_32
  }
}

function F(e) {
  return c.vCh[e].size
}
let B = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  H = 1e4,
  Y = 2600,
  W = 16,
  K = {
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
  z = {
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

function q(e, t) {
  let [n, r] = i.useState(null != e && e > Date.now() - H), [a, s] = i.useState(false), [o, l] = i.useState(true);
  return (0, m.Ay)(() => {
    n && !t && (l(false), setTimeout(() => {
      s(true)
    }, W))
  }), (0, m.Ay)(() => {
    let e = setTimeout(() => {
      r(false), setTimeout(() => {
        s(false)
      }, W)
    }, Y);
    return () => clearTimeout(e)
  }), i.useMemo(() => ({
    showConnectedAnimation: a,
    recentlyConnected: n,
    hideConnectedAnimation: o,
    setHideConnectedAnimation: l
  }), [a, n, o, l])
}
let X = Chunk64700.memo(function(e) {
    let {
      nick: t,
      connectedOn: n,
      isSettingsPreview: a,
      voiceBackgroundWidth: u,
      rightAlign: d = false
    } = e, {
      showConnectedAnimation: f,
      recentlyConnected: p,
      hideConnectedAnimation: h,
      setHideConnectedAnimation: m
    } = q(n, a), {
      ref: E,
      width: b
    } = (0, _.Ay)(), y = (0, l.bG)([g.A], () => g.A.useReducedMotion), O = p ? "entering" : "exiting", {
      width: A
    } = (0, o.useSpring)(G(k({}, K[O]), {
      width: f ? b : u
    })), {
      opacity: v
    } = (0, o.useSpring)(G(k({}, z[O]), {
      opacity: +!!f,
      onRest: () => {
        f || m(true)
      }
    })), S = i.useMemo(() => h || y ? "none" : "block", [h, y]);
    return (0, r.jsx)(o.animated.div, {
      className: s()(j.rH, {
        [j.pG]: d
      }),
      style: {
        width: A,
        opacity: v,
        display: S
      },
      children: (0, r.jsxs)("div", {
        ref: E,
        className: s()(j.LB, {
          [j.RP]: "exiting" === O,
          [j.kb]: !d,
          [j.pG]: d
        }),
        children: [d && (0, r.jsx)(c.akl, {
          importData: B,
          shouldAnimate: !y,
          className: j.lY
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: L.intl.format(L.t.uFcReq, {
              nick: t
            })
          })
        }), !d && (0, r.jsx)(c.akl, {
          importData: B,
          shouldAnimate: !y,
          className: j.lY
        }), (0, r.jsx)("div", {
          className: j.k1
        })]
      })
    })
  }),
  Z = Chunk64700.memo(function(e) {
    let {
      avatarSize: t,
      userId: n,
      channelId: i,
      guildId: a
    } = e, s = 2 * t, o = -(t / 2);
    return (0, r.jsx)("div", {
      className: j.QZ,
      style: {
        top: o,
        left: o,
        width: s,
        height: s
      },
      children: (0, r.jsx)(b.A, {
        userId: n,
        channelId: i,
        guildId: a,
        containerDimensions: {
          width: s,
          height: s
        }
      })
    })
  }),
  Q = Chunk64700.memo(Chunk397927.euF),
  $ = Chunk64700.memo(function(e) {
    let {
      channel: t,
      flipped: n = false,
      locked: a = false,
      user: o,
      nick: u,
      displayNameMode: d,
      displayUserMode: f,
      size: m = x.OSZ.LARGE,
      onClick: g,
      onContextMenu: b,
      context: A,
      guildId: T,
      isSettingsPreview: P = false,
      voiceState: L,
      showStreamPreview: M,
      onShowStreamPreview: k,
      onWatchStream: U,
      connectedOn: G,
      ref: B
    } = e, H = (0, l.bG)([I.default], () => I.default.getId() === o.id, [o.id]), {
      ref: Y,
      width: W
    } = (0, _.Ay)(), {
      showConnectedAnimation: K
    } = q(G, P), z = null == L ? true : L.sessionId, $ = t.id, J = o.id, [ee] = (0, l.bG)([R.A], () => {
      var e;
      return [null != (e = R.A.getVoiceStateForChannel($, J)) ? e : R.A.getVoiceStateForSession(J, z), R.A.getVoiceStateVersion()]
    }, [$, J, z], w.D), et = P ? L : null != ee ? ee : L, [en, er, ei] = (0, l.yK)([C.A], () => H ? [!C.A.isSupported() || C.A.isSelfMute() || C.A.isSelfMutedTemporarily(), C.A.isSelfDeaf(), false] : [!C.A.isSupported() || C.A.isLocalMute(o.id), false, C.A.isLocalVideoDisabled(o.id)], [H, o.id]), ea = (0, l.bG)([S.A], () => {
      let e = S.A.getCurrentUserActiveStream();
      return null != e && e.ownerId !== o.id && S.A.getViewerIds(e).filter(e => e === o.id).length > 0
    }, [o.id]), es = P && (null == L ? true : L.discoverable), eo = (0, h.A)({
      userId: o.id,
      context: A
    }) || es, el = (0, l.bG)([S.A], () => S.A.getStreamForUser(o.id, T)), ec = null != el, eu = i.useCallback(() => {
      (M || null != ec) && k(null)
    }, [k, M, ec]), ed = i.useCallback(() => (0, r.jsx)(y.A, {
      user: o,
      channel: t,
      onWatch: () => {
        null != el && ((0, p.A9)(el, {
          forceMultiple: true,
          noFocus: true
        }), eu(), U(null != el ? el : null))
      },
      onAction: () => U,
      previewIsOpen: M,
      location: x.ThZ.UNLOCKED_OVERLAY,
      hideTip: true
    }), [o, t, el, M, eu, U]), ef = i.useCallback(e => {
      a || null == b || b(e, o)
    }, [a, b, o]), ep = i.useCallback(() => {
      a || null != ec && k(o.id)
    }, [a, k, ec, o]), e_ = a || P, eh = i.useMemo(() => V(m), [m]), em = i.useMemo(() => F(eh), [eh]), eg = i.useMemo(() => o.getAvatarURL(T, em), [o, T, em]), eE = (0, l.bG)([N.A], () => N.A.getVoiceVolume(J));
    return f === x.f5z.ONLY_WHILE_SPEAKING && e_ && !eo || null == et ? null : n ? (0, r.jsxs)(c.DUT, {
      innerRef: B,
      className: s()(j.q7, {
        [j.zY]: eo,
        [j.bG]: !a,
        [j.zq]: n,
        [j.cU]: K
      }),
      onClick: a ? true : e => null == g ? true : g(e, o),
      onContextMenu: ef,
      onMouseEnter: ep,
      onMouseLeave: eu,
      children: [e_ && (d === x.pwA.NEVER || !eo && d === x.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: Y,
        position: "left",
        renderPopout: ed,
        shouldShow: M,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: j.Xh,
          ref: Y,
          children: [(0, r.jsx)(v.Kc, {
            guildId: T,
            user: o,
            video: et.selfVideo,
            isStreaming: ec,
            className: j.ZA,
            iconClassName: j.Ow,
            isWatching: ea,
            localMute: en && !H,
            localVideoDisabled: ei,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !H,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          }), !P && (0, r.jsx)(O.Ay, {
            primaryGuild: o.primaryGuild,
            userId: o.id,
            contextGuildId: T,
            className: j.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, D.YX)(x.uss.VOICE_V3, {
                type: D.Z5.VOICE,
                value: D.IP.PROFILE_OPENED,
                userId: o.id
              })
            }
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          })]
        })
      }), !H && (0, r.jsx)(X, {
        nick: u,
        connectedOn: G,
        isSettingsPreview: P,
        voiceBackgroundWidth: W,
        rightAlign: true
      }), (0, r.jsx)(Q, {
        className: s()(j.my, {
          [j.yS]: eE === false / 0
        }),
        size: eh,
        src: eg,
        isSpeaking: eo,
        voiceDb: eE,
        speakingStylesConfig: {
          spreadDirection: E.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), (0, r.jsx)(Z, {
        avatarSize: em,
        userId: o.id,
        channelId: t.id,
        guildId: t.getGuildId()
      })]
    }) : (0, r.jsxs)(c.DUT, {
      innerRef: B,
      className: s()(j.q7, {
        [j.zY]: eo,
        [j.bG]: !a,
        [j.zq]: n,
        [j.cU]: K
      }),
      onClick: a ? true : e => null == g ? true : g(e, o),
      onContextMenu: ef,
      onMouseEnter: ep,
      onMouseLeave: eu,
      children: [(0, r.jsx)(Q, {
        className: s()(j.my, {
          [j.yS]: eE === false / 0
        }),
        size: eh,
        src: eg,
        isSpeaking: eo,
        voiceDb: eE,
        speakingStylesConfig: {
          spreadDirection: E.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), !H && (0, r.jsx)(X, {
        nick: u,
        connectedOn: G,
        isSettingsPreview: P,
        voiceBackgroundWidth: W
      }), e_ && (d === x.pwA.NEVER || !eo && d === x.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: Y,
        position: "right",
        renderPopout: ed,
        shouldShow: M,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: s()(j.Xh, {
            [j.$A]: ec
          }),
          ref: Y,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          }), !P && (0, r.jsx)(O.Ay, {
            primaryGuild: o.primaryGuild,
            userId: o.id,
            contextGuildId: T,
            className: j.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, D.YX)(x.uss.VOICE_V3, {
                type: D.Z5.VOICE,
                value: D.IP.PROFILE_OPENED,
                userId: o.id
              })
            }
          }), (0, r.jsx)(v.Kc, {
            guildId: T,
            user: o,
            video: et.selfVideo,
            isStreaming: ec,
            className: j.ZA,
            iconClassName: j.Ow,
            isWatching: ea,
            localMute: en && !H,
            localVideoDisabled: ei,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !H,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          })]
        })
      })]
    })
  }),
  J = Chunk64700.memo(function(e) {
    let {
      widgetId: t,
      channel: a,
      sortedVoiceState: s,
      displayNameMode: o,
      displayUserMode: l,
      locked: c,
      flipped: p,
      size: _,
      isPreviewingInGame: h,
      isSettingsPreview: m,
      context: g
    } = e, E = i.useRef(null), {
      user: b,
      member: y,
      voiceState: O,
      connectedOn: v
    } = s, [S, I] = i.useState(null), [C, N] = i.useState(null);
    i.useEffect(() => {
      c && N(null)
    }, [c]), i.useEffect(() => {
      null != S && (0, D.YX)(x.uss.VOICE_V3, {
        type: D.Z5.GO_LIVE,
        value: D.IP.STREAM_PREVIEWED
      })
    }, [S]);
    let R = e => {
        I(e)
      },
      w = (e, t) => {
        m || (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("87997")]).then(n.bind(n, 180812));
          return (0, D.YX)(x.uss.VOICE_V3, {
            type: D.Z5.VOICE,
            value: D.IP.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, G(k({}, n), {
            user: t,
            channelId: null == a ? true : a.id,
            guildId: null == a ? true : a.guild_id,
            mediaEngineContext: g,
            onShowProfile: () => N(t.id),
            appContext: x.BRT.OVERLAY,
            onWatchStream: () => {
              (0, D.YX)(x.uss.VOICE_V3, {
                type: D.Z5.GO_LIVE,
                value: D.IP.ENABLED,
                userId: t.id
              })
            }
          }))
        })
      },
      L = i.useCallback(e => {
        var n, r;
        let i = null == (n = T.A.getWidget(t)) ? true : n.layoutId,
          s = null != i ? null == (r = T.A.getWidgetsForLayout(i)) ? true : r.find(e => e.type === x.uss.GO_LIVE) : null;
        null == s || s.pinned || ((0, d.v0)(s.id), f.A.track(x.HAw.OVERLAY_PIN_TOGGLED, {
          pinned: true,
          guild_id: null == a ? true : a.guild_id,
          channel_id: null == a ? true : a.id,
          channel_type: null == a ? true : a.type,
          widget_type: x.uss.GO_LIVE
        })), null != e && null != s && (0, D.YX)(x.uss.VOICE_V3, {
          type: D.Z5.GO_LIVE,
          value: D.IP.ENABLED,
          userId: e.ownerId
        })
      }, [a, t]);
    if (null == b || null == a || null == O) return null;
    let j = c || h;
    return (0, r.jsx)(A.A, {
      targetElementRef: E,
      user: b,
      guildId: a.guild_id,
      channelId: a.id,
      appContext: x.BRT.OVERLAY,
      shouldShow: C === b.id,
      onRequestClose: () => N(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)($, {
          ref: E,
          guildId: null == a ? true : a.guild_id,
          user: b,
          connectedOn: v,
          nick: null != (e = null == y ? true : y.nick) ? e : P.Ay.getName(b),
          flipped: p,
          voiceState: O,
          displayNameMode: o,
          displayUserMode: l,
          size: _,
          locked: j,
          onContextMenu: w,
          onClick: w,
          context: g,
          channel: a,
          showStreamPreview: b.id === S,
          onShowStreamPreview: R,
          onWatchStream: L,
          isSettingsPreview: m
        })
      }
    }, b.id)
  })