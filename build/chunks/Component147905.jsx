/** Chunk was on 6500 **/
/** chunk id: 147905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => J,
  FT: () => M,
  Ob: () => V
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

function G(e) {
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

function R(e, t) {
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

function V(e) {
  return c.vCh[e].size
}
let U = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
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
  F = {
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
  let [n, r] = i.useState(null != e && e > Date.now() - 1e4), [l, a] = i.useState(false), [s, o] = i.useState(true);
  return (0, _.Ay)(() => {
    n && !t && (o(false), setTimeout(() => {
      a(true)
    }, 16))
  }), (0, _.Ay)(() => {
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
let K = Chunk64700.memo(function(e) {
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
      setHideConnectedAnimation: _
    } = z(n, l), {
      ref: A,
      width: b
    } = (0, m.Ay)(), h = (0, o.bG)([y.A], () => y.A.useReducedMotion), v = f ? "entering" : "exiting", {
      width: O
    } = (0, s.useSpring)(R(G({}, W[v]), {
      width: p ? b : u
    })), {
      opacity: j
    } = (0, s.useSpring)(R(G({}, F[v]), {
      opacity: +!!p,
      onRest: () => {
        p || _(true)
      }
    })), S = i.useMemo(() => g || h ? "none" : "block", [g, h]);
    return (0, r.jsx)(s.animated.div, {
      className: a()(k.rH, {
        [k.pG]: d
      }),
      style: {
        width: O,
        opacity: j,
        display: S
      },
      children: (0, r.jsxs)("div", {
        ref: A,
        className: a()(k.LB, {
          [k.RP]: "exiting" === v,
          [k.kb]: !d,
          [k.pG]: d
        }),
        children: [d && (0, r.jsx)(c.akl, {
          importData: U,
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
          importData: U,
          shouldAnimate: !h,
          className: k.lY
        }), (0, r.jsx)("div", {
          className: k.k1
        })]
      })
    })
  }),
  H = Chunk64700.memo(function(e) {
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
      children: (0, r.jsx)(b.A, {
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
      size: _ = L.OSZ.LARGE,
      onClick: y,
      onContextMenu: b,
      context: O,
      guildId: x,
      isSettingsPreview: w = false,
      voiceState: D,
      showStreamPreview: G,
      onShowStreamPreview: R,
      onWatchStream: U,
      connectedOn: W,
      ref: F
    } = e, B = (0, o.bG)([I.default], () => I.default.getId() === s.id, [s.id]), {
      ref: J,
      width: Z
    } = (0, m.Ay)(), {
      showConnectedAnimation: X
    } = z(W, w), q = null == D ? true : D.sessionId, $ = t.id, Q = s.id, [ee] = (0, o.bG)([N.A], () => {
      var e;
      return [null != (e = N.A.getVoiceStateForChannel($, Q)) ? e : N.A.getVoiceStateForSession(Q, q), N.A.getVoiceStateVersion()]
    }, [$, Q, q], T.D), et = w ? D : null != ee ? ee : D, [en, er, ei] = (0, o.yK)([E.A], () => B ? [!E.A.isSupported() || E.A.isSelfMute() || E.A.isSelfMutedTemporarily(), E.A.isSelfDeaf(), false] : [!E.A.isSupported() || E.A.isLocalMute(s.id), false, E.A.isLocalVideoDisabled(s.id)], [B, s.id]), el = (0, o.bG)([S.A], () => {
      let e = S.A.getCurrentUserActiveStream();
      return null != e && e.ownerId !== s.id && S.A.getViewerIds(e).filter(e => e === s.id).length > 0
    }, [s.id]), ea = w && (null == D ? true : D.discoverable), es = (0, g.A)({
      userId: s.id,
      context: O
    }) || ea, eo = (0, o.bG)([S.A], () => S.A.getStreamForUser(s.id, x)), ec = null != eo, eu = i.useCallback(() => {
      (G || null != ec) && R(null)
    }, [R, G, ec]), ed = i.useCallback(() => (0, r.jsx)(h.A, {
      user: s,
      channel: t,
      onWatch: () => {
        null != eo && ((0, f.A9)(eo, {
          forceMultiple: true,
          noFocus: true
        }), eu(), U(null != eo ? eo : null))
      },
      onAction: () => U,
      previewIsOpen: G,
      location: L.ThZ.UNLOCKED_OVERLAY,
      hideTip: true
    }), [s, t, eo, G, eu, U]), ep = i.useCallback(e => {
      l || null == b || b(e, s)
    }, [l, b, s]), ef = i.useCallback(() => {
      l || null != ec && R(s.id)
    }, [l, R, ec, s]), em = l || w, eg = i.useMemo(() => M(_), [_]), e_ = i.useMemo(() => V(eg), [eg]), ey = i.useMemo(() => s.getAvatarURL(x, e_), [s, x, e_]), eA = (0, o.bG)([P.A], () => P.A.getVoiceVolume(Q));
    return p === L.f5z.ONLY_WHILE_SPEAKING && em && !es || null == et ? null : n ? (0, r.jsxs)(c.DUT, {
      innerRef: F,
      className: a()(k.q7, {
        [k.zY]: es,
        [k.bG]: !l,
        [k.zq]: n,
        [k.cU]: X
      }),
      onClick: l ? true : e => null == y ? true : y(e, s),
      onContextMenu: ep,
      onMouseEnter: ef,
      onMouseLeave: eu,
      children: [em && (d === L.pwA.NEVER || !es && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: J,
        position: "left",
        renderPopout: ed,
        shouldShow: G,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: k.Xh,
          ref: J,
          children: [(0, r.jsx)(j.Kc, {
            guildId: x,
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
          }), !w && (0, r.jsx)(v.Ay, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: x,
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
      }), !B && (0, r.jsx)(K, {
        nick: u,
        connectedOn: W,
        isSettingsPreview: w,
        voiceBackgroundWidth: Z,
        rightAlign: true
      }), (0, r.jsx)(Y, {
        className: a()(k.my, {
          [k.yS]: eA === false / 0
        }),
        size: eg,
        src: ey,
        isSpeaking: es,
        voiceDb: eA,
        speakingStylesConfig: {
          spreadDirection: A.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), (0, r.jsx)(H, {
        avatarSize: e_,
        userId: s.id,
        channelId: t.id,
        guildId: t.getGuildId()
      })]
    }) : (0, r.jsxs)(c.DUT, {
      innerRef: F,
      className: a()(k.q7, {
        [k.zY]: es,
        [k.bG]: !l,
        [k.zq]: n,
        [k.cU]: X
      }),
      onClick: l ? true : e => null == y ? true : y(e, s),
      onContextMenu: ep,
      onMouseEnter: ef,
      onMouseLeave: eu,
      children: [(0, r.jsx)(Y, {
        className: a()(k.my, {
          [k.yS]: eA === false / 0
        }),
        size: eg,
        src: ey,
        isSpeaking: es,
        voiceDb: eA,
        speakingStylesConfig: {
          spreadDirection: A.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), !B && (0, r.jsx)(K, {
        nick: u,
        connectedOn: W,
        isSettingsPreview: w,
        voiceBackgroundWidth: Z
      }), em && (d === L.pwA.NEVER || !es && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: J,
        position: "right",
        renderPopout: ed,
        shouldShow: G,
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
            contextGuildId: x,
            className: k.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, C.YX)(L.uss.VOICE_V3, {
                type: C.Z5.VOICE,
                value: C.IP.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(j.Kc, {
            guildId: x,
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
      isSettingsPreview: _,
      context: y
    } = e, A = i.useRef(null), {
      user: b,
      member: h,
      voiceState: v,
      connectedOn: j
    } = a, [S, I] = i.useState(null), [E, P] = i.useState(null);
    i.useEffect(() => {
      c && P(null)
    }, [c]), i.useEffect(() => {
      null != S && (0, C.YX)(L.uss.VOICE_V3, {
        type: C.Z5.GO_LIVE,
        value: C.IP.STREAM_PREVIEWED
      })
    }, [S]);
    let N = e => {
        I(e)
      },
      T = (e, t) => {
        _ || (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("3795"), n.e("87997")]).then(n.bind(n, 180812));
          return (0, C.YX)(L.uss.VOICE_V3, {
            type: C.Z5.VOICE,
            value: C.IP.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, R(G({}, n), {
            user: t,
            channelId: null == l ? true : l.id,
            guildId: null == l ? true : l.guild_id,
            mediaEngineContext: y,
            onShowProfile: () => P(t.id),
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
      D = i.useCallback(e => {
        var n, r;
        let i = null == (n = x.A.getWidget(t)) ? true : n.layoutId,
          a = null != i ? null == (r = x.A.getWidgetsForLayout(i)) ? true : r.find(e => e.type === L.uss.GO_LIVE) : null;
        null == a || a.pinned || ((0, d.v0)(a.id), p.A.track(L.HAw.OVERLAY_PIN_TOGGLED, {
          pinned: true,
          guild_id: null == l ? true : l.guild_id,
          channel_id: null == l ? true : l.id,
          channel_type: null == l ? true : l.type,
          widget_type: L.uss.GO_LIVE
        })), null != e && null != a && (0, C.YX)(L.uss.VOICE_V3, {
          type: C.Z5.GO_LIVE,
          value: C.IP.ENABLED,
          userId: e.ownerId
        })
      }, [l, t]);
    if (null == b || null == l || null == v) return null;
    let k = c || g;
    return (0, r.jsx)(O.A, {
      targetElementRef: A,
      user: b,
      guildId: l.guild_id,
      channelId: l.id,
      appContext: L.BRT.OVERLAY,
      shouldShow: E === b.id,
      onRequestClose: () => P(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)(B, {
          ref: A,
          guildId: null == l ? true : l.guild_id,
          user: b,
          connectedOn: j,
          nick: null != (e = null == h ? true : h.nick) ? e : w.Ay.getName(b),
          flipped: f,
          voiceState: v,
          displayNameMode: s,
          displayUserMode: o,
          size: m,
          locked: k,
          onContextMenu: T,
          onClick: T,
          context: y,
          channel: l,
          showStreamPreview: b.id === S,
          onShowStreamPreview: N,
          onWatchStream: D,
          isSettingsPreview: _
        })
      }
    }, b.id)
  })