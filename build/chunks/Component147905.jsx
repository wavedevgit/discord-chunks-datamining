/** Chunk was on 88474 **/
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

function U(e, t) {
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
let G = () => n.e("15423").then(n.t.bind(n, 155147, 19)).then(e => {
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
  H = {
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
  let [n, r] = i.useState(null != e && e > Date.now() - 1e4), [l, a] = i.useState(false), [o, s] = i.useState(true);
  return (0, y.Ay)(() => {
    n && !t && (s(false), setTimeout(() => {
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
    hideConnectedAnimation: o,
    setHideConnectedAnimation: s
  }), [l, n, o, s])
}
let B = Chunk64700.memo(function(e) {
    let {
      nick: t,
      connectedOn: n,
      isSettingsPreview: l,
      voiceBackgroundWidth: u,
      rightAlign: d = false
    } = e, {
      showConnectedAnimation: f,
      recentlyConnected: p,
      hideConnectedAnimation: g,
      setHideConnectedAnimation: y
    } = W(n, l), {
      ref: b,
      width: A
    } = (0, m.Ay)(), _ = (0, s.bG)([h.A], () => h.A.useReducedMotion), v = p ? "entering" : "exiting", {
      width: O
    } = (0, o.useSpring)(U(k({}, F[v]), {
      width: f ? A : u
    })), {
      opacity: S
    } = (0, o.useSpring)(U(k({}, H[v]), {
      opacity: +!!f,
      onRest: () => {
        f || y(true)
      }
    })), j = i.useMemo(() => g || _ ? "none" : "block", [g, _]);
    return (0, r.jsx)(o.animated.div, {
      className: a()(R.rH, {
        [R.pG]: d
      }),
      style: {
        width: O,
        opacity: S,
        display: j
      },
      children: (0, r.jsxs)("div", {
        ref: b,
        className: a()(R.LB, {
          [R.RP]: "exiting" === v,
          [R.kb]: !d,
          [R.pG]: d
        }),
        children: [d && (0, r.jsx)(c.akl, {
          importData: G,
          shouldAnimate: !_,
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
          importData: G,
          shouldAnimate: !_,
          className: R.lY
        }), (0, r.jsx)("div", {
          className: R.k1
        })]
      })
    })
  }),
  z = Chunk64700.memo(function(e) {
    let {
      avatarSize: t,
      userId: n,
      channelId: i,
      guildId: l
    } = e, a = 2 * t, o = -(t / 2);
    return (0, r.jsx)("div", {
      className: R.QZ,
      style: {
        top: o,
        left: o,
        width: a,
        height: a
      },
      children: (0, r.jsx)(A.A, {
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
  K = Chunk64700.memo(Chunk397927.euF),
  Y = Chunk64700.memo(function(e) {
    let {
      channel: t,
      flipped: n = false,
      locked: l = false,
      user: o,
      nick: u,
      displayNameMode: d,
      displayUserMode: f,
      size: y = L.OSZ.LARGE,
      onClick: h,
      onContextMenu: A,
      context: O,
      guildId: x,
      isSettingsPreview: N = false,
      voiceState: D,
      showStreamPreview: k,
      onShowStreamPreview: U,
      onWatchStream: G,
      connectedOn: F,
      ref: H
    } = e, Y = (0, s.bG)([I.default], () => I.default.getId() === o.id, [o.id]), {
      ref: J,
      width: Z
    } = (0, m.Ay)(), {
      showConnectedAnimation: q
    } = W(F, N), X = null == D ? true : D.sessionId, $ = t.id, Q = o.id, [ee] = (0, s.bG)([C.A], () => {
      var e;
      return [null != (e = C.A.getVoiceStateForChannel($, Q)) ? e : C.A.getVoiceStateForSession(Q, X), C.A.getVoiceStateVersion()]
    }, [$, Q, X], T.D), et = N ? D : null != ee ? ee : D, [en, er, ei] = (0, s.yK)([E.A], () => Y ? [!E.A.isSupported() || E.A.isSelfMute() || E.A.isSelfMutedTemporarily(), E.A.isSelfDeaf(), false] : [!E.A.isSupported() || E.A.isLocalMute(o.id), false, E.A.isLocalVideoDisabled(o.id)], [Y, o.id]), el = (0, s.bG)([j.A], () => {
      let e = j.A.getCurrentUserActiveStream();
      return null != e && e.ownerId !== o.id && j.A.getViewerIds(e).filter(e => e === o.id).length > 0
    }, [o.id]), ea = N && (null == D ? true : D.discoverable), eo = (0, g.A)({
      userId: o.id,
      context: O
    }) || ea, es = (0, s.bG)([j.A], () => j.A.getStreamForUser(o.id, x)), ec = null != es, eu = i.useCallback(() => {
      (k || null != ec) && U(null)
    }, [U, k, ec]), ed = i.useCallback(() => (0, r.jsx)(_.A, {
      user: o,
      channel: t,
      onWatch: () => {
        null != es && ((0, p.A9)(es, {
          forceMultiple: true,
          noFocus: true
        }), eu(), G(null != es ? es : null))
      },
      onAction: () => G,
      previewIsOpen: k,
      location: L.ThZ.UNLOCKED_OVERLAY,
      hideTip: true
    }), [o, t, es, k, eu, G]), ef = i.useCallback(e => {
      l || null == A || A(e, o)
    }, [l, A, o]), ep = i.useCallback(() => {
      l || null != ec && U(o.id)
    }, [l, U, ec, o]), em = l || N, eg = i.useMemo(() => M(y), [y]), ey = i.useMemo(() => V(eg), [eg]), eh = i.useMemo(() => o.getAvatarURL(x, ey), [o, x, ey]), eb = (0, s.bG)([P.A], () => P.A.getVoiceVolume(Q));
    return f === L.f5z.ONLY_WHILE_SPEAKING && em && !eo || null == et ? null : n ? (0, r.jsxs)(c.DUT, {
      innerRef: H,
      className: a()(R.q7, {
        [R.zY]: eo,
        [R.bG]: !l,
        [R.zq]: n,
        [R.cU]: q
      }),
      onClick: l ? true : e => null == h ? true : h(e, o),
      onContextMenu: ef,
      onMouseEnter: ep,
      onMouseLeave: eu,
      children: [em && (d === L.pwA.NEVER || !eo && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
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
            guildId: x,
            user: o,
            video: et.selfVideo,
            isStreaming: ec,
            className: R.ZA,
            iconClassName: R.Ow,
            isWatching: el,
            localMute: en && !Y,
            localVideoDisabled: ei,
            mute: et.isVoiceMuted(),
            deaf: et.isVoiceDeafened() || er && !Y,
            serverMute: et.mute || et.suppress,
            serverDeaf: et.deaf,
            disabled: false
          }), !N && (0, r.jsx)(v.Ay, {
            primaryGuild: o.primaryGuild,
            userId: o.id,
            contextGuildId: x,
            className: R.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, w.YX)(L.uss.VOICE_V3, {
                type: w.Z5.VOICE,
                value: w.IP.PROFILE_OPENED,
                userId: o.id
              })
            }
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: u
          })]
        })
      }), !Y && (0, r.jsx)(B, {
        nick: u,
        connectedOn: F,
        isSettingsPreview: N,
        voiceBackgroundWidth: Z,
        rightAlign: true
      }), (0, r.jsx)(K, {
        className: a()(R.my, {
          [R.yS]: eb === false / 0
        }),
        size: eg,
        src: eh,
        isSpeaking: eo,
        voiceDb: eb,
        speakingStylesConfig: {
          spreadDirection: b.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), (0, r.jsx)(z, {
        avatarSize: ey,
        userId: o.id,
        channelId: t.id,
        guildId: t.getGuildId()
      })]
    }) : (0, r.jsxs)(c.DUT, {
      innerRef: H,
      className: a()(R.q7, {
        [R.zY]: eo,
        [R.bG]: !l,
        [R.zq]: n,
        [R.cU]: q
      }),
      onClick: l ? true : e => null == h ? true : h(e, o),
      onContextMenu: ef,
      onMouseEnter: ep,
      onMouseLeave: eu,
      children: [(0, r.jsx)(K, {
        className: a()(R.my, {
          [R.yS]: eb === false / 0
        }),
        size: eg,
        src: eh,
        isSpeaking: eo,
        voiceDb: eb,
        speakingStylesConfig: {
          spreadDirection: b.O.INSET_ONLY,
          maxInnerSpreadRadius: 4,
          hideIfVolumeMissing: true
        },
        "aria-hidden": true
      }), !Y && (0, r.jsx)(B, {
        nick: u,
        connectedOn: F,
        isSettingsPreview: N,
        voiceBackgroundWidth: Z
      }), em && (d === L.pwA.NEVER || !eo && d === L.pwA.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.YNO, {
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
          }), !N && (0, r.jsx)(v.Ay, {
            primaryGuild: o.primaryGuild,
            userId: o.id,
            contextGuildId: x,
            className: R.fc,
            disableGuildProfile: true,
            onShowProfile: () => {
              (0, w.YX)(L.uss.VOICE_V3, {
                type: w.Z5.VOICE,
                value: w.IP.PROFILE_OPENED,
                userId: o.id
              })
            }
          }), (0, r.jsx)(S.Kc, {
            guildId: x,
            user: o,
            video: et.selfVideo,
            isStreaming: ec,
            className: R.ZA,
            iconClassName: R.Ow,
            isWatching: el,
            localMute: en && !Y,
            localVideoDisabled: ei,
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
      channel: l,
      sortedVoiceState: a,
      displayNameMode: o,
      displayUserMode: s,
      locked: c,
      flipped: p,
      size: m,
      isPreviewingInGame: g,
      isSettingsPreview: y,
      context: h
    } = e, b = i.useRef(null), {
      user: A,
      member: _,
      voiceState: v,
      connectedOn: S
    } = a, [j, I] = i.useState(null), [E, P] = i.useState(null);
    i.useEffect(() => {
      c && P(null)
    }, [c]), i.useEffect(() => {
      null != j && (0, w.YX)(L.uss.VOICE_V3, {
        type: w.Z5.GO_LIVE,
        value: w.IP.STREAM_PREVIEWED
      })
    }, [j]);
    let C = e => {
        I(e)
      },
      T = (e, t) => {
        y || (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("87997"), n.e("50478")]).then(n.bind(n, 180812));
          return (0, w.YX)(L.uss.VOICE_V3, {
            type: w.Z5.VOICE,
            value: w.IP.SETTINGS_OPENED,
            userId: t.id
          }), n => (0, r.jsx)(e, U(k({}, n), {
            user: t,
            channelId: null == l ? true : l.id,
            guildId: null == l ? true : l.guild_id,
            mediaEngineContext: h,
            onShowProfile: () => P(t.id),
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
      D = i.useCallback(e => {
        var n, r;
        let i = null == (n = x.A.getWidget(t)) ? true : n.layoutId,
          a = null != i ? null == (r = x.A.getWidgetsForLayout(i)) ? true : r.find(e => e.type === L.uss.GO_LIVE) : null;
        null == a || a.pinned || ((0, d.v0)(a.id), f.A.track(L.HAw.OVERLAY_PIN_TOGGLED, {
          pinned: true,
          guild_id: null == l ? true : l.guild_id,
          channel_id: null == l ? true : l.id,
          channel_type: null == l ? true : l.type,
          widget_type: L.uss.GO_LIVE
        })), null != e && null != a && (0, w.YX)(L.uss.VOICE_V3, {
          type: w.Z5.GO_LIVE,
          value: w.IP.ENABLED,
          userId: e.ownerId
        })
      }, [l, t]);
    if (null == A || null == l || null == v) return null;
    let R = c || g;
    return (0, r.jsx)(O.A, {
      targetElementRef: b,
      user: A,
      guildId: l.guild_id,
      channelId: l.id,
      appContext: L.BRT.OVERLAY,
      shouldShow: E === A.id,
      onRequestClose: () => P(null),
      spacing: 24,
      children: () => {
        var e;
        return (0, r.jsx)(Y, {
          ref: b,
          guildId: null == l ? true : l.guild_id,
          user: A,
          connectedOn: S,
          nick: null != (e = null == _ ? true : _.nick) ? e : N.Ay.getName(A),
          flipped: p,
          voiceState: v,
          displayNameMode: o,
          displayUserMode: s,
          size: m,
          locked: R,
          onContextMenu: T,
          onClick: T,
          context: h,
          channel: l,
          showStreamPreview: A.id === j,
          onShowStreamPreview: C,
          onWatchStream: D,
          isSettingsPreview: y
        })
      }
    }, A.id)
  })