/** Chunk was on 29446 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => em,
  ZP: () => eg
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
    var t, n, r, o, c, p, h;
    let {
      participant: v,
      popoutType: b,
      onDoubleClick: y,
      onContextMenu: x,
      onClick: C,
      onMouseDown: Z,
      onKeyDown: N,
      className: S,
      style: H,
      containerStyle: B,
      channel: Y,
      width: W,
      onVideoResize: Q,
      inCall: et = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: eh = false,
      blocked: em = false,
      ignored: eg = false,
      fit: ev = P.L.CONTAIN,
      paused: eb = false,
      pulseSpeakingIndicator: ej = false,
      forceIdle: ey = false
    } = e, eO = l.useContext(D.h9) || ey, [ex, eC] = l.useState(false), eZ = k.Sb.useSetting(), eI = (0, s.e7)([U.default], () => U.default.isStreamInfoOverlayEnabled), [eP, eE] = l.useState(false), eT = (0, s.e7)([R.default], () => R.default.getId()), eN = v.type === el.fO.ACTIVITY ? null : v.user, eS = null != (r = null == eN ? true : eN.id) ? r : null, [eM] = (0, g.Z)(v.type === el.fO.ACTIVITY ? [v.applicationId] : []), ew = (0, s.e7)([L.Z], () => null != eS && L.Z.isLocalVideoDisabled(eS, (0, j.Z)(v.type)), [eS, v.type]), ek = (0, s.e7)([L.Z], () => null != eS ? L.Z.getVideoToggleState(eS, (0, j.Z)(v.type)) : ei.ZUi.NONE, [eS, v.type]), eD = (0, s.e7)([G.Z], () => G.Z.isCurrentUserPTTLatched()), eA = eS === eT && v.type === el.fO.USER, e_ = ek === ei.ZUi.AUTO_PROBING, {
      speaking: eR,
      ringing: eU,
      hasVideo: eV
    } = (0, en.Z)(v, eT), eL = (0, s.e7)([w.Z], () => null !== eS && w.Z.isUserPlayingSounds(eS), [eS]), eF = function(e, t, n) {
      var i, l, r, a;
      let o = t.type !== el.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([z.Z], () => {
          var e, t, i;
          let l = z.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == l ? true : l.mute) && e,
            deafened: null != (t = null == l ? true : l.deaf) && t,
            suppressed: null != (i = null == l ? true : l.suppress) && i,
            voiceChannelId: null == l ? true : l.channelId
          }
        }),
        u = (0, s.cj)([L.Z], () => {
          let n = (0, j.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: L.Z.isLocalMute(o, n),
            localVideoDisabled: L.Z.isLocalVideoDisabled(o, n),
            localVideoAutoDisabled: L.Z.isLocalVideoAutoDisabled(o, n)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === el.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceMuted())) && r,
        deafened: null != (a = t.type === el.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceDeafened())) && a
      }
    }(eT, v, Y.getGuildId()), eG = v.type === el.fO.STREAM && eS === eT, ez = (0, s.e7)([A.Z], () => v.type === el.fO.USER && null != eS ? A.Z.getEffectForUserId(eS) : null), eH = (0, s.e7)([z.Z], () => z.Z.getVoicePlatformForChannel(Y.id, null != eS ? eS : ei.lds)), {
      showGameIcon: eB
    } = I.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eY = (0, s.e7)([F.Z], () => eB && null != eS ? F.Z.findActivity(eS, e => null != e.application_id && e.type === ei.IIU.PLAYING) : null, [eB, eS]), eW = (0, s.e7)([V.Z], () => (null == eY ? true : eY.application_id) != null ? V.Z.getDetectableGame(eY.application_id) : null), eQ = (0, s.e7)([m.Z], () => null != eW && (null == eY ? true : eY.application_id) != null ? m.Z.getApplication(null == eY ? true : eY.application_id) : true), eK = (0, M.wV)({
      userId: eS,
      channelId: Y.id
    }), eX = (0, M.zU)({
      streamKey: v.type === el.fO.STREAM ? v.id : null,
      channelId: Y.id
    }), eJ = l.useMemo(() => v.type === el.fO.STREAM ? null != eX && eX : v.type === el.fO.USER && null != eK && eK, [eX, eK, v.type]);
    l.useEffect(() => {
      eC(eh)
    }, [eh]);
    let eq = l.useCallback(() => {
        null != eS && d.Z.toggleLocalMute(eS, ea.Yn.STREAM)
      }, [eS]),
      e$ = l.useCallback(e => {
        null == C || C(v, e)
      }, [C, v]),
      e0 = l.useCallback(e => {
        null == y || y(v, e)
      }, [y, v]),
      e1 = l.useCallback((e, t, n) => {
        null == x || x(v, e, t, n)
      }, [x, v]),
      e4 = null,
      e8 = null,
      e7 = "";
    switch (v.type) {
      case el.fO.STREAM:
        e4 = (0, i.jsx)($.Z, {
          participant: v,
          selected: eu,
          popoutType: b,
          width: W,
          fit: ev,
          onVideoResize: Q,
          paused: eb,
          focused: eh
        }), e8 = (0, i.jsx)($._, {
          participant: v,
          selected: eu,
          width: W,
          focused: eh,
          idle: eO,
          premiumIndicator: false
        }), e7 = es.intl.formatToPlainString(es.t.gHPz3Q, {
          streamerName: v.user.username
        });
        break;
      case el.fO.USER:
        e4 = (0, i.jsx)(ee.Z, {
          channel: Y,
          inCall: et,
          participant: v,
          popoutType: b,
          fit: ev,
          onVideoResize: Q,
          paused: eb,
          selected: eu,
          width: W,
          blocked: em,
          ignored: eg,
          noVideoRender: ep || e_,
          pulseSpeakingIndicator: ej
        }), e8 = (0, i.jsx)(ee.T, {
          participant: v,
          channelId: Y.id
        }), e7 = es.intl.formatToPlainString(es.t["iC/x/Q"], {
          username: v.user.username
        });
        break;
      case el.fO.ACTIVITY:
        e4 = (0, i.jsx)(J.ZP, {
          interactible: eh,
          participant: v,
          selected: eu,
          channel: Y,
          width: W
        }), e7 = es.intl.formatToPlainString(es.t.YCvOsO, {
          activityName: null == eM ? true : eM.name
        });
        break;
      case el.fO.HIDDEN_STREAM:
        e4 = (0, i.jsx)($.Z, {
          participant: v,
          selected: eu,
          width: W,
          fit: ev,
          onVideoResize: Q,
          paused: eb,
          popoutType: b,
          focused: eh
        })
    }
    let e3 = l.useRef(null),
      e9 = v.type === el.fO.STREAM ? u.pzj : u.Odl;
    return (0, i.jsx)(f.Z, {
      section: ei.jXE.VOICE_CHANNEL_TILE,
      children: (0, i.jsx)("div", {
        className: a()(eo.wrapper, {
          [eo.ringing]: eU
        }, S),
        style: B,
        onMouseEnter: () => {
          eE(true)
        },
        onMouseLeave: () => {
          eE(false)
        },
        children: (0, i.jsxs)(T.Z, {
          shakeLocation: er.oZ.VOICE_USER,
          isShaking: eR,
          className: eo.tile,
          children: [(0, i.jsx)(q.Z, {
            ref: e3,
            className: a()(eo.tile, {
              [eo.noBorder]: ed,
              [eo.noInteraction]: null == C,
              [eo.idle]: eO
            }),
            noBorder: ed,
            style: H,
            participantUserId: eS,
            children: (0, i.jsxs)(u.kL8, {
              "aria-label": e7,
              className: eo.tileChild,
              onDoubleClick: e0,
              onContextMenu: e => e1(e, v.type === el.fO.STREAM),
              onClick: e$,
              onMouseDown: Z,
              onKeyDown: N,
              focusProps: {
                offset: 1
              },
              children: [null != ez && null != eS ? (0, i.jsx)(_.Z, {
                voiceChannelEffect: ez,
                onComplete: () => (0, A.H)(eS),
                userId: eS
              }) : null, v.type === el.fO.USER ? (0, i.jsx)("div", {
                className: eo.voiceChannelEffectsContainer,
                children: (0, i.jsx)(O.Z, {
                  userId: eS,
                  channelId: Y.id,
                  guildId: Y.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e3 || null == (t = e3.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e3 || null == (n = e3.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ed ? null : (0, i.jsx)("div", {
                className: eo.indicators,
                children: e8
              }), eu ? (0, i.jsx)("div", {
                className: eo.selectedScreen,
                children: (0, i.jsx)(e9, {
                  size: "md",
                  color: "currentColor",
                  className: eo.selectedIcon
                })
              }) : null, ec.includes(v.type) ? null : (0, i.jsx)(ef, (p = function(e) {
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
                width: W,
                inCall: et,
                participantId: v.id,
                participantType: v.type,
                hasVideo: null != eV && eV
              }, eF), h = h = {
                idle: eO,
                platform: eH,
                title: (0, K.Z)(Y, v),
                blocked: em,
                ignored: eg,
                localVideoDisabled: ew,
                videoToggleState: ek,
                hideAudioIcon: eG,
                onContextMenu: e1,
                onToggleMute: eq,
                participantUserId: eS,
                channel: Y,
                application: eQ,
                secureFramesVerified: eJ,
                isHovered: eP,
                popoutType: b
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, i)
                }
                return n
              })(Object(h)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(h, e))
              }), p)), et && !ed ? (0, i.jsx)("div", {
                className: a()(eo.border, {
                  [eo.voiceChannelEffect]: !eh && (eL || null != ez),
                  [eo.speaking]: eR && !eh && !eL,
                  [eo.latchedNotSpeaking]: eA && eD && !eR && !eh && !eL
                })
              }) : null]
            })
          }), eZ && eI && eP && (0, i.jsx)(X.Z, {
            currentUserId: eT,
            participant: v
          }), (0, i.jsx)(E.Z, {
            isFiring: ex,
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
    className: l
  } = e;
  if (t === el.fO.STREAM) return n === el.wR.XBOX ? (0, i.jsx)(Y.Z, {
    className: l
  }) : (0, i.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: l
  });
  switch (n) {
    case el.wR.MOBILE:
      return (0, i.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    case el.wR.XBOX:
      return (0, i.jsx)(Y.Z, {
        className: l
      });
    case el.wR.PLAYSTATION:
      return (0, i.jsx)(B.Z, {
        className: l
      });
    default:
      return null
  }
}

function ep(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: l,
    onClick: r
  } = e;
  return (0, i.jsx)(c.u, {
    text: n,
    children: (0, i.jsx)("div", {
      className: a()(eo.overlayButton, {
        [eo.hideWhenInactive]: l
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

function eh(e) {
  let {
    channelId: t,
    participantId: n,
    isContextMenuOpen: r
  } = e, a = l.useMemo(() => (0, x.Z)(t, n), [t, n]), o = (0, s.e7)([N.Z], () => N.Z.getIsAlwaysOnTop(a)), c = l.useCallback(() => {
    S.hY(a, !o)
  }, [a, o]);
  return W.isPlatformEmbedded && Q.ZP.supportsFeature(ei.eRX.POPOUT_WINDOWS) ? (0, i.jsx)(ep, {
    onClick: c,
    tooltipText: o ? es.intl.string(es.t.YdyDM9) : es.intl.string(es.t.ZVGHwP),
    icon: o ? u.QVc : u.k5M,
    hideWhenInactive: !r
  }) : null
}
eu.displayName = "CallTile";
let ef = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: d,
    videoToggleState: f,
    blocked: m,
    ignored: g,
    participantId: O,
    participantType: x,
    participantUserId: I,
    channel: P,
    platform: E,
    secureFramesVerified: T,
    onContextMenu: N,
    muted: M,
    deafened: w,
    localMuted: k,
    serverMuted: D,
    serverDeafened: A,
    hasVideo: _,
    hideAudioIcon: R,
    onToggleMute: U,
    popoutType: V
  } = e, F = (0, s.e7)([L.Z], () => null != I && L.Z.isLocalVideoAutoDisabled(I, (0, j.Z)(x)), [I, x]), G = (0, C.Z)({
    userId: I,
    guildId: P.getGuildId()
  }), z = (0, Z.j)({
    displayNameStyles: G
  }), B = (0, et.N)(r), Y = (0, et.K)(r), [W, Q] = l.useState(false);
  l.useEffect(() => {
    let e = false,
      t = () => {
        e !== H.Z.isOpen() && ((e = H.Z.isOpen()) || Q(false))
      };
    return H.Z.addChangeListener(t), () => H.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: K
  } = (0, v.n)({
    location: "CallTile"
  }), X = (0, s.e7)([b.Z], () => b.Z.isParticipantPoppedOut(P.id, O), [P.id, O]), J = K && !X && V === y.P.NO_POPOUT && x !== el.fO.ACTIVITY, q = !R && x === el.fO.STREAM && _ && (!Y || k), $ = function(e) {
    let {
      localMuted: t,
      serverMuted: n,
      serverDeafened: i,
      deafened: l,
      muted: r
    } = e;
    return i ? u.Vm4 : n ? u.v0G : l ? u.wE8 : t ? u.v0G : r ? u.nRN : null
  }({
    localMuted: k,
    serverMuted: D,
    serverDeafened: A,
    deafened: w,
    muted: M
  });
  return (0, i.jsxs)("div", {
    className: a()(eo.overlayContainer, {
      [eo.compact]: Y,
      [eo.noPointerEvents]: d
    }),
    children: [(0, i.jsx)("div", {
      className: a()(eo.overlayTop, {
        [eo.small]: r < 195
      }),
      children: F || f === ei.ZUi.AUTO_PROBING ? t ? (0, i.jsx)("div", {
        className: eo.status,
        children: (0, i.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, i.jsxs)("div", {
        className: a()(eo.overlayTitle, eo.videoDisabledTitle),
        children: [(0, i.jsx)("div", {
          className: eo.status,
          children: (0, i.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: eo.overlayTitleText,
          children: es.intl.string(es.t.m2Hyj0)
        })]
      }) : null
    }), !B && (0, i.jsxs)("div", {
      className: a()(eo.overlayBottom, {
        [eo.small]: r < 195
      }),
      children: [(0, i.jsxs)(u.Text, {
        className: eo.experimentOverlayTitle,
        color: "none",
        variant: Y ? "text-sm/normal" : "text-md/normal",
        children: [null != $ && x === el.fO.USER && (0, i.jsx)($, {
          className: a()(eo.experimentTitleIcon, {
            [eo.compact]: Y
          }),
          size: "xs",
          color: "currentColor"
        }), m ? (0, i.jsx)("div", {
          className: eo.blocked,
          children: (0, i.jsx)(u.t6m, {
            size: "lg",
            className: eo.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, g ? (0, i.jsx)("div", {
          className: eo.ignored,
          children: (0, i.jsx)(u.kZF, {
            size: "lg",
            className: eo.blockedIcon
          })
        }) : null, t ? null : (0, i.jsx)(ed, {
          participantType: x,
          platform: E,
          className: a()(eo.experimentTitleIcon, {
            [eo.compact]: Y
          })
        }), null == n || "" === n || t ? null : (0, i.jsx)("span", {
          className: a()(eo.overlayTitleText, z),
          children: n
        }), T && (0, i.jsx)(c.u, {
          text: es.intl.string(es.t.ZEem6O),
          children: (0, i.jsx)(u.tQf, {
            className: eo.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": es.intl.string(es.t.mR9cf3)
          })
        })]
      }), d ? V === y.P.CALL_TILE ? (0, i.jsx)(eh, {
        channelId: P.id,
        participantId: O,
        isContextMenuOpen: W
      }) : null : (0, i.jsxs)("div", {
        className: eo.overlayButtonContainer,
        children: [J && (0, i.jsx)(ep, {
          onClick: e => {
            e.stopPropagation();
            let t = b.Z.getParticipant(P.id, O);
            null != t && ((0, el._5)(t) && (0, h.rn)(t.stream, {
              forceMultiple: true
            }), p.Z.popoutParticipant(P.id, O), S.fT(P.id, O))
          },
          tooltipText: es.intl.string(es.t.EVNd8X),
          icon: u.rgF,
          hideWhenInactive: !W
        }), (0, i.jsx)(ep, {
          onClick: e => {
            e.stopPropagation(), Q(true), N(e, true, el.A5.THREE_DOT)
          },
          tooltipText: es.intl.string(es.t["+1H47t"]),
          icon: u.xhG,
          hideWhenInactive: !W
        }), q && (0, i.jsx)(ep, {
          onClick: U,
          tooltipText: k ? es.intl.string(es.t.YqAjXy) : es.intl.string(es.t.w4m945),
          icon: k ? u.OyP : u.gj8,
          hideWhenInactive: !k && !W
        })]
      })]
    })]
  })
});
ef.displayName = "CallTileOverlay";
let em = Chunk352978.L,
  eg = eu