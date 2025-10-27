/** Chunk was on 47840 **/
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
  Chunk13941 = require("./13941.js"),
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

function ev() {
  return (ev = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function eO(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ej(e, t) {
  if (ei.Z.isVideoEnabled() === e) return;
  let n = () => h.Z.setVideoEnabled(e);
  (0, P.v)(_.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, eg.Z)(n, t) : n()
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
  } = (0, v.ZP)(), f = (0, k.bp)(), m = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreams()), g = m.find(e => e.ownerId === n.id), b = r.useRef(null), C = r.useRef(null), y = t.getGuildId(), _ = r.useCallback(() => {
    if (null == l || l(), !a) return (0, ef.Z)();
    (0, em.Z)(y, t.id, h)
  }, [y, t.id, a, l, h]), x = (0, B.B4)(), [O, j] = r.useState(false), E = () => {
    if ((0, P.v)(c, P.d.STREAM, true), a) return void _();
    (0, ef.Z)()
  }, S = () => {
    (0, P.v)(c, P.d.STREAM, false), (0, M.Z)(g)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(() => {
      if (x && 0 === m.length) return (0, i.jsx)(Z.ZP, {
        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
        bypassAutoDismiss: true,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK) return j(true), (0, i.jsx)(H.h, {
            buttonRef: b,
            dismissed: false,
            onDismiss: () => {
              n(ey.L.USER_DISMISS), j(false)
            }
          })
        }
      })
    })(), (0, i.jsx)(V.Z, {
      children: (0, i.jsx)(p.yRy, {
        targetElementRef: C,
        renderPopout: e => {
          let {
            closePopout: r
          } = e;
          return (0, i.jsx)(G.Z, {
            children: (0, i.jsx)(ep.Z, {
              channel: t,
              currentUser: n,
              activeStreams: null != g ? [g] : [],
              handleGoLive: _,
              appContext: f,
              onClose: r,
              onInteraction: eZ("ManageStreamsMenu")
            })
          })
        },
        position: "top",
        align: "center",
        spacing: 16,
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
          var n = ev({}, function(e) {
              if (null == e) throw TypeError("Cannot destructure " + e);
              return e
            }(e)),
            {
              isShown: r
            } = t;
          return (0, i.jsx)("div", {
            ref: C,
            children: ((e, t) => {
              let n = null != e ? e : {
                  onClick: true
                },
                {
                  onClick: r
                } = n,
                l = function(e, t) {
                  if (null == e) return {};
                  var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                      l = Object.keys(e);
                    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                  }
                  return r
                }(n, ["onClick"]),
                a = null != g;
              return (0, i.jsx)(J.O, eO(ex({}, l), {
                centerButton: true,
                disabled: s || !o,
                className: e_.controlButton,
                hasPermission: o,
                streamActive: null != g,
                isSelfStream: true,
                onPopoutClick: a ? function(e) {
                  null == r || r(e)
                } : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                renderNUXHighlight: O,
                buttonRef: b,
                onClick: null != g ? S : E
              }))
            })(n, r)
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
    whichPopoutIsOpen: r,
    setWhichPopoutIsOpen: l
  } = e, a = t.getGuildId();
  return (0, y.Z)(a, t.id) ? (0, i.jsx)("div", {
    className: e_.buttonContainer,
    children: (0, i.jsx)(eu.M, {
      channel: t,
      idle: n,
      whichPopoutIsOpen: r,
      setWhichPopoutIsOpen: l
    })
  }) : null
}
let eP = Chunk647438.memo(function(e) {
  let {
    currentUser: t,
    onDisconnectCall: n,
    channel: l,
    connectedEmbeddedActivity: a
  } = e, {
    parentAnalyticsLocation: o
  } = (0, v.ZP)(), s = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)), {
    reducedMotion: d
  } = r.useContext(p.Sfi), [h, f] = r.useState(false), b = null == s ? true : s.id, C = (0, u.e7)([et.Z], () => null != b ? et.Z.getActiveStreamForStreamKey(b) : null, [b]), y = (null == s ? true : s.type) === eC.fO.STREAM && null != C && C.ownerId !== (null == t ? true : t.id), _ = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: n
    } = e;
    return n !== (null == t ? true : t.id)
  })), O = (0, R.qY)(l.id), j = r.useRef(null), E = r.useCallback(() => (null == s ? true : s.type) === eC.fO.ACTIVITY && s.applicationId === (null == a ? true : a.applicationId) ? "ACTIVITY" : y ? "STREAM" : null != O ? "EVENT" : "CALL", [s, null == a ? true : a.applicationId, y, O]), [S, I] = r.useState(E()), Z = (0, p.q_F)({
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
  r.useEffect(() => {
    E() !== S && f(true)
  }, [S, E]);
  let T = r.useCallback(() => {
    if (null != C)(0, g.g)((0, A.V9)(C));
    else
      for (let e of _)(0, g.g)((0, A.V9)(e))
  }, [_, C]);
  return (0, i.jsx)(p.yRy, {
    targetElementRef: j,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(ep.Z, {
        channel: l,
        currentUser: t,
        activeStreams: _,
        handleGoLive: eb.VqG,
        hideSelfOptions: true,
        onClose: n,
        onInteraction: eZ("ManageStreamsMenu")
      })
    },
    position: "top",
    align: "center",
    animation: p.yRy.Animation.FADE,
    children: (e, r) => {
      let {
        onClick: u
      } = e, {
        isShown: d
      } = r;
      return (0, i.jsx)(c.animated.div, {
        style: Z,
        ref: j,
        children: ((e, r) => {
          let c = {
            isTrayButton: false,
            centerButton: true,
            popoutOpen: e
          };
          switch (S) {
            case "ACTIVITY":
              if (null == s || null == t || s.type !== eC.fO.ACTIVITY || null == a) return;
              return (0, i.jsx)(q.Z, eO(ex({}, c), {
                applicationId: s.applicationId,
                color: "disconnect",
                location: a.location,
                onPopoutClick: _.length > 0 ? r : null
              }));
            case "STREAM":
              return (0, i.jsx)(J.O, eO(ex({}, c), {
                hasPermission: true,
                streamActive: true,
                color: "disconnect",
                onClick: () => {
                  (0, P.v)(o, P.d.STOP_WATCHING), T()
                },
                onPopoutClick: _.length > 1 ? r : null,
                isSelfStream: false
              }));
            case "CALL":
              return (0, i.jsx)(Y.Z, eO(ex({}, c), {
                color: "disconnect",
                onClick: () => {
                  (0, P.v)(o, P.d.DISCONNECT), null == n || n()
                },
                onPopoutClick: _.length > 0 ? r : null
              }));
            case "EVENT":
              return (0, i.jsx)(L.Z, {
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

function eI(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: l,
    currentUser: a
  } = e, o = (0, k.bp)(), {
    parentAnalyticsLocation: s
  } = (0, v.ZP)(), {
    reachedLimit: c,
    limit: d
  } = (0, eo.Z)(t), p = r.useCallback(() => {
    (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, eg.Z)(() => m.default.selectVoiceChannel(t.id, true), o)
  }, [t.id, o, s]), h = r.useCallback(() => {
    n ? (0, eh.Z)() : p()
  }, [n, p]), f = (0, u.e7)([en.Z], () => {
    let e = en.Z.getCall(t.id);
    return (null == e ? true : e.ringing.includes(a.id)) === true
  });
  return (0, i.jsxs)("div", {
    className: e_.wrapper,
    children: [(0, i.jsx)(Q.C, {
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
      className: e_.controlButton,
      onChange: p
    }), (0, i.jsx)(W.Z, {
      centerButton: true,
      color: "join",
      channel: t,
      className: e_.controlButton
    }), f ? (0, i.jsx)(z.Z, {
      color: "disconnect",
      channel: t,
      className: e_.controlButton,
      isTrayButton: false
    }) : null]
  })
}

function eZ(e) {
  return (0, I.u)(e, _.Z.VOICE_CONTROL_TRAY, {
    entrypoint: eC.A5.CARET
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
  } = e, h = r.useRef(null), [m, g] = r.useState(true), y = (0, u.e7)([el.default], () => {
    let e = el.default.getCurrentUser();
    return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: x,
    enabled: P
  } = (0, ea.Z)(), I = (0, es.Z)(n), {
    suppress: Z,
    selfMute: A,
    mute: M
  } = (0, ec.Z)(n), {
    canGoLive: R
  } = (0, u.cj)([ei.Z], () => ({
    canGoLive: (0, w.Z)(ei.Z)
  })), L = (0, N.Z)(), k = (0, u.e7)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()), B = null != L, H = (0, u.e7)([er.Z], () => {
    var e;
    return (null != (e = null == L ? true : L.channelId) ? e : er.Z.getVoiceChannelId()) === n.id
  }), V = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()), {
    reachedLimit: z,
    limit: W
  } = (0, eo.Z)(n), {
    analyticsLocations: q
  } = (0, v.ZP)(_.Z.VOICE_CONTROL_TRAY), Y = (0, $.Hu)({
    location: _.Z.VOICE_CONTROL_TRAY,
    autoTrackExposure: true
  }), {
    showRefreshedAudioContextMenu: J
  } = (0, U.e)({
    location: _.Z.VOICE_CONTROL_TRAY
  }), et = (0, F.Z)(n), en = r.useRef(null), eu = r.useRef(null), ep = Y ? e => {
    (0, f.jW)(e, () => Promise.resolve(() => (0, i.jsx)(O.default, {
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
  return H ? (0, i.jsx)(v.Gt, {
    value: q,
    children: (0, i.jsxs)(b.Z, {
      section: eb.jXE.VOICE_CONTROL_TRAY,
      children: [(0, i.jsx)("div", {
        className: e_.eventPromptsContainer,
        children: (0, i.jsx)(D.Z, {
          channelId: n.id
        })
      }), (0, i.jsxs)("div", {
        ref: h,
        className: a()(e_.wrapper, l),
        children: [(0, i.jsxs)("div", {
          className: e_.buttonSection,
          children: [(0, i.jsx)(p.yRy, {
            targetElementRef: en,
            renderPopout: e => {
              let t, {
                closePopout: n
              } = e;
              return t = Y ? (0, i.jsx)(ee.l, {
                wide: true,
                showOutputDevices: true,
                onSettingsButtonClick: n
              }) : J ? (0, i.jsx)(j.Z, {
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
              }) : (0, i.jsx)(O.default, {
                onClose: n,
                renderInputDevices: true,
                renderOutputDevices: true,
                renderInputModes: true,
                renderInputVolume: true,
                renderOutputVolume: true,
                renderDeafen: true,
                minimal: true,
                onInteraction: eZ("AudioDeviceMenu")
              }), (0, i.jsxs)(G.Z, {
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
                isShown: r
              } = t;
              return (0, i.jsx)(K.Z, {
                ref: en,
                centerButton: true,
                onPopoutClick: B ? null : n,
                selfMute: A,
                serverMute: M,
                suppress: Z,
                popoutOpen: r,
                awaitingRemote: k,
                onClick: () => (0, S.Z)(M, Z, eb.jXE.VOICE_CONTROL_TRAY),
                onContextMenu: ep
              })
            }
          }), !B && (0, i.jsx)(p.yRy, {
            targetElementRef: eu,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, i.jsx)(G.Z, {
                children: (0, i.jsx)(E.Z, {
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
                isShown: r
              } = t;
              return (0, i.jsx)(Q.C, {
                ref: eu,
                centerButton: true,
                hasPermission: I,
                enabled: P,
                cameraUnavailable: x,
                onChange: ej,
                onCameraUnavailable: eh.Z,
                channelLimitReached: z,
                channelLimit: W,
                popoutOpen: r,
                onPopoutClick: n
              })
            }
          })]
        }), (0, i.jsxs)("div", {
          className: e_.buttonSection,
          children: [!B && (0, i.jsx)(eE, {
            channel: n,
            currentUser: y,
            exitFullScreen: c,
            canGoLive: R,
            hasPermission: I
          }), !B && (0, i.jsx)(eS, {
            channel: n,
            idle: null == (t = null == d ? true : d.idle) || t,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g
          }), et && (0, i.jsx)(X.Z, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g
          }), (0, i.jsx)(ed.Z, {
            channel: n,
            whichPopoutIsOpen: m,
            setWhichPopoutIsOpen: g,
            remoteMode: B
          })]
        }), (0, i.jsx)(eP, {
          connectedEmbeddedActivity: V,
          currentUser: y,
          channel: n,
          onDisconnectCall: o
        })]
      })]
    })
  }) : (0, i.jsx)(v.Gt, {
    value: q,
    children: (0, i.jsx)(eI, {
      channel: n,
      cameraUnavailable: x,
      hasCameraPermission: I,
      currentUser: y
    })
  })
}