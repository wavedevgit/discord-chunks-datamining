/** Chunk was on 97492 **/
/** chunk id: 717965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ey
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk517461 = require("./517461.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk385318 = require("./385318.jsx"),
  Chunk750765 = require("./750765.jsx"),
  Chunk183184 = require("./183184.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk643501 = require("./643501.js"),
  Chunk880144 = require("./880144.js"),
  Chunk698441 = require("./698441.js"),
  Chunk394412 = require("./394412.jsx"),
  Chunk859894 = require("./859894.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk931991 = require("./931991.js"),
  Chunk151476 = require("./151476.js"),
  Chunk405018 = require("./405018.js"),
  Chunk927258 = require("./927258.js"),
  Chunk173660 = require("./173660.js"),
  Chunk105225 = require("./105225.jsx"),
  Chunk579153 = require("./579153.jsx"),
  Chunk222692 = require("./222692.jsx"),
  Chunk461782 = require("./461782.jsx"),
  Chunk246356 = require("./246356.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk404355 = require("./404355.jsx"),
  Chunk577062 = require("./577062.jsx"),
  Chunk970636 = require("./970636.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk993838 = require("./993838.jsx"),
  Chunk849736 = require("./849736.js"),
  Chunk776781 = require("./776781.js"),
  Chunk233993 = require("./233993.js"),
  Chunk312006 = require("./312006.js"),
  Chunk446600 = require("./446600.js"),
  Chunk96566 = require("./96566.js"),
  Chunk302884 = require("./302884.js"),
  Chunk30108 = require("./30108.js"),
  Chunk39938 = require("./39938.js"),
  Chunk106044 = require("./106044.js"),
  Chunk370228 = require("./370228.js"),
  Chunk982279 = require("./982279.js"),
  Chunk418208 = require("./418208.js"),
  Chunk505543 = require("./505543.js"),
  Chunk361619 = require("./361619.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563429 = require("./563429.js"),
  Chunk117816 = require("./117816.js");

function ed(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, p.Ay)(), i = (0, er.A)(t.id), [o, f] = (0, ea.A)(t), h = (0, en.L)(t), b = (0, el.Vv)(), g = (0, el.tp)(), m = l.useRef(null), [y, O] = (0, c.V)("age-verification-stage-popover-dismissed", false), j = l.useContext(D.vG);
  if (i) return null;
  let v = g && !y;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(L.l, {
      ref: m,
      isTrayButton: true,
      isActive: o,
      label: function(e, t, n, r) {
        let l = !(arguments.length > 4) || true === arguments[4] || arguments[4];
        return !l && r ? null : n ? eo.intl.string(eo.t.NzITVo) : e ? eo.intl.string(eo.t.GCimTk) : t ? eo.intl.string(eo.t.hLbG5N) : eo.intl.string(eo.t.e4WMvx)
      }(o, h, b, g, y),
      iconComponent: b ? s._xi : s.E7M,
      onClick: () => {
        (0, A.X)(n, A.O.REQUEST_TO_SPEAK, !o), O(true), b ? u.A.showAgeVerificationGetStartedModal({
          entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND
        }) : f()
      },
      color: o ? "green" : true,
      disabled: !h && !o
    }), v && (0, r.jsx)(a.AM, {
      targetElementRef: m,
      graphic: {
        type: "image",
        src: eu.A
      },
      gradientColor: "blue",
      title: eo.intl.string(eo.t.zvubnM),
      body: eo.intl.string(eo.t["/wx+J2"]),
      shouldShow: !j,
      actions: [{
        text: eo.intl.string(eo.t.KXVgjt),
        onClick: () => {
          u.A.showAgeVerificationGetStartedModal({
            entryPoint: d.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT
          }), O(true)
        }
      }],
      onRequestClose: () => O(true)
    })]
  })
}
let ef = Chunk64700.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, i.bG)([B.A], () => B.A.getVoiceChannelId() === t.id, [t.id]);
  return (0, r.jsxs)("div", {
    className: ec.kL,
    children: [(0, r.jsxs)("div", {
      className: ec.qi,
      children: [(0, r.jsx)(eg, {
        channelId: t.id
      }), n ? (0, r.jsx)(ed, {
        channel: t
      }) : null, (0, r.jsx)(w.A, {
        channel: t
      })]
    }), (0, r.jsx)(eh, {
      channel: t
    })]
  })
});

function ep(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, p.Ay)();
  return (0, r.jsx)(L.l, {
    isTrayButton: true,
    onClick: () => {
      ((0, A.X)(n, A.O.SPEAK_ON_STAGE), (0, el.Cf)(t.id)) ? u.A.showAgeVerificationGetStartedModal({
        entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND
      }): (0, z.e7)(t, false)
    },
    iconComponent: s.LvC,
    label: eo.intl.string(eo.t["8Joh+p"])
  })
}

function eh(e) {
  let {
    channel: t,
    onSelect: n
  } = e, a = (0, _.Us)(), {
    canManageGuildEvent: c
  } = (0, C.nr)(t), u = (0, i.bG)([J.A], () => J.A.getStageInstanceByChannel(t.id), [t.id]), d = (0, i.bG)([v.Ay], () => v.Ay.getGuildScheduledEvent(null == u ? true : u.guild_scheduled_event_id)), {
    suppress: h
  } = (0, T.A)(t), b = V.default.getId(), [g] = (0, ea.A)(t), m = X.Ay.isModerator(b, t.id), O = (0, Y.Ni)(t.id), j = c(d), {
    parentAnalyticsLocation: x
  } = (0, p.Ay)(), E = l.useRef(null), S = () => (function(e) {
    let {
      channel: t,
      appContext: n
    } = e;
    ((0, A.X)(f.A.VOICE_CONTROL_TRAY, A.O.DISCONNECT), (0, et.A)(t)) ? (0, W.j3)(t, n) : o.default.disconnect()
  })({
    channel: t,
    appContext: a
  });
  return (m || j) && null != u ? (0, r.jsx)(s.YNO, {
    targetElementRef: E,
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, r.jsx)(M.A, {
        children: (0, r.jsx)(s.W1t, {
          navId: "exit-options",
          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
          onClose: l,
          onSelect: n,
          onInteraction: (0, y.s)("End Stage", x, {
            entrypoint: es.GK.CARET
          }),
          children: (0, r.jsx)(s.Drp, {
            id: "end-stage",
            color: "danger",
            action: () => (0, W.$q)(t, a),
            label: eo.intl.string(eo.t["Fmx5y/"]),
            icon: s.aXh
          })
        })
      })
    },
    align: "center",
    position: "top",
    spacing: 16,
    animation: s.YNO.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: l
      } = t;
      return (0, r.jsx)(G.A, {
        ref: E,
        label: eo.intl.string(eo.t.c6qKwr),
        onClick: S,
        onPopoutClick: n,
        popoutOpen: l
      })
    }
  }) : h && !O || g ? (0, r.jsx)(G.A, {
    label: eo.intl.string(eo.t.SMKyih),
    onClick: S
  }) : (0, r.jsx)(G.A, {
    label: eo.intl.string(eo.t.c6qKwr),
    onClick: S
  })
}

function eb(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, p.Ay)();
  return (0, r.jsx)(L.l, {
    isTrayButton: true,
    iconComponent: s.U$V,
    label: eo.intl.string(eo.t.ezLpY6),
    onClick: () => {
      (0, A.X)(n, A.O.MOVE_TO_AUDIENCE), (0, z.Tf)(t)
    }
  })
}

function eg(e) {
  let {
    channelId: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, p.Ay)(), l = (0, i.bG)([ee.A], () => ee.A.isMuted()), a = (0, $.bF)(t), o = (0, i.bG)([ee.A], () => ee.A.shouldPlay());
  return a ? (0, r.jsx)(L.l, {
    isTrayButton: true,
    isActive: !l,
    label: l ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
    iconComponent: l ? s.CIB : s.T7G,
    color: l ? true : "green",
    onClick: () => {
      (0, A.X)(n, A.O.STAGE_MUSIC, l), (0, Z.k)(!l)
    }
  }) : (0, r.jsx)(L.l, {
    isTrayButton: true,
    isActive: o,
    label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
    iconComponent: o ? s.T7G : s.CIB,
    color: o ? "green" : true,
    onClick: () => {
      (0, A.X)(n, A.O.STAGE_MUSIC, !o), (0, Z.C)(!o)
    }
  })
}
let em = Chunk64700.memo(function(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, p.Ay)(), {
    suppress: a,
    selfMute: o,
    mute: c
  } = (0, T.A)(t), u = (0, Y.Ni)(t.id), d = (0, er.A)(t.id), f = (0, i.bG)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()), {
    cameraUnavailable: A,
    enabled: v
  } = (0, S.A)(), x = (0, N.A)(t), {
    limit: E,
    reachedLimit: _
  } = (0, I.A)(t), C = (0, i.bG)([K.default], () => K.default.getCurrentUser()), D = (0, i.bG)([F.A], () => (0, j.A)(F.A)), L = (0, i.bG)([B.A], () => B.A.getVoiceChannelId() === t.id, [t.id]), G = (0, i.bG)([h.A], () => h.A.getStreamParticipants(t.id)[0], [t.id]), V = (0, Q.qT)(t.id), H = E > 0, W = _ && !V || null != G && G.user.id !== (null == C ? true : C.id), z = (0, y.s)("AudioDeviceMenu", n, {
    entrypoint: es.GK.CARET
  }), q = l.useRef(null), X = l.useRef(null);
  if (null == C) return null;
  let J = (0, r.jsx)(s.YNO, {
    targetElementRef: q,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(M.A, {
        children: (0, r.jsx)(g.A, {
          onClose: t,
          minimal: true,
          onInteraction: (0, y.s)("VideoDeviceMenu", n, {
            entrypoint: es.GK.CARET
          })
        })
      })
    },
    position: "top",
    align: "right",
    spacing: 16,
    animation: s.YNO.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: l
      } = t;
      return (0, r.jsx)(U.A, {
        ref: q,
        centerButton: true,
        hasPermission: x,
        enabled: v,
        cameraUnavailable: A,
        onChange: P.SZ,
        onCameraUnavailable: R.A,
        channelLimitReached: _,
        channelLimit: E,
        popoutOpen: l,
        onPopoutClick: n
      })
    }
  });
  return (0, r.jsxs)("div", {
    className: ec.iE,
    children: [L && !a ? (0, r.jsxs)("div", {
      className: ec.qi,
      children: [(0, r.jsx)(s.YNO, {
        targetElementRef: X,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(M.A, {
            children: (0, r.jsx)(b.default, {
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
        animation: s.YNO.Animation.FADE,
        children: (e, t) => {
          let {
            onClick: n
          } = e, {
            isShown: l
          } = t;
          return (0, r.jsx)(k.A, {
            ref: X,
            centerButton: true,
            onPopoutClick: n,
            selfMute: o,
            serverMute: c,
            suppress: a,
            popoutOpen: l,
            onClick: () => (0, m.A)(c, a, "Stage Channel Controls"),
            awaitingRemote: f
          })
        }
      }), H && J]
    }) : null, (0, r.jsxs)("div", {
      className: ec.qi,
      children: [L && !a && H ? (0, r.jsx)(P.rP, {
        channel: t,
        currentUser: C,
        exitFullScreen: () => null,
        canGoLive: D,
        hasPermission: x,
        disabled: W
      }) : null, (0, r.jsx)(eg, {
        channelId: t.id
      }), L && (0, r.jsx)(ed, {
        channel: t
      }), L && u && a && d && (0, r.jsx)(ep, {
        channel: t
      }), L && !a && (0, r.jsx)(eb, {
        channel: t
      }), (0, r.jsx)(w.A, {
        channel: t
      })]
    }), (0, r.jsx)(eh, {
      channel: t
    })]
  })
});

function eA(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsxs)("div", {
    className: ec.iE,
    children: [(0, r.jsx)("div", {
      className: ec.qi,
      children: (0, r.jsx)(eg, {
        channelId: t.id
      })
    }), (0, r.jsx)(eh, {
      channel: t
    })]
  })
}
let ey = Chunk64700.memo(function(e) {
  let {
    channel: t,
    isOnStartStageScreen: n
  } = e, l = (0, er.A)(t.id), a = (0, Y.Ni)(t.id), s = (0, i.bG)([H.A], () => H.A.can(q.QY, t), [t]), o = (0, el.zU)(), c = (0, ei.A)(t.id), u = (0, i.bG)([h.A], () => null != t ? h.A.getSelectedParticipant(t.id) : null), d = !c && null == u;
  return n ? (0, r.jsx)(eA, {
    channel: t
  }) : l || a ? (0, r.jsxs)("div", {
    className: ec.My,
    children: [(0, r.jsxs)("div", {
      className: ec.Ac,
      children: [d ? (0, r.jsx)(x.A, {
        channelId: null == t ? true : t.id
      }) : null, (0, r.jsx)("div", {
        className: ec.me
      }), d && s && !o ? (0, r.jsx)(E.A, {
        highlight: true,
        channel: t
      }) : null, (0, r.jsx)("div", {
        className: ec.me
      })]
    }), (0, r.jsx)(em, {
      channel: t
    })]
  }) : (0, r.jsx)(ef, {
    channel: t
  })
})