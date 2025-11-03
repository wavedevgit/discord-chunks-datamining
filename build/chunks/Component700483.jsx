/** Chunk was on 91053 **/
/** chunk id: 700483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eh
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
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
  Chunk647767 = require("./647767.js"),
  Chunk643632 = require("./643632.js"),
  Chunk270295 = require("./270295.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk769265 = require("./769265.js");

function el(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, c.ZP)(), i = (0, J.Z)(t.id), [l, s] = (0, et.Z)(t), o = (0, X._)(t);
  return i ? null : (0, r.jsx)(N.d, {
    isTrayButton: true,
    isActive: l,
    label: l ? er.intl.string(er.t.GCimTk) : o ? er.intl.string(er.t.hLbG5N) : er.intl.string(er.t.e4WMvx),
    iconComponent: a.V9,
    onClick: () => {
      (0, f.v)(n, f.d.REQUEST_TO_SPEAK, !l), s()
    },
    color: l ? "green" : true,
    disabled: !o && !l
  })
}
let ea = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]);
  return (0, r.jsxs)("div", {
    className: ei.container,
    children: [(0, r.jsxs)("div", {
      className: ei.buttonSection,
      children: [(0, r.jsx)(ed, {
        channelId: t.id
      }), n ? (0, r.jsx)(el, {
        channel: t
      }) : null, (0, r.jsx)(Z.Z, {
        channel: t
      })]
    }), (0, r.jsx)(eo, {
      channel: t
    })]
  })
});

function es(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, c.ZP)();
  return (0, r.jsx)(N.d, {
    isTrayButton: true,
    onClick: () => {
      (0, H.RK)(t, false), (0, f.v)(n, f.d.SPEAK_ON_STAGE)
    },
    iconComponent: a.Lrb,
    label: er.intl.string(er.t["8Joh+p"])
  })
}

function eo(e) {
  let {
    channel: t,
    onSelect: n
  } = e, d = (0, v.bp)(), {
    canManageGuildEvent: u
  } = (0, j.XJ)(t), p = (0, l.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id), [t.id]), h = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(null == p ? true : p.guild_scheduled_event_id)), {
    suppress: m
  } = (0, S.Z)(t), b = D.default.getId(), [y] = (0, et.Z)(t), x = V.ZP.isModerator(b, t.id), O = (0, F.B)(t.id), C = u(h), {
    parentAnalyticsLocation: I
  } = (0, c.ZP)(), E = i.useRef(null), Z = () => (function(e) {
    let {
      channel: t,
      appContext: n
    } = e;
    if ((0, f.v)(o.Z.VOICE_CONTROL_TRAY, f.d.DISCONNECT), (0, Q.Z)(t)) return void(0, G.Us)(t, n);
    s.default.disconnect()
  })({
    channel: t,
    appContext: d
  });
  return (x || C) && null != p ? (0, r.jsx)(a.yRy, {
    targetElementRef: E,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(T.Z, {
        children: (0, r.jsx)(a.v2r, {
          navId: "exit-options",
          "aria-label": er.intl.string(er.t["3Uj+2p"]),
          onClose: i,
          onSelect: n,
          onInteraction: (0, g.u)("End Stage", I, {
            entrypoint: en.A5.CARET
          }),
          children: (0, r.jsx)(a.sNh, {
            id: "end-stage",
            color: "danger",
            action: () => (0, G.Ev)(t, d),
            label: er.intl.string(er.t["Fmx5y/"]),
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
      return (0, r.jsx)(R.Z, {
        ref: E,
        label: er.intl.string(er.t.c6qKwr),
        onClick: Z,
        onPopoutClick: n,
        popoutOpen: i
      })
    }
  }) : m && !O || y ? (0, r.jsx)(R.Z, {
    label: er.intl.string(er.t.SMKyih),
    onClick: Z
  }) : (0, r.jsx)(R.Z, {
    label: er.intl.string(er.t.c6qKwr),
    onClick: Z
  })
}

function ec(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, c.ZP)();
  return (0, r.jsx)(N.d, {
    isTrayButton: true,
    iconComponent: a.zRq,
    label: er.intl.string(er.t.ezLpY6),
    onClick: () => {
      (0, f.v)(n, f.d.MOVE_TO_AUDIENCE), (0, H.yi)(t)
    }
  })
}

function ed(e) {
  let {
    channelId: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, c.ZP)(), i = (0, l.e7)([K.Z], () => K.Z.isMuted()), s = (0, q.pp)(t), o = (0, l.e7)([K.Z], () => K.Z.shouldPlay());
  return s ? (0, r.jsx)(N.d, {
    isTrayButton: true,
    isActive: !i,
    label: i ? er.intl.string(er.t.ScHlfl) : er.intl.string(er.t.zqxfrf),
    iconComponent: i ? a.xjP : a.RZG,
    color: i ? true : "green",
    onClick: () => {
      (0, f.v)(n, f.d.STAGE_MUSIC, i), (0, Y.v)(!i)
    }
  }) : (0, r.jsx)(N.d, {
    isTrayButton: true,
    isActive: o,
    label: o ? er.intl.string(er.t.zqxfrf) : er.intl.string(er.t.ScHlfl),
    iconComponent: o ? a.RZG : a.xjP,
    color: o ? "green" : true,
    onClick: () => {
      (0, f.v)(n, f.d.STAGE_MUSIC, !o), (0, Y.z)(!o)
    }
  })
}
let eu = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, c.ZP)(), {
    suppress: s,
    selfMute: o,
    mute: f
  } = (0, S.Z)(t), _ = (0, F.B)(t.id), y = (0, J.Z)(t.id), x = (0, l.e7)([m.default], () => null != m.default.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: v,
    enabled: j
  } = (0, O.Z)(), N = (0, I.Z)(t), {
    limit: R,
    reachedLimit: D
  } = (0, C.Z)(t), M = (0, l.e7)([U.default], () => U.default.getCurrentUser()), G = (0, l.e7)([L.Z], () => (0, b.Z)(L.Z)), H = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]), B = (0, l.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]), V = (0, W.PK)(t.id), z = R > 0, Y = D && !V || null != B && B.user.id !== (null == M ? true : M.id), q = (0, g.u)("AudioDeviceMenu", n, {
    entrypoint: en.A5.CARET
  }), K = i.useRef(null), Q = i.useRef(null);
  if (null == M) return null;
  let X = (0, r.jsx)(a.yRy, {
    targetElementRef: K,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(T.Z, {
        children: (0, r.jsx)(p.Z, {
          onClose: t,
          minimal: true,
          onInteraction: (0, g.u)("VideoDeviceMenu", n, {
            entrypoint: en.A5.CARET
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
      return (0, r.jsx)(A.C, {
        ref: K,
        centerButton: true,
        hasPermission: N,
        enabled: j,
        cameraUnavailable: v,
        onChange: E.r,
        onCameraUnavailable: P.Z,
        channelLimitReached: D,
        channelLimit: R,
        popoutOpen: i,
        onPopoutClick: n
      })
    }
  });
  return (0, r.jsxs)("div", {
    className: ei.wrapper,
    children: [H && !s ? (0, r.jsxs)("div", {
      className: ei.buttonSection,
      children: [(0, r.jsx)(a.yRy, {
        targetElementRef: Q,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(T.Z, {
            children: (0, r.jsx)(u.default, {
              onClose: t,
              renderInputDevices: true,
              renderInputModes: true,
              renderOutputDevices: true,
              renderInputVolume: true,
              renderOutputVolume: true,
              renderDeafen: true,
              minimal: true,
              onInteraction: q
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
          return (0, r.jsx)(w.Z, {
            ref: Q,
            centerButton: true,
            onPopoutClick: n,
            selfMute: o,
            serverMute: f,
            suppress: s,
            popoutOpen: i,
            onClick: () => (0, h.Z)(f, s, "Stage Channel Controls"),
            awaitingRemote: x
          })
        }
      }), z && X]
    }) : null, (0, r.jsxs)("div", {
      className: ei.buttonSection,
      children: [H && !s && z ? (0, r.jsx)(E.NZ, {
        channel: t,
        currentUser: M,
        exitFullScreen: () => null,
        canGoLive: G,
        hasPermission: N,
        disabled: Y
      }) : null, (0, r.jsx)(ed, {
        channelId: t.id
      }), H && (0, r.jsx)(el, {
        channel: t
      }), H && _ && s && y && (0, r.jsx)(es, {
        channel: t
      }), H && !s && (0, r.jsx)(ec, {
        channel: t
      }), (0, r.jsx)(Z.Z, {
        channel: t
      })]
    }), (0, r.jsx)(eo, {
      channel: t
    })]
  })
});

function ep(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: ei.wrapper,
    children: [(0, r.jsx)("div", {
      className: ei.buttonSection,
      children: (0, r.jsx)(ed, {
        channelId: t.id
      })
    }), (0, r.jsx)(eo, {
      channel: t
    })]
  })
}
let eh = Chunk647438.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, i = (0, J.Z)(t.id), a = (0, F.B)(t.id), s = (0, l.e7)([M.Z], () => M.Z.can(B.yP, t), [t]), o = (0, $.s)(), c = (0, ee.Z)(t.id), u = (0, l.e7)([d.Z], () => null != t ? d.Z.getSelectedParticipant(t.id) : null), p = !c && null == u;
  return n ? (0, r.jsx)(ep, {
    channel: t
  }) : i || a ? (0, r.jsxs)("div", {
    className: ei.containerColumn,
    children: [(0, r.jsxs)("div", {
      className: ei.eventPrompts,
      children: [p ? (0, r.jsx)(y.Z, {
        channelId: null == t ? true : t.id
      }) : null, (0, r.jsx)("div", {
        className: ei.separator
      }), p && s && !o ? (0, r.jsx)(x.Z, {
        highlight: true,
        channel: t
      }) : null, (0, r.jsx)("div", {
        className: ei.separator
      })]
    }), (0, r.jsx)(eu, {
      channel: t
    })]
  }) : (0, r.jsx)(ea, {
    channel: t
  })
})