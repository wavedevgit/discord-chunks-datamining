/** Chunk was on 78572 **/
/** chunk id: 147905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => J,
  FT: () => V,
  Ob: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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

function M(e, t) {
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

function V(e) {
  switch (e) {
    case D.OSZ.LARGE:
      return c._3J.SIZE_32;
    case D.OSZ.SMALL:
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

function H(e, t) {
  let [n, r] = i.useState(null != e && e > Date.now() - 1e4), [l, a] = i.useState(false), [s, o] = i.useState(true);
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
  }), i.useMemo(() => ({
    showConnectedAnimation: l,
    recentlyConnected: n,
    hideConnectedAnimation: s,
    setHideConnectedAnimation: o
  }), [l, n, s, o])
}
let F = Chunk64700.memo(function(e) {
    let {
      nick: t,
      connectedOn: n,
      isSettingsPreview: l,
      voiceBackgroundWidth: u,
      rightAlign: d = false
    } = e, {
      showConnectedAnimation: p,
      recentlyConnected: f,
      hideConnectedAnimation: g,
      setHideConnectedAnimation: y
    } = H(n, l), {
      ref: _,
      width: h
    } = (0, m.Ay)(), A = (0, o.bG)([b.A], () => b.A.useReducedMotion), v = f ? "entering" : "exiting", {
      width: O
    } = (0, s.useSpring)(M(R({}, W[v]), {
      width: p ? h : u
    })), {
      opacity: S
    } = (0, s.useSpring)(M(R({}, z[v]), {
      opacity: +!!p,
      onRest: () => {
        p || y(true)
      }
    })), j = i.useMemo(() => g || A ? "none" : "block", [g, A]);
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
          shouldAnimate: !A,
          className: k.lY
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: L.intl.format(L.t.uFcReq, {
              nick: t
            })
          })
        }), !d && (0, r.jsx)(c.akl, {
          importData: G,
          shouldAnimate: !A,
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
      channelId: i,
      guildId: l
    } = e, a = 2 * t, s = -(t / 2);
    return (0, r.jsx)("div", {
      className: k.QZ,
      style: {
        top: s,
        left: s,
        width: a,
        height: a
      },
      children: (0, r.jsx)(h.A, {
        userId: n,
        channelId: i,
        guildId: l,
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
      locked: l = false,
      user: s,
      nick: u,
      displayNameMode: d,
      displayUserMode: p,
      size: y = D.OSZ.LARGE,
      onClick: b,
      onContextMenu: h,
      context: O,
      guildId: I,
      isSettingsPreview: N = false,
      voiceState: L,
      showStreamPreview: R,
      onShowStreamPreview: M,
      onWatchStream: G,
      connectedOn: W,
      ref: z
    } = e, B = (0, o.bG)([x.default], () => x.default.getId() === s.id, [s.id]), {
      ref: J,
      width: Z
    } = (0, m.Ay)(), {
      showConnectedAnimation: X
    } = H(W, N), q = null == L ? true : L.sessionId, $ = t.id, Q = s.id, [ee] = (0, o.bG)([E.A], () => {
      var e;
      return [null != (e = E.A.getVoiceStateForChannel($, Q)) ? e : E.A.getVoiceStateForSession(Q, q), E.A.getVoiceStateVersion()]
    }, [$, Q, q], w.D), et = N ? L : null != ee ? ee : L, [en, er, ei] = (0, o.yK)([T.A], () => B ? [!T.A.isSupported() || T.A.isSelfMute() || T.A.isSelfMutedTemporarily(), T.A.isSelfDeaf(), false] : [!T.A.isSupported() || T.A.isLocalMute(s.id), false, T.A.isLocalVideoDisabled(s.id)], [B, s.id]), el = (0, o.bG)([j.A], () => {
      let e = j.A.getCurrentUserActiveStream();
      return null != e && e.ownerId !== s.id && j.A.getViewerIds(e).filter(e => e === s.id).length > 0
    }, [s.id]), ea = N && (null == L ? true : L.discoverable), es = (0, g.A)({
      userId: s.id,
      context: O
    }) || ea, eo = (0, o.bG)([j.A], () => j.A.getStreamForUser(s.id, I)), ec = null != eo, eu = i.useCallback(() => {
      (R || null != ec) && M(null)
    }, [M, R, ec]), ed = i.useCallback(() => (0, r.jsx)(A.A, {
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
      location: D.ThZ.UNLOCKED_OVERLAY,
      hideTip: true
    }), [s, t, eo, R, eu, G]), ep = i.useCallback(e => {
      l || null == h || h(e, s)
    }, [l, h, s]), ef = i.useCallback(() => {
      l || null != ec && M(s.id)
    }, [l, M, ec, s]), em = l || N, eg = i.useMemo(() => V(y), [y]), ey = i.useMemo(() => U(eg), [eg]), eb = i.useMemo(() => s.getAvatarURL(I, ey), [s, I, ey]), e_ = (0, o.bG)([P.A], () => P.A.getVoiceVolume(Q));
    return p === D.f5z.ONLY_WHILE_SPEAKING && em && !es || null == et ? null : n ? (0, r.jsxs)(c.DUT, {
      innerRef: z,
      className: a()(k.q7, {
        [k.zY]: es,
        [k.bG]: !l,
        [k.zq]: n,
        [k.cU]: X
      }),
      onClick: l ? true : e => null == b ? true : b(e, s),
      onContextMenu: ep,
      onMouseEnter: ef,
      onMouseLeave: eu,
      children: [em && (d === D.pwA.NEVER || !es && d === D.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
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
            isWatching: el,
            localMute: en && !B,
            localVideoDisabled: ei,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !B,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          }), !N && (0, r.jsx)(v.Ay, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: I,
            className: k.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, C.YX)(D.uss.VOICE_V3, {
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
      }), !B && (0, r.jsx)(F, {
        nick: u,
        connectedOn: W,
        isSettingsPreview: N,
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
        [k.bG]: !l,
        [k.zq]: n,
        [k.cU]: X
      }),
      onClick: l ? true : e => null == b ? true : b(e, s),
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
      }), !B && (0, r.jsx)(F, {
        nick: u,
        connectedOn: W,
        isSettingsPreview: N,
        voiceBackgroundWidth: Z
      }), em && (d === D.pwA.NEVER || !es && d === D.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
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
          }), !N && (0, r.jsx)(v.Ay, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: I,
            className: k.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, C.YX)(D.uss.VOICE_V3, {
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
            isWatching: el,
            localMute: en && !B,
            localVideoDisabled: ei,
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
      channel: l,
      sortedVoiceState: a,
      displayNameMode: s,
      displayUserMode: o,
      locked: c,
      flipped: f,
      size: m,
      isPreviewingInGame: g,
      isSettingsPreview: y,
      context: b
    } = e, _ = i.useRef(null), {
      user: h,
      member: A,
      voiceState: v,
      connectedOn: S
    } = a, [j, x] = i.useState(null), [T, P] = i.useState(null);
    i.useEffect(() => {
      c && P(null)
    }, [c]), i.useEffect(() => {
      null != j && (0, C.YX)(D.uss.VOICE_V3, {
        type: C.Z5.GO_LIVE,
        value: C.IP.STREAM_PREVIEWED
      })
    }, [j]);
    let E = e => {
        x(e)
      },
      w = (e, t) => {
        y || (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("3795"), n.e("87997")]).then(n.bind(n, 180812));
          return (0, C.YX)(D.uss.VOICE_V3, {
            type: C.Z5.VOICE,
            value: C.IP.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, M(R({}, n), {
            user: t,
            channelId: null == l ? true : l.id,
            guildId: null == l ? true : l.guild_id,
            mediaEngineContext: b,
            onShowProfile: () => P(t.id),
            appContext: D.BRT.OVERLAY,
            onWatchStream: () => {
              (0, C.YX)(D.uss.VOICE_V3, {
                type: C.Z5.GO_LIVE,
                value: C.IP.ENABLED,
                userId: t.id
              })
            }
          }))
        })
      },
      L = i.useCallback(e => {
        var n, r;
        let i = null == (n = I.A.getWidget(t)) ? true : n.layoutId,
          a = null != i ? null == (r = I.A.getWidgetsForLayout(i)) ? true : r.find(e => e.type === D.uss.GO_LIVE) : null;
        null == a || a.pinned || ((0, d.v0)(a.id), p.A.track(D.HAw.OVERLAY_PIN_TOGGLED, {
          pinned: true,
          guild_id: null == l ? true : l.guild_id,
          channel_id: null == l ? true : l.id,
          channel_type: null == l ? true : l.type,
          widget_type: D.uss.GO_LIVE
        })), null != e && null != a && (0, C.YX)(D.uss.VOICE_V3, {
          type: C.Z5.GO_LIVE,
          value: C.IP.ENABLED,
          userId: e.ownerId
        })
      }, [l, t]);
    if (null == h || null == l || null == v) return null;
    let k = c || g;
    return (0, r.jsx)(O.A, {
      targetElementRef: _,
      user: h,
      guildId: l.guild_id,
      channelId: l.id,
      appContext: D.BRT.OVERLAY,
      shouldShow: T === h.id,
      onRequestClose: () => P(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)(B, {
          ref: _,
          guildId: null == l ? true : l.guild_id,
          user: h,
          connectedOn: S,
          nick: null != (e = null == A ? true : A.nick) ? e : N.Ay.getName(h),
          flipped: f,
          voiceState: v,
          displayNameMode: s,
          displayUserMode: o,
          size: m,
          locked: k,
          onContextMenu: w,
          onClick: w,
          context: b,
          channel: l,
          showStreamPreview: h.id === j,
          onShowStreamPreview: E,
          onWatchStream: L,
          isSettingsPreview: y
        })
      }
    }, h.id)
  })