/** Chunk was on web.js **/
/** chunk id: 793319, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NZ: () => eC,
  ZP: () => eL,
  r: () => eN
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk318629 = require("./318629.js");

function eb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ey() {
  return (ey = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function eO(e) {
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eb(e, t, n[t])
    })
  }
  return e
}

function eI(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eT(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eI(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eS(e, t) {
  if (null == e) return {};
  var n, r, i = eA(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eA(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function eN(e, t) {
  if (et.Z.isVideoEnabled() === e) return;
  let n = () => _.Z.setVideoEnabled(e);
  (0, N.v)(O.Z.VOICE_CONTROL_TRAY, N.d.CAMERA, e), e ? (0, ep.Z)(n, t) : n()
}

function eC(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: o,
    canGoLive: a,
    hasPermission: s,
    disabled: l
  } = e, {
    parentAnalyticsLocation: c
  } = (0, v.ZP)(), _ = (0, E.bp)(), p = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreams()), h = p.find(e => e.ownerId === n.id), m = i.useRef(null), g = i.useRef(null), b = t.getGuildId(), y = i.useCallback(() => {
    if (null == o || o(), !a) return (0, ef.Z)();
    (0, e_.Z)(b, t.id, eh.ZY5.GUILD_CHANNEL)
  }, [b, t.id, a, o]), O = (0, U.B4)(), [I, T] = i.useState(false), S = () => {
    if ((0, N.v)(c, N.d.STREAM, true), a) return void y();
    (0, ef.Z)()
  }, A = () => {
    (0, N.v)(c, N.d.STREAM, false), (0, x.Z)(h)
  }, C = (e, t) => {
    let n = null != e ? e : {
        onClick: true
      },
      {
        onClick: i
      } = n,
      o = eS(n, ["onClick"]),
      a = null != h;

    function c(e) {
      null == i || i(e)
    }
    return (0, r.jsx)(q.O, eT(ev({}, o), {
      centerButton: true,
      disabled: l || !s,
      className: eE.controlButton,
      hasPermission: s,
      streamActive: null != h,
      isSelfStream: true,
      onPopoutClick: a ? c : null,
      popoutOpen: t,
      shouldShowTooltip: !t,
      renderNUXHighlight: I,
      buttonRef: m,
      onClick: null != h ? A : S
    }))
  }, P = () => {
    if (O && 0 === p.length) return (0, r.jsx)(R.ZP, {
      contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
      bypassAutoDismiss: true,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK) return T(true), (0, r.jsx)(G.h, {
          buttonRef: m,
          dismissed: false,
          onDismiss: () => {
            n(eg.L.USER_DISMISS), T(false)
          }
        })
      }
    })
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [P(), (0, r.jsx)(Z.Z, {
      children: (0, r.jsx)(f.yRy, {
        targetElementRef: g,
        renderPopout: e => {
          let {
            closePopout: i
          } = e;
          return (0, r.jsx)(F.Z, {
            children: (0, r.jsx)(eu.Z, {
              channel: t,
              currentUser: n,
              activeStreams: null != h ? [h] : [],
              handleGoLive: y,
              appContext: _,
              onClose: i,
              onInteraction: eD("ManageStreamsMenu")
            })
          })
        },
        position: "top",
        align: "center",
        spacing: 16,
        animation: f.yRy.Animation.FADE,
        children: (e, t) => {
          var n = ey({}, eO(e)),
            {
              isShown: i
            } = t;
          return (0, r.jsx)("div", {
            ref: g,
            children: C(n, i)
          })
        }
      })
    })]
  })
}

function eR(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: i,
    setWhichPopoutIsOpen: o
  } = e, a = t.getGuildId();
  return (0, y.Z)(a, t.id) ? (0, r.jsx)("div", {
    className: eE.buttonContainer,
    children: (0, r.jsx)(el.M, {
      channel: t,
      idle: n,
      whichPopoutIsOpen: i,
      setWhichPopoutIsOpen: o
    })
  }) : null
}
let eP = Chunk73800.memo(function(e) {
  let {
    currentUser: t,
    onDisconnectCall: n,
    channel: o,
    connectedEmbeddedActivity: a
  } = e, {
    parentAnalyticsLocation: s
  } = (0, v.ZP)(), l = (0, u.e7)([I.Z], () => I.Z.getSelectedParticipant(o.id)), {
    reducedMotion: d
  } = i.useContext(f.Sfi), [_, p] = i.useState(false), g = null == l ? true : l.id, E = (0, u.e7)([$.Z], () => null != g ? $.Z.getActiveStreamForStreamKey(g) : null, [g]), b = (null == l ? true : l.type) === em.fO.STREAM && null != E && E.ownerId !== (null == t ? true : t.id), y = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreamsForChannel(o.id).filter(e => {
    let {
      ownerId: n
    } = e;
    return n !== (null == t ? true : t.id)
  })), O = (0, M.qY)(o.id), T = i.useRef(null), S = i.useCallback(() => (null == l ? true : l.type) === em.fO.ACTIVITY && l.applicationId === (null == a ? true : a.applicationId) ? "ACTIVITY" : b ? "STREAM" : null != O ? "EVENT" : "CALL", [l, null == a ? true : a.applicationId, b, O]), [A, C] = i.useState(S()), R = (0, f.q_F)({
    opacity: _ ? .2 : 1,
    transform: _ && !d.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: _ ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: _
    },
    onRest: () => {
      C(S()), p(false)
    }
  }, "animate-always");
  i.useEffect(() => {
    S() !== A && p(true)
  }, [A, S]);
  let P = i.useCallback(() => {
      if (null != E)(0, m.g)((0, D.V9)(E));
      else
        for (let e of y)(0, m.g)((0, D.V9)(e))
    }, [y, E]),
    w = (e, i) => {
      let c = {
        isTrayButton: false,
        centerButton: true,
        popoutOpen: e
      };
      switch (A) {
        case "ACTIVITY":
          if (null == l || null == t || l.type !== em.fO.ACTIVITY || null == a) return;
          return (0, r.jsx)(Y.Z, eT(ev({}, c), {
            applicationId: l.applicationId,
            color: "disconnect",
            location: a.location,
            onPopoutClick: y.length > 0 ? i : null
          }));
        case "STREAM":
          return (0, r.jsx)(q.O, eT(ev({}, c), {
            hasPermission: true,
            streamActive: true,
            color: "disconnect",
            onClick: () => {
              (0, N.v)(s, N.d.STOP_WATCHING), P()
            },
            onPopoutClick: y.length > 1 ? i : null,
            isSelfStream: false
          }));
        case "CALL":
          return (0, r.jsx)(W.Z, eT(ev({}, c), {
            color: "disconnect",
            onClick: () => {
              (0, N.v)(s, N.d.DISCONNECT), null == n || n()
            },
            onPopoutClick: y.length > 0 ? i : null
          }));
        case "EVENT":
          return (0, r.jsx)(j.Z, {
            channelId: o.id,
            onClick: () => {
              (0, N.v)(s, N.d.DISCONNECT), h.default.disconnect(), null == n || n()
            }
          })
      }
    };
  return (0, r.jsx)(f.yRy, {
    targetElementRef: T,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(eu.Z, {
        channel: o,
        currentUser: t,
        activeStreams: y,
        handleGoLive: eh.VqG,
        hideSelfOptions: true,
        onClose: n,
        onInteraction: eD("ManageStreamsMenu")
      })
    },
    position: "top",
    align: "center",
    animation: f.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(c.animated.div, {
        style: R,
        ref: T,
        children: w(i, n)
      })
    }
  })
});

function ew(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: o,
    currentUser: a
  } = e, s = (0, E.bp)(), {
    parentAnalyticsLocation: l
  } = (0, v.ZP)(), {
    reachedLimit: c,
    limit: d
  } = (0, eo.Z)(t), f = i.useCallback(() => {
    (0, N.v)(l, N.d.JOIN_VIDEO_CALL);
    let e = () => h.default.selectVoiceChannel(t.id, true);
    (0, ep.Z)(e, s)
  }, [t.id, s, l]), _ = i.useCallback(() => {
    n ? (0, ed.Z)() : f()
  }, [n, f]), p = (0, u.e7)([ee.Z], () => {
    let e = ee.Z.getCall(t.id);
    return (null == e ? true : e.ringing.includes(a.id)) === true
  });
  return (0, r.jsxs)("div", {
    className: eE.wrapper,
    children: [(0, r.jsx)(X.C, {
      enabled: true,
      centerButton: true,
      join: true,
      color: "join",
      channelLimitReached: c,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: o,
      onCameraUnavailable: _,
      className: eE.controlButton,
      onChange: f
    }), (0, r.jsx)(H.Z, {
      centerButton: true,
      color: "join",
      channel: t,
      className: eE.controlButton
    }), p ? (0, r.jsx)(V.Z, {
      color: "disconnect",
      channel: t,
      className: eE.controlButton,
      isTrayButton: false
    }) : null]
  })
}

function eD(e) {
  return (0, C.u)(e, O.Z.VOICE_CONTROL_TRAY, {
    entrypoint: em.A5.CARET
  })
}
let eL = function(e) {
  var t;
  let {
    channel: n,
    className: o,
    onDisconnectCall: s,
    exitFullScreen: c,
    idleProps: d
  } = e, _ = i.useRef(null), [h, m] = i.useState(true), E = (0, u.e7)([er.default], () => {
    let e = er.default.getCurrentUser();
    return l()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: y,
    enabled: I
  } = (0, ei.Z)(), N = (0, ea.Z)(n), {
    suppress: C,
    selfMute: R,
    mute: D
  } = (0, es.Z)(n), {
    canGoLive: x
  } = (0, u.cj)([et.Z], () => ({
    canGoLive: (0, L.Z)(et.Z)
  })), M = (0, w.Z)(), j = (0, u.e7)([P.Z], () => null != P.Z.getAwaitingRemoteSessionInfo()), U = null != M, G = (0, u.e7)([en.Z], () => {
    var e;
    return (null != (e = null == M ? true : M.channelId) ? e : en.Z.getVoiceChannelId()) === n.id
  }), Z = (0, u.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()), {
    reachedLimit: V,
    limit: H
  } = (0, eo.Z)(n), {
    analyticsLocations: Y
  } = (0, v.ZP)(O.Z.VOICE_CONTROL_TRAY), W = (0, Q.Hu)({
    location: O.Z.VOICE_CONTROL_TRAY,
    autoTrackExposure: true
  }), q = (0, B.Z)(n), $ = i.useRef(null), ee = i.useRef(null), el = W ? e => {
    (0, p.jW)(e, () => Promise.resolve(() => (0, r.jsx)(T.default, {
      onClose: p.Zy,
      renderInputDevices: true,
      renderOutputDevices: true,
      renderInputModes: true,
      renderInputVolume: true,
      renderOutputVolume: true,
      renderDeafen: true,
      minimal: true,
      onInteraction: eD("AudioDeviceMenu")
    })))
  } : true;
  return G ? (0, r.jsx)(v.Gt, {
    value: Y,
    children: (0, r.jsxs)(g.Z, {
      section: eh.jXE.VOICE_CONTROL_TRAY,
      children: [(0, r.jsx)("div", {
        className: eE.eventPromptsContainer,
        children: (0, r.jsx)(k.Z, {
          channelId: n.id
        })
      }), (0, r.jsxs)("div", {
        ref: _,
        className: a()(eE.wrapper, o),
        children: [(0, r.jsxs)("div", {
          className: eE.buttonSection,
          children: [(0, r.jsx)(f.yRy, {
            targetElementRef: $,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(F.Z, {
                children: (0, r.jsx)(J.R, {
                  onClose: t,
                  location: O.Z.VOICE_CONTROL_TRAY,
                  onInteraction: eD("AudioDeviceMenu")
                })
              })
            },
            align: "center",
            position: "top",
            animation: f.yRy.Animation.FADE,
            spacing: 8,
            children: (e, t) => {
              let {
                onClick: n
              } = e, {
                isShown: i
              } = t;
              return (0, r.jsx)(K.Z, {
                ref: $,
                centerButton: true,
                onPopoutClick: U ? null : n,
                selfMute: R,
                serverMute: D,
                suppress: C,
                popoutOpen: i,
                awaitingRemote: j,
                onClick: () => (0, A.Z)(D, C, eh.jXE.VOICE_CONTROL_TRAY),
                onContextMenu: el
              })
            }
          }), !U && (0, r.jsx)(f.yRy, {
            targetElementRef: ee,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(F.Z, {
                children: (0, r.jsx)(S.Z, {
                  onClose: t,
                  minimal: true,
                  onInteraction: eD("VideoDeviceMenu")
                })
              })
            },
            position: "top",
            align: "right",
            spacing: 16,
            animation: f.yRy.Animation.FADE,
            children: (e, t) => {
              let {
                onClick: n
              } = e, {
                isShown: i
              } = t;
              return (0, r.jsx)(X.C, {
                ref: ee,
                centerButton: true,
                hasPermission: N,
                enabled: I,
                cameraUnavailable: y,
                onChange: eN,
                onCameraUnavailable: ed.Z,
                channelLimitReached: V,
                channelLimit: H,
                popoutOpen: i,
                onPopoutClick: n
              })
            }
          })]
        }), (0, r.jsxs)("div", {
          className: eE.buttonSection,
          children: [!U && (0, r.jsx)(eC, {
            channel: n,
            currentUser: E,
            exitFullScreen: c,
            canGoLive: x,
            hasPermission: N
          }), !U && (0, r.jsx)(eR, {
            channel: n,
            idle: null == (t = null == d ? true : d.idle) || t,
            whichPopoutIsOpen: h,
            setWhichPopoutIsOpen: m
          }), q && (0, r.jsx)(z.Z, {
            channel: n,
            themeable: true,
            whichPopoutIsOpen: h,
            setWhichPopoutIsOpen: m
          }), (0, r.jsx)(ec.Z, {
            channel: n,
            whichPopoutIsOpen: h,
            setWhichPopoutIsOpen: m,
            remoteMode: U
          })]
        }), (0, r.jsx)(eP, {
          connectedEmbeddedActivity: Z,
          currentUser: E,
          channel: n,
          onDisconnectCall: s
        })]
      })]
    })
  }) : (0, r.jsx)(v.Gt, {
    value: Y,
    children: (0, r.jsx)(ew, {
      channel: n,
      cameraUnavailable: y,
      hasCameraPermission: N,
      currentUser: E
    })
  })
}