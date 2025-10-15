/** Chunk was on 63373 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => el,
  ZP: () => ei
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
let q = [Chunk354459.fO.ACTIVITY],
  $ = Chunk647438.memo(e => {
    var t, n, r, o, c, h, Z;
    let {
      participant: M,
      onDoubleClick: P,
      onContextMenu: D,
      onClick: H,
      onMouseDown: $,
      onKeyDown: ee,
      className: et,
      style: el,
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
      fit: eg = y.L.CONTAIN,
      paused: eh = false,
      pulseSpeakingIndicator: eZ = false,
      forceIdle: eO = false,
      inOverlayPopout: ey = false
    } = e, eI = i.useContext(b.h9) || eO, [ex, ej] = i.useState(false), eE = S.Sb.useSetting(), eS = (0, a.e7)([N.default], () => N.default.isStreamInfoOverlayEnabled), [eb, eT] = i.useState(false), e_ = (0, a.e7)([C.default], () => C.default.getId()), eC = M.type === X.fO.ACTIVITY ? null : M.user, eN = null != (r = null == eC ? true : eC.id) ? r : null, [eR] = (0, m.Z)(M.type === X.fO.ACTIVITY ? [M.applicationId] : []), eV = (0, a.e7)([V.Z], () => null != eN && V.Z.isLocalVideoDisabled(eN, (0, v.Z)(M.type)), [eN, M.type]), eA = (0, a.e7)([V.Z], () => null != eN ? V.Z.getVideoToggleState(eN, (0, v.Z)(M.type)) : F.ZUi.NONE, [eN, M.type]), ew = eA === F.ZUi.AUTO_PROBING, {
      speaking: eM,
      ringing: eP,
      hasVideo: eD
    } = (0, B.Z)(M, e_), ek = (0, a.e7)([E.Z], () => null !== eN && E.Z.isUserPlayingSounds(eN), [eN]), eU = function(e, t, n) {
      var l, i, r, s;
      let o = t.type !== X.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([w.Z], () => {
          var e, t, l;
          let i = w.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (l = null == i ? true : i.suppress) && l,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, a.cj)([V.Z], () => {
          let n = (0, v.Z)(t.type);
          return e === o ? {
            muted: false,
            deafened: false
          } : {
            muted: V.Z.isLocalMute(o, n),
            localVideoDisabled: V.Z.isLocalVideoDisabled(o, n),
            localVideoAutoDisabled: V.Z.isLocalVideoAutoDisabled(o, n)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === X.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceMuted())) && r,
        deafened: null != (s = t.type === X.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(e_, M, er.getGuildId()), eL = M.type === X.fO.STREAM && eN === e_, ez = (0, a.e7)([T.Z], () => M.type === X.fO.USER && null != eN ? T.Z.getEffectForUserId(eN) : null), eG = (0, a.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(er.id, null != eN ? eN : F.lds)), {
      showGameIcon: eY
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eH = (0, a.e7)([A.Z], () => eY && null != eN ? A.Z.findActivity(eN, e => null != e.application_id && e.type === F.IIU.PLAYING) : null, [eY, eN]), eB = (0, a.e7)([R.Z], () => (null == eH ? true : eH.application_id) != null ? R.Z.getDetectableGame(eH.application_id) : null), eF = (0, a.e7)([f.Z], () => null != eB && (null == eH ? true : eH.application_id) != null ? f.Z.getApplication(null == eH ? true : eH.application_id) : true), eX = (0, j.wV)({
      userId: eN,
      channelId: er.id
    }), eK = (0, j.zU)({
      streamKey: M.type === X.fO.STREAM ? M.id : null,
      channelId: er.id
    }), eW = i.useMemo(() => M.type === X.fO.STREAM ? null != eK && eK : M.type === X.fO.USER && null != eX && eX, [eK, eX, M.type]);
    i.useEffect(() => {
      ej(ef)
    }, [ef]);
    let eJ = i.useCallback(() => {
        null != eN && d.Z.toggleLocalMute(eN, W.Yn.STREAM)
      }, [eN]),
      eQ = i.useCallback(e => {
        null == H || H(M, e)
      }, [H, M]),
      eq = i.useCallback(e => {
        null == P || P(M, e)
      }, [P, M]),
      e$ = i.useCallback((e, t, n) => {
        null == D || D(M, e, t, n)
      }, [D, M]),
      e0 = null,
      e7 = null,
      e1 = "";
    switch (M.type) {
      case X.fO.STREAM:
        e0 = (0, l.jsx)(G.Z, {
          participant: M,
          selected: eu,
          width: es,
          fit: eg,
          onVideoResize: eo,
          paused: eh,
          inPopout: ea,
          focused: ef,
          inOverlayPopout: ey
        }), e7 = (0, l.jsx)(G._, {
          participant: M,
          selected: eu,
          width: es,
          focused: ef,
          idle: eI,
          premiumIndicator: false
        }), e1 = J.intl.formatToPlainString(J.t.gHPz3Q, {
          streamerName: M.user.username
        });
        break;
      case X.fO.USER:
        e0 = (0, l.jsx)(Y.Z, {
          channel: er,
          inCall: ec,
          participant: M,
          fit: eg,
          onVideoResize: eo,
          paused: eh,
          selected: eu,
          width: es,
          blocked: em,
          ignored: ev,
          noVideoRender: ep || ew,
          pulseSpeakingIndicator: eZ,
          inOverlayPopout: ey
        }), e7 = (0, l.jsx)(Y.T, {
          participant: M,
          channelId: er.id
        }), e1 = J.intl.formatToPlainString(J.t["iC/x/Q"], {
          username: M.user.username
        });
        break;
      case X.fO.ACTIVITY:
        e0 = (0, l.jsx)(L.ZP, {
          interactible: ef,
          participant: M,
          selected: eu,
          channel: er,
          width: es
        }), e1 = J.intl.formatToPlainString(J.t.YCvOsO, {
          activityName: null == eR ? true : eR.name
        });
        break;
      case X.fO.HIDDEN_STREAM:
        e0 = (0, l.jsx)(G.Z, {
          participant: M,
          selected: eu,
          width: es,
          fit: eg,
          onVideoResize: eo,
          paused: eh,
          inPopout: ea,
          focused: ef,
          inOverlayPopout: ey
        })
    }
    let e4 = i.useRef(null),
      e8 = M.type === X.fO.STREAM ? u.pzj : u.Odl;
    return (0, l.jsx)(p.Z, {
      section: F.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: s()(Q.wrapper, {
          [Q.ringing]: eP
        }, et),
        style: ei,
        onMouseEnter: () => {
          eT(true)
        },
        onMouseLeave: () => {
          eT(false)
        },
        children: (0, l.jsxs)(x.Z, {
          shakeLocation: K.oZ.VOICE_USER,
          isShaking: eM,
          className: Q.tile,
          children: [(0, l.jsx)(z.Z, {
            ref: e4,
            className: s()(Q.tile, {
              [Q.noBorder]: ed,
              [Q.noInteraction]: null == H,
              [Q.idle]: eI
            }),
            noBorder: ed,
            style: el,
            participantUserId: eN,
            children: (0, l.jsxs)(u.kL8, {
              "aria-label": e1,
              className: Q.tileChild,
              onDoubleClick: eq,
              onContextMenu: e => e$(e, M.type === X.fO.STREAM),
              onClick: eQ,
              onMouseDown: $,
              onKeyDown: ee,
              focusProps: {
                offset: 1
              },
              children: [null != ez && null != eN ? (0, l.jsx)(_.Z, {
                voiceChannelEffect: ez,
                onComplete: () => (0, T.H)(eN),
                userId: eN
              }) : null, M.type === X.fO.USER ? (0, l.jsx)("div", {
                className: Q.voiceChannelEffectsContainer,
                children: (0, l.jsx)(g.Z, {
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
              }) : null, q.includes(M.type) ? null : (0, l.jsx)(en, (h = function(e) {
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
                participantType: M.type,
                hasVideo: null != eD && eD
              }, eU), Z = Z = {
                idle: eI,
                platform: eG,
                title: (0, k.Z)(er, M),
                blocked: em,
                ignored: ev,
                localVideoDisabled: eV,
                videoToggleState: eA,
                hideAudioIcon: eL,
                onContextMenu: e$,
                onToggleMute: eJ,
                participantUserId: eN,
                channel: er,
                application: eF,
                secureFramesVerified: eW,
                isHovered: eb
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(Z)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(Z)).forEach(function(e) {
                Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(Z, e))
              }), h)), ec && !ed ? (0, l.jsx)("div", {
                className: s()(Q.border, {
                  [Q.voiceChannelEffect]: !ef && (ek || null != ez),
                  [Q.speaking]: eM && !ef && !ek
                })
              }) : null]
            })
          }), eE && eS && eb && (0, l.jsx)(U.Z, {
            currentUserId: e_,
            participant: M
          }), (0, l.jsx)(I.Z, {
            isFiring: ex,
            callTileRef: e4.current
          })]
        })
      })
    })
  });

function ee(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === X.fO.STREAM) return n === X.wR.XBOX ? (0, l.jsx)(D.Z, {
    className: i
  }) : (0, l.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case X.wR.MOBILE:
      return (0, l.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case X.wR.XBOX:
      return (0, l.jsx)(D.Z, {
        className: i
      });
    case X.wR.PLAYSTATION:
      return (0, l.jsx)(P.Z, {
        className: i
      });
    default:
      return null
  }
}

function et(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: r
  } = e;
  return (0, l.jsx)(c.u, {
    text: n,
    children: (0, l.jsx)("div", {
      className: s()(Q.overlayButton, {
        [Q.hideWhenInactive]: i
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
$.displayName = "CallTile";
let en = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: d,
    videoToggleState: p,
    blocked: f,
    ignored: m,
    participantType: g,
    participantUserId: O,
    channel: y,
    platform: I,
    secureFramesVerified: x,
    onContextMenu: j,
    muted: E,
    deafened: S,
    localMuted: b,
    serverMuted: T,
    serverDeafened: _,
    hasVideo: C,
    hideAudioIcon: N,
    onToggleMute: R
  } = e, A = (0, a.e7)([V.Z], () => null != O && V.Z.isLocalVideoAutoDisabled(O, (0, v.Z)(g)), [O, g]), w = (0, h.Z)({
    userId: O,
    guildId: y.getGuildId()
  }), P = (0, Z.j)({
    displayNameStyles: w
  }), D = (0, H.N)(r), k = (0, H.K)(r), [U, L] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== M.Z.isOpen() && ((e = M.Z.isOpen()) || L(false))
      };
    return M.Z.addChangeListener(t), () => M.Z.removeChangeListener(t)
  }, []);
  let z = !N && g === X.fO.STREAM && C && (!k || b),
    G = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: l,
        deafened: i,
        muted: r
      } = e;
      return l ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : r ? u.nRN : null
    }({
      localMuted: b,
      serverMuted: T,
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
      children: A || p === F.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: Q.status,
        children: (0, l.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: s()(Q.overlayTitle, Q.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: Q.status,
          children: (0, l.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: Q.overlayTitleText,
          children: J.intl.string(J.t.m2Hyj0)
        })]
      }) : null
    }), !D && (0, l.jsxs)("div", {
      className: s()(Q.overlayBottom, {
        [Q.small]: r < 195
      }),
      children: [(0, l.jsxs)(u.Text, {
        className: Q.experimentOverlayTitle,
        color: "none",
        variant: k ? "text-sm/normal" : "text-md/normal",
        children: [null != G && g === X.fO.USER && (0, l.jsx)(G, {
          className: s()(Q.experimentTitleIcon, {
            [Q.compact]: k
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, l.jsx)("div", {
          className: Q.blocked,
          children: (0, l.jsx)(u.t6m, {
            size: "lg",
            className: Q.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, l.jsx)("div", {
          className: Q.ignored,
          children: (0, l.jsx)(u.kZF, {
            size: "lg",
            className: Q.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(ee, {
          participantType: g,
          platform: I,
          className: s()(Q.experimentTitleIcon, {
            [Q.compact]: k
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: s()(Q.overlayTitleText, P),
          children: n
        }), x && (0, l.jsx)(c.u, {
          text: J.intl.string(J.t.ZEem6O),
          children: (0, l.jsx)(u.tQf, {
            className: Q.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": J.intl.string(J.t.mR9cf3)
          })
        })]
      }), !d && (0, l.jsxs)("div", {
        className: Q.overlayButtonContainer,
        children: [(0, l.jsx)(et, {
          onClick: e => {
            e.stopPropagation(), L(true), j(e, true, X.A5.THREE_DOT)
          },
          tooltipText: J.intl.string(J.t["+1H47t"]),
          icon: u.xhG,
          hideWhenInactive: !U
        }), z && (0, l.jsx)(et, {
          onClick: R,
          tooltipText: b ? J.intl.string(J.t.YqAjXy) : J.intl.string(J.t.w4m945),
          icon: b ? u.OyP : u.gj8,
          hideWhenInactive: !b && !U
        })]
      })]
    })]
  })
});
en.displayName = "CallTileOverlay";
let el = Chunk352978.L,
  ei = $