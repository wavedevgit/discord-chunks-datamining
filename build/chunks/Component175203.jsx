/** Chunk was on 17534 **/
/** chunk id: 175203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => eg,
  Yl: () => ep
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
    var t, n, i, a, c, u, A, O, _, j, S, I, H, F;
    let K, Y, W, {
        participant: $,
        popoutType: eo,
        onDoubleClick: ec,
        onContextMenu: eu,
        onClick: ed,
        onMouseDown: ep,
        onKeyDown: eg,
        className: ef,
        style: em,
        containerStyle: eb,
        channel: eA,
        width: ey,
        onVideoResize: eO,
        inCall: e_ = false,
        selected: ej = false,
        noBorder: ex = false,
        noVideoRender: ev = false,
        focused: eE = false,
        blocked: eC = false,
        ignored: eS = false,
        fit: eI = v.$.CONTAIN,
        paused: eN = false,
        pulseSpeakingIndicator: eT = false,
        forceIdle: eP = false,
        controlsBottom: ew
      } = e,
      eR = l.useContext(w.vG) || eP,
      [eD, eL] = l.useState(false),
      eM = P.Q_.useSetting(),
      eG = (0, o.bG)([G.default], () => G.default.isStreamInfoOverlayEnabled),
      [ek, eU] = l.useState(false),
      eV = (0, o.bG)([L.default], () => L.default.getId()),
      eB = $.type === en.lp.ACTIVITY ? null : $.user,
      eH = null != (t = null == eB ? true : eB.id) ? t : null,
      [eF] = (0, f.A)($.type === en.lp.ACTIVITY ? [$.applicationId] : []),
      eK = (0, o.bG)([k.A], () => null != eH && k.A.isLocalVideoDisabled(eH, (0, m.A)($.type)), [eH, $.type]),
      eY = (0, o.bG)([k.A], () => null != eH ? k.A.getVideoToggleState(eH, (0, m.A)($.type)) : et.bb8.NONE, [eH, $.type]),
      eW = eY === et.bb8.AUTO_PROBING,
      {
        speaking: ez,
        latched: eq,
        ringing: eX,
        hasVideo: eJ
      } = (0, ee.A)($, eV),
      eQ = (0, o.bG)([T.A], () => null !== eH && T.A.isUserPlayingSounds(eH), [eH]),
      eZ = (O = eV, _ = $, j = eA.getGuildId(), K = _.type !== en.lp.ACTIVITY ? _.user.id : _.applicationId, Y = (0, o.cf)([B.A], () => {
        var e, t, n;
        let r = B.A.getVoiceState(j, K);
        return {
          muted: null != (e = null == r ? true : r.mute) && e,
          deafened: null != (t = null == r ? true : r.deaf) && t,
          suppressed: null != (n = null == r ? true : r.suppress) && n,
          voiceChannelId: null == r ? true : r.channelId
        }
      }), W = (0, o.cf)([k.A], () => {
        let e = (0, m.A)(_.type);
        return O === K ? {
          muted: false,
          deafened: false
        } : {
          muted: k.A.isLocalMute(K, e),
          localVideoDisabled: k.A.isLocalVideoDisabled(K, e),
          localVideoAutoDisabled: k.A.isLocalVideoAutoDisabled(K, e)
        }
      }, [O, _.type, K]), {
        serverMuted: Y.muted,
        serverDeafened: Y.deafened,
        suppressed: Y.suppressed,
        localMuted: W.muted,
        muted: null != (S = _.type === en.lp.USER && (null == (H = _.voiceState) ? true : H.isVoiceMuted())) && S,
        deafened: null != (I = _.type === en.lp.USER && (null == (F = _.voiceState) ? true : F.isVoiceDeafened())) && I
      }),
      e$ = $.type === en.lp.STREAM && eH === eV,
      e0 = (0, o.bG)([R.A], () => $.type === en.lp.USER && null != eH ? R.A.getEffectForUserId(eH) : null),
      e1 = (0, o.bG)([B.A], () => B.A.getVoicePlatformForChannel(eA.id, null != eH ? eH : et.dJq)),
      {
        showGameIcon: e9
      } = x.Ay.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: false
      }),
      e7 = (0, o.bG)([U.A], () => e9 && null != eH ? U.A.findActivity(eH, e => null != e.application_id && e.type === et.$pd.PLAYING) : null, [e9, eH]),
      e2 = (0, o.bG)([M.A], () => (null == e7 ? true : e7.application_id) != null ? M.A.getDetectableGame(e7.application_id) : null),
      e6 = (0, o.bG)([g.A], () => null != e2 && (null == e7 ? true : e7.application_id) != null ? g.A.getApplication(null == e7 ? true : e7.application_id) : true),
      e3 = (0, N.UF)({
        userId: eH,
        channelId: eA.id
      }),
      e5 = (0, N.DY)({
        streamKey: $.type === en.lp.STREAM ? $.id : null,
        channelId: eA.id
      }),
      e8 = l.useMemo(() => $.type === en.lp.STREAM ? null != e5 && e5 : $.type === en.lp.USER && null != e3 && e3, [e5, e3, $.type]);
    l.useEffect(() => {
      eL(eE)
    }, [eE]);
    let e4 = l.useCallback(() => {
        null != eH && h.A.toggleLocalMute(eH, el.x.STREAM)
      }, [eH]),
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
          onVideoResize: eO,
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
          inCall: e_,
          participant: $,
          popoutType: eo,
          fit: eI,
          onVideoResize: eO,
          paused: eN,
          selected: ej,
          width: ey,
          blocked: eC,
          ignored: eS,
          noVideoRender: ev || eW,
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
          activityName: null == eF ? true : eF.name
        });
        break;
      case en.lp.HIDDEN_STREAM:
        tr = (0, r.jsx)(Q.A, {
          participant: $,
          selected: ej,
          width: ey,
          fit: eI,
          onVideoResize: eO,
          paused: eN,
          popoutType: eo,
          focused: eE,
          idle: eR
        })
    }
    let ts = l.useRef(null),
      ta = (0, o.bG)([V.A], () => $.type === en.lp.USER ? V.A.getVoiceVolume($.id) : false / 0),
      to = (0, b.v)({
        isSpeaking: ez,
        voiceDb: ta,
        spreadDirection: b.O.INSET_ONLY,
        maxInnerSpreadRadius: 4
      }),
      tc = $.type === en.lp.STREAM ? d.kN9 : d.npA;
    return (0, r.jsx)(p.A, {
      section: et.JJy.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: s()(es.iE, {
          [es.DF]: eX
        }, ef),
        style: eb,
        onMouseEnter: () => {
          eU(true)
        },
        onMouseLeave: () => {
          eU(false)
        },
        children: (0, r.jsxs)(C.A, {
          shakeLocation: er.uD.VOICE_USER,
          isShaking: ez,
          className: es.Vs,
          children: [(0, r.jsx)(J.A, {
            ref: ts,
            className: s()(es.Vs, {
              [es.E7]: ex,
              [es.k_]: null == ed,
              [es.N7]: eR
            }),
            noBorder: ex,
            style: em,
            participantUserId: eH,
            children: (0, r.jsxs)(d.sqX, {
              "aria-label": ti,
              className: es.lG,
              onDoubleClick: tt,
              onContextMenu: e => tn(e, $.type === en.lp.STREAM),
              onClick: te,
              onMouseDown: ep,
              onKeyDown: eg,
              focusProps: {
                offset: 1
              },
              children: [null != e0 && null != eH ? (0, r.jsx)(D.A, {
                voiceChannelEffect: e0,
                onComplete: () => (0, R.a)(eH),
                userId: eH
              }) : null, $.type === en.lp.USER ? (0, r.jsx)("div", {
                className: es.nl,
                children: (0, r.jsx)(y.A, {
                  userId: eH,
                  channelId: eA.id,
                  guildId: eA.getGuildId(),
                  containerDimensions: {
                    width: null != (n = null == ts || null == (a = ts.current) ? true : a.clientWidth) ? n : 0,
                    height: null != (i = null == ts || null == (c = ts.current) ? true : c.clientHeight) ? i : 0
                  }
                })
              }) : null, tr, ex ? null : (0, r.jsx)("div", {
                className: es.hD,
                children: tl
              }), ej ? (0, r.jsx)("div", {
                className: es._Q,
                children: (0, r.jsx)(tc, {
                  size: "md",
                  color: "currentColor",
                  className: es.Dt
                })
              }) : null, ea.includes($.type) ? null : (0, r.jsx)(eh, (u = function(e) {
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
                inCall: e_,
                participantId: $.id,
                participantType: $.type,
                hasVideo: null != eJ && eJ
              }, eZ), A = A = {
                idle: eR,
                platform: e1,
                title: (0, z.A)(eA, $),
                blocked: eC,
                ignored: eS,
                localVideoDisabled: eK,
                videoToggleState: eY,
                hideAudioIcon: e$,
                onContextMenu: tn,
                onToggleMute: e4,
                participantUserId: eH,
                channel: eA,
                application: e6,
                secureFramesVerified: e8,
                isHovered: ek,
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
              }), u)), e_ && !ex ? (0, r.jsx)("div", {
                className: s()(es.PQ, {
                  [es.pU]: !eE && (eQ || null != e0),
                  [es.JB]: eq && !ez && !eE && !eQ
                }),
                style: eE || eQ ? true : to
              }) : null]
            })
          }), eM && eG && ek && (0, r.jsx)(q.A, {
            currentUserId: eV,
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
      return (0, r.jsx)(F.A, {
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
  } = e, s = l.useMemo(() => (0, O.A)(t, n), [t, n]), a = (0, o.bG)([S.A], () => S.A.getIsAlwaysOnTop(s)), c = l.useCallback(() => {
    I.setAlwaysOnTop(s, !a)
  }, [s, a]);
  return Y.isPlatformEmbedded && W.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS) ? (0, r.jsx)(eu, {
    onClick: c,
    tooltipText: a ? ei.intl.string(ei.t.YdyDM9) : ei.intl.string(ei.t.ZVGHwP),
    icon: a ? d.hl9 : d.qgw,
    hideWhenInactive: i
  }) : null
}
eo.displayName = "CallTile";
let eh = Chunk64700.memo(e => {
  let {
    idle: t,
    title: n,
    width: i,
    focused: a,
    videoToggleState: h,
    blocked: p,
    ignored: g,
    participantId: f,
    participantType: b,
    participantUserId: y,
    channel: O,
    platform: x,
    secureFramesVerified: v,
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
  } = e, L = (0, o.bG)([k.A], () => null != y && k.A.isLocalVideoAutoDisabled(y, (0, m.A)(b)), [y, b]), M = (0, _.A)({
    userId: y,
    guildId: O.getGuildId()
  }), G = (0, j.a)({
    displayNameStyles: M
  }), U = (0, $.Y)(i), V = (0, $.V)(i), [B, F] = l.useState(false);
  l.useEffect(() => {
    let e = false,
      t = () => {
        e !== H.A.isOpen() && ((e = H.A.isOpen()) || F(false))
      };
    return H.A.addChangeListener(t), () => H.A.removeChangeListener(t)
  }, []);
  let K = !w && b === en.lp.STREAM && P && (!V || I),
    Y = function(e) {
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
    W = [];
  return a ? D === A.N.CALL_TILE && W.push((0, r.jsx)(ed, {
    channelId: O.id,
    participantId: f,
    hideWhenInactive: !B
  }, "stay-on-top")) : (W.push((0, r.jsx)(eu, {
    onClick: e => {
      e.stopPropagation(), F(true), E(e, true, en.GK.THREE_DOT)
    },
    tooltipText: ei.intl.string(ei.t["+1H47t"]),
    icon: d.jNK,
    hideWhenInactive: !B
  }, "options")), K && W.push((0, r.jsx)(eu, {
    onClick: R,
    tooltipText: I ? ei.intl.string(ei.t.YqAjXy) : ei.intl.string(ei.t.w4m945),
    icon: I ? d._RO : d.HKD,
    hideWhenInactive: !I && !B
  }, "mute"))), (0, r.jsxs)("div", {
    className: s()(es.MU, {
      [es.oE]: V,
      [es.Ol]: a
    }),
    children: [(0, r.jsx)("div", {
      className: s()(es.Ik, {
        [es.EX]: i < 195
      }),
      children: L || h === et.bb8.AUTO_PROBING ? t ? (0, r.jsx)("div", {
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
        variant: V ? "text-sm/normal" : "text-md/normal",
        children: [null != Y && b === en.lp.USER && (0, r.jsx)(Y, {
          className: s()(es.fh, {
            [es.oE]: V
          }),
          size: "xs",
          color: "currentColor"
        }), p ? (0, r.jsx)("div", {
          className: es.Z5,
          children: (0, r.jsx)(d.KTN, {
            size: "lg",
            className: es.Q6,
            color: c.A.unsafe_rawColors.RED_400.css
          })
        }) : null, g ? (0, r.jsx)("div", {
          className: es.PP,
          children: (0, r.jsx)(d.G3N, {
            size: "lg",
            className: es.Q6
          })
        }) : null, t ? null : (0, r.jsx)(ec, {
          participantType: b,
          platform: x,
          className: s()(es.fh, {
            [es.oE]: V
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: s()(es.Wk, G),
          children: n
        }), v && (0, r.jsx)(u.m, {
          text: ei.intl.string(ei.t.ZEem6O),
          children: (0, r.jsx)(d.m5V, {
            className: es.vW,
            size: "xs",
            color: c.A.colors.TEXT_STRONG,
            "aria-label": ei.intl.string(ei.t.mR9cf3)
          })
        })]
      }), W.length > 0 ? (0, r.jsx)("div", {
        className: es._v,
        children: W
      }) : null]
    })]
  })
});
eh.displayName = "CallTileOverlay";
let ep = Chunk401901.$,
  eg = eo