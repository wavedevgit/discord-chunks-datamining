/** Chunk was on 91488 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => eo,
  ZP: () => ea
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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

function $(e) {
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
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let et = [Chunk354459.fO.ACTIVITY],
  en = Chunk647438.memo(e => {
    var t, n, l, s, c;
    let {
      participant: b,
      onDoubleClick: M,
      onContextMenu: L,
      onClick: k,
      onMouseDown: z,
      onKeyDown: en,
      className: er,
      style: ei,
      containerStyle: eo,
      channel: ea,
      width: es,
      inPopout: ec,
      onVideoResize: eu,
      inCall: ed = false,
      selected: ep = false,
      noBorder: eh = false,
      noVideoRender: ef = false,
      focused: eg = false,
      blocked: em = false,
      ignored: eb = false,
      fit: eO = v.L.CONTAIN,
      paused: ey = false,
      pulseSpeakingIndicator: e_ = false,
      forceIdle: ev = false,
      inOverlayPopout: ej = false
    } = e, ex = i.useContext(P.h9) || ev, [eC, eS] = i.useState(false), eE = E.Sb.useSetting(), eP = (0, a.e7)([Z.default], () => Z.default.isStreamInfoOverlayEnabled), [eI, eN] = i.useState(false), ew = (0, a.e7)([w.default], () => w.default.getId()), eZ = b.type === Y.fO.ACTIVITY ? null : b.user, eT = null != (l = null == eZ ? true : eZ.id) ? l : null, [eA] = (0, f.Z)(b.type === Y.fO.ACTIVITY ? [b.applicationId] : []), eR = (0, a.e7)([y.Z], () => y.Z.getEnabled()), eD = (0, a.e7)([A.Z], () => null != eT && A.Z.isLocalVideoDisabled(eT, (0, g.Z)(b.type)), [eT, b.type]), eM = (0, a.e7)([A.Z], () => null != eT ? A.Z.getVideoToggleState(eT, (0, g.Z)(b.type)) : K.ZUi.NONE, [eT, b.type]), eL = eM === K.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: eU,
      hasVideo: eG
    } = (0, W.Z)(b, ew), eB = (0, a.e7)([S.Z], () => null !== eT && S.Z.isUserPlayingSounds(eT), [eT]), eF = function(e, t, n) {
      var r, i, l, o;
      let s = t.type !== Y.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([D.Z], () => {
          var e, t, r;
          let i = D.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (r = null == i ? true : i.suppress) && r,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, a.cj)([A.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === s ? {
            muted: false,
            deafened: false
          } : {
            muted: A.Z.isLocalMute(s, n),
            localVideoDisabled: A.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: A.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (l = t.type === Y.fO.USER && (null == (r = t.voiceState) ? true : r.isVoiceMuted())) && l,
        deafened: null != (o = t.type === Y.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && o
      }
    }(ew, b, ea.getGuildId()), eV = b.type === Y.fO.STREAM && eT === ew, eH = (0, a.e7)([I.Z], () => b.type === Y.fO.USER && null != eT ? I.Z.getEffectForUserId(eT) : null), ez = (0, a.e7)([D.Z], () => D.Z.getVoicePlatformForChannel(ea.id, null != eT ? eT : K.lds)), {
      showGameIcon: eW
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eK = (0, a.e7)([R.Z], () => eW && null != eT ? R.Z.findActivity(eT, e => null != e.application_id && e.type === K.IIU.PLAYING) : null, [eW, eT]), eY = (0, a.e7)([T.Z], () => (null == eK ? true : eK.application_id) != null ? T.Z.getDetectableGame(eK.application_id) : null), eq = (0, a.e7)([h.Z], () => null != eY && (null == eK ? true : eK.application_id) != null ? h.Z.getApplication(null == eK ? true : eK.application_id) : true), eX = (0, C.wV)({
      userId: eT,
      channelId: ea.id
    }), eQ = (0, C.zU)({
      streamKey: b.type === Y.fO.STREAM ? b.id : null,
      channelId: ea.id
    }), eJ = i.useMemo(() => b.type === Y.fO.STREAM ? null != eQ && eQ : b.type === Y.fO.USER && null != eX && eX, [eQ, eX, b.type]);
    i.useEffect(() => {
      eS(eg)
    }, [eg]);
    let e$ = i.useCallback(() => {
        null != eT && d.Z.toggleLocalMute(eT, X.Yn.STREAM)
      }, [eT]),
      e0 = i.useCallback(e => {
        null == k || k(b, e)
      }, [k, b]),
      e1 = i.useCallback(e => {
        null == M || M(b, e)
      }, [M, b]),
      e4 = i.useCallback((e, t, n) => {
        null == L || L(b, e, t, n)
      }, [L, b]),
      e8 = null,
      e6 = null,
      e3 = "";
    switch (b.type) {
      case Y.fO.STREAM:
        e8 = (0, r.jsx)(V.Z, {
          participant: b,
          selected: ep,
          width: es,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          inPopout: ec,
          focused: eg,
          inOverlayPopout: ej
        }), e6 = (0, r.jsx)(V._, {
          participant: b,
          selected: ep,
          width: es,
          focused: eg,
          idle: ex,
          premiumIndicator: false
        }), e3 = Q.intl.formatToPlainString(Q.t.gHPz3d, {
          streamerName: b.user.username
        });
        break;
      case Y.fO.USER:
        e8 = (0, r.jsx)(H.Z, {
          channel: ea,
          inCall: ed,
          participant: b,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          selected: ep,
          width: es,
          blocked: em,
          ignored: eb,
          noVideoRender: ef || eL,
          pulseSpeakingIndicator: e_,
          inOverlayPopout: ej
        }), e6 = (0, r.jsx)(H.T, {
          participant: b,
          channelId: ea.id
        }), e3 = Q.intl.formatToPlainString(Q.t["iC/x/f"], {
          username: b.user.username
        });
        break;
      case Y.fO.ACTIVITY:
        e8 = (0, r.jsx)(B.ZP, {
          interactible: eg,
          participant: b,
          selected: ep,
          channel: ea,
          width: es
        }), e3 = Q.intl.formatToPlainString(Q.t.YCvOsL, {
          activityName: null == eA ? true : eA.name
        });
        break;
      case Y.fO.HIDDEN_STREAM:
        e8 = (0, r.jsx)(V.Z, {
          participant: b,
          selected: ep,
          width: es,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          inPopout: ec,
          focused: eg,
          inOverlayPopout: ej
        })
    }
    let e7 = i.useRef(null),
      e5 = b.type === Y.fO.STREAM ? u.pzj : u.Odl;
    return (0, r.jsx)(p.Z, {
      section: K.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: o()(J.wrapper, {
          [J.ringing]: eU
        }, er),
        style: eo,
        onMouseEnter: () => {
          eN(true)
        },
        onMouseLeave: () => {
          eN(false)
        },
        children: (0, r.jsxs)(x.Z, {
          shakeLocation: q.oZ.VOICE_USER,
          isShaking: ek,
          className: J.tile,
          children: [(0, r.jsx)(F.Z, {
            ref: e7,
            className: o()(J.tile, {
              [J.noBorder]: eh,
              [J.noInteraction]: null == k,
              [J.idle]: ex
            }),
            noBorder: eh,
            style: ei,
            participantUserId: eT,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": e3,
              className: J.tileChild,
              onDoubleClick: e1,
              onContextMenu: e => e4(e, b.type === Y.fO.STREAM),
              onClick: e0,
              onMouseDown: z,
              onKeyDown: en,
              focusProps: {
                offset: 1
              },
              children: [null != eH && null != eT ? (0, r.jsx)(N.Z, {
                voiceChannelEffect: eH,
                onComplete: () => (0, I.H)(eT),
                userId: eT
              }) : null, b.type === Y.fO.USER ? (0, r.jsx)("div", {
                className: J.voiceChannelEffectsContainer,
                children: (0, r.jsx)(m.Z, {
                  userId: eT,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e7 || null == (t = e7.current) ? true : t.clientWidth) ? s : 0,
                    height: null != (c = null == e7 || null == (n = e7.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e8, eh ? null : (0, r.jsx)("div", {
                className: J.indicators,
                children: e6
              }), ep ? (0, r.jsx)("div", {
                className: J.selectedScreen,
                children: (0, r.jsx)(e5, {
                  size: "md",
                  color: "currentColor",
                  className: J.selectedIcon
                })
              }) : null, et.includes(b.type) ? null : (0, r.jsx)(el, ee($({
                focused: eg,
                width: es,
                inCall: ed,
                participantType: b.type,
                hasVideo: null != eG && eG
              }, eF), {
                idle: ex,
                platform: ez,
                title: (0, U.Z)(ea, b),
                blocked: em,
                ignored: eb,
                localVideoDisabled: eD,
                videoToggleState: eM,
                hideAudioIcon: eV,
                onContextMenu: e4,
                onToggleMute: e$,
                participantUserId: eT,
                participantDisplayNameStyles: null == eZ ? true : eZ.displayNameStyles,
                application: eq,
                secureFramesVerified: eJ,
                isHovered: eI
              })), b.type === Y.fO.USER && eR ? (0, r.jsx)(_.Z, {
                userId: b.id,
                channelId: ea.id
              }) : null, ed && !eh ? (0, r.jsx)("div", {
                className: o()(J.border, {
                  [J.voiceChannelEffect]: !eg && (eB || null != eH),
                  [J.speaking]: ek && !eg && !eB
                })
              }) : null]
            })
          }), eE && eP && eI && (0, r.jsx)(G.Z, {
            currentUserId: ew,
            participant: b
          }), (0, r.jsx)(j.Z, {
            isFiring: eC,
            callTileRef: e7.current
          })]
        })
      })
    })
  });

function er(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === Y.fO.STREAM) return n === Y.wR.XBOX ? (0, r.jsx)(k.Z, {
    className: i
  }) : (0, r.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case Y.wR.MOBILE:
      return (0, r.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case Y.wR.XBOX:
      return (0, r.jsx)(k.Z, {
        className: i
      });
    case Y.wR.PLAYSTATION:
      return (0, r.jsx)(L.Z, {
        className: i
      });
    default:
      return null
  }
}

function ei(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: l,
    compact: a
  } = e;
  return (0, r.jsx)(u.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, s = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["onClick"]);
      return (0, r.jsx)(c.zx, ee($({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), l(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Tt.CUSTOM,
        size: c.Ph.ICON,
        className: o()(J.overlayButton, {
          [J.hideWhenInactive]: i,
          [J.compact]: a
        }),
        innerClassName: J.overlayButtonInner,
        children: (0, r.jsx)(t, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
en.displayName = "CallTile";
let el = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: l,
    focused: c,
    videoToggleState: d,
    blocked: p,
    ignored: h,
    participantType: f,
    participantUserId: m,
    participantDisplayNameStyles: O,
    platform: y,
    secureFramesVerified: _,
    onContextMenu: v,
    muted: j,
    deafened: x,
    localMuted: C,
    serverMuted: S,
    serverDeafened: E,
    hasVideo: P,
    hideAudioIcon: I,
    onToggleMute: N
  } = e, w = (0, a.e7)([A.Z], () => null != m && A.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]), Z = (0, b.j)({
    displayNameStyles: O
  }), T = (0, z.N)(l), R = (0, z.K)(l), [D, L] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== M.Z.isOpen() && ((e = M.Z.isOpen()) || L(false))
      };
    return M.Z.addChangeListener(t), () => M.Z.removeChangeListener(t)
  }, []);
  let k = !I && f === Y.fO.STREAM && P && (!R || C),
    U = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: l
      } = e;
      return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null
    }({
      localMuted: C,
      serverMuted: S,
      serverDeafened: E,
      deafened: x,
      muted: j
    });
  return (0, r.jsxs)("div", {
    className: o()(J.overlayContainer, {
      [J.compact]: R
    }),
    children: [(0, r.jsx)("div", {
      className: o()(J.overlayTop, {
        [J.small]: l < 195
      }),
      children: w || d === K.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: J.status,
        children: (0, r.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(J.overlayTitle, J.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: J.status,
          children: (0, r.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: J.overlayTitleText,
          children: Q.intl.string(Q.t.m2Hyj4)
        })]
      }) : null
    }), !T && (0, r.jsxs)("div", {
      className: o()(J.overlayBottom, {
        [J.small]: l < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: o()(J.experimentOverlayTitle, {
          [J.compact]: R
        }),
        color: "none",
        variant: R ? "text-sm/normal" : "text-md/normal",
        children: [null != U && f === Y.fO.USER && (0, r.jsx)(U, {
          className: o()(J.experimentTitleIcon, {
            [J.compact]: R
          }),
          size: "xs",
          color: "currentColor"
        }), p ? (0, r.jsx)("div", {
          className: J.blocked,
          children: (0, r.jsx)(u.t6m, {
            size: "lg",
            className: J.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, h ? (0, r.jsx)("div", {
          className: J.ignored,
          children: (0, r.jsx)(u.kZF, {
            size: "lg",
            className: J.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(er, {
          participantType: f,
          platform: y,
          className: o()(J.experimentTitleIcon, {
            [J.compact]: R
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: o()(J.overlayTitleText, Z),
          children: n
        }), _ && (0, r.jsx)(u.ua7, {
          text: Q.intl.string(Q.t.ZEem6O),
          children: e => (0, r.jsx)(u.tQf, ee($({}, e), {
            className: J.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": Q.intl.string(Q.t.mR9cf3)
          }))
        })]
      }), !c && (0, r.jsxs)("div", {
        className: J.overlayButtonContainer,
        children: [(0, r.jsx)(ei, {
          onClick: e => {
            e.stopPropagation(), L(true), v(e, true, Y.A5.THREE_DOT)
          },
          tooltipText: Q.intl.string(Q.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !D,
          compact: R
        }), k && (0, r.jsx)(ei, {
          onClick: N,
          tooltipText: C ? Q.intl.string(Q.t.YqAjX1) : Q.intl.string(Q.t["w4m94+"]),
          icon: C ? u.OyP : u.gj8,
          hideWhenInactive: !C && !D,
          compact: R
        })]
      })]
    })]
  })
});
el.displayName = "CallTileOverlay";
let eo = Chunk352978.L,
  ea = en