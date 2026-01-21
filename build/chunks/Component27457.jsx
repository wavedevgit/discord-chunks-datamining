/** Chunk was on 82124 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => ep,
  ZP: () => ef
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk414910 = require("./414910.js"),
  Chunk538870 = require("./538870.js"),
  Chunk598006 = require("./598006.js"),
  Chunk415635 = require("./415635.jsx"),
  Chunk7291 = require("./7291.js"),
  Chunk386725 = require("./386725.js"),
  Chunk7284 = require("./7284.js"),
  Chunk649739 = require("./649739.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk936847 = require("./936847.jsx"),
  Chunk512384 = require("./512384.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk788983 = require("./788983.js"),
  Chunk210975 = require("./210975.js"),
  Chunk763296 = require("./763296.js"),
  Chunk695346 = require("./695346.js"),
  Chunk937995 = require("./937995.jsx"),
  Chunk456631 = require("./456631.js"),
  Chunk274459 = require("./274459.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk404577 = require("./404577.js"),
  Chunk857192 = require("./857192.js"),
  Chunk131951 = require("./131951.js"),
  Chunk158776 = require("./158776.js"),
  Chunk606304 = require("./606304.js"),
  Chunk979651 = require("./979651.js"),
  Chunk574254 = require("./574254.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk584729 = require("./584729.js"),
  Chunk334374 = require("./334374.jsx"),
  Chunk849171 = require("./849171.jsx"),
  Chunk607187 = require("./607187.jsx"),
  Chunk833519 = require("./833519.jsx"),
  Chunk462061 = require("./462061.jsx"),
  Chunk623825 = require("./623825.js"),
  Chunk839662 = require("./839662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk524484 = require("./524484.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858329 = require("./858329.js");
let ea = [Chunk354459.fO.ACTIVITY],
  eo = Chunk473749.memo(e => {
    var t, n, l, s, c, b, v;
    let {
      participant: O,
      popoutType: j,
      onDoubleClick: _,
      onContextMenu: I,
      onClick: B,
      onMouseDown: F,
      onKeyDown: H,
      className: V,
      style: z,
      containerStyle: J,
      channel: eo,
      width: es,
      onVideoResize: ec,
      inCall: eu = false,
      selected: ep = false,
      noBorder: ef = false,
      noVideoRender: eh = false,
      focused: eg = false,
      blocked: em = false,
      ignored: eb = false,
      fit: ey = C.L.CONTAIN,
      paused: ev = false,
      pulseSpeakingIndicator: eO = false,
      forceIdle: ej = false,
      controlsBottom: ex
    } = e, eC = i.useContext(T.h9) || ej, [eE, eS] = i.useState(false), e_ = N.Sb.useSetting(), eI = (0, o.e7)([M.default], () => M.default.isStreamInfoOverlayEnabled), [eP, eZ] = i.useState(false), eN = (0, o.e7)([R.default], () => R.default.getId()), eT = O.type === et.fO.ACTIVITY ? null : O.user, eA = null != (l = null == eT ? true : eT.id) ? l : null, [ew] = (0, h.Z)(O.type === et.fO.ACTIVITY ? [O.applicationId] : []), eR = (0, o.e7)([k.Z], () => null != eA && k.Z.isLocalVideoDisabled(eA, (0, g.Z)(O.type)), [eA, O.type]), eD = (0, o.e7)([k.Z], () => null != eA ? k.Z.getVideoToggleState(eA, (0, g.Z)(O.type)) : ee.ZUi.NONE, [eA, O.type]), eM = eD === ee.ZUi.AUTO_PROBING, {
      speaking: ek,
      latched: eL,
      ringing: eU,
      hasVideo: eG
    } = (0, $.Z)(O, eN), eB = (0, o.e7)([Z.Z], () => null !== eA && Z.Z.isUserPlayingSounds(eA), [eA]), eF = function(e, t, n) {
      var r, i, l, a;
      let s = t.type !== et.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, o.cj)([G.Z], () => {
          var e, t, r;
          let i = G.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (r = null == i ? true : i.suppress) && r,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, o.cj)([k.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === s ? {
            muted: false,
            deafened: false
          } : {
            muted: k.Z.isLocalMute(s, n),
            localVideoDisabled: k.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: k.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (l = t.type === et.fO.USER && (null == (r = t.voiceState) ? true : r.isVoiceMuted())) && l,
        deafened: null != (a = t.type === et.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && a
      }
    }(eN, O, eo.getGuildId()), eH = O.type === et.fO.STREAM && eA === eN, eV = (0, o.e7)([A.Z], () => O.type === et.fO.USER && null != eA ? A.Z.getEffectForUserId(eA) : null), ez = (0, o.e7)([G.Z], () => G.Z.getVoicePlatformForChannel(eo.id, null != eA ? eA : ee.lds)), {
      showGameIcon: eW
    } = x.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eK = (0, o.e7)([L.Z], () => eW && null != eA ? L.Z.findActivity(eA, e => null != e.application_id && e.type === ee.IIU.PLAYING) : null, [eW, eA]), eY = (0, o.e7)([D.Z], () => (null == eK ? true : eK.application_id) != null ? D.Z.getDetectableGame(eK.application_id) : null), eq = (0, o.e7)([f.Z], () => null != eY && (null == eK ? true : eK.application_id) != null ? f.Z.getApplication(null == eK ? true : eK.application_id) : true), eX = (0, P.wV)({
      userId: eA,
      channelId: eo.id
    }), eQ = (0, P.zU)({
      streamKey: O.type === et.fO.STREAM ? O.id : null,
      channelId: eo.id
    }), eJ = i.useMemo(() => O.type === et.fO.STREAM ? null != eQ && eQ : O.type === et.fO.USER && null != eX && eX, [eQ, eX, O.type]);
    i.useEffect(() => {
      eS(eg)
    }, [eg]);
    let e$ = i.useCallback(() => {
        null != eA && d.Z.toggleLocalMute(eA, er.Yn.STREAM)
      }, [eA]),
      e0 = i.useCallback(e => {
        null == B || B(O, e)
      }, [B, O]),
      e1 = i.useCallback(e => {
        null == _ || _(O, e)
      }, [_, O]),
      e4 = i.useCallback((e, t, n) => {
        null == I || I(O, e, t, n)
      }, [I, O]),
      e3 = null,
      e7 = null,
      e8 = "";
    switch (O.type) {
      case et.fO.STREAM:
        e3 = (0, r.jsx)(X.Z, {
          participant: O,
          selected: ep,
          popoutType: j,
          width: es,
          fit: ey,
          onVideoResize: ec,
          paused: ev,
          focused: eg,
          idle: eC,
          controlsBottom: ex
        }), e7 = (0, r.jsx)(X._, {
          participant: O,
          selected: ep,
          width: es,
          focused: eg,
          idle: eC,
          premiumIndicator: false
        }), e8 = ei.intl.formatToPlainString(ei.t.gHPz3Q, {
          streamerName: O.user.username
        });
        break;
      case et.fO.USER:
        e3 = (0, r.jsx)(Q.Z, {
          channel: eo,
          inCall: eu,
          participant: O,
          popoutType: j,
          fit: ey,
          onVideoResize: ec,
          paused: ev,
          selected: ep,
          width: es,
          blocked: em,
          ignored: eb,
          noVideoRender: eh || eM,
          pulseSpeakingIndicator: eO
        }), e7 = (0, r.jsx)(Q.T, {
          participant: O,
          channelId: eo.id
        }), e8 = ei.intl.formatToPlainString(ei.t["iC/x/Q"], {
          username: O.user.username
        });
        break;
      case et.fO.ACTIVITY:
        e3 = (0, r.jsx)(Y.ZP, {
          interactible: eg,
          participant: O,
          selected: ep,
          channel: eo,
          width: es
        }), e8 = ei.intl.formatToPlainString(ei.t.YCvOsO, {
          activityName: null == ew ? true : ew.name
        });
        break;
      case et.fO.HIDDEN_STREAM:
        e3 = (0, r.jsx)(X.Z, {
          participant: O,
          selected: ep,
          width: es,
          fit: ey,
          onVideoResize: ec,
          paused: ev,
          popoutType: j,
          focused: eg,
          idle: eC
        })
    }
    let e2 = i.useRef(null),
      e5 = (0, o.e7)([U.Z], () => O.type === et.fO.USER ? U.Z.getVoiceVolume(O.id) : false / 0),
      e6 = (0, m._)({
        isSpeaking: ek,
        voiceDb: e5,
        spreadDirection: m.h.INSET_ONLY,
        maxInnerSpreadRadius: 4
      }),
      e9 = O.type === et.fO.STREAM ? u.pzj : u.Odl;
    return (0, r.jsx)(p.Z, {
      section: ee.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: a()(el.wrapper, {
          [el.ringing]: eU
        }, V),
        style: J,
        onMouseEnter: () => {
          eZ(true)
        },
        onMouseLeave: () => {
          eZ(false)
        },
        children: (0, r.jsxs)(S.Z, {
          shakeLocation: en.oZ.VOICE_USER,
          isShaking: ek,
          className: el.tile,
          children: [(0, r.jsx)(q.Z, {
            ref: e2,
            className: a()(el.tile, {
              [el.noBorder]: ef,
              [el.noInteraction]: null == B,
              [el.idle]: eC
            }),
            noBorder: ef,
            style: z,
            participantUserId: eA,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": e8,
              className: el.tileChild,
              onDoubleClick: e1,
              onContextMenu: e => e4(e, O.type === et.fO.STREAM),
              onClick: e0,
              onMouseDown: F,
              onKeyDown: H,
              focusProps: {
                offset: 1
              },
              children: [null != eV && null != eA ? (0, r.jsx)(w.Z, {
                voiceChannelEffect: eV,
                onComplete: () => (0, A.H)(eA),
                userId: eA
              }) : null, O.type === et.fO.USER ? (0, r.jsx)("div", {
                className: el.voiceChannelEffectsContainer,
                children: (0, r.jsx)(y.Z, {
                  userId: eA,
                  channelId: eo.id,
                  guildId: eo.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e2 || null == (t = e2.current) ? true : t.clientWidth) ? s : 0,
                    height: null != (c = null == e2 || null == (n = e2.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e3, ef ? null : (0, r.jsx)("div", {
                className: el.indicators,
                children: e7
              }), ep ? (0, r.jsx)("div", {
                className: el.selectedScreen,
                children: (0, r.jsx)(e9, {
                  size: "md",
                  color: "currentColor",
                  className: el.selectedIcon
                })
              }) : null, ea.includes(O.type) ? null : (0, r.jsx)(ed, (b = function(e) {
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
                focused: eg,
                width: es,
                inCall: eu,
                participantId: O.id,
                participantType: O.type,
                hasVideo: null != eG && eG
              }, eF), v = v = {
                idle: eC,
                platform: ez,
                title: (0, W.Z)(eo, O),
                blocked: em,
                ignored: eb,
                localVideoDisabled: eR,
                videoToggleState: eD,
                hideAudioIcon: eH,
                onContextMenu: e4,
                onToggleMute: e$,
                participantUserId: eA,
                channel: eo,
                application: eq,
                secureFramesVerified: eJ,
                isHovered: eP,
                popoutType: j
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(v)).forEach(function(e) {
                Object.defineProperty(b, e, Object.getOwnPropertyDescriptor(v, e))
              }), b)), eu && !ef ? (0, r.jsx)("div", {
                className: a()(el.border, {
                  [el.voiceChannelEffect]: !eg && (eB || null != eV),
                  [el.latchedNotSpeaking]: eL && !ek && !eg && !eB
                }),
                style: eg || eB ? true : e6
              }) : null]
            })
          }), e_ && eI && eP && (0, r.jsx)(K.Z, {
            currentUserId: eN,
            participant: O
          }), (0, r.jsx)(E.Z, {
            isFiring: eE,
            callTileRef: e2.current
          })]
        })
      })
    })
  });

function es(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === et.fO.STREAM) return n === et.wR.XBOX ? (0, r.jsx)(H.Z, {
    className: i
  }) : (0, r.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case et.wR.MOBILE:
      return (0, r.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case et.wR.XBOX:
      return (0, r.jsx)(H.Z, {
        className: i
      });
    case et.wR.PLAYSTATION:
      return (0, r.jsx)(F.Z, {
        className: i
      });
    default:
      return null
  }
}

function ec(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: l
  } = e;
  return (0, r.jsx)(c.u, {
    text: n,
    children: (0, r.jsx)("div", {
      className: a()(el.overlayButton, {
        [el.hideWhenInactive]: i
      }),
      children: (0, r.jsx)(u.hU, {
        size: "sm",
        variant: "overlay-secondary",
        onClick: e => {
          e.stopPropagation(), l(e)
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
    hideWhenInactive: l
  } = e, a = i.useMemo(() => (0, v.Z)(t, n), [t, n]), s = (0, o.e7)([_.Z], () => _.Z.getIsAlwaysOnTop(a)), c = i.useCallback(() => {
    I.setAlwaysOnTop(a, !s)
  }, [a, s]);
  return V.isPlatformEmbedded && z.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS) ? (0, r.jsx)(ec, {
    onClick: c,
    tooltipText: s ? ei.intl.string(ei.t.YdyDM9) : ei.intl.string(ei.t.ZVGHwP),
    icon: s ? u.QVc : u.k5M,
    hideWhenInactive: l
  }) : null
}
eo.displayName = "CallTile";
let ed = Chunk473749.memo(e => {
  let {
    idle: t,
    title: n,
    width: l,
    focused: d,
    videoToggleState: p,
    blocked: f,
    ignored: h,
    participantId: m,
    participantType: y,
    participantUserId: v,
    channel: x,
    platform: C,
    secureFramesVerified: E,
    onContextMenu: S,
    muted: _,
    deafened: I,
    localMuted: P,
    serverMuted: Z,
    serverDeafened: N,
    hasVideo: T,
    hideAudioIcon: A,
    onToggleMute: w,
    popoutType: R
  } = e, D = (0, o.e7)([k.Z], () => null != v && k.Z.isLocalVideoAutoDisabled(v, (0, g.Z)(y)), [v, y]), M = (0, O.Z)({
    userId: v,
    guildId: x.getGuildId()
  }), L = (0, j.j)({
    displayNameStyles: M
  }), U = (0, J.N)(l), G = (0, J.K)(l), [F, H] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== B.Z.isOpen() && ((e = B.Z.isOpen()) || H(false))
      };
    return B.Z.addChangeListener(t), () => B.Z.removeChangeListener(t)
  }, []);
  let V = !A && y === et.fO.STREAM && T && (!G || P),
    z = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: l
      } = e;
      return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null
    }({
      localMuted: P,
      serverMuted: Z,
      serverDeafened: N,
      deafened: I,
      muted: _
    }),
    W = [];
  return d ? R === b.P.CALL_TILE && W.push((0, r.jsx)(eu, {
    channelId: x.id,
    participantId: m,
    hideWhenInactive: !F
  }, "stay-on-top")) : (W.push((0, r.jsx)(ec, {
    onClick: e => {
      e.stopPropagation(), H(true), S(e, true, et.A5.THREE_DOT)
    },
    tooltipText: ei.intl.string(ei.t["+1H47t"]),
    icon: u.xhG,
    hideWhenInactive: !F
  }, "options")), V && W.push((0, r.jsx)(ec, {
    onClick: w,
    tooltipText: P ? ei.intl.string(ei.t.YqAjXy) : ei.intl.string(ei.t.w4m945),
    icon: P ? u.OyP : u.gj8,
    hideWhenInactive: !P && !F
  }, "mute"))), (0, r.jsxs)("div", {
    className: a()(el.overlayContainer, {
      [el.compact]: G,
      [el.noPointerEvents]: d
    }),
    children: [(0, r.jsx)("div", {
      className: a()(el.overlayTop, {
        [el.small]: l < 195
      }),
      children: D || p === ee.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: el.status,
        children: (0, r.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: a()(el.overlayTitle, el.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: el.status,
          children: (0, r.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: el.overlayTitleText,
          children: ei.intl.string(ei.t.m2Hyj0)
        })]
      }) : null
    }), !U && (0, r.jsxs)("div", {
      className: a()(el.overlayBottom, {
        [el.small]: l < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: el.experimentOverlayTitle,
        color: "none",
        variant: G ? "text-sm/normal" : "text-md/normal",
        children: [null != z && y === et.fO.USER && (0, r.jsx)(z, {
          className: a()(el.experimentTitleIcon, {
            [el.compact]: G
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, r.jsx)("div", {
          className: el.blocked,
          children: (0, r.jsx)(u.t6m, {
            size: "lg",
            className: el.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, h ? (0, r.jsx)("div", {
          className: el.ignored,
          children: (0, r.jsx)(u.kZF, {
            size: "lg",
            className: el.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(es, {
          participantType: y,
          platform: C,
          className: a()(el.experimentTitleIcon, {
            [el.compact]: G
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: a()(el.overlayTitleText, L),
          children: n
        }), E && (0, r.jsx)(c.u, {
          text: ei.intl.string(ei.t.ZEem6O),
          children: (0, r.jsx)(u.tQf, {
            className: el.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.TEXT_STRONG,
            "aria-label": ei.intl.string(ei.t.mR9cf3)
          })
        })]
      }), W.length > 0 ? (0, r.jsx)("div", {
        className: el.overlayButtonContainer,
        children: W
      }) : null]
    })]
  })
});
ed.displayName = "CallTileOverlay";
let ep = Chunk352978.L,
  ef = eo