/** Chunk was on 91053 **/
/** chunk id: 700483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eg
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk659580 = require("./659580.jsx"),
  Chunk793865 = require("./793865.jsx"),
  Chunk575175 = require("./575175.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk258609 = require("./258609.js"),
  Chunk74299 = require("./74299.js"),
  Chunk924301 = require("./924301.js"),
  Chunk459502 = require("./459502.jsx"),
  Chunk856691 = require("./856691.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk923973 = require("./923973.js"),
  Chunk829750 = require("./829750.js"),
  Chunk189771 = require("./189771.js"),
  Chunk294629 = require("./294629.js"),
  Chunk793319 = require("./793319.jsx"),
  Chunk987329 = require("./987329.jsx"),
  Chunk560688 = require("./560688.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk88479 = require("./88479.jsx"),
  Chunk386000 = require("./386000.jsx"),
  Chunk25827 = require("./25827.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk881824 = require("./881824.jsx"),
  Chunk471253 = require("./471253.js"),
  Chunk200498 = require("./200498.js"),
  Chunk146085 = require("./146085.js"),
  Chunk88751 = require("./88751.js"),
  Chunk427679 = require("./427679.js"),
  Chunk368442 = require("./368442.js"),
  Chunk600518 = require("./600518.js"),
  Chunk485287 = require("./485287.js"),
  Chunk754277 = require("./754277.js"),
  Chunk719100 = require("./719100.js"),
  Chunk923083 = require("./923083.js"),
  Chunk184805 = require("./184805.js"),
  Chunk430104 = require("./430104.js"),
  Chunk643632 = require("./643632.js"),
  Chunk270295 = require("./270295.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk769265 = require("./769265.js");

function es(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)(), i = (0, ee.Z)(t.id), [l, s] = (0, er.Z)(t), d = (0, $._)(t);
  return i ? null : (0, r.jsx)(w.d, {
    isTrayButton: true,
    isActive: l,
    label: l ? el.intl.string(el.t.GCimTk) : d ? el.intl.string(el.t.hLbG5N) : el.intl.string(el.t.e4WMvx),
    iconComponent: a.V9,
    onClick: () => {
      if ((0, m.v)(n, m.d.REQUEST_TO_SPEAK, !l), (0, et.u1)()) return void o.Z.showAgeVerificationGetStartedModal({
        entryPoint: c.cU.STAGE_CHANNEL_RAISE_HAND
      });
      s()
    },
    color: l ? "green" : true,
    disabled: !d && !l
  })
}
let eo = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([G.Z], () => G.Z.getVoiceChannelId() === t.id, [t.id]);
  return (0, r.jsxs)("div", {
    className: ea.container,
    children: [(0, r.jsxs)("div", {
      className: ea.buttonSection,
      children: [(0, r.jsx)(eh, {
        channelId: t.id
      }), n ? (0, r.jsx)(es, {
        channel: t
      }) : null, (0, r.jsx)(T.Z, {
        channel: t
      })]
    }), (0, r.jsx)(ed, {
      channel: t
    })]
  })
});

function ec(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)();
  return (0, r.jsx)(w.d, {
    isTrayButton: true,
    onClick: () => {
      if ((0, m.v)(n, m.d.SPEAK_ON_STAGE), (0, et.u1)()) return void o.Z.showAgeVerificationGetStartedModal({
        entryPoint: c.cU.STAGE_CHANNEL_RAISE_HAND
      });
      (0, B.RK)(t, false)
    },
    iconComponent: a.Lrb,
    label: el.intl.string(el.t["8Joh+p"])
  })
}

function ed(e) {
  let {
    channel: t,
    onSelect: n
  } = e, o = (0, O.bp)(), {
    canManageGuildEvent: c
  } = (0, C.XJ)(t), h = (0, l.e7)([Y.Z], () => Y.Z.getStageInstanceByChannel(t.id), [t.id]), p = (0, l.e7)([x.ZP], () => x.ZP.getGuildScheduledEvent(null == h ? true : h.guild_scheduled_event_id)), {
    suppress: f
  } = (0, Z.Z)(t), g = M.default.getId(), [_] = (0, er.Z)(t), y = W.ZP.isModerator(g, t.id), v = (0, V.B)(t.id), j = c(p), {
    parentAnalyticsLocation: I
  } = (0, u.ZP)(), S = i.useRef(null), E = () => (function(e) {
    let {
      channel: t,
      appContext: n
    } = e;
    if ((0, m.v)(d.Z.VOICE_CONTROL_TRAY, m.d.DISCONNECT), (0, J.Z)(t)) return void(0, F.Us)(t, n);
    s.default.disconnect()
  })({
    channel: t,
    appContext: o
  });
  return (y || j) && null != h ? (0, r.jsx)(a.yRy, {
    targetElementRef: S,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(R.Z, {
        children: (0, r.jsx)(a.v2r, {
          navId: "exit-options",
          "aria-label": el.intl.string(el.t["3Uj+2p"]),
          onClose: i,
          onSelect: n,
          onInteraction: (0, b.u)("End Stage", I, {
            entrypoint: ei.A5.CARET
          }),
          children: (0, r.jsx)(a.sNh, {
            id: "end-stage",
            color: "danger",
            action: () => (0, F.Ev)(t, o),
            label: el.intl.string(el.t["Fmx5y/"]),
            icon: a.k$p
          })
        })
      })
    },
    align: "center",
    position: "top",
    spacing: 16,
    animation: a.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(A.Z, {
        ref: S,
        label: el.intl.string(el.t.c6qKwr),
        onClick: E,
        onPopoutClick: n,
        popoutOpen: i
      })
    }
  }) : f && !v || _ ? (0, r.jsx)(A.Z, {
    label: el.intl.string(el.t.SMKyih),
    onClick: E
  }) : (0, r.jsx)(A.Z, {
    label: el.intl.string(el.t.c6qKwr),
    onClick: E
  })
}

function eu(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)();
  return (0, r.jsx)(w.d, {
    isTrayButton: true,
    iconComponent: a.zRq,
    label: el.intl.string(el.t.ezLpY6),
    onClick: () => {
      (0, m.v)(n, m.d.MOVE_TO_AUDIENCE), (0, B.yi)(t)
    }
  })
}

function eh(e) {
  let {
    channelId: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)(), i = (0, l.e7)([X.Z], () => X.Z.isMuted()), s = (0, Q.pp)(t), o = (0, l.e7)([X.Z], () => X.Z.shouldPlay());
  return s ? (0, r.jsx)(w.d, {
    isTrayButton: true,
    isActive: !i,
    label: i ? el.intl.string(el.t.ScHlfl) : el.intl.string(el.t.zqxfrf),
    iconComponent: i ? a.xjP : a.RZG,
    color: i ? true : "green",
    onClick: () => {
      (0, m.v)(n, m.d.STAGE_MUSIC, i), (0, K.v)(!i)
    }
  }) : (0, r.jsx)(w.d, {
    isTrayButton: true,
    isActive: o,
    label: o ? el.intl.string(el.t.zqxfrf) : el.intl.string(el.t.ScHlfl),
    iconComponent: o ? a.RZG : a.xjP,
    color: o ? "green" : true,
    onClick: () => {
      (0, m.v)(n, m.d.STAGE_MUSIC, !o), (0, K.z)(!o)
    }
  })
}
let ep = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)(), {
    suppress: s,
    selfMute: o,
    mute: c
  } = (0, Z.Z)(t), d = (0, V.B)(t.id), m = (0, ee.Z)(t.id), x = (0, l.e7)([_.default], () => null != _.default.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: v,
    enabled: j
  } = (0, I.Z)(), O = (0, E.Z)(t), {
    limit: C,
    reachedLimit: w
  } = (0, S.Z)(t), A = (0, l.e7)([H.default], () => H.default.getCurrentUser()), M = (0, l.e7)([k.Z], () => (0, y.Z)(k.Z)), U = (0, l.e7)([G.Z], () => G.Z.getVoiceChannelId() === t.id, [t.id]), F = (0, l.e7)([h.Z], () => h.Z.getStreamParticipants(t.id)[0], [t.id]), B = (0, q.PK)(t.id), z = C > 0, W = w && !B || null != F && F.user.id !== (null == A ? true : A.id), Y = (0, b.u)("AudioDeviceMenu", n, {
    entrypoint: ei.A5.CARET
  }), K = i.useRef(null), Q = i.useRef(null);
  if (null == A) return null;
  let X = (0, r.jsx)(a.yRy, {
    targetElementRef: K,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(R.Z, {
        children: (0, r.jsx)(f.Z, {
          onClose: t,
          minimal: true,
          onInteraction: (0, b.u)("VideoDeviceMenu", n, {
            entrypoint: ei.A5.CARET
          })
        })
      })
    },
    position: "top",
    align: "right",
    spacing: 16,
    animation: a.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(L.C, {
        ref: K,
        centerButton: true,
        hasPermission: O,
        enabled: j,
        cameraUnavailable: v,
        onChange: P.r,
        onCameraUnavailable: N.Z,
        channelLimitReached: w,
        channelLimit: C,
        popoutOpen: i,
        onPopoutClick: n
      })
    }
  });
  return (0, r.jsxs)("div", {
    className: ea.wrapper,
    children: [U && !s ? (0, r.jsxs)("div", {
      className: ea.buttonSection,
      children: [(0, r.jsx)(a.yRy, {
        targetElementRef: Q,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(R.Z, {
            children: (0, r.jsx)(p.default, {
              onClose: t,
              renderInputDevices: true,
              renderInputModes: true,
              renderOutputDevices: true,
              renderInputVolume: true,
              renderOutputVolume: true,
              renderDeafen: true,
              minimal: true,
              onInteraction: Y
            })
          })
        },
        align: "right",
        position: "top",
        spacing: 16,
        animation: a.yRy.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: n
          } = e, {
            isShown: i
          } = t;
          return (0, r.jsx)(D.Z, {
            ref: Q,
            centerButton: true,
            onPopoutClick: n,
            selfMute: o,
            serverMute: c,
            suppress: s,
            popoutOpen: i,
            onClick: () => (0, g.Z)(c, s, "Stage Channel Controls"),
            awaitingRemote: x
          })
        }
      }), z && X]
    }) : null, (0, r.jsxs)("div", {
      className: ea.buttonSection,
      children: [U && !s && z ? (0, r.jsx)(P.NZ, {
        channel: t,
        currentUser: A,
        exitFullScreen: () => null,
        canGoLive: M,
        hasPermission: O,
        disabled: W
      }) : null, (0, r.jsx)(eh, {
        channelId: t.id
      }), U && (0, r.jsx)(es, {
        channel: t
      }), U && d && s && m && (0, r.jsx)(ec, {
        channel: t
      }), U && !s && (0, r.jsx)(eu, {
        channel: t
      }), (0, r.jsx)(T.Z, {
        channel: t
      })]
    }), (0, r.jsx)(ed, {
      channel: t
    })]
  })
});

function ef(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: ea.wrapper,
    children: [(0, r.jsx)("div", {
      className: ea.buttonSection,
      children: (0, r.jsx)(eh, {
        channelId: t.id
      })
    }), (0, r.jsx)(ed, {
      channel: t
    })]
  })
}
let eg = Chunk647438.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, i = (0, ee.Z)(t.id), a = (0, V.B)(t.id), s = (0, l.e7)([U.Z], () => U.Z.can(z.yP, t), [t]), o = (0, et.sP)(), c = (0, en.Z)(t.id), d = (0, l.e7)([h.Z], () => null != t ? h.Z.getSelectedParticipant(t.id) : null), u = !c && null == d;
  return n ? (0, r.jsx)(ef, {
    channel: t
  }) : i || a ? (0, r.jsxs)("div", {
    className: ea.containerColumn,
    children: [(0, r.jsxs)("div", {
      className: ea.eventPrompts,
      children: [u ? (0, r.jsx)(v.Z, {
        channelId: null == t ? true : t.id
      }) : null, (0, r.jsx)("div", {
        className: ea.separator
      }), u && s && !o ? (0, r.jsx)(j.Z, {
        highlight: true,
        channel: t
      }) : null, (0, r.jsx)("div", {
        className: ea.separator
      })]
    }), (0, r.jsx)(ep, {
      channel: t
    })]
  }) : (0, r.jsx)(eo, {
    channel: t
  })
})