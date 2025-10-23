/** Chunk was on 84983 **/
/** chunk id: 27457, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  BP: () => ec,
  ZP: () => ed
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk475179 = require("./475179.js"),
  Chunk872810 = require("./872810.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk629049 = require("./629049.js"),
  Chunk358221 = require("./358221.js"),
  Chunk414910 = require("./414910.js"),
  Chunk598006 = require("./598006.js"),
  Chunk415635 = require("./415635.jsx"),
  Chunk386725 = require("./386725.js"),
  Chunk7284 = require("./7284.js"),
  Chunk649739 = require("./649739.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk936847 = require("./936847.jsx"),
  Chunk512384 = require("./512384.jsx"),
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
let ei = [Chunk354459.fO.ACTIVITY],
  ea = Chunk647438.memo(e => {
    var t, l, a, o, c, p, f;
    let {
      participant: Z,
      popoutType: v,
      onDoubleClick: T,
      onContextMenu: O,
      onClick: j,
      onMouseDown: E,
      onKeyDown: z,
      className: Y,
      style: G,
      containerStyle: J,
      channel: ea,
      width: es,
      onVideoResize: er,
      inCall: ec = false,
      selected: ed = false,
      noBorder: eu = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: em = false,
      ignored: eI = false,
      fit: eh = N.L.CONTAIN,
      paused: eZ = false,
      pulseSpeakingIndicator: ev = false,
      forceIdle: ey = false
    } = e, eT = i.useContext(P.h9) || ey, [ex, eO] = i.useState(false), ej = V.Sb.useSetting(), eg = (0, r.e7)([k.default], () => k.default.isStreamInfoOverlayEnabled), [eN, eC] = i.useState(false), eb = (0, r.e7)([_.default], () => _.default.getId()), eE = Z.type === $.fO.ACTIVITY ? null : Z.user, eA = null != (a = null == eE ? true : eE.id) ? a : null, [eS] = (0, h.Z)(Z.type === $.fO.ACTIVITY ? [Z.applicationId] : []), eV = (0, r.e7)([M.Z], () => null != eA && M.Z.isLocalVideoDisabled(eA, (0, y.Z)(Z.type)), [eA, Z.type]), eP = (0, r.e7)([M.Z], () => null != eA ? M.Z.getVideoToggleState(eA, (0, y.Z)(Z.type)) : q.ZUi.NONE, [eA, Z.type]), eR = eP === q.ZUi.AUTO_PROBING, {
      speaking: ew,
      ringing: e_,
      hasVideo: ek
    } = (0, K.Z)(Z, eb), eD = (0, r.e7)([S.Z], () => null !== eA && S.Z.isUserPlayingSounds(eA), [eA]), eM = function(e, t, l) {
      var n, i, a, s;
      let o = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, r.cj)([L.Z], () => {
          var e, t, n;
          let i = L.Z.getVoiceState(l, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (n = null == i ? true : i.suppress) && n,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        d = (0, r.cj)([M.Z], () => {
          let l = (0, y.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: M.Z.isLocalMute(o, l),
            localVideoDisabled: M.Z.isLocalVideoDisabled(o, l),
            localVideoAutoDisabled: M.Z.isLocalVideoAutoDisabled(o, l)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: d.muted,
        muted: null != (a = t.type === $.fO.USER && (null == (n = t.voiceState) ? true : n.isVoiceMuted())) && a,
        deafened: null != (s = t.type === $.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(eb, Z, ea.getGuildId()), eU = Z.type === $.fO.STREAM && eA === eb, eL = (0, r.e7)([R.Z], () => Z.type === $.fO.USER && null != eA ? R.Z.getEffectForUserId(eA) : null), ez = (0, r.e7)([L.Z], () => L.Z.getVoicePlatformForChannel(ea.id, null != eA ? eA : q.lds)), {
      showGameIcon: eY
    } = g.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eG = (0, r.e7)([U.Z], () => eY && null != eA ? U.Z.findActivity(eA, e => null != e.application_id && e.type === q.IIU.PLAYING) : null, [eY, eA]), eB = (0, r.e7)([D.Z], () => (null == eG ? true : eG.application_id) != null ? D.Z.getDetectableGame(eG.application_id) : null), eH = (0, r.e7)([I.Z], () => null != eB && (null == eG ? true : eG.application_id) != null ? I.Z.getApplication(null == eG ? true : eG.application_id) : true), eF = (0, A.wV)({
      userId: eA,
      channelId: ea.id
    }), eX = (0, A.zU)({
      streamKey: Z.type === $.fO.STREAM ? Z.id : null,
      channelId: ea.id
    }), eW = i.useMemo(() => Z.type === $.fO.STREAM ? null != eX && eX : Z.type === $.fO.USER && null != eF && eF, [eX, eF, Z.type]);
    i.useEffect(() => {
      eO(ef)
    }, [ef]);
    let eQ = i.useCallback(() => {
        null != eA && u.Z.toggleLocalMute(eA, et.Yn.STREAM)
      }, [eA]),
      eJ = i.useCallback(e => {
        null == j || j(Z, e)
      }, [j, Z]),
      eK = i.useCallback(e => {
        null == T || T(Z, e)
      }, [T, Z]),
      eq = i.useCallback((e, t, l) => {
        null == O || O(Z, e, t, l)
      }, [O, Z]),
      e$ = null,
      e0 = null,
      e7 = "";
    switch (Z.type) {
      case $.fO.STREAM:
        e$ = (0, n.jsx)(W.Z, {
          participant: Z,
          selected: ed,
          popoutType: v,
          width: es,
          fit: eh,
          onVideoResize: er,
          paused: eZ,
          focused: ef
        }), e0 = (0, n.jsx)(W._, {
          participant: Z,
          selected: ed,
          width: es,
          focused: ef,
          idle: eT,
          premiumIndicator: false
        }), e7 = el.intl.formatToPlainString(el.t.gHPz3Q, {
          streamerName: Z.user.username
        });
        break;
      case $.fO.USER:
        e$ = (0, n.jsx)(Q.Z, {
          channel: ea,
          inCall: ec,
          participant: Z,
          popoutType: v,
          fit: eh,
          onVideoResize: er,
          paused: eZ,
          selected: ed,
          width: es,
          blocked: em,
          ignored: eI,
          noVideoRender: ep || eR,
          pulseSpeakingIndicator: ev
        }), e0 = (0, n.jsx)(Q.T, {
          participant: Z,
          channelId: ea.id
        }), e7 = el.intl.formatToPlainString(el.t["iC/x/Q"], {
          username: Z.user.username
        });
        break;
      case $.fO.ACTIVITY:
        e$ = (0, n.jsx)(F.ZP, {
          interactible: ef,
          participant: Z,
          selected: ed,
          channel: ea,
          width: es
        }), e7 = el.intl.formatToPlainString(el.t.YCvOsO, {
          activityName: null == eS ? true : eS.name
        });
        break;
      case $.fO.HIDDEN_STREAM:
        e$ = (0, n.jsx)(W.Z, {
          participant: Z,
          selected: ed,
          width: es,
          fit: eh,
          onVideoResize: er,
          paused: eZ,
          popoutType: v,
          focused: ef
        })
    }
    let e1 = i.useRef(null),
      e4 = Z.type === $.fO.STREAM ? d.pzj : d.Odl;
    return (0, n.jsx)(m.Z, {
      section: q.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsx)("div", {
        className: s()(en.wrapper, {
          [en.ringing]: e_
        }, Y),
        style: J,
        onMouseEnter: () => {
          eC(true)
        },
        onMouseLeave: () => {
          eC(false)
        },
        children: (0, n.jsxs)(b.Z, {
          shakeLocation: ee.oZ.VOICE_USER,
          isShaking: ew,
          className: en.tile,
          children: [(0, n.jsx)(X.Z, {
            ref: e1,
            className: s()(en.tile, {
              [en.noBorder]: eu,
              [en.noInteraction]: null == j,
              [en.idle]: eT
            }),
            noBorder: eu,
            style: G,
            participantUserId: eA,
            children: (0, n.jsxs)(d.kL8, {
              "aria-label": e7,
              className: en.tileChild,
              onDoubleClick: eK,
              onContextMenu: e => eq(e, Z.type === $.fO.STREAM),
              onClick: eJ,
              onMouseDown: E,
              onKeyDown: z,
              focusProps: {
                offset: 1
              },
              children: [null != eL && null != eA ? (0, n.jsx)(w.Z, {
                voiceChannelEffect: eL,
                onComplete: () => (0, R.H)(eA),
                userId: eA
              }) : null, Z.type === $.fO.USER ? (0, n.jsx)("div", {
                className: en.voiceChannelEffectsContainer,
                children: (0, n.jsx)(x.Z, {
                  userId: eA,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e1 || null == (t = e1.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e1 || null == (l = e1.current) ? true : l.clientHeight) ? c : 0
                  }
                })
              }) : null, e$, eu ? null : (0, n.jsx)("div", {
                className: en.indicators,
                children: e0
              }), ed ? (0, n.jsx)("div", {
                className: en.selectedScreen,
                children: (0, n.jsx)(e4, {
                  size: "md",
                  color: "currentColor",
                  className: en.selectedIcon
                })
              }) : null, ei.includes(Z.type) ? null : (0, n.jsx)(eo, (p = function(e) {
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
                width: es,
                inCall: ec,
                participantId: Z.id,
                participantType: Z.type,
                hasVideo: null != ek && ek
              }, eM), f = f = {
                idle: eT,
                platform: ez,
                title: (0, B.Z)(ea, Z),
                blocked: em,
                ignored: eI,
                localVideoDisabled: eV,
                videoToggleState: eP,
                hideAudioIcon: eU,
                onContextMenu: eq,
                onToggleMute: eQ,
                participantUserId: eA,
                channel: ea,
                application: eH,
                secureFramesVerified: eW,
                isHovered: eN,
                popoutType: v
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  l.push.apply(l, n)
                }
                return l
              })(Object(f)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(f, e))
              }), p)), ec && !eu ? (0, n.jsx)("div", {
                className: s()(en.border, {
                  [en.voiceChannelEffect]: !ef && (eD || null != eL),
                  [en.speaking]: ew && !ef && !eD
                })
              }) : null]
            })
          }), ej && eg && eN && (0, n.jsx)(H.Z, {
            currentUserId: eb,
            participant: Z
          }), (0, n.jsx)(C.Z, {
            isFiring: ex,
            callTileRef: e1.current
          })]
        })
      })
    })
  });

function es(e) {
  let {
    participantType: t,
    platform: l,
    className: i
  } = e;
  if (t === $.fO.STREAM) return l === $.wR.XBOX ? (0, n.jsx)(G.Z, {
    className: i
  }) : (0, n.jsx)(d.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (l) {
    case $.wR.MOBILE:
      return (0, n.jsx)(d.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case $.wR.XBOX:
      return (0, n.jsx)(G.Z, {
        className: i
      });
    case $.wR.PLAYSTATION:
      return (0, n.jsx)(Y.Z, {
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
    onClick: a
  } = e;
  return (0, n.jsx)(c.u, {
    text: l,
    children: (0, n.jsx)("div", {
      className: s()(en.overlayButton, {
        [en.hideWhenInactive]: i
      }),
      children: (0, n.jsx)(d.hU, {
        size: "sm",
        variant: "overlay-secondary",
        onClick: e => {
          e.stopPropagation(), a(e)
        },
        "aria-label": l,
        icon: t
      })
    })
  })
}
ea.displayName = "CallTile";
let eo = Chunk647438.memo(e => {
  let {
    idle: t,
    title: l,
    width: a,
    focused: u,
    videoToggleState: m,
    blocked: I,
    ignored: h,
    participantId: x,
    participantType: g,
    participantUserId: N,
    channel: C,
    platform: b,
    secureFramesVerified: A,
    onContextMenu: S,
    muted: V,
    deafened: P,
    localMuted: R,
    serverMuted: w,
    serverDeafened: _,
    hasVideo: k,
    hideAudioIcon: D,
    onToggleMute: U,
    popoutType: L
  } = e, Y = (0, r.e7)([M.Z], () => null != N && M.Z.isLocalVideoAutoDisabled(N, (0, y.Z)(g)), [N, g]), G = (0, O.Z)({
    userId: N,
    guildId: C.getGuildId()
  }), B = (0, j.j)({
    displayNameStyles: G
  }), H = (0, J.N)(a), F = (0, J.K)(a), [X, W] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== z.Z.isOpen() && ((e = z.Z.isOpen()) || W(false))
      };
    return z.Z.addChangeListener(t), () => z.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: Q
  } = (0, Z.n)({
    location: "CallTile"
  }), K = (0, r.e7)([v.Z], () => v.Z.isParticipantPoppedOut(C.id, x), [C.id, x]), ee = Q && !K && L === T.P.NO_POPOUT && g !== $.fO.ACTIVITY, et = !D && g === $.fO.STREAM && k && (!F || R), ei = function(e) {
    let {
      localMuted: t,
      serverMuted: l,
      serverDeafened: n,
      deafened: i,
      muted: a
    } = e;
    return n ? d.Vm4 : l ? d.v0G : i ? d.wE8 : t ? d.v0G : a ? d.nRN : null
  }({
    localMuted: R,
    serverMuted: w,
    serverDeafened: _,
    deafened: P,
    muted: V
  });
  return (0, n.jsxs)("div", {
    className: s()(en.overlayContainer, {
      [en.compact]: F
    }),
    children: [(0, n.jsx)("div", {
      className: s()(en.overlayTop, {
        [en.small]: a < 195
      }),
      children: Y || m === q.ZUi.AUTO_PROBING ? t ? (0, n.jsx)("div", {
        className: en.status,
        children: (0, n.jsx)(d.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: s()(en.overlayTitle, en.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: en.status,
          children: (0, n.jsx)(d.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: en.overlayTitleText,
          children: el.intl.string(el.t.m2Hyj0)
        })]
      }) : null
    }), !H && (0, n.jsxs)("div", {
      className: s()(en.overlayBottom, {
        [en.small]: a < 195
      }),
      children: [(0, n.jsxs)(d.Text, {
        className: en.experimentOverlayTitle,
        color: "none",
        variant: F ? "text-sm/normal" : "text-md/normal",
        children: [null != ei && g === $.fO.USER && (0, n.jsx)(ei, {
          className: s()(en.experimentTitleIcon, {
            [en.compact]: F
          }),
          size: "xs",
          color: "currentColor"
        }), I ? (0, n.jsx)("div", {
          className: en.blocked,
          children: (0, n.jsx)(d.t6m, {
            size: "lg",
            className: en.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, h ? (0, n.jsx)("div", {
          className: en.ignored,
          children: (0, n.jsx)(d.kZF, {
            size: "lg",
            className: en.blockedIcon
          })
        }) : null, t ? null : (0, n.jsx)(es, {
          participantType: g,
          platform: b,
          className: s()(en.experimentTitleIcon, {
            [en.compact]: F
          })
        }), null == l || "" === l || t ? null : (0, n.jsx)("span", {
          className: s()(en.overlayTitleText, B),
          children: l
        }), A && (0, n.jsx)(c.u, {
          text: el.intl.string(el.t.ZEem6O),
          children: (0, n.jsx)(d.tQf, {
            className: en.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": el.intl.string(el.t.mR9cf3)
          })
        })]
      }), !u && (0, n.jsxs)("div", {
        className: en.overlayButtonContainer,
        children: [ee && (0, n.jsx)(er, {
          onClick: e => {
            e.stopPropagation();
            let t = v.Z.getParticipant(C.id, x);
            null != t && ((0, $._5)(t) && (0, f.rn)(t.stream, {
              forceMultiple: true
            }), p.Z.popoutParticipant(C.id, x), E.fT(C.id, x))
          },
          tooltipText: el.intl.string(el.t.EVNd8X),
          icon: d.rgF,
          hideWhenInactive: !X
        }), (0, n.jsx)(er, {
          onClick: e => {
            e.stopPropagation(), W(true), S(e, true, $.A5.THREE_DOT)
          },
          tooltipText: el.intl.string(el.t["+1H47t"]),
          icon: d.xhG,
          hideWhenInactive: !X
        }), et && (0, n.jsx)(er, {
          onClick: U,
          tooltipText: R ? el.intl.string(el.t.YqAjXy) : el.intl.string(el.t.w4m945),
          icon: R ? d.OyP : d.gj8,
          hideWhenInactive: !R && !X
        })]
      })]
    })]
  })
});
eo.displayName = "CallTileOverlay";
let ec = Chunk352978.L,
  ed = ea