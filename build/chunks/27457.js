/** Chunk was on 55196 **/
n.d(t, {
  BP: () => eu,
  ZP: () => ed
}), n(388685);
var l = n(255367),
  i = n(73800),
  r = n(120356),
  s = n.n(r),
  a = n(442837),
  o = n(692547),
  c = n(481060),
  u = n(846027),
  d = n(410575),
  p = n(607070),
  f = n(812206),
  m = n(835473),
  v = n(414910),
  g = n(415635),
  h = n(578976),
  O = n(649739),
  y = n(37091),
  x = n(6572),
  S = n(352978),
  Z = n(936847),
  j = n(512384),
  E = n(33316),
  I = n(576645),
  b = n(210975),
  T = n(695346),
  _ = n(937995),
  C = n(456631),
  N = n(274459),
  R = n(314897),
  w = n(857192),
  A = n(77498),
  P = n(131951),
  V = n(158776),
  M = n(594174),
  D = n(979651),
  k = n(574254),
  U = n(374129),
  L = n(639351),
  z = n(74538),
  G = n(584729),
  Y = n(334374),
  B = n(849171),
  H = n(607187),
  F = n(833519),
  X = n(462061),
  K = n(623825),
  W = n(839662),
  q = n(981631),
  J = n(354459),
  Q = n(37113),
  $ = n(524484),
  ee = n(65154),
  et = n(388032),
  en = n(519417);

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function ei(e, t) {
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
let er = [J.fO.ACTIVITY],
  es = i.memo(e => {
    var t, n, r, o, k;
    let {
      participant: U,
      onDoubleClick: L,
      onContextMenu: K,
      onClick: es,
      onMouseDown: ea,
      onKeyDown: eo,
      className: eu,
      style: ed,
      containerStyle: ep,
      channel: ef,
      width: em,
      inPopout: ev,
      onVideoResize: eg,
      inCall: eh = !1,
      selected: eO = !1,
      noBorder: ey = !1,
      noVideoRender: ex = !1,
      focused: eS = !1,
      blocked: eZ = !1,
      ignored: ej = !1,
      fit: eE = S.L.CONTAIN,
      paused: eI = !1,
      pulseSpeakingIndicator: eb = !1,
      forceIdle: eT = !1,
      inOverlayPopout: e_ = !1
    } = e, eC = i.useContext(_.h9) || eT, [eN, eR] = i.useState(!1), ew = T.Sb.useSetting(), eA = (0, a.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled), [eP, eV] = i.useState(!1), eM = (0, a.e7)([R.default], () => R.default.getId()), eD = (0, a.e7)([M.default], () => M.default.getCurrentUser()), ek = U.type === J.fO.ACTIVITY ? null : null == (t = U.user) ? void 0 : t.id, [eU] = (0, m.Z)(U.type === J.fO.ACTIVITY ? [U.applicationId] : []), eL = (0, a.e7)([y.Z], () => y.Z.getEnabled()), ez = (0, a.e7)([P.Z], () => null != ek && P.Z.isLocalVideoDisabled(ek, (0, v.Z)(U.type)), [ek, U.type]), eG = (0, a.e7)([P.Z], () => null != ek ? P.Z.getVideoToggleState(ek, (0, v.Z)(U.type)) : q.ZUi.NONE, [ek, U.type]), eY = eG === q.ZUi.AUTO_PROBING, {
      speaking: eB,
      ringing: eH,
      hasVideo: eF
    } = (0, W.Z)(U, eM), eX = function(e, t, n) {
      var l, i, r, s;
      let o = t.type !== J.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([D.Z], () => {
          var e, t, l;
          let i = D.Z.getVoiceState(n, o);
          return {
            muted: null != (e = null == i ? void 0 : i.mute) && e,
            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
            suppressed: null != (l = null == i ? void 0 : i.suppress) && l,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, a.cj)([P.Z], () => {
          let n = (0, v.Z)(t.type);
          return e === o ? {
            muted: !1,
            deafened: !1
          } : {
            muted: P.Z.isLocalMute(o, n),
            localVideoDisabled: P.Z.isLocalVideoDisabled(o, n),
            localVideoAutoDisabled: P.Z.isLocalVideoAutoDisabled(o, n)
          }
        }, [e, t.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === J.fO.USER && (null == (l = t.voiceState) ? void 0 : l.isVoiceMuted())) && r,
        deafened: null != (s = t.type === J.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && s
      }
    }(eM, U, ef.getGuildId()), eK = U.type === J.fO.STREAM && ek === eM, eW = z.ZP.isPremium(eD);
    i.useEffect(() => {
      if (eK && !eW && null != ef.hdStreamingUntil && new Date(ef.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = P.Z.getGoLiveSource(),
            t = (0, h.s_)(Q.LY.RESOLUTION_720, Q.ws.FPS_30, e);
          u.Z.setGoLiveSource(t)
        }, new Date(ef.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [eK, eW, ef.hdStreamingUntil]);
    let eq = (0, a.e7)([C.Z], () => U.type === J.fO.USER && null != ek ? C.Z.getEffectForUserId(ek) : null),
      eJ = (0, a.e7)([D.Z], () => D.Z.getVoicePlatformForChannel(ef.id, null != ek ? ek : q.lds)),
      {
        showGameIcon: eQ
      } = O.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e$ = (0, a.e7)([V.Z], () => eQ && null != ek ? V.Z.findActivity(ek, e => null != e.application_id && e.type === q.IIU.PLAYING) : null, [eQ, ek]),
      e0 = (0, a.e7)([A.Z], () => (null == e$ ? void 0 : e$.application_id) != null ? A.Z.getDetectableGame(e$.application_id) : null),
      e1 = (0, a.e7)([f.Z], () => null != e0 && (null == e$ ? void 0 : e$.application_id) != null ? f.Z.getApplication(null == e$ ? void 0 : e$.application_id) : void 0),
      e7 = (0, b.wV)({
        userId: ek,
        channelId: ef.id
      }),
      e5 = (0, b.zU)({
        streamKey: U.type === J.fO.STREAM ? U.id : null,
        channelId: ef.id
      }),
      e3 = i.useMemo(() => U.type === J.fO.STREAM ? null != e5 && e5 : U.type === J.fO.USER && null != e7 && e7, [e5, e7, U.type]);
    i.useEffect(() => {
      eR(eS)
    }, [eS]);
    let [e4, e8] = i.useState(!1), e9 = i.useCallback(() => {
      p.Z.useReducedMotion || e8(!0)
    }, []);
    (0, I.J)(ef, e9);
    let e6 = i.useCallback(() => {
        null != ek && u.Z.toggleLocalMute(ek, ee.Yn.STREAM)
      }, [ek]),
      e2 = i.useCallback(e => {
        null == es || es(U, e)
      }, [es, U]),
      te = i.useCallback(e => {
        null == L || L(U, e)
      }, [L, U]),
      tt = i.useCallback((e, t, n) => {
        null == K || K(U, e, t, n)
      }, [K, U]),
      tn = null,
      tl = null,
      ti = "";
    switch (U.type) {
      case J.fO.STREAM:
        tn = (0, l.jsx)(F.Z, {
          participant: U,
          selected: eO,
          width: em,
          fit: eE,
          onVideoResize: eg,
          paused: eI,
          inPopout: ev,
          focused: eS,
          inOverlayPopout: e_
        }), tl = (0, l.jsx)(F._, {
          participant: U,
          selected: eO,
          width: em,
          focused: eS,
          idle: eC,
          premiumIndicator: !1
        }), ti = et.intl.formatToPlainString(et.t.gHPz3d, {
          streamerName: U.user.username
        });
        break;
      case J.fO.USER:
        tn = (0, l.jsx)(X.Z, {
          channel: ef,
          inCall: eh,
          participant: U,
          fit: eE,
          onVideoResize: eg,
          paused: eI,
          selected: eO,
          width: em,
          blocked: eZ,
          ignored: ej,
          noVideoRender: ex || eY,
          pulseSpeakingIndicator: eb,
          inOverlayPopout: e_
        }), tl = (0, l.jsx)(X.T, {
          participant: U,
          channelId: ef.id
        }), ti = et.intl.formatToPlainString(et.t["iC/x/f"], {
          username: U.user.username
        });
        break;
      case J.fO.ACTIVITY:
        tn = (0, l.jsx)(B.ZP, {
          interactible: eS,
          participant: U,
          selected: eO,
          channel: ef,
          width: em
        }), ti = et.intl.formatToPlainString(et.t.YCvOsL, {
          activityName: null == eU ? void 0 : eU.name
        });
        break;
      case J.fO.HIDDEN_STREAM:
        tn = (0, l.jsx)(F.Z, {
          participant: U,
          selected: eO,
          width: em,
          fit: eE,
          onVideoResize: eg,
          paused: eI,
          inPopout: ev,
          focused: eS,
          inOverlayPopout: e_
        })
    }
    let tr = i.useRef(null),
      ts = U.type === J.fO.STREAM ? c.pzj : c.Odl;
    return (0, l.jsx)(d.Z, {
      section: q.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsxs)("div", {
        className: s()(en.wrapper, {
          [en.ringing]: eH
        }, eu),
        style: ep,
        onMouseEnter: () => {
          eV(!0)
        },
        onMouseLeave: () => {
          eV(!1)
        },
        children: [e4 && U.type === J.fO.STREAM && (0, l.jsx)(E.Z, {
          baseTileRef: tr.current,
          cleanup: () => e8(!1)
        }), (0, l.jsxs)(j.Z, {
          shakeLocation: $.oZ.VOICE_USER,
          isShaking: eB,
          className: en.tile,
          children: [(0, l.jsx)(H.Z, {
            ref: tr,
            className: s()(en.tile, {
              [en.noBorder]: ey,
              [en.noInteraction]: null == es,
              [en.idle]: eC
            }),
            noBorder: ey,
            style: ed,
            participantUserId: ek,
            children: (0, l.jsxs)(c.kL8, {
              "aria-label": ti,
              className: en.tileChild,
              onDoubleClick: te,
              onContextMenu: e => tt(e, U.type === J.fO.STREAM),
              onClick: e2,
              onMouseDown: ea,
              onKeyDown: eo,
              focusProps: {
                offset: 1
              },
              children: [null != eq && null != ek ? (0, l.jsx)(N.Z, {
                voiceChannelEffect: eq,
                onComplete: () => (0, C.H)(ek),
                userId: ek
              }) : null, U.type === J.fO.USER ? (0, l.jsx)("div", {
                className: en.voiceChannelEffectsContainer,
                children: (0, l.jsx)(g.Z, {
                  userId: ek,
                  channelId: ef.id,
                  guildId: ef.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == tr || null == (n = tr.current) ? void 0 : n.clientWidth) ? o : 0,
                    height: null != (k = null == tr || null == (r = tr.current) ? void 0 : r.clientHeight) ? k : 0
                  }
                })
              }) : null, tn, ey ? null : (0, l.jsx)("div", {
                className: en.indicators,
                children: tl
              }), eO ? (0, l.jsx)("div", {
                className: en.selectedScreen,
                children: (0, l.jsx)(ts, {
                  size: "md",
                  color: "currentColor",
                  className: en.selectedIcon
                })
              }) : null, er.includes(U.type) ? null : (0, l.jsx)(ec, ei(el({
                focused: eS,
                width: em,
                inCall: eh,
                participantType: U.type,
                hasVideo: null != eF && eF
              }, eX), {
                idle: eC,
                platform: eJ,
                title: (0, G.Z)(ef, U),
                blocked: eZ,
                ignored: ej,
                localVideoDisabled: ez,
                videoToggleState: eG,
                hideAudioIcon: eK,
                onContextMenu: tt,
                onToggleMute: e6,
                participantUserId: ek,
                application: e1,
                secureFramesVerified: e3,
                isHovered: eP
              })), U.type === J.fO.USER && eL ? (0, l.jsx)(x.Z, {
                userId: U.id,
                channelId: ef.id
              }) : null, eh && !ey ? (0, l.jsx)("div", {
                className: s()(en.border, {
                  [en.voiceChannelEffect]: !eS && null != eq,
                  [en.speaking]: eB && !eS
                })
              }) : null]
            })
          }), ew && eA && eP && (0, l.jsx)(Y.Z, {
            currentUserId: eM,
            participant: U
          }), (0, l.jsx)(Z.Z, {
            isFiring: eN,
            callTileRef: tr.current
          })]
        })]
      })
    })
  });

function ea(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === J.fO.STREAM) return n === J.wR.XBOX ? (0, l.jsx)(L.Z, {
    className: i
  }) : (0, l.jsx)(c.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case J.wR.MOBILE:
      return (0, l.jsx)(c.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case J.wR.XBOX:
      return (0, l.jsx)(L.Z, {
        className: i
      });
    case J.wR.PLAYSTATION:
      return (0, l.jsx)(U.Z, {
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
    onClick: r,
    compact: a
  } = e;
  return (0, l.jsx)(c.ua7, {
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
      return (0, l.jsx)(c.zxk, ei(el({}, o), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), r(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: s()(en.overlayButton, {
          [en.hideWhenInactive]: i,
          [en.compact]: a
        }),
        innerClassName: en.overlayButtonInner,
        children: (0, l.jsx)(t, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
es.displayName = "CallTile";
let ec = i.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: u,
    videoToggleState: d,
    blocked: p,
    ignored: f,
    participantType: m,
    participantUserId: g,
    platform: h,
    secureFramesVerified: O,
    onContextMenu: y,
    muted: x,
    deafened: S,
    localMuted: Z,
    serverMuted: j,
    serverDeafened: E,
    hasVideo: I,
    hideAudioIcon: b,
    onToggleMute: T
  } = e, _ = (0, a.e7)([P.Z], () => null != g && P.Z.isLocalVideoAutoDisabled(g, (0, v.Z)(m)), [g, m]), C = (0, K.N)(r), N = (0, K.K)(r), [R, w] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      t = () => {
        e !== k.Z.isOpen() && ((e = k.Z.isOpen()) || w(!1))
      };
    return k.Z.addChangeListener(t), () => k.Z.removeChangeListener(t)
  }, []);
  let A = !b && m === J.fO.STREAM && I && (!N || Z),
    V = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: l,
        deafened: i,
        muted: r
      } = e;
      return l ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : r ? c.nRN : null
    }({
      localMuted: Z,
      serverMuted: j,
      serverDeafened: E,
      deafened: S,
      muted: x
    });
  return (0, l.jsxs)("div", {
    className: s()(en.overlayContainer, {
      [en.compact]: N
    }),
    children: [(0, l.jsx)("div", {
      className: s()(en.overlayTop, {
        [en.small]: r < 195
      }),
      children: _ || d === q.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: en.status,
        children: (0, l.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: s()(en.overlayTitle, en.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: en.status,
          children: (0, l.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: en.overlayTitleText,
          children: et.intl.string(et.t.m2Hyj4)
        })]
      }) : null
    }), !C && (0, l.jsxs)("div", {
      className: s()(en.overlayBottom, {
        [en.small]: r < 195
      }),
      children: [(0, l.jsxs)(c.Text, {
        className: s()(en.experimentOverlayTitle, {
          [en.compact]: N
        }),
        color: "none",
        variant: N ? "text-sm/normal" : "text-md/normal",
        children: [null != V && m === J.fO.USER && (0, l.jsx)(V, {
          className: s()(en.experimentTitleIcon, {
            [en.compact]: N
          }),
          size: "xs",
          color: "currentColor"
        }), p ? (0, l.jsx)("div", {
          className: en.blocked,
          children: (0, l.jsx)(c.t6m, {
            size: "lg",
            className: en.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, f ? (0, l.jsx)("div", {
          className: en.ignored,
          children: (0, l.jsx)(c.kZF, {
            size: "lg",
            className: en.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(ea, {
          participantType: m,
          platform: h,
          className: s()(en.experimentTitleIcon, {
            [en.compact]: N
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: en.overlayTitleText,
          children: n
        }), O && (0, l.jsx)(c.ua7, {
          text: et.intl.string(et.t.ZEem6O),
          children: e => (0, l.jsx)(c.tQf, ei(el({}, e), {
            className: en.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": et.intl.string(et.t.mR9cf3)
          }))
        })]
      }), !u && (0, l.jsxs)("div", {
        className: en.overlayButtonContainer,
        children: [(0, l.jsx)(eo, {
          onClick: e => {
            e.stopPropagation(), w(!0), y(e, !0, J.A5.THREE_DOT)
          },
          tooltipText: et.intl.string(et.t["+1H47u"]),
          icon: c.xhG,
          hideWhenInactive: !R,
          compact: N
        }), A && (0, l.jsx)(eo, {
          onClick: T,
          tooltipText: Z ? et.intl.string(et.t.YqAjX1) : et.intl.string(et.t["w4m94+"]),
          icon: Z ? c.OyP : c.gj8,
          hideWhenInactive: !Z && !R,
          compact: N
        })]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let eu = S.L,
  ed = es