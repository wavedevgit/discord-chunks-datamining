/** Chunk was on 63373 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => ei,
  ZP: () => er
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
  Chunk386725 = require("./386725.js"),
  Chunk7284 = require("./7284.js"),
  Chunk649739 = require("./649739.js"),
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
let $ = [Chunk354459.fO.ACTIVITY],
  ee = Chunk647438.memo(e => {
    var t, n, r, o, c, u, Z;
    let {
      participant: O,
      onDoubleClick: P,
      onContextMenu: D,
      onClick: k,
      onMouseDown: H,
      onKeyDown: ee,
      className: et,
      style: en,
      containerStyle: ei,
      channel: er,
      width: es,
      inPopout: ea,
      onVideoResize: eo,
      inCall: ec = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: em = false,
      ignored: ev = false,
      fit: eg = x.L.CONTAIN,
      paused: eh = false,
      pulseSpeakingIndicator: eZ = false,
      forceIdle: eO = false,
      inOverlayPopout: eI = false
    } = e, ex = i.useContext(b.h9) || eO, [ey, ej] = i.useState(false), eE = T.Sb.useSetting(), eS = (0, a.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled), [eT, eb] = i.useState(false), e_ = (0, a.e7)([N.default], () => N.default.getId()), eC = O.type === K.fO.ACTIVITY ? null : O.user, eN = null != (r = null == eC ? true : eC.id) ? r : null, [eR] = (0, v.Z)(O.type === K.fO.ACTIVITY ? [O.applicationId] : []), eV = (0, a.e7)([A.Z], () => null != eN && A.Z.isLocalVideoDisabled(eN, (0, g.Z)(O.type)), [eN, O.type]), eA = (0, a.e7)([A.Z], () => null != eN ? A.Z.getVideoToggleState(eN, (0, g.Z)(O.type)) : X.ZUi.NONE, [eN, O.type]), ew = eA === X.ZUi.AUTO_PROBING, {
      speaking: eM,
      ringing: eP,
      hasVideo: eD
    } = (0, F.Z)(O, e_), ek = (0, a.e7)([S.Z], () => null !== eN && S.Z.isUserPlayingSounds(eN), [eN]), eU = function(e, t, n) {
      var l, i, r, s;
      let o = t.type !== K.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([M.Z], () => {
          var e, t, l;
          let i = M.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (l = null == i ? true : i.suppress) && l,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, a.cj)([A.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: A.Z.isLocalMute(o, n),
            localVideoDisabled: A.Z.isLocalVideoDisabled(o, n),
            localVideoAutoDisabled: A.Z.isLocalVideoAutoDisabled(o, n)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === K.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceMuted())) && r,
        deafened: null != (s = t.type === K.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(e_, O, er.getGuildId()), ez = O.type === K.fO.STREAM && eN === e_, eL = (0, a.e7)([_.Z], () => O.type === K.fO.USER && null != eN ? _.Z.getEffectForUserId(eN) : null), eG = (0, a.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(er.id, null != eN ? eN : X.lds)), {
      showGameIcon: eY
    } = I.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eB = (0, a.e7)([w.Z], () => eY && null != eN ? w.Z.findActivity(eN, e => null != e.application_id && e.type === X.IIU.PLAYING) : null, [eY, eN]), eH = (0, a.e7)([V.Z], () => (null == eB ? true : eB.application_id) != null ? V.Z.getDetectableGame(eB.application_id) : null), eF = (0, a.e7)([m.Z], () => null != eH && (null == eB ? true : eB.application_id) != null ? m.Z.getApplication(null == eB ? true : eB.application_id) : true), eX = (0, E.wV)({
      userId: eN,
      channelId: er.id
    }), eK = (0, E.zU)({
      streamKey: O.type === K.fO.STREAM ? O.id : null,
      channelId: er.id
    }), eW = i.useMemo(() => O.type === K.fO.STREAM ? null != eK && eK : O.type === K.fO.USER && null != eX && eX, [eK, eX, O.type]);
    i.useEffect(() => {
      ej(ef)
    }, [ef]);
    let eJ = i.useCallback(() => {
        null != eN && p.Z.toggleLocalMute(eN, J.Yn.STREAM)
      }, [eN]),
      eq = i.useCallback(e => {
        null == k || k(O, e)
      }, [k, O]),
      eQ = i.useCallback(e => {
        null == P || P(O, e)
      }, [P, O]),
      e$ = i.useCallback((e, t, n) => {
        null == D || D(O, e, t, n)
      }, [D, O]),
      e0 = null,
      e7 = null,
      e1 = "";
    switch (O.type) {
      case K.fO.STREAM:
        e0 = (0, l.jsx)(Y.Z, {
          participant: O,
          selected: eu,
          width: es,
          fit: eg,
          onVideoResize: eo,
          paused: eh,
          inPopout: ea,
          focused: ef,
          inOverlayPopout: eI
        }), e7 = (0, l.jsx)(Y._, {
          participant: O,
          selected: eu,
          width: es,
          focused: ef,
          idle: ex,
          premiumIndicator: false
        }), e1 = q.intl.formatToPlainString(q.t.gHPz3d, {
          streamerName: O.user.username
        });
        break;
      case K.fO.USER:
        e0 = (0, l.jsx)(B.Z, {
          channel: er,
          inCall: ec,
          participant: O,
          fit: eg,
          onVideoResize: eo,
          paused: eh,
          selected: eu,
          width: es,
          blocked: em,
          ignored: ev,
          noVideoRender: ep || ew,
          pulseSpeakingIndicator: eZ,
          inOverlayPopout: eI
        }), e7 = (0, l.jsx)(B.T, {
          participant: O,
          channelId: er.id
        }), e1 = q.intl.formatToPlainString(q.t["iC/x/f"], {
          username: O.user.username
        });
        break;
      case K.fO.ACTIVITY:
        e0 = (0, l.jsx)(L.ZP, {
          interactible: ef,
          participant: O,
          selected: eu,
          channel: er,
          width: es
        }), e1 = q.intl.formatToPlainString(q.t.YCvOsL, {
          activityName: null == eR ? true : eR.name
        });
        break;
      case K.fO.HIDDEN_STREAM:
        e0 = (0, l.jsx)(Y.Z, {
          participant: O,
          selected: eu,
          width: es,
          fit: eg,
          onVideoResize: eo,
          paused: eh,
          inPopout: ea,
          focused: ef,
          inOverlayPopout: eI
        })
    }
    let e4 = i.useRef(null),
      e8 = O.type === K.fO.STREAM ? d.pzj : d.Odl;
    return (0, l.jsx)(f.Z, {
      section: X.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: s()(Q.wrapper, {
          [Q.ringing]: eP
        }, et),
        style: ei,
        onMouseEnter: () => {
          eb(true)
        },
        onMouseLeave: () => {
          eb(false)
        },
        children: (0, l.jsxs)(j.Z, {
          shakeLocation: W.oZ.VOICE_USER,
          isShaking: eM,
          className: Q.tile,
          children: [(0, l.jsx)(G.Z, {
            ref: e4,
            className: s()(Q.tile, {
              [Q.noBorder]: ed,
              [Q.noInteraction]: null == k,
              [Q.idle]: ex
            }),
            noBorder: ed,
            style: en,
            participantUserId: eN,
            children: (0, l.jsxs)(d.kL8, {
              "aria-label": e1,
              className: Q.tileChild,
              onDoubleClick: eQ,
              onContextMenu: e => e$(e, O.type === K.fO.STREAM),
              onClick: eq,
              onMouseDown: H,
              onKeyDown: ee,
              focusProps: {
                offset: 1
              },
              children: [null != eL && null != eN ? (0, l.jsx)(C.Z, {
                voiceChannelEffect: eL,
                onComplete: () => (0, _.H)(eN),
                userId: eN
              }) : null, O.type === K.fO.USER ? (0, l.jsx)("div", {
                className: Q.voiceChannelEffectsContainer,
                children: (0, l.jsx)(h.Z, {
                  userId: eN,
                  channelId: er.id,
                  guildId: er.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e4 || null == (t = e4.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e4 || null == (n = e4.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e0, ed ? null : (0, l.jsx)("div", {
                className: Q.indicators,
                children: e7
              }), eu ? (0, l.jsx)("div", {
                className: Q.selectedScreen,
                children: (0, l.jsx)(e8, {
                  size: "md",
                  color: "currentColor",
                  className: Q.selectedIcon
                })
              }) : null, $.includes(O.type) ? null : (0, l.jsx)(el, (u = function(e) {
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
                focused: ef,
                width: es,
                inCall: ec,
                participantType: O.type,
                hasVideo: null != eD && eD
              }, eU), Z = Z = {
                idle: ex,
                platform: eG,
                title: (0, U.Z)(er, O),
                blocked: em,
                ignored: ev,
                localVideoDisabled: eV,
                videoToggleState: eA,
                hideAudioIcon: ez,
                onContextMenu: e$,
                onToggleMute: eJ,
                participantUserId: eN,
                channel: er,
                application: eF,
                secureFramesVerified: eW,
                isHovered: eT
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(Z)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(Z)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(Z, e))
              }), u)), ec && !ed ? (0, l.jsx)("div", {
                className: s()(Q.border, {
                  [Q.voiceChannelEffect]: !ef && (ek || null != eL),
                  [Q.speaking]: eM && !ef && !ek
                })
              }) : null]
            })
          }), eE && eS && eT && (0, l.jsx)(z.Z, {
            currentUserId: e_,
            participant: O
          }), (0, l.jsx)(y.Z, {
            isFiring: ey,
            callTileRef: e4.current
          })]
        })
      })
    })
  });

function et(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === K.fO.STREAM) return n === K.wR.XBOX ? (0, l.jsx)(k.Z, {
    className: i
  }) : (0, l.jsx)(d.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case K.wR.MOBILE:
      return (0, l.jsx)(d.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case K.wR.XBOX:
      return (0, l.jsx)(k.Z, {
        className: i
      });
    case K.wR.PLAYSTATION:
      return (0, l.jsx)(D.Z, {
        className: i
      });
    default:
      return null
  }
}

function en(e) {
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
      className: s()(Q.overlayButton, {
        [Q.hideWhenInactive]: i,
        [Q.compact]: a
      }),
      innerClassName: Q.overlayButtonInner,
      children: (0, l.jsx)(t, {
        size: a ? "xs" : "refresh_sm",
        color: "currentColor"
      })
    })
  })
}
ee.displayName = "CallTile";
let el = Chunk647438.memo(e => {
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
    channel: I,
    platform: x,
    secureFramesVerified: y,
    onContextMenu: j,
    muted: E,
    deafened: S,
    localMuted: T,
    serverMuted: b,
    serverDeafened: _,
    hasVideo: C,
    hideAudioIcon: N,
    onToggleMute: R
  } = e, V = (0, a.e7)([A.Z], () => null != h && A.Z.isLocalVideoAutoDisabled(h, (0, g.Z)(v)), [h, v]), w = (0, Z.Z)({
    userId: h,
    guildId: I.getGuildId()
  }), M = (0, O.j)({
    displayNameStyles: w
  }), D = (0, H.N)(r), k = (0, H.K)(r), [U, z] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== P.Z.isOpen() && ((e = P.Z.isOpen()) || z(false))
      };
    return P.Z.addChangeListener(t), () => P.Z.removeChangeListener(t)
  }, []);
  let L = !N && v === K.fO.STREAM && C && (!k || T),
    G = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: l,
        deafened: i,
        muted: r
      } = e;
      return l ? d.Vm4 : n ? d.v0G : i ? d.wE8 : t ? d.v0G : r ? d.nRN : null
    }({
      localMuted: T,
      serverMuted: b,
      serverDeafened: _,
      deafened: S,
      muted: E
    });
  return (0, l.jsxs)("div", {
    className: s()(Q.overlayContainer, {
      [Q.compact]: k
    }),
    children: [(0, l.jsx)("div", {
      className: s()(Q.overlayTop, {
        [Q.small]: r < 195
      }),
      children: V || p === X.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: Q.status,
        children: (0, l.jsx)(d.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: s()(Q.overlayTitle, Q.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: Q.status,
          children: (0, l.jsx)(d.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          className: Q.overlayTitleText,
          children: q.intl.string(q.t.m2Hyj4)
        })]
      }) : null
    }), !D && (0, l.jsxs)("div", {
      className: s()(Q.overlayBottom, {
        [Q.small]: r < 195
      }),
      children: [(0, l.jsxs)(d.Text, {
        className: s()(Q.experimentOverlayTitle, {
          [Q.compact]: k
        }),
        color: "none",
        variant: k ? "text-sm/normal" : "text-md/normal",
        children: [null != G && v === K.fO.USER && (0, l.jsx)(G, {
          className: s()(Q.experimentTitleIcon, {
            [Q.compact]: k
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, l.jsx)("div", {
          className: Q.blocked,
          children: (0, l.jsx)(d.t6m, {
            size: "lg",
            className: Q.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, l.jsx)("div", {
          className: Q.ignored,
          children: (0, l.jsx)(d.kZF, {
            size: "lg",
            className: Q.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(et, {
          participantType: v,
          platform: x,
          className: s()(Q.experimentTitleIcon, {
            [Q.compact]: k
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: s()(Q.overlayTitleText, M),
          children: n
        }), y && (0, l.jsx)(c.u, {
          text: q.intl.string(q.t.ZEem6O),
          children: (0, l.jsx)(d.tQf, {
            className: Q.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": q.intl.string(q.t.mR9cf3)
          })
        })]
      }), !u && (0, l.jsxs)("div", {
        className: Q.overlayButtonContainer,
        children: [(0, l.jsx)(en, {
          onClick: e => {
            e.stopPropagation(), z(true), j(e, true, K.A5.THREE_DOT)
          },
          tooltipText: q.intl.string(q.t["+1H47u"]),
          icon: d.xhG,
          hideWhenInactive: !U,
          compact: k
        }), L && (0, l.jsx)(en, {
          onClick: R,
          tooltipText: T ? q.intl.string(q.t.YqAjX1) : q.intl.string(q.t["w4m94+"]),
          icon: T ? d.OyP : d.gj8,
          hideWhenInactive: !T && !U,
          compact: k
        })]
      })]
    })]
  })
});
el.displayName = "CallTileOverlay";
let ei = Chunk352978.L,
  er = ee