/** Chunk was on 88474 **/
/** chunk id: 147905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => J,
  FT: () => U,
  Ob: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
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

function k(e) {
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

function U(e) {
  switch (e) {
    case L.OSZ.LARGE:
      return c._3J.SIZE_32;
    case L.OSZ.SMALL:
      return c._3J.SIZE_24;
    default:
      return c._3J.SIZE_32
  }
}

function G(e) {
  return c.vCh[e].size
}
let V = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  F = {
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
  W = {
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
let z = Chunk64700.memo(function(e) {
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
    } = H(n, i), {
      ref: _,
      width: h
    } = (0, m.Ay)(), A = (0, o.bG)([b.A], () => b.A.useReducedMotion), v = f ? "entering" : "exiting", {
      width: O
    } = (0, s.useSpring)(M(k({}, F[v]), {
      width: p ? h : u
    })), {
      opacity: S
    } = (0, s.useSpring)(M(k({}, W[v]), {
      opacity: +!!p,
      onRest: () => {
        p || y(true)
      }
    })), j = l.useMemo(() => g || A ? "none" : "block", [g, A]);
    return (0, r.jsx)(s.animated.div, {
      className: a()(R.rH, {
        [R.pG]: d
      }),
      style: {
        width: O,
        opacity: S,
        display: j
      },
      children: (0, r.jsxs)("div", {
        ref: _,
        className: a()(R.LB, {
          [R.RP]: "exiting" === v,
          [R.kb]: !d,
          [R.pG]: d
        }),
        children: [d && (0, r.jsx)(c.akl, {
          importData: V,
          shouldAnimate: !A,
          className: R.lY
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: D.intl.format(D.t.uFcReq, {
              nick: t
            })
          })
        }), !d && (0, r.jsx)(c.akl, {
          importData: V,
          shouldAnimate: !A,
          className: R.lY
        }), (0, r.jsx)("div", {
          className: R.k1
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
      className: R.QZ,
      style: {
        top: s,
        left: s,
        width: a,
        height: a
      },
      children: (0, r.jsx)(h.A, {
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
  B = Chunk64700.memo(Chunk397927.euF),
  Y = Chunk64700.memo(function(e) {
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
      onContextMenu: h,
      context: O,
      guildId: I,
      isSettingsPreview: T = false,
      voiceState: D,
      showStreamPreview: k,
      onShowStreamPreview: M,
      onWatchStream: V,
      connectedOn: F,
      ref: W
    } = e, Y = (0, o.bG)([x.default], () => x.default.getId() === s.id, [s.id]), {
      ref: J,
      width: Z
    } = (0, m.Ay)(), {
      showConnectedAnimation: X
    } = H(F, T), q = null == D ? true : D.sessionId, $ = t.id, Q = s.id, [ee] = (0, o.bG)([P.A], () => {
      var e;
      return [null != (e = P.A.getVoiceStateForChannel($, Q)) ? e : P.A.getVoiceStateForSession(Q, q), P.A.getVoiceStateVersion()]
    }, [$, Q, q], N.D), et = T ? D : null != ee ? ee : D, [en, er, el] = (0, o.yK)([E.A], () => Y ? [!E.A.isSupported() || E.A.isSelfMute() || E.A.isSelfMutedTemporarily(), E.A.isSelfDeaf(), false] : [!E.A.isSupported() || E.A.isLocalMute(s.id), false, E.A.isLocalVideoDisabled(s.id)], [Y, s.id]), ei = (0, o.bG)([j.A], () => {
      let e = j.A.getCurrentUserActiveStream();
      return null != e && e.ownerId !== s.id && j.A.getViewerIds(e).filter(e => e === s.id).length > 0
    }, [s.id]), ea = T && (null == D ? true : D.discoverable), es = (0, g.A)({
      userId: s.id,
      context: O
    }) || ea, eo = (0, o.bG)([j.A], () => j.A.getStreamForUser(s.id, I)), ec = null != eo, eu = l.useCallback(() => {
      (k || null != ec) && M(null)
    }, [M, k, ec]), ed = l.useCallback(() => (0, r.jsx)(A.A, {
      user: s,
      channel: t,
      onWatch: () => {
        null != eo && ((0, f.A9)(eo, {
          forceMultiple: true,
          noFocus: true
        }), eu(), V(null != eo ? eo : null))
      },
      onAction: () => V,
      previewIsOpen: k,
      location: L.ThZ.UNLOCKED_OVERLAY,
      hideTip: true
    }), [s, t, eo, k, eu, V]), ep = l.useCallback(e => {
      i || null == h || h(e, s)
    }, [i, h, s]), ef = l.useCallback(() => {
      i || null != ec && M(s.id)
    }, [i, M, ec, s]), em = i || T, eg = l.useMemo(() => U(y), [y]), ey = l.useMemo(() => G(eg), [eg]), eb = l.useMemo(() => s.getAvatarURL(I, ey), [s, I, ey]), e_ = (0, o.bG)([C.A], () => C.A.getVoiceVolume(Q));
    return p === L.f5z.ONLY_WHILE_SPEAKING && em && !es || null == et ? null : n ? (0, r.jsxs)(c.DUT, {
      innerRef: W,
      className: a()(R.q7, {
        [R.zY]: es,
        [R.bG]: !i,
        [R.zq]: n,
        [R.cU]: X
      }),
      onClick: i ? true : e => null == b ? true : b(e, s),
      onContextMenu: ep,
      onMouseEnter: ef,
      onMouseLeave: eu,
      children: [em && (d === L.pwA.NEVER || !es && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: J,
        position: "left",
        renderPopout: ed,
        shouldShow: k,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: R.Xh,
          ref: J,
          children: [(0, r.jsx)(S.Kc, {
            guildId: I,
            user: s,
            video: et.selfVideo,
            isStreaming: ec,
            className: R.ZA,
            iconClassName: R.Ow,
            isWatching: ei,
            localMute: en && !Y,
            localVideoDisabled: el,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !Y,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          }), !T && (0, r.jsx)(v.Ay, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: I,
            className: R.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, w.YX)(L.uss.VOICE_V3, {
                type: w.Z5.VOICE,
                value: w.IP.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          })]
        })
      }), !Y && (0, r.jsx)(z, {
        nick: u,
        connectedOn: F,
        isSettingsPreview: T,
        voiceBackgroundWidth: Z,
        rightAlign: true
      }), (0, r.jsx)(B, {
        className: a()(R.my, {
          [R.yS]: e_ === false / 0
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
      innerRef: W,
      className: a()(R.q7, {
        [R.zY]: es,
        [R.bG]: !i,
        [R.zq]: n,
        [R.cU]: X
      }),
      onClick: i ? true : e => null == b ? true : b(e, s),
      onContextMenu: ep,
      onMouseEnter: ef,
      onMouseLeave: eu,
      children: [(0, r.jsx)(B, {
        className: a()(R.my, {
          [R.yS]: e_ === false / 0
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
      }), !Y && (0, r.jsx)(z, {
        nick: u,
        connectedOn: F,
        isSettingsPreview: T,
        voiceBackgroundWidth: Z
      }), em && (d === L.pwA.NEVER || !es && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
        targetElementRef: J,
        position: "right",
        renderPopout: ed,
        shouldShow: k,
        onRequestClose: eu,
        spacing: 0,
        children: () => (0, r.jsxs)("div", {
          className: a()(R.Xh, {
            [R.$A]: ec
          }),
          ref: J,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          }), !T && (0, r.jsx)(v.Ay, {
            primaryGuild: s.primaryGuild,
            userId: s.id,
            contextGuildId: I,
            className: R.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, w.YX)(L.uss.VOICE_V3, {
                type: w.Z5.VOICE,
                value: w.IP.PROFILE_OPENED,
                userId: s.id
              })
            }
          }), (0, r.jsx)(S.Kc, {
            guildId: I,
            user: s,
            video: et.selfVideo,
            isStreaming: ec,
            className: R.ZA,
            iconClassName: R.Ow,
            isWatching: ei,
            localMute: en && !Y,
            localVideoDisabled: el,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !Y,
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
      user: h,
      member: A,
      voiceState: v,
      connectedOn: S
    } = a, [j, x] = l.useState(null), [E, C] = l.useState(null);
    l.useEffect(() => {
      c && C(null)
    }, [c]), l.useEffect(() => {
      null != j && (0, w.YX)(L.uss.VOICE_V3, {
        type: w.Z5.GO_LIVE,
        value: w.IP.STREAM_PREVIEWED
      })
    }, [j]);
    let P = e => {
        x(e)
      },
      N = (e, t) => {
        y || (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("87997"), n.e("50478")]).then(n.bind(n, 180812));
          return (0, w.YX)(L.uss.VOICE_V3, {
            type: w.Z5.VOICE,
            value: w.IP.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, M(k({}, n), {
            user: t,
            channelId: null == i ? true : i.id,
            guildId: null == i ? true : i.guild_id,
            mediaEngineContext: b,
            onShowProfile: () => C(t.id),
            appContext: L.BRT.OVERLAY,
            onWatchStream: () => {
              (0, w.YX)(L.uss.VOICE_V3, {
                type: w.Z5.GO_LIVE,
                value: w.IP.ENABLED,
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
        })), null != e && null != a && (0, w.YX)(L.uss.VOICE_V3, {
          type: w.Z5.GO_LIVE,
          value: w.IP.ENABLED,
          userId: e.ownerId
        })
      }, [i, t]);
    if (null == h || null == i || null == v) return null;
    let R = c || g;
    return (0, r.jsx)(O.A, {
      targetElementRef: _,
      user: h,
      guildId: i.guild_id,
      channelId: i.id,
      appContext: L.BRT.OVERLAY,
      shouldShow: E === h.id,
      onRequestClose: () => C(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)(Y, {
          ref: _,
          guildId: null == i ? true : i.guild_id,
          user: h,
          connectedOn: S,
          nick: null != (e = null == A ? true : A.nick) ? e : T.Ay.getName(h),
          flipped: f,
          voiceState: v,
          displayNameMode: s,
          displayUserMode: o,
          size: m,
          locked: R,
          onContextMenu: N,
          onClick: N,
          context: b,
          channel: i,
          showStreamPreview: h.id === j,
          onShowStreamPreview: P,
          onWatchStream: D,
          isSettingsPreview: y
        })
      }
    }, h.id)
  })