/** Chunk was on 84983 **/
/** chunk id: 27457, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  BP: () => eu,
  ZP: () => ed
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
  Chunk857192 = require("./857192.js"),
  Chunk77498 = require("./77498.js"),
  Chunk131951 = require("./131951.js"),
  Chunk158776 = require("./158776.js"),
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
let ei = [Chunk354459.fO.ACTIVITY],
  es = Chunk473749.memo(e => {
    var t, l, s, o, c, I, y;
    let {
      participant: Z,
      popoutType: T,
      onDoubleClick: N,
      onContextMenu: C,
      onClick: U,
      onMouseDown: L,
      onKeyDown: z,
      className: Y,
      style: G,
      containerStyle: J,
      channel: es,
      width: ea,
      onVideoResize: er,
      inCall: eo = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: em = false,
      ignored: eh = false,
      fit: eI = O.L.CONTAIN,
      paused: ev = false,
      pulseSpeakingIndicator: ey = false,
      forceIdle: eZ = false,
      controlsBottom: eT
    } = e, ex = i.useContext(A.h9) || eZ, [eO, ej] = i.useState(false), eg = S.Sb.useSetting(), eN = (0, r.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled), [eC, eb] = i.useState(false), eE = (0, r.e7)([R.default], () => R.default.getId()), eS = Z.type === $.fO.ACTIVITY ? null : Z.user, eA = null != (s = null == eS ? true : eS.id) ? s : null, [eV] = (0, m.Z)(Z.type === $.fO.ACTIVITY ? [Z.applicationId] : []), eP = (0, r.e7)([_.Z], () => null != eA && _.Z.isLocalVideoDisabled(eA, (0, h.Z)(Z.type)), [eA, Z.type]), eR = (0, r.e7)([_.Z], () => null != eA ? _.Z.getVideoToggleState(eA, (0, h.Z)(Z.type)) : q.ZUi.NONE, [eA, Z.type]), ew = eR === q.ZUi.AUTO_PROBING, {
      speaking: ek,
      latched: e_,
      ringing: eD,
      hasVideo: eM
    } = (0, K.Z)(Z, eE), eU = (0, r.e7)([E.Z], () => null !== eA && E.Z.isUserPlayingSounds(eA), [eA]), eL = function(e, t, l) {
      var n, i, s, a;
      let o = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, r.cj)([M.Z], () => {
          var e, t, n;
          let i = M.Z.getVoiceState(l, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (n = null == i ? true : i.suppress) && n,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, r.cj)([_.Z], () => {
          let l = (0, h.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: _.Z.isLocalMute(o, l),
            localVideoDisabled: _.Z.isLocalVideoDisabled(o, l),
            localVideoAutoDisabled: _.Z.isLocalVideoAutoDisabled(o, l)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (s = t.type === $.fO.USER && (null == (n = t.voiceState) ? true : n.isVoiceMuted())) && s,
        deafened: null != (a = t.type === $.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && a
      }
    }(eE, Z, es.getGuildId()), ez = Z.type === $.fO.STREAM && eA === eE, eY = (0, r.e7)([V.Z], () => Z.type === $.fO.USER && null != eA ? V.Z.getEffectForUserId(eA) : null), eG = (0, r.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(es.id, null != eA ? eA : q.lds)), {
      showGameIcon: eB
    } = x.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eH = (0, r.e7)([D.Z], () => eB && null != eA ? D.Z.findActivity(eA, e => null != e.application_id && e.type === q.IIU.PLAYING) : null, [eB, eA]), eW = (0, r.e7)([k.Z], () => (null == eH ? true : eH.application_id) != null ? k.Z.getDetectableGame(eH.application_id) : null), eX = (0, r.e7)([f.Z], () => null != eW && (null == eH ? true : eH.application_id) != null ? f.Z.getApplication(null == eH ? true : eH.application_id) : true), eF = (0, b.wV)({
      userId: eA,
      channelId: es.id
    }), eQ = (0, b.zU)({
      streamKey: Z.type === $.fO.STREAM ? Z.id : null,
      channelId: es.id
    }), eJ = i.useMemo(() => Z.type === $.fO.STREAM ? null != eQ && eQ : Z.type === $.fO.USER && null != eF && eF, [eQ, eF, Z.type]);
    i.useEffect(() => {
      ej(ef)
    }, [ef]);
    let eK = i.useCallback(() => {
        null != eA && d.Z.toggleLocalMute(eA, et.Yn.STREAM)
      }, [eA]),
      eq = i.useCallback(e => {
        null == U || U(Z, e)
      }, [U, Z]),
      e$ = i.useCallback(e => {
        null == N || N(Z, e)
      }, [N, Z]),
      e0 = i.useCallback((e, t, l) => {
        null == C || C(Z, e, t, l)
      }, [C, Z]),
      e7 = null,
      e1 = null,
      e4 = "";
    switch (Z.type) {
      case $.fO.STREAM:
        e7 = (0, n.jsx)(F.Z, {
          participant: Z,
          selected: eu,
          popoutType: T,
          width: ea,
          fit: eI,
          onVideoResize: er,
          paused: ev,
          focused: ef,
          idle: ex,
          controlsBottom: eT
        }), e1 = (0, n.jsx)(F._, {
          participant: Z,
          selected: eu,
          width: ea,
          focused: ef,
          idle: ex,
          premiumIndicator: false
        }), e4 = el.intl.formatToPlainString(el.t.gHPz3Q, {
          streamerName: Z.user.username
        });
        break;
      case $.fO.USER:
        e7 = (0, n.jsx)(Q.Z, {
          channel: es,
          inCall: eo,
          participant: Z,
          popoutType: T,
          fit: eI,
          onVideoResize: er,
          paused: ev,
          selected: eu,
          width: ea,
          blocked: em,
          ignored: eh,
          noVideoRender: ep || ew,
          pulseSpeakingIndicator: ey
        }), e1 = (0, n.jsx)(Q.T, {
          participant: Z,
          channelId: es.id
        }), e4 = el.intl.formatToPlainString(el.t["iC/x/Q"], {
          username: Z.user.username
        });
        break;
      case $.fO.ACTIVITY:
        e7 = (0, n.jsx)(W.ZP, {
          interactible: ef,
          participant: Z,
          selected: eu,
          channel: es,
          width: ea
        }), e4 = el.intl.formatToPlainString(el.t.YCvOsO, {
          activityName: null == eV ? true : eV.name
        });
        break;
      case $.fO.HIDDEN_STREAM:
        e7 = (0, n.jsx)(F.Z, {
          participant: Z,
          selected: eu,
          width: ea,
          fit: eI,
          onVideoResize: er,
          paused: ev,
          popoutType: T,
          focused: ef,
          idle: ex
        })
    }
    let e5 = i.useRef(null),
      e9 = Z.type === $.fO.STREAM ? u.pzj : u.Odl;
    return (0, n.jsx)(p.Z, {
      section: q.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsx)("div", {
        className: a()(en.wrapper, {
          [en.ringing]: eD
        }, Y),
        style: J,
        onMouseEnter: () => {
          eb(true)
        },
        onMouseLeave: () => {
          eb(false)
        },
        children: (0, n.jsxs)(g.Z, {
          shakeLocation: ee.oZ.VOICE_USER,
          isShaking: ek,
          className: en.tile,
          children: [(0, n.jsx)(X.Z, {
            ref: e5,
            className: a()(en.tile, {
              [en.noBorder]: ed,
              [en.noInteraction]: null == U,
              [en.idle]: ex
            }),
            noBorder: ed,
            style: G,
            participantUserId: eA,
            children: (0, n.jsxs)(u.kL8, {
              "aria-label": e4,
              className: en.tileChild,
              onDoubleClick: e$,
              onContextMenu: e => e0(e, Z.type === $.fO.STREAM),
              onClick: eq,
              onMouseDown: L,
              onKeyDown: z,
              focusProps: {
                offset: 1
              },
              children: [null != eY && null != eA ? (0, n.jsx)(P.Z, {
                voiceChannelEffect: eY,
                onComplete: () => (0, V.H)(eA),
                userId: eA
              }) : null, Z.type === $.fO.USER ? (0, n.jsx)("div", {
                className: en.voiceChannelEffectsContainer,
                children: (0, n.jsx)(v.Z, {
                  userId: eA,
                  channelId: es.id,
                  guildId: es.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e5 || null == (t = e5.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e5 || null == (l = e5.current) ? true : l.clientHeight) ? c : 0
                  }
                })
              }) : null, e7, ed ? null : (0, n.jsx)("div", {
                className: en.indicators,
                children: e1
              }), eu ? (0, n.jsx)("div", {
                className: en.selectedScreen,
                children: (0, n.jsx)(e9, {
                  size: "md",
                  color: "currentColor",
                  className: en.selectedIcon
                })
              }) : null, ei.includes(Z.type) ? null : (0, n.jsx)(ec, (I = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(l);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = l[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({
                focused: ef,
                width: ea,
                inCall: eo,
                participantId: Z.id,
                participantType: Z.type,
                hasVideo: null != eM && eM
              }, eL), y = y = {
                idle: ex,
                platform: eG,
                title: (0, B.Z)(es, Z),
                blocked: em,
                ignored: eh,
                localVideoDisabled: eP,
                videoToggleState: eR,
                hideAudioIcon: ez,
                onContextMenu: e0,
                onToggleMute: eK,
                participantUserId: eA,
                channel: es,
                application: eX,
                secureFramesVerified: eJ,
                isHovered: eC,
                popoutType: T
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  l.push.apply(l, n)
                }
                return l
              })(Object(y)).forEach(function(e) {
                Object.defineProperty(I, e, Object.getOwnPropertyDescriptor(y, e))
              }), I)), eo && !ed ? (0, n.jsx)("div", {
                className: a()(en.border, {
                  [en.voiceChannelEffect]: !ef && (eU || null != eY),
                  [en.speaking]: ek && !ef && !eU,
                  [en.latchedNotSpeaking]: e_ && !ek && !ef && !eU
                })
              }) : null]
            })
          }), eg && eN && eC && (0, n.jsx)(H.Z, {
            currentUserId: eE,
            participant: Z
          }), (0, n.jsx)(j.Z, {
            isFiring: eO,
            callTileRef: e5.current
          })]
        })
      })
    })
  });

function ea(e) {
  let {
    participantType: t,
    platform: l,
    className: i
  } = e;
  if (t === $.fO.STREAM) return l === $.wR.XBOX ? (0, n.jsx)(z.Z, {
    className: i
  }) : (0, n.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (l) {
    case $.wR.MOBILE:
      return (0, n.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case $.wR.XBOX:
      return (0, n.jsx)(z.Z, {
        className: i
      });
    case $.wR.PLAYSTATION:
      return (0, n.jsx)(L.Z, {
        className: i
      });
    default:
      return null
  }
}

function er(e) {
  let {
    icon: t,
    tooltipText: l,
    hideWhenInactive: i,
    onClick: s
  } = e;
  return (0, n.jsx)(c.u, {
    text: l,
    children: (0, n.jsx)("div", {
      className: a()(en.overlayButton, {
        [en.hideWhenInactive]: i
      }),
      children: (0, n.jsx)(u.hU, {
        size: "sm",
        variant: "overlay-secondary",
        onClick: e => {
          e.stopPropagation(), s(e)
        },
        "aria-label": l,
        icon: t
      })
    })
  })
}

function eo(e) {
  let {
    channelId: t,
    participantId: l,
    hideWhenInactive: s
  } = e, a = i.useMemo(() => (0, y.Z)(t, l), [t, l]), o = (0, r.e7)([N.Z], () => N.Z.getIsAlwaysOnTop(a)), c = i.useCallback(() => {
    C.setAlwaysOnTop(a, !o)
  }, [a, o]);
  return Y.isPlatformEmbedded && G.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS) ? (0, n.jsx)(er, {
    onClick: c,
    tooltipText: o ? el.intl.string(el.t.YdyDM9) : el.intl.string(el.t.ZVGHwP),
    icon: o ? u.QVc : u.k5M,
    hideWhenInactive: s
  }) : null
}
es.displayName = "CallTile";
let ec = Chunk473749.memo(e => {
  let {
    idle: t,
    title: l,
    width: s,
    focused: d,
    videoToggleState: p,
    blocked: f,
    ignored: m,
    participantId: v,
    participantType: y,
    participantUserId: x,
    channel: O,
    platform: j,
    secureFramesVerified: g,
    onContextMenu: N,
    muted: C,
    deafened: b,
    localMuted: E,
    serverMuted: S,
    serverDeafened: A,
    hasVideo: V,
    hideAudioIcon: P,
    onToggleMute: R,
    popoutType: w
  } = e, k = (0, r.e7)([_.Z], () => null != x && _.Z.isLocalVideoAutoDisabled(x, (0, h.Z)(y)), [x, y]), D = (0, Z.Z)({
    userId: x,
    guildId: O.getGuildId()
  }), M = (0, T.j)({
    displayNameStyles: D
  }), L = (0, J.N)(s), z = (0, J.K)(s), [Y, G] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || G(false))
      };
    return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t)
  }, []);
  let B = !P && y === $.fO.STREAM && V && (!z || E),
    H = function(e) {
      let {
        localMuted: t,
        serverMuted: l,
        serverDeafened: n,
        deafened: i,
        muted: s
      } = e;
      return n ? u.Vm4 : l ? u.v0G : i ? u.wE8 : t ? u.v0G : s ? u.nRN : null
    }({
      localMuted: E,
      serverMuted: S,
      serverDeafened: A,
      deafened: b,
      muted: C
    }),
    W = [];
  return d ? w === I.P.CALL_TILE && W.push((0, n.jsx)(eo, {
    channelId: O.id,
    participantId: v,
    hideWhenInactive: !Y
  }, "stay-on-top")) : (W.push((0, n.jsx)(er, {
    onClick: e => {
      e.stopPropagation(), G(true), N(e, true, $.A5.THREE_DOT)
    },
    tooltipText: el.intl.string(el.t["+1H47t"]),
    icon: u.xhG,
    hideWhenInactive: !Y
  }, "options")), B && W.push((0, n.jsx)(er, {
    onClick: R,
    tooltipText: E ? el.intl.string(el.t.YqAjXy) : el.intl.string(el.t.w4m945),
    icon: E ? u.OyP : u.gj8,
    hideWhenInactive: !E && !Y
  }, "mute"))), (0, n.jsxs)("div", {
    className: a()(en.overlayContainer, {
      [en.compact]: z,
      [en.noPointerEvents]: d
    }),
    children: [(0, n.jsx)("div", {
      className: a()(en.overlayTop, {
        [en.small]: s < 195
      }),
      children: k || p === q.ZUi.AUTO_PROBING ? t ? (0, n.jsx)("div", {
        className: en.status,
        children: (0, n.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: a()(en.overlayTitle, en.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: en.status,
          children: (0, n.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: en.overlayTitleText,
          children: el.intl.string(el.t.m2Hyj0)
        })]
      }) : null
    }), !L && (0, n.jsxs)("div", {
      className: a()(en.overlayBottom, {
        [en.small]: s < 195
      }),
      children: [(0, n.jsxs)(u.Text, {
        className: en.experimentOverlayTitle,
        color: "none",
        variant: z ? "text-sm/normal" : "text-md/normal",
        children: [null != H && y === $.fO.USER && (0, n.jsx)(H, {
          className: a()(en.experimentTitleIcon, {
            [en.compact]: z
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, n.jsx)("div", {
          className: en.blocked,
          children: (0, n.jsx)(u.t6m, {
            size: "lg",
            className: en.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, n.jsx)("div", {
          className: en.ignored,
          children: (0, n.jsx)(u.kZF, {
            size: "lg",
            className: en.blockedIcon
          })
        }) : null, t ? null : (0, n.jsx)(ea, {
          participantType: y,
          platform: j,
          className: a()(en.experimentTitleIcon, {
            [en.compact]: z
          })
        }), null == l || "" === l || t ? null : (0, n.jsx)("span", {
          className: a()(en.overlayTitleText, M),
          children: l
        }), g && (0, n.jsx)(c.u, {
          text: el.intl.string(el.t.ZEem6O),
          children: (0, n.jsx)(u.tQf, {
            className: en.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.TEXT_STRONG,
            "aria-label": el.intl.string(el.t.mR9cf3)
          })
        })]
      }), W.length > 0 ? (0, n.jsx)("div", {
        className: en.overlayButtonContainer,
        children: W
      }) : null]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let eu = Chunk352978.L,
  ed = es