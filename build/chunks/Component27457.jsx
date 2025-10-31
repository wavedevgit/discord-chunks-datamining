/** Chunk was on 85496 **/
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
      participant: b,
      popoutType: v,
      onDoubleClick: O,
      onContextMenu: x,
      onClick: Z,
      onMouseDown: I,
      onKeyDown: N,
      className: S,
      style: Y,
      containerStyle: H,
      channel: B,
      width: Q,
      onVideoResize: K,
      inCall: et = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: eh = false,
      blocked: em = false,
      ignored: eg = false,
      fit: eb = T.L.CONTAIN,
      paused: ev = false,
      pulseSpeakingIndicator: ej = false,
      forceIdle: eO = false
    } = e, ey = i.useContext(A.h9) || eO, [ex, eZ] = i.useState(false), eI = _.Sb.useSetting(), eC = (0, s.e7)([U.default], () => U.default.isStreamInfoOverlayEnabled), [eT, eP] = i.useState(false), eE = (0, s.e7)([V.default], () => V.default.getId()), eN = b.type === ei.fO.ACTIVITY ? null : b.user, eS = null != (r = null == eN ? true : eN.id) ? r : null, [ew] = (0, g.Z)(b.type === ei.fO.ACTIVITY ? [b.applicationId] : []), ek = (0, s.e7)([L.Z], () => null != eS && L.Z.isLocalVideoDisabled(eS, (0, j.Z)(b.type)), [eS, b.type]), e_ = (0, s.e7)([L.Z], () => null != eS ? L.Z.getVideoToggleState(eS, (0, j.Z)(b.type)) : el.ZUi.NONE, [eS, b.type]), eA = (0, s.e7)([z.Z], () => z.Z.isCurrentUserPTTLatched()), eD = eS === eE, eM = e_ === el.ZUi.AUTO_PROBING, {
      speaking: eV,
      ringing: eU,
      hasVideo: eR
    } = (0, en.Z)(b, eE), eL = (0, s.e7)([k.Z], () => null !== eS && k.Z.isUserPlayingSounds(eS), [eS]), eG = function(e, t, n) {
      var l, i, r, a;
      let o = t.type !== ei.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([F.Z], () => {
          var e, t, l;
          let i = F.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (l = null == i ? true : i.suppress) && l,
            voiceChannelId: null == i ? true : i.channelId
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
        muted: null != (r = t.type === ei.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceMuted())) && r,
        deafened: null != (a = t.type === ei.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && a
      }
    }(eE, b, B.getGuildId()), ez = b.type === ei.fO.STREAM && eS === eE, eF = (0, s.e7)([D.Z], () => b.type === ei.fO.USER && null != eS ? D.Z.getEffectForUserId(eS) : null), eY = (0, s.e7)([F.Z], () => F.Z.getVoicePlatformForChannel(B.id, null != eS ? eS : el.lds)), {
      showGameIcon: eH
    } = C.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eB = (0, s.e7)([G.Z], () => eH && null != eS ? G.Z.findActivity(eS, e => null != e.application_id && e.type === el.IIU.PLAYING) : null, [eH, eS]), eQ = (0, s.e7)([R.Z], () => (null == eB ? true : eB.application_id) != null ? R.Z.getDetectableGame(eB.application_id) : null), eK = (0, s.e7)([m.Z], () => null != eQ && (null == eB ? true : eB.application_id) != null ? m.Z.getApplication(null == eB ? true : eB.application_id) : true), eW = (0, w.wV)({
      userId: eS,
      channelId: B.id
    }), eX = (0, w.zU)({
      streamKey: b.type === ei.fO.STREAM ? b.id : null,
      channelId: B.id
    }), eJ = i.useMemo(() => b.type === ei.fO.STREAM ? null != eX && eX : b.type === ei.fO.USER && null != eW && eW, [eX, eW, b.type]);
    i.useEffect(() => {
      eZ(eh)
    }, [eh]);
    let eq = i.useCallback(() => {
        null != eS && d.Z.toggleLocalMute(eS, ea.Yn.STREAM)
      }, [eS]),
      e$ = i.useCallback(e => {
        null == Z || Z(b, e)
      }, [Z, b]),
      e0 = i.useCallback(e => {
        null == O || O(b, e)
      }, [O, b]),
      e1 = i.useCallback((e, t, n) => {
        null == x || x(b, e, t, n)
      }, [x, b]),
      e4 = null,
      e8 = null,
      e7 = "";
    switch (b.type) {
      case ei.fO.STREAM:
        e4 = (0, l.jsx)($.Z, {
          participant: b,
          selected: eu,
          popoutType: v,
          width: Q,
          fit: eb,
          onVideoResize: K,
          paused: ev,
          focused: eh
        }), e8 = (0, l.jsx)($._, {
          participant: b,
          selected: eu,
          width: Q,
          focused: eh,
          idle: ey,
          premiumIndicator: false
        }), e7 = es.intl.formatToPlainString(es.t.gHPz3Q, {
          streamerName: b.user.username
        });
        break;
      case ei.fO.USER:
        e4 = (0, l.jsx)(ee.Z, {
          channel: B,
          inCall: et,
          participant: b,
          popoutType: v,
          fit: eb,
          onVideoResize: K,
          paused: ev,
          selected: eu,
          width: Q,
          blocked: em,
          ignored: eg,
          noVideoRender: ep || eM,
          pulseSpeakingIndicator: ej
        }), e8 = (0, l.jsx)(ee.T, {
          participant: b,
          channelId: B.id
        }), e7 = es.intl.formatToPlainString(es.t["iC/x/Q"], {
          username: b.user.username
        });
        break;
      case ei.fO.ACTIVITY:
        e4 = (0, l.jsx)(J.ZP, {
          interactible: eh,
          participant: b,
          selected: eu,
          channel: B,
          width: Q
        }), e7 = es.intl.formatToPlainString(es.t.YCvOsO, {
          activityName: null == ew ? true : ew.name
        });
        break;
      case ei.fO.HIDDEN_STREAM:
        e4 = (0, l.jsx)($.Z, {
          participant: b,
          selected: eu,
          width: Q,
          fit: eb,
          onVideoResize: K,
          paused: ev,
          popoutType: v,
          focused: eh
        })
    }
    let e3 = i.useRef(null),
      e9 = b.type === ei.fO.STREAM ? u.pzj : u.Odl;
    return (0, l.jsx)(f.Z, {
      section: el.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: a()(eo.wrapper, {
          [eo.ringing]: eU
        }, S),
        style: H,
        onMouseEnter: () => {
          eP(true)
        },
        onMouseLeave: () => {
          eP(false)
        },
        children: (0, l.jsxs)(E.Z, {
          shakeLocation: er.oZ.VOICE_USER,
          isShaking: eV,
          className: eo.tile,
          children: [(0, l.jsx)(q.Z, {
            ref: e3,
            className: a()(eo.tile, {
              [eo.noBorder]: ed,
              [eo.noInteraction]: null == Z,
              [eo.idle]: ey
            }),
            noBorder: ed,
            style: Y,
            participantUserId: eS,
            children: (0, l.jsxs)(u.kL8, {
              "aria-label": e7,
              className: eo.tileChild,
              onDoubleClick: e0,
              onContextMenu: e => e1(e, b.type === ei.fO.STREAM),
              onClick: e$,
              onMouseDown: I,
              onKeyDown: N,
              focusProps: {
                offset: 1
              },
              children: [null != eF && null != eS ? (0, l.jsx)(M.Z, {
                voiceChannelEffect: eF,
                onComplete: () => (0, D.H)(eS),
                userId: eS
              }) : null, b.type === ei.fO.USER ? (0, l.jsx)("div", {
                className: eo.voiceChannelEffectsContainer,
                children: (0, l.jsx)(y.Z, {
                  userId: eS,
                  channelId: B.id,
                  guildId: B.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e3 || null == (t = e3.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e3 || null == (n = e3.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ed ? null : (0, l.jsx)("div", {
                className: eo.indicators,
                children: e8
              }), eu ? (0, l.jsx)("div", {
                className: eo.selectedScreen,
                children: (0, l.jsx)(e9, {
                  size: "md",
                  color: "currentColor",
                  className: eo.selectedIcon
                })
              }) : null, ec.includes(b.type) ? null : (0, l.jsx)(ef, (p = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
                  })
                }
                return e
              }({
                focused: eh,
                width: Q,
                inCall: et,
                participantId: b.id,
                participantType: b.type,
                hasVideo: null != eR && eR
              }, eG), h = h = {
                idle: ey,
                platform: eY,
                title: (0, W.Z)(B, b),
                blocked: em,
                ignored: eg,
                localVideoDisabled: ek,
                videoToggleState: e_,
                hideAudioIcon: ez,
                onContextMenu: e1,
                onToggleMute: eq,
                participantUserId: eS,
                channel: B,
                application: eK,
                secureFramesVerified: eJ,
                isHovered: eT,
                popoutType: v
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(h)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(h, e))
              }), p)), et && !ed ? (0, l.jsx)("div", {
                className: a()(eo.border, {
                  [eo.voiceChannelEffect]: !eh && (eL || null != eF),
                  [eo.speaking]: eV && !eh && !eL,
                  [eo.latchedNotSpeaking]: eD && eA && !eV && !eh && !eL
                })
              }) : null]
            })
          }), eI && eC && eT && (0, l.jsx)(X.Z, {
            currentUserId: eE,
            participant: b
          }), (0, l.jsx)(P.Z, {
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
    className: i
  } = e;
  if (t === ei.fO.STREAM) return n === ei.wR.XBOX ? (0, l.jsx)(B.Z, {
    className: i
  }) : (0, l.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case ei.wR.MOBILE:
      return (0, l.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case ei.wR.XBOX:
      return (0, l.jsx)(B.Z, {
        className: i
      });
    case ei.wR.PLAYSTATION:
      return (0, l.jsx)(H.Z, {
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
    onClick: r
  } = e;
  return (0, l.jsx)(c.u, {
    text: n,
    children: (0, l.jsx)("div", {
      className: a()(eo.overlayButton, {
        [eo.hideWhenInactive]: i
      }),
      children: (0, l.jsx)(u.hU, {
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
  } = e, a = i.useMemo(() => (0, x.Z)(t, n), [t, n]), o = (0, s.e7)([N.Z], () => N.Z.getIsAlwaysOnTop(a)), c = i.useCallback(() => {
    S.hY(a, !o)
  }, [a, o]);
  return Q.isPlatformEmbedded && K.ZP.supportsFeature(el.eRX.POPOUT_WINDOWS) ? (0, l.jsx)(ep, {
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
    participantId: y,
    participantType: x,
    participantUserId: C,
    channel: T,
    platform: P,
    secureFramesVerified: E,
    onContextMenu: N,
    muted: w,
    deafened: k,
    localMuted: _,
    serverMuted: A,
    serverDeafened: D,
    hasVideo: M,
    hideAudioIcon: V,
    onToggleMute: U,
    popoutType: R
  } = e, G = (0, s.e7)([L.Z], () => null != C && L.Z.isLocalVideoAutoDisabled(C, (0, j.Z)(x)), [C, x]), z = (0, Z.Z)({
    userId: C,
    guildId: T.getGuildId()
  }), F = (0, I.j)({
    displayNameStyles: z
  }), H = (0, et.N)(r), B = (0, et.K)(r), [Q, K] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== Y.Z.isOpen() && ((e = Y.Z.isOpen()) || K(false))
      };
    return Y.Z.addChangeListener(t), () => Y.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: W
  } = (0, b.n)({
    location: "CallTile"
  }), X = (0, s.e7)([v.Z], () => v.Z.isParticipantPoppedOut(T.id, y), [T.id, y]), J = W && !X && R === O.P.NO_POPOUT && x !== ei.fO.ACTIVITY, q = !V && x === ei.fO.STREAM && M && (!B || _), $ = function(e) {
    let {
      localMuted: t,
      serverMuted: n,
      serverDeafened: l,
      deafened: i,
      muted: r
    } = e;
    return l ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : r ? u.nRN : null
  }({
    localMuted: _,
    serverMuted: A,
    serverDeafened: D,
    deafened: k,
    muted: w
  });
  return (0, l.jsxs)("div", {
    className: a()(eo.overlayContainer, {
      [eo.compact]: B,
      [eo.noPointerEvents]: d
    }),
    children: [(0, l.jsx)("div", {
      className: a()(eo.overlayTop, {
        [eo.small]: r < 195
      }),
      children: G || f === el.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: eo.status,
        children: (0, l.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: a()(eo.overlayTitle, eo.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: eo.status,
          children: (0, l.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: eo.overlayTitleText,
          children: es.intl.string(es.t.m2Hyj0)
        })]
      }) : null
    }), !H && (0, l.jsxs)("div", {
      className: a()(eo.overlayBottom, {
        [eo.small]: r < 195
      }),
      children: [(0, l.jsxs)(u.Text, {
        className: eo.experimentOverlayTitle,
        color: "none",
        variant: B ? "text-sm/normal" : "text-md/normal",
        children: [null != $ && x === ei.fO.USER && (0, l.jsx)($, {
          className: a()(eo.experimentTitleIcon, {
            [eo.compact]: B
          }),
          size: "xs",
          color: "currentColor"
        }), m ? (0, l.jsx)("div", {
          className: eo.blocked,
          children: (0, l.jsx)(u.t6m, {
            size: "lg",
            className: eo.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, g ? (0, l.jsx)("div", {
          className: eo.ignored,
          children: (0, l.jsx)(u.kZF, {
            size: "lg",
            className: eo.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(ed, {
          participantType: x,
          platform: P,
          className: a()(eo.experimentTitleIcon, {
            [eo.compact]: B
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: a()(eo.overlayTitleText, F),
          children: n
        }), E && (0, l.jsx)(c.u, {
          text: es.intl.string(es.t.ZEem6O),
          children: (0, l.jsx)(u.tQf, {
            className: eo.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": es.intl.string(es.t.mR9cf3)
          })
        })]
      }), d ? R === O.P.CALL_TILE ? (0, l.jsx)(eh, {
        channelId: T.id,
        participantId: y,
        isContextMenuOpen: Q
      }) : null : (0, l.jsxs)("div", {
        className: eo.overlayButtonContainer,
        children: [J && (0, l.jsx)(ep, {
          onClick: e => {
            e.stopPropagation();
            let t = v.Z.getParticipant(T.id, y);
            null != t && ((0, ei._5)(t) && (0, h.rn)(t.stream, {
              forceMultiple: true
            }), p.Z.popoutParticipant(T.id, y), S.fT(T.id, y))
          },
          tooltipText: es.intl.string(es.t.EVNd8X),
          icon: u.rgF,
          hideWhenInactive: !Q
        }), (0, l.jsx)(ep, {
          onClick: e => {
            e.stopPropagation(), K(true), N(e, true, ei.A5.THREE_DOT)
          },
          tooltipText: es.intl.string(es.t["+1H47t"]),
          icon: u.xhG,
          hideWhenInactive: !Q
        }), q && (0, l.jsx)(ep, {
          onClick: U,
          tooltipText: _ ? es.intl.string(es.t.YqAjXy) : es.intl.string(es.t.w4m945),
          icon: _ ? u.OyP : u.gj8,
          hideWhenInactive: !_ && !Q
        })]
      })]
    })]
  })
});
ef.displayName = "CallTileOverlay";
let em = Chunk352978.L,
  eg = eu