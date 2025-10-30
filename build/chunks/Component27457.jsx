/** Chunk was on 85496 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => ef,
  ZP: () => em
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
  Chunk400872 = require("./400872.js");
let eo = [Chunk354459.fO.ACTIVITY],
  ec = Chunk647438.memo(e => {
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
      style: F,
      containerStyle: Y,
      channel: H,
      width: B,
      onVideoResize: Q,
      inCall: ee = false,
      selected: ec = false,
      noBorder: eu = false,
      noVideoRender: ed = false,
      focused: ep = false,
      blocked: ef = false,
      ignored: em = false,
      fit: eg = T.L.CONTAIN,
      paused: eb = false,
      pulseSpeakingIndicator: ev = false,
      forceIdle: ej = false
    } = e, eO = i.useContext(A.h9) || ej, [ey, ex] = i.useState(false), eZ = _.Sb.useSetting(), eI = (0, s.e7)([U.default], () => U.default.isStreamInfoOverlayEnabled), [eC, eT] = i.useState(false), eP = (0, s.e7)([V.default], () => V.default.getId()), eE = b.type === el.fO.ACTIVITY ? null : b.user, eN = null != (r = null == eE ? true : eE.id) ? r : null, [eS] = (0, g.Z)(b.type === el.fO.ACTIVITY ? [b.applicationId] : []), ew = (0, s.e7)([L.Z], () => null != eN && L.Z.isLocalVideoDisabled(eN, (0, j.Z)(b.type)), [eN, b.type]), ek = (0, s.e7)([L.Z], () => null != eN ? L.Z.getVideoToggleState(eN, (0, j.Z)(b.type)) : en.ZUi.NONE, [eN, b.type]), e_ = ek === en.ZUi.AUTO_PROBING, {
      speaking: eA,
      ringing: eD,
      hasVideo: eM
    } = (0, et.Z)(b, eP), eV = (0, s.e7)([k.Z], () => null !== eN && k.Z.isUserPlayingSounds(eN), [eN]), eU = function(e, t, n) {
      var l, i, r, a;
      let o = t.type !== el.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([z.Z], () => {
          var e, t, l;
          let i = z.Z.getVoiceState(n, o);
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
        muted: null != (r = t.type === el.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceMuted())) && r,
        deafened: null != (a = t.type === el.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && a
      }
    }(eP, b, H.getGuildId()), eR = b.type === el.fO.STREAM && eN === eP, eL = (0, s.e7)([D.Z], () => b.type === el.fO.USER && null != eN ? D.Z.getEffectForUserId(eN) : null), eG = (0, s.e7)([z.Z], () => z.Z.getVoicePlatformForChannel(H.id, null != eN ? eN : en.lds)), {
      showGameIcon: ez
    } = C.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eF = (0, s.e7)([G.Z], () => ez && null != eN ? G.Z.findActivity(eN, e => null != e.application_id && e.type === en.IIU.PLAYING) : null, [ez, eN]), eY = (0, s.e7)([R.Z], () => (null == eF ? true : eF.application_id) != null ? R.Z.getDetectableGame(eF.application_id) : null), eH = (0, s.e7)([m.Z], () => null != eY && (null == eF ? true : eF.application_id) != null ? m.Z.getApplication(null == eF ? true : eF.application_id) : true), eB = (0, w.wV)({
      userId: eN,
      channelId: H.id
    }), eQ = (0, w.zU)({
      streamKey: b.type === el.fO.STREAM ? b.id : null,
      channelId: H.id
    }), eK = i.useMemo(() => b.type === el.fO.STREAM ? null != eQ && eQ : b.type === el.fO.USER && null != eB && eB, [eQ, eB, b.type]);
    i.useEffect(() => {
      ex(ep)
    }, [ep]);
    let eW = i.useCallback(() => {
        null != eN && d.Z.toggleLocalMute(eN, er.Yn.STREAM)
      }, [eN]),
      eX = i.useCallback(e => {
        null == Z || Z(b, e)
      }, [Z, b]),
      eJ = i.useCallback(e => {
        null == O || O(b, e)
      }, [O, b]),
      eq = i.useCallback((e, t, n) => {
        null == x || x(b, e, t, n)
      }, [x, b]),
      e$ = null,
      e0 = null,
      e1 = "";
    switch (b.type) {
      case el.fO.STREAM:
        e$ = (0, l.jsx)(q.Z, {
          participant: b,
          selected: ec,
          popoutType: v,
          width: B,
          fit: eg,
          onVideoResize: Q,
          paused: eb,
          focused: ep
        }), e0 = (0, l.jsx)(q._, {
          participant: b,
          selected: ec,
          width: B,
          focused: ep,
          idle: eO,
          premiumIndicator: false
        }), e1 = ea.intl.formatToPlainString(ea.t.gHPz3Q, {
          streamerName: b.user.username
        });
        break;
      case el.fO.USER:
        e$ = (0, l.jsx)($.Z, {
          channel: H,
          inCall: ee,
          participant: b,
          popoutType: v,
          fit: eg,
          onVideoResize: Q,
          paused: eb,
          selected: ec,
          width: B,
          blocked: ef,
          ignored: em,
          noVideoRender: ed || e_,
          pulseSpeakingIndicator: ev
        }), e0 = (0, l.jsx)($.T, {
          participant: b,
          channelId: H.id
        }), e1 = ea.intl.formatToPlainString(ea.t["iC/x/Q"], {
          username: b.user.username
        });
        break;
      case el.fO.ACTIVITY:
        e$ = (0, l.jsx)(X.ZP, {
          interactible: ep,
          participant: b,
          selected: ec,
          channel: H,
          width: B
        }), e1 = ea.intl.formatToPlainString(ea.t.YCvOsO, {
          activityName: null == eS ? true : eS.name
        });
        break;
      case el.fO.HIDDEN_STREAM:
        e$ = (0, l.jsx)(q.Z, {
          participant: b,
          selected: ec,
          width: B,
          fit: eg,
          onVideoResize: Q,
          paused: eb,
          popoutType: v,
          focused: ep
        })
    }
    let e4 = i.useRef(null),
      e8 = b.type === el.fO.STREAM ? u.pzj : u.Odl;
    return (0, l.jsx)(f.Z, {
      section: en.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: a()(es.wrapper, {
          [es.ringing]: eD
        }, S),
        style: Y,
        onMouseEnter: () => {
          eT(true)
        },
        onMouseLeave: () => {
          eT(false)
        },
        children: (0, l.jsxs)(E.Z, {
          shakeLocation: ei.oZ.VOICE_USER,
          isShaking: eA,
          className: es.tile,
          children: [(0, l.jsx)(J.Z, {
            ref: e4,
            className: a()(es.tile, {
              [es.noBorder]: eu,
              [es.noInteraction]: null == Z,
              [es.idle]: eO
            }),
            noBorder: eu,
            style: F,
            participantUserId: eN,
            children: (0, l.jsxs)(u.kL8, {
              "aria-label": e1,
              className: es.tileChild,
              onDoubleClick: eJ,
              onContextMenu: e => eq(e, b.type === el.fO.STREAM),
              onClick: eX,
              onMouseDown: I,
              onKeyDown: N,
              focusProps: {
                offset: 1
              },
              children: [null != eL && null != eN ? (0, l.jsx)(M.Z, {
                voiceChannelEffect: eL,
                onComplete: () => (0, D.H)(eN),
                userId: eN
              }) : null, b.type === el.fO.USER ? (0, l.jsx)("div", {
                className: es.voiceChannelEffectsContainer,
                children: (0, l.jsx)(y.Z, {
                  userId: eN,
                  channelId: H.id,
                  guildId: H.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e4 || null == (t = e4.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e4 || null == (n = e4.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e$, eu ? null : (0, l.jsx)("div", {
                className: es.indicators,
                children: e0
              }), ec ? (0, l.jsx)("div", {
                className: es.selectedScreen,
                children: (0, l.jsx)(e8, {
                  size: "md",
                  color: "currentColor",
                  className: es.selectedIcon
                })
              }) : null, eo.includes(b.type) ? null : (0, l.jsx)(eh, (p = function(e) {
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
                focused: ep,
                width: B,
                inCall: ee,
                participantId: b.id,
                participantType: b.type,
                hasVideo: null != eM && eM
              }, eU), h = h = {
                idle: eO,
                platform: eG,
                title: (0, K.Z)(H, b),
                blocked: ef,
                ignored: em,
                localVideoDisabled: ew,
                videoToggleState: ek,
                hideAudioIcon: eR,
                onContextMenu: eq,
                onToggleMute: eW,
                participantUserId: eN,
                channel: H,
                application: eH,
                secureFramesVerified: eK,
                isHovered: eC,
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
              }), p)), ee && !eu ? (0, l.jsx)("div", {
                className: a()(es.border, {
                  [es.voiceChannelEffect]: !ep && (eV || null != eL),
                  [es.speaking]: eA && !ep && !eV
                })
              }) : null]
            })
          }), eZ && eI && eC && (0, l.jsx)(W.Z, {
            currentUserId: eP,
            participant: b
          }), (0, l.jsx)(P.Z, {
            isFiring: ey,
            callTileRef: e4.current
          })]
        })
      })
    })
  });

function eu(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === el.fO.STREAM) return n === el.wR.XBOX ? (0, l.jsx)(H.Z, {
    className: i
  }) : (0, l.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case el.wR.MOBILE:
      return (0, l.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case el.wR.XBOX:
      return (0, l.jsx)(H.Z, {
        className: i
      });
    case el.wR.PLAYSTATION:
      return (0, l.jsx)(Y.Z, {
        className: i
      });
    default:
      return null
  }
}

function ed(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: r
  } = e;
  return (0, l.jsx)(c.u, {
    text: n,
    children: (0, l.jsx)("div", {
      className: a()(es.overlayButton, {
        [es.hideWhenInactive]: i
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

function ep(e) {
  let {
    channelId: t,
    participantId: n,
    isContextMenuOpen: r
  } = e, a = i.useMemo(() => (0, x.Z)(t, n), [t, n]), o = (0, s.e7)([N.Z], () => N.Z.getIsAlwaysOnTop(a)), c = i.useCallback(() => {
    S.hY(a, !o)
  }, [a, o]);
  return B.isPlatformEmbedded && Q.ZP.supportsFeature(en.eRX.POPOUT_WINDOWS) ? (0, l.jsx)(ed, {
    onClick: c,
    tooltipText: o ? ea.intl.string(ea.t.YdyDM9) : ea.intl.string(ea.t.ZVGHwP),
    icon: o ? u.QVc : u.k5M,
    hideWhenInactive: !r
  }) : null
}
ec.displayName = "CallTile";
let eh = Chunk647438.memo(e => {
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
  }), Y = (0, I.j)({
    displayNameStyles: z
  }), H = (0, ee.N)(r), B = (0, ee.K)(r), [Q, K] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== F.Z.isOpen() && ((e = F.Z.isOpen()) || K(false))
      };
    return F.Z.addChangeListener(t), () => F.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: W
  } = (0, b.n)({
    location: "CallTile"
  }), X = (0, s.e7)([v.Z], () => v.Z.isParticipantPoppedOut(T.id, y), [T.id, y]), J = W && !X && R === O.P.NO_POPOUT && x !== el.fO.ACTIVITY, q = !V && x === el.fO.STREAM && M && (!B || _), $ = function(e) {
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
    className: a()(es.overlayContainer, {
      [es.compact]: B,
      [es.noPointerEvents]: d
    }),
    children: [(0, l.jsx)("div", {
      className: a()(es.overlayTop, {
        [es.small]: r < 195
      }),
      children: G || f === en.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: es.status,
        children: (0, l.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: a()(es.overlayTitle, es.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: es.status,
          children: (0, l.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: es.overlayTitleText,
          children: ea.intl.string(ea.t.m2Hyj0)
        })]
      }) : null
    }), !H && (0, l.jsxs)("div", {
      className: a()(es.overlayBottom, {
        [es.small]: r < 195
      }),
      children: [(0, l.jsxs)(u.Text, {
        className: es.experimentOverlayTitle,
        color: "none",
        variant: B ? "text-sm/normal" : "text-md/normal",
        children: [null != $ && x === el.fO.USER && (0, l.jsx)($, {
          className: a()(es.experimentTitleIcon, {
            [es.compact]: B
          }),
          size: "xs",
          color: "currentColor"
        }), m ? (0, l.jsx)("div", {
          className: es.blocked,
          children: (0, l.jsx)(u.t6m, {
            size: "lg",
            className: es.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, g ? (0, l.jsx)("div", {
          className: es.ignored,
          children: (0, l.jsx)(u.kZF, {
            size: "lg",
            className: es.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(eu, {
          participantType: x,
          platform: P,
          className: a()(es.experimentTitleIcon, {
            [es.compact]: B
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: a()(es.overlayTitleText, Y),
          children: n
        }), E && (0, l.jsx)(c.u, {
          text: ea.intl.string(ea.t.ZEem6O),
          children: (0, l.jsx)(u.tQf, {
            className: es.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": ea.intl.string(ea.t.mR9cf3)
          })
        })]
      }), d ? R === O.P.CALL_TILE ? (0, l.jsx)(ep, {
        channelId: T.id,
        participantId: y,
        isContextMenuOpen: Q
      }) : null : (0, l.jsxs)("div", {
        className: es.overlayButtonContainer,
        children: [J && (0, l.jsx)(ed, {
          onClick: e => {
            e.stopPropagation();
            let t = v.Z.getParticipant(T.id, y);
            null != t && ((0, el._5)(t) && (0, h.rn)(t.stream, {
              forceMultiple: true
            }), p.Z.popoutParticipant(T.id, y), S.fT(T.id, y))
          },
          tooltipText: ea.intl.string(ea.t.EVNd8X),
          icon: u.rgF,
          hideWhenInactive: !Q
        }), (0, l.jsx)(ed, {
          onClick: e => {
            e.stopPropagation(), K(true), N(e, true, el.A5.THREE_DOT)
          },
          tooltipText: ea.intl.string(ea.t["+1H47t"]),
          icon: u.xhG,
          hideWhenInactive: !Q
        }), q && (0, l.jsx)(ed, {
          onClick: U,
          tooltipText: _ ? ea.intl.string(ea.t.YqAjXy) : ea.intl.string(ea.t.w4m945),
          icon: _ ? u.OyP : u.gj8,
          hideWhenInactive: !_ && !Q
        })]
      })]
    })]
  })
});
eh.displayName = "CallTileOverlay";
let ef = Chunk352978.L,
  em = ec