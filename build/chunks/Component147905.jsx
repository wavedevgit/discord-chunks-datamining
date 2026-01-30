/** Chunk was on 47995 **/
/** chunk id: 147905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => J,
  FT: () => M,
  Ob: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk864605 = require("./864605.js"),
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

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  switch (e) {
    case L.OSZ.LARGE:
      return c._3J.SIZE_32;
    case L.OSZ.SMALL:
      return c._3J.SIZE_24;
    default:
      return c._3J.SIZE_32
  }
}

function U(e) {
  return c.vCh[e].size
}
let G = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
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

function F(e, t) {
  let [n, r] = l.useState(null != e && e > Date.now() - 1e4), [i, a] = l.useState(false), [s, o] = l.useState(true);
  return (0, y.Ay)(() => {
    n && !t && (o(false), setTimeout(() => {
      a(true)
    }, 16))
  }), (0, y.Ay)(() => {
    let e = setTimeout(() => {
      r(false), setTimeout(() => {
        a(false)
      }, 16)
    }, 2600);
    return () => clearTimeout(e)
  }), l.useMemo(() => ({
    showConnectedAnimation: i,
    recentlyConnected: n,
    hideConnectedAnimation: s,
    setHideConnectedAnimation: o
  }), [i, n, s, o])
}
let H = Chunk64700.memo(function(e) {
    let {
      nick: t,
      connectedOn: n,
      isSettingsPreview: i,
      voiceBackgroundWidth: u,
      rightAlign: d = false
    } = e, {
      showConnectedAnimation: p,
      recentlyConnected: f,
      hideConnectedAnimation: g,
      setHideConnectedAnimation: y
    } = F(n, i), {
      ref: _,
      width: A
    } = (0, m.Ay)(), h = (0, o.bG)([b.A], () => b.A.useReducedMotion), v = f ? "entering" : "exiting", {
      width: O
    } = (0, s.useSpring)(V(R({}, W[v]), {
      width: p ? A : u
    })), {
      opacity: S
    } = (0, s.useSpring)(V(R({}, z[v]), {
      opacity: +!!p,
      onRest: () => {
        p || y(true)
      }
    })), j = l.useMemo(() => g || h ? "none" : "block", [g, h]);
    return (0, r.jsx)(s.animated.div, {
      className: a()(k.rH, {
        [k.pG]: d
      }),
      style: {
        width: O,
        opacity: S,
        display: j
      },
      children: (0, r.jsxs)("div", {
        ref: _,
        className: a()(k.LB, {
          [k.RP]: "exiting" === v,
          [k.kb]: !d,
          [k.pG]: d
        }),
        children: [d && (0, r.jsx)(c.akl, {
          importData: G,
          shouldAnimate: !h,
          className: k.lY
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: D.intl.format(D.t.uFcReq, {
              nick: t
            })
          })
        }), !d && (0, r.jsx)(c.akl, {
          importData: G,
          shouldAnimate: !h,
          className: k.lY
        }), (0, r.jsx)("div", {
          className: k.k1
        })]
      })
    })
  }),
  K = Chunk64700.memo(function(e) {
    let {
      avatarSize: t,
      userId: n,
      channelId: l,
      guildId: i
    } = e, a = 2 * t, s = -(t / 2);
    return (0, r.jsx)("div", {
      className: k.QZ,
      style: {
        top: s,
        left: s,
        width: a,
        height: a
      },
      children: (0, r.jsx)(A.A, {
        userId: n,
        channelId: l,
        guildId: i,
        containerDimensions: {
          width: a,
          height: a
        }
      })
    })
  }),
  Y = Chunk64700.memo(Chunk397927.euF),
  B = Chunk64700.memo(function(e) {
    let {
      channel: t,
      flipped: n = false,
      locked: i = false,
      user: s,
      nick: u,
      displayNameMode: d,
      displayUserMode: p,
      size: y = L.OSZ.LARGE,
      onClick: b,
      onContextMenu: A,
      context: O,
      guildId: I,
      isSettingsPreview: w = false,
      voiceState: D,
      showStreamPreview: R,
      onShowStreamPreview: V,
      onWatchStream: G,
      connectedOn: W,
      ref: z
    } = e, B = (0, o.bG)([x.default], () => x.default.getId() === s.id, [s.id]), {
      ref: J,
      width: Z
    } = (0, m.Ay)(), {
      showConnectedAnimation: X
    } = F(W, w), q = null == D ? true : D.sessionId, $ = t.id, Q = s.id, [ee] = (0, o.bG)([T.A], () => {
      var e;
      return [null != (e = T.A.getVoiceStateForChannel($, Q)) ? e : T.A.getVoiceStateForSession(Q, q), T.A.getVoiceStateVersion()]
    }, [$, Q, q], N.D), et = w ? D : null != ee ? ee : D, [en, er, el] = (0, o.yK)([P.A], () => B ? [!P.A.isSupported() || P.A.isSelfMute() || P.A.isSelfMutedTemporarily(), P.A.isSelfDeaf(), false] : [!P.A.isSupported() || P.A.isLocalMute(s.id), false, P.A.isLocalVideoDisabled(s.id)], [B, s.id]), ei = (0, o.bG)([j.A], () => {
      let e = j.A.getCurrentUserActiveStream();
      return null != e && e.ownerId !== s.id && j.A.getViewerIds(e).filter(e => e === s.id).length > 0
    }, [s.id]), ea = w && (null == D ? true : D.discoverable), es = (0, g.A)({
      userId: s.id,
      context: O
    }) || ea, eo = (0, o.bG)([j.A], () => j.A.getStreamForUser(s.id, I)), ec = null != eo, eu = l.useCallback(() => {
      (R || null != ec) && V(null)
    }, [V, R, ec]), ed = l.useCallback(() => (0, r.jsx)(h.A, {
      user: s,
      channel: t,
      onWatch: () => {
        null != eo && ((0, f.A9)(eo, {
          forceMultiple: true,
          noFocus: true
        }), eu(), G(null != eo ? eo : null))
      },
      onAction: () => G,
      previewIsOpen: R,
      location: L.ThZ.UNLOCKED_OVERLAY,
      hideTip: true
    }), [s, t, eo, R, eu, G]), ep = l.useCallback(e => {
      i || null == A || A(e, s)
    }, [i, A, s]), ef = l.useCallback(() => {
      i || null != ec && V(s.id)
    }, [i, V, ec, s]), em = i || w, eg = l.useMemo(() => M(y), [y]), ey = l.useMemo(() => U(eg), [eg]), eb = l.useMemo(() => s.getAvatarURL(I, ey), [s, I, ey]), e_ = (0, o.bG)([E.A], () => E.A.getVoiceVolume(Q));
    return p === L.f5z.ONLY_WHILE_SPEAKING && em && !es || null == et ? null : n ? (0, r.jsxs)(c.DUT, {
      innerRef: z,
      className: a()(k.q7, {
        [k.zY]: es,
        [k.bG]: !i,
        [k.zq]: n,
        [k.cU]: X
      }),
      onClick: i ? true : e => null == b ? true : b(e, s),
      onContextMenu: ep,
      onMouseEnter: ef,
      onMouseLeave: eu,
      children: [em && (d === L.pwA.NEVER || !es && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: J,
        position: "left",
        renderPopout: ed,
        shouldShow: R,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: k.Xh,
          ref: J,
          children: [(0, r.jsx)(S.Kc, {
            guildId: I,
            user: s,
            video: et.selfVideo,
            isStreaming: ec,
            className: k.ZA,
            iconClassName: k.Ow,
            isWatching: ei,
            localMute: en && !B,
            localVideoDisabled: el,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !B,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          }), !w && (0, r.jsx)(v.Ay, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: I,
            className: k.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, C.YX)(L.uss.VOICE_V3, {
                type: C.Z5.VOICE,
                value: C.IP.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          })]
        })
      }), !B && (0, r.jsx)(H, {
        nick: u,
        connectedOn: W,
        isSettingsPreview: w,
        voiceBackgroundWidth: Z,
        rightAlign: true
      }), (0, r.jsx)(Y, {
        className: a()(k.my, {
          [k.yS]: e_ === false / 0
        }),
        size: eg,
        src: eb,
        isSpeaking: es,
        voiceDb: e_,
        speakingStylesConfig: {
          spreadDirection: _.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), (0, r.jsx)(K, {
        avatarSize: ey,
        userId: s.id,
        channelId: t.id,
        guildId: t.getGuildId()
      })]
    }) : (0, r.jsxs)(c.DUT, {
      innerRef: z,
      className: a()(k.q7, {
        [k.zY]: es,
        [k.bG]: !i,
        [k.zq]: n,
        [k.cU]: X
      }),
      onClick: i ? true : e => null == b ? true : b(e, s),
      onContextMenu: ep,
      onMouseEnter: ef,
      onMouseLeave: eu,
      children: [(0, r.jsx)(Y, {
        className: a()(k.my, {
          [k.yS]: e_ === false / 0
        }),
        size: eg,
        src: eb,
        isSpeaking: es,
        voiceDb: e_,
        speakingStylesConfig: {
          spreadDirection: _.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), !B && (0, r.jsx)(H, {
        nick: u,
        connectedOn: W,
        isSettingsPreview: w,
        voiceBackgroundWidth: Z
      }), em && (d === L.pwA.NEVER || !es && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: J,
        position: "right",
        renderPopout: ed,
        shouldShow: R,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: a()(k.Xh, {
            [k.$A]: ec
          }),
          ref: J,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          }), !w && (0, r.jsx)(v.Ay, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: I,
            className: k.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, C.YX)(L.uss.VOICE_V3, {
                type: C.Z5.VOICE,
                value: C.IP.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(S.Kc, {
            guildId: I,
            user: s,
            video: et.selfVideo,
            isStreaming: ec,
            className: k.ZA,
            iconClassName: k.Ow,
            isWatching: ei,
            localMute: en && !B,
            localVideoDisabled: el,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !B,
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
      channel: i,
      sortedVoiceState: a,
      displayNameMode: s,
      displayUserMode: o,
      locked: c,
      flipped: f,
      size: m,
      isPreviewingInGame: g,
      isSettingsPreview: y,
      context: b
    } = e, _ = l.useRef(null), {
      user: A,
      member: h,
      voiceState: v,
      connectedOn: S
    } = a, [j, x] = l.useState(null), [P, E] = l.useState(null);
    l.useEffect(() => {
      c && E(null)
    }, [c]), l.useEffect(() => {
      null != j && (0, C.YX)(L.uss.VOICE_V3, {
        type: C.Z5.GO_LIVE,
        value: C.IP.STREAM_PREVIEWED
      })
    }, [j]);
    let T = e => {
        x(e)
      },
      N = (e, t) => {
        y || (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("3795"), n.e("87997")]).then(n.bind(n, 180812));
          return (0, C.YX)(L.uss.VOICE_V3, {
            type: C.Z5.VOICE,
            value: C.IP.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, V(R({}, n), {
            user: t,
            channelId: null == i ? true : i.id,
            guildId: null == i ? true : i.guild_id,
            mediaEngineContext: b,
            onShowProfile: () => E(t.id),
            appContext: L.BRT.OVERLAY,
            onWatchStream: () => {
              (0, C.YX)(L.uss.VOICE_V3, {
                type: C.Z5.GO_LIVE,
                value: C.IP.ENABLED,
                userId: t.id
              })
            }
          }))
        })
      },
      D = l.useCallback(e => {
        var n, r;
        let l = null == (n = I.A.getWidget(t)) ? true : n.layoutId,
          a = null != l ? null == (r = I.A.getWidgetsForLayout(l)) ? true : r.find(e => e.type === L.uss.GO_LIVE) : null;
        null == a || a.pinned || ((0, d.v0)(a.id), p.A.track(L.HAw.OVERLAY_PIN_TOGGLED, {
          pinned: true,
          guild_id: null == i ? true : i.guild_id,
          channel_id: null == i ? true : i.id,
          channel_type: null == i ? true : i.type,
          widget_type: L.uss.GO_LIVE
        })), null != e && null != a && (0, C.YX)(L.uss.VOICE_V3, {
          type: C.Z5.GO_LIVE,
          value: C.IP.ENABLED,
          userId: e.ownerId
        })
      }, [i, t]);
    if (null == A || null == i || null == v) return null;
    let k = c || g;
    return (0, r.jsx)(O.A, {
      targetElementRef: _,
      user: A,
      guildId: i.guild_id,
      channelId: i.id,
      appContext: L.BRT.OVERLAY,
      shouldShow: P === A.id,
      onRequestClose: () => E(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)(B, {
          ref: _,
          guildId: null == i ? true : i.guild_id,
          user: A,
          connectedOn: S,
          nick: null != (e = null == h ? true : h.nick) ? e : w.Ay.getName(A),
          flipped: f,
          voiceState: v,
          displayNameMode: s,
          displayUserMode: o,
          size: m,
          locked: k,
          onContextMenu: N,
          onClick: N,
          context: b,
          channel: i,
          showStreamPreview: A.id === j,
          onShowStreamPreview: T,
          onWatchStream: D,
          isSettingsPreview: y
        })
      }
    }, A.id)
  })