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
  Chunk7504 = require("./7504.js");
let el = [Chunk354459.fO.ACTIVITY],
  en = Chunk647438.memo(e => {
    var t, l, a, o, c, p, v;
    let {
      participant: I,
      onDoubleClick: y,
      onContextMenu: j,
      onClick: C,
      onMouseDown: U,
      onKeyDown: L,
      className: z,
      style: W,
      containerStyle: en,
      channel: ei,
      width: ea,
      inPopout: er,
      onVideoResize: eo,
      inCall: ec = false,
      selected: ed = false,
      noBorder: eu = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: em = false,
      ignored: eh = false,
      fit: ev = T.L.CONTAIN,
      paused: eI = false,
      pulseSpeakingIndicator: eZ = false,
      forceIdle: ex = false,
      inOverlayPopout: ey = false
    } = e, ej = i.useContext(A.h9) || ex, [eO, eT] = i.useState(false), eg = S.Sb.useSetting(), eN = (0, r.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled), [eC, eb] = i.useState(false), eE = (0, r.e7)([R.default], () => R.default.getId()), eS = I.type === K.fO.ACTIVITY ? null : I.user, eA = null != (a = null == eS ? true : eS.id) ? a : null, [eP] = (0, h.Z)(I.type === K.fO.ACTIVITY ? [I.applicationId] : []), eV = (0, r.e7)([_.Z], () => null != eA && _.Z.isLocalVideoDisabled(eA, (0, Z.Z)(I.type)), [eA, I.type]), eR = (0, r.e7)([_.Z], () => null != eA ? _.Z.getVideoToggleState(eA, (0, Z.Z)(I.type)) : J.ZUi.NONE, [eA, I.type]), ew = eR === J.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: e_,
      hasVideo: eD
    } = (0, Q.Z)(I, eE), eM = (0, r.e7)([E.Z], () => null !== eA && E.Z.isUserPlayingSounds(eA), [eA]), eU = function(e, t, l) {
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
    }(eE, I, ei.getGuildId()), eL = I.type === K.fO.STREAM && eA === eE, ez = (0, r.e7)([P.Z], () => I.type === K.fO.USER && null != eA ? P.Z.getEffectForUserId(eA) : null), eY = (0, r.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(ei.id, null != eA ? eA : J.lds)), {
      showGameIcon: eG
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eB = (0, r.e7)([D.Z], () => eG && null != eA ? D.Z.findActivity(eA, e => null != e.application_id && e.type === J.IIU.PLAYING) : null, [eG, eA]), eH = (0, r.e7)([k.Z], () => (null == eB ? true : eB.application_id) != null ? k.Z.getDetectableGame(eB.application_id) : null), eF = (0, r.e7)([m.Z], () => null != eH && (null == eB ? true : eB.application_id) != null ? m.Z.getApplication(null == eB ? true : eB.application_id) : true), eX = (0, b.wV)({
      userId: eA,
      channelId: ei.id
    }), eW = (0, b.zU)({
      streamKey: I.type === K.fO.STREAM ? I.id : null,
      channelId: ei.id
    }), eQ = i.useMemo(() => I.type === K.fO.STREAM ? null != eW && eW : I.type === K.fO.USER && null != eX && eX, [eW, eX, I.type]);
    i.useEffect(() => {
      eT(ef)
    }, [ef]);
    let eJ = i.useCallback(() => {
        null != eA && u.Z.toggleLocalMute(eA, $.Yn.STREAM)
      }, [eA]),
      eK = i.useCallback(e => {
        null == C || C(I, e)
      }, [C, I]),
      eq = i.useCallback(e => {
        null == y || y(I, e)
      }, [y, I]),
      e$ = i.useCallback((e, t, l) => {
        null == j || j(I, e, t, l)
      }, [j, I]),
      e0 = null,
      e7 = null,
      e1 = "";
    switch (I.type) {
      case K.fO.STREAM:
        e0 = (0, n.jsx)(F.Z, {
          participant: I,
          selected: ed,
          width: ea,
          fit: ev,
          onVideoResize: eo,
          paused: eI,
          inPopout: er,
          focused: ef,
          inOverlayPopout: ey
        }), e7 = (0, n.jsx)(F._, {
          participant: I,
          selected: ed,
          width: ea,
          focused: ef,
          idle: ej,
          premiumIndicator: false
        }), e1 = ee.intl.formatToPlainString(ee.t.gHPz3Q, {
          streamerName: I.user.username
        });
        break;
      case K.fO.USER:
        e0 = (0, n.jsx)(X.Z, {
          channel: ei,
          inCall: ec,
          participant: I,
          fit: ev,
          onVideoResize: eo,
          paused: eI,
          selected: ed,
          width: ea,
          blocked: em,
          ignored: eh,
          noVideoRender: ep || ew,
          pulseSpeakingIndicator: eZ,
          inOverlayPopout: ey
        }), e7 = (0, n.jsx)(X.T, {
          participant: I,
          channelId: ei.id
        }), e1 = ee.intl.formatToPlainString(ee.t["iC/x/Q"], {
          username: I.user.username
        });
        break;
      case K.fO.ACTIVITY:
        e0 = (0, n.jsx)(B.ZP, {
          interactible: ef,
          participant: I,
          selected: ed,
          channel: ei,
          width: ea
        }), e1 = ee.intl.formatToPlainString(ee.t.YCvOsO, {
          activityName: null == eP ? true : eP.name
        });
        break;
      case K.fO.HIDDEN_STREAM:
        e0 = (0, n.jsx)(F.Z, {
          participant: I,
          selected: ed,
          width: ea,
          fit: ev,
          onVideoResize: eo,
          paused: eI,
          inPopout: er,
          focused: ef,
          inOverlayPopout: ey
        })
    }
    let e4 = i.useRef(null),
      e8 = I.type === K.fO.STREAM ? d.pzj : d.Odl;
    return (0, n.jsx)(f.Z, {
      section: J.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsx)("div", {
        className: s()(et.wrapper, {
          [et.ringing]: e_
        }, z),
        style: en,
        onMouseEnter: () => {
          eb(true)
        },
        onMouseLeave: () => {
          eb(false)
        },
        children: (0, n.jsxs)(N.Z, {
          shakeLocation: q.oZ.VOICE_USER,
          isShaking: ek,
          className: et.tile,
          children: [(0, n.jsx)(H.Z, {
            ref: e4,
            className: s()(et.tile, {
              [et.noBorder]: eu,
              [et.noInteraction]: null == C,
              [et.idle]: ej
            }),
            noBorder: eu,
            style: W,
            participantUserId: eA,
            children: (0, n.jsxs)(d.kL8, {
              "aria-label": e1,
              className: et.tileChild,
              onDoubleClick: eq,
              onContextMenu: e => e$(e, I.type === K.fO.STREAM),
              onClick: eK,
              onMouseDown: U,
              onKeyDown: L,
              focusProps: {
                offset: 1
              },
              children: [null != ez && null != eA ? (0, n.jsx)(V.Z, {
                voiceChannelEffect: ez,
                onComplete: () => (0, P.H)(eA),
                userId: eA
              }) : null, I.type === K.fO.USER ? (0, n.jsx)("div", {
                className: et.voiceChannelEffectsContainer,
                children: (0, n.jsx)(x.Z, {
                  userId: eA,
                  channelId: ei.id,
                  guildId: ei.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e4 || null == (t = e4.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e4 || null == (l = e4.current) ? true : l.clientHeight) ? c : 0
                  }
                })
              }) : null, e0, eu ? null : (0, n.jsx)("div", {
                className: et.indicators,
                children: e7
              }), ed ? (0, n.jsx)("div", {
                className: et.selectedScreen,
                children: (0, n.jsx)(e8, {
                  size: "md",
                  color: "currentColor",
                  className: et.selectedIcon
                })
              }) : null, el.includes(I.type) ? null : (0, n.jsx)(es, (p = function(e) {
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
                inCall: ec,
                participantType: I.type,
                hasVideo: null != eD && eD
              }, eU), v = v = {
                idle: ej,
                platform: eY,
                title: (0, Y.Z)(ei, I),
                blocked: em,
                ignored: eh,
                localVideoDisabled: eV,
                videoToggleState: eR,
                hideAudioIcon: eL,
                onContextMenu: e$,
                onToggleMute: eJ,
                participantUserId: eA,
                channel: ei,
                application: eF,
                secureFramesVerified: eQ,
                isHovered: eC,
                participant: I,
                inPopout: er
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(v)) : (function(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  l.push.apply(l, n)
                }
                return l
              })(Object(v)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(v, e))
              }), p)), ec && !eu ? (0, n.jsx)("div", {
                className: s()(et.border, {
                  [et.voiceChannelEffect]: !ef && (eM || null != ez),
                  [et.speaking]: ek && !ef && !eM
                })
              }) : null]
            })
          }), eg && eN && eC && (0, n.jsx)(G.Z, {
            currentUserId: eE,
            participant: I
          }), (0, n.jsx)(g.Z, {
            isFiring: eO,
            callTileRef: e4.current
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
    ignored: h,
    participantType: x,
    participantUserId: O,
    channel: T,
    platform: g,
    secureFramesVerified: N,
    onContextMenu: b,
    muted: E,
    deafened: S,
    localMuted: A,
    serverMuted: P,
    serverDeafened: V,
    hasVideo: R,
    hideAudioIcon: w,
    onToggleMute: k,
    participant: D,
    inPopout: M
  } = e, L = (0, r.e7)([_.Z], () => null != O && _.Z.isLocalVideoAutoDisabled(O, (0, Z.Z)(x)), [O, x]), z = (0, y.Z)({
    userId: O,
    guildId: T.getGuildId()
  }), Y = (0, j.j)({
    displayNameStyles: z
  }), G = (0, W.N)(a), B = (0, W.K)(a), [H, F] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || F(false))
      };
    return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: X
  } = (0, v.n)({
    location: "CallTile"
  }), Q = (0, r.e7)([I.Z], () => I.Z.isParticipantPoppedOut(T.id, D.id), [T.id, D.id]), q = !w && x === K.fO.STREAM && R && (!B || A), $ = function(e) {
    let {
      localMuted: t,
      serverMuted: l,
      serverDeafened: n,
      deafened: i,
      muted: a
    } = e;
    return n ? d.Vm4 : l ? d.v0G : i ? d.wE8 : t ? d.v0G : a ? d.nRN : null
  }({
    localMuted: A,
    serverMuted: P,
    serverDeafened: V,
    deafened: S,
    muted: E
  });
  return (0, n.jsxs)("div", {
    className: s()(et.overlayContainer, {
      [et.compact]: B
    }),
    children: [(0, n.jsx)("div", {
      className: s()(et.overlayTop, {
        [et.small]: a < 195
      }),
      children: L || f === J.ZUi.AUTO_PROBING ? t ? (0, n.jsx)("div", {
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
    }), !G && (0, n.jsxs)("div", {
      className: s()(et.overlayBottom, {
        [et.small]: a < 195
      }),
      children: [(0, n.jsxs)(d.Text, {
        className: et.experimentOverlayTitle,
        color: "none",
        variant: B ? "text-sm/normal" : "text-md/normal",
        children: [null != $ && x === K.fO.USER && (0, n.jsx)($, {
          className: s()(et.experimentTitleIcon, {
            [et.compact]: B
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
        }) : null, h ? (0, n.jsx)("div", {
          className: et.ignored,
          children: (0, n.jsx)(d.kZF, {
            size: "lg",
            className: et.blockedIcon
          })
        }) : null, t ? null : (0, n.jsx)(ei, {
          participantType: x,
          platform: g,
          className: s()(et.experimentTitleIcon, {
            [et.compact]: B
          })
        }), null == l || "" === l || t ? null : (0, n.jsx)("span", {
          className: s()(et.overlayTitleText, Y),
          children: l
        }), N && (0, n.jsx)(c.u, {
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
        children: [X && !Q && (0, n.jsx)(ea, {
          onClick: e => {
            e.stopPropagation(), p.Z.popoutParticipant(T.id, D.id), C.fT(T.id, D.id)
          },
          tooltipText: ee.intl.string(ee.t.EVNd8X),
          icon: d.rgF,
          hideWhenInactive: !H
        }), (0, n.jsx)(ea, {
          onClick: e => {
            e.stopPropagation(), F(true), b(e, true, K.A5.THREE_DOT)
          },
          tooltipText: ee.intl.string(ee.t["+1H47t"]),
          icon: d.xhG,
          hideWhenInactive: !H
        }), q && (0, n.jsx)(ea, {
          onClick: k,
          tooltipText: A ? ee.intl.string(ee.t.YqAjXy) : ee.intl.string(ee.t.w4m945),
          icon: A ? d.OyP : d.gj8,
          hideWhenInactive: !A && !H
        })]
      })]
    })]
  })
});
es.displayName = "CallTileOverlay";
let er = Chunk352978.L,
  eo = en