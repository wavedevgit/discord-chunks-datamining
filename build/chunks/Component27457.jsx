/** Chunk was on 84983 **/
/** chunk id: 27457, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  BP: () => em,
  ZP: () => eI
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
let eo = [Chunk354459.fO.ACTIVITY],
  ec = Chunk647438.memo(e => {
    var t, l, a, o, c, p, f;
    let {
      participant: Z,
      popoutType: T,
      onDoubleClick: x,
      onContextMenu: y,
      onClick: j,
      onMouseDown: g,
      onKeyDown: A,
      className: P,
      style: G,
      containerStyle: H,
      channel: B,
      width: F,
      onVideoResize: W,
      inCall: ee = false,
      selected: ec = false,
      noBorder: ed = false,
      noVideoRender: eu = false,
      focused: ep = false,
      blocked: em = false,
      ignored: eI = false,
      fit: eh = N.L.CONTAIN,
      paused: eZ = false,
      pulseSpeakingIndicator: eT = false,
      forceIdle: ev = false
    } = e, ex = i.useContext(w.h9) || ev, [eO, ey] = i.useState(false), ej = R.Sb.useSetting(), eg = (0, r.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled), [eC, eN] = i.useState(false), eb = (0, r.e7)([M.default], () => M.default.getId()), eE = Z.type === en.fO.ACTIVITY ? null : Z.user, eA = null != (a = null == eE ? true : eE.id) ? a : null, [eP] = (0, h.Z)(Z.type === en.fO.ACTIVITY ? [Z.applicationId] : []), eS = (0, r.e7)([L.Z], () => null != eA && L.Z.isLocalVideoDisabled(eA, (0, v.Z)(Z.type)), [eA, Z.type]), eV = (0, r.e7)([L.Z], () => null != eA ? L.Z.getVideoToggleState(eA, (0, v.Z)(Z.type)) : el.ZUi.NONE, [eA, Z.type]), eR = eV === el.ZUi.AUTO_PROBING, {
      speaking: ew,
      ringing: e_,
      hasVideo: ek
    } = (0, et.Z)(Z, eb), eM = (0, r.e7)([V.Z], () => null !== eA && V.Z.isUserPlayingSounds(eA), [eA]), eD = function(e, t, l) {
      var n, i, a, s;
      let o = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, r.cj)([Y.Z], () => {
          var e, t, n;
          let i = Y.Z.getVoiceState(l, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (n = null == i ? true : i.suppress) && n,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        d = (0, r.cj)([L.Z], () => {
          let l = (0, v.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: L.Z.isLocalMute(o, l),
            localVideoDisabled: L.Z.isLocalVideoDisabled(o, l),
            localVideoAutoDisabled: L.Z.isLocalVideoAutoDisabled(o, l)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: d.muted,
        muted: null != (a = t.type === en.fO.USER && (null == (n = t.voiceState) ? true : n.isVoiceMuted())) && a,
        deafened: null != (s = t.type === en.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(eb, Z, B.getGuildId()), eU = Z.type === en.fO.STREAM && eA === eb, eL = (0, r.e7)([_.Z], () => Z.type === en.fO.USER && null != eA ? _.Z.getEffectForUserId(eA) : null), ez = (0, r.e7)([Y.Z], () => Y.Z.getVoicePlatformForChannel(B.id, null != eA ? eA : el.lds)), {
      showGameIcon: eY
    } = C.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eG = (0, r.e7)([z.Z], () => eY && null != eA ? z.Z.findActivity(eA, e => null != e.application_id && e.type === el.IIU.PLAYING) : null, [eY, eA]), eH = (0, r.e7)([U.Z], () => (null == eG ? true : eG.application_id) != null ? U.Z.getDetectableGame(eG.application_id) : null), eB = (0, r.e7)([I.Z], () => null != eH && (null == eG ? true : eG.application_id) != null ? I.Z.getApplication(null == eG ? true : eG.application_id) : true), eF = (0, S.wV)({
      userId: eA,
      channelId: B.id
    }), eW = (0, S.zU)({
      streamKey: Z.type === en.fO.STREAM ? Z.id : null,
      channelId: B.id
    }), eX = i.useMemo(() => Z.type === en.fO.STREAM ? null != eW && eW : Z.type === en.fO.USER && null != eF && eF, [eW, eF, Z.type]);
    i.useEffect(() => {
      ey(ep)
    }, [ep]);
    let eQ = i.useCallback(() => {
        null != eA && u.Z.toggleLocalMute(eA, ea.Yn.STREAM)
      }, [eA]),
      eJ = i.useCallback(e => {
        null == j || j(Z, e)
      }, [j, Z]),
      eK = i.useCallback(e => {
        null == x || x(Z, e)
      }, [x, Z]),
      eq = i.useCallback((e, t, l) => {
        null == y || y(Z, e, t, l)
      }, [y, Z]),
      e$ = null,
      e0 = null,
      e7 = "";
    switch (Z.type) {
      case en.fO.STREAM:
        e$ = (0, n.jsx)(q.Z, {
          participant: Z,
          selected: ec,
          popoutType: T,
          width: F,
          fit: eh,
          onVideoResize: W,
          paused: eZ,
          focused: ep
        }), e0 = (0, n.jsx)(q._, {
          participant: Z,
          selected: ec,
          width: F,
          focused: ep,
          idle: ex,
          premiumIndicator: false
        }), e7 = es.intl.formatToPlainString(es.t.gHPz3Q, {
          streamerName: Z.user.username
        });
        break;
      case en.fO.USER:
        e$ = (0, n.jsx)($.Z, {
          channel: B,
          inCall: ee,
          participant: Z,
          popoutType: T,
          fit: eh,
          onVideoResize: W,
          paused: eZ,
          selected: ec,
          width: F,
          blocked: em,
          ignored: eI,
          noVideoRender: eu || eR,
          pulseSpeakingIndicator: eT
        }), e0 = (0, n.jsx)($.T, {
          participant: Z,
          channelId: B.id
        }), e7 = es.intl.formatToPlainString(es.t["iC/x/Q"], {
          username: Z.user.username
        });
        break;
      case en.fO.ACTIVITY:
        e$ = (0, n.jsx)(J.ZP, {
          interactible: ep,
          participant: Z,
          selected: ec,
          channel: B,
          width: F
        }), e7 = es.intl.formatToPlainString(es.t.YCvOsO, {
          activityName: null == eP ? true : eP.name
        });
        break;
      case en.fO.HIDDEN_STREAM:
        e$ = (0, n.jsx)(q.Z, {
          participant: Z,
          selected: ec,
          width: F,
          fit: eh,
          onVideoResize: W,
          paused: eZ,
          popoutType: T,
          focused: ep
        })
    }
    let e1 = i.useRef(null),
      e4 = Z.type === en.fO.STREAM ? d.pzj : d.Odl;
    return (0, n.jsx)(m.Z, {
      section: el.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsx)("div", {
        className: s()(er.wrapper, {
          [er.ringing]: e_
        }, P),
        style: H,
        onMouseEnter: () => {
          eN(true)
        },
        onMouseLeave: () => {
          eN(false)
        },
        children: (0, n.jsxs)(E.Z, {
          shakeLocation: ei.oZ.VOICE_USER,
          isShaking: ew,
          className: er.tile,
          children: [(0, n.jsx)(K.Z, {
            ref: e1,
            className: s()(er.tile, {
              [er.noBorder]: ed,
              [er.noInteraction]: null == j,
              [er.idle]: ex
            }),
            noBorder: ed,
            style: G,
            participantUserId: eA,
            children: (0, n.jsxs)(d.kL8, {
              "aria-label": e7,
              className: er.tileChild,
              onDoubleClick: eK,
              onContextMenu: e => eq(e, Z.type === en.fO.STREAM),
              onClick: eJ,
              onMouseDown: g,
              onKeyDown: A,
              focusProps: {
                offset: 1
              },
              children: [null != eL && null != eA ? (0, n.jsx)(k.Z, {
                voiceChannelEffect: eL,
                onComplete: () => (0, _.H)(eA),
                userId: eA
              }) : null, Z.type === en.fO.USER ? (0, n.jsx)("div", {
                className: er.voiceChannelEffectsContainer,
                children: (0, n.jsx)(O.Z, {
                  userId: eA,
                  channelId: B.id,
                  guildId: B.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e1 || null == (t = e1.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e1 || null == (l = e1.current) ? true : l.clientHeight) ? c : 0
                  }
                })
              }) : null, e$, ed ? null : (0, n.jsx)("div", {
                className: er.indicators,
                children: e0
              }), ec ? (0, n.jsx)("div", {
                className: er.selectedScreen,
                children: (0, n.jsx)(e4, {
                  size: "md",
                  color: "currentColor",
                  className: er.selectedIcon
                })
              }) : null, eo.includes(Z.type) ? null : (0, n.jsx)(ef, (p = function(e) {
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
                focused: ep,
                width: F,
                inCall: ee,
                participantId: Z.id,
                participantType: Z.type,
                hasVideo: null != ek && ek
              }, eD), f = f = {
                idle: ex,
                platform: ez,
                title: (0, X.Z)(B, Z),
                blocked: em,
                ignored: eI,
                localVideoDisabled: eS,
                videoToggleState: eV,
                hideAudioIcon: eU,
                onContextMenu: eq,
                onToggleMute: eQ,
                participantUserId: eA,
                channel: B,
                application: eB,
                secureFramesVerified: eX,
                isHovered: eC,
                popoutType: T
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
                var l = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  l.push.apply(l, n)
                }
                return l
              })(Object(f)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(f, e))
              }), p)), ee && !ed ? (0, n.jsx)("div", {
                className: s()(er.border, {
                  [er.voiceChannelEffect]: !ep && (eM || null != eL),
                  [er.speaking]: ew && !ep && !eM
                })
              }) : null]
            })
          }), ej && eg && eC && (0, n.jsx)(Q.Z, {
            currentUserId: eb,
            participant: Z
          }), (0, n.jsx)(b.Z, {
            isFiring: eO,
            callTileRef: e1.current
          })]
        })
      })
    })
  });

function ed(e) {
  let {
    participantType: t,
    platform: l,
    className: i
  } = e;
  if (t === en.fO.STREAM) return l === en.wR.XBOX ? (0, n.jsx)(B.Z, {
    className: i
  }) : (0, n.jsx)(d.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (l) {
    case en.wR.MOBILE:
      return (0, n.jsx)(d.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case en.wR.XBOX:
      return (0, n.jsx)(B.Z, {
        className: i
      });
    case en.wR.PLAYSTATION:
      return (0, n.jsx)(H.Z, {
        className: i
      });
    default:
      return null
  }
}

function eu(e) {
  let {
    icon: t,
    tooltipText: l,
    hideWhenInactive: i,
    onClick: a
  } = e;
  return (0, n.jsx)(c.u, {
    text: l,
    children: (0, n.jsx)("div", {
      className: s()(er.overlayButton, {
        [er.hideWhenInactive]: i
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

function ep(e) {
  let {
    channelId: t,
    participantId: l,
    isContextMenuOpen: a
  } = e, s = i.useMemo(() => (0, y.Z)(t, l), [t, l]), o = (0, r.e7)([A.Z], () => A.Z.getIsAlwaysOnTop(s)), c = i.useCallback(() => {
    P.hY(s, !o)
  }, [s, o]);
  return F.isPlatformEmbedded && W.ZP.supportsFeature(el.eRX.POPOUT_WINDOWS) ? (0, n.jsx)(eu, {
    onClick: c,
    tooltipText: o ? es.intl.string(es.t.YdyDM9) : es.intl.string(es.t.ZVGHwP),
    icon: o ? d.QVc : d.k5M,
    hideWhenInactive: !a
  }) : null
}
ec.displayName = "CallTile";
let ef = Chunk647438.memo(e => {
  let {
    idle: t,
    title: l,
    width: a,
    focused: u,
    videoToggleState: m,
    blocked: I,
    ignored: h,
    participantId: O,
    participantType: y,
    participantUserId: C,
    channel: N,
    platform: b,
    secureFramesVerified: E,
    onContextMenu: A,
    muted: S,
    deafened: V,
    localMuted: R,
    serverMuted: w,
    serverDeafened: _,
    hasVideo: k,
    hideAudioIcon: M,
    onToggleMute: D,
    popoutType: U
  } = e, z = (0, r.e7)([L.Z], () => null != C && L.Z.isLocalVideoAutoDisabled(C, (0, v.Z)(y)), [C, y]), Y = (0, j.Z)({
    userId: C,
    guildId: N.getGuildId()
  }), H = (0, g.j)({
    displayNameStyles: Y
  }), B = (0, ee.N)(a), F = (0, ee.K)(a), [W, X] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== G.Z.isOpen() && ((e = G.Z.isOpen()) || X(false))
      };
    return G.Z.addChangeListener(t), () => G.Z.removeChangeListener(t)
  }, []);
  let {
    enabled: Q
  } = (0, Z.n)({
    location: "CallTile"
  }), J = (0, r.e7)([T.Z], () => T.Z.isParticipantPoppedOut(N.id, O), [N.id, O]), K = Q && !J && U === x.P.NO_POPOUT && y !== en.fO.ACTIVITY, q = !M && y === en.fO.STREAM && k && (!F || R), $ = function(e) {
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
    deafened: V,
    muted: S
  });
  return (0, n.jsxs)("div", {
    className: s()(er.overlayContainer, {
      [er.compact]: F
    }),
    children: [(0, n.jsx)("div", {
      className: s()(er.overlayTop, {
        [er.small]: a < 195
      }),
      children: z || m === el.ZUi.AUTO_PROBING ? t ? (0, n.jsx)("div", {
        className: er.status,
        children: (0, n.jsx)(d.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: s()(er.overlayTitle, er.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: er.status,
          children: (0, n.jsx)(d.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: er.overlayTitleText,
          children: es.intl.string(es.t.m2Hyj0)
        })]
      }) : null
    }), !B && (0, n.jsxs)("div", {
      className: s()(er.overlayBottom, {
        [er.small]: a < 195
      }),
      children: [(0, n.jsxs)(d.Text, {
        className: er.experimentOverlayTitle,
        color: "none",
        variant: F ? "text-sm/normal" : "text-md/normal",
        children: [null != $ && y === en.fO.USER && (0, n.jsx)($, {
          className: s()(er.experimentTitleIcon, {
            [er.compact]: F
          }),
          size: "xs",
          color: "currentColor"
        }), I ? (0, n.jsx)("div", {
          className: er.blocked,
          children: (0, n.jsx)(d.t6m, {
            size: "lg",
            className: er.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, h ? (0, n.jsx)("div", {
          className: er.ignored,
          children: (0, n.jsx)(d.kZF, {
            size: "lg",
            className: er.blockedIcon
          })
        }) : null, t ? null : (0, n.jsx)(ed, {
          participantType: y,
          platform: b,
          className: s()(er.experimentTitleIcon, {
            [er.compact]: F
          })
        }), null == l || "" === l || t ? null : (0, n.jsx)("span", {
          className: s()(er.overlayTitleText, H),
          children: l
        }), E && (0, n.jsx)(c.u, {
          text: es.intl.string(es.t.ZEem6O),
          children: (0, n.jsx)(d.tQf, {
            className: er.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": es.intl.string(es.t.mR9cf3)
          })
        })]
      }), u ? U === x.P.CALL_TILE ? (0, n.jsx)(ep, {
        channelId: N.id,
        participantId: O,
        isContextMenuOpen: W
      }) : null : (0, n.jsxs)("div", {
        className: er.overlayButtonContainer,
        children: [K && (0, n.jsx)(eu, {
          onClick: e => {
            e.stopPropagation();
            let t = T.Z.getParticipant(N.id, O);
            null != t && ((0, en._5)(t) && (0, f.rn)(t.stream, {
              forceMultiple: true
            }), p.Z.popoutParticipant(N.id, O), P.fT(N.id, O))
          },
          tooltipText: es.intl.string(es.t.EVNd8X),
          icon: d.rgF,
          hideWhenInactive: !W
        }), (0, n.jsx)(eu, {
          onClick: e => {
            e.stopPropagation(), X(true), A(e, true, en.A5.THREE_DOT)
          },
          tooltipText: es.intl.string(es.t["+1H47t"]),
          icon: d.xhG,
          hideWhenInactive: !W
        }), q && (0, n.jsx)(eu, {
          onClick: D,
          tooltipText: R ? es.intl.string(es.t.YqAjXy) : es.intl.string(es.t.w4m945),
          icon: R ? d.OyP : d.gj8,
          hideWhenInactive: !R && !W
        })]
      })]
    })]
  })
});
ef.displayName = "CallTileOverlay";
let em = Chunk352978.L,
  eI = ec