/** Chunk was on 78528 **/
/** chunk id: 175203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => ef,
  Yl: () => eh
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk520698 = require("./520698.js"),
  Chunk659974 = require("./659974.js"),
  Chunk164617 = require("./164617.js"),
  Chunk66004 = require("./66004.jsx"),
  Chunk958005 = require("./958005.js"),
  Chunk609425 = require("./609425.js"),
  Chunk73392 = require("./73392.js"),
  Chunk529020 = require("./529020.js"),
  Chunk401901 = require("./401901.jsx"),
  Chunk612258 = require("./612258.jsx"),
  Chunk551826 = require("./551826.jsx"),
  Chunk87001 = require("./87001.js"),
  Chunk574172 = require("./574172.js"),
  Chunk665691 = require("./665691.js"),
  Chunk209932 = require("./209932.js"),
  Chunk253932 = require("./253932.js"),
  Chunk461782 = require("./461782.jsx"),
  Chunk614518 = require("./614518.js"),
  Chunk706787 = require("./706787.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk760751 = require("./760751.js"),
  Chunk111162 = require("./111162.js"),
  Chunk430452 = require("./430452.js"),
  Chunk290863 = require("./290863.js"),
  Chunk485296 = require("./485296.js"),
  Chunk977997 = require("./977997.js"),
  Chunk712687 = require("./712687.js"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk141035 = require("./141035.js"),
  Chunk654820 = require("./654820.jsx"),
  Chunk804980 = require("./804980.jsx"),
  Chunk272812 = require("./272812.jsx"),
  Chunk203355 = require("./203355.jsx"),
  Chunk83982 = require("./83982.jsx"),
  Chunk345812 = require("./345812.js"),
  Chunk110234 = require("./110234.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk31408 = require("./31408.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk707511 = require("./707511.js");
let ea = [Chunk806931.lp.ACTIVITY],
  eo = Chunk64700.memo(e => {
    var t, n, i, a, c, u, A, _, O, j, S, I, F, H;
    let K, W, z, {
        participant: $,
        popoutType: eo,
        onDoubleClick: ec,
        onContextMenu: eu,
        onClick: ed,
        onMouseDown: eh,
        onKeyDown: ef,
        className: eg,
        style: em,
        containerStyle: eb,
        channel: eA,
        width: ey,
        onVideoResize: e_,
        inCall: eO = false,
        selected: ej = false,
        noBorder: ev = false,
        noVideoRender: ex = false,
        focused: eE = false,
        blocked: eC = false,
        ignored: eS = false,
        fit: eI = x.$.CONTAIN,
        paused: eN = false,
        pulseSpeakingIndicator: eT = false,
        forceIdle: eP = false,
        controlsBottom: ew
      } = e,
      eR = l.useContext(w.vG) || eP,
      [eD, eM] = l.useState(false),
      eL = P.Q_.useSetting(),
      ek = (0, o.bG)([k.default], () => k.default.isStreamInfoOverlayEnabled),
      [eG, eU] = l.useState(false),
      eB = (0, o.bG)([M.default], () => M.default.getId()),
      eV = $.type === en.lp.ACTIVITY ? null : $.user,
      eF = null != (t = null == eV ? true : eV.id) ? t : null,
      [eH] = (0, g.A)($.type === en.lp.ACTIVITY ? [$.applicationId] : []),
      eK = (0, o.bG)([G.A], () => null != eF && G.A.isLocalVideoDisabled(eF, (0, m.A)($.type)), [eF, $.type]),
      eW = (0, o.bG)([G.A], () => null != eF ? G.A.getVideoToggleState(eF, (0, m.A)($.type)) : et.bb8.NONE, [eF, $.type]),
      ez = eW === et.bb8.AUTO_PROBING,
      {
        speaking: eY,
        latched: eq,
        ringing: eX,
        hasVideo: eJ
      } = (0, ee.A)($, eB),
      eQ = (0, o.bG)([T.A], () => null !== eF && T.A.isUserPlayingSounds(eF), [eF]),
      eZ = (_ = eB, O = $, j = eA.getGuildId(), K = O.type !== en.lp.ACTIVITY ? O.user.id : O.applicationId, W = (0, o.cf)([V.A], () => {
        var e, t, n;
        let r = V.A.getVoiceState(j, K);
        return {
          muted: null != (e = null == r ? true : r.mute) && e,
          deafened: null != (t = null == r ? true : r.deaf) && t,
          suppressed: null != (n = null == r ? true : r.suppress) && n,
          voiceChannelId: null == r ? true : r.channelId
        }
      }), z = (0, o.cf)([G.A], () => {
        let e = (0, m.A)(O.type);
        return _ === K ? {
          muted: false,
          deafened: false
        } : {
          muted: G.A.isLocalMute(K, e),
          localVideoDisabled: G.A.isLocalVideoDisabled(K, e),
          localVideoAutoDisabled: G.A.isLocalVideoAutoDisabled(K, e)
        }
      }, [_, O.type, K]), {
        serverMuted: W.muted,
        serverDeafened: W.deafened,
        suppressed: W.suppressed,
        localMuted: z.muted,
        muted: null != (S = O.type === en.lp.USER && (null == (F = O.voiceState) ? true : F.isVoiceMuted())) && S,
        deafened: null != (I = O.type === en.lp.USER && (null == (H = O.voiceState) ? true : H.isVoiceDeafened())) && I
      }),
      e$ = $.type === en.lp.STREAM && eF === eB,
      e0 = (0, o.bG)([R.A], () => $.type === en.lp.USER && null != eF ? R.A.getEffectForUserId(eF) : null),
      e1 = (0, o.bG)([V.A], () => V.A.getVoicePlatformForChannel(eA.id, null != eF ? eF : et.dJq)),
      {
        showGameIcon: e9
      } = v.Ay.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: false
      }),
      e7 = (0, o.bG)([U.A], () => e9 && null != eF ? U.A.findActivity(eF, e => null != e.application_id && e.type === et.$pd.PLAYING) : null, [e9, eF]),
      e2 = (0, o.bG)([L.A], () => (null == e7 ? true : e7.application_id) != null ? L.A.getDetectableGame(e7.application_id) : null),
      e6 = (0, o.bG)([f.A], () => null != e2 && (null == e7 ? true : e7.application_id) != null ? f.A.getApplication(null == e7 ? true : e7.application_id) : true),
      e3 = (0, N.UF)({
        userId: eF,
        channelId: eA.id
      }),
      e5 = (0, N.DY)({
        streamKey: $.type === en.lp.STREAM ? $.id : null,
        channelId: eA.id
      }),
      e8 = l.useMemo(() => $.type === en.lp.STREAM ? null != e5 && e5 : $.type === en.lp.USER && null != e3 && e3, [e5, e3, $.type]);
    l.useEffect(() => {
      eM(eE)
    }, [eE]);
    let e4 = l.useCallback(() => {
        null != eF && p.A.toggleLocalMute(eF, el.x.STREAM)
      }, [eF]),
      te = l.useCallback(e => {
        null == ed || ed($, e)
      }, [ed, $]),
      tt = l.useCallback(e => {
        null == ec || ec($, e)
      }, [ec, $]),
      tn = l.useCallback((e, t, n) => {
        null == eu || eu($, e, t, n)
      }, [eu, $]),
      tr = null,
      tl = null,
      ti = "";
    switch ($.type) {
      case en.lp.STREAM:
        tr = (0, r.jsx)(Q.A, {
          participant: $,
          selected: ej,
          popoutType: eo,
          width: ey,
          fit: eI,
          onVideoResize: e_,
          paused: eN,
          focused: eE,
          idle: eR,
          controlsBottom: ew
        }), tl = (0, r.jsx)(Q.D, {
          participant: $,
          selected: ej,
          width: ey,
          focused: eE,
          idle: eR,
          premiumIndicator: false
        }), ti = ei.intl.formatToPlainString(ei.t.gHPz3Q, {
          streamerName: $.user.username
        });
        break;
      case en.lp.USER:
        tr = (0, r.jsx)(Z.A, {
          channel: eA,
          inCall: eO,
          participant: $,
          popoutType: eo,
          fit: eI,
          onVideoResize: e_,
          paused: eN,
          selected: ej,
          width: ey,
          blocked: eC,
          ignored: eS,
          noVideoRender: ex || ez,
          pulseSpeakingIndicator: eT
        }), tl = (0, r.jsx)(Z.s, {
          participant: $,
          channelId: eA.id
        }), ti = ei.intl.formatToPlainString(ei.t["iC/x/Q"], {
          username: $.user.username
        });
        break;
      case en.lp.ACTIVITY:
        tr = (0, r.jsx)(X.Ay, {
          interactible: eE,
          participant: $,
          selected: ej,
          channel: eA,
          width: ey
        }), ti = ei.intl.formatToPlainString(ei.t.YCvOsO, {
          activityName: null == eH ? true : eH.name
        });
        break;
      case en.lp.HIDDEN_STREAM:
        tr = (0, r.jsx)(Q.A, {
          participant: $,
          selected: ej,
          width: ey,
          fit: eI,
          onVideoResize: e_,
          paused: eN,
          popoutType: eo,
          focused: eE,
          idle: eR
        })
    }
    let ts = l.useRef(null),
      ta = (0, o.bG)([B.A], () => $.type === en.lp.USER ? B.A.getVoiceVolume($.id) : false / 0),
      to = (0, b.v)({
        isSpeaking: eY,
        voiceDb: ta,
        spreadDirection: b.O.INSET_ONLY,
        maxInnerSpreadRadius: 4
      }),
      tc = $.type === en.lp.STREAM ? d.kN9 : d.npA;
    return (0, r.jsx)(h.A, {
      section: et.JJy.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: s()(es.iE, {
          [es.DF]: eX
        }, eg),
        style: eb,
        onMouseEnter: () => {
          eU(true)
        },
        onMouseLeave: () => {
          eU(false)
        },
        children: (0, r.jsxs)(C.A, {
          shakeLocation: er.uD.VOICE_USER,
          isShaking: eY,
          className: es.Vs,
          children: [(0, r.jsx)(J.A, {
            ref: ts,
            className: s()(es.Vs, {
              [es.E7]: ev,
              [es.k_]: null == ed,
              [es.N7]: eR
            }),
            noBorder: ev,
            style: em,
            participantUserId: eF,
            children: (0, r.jsxs)(d.sqX, {
              "aria-label": ti,
              className: es.lG,
              onDoubleClick: tt,
              onContextMenu: e => tn(e, $.type === en.lp.STREAM),
              onClick: te,
              onMouseDown: eh,
              onKeyDown: ef,
              focusProps: {
                offset: 1
              },
              children: [null != e0 && null != eF ? (0, r.jsx)(D.A, {
                voiceChannelEffect: e0,
                onComplete: () => (0, R.a)(eF),
                userId: eF
              }) : null, $.type === en.lp.USER ? (0, r.jsx)("div", {
                className: es.nl,
                children: (0, r.jsx)(y.A, {
                  userId: eF,
                  channelId: eA.id,
                  guildId: eA.getGuildId(),
                  containerDimensions: {
                    width: null != (n = null == ts || null == (a = ts.current) ? true : a.clientWidth) ? n : 0,
                    height: null != (i = null == ts || null == (c = ts.current) ? true : c.clientHeight) ? i : 0
                  }
                })
              }) : null, tr, ev ? null : (0, r.jsx)("div", {
                className: es.hD,
                children: tl
              }), ej ? (0, r.jsx)("div", {
                className: es._Q,
                children: (0, r.jsx)(tc, {
                  size: "md",
                  color: "currentColor",
                  className: es.Dt
                })
              }) : null, ea.includes($.type) ? null : (0, r.jsx)(ep, (u = function(e) {
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
              }({
                focused: eE,
                width: ey,
                inCall: eO,
                participantId: $.id,
                participantType: $.type,
                hasVideo: null != eJ && eJ
              }, eZ), A = A = {
                idle: eR,
                platform: e1,
                title: (0, Y.A)(eA, $),
                blocked: eC,
                ignored: eS,
                localVideoDisabled: eK,
                videoToggleState: eW,
                hideAudioIcon: e$,
                onContextMenu: tn,
                onToggleMute: e4,
                participantUserId: eF,
                channel: eA,
                application: e6,
                secureFramesVerified: e8,
                isHovered: eG,
                popoutType: eo
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(A)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(A)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(A, e))
              }), u)), eO && !ev ? (0, r.jsx)("div", {
                className: s()(es.PQ, {
                  [es.pU]: !eE && (eQ || null != e0),
                  [es.JB]: eq && !eY && !eE && !eQ
                }),
                style: eE || eQ ? true : to
              }) : null]
            })
          }), eL && ek && eG && (0, r.jsx)(q.A, {
            currentUserId: eB,
            participant: $
          }), (0, r.jsx)(E.A, {
            isFiring: eD,
            callTileRef: ts.current
          })]
        })
      })
    })
  });

function ec(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === en.lp.STREAM) return n === en.J7.XBOX ? (0, r.jsx)(K.A, {
    className: l
  }) : (0, r.jsx)(d.kN9, {
    size: "md",
    color: "currentColor",
    className: l
  });
  switch (n) {
    case en.J7.MOBILE:
      return (0, r.jsx)(d.u6o, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    case en.J7.XBOX:
      return (0, r.jsx)(K.A, {
        className: l
      });
    case en.J7.PLAYSTATION:
      return (0, r.jsx)(H.A, {
        className: l
      });
    case en.J7.QUEST:
      return (0, r.jsx)(a.VrHeadsetIcon, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    default:
      return null
  }
}

function eu(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: l,
    onClick: i
  } = e;
  return (0, r.jsx)(u.m, {
    text: n,
    children: (0, r.jsx)("div", {
      className: s()(es.V7, {
        [es.kl]: l
      }),
      children: (0, r.jsx)(d.K0, {
        size: "sm",
        variant: "overlay-secondary",
        onClick: e => {
          e.stopPropagation(), i(e)
        },
        "aria-label": n,
        icon: t
      })
    })
  })
}

function ed(e) {
  let {
    channelId: t,
    participantId: n,
    hideWhenInactive: i
  } = e, s = l.useMemo(() => (0, _.A)(t, n), [t, n]), a = (0, o.bG)([S.A], () => S.A.getIsAlwaysOnTop(s)), c = l.useCallback(() => {
    I.setAlwaysOnTop(s, !a)
  }, [s, a]);
  return W.isPlatformEmbedded && z.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS) ? (0, r.jsx)(eu, {
    onClick: c,
    tooltipText: a ? ei.intl.string(ei.t.YdyDM9) : ei.intl.string(ei.t.ZVGHwP),
    icon: a ? d.hl9 : d.qgw,
    hideWhenInactive: i
  }) : null
}
eo.displayName = "CallTile";
let ep = Chunk64700.memo(e => {
  let {
    idle: t,
    title: n,
    width: i,
    focused: a,
    videoToggleState: p,
    blocked: h,
    ignored: f,
    participantId: g,
    participantType: b,
    participantUserId: y,
    channel: _,
    platform: v,
    secureFramesVerified: x,
    onContextMenu: E,
    muted: C,
    deafened: S,
    localMuted: I,
    serverMuted: N,
    serverDeafened: T,
    hasVideo: P,
    hideAudioIcon: w,
    onToggleMute: R,
    popoutType: D
  } = e, M = (0, o.bG)([G.A], () => null != y && G.A.isLocalVideoAutoDisabled(y, (0, m.A)(b)), [y, b]), L = (0, O.A)({
    userId: y,
    guildId: _.getGuildId()
  }), k = (0, j.a)({
    displayNameStyles: L
  }), U = (0, $.Y)(i), B = (0, $.V)(i), [V, H] = l.useState(false);
  l.useEffect(() => {
    let e = false,
      t = () => {
        e !== F.A.isOpen() && ((e = F.A.isOpen()) || H(false))
      };
    return F.A.addChangeListener(t), () => F.A.removeChangeListener(t)
  }, []);
  let K = !w && b === en.lp.STREAM && P && (!B || I),
    W = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: l,
        muted: i
      } = e;
      return r ? d.TJE : n ? d.O1p : l ? d.cQT : t ? d.O1p : i ? d.z0P : null
    }({
      localMuted: I,
      serverMuted: N,
      serverDeafened: T,
      deafened: S,
      muted: C
    }),
    z = [];
  return a ? D === A.N.CALL_TILE && z.push((0, r.jsx)(ed, {
    channelId: _.id,
    participantId: g,
    hideWhenInactive: !V
  }, "stay-on-top")) : (z.push((0, r.jsx)(eu, {
    onClick: e => {
      e.stopPropagation(), H(true), E(e, true, en.GK.THREE_DOT)
    },
    tooltipText: ei.intl.string(ei.t["+1H47t"]),
    icon: d.jNK,
    hideWhenInactive: !V
  }, "options")), K && z.push((0, r.jsx)(eu, {
    onClick: R,
    tooltipText: I ? ei.intl.string(ei.t.YqAjXy) : ei.intl.string(ei.t.w4m945),
    icon: I ? d._RO : d.HKD,
    hideWhenInactive: !I && !V
  }, "mute"))), (0, r.jsxs)("div", {
    className: s()(es.MU, {
      [es.oE]: B,
      [es.Ol]: a
    }),
    children: [(0, r.jsx)("div", {
      className: s()(es.Ik, {
        [es.EX]: i < 195
      }),
      children: M || p === et.bb8.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: es.h5,
        children: (0, r.jsx)(d.OCo, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: s()(es.ns, es.WP),
        children: [(0, r.jsx)("div", {
          className: es.h5,
          children: (0, r.jsx)(d.OCo, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: es.Wk,
          children: ei.intl.string(ei.t.m2Hyj0)
        })]
      }) : null
    }), !U && (0, r.jsxs)("div", {
      className: s()(es.Qp, {
        [es.EX]: i < 195
      }),
      children: [(0, r.jsxs)(d.Text, {
        className: es.ac,
        color: "none",
        variant: B ? "text-sm/normal" : "text-md/normal",
        children: [null != W && b === en.lp.USER && (0, r.jsx)(W, {
          className: s()(es.fh, {
            [es.oE]: B
          }),
          size: "xs",
          color: "currentColor"
        }), h ? (0, r.jsx)("div", {
          className: es.Z5,
          children: (0, r.jsx)(d.KTN, {
            size: "lg",
            className: es.Q6,
            color: c.A.unsafe_rawColors.RED_400.css
          })
        }) : null, f ? (0, r.jsx)("div", {
          className: es.PP,
          children: (0, r.jsx)(d.G3N, {
            size: "lg",
            className: es.Q6
          })
        }) : null, t ? null : (0, r.jsx)(ec, {
          participantType: b,
          platform: v,
          className: s()(es.fh, {
            [es.oE]: B
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: s()(es.Wk, k),
          children: n
        }), x && (0, r.jsx)(u.m, {
          text: ei.intl.string(ei.t.ZEem6O),
          children: (0, r.jsx)(d.m5V, {
            className: es.vW,
            size: "xs",
            color: c.A.colors.TEXT_STRONG,
            "aria-label": ei.intl.string(ei.t.mR9cf3)
          })
        })]
      }), z.length > 0 ? (0, r.jsx)("div", {
        className: es._v,
        children: z
      }) : null]
    })]
  })
});
ep.displayName = "CallTileOverlay";
let eh = Chunk401901.$,
  ef = eo