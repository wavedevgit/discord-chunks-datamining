/** Chunk was on 70439 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => er,
  ZP: () => ei
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
  Chunk400872 = require("./400872.js");
let J = [Chunk354459.fO.ACTIVITY],
  $ = Chunk647438.memo(e => {
    var t, n, l, s, c, b, _;
    let {
      participant: D,
      onDoubleClick: L,
      onContextMenu: M,
      onClick: H,
      onMouseDown: $,
      onKeyDown: ee,
      className: et,
      style: er,
      containerStyle: ei,
      channel: el,
      width: eo,
      inPopout: ea,
      onVideoResize: es,
      inCall: ec = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: eh = false,
      ignored: eg = false,
      fit: em = y.L.CONTAIN,
      paused: eb = false,
      pulseSpeakingIndicator: e_ = false,
      forceIdle: eO = false,
      inOverlayPopout: ey = false
    } = e, ev = i.useContext(S.h9) || eO, [ej, ex] = i.useState(false), eC = E.Sb.useSetting(), eE = (0, a.e7)([Z.default], () => Z.default.isStreamInfoOverlayEnabled), [eS, eI] = i.useState(false), eP = (0, a.e7)([N.default], () => N.default.getId()), eN = D.type === K.fO.ACTIVITY ? null : D.user, eZ = null != (l = null == eN ? true : eN.id) ? l : null, [eT] = (0, h.Z)(D.type === K.fO.ACTIVITY ? [D.applicationId] : []), ew = (0, a.e7)([w.Z], () => null != eZ && w.Z.isLocalVideoDisabled(eZ, (0, g.Z)(D.type)), [eZ, D.type]), eA = (0, a.e7)([w.Z], () => null != eZ ? w.Z.getVideoToggleState(eZ, (0, g.Z)(D.type)) : W.ZUi.NONE, [eZ, D.type]), eR = eA === W.ZUi.AUTO_PROBING, {
      speaking: eD,
      ringing: eL,
      hasVideo: eM
    } = (0, z.Z)(D, eP), ek = (0, a.e7)([C.Z], () => null !== eZ && C.Z.isUserPlayingSounds(eZ), [eZ]), eG = function(e, t, n) {
      var r, i, l, o;
      let s = t.type !== K.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([R.Z], () => {
          var e, t, r;
          let i = R.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (r = null == i ? true : i.suppress) && r,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, a.cj)([w.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === s ? {
            muted: false,
            deafened: false
          } : {
            muted: w.Z.isLocalMute(s, n),
            localVideoDisabled: w.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: w.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (l = t.type === K.fO.USER && (null == (r = t.voiceState) ? true : r.isVoiceMuted())) && l,
        deafened: null != (o = t.type === K.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && o
      }
    }(eP, D, el.getGuildId()), eU = D.type === K.fO.STREAM && eZ === eP, eB = (0, a.e7)([I.Z], () => D.type === K.fO.USER && null != eZ ? I.Z.getEffectForUserId(eZ) : null), eF = (0, a.e7)([R.Z], () => R.Z.getVoicePlatformForChannel(el.id, null != eZ ? eZ : W.lds)), {
      showGameIcon: eV
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eH = (0, a.e7)([A.Z], () => eV && null != eZ ? A.Z.findActivity(eZ, e => null != e.application_id && e.type === W.IIU.PLAYING) : null, [eV, eZ]), ez = (0, a.e7)([T.Z], () => (null == eH ? true : eH.application_id) != null ? T.Z.getDetectableGame(eH.application_id) : null), eW = (0, a.e7)([f.Z], () => null != ez && (null == eH ? true : eH.application_id) != null ? f.Z.getApplication(null == eH ? true : eH.application_id) : true), eK = (0, x.wV)({
      userId: eZ,
      channelId: el.id
    }), eY = (0, x.zU)({
      streamKey: D.type === K.fO.STREAM ? D.id : null,
      channelId: el.id
    }), eq = i.useMemo(() => D.type === K.fO.STREAM ? null != eY && eY : D.type === K.fO.USER && null != eK && eK, [eY, eK, D.type]);
    i.useEffect(() => {
      ex(ef)
    }, [ef]);
    let eX = i.useCallback(() => {
        null != eZ && d.Z.toggleLocalMute(eZ, q.Yn.STREAM)
      }, [eZ]),
      eQ = i.useCallback(e => {
        null == H || H(D, e)
      }, [H, D]),
      eJ = i.useCallback(e => {
        null == L || L(D, e)
      }, [L, D]),
      e$ = i.useCallback((e, t, n) => {
        null == M || M(D, e, t, n)
      }, [M, D]),
      e0 = null,
      e1 = null,
      e4 = "";
    switch (D.type) {
      case K.fO.STREAM:
        e0 = (0, r.jsx)(F.Z, {
          participant: D,
          selected: eu,
          width: eo,
          fit: em,
          onVideoResize: es,
          paused: eb,
          inPopout: ea,
          focused: ef,
          inOverlayPopout: ey
        }), e1 = (0, r.jsx)(F._, {
          participant: D,
          selected: eu,
          width: eo,
          focused: ef,
          idle: ev,
          premiumIndicator: false
        }), e4 = X.intl.formatToPlainString(X.t.gHPz3d, {
          streamerName: D.user.username
        });
        break;
      case K.fO.USER:
        e0 = (0, r.jsx)(V.Z, {
          channel: el,
          inCall: ec,
          participant: D,
          fit: em,
          onVideoResize: es,
          paused: eb,
          selected: eu,
          width: eo,
          blocked: eh,
          ignored: eg,
          noVideoRender: ep || eR,
          pulseSpeakingIndicator: e_,
          inOverlayPopout: ey
        }), e1 = (0, r.jsx)(V.T, {
          participant: D,
          channelId: el.id
        }), e4 = X.intl.formatToPlainString(X.t["iC/x/f"], {
          username: D.user.username
        });
        break;
      case K.fO.ACTIVITY:
        e0 = (0, r.jsx)(U.ZP, {
          interactible: ef,
          participant: D,
          selected: eu,
          channel: el,
          width: eo
        }), e4 = X.intl.formatToPlainString(X.t.YCvOsL, {
          activityName: null == eT ? true : eT.name
        });
        break;
      case K.fO.HIDDEN_STREAM:
        e0 = (0, r.jsx)(F.Z, {
          participant: D,
          selected: eu,
          width: eo,
          fit: em,
          onVideoResize: es,
          paused: eb,
          inPopout: ea,
          focused: ef,
          inOverlayPopout: ey
        })
    }
    let e8 = i.useRef(null),
      e6 = D.type === K.fO.STREAM ? u.pzj : u.Odl;
    return (0, r.jsx)(p.Z, {
      section: W.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: o()(Q.wrapper, {
          [Q.ringing]: eL
        }, et),
        style: ei,
        onMouseEnter: () => {
          eI(true)
        },
        onMouseLeave: () => {
          eI(false)
        },
        children: (0, r.jsxs)(j.Z, {
          shakeLocation: Y.oZ.VOICE_USER,
          isShaking: eD,
          className: Q.tile,
          children: [(0, r.jsx)(B.Z, {
            ref: e8,
            className: o()(Q.tile, {
              [Q.noBorder]: ed,
              [Q.noInteraction]: null == H,
              [Q.idle]: ev
            }),
            noBorder: ed,
            style: er,
            participantUserId: eZ,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": e4,
              className: Q.tileChild,
              onDoubleClick: eJ,
              onContextMenu: e => e$(e, D.type === K.fO.STREAM),
              onClick: eQ,
              onMouseDown: $,
              onKeyDown: ee,
              focusProps: {
                offset: 1
              },
              children: [null != eB && null != eZ ? (0, r.jsx)(P.Z, {
                voiceChannelEffect: eB,
                onComplete: () => (0, I.H)(eZ),
                userId: eZ
              }) : null, D.type === K.fO.USER ? (0, r.jsx)("div", {
                className: Q.voiceChannelEffectsContainer,
                children: (0, r.jsx)(m.Z, {
                  userId: eZ,
                  channelId: el.id,
                  guildId: el.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e8 || null == (t = e8.current) ? true : t.clientWidth) ? s : 0,
                    height: null != (c = null == e8 || null == (n = e8.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e0, ed ? null : (0, r.jsx)("div", {
                className: Q.indicators,
                children: e1
              }), eu ? (0, r.jsx)("div", {
                className: Q.selectedScreen,
                children: (0, r.jsx)(e6, {
                  size: "md",
                  color: "currentColor",
                  className: Q.selectedIcon
                })
              }) : null, J.includes(D.type) ? null : (0, r.jsx)(en, (b = function(e) {
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
                focused: ef,
                width: eo,
                inCall: ec,
                participantType: D.type,
                hasVideo: null != eM && eM
              }, eG), _ = _ = {
                idle: ev,
                platform: eF,
                title: (0, k.Z)(el, D),
                blocked: eh,
                ignored: eg,
                localVideoDisabled: ew,
                videoToggleState: eA,
                hideAudioIcon: eU,
                onContextMenu: e$,
                onToggleMute: eX,
                participantUserId: eZ,
                channel: el,
                application: eW,
                secureFramesVerified: eq,
                isHovered: eS
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(_)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(_)).forEach(function(e) {
                Object.defineProperty(b, e, Object.getOwnPropertyDescriptor(_, e))
              }), b)), ec && !ed ? (0, r.jsx)("div", {
                className: o()(Q.border, {
                  [Q.voiceChannelEffect]: !ef && (ek || null != eB),
                  [Q.speaking]: eD && !ef && !ek
                })
              }) : null]
            })
          }), eC && eE && eS && (0, r.jsx)(G.Z, {
            currentUserId: eP,
            participant: D
          }), (0, r.jsx)(v.Z, {
            isFiring: ej,
            callTileRef: e8.current
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
  if (t === K.fO.STREAM) return n === K.wR.XBOX ? (0, r.jsx)(M.Z, {
    className: i
  }) : (0, r.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case K.wR.MOBILE:
      return (0, r.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case K.wR.XBOX:
      return (0, r.jsx)(M.Z, {
        className: i
      });
    case K.wR.PLAYSTATION:
      return (0, r.jsx)(L.Z, {
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
    onClick: l
  } = e;
  return (0, r.jsx)(c.u, {
    text: n,
    children: (0, r.jsx)("div", {
      className: o()(Q.overlayButton, {
        [Q.hideWhenInactive]: i
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
$.displayName = "CallTile";
let en = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: l,
    focused: d,
    videoToggleState: p,
    blocked: f,
    ignored: h,
    participantType: m,
    participantUserId: O,
    channel: y,
    platform: v,
    secureFramesVerified: j,
    onContextMenu: x,
    muted: C,
    deafened: E,
    localMuted: S,
    serverMuted: I,
    serverDeafened: P,
    hasVideo: N,
    hideAudioIcon: Z,
    onToggleMute: T
  } = e, A = (0, a.e7)([w.Z], () => null != O && w.Z.isLocalVideoAutoDisabled(O, (0, g.Z)(m)), [O, m]), R = (0, b.Z)({
    userId: O,
    guildId: y.getGuildId()
  }), L = (0, _.j)({
    displayNameStyles: R
  }), M = (0, H.N)(l), k = (0, H.K)(l), [G, U] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== D.Z.isOpen() && ((e = D.Z.isOpen()) || U(false))
      };
    return D.Z.addChangeListener(t), () => D.Z.removeChangeListener(t)
  }, []);
  let B = !Z && m === K.fO.STREAM && N && (!k || S),
    F = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: l
      } = e;
      return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null
    }({
      localMuted: S,
      serverMuted: I,
      serverDeafened: P,
      deafened: E,
      muted: C
    });
  return (0, r.jsxs)("div", {
    className: o()(Q.overlayContainer, {
      [Q.compact]: k
    }),
    children: [(0, r.jsx)("div", {
      className: o()(Q.overlayTop, {
        [Q.small]: l < 195
      }),
      children: A || p === W.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: Q.status,
        children: (0, r.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(Q.overlayTitle, Q.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: Q.status,
          children: (0, r.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: Q.overlayTitleText,
          children: X.intl.string(X.t.m2Hyj4)
        })]
      }) : null
    }), !M && (0, r.jsxs)("div", {
      className: o()(Q.overlayBottom, {
        [Q.small]: l < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: Q.experimentOverlayTitle,
        color: "none",
        variant: k ? "text-sm/normal" : "text-md/normal",
        children: [null != F && m === K.fO.USER && (0, r.jsx)(F, {
          className: o()(Q.experimentTitleIcon, {
            [Q.compact]: k
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, r.jsx)("div", {
          className: Q.blocked,
          children: (0, r.jsx)(u.t6m, {
            size: "lg",
            className: Q.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, h ? (0, r.jsx)("div", {
          className: Q.ignored,
          children: (0, r.jsx)(u.kZF, {
            size: "lg",
            className: Q.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(ee, {
          participantType: m,
          platform: v,
          className: o()(Q.experimentTitleIcon, {
            [Q.compact]: k
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: o()(Q.overlayTitleText, L),
          children: n
        }), j && (0, r.jsx)(c.u, {
          text: X.intl.string(X.t.ZEem6O),
          children: (0, r.jsx)(u.tQf, {
            className: Q.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": X.intl.string(X.t.mR9cf3)
          })
        })]
      }), !d && (0, r.jsxs)("div", {
        className: Q.overlayButtonContainer,
        children: [(0, r.jsx)(et, {
          onClick: e => {
            e.stopPropagation(), U(true), x(e, true, K.A5.THREE_DOT)
          },
          tooltipText: X.intl.string(X.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !G
        }), B && (0, r.jsx)(et, {
          onClick: T,
          tooltipText: S ? X.intl.string(X.t.YqAjX1) : X.intl.string(X.t["w4m94+"]),
          icon: S ? u.OyP : u.gj8,
          hideWhenInactive: !S && !G
        })]
      })]
    })]
  })
});
en.displayName = "CallTileOverlay";
let er = Chunk352978.L,
  ei = $