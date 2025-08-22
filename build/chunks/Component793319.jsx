/** Chunk was on 5665 **/
/** chunk id: 793319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NZ: () => eE,
  ZP: () => eT,
  r: () => ej
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk202841 = require("./202841.js"),
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
  Chunk853170 = require("./853170.js"),
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

function ex() {
  return (ex = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function ev(e) {
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

function eO(e, t) {
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

function ej(e, t) {
  if (er.Z.isVideoEnabled() === e) return;
  let n = () => h.Z.setVideoEnabled(e);
  (0, P.v)(x.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, eg.Z)(n, t) : n()
}

function eE(e) {
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
  } = (0, v.ZP)(), f = (0, _.bp)(), m = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreams()), g = m.find(e => e.ownerId === n.id), b = i.useRef(null), y = i.useRef(null), C = t.getGuildId(), x = i.useCallback(() => {
    if (null == l || l(), !a) return (0, ef.Z)();
    (0, em.Z)(C, t.id, h)
  }, [C, t.id, a, l, h]), O = (0, B.B4)(), [j, E] = i.useState(false), S = () => {
    if ((0, P.v)(c, P.d.STREAM, true), a) return void x();
    (0, ef.Z)()
  }, I = () => {
    (0, P.v)(c, P.d.STREAM, false), (0, M.Z)(g)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(() => {
      if (O && 0 === m.length) return (0, r.jsx)(T.ZP, {
        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
        bypassAutoDismiss: true,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK) return E(true), (0, r.jsx)(F.h, {
            buttonRef: b,
            dismissed: false,
            onDismiss: () => {
              n(ey.L.USER_DISMISS), E(false)
            }
          })
        }
      })
    })(), (0, r.jsx)(H.Z, {
      children: (0, r.jsx)(p.yRy, {
        targetElementRef: y,
        renderPopout: e => {
          let {
            closePopout: i
          } = e;
          return (0, r.jsx)(V.Z, {
            children: (0, r.jsx)(ep.Z, {
              channel: t,
              currentUser: n,
              activeStreams: null != g ? [g] : [],
              handleGoLive: x,
              appContext: f,
              onClose: i,
              onInteraction: eZ("ManageStreamsMenu")
            })
          })
        },
        position: "top",
        align: "center",
        spacing: 16,
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
          var n = ex({}, function(e) {
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
                a = null != g;
              return (0, r.jsx)(Q.O, eO(ev({}, l), {
                centerButton: true,
                disabled: s || !o,
                className: eC.controlButton,
                hasPermission: o,
                streamActive: null != g,
                isSelfStream: true,
                onPopoutClick: a ? function(e) {
                  null == i || i(e)
                } : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                renderNUXHighlight: j,
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

function eS(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: i,
    setWhichPopoutIsOpen: l
  } = e, a = t.getGuildId();
  return (0, C.Z)(a, t.id) ? (0, r.jsx)("div", {
    className: eC.buttonContainer,
    children: (0, r.jsx)(eu.M, {
      channel: t,
      idle: n,
      whichPopoutIsOpen: i,
      setWhichPopoutIsOpen: l
    })
  }) : null
}
let eI = Chunk647438.memo(function(e) {
  let {
    currentUser: t,
    onDisconnectCall: n,
    channel: l,
    connectedEmbeddedActivity: a
  } = e, {
    parentAnalyticsLocation: o
  } = (0, v.ZP)(), s = (0, u.e7)([O.Z], () => O.Z.getSelectedParticipant(l.id)), {
    reducedMotion: d
  } = i.useContext(p.Sfi), [h, f] = i.useState(false), b = null == s ? true : s.id, _ = (0, u.e7)([et.Z], () => null != b ? et.Z.getActiveStreamForStreamKey(b) : null, [b]), y = (null == s ? true : s.type) === e_.fO.STREAM && null != _ && _.ownerId !== (null == t ? true : t.id), C = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: n
    } = e;
    return n !== (null == t ? true : t.id)
  })), x = (0, D.qY)(l.id), j = i.useRef(null), E = i.useCallback(() => (null == s ? true : s.type) === e_.fO.ACTIVITY && s.applicationId === (null == a ? true : a.applicationId) ? "ACTIVITY" : y ? "STREAM" : null != x ? "EVENT" : "CALL", [s, null == a ? true : a.applicationId, y, x]), [S, I] = i.useState(E()), Z = (0, p.q_F)({
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
    if (null != _)(0, g.g)((0, w.V9)(_));
    else
      for (let e of C)(0, g.g)((0, w.V9)(e))
  }, [C, _]);
  return (0, r.jsx)(p.yRy, {
    targetElementRef: j,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(ep.Z, {
        channel: l,
        currentUser: t,
        activeStreams: C,
        handleGoLive: eb.VqG,
        hideSelfOptions: true,
        onClose: n,
        onInteraction: eZ("ManageStreamsMenu")
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
        ref: j,
        children: ((e, i) => {
          let c = {
            isTrayButton: false,
            centerButton: true,
            popoutOpen: e
          };
          switch (S) {
            case "ACTIVITY":
              if (null == s || null == t || s.type !== e_.fO.ACTIVITY || null == a) return;
              return (0, r.jsx)(q.Z, eO(ev({}, c), {
                applicationId: s.applicationId,
                color: "disconnect",
                location: a.location,
                onPopoutClick: C.length > 0 ? i : null
              }));
            case "STREAM":
              return (0, r.jsx)(Q.O, eO(ev({}, c), {
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
              return (0, r.jsx)(Y.Z, eO(ev({}, c), {
                color: "disconnect",
                onClick: () => {
                  (0, P.v)(o, P.d.DISCONNECT), null == n || n()
                },
                onPopoutClick: C.length > 0 ? i : null
              }));
            case "EVENT":
              return (0, r.jsx)(L.Z, {
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

function eP(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: l,
    currentUser: a
  } = e, o = (0, _.bp)(), {
    parentAnalyticsLocation: s
  } = (0, v.ZP)(), {
    reachedLimit: c,
    limit: d
  } = (0, eo.Z)(t), p = i.useCallback(() => {
    (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, eg.Z)(() => m.default.selectVoiceChannel(t.id, true), o)
  }, [t.id, o, s]), h = i.useCallback(() => {
    n ? (0, eh.Z)() : p()
  }, [n, p]), f = (0, u.e7)([en.Z], () => {
    let e = en.Z.getCall(t.id);
    return (null == e ? true : e.ringing.includes(a.id)) === true
  });
  return (0, r.jsxs)("div", {
    className: eC.wrapper,
    children: [(0, r.jsx)(J.C, {
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
      className: eC.controlButton,
      onChange: p
    }), (0, r.jsx)(W.Z, {
      centerButton: true,
      color: "join",
      channel: t,
      className: eC.controlButton
    }), f ? (0, r.jsx)(z.Z, {
      color: "disconnect",
      channel: t,
      className: eC.controlButton,
      isTrayButton: false
    }) : null]
  })
}

function eZ(e) {
  return (0, Z.u)(e, x.Z.VOICE_CONTROL_TRAY, {
    entrypoint: e_.A5.CARET
  })
}
let eT = function(e) {
  var t;
  let {
    channel: n,
    className: l,
    onDisconnectCall: o,
    exitFullScreen: c,
    idleProps: d
  } = e, h = i.useRef(null), [m, g] = i.useState(true), _ = (0, u.e7)([el.default], () => {
    let e = el.default.getCurrentUser();
    return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: C,
    enabled: O
  } = (0, ea.Z)(), P = (0, es.Z)(n), {
    suppress: Z,
    selfMute: T,
    mute: w
  } = (0, ec.Z)(n), {
    canGoLive: M
  } = (0, u.cj)([er.Z], () => ({
    canGoLive: (0, R.Z)(er.Z)
  })), D = (0, A.Z)(), L = (0, u.e7)([N.Z], () => null != N.Z.getAwaitingRemoteSessionInfo()), B = null != D, F = (0, u.e7)([ei.Z], () => {
    var e;
    return (null != (e = null == D ? true : D.channelId) ? e : ei.Z.getVoiceChannelId()) === n.id
  }), H = (0, u.e7)([y.ZP], () => y.ZP.getCurrentEmbeddedActivity()), {
    reachedLimit: z,
    limit: W
  } = (0, eo.Z)(n), {
    analyticsLocations: q
  } = (0, v.ZP)(x.Z.VOICE_CONTROL_TRAY), Y = (0, $.Hu)({
    location: x.Z.VOICE_CONTROL_TRAY,
    autoTrackExposure: true
  }), {
    showRefreshedAudioContextMenu: Q
  } = (0, U.e)({
    location: x.Z.VOICE_CONTROL_TRAY
  }), et = (0, G.Z)(n), en = i.useRef(null), eu = i.useRef(null), ep = Y ? e => {
    (0, f.jW)(e, () => Promise.resolve(() => (0, r.jsx)(j.default, {
      onClose: f.Zy,
      renderInputDevices: true,
      renderOutputDevices: true,
      renderInputModes: true,
      renderInputVolume: true,
      renderOutputVolume: true,
      renderDeafen: true,
      minimal: true,
      onInteraction: eZ("AudioDeviceMenu")
    })))
  } : true;
  return F ? (0, r.jsx)(v.Gt, {
    value: q,
    children: (0, r.jsxs)(b.Z, {
      section: eb.jXE.VOICE_CONTROL_TRAY,
      children: [(0, r.jsx)("div", {
        className: eC.eventPromptsContainer,
        children: (0, r.jsx)(k.Z, {
          channelId: n.id
        })
      }), (0, r.jsxs)("div", {
        ref: h,
        className: a()(eC.wrapper, l),
        children: [(0, r.jsxs)("div", {
          className: eC.buttonSection,
          children: [(0, r.jsx)(p.yRy, {
            targetElementRef: en,
            renderPopout: e => {
              let t, {
                closePopout: n
              } = e;
              return t = Y ? (0, r.jsx)(ee.l, {
                wide: true,
                showOutputDevices: true,
                onSettingsButtonClick: n
              }) : Q ? (0, r.jsx)(E.Z, {
                onInteraction: eZ("AudioDeviceMenu"),
                onClose: n,
                maybeRenderPTTCheckbox: true,
                renderInputProfiles: true,
                renderInputDevices: true,
                renderInputVolume: true,
                maybeRenderInputMeter: true,
                renderDeafenCheckbox: true,
                renderOutputDevices: true,
                renderOutputVolume: true,
                renderSettingsButton: true
              }) : (0, r.jsx)(j.default, {
                onClose: n,
                renderInputDevices: true,
                renderOutputDevices: true,
                renderInputModes: true,
                renderInputVolume: true,
                renderOutputVolume: true,
                renderDeafen: true,
                minimal: true,
                onInteraction: eZ("AudioDeviceMenu")
              }), (0, r.jsxs)(V.Z, {
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
              return (0, r.jsx)(K.Z, {
                ref: en,
                centerButton: true,
                onPopoutClick: B ? null : n,
                selfMute: T,
                serverMute: w,
                suppress: Z,
                popoutOpen: i,
                awaitingRemote: L,
                onClick: () => (0, I.Z)(w, Z, eb.jXE.VOICE_CONTROL_TRAY),
                onContextMenu: ep
              })
            }
          }), !B && (0, r.jsx)(p.yRy, {
            targetElementRef: eu,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(V.Z, {
                children: (0, r.jsx)(S.Z, {
                  onClose: t,
                  minimal: true,
                  onInteraction: eZ("VideoDeviceMenu")
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
              return (0, r.jsx)(J.C, {
                ref: eu,
                centerButton: true,
                hasPermission: P,
                enabled: O,
                cameraUnavailable: C,
                onChange: ej,
                onCameraUnavailable: eh.Z,
                channelLimitReached: z,
                channelLimit: W,
                popoutOpen: i,
                onPopoutClick: n
              })
            }
          })]
        }), (0, r.jsxs)("div", {
          className: eC.buttonSection,
          children: [!B && (0, r.jsx)(eE, {
            channel: n,
            currentUser: _,
            exitFullScreen: c,
            canGoLive: M,
            hasPermission: P
          }), !B && (0, r.jsx)(eS, {
            channel: n,
            idle: null == (t = null == d ? true : d.idle) || t,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g
          }), et && (0, r.jsx)(X.Z, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g
          }), (0, r.jsx)(ed.Z, {
            channel: n,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g,
            remoteMode: B
          })]
        }), (0, r.jsx)(eI, {
          connectedEmbeddedActivity: H,
          currentUser: _,
          channel: n,
          onDisconnectCall: o
        })]
      })]
    })
  }) : (0, r.jsx)(v.Gt, {
    value: q,
    children: (0, r.jsx)(eP, {
      channel: n,
      cameraUnavailable: C,
      hasCameraPermission: P,
      currentUser: _
    })
  })
}