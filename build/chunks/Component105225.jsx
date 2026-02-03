/** Chunk was on 44669 **/
/** chunk id: 105225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => eP,
  SZ: () => eE,
  rP: () => eC
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk442433 = require("./442433.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk933958 = require("./933958.js"),
  Chunk967812 = require("./967812.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk385318 = require("./385318.jsx"),
  Chunk206018 = require("./206018.jsx"),
  Chunk750765 = require("./750765.jsx"),
  Chunk183184 = require("./183184.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk643501 = require("./643501.js"),
  Chunk857253 = require("./857253.js"),
  Chunk652896 = require("./652896.js"),
  Chunk880144 = require("./880144.js"),
  Chunk338771 = require("./338771.js"),
  Chunk508654 = require("./508654.js"),
  Chunk984624 = require("./984624.jsx"),
  Chunk394412 = require("./394412.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk526292 = require("./526292.js"),
  Chunk396495 = require("./396495.jsx"),
  Chunk478564 = require("./478564.js"),
  Chunk123973 = require("./123973.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk246356 = require("./246356.js"),
  Chunk710801 = require("./710801.jsx"),
  Chunk496841 = require("./496841.jsx"),
  Chunk383831 = require("./383831.jsx"),
  Chunk905216 = require("./905216.jsx"),
  Chunk577062 = require("./577062.jsx"),
  Chunk533978 = require("./533978.jsx"),
  Chunk958449 = require("./958449.jsx"),
  Chunk970636 = require("./970636.jsx"),
  Chunk996744 = require("./996744.js"),
  Chunk85612 = require("./85612.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk470710 = require("./470710.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk151476 = require("./151476.js"),
  Chunk405018 = require("./405018.js"),
  Chunk704877 = require("./704877.js"),
  Chunk173660 = require("./173660.js"),
  Chunk543274 = require("./543274.jsx"),
  Chunk579153 = require("./579153.jsx"),
  Chunk152535 = require("./152535.jsx"),
  Chunk848362 = require("./848362.jsx"),
  Chunk222692 = require("./222692.jsx"),
  Chunk702904 = require("./702904.jsx"),
  Chunk471993 = require("./471993.jsx"),
  Chunk442353 = require("./442353.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk49999 = require("./49999.js"),
  Chunk913957 = require("./913957.js");

function ex() {
  return (ex = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function e_(e) {
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

function ev(e, t) {
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

function eE(e, t) {
  if (er.A.isVideoEnabled() === e) return;
  let n = () => h.A.setVideoEnabled(e);
  (0, S.X)(O.A.VOICE_CONTROL_TRAY, S.O.CAMERA, e), e ? (0, eb.A)(n, t) : n()
}

function eC(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: i,
    canGoLive: s,
    hasPermission: a,
    disabled: o
  } = e, {
    parentAnalyticsLocation: c,
    analyticsLocations: h
  } = (0, j.Ay)(), g = (0, k.Us)(), f = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()), m = f.find(e => e.ownerId === n.id), b = l.useRef(null), A = l.useRef(null), y = t.getGuildId(), O = l.useCallback(() => {
    if (null == i || i(), !s) return (0, ef.A)();
    (0, em.A)(y, t.id, h)
  }, [y, t.id, s, i, h]), x = (0, U.k0)(), [_, v] = l.useState(false), E = () => {
    ((0, S.X)(c, S.O.STREAM, true), s) ? O(): (0, ef.A)()
  }, C = () => {
    (0, S.X)(c, S.O.STREAM, false), (0, D.A)(m)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(() => {
      if (x && 0 === f.length) return (0, r.jsx)(N.Ay, {
        contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
        bypassAutoDismiss: true,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === d.M.TRIAL_NUX_STREAM_COACH_MARK) return v(true), (0, r.jsx)(V.b, {
            buttonRef: b,
            dismissed: false,
            onDismiss: () => {
              n(eO.i.USER_DISMISS), v(false)
            }
          })
        }
      })
    })(), (0, r.jsx)(F.A, {
      children: (0, r.jsx)(p.YNO, {
        targetElementRef: A,
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, r.jsx)(Y.A, {
            children: (0, r.jsx)(eh.A, {
              channel: t,
              currentUser: n,
              activeStreams: null != m ? [m] : [],
              handleGoLive: O,
              appContext: g,
              onClose: l,
              onInteraction: eT("ManageStreamsMenu")
            })
          })
        },
        position: "top",
        align: "center",
        spacing: 16,
        animation: p.YNO.Animation.FADE,
        children: (e, t) => {
          let [n, ...l] = [e, t], {} = n, i = ex({}, n), [{
            isShown: s
          }] = l;
          return (0, r.jsx)("div", {
            ref: A,
            children: ((e, t) => {
              let n = null != e ? e : {
                  onClick: true
                },
                {
                  onClick: l
                } = n,
                i = function(e, t) {
                  if (null == e) return {};
                  var n, r, l, i = {};
                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                  }
                  if (i = function(e, t) {
                      if (null == e) return {};
                      var n, r, l = {},
                        i = Object.getOwnPropertyNames(e);
                      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                      return l
                    }(e, t), Object.getOwnPropertySymbols)
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                  return i
                }(n, ["onClick"]),
                s = null != m;
              return (0, r.jsx)(Q.h, ev(e_({}, i), {
                centerButton: true,
                disabled: o || !a,
                className: ej.uH,
                hasPermission: a,
                streamActive: null != m,
                isSelfStream: true,
                onPopoutClick: s ? function(e) {
                  null == l || l(e)
                } : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                renderNUXHighlight: _,
                buttonRef: b,
                onClick: null != m ? C : E
              }))
            })(i, s)
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
    whichPopoutIsOpen: l,
    setWhichPopoutIsOpen: i
  } = e, s = t.getGuildId();
  return (0, y.A)(s, t.id) ? (0, r.jsx)("div", {
    className: ej.UD,
    children: (0, r.jsx)(eu.K, {
      channel: t,
      idle: n,
      whichPopoutIsOpen: l,
      setWhichPopoutIsOpen: i
    })
  }) : null
}
let eI = Chunk64700.memo(function(e) {
  let {
    currentUser: t,
    onDisconnectCall: n,
    channel: i,
    connectedEmbeddedActivity: s
  } = e, {
    parentAnalyticsLocation: a
  } = (0, j.Ay)(), o = (0, u.bG)([x.A], () => x.A.getSelectedParticipant(i.id)), {
    reducedMotion: d
  } = l.useContext(p.CZY), [h, g] = l.useState(false), b = null == o ? true : o.id, A = (0, u.bG)([et.A], () => null != b ? et.A.getActiveStreamForStreamKey(b) : null, [b]), y = (null == o ? true : o.type) === ey.lp.STREAM && null != A && A.ownerId !== (null == t ? true : t.id), O = (0, u.yK)([et.A], () => et.A.getAllActiveStreamsForChannel(i.id).filter(e => {
    let {
      ownerId: n
    } = e;
    return n !== (null == t ? true : t.id)
  })), _ = (0, L.Qs)(i.id), v = l.useRef(null), E = l.useCallback(() => (null == o ? true : o.type) === ey.lp.ACTIVITY && o.applicationId === (null == s ? true : s.applicationId) ? "ACTIVITY" : y ? "STREAM" : null != _ ? "EVENT" : "CALL", [o, null == s ? true : s.applicationId, y, _]), [C, I] = l.useState(E()), N = (0, p.zhh)({
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
      I(E()), g(false)
    }
  }, "animate-always");
  l.useEffect(() => {
    E() !== C && g(true)
  }, [C, E]);
  let T = l.useCallback(() => {
    if (null != A)(0, m.vN)((0, w._z)(A));
    else
      for (let e of O)(0, m.vN)((0, w._z)(e))
  }, [O, A]);
  return (0, r.jsx)(p.YNO, {
    targetElementRef: v,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(eh.A, {
        channel: i,
        currentUser: t,
        activeStreams: O,
        handleGoLive: eA.FXj,
        hideSelfOptions: true,
        onClose: n,
        onInteraction: eT("ManageStreamsMenu")
      })
    },
    position: "top",
    align: "center",
    animation: p.YNO.Animation.FADE,
    children: (e, l) => {
      let {
        onClick: u
      } = e, {
        isShown: d
      } = l;
      return (0, r.jsx)(c.animated.div, {
        style: N,
        ref: v,
        children: ((e, l) => {
          let c = {
            isTrayButton: false,
            centerButton: true,
            popoutOpen: e
          };
          switch (C) {
            case "ACTIVITY":
              if (null == o || null == t || o.type !== ey.lp.ACTIVITY || null == s) return;
              return (0, r.jsx)(z.A, ev(e_({}, c), {
                applicationId: o.applicationId,
                color: "disconnect",
                location: s.location,
                onPopoutClick: O.length > 0 ? l : null
              }));
            case "STREAM":
              return (0, r.jsx)(Q.h, ev(e_({}, c), {
                hasPermission: true,
                streamActive: true,
                color: "disconnect",
                onClick: () => {
                  (0, S.X)(a, S.O.STOP_WATCHING), T()
                },
                onPopoutClick: O.length > 1 ? l : null,
                isSelfStream: false
              }));
            case "CALL":
              return (0, r.jsx)(X.A, ev(e_({}, c), {
                color: "disconnect",
                onClick: () => {
                  (0, S.X)(a, S.O.DISCONNECT), null == n || n()
                },
                onPopoutClick: O.length > 0 ? l : null
              }));
            case "EVENT":
              return (0, r.jsx)(M.A, {
                channelId: i.id,
                onClick: () => {
                  (0, S.X)(a, S.O.DISCONNECT), f.default.disconnect(), null == n || n()
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
    hasCameraPermission: i,
    currentUser: s
  } = e, a = (0, k.Us)(), {
    parentAnalyticsLocation: o
  } = (0, j.Ay)(), {
    reachedLimit: c,
    limit: d
  } = (0, ea.A)(t), p = l.useCallback(() => {
    (0, S.X)(o, S.O.JOIN_VIDEO_CALL), (0, eb.A)(() => f.default.selectVoiceChannel(t.id, true), a)
  }, [t.id, a, o]), h = l.useCallback(() => {
    n ? (0, eg.A)() : p()
  }, [n, p]), g = (0, u.bG)([en.A], () => {
    let e = en.A.getCall(t.id);
    return (null == e ? true : e.ringing.includes(s.id)) === true
  });
  return (0, r.jsxs)("div", {
    className: ej.iE,
    children: [(0, r.jsx)(Z.A, {
      enabled: true,
      centerButton: true,
      join: true,
      color: "join",
      channelLimitReached: c,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: i,
      onCameraUnavailable: h,
      className: ej.uH,
      onChange: p
    }), (0, r.jsx)(W.A, {
      centerButton: true,
      color: "join",
      channel: t,
      className: ej.uH
    }), g ? (0, r.jsx)(K.A, {
      color: "disconnect",
      channel: t,
      className: ej.uH,
      isTrayButton: false
    }) : null]
  })
}

function eT(e) {
  return (0, I.s)(e, O.A.VOICE_CONTROL_TRAY, {
    entrypoint: ey.GK.CARET
  })
}
let eP = function(e) {
  var t;
  let {
    channel: n,
    className: i,
    onDisconnectCall: a,
    exitFullScreen: c,
    idleProps: d
  } = e, h = l.useRef(null), [f, m] = l.useState(true), y = (0, u.bG)([ei.default], () => {
    let e = ei.default.getCurrentUser();
    return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: x,
    enabled: S
  } = (0, es.A)(), I = (0, eo.A)(n), {
    suppress: N,
    selfMute: w,
    mute: D
  } = (0, ec.A)(n), {
    canGoLive: L
  } = (0, u.cf)([er.A], () => ({
    canGoLive: (0, R.A)(er.A)
  })), M = (0, P.A)(), U = (0, u.bG)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()), V = null != M, F = (0, u.bG)([el.A], () => {
    var e;
    return (null != (e = null == M ? true : M.channelId) ? e : el.A.getVoiceChannelId()) === n.id
  }), K = (0, B.A)({
    channelId: n.id,
    location: "center-control-tray"
  }), W = (0, u.bG)([A.Ay], () => A.Ay.getCurrentEmbeddedActivity()), {
    reachedLimit: z,
    limit: X
  } = (0, ea.A)(n), {
    analyticsLocations: Q
  } = (0, j.Ay)(O.A.VOICE_CONTROL_TRAY), et = (0, $.Cg)({
    location: O.A.VOICE_CONTROL_TRAY,
    autoTrackExposure: true
  }), en = (0, H.A)(n), eu = l.useRef(null), eh = l.useRef(null), ef = (0, k.Us)(), em = et ? e => {
    (0, g.L3)(e, () => Promise.resolve(() => (0, r.jsx)(_.default, {
      onClose: g.Z_,
      renderInputDevices: true,
      renderOutputDevices: true,
      renderInputModes: true,
      renderInputVolume: true,
      renderOutputVolume: true,
      renderDeafen: true,
      minimal: true,
      onInteraction: eT("AudioDeviceMenu"),
      appContext: ef
    })))
  } : true;
  return F ? (0, r.jsx)(j.f5, {
    value: Q,
    children: (0, r.jsxs)(b.A, {
      section: eA.JJy.VOICE_CONTROL_TRAY,
      children: [(0, r.jsx)("div", {
        className: ej.rt,
        children: (0, r.jsx)(G.A, {
          channelId: n.id
        })
      }), (0, r.jsxs)("div", {
        ref: h,
        className: s()(ej.iE, i),
        children: [(0, r.jsxs)("div", {
          className: ej.qi,
          children: [(0, r.jsx)(p.YNO, {
            targetElementRef: eu,
            renderPopout: e => {
              let t, {
                closePopout: n
              } = e;
              return t = et ? (0, r.jsx)(ee.a, {
                wide: true,
                showOutputDevices: true,
                onSettingsButtonClick: n
              }) : (0, r.jsx)(v.A, {
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
                appContext: ef
              }), (0, r.jsxs)(Y.A, {
                children: [t, " "]
              })
            },
            align: "center",
            position: "top",
            animation: p.YNO.Animation.FADE,
            spacing: 8,
            children: (e, t) => {
              let {
                onClick: n
              } = e, {
                isShown: l
              } = t;
              return (0, r.jsx)(q.A, {
                ref: eu,
                centerButton: true,
                onPopoutClick: V ? null : n,
                selfMute: w,
                serverMute: D,
                suppress: N,
                popoutOpen: l,
                awaitingRemote: U,
                onClick: () => (0, C.A)(D, N, eA.JJy.VOICE_CONTROL_TRAY),
                onContextMenu: em
              })
            }
          }), !V && (0, r.jsx)(p.YNO, {
            targetElementRef: eh,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(Y.A, {
                children: (0, r.jsx)(E.A, {
                  onClose: t,
                  minimal: true,
                  onInteraction: eT("VideoDeviceMenu"),
                  appContext: ef
                })
              })
            },
            position: "top",
            align: "right",
            spacing: 16,
            animation: p.YNO.Animation.FADE,
            children: (e, t) => {
              let {
                onClick: n
              } = e, {
                isShown: l
              } = t;
              return (0, r.jsx)(Z.A, {
                ref: eh,
                centerButton: true,
                hasPermission: I,
                enabled: S,
                cameraUnavailable: x,
                onChange: eE,
                onCameraUnavailable: eg.A,
                channelLimitReached: z,
                channelLimit: X,
                popoutOpen: l,
                onPopoutClick: n
              })
            }
          })]
        }), (0, r.jsxs)("div", {
          className: ej.qi,
          children: [!V && (0, r.jsx)(eC, {
            channel: n,
            currentUser: y,
            exitFullScreen: c,
            canGoLive: L,
            hasPermission: I
          }), !V && (0, r.jsx)(eS, {
            channel: n,
            idle: null == (t = null == d ? true : d.idle) || t,
            whichPopoutIsOpen: f,
            setWhichPopoutIsOpen: m
          }), en && (0, r.jsx)(J.A, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: f,
            setWhichPopoutIsOpen: m
          }), K && (0, r.jsx)(ep.A, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: f,
            setWhichPopoutIsOpen: m
          }), (0, r.jsx)(ed.A, {
            channel: n,
            whichPopoutIsOpen: f,
            setWhichPopoutIsOpen: m,
            remoteMode: V
          })]
        }), (0, r.jsx)(eI, {
          connectedEmbeddedActivity: W,
          currentUser: y,
          channel: n,
          onDisconnectCall: a
        })]
      })]
    })
  }) : (0, r.jsx)(j.f5, {
    value: Q,
    children: (0, r.jsx)(eN, {
      channel: n,
      cameraUnavailable: x,
      hasCameraPermission: I,
      currentUser: y
    })
  })
}