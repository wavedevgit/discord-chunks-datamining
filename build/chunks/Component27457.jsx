/** Chunk was on 29446 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => eu,
  ZP: () => ed
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
let el = [Chunk354459.fO.ACTIVITY],
  er = Chunk647438.memo(e => {
    var t, n, r, o, c, g, b;
    let {
      participant: j,
      popoutType: y,
      onDoubleClick: I,
      onContextMenu: E,
      onClick: V,
      onMouseDown: L,
      onKeyDown: F,
      className: G,
      style: z,
      containerStyle: X,
      channel: er,
      width: ea,
      onVideoResize: es,
      inCall: eo = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: eh = false,
      blocked: em = false,
      ignored: ef = false,
      fit: eg = O.L.CONTAIN,
      paused: ev = false,
      pulseSpeakingIndicator: eb = false,
      forceIdle: ej = false
    } = e, ey = l.useContext(S.h9) || ej, [ex, eO] = l.useState(false), eC = N.Sb.useSetting(), eZ = (0, s.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled), [eI, eE] = l.useState(false), eP = (0, s.e7)([k.default], () => k.default.getId()), eT = j.type === $.fO.ACTIVITY ? null : j.user, eN = null != (r = null == eT ? true : eT.id) ? r : null, [eS] = (0, m.Z)(j.type === $.fO.ACTIVITY ? [j.applicationId] : []), eM = (0, s.e7)([_.Z], () => null != eN && _.Z.isLocalVideoDisabled(eN, (0, f.Z)(j.type)), [eN, j.type]), ew = (0, s.e7)([_.Z], () => null != eN ? _.Z.getVideoToggleState(eN, (0, f.Z)(j.type)) : q.ZUi.NONE, [eN, j.type]), ek = ew === q.ZUi.AUTO_PROBING, {
      speaking: eD,
      latched: eA,
      ringing: e_,
      hasVideo: eR
    } = (0, J.Z)(j, eP), eU = (0, s.e7)([T.Z], () => null !== eN && T.Z.isUserPlayingSounds(eN), [eN]), eV = function(e, t, n) {
      var i, l, r, a;
      let o = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([U.Z], () => {
          var e, t, i;
          let l = U.Z.getVoiceState(n, o);
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
        muted: null != (r = t.type === $.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceMuted())) && r,
        deafened: null != (a = t.type === $.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceDeafened())) && a
      }
    }(eP, j, er.getGuildId()), eL = j.type === $.fO.STREAM && eN === eP, eF = (0, s.e7)([M.Z], () => j.type === $.fO.USER && null != eN ? M.Z.getEffectForUserId(eN) : null), eG = (0, s.e7)([U.Z], () => U.Z.getVoicePlatformForChannel(er.id, null != eN ? eN : q.lds)), {
      showGameIcon: ez
    } = x.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eH = (0, s.e7)([R.Z], () => ez && null != eN ? R.Z.findActivity(eN, e => null != e.application_id && e.type === q.IIU.PLAYING) : null, [ez, eN]), eB = (0, s.e7)([A.Z], () => (null == eH ? true : eH.application_id) != null ? A.Z.getDetectableGame(eH.application_id) : null), eY = (0, s.e7)([h.Z], () => null != eB && (null == eH ? true : eH.application_id) != null ? h.Z.getApplication(null == eH ? true : eH.application_id) : true), eW = (0, P.wV)({
      userId: eN,
      channelId: er.id
    }), eQ = (0, P.zU)({
      streamKey: j.type === $.fO.STREAM ? j.id : null,
      channelId: er.id
    }), eK = l.useMemo(() => j.type === $.fO.STREAM ? null != eQ && eQ : j.type === $.fO.USER && null != eW && eW, [eQ, eW, j.type]);
    l.useEffect(() => {
      eO(eh)
    }, [eh]);
    let eX = l.useCallback(() => {
        null != eN && d.Z.toggleLocalMute(eN, et.Yn.STREAM)
      }, [eN]),
      eJ = l.useCallback(e => {
        null == V || V(j, e)
      }, [V, j]),
      eq = l.useCallback(e => {
        null == I || I(j, e)
      }, [I, j]),
      e$ = l.useCallback((e, t, n) => {
        null == E || E(j, e, t, n)
      }, [E, j]),
      e0 = null,
      e1 = null,
      e4 = "";
    switch (j.type) {
      case $.fO.STREAM:
        e0 = (0, i.jsx)(Q.Z, {
          participant: j,
          selected: eu,
          popoutType: y,
          width: ea,
          fit: eg,
          onVideoResize: es,
          paused: ev,
          focused: eh
        }), e1 = (0, i.jsx)(Q._, {
          participant: j,
          selected: eu,
          width: ea,
          focused: eh,
          idle: ey,
          premiumIndicator: false
        }), e4 = en.intl.formatToPlainString(en.t.gHPz3Q, {
          streamerName: j.user.username
        });
        break;
      case $.fO.USER:
        e0 = (0, i.jsx)(K.Z, {
          channel: er,
          inCall: eo,
          participant: j,
          popoutType: y,
          fit: eg,
          onVideoResize: es,
          paused: ev,
          selected: eu,
          width: ea,
          blocked: em,
          ignored: ef,
          noVideoRender: ep || ek,
          pulseSpeakingIndicator: eb
        }), e1 = (0, i.jsx)(K.T, {
          participant: j,
          channelId: er.id
        }), e4 = en.intl.formatToPlainString(en.t["iC/x/Q"], {
          username: j.user.username
        });
        break;
      case $.fO.ACTIVITY:
        e0 = (0, i.jsx)(Y.ZP, {
          interactible: eh,
          participant: j,
          selected: eu,
          channel: er,
          width: ea
        }), e4 = en.intl.formatToPlainString(en.t.YCvOsO, {
          activityName: null == eS ? true : eS.name
        });
        break;
      case $.fO.HIDDEN_STREAM:
        e0 = (0, i.jsx)(Q.Z, {
          participant: j,
          selected: eu,
          width: ea,
          fit: eg,
          onVideoResize: es,
          paused: ev,
          popoutType: y,
          focused: eh
        })
    }
    let e8 = l.useRef(null),
      e7 = j.type === $.fO.STREAM ? u.pzj : u.Odl;
    return (0, i.jsx)(p.Z, {
      section: q.jXE.VOICE_CHANNEL_TILE,
      children: (0, i.jsx)("div", {
        className: a()(ei.wrapper, {
          [ei.ringing]: e_
        }, G),
        style: X,
        onMouseEnter: () => {
          eE(true)
        },
        onMouseLeave: () => {
          eE(false)
        },
        children: (0, i.jsxs)(Z.Z, {
          shakeLocation: ee.oZ.VOICE_USER,
          isShaking: eD,
          className: ei.tile,
          children: [(0, i.jsx)(W.Z, {
            ref: e8,
            className: a()(ei.tile, {
              [ei.noBorder]: ed,
              [ei.noInteraction]: null == V,
              [ei.idle]: ey
            }),
            noBorder: ed,
            style: z,
            participantUserId: eN,
            children: (0, i.jsxs)(u.kL8, {
              "aria-label": e4,
              className: ei.tileChild,
              onDoubleClick: eq,
              onContextMenu: e => e$(e, j.type === $.fO.STREAM),
              onClick: eJ,
              onMouseDown: L,
              onKeyDown: F,
              focusProps: {
                offset: 1
              },
              children: [null != eF && null != eN ? (0, i.jsx)(w.Z, {
                voiceChannelEffect: eF,
                onComplete: () => (0, M.H)(eN),
                userId: eN
              }) : null, j.type === $.fO.USER ? (0, i.jsx)("div", {
                className: ei.voiceChannelEffectsContainer,
                children: (0, i.jsx)(v.Z, {
                  userId: eN,
                  channelId: er.id,
                  guildId: er.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e8 || null == (t = e8.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e8 || null == (n = e8.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e0, ed ? null : (0, i.jsx)("div", {
                className: ei.indicators,
                children: e1
              }), eu ? (0, i.jsx)("div", {
                className: ei.selectedScreen,
                children: (0, i.jsx)(e7, {
                  size: "md",
                  color: "currentColor",
                  className: ei.selectedIcon
                })
              }) : null, el.includes(j.type) ? null : (0, i.jsx)(ec, (g = function(e) {
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
                focused: eh,
                width: ea,
                inCall: eo,
                participantId: j.id,
                participantType: j.type,
                hasVideo: null != eR && eR
              }, eV), b = b = {
                idle: ey,
                platform: eG,
                title: (0, H.Z)(er, j),
                blocked: em,
                ignored: ef,
                localVideoDisabled: eM,
                videoToggleState: ew,
                hideAudioIcon: eL,
                onContextMenu: e$,
                onToggleMute: eX,
                participantUserId: eN,
                channel: er,
                application: eY,
                secureFramesVerified: eK,
                isHovered: eI,
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
              }), g)), eo && !ed ? (0, i.jsx)("div", {
                className: a()(ei.border, {
                  [ei.voiceChannelEffect]: !eh && (eU || null != eF),
                  [ei.speaking]: eD && !eh && !eU,
                  [ei.latchedNotSpeaking]: eA && !eD && !eh && !eU
                })
              }) : null]
            })
          }), eC && eZ && eI && (0, i.jsx)(B.Z, {
            currentUserId: eP,
            participant: j
          }), (0, i.jsx)(C.Z, {
            isFiring: ex,
            callTileRef: e8.current
          })]
        })
      })
    })
  });

function ea(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === $.fO.STREAM) return n === $.wR.XBOX ? (0, i.jsx)(F.Z, {
    className: l
  }) : (0, i.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: l
  });
  switch (n) {
    case $.wR.MOBILE:
      return (0, i.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    case $.wR.XBOX:
      return (0, i.jsx)(F.Z, {
        className: l
      });
    case $.wR.PLAYSTATION:
      return (0, i.jsx)(L.Z, {
        className: l
      });
    default:
      return null
  }
}

function es(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: l,
    onClick: r
  } = e;
  return (0, i.jsx)(c.u, {
    text: n,
    children: (0, i.jsx)("div", {
      className: a()(ei.overlayButton, {
        [ei.hideWhenInactive]: l
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

function eo(e) {
  let {
    channelId: t,
    participantId: n,
    isContextMenuOpen: r
  } = e, a = l.useMemo(() => (0, b.Z)(t, n), [t, n]), o = (0, s.e7)([I.Z], () => I.Z.getIsAlwaysOnTop(a)), c = l.useCallback(() => {
    E.hY(a, !o)
  }, [a, o]);
  return G.isPlatformEmbedded && z.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS) ? (0, i.jsx)(es, {
    onClick: c,
    tooltipText: o ? en.intl.string(en.t.YdyDM9) : en.intl.string(en.t.ZVGHwP),
    icon: o ? u.QVc : u.k5M,
    hideWhenInactive: !r
  }) : null
}
er.displayName = "CallTile";
let ec = Chunk647438.memo(e => {
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
    serverMuted: N,
    serverDeafened: S,
    hasVideo: M,
    hideAudioIcon: w,
    onToggleMute: k,
    popoutType: D
  } = e, A = (0, s.e7)([_.Z], () => null != x && _.Z.isLocalVideoAutoDisabled(x, (0, f.Z)(b)), [x, b]), R = (0, j.Z)({
    userId: x,
    guildId: O.getGuildId()
  }), U = (0, y.j)({
    displayNameStyles: R
  }), L = (0, X.N)(r), F = (0, X.K)(r), [G, z] = l.useState(false);
  l.useEffect(() => {
    let e = false,
      t = () => {
        e !== V.Z.isOpen() && ((e = V.Z.isOpen()) || z(false))
      };
    return V.Z.addChangeListener(t), () => V.Z.removeChangeListener(t)
  }, []);
  let H = !w && b === $.fO.STREAM && M && (!F || T),
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
      serverMuted: N,
      serverDeafened: S,
      deafened: P,
      muted: E
    });
  return (0, i.jsxs)("div", {
    className: a()(ei.overlayContainer, {
      [ei.compact]: F,
      [ei.noPointerEvents]: d
    }),
    children: [(0, i.jsx)("div", {
      className: a()(ei.overlayTop, {
        [ei.small]: r < 195
      }),
      children: A || p === q.ZUi.AUTO_PROBING ? t ? (0, i.jsx)("div", {
        className: ei.status,
        children: (0, i.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, i.jsxs)("div", {
        className: a()(ei.overlayTitle, ei.videoDisabledTitle),
        children: [(0, i.jsx)("div", {
          className: ei.status,
          children: (0, i.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: ei.overlayTitleText,
          children: en.intl.string(en.t.m2Hyj0)
        })]
      }) : null
    }), !L && (0, i.jsxs)("div", {
      className: a()(ei.overlayBottom, {
        [ei.small]: r < 195
      }),
      children: [(0, i.jsxs)(u.Text, {
        className: ei.experimentOverlayTitle,
        color: "none",
        variant: F ? "text-sm/normal" : "text-md/normal",
        children: [null != B && b === $.fO.USER && (0, i.jsx)(B, {
          className: a()(ei.experimentTitleIcon, {
            [ei.compact]: F
          }),
          size: "xs",
          color: "currentColor"
        }), h ? (0, i.jsx)("div", {
          className: ei.blocked,
          children: (0, i.jsx)(u.t6m, {
            size: "lg",
            className: ei.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, i.jsx)("div", {
          className: ei.ignored,
          children: (0, i.jsx)(u.kZF, {
            size: "lg",
            className: ei.blockedIcon
          })
        }) : null, t ? null : (0, i.jsx)(ea, {
          participantType: b,
          platform: C,
          className: a()(ei.experimentTitleIcon, {
            [ei.compact]: F
          })
        }), null == n || "" === n || t ? null : (0, i.jsx)("span", {
          className: a()(ei.overlayTitleText, U),
          children: n
        }), Z && (0, i.jsx)(c.u, {
          text: en.intl.string(en.t.ZEem6O),
          children: (0, i.jsx)(u.tQf, {
            className: ei.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": en.intl.string(en.t.mR9cf3)
          })
        })]
      }), d ? D === g.P.CALL_TILE ? (0, i.jsx)(eo, {
        channelId: O.id,
        participantId: v,
        isContextMenuOpen: G
      }) : null : (0, i.jsxs)("div", {
        className: ei.overlayButtonContainer,
        children: [(0, i.jsx)(es, {
          onClick: e => {
            e.stopPropagation(), z(true), I(e, true, $.A5.THREE_DOT)
          },
          tooltipText: en.intl.string(en.t["+1H47t"]),
          icon: u.xhG,
          hideWhenInactive: !G
        }), H && (0, i.jsx)(es, {
          onClick: k,
          tooltipText: T ? en.intl.string(en.t.YqAjXy) : en.intl.string(en.t.w4m945),
          icon: T ? u.OyP : u.gj8,
          hideWhenInactive: !T && !G
        })]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let eu = Chunk352978.L,
  ed = er