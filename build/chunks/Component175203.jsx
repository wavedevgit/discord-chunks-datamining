/** Chunk was on 67564 **/
/** chunk id: 175203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => eh,
  Yl: () => ep
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let es = [Chunk806931.lp.ACTIVITY],
  ea = Chunk64700.memo(e => {
    var t, n, i, o, c, b, y, _, O, C, S, V, F, H;
    let K, W, Z, {
        participant: ea,
        popoutType: eo,
        onDoubleClick: ec,
        onContextMenu: eu,
        onClick: ep,
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
        fit: eI = v.$.CONTAIN,
        paused: eN = false,
        pulseSpeakingIndicator: eT = false,
        forceIdle: eP = false,
        controlsBottom: ew
      } = e,
      eR = l.useContext(P.vG) || eP,
      [eD, eM] = l.useState(false),
      eL = T.Q_.useSetting(),
      ek = (0, a.bG)([L.default], () => L.default.isStreamInfoOverlayEnabled),
      [eG, eU] = l.useState(false),
      eB = (0, a.bG)([D.default], () => D.default.getId()),
      eV = ea.type === et.lp.ACTIVITY ? null : ea.user,
      eF = null != (t = null == eV ? true : eV.id) ? t : null,
      [eH] = (0, f.A)(ea.type === et.lp.ACTIVITY ? [ea.applicationId] : []),
      eK = (0, a.bG)([k.A], () => null != eF && k.A.isLocalVideoDisabled(eF, (0, g.A)(ea.type)), [eF, ea.type]),
      eW = (0, a.bG)([k.A], () => null != eF ? k.A.getVideoToggleState(eF, (0, g.A)(ea.type)) : ee.bb8.NONE, [eF, ea.type]),
      ez = eW === ee.bb8.AUTO_PROBING,
      {
        speaking: eY,
        latched: eq,
        ringing: eX,
        hasVideo: eJ
      } = (0, $.A)(ea, eB),
      eQ = (0, a.bG)([N.A], () => null !== eF && N.A.isUserPlayingSounds(eF), [eF]),
      eZ = (_ = eB, O = ea, C = eA.getGuildId(), K = O.type !== et.lp.ACTIVITY ? O.user.id : O.applicationId, W = (0, a.cf)([B.A], () => {
        var e, t, n;
        let r = B.A.getVoiceState(C, K);
        return {
          muted: null != (e = null == r ? true : r.mute) && e,
          deafened: null != (t = null == r ? true : r.deaf) && t,
          suppressed: null != (n = null == r ? true : r.suppress) && n,
          voiceChannelId: null == r ? true : r.channelId
        }
      }), Z = (0, a.cf)([k.A], () => {
        let e = (0, g.A)(O.type);
        return _ === K ? {
          muted: false,
          deafened: false
        } : {
          muted: k.A.isLocalMute(K, e),
          localVideoDisabled: k.A.isLocalVideoDisabled(K, e),
          localVideoAutoDisabled: k.A.isLocalVideoAutoDisabled(K, e)
        }
      }, [_, O.type, K]), {
        serverMuted: W.muted,
        serverDeafened: W.deafened,
        suppressed: W.suppressed,
        localMuted: Z.muted,
        muted: null != (S = O.type === et.lp.USER && (null == (F = O.voiceState) ? true : F.isVoiceMuted())) && S,
        deafened: null != (V = O.type === et.lp.USER && (null == (H = O.voiceState) ? true : H.isVoiceDeafened())) && V
      }),
      e$ = ea.type === et.lp.STREAM && eF === eB,
      e0 = (0, a.bG)([w.A], () => ea.type === et.lp.USER && null != eF ? w.A.getEffectForUserId(eF) : null),
      e1 = (0, a.bG)([B.A], () => B.A.getVoicePlatformForChannel(eA.id, null != eF ? eF : ee.dJq)),
      {
        showGameIcon: e9
      } = j.Ay.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: false
      }),
      e7 = (0, a.bG)([G.A], () => e9 && null != eF ? G.A.findActivity(eF, e => null != e.application_id && e.type === ee.$pd.PLAYING) : null, [e9, eF]),
      e2 = (0, a.bG)([M.A], () => (null == e7 ? true : e7.application_id) != null ? M.A.getDetectableGame(e7.application_id) : null),
      e6 = (0, a.bG)([h.A], () => null != e2 && (null == e7 ? true : e7.application_id) != null ? h.A.getApplication(null == e7 ? true : e7.application_id) : true),
      e3 = (0, I.UF)({
        userId: eF,
        channelId: eA.id
      }),
      e5 = (0, I.DY)({
        streamKey: ea.type === et.lp.STREAM ? ea.id : null,
        channelId: eA.id
      }),
      e8 = l.useMemo(() => ea.type === et.lp.STREAM ? null != e5 && e5 : ea.type === et.lp.USER && null != e3 && e3, [e5, e3, ea.type]);
    l.useEffect(() => {
      eM(eE)
    }, [eE]);
    let e4 = l.useCallback(() => {
        null != eF && d.A.toggleLocalMute(eF, er.x.STREAM)
      }, [eF]),
      te = l.useCallback(e => {
        null == ep || ep(ea, e)
      }, [ep, ea]),
      tt = l.useCallback(e => {
        null == ec || ec(ea, e)
      }, [ec, ea]),
      tn = l.useCallback((e, t, n) => {
        null == eu || eu(ea, e, t, n)
      }, [eu, ea]),
      tr = null,
      tl = null,
      ti = "";
    switch (ea.type) {
      case et.lp.STREAM:
        tr = (0, r.jsx)(J.A, {
          participant: ea,
          selected: ej,
          popoutType: eo,
          width: ey,
          fit: eI,
          onVideoResize: e_,
          paused: eN,
          focused: eE,
          idle: eR,
          controlsBottom: ew
        }), tl = (0, r.jsx)(J.D, {
          participant: ea,
          selected: ej,
          width: ey,
          focused: eE,
          idle: eR,
          premiumIndicator: false
        }), ti = el.intl.formatToPlainString(el.t.gHPz3Q, {
          streamerName: ea.user.username
        });
        break;
      case et.lp.USER:
        tr = (0, r.jsx)(Q.A, {
          channel: eA,
          inCall: eO,
          participant: ea,
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
        }), tl = (0, r.jsx)(Q.s, {
          participant: ea,
          channelId: eA.id
        }), ti = el.intl.formatToPlainString(el.t["iC/x/Q"], {
          username: ea.user.username
        });
        break;
      case et.lp.ACTIVITY:
        tr = (0, r.jsx)(q.Ay, {
          interactible: eE,
          participant: ea,
          selected: ej,
          channel: eA,
          width: ey
        }), ti = el.intl.formatToPlainString(el.t.YCvOsO, {
          activityName: null == eH ? true : eH.name
        });
        break;
      case et.lp.HIDDEN_STREAM:
        tr = (0, r.jsx)(J.A, {
          participant: ea,
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
      ta = (0, a.bG)([U.A], () => ea.type === et.lp.USER ? U.A.getVoiceVolume(ea.id) : false / 0),
      to = (0, m.v)({
        isSpeaking: eY,
        voiceDb: ta,
        spreadDirection: m.O.INSET_ONLY,
        maxInnerSpreadRadius: 4
      }),
      tc = ea.type === et.lp.STREAM ? u.kN9 : u.npA;
    return (0, r.jsx)(p.A, {
      section: ee.JJy.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: s()(ei.iE, {
          [ei.DF]: eX
        }, eg),
        style: eb,
        onMouseEnter: () => {
          eU(true)
        },
        onMouseLeave: () => {
          eU(false)
        },
        children: (0, r.jsxs)(E.A, {
          shakeLocation: en.uD.VOICE_USER,
          isShaking: eY,
          className: ei.Vs,
          children: [(0, r.jsx)(X.A, {
            ref: ts,
            className: s()(ei.Vs, {
              [ei.E7]: ev,
              [ei.k_]: null == ep,
              [ei.N7]: eR
            }),
            noBorder: ev,
            style: em,
            participantUserId: eF,
            children: (0, r.jsxs)(u.sqX, {
              "aria-label": ti,
              className: ei.lG,
              onDoubleClick: tt,
              onContextMenu: e => tn(e, ea.type === et.lp.STREAM),
              onClick: te,
              onMouseDown: eh,
              onKeyDown: ef,
              focusProps: {
                offset: 1
              },
              children: [null != e0 && null != eF ? (0, r.jsx)(R.A, {
                voiceChannelEffect: e0,
                onComplete: () => (0, w.a)(eF),
                userId: eF
              }) : null, ea.type === et.lp.USER ? (0, r.jsx)("div", {
                className: ei.nl,
                children: (0, r.jsx)(A.A, {
                  userId: eF,
                  channelId: eA.id,
                  guildId: eA.getGuildId(),
                  containerDimensions: {
                    width: null != (n = null == ts || null == (o = ts.current) ? true : o.clientWidth) ? n : 0,
                    height: null != (i = null == ts || null == (c = ts.current) ? true : c.clientHeight) ? i : 0
                  }
                })
              }) : null, tr, ev ? null : (0, r.jsx)("div", {
                className: ei.hD,
                children: tl
              }), ej ? (0, r.jsx)("div", {
                className: ei._Q,
                children: (0, r.jsx)(tc, {
                  size: "md",
                  color: "currentColor",
                  className: ei.Dt
                })
              }) : null, es.includes(ea.type) ? null : (0, r.jsx)(ed, (b = function(e) {
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
                participantId: ea.id,
                participantType: ea.type,
                hasVideo: null != eJ && eJ
              }, eZ), y = y = {
                idle: eR,
                platform: e1,
                title: (0, z.A)(eA, ea),
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
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(y)).forEach(function(e) {
                Object.defineProperty(b, e, Object.getOwnPropertyDescriptor(y, e))
              }), b)), eO && !ev ? (0, r.jsx)("div", {
                className: s()(ei.PQ, {
                  [ei.pU]: !eE && (eQ || null != e0),
                  [ei.JB]: eq && !eY && !eE && !eQ
                }),
                style: eE || eQ ? true : to
              }) : null]
            })
          }), eL && ek && eG && (0, r.jsx)(Y.A, {
            currentUserId: eB,
            participant: ea
          }), (0, r.jsx)(x.A, {
            isFiring: eD,
            callTileRef: ts.current
          })]
        })
      })
    })
  });

function eo(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === et.lp.STREAM) return n === et.J7.XBOX ? (0, r.jsx)(H.A, {
    className: l
  }) : (0, r.jsx)(u.kN9, {
    size: "md",
    color: "currentColor",
    className: l
  });
  switch (n) {
    case et.J7.MOBILE:
      return (0, r.jsx)(u.u6o, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    case et.J7.XBOX:
      return (0, r.jsx)(H.A, {
        className: l
      });
    case et.J7.PLAYSTATION:
      return (0, r.jsx)(F.A, {
        className: l
      });
    default:
      return null
  }
}

function ec(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: l,
    onClick: i
  } = e;
  return (0, r.jsx)(c.m, {
    text: n,
    children: (0, r.jsx)("div", {
      className: s()(ei.V7, {
        [ei.kl]: l
      }),
      children: (0, r.jsx)(u.K0, {
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

function eu(e) {
  let {
    channelId: t,
    participantId: n,
    hideWhenInactive: i
  } = e, s = l.useMemo(() => (0, y.A)(t, n), [t, n]), o = (0, a.bG)([C.A], () => C.A.getIsAlwaysOnTop(s)), c = l.useCallback(() => {
    S.setAlwaysOnTop(s, !o)
  }, [s, o]);
  return K.isPlatformEmbedded && W.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS) ? (0, r.jsx)(ec, {
    onClick: c,
    tooltipText: o ? el.intl.string(el.t.YdyDM9) : el.intl.string(el.t.ZVGHwP),
    icon: o ? u.hl9 : u.qgw,
    hideWhenInactive: i
  }) : null
}
ea.displayName = "CallTile";
let ed = Chunk64700.memo(e => {
  let {
    idle: t,
    title: n,
    width: i,
    focused: d,
    videoToggleState: p,
    blocked: h,
    ignored: f,
    participantId: m,
    participantType: A,
    participantUserId: y,
    channel: j,
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
  } = e, M = (0, a.bG)([k.A], () => null != y && k.A.isLocalVideoAutoDisabled(y, (0, g.A)(A)), [y, A]), L = (0, _.A)({
    userId: y,
    guildId: j.getGuildId()
  }), G = (0, O.a)({
    displayNameStyles: L
  }), U = (0, Z.Y)(i), B = (0, Z.V)(i), [F, H] = l.useState(false);
  l.useEffect(() => {
    let e = false,
      t = () => {
        e !== V.A.isOpen() && ((e = V.A.isOpen()) || H(false))
      };
    return V.A.addChangeListener(t), () => V.A.removeChangeListener(t)
  }, []);
  let K = !w && A === et.lp.STREAM && P && (!B || I),
    W = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: l,
        muted: i
      } = e;
      return r ? u.TJE : n ? u.O1p : l ? u.cQT : t ? u.O1p : i ? u.z0P : null
    }({
      localMuted: I,
      serverMuted: N,
      serverDeafened: T,
      deafened: S,
      muted: C
    }),
    z = [];
  return d ? D === b.N.CALL_TILE && z.push((0, r.jsx)(eu, {
    channelId: j.id,
    participantId: m,
    hideWhenInactive: !F
  }, "stay-on-top")) : (z.push((0, r.jsx)(ec, {
    onClick: e => {
      e.stopPropagation(), H(true), E(e, true, et.GK.THREE_DOT)
    },
    tooltipText: el.intl.string(el.t["+1H47t"]),
    icon: u.jNK,
    hideWhenInactive: !F
  }, "options")), K && z.push((0, r.jsx)(ec, {
    onClick: R,
    tooltipText: I ? el.intl.string(el.t.YqAjXy) : el.intl.string(el.t.w4m945),
    icon: I ? u._RO : u.HKD,
    hideWhenInactive: !I && !F
  }, "mute"))), (0, r.jsxs)("div", {
    className: s()(ei.MU, {
      [ei.oE]: B,
      [ei.Ol]: d
    }),
    children: [(0, r.jsx)("div", {
      className: s()(ei.Ik, {
        [ei.EX]: i < 195
      }),
      children: M || p === ee.bb8.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: ei.h5,
        children: (0, r.jsx)(u.OCo, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: s()(ei.ns, ei.WP),
        children: [(0, r.jsx)("div", {
          className: ei.h5,
          children: (0, r.jsx)(u.OCo, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: ei.Wk,
          children: el.intl.string(el.t.m2Hyj0)
        })]
      }) : null
    }), !U && (0, r.jsxs)("div", {
      className: s()(ei.Qp, {
        [ei.EX]: i < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: ei.ac,
        color: "none",
        variant: B ? "text-sm/normal" : "text-md/normal",
        children: [null != W && A === et.lp.USER && (0, r.jsx)(W, {
          className: s()(ei.fh, {
            [ei.oE]: B
          }),
          size: "xs",
          color: "currentColor"
        }), h ? (0, r.jsx)("div", {
          className: ei.Z5,
          children: (0, r.jsx)(u.KTN, {
            size: "lg",
            className: ei.Q6,
            color: o.A.unsafe_rawColors.RED_400.css
          })
        }) : null, f ? (0, r.jsx)("div", {
          className: ei.PP,
          children: (0, r.jsx)(u.G3N, {
            size: "lg",
            className: ei.Q6
          })
        }) : null, t ? null : (0, r.jsx)(eo, {
          participantType: A,
          platform: v,
          className: s()(ei.fh, {
            [ei.oE]: B
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: s()(ei.Wk, G),
          children: n
        }), x && (0, r.jsx)(c.m, {
          text: el.intl.string(el.t.ZEem6O),
          children: (0, r.jsx)(u.m5V, {
            className: ei.vW,
            size: "xs",
            color: o.A.colors.TEXT_STRONG,
            "aria-label": el.intl.string(el.t.mR9cf3)
          })
        })]
      }), z.length > 0 ? (0, r.jsx)("div", {
        className: ei._v,
        children: z
      }) : null]
    })]
  })
});
ed.displayName = "CallTileOverlay";
let ep = Chunk401901.$,
  eh = ea