/** Chunk was on 56710 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => eg,
  ZP: () => em
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
let ec = [Chunk354459.fO.ACTIVITY],
  eu = Chunk647438.memo(e => {
    var t, n, l, s, c, p, h;
    let {
      participant: b,
      popoutType: _,
      onDoubleClick: O,
      onContextMenu: j,
      onClick: C,
      onMouseDown: x,
      onKeyDown: N,
      className: Z,
      style: H,
      containerStyle: z,
      channel: W,
      width: K,
      onVideoResize: Y,
      inCall: et = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: eh = false,
      blocked: eg = false,
      ignored: em = false,
      fit: eb = S.L.CONTAIN,
      paused: e_ = false,
      pulseSpeakingIndicator: ey = false,
      forceIdle: eO = false
    } = e, ev = i.useContext(R.h9) || eO, [ej, eC] = i.useState(false), ex = A.Sb.useSetting(), eE = (0, a.e7)([k.default], () => k.default.isStreamInfoOverlayEnabled), [eS, eI] = i.useState(false), eP = (0, a.e7)([M.default], () => M.default.getId()), eN = b.type === ei.fO.ACTIVITY ? null : b.user, eZ = null != (l = null == eN ? true : eN.id) ? l : null, [ew] = (0, m.Z)(b.type === ei.fO.ACTIVITY ? [b.applicationId] : []), eT = (0, a.e7)([U.Z], () => null != eZ && U.Z.isLocalVideoDisabled(eZ, (0, y.Z)(b.type)), [eZ, b.type]), eA = (0, a.e7)([U.Z], () => null != eZ ? U.Z.getVideoToggleState(eZ, (0, y.Z)(b.type)) : er.ZUi.NONE, [eZ, b.type]), eR = (0, a.e7)([F.Z], () => F.Z.isCurrentUserPTTLatched()), eD = eZ === eP, eL = eA === er.ZUi.AUTO_PROBING, {
      speaking: eM,
      ringing: ek,
      hasVideo: eG
    } = (0, en.Z)(b, eP), eU = (0, a.e7)([T.Z], () => null !== eZ && T.Z.isUserPlayingSounds(eZ), [eZ]), eB = function(e, t, n) {
      var r, i, l, o;
      let s = t.type !== ei.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([V.Z], () => {
          var e, t, r;
          let i = V.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (r = null == i ? true : i.suppress) && r,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, a.cj)([U.Z], () => {
          let n = (0, y.Z)(t.type);
          return e === s ? {
            muted: false,
            deafened: false
          } : {
            muted: U.Z.isLocalMute(s, n),
            localVideoDisabled: U.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: U.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (l = t.type === ei.fO.USER && (null == (r = t.voiceState) ? true : r.isVoiceMuted())) && l,
        deafened: null != (o = t.type === ei.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && o
      }
    }(eP, b, W.getGuildId()), eF = b.type === ei.fO.STREAM && eZ === eP, eV = (0, a.e7)([D.Z], () => b.type === ei.fO.USER && null != eZ ? D.Z.getEffectForUserId(eZ) : null), eH = (0, a.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(W.id, null != eZ ? eZ : er.lds)), {
      showGameIcon: ez
    } = E.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eW = (0, a.e7)([B.Z], () => ez && null != eZ ? B.Z.findActivity(eZ, e => null != e.application_id && e.type === er.IIU.PLAYING) : null, [ez, eZ]), eK = (0, a.e7)([G.Z], () => (null == eW ? true : eW.application_id) != null ? G.Z.getDetectableGame(eW.application_id) : null), eY = (0, a.e7)([g.Z], () => null != eK && (null == eW ? true : eW.application_id) != null ? g.Z.getApplication(null == eW ? true : eW.application_id) : true), eq = (0, w.wV)({
      userId: eZ,
      channelId: W.id
    }), eX = (0, w.zU)({
      streamKey: b.type === ei.fO.STREAM ? b.id : null,
      channelId: W.id
    }), eQ = i.useMemo(() => b.type === ei.fO.STREAM ? null != eX && eX : b.type === ei.fO.USER && null != eq && eq, [eX, eq, b.type]);
    i.useEffect(() => {
      eC(eh)
    }, [eh]);
    let eJ = i.useCallback(() => {
        null != eZ && d.Z.toggleLocalMute(eZ, eo.Yn.STREAM)
      }, [eZ]),
      e$ = i.useCallback(e => {
        null == C || C(b, e)
      }, [C, b]),
      e0 = i.useCallback(e => {
        null == O || O(b, e)
      }, [O, b]),
      e1 = i.useCallback((e, t, n) => {
        null == j || j(b, e, t, n)
      }, [j, b]),
      e4 = null,
      e8 = null,
      e6 = "";
    switch (b.type) {
      case ei.fO.STREAM:
        e4 = (0, r.jsx)($.Z, {
          participant: b,
          selected: eu,
          popoutType: _,
          width: K,
          fit: eb,
          onVideoResize: Y,
          paused: e_,
          focused: eh
        }), e8 = (0, r.jsx)($._, {
          participant: b,
          selected: eu,
          width: K,
          focused: eh,
          idle: ev,
          premiumIndicator: false
        }), e6 = ea.intl.formatToPlainString(ea.t.gHPz3Q, {
          streamerName: b.user.username
        });
        break;
      case ei.fO.USER:
        e4 = (0, r.jsx)(ee.Z, {
          channel: W,
          inCall: et,
          participant: b,
          popoutType: _,
          fit: eb,
          onVideoResize: Y,
          paused: e_,
          selected: eu,
          width: K,
          blocked: eg,
          ignored: em,
          noVideoRender: ep || eL,
          pulseSpeakingIndicator: ey
        }), e8 = (0, r.jsx)(ee.T, {
          participant: b,
          channelId: W.id
        }), e6 = ea.intl.formatToPlainString(ea.t["iC/x/Q"], {
          username: b.user.username
        });
        break;
      case ei.fO.ACTIVITY:
        e4 = (0, r.jsx)(Q.ZP, {
          interactible: eh,
          participant: b,
          selected: eu,
          channel: W,
          width: K
        }), e6 = ea.intl.formatToPlainString(ea.t.YCvOsO, {
          activityName: null == ew ? true : ew.name
        });
        break;
      case ei.fO.HIDDEN_STREAM:
        e4 = (0, r.jsx)($.Z, {
          participant: b,
          selected: eu,
          width: K,
          fit: eb,
          onVideoResize: Y,
          paused: e_,
          popoutType: _,
          focused: eh
        })
    }
    let e3 = i.useRef(null),
      e2 = b.type === ei.fO.STREAM ? u.pzj : u.Odl;
    return (0, r.jsx)(f.Z, {
      section: er.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: o()(es.wrapper, {
          [es.ringing]: ek
        }, Z),
        style: z,
        onMouseEnter: () => {
          eI(true)
        },
        onMouseLeave: () => {
          eI(false)
        },
        children: (0, r.jsxs)(P.Z, {
          shakeLocation: el.oZ.VOICE_USER,
          isShaking: eM,
          className: es.tile,
          children: [(0, r.jsx)(J.Z, {
            ref: e3,
            className: o()(es.tile, {
              [es.noBorder]: ed,
              [es.noInteraction]: null == C,
              [es.idle]: ev
            }),
            noBorder: ed,
            style: H,
            participantUserId: eZ,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": e6,
              className: es.tileChild,
              onDoubleClick: e0,
              onContextMenu: e => e1(e, b.type === ei.fO.STREAM),
              onClick: e$,
              onMouseDown: x,
              onKeyDown: N,
              focusProps: {
                offset: 1
              },
              children: [null != eV && null != eZ ? (0, r.jsx)(L.Z, {
                voiceChannelEffect: eV,
                onComplete: () => (0, D.H)(eZ),
                userId: eZ
              }) : null, b.type === ei.fO.USER ? (0, r.jsx)("div", {
                className: es.voiceChannelEffectsContainer,
                children: (0, r.jsx)(v.Z, {
                  userId: eZ,
                  channelId: W.id,
                  guildId: W.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e3 || null == (t = e3.current) ? true : t.clientWidth) ? s : 0,
                    height: null != (c = null == e3 || null == (n = e3.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ed ? null : (0, r.jsx)("div", {
                className: es.indicators,
                children: e8
              }), eu ? (0, r.jsx)("div", {
                className: es.selectedScreen,
                children: (0, r.jsx)(e2, {
                  size: "md",
                  color: "currentColor",
                  className: es.selectedIcon
                })
              }) : null, ec.includes(b.type) ? null : (0, r.jsx)(ef, (p = function(e) {
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
                focused: eh,
                width: K,
                inCall: et,
                participantId: b.id,
                participantType: b.type,
                hasVideo: null != eG && eG
              }, eB), h = h = {
                idle: ev,
                platform: eH,
                title: (0, q.Z)(W, b),
                blocked: eg,
                ignored: em,
                localVideoDisabled: eT,
                videoToggleState: eA,
                hideAudioIcon: eF,
                onContextMenu: e1,
                onToggleMute: eJ,
                participantUserId: eZ,
                channel: W,
                application: eY,
                secureFramesVerified: eQ,
                isHovered: eS,
                popoutType: _
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(h)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(h, e))
              }), p)), et && !ed ? (0, r.jsx)("div", {
                className: o()(es.border, {
                  [es.voiceChannelEffect]: !eh && (eU || null != eV),
                  [es.speaking]: eM && !eh && !eU,
                  [es.latchedNotSpeaking]: eD && eR && !eM && !eh && !eU
                })
              }) : null]
            })
          }), ex && eE && eS && (0, r.jsx)(X.Z, {
            currentUserId: eP,
            participant: b
          }), (0, r.jsx)(I.Z, {
            isFiring: ej,
            callTileRef: e3.current
          })]
        })
      })
    })
  });

function ed(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === ei.fO.STREAM) return n === ei.wR.XBOX ? (0, r.jsx)(W.Z, {
    className: i
  }) : (0, r.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case ei.wR.MOBILE:
      return (0, r.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case ei.wR.XBOX:
      return (0, r.jsx)(W.Z, {
        className: i
      });
    case ei.wR.PLAYSTATION:
      return (0, r.jsx)(z.Z, {
        className: i
      });
    default:
      return null
  }
}

function ep(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: l
  } = e;
  return (0, r.jsx)(c.u, {
    text: n,
    children: (0, r.jsx)("div", {
      className: o()(es.overlayButton, {
        [es.hideWhenInactive]: i
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

function eh(e) {
  let {
    channelId: t,
    participantId: n,
    isContextMenuOpen: l
  } = e, o = i.useMemo(() => (0, j.Z)(t, n), [t, n]), s = (0, a.e7)([N.Z], () => N.Z.getIsAlwaysOnTop(o)), c = i.useCallback(() => {
    Z.hY(o, !s)
  }, [o, s]);
  return K.isPlatformEmbedded && Y.ZP.supportsFeature(er.eRX.POPOUT_WINDOWS) ? (0, r.jsx)(ep, {
    onClick: c,
    tooltipText: s ? ea.intl.string(ea.t.YdyDM9) : ea.intl.string(ea.t.ZVGHwP),
    icon: s ? u.QVc : u.k5M,
    hideWhenInactive: !l
  }) : null
}
eu.displayName = "CallTile";
let ef = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: l,
    focused: d,
    videoToggleState: f,
    blocked: g,
    ignored: m,
    participantId: v,
    participantType: j,
    participantUserId: E,
    channel: S,
    platform: I,
    secureFramesVerified: P,
    onContextMenu: N,
    muted: w,
    deafened: T,
    localMuted: A,
    serverMuted: R,
    serverDeafened: D,
    hasVideo: L,
    hideAudioIcon: M,
    onToggleMute: k,
    popoutType: G
  } = e, B = (0, a.e7)([U.Z], () => null != E && U.Z.isLocalVideoAutoDisabled(E, (0, y.Z)(j)), [E, j]), F = (0, C.Z)({
    userId: E,
    guildId: S.getGuildId()
  }), V = (0, x.j)({
    displayNameStyles: F
  }), z = (0, et.N)(l), W = (0, et.K)(l), [K, Y] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== H.Z.isOpen() && ((e = H.Z.isOpen()) || Y(false))
      };
    return H.Z.addChangeListener(t), () => H.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: q
  } = (0, b.n)({
    location: "CallTile"
  }), X = (0, a.e7)([_.Z], () => _.Z.isParticipantPoppedOut(S.id, v), [S.id, v]), Q = q && !X && G === O.P.NO_POPOUT && j !== ei.fO.ACTIVITY, J = !M && j === ei.fO.STREAM && L && (!W || A), $ = function(e) {
    let {
      localMuted: t,
      serverMuted: n,
      serverDeafened: r,
      deafened: i,
      muted: l
    } = e;
    return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null
  }({
    localMuted: A,
    serverMuted: R,
    serverDeafened: D,
    deafened: T,
    muted: w
  });
  return (0, r.jsxs)("div", {
    className: o()(es.overlayContainer, {
      [es.compact]: W,
      [es.noPointerEvents]: d
    }),
    children: [(0, r.jsx)("div", {
      className: o()(es.overlayTop, {
        [es.small]: l < 195
      }),
      children: B || f === er.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: es.status,
        children: (0, r.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(es.overlayTitle, es.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: es.status,
          children: (0, r.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: es.overlayTitleText,
          children: ea.intl.string(ea.t.m2Hyj0)
        })]
      }) : null
    }), !z && (0, r.jsxs)("div", {
      className: o()(es.overlayBottom, {
        [es.small]: l < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: es.experimentOverlayTitle,
        color: "none",
        variant: W ? "text-sm/normal" : "text-md/normal",
        children: [null != $ && j === ei.fO.USER && (0, r.jsx)($, {
          className: o()(es.experimentTitleIcon, {
            [es.compact]: W
          }),
          size: "xs",
          color: "currentColor"
        }), g ? (0, r.jsx)("div", {
          className: es.blocked,
          children: (0, r.jsx)(u.t6m, {
            size: "lg",
            className: es.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, r.jsx)("div", {
          className: es.ignored,
          children: (0, r.jsx)(u.kZF, {
            size: "lg",
            className: es.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(ed, {
          participantType: j,
          platform: I,
          className: o()(es.experimentTitleIcon, {
            [es.compact]: W
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: o()(es.overlayTitleText, V),
          children: n
        }), P && (0, r.jsx)(c.u, {
          text: ea.intl.string(ea.t.ZEem6O),
          children: (0, r.jsx)(u.tQf, {
            className: es.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": ea.intl.string(ea.t.mR9cf3)
          })
        })]
      }), d ? G === O.P.CALL_TILE ? (0, r.jsx)(eh, {
        channelId: S.id,
        participantId: v,
        isContextMenuOpen: K
      }) : null : (0, r.jsxs)("div", {
        className: es.overlayButtonContainer,
        children: [Q && (0, r.jsx)(ep, {
          onClick: e => {
            e.stopPropagation();
            let t = _.Z.getParticipant(S.id, v);
            null != t && ((0, ei._5)(t) && (0, h.rn)(t.stream, {
              forceMultiple: true
            }), p.Z.popoutParticipant(S.id, v), Z.fT(S.id, v))
          },
          tooltipText: ea.intl.string(ea.t.EVNd8X),
          icon: u.rgF,
          hideWhenInactive: !K
        }), (0, r.jsx)(ep, {
          onClick: e => {
            e.stopPropagation(), Y(true), N(e, true, ei.A5.THREE_DOT)
          },
          tooltipText: ea.intl.string(ea.t["+1H47t"]),
          icon: u.xhG,
          hideWhenInactive: !K
        }), J && (0, r.jsx)(ep, {
          onClick: k,
          tooltipText: A ? ea.intl.string(ea.t.YqAjXy) : ea.intl.string(ea.t.w4m945),
          icon: A ? u.OyP : u.gj8,
          hideWhenInactive: !A && !K
        })]
      })]
    })]
  })
});
ef.displayName = "CallTileOverlay";
let eg = Chunk352978.L,
  em = eu