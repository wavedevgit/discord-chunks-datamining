/** Chunk was on 63373 **/
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
      fit: eO = x.L.CONTAIN,
      paused: ey = false,
      pulseSpeakingIndicator: eZ = false,
      forceIdle: ex = false,
      inOverlayPopout: ej = false
    } = e, eI = i.useContext(T.h9) || ex, [eS, eE] = i.useState(false), eb = b.Sb.useSetting(), eT = (0, a.e7)([R.default], () => R.default.isStreamInfoOverlayEnabled), [e_, eC] = i.useState(false), eN = (0, a.e7)([N.default], () => N.default.getId()), eR = h.type === K.fO.ACTIVITY ? null : h.user, eV = null != (r = null == eR ? true : eR.id) ? r : null, [eA] = (0, m.Z)(h.type === K.fO.ACTIVITY ? [h.applicationId] : []), ew = (0, a.e7)([y.Z], () => y.Z.getEnabled()), eP = (0, a.e7)([A.Z], () => null != eV && A.Z.isLocalVideoDisabled(eV, (0, v.Z)(h.type)), [eV, h.type]), eM = (0, a.e7)([A.Z], () => null != eV ? A.Z.getVideoToggleState(eV, (0, v.Z)(h.type)) : X.ZUi.NONE, [eV, h.type]), eD = eM === X.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: eU,
      hasVideo: ez
    } = (0, F.Z)(h, eN), eL = (0, a.e7)([E.Z], () => null !== eV && E.Z.isUserPlayingSounds(eV), [eV]), eG = function(e, t, n) {
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
        u = (0, a.cj)([A.Z], () => {
          let n = (0, v.Z)(t.type);
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
    }(eN, h, ea.getGuildId()), eY = h.type === K.fO.STREAM && eV === eN, eB = (0, a.e7)([_.Z], () => h.type === K.fO.USER && null != eV ? _.Z.getEffectForUserId(eV) : null), eH = (0, a.e7)([P.Z], () => P.Z.getVoicePlatformForChannel(ea.id, null != eV ? eV : X.lds)), {
      showGameIcon: eF
    } = O.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), eX = (0, a.e7)([w.Z], () => eF && null != eV ? w.Z.findActivity(eV, e => null != e.application_id && e.type === X.IIU.PLAYING) : null, [eF, eV]), eK = (0, a.e7)([V.Z], () => (null == eX ? true : eX.application_id) != null ? V.Z.getDetectableGame(eX.application_id) : null), eW = (0, a.e7)([f.Z], () => null != eK && (null == eX ? true : eX.application_id) != null ? f.Z.getApplication(null == eX ? true : eX.application_id) : true), eJ = (0, S.wV)({
      userId: eV,
      channelId: ea.id
    }), eq = (0, S.zU)({
      streamKey: h.type === K.fO.STREAM ? h.id : null,
      channelId: ea.id
    }), eQ = i.useMemo(() => h.type === K.fO.STREAM ? null != eq && eq : h.type === K.fO.USER && null != eJ && eJ, [eq, eJ, h.type]);
    i.useEffect(() => {
      eE(ev)
    }, [ev]);
    let e$ = i.useCallback(() => {
        null != eV && d.Z.toggleLocalMute(eV, J.Yn.STREAM)
      }, [eV]),
      e0 = i.useCallback(e => {
        null == k || k(h, e)
      }, [k, h]),
      e7 = i.useCallback(e => {
        null == M || M(h, e)
      }, [M, h]),
      e1 = i.useCallback((e, t, n) => {
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
          inOverlayPopout: ej
        }), e5 = (0, l.jsx)(Y._, {
          participant: h,
          selected: ep,
          width: eo,
          focused: ev,
          idle: eI,
          premiumIndicator: false
        }), e8 = q.intl.formatToPlainString(q.t.gHPz3d, {
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
          pulseSpeakingIndicator: eZ,
          inOverlayPopout: ej
        }), e5 = (0, l.jsx)(B.T, {
          participant: h,
          channelId: ea.id
        }), e8 = q.intl.formatToPlainString(q.t["iC/x/f"], {
          username: h.user.username
        });
        break;
      case K.fO.ACTIVITY:
        e4 = (0, l.jsx)(L.ZP, {
          interactible: ev,
          participant: h,
          selected: ep,
          channel: ea,
          width: eo
        }), e8 = q.intl.formatToPlainString(q.t.YCvOsL, {
          activityName: null == eA ? true : eA.name
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
          inOverlayPopout: ej
        })
    }
    let e9 = i.useRef(null),
      e3 = h.type === K.fO.STREAM ? u.pzj : u.Odl;
    return (0, l.jsx)(p.Z, {
      section: X.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: s()(Q.wrapper, {
          [Q.ringing]: eU
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
          className: Q.tile,
          children: [(0, l.jsx)(G.Z, {
            ref: e9,
            className: s()(Q.tile, {
              [Q.noBorder]: ef,
              [Q.noInteraction]: null == k,
              [Q.idle]: eI
            }),
            noBorder: ef,
            style: ei,
            participantUserId: eV,
            children: (0, l.jsxs)(u.kL8, {
              "aria-label": e8,
              className: Q.tileChild,
              onDoubleClick: e7,
              onContextMenu: e => e1(e, h.type === K.fO.STREAM),
              onClick: e0,
              onMouseDown: H,
              onKeyDown: en,
              focusProps: {
                offset: 1
              },
              children: [null != eB && null != eV ? (0, l.jsx)(C.Z, {
                voiceChannelEffect: eB,
                onComplete: () => (0, _.H)(eV),
                userId: eV
              }) : null, h.type === K.fO.USER ? (0, l.jsx)("div", {
                className: Q.voiceChannelEffectsContainer,
                children: (0, l.jsx)(g.Z, {
                  userId: eV,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == e9 || null == (t = e9.current) ? true : t.clientWidth) ? o : 0,
                    height: null != (c = null == e9 || null == (n = e9.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ef ? null : (0, l.jsx)("div", {
                className: Q.indicators,
                children: e5
              }), ep ? (0, l.jsx)("div", {
                className: Q.selectedScreen,
                children: (0, l.jsx)(e3, {
                  size: "md",
                  color: "currentColor",
                  className: Q.selectedIcon
                })
              }) : null, et.includes(h.type) ? null : (0, l.jsx)(er, ee($({
                focused: ev,
                width: eo,
                inCall: ed,
                participantType: h.type,
                hasVideo: null != ez && ez
              }, eG), {
                idle: eI,
                platform: eH,
                title: (0, U.Z)(ea, h),
                blocked: eg,
                ignored: eh,
                localVideoDisabled: eP,
                videoToggleState: eM,
                hideAudioIcon: eY,
                onContextMenu: e1,
                onToggleMute: e$,
                participantUserId: eV,
                participantDisplayNameStyles: null == eR ? true : eR.displayNameStyles,
                application: eW,
                secureFramesVerified: eQ,
                isHovered: e_
              })), h.type === K.fO.USER && ew ? (0, l.jsx)(Z.Z, {
                userId: h.id,
                channelId: ea.id
              }) : null, ed && !ef ? (0, l.jsx)("div", {
                className: s()(Q.border, {
                  [Q.voiceChannelEffect]: !ev && (eL || null != eB),
                  [Q.speaking]: ek && !ev && !eL
                })
              }) : null]
            })
          }), eb && eT && e_ && (0, l.jsx)(z.Z, {
            currentUserId: eN,
            participant: h
          }), (0, l.jsx)(j.Z, {
            isFiring: eS,
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
        className: s()(Q.overlayButton, {
          [Q.hideWhenInactive]: i,
          [Q.compact]: a
        }),
        innerClassName: Q.overlayButtonInner,
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
    secureFramesVerified: Z,
    onContextMenu: x,
    muted: j,
    deafened: I,
    localMuted: S,
    serverMuted: E,
    serverDeafened: b,
    hasVideo: T,
    hideAudioIcon: _,
    onToggleMute: C
  } = e, N = (0, a.e7)([A.Z], () => null != g && A.Z.isLocalVideoAutoDisabled(g, (0, v.Z)(m)), [g, m]), R = (0, h.j)({
    displayNameStyles: O
  }), V = (0, H.N)(r), w = (0, H.K)(r), [P, D] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== M.Z.isOpen() && ((e = M.Z.isOpen()) || D(false))
      };
    return M.Z.addChangeListener(t), () => M.Z.removeChangeListener(t)
  }, []);
  let k = !_ && m === K.fO.STREAM && T && (!w || S),
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
      localMuted: S,
      serverMuted: E,
      serverDeafened: b,
      deafened: I,
      muted: j
    });
  return (0, l.jsxs)("div", {
    className: s()(Q.overlayContainer, {
      [Q.compact]: w
    }),
    children: [(0, l.jsx)("div", {
      className: s()(Q.overlayTop, {
        [Q.small]: r < 195
      }),
      children: N || d === X.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
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
          children: q.intl.string(q.t.m2Hyj4)
        })]
      }) : null
    }), !V && (0, l.jsxs)("div", {
      className: s()(Q.overlayBottom, {
        [Q.small]: r < 195
      }),
      children: [(0, l.jsxs)(u.Text, {
        className: s()(Q.experimentOverlayTitle, {
          [Q.compact]: w
        }),
        color: "none",
        variant: w ? "text-sm/normal" : "text-md/normal",
        children: [null != U && m === K.fO.USER && (0, l.jsx)(U, {
          className: s()(Q.experimentTitleIcon, {
            [Q.compact]: w
          }),
          size: "xs",
          color: "currentColor"
        }), p ? (0, l.jsx)("div", {
          className: Q.blocked,
          children: (0, l.jsx)(u.t6m, {
            size: "lg",
            className: Q.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, f ? (0, l.jsx)("div", {
          className: Q.ignored,
          children: (0, l.jsx)(u.kZF, {
            size: "lg",
            className: Q.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(el, {
          participantType: m,
          platform: y,
          className: s()(Q.experimentTitleIcon, {
            [Q.compact]: w
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: s()(Q.overlayTitleText, R),
          children: n
        }), Z && (0, l.jsx)(u.ua7, {
          text: q.intl.string(q.t.ZEem6O),
          children: e => (0, l.jsx)(u.tQf, ee($({}, e), {
            className: Q.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": q.intl.string(q.t.mR9cf3)
          }))
        })]
      }), !c && (0, l.jsxs)("div", {
        className: Q.overlayButtonContainer,
        children: [(0, l.jsx)(ei, {
          onClick: e => {
            e.stopPropagation(), D(true), x(e, true, K.A5.THREE_DOT)
          },
          tooltipText: q.intl.string(q.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !P,
          compact: w
        }), k && (0, l.jsx)(ei, {
          onClick: C,
          tooltipText: S ? q.intl.string(q.t.YqAjX1) : q.intl.string(q.t["w4m94+"]),
          icon: S ? u.OyP : u.gj8,
          hideWhenInactive: !S && !P,
          compact: w
        })]
      })]
    })]
  })
});
er.displayName = "CallTileOverlay";
let es = Chunk352978.L,
  ea = en