/** Chunk was on 81985 **/
/** chunk id: 700483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ev
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk918222 = require("./918222.js"),
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
  Chunk937995 = require("./937995.jsx"),
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
  Chunk255726 = require("./255726.js"),
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
  Chunk547565 = require("./547565.js"),
  Chunk73377 = require("./73377.js");

function ed(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, f.ZP)(), l = (0, er.Z)(t.id), [s, p] = (0, ea.Z)(t), h = (0, en._)(t), g = (0, ei.to)(), m = i.useRef(null), [b, v] = (0, c.R)("age-verification-stage-popover-dismissed", false), O = i.useContext(R.h9);
  if (l) return null;
  let j = g && !b;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M.d, {
      ref: m,
      isTrayButton: true,
      isActive: s,
      label: function(e, t, n) {
        let r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
        return !r && n ? null : n ? es.intl.string(es.t.NzITVo) : e ? es.intl.string(es.t.GCimTk) : t ? es.intl.string(es.t.hLbG5N) : es.intl.string(es.t.e4WMvx)
      }(s, h, g, b),
      iconComponent: g ? o.XuQ : o.V9,
      iconColor: g ? "var(--icon-feedback-critical)" : true,
      onClick: () => {
        (0, y.v)(n, y.d.REQUEST_TO_SPEAK, !s), v(true), g ? u.Z.showAgeVerificationGetStartedModal({
          entryPoint: d.cU.STAGE_CHANNEL_RAISE_HAND
        }) : p()
      },
      color: s ? "green" : true,
      disabled: !h && !s
    }), j && (0, r.jsx)(a.J2, {
      targetElementRef: m,
      graphic: {
        type: "image",
        src: eu.Z
      },
      gradientColor: "blue",
      title: es.intl.string(es.t.zvubnM),
      body: es.intl.string(es.t["/wx+J2"]),
      shouldShow: !O,
      actions: [{
        text: es.intl.string(es.t.KXVgjt),
        onClick: () => {
          u.Z.showAgeVerificationGetStartedModal({
            entryPoint: d.cU.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT
          }), v(true)
        }
      }],
      onRequestClose: () => v(true)
    })]
  })
}
let ep = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([H.Z], () => H.Z.getVoiceChannelId() === t.id, [t.id]);
  return (0, r.jsxs)("div", {
    className: ec.container,
    children: [(0, r.jsxs)("div", {
      className: ec.buttonSection,
      children: [(0, r.jsx)(em, {
        channelId: t.id
      }), n ? (0, r.jsx)(ed, {
        channel: t
      }) : null, (0, r.jsx)(A.Z, {
        channel: t
      })]
    }), (0, r.jsx)(eh, {
      channel: t
    })]
  })
});

function ef(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, f.ZP)();
  return (0, r.jsx)(M.d, {
    isTrayButton: true,
    onClick: () => {
      if ((0, y.v)(n, y.d.SPEAK_ON_STAGE), (0, ei.u1)(t.id)) return void u.Z.showAgeVerificationGetStartedModal({
        entryPoint: d.cU.STAGE_CHANNEL_RAISE_HAND
      });
      (0, W.RK)(t, false)
    },
    iconComponent: o.Lrb,
    label: es.intl.string(es.t["8Joh+p"])
  })
}

function eh(e) {
  let {
    channel: t,
    onSelect: n
  } = e, a = (0, S.bp)(), {
    canManageGuildEvent: c
  } = (0, _.XJ)(t), u = (0, l.e7)([X.Z], () => X.Z.getStageInstanceByChannel(t.id), [t.id]), d = (0, l.e7)([x.ZP], () => x.ZP.getGuildScheduledEvent(null == u ? true : u.guild_scheduled_event_id)), {
    suppress: h
  } = (0, N.Z)(t), g = G.default.getId(), [m] = (0, ea.Z)(t), b = q.ZP.isModerator(g, t.id), O = (0, K.B)(t.id), j = c(d), {
    parentAnalyticsLocation: C
  } = (0, f.ZP)(), E = i.useRef(null), I = () => (function(e) {
    let {
      channel: t,
      appContext: n
    } = e;
    if ((0, y.v)(p.Z.VOICE_CONTROL_TRAY, y.d.DISCONNECT), (0, et.Z)(t)) return void(0, z.Us)(t, n);
    s.default.disconnect()
  })({
    channel: t,
    appContext: a
  });
  return (b || j) && null != u ? (0, r.jsx)(o.yRy, {
    targetElementRef: E,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(D.Z, {
        children: (0, r.jsx)(o.v2r, {
          navId: "exit-options",
          "aria-label": es.intl.string(es.t["3Uj+2p"]),
          onClose: i,
          onSelect: n,
          onInteraction: (0, v.u)("End Stage", C, {
            entrypoint: eo.A5.CARET
          }),
          children: (0, r.jsx)(o.sNh, {
            id: "end-stage",
            color: "danger",
            action: () => (0, z.Ev)(t, a),
            label: es.intl.string(es.t["Fmx5y/"]),
            icon: o.k$p
          })
        })
      })
    },
    align: "center",
    position: "top",
    spacing: 16,
    animation: o.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(k.Z, {
        ref: E,
        label: es.intl.string(es.t.c6qKwr),
        onClick: I,
        onPopoutClick: n,
        popoutOpen: i
      })
    }
  }) : h && !O || m ? (0, r.jsx)(k.Z, {
    label: es.intl.string(es.t.SMKyih),
    onClick: I
  }) : (0, r.jsx)(k.Z, {
    label: es.intl.string(es.t.c6qKwr),
    onClick: I
  })
}

function eg(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, f.ZP)();
  return (0, r.jsx)(M.d, {
    isTrayButton: true,
    iconComponent: o.zRq,
    label: es.intl.string(es.t.ezLpY6),
    onClick: () => {
      (0, y.v)(n, y.d.MOVE_TO_AUDIENCE), (0, W.yi)(t)
    }
  })
}

function em(e) {
  let {
    channelId: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, f.ZP)(), i = (0, l.e7)([ee.Z], () => ee.Z.isMuted()), a = (0, $.pp)(t), s = (0, l.e7)([ee.Z], () => ee.Z.shouldPlay());
  return a ? (0, r.jsx)(M.d, {
    isTrayButton: true,
    isActive: !i,
    label: i ? es.intl.string(es.t.ScHlfl) : es.intl.string(es.t.zqxfrf),
    iconComponent: i ? o.xjP : o.RZG,
    color: i ? true : "green",
    onClick: () => {
      (0, y.v)(n, y.d.STAGE_MUSIC, i), (0, J.v)(!i)
    }
  }) : (0, r.jsx)(M.d, {
    isTrayButton: true,
    isActive: s,
    label: s ? es.intl.string(es.t.zqxfrf) : es.intl.string(es.t.ScHlfl),
    iconComponent: s ? o.RZG : o.xjP,
    color: s ? "green" : true,
    onClick: () => {
      (0, y.v)(n, y.d.STAGE_MUSIC, !s), (0, J.z)(!s)
    }
  })
}
let eb = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, f.ZP)(), {
    suppress: a,
    selfMute: s,
    mute: c
  } = (0, N.Z)(t), u = (0, K.B)(t.id), d = (0, er.Z)(t.id), p = (0, l.e7)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: y,
    enabled: x
  } = (0, I.Z)(), C = (0, Z.Z)(t), {
    limit: E,
    reachedLimit: S
  } = (0, P.Z)(t), _ = (0, l.e7)([V.default], () => V.default.getCurrentUser()), R = (0, l.e7)([B.Z], () => (0, j.Z)(B.Z)), M = (0, l.e7)([H.Z], () => H.Z.getVoiceChannelId() === t.id, [t.id]), k = (0, l.e7)([h.Z], () => h.Z.getStreamParticipants(t.id)[0], [t.id]), G = (0, Q.PK)(t.id), F = E > 0, z = S && !G || null != k && k.user.id !== (null == _ ? true : _.id), W = (0, v.u)("AudioDeviceMenu", n, {
    entrypoint: eo.A5.CARET
  }), Y = i.useRef(null), q = i.useRef(null);
  if (null == _) return null;
  let X = (0, r.jsx)(o.yRy, {
    targetElementRef: Y,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(D.Z, {
        children: (0, r.jsx)(m.Z, {
          onClose: t,
          minimal: true,
          onInteraction: (0, v.u)("VideoDeviceMenu", n, {
            entrypoint: eo.A5.CARET
          })
        })
      })
    },
    position: "top",
    align: "right",
    spacing: 16,
    animation: o.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(U.C, {
        ref: Y,
        centerButton: true,
        hasPermission: C,
        enabled: x,
        cameraUnavailable: y,
        onChange: T.r,
        onCameraUnavailable: w.Z,
        channelLimitReached: S,
        channelLimit: E,
        popoutOpen: i,
        onPopoutClick: n
      })
    }
  });
  return (0, r.jsxs)("div", {
    className: ec.wrapper,
    children: [M && !a ? (0, r.jsxs)("div", {
      className: ec.buttonSection,
      children: [(0, r.jsx)(o.yRy, {
        targetElementRef: q,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(D.Z, {
            children: (0, r.jsx)(g.default, {
              onClose: t,
              renderInputDevices: true,
              renderInputModes: true,
              renderOutputDevices: true,
              renderInputVolume: true,
              renderOutputVolume: true,
              renderDeafen: true,
              minimal: true,
              onInteraction: W
            })
          })
        },
        align: "right",
        position: "top",
        spacing: 16,
        animation: o.yRy.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: n
          } = e, {
            isShown: i
          } = t;
          return (0, r.jsx)(L.Z, {
            ref: q,
            centerButton: true,
            onPopoutClick: n,
            selfMute: s,
            serverMute: c,
            suppress: a,
            popoutOpen: i,
            onClick: () => (0, b.Z)(c, a, "Stage Channel Controls"),
            awaitingRemote: p
          })
        }
      }), F && X]
    }) : null, (0, r.jsxs)("div", {
      className: ec.buttonSection,
      children: [M && !a && F ? (0, r.jsx)(T.NZ, {
        channel: t,
        currentUser: _,
        exitFullScreen: () => null,
        canGoLive: R,
        hasPermission: C,
        disabled: z
      }) : null, (0, r.jsx)(em, {
        channelId: t.id
      }), M && (0, r.jsx)(ed, {
        channel: t
      }), M && u && a && d && (0, r.jsx)(ef, {
        channel: t
      }), M && !a && (0, r.jsx)(eg, {
        channel: t
      }), (0, r.jsx)(A.Z, {
        channel: t
      })]
    }), (0, r.jsx)(eh, {
      channel: t
    })]
  })
});

function ey(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: ec.wrapper,
    children: [(0, r.jsx)("div", {
      className: ec.buttonSection,
      children: (0, r.jsx)(em, {
        channelId: t.id
      })
    }), (0, r.jsx)(eh, {
      channel: t
    })]
  })
}
let ev = Chunk473749.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, i = (0, er.Z)(t.id), a = (0, K.B)(t.id), o = (0, l.e7)([F.Z], () => F.Z.can(Y.yP, t), [t]), s = (0, ei.sP)(), c = (0, el.Z)(t.id), u = (0, l.e7)([h.Z], () => null != t ? h.Z.getSelectedParticipant(t.id) : null), d = !c && null == u;
  return n ? (0, r.jsx)(ey, {
    channel: t
  }) : i || a ? (0, r.jsxs)("div", {
    className: ec.containerColumn,
    children: [(0, r.jsxs)("div", {
      className: ec.eventPrompts,
      children: [d ? (0, r.jsx)(C.Z, {
        channelId: null == t ? true : t.id
      }) : null, (0, r.jsx)("div", {
        className: ec.separator
      }), d && o && !s ? (0, r.jsx)(E.Z, {
        highlight: true,
        channel: t
      }) : null, (0, r.jsx)("div", {
        className: ec.separator
      })]
    }), (0, r.jsx)(eb, {
      channel: t
    })]
  }) : (0, r.jsx)(ep, {
    channel: t
  })
})