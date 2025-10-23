/** Chunk was on 84983 **/
/** chunk id: 27457, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  BP: () => eo,
  ZP: () => ec
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
let en = [Chunk354459.fO.ACTIVITY],
  ei = Chunk647438.memo(e => {
    var t, l, a, o, c, p, f;
    let {
      participant: Z,
      popoutType: v,
      onDoubleClick: T,
      onContextMenu: j,
      onClick: b,
      onMouseDown: L,
      onKeyDown: z,
      className: Y,
      style: Q,
      containerStyle: ei,
      channel: ea,
      width: es,
      onVideoResize: eo,
      inCall: ec = false,
      selected: ed = false,
      noBorder: eu = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: em = false,
      ignored: eI = false,
      fit: eh = g.L.CONTAIN,
      paused: eZ = false,
      pulseSpeakingIndicator: ev = false,
      forceIdle: ex = false
    } = e, ey = i.useContext(V.h9) || ex, [eT, ej] = i.useState(false), eO = S.Sb.useSetting(), eg = (0, r.e7)([_.default], () => _.default.isStreamInfoOverlayEnabled), [eC, eN] = i.useState(false), eb = (0, r.e7)([w.default], () => w.default.getId()), eE = Z.type === q.fO.ACTIVITY ? null : Z.user, eA = null != (a = null == eE ? true : eE.id) ? a : null, [eS] = (0, h.Z)(Z.type === q.fO.ACTIVITY ? [Z.applicationId] : []), eV = (0, r.e7)([D.Z], () => null != eA && D.Z.isLocalVideoDisabled(eA, (0, x.Z)(Z.type)), [eA, Z.type]), eR = (0, r.e7)([D.Z], () => null != eA ? D.Z.getVideoToggleState(eA, (0, x.Z)(Z.type)) : K.ZUi.NONE, [eA, Z.type]), eP = eR === K.ZUi.AUTO_PROBING, {
      speaking: ew,
      ringing: e_,
      hasVideo: ek
    } = (0, J.Z)(Z, eb), eD = (0, r.e7)([A.Z], () => null !== eA && A.Z.isUserPlayingSounds(eA), [eA]), eM = function(e, t, l) {
      var n, i, a, s;
      let o = t.type !== q.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, r.cj)([U.Z], () => {
          var e, t, n;
          let i = U.Z.getVoiceState(l, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (n = null == i ? true : i.suppress) && n,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        d = (0, r.cj)([D.Z], () => {
          let l = (0, x.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: D.Z.isLocalMute(o, l),
            localVideoDisabled: D.Z.isLocalVideoDisabled(o, l),
            localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(o, l)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: d.muted,
        muted: null != (a = t.type === q.fO.USER && (null == (n = t.voiceState) ? true : n.isVoiceMuted())) && a,
        deafened: null != (s = t.type === q.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(eb, Z, ea.getGuildId()), eU = Z.type === q.fO.STREAM && eA === eb, eL = (0, r.e7)([R.Z], () => Z.type === q.fO.USER && null != eA ? R.Z.getEffectForUserId(eA) : null), ez = (0, r.e7)([U.Z], () => U.Z.getVoicePlatformForChannel(ea.id, null != eA ? eA : K.lds)), {
      showGameIcon: eY
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eG = (0, r.e7)([M.Z], () => eY && null != eA ? M.Z.findActivity(eA, e => null != e.application_id && e.type === K.IIU.PLAYING) : null, [eY, eA]), eB = (0, r.e7)([k.Z], () => (null == eG ? true : eG.application_id) != null ? k.Z.getDetectableGame(eG.application_id) : null), eH = (0, r.e7)([I.Z], () => null != eB && (null == eG ? true : eG.application_id) != null ? I.Z.getApplication(null == eG ? true : eG.application_id) : true), eF = (0, E.wV)({
      userId: eA,
      channelId: ea.id
    }), eX = (0, E.zU)({
      streamKey: Z.type === q.fO.STREAM ? Z.id : null,
      channelId: ea.id
    }), eW = i.useMemo(() => Z.type === q.fO.STREAM ? null != eX && eX : Z.type === q.fO.USER && null != eF && eF, [eX, eF, Z.type]);
    i.useEffect(() => {
      ej(ef)
    }, [ef]);
    let eQ = i.useCallback(() => {
        null != eA && u.Z.toggleLocalMute(eA, ee.Yn.STREAM)
      }, [eA]),
      eJ = i.useCallback(e => {
        null == b || b(Z, e)
      }, [b, Z]),
      eK = i.useCallback(e => {
        null == T || T(Z, e)
      }, [T, Z]),
      eq = i.useCallback((e, t, l) => {
        null == j || j(Z, e, t, l)
      }, [j, Z]),
      e$ = null,
      e0 = null,
      e7 = "";
    switch (Z.type) {
      case q.fO.STREAM:
        e$ = (0, n.jsx)(X.Z, {
          participant: Z,
          selected: ed,
          popoutType: v,
          width: es,
          fit: eh,
          onVideoResize: eo,
          paused: eZ,
          focused: ef
        }), e0 = (0, n.jsx)(X._, {
          participant: Z,
          selected: ed,
          width: es,
          focused: ef,
          idle: ey,
          premiumIndicator: false
        }), e7 = et.intl.formatToPlainString(et.t.gHPz3Q, {
          streamerName: Z.user.username
        });
        break;
      case q.fO.USER:
        e$ = (0, n.jsx)(W.Z, {
          channel: ea,
          inCall: ec,
          participant: Z,
          popoutType: v,
          fit: eh,
          onVideoResize: eo,
          paused: eZ,
          selected: ed,
          width: es,
          blocked: em,
          ignored: eI,
          noVideoRender: ep || eP,
          pulseSpeakingIndicator: ev
        }), e0 = (0, n.jsx)(W.T, {
          participant: Z,
          channelId: ea.id
        }), e7 = et.intl.formatToPlainString(et.t["iC/x/Q"], {
          username: Z.user.username
        });
        break;
      case q.fO.ACTIVITY:
        e$ = (0, n.jsx)(H.ZP, {
          interactible: ef,
          participant: Z,
          selected: ed,
          channel: ea,
          width: es
        }), e7 = et.intl.formatToPlainString(et.t.YCvOsO, {
          activityName: null == eS ? true : eS.name
        });
        break;
      case q.fO.HIDDEN_STREAM:
        e$ = (0, n.jsx)(X.Z, {
          participant: Z,
          selected: ed,
          width: es,
          fit: eh,
          onVideoResize: eo,
          paused: eZ,
          popoutType: v,
          focused: ef
        })
    }
    let e1 = i.useRef(null),
      e4 = Z.type === q.fO.STREAM ? d.pzj : d.Odl;
    return (0, n.jsx)(m.Z, {
      section: K.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsx)("div", {
        className: s()(el.wrapper, {
          [el.ringing]: e_
        }, Y),
        style: ei,
        onMouseEnter: () => {
          eN(true)
        },
        onMouseLeave: () => {
          eN(false)
        },
        children: (0, n.jsxs)(N.Z, {
          shakeLocation: $.oZ.VOICE_USER,
          isShaking: ew,
          className: el.tile,
          children: [(0, n.jsx)(F.Z, {
            ref: e1,
            className: s()(el.tile, {
              [el.noBorder]: eu,
              [el.noInteraction]: null == b,
              [el.idle]: ey
            }),
            noBorder: eu,
            style: Q,
            participantUserId: eA,
            children: (0, n.jsxs)(d.kL8, {
              "aria-label": e7,
              className: el.tileChild,
              onDoubleClick: eK,
              onContextMenu: e => eq(e, Z.type === q.fO.STREAM),
              onClick: eJ,
              onMouseDown: L,
              onKeyDown: z,
              focusProps: {
                offset: 1
              },
              children: [null != eL && null != eA ? (0, n.jsx)(P.Z, {
                voiceChannelEffect: eL,
                onComplete: () => (0, R.H)(eA),
                userId: eA
              }) : null, Z.type === q.fO.USER ? (0, n.jsx)("div", {
                className: el.voiceChannelEffectsContainer,
                children: (0, n.jsx)(y.Z, {
                  userId: eA,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e1 || null == (t = e1.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e1 || null == (l = e1.current) ? true : l.clientHeight) ? c : 0
                  }
                })
              }) : null, e$, eu ? null : (0, n.jsx)("div", {
                className: el.indicators,
                children: e0
              }), ed ? (0, n.jsx)("div", {
                className: el.selectedScreen,
                children: (0, n.jsx)(e4, {
                  size: "md",
                  color: "currentColor",
                  className: el.selectedIcon
                })
              }) : null, en.includes(Z.type) ? null : (0, n.jsx)(er, (p = function(e) {
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
                idle: ey,
                platform: ez,
                title: (0, G.Z)(ea, Z),
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
                className: s()(el.border, {
                  [el.voiceChannelEffect]: !ef && (eD || null != eL),
                  [el.speaking]: ew && !ef && !eD
                })
              }) : null]
            })
          }), eO && eg && eC && (0, n.jsx)(B.Z, {
            currentUserId: eb,
            participant: Z
          }), (0, n.jsx)(C.Z, {
            isFiring: eT,
            callTileRef: e1.current
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
  if (t === q.fO.STREAM) return l === q.wR.XBOX ? (0, n.jsx)(Y.Z, {
    className: i
  }) : (0, n.jsx)(d.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (l) {
    case q.wR.MOBILE:
      return (0, n.jsx)(d.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case q.wR.XBOX:
      return (0, n.jsx)(Y.Z, {
        className: i
      });
    case q.wR.PLAYSTATION:
      return (0, n.jsx)(z.Z, {
        className: i
      });
    default:
      return null
  }
}

function es(e) {
  let {
    icon: t,
    tooltipText: l,
    hideWhenInactive: i,
    onClick: a
  } = e;
  return (0, n.jsx)(c.u, {
    text: l,
    children: (0, n.jsx)("div", {
      className: s()(el.overlayButton, {
        [el.hideWhenInactive]: i
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
ei.displayName = "CallTile";
let er = Chunk647438.memo(e => {
  let {
    idle: t,
    title: l,
    width: a,
    focused: u,
    videoToggleState: m,
    blocked: I,
    ignored: h,
    participantId: y,
    participantType: O,
    participantUserId: g,
    channel: C,
    platform: N,
    secureFramesVerified: E,
    onContextMenu: A,
    muted: S,
    deafened: V,
    localMuted: R,
    serverMuted: P,
    serverDeafened: w,
    hasVideo: _,
    hideAudioIcon: k,
    onToggleMute: M
  } = e, U = (0, r.e7)([D.Z], () => null != g && D.Z.isLocalVideoAutoDisabled(g, (0, x.Z)(O)), [g, O]), z = (0, T.Z)({
    userId: g,
    guildId: C.getGuildId()
  }), Y = (0, j.j)({
    displayNameStyles: z
  }), G = (0, Q.N)(a), B = (0, Q.K)(a), [H, F] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== L.Z.isOpen() && ((e = L.Z.isOpen()) || F(false))
      };
    return L.Z.addChangeListener(t), () => L.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: X
  } = (0, Z.n)({
    location: "CallTile"
  }), W = (0, r.e7)([v.Z], () => v.Z.isParticipantPoppedOut(C.id, y), [C.id, y]), J = X && !W && O !== q.fO.ACTIVITY, $ = !k && O === q.fO.STREAM && _ && (!B || R), ee = function(e) {
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
    serverMuted: P,
    serverDeafened: w,
    deafened: V,
    muted: S
  });
  return (0, n.jsxs)("div", {
    className: s()(el.overlayContainer, {
      [el.compact]: B
    }),
    children: [(0, n.jsx)("div", {
      className: s()(el.overlayTop, {
        [el.small]: a < 195
      }),
      children: U || m === K.ZUi.AUTO_PROBING ? t ? (0, n.jsx)("div", {
        className: el.status,
        children: (0, n.jsx)(d.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: s()(el.overlayTitle, el.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: el.status,
          children: (0, n.jsx)(d.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: el.overlayTitleText,
          children: et.intl.string(et.t.m2Hyj0)
        })]
      }) : null
    }), !G && (0, n.jsxs)("div", {
      className: s()(el.overlayBottom, {
        [el.small]: a < 195
      }),
      children: [(0, n.jsxs)(d.Text, {
        className: el.experimentOverlayTitle,
        color: "none",
        variant: B ? "text-sm/normal" : "text-md/normal",
        children: [null != ee && O === q.fO.USER && (0, n.jsx)(ee, {
          className: s()(el.experimentTitleIcon, {
            [el.compact]: B
          }),
          size: "xs",
          color: "currentColor"
        }), I ? (0, n.jsx)("div", {
          className: el.blocked,
          children: (0, n.jsx)(d.t6m, {
            size: "lg",
            className: el.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, h ? (0, n.jsx)("div", {
          className: el.ignored,
          children: (0, n.jsx)(d.kZF, {
            size: "lg",
            className: el.blockedIcon
          })
        }) : null, t ? null : (0, n.jsx)(ea, {
          participantType: O,
          platform: N,
          className: s()(el.experimentTitleIcon, {
            [el.compact]: B
          })
        }), null == l || "" === l || t ? null : (0, n.jsx)("span", {
          className: s()(el.overlayTitleText, Y),
          children: l
        }), E && (0, n.jsx)(c.u, {
          text: et.intl.string(et.t.ZEem6O),
          children: (0, n.jsx)(d.tQf, {
            className: el.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": et.intl.string(et.t.mR9cf3)
          })
        })]
      }), !u && (0, n.jsxs)("div", {
        className: el.overlayButtonContainer,
        children: [J && (0, n.jsx)(es, {
          onClick: e => {
            e.stopPropagation();
            let t = v.Z.getParticipant(C.id, y);
            null != t && ((0, q._5)(t) && (0, f.rn)(t.stream, {
              forceMultiple: true
            }), p.Z.popoutParticipant(C.id, y), b.fT(C.id, y))
          },
          tooltipText: et.intl.string(et.t.EVNd8X),
          icon: d.rgF,
          hideWhenInactive: !H
        }), (0, n.jsx)(es, {
          onClick: e => {
            e.stopPropagation(), F(true), A(e, true, q.A5.THREE_DOT)
          },
          tooltipText: et.intl.string(et.t["+1H47t"]),
          icon: d.xhG,
          hideWhenInactive: !H
        }), $ && (0, n.jsx)(es, {
          onClick: M,
          tooltipText: R ? et.intl.string(et.t.YqAjXy) : et.intl.string(et.t.w4m945),
          icon: R ? d.OyP : d.gj8,
          hideWhenInactive: !R && !H
        })]
      })]
    })]
  })
});
er.displayName = "CallTileOverlay";
let eo = Chunk352978.L,
  ec = ei