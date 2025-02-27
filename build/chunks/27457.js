/** Chunk was on 12379 **/
n.d(t, {
  BP: () => ef,
  ZP: () => eg
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(442837),
  a = n(692547),
  c = n(481060),
  u = n(846027),
  d = n(410575),
  _ = n(607070),
  E = n(812206),
  p = n(835473),
  m = n(414910),
  h = n(415635),
  f = n(578976),
  g = n(925329),
  N = n(649739),
  O = n(37091),
  I = n(6572),
  b = n(352978),
  T = n(936847),
  C = n(512384),
  S = n(33316),
  y = n(576645),
  P = n(6242),
  R = n(757692),
  A = n(210975),
  v = n(695346),
  x = n(937995),
  D = n(456631),
  L = n(274459),
  k = n(314897),
  j = n(857192),
  M = n(77498),
  Z = n(131951),
  U = n(158776),
  w = n(594174),
  V = n(979651),
  G = n(574254),
  F = n(374129),
  W = n(639351),
  B = n(74538),
  H = n(221241),
  z = n(584729),
  Y = n(334374),
  K = n(849171),
  X = n(607187),
  q = n(624834),
  Q = n(833519),
  J = n(462061),
  $ = n(623825),
  ee = n(839662),
  et = n(981631),
  en = n(354459),
  er = n(37113),
  ei = n(524484),
  el = n(65154),
  eo = n(388032),
  es = n(668595);

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function ec(e, t) {
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

function eu(e, t) {
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
}
let ed = [en.fO.ACTIVITY, en.fO.PRESENCE_EMBEDDED_ACTIVITY],
  e_ = i.memo(e => {
    var t, n, l, a, g;
    let {
      participant: G,
      onDoubleClick: F,
      onContextMenu: W,
      onClick: $,
      onMouseDown: eu,
      onKeyDown: e_,
      className: eE,
      style: ep,
      containerStyle: ef,
      channel: eg,
      width: eN,
      inPopout: eO,
      onVideoResize: eI,
      inCall: eb = !1,
      selected: eT = !1,
      noBorder: eC = !1,
      noVideoRender: eS = !1,
      focused: ey = !1,
      blocked: eP = !1,
      ignored: eR = !1,
      fit: eA = b.L.CONTAIN,
      paused: ev = !1,
      pulseSpeakingIndicator: ex = !1,
      forceIdle: eD = !1,
      inOverlayPopout: eL = !1
    } = e, ek = i.useContext(x.h9) || eD, [ej, eM] = i.useState(!1), eZ = v.Sb.useSetting(), eU = (0, s.e7)([j.default], () => j.default.isStreamInfoOverlayEnabled), [ew, eV] = i.useState(!1), eG = (0, s.e7)([k.default], () => k.default.getId()), eF = (0, s.e7)([w.default], () => w.default.getCurrentUser()), eW = G.type === en.fO.ACTIVITY ? null : null === (t = G.user) || void 0 === t ? void 0 : t.id, [eB] = (0, p.Z)(G.type === en.fO.ACTIVITY ? [G.applicationId] : []), eH = (0, s.e7)([O.Z], () => O.Z.getEnabled()), ez = (0, s.e7)([Z.Z], () => null != eW && Z.Z.isLocalVideoDisabled(eW, (0, m.Z)(G.type)), [eW, G.type]), eY = (0, s.e7)([Z.Z], () => null != eW ? Z.Z.getVideoToggleState(eW, (0, m.Z)(G.type)) : et.ZUi.NONE, [eW, G.type]), eK = eY === et.ZUi.AUTO_PROBING, {
      speaking: eX,
      ringing: eq,
      hasVideo: eQ
    } = (0, ee.Z)(G, eG), eJ = function(e, t, n) {
      var r, i, l, o;
      let a = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, s.cj)([V.Z], () => {
          var e, t, r;
          let i = V.Z.getVoiceState(n, a);
          return {
            muted: null !== (e = null == i ? void 0 : i.mute) && void 0 !== e && e,
            deafened: null !== (t = null == i ? void 0 : i.deaf) && void 0 !== t && t,
            suppressed: null !== (r = null == i ? void 0 : i.suppress) && void 0 !== r && r,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, s.cj)([Z.Z], () => {
          let n = (0, m.Z)(t.type);
          return e === a ? {
            muted: !1,
            deafened: !1
          } : {
            muted: Z.Z.isLocalMute(a, n),
            localVideoDisabled: Z.Z.isLocalVideoDisabled(a, n),
            localVideoAutoDisabled: Z.Z.isLocalVideoAutoDisabled(a, n)
          }
        }, [e, t.type, a]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null !== (l = t.type === en.fO.USER && (null === (r = t.voiceState) || void 0 === r ? void 0 : r.isVoiceMuted())) && void 0 !== l && l,
        deafened: null !== (o = t.type === en.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== o && o
      }
    }(eG, G, eg.getGuildId()), e$ = G.type === en.fO.STREAM && eW === eG, e0 = B.ZP.isPremium(eF);
    i.useEffect(() => {
      if (e$ && !e0 && null != eg.hdStreamingUntil && new Date(eg.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = Z.Z.getGoLiveSource(),
            t = (0, f.s)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
          u.Z.setGoLiveSource(t)
        }, new Date(eg.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [e$, e0, eg.hdStreamingUntil]);
    let e4 = (0, R.o)(G, eF),
      e1 = (0, P.lL)("CallTile", !0, eF, e4),
      e3 = (0, s.e7)([D.Z], () => G.type === en.fO.USER && null != eW ? D.Z.getEffectForUserId(eW) : null),
      e6 = (0, s.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(eg.id, null != eW ? eW : et.lds)),
      {
        simplifiedSettingsEnabled: e2
      } = (0, H.Z)({
        location: "CallTile"
      }),
      {
        showGameIcon: e9
      } = N.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e8 = (0, s.e7)([U.Z], () => e9 && null != eW ? U.Z.findActivity(eW, e => null != e.application_id && e.type === et.IIU.PLAYING) : null, [e9, eW]),
      e7 = (0, s.e7)([M.Z], () => (null == e8 ? void 0 : e8.application_id) != null ? M.Z.getDetectableGame(e8.application_id) : null),
      e5 = (0, s.e7)([E.Z], () => null != e7 && (null == e8 ? void 0 : e8.application_id) != null ? E.Z.getApplication(null == e8 ? void 0 : e8.application_id) : void 0),
      te = (0, A.wV)({
        userId: eW,
        channelId: eg.id,
        location: "CallTile"
      }),
      tt = (0, A.zU)({
        streamKey: G.type === en.fO.STREAM ? G.id : null,
        channelId: eg.id,
        location: "CallTile"
      }),
      tn = i.useMemo(() => G.type === en.fO.STREAM ? null != tt && tt : G.type === en.fO.USER && null != te && te, [tt, te, G.type]);
    i.useEffect(() => {
      eM(ey)
    }, [ey]);
    let [tr, ti] = i.useState(!1), tl = i.useCallback(() => {
      _.Z.useReducedMotion || ti(!0)
    }, []);
    (0, y.J)(eg, tl);
    let to = i.useCallback(() => {
        null != eW && u.Z.toggleLocalMute(eW, el.Yn.STREAM)
      }, [eW]),
      ts = i.useCallback(e => {
        null == $ || $(G, e)
      }, [$, G]),
      ta = i.useCallback(e => {
        null == F || F(G, e)
      }, [F, G]),
      tc = i.useCallback((e, t, n) => {
        null == W || W(G, e, t, n)
      }, [W, G]),
      tu = null,
      td = null,
      t_ = "";
    switch (G.type) {
      case en.fO.STREAM:
        tu = (0, r.jsx)(Q.Z, {
          participant: G,
          selected: eT,
          width: eN,
          fit: eA,
          onVideoResize: eI,
          paused: ev,
          inPopout: eO,
          focused: ey,
          inOverlayPopout: eL
        }), td = (0, r.jsx)(Q._, {
          participant: G,
          selected: eT,
          width: eN,
          focused: ey,
          idle: ek,
          premiumIndicator: e1.enabled
        }), t_ = eo.NW.formatToPlainString(eo.t.gHPz3d, {
          streamerName: G.user.username
        });
        break;
      case en.fO.USER:
        tu = (0, r.jsx)(J.Z, {
          channel: eg,
          inCall: eb,
          participant: G,
          fit: eA,
          onVideoResize: eI,
          paused: ev,
          selected: eT,
          width: eN,
          blocked: eP,
          ignored: eR,
          noVideoRender: eS || eK,
          pulseSpeakingIndicator: ex,
          inOverlayPopout: eL
        }), td = (0, r.jsx)(J.T, {
          userId: G.user.id,
          channelId: eg.id
        }), t_ = eo.NW.formatToPlainString(eo.t["iC/x/f"], {
          username: G.user.username
        });
        break;
      case en.fO.ACTIVITY:
        tu = (0, r.jsx)(K.ZP, {
          interactible: ey,
          participant: G,
          selected: eT,
          channel: eg,
          width: eN
        }), t_ = eo.NW.formatToPlainString(eo.t.YCvOsL, {
          activityName: null == eB ? void 0 : eB.name
        });
        break;
      case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
        tu = (0, r.jsx)(q.Z, {
          participant: G,
          width: eN,
          channelId: eg.id
        });
        break;
      case en.fO.HIDDEN_STREAM:
        tu = (0, r.jsx)(Q.Z, {
          participant: G,
          selected: eT,
          width: eN,
          fit: eA,
          onVideoResize: eI,
          paused: ev,
          inPopout: eO,
          focused: ey,
          inOverlayPopout: eL
        })
    }
    let tE = i.useRef(null),
      tp = G.type === en.fO.STREAM ? c.pzj : c.Odl,
      tm = e2 ? em : eh;
    return (0, r.jsx)(d.Z, {
      section: et.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsxs)("div", {
        className: o()(es.wrapper, {
          [es.ringing]: eq
        }, eE),
        style: ef,
        onMouseEnter: () => {
          eV(!0)
        },
        onMouseLeave: () => {
          eV(!1)
        },
        children: [tr && G.type === en.fO.STREAM && (0, r.jsx)(S.Z, {
          baseTileRef: tE.current,
          cleanup: () => ti(!1)
        }), (0, r.jsxs)(C.Z, {
          shakeLocation: ei.oZ.VOICE_USER,
          isShaking: eX,
          className: es.tile,
          children: [(0, r.jsx)(X.Z, {
            ref: tE,
            className: o()(es.tile, {
              [es.noBorder]: eC,
              [es.noInteraction]: null == $,
              [es.idle]: ek
            }),
            noBorder: eC,
            style: ep,
            participantUserId: eW,
            children: (0, r.jsxs)(c.kL8, {
              "aria-label": t_,
              className: es.tileChild,
              onDoubleClick: ta,
              onContextMenu: e => tc(e, e2 && G.type === en.fO.STREAM),
              onClick: ts,
              onMouseDown: eu,
              onKeyDown: e_,
              focusProps: {
                offset: 1
              },
              children: [null != e3 && null != eW ? (0, r.jsx)(L.Z, {
                voiceChannelEffect: e3,
                onComplete: () => (0, D.H)(eW),
                userId: eW
              }) : null, G.type === en.fO.USER ? (0, r.jsx)("div", {
                className: es.voiceChannelEffectsContainer,
                children: (0, r.jsx)(h.Z, {
                  userId: eW,
                  channelId: eg.id,
                  guildId: eg.getGuildId(),
                  containerDimensions: {
                    width: null !== (a = null == tE ? void 0 : null === (n = tE.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== a ? a : 0,
                    height: null !== (g = null == tE ? void 0 : null === (l = tE.current) || void 0 === l ? void 0 : l.clientHeight) && void 0 !== g ? g : 0
                  }
                })
              }) : null, tu, eC ? null : (0, r.jsx)("div", {
                className: es.indicators,
                children: td
              }), eT ? (0, r.jsx)("div", {
                className: es.selectedScreen,
                children: (0, r.jsx)(tp, {
                  size: "md",
                  color: "currentColor",
                  className: es.selectedIcon
                })
              }) : null, ed.includes(G.type) ? null : (0, r.jsx)(tm, ec(ea({
                focused: ey,
                width: eN,
                inCall: eb,
                participantType: G.type,
                hasVideo: null != eQ && eQ
              }, eJ), {
                idle: ek,
                platform: e6,
                title: (0, z.Z)(eg, G),
                blocked: eP,
                ignored: eR,
                localVideoDisabled: ez,
                videoToggleState: eY,
                hideAudioIcon: e$,
                onContextMenu: tc,
                onToggleMute: to,
                participantUserId: eW,
                application: e5,
                secureFramesVerified: tn,
                isHovered: ew
              })), G.type === en.fO.USER && eH ? (0, r.jsx)(I.Z, {
                userId: G.id,
                channelId: eg.id
              }) : null, eb && !eC ? (0, r.jsx)("div", {
                className: o()(es.border, {
                  [es.voiceChannelEffect]: !ey && null != e3,
                  [es.speaking]: eX && !ey
                })
              }) : null]
            })
          }), eZ && eU && ew && (0, r.jsx)(Y.Z, {
            currentUserId: eG,
            participant: G
          }), (0, r.jsx)(T.Z, {
            isFiring: ej,
            callTileRef: tE.current
          })]
        })]
      })
    })
  });

function eE(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === en.fO.STREAM) return n === en.wR.XBOX ? (0, r.jsx)(W.Z, {
    className: i
  }) : (0, r.jsx)(c.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case en.wR.MOBILE:
      return (0, r.jsx)(c.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case en.wR.XBOX:
      return (0, r.jsx)(W.Z, {
        className: i
      });
    case en.wR.PLAYSTATION:
      return (0, r.jsx)(F.Z, {
        className: i
      });
    default:
      return null
  }
}

function ep(e) {
  let {
    icon: t,
    tooltipText: n,
    hidden: i = !1,
    onClick: l
  } = e;
  return (0, r.jsx)(c.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, s = eu(e, ["onClick"]);
      return (0, r.jsx)(c.zxk, ec(ea({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), l(e)
        },
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: o()(es.overlayButton, {
          [es.idle]: i
        }),
        innerClassName: es.overlayButtonInner,
        children: (0, r.jsx)(t, {
          size: "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
e_.displayName = "CallTile";
let em = i.memo(e => {
  let {
    idle: t,
    title: n,
    width: l,
    videoToggleState: u,
    blocked: d,
    ignored: _,
    participantType: E,
    participantUserId: p,
    platform: h,
    secureFramesVerified: f,
    onContextMenu: g,
    isHovered: N,
    muted: O,
    deafened: I,
    localMuted: b,
    serverMuted: T,
    serverDeafened: C,
    hasVideo: S,
    hideAudioIcon: y,
    onToggleMute: P
  } = e, R = (0, s.e7)([Z.Z], () => null != p && Z.Z.isLocalVideoAutoDisabled(p, (0, m.Z)(E)), [p, E]), A = (0, $.N)(l), v = (0, $.K)(l), [x, D] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      t = () => {
        e === G.Z.isOpen() || (e = G.Z.isOpen()) || D(!1)
      };
    return G.Z.addChangeListener(t), () => G.Z.removeChangeListener(t)
  }, []);
  let L = !y && E === en.fO.STREAM && S && (!v || b),
    k = !N && !b,
    j = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: l
      } = e;
      return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : l ? c.nRN : null
    }({
      localMuted: b,
      serverMuted: T,
      serverDeafened: C,
      deafened: I,
      muted: O
    });
  return (0, r.jsxs)("div", {
    className: es.overlayContainer,
    children: [(0, r.jsx)("div", {
      className: o()(es.overlayTop, {
        [es.small]: l < 195
      }),
      children: R || u === et.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: es.status,
        children: (0, r.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(es.overlayTitle, es.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: es.status,
          children: (0, r.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: es.overlayTitleText,
          children: eo.NW.string(eo.t.m2Hyj4)
        })]
      }) : null
    }), !A && (0, r.jsxs)("div", {
      className: o()(es.overlayBottom, {
        [es.small]: l < 195
      }),
      children: [(0, r.jsxs)(c.Text, {
        className: o()(es.experimentOverlayTitle, {
          [es.idle]: t && !1
        }),
        color: "none",
        variant: "text-md/normal",
        children: [null != j && E === en.fO.USER && (0, r.jsx)(j, {
          className: es.experimentTitleIcon,
          size: "xs",
          color: "currentColor"
        }), d ? (0, r.jsx)("div", {
          className: es.blocked,
          children: (0, r.jsx)(c.t6m, {
            size: "lg",
            className: es.blockedIcon,
            color: a.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, _ ? (0, r.jsx)("div", {
          className: es.ignored,
          children: (0, r.jsx)(c.kZF, {
            size: "lg",
            className: es.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(eE, {
          participantType: E,
          platform: h,
          className: es.experimentTitleIcon
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: es.experimentOverlayTitleText,
          children: n
        }), f && (0, r.jsx)(c.ua7, {
          text: eo.NW.string(eo.t.ZEem6O),
          children: e => (0, r.jsx)(c.tQf, ec(ea({}, e), {
            className: es.secureFramesIcon,
            size: "xs",
            color: a.Z.colors.HEADER_PRIMARY,
            "aria-label": eo.NW.string(eo.t.mR9cf3)
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: es.overlayButtonContainer,
        children: [L && (0, r.jsx)(ep, {
          onClick: P,
          tooltipText: b ? eo.NW.string(eo.t.YqAjX1) : eo.NW.string(eo.t["w4m94+"]),
          icon: b ? c.OyP : c.gj8,
          hidden: k
        }), (0, r.jsx)(ep, {
          onClick: e => {
            e.stopPropagation(), D(!0), g(e, !0, en.A5.THREE_DOT)
          },
          tooltipText: eo.NW.string(eo.t["+1H47u"]),
          icon: c.xhG,
          hidden: !(N || x)
        })]
      })]
    })]
  })
});
em.displayName = "CallTileOverlayV2";
let eh = i.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: i,
    serverMuted: l,
    serverDeafened: u,
    idle: d,
    title: _,
    width: E,
    hasVideo: p,
    inCall: h,
    localVideoDisabled: f,
    videoToggleState: N,
    focused: O,
    blocked: I,
    ignored: b,
    hideAudioIcon: T,
    participantType: C,
    participantUserId: S,
    onContextMenu: y,
    onToggleMute: P,
    platform: R,
    application: A,
    secureFramesVerified: v
  } = e, x = null, D = null, L = null, k = (0, $.K)(E), j = (0, $.N)(E), M = (0, s.e7)([Z.Z], () => null != S && Z.Z.isLocalVideoAutoDisabled(S, (0, m.Z)(C)), [S, C]), U = (0, c.bWb)().enabled;
  if (!T) {
    if (i && C === en.fO.STREAM && p && !O) x = (0, r.jsx)(c.ua7, {
      text: eo.NW.string(eo.t.YqAjX1),
      children: e => {
        var {
          onClick: t
        } = e, n = eu(e, ["onClick"]);
        return (0, r.jsx)(c.P3F, ec(ea({}, n), {
          onClick: e => {
            e.stopPropagation(), null == t || t(), P()
          },
          className: o()(es.interactive, es.toggleMute, es.status),
          children: (0, r.jsx)(c.OyP, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    });
    else if (i || C !== en.fO.STREAM || !p || k || O) {
      if (U) {
        let e;
        u ? e = c.Vm4 : l ? e = c.v0G : n ? e = c.wE8 : i ? e = c.v0G : t && (e = c.nRN), x = null != e ? (0, r.jsx)(e, {
          color: a.Z.colors.WHITE
        }) : null
      } else if (n || t || i) {
        let e = n ? c.wE8 : c.nRN;
        x = (0, r.jsx)(e, {
          color: "currentColor"
        })
      }
      x = null != x ? (0, r.jsx)("div", {
        className: es.status,
        children: x
      }) : null
    } else x = (0, r.jsx)(c.ua7, {
      text: eo.NW.string(eo.t["w4m94+"]),
      children: e => {
        var {
          onClick: t
        } = e, n = eu(e, ["onClick"]);
        return (0, r.jsx)(c.P3F, ec(ea({}, n), {
          onClick: e => {
            e.stopPropagation(), null == t || t(), P()
          },
          className: o()(es.interactive, es.toggleMute, es.status),
          children: (0, r.jsx)(c.gj8, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    })
  }
  h && Z.Z.supports(el.AN.VIDEO) || !p ? h && p && f && !M && (D = (0, r.jsx)(c.Amn, {
    size: "md",
    color: "currentColor",
    colorClass: es.localMuteStrikethrough
  })) : D = (0, r.jsx)(c.Odl, {
    size: "md",
    color: "currentColor"
  }), C === en.fO.STREAM && !O && p && (L = (0, r.jsx)(c.ua7, {
    text: eo.NW.string(eo.t["+1H47u"]),
    children: e => {
      var {
        onClick: t
      } = e, n = eu(e, ["onClick"]);
      return (0, r.jsx)(c.P3F, ec(ea({}, n), {
        onClick: e => {
          e.stopPropagation(), null == t || t(), y(e)
        },
        className: o()(es.status, es.interactive),
        children: (0, r.jsx)(c.xhG, {
          size: "md",
          color: "currentColor"
        })
      }))
    }
  }));
  let w = C === en.fO.USER && null != A ? (0, r.jsx)(c.ua7, {
    text: eo.NW.formatToPlainString(eo.t.Sq9xJy, {
      game: A.name
    }),
    children: e => (0, r.jsx)("div", ec(ea({}, e), {
      className: o()(es.gameIconContainer, {
        [es.gameIconSmall]: E < 500
      }),
      children: (0, r.jsx)(g.Z, {
        className: es.gameIcon,
        game: A,
        size: g.Z.Sizes.SMALL
      })
    }))
  }) : null;
  return (0, r.jsxs)("div", {
    className: es.overlayContainer,
    children: [(0, r.jsx)("div", {
      className: o()(es.overlayTop, {
        [es.small]: E < 195
      }),
      children: M || N === et.ZUi.AUTO_PROBING ? d ? (0, r.jsx)("div", {
        className: es.status,
        children: (0, r.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(es.overlayTitle, es.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: es.status,
          children: (0, r.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: es.overlayTitleText,
          children: eo.NW.string(eo.t.m2Hyj4)
        })]
      }) : null
    }), (0, r.jsxs)("div", {
      className: o()(es.overlayBottom, {
        [es.small]: E < 195
      }),
      children: [j ? (0, r.jsx)("div", {}) : (0, r.jsxs)(c.Text, {
        className: o()(es.overlayTitle, {
          [es.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [I ? (0, r.jsx)("div", {
          className: es.blocked,
          children: (0, r.jsx)(c.t6m, {
            size: "lg",
            className: es.blockedIcon,
            color: a.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, b ? (0, r.jsx)("div", {
          className: es.ignored,
          children: (0, r.jsx)(c.kZF, {
            size: "lg",
            className: es.blockedIcon
          })
        }) : null, (0, r.jsx)(eE, {
          participantType: C,
          platform: R,
          className: es.titleIcon
        }), null != _ && "" !== _ ? (0, r.jsx)("span", {
          className: es.overlayTitleText,
          children: _
        }) : null, v && (0, r.jsx)(c.ua7, {
          text: eo.NW.string(eo.t.ZEem6O),
          children: e => (0, r.jsx)(c.tQf, ec(ea({}, e), {
            className: es.secureFramesIcon,
            size: "xs",
            color: a.Z.colors.HEADER_PRIMARY,
            "aria-label": eo.NW.string(eo.t.mR9cf3)
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: es.statusContainer,
        children: [null != D && (0, r.jsx)("div", {
          className: es.status,
          children: D
        }), x, L, w]
      })]
    })]
  })
});
eh.displayName = "CallTileOverlay";
let ef = b.L,
  eg = e_