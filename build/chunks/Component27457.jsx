/** Chunk was on 84983 **/
/** chunk id: 27457, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  BP: () => er,
  ZP: () => eo
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
  Chunk410575 = require("./410575.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk629049 = require("./629049.js"),
  Chunk358221 = require("./358221.js"),
  Chunk414910 = require("./414910.js"),
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
  Chunk400872 = require("./400872.js");
let el = [Chunk354459.fO.ACTIVITY],
  en = Chunk647438.memo(e => {
    var t, l, a, o, c, p, h;
    let {
      participant: v,
      popoutType: y,
      onDoubleClick: T,
      onContextMenu: N,
      onClick: U,
      onMouseDown: L,
      onKeyDown: z,
      className: W,
      style: en,
      containerStyle: ei,
      channel: ea,
      width: er,
      onVideoResize: eo,
      inCall: ec = false,
      selected: ed = false,
      noBorder: eu = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: em = false,
      ignored: eI = false,
      fit: eh = O.L.CONTAIN,
      paused: ev = false,
      pulseSpeakingIndicator: eZ = false,
      forceIdle: ex = false
    } = e, ey = i.useContext(S.h9) || ex, [eT, ej] = i.useState(false), eO = A.Sb.useSetting(), eg = (0, r.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled), [eC, eN] = i.useState(false), eb = (0, r.e7)([P.default], () => P.default.getId()), eE = v.type === K.fO.ACTIVITY ? null : v.user, eA = null != (a = null == eE ? true : eE.id) ? a : null, [eS] = (0, I.Z)(v.type === K.fO.ACTIVITY ? [v.applicationId] : []), eV = (0, r.e7)([_.Z], () => null != eA && _.Z.isLocalVideoDisabled(eA, (0, Z.Z)(v.type)), [eA, v.type]), eR = (0, r.e7)([_.Z], () => null != eA ? _.Z.getVideoToggleState(eA, (0, Z.Z)(v.type)) : J.ZUi.NONE, [eA, v.type]), eP = eR === J.ZUi.AUTO_PROBING, {
      speaking: ew,
      ringing: ek,
      hasVideo: e_
    } = (0, Q.Z)(v, eb), eD = (0, r.e7)([E.Z], () => null !== eA && E.Z.isUserPlayingSounds(eA), [eA]), eM = function(e, t, l) {
      var n, i, a, s;
      let o = t.type !== K.fO.ACTIVITY ? t.user.id : t.applicationId,
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
        d = (0, r.cj)([_.Z], () => {
          let l = (0, Z.Z)(t.type);
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
        localMuted: d.muted,
        muted: null != (a = t.type === K.fO.USER && (null == (n = t.voiceState) ? true : n.isVoiceMuted())) && a,
        deafened: null != (s = t.type === K.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(eb, v, ea.getGuildId()), eU = v.type === K.fO.STREAM && eA === eb, eL = (0, r.e7)([V.Z], () => v.type === K.fO.USER && null != eA ? V.Z.getEffectForUserId(eA) : null), ez = (0, r.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(ea.id, null != eA ? eA : J.lds)), {
      showGameIcon: eY
    } = j.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eG = (0, r.e7)([D.Z], () => eY && null != eA ? D.Z.findActivity(eA, e => null != e.application_id && e.type === J.IIU.PLAYING) : null, [eY, eA]), eB = (0, r.e7)([k.Z], () => (null == eG ? true : eG.application_id) != null ? k.Z.getDetectableGame(eG.application_id) : null), eH = (0, r.e7)([m.Z], () => null != eB && (null == eG ? true : eG.application_id) != null ? m.Z.getApplication(null == eG ? true : eG.application_id) : true), eF = (0, b.wV)({
      userId: eA,
      channelId: ea.id
    }), eX = (0, b.zU)({
      streamKey: v.type === K.fO.STREAM ? v.id : null,
      channelId: ea.id
    }), eW = i.useMemo(() => v.type === K.fO.STREAM ? null != eX && eX : v.type === K.fO.USER && null != eF && eF, [eX, eF, v.type]);
    i.useEffect(() => {
      ej(ef)
    }, [ef]);
    let eQ = i.useCallback(() => {
        null != eA && u.Z.toggleLocalMute(eA, $.Yn.STREAM)
      }, [eA]),
      eJ = i.useCallback(e => {
        null == U || U(v, e)
      }, [U, v]),
      eK = i.useCallback(e => {
        null == T || T(v, e)
      }, [T, v]),
      eq = i.useCallback((e, t, l) => {
        null == N || N(v, e, t, l)
      }, [N, v]),
      e$ = null,
      e0 = null,
      e7 = "";
    switch (v.type) {
      case K.fO.STREAM:
        e$ = (0, n.jsx)(F.Z, {
          participant: v,
          selected: ed,
          popoutType: y,
          width: er,
          fit: eh,
          onVideoResize: eo,
          paused: ev,
          focused: ef
        }), e0 = (0, n.jsx)(F._, {
          participant: v,
          selected: ed,
          width: er,
          focused: ef,
          idle: ey,
          premiumIndicator: false
        }), e7 = ee.intl.formatToPlainString(ee.t.gHPz3Q, {
          streamerName: v.user.username
        });
        break;
      case K.fO.USER:
        e$ = (0, n.jsx)(X.Z, {
          channel: ea,
          inCall: ec,
          participant: v,
          popoutType: y,
          fit: eh,
          onVideoResize: eo,
          paused: ev,
          selected: ed,
          width: er,
          blocked: em,
          ignored: eI,
          noVideoRender: ep || eP,
          pulseSpeakingIndicator: eZ
        }), e0 = (0, n.jsx)(X.T, {
          participant: v,
          channelId: ea.id
        }), e7 = ee.intl.formatToPlainString(ee.t["iC/x/Q"], {
          username: v.user.username
        });
        break;
      case K.fO.ACTIVITY:
        e$ = (0, n.jsx)(B.ZP, {
          interactible: ef,
          participant: v,
          selected: ed,
          channel: ea,
          width: er
        }), e7 = ee.intl.formatToPlainString(ee.t.YCvOsO, {
          activityName: null == eS ? true : eS.name
        });
        break;
      case K.fO.HIDDEN_STREAM:
        e$ = (0, n.jsx)(F.Z, {
          participant: v,
          selected: ed,
          width: er,
          fit: eh,
          onVideoResize: eo,
          paused: ev,
          popoutType: y,
          focused: ef
        })
    }
    let e1 = i.useRef(null),
      e4 = v.type === K.fO.STREAM ? d.pzj : d.Odl;
    return (0, n.jsx)(f.Z, {
      section: J.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsx)("div", {
        className: s()(et.wrapper, {
          [et.ringing]: ek
        }, W),
        style: ei,
        onMouseEnter: () => {
          eN(true)
        },
        onMouseLeave: () => {
          eN(false)
        },
        children: (0, n.jsxs)(C.Z, {
          shakeLocation: q.oZ.VOICE_USER,
          isShaking: ew,
          className: et.tile,
          children: [(0, n.jsx)(H.Z, {
            ref: e1,
            className: s()(et.tile, {
              [et.noBorder]: eu,
              [et.noInteraction]: null == U,
              [et.idle]: ey
            }),
            noBorder: eu,
            style: en,
            participantUserId: eA,
            children: (0, n.jsxs)(d.kL8, {
              "aria-label": e7,
              className: et.tileChild,
              onDoubleClick: eK,
              onContextMenu: e => eq(e, v.type === K.fO.STREAM),
              onClick: eJ,
              onMouseDown: L,
              onKeyDown: z,
              focusProps: {
                offset: 1
              },
              children: [null != eL && null != eA ? (0, n.jsx)(R.Z, {
                voiceChannelEffect: eL,
                onComplete: () => (0, V.H)(eA),
                userId: eA
              }) : null, v.type === K.fO.USER ? (0, n.jsx)("div", {
                className: et.voiceChannelEffectsContainer,
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
                className: et.indicators,
                children: e0
              }), ed ? (0, n.jsx)("div", {
                className: et.selectedScreen,
                children: (0, n.jsx)(e4, {
                  size: "md",
                  color: "currentColor",
                  className: et.selectedIcon
                })
              }) : null, el.includes(v.type) ? null : (0, n.jsx)(es, (p = function(e) {
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
                width: er,
                inCall: ec,
                participantId: v.id,
                participantType: v.type,
                hasVideo: null != e_ && e_
              }, eM), h = h = {
                idle: ey,
                platform: ez,
                title: (0, Y.Z)(ea, v),
                blocked: em,
                ignored: eI,
                localVideoDisabled: eV,
                videoToggleState: eR,
                hideAudioIcon: eU,
                onContextMenu: eq,
                onToggleMute: eQ,
                participantUserId: eA,
                channel: ea,
                application: eH,
                secureFramesVerified: eW,
                isHovered: eC
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  l.push.apply(l, n)
                }
                return l
              })(Object(h)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(h, e))
              }), p)), ec && !eu ? (0, n.jsx)("div", {
                className: s()(et.border, {
                  [et.voiceChannelEffect]: !ef && (eD || null != eL),
                  [et.speaking]: ew && !ef && !eD
                })
              }) : null]
            })
          }), eO && eg && eC && (0, n.jsx)(G.Z, {
            currentUserId: eb,
            participant: v
          }), (0, n.jsx)(g.Z, {
            isFiring: eT,
            callTileRef: e1.current
          })]
        })
      })
    })
  });

function ei(e) {
  let {
    participantType: t,
    platform: l,
    className: i
  } = e;
  if (t === K.fO.STREAM) return l === K.wR.XBOX ? (0, n.jsx)(z.Z, {
    className: i
  }) : (0, n.jsx)(d.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (l) {
    case K.wR.MOBILE:
      return (0, n.jsx)(d.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case K.wR.XBOX:
      return (0, n.jsx)(z.Z, {
        className: i
      });
    case K.wR.PLAYSTATION:
      return (0, n.jsx)(L.Z, {
        className: i
      });
    default:
      return null
  }
}

function ea(e) {
  let {
    icon: t,
    tooltipText: l,
    hideWhenInactive: i,
    onClick: a
  } = e;
  return (0, n.jsx)(c.u, {
    text: l,
    children: (0, n.jsx)("div", {
      className: s()(et.overlayButton, {
        [et.hideWhenInactive]: i
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
en.displayName = "CallTile";
let es = Chunk647438.memo(e => {
  let {
    idle: t,
    title: l,
    width: a,
    focused: u,
    videoToggleState: f,
    blocked: m,
    ignored: I,
    participantId: x,
    participantType: j,
    participantUserId: O,
    channel: g,
    platform: C,
    secureFramesVerified: b,
    onContextMenu: E,
    muted: A,
    deafened: S,
    localMuted: V,
    serverMuted: R,
    serverDeafened: P,
    hasVideo: w,
    hideAudioIcon: k,
    onToggleMute: D
  } = e, M = (0, r.e7)([_.Z], () => null != O && _.Z.isLocalVideoAutoDisabled(O, (0, Z.Z)(j)), [O, j]), L = (0, y.Z)({
    userId: O,
    guildId: g.getGuildId()
  }), z = (0, T.j)({
    displayNameStyles: L
  }), Y = (0, W.N)(a), G = (0, W.K)(a), [B, H] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || H(false))
      };
    return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: F
  } = (0, h.n)({
    location: "CallTile"
  }), X = (0, r.e7)([v.Z], () => v.Z.isParticipantPoppedOut(g.id, x), [g.id, x]), Q = F && !X && j !== K.fO.ACTIVITY, q = !k && j === K.fO.STREAM && w && (!G || V), $ = function(e) {
    let {
      localMuted: t,
      serverMuted: l,
      serverDeafened: n,
      deafened: i,
      muted: a
    } = e;
    return n ? d.Vm4 : l ? d.v0G : i ? d.wE8 : t ? d.v0G : a ? d.nRN : null
  }({
    localMuted: V,
    serverMuted: R,
    serverDeafened: P,
    deafened: S,
    muted: A
  });
  return (0, n.jsxs)("div", {
    className: s()(et.overlayContainer, {
      [et.compact]: G
    }),
    children: [(0, n.jsx)("div", {
      className: s()(et.overlayTop, {
        [et.small]: a < 195
      }),
      children: M || f === J.ZUi.AUTO_PROBING ? t ? (0, n.jsx)("div", {
        className: et.status,
        children: (0, n.jsx)(d.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: s()(et.overlayTitle, et.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: et.status,
          children: (0, n.jsx)(d.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: et.overlayTitleText,
          children: ee.intl.string(ee.t.m2Hyj0)
        })]
      }) : null
    }), !Y && (0, n.jsxs)("div", {
      className: s()(et.overlayBottom, {
        [et.small]: a < 195
      }),
      children: [(0, n.jsxs)(d.Text, {
        className: et.experimentOverlayTitle,
        color: "none",
        variant: G ? "text-sm/normal" : "text-md/normal",
        children: [null != $ && j === K.fO.USER && (0, n.jsx)($, {
          className: s()(et.experimentTitleIcon, {
            [et.compact]: G
          }),
          size: "xs",
          color: "currentColor"
        }), m ? (0, n.jsx)("div", {
          className: et.blocked,
          children: (0, n.jsx)(d.t6m, {
            size: "lg",
            className: et.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, I ? (0, n.jsx)("div", {
          className: et.ignored,
          children: (0, n.jsx)(d.kZF, {
            size: "lg",
            className: et.blockedIcon
          })
        }) : null, t ? null : (0, n.jsx)(ei, {
          participantType: j,
          platform: C,
          className: s()(et.experimentTitleIcon, {
            [et.compact]: G
          })
        }), null == l || "" === l || t ? null : (0, n.jsx)("span", {
          className: s()(et.overlayTitleText, z),
          children: l
        }), b && (0, n.jsx)(c.u, {
          text: ee.intl.string(ee.t.ZEem6O),
          children: (0, n.jsx)(d.tQf, {
            className: et.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": ee.intl.string(ee.t.mR9cf3)
          })
        })]
      }), !u && (0, n.jsxs)("div", {
        className: et.overlayButtonContainer,
        children: [Q && (0, n.jsx)(ea, {
          onClick: e => {
            e.stopPropagation(), p.Z.popoutParticipant(g.id, x), N.fT(g.id, x)
          },
          tooltipText: ee.intl.string(ee.t.EVNd8X),
          icon: d.rgF,
          hideWhenInactive: !B
        }), (0, n.jsx)(ea, {
          onClick: e => {
            e.stopPropagation(), H(true), E(e, true, K.A5.THREE_DOT)
          },
          tooltipText: ee.intl.string(ee.t["+1H47t"]),
          icon: d.xhG,
          hideWhenInactive: !B
        }), q && (0, n.jsx)(ea, {
          onClick: D,
          tooltipText: V ? ee.intl.string(ee.t.YqAjXy) : ee.intl.string(ee.t.w4m945),
          icon: V ? d.OyP : d.gj8,
          hideWhenInactive: !V && !B
        })]
      })]
    })]
  })
});
es.displayName = "CallTileOverlay";
let er = Chunk352978.L,
  eo = en