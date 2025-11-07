/** Chunk was on 29446 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => ed,
  ZP: () => ep
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk7504 = require("./7504.js");
let er = [Chunk354459.fO.ACTIVITY],
  ea = Chunk647438.memo(e => {
    var t, n, r, o, c, g, b;
    let {
      participant: j,
      popoutType: y,
      onDoubleClick: I,
      onContextMenu: E,
      onClick: L,
      onMouseDown: F,
      onKeyDown: G,
      className: z,
      style: H,
      containerStyle: J,
      channel: ea,
      width: es,
      onVideoResize: eo,
      inCall: ec = false,
      selected: ed = false,
      noBorder: ep = false,
      noVideoRender: eh = false,
      focused: em = false,
      blocked: ef = false,
      ignored: eg = false,
      fit: ev = O.L.CONTAIN,
      paused: eb = false,
      pulseSpeakingIndicator: ej = false,
      forceIdle: ey = false
    } = e, ex = l.useContext(N.h9) || ey, [eO, eC] = l.useState(false), eZ = S.Sb.useSetting(), eI = (0, s.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled), [eE, eP] = l.useState(false), eT = (0, s.e7)([k.default], () => k.default.getId()), eS = j.type === ee.fO.ACTIVITY ? null : j.user, eN = null != (r = null == eS ? true : eS.id) ? r : null, [eM] = (0, m.Z)(j.type === ee.fO.ACTIVITY ? [j.applicationId] : []), ew = (0, s.e7)([_.Z], () => null != eN && _.Z.isLocalVideoDisabled(eN, (0, f.Z)(j.type)), [eN, j.type]), ek = (0, s.e7)([_.Z], () => null != eN ? _.Z.getVideoToggleState(eN, (0, f.Z)(j.type)) : $.ZUi.NONE, [eN, j.type]), eD = (0, s.e7)([U.Z], () => U.Z.isCurrentUserPTTLatched()), eA = eN === eT && j.type === ee.fO.USER, e_ = ek === $.ZUi.AUTO_PROBING, {
      speaking: eR,
      ringing: eU,
      hasVideo: eV
    } = (0, q.Z)(j, eT), eL = (0, s.e7)([T.Z], () => null !== eN && T.Z.isUserPlayingSounds(eN), [eN]), eF = function(e, t, n) {
      var i, l, r, a;
      let o = t.type !== ee.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([V.Z], () => {
          var e, t, i;
          let l = V.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == l ? true : l.mute) && e,
            deafened: null != (t = null == l ? true : l.deaf) && t,
            suppressed: null != (i = null == l ? true : l.suppress) && i,
            voiceChannelId: null == l ? true : l.channelId
          }
        }),
        u = (0, s.cj)([_.Z], () => {
          let n = (0, f.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: _.Z.isLocalMute(o, n),
            localVideoDisabled: _.Z.isLocalVideoDisabled(o, n),
            localVideoAutoDisabled: _.Z.isLocalVideoAutoDisabled(o, n)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === ee.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceMuted())) && r,
        deafened: null != (a = t.type === ee.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceDeafened())) && a
      }
    }(eT, j, ea.getGuildId()), eG = j.type === ee.fO.STREAM && eN === eT, ez = (0, s.e7)([M.Z], () => j.type === ee.fO.USER && null != eN ? M.Z.getEffectForUserId(eN) : null), eH = (0, s.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(ea.id, null != eN ? eN : $.lds)), {
      showGameIcon: eB
    } = x.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eY = (0, s.e7)([R.Z], () => eB && null != eN ? R.Z.findActivity(eN, e => null != e.application_id && e.type === $.IIU.PLAYING) : null, [eB, eN]), eW = (0, s.e7)([A.Z], () => (null == eY ? true : eY.application_id) != null ? A.Z.getDetectableGame(eY.application_id) : null), eQ = (0, s.e7)([h.Z], () => null != eW && (null == eY ? true : eY.application_id) != null ? h.Z.getApplication(null == eY ? true : eY.application_id) : true), eK = (0, P.wV)({
      userId: eN,
      channelId: ea.id
    }), eX = (0, P.zU)({
      streamKey: j.type === ee.fO.STREAM ? j.id : null,
      channelId: ea.id
    }), eJ = l.useMemo(() => j.type === ee.fO.STREAM ? null != eX && eX : j.type === ee.fO.USER && null != eK && eK, [eX, eK, j.type]);
    l.useEffect(() => {
      eC(em)
    }, [em]);
    let eq = l.useCallback(() => {
        null != eN && d.Z.toggleLocalMute(eN, en.Yn.STREAM)
      }, [eN]),
      e$ = l.useCallback(e => {
        null == L || L(j, e)
      }, [L, j]),
      e0 = l.useCallback(e => {
        null == I || I(j, e)
      }, [I, j]),
      e1 = l.useCallback((e, t, n) => {
        null == E || E(j, e, t, n)
      }, [E, j]),
      e4 = null,
      e8 = null,
      e7 = "";
    switch (j.type) {
      case ee.fO.STREAM:
        e4 = (0, i.jsx)(K.Z, {
          participant: j,
          selected: ed,
          popoutType: y,
          width: es,
          fit: ev,
          onVideoResize: eo,
          paused: eb,
          focused: em
        }), e8 = (0, i.jsx)(K._, {
          participant: j,
          selected: ed,
          width: es,
          focused: em,
          idle: ex,
          premiumIndicator: false
        }), e7 = ei.intl.formatToPlainString(ei.t.gHPz3Q, {
          streamerName: j.user.username
        });
        break;
      case ee.fO.USER:
        e4 = (0, i.jsx)(X.Z, {
          channel: ea,
          inCall: ec,
          participant: j,
          popoutType: y,
          fit: ev,
          onVideoResize: eo,
          paused: eb,
          selected: ed,
          width: es,
          blocked: ef,
          ignored: eg,
          noVideoRender: eh || e_,
          pulseSpeakingIndicator: ej
        }), e8 = (0, i.jsx)(X.T, {
          participant: j,
          channelId: ea.id
        }), e7 = ei.intl.formatToPlainString(ei.t["iC/x/Q"], {
          username: j.user.username
        });
        break;
      case ee.fO.ACTIVITY:
        e4 = (0, i.jsx)(W.ZP, {
          interactible: em,
          participant: j,
          selected: ed,
          channel: ea,
          width: es
        }), e7 = ei.intl.formatToPlainString(ei.t.YCvOsO, {
          activityName: null == eM ? true : eM.name
        });
        break;
      case ee.fO.HIDDEN_STREAM:
        e4 = (0, i.jsx)(K.Z, {
          participant: j,
          selected: ed,
          width: es,
          fit: ev,
          onVideoResize: eo,
          paused: eb,
          popoutType: y,
          focused: em
        })
    }
    let e3 = l.useRef(null),
      e9 = j.type === ee.fO.STREAM ? u.pzj : u.Odl;
    return (0, i.jsx)(p.Z, {
      section: $.jXE.VOICE_CHANNEL_TILE,
      children: (0, i.jsx)("div", {
        className: a()(el.wrapper, {
          [el.ringing]: eU
        }, z),
        style: J,
        onMouseEnter: () => {
          eP(true)
        },
        onMouseLeave: () => {
          eP(false)
        },
        children: (0, i.jsxs)(Z.Z, {
          shakeLocation: et.oZ.VOICE_USER,
          isShaking: eR,
          className: el.tile,
          children: [(0, i.jsx)(Q.Z, {
            ref: e3,
            className: a()(el.tile, {
              [el.noBorder]: ep,
              [el.noInteraction]: null == L,
              [el.idle]: ex
            }),
            noBorder: ep,
            style: H,
            participantUserId: eN,
            children: (0, i.jsxs)(u.kL8, {
              "aria-label": e7,
              className: el.tileChild,
              onDoubleClick: e0,
              onContextMenu: e => e1(e, j.type === ee.fO.STREAM),
              onClick: e$,
              onMouseDown: F,
              onKeyDown: G,
              focusProps: {
                offset: 1
              },
              children: [null != ez && null != eN ? (0, i.jsx)(w.Z, {
                voiceChannelEffect: ez,
                onComplete: () => (0, M.H)(eN),
                userId: eN
              }) : null, j.type === ee.fO.USER ? (0, i.jsx)("div", {
                className: el.voiceChannelEffectsContainer,
                children: (0, i.jsx)(v.Z, {
                  userId: eN,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e3 || null == (t = e3.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e3 || null == (n = e3.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ep ? null : (0, i.jsx)("div", {
                className: el.indicators,
                children: e8
              }), ed ? (0, i.jsx)("div", {
                className: el.selectedScreen,
                children: (0, i.jsx)(e9, {
                  size: "md",
                  color: "currentColor",
                  className: el.selectedIcon
                })
              }) : null, er.includes(j.type) ? null : (0, i.jsx)(eu, (g = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = i
                  })
                }
                return e
              }({
                focused: em,
                width: es,
                inCall: ec,
                participantId: j.id,
                participantType: j.type,
                hasVideo: null != eV && eV
              }, eF), b = b = {
                idle: ex,
                platform: eH,
                title: (0, B.Z)(ea, j),
                blocked: ef,
                ignored: eg,
                localVideoDisabled: ew,
                videoToggleState: ek,
                hideAudioIcon: eG,
                onContextMenu: e1,
                onToggleMute: eq,
                participantUserId: eN,
                channel: ea,
                application: eQ,
                secureFramesVerified: eJ,
                isHovered: eE,
                popoutType: y
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(b)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, i)
                }
                return n
              })(Object(b)).forEach(function(e) {
                Object.defineProperty(g, e, Object.getOwnPropertyDescriptor(b, e))
              }), g)), ec && !ep ? (0, i.jsx)("div", {
                className: a()(el.border, {
                  [el.voiceChannelEffect]: !em && (eL || null != ez),
                  [el.speaking]: eR && !em && !eL,
                  [el.latchedNotSpeaking]: eA && eD && !eR && !em && !eL
                })
              }) : null]
            })
          }), eZ && eI && eE && (0, i.jsx)(Y.Z, {
            currentUserId: eT,
            participant: j
          }), (0, i.jsx)(C.Z, {
            isFiring: eO,
            callTileRef: e3.current
          })]
        })
      })
    })
  });

function es(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === ee.fO.STREAM) return n === ee.wR.XBOX ? (0, i.jsx)(G.Z, {
    className: l
  }) : (0, i.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: l
  });
  switch (n) {
    case ee.wR.MOBILE:
      return (0, i.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    case ee.wR.XBOX:
      return (0, i.jsx)(G.Z, {
        className: l
      });
    case ee.wR.PLAYSTATION:
      return (0, i.jsx)(F.Z, {
        className: l
      });
    default:
      return null
  }
}

function eo(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: l,
    onClick: r
  } = e;
  return (0, i.jsx)(c.u, {
    text: n,
    children: (0, i.jsx)("div", {
      className: a()(el.overlayButton, {
        [el.hideWhenInactive]: l
      }),
      children: (0, i.jsx)(u.hU, {
        size: "sm",
        variant: "overlay-secondary",
        onClick: e => {
          e.stopPropagation(), r(e)
        },
        "aria-label": n,
        icon: t
      })
    })
  })
}

function ec(e) {
  let {
    channelId: t,
    participantId: n,
    isContextMenuOpen: r
  } = e, a = l.useMemo(() => (0, b.Z)(t, n), [t, n]), o = (0, s.e7)([I.Z], () => I.Z.getIsAlwaysOnTop(a)), c = l.useCallback(() => {
    E.hY(a, !o)
  }, [a, o]);
  return z.isPlatformEmbedded && H.ZP.supportsFeature($.eRX.POPOUT_WINDOWS) ? (0, i.jsx)(eo, {
    onClick: c,
    tooltipText: o ? ei.intl.string(ei.t.YdyDM9) : ei.intl.string(ei.t.ZVGHwP),
    icon: o ? u.QVc : u.k5M,
    hideWhenInactive: !r
  }) : null
}
ea.displayName = "CallTile";
let eu = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: d,
    videoToggleState: p,
    blocked: h,
    ignored: m,
    participantId: v,
    participantType: b,
    participantUserId: x,
    channel: O,
    platform: C,
    secureFramesVerified: Z,
    onContextMenu: I,
    muted: E,
    deafened: P,
    localMuted: T,
    serverMuted: S,
    serverDeafened: N,
    hasVideo: M,
    hideAudioIcon: w,
    onToggleMute: k,
    popoutType: D
  } = e, A = (0, s.e7)([_.Z], () => null != x && _.Z.isLocalVideoAutoDisabled(x, (0, f.Z)(b)), [x, b]), R = (0, j.Z)({
    userId: x,
    guildId: O.getGuildId()
  }), U = (0, y.j)({
    displayNameStyles: R
  }), V = (0, J.N)(r), F = (0, J.K)(r), [G, z] = l.useState(false);
  l.useEffect(() => {
    let e = false,
      t = () => {
        e !== L.Z.isOpen() && ((e = L.Z.isOpen()) || z(false))
      };
    return L.Z.addChangeListener(t), () => L.Z.removeChangeListener(t)
  }, []);
  let H = !w && b === ee.fO.STREAM && M && (!F || T),
    B = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: i,
        deafened: l,
        muted: r
      } = e;
      return i ? u.Vm4 : n ? u.v0G : l ? u.wE8 : t ? u.v0G : r ? u.nRN : null
    }({
      localMuted: T,
      serverMuted: S,
      serverDeafened: N,
      deafened: P,
      muted: E
    });
  return (0, i.jsxs)("div", {
    className: a()(el.overlayContainer, {
      [el.compact]: F,
      [el.noPointerEvents]: d
    }),
    children: [(0, i.jsx)("div", {
      className: a()(el.overlayTop, {
        [el.small]: r < 195
      }),
      children: A || p === $.ZUi.AUTO_PROBING ? t ? (0, i.jsx)("div", {
        className: el.status,
        children: (0, i.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, i.jsxs)("div", {
        className: a()(el.overlayTitle, el.videoDisabledTitle),
        children: [(0, i.jsx)("div", {
          className: el.status,
          children: (0, i.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: el.overlayTitleText,
          children: ei.intl.string(ei.t.m2Hyj0)
        })]
      }) : null
    }), !V && (0, i.jsxs)("div", {
      className: a()(el.overlayBottom, {
        [el.small]: r < 195
      }),
      children: [(0, i.jsxs)(u.Text, {
        className: el.experimentOverlayTitle,
        color: "none",
        variant: F ? "text-sm/normal" : "text-md/normal",
        children: [null != B && b === ee.fO.USER && (0, i.jsx)(B, {
          className: a()(el.experimentTitleIcon, {
            [el.compact]: F
          }),
          size: "xs",
          color: "currentColor"
        }), h ? (0, i.jsx)("div", {
          className: el.blocked,
          children: (0, i.jsx)(u.t6m, {
            size: "lg",
            className: el.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, i.jsx)("div", {
          className: el.ignored,
          children: (0, i.jsx)(u.kZF, {
            size: "lg",
            className: el.blockedIcon
          })
        }) : null, t ? null : (0, i.jsx)(es, {
          participantType: b,
          platform: C,
          className: a()(el.experimentTitleIcon, {
            [el.compact]: F
          })
        }), null == n || "" === n || t ? null : (0, i.jsx)("span", {
          className: a()(el.overlayTitleText, U),
          children: n
        }), Z && (0, i.jsx)(c.u, {
          text: ei.intl.string(ei.t.ZEem6O),
          children: (0, i.jsx)(u.tQf, {
            className: el.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": ei.intl.string(ei.t.mR9cf3)
          })
        })]
      }), d ? D === g.P.CALL_TILE ? (0, i.jsx)(ec, {
        channelId: O.id,
        participantId: v,
        isContextMenuOpen: G
      }) : null : (0, i.jsxs)("div", {
        className: el.overlayButtonContainer,
        children: [(0, i.jsx)(eo, {
          onClick: e => {
            e.stopPropagation(), z(true), I(e, true, ee.A5.THREE_DOT)
          },
          tooltipText: ei.intl.string(ei.t["+1H47t"]),
          icon: u.xhG,
          hideWhenInactive: !G
        }), H && (0, i.jsx)(eo, {
          onClick: k,
          tooltipText: T ? ei.intl.string(ei.t.YqAjXy) : ei.intl.string(ei.t.w4m945),
          icon: T ? u.OyP : u.gj8,
          hideWhenInactive: !T && !G
        })]
      })]
    })]
  })
});
eu.displayName = "CallTileOverlay";
let ed = Chunk352978.L,
  ep = ea