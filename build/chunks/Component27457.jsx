/** Chunk was on 63373 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => er,
  ZP: () => es
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk414910 = require("./414910.js"),
  Chunk415635 = require("./415635.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk649739 = require("./649739.js"),
  Chunk37091 = require("./37091.js"),
  Chunk6572 = require("./6572.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk936847 = require("./936847.jsx"),
  Chunk512384 = require("./512384.jsx"),
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
let ee = [Chunk354459.fO.ACTIVITY],
  et = Chunk647438.memo(e => {
    var t, n, r, o, c, u, Z;
    let {
      participant: D,
      onDoubleClick: k,
      onContextMenu: U,
      onClick: F,
      onMouseDown: et,
      onKeyDown: en,
      className: el,
      style: er,
      containerStyle: es,
      channel: ea,
      width: eo,
      inPopout: ec,
      onVideoResize: eu,
      inCall: ed = false,
      selected: ep = false,
      noBorder: ef = false,
      noVideoRender: em = false,
      focused: ev = false,
      blocked: eg = false,
      ignored: eh = false,
      fit: eZ = I.L.CONTAIN,
      paused: eO = false,
      pulseSpeakingIndicator: ey = false,
      forceIdle: ex = false,
      inOverlayPopout: eI = false
    } = e, ej = i.useContext(_.h9) || ex, [eE, eS] = i.useState(false), eT = b.Sb.useSetting(), eb = (0, a.e7)([V.default], () => V.default.isStreamInfoOverlayEnabled), [e_, eC] = i.useState(false), eN = (0, a.e7)([R.default], () => R.default.getId()), eR = D.type === W.fO.ACTIVITY ? null : D.user, eV = null != (r = null == eR ? true : eR.id) ? r : null, [eA] = (0, v.Z)(D.type === W.fO.ACTIVITY ? [D.applicationId] : []), ew = (0, a.e7)([y.Z], () => y.Z.getEnabled()), eM = (0, a.e7)([w.Z], () => null != eV && w.Z.isLocalVideoDisabled(eV, (0, g.Z)(D.type)), [eV, D.type]), eP = (0, a.e7)([w.Z], () => null != eV ? w.Z.getVideoToggleState(eV, (0, g.Z)(D.type)) : K.ZUi.NONE, [eV, D.type]), eD = eP === K.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: eU,
      hasVideo: ez
    } = (0, X.Z)(D, eN), eL = (0, a.e7)([T.Z], () => null !== eV && T.Z.isUserPlayingSounds(eV), [eV]), eG = function(e, t, n) {
      var l, i, r, s;
      let o = t.type !== W.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([P.Z], () => {
          var e, t, l;
          let i = P.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (l = null == i ? true : i.suppress) && l,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, a.cj)([w.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: w.Z.isLocalMute(o, n),
            localVideoDisabled: w.Z.isLocalVideoDisabled(o, n),
            localVideoAutoDisabled: w.Z.isLocalVideoAutoDisabled(o, n)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === W.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceMuted())) && r,
        deafened: null != (s = t.type === W.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(eN, D, ea.getGuildId()), eY = D.type === W.fO.STREAM && eV === eN, eB = (0, a.e7)([C.Z], () => D.type === W.fO.USER && null != eV ? C.Z.getEffectForUserId(eV) : null), eH = (0, a.e7)([P.Z], () => P.Z.getVoicePlatformForChannel(ea.id, null != eV ? eV : K.lds)), {
      showGameIcon: eF
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eX = (0, a.e7)([M.Z], () => eF && null != eV ? M.Z.findActivity(eV, e => null != e.application_id && e.type === K.IIU.PLAYING) : null, [eF, eV]), eK = (0, a.e7)([A.Z], () => (null == eX ? true : eX.application_id) != null ? A.Z.getDetectableGame(eX.application_id) : null), eW = (0, a.e7)([m.Z], () => null != eK && (null == eX ? true : eX.application_id) != null ? m.Z.getApplication(null == eX ? true : eX.application_id) : true), eJ = (0, S.wV)({
      userId: eV,
      channelId: ea.id
    }), eq = (0, S.zU)({
      streamKey: D.type === W.fO.STREAM ? D.id : null,
      channelId: ea.id
    }), eQ = i.useMemo(() => D.type === W.fO.STREAM ? null != eq && eq : D.type === W.fO.USER && null != eJ && eJ, [eq, eJ, D.type]);
    i.useEffect(() => {
      eS(ev)
    }, [ev]);
    let e$ = i.useCallback(() => {
        null != eV && p.Z.toggleLocalMute(eV, q.Yn.STREAM)
      }, [eV]),
      e0 = i.useCallback(e => {
        null == F || F(D, e)
      }, [F, D]),
      e7 = i.useCallback(e => {
        null == k || k(D, e)
      }, [k, D]),
      e1 = i.useCallback((e, t, n) => {
        null == U || U(D, e, t, n)
      }, [U, D]),
      e4 = null,
      e8 = null,
      e5 = "";
    switch (D.type) {
      case W.fO.STREAM:
        e4 = (0, l.jsx)(B.Z, {
          participant: D,
          selected: ep,
          width: eo,
          fit: eZ,
          onVideoResize: eu,
          paused: eO,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: eI
        }), e8 = (0, l.jsx)(B._, {
          participant: D,
          selected: ep,
          width: eo,
          focused: ev,
          idle: ej,
          premiumIndicator: false
        }), e5 = Q.intl.formatToPlainString(Q.t.gHPz3d, {
          streamerName: D.user.username
        });
        break;
      case W.fO.USER:
        e4 = (0, l.jsx)(H.Z, {
          channel: ea,
          inCall: ed,
          participant: D,
          fit: eZ,
          onVideoResize: eu,
          paused: eO,
          selected: ep,
          width: eo,
          blocked: eg,
          ignored: eh,
          noVideoRender: em || eD,
          pulseSpeakingIndicator: ey,
          inOverlayPopout: eI
        }), e8 = (0, l.jsx)(H.T, {
          participant: D,
          channelId: ea.id
        }), e5 = Q.intl.formatToPlainString(Q.t["iC/x/f"], {
          username: D.user.username
        });
        break;
      case W.fO.ACTIVITY:
        e4 = (0, l.jsx)(G.ZP, {
          interactible: ev,
          participant: D,
          selected: ep,
          channel: ea,
          width: eo
        }), e5 = Q.intl.formatToPlainString(Q.t.YCvOsL, {
          activityName: null == eA ? true : eA.name
        });
        break;
      case W.fO.HIDDEN_STREAM:
        e4 = (0, l.jsx)(B.Z, {
          participant: D,
          selected: ep,
          width: eo,
          fit: eZ,
          onVideoResize: eu,
          paused: eO,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: eI
        })
    }
    let e9 = i.useRef(null),
      e6 = D.type === W.fO.STREAM ? d.pzj : d.Odl;
    return (0, l.jsx)(f.Z, {
      section: K.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: s()($.wrapper, {
          [$.ringing]: eU
        }, el),
        style: es,
        onMouseEnter: () => {
          eC(true)
        },
        onMouseLeave: () => {
          eC(false)
        },
        children: (0, l.jsxs)(E.Z, {
          shakeLocation: J.oZ.VOICE_USER,
          isShaking: ek,
          className: $.tile,
          children: [(0, l.jsx)(Y.Z, {
            ref: e9,
            className: s()($.tile, {
              [$.noBorder]: ef,
              [$.noInteraction]: null == F,
              [$.idle]: ej
            }),
            noBorder: ef,
            style: er,
            participantUserId: eV,
            children: (0, l.jsxs)(d.kL8, {
              "aria-label": e5,
              className: $.tileChild,
              onDoubleClick: e7,
              onContextMenu: e => e1(e, D.type === W.fO.STREAM),
              onClick: e0,
              onMouseDown: et,
              onKeyDown: en,
              focusProps: {
                offset: 1
              },
              children: [null != eB && null != eV ? (0, l.jsx)(N.Z, {
                voiceChannelEffect: eB,
                onComplete: () => (0, C.H)(eV),
                userId: eV
              }) : null, D.type === W.fO.USER ? (0, l.jsx)("div", {
                className: $.voiceChannelEffectsContainer,
                children: (0, l.jsx)(h.Z, {
                  userId: eV,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e9 || null == (t = e9.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e9 || null == (n = e9.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ef ? null : (0, l.jsx)("div", {
                className: $.indicators,
                children: e8
              }), ep ? (0, l.jsx)("div", {
                className: $.selectedScreen,
                children: (0, l.jsx)(e6, {
                  size: "md",
                  color: "currentColor",
                  className: $.selectedIcon
                })
              }) : null, ee.includes(D.type) ? null : (0, l.jsx)(ei, (u = function(e) {
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
                focused: ev,
                width: eo,
                inCall: ed,
                participantType: D.type,
                hasVideo: null != ez && ez
              }, eG), Z = Z = {
                idle: ej,
                platform: eH,
                title: (0, z.Z)(ea, D),
                blocked: eg,
                ignored: eh,
                localVideoDisabled: eM,
                videoToggleState: eP,
                hideAudioIcon: eY,
                onContextMenu: e1,
                onToggleMute: e$,
                participantUserId: eV,
                participantDisplayNameStyles: null == eR ? true : eR.displayNameStyles,
                application: eW,
                secureFramesVerified: eQ,
                isHovered: e_
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(Z)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(Z)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(Z, e))
              }), u)), D.type === W.fO.USER && ew ? (0, l.jsx)(x.Z, {
                userId: D.id,
                channelId: ea.id
              }) : null, ed && !ef ? (0, l.jsx)("div", {
                className: s()($.border, {
                  [$.voiceChannelEffect]: !ev && (eL || null != eB),
                  [$.speaking]: ek && !ev && !eL
                })
              }) : null]
            })
          }), eT && eb && e_ && (0, l.jsx)(L.Z, {
            currentUserId: eN,
            participant: D
          }), (0, l.jsx)(j.Z, {
            isFiring: eE,
            callTileRef: e9.current
          })]
        })
      })
    })
  });

function en(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === W.fO.STREAM) return n === W.wR.XBOX ? (0, l.jsx)(U.Z, {
    className: i
  }) : (0, l.jsx)(d.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case W.wR.MOBILE:
      return (0, l.jsx)(d.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case W.wR.XBOX:
      return (0, l.jsx)(U.Z, {
        className: i
      });
    case W.wR.PLAYSTATION:
      return (0, l.jsx)(k.Z, {
        className: i
      });
    default:
      return null
  }
}

function el(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: r,
    compact: a
  } = e;
  return (0, l.jsx)(c.u, {
    text: n,
    children: (0, l.jsx)(u.zx, {
      onClick: e => {
        e.stopPropagation(), r(e)
      },
      onMouseDown: e => e.preventDefault(),
      color: u.Tt.CUSTOM,
      size: u.Ph.ICON,
      className: s()($.overlayButton, {
        [$.hideWhenInactive]: i,
        [$.compact]: a
      }),
      innerClassName: $.overlayButtonInner,
      children: (0, l.jsx)(t, {
        size: a ? "xs" : "refresh_sm",
        color: "currentColor"
      })
    })
  })
}
et.displayName = "CallTile";
let ei = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: u,
    videoToggleState: p,
    blocked: f,
    ignored: m,
    participantType: v,
    participantUserId: h,
    participantDisplayNameStyles: O,
    platform: y,
    secureFramesVerified: x,
    onContextMenu: I,
    muted: j,
    deafened: E,
    localMuted: S,
    serverMuted: T,
    serverDeafened: b,
    hasVideo: _,
    hideAudioIcon: C,
    onToggleMute: N
  } = e, R = (0, a.e7)([w.Z], () => null != h && w.Z.isLocalVideoAutoDisabled(h, (0, g.Z)(v)), [h, v]), V = (0, Z.j)({
    displayNameStyles: O
  }), A = (0, F.N)(r), M = (0, F.K)(r), [P, k] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== D.Z.isOpen() && ((e = D.Z.isOpen()) || k(false))
      };
    return D.Z.addChangeListener(t), () => D.Z.removeChangeListener(t)
  }, []);
  let U = !C && v === W.fO.STREAM && _ && (!M || S),
    z = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: l,
        deafened: i,
        muted: r
      } = e;
      return l ? d.Vm4 : n ? d.v0G : i ? d.wE8 : t ? d.v0G : r ? d.nRN : null
    }({
      localMuted: S,
      serverMuted: T,
      serverDeafened: b,
      deafened: E,
      muted: j
    });
  return (0, l.jsxs)("div", {
    className: s()($.overlayContainer, {
      [$.compact]: M
    }),
    children: [(0, l.jsx)("div", {
      className: s()($.overlayTop, {
        [$.small]: r < 195
      }),
      children: R || p === K.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: $.status,
        children: (0, l.jsx)(d.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: s()($.overlayTitle, $.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: $.status,
          children: (0, l.jsx)(d.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: $.overlayTitleText,
          children: Q.intl.string(Q.t.m2Hyj4)
        })]
      }) : null
    }), !A && (0, l.jsxs)("div", {
      className: s()($.overlayBottom, {
        [$.small]: r < 195
      }),
      children: [(0, l.jsxs)(d.Text, {
        className: s()($.experimentOverlayTitle, {
          [$.compact]: M
        }),
        color: "none",
        variant: M ? "text-sm/normal" : "text-md/normal",
        children: [null != z && v === W.fO.USER && (0, l.jsx)(z, {
          className: s()($.experimentTitleIcon, {
            [$.compact]: M
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, l.jsx)("div", {
          className: $.blocked,
          children: (0, l.jsx)(d.t6m, {
            size: "lg",
            className: $.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, l.jsx)("div", {
          className: $.ignored,
          children: (0, l.jsx)(d.kZF, {
            size: "lg",
            className: $.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(en, {
          participantType: v,
          platform: y,
          className: s()($.experimentTitleIcon, {
            [$.compact]: M
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: s()($.overlayTitleText, V),
          children: n
        }), x && (0, l.jsx)(c.u, {
          text: Q.intl.string(Q.t.ZEem6O),
          children: (0, l.jsx)(d.tQf, {
            className: $.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": Q.intl.string(Q.t.mR9cf3)
          })
        })]
      }), !u && (0, l.jsxs)("div", {
        className: $.overlayButtonContainer,
        children: [(0, l.jsx)(el, {
          onClick: e => {
            e.stopPropagation(), k(true), I(e, true, W.A5.THREE_DOT)
          },
          tooltipText: Q.intl.string(Q.t["+1H47u"]),
          icon: d.xhG,
          hideWhenInactive: !P,
          compact: M
        }), U && (0, l.jsx)(el, {
          onClick: N,
          tooltipText: S ? Q.intl.string(Q.t.YqAjX1) : Q.intl.string(Q.t["w4m94+"]),
          icon: S ? d.OyP : d.gj8,
          hideWhenInactive: !S && !P,
          compact: M
        })]
      })]
    })]
  })
});
ei.displayName = "CallTileOverlay";
let er = Chunk352978.L,
  es = et