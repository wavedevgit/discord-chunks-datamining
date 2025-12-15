/** Chunk was on 41700 **/
/** chunk id: 700483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eO
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

function eu(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)(), l = (0, er.Z)(t.id), [o, p] = (0, ea.Z)(t), f = (0, en._)(t), g = (0, ei.to)(), m = i.useRef(null), [b, O] = (0, c.R)("age-verification-stage-popover-dismissed", false), x = i.useContext(A.h9);
  if (l) return null;
  let j = g && !b;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(L.d, {
      ref: m,
      isTrayButton: true,
      isActive: o,
      label: function(e, t, n) {
        let r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
        return !r && n ? null : n ? eo.intl.string(eo.t.NzITVo) : e ? eo.intl.string(eo.t.GCimTk) : t ? eo.intl.string(eo.t.hLbG5N) : eo.intl.string(eo.t.e4WMvx)
      }(o, f, g, b),
      iconComponent: g ? s.XuQ : s.V9,
      iconColor: g ? "var(--icon-feedback-critical)" : true,
      onClick: () => {
        (0, y.v)(n, y.d.REQUEST_TO_SPEAK, !o), O(true), g ? d.Z.showAgeVerificationGetStartedModal({
          entryPoint: u.cU.STAGE_CHANNEL_RAISE_HAND
        }) : p()
      },
      color: o ? "green" : true,
      disabled: !f && !o
    }), j && (0, r.jsx)(a.J2, {
      targetElementRef: m,
      graphic: {
        type: "image",
        src: ed.Z
      },
      gradientColor: "blue",
      title: eo.intl.string(eo.t.zvubnM),
      body: eo.intl.string(eo.t["/wx+J2"]),
      shouldShow: !x,
      actions: [{
        text: eo.intl.string(eo.t.KXVgjt),
        onClick: () => {
          d.Z.showAgeVerificationGetStartedModal({
            entryPoint: u.cU.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT
          }), O(true)
        }
      }],
      onRequestClose: () => O(true)
    })]
  })
}
let ep = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([B.Z], () => B.Z.getVoiceChannelId() === t.id, [t.id]);
  return (0, r.jsxs)("div", {
    className: ec.container,
    children: [(0, r.jsxs)("div", {
      className: ec.buttonSection,
      children: [(0, r.jsx)(em, {
        channelId: t.id
      }), n ? (0, r.jsx)(eu, {
        channel: t
      }) : null, (0, r.jsx)(R.Z, {
        channel: t
      })]
    }), (0, r.jsx)(ef, {
      channel: t
    })]
  })
});

function eh(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)();
  return (0, r.jsx)(L.d, {
    isTrayButton: true,
    onClick: () => {
      if ((0, y.v)(n, y.d.SPEAK_ON_STAGE), (0, ei.u1)()) return void d.Z.showAgeVerificationGetStartedModal({
        entryPoint: u.cU.STAGE_CHANNEL_RAISE_HAND
      });
      (0, W.RK)(t, false)
    },
    iconComponent: s.Lrb,
    label: eo.intl.string(eo.t["8Joh+p"])
  })
}

function ef(e) {
  let {
    channel: t,
    onSelect: n
  } = e, a = (0, _.bp)(), {
    canManageGuildEvent: c
  } = (0, S.XJ)(t), d = (0, l.e7)([Q.Z], () => Q.Z.getStageInstanceByChannel(t.id), [t.id]), u = (0, l.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(null == d ? true : d.guild_scheduled_event_id)), {
    suppress: f
  } = (0, T.Z)(t), g = G.default.getId(), [m] = (0, ea.Z)(t), b = K.ZP.isModerator(g, t.id), x = (0, Y.B)(t.id), j = c(u), {
    parentAnalyticsLocation: C
  } = (0, h.ZP)(), I = i.useRef(null), E = () => (function(e) {
    let {
      channel: t,
      appContext: n
    } = e;
    if ((0, y.v)(p.Z.VOICE_CONTROL_TRAY, y.d.DISCONNECT), (0, et.Z)(t)) return void(0, z.Us)(t, n);
    o.default.disconnect()
  })({
    channel: t,
    appContext: a
  });
  return (b || j) && null != d ? (0, r.jsx)(s.yRy, {
    targetElementRef: I,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(D.Z, {
        children: (0, r.jsx)(s.v2r, {
          navId: "exit-options",
          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
          onClose: i,
          onSelect: n,
          onInteraction: (0, O.u)("End Stage", C, {
            entrypoint: es.A5.CARET
          }),
          children: (0, r.jsx)(s.sNh, {
            id: "end-stage",
            color: "danger",
            action: () => (0, z.Ev)(t, a),
            label: eo.intl.string(eo.t["Fmx5y/"]),
            icon: s.k$p
          })
        })
      })
    },
    align: "center",
    position: "top",
    spacing: 16,
    animation: s.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(M.Z, {
        ref: I,
        label: eo.intl.string(eo.t.c6qKwr),
        onClick: E,
        onPopoutClick: n,
        popoutOpen: i
      })
    }
  }) : f && !x || m ? (0, r.jsx)(M.Z, {
    label: eo.intl.string(eo.t.SMKyih),
    onClick: E
  }) : (0, r.jsx)(M.Z, {
    label: eo.intl.string(eo.t.c6qKwr),
    onClick: E
  })
}

function eg(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)();
  return (0, r.jsx)(L.d, {
    isTrayButton: true,
    iconComponent: s.zRq,
    label: eo.intl.string(eo.t.ezLpY6),
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
  } = (0, h.ZP)(), i = (0, l.e7)([ee.Z], () => ee.Z.isMuted()), a = (0, $.pp)(t), o = (0, l.e7)([ee.Z], () => ee.Z.shouldPlay());
  return a ? (0, r.jsx)(L.d, {
    isTrayButton: true,
    isActive: !i,
    label: i ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
    iconComponent: i ? s.xjP : s.RZG,
    color: i ? true : "green",
    onClick: () => {
      (0, y.v)(n, y.d.STAGE_MUSIC, i), (0, J.v)(!i)
    }
  }) : (0, r.jsx)(L.d, {
    isTrayButton: true,
    isActive: o,
    label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
    iconComponent: o ? s.RZG : s.xjP,
    color: o ? "green" : true,
    onClick: () => {
      (0, y.v)(n, y.d.STAGE_MUSIC, !o), (0, J.z)(!o)
    }
  })
}
let eb = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)(), {
    suppress: a,
    selfMute: o,
    mute: c
  } = (0, T.Z)(t), d = (0, Y.B)(t.id), u = (0, er.Z)(t.id), p = (0, l.e7)([x.default], () => null != x.default.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: y,
    enabled: v
  } = (0, E.Z)(), C = (0, P.Z)(t), {
    limit: I,
    reachedLimit: _
  } = (0, Z.Z)(t), S = (0, l.e7)([V.default], () => V.default.getCurrentUser()), A = (0, l.e7)([H.Z], () => (0, j.Z)(H.Z)), L = (0, l.e7)([B.Z], () => B.Z.getVoiceChannelId() === t.id, [t.id]), M = (0, l.e7)([f.Z], () => f.Z.getStreamParticipants(t.id)[0], [t.id]), G = (0, X.PK)(t.id), F = I > 0, z = _ && !G || null != M && M.user.id !== (null == S ? true : S.id), W = (0, O.u)("AudioDeviceMenu", n, {
    entrypoint: es.A5.CARET
  }), q = i.useRef(null), K = i.useRef(null);
  if (null == S) return null;
  let Q = (0, r.jsx)(s.yRy, {
    targetElementRef: q,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(D.Z, {
        children: (0, r.jsx)(m.Z, {
          onClose: t,
          minimal: true,
          onInteraction: (0, O.u)("VideoDeviceMenu", n, {
            entrypoint: es.A5.CARET
          })
        })
      })
    },
    position: "top",
    align: "right",
    spacing: 16,
    animation: s.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(U.C, {
        ref: q,
        centerButton: true,
        hasPermission: C,
        enabled: v,
        cameraUnavailable: y,
        onChange: N.r,
        onCameraUnavailable: w.Z,
        channelLimitReached: _,
        channelLimit: I,
        popoutOpen: i,
        onPopoutClick: n
      })
    }
  });
  return (0, r.jsxs)("div", {
    className: ec.wrapper,
    children: [L && !a ? (0, r.jsxs)("div", {
      className: ec.buttonSection,
      children: [(0, r.jsx)(s.yRy, {
        targetElementRef: K,
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
        animation: s.yRy.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: n
          } = e, {
            isShown: i
          } = t;
          return (0, r.jsx)(k.Z, {
            ref: K,
            centerButton: true,
            onPopoutClick: n,
            selfMute: o,
            serverMute: c,
            suppress: a,
            popoutOpen: i,
            onClick: () => (0, b.Z)(c, a, "Stage Channel Controls"),
            awaitingRemote: p
          })
        }
      }), F && Q]
    }) : null, (0, r.jsxs)("div", {
      className: ec.buttonSection,
      children: [L && !a && F ? (0, r.jsx)(N.NZ, {
        channel: t,
        currentUser: S,
        exitFullScreen: () => null,
        canGoLive: A,
        hasPermission: C,
        disabled: z
      }) : null, (0, r.jsx)(em, {
        channelId: t.id
      }), L && (0, r.jsx)(eu, {
        channel: t
      }), L && d && a && u && (0, r.jsx)(eh, {
        channel: t
      }), L && !a && (0, r.jsx)(eg, {
        channel: t
      }), (0, r.jsx)(R.Z, {
        channel: t
      })]
    }), (0, r.jsx)(ef, {
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
    }), (0, r.jsx)(ef, {
      channel: t
    })]
  })
}
let eO = Chunk473749.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, i = (0, er.Z)(t.id), a = (0, Y.B)(t.id), s = (0, l.e7)([F.Z], () => F.Z.can(q.yP, t), [t]), o = (0, ei.sP)(), c = (0, el.Z)(t.id), d = (0, l.e7)([f.Z], () => null != t ? f.Z.getSelectedParticipant(t.id) : null), u = !c && null == d;
  return n ? (0, r.jsx)(ey, {
    channel: t
  }) : i || a ? (0, r.jsxs)("div", {
    className: ec.containerColumn,
    children: [(0, r.jsxs)("div", {
      className: ec.eventPrompts,
      children: [u ? (0, r.jsx)(C.Z, {
        channelId: null == t ? true : t.id
      }) : null, (0, r.jsx)("div", {
        className: ec.separator
      }), u && s && !o ? (0, r.jsx)(I.Z, {
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