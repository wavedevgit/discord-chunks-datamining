/** Chunk was on 81985 **/
/** chunk id: 27457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BP: () => eu,
  ZP: () => ed
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
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
  Chunk404577 = require("./404577.js"),
  Chunk857192 = require("./857192.js"),
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
  Chunk858329 = require("./858329.js");
let ei = [Chunk354459.fO.ACTIVITY],
  el = Chunk473749.memo(e => {
    var t, n, l, s, c, m, y;
    let {
      participant: v,
      popoutType: O,
      onDoubleClick: S,
      onContextMenu: _,
      onClick: U,
      onMouseDown: G,
      onKeyDown: B,
      className: F,
      style: H,
      containerStyle: X,
      channel: el,
      width: ea,
      onVideoResize: eo,
      inCall: es = false,
      selected: eu = false,
      noBorder: ed = false,
      noVideoRender: ep = false,
      focused: ef = false,
      blocked: eh = false,
      ignored: eg = false,
      fit: em = x.L.CONTAIN,
      paused: eb = false,
      pulseSpeakingIndicator: ey = false,
      forceIdle: ev = false,
      controlsBottom: eO
    } = e, ej = i.useContext(N.h9) || ev, [ex, eC] = i.useState(false), eE = Z.Sb.useSetting(), eS = (0, o.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled), [e_, eI] = i.useState(false), eP = (0, o.e7)([w.default], () => w.default.getId()), eZ = v.type === $.fO.ACTIVITY ? null : v.user, eN = null != (l = null == eZ ? true : eZ.id) ? l : null, [eT] = (0, h.Z)(v.type === $.fO.ACTIVITY ? [v.applicationId] : []), eA = (0, o.e7)([M.Z], () => null != eN && M.Z.isLocalVideoDisabled(eN, (0, g.Z)(v.type)), [eN, v.type]), ew = (0, o.e7)([M.Z], () => null != eN ? M.Z.getVideoToggleState(eN, (0, g.Z)(v.type)) : J.ZUi.NONE, [eN, v.type]), eR = ew === J.ZUi.AUTO_PROBING, {
      speaking: eD,
      latched: eM,
      ringing: ek,
      hasVideo: eL
    } = (0, Q.Z)(v, eP), eU = (0, o.e7)([P.Z], () => null !== eN && P.Z.isUserPlayingSounds(eN), [eN]), eG = function(e, t, n) {
      var r, i, l, a;
      let s = t.type !== $.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, o.cj)([L.Z], () => {
          var e, t, r;
          let i = L.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? true : i.mute) && e,
            deafened: null != (t = null == i ? true : i.deaf) && t,
            suppressed: null != (r = null == i ? true : i.suppress) && r,
            voiceChannelId: null == i ? true : i.channelId
          }
        }),
        u = (0, o.cj)([M.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === s ? {
            muted: false,
            deafened: false
          } : {
            muted: M.Z.isLocalMute(s, n),
            localVideoDisabled: M.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: M.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (l = t.type === $.fO.USER && (null == (r = t.voiceState) ? true : r.isVoiceMuted())) && l,
        deafened: null != (a = t.type === $.fO.USER && (null == (i = t.voiceState) ? true : i.isVoiceDeafened())) && a
      }
    }(eP, v, el.getGuildId()), eB = v.type === $.fO.STREAM && eN === eP, eF = (0, o.e7)([T.Z], () => v.type === $.fO.USER && null != eN ? T.Z.getEffectForUserId(eN) : null), eH = (0, o.e7)([L.Z], () => L.Z.getVoicePlatformForChannel(el.id, null != eN ? eN : J.lds)), {
      showGameIcon: eV
    } = j.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: false
    }), ez = (0, o.e7)([k.Z], () => eV && null != eN ? k.Z.findActivity(eN, e => null != e.application_id && e.type === J.IIU.PLAYING) : null, [eV, eN]), eW = (0, o.e7)([R.Z], () => (null == ez ? true : ez.application_id) != null ? R.Z.getDetectableGame(ez.application_id) : null), eK = (0, o.e7)([f.Z], () => null != eW && (null == ez ? true : ez.application_id) != null ? f.Z.getApplication(null == ez ? true : ez.application_id) : true), eY = (0, I.wV)({
      userId: eN,
      channelId: el.id
    }), eq = (0, I.zU)({
      streamKey: v.type === $.fO.STREAM ? v.id : null,
      channelId: el.id
    }), eX = i.useMemo(() => v.type === $.fO.STREAM ? null != eq && eq : v.type === $.fO.USER && null != eY && eY, [eq, eY, v.type]);
    i.useEffect(() => {
      eC(ef)
    }, [ef]);
    let eQ = i.useCallback(() => {
        null != eN && d.Z.toggleLocalMute(eN, et.Yn.STREAM)
      }, [eN]),
      eJ = i.useCallback(e => {
        null == U || U(v, e)
      }, [U, v]),
      e$ = i.useCallback(e => {
        null == S || S(v, e)
      }, [S, v]),
      e0 = i.useCallback((e, t, n) => {
        null == _ || _(v, e, t, n)
      }, [_, v]),
      e1 = null,
      e4 = null,
      e3 = "";
    switch (v.type) {
      case $.fO.STREAM:
        e1 = (0, r.jsx)(Y.Z, {
          participant: v,
          selected: eu,
          popoutType: O,
          width: ea,
          fit: em,
          onVideoResize: eo,
          paused: eb,
          focused: ef,
          idle: ej,
          controlsBottom: eO
        }), e4 = (0, r.jsx)(Y._, {
          participant: v,
          selected: eu,
          width: ea,
          focused: ef,
          idle: ej,
          premiumIndicator: false
        }), e3 = en.intl.formatToPlainString(en.t.gHPz3Q, {
          streamerName: v.user.username
        });
        break;
      case $.fO.USER:
        e1 = (0, r.jsx)(q.Z, {
          channel: el,
          inCall: es,
          participant: v,
          popoutType: O,
          fit: em,
          onVideoResize: eo,
          paused: eb,
          selected: eu,
          width: ea,
          blocked: eh,
          ignored: eg,
          noVideoRender: ep || eR,
          pulseSpeakingIndicator: ey
        }), e4 = (0, r.jsx)(q.T, {
          participant: v,
          channelId: el.id
        }), e3 = en.intl.formatToPlainString(en.t["iC/x/Q"], {
          username: v.user.username
        });
        break;
      case $.fO.ACTIVITY:
        e1 = (0, r.jsx)(W.ZP, {
          interactible: ef,
          participant: v,
          selected: eu,
          channel: el,
          width: ea
        }), e3 = en.intl.formatToPlainString(en.t.YCvOsO, {
          activityName: null == eT ? true : eT.name
        });
        break;
      case $.fO.HIDDEN_STREAM:
        e1 = (0, r.jsx)(Y.Z, {
          participant: v,
          selected: eu,
          width: ea,
          fit: em,
          onVideoResize: eo,
          paused: eb,
          popoutType: O,
          focused: ef,
          idle: ej
        })
    }
    let e7 = i.useRef(null),
      e8 = v.type === $.fO.STREAM ? u.pzj : u.Odl;
    return (0, r.jsx)(p.Z, {
      section: J.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: a()(er.wrapper, {
          [er.ringing]: ek
        }, F),
        style: X,
        onMouseEnter: () => {
          eI(true)
        },
        onMouseLeave: () => {
          eI(false)
        },
        children: (0, r.jsxs)(E.Z, {
          shakeLocation: ee.oZ.VOICE_USER,
          isShaking: eD,
          className: er.tile,
          children: [(0, r.jsx)(K.Z, {
            ref: e7,
            className: a()(er.tile, {
              [er.noBorder]: ed,
              [er.noInteraction]: null == U,
              [er.idle]: ej
            }),
            noBorder: ed,
            style: H,
            participantUserId: eN,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": e3,
              className: er.tileChild,
              onDoubleClick: e$,
              onContextMenu: e => e0(e, v.type === $.fO.STREAM),
              onClick: eJ,
              onMouseDown: G,
              onKeyDown: B,
              focusProps: {
                offset: 1
              },
              children: [null != eF && null != eN ? (0, r.jsx)(A.Z, {
                voiceChannelEffect: eF,
                onComplete: () => (0, T.H)(eN),
                userId: eN
              }) : null, v.type === $.fO.USER ? (0, r.jsx)("div", {
                className: er.voiceChannelEffectsContainer,
                children: (0, r.jsx)(b.Z, {
                  userId: eN,
                  channelId: el.id,
                  guildId: el.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e7 || null == (t = e7.current) ? true : t.clientWidth) ? s : 0,
                    height: null != (c = null == e7 || null == (n = e7.current) ? true : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e1, ed ? null : (0, r.jsx)("div", {
                className: er.indicators,
                children: e4
              }), eu ? (0, r.jsx)("div", {
                className: er.selectedScreen,
                children: (0, r.jsx)(e8, {
                  size: "md",
                  color: "currentColor",
                  className: er.selectedIcon
                })
              }) : null, ei.includes(v.type) ? null : (0, r.jsx)(ec, (m = function(e) {
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
                width: ea,
                inCall: es,
                participantId: v.id,
                participantType: v.type,
                hasVideo: null != eL && eL
              }, eG), y = y = {
                idle: ej,
                platform: eH,
                title: (0, V.Z)(el, v),
                blocked: eh,
                ignored: eg,
                localVideoDisabled: eA,
                videoToggleState: ew,
                hideAudioIcon: eB,
                onContextMenu: e0,
                onToggleMute: eQ,
                participantUserId: eN,
                channel: el,
                application: eK,
                secureFramesVerified: eX,
                isHovered: e_,
                popoutType: O
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(y)).forEach(function(e) {
                Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(y, e))
              }), m)), es && !ed ? (0, r.jsx)("div", {
                className: a()(er.border, {
                  [er.voiceChannelEffect]: !ef && (eU || null != eF),
                  [er.speaking]: eD && !ef && !eU,
                  [er.latchedNotSpeaking]: eM && !eD && !ef && !eU
                })
              }) : null]
            })
          }), eE && eS && e_ && (0, r.jsx)(z.Z, {
            currentUserId: eP,
            participant: v
          }), (0, r.jsx)(C.Z, {
            isFiring: ex,
            callTileRef: e7.current
          })]
        })
      })
    })
  });

function ea(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === $.fO.STREAM) return n === $.wR.XBOX ? (0, r.jsx)(B.Z, {
    className: i
  }) : (0, r.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case $.wR.MOBILE:
      return (0, r.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case $.wR.XBOX:
      return (0, r.jsx)(B.Z, {
        className: i
      });
    case $.wR.PLAYSTATION:
      return (0, r.jsx)(G.Z, {
        className: i
      });
    default:
      return null
  }
}

function eo(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: l
  } = e;
  return (0, r.jsx)(c.u, {
    text: n,
    children: (0, r.jsx)("div", {
      className: a()(er.overlayButton, {
        [er.hideWhenInactive]: i
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

function es(e) {
  let {
    channelId: t,
    participantId: n,
    hideWhenInactive: l
  } = e, a = i.useMemo(() => (0, y.Z)(t, n), [t, n]), s = (0, o.e7)([S.Z], () => S.Z.getIsAlwaysOnTop(a)), c = i.useCallback(() => {
    _.setAlwaysOnTop(a, !s)
  }, [a, s]);
  return F.isPlatformEmbedded && H.ZP.supportsFeature(J.eRX.POPOUT_WINDOWS) ? (0, r.jsx)(eo, {
    onClick: c,
    tooltipText: s ? en.intl.string(en.t.YdyDM9) : en.intl.string(en.t.ZVGHwP),
    icon: s ? u.QVc : u.k5M,
    hideWhenInactive: l
  }) : null
}
el.displayName = "CallTile";
let ec = Chunk473749.memo(e => {
  let {
    idle: t,
    title: n,
    width: l,
    focused: d,
    videoToggleState: p,
    blocked: f,
    ignored: h,
    participantId: b,
    participantType: y,
    participantUserId: j,
    channel: x,
    platform: C,
    secureFramesVerified: E,
    onContextMenu: S,
    muted: _,
    deafened: I,
    localMuted: P,
    serverMuted: Z,
    serverDeafened: N,
    hasVideo: T,
    hideAudioIcon: A,
    onToggleMute: w,
    popoutType: R
  } = e, D = (0, o.e7)([M.Z], () => null != j && M.Z.isLocalVideoAutoDisabled(j, (0, g.Z)(y)), [j, y]), k = (0, v.Z)({
    userId: j,
    guildId: x.getGuildId()
  }), L = (0, O.j)({
    displayNameStyles: k
  }), G = (0, X.N)(l), B = (0, X.K)(l), [F, H] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== U.Z.isOpen() && ((e = U.Z.isOpen()) || H(false))
      };
    return U.Z.addChangeListener(t), () => U.Z.removeChangeListener(t)
  }, []);
  let V = !A && y === $.fO.STREAM && T && (!B || P),
    z = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: l
      } = e;
      return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null
    }({
      localMuted: P,
      serverMuted: Z,
      serverDeafened: N,
      deafened: I,
      muted: _
    }),
    W = [];
  return d ? R === m.P.CALL_TILE && W.push((0, r.jsx)(es, {
    channelId: x.id,
    participantId: b,
    hideWhenInactive: !F
  }, "stay-on-top")) : (W.push((0, r.jsx)(eo, {
    onClick: e => {
      e.stopPropagation(), H(true), S(e, true, $.A5.THREE_DOT)
    },
    tooltipText: en.intl.string(en.t["+1H47t"]),
    icon: u.xhG,
    hideWhenInactive: !F
  }, "options")), V && W.push((0, r.jsx)(eo, {
    onClick: w,
    tooltipText: P ? en.intl.string(en.t.YqAjXy) : en.intl.string(en.t.w4m945),
    icon: P ? u.OyP : u.gj8,
    hideWhenInactive: !P && !F
  }, "mute"))), (0, r.jsxs)("div", {
    className: a()(er.overlayContainer, {
      [er.compact]: B,
      [er.noPointerEvents]: d
    }),
    children: [(0, r.jsx)("div", {
      className: a()(er.overlayTop, {
        [er.small]: l < 195
      }),
      children: D || p === J.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: er.status,
        children: (0, r.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: a()(er.overlayTitle, er.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: er.status,
          children: (0, r.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: er.overlayTitleText,
          children: en.intl.string(en.t.m2Hyj0)
        })]
      }) : null
    }), !G && (0, r.jsxs)("div", {
      className: a()(er.overlayBottom, {
        [er.small]: l < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: er.experimentOverlayTitle,
        color: "none",
        variant: B ? "text-sm/normal" : "text-md/normal",
        children: [null != z && y === $.fO.USER && (0, r.jsx)(z, {
          className: a()(er.experimentTitleIcon, {
            [er.compact]: B
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, r.jsx)("div", {
          className: er.blocked,
          children: (0, r.jsx)(u.t6m, {
            size: "lg",
            className: er.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, h ? (0, r.jsx)("div", {
          className: er.ignored,
          children: (0, r.jsx)(u.kZF, {
            size: "lg",
            className: er.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(ea, {
          participantType: y,
          platform: C,
          className: a()(er.experimentTitleIcon, {
            [er.compact]: B
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: a()(er.overlayTitleText, L),
          children: n
        }), E && (0, r.jsx)(c.u, {
          text: en.intl.string(en.t.ZEem6O),
          children: (0, r.jsx)(u.tQf, {
            className: er.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.TEXT_STRONG,
            "aria-label": en.intl.string(en.t.mR9cf3)
          })
        })]
      }), W.length > 0 ? (0, r.jsx)("div", {
        className: er.overlayButtonContainer,
        children: W
      }) : null]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let eu = Chunk352978.L,
  ed = el