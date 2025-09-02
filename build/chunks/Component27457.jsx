/** Chunk was on 55196 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => es,
  ZP: () => ea
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let et = [Chunk354459.fO.ACTIVITY],
  en = Chunk647438.memo(e => {
    var t, n, r, o, c;
    let {
      participant: h,
      onDoubleClick: M,
      onContextMenu: D,
      onClick: k,
      onMouseDown: H,
      onKeyDown: en,
      className: el,
      style: ei,
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
      fit: eO = j.L.CONTAIN,
      paused: ey = false,
      pulseSpeakingIndicator: ex = false,
      forceIdle: ej = false,
      inOverlayPopout: eZ = false
    } = e, eI = i.useContext(T.h9) || ej, [eE, eS] = i.useState(false), eb = b.Sb.useSetting(), eT = (0, a.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled), [e_, eC] = i.useState(false), eN = (0, a.e7)([N.default], () => N.default.getId()), eR = h.type === K.fO.ACTIVITY ? null : h.user, eA = null != (r = null == eR ? true : eR.id) ? r : null, [eV] = (0, m.Z)(h.type === K.fO.ACTIVITY ? [h.applicationId] : []), ew = (0, a.e7)([y.Z], () => y.Z.getEnabled()), eP = (0, a.e7)([V.Z], () => null != eA && V.Z.isLocalVideoDisabled(eA, (0, v.Z)(h.type)), [eA, h.type]), eM = (0, a.e7)([V.Z], () => null != eA ? V.Z.getVideoToggleState(eA, (0, v.Z)(h.type)) : X.ZUi.NONE, [eA, h.type]), eD = eM === X.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: eU,
      hasVideo: eL
    } = (0, F.Z)(h, eN), ez = (0, a.e7)([S.Z], () => null !== eA && S.Z.isUserPlayingSounds(eA), [eA]), eG = function(e, t, n) {
      var l, i, r, s;
      let o = t.type !== K.fO.ACTIVITY ? t.user.id : t.applicationId,
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
        muted: null != (r = t.type === K.fO.USER && (null == (l = t.voiceState) ? true : l.isVoiceMuted())) && r,
        deafened: null != (s = t.type === K.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && s
      }
    }(eN, h, ea.getGuildId()), eY = h.type === K.fO.STREAM && eA === eN, eB = (0, a.e7)([_.Z], () => h.type === K.fO.USER && null != eA ? _.Z.getEffectForUserId(eA) : null), eH = (0, a.e7)([P.Z], () => P.Z.getVoicePlatformForChannel(ea.id, null != eA ? eA : X.lds)), {
      showGameIcon: eF
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eX = (0, a.e7)([w.Z], () => eF && null != eA ? w.Z.findActivity(eA, e => null != e.application_id && e.type === X.IIU.PLAYING) : null, [eF, eA]), eK = (0, a.e7)([A.Z], () => (null == eX ? true : eX.application_id) != null ? A.Z.getDetectableGame(eX.application_id) : null), eW = (0, a.e7)([f.Z], () => null != eK && (null == eX ? true : eX.application_id) != null ? f.Z.getApplication(null == eX ? true : eX.application_id) : true), eq = (0, E.wV)({
      userId: eA,
      channelId: ea.id
    }), eQ = (0, E.zU)({
      streamKey: h.type === K.fO.STREAM ? h.id : null,
      channelId: ea.id
    }), eJ = i.useMemo(() => h.type === K.fO.STREAM ? null != eQ && eQ : h.type === K.fO.USER && null != eq && eq, [eQ, eq, h.type]);
    i.useEffect(() => {
      eS(ev)
    }, [ev]);
    let e$ = i.useCallback(() => {
        null != eA && d.Z.toggleLocalMute(eA, q.Yn.STREAM)
      }, [eA]),
      e0 = i.useCallback(e => {
        null == k || k(h, e)
      }, [k, h]),
      e1 = i.useCallback(e => {
        null == M || M(h, e)
      }, [M, h]),
      e7 = i.useCallback((e, t, n) => {
        null == D || D(h, e, t, n)
      }, [D, h]),
      e4 = null,
      e5 = null,
      e8 = "";
    switch (h.type) {
      case K.fO.STREAM:
        e4 = (0, l.jsx)(Y.Z, {
          participant: h,
          selected: ep,
          width: eo,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: eZ
        }), e5 = (0, l.jsx)(Y._, {
          participant: h,
          selected: ep,
          width: eo,
          focused: ev,
          idle: eI,
          premiumIndicator: false
        }), e8 = Q.intl.formatToPlainString(Q.t.gHPz3d, {
          streamerName: h.user.username
        });
        break;
      case K.fO.USER:
        e4 = (0, l.jsx)(B.Z, {
          channel: ea,
          inCall: ed,
          participant: h,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          selected: ep,
          width: eo,
          blocked: eg,
          ignored: eh,
          noVideoRender: em || eD,
          pulseSpeakingIndicator: ex,
          inOverlayPopout: eZ
        }), e5 = (0, l.jsx)(B.T, {
          participant: h,
          channelId: ea.id
        }), e8 = Q.intl.formatToPlainString(Q.t["iC/x/f"], {
          username: h.user.username
        });
        break;
      case K.fO.ACTIVITY:
        e4 = (0, l.jsx)(z.ZP, {
          interactible: ev,
          participant: h,
          selected: ep,
          channel: ea,
          width: eo
        }), e8 = Q.intl.formatToPlainString(Q.t.YCvOsL, {
          activityName: null == eV ? true : eV.name
        });
        break;
      case K.fO.HIDDEN_STREAM:
        e4 = (0, l.jsx)(Y.Z, {
          participant: h,
          selected: ep,
          width: eo,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: eZ
        })
    }
    let e9 = i.useRef(null),
      e6 = h.type === K.fO.STREAM ? u.pzj : u.Odl;
    return (0, l.jsx)(p.Z, {
      section: X.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: s()(J.wrapper, {
          [J.ringing]: eU
        }, el),
        style: es,
        onMouseEnter: () => {
          eC(true)
        },
        onMouseLeave: () => {
          eC(false)
        },
        children: (0, l.jsxs)(I.Z, {
          shakeLocation: W.oZ.VOICE_USER,
          isShaking: ek,
          className: J.tile,
          children: [(0, l.jsx)(G.Z, {
            ref: e9,
            className: s()(J.tile, {
              [J.noBorder]: ef,
              [J.noInteraction]: null == k,
              [J.idle]: eI
            }),
            noBorder: ef,
            style: ei,
            participantUserId: eA,
            children: (0, l.jsxs)(u.kL8, {
              "aria-label": e8,
              className: J.tileChild,
              onDoubleClick: e1,
              onContextMenu: e => e7(e, h.type === K.fO.STREAM),
              onClick: e0,
              onMouseDown: H,
              onKeyDown: en,
              focusProps: {
                offset: 1
              },
              children: [null != eB && null != eA ? (0, l.jsx)(C.Z, {
                voiceChannelEffect: eB,
                onComplete: () => (0, _.H)(eA),
                userId: eA
              }) : null, h.type === K.fO.USER ? (0, l.jsx)("div", {
                className: J.voiceChannelEffectsContainer,
                children: (0, l.jsx)(g.Z, {
                  userId: eA,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e9 || null == (t = e9.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e9 || null == (n = e9.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ef ? null : (0, l.jsx)("div", {
                className: J.indicators,
                children: e5
              }), ep ? (0, l.jsx)("div", {
                className: J.selectedScreen,
                children: (0, l.jsx)(e6, {
                  size: "md",
                  color: "currentColor",
                  className: J.selectedIcon
                })
              }) : null, et.includes(h.type) ? null : (0, l.jsx)(er, ee($({
                focused: ev,
                width: eo,
                inCall: ed,
                participantType: h.type,
                hasVideo: null != eL && eL
              }, eG), {
                idle: eI,
                platform: eH,
                title: (0, U.Z)(ea, h),
                blocked: eg,
                ignored: eh,
                localVideoDisabled: eP,
                videoToggleState: eM,
                hideAudioIcon: eY,
                onContextMenu: e7,
                onToggleMute: e$,
                participantUserId: eA,
                participantDisplayNameStyles: null == eR ? true : eR.displayNameStyles,
                application: eW,
                secureFramesVerified: eJ,
                isHovered: e_
              })), h.type === K.fO.USER && ew ? (0, l.jsx)(x.Z, {
                userId: h.id,
                channelId: ea.id
              }) : null, ed && !ef ? (0, l.jsx)("div", {
                className: s()(J.border, {
                  [J.voiceChannelEffect]: !ev && (ez || null != eB),
                  [J.speaking]: ek && !ev && !ez
                })
              }) : null]
            })
          }), eb && eT && e_ && (0, l.jsx)(L.Z, {
            currentUserId: eN,
            participant: h
          }), (0, l.jsx)(Z.Z, {
            isFiring: eE,
            callTileRef: e9.current
          })]
        })
      })
    })
  });

function el(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === K.fO.STREAM) return n === K.wR.XBOX ? (0, l.jsx)(k.Z, {
    className: i
  }) : (0, l.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case K.wR.MOBILE:
      return (0, l.jsx)(u.AtH, {
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

function ei(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: r,
    compact: a
  } = e;
  return (0, l.jsx)(u.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, o = function(e, t) {
        if (null == e) return {};
        var n, l, i = function(e, t) {
          if (null == e) return {};
          var n, l, i = {},
            r = Object.keys(e);
          for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["onClick"]);
      return (0, l.jsx)(c.zx, ee($({}, o), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), r(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Tt.CUSTOM,
        size: c.Ph.ICON,
        className: s()(J.overlayButton, {
          [J.hideWhenInactive]: i,
          [J.compact]: a
        }),
        innerClassName: J.overlayButtonInner,
        children: (0, l.jsx)(t, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
en.displayName = "CallTile";
let er = Chunk647438.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: c,
    videoToggleState: d,
    blocked: p,
    ignored: f,
    participantType: m,
    participantUserId: g,
    participantDisplayNameStyles: O,
    platform: y,
    secureFramesVerified: x,
    onContextMenu: j,
    muted: Z,
    deafened: I,
    localMuted: E,
    serverMuted: S,
    serverDeafened: b,
    hasVideo: T,
    hideAudioIcon: _,
    onToggleMute: C
  } = e, N = (0, a.e7)([V.Z], () => null != g && V.Z.isLocalVideoAutoDisabled(g, (0, v.Z)(m)), [g, m]), R = (0, h.j)({
    displayNameStyles: O
  }), A = (0, H.N)(r), w = (0, H.K)(r), [P, D] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== M.Z.isOpen() && ((e = M.Z.isOpen()) || D(false))
      };
    return M.Z.addChangeListener(t), () => M.Z.removeChangeListener(t)
  }, []);
  let k = !_ && m === K.fO.STREAM && T && (!w || E),
    U = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: l,
        deafened: i,
        muted: r
      } = e;
      return l ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : r ? u.nRN : null
    }({
      localMuted: E,
      serverMuted: S,
      serverDeafened: b,
      deafened: I,
      muted: Z
    });
  return (0, l.jsxs)("div", {
    className: s()(J.overlayContainer, {
      [J.compact]: w
    }),
    children: [(0, l.jsx)("div", {
      className: s()(J.overlayTop, {
        [J.small]: r < 195
      }),
      children: N || d === X.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: J.status,
        children: (0, l.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: s()(J.overlayTitle, J.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: J.status,
          children: (0, l.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: J.overlayTitleText,
          children: Q.intl.string(Q.t.m2Hyj4)
        })]
      }) : null
    }), !A && (0, l.jsxs)("div", {
      className: s()(J.overlayBottom, {
        [J.small]: r < 195
      }),
      children: [(0, l.jsxs)(u.Text, {
        className: s()(J.experimentOverlayTitle, {
          [J.compact]: w
        }),
        color: "none",
        variant: w ? "text-sm/normal" : "text-md/normal",
        children: [null != U && m === K.fO.USER && (0, l.jsx)(U, {
          className: s()(J.experimentTitleIcon, {
            [J.compact]: w
          }),
          size: "xs",
          color: "currentColor"
        }), p ? (0, l.jsx)("div", {
          className: J.blocked,
          children: (0, l.jsx)(u.t6m, {
            size: "lg",
            className: J.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, f ? (0, l.jsx)("div", {
          className: J.ignored,
          children: (0, l.jsx)(u.kZF, {
            size: "lg",
            className: J.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(el, {
          participantType: m,
          platform: y,
          className: s()(J.experimentTitleIcon, {
            [J.compact]: w
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: s()(J.overlayTitleText, R),
          children: n
        }), x && (0, l.jsx)(u.ua7, {
          text: Q.intl.string(Q.t.ZEem6O),
          children: e => (0, l.jsx)(u.tQf, ee($({}, e), {
            className: J.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": Q.intl.string(Q.t.mR9cf3)
          }))
        })]
      }), !c && (0, l.jsxs)("div", {
        className: J.overlayButtonContainer,
        children: [(0, l.jsx)(ei, {
          onClick: e => {
            e.stopPropagation(), D(true), j(e, true, K.A5.THREE_DOT)
          },
          tooltipText: Q.intl.string(Q.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !P,
          compact: w
        }), k && (0, l.jsx)(ei, {
          onClick: C,
          tooltipText: E ? Q.intl.string(Q.t.YqAjX1) : Q.intl.string(Q.t["w4m94+"]),
          icon: E ? u.OyP : u.gj8,
          hideWhenInactive: !E && !P,
          compact: w
        })]
      })]
    })]
  })
});
er.displayName = "CallTileOverlay";
let es = Chunk352978.L,
  ea = en