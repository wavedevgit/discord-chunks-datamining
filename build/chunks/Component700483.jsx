/** Chunk was on 86357 **/
/** chunk id: 700483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eg
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk922482 = require("./922482.js"),
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

function es(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)(), i = (0, et.Z)(t.id), [l, a] = (0, er.Z)(t), s = (0, o.e7)([B.Z], () => B.Z.can(ei.Plq.REQUEST_TO_SPEAK, t));
  return i ? null : (0, r.jsx)(R.d, {
    isTrayButton: true,
    isActive: l,
    label: l ? ea.intl.string(ea.t.GCimTk) : s ? ea.intl.string(ea.t.hLbG5O) : ea.intl.string(ea.t.e4WMv7),
    iconComponent: c.V9,
    onClick: () => {
      (0, y.v)(n, y.d.REQUEST_TO_SPEAK, !l), a()
    },
    color: l ? "green" : true,
    disabled: !s && !l
  })
}
let ec = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]);
  return (0, r.jsxs)("div", {
    className: eo.container,
    children: [(0, r.jsxs)("div", {
      className: eo.buttonSection,
      children: [(0, r.jsx)(eh, {
        channelId: t.id
      }), n ? (0, r.jsx)(es, {
        channel: t
      }) : null, (0, r.jsx)(N.Z, {
        channel: t
      })]
    }), (0, r.jsx)(ed, {
      channel: t
    })]
  })
});

function eu(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)();
  return (0, r.jsx)(R.d, {
    isTrayButton: true,
    onClick: () => {
      (0, V.RK)(t, false), (0, y.v)(n, y.d.SPEAK_ON_STAGE)
    },
    iconComponent: c.Lrb,
    label: ea.intl.string(ea.t["8Joh+v"])
  })
}

function ed(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, d.bp)(), {
    canManageGuildEvent: f
  } = (0, E.XJ)(t), m = (0, o.e7)([K.Z], () => K.Z.getStageInstanceByChannel(t.id), [t.id]), g = (0, o.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(null == m ? true : m.guild_scheduled_event_id)), b = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]), {
    suppress: C
  } = (0, Z.Z)(t), x = L.default.getId(), [j] = (0, er.Z)(t), O = Y.ZP.isModerator(x, t.id), S = (0, W.B)(t.id), P = f(g), {
    parentAnalyticsLocation: I
  } = (0, h.ZP)(), T = i.useRef(null);
  if (!b) return (0, r.jsx)(s.zx, {
    size: s.zx.Sizes.MEDIUM,
    color: s.zx.Colors.GREEN,
    className: a()(eo.buttonSpacing, eo.buttonWithTextButton),
    onClick: () => {
      (0, y.v)(I, y.d.JOIN_STAGE), (0, z.TM)(t)
    },
    children: (0, r.jsxs)("div", {
      className: eo.buttonWithTextInnerContainer,
      children: [(0, r.jsx)(c.Csw, {
        size: "md",
        color: "currentColor",
        className: eo.buttonWithTextIcon
      }), (0, r.jsx)(c.Text, {
        color: "none",
        variant: "text-sm/medium",
        children: ea.intl.string(ea.t["7vb2cX"])
      })]
    })
  });
  let N = () => (function(e) {
    let {
      channel: t,
      appContext: n
    } = e;
    if ((0, y.v)(p.Z.VOICE_CONTROL_TRAY, y.d.DISCONNECT), (0, ee.Z)(t)) return void(0, G.Us)(t, n);
    u.default.disconnect()
  })({
    channel: t,
    appContext: l
  });
  return (O || P) && null != m ? (0, r.jsx)(c.yRy, {
    targetElementRef: T,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(w.Z, {
        children: (0, r.jsx)(c.v2r, {
          navId: "exit-options",
          "aria-label": ea.intl.string(ea.t["3Uj+2t"]),
          onClose: i,
          onSelect: n,
          onInteraction: (0, _.u)("End Stage", I, {
            entrypoint: el.A5.CARET
          }),
          children: (0, r.jsx)(c.sNh, {
            id: "end-stage",
            color: "danger",
            action: () => (0, G.Ev)(t, l),
            label: ea.intl.string(ea.t.Fmx5y8),
            icon: c.k$p
          })
        })
      })
    },
    align: "center",
    position: "top",
    spacing: 16,
    animation: c.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(M.Z, {
        ref: T,
        label: ea.intl.string(ea.t.c6qKws),
        onClick: N,
        onPopoutClick: n,
        popoutOpen: i
      })
    }
  }) : C && !S || j ? (0, r.jsx)(M.Z, {
    label: ea.intl.string(ea.t.SMKyio),
    onClick: N
  }) : (0, r.jsx)(M.Z, {
    label: ea.intl.string(ea.t.c6qKws),
    onClick: N
  })
}

function ep(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)();
  return (0, r.jsx)(R.d, {
    isTrayButton: true,
    iconComponent: c.zRq,
    label: ea.intl.string(ea.t.ezLpY2),
    onClick: () => {
      (0, y.v)(n, y.d.MOVE_TO_AUDIENCE), (0, V.yi)(t)
    }
  })
}

function eh(e) {
  let {
    channelId: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)(), i = (0, o.e7)([$.Z], () => $.Z.isMuted()), l = (0, J.pp)(t), a = (0, o.e7)([$.Z], () => $.Z.shouldPlay());
  return l ? (0, r.jsx)(R.d, {
    isTrayButton: true,
    isActive: !i,
    label: i ? ea.intl.string(ea.t.ScHlfn) : ea.intl.string(ea.t.zqxfra),
    iconComponent: i ? c.xjP : c.RZG,
    color: i ? true : "green",
    onClick: () => {
      (0, y.v)(n, y.d.STAGE_MUSIC, i), (0, Q.v)(!i)
    }
  }) : (0, r.jsx)(R.d, {
    isTrayButton: true,
    isActive: a,
    label: a ? ea.intl.string(ea.t.zqxfra) : ea.intl.string(ea.t.ScHlfn),
    iconComponent: a ? c.RZG : c.xjP,
    color: a ? "green" : true,
    onClick: () => {
      (0, y.v)(n, y.d.STAGE_MUSIC, !a), (0, Q.z)(!a)
    }
  })
}
let ef = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, h.ZP)(), {
    suppress: l,
    selfMute: a,
    mute: s
  } = (0, Z.Z)(t), u = (0, W.B)(t.id), d = (0, o.e7)([C.Z], () => null != C.Z.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: p,
    enabled: y
  } = (0, S.Z)(), v = (0, I.Z)(t), {
    limit: j,
    reachedLimit: O
  } = (0, P.Z)(t), E = (0, o.e7)([H.default], () => H.default.getCurrentUser()), R = (0, o.e7)([U.Z], () => (0, x.Z)(U.Z)), M = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]), L = (0, o.e7)([f.Z], () => f.Z.getStreamParticipants(t.id)[0], [t.id]), B = (0, X.PK)(t.id), G = j > 0, V = O && !B || null != L && L.user.id !== (null == E ? true : E.id), z = (0, _.u)("AudioDeviceMenu", n, {
    entrypoint: el.A5.CARET
  }), q = i.useRef(null), Y = i.useRef(null);
  if (null == E) return null;
  let K = (0, r.jsx)(c.yRy, {
    targetElementRef: q,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(w.Z, {
        children: (0, r.jsx)(g.Z, {
          onClose: t,
          minimal: true,
          onInteraction: (0, _.u)("VideoDeviceMenu", n, {
            entrypoint: el.A5.CARET
          })
        })
      })
    },
    position: "top",
    align: "right",
    spacing: 16,
    animation: c.yRy.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(D.C, {
        ref: q,
        centerButton: true,
        hasPermission: v,
        enabled: y,
        cameraUnavailable: p,
        onChange: T.r,
        onCameraUnavailable: A.Z,
        channelLimitReached: O,
        channelLimit: j,
        popoutOpen: i,
        onPopoutClick: n
      })
    }
  });
  return (0, r.jsxs)("div", {
    className: eo.wrapper,
    children: [M && !l ? (0, r.jsxs)("div", {
      className: eo.buttonSection,
      children: [(0, r.jsx)(c.yRy, {
        targetElementRef: Y,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(w.Z, {
            children: (0, r.jsx)(m.default, {
              onClose: t,
              renderInputDevices: true,
              renderInputModes: true,
              renderOutputDevices: true,
              renderInputVolume: true,
              renderOutputVolume: true,
              renderDeafen: true,
              minimal: true,
              onInteraction: z
            })
          })
        },
        align: "right",
        position: "top",
        spacing: 16,
        animation: c.yRy.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: n
          } = e, {
            isShown: i
          } = t;
          return (0, r.jsx)(k.Z, {
            ref: Y,
            centerButton: true,
            onPopoutClick: n,
            selfMute: a,
            serverMute: s,
            suppress: l,
            popoutOpen: i,
            onClick: () => (0, b.Z)(s, l, "Stage Channel Controls"),
            awaitingRemote: d
          })
        }
      }), G && K]
    }) : null, (0, r.jsxs)("div", {
      className: eo.buttonSection,
      children: [M && !l && G ? (0, r.jsx)(T.NZ, {
        channel: t,
        currentUser: E,
        exitFullScreen: () => null,
        canGoLive: R,
        hasPermission: v,
        disabled: V
      }) : null, (0, r.jsx)(eh, {
        channelId: t.id
      }), M && (0, r.jsx)(es, {
        channel: t
      }), M && u && l && (0, r.jsx)(eu, {
        channel: t
      }), M && !l && (0, r.jsx)(ep, {
        channel: t
      }), (0, r.jsx)(N.Z, {
        channel: t
      })]
    }), (0, r.jsx)(ed, {
      channel: t
    })]
  })
});

function em(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: eo.wrapper,
    children: [(0, r.jsx)("div", {
      className: eo.buttonSection,
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
  } = e, i = (0, et.Z)(t.id), l = (0, W.B)(t.id), a = (0, o.e7)([B.Z], () => B.Z.can(q.yP, t), [t]), s = (0, en.Z)(t.id), c = (0, o.e7)([f.Z], () => null != t ? f.Z.getSelectedParticipant(t.id) : null), u = !s && null == c;
  return n ? (0, r.jsx)(em, {
    channel: t
  }) : i || l ? (0, r.jsxs)("div", {
    className: eo.containerColumn,
    children: [(0, r.jsxs)("div", {
      className: eo.eventPrompts,
      children: [u ? (0, r.jsx)(j.Z, {
        channelId: null == t ? true : t.id
      }) : null, (0, r.jsx)("div", {
        className: eo.separator
      }), u && a ? (0, r.jsx)(O.Z, {
        highlight: true,
        channel: t
      }) : null, (0, r.jsx)("div", {
        className: eo.separator
      })]
    }), (0, r.jsx)(ef, {
      channel: t
    })]
  }) : (0, r.jsx)(ec, {
    channel: t
  })
})