/** Chunk was on 73551 **/
/** chunk id: 793319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NZ: () => ej,
  ZP: () => eI,
  r: () => ev
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk40851 = require("./40851.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk596040 = require("./596040.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk659580 = require("./659580.jsx"),
  Chunk793865 = require("./793865.jsx"),
  Chunk575175 = require("./575175.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk258609 = require("./258609.js"),
  Chunk446226 = require("./446226.js"),
  Chunk569545 = require("./569545.js"),
  Chunk74299 = require("./74299.js"),
  Chunk803647 = require("./803647.js"),
  Chunk554747 = require("./554747.js"),
  Chunk95764 = require("./95764.jsx"),
  Chunk459502 = require("./459502.jsx"),
  Chunk140465 = require("./140465.js"),
  Chunk800966 = require("./800966.jsx"),
  Chunk641015 = require("./641015.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk791592 = require("./791592.jsx"),
  Chunk136995 = require("./136995.jsx"),
  Chunk402113 = require("./402113.jsx"),
  Chunk197016 = require("./197016.jsx"),
  Chunk386000 = require("./386000.jsx"),
  Chunk331197 = require("./331197.jsx"),
  Chunk698877 = require("./698877.jsx"),
  Chunk25827 = require("./25827.jsx"),
  Chunk875527 = require("./875527.js"),
  Chunk540650 = require("./540650.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk523746 = require("./523746.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk923973 = require("./923973.js"),
  Chunk829750 = require("./829750.js"),
  Chunk189771 = require("./189771.js"),
  Chunk294629 = require("./294629.js"),
  Chunk304745 = require("./304745.jsx"),
  Chunk987329 = require("./987329.jsx"),
  Chunk544384 = require("./544384.jsx"),
  Chunk560688 = require("./560688.jsx"),
  Chunk127608 = require("./127608.jsx"),
  Chunk76021 = require("./76021.jsx"),
  Chunk173507 = require("./173507.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk921944 = require("./921944.js"),
  Chunk32312 = require("./32312.js");

function e_() {
  return (e_ = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function eC(e) {
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

function ex(e, t) {
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

function ev(e, t) {
  if (et.Z.isVideoEnabled() === e) return;
  let n = () => h.Z.setVideoEnabled(e);
  (0, P.v)(x.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, ef.Z)(n, t) : n()
}

function ej(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: l,
    canGoLive: a,
    hasPermission: o,
    disabled: s
  } = e, {
    parentAnalyticsLocation: c,
    analyticsLocations: h
  } = (0, v.ZP)(), f = (0, y.bp)(), m = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreams()), g = m.find(e => e.ownerId === n.id), b = i.useRef(null), _ = i.useRef(null), C = t.getGuildId(), x = i.useCallback(() => {
    if (null == l || l(), !a) return (0, ep.Z)();
    (0, eh.Z)(C, t.id, h)
  }, [C, t.id, a, l, h]), j = (0, L.B4)(), [O, E] = i.useState(false), S = () => {
    if ((0, P.v)(c, P.d.STREAM, true), a) return void x();
    (0, ep.Z)()
  }, I = () => {
    (0, P.v)(c, P.d.STREAM, false), (0, R.Z)(g)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(() => {
      if (j && 0 === m.length) return (0, r.jsx)(Z.ZP, {
        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
        bypassAutoDismiss: true,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK) return E(true), (0, r.jsx)(U.h, {
            buttonRef: b,
            dismissed: false,
            onDismiss: () => {
              n(eb.L.USER_DISMISS), E(false)
            }
          })
        }
      })
    })(), (0, r.jsx)(F.Z, {
      children: (0, r.jsx)(p.yRy, {
        targetElementRef: _,
        renderPopout: e => {
          let {
            closePopout: i
          } = e;
          return (0, r.jsx)(H.Z, {
            children: (0, r.jsx)(eu.Z, {
              channel: t,
              currentUser: n,
              activeStreams: null != g ? [g] : [],
              handleGoLive: x,
              appContext: f,
              onClose: i,
              onInteraction: eP("ManageStreamsMenu")
            })
          })
        },
        position: "top",
        align: "center",
        spacing: 16,
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
          var n = e_({}, function(e) {
              if (null == e) throw TypeError("Cannot destructure " + e);
              return e
            }(e)),
            {
              isShown: i
            } = t;
          return (0, r.jsx)("div", {
            ref: _,
            children: ((e, t) => {
              let n = null != e ? e : {
                  onClick: true
                },
                {
                  onClick: i
                } = n,
                l = function(e, t) {
                  if (null == e) return {};
                  var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                      l = Object.keys(e);
                    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                  }
                  return i
                }(n, ["onClick"]),
                a = null != g;
              return (0, r.jsx)(K.O, ex(eC({}, l), {
                centerButton: true,
                disabled: s || !o,
                className: ey.controlButton,
                hasPermission: o,
                streamActive: null != g,
                isSelfStream: true,
                onPopoutClick: a ? function(e) {
                  null == i || i(e)
                } : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                renderNUXHighlight: O,
                buttonRef: b,
                onClick: null != g ? I : S
              }))
            })(n, i)
          })
        }
      })
    })]
  })
}

function eO(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: i,
    setWhichPopoutIsOpen: l
  } = e, a = t.getGuildId();
  return (0, C.Z)(a, t.id) ? (0, r.jsx)("div", {
    className: ey.buttonContainer,
    children: (0, r.jsx)(es.M, {
      channel: t,
      idle: n,
      whichPopoutIsOpen: i,
      setWhichPopoutIsOpen: l
    })
  }) : null
}
let eE = Chunk73800.memo(function(e) {
  let {
    currentUser: t,
    onDisconnectCall: n,
    channel: l,
    connectedEmbeddedActivity: a
  } = e, {
    parentAnalyticsLocation: o
  } = (0, v.ZP)(), s = (0, u.e7)([j.Z], () => j.Z.getSelectedParticipant(l.id)), {
    reducedMotion: d
  } = i.useContext(p.Sfi), [h, f] = i.useState(false), b = null == s ? true : s.id, y = (0, u.e7)([$.Z], () => null != b ? $.Z.getActiveStreamForStreamKey(b) : null, [b]), _ = (null == s ? true : s.type) === eg.fO.STREAM && null != y && y.ownerId !== (null == t ? true : t.id), C = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: n
    } = e;
    return n !== (null == t ? true : t.id)
  })), x = (0, M.qY)(l.id), O = i.useRef(null), E = i.useCallback(() => (null == s ? true : s.type) === eg.fO.ACTIVITY && s.applicationId === (null == a ? true : a.applicationId) ? "ACTIVITY" : _ ? "STREAM" : null != x ? "EVENT" : "CALL", [s, null == a ? true : a.applicationId, _, x]), [S, I] = i.useState(E()), Z = (0, p.q_F)({
    opacity: h ? .2 : 1,
    transform: h && !d.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: h ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: h
    },
    onRest: () => {
      I(E()), f(false)
    }
  }, "animate-always");
  i.useEffect(() => {
    E() !== S && f(true)
  }, [S, E]);
  let T = i.useCallback(() => {
    if (null != y)(0, g.g)((0, A.V9)(y));
    else
      for (let e of C)(0, g.g)((0, A.V9)(e))
  }, [C, y]);
  return (0, r.jsx)(p.yRy, {
    targetElementRef: O,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(eu.Z, {
        channel: l,
        currentUser: t,
        activeStreams: C,
        handleGoLive: em.VqG,
        hideSelfOptions: true,
        onClose: n,
        onInteraction: eP("ManageStreamsMenu")
      })
    },
    position: "top",
    align: "center",
    animation: p.yRy.Animation.FADE,
    children: (e, i) => {
      let {
        onClick: u
      } = e, {
        isShown: d
      } = i;
      return (0, r.jsx)(c.animated.div, {
        style: Z,
        ref: O,
        children: ((e, i) => {
          let c = {
            isTrayButton: false,
            centerButton: true,
            popoutOpen: e
          };
          switch (S) {
            case "ACTIVITY":
              if (null == s || null == t || s.type !== eg.fO.ACTIVITY || null == a) return;
              return (0, r.jsx)(z.Z, ex(eC({}, c), {
                applicationId: s.applicationId,
                color: "disconnect",
                location: a.location,
                onPopoutClick: C.length > 0 ? i : null
              }));
            case "STREAM":
              return (0, r.jsx)(K.O, ex(eC({}, c), {
                hasPermission: true,
                streamActive: true,
                color: "disconnect",
                onClick: () => {
                  (0, P.v)(o, P.d.STOP_WATCHING), T()
                },
                onPopoutClick: C.length > 1 ? i : null,
                isSelfStream: false
              }));
            case "CALL":
              return (0, r.jsx)(W.Z, ex(eC({}, c), {
                color: "disconnect",
                onClick: () => {
                  (0, P.v)(o, P.d.DISCONNECT), null == n || n()
                },
                onPopoutClick: C.length > 0 ? i : null
              }));
            case "EVENT":
              return (0, r.jsx)(k.Z, {
                channelId: l.id,
                onClick: () => {
                  (0, P.v)(o, P.d.DISCONNECT), m.default.disconnect(), null == n || n()
                }
              })
          }
        })(d, u)
      })
    }
  })
});

function eS(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: l,
    currentUser: a
  } = e, o = (0, y.bp)(), {
    parentAnalyticsLocation: s
  } = (0, v.ZP)(), {
    reachedLimit: c,
    limit: d
  } = (0, el.Z)(t), p = i.useCallback(() => {
    (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, ef.Z)(() => m.default.selectVoiceChannel(t.id, true), o)
  }, [t.id, o, s]), h = i.useCallback(() => {
    n ? (0, ed.Z)() : p()
  }, [n, p]), f = (0, u.e7)([ee.Z], () => {
    let e = ee.Z.getCall(t.id);
    return (null == e ? true : e.ringing.includes(a.id)) === true
  });
  return (0, r.jsxs)("div", {
    className: ey.wrapper,
    children: [(0, r.jsx)(X.C, {
      enabled: true,
      centerButton: true,
      join: true,
      color: "join",
      channelLimitReached: c,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: l,
      onCameraUnavailable: h,
      className: ey.controlButton,
      onChange: p
    }), (0, r.jsx)(V.Z, {
      centerButton: true,
      color: "join",
      channel: t,
      className: ey.controlButton
    }), f ? (0, r.jsx)(G.Z, {
      color: "disconnect",
      channel: t,
      className: ey.controlButton,
      isTrayButton: false
    }) : null]
  })
}

function eP(e) {
  return (0, I.u)(e, x.Z.VOICE_CONTROL_TRAY, {
    entrypoint: eg.A5.CARET
  })
}
let eI = function(e) {
  var t;
  let {
    channel: n,
    className: l,
    onDisconnectCall: o,
    exitFullScreen: c,
    idleProps: d
  } = e, h = i.useRef(null), [m, g] = i.useState(true), y = (0, u.e7)([er.default], () => {
    let e = er.default.getCurrentUser();
    return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: C,
    enabled: j
  } = (0, ei.Z)(), P = (0, ea.Z)(n), {
    suppress: I,
    selfMute: Z,
    mute: A
  } = (0, eo.Z)(n), {
    canGoLive: R
  } = (0, u.cj)([et.Z], () => ({
    canGoLive: (0, w.Z)(et.Z)
  })), M = (0, N.Z)(), k = (0, u.e7)([T.Z], () => null != T.Z.getAwaitingRemoteSessionInfo()), L = null != M, U = (0, u.e7)([en.Z], () => {
    var e;
    return (null != (e = null == M ? true : M.channelId) ? e : en.Z.getVoiceChannelId()) === n.id
  }), F = (0, u.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()), {
    reachedLimit: G,
    limit: V
  } = (0, el.Z)(n), {
    analyticsLocations: z
  } = (0, v.ZP)(x.Z.VOICE_CONTROL_TRAY), W = (0, Q.Hu)({
    location: x.Z.VOICE_CONTROL_TRAY,
    autoTrackExposure: true
  }), K = (0, B.Z)(n), $ = i.useRef(null), ee = i.useRef(null), es = W ? e => {
    (0, f.jW)(e, () => Promise.resolve(() => (0, r.jsx)(O.default, {
      onClose: f.Zy,
      renderInputDevices: true,
      renderOutputDevices: true,
      renderInputModes: true,
      renderInputVolume: true,
      renderOutputVolume: true,
      renderDeafen: true,
      minimal: true,
      onInteraction: eP("AudioDeviceMenu")
    })))
  } : true;
  return U ? (0, r.jsx)(v.Gt, {
    value: z,
    children: (0, r.jsxs)(b.Z, {
      section: em.jXE.VOICE_CONTROL_TRAY,
      children: [(0, r.jsx)("div", {
        className: ey.eventPromptsContainer,
        children: (0, r.jsx)(D.Z, {
          channelId: n.id
        })
      }), (0, r.jsxs)("div", {
        ref: h,
        className: a()(ey.wrapper, l),
        children: [(0, r.jsxs)("div", {
          className: ey.buttonSection,
          children: [(0, r.jsx)(p.yRy, {
            targetElementRef: $,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(H.Z, {
                children: (0, r.jsx)(J.R, {
                  onClose: t,
                  location: x.Z.VOICE_CONTROL_TRAY,
                  onInteraction: eP("AudioDeviceMenu")
                })
              })
            },
            align: "center",
            position: "top",
            animation: p.yRy.Animation.FADE,
            spacing: 8,
            children: (e, t) => {
              let {
                onClick: n
              } = e, {
                isShown: i
              } = t;
              return (0, r.jsx)(Y.Z, {
                ref: $,
                centerButton: true,
                onPopoutClick: L ? null : n,
                selfMute: Z,
                serverMute: A,
                suppress: I,
                popoutOpen: i,
                awaitingRemote: k,
                onClick: () => (0, S.Z)(A, I, em.jXE.VOICE_CONTROL_TRAY),
                onContextMenu: es
              })
            }
          }), !L && (0, r.jsx)(p.yRy, {
            targetElementRef: ee,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(H.Z, {
                children: (0, r.jsx)(E.Z, {
                  onClose: t,
                  minimal: true,
                  onInteraction: eP("VideoDeviceMenu")
                })
              })
            },
            position: "top",
            align: "right",
            spacing: 16,
            animation: p.yRy.Animation.FADE,
            children: (e, t) => {
              let {
                onClick: n
              } = e, {
                isShown: i
              } = t;
              return (0, r.jsx)(X.C, {
                ref: ee,
                centerButton: true,
                hasPermission: P,
                enabled: j,
                cameraUnavailable: C,
                onChange: ev,
                onCameraUnavailable: ed.Z,
                channelLimitReached: G,
                channelLimit: V,
                popoutOpen: i,
                onPopoutClick: n
              })
            }
          })]
        }), (0, r.jsxs)("div", {
          className: ey.buttonSection,
          children: [!L && (0, r.jsx)(ej, {
            channel: n,
            currentUser: y,
            exitFullScreen: c,
            canGoLive: R,
            hasPermission: P
          }), !L && (0, r.jsx)(eO, {
            channel: n,
            idle: null == (t = null == d ? true : d.idle) || t,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g
          }), K && (0, r.jsx)(q.Z, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g
          }), (0, r.jsx)(ec.Z, {
            channel: n,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g,
            remoteMode: L
          })]
        }), (0, r.jsx)(eE, {
          connectedEmbeddedActivity: F,
          currentUser: y,
          channel: n,
          onDisconnectCall: o
        })]
      })]
    })
  }) : (0, r.jsx)(v.Gt, {
    value: z,
    children: (0, r.jsx)(eS, {
      channel: n,
      cameraUnavailable: C,
      hasCameraPermission: P,
      currentUser: y
    })
  })
}