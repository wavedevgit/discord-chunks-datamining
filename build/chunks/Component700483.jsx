/** Chunk was on 5665 **/
/** chunk id: 700483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ep
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk40851 = require("./40851.jsx"),
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
  Chunk184805 = require("./184805.js"),
  Chunk643632 = require("./643632.js"),
  Chunk270295 = require("./270295.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk769265 = require("./769265.js");

function ei(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)(), i = (0, Q.Z)(t.id), [o, s] = (0, $.Z)(t), c = (0, l.e7)([L.Z], () => L.Z.can(ee.Plq.REQUEST_TO_SPEAK, t));
  return i ? null : (0, r.jsx)(N.d, {
    isTrayButton: true,
    isActive: o,
    label: o ? en.intl.string(en.t.GCimTk) : c ? en.intl.string(en.t.hLbG5O) : en.intl.string(en.t.e4WMv7),
    iconComponent: a.V9,
    onClick: () => {
      (0, m.v)(n, m.d.REQUEST_TO_SPEAK, !o), s()
    },
    color: o ? "green" : true,
    disabled: !c && !o
  })
}
let el = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]);
  return (0, r.jsxs)("div", {
    className: er.container,
    children: [(0, r.jsxs)("div", {
      className: er.buttonSection,
      children: [(0, r.jsx)(ec, {
        channelId: t.id
      }), n ? (0, r.jsx)(ei, {
        channel: t
      }) : null, (0, r.jsx)(P.Z, {
        channel: t
      })]
    }), (0, r.jsx)(eo, {
      channel: t
    })]
  })
});

function ea(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)();
  return (0, r.jsx)(N.d, {
    isTrayButton: true,
    onClick: () => {
      (0, F.RK)(t, false), (0, m.v)(n, m.d.SPEAK_ON_STAGE)
    },
    iconComponent: a.Lrb,
    label: en.intl.string(en.t["8Joh+v"])
  })
}

function eo(e) {
  let {
    channel: t,
    onSelect: n
  } = e, d = (0, s.bp)(), {
    canManageGuildEvent: p
  } = (0, x.XJ)(t), h = (0, l.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id), [t.id]), f = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(null == h ? true : h.guild_scheduled_event_id)), {
    suppress: b
  } = (0, S.Z)(t), y = M.default.getId(), [C] = (0, $.Z)(t), v = V.ZP.isModerator(y, t.id), O = (0, H.B)(t.id), j = p(f), {
    parentAnalyticsLocation: E
  } = (0, u.ZP)(), I = i.useRef(null), P = () => (function(e) {
    let {
      channel: t,
      appContext: n
    } = e;
    if ((0, m.v)(c.Z.VOICE_CONTROL_TRAY, m.d.DISCONNECT), (0, X.Z)(t)) return void(0, B.Us)(t, n);
    o.default.disconnect()
  })({
    channel: t,
    appContext: d
  });
  return (v || j) && null != h ? (0, r.jsx)(a.yRy, {
    targetElementRef: I,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(T.Z, {
        children: (0, r.jsx)(a.v2r, {
          navId: "exit-options",
          "aria-label": en.intl.string(en.t["3Uj+2t"]),
          onClose: i,
          onSelect: n,
          onInteraction: (0, g.u)("End Stage", E, {
            entrypoint: et.A5.CARET
          }),
          children: (0, r.jsx)(a.sNh, {
            id: "end-stage",
            color: "danger",
            action: () => (0, B.Ev)(t, d),
            label: en.intl.string(en.t.Fmx5y8),
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
        ref: I,
        label: en.intl.string(en.t.c6qKws),
        onClick: P,
        onPopoutClick: n,
        popoutOpen: i
      })
    }
  }) : b && !O || C ? (0, r.jsx)(A.Z, {
    label: en.intl.string(en.t.SMKyio),
    onClick: P
  }) : (0, r.jsx)(A.Z, {
    label: en.intl.string(en.t.c6qKws),
    onClick: P
  })
}

function es(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)();
  return (0, r.jsx)(N.d, {
    isTrayButton: true,
    iconComponent: a.zRq,
    label: en.intl.string(en.t.ezLpY2),
    onClick: () => {
      (0, m.v)(n, m.d.MOVE_TO_AUDIENCE), (0, F.yi)(t)
    }
  })
}

function ec(e) {
  let {
    channelId: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)(), i = (0, l.e7)([K.Z], () => K.Z.isMuted()), o = (0, Y.pp)(t), s = (0, l.e7)([K.Z], () => K.Z.shouldPlay());
  return o ? (0, r.jsx)(N.d, {
    isTrayButton: true,
    isActive: !i,
    label: i ? en.intl.string(en.t.ScHlfn) : en.intl.string(en.t.zqxfra),
    iconComponent: i ? a.xjP : a.RZG,
    color: i ? true : "green",
    onClick: () => {
      (0, m.v)(n, m.d.STAGE_MUSIC, i), (0, q.v)(!i)
    }
  }) : (0, r.jsx)(N.d, {
    isTrayButton: true,
    isActive: s,
    label: s ? en.intl.string(en.t.zqxfra) : en.intl.string(en.t.ScHlfn),
    iconComponent: s ? a.RZG : a.xjP,
    color: s ? "green" : true,
    onClick: () => {
      (0, m.v)(n, m.d.STAGE_MUSIC, !s), (0, q.z)(!s)
    }
  })
}
let eu = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, u.ZP)(), {
    suppress: o,
    selfMute: s,
    mute: c
  } = (0, S.Z)(t), m = (0, H.B)(t.id), _ = (0, l.e7)([b.Z], () => null != b.Z.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: C,
    enabled: v
  } = (0, O.Z)(), x = (0, E.Z)(t), {
    limit: N,
    reachedLimit: A
  } = (0, j.Z)(t), M = (0, l.e7)([U.default], () => U.default.getCurrentUser()), L = (0, l.e7)([D.Z], () => (0, y.Z)(D.Z)), B = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]), F = (0, l.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]), G = (0, W.PK)(t.id), V = N > 0, z = A && !G || null != F && F.user.id !== (null == M ? true : M.id), q = (0, g.u)("AudioDeviceMenu", n, {
    entrypoint: et.A5.CARET
  }), Y = i.useRef(null), K = i.useRef(null);
  if (null == M) return null;
  let X = (0, r.jsx)(a.yRy, {
    targetElementRef: Y,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(T.Z, {
        children: (0, r.jsx)(h.Z, {
          onClose: t,
          minimal: true,
          onInteraction: (0, g.u)("VideoDeviceMenu", n, {
            entrypoint: et.A5.CARET
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
      return (0, r.jsx)(R.C, {
        ref: Y,
        centerButton: true,
        hasPermission: x,
        enabled: v,
        cameraUnavailable: C,
        onChange: I.r,
        onCameraUnavailable: Z.Z,
        channelLimitReached: A,
        channelLimit: N,
        popoutOpen: i,
        onPopoutClick: n
      })
    }
  });
  return (0, r.jsxs)("div", {
    className: er.wrapper,
    children: [B && !o ? (0, r.jsxs)("div", {
      className: er.buttonSection,
      children: [(0, r.jsx)(a.yRy, {
        targetElementRef: K,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(T.Z, {
            children: (0, r.jsx)(p.default, {
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
            ref: K,
            centerButton: true,
            onPopoutClick: n,
            selfMute: s,
            serverMute: c,
            suppress: o,
            popoutOpen: i,
            onClick: () => (0, f.Z)(c, o, "Stage Channel Controls"),
            awaitingRemote: _
          })
        }
      }), V && X]
    }) : null, (0, r.jsxs)("div", {
      className: er.buttonSection,
      children: [B && !o && V ? (0, r.jsx)(I.NZ, {
        channel: t,
        currentUser: M,
        exitFullScreen: () => null,
        canGoLive: L,
        hasPermission: x,
        disabled: z
      }) : null, (0, r.jsx)(ec, {
        channelId: t.id
      }), B && (0, r.jsx)(ei, {
        channel: t
      }), B && m && o && (0, r.jsx)(ea, {
        channel: t
      }), B && !o && (0, r.jsx)(es, {
        channel: t
      }), (0, r.jsx)(P.Z, {
        channel: t
      })]
    }), (0, r.jsx)(eo, {
      channel: t
    })]
  })
});

function ed(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: er.wrapper,
    children: [(0, r.jsx)("div", {
      className: er.buttonSection,
      children: (0, r.jsx)(ec, {
        channelId: t.id
      })
    }), (0, r.jsx)(eo, {
      channel: t
    })]
  })
}
let ep = Chunk647438.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, i = (0, Q.Z)(t.id), a = (0, H.B)(t.id), o = (0, l.e7)([L.Z], () => L.Z.can(G.yP, t), [t]), s = (0, J.Z)(t.id), c = (0, l.e7)([d.Z], () => null != t ? d.Z.getSelectedParticipant(t.id) : null), u = !s && null == c;
  return n ? (0, r.jsx)(ed, {
    channel: t
  }) : i || a ? (0, r.jsxs)("div", {
    className: er.containerColumn,
    children: [(0, r.jsxs)("div", {
      className: er.eventPrompts,
      children: [u ? (0, r.jsx)(C.Z, {
        channelId: null == t ? true : t.id
      }) : null, (0, r.jsx)("div", {
        className: er.separator
      }), u && o ? (0, r.jsx)(v.Z, {
        highlight: true,
        channel: t
      }) : null, (0, r.jsx)("div", {
        className: er.separator
      })]
    }), (0, r.jsx)(eu, {
      channel: t
    })]
  }) : (0, r.jsx)(el, {
    channel: t
  })
})