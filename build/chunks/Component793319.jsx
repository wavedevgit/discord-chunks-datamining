/** Chunk was on 81985 **/
/** chunk id: 793319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NZ: () => eI,
  ZP: () => eA,
  r: () => e_
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk596040 = require("./596040.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk659580 = require("./659580.jsx"),
  Chunk855844 = require("./855844.jsx"),
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
  Chunk728285 = require("./728285.jsx"),
  Chunk853170 = require("./853170.js"),
  Chunk140465 = require("./140465.js"),
  Chunk800966 = require("./800966.jsx"),
  Chunk675547 = require("./675547.js"),
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
  Chunk306609 = require("./306609.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk523746 = require("./523746.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk923973 = require("./923973.js"),
  Chunk829750 = require("./829750.js"),
  Chunk189771 = require("./189771.js"),
  Chunk294629 = require("./294629.js"),
  Chunk705742 = require("./705742.jsx"),
  Chunk987329 = require("./987329.jsx"),
  Chunk868812 = require("./868812.jsx"),
  Chunk544384 = require("./544384.jsx"),
  Chunk560688 = require("./560688.jsx"),
  Chunk127608 = require("./127608.jsx"),
  Chunk76021 = require("./76021.jsx"),
  Chunk173507 = require("./173507.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk921944 = require("./921944.js"),
  Chunk462081 = require("./462081.js");

function eC() {
  return (eC = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function eE(e) {
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

function eS(e, t) {
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

function e_(e, t) {
  if (ei.Z.isVideoEnabled() === e) return;
  let n = () => f.Z.setVideoEnabled(e);
  (0, I.v)(O.Z.VOICE_CONTROL_TRAY, I.d.CAMERA, e), e ? (0, ey.Z)(n, t) : n()
}

function eI(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: l,
    canGoLive: a,
    hasPermission: o,
    disabled: s
  } = e, {
    parentAnalyticsLocation: c,
    analyticsLocations: f
  } = (0, j.ZP)(), h = (0, L.bp)(), g = (0, u.Wu)([en.Z], () => en.Z.getAllActiveStreams()), m = g.find(e => e.ownerId === n.id), b = i.useRef(null), y = i.useRef(null), v = t.getGuildId(), O = i.useCallback(() => {
    if (null == l || l(), !a) return (0, em.Z)();
    (0, eb.Z)(v, t.id, f)
  }, [v, t.id, a, l, f]), x = (0, G.B4)(), [C, E] = i.useState(false), S = () => {
    if ((0, I.v)(c, I.d.STREAM, true), a) return void O();
    (0, em.Z)()
  }, _ = () => {
    (0, I.v)(c, I.d.STREAM, false), (0, R.Z)(m)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(() => {
      if (x && 0 === g.length) return (0, r.jsx)(Z.ZP, {
        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
        bypassAutoDismiss: true,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK) return E(true), (0, r.jsx)(B.h, {
            buttonRef: b,
            dismissed: false,
            onDismiss: () => {
              n(ej.L.USER_DISMISS), E(false)
            }
          })
        }
      })
    })(), (0, r.jsx)(V.Z, {
      children: (0, r.jsx)(p.yRy, {
        targetElementRef: y,
        renderPopout: e => {
          let {
            closePopout: i
          } = e;
          return (0, r.jsx)(z.Z, {
            children: (0, r.jsx)(eh.Z, {
              channel: t,
              currentUser: n,
              activeStreams: null != m ? [m] : [],
              handleGoLive: O,
              appContext: h,
              onClose: i,
              onInteraction: eT("ManageStreamsMenu")
            })
          })
        },
        position: "top",
        align: "center",
        spacing: 16,
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
          var n = eC({}, function(e) {
              if (null == e) throw TypeError("Cannot destructure " + e);
              return e
            }(e)),
            {
              isShown: i
            } = t;
          return (0, r.jsx)("div", {
            ref: y,
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
                a = null != m;
              return (0, r.jsx)(J.O, eS(eE({}, l), {
                centerButton: true,
                disabled: s || !o,
                className: ex.controlButton,
                hasPermission: o,
                streamActive: null != m,
                isSelfStream: true,
                onPopoutClick: a ? function(e) {
                  null == i || i(e)
                } : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                renderNUXHighlight: C,
                buttonRef: b,
                onClick: null != m ? _ : S
              }))
            })(n, i)
          })
        }
      })
    })]
  })
}

function eP(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: i,
    setWhichPopoutIsOpen: l
  } = e, a = t.getGuildId();
  return (0, v.Z)(a, t.id) ? (0, r.jsx)("div", {
    className: ex.buttonContainer,
    children: (0, r.jsx)(ed.M, {
      channel: t,
      idle: n,
      whichPopoutIsOpen: i,
      setWhichPopoutIsOpen: l
    })
  }) : null
}
let eZ = Chunk473749.memo(function(e) {
  let {
    currentUser: t,
    onDisconnectCall: n,
    channel: l,
    connectedEmbeddedActivity: a
  } = e, {
    parentAnalyticsLocation: o
  } = (0, j.ZP)(), s = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)), {
    reducedMotion: d
  } = i.useContext(p.Sfi), [f, h] = i.useState(false), b = null == s ? true : s.id, y = (0, u.e7)([en.Z], () => null != b ? en.Z.getActiveStreamForStreamKey(b) : null, [b]), v = (null == s ? true : s.type) === eO.fO.STREAM && null != y && y.ownerId !== (null == t ? true : t.id), O = (0, u.Wu)([en.Z], () => en.Z.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: n
    } = e;
    return n !== (null == t ? true : t.id)
  })), C = (0, D.qY)(l.id), E = i.useRef(null), S = i.useCallback(() => (null == s ? true : s.type) === eO.fO.ACTIVITY && s.applicationId === (null == a ? true : a.applicationId) ? "ACTIVITY" : v ? "STREAM" : null != C ? "EVENT" : "CALL", [s, null == a ? true : a.applicationId, v, C]), [_, P] = i.useState(S()), Z = (0, p.q_F)({
    opacity: f ? .2 : 1,
    transform: f && !d.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: f ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: f
    },
    onRest: () => {
      P(S()), h(false)
    }
  }, "animate-always");
  i.useEffect(() => {
    S() !== _ && h(true)
  }, [_, S]);
  let N = i.useCallback(() => {
    if (null != y)(0, m.g)((0, A.V9)(y));
    else
      for (let e of O)(0, m.g)((0, A.V9)(e))
  }, [O, y]);
  return (0, r.jsx)(p.yRy, {
    targetElementRef: E,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(eh.Z, {
        channel: l,
        currentUser: t,
        activeStreams: O,
        handleGoLive: ev.VqG,
        hideSelfOptions: true,
        onClose: n,
        onInteraction: eT("ManageStreamsMenu")
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
        ref: E,
        children: ((e, i) => {
          let c = {
            isTrayButton: false,
            centerButton: true,
            popoutOpen: e
          };
          switch (_) {
            case "ACTIVITY":
              if (null == s || null == t || s.type !== eO.fO.ACTIVITY || null == a) return;
              return (0, r.jsx)(Y.Z, eS(eE({}, c), {
                applicationId: s.applicationId,
                color: "disconnect",
                location: a.location,
                onPopoutClick: O.length > 0 ? i : null
              }));
            case "STREAM":
              return (0, r.jsx)(J.O, eS(eE({}, c), {
                hasPermission: true,
                streamActive: true,
                color: "disconnect",
                onClick: () => {
                  (0, I.v)(o, I.d.STOP_WATCHING), N()
                },
                onPopoutClick: O.length > 1 ? i : null,
                isSelfStream: false
              }));
            case "CALL":
              return (0, r.jsx)(q.Z, eS(eE({}, c), {
                color: "disconnect",
                onClick: () => {
                  (0, I.v)(o, I.d.DISCONNECT), null == n || n()
                },
                onPopoutClick: O.length > 0 ? i : null
              }));
            case "EVENT":
              return (0, r.jsx)(M.Z, {
                channelId: l.id,
                onClick: () => {
                  (0, I.v)(o, I.d.DISCONNECT), g.default.disconnect(), null == n || n()
                }
              })
          }
        })(d, u)
      })
    }
  })
});

function eN(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: l,
    currentUser: a
  } = e, o = (0, L.bp)(), {
    parentAnalyticsLocation: s
  } = (0, j.ZP)(), {
    reachedLimit: c,
    limit: d
  } = (0, es.Z)(t), p = i.useCallback(() => {
    (0, I.v)(s, I.d.JOIN_VIDEO_CALL), (0, ey.Z)(() => g.default.selectVoiceChannel(t.id, true), o)
  }, [t.id, o, s]), f = i.useCallback(() => {
    n ? (0, eg.Z)() : p()
  }, [n, p]), h = (0, u.e7)([er.Z], () => {
    let e = er.Z.getCall(t.id);
    return (null == e ? true : e.ringing.includes(a.id)) === true
  });
  return (0, r.jsxs)("div", {
    className: ex.wrapper,
    children: [(0, r.jsx)($.C, {
      enabled: true,
      centerButton: true,
      join: true,
      color: "join",
      channelLimitReached: c,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: l,
      onCameraUnavailable: f,
      className: ex.controlButton,
      onChange: p
    }), (0, r.jsx)(K.Z, {
      centerButton: true,
      color: "join",
      channel: t,
      className: ex.controlButton
    }), h ? (0, r.jsx)(W.Z, {
      color: "disconnect",
      channel: t,
      className: ex.controlButton,
      isTrayButton: false
    }) : null]
  })
}

function eT(e) {
  return (0, P.u)(e, O.Z.VOICE_CONTROL_TRAY, {
    entrypoint: eO.A5.CARET
  })
}
let eA = function(e) {
  var t;
  let {
    channel: n,
    className: l,
    onDisconnectCall: o,
    exitFullScreen: c,
    idleProps: d
  } = e, f = i.useRef(null), [g, m] = i.useState(true), v = (0, u.e7)([ea.default], () => {
    let e = ea.default.getCurrentUser();
    return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: x,
    enabled: I
  } = (0, eo.Z)(), P = (0, ec.Z)(n), {
    suppress: Z,
    selfMute: A,
    mute: R
  } = (0, eu.Z)(n), {
    canGoLive: D
  } = (0, u.cj)([ei.Z], () => ({
    canGoLive: (0, w.Z)(ei.Z)
  })), M = (0, T.Z)(), G = (0, u.e7)([N.default], () => null != N.default.getAwaitingRemoteSessionInfo()), B = null != M, V = (0, u.e7)([el.Z], () => {
    var e;
    return (null != (e = null == M ? true : M.channelId) ? e : el.Z.getVoiceChannelId()) === n.id
  }), W = (0, F.Z)({
    channelId: n.id,
    location: "center-control-tray"
  }), K = (0, u.e7)([y.ZP], () => y.ZP.getCurrentEmbeddedActivity()), {
    reachedLimit: Y,
    limit: q
  } = (0, es.Z)(n), {
    analyticsLocations: J
  } = (0, j.ZP)(O.Z.VOICE_CONTROL_TRAY), en = (0, ee.Hu)({
    location: O.Z.VOICE_CONTROL_TRAY,
    autoTrackExposure: true
  }), {
    showRefreshedAudioContextMenu: er
  } = (0, U.e)({
    location: O.Z.VOICE_CONTROL_TRAY
  }), ed = (0, H.Z)(n), eh = i.useRef(null), em = i.useRef(null), eb = (0, L.bp)(), ey = en ? e => {
    (0, h.jW)(e, () => Promise.resolve(() => (0, r.jsx)(C.default, {
      onClose: h.Zy,
      renderInputDevices: true,
      renderOutputDevices: true,
      renderInputModes: true,
      renderInputVolume: true,
      renderOutputVolume: true,
      renderDeafen: true,
      minimal: true,
      onInteraction: eT("AudioDeviceMenu"),
      appContext: eb
    })))
  } : true;
  return V ? (0, r.jsx)(j.Gt, {
    value: J,
    children: (0, r.jsxs)(b.Z, {
      section: ev.jXE.VOICE_CONTROL_TRAY,
      children: [(0, r.jsx)("div", {
        className: ex.eventPromptsContainer,
        children: (0, r.jsx)(k.Z, {
          channelId: n.id
        })
      }), (0, r.jsxs)("div", {
        ref: f,
        className: a()(ex.wrapper, l),
        children: [(0, r.jsxs)("div", {
          className: ex.buttonSection,
          children: [(0, r.jsx)(p.yRy, {
            targetElementRef: eh,
            renderPopout: e => {
              let t, {
                closePopout: n
              } = e;
              return t = en ? (0, r.jsx)(et.l, {
                wide: true,
                showOutputDevices: true,
                onSettingsButtonClick: n
              }) : er ? (0, r.jsx)(E.Z, {
                onInteraction: eT("AudioDeviceMenu"),
                onClose: n,
                maybeRenderPTTCheckbox: true,
                renderInputProfiles: true,
                renderInputDevices: true,
                renderInputVolume: true,
                maybeRenderInputMeter: true,
                renderDeafenCheckbox: true,
                renderOutputDevices: true,
                renderOutputVolume: true,
                renderSettingsButton: true,
                appContext: eb
              }) : (0, r.jsx)(C.default, {
                onClose: n,
                renderInputDevices: true,
                renderOutputDevices: true,
                renderInputModes: true,
                renderInputVolume: true,
                renderOutputVolume: true,
                renderDeafen: true,
                minimal: true,
                onInteraction: eT("AudioDeviceMenu"),
                appContext: eb
              }), (0, r.jsxs)(z.Z, {
                children: [t, " "]
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
              return (0, r.jsx)(X.Z, {
                ref: eh,
                centerButton: true,
                onPopoutClick: B ? null : n,
                selfMute: A,
                serverMute: R,
                suppress: Z,
                popoutOpen: i,
                awaitingRemote: G,
                onClick: () => (0, _.Z)(R, Z, ev.jXE.VOICE_CONTROL_TRAY),
                onContextMenu: ey
              })
            }
          }), !B && (0, r.jsx)(p.yRy, {
            targetElementRef: em,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(z.Z, {
                children: (0, r.jsx)(S.Z, {
                  onClose: t,
                  minimal: true,
                  onInteraction: eT("VideoDeviceMenu"),
                  appContext: eb
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
              return (0, r.jsx)($.C, {
                ref: em,
                centerButton: true,
                hasPermission: P,
                enabled: I,
                cameraUnavailable: x,
                onChange: e_,
                onCameraUnavailable: eg.Z,
                channelLimitReached: Y,
                channelLimit: q,
                popoutOpen: i,
                onPopoutClick: n
              })
            }
          })]
        }), (0, r.jsxs)("div", {
          className: ex.buttonSection,
          children: [!B && (0, r.jsx)(eI, {
            channel: n,
            currentUser: v,
            exitFullScreen: c,
            canGoLive: D,
            hasPermission: P
          }), !B && (0, r.jsx)(eP, {
            channel: n,
            idle: null == (t = null == d ? true : d.idle) || t,
            whichPopoutIsOpen: g,
            setWhichPopoutIsOpen: m
          }), ed && (0, r.jsx)(Q.Z, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: g,
            setWhichPopoutIsOpen: m
          }), W && (0, r.jsx)(ef.Z, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: g,
            setWhichPopoutIsOpen: m
          }), (0, r.jsx)(ep.Z, {
            channel: n,
            whichPopoutIsOpen: g,
            setWhichPopoutIsOpen: m,
            remoteMode: B
          })]
        }), (0, r.jsx)(eZ, {
          connectedEmbeddedActivity: K,
          currentUser: v,
          channel: n,
          onDisconnectCall: o
        })]
      })]
    })
  }) : (0, r.jsx)(j.Gt, {
    value: J,
    children: (0, r.jsx)(eN, {
      channel: n,
      cameraUnavailable: x,
      hasCameraPermission: P,
      currentUser: v
    })
  })
}