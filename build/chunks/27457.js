/** Chunk was on 48909 **/
n.d(t, {
  BP: () => eb,
  ZP: () => eg
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(442837),
  s = n(692547),
  c = n(481060),
  u = n(846027),
  d = n(410575),
  p = n(607070),
  f = n(812206),
  h = n(835473),
  _ = n(414910),
  m = n(415635),
  b = n(578976),
  g = n(925329),
  E = n(649739),
  v = n(37091),
  O = n(6572),
  y = n(352978),
  C = n(936847),
  x = n(512384),
  N = n(33316),
  S = n(576645),
  I = n(6242),
  P = n(757692),
  j = n(210975),
  T = n(695346),
  L = n(937995),
  w = n(456631),
  A = n(274459),
  R = n(314897),
  k = n(857192),
  M = n(77498),
  D = n(131951),
  Z = n(158776),
  U = n(594174),
  V = n(979651),
  H = n(574254),
  B = n(374129),
  W = n(639351),
  G = n(74538),
  F = n(221241),
  z = n(584729),
  K = n(334374),
  Y = n(849171),
  X = n(607187),
  Q = n(624834),
  q = n(833519),
  J = n(462061),
  $ = n(623825),
  ee = n(839662),
  et = n(981631),
  en = n(354459),
  er = n(37113),
  ei = n(524484),
  eo = n(65154),
  el = n(388032),
  ea = n(454698);

function es(e) {
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
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let ed = [en.fO.ACTIVITY, en.fO.PRESENCE_EMBEDDED_ACTIVITY],
  ep = i.memo(e => {
    var t, n, o, s, g;
    let {
      participant: H,
      onDoubleClick: B,
      onContextMenu: W,
      onClick: $,
      onMouseDown: eu,
      onKeyDown: ep,
      className: ef,
      style: eh,
      containerStyle: eb,
      channel: eg,
      width: eE,
      inPopout: ev,
      onVideoResize: eO,
      inCall: ey = !1,
      selected: eC = !1,
      noBorder: ex = !1,
      noVideoRender: eN = !1,
      focused: eS = !1,
      blocked: eI = !1,
      ignored: eP = !1,
      fit: ej = y.L.CONTAIN,
      paused: eT = !1,
      pulseSpeakingIndicator: eL = !1,
      forceIdle: ew = !1,
      inOverlayPopout: eA = !1
    } = e, eR = i.useContext(L.h9) || ew, [ek, eM] = i.useState(!1), eD = T.Sb.useSetting(), eZ = (0, a.e7)([k.default], () => k.default.isStreamInfoOverlayEnabled), [eU, eV] = i.useState(!1), eH = (0, a.e7)([R.default], () => R.default.getId()), eB = (0, a.e7)([U.default], () => U.default.getCurrentUser()), eW = H.type === en.fO.ACTIVITY ? null : null === (t = H.user) || void 0 === t ? void 0 : t.id, [eG] = (0, h.Z)(H.type === en.fO.ACTIVITY ? [H.applicationId] : []), eF = (0, a.e7)([v.Z], () => v.Z.getEnabled()), ez = (0, a.e7)([D.Z], () => null != eW && D.Z.isLocalVideoDisabled(eW, (0, _.Z)(H.type)), [eW, H.type]), eK = (0, a.e7)([D.Z], () => null != eW ? D.Z.getVideoToggleState(eW, (0, _.Z)(H.type)) : et.ZUi.NONE, [eW, H.type]), eY = eK === et.ZUi.AUTO_PROBING, {
      speaking: eX,
      ringing: eQ,
      hasVideo: eq
    } = (0, ee.Z)(H, eH), eJ = function(e, t, n) {
      var r, i, o, l;
      let s = t.type !== en.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([V.Z], () => {
          var e, t, r;
          let i = V.Z.getVoiceState(n, s);
          return {
            muted: null !== (e = null == i ? void 0 : i.mute) && void 0 !== e && e,
            deafened: null !== (t = null == i ? void 0 : i.deaf) && void 0 !== t && t,
            suppressed: null !== (r = null == i ? void 0 : i.suppress) && void 0 !== r && r,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, a.cj)([D.Z], () => {
          let n = (0, _.Z)(t.type);
          return e === s ? {
            muted: !1,
            deafened: !1
          } : {
            muted: D.Z.isLocalMute(s, n),
            localVideoDisabled: D.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null !== (o = t.type === en.fO.USER && (null === (r = t.voiceState) || void 0 === r ? void 0 : r.isVoiceMuted())) && void 0 !== o && o,
        deafened: null !== (l = t.type === en.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== l && l
      }
    }(eH, H, eg.getGuildId()), e$ = H.type === en.fO.STREAM && eW === eH, e0 = G.ZP.isPremium(eB);
    i.useEffect(() => {
      if (e$ && !e0 && null != eg.hdStreamingUntil && new Date(eg.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = D.Z.getGoLiveSource(),
            t = (0, b.s_)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
          u.Z.setGoLiveSource(t)
        }, new Date(eg.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [e$, e0, eg.hdStreamingUntil]);
    let e4 = (0, P.o)(H, eB),
      e1 = (0, I.lL)("CallTile", !0, eB, e4),
      e6 = (0, a.e7)([w.Z], () => H.type === en.fO.USER && null != eW ? w.Z.getEffectForUserId(eW) : null),
      e3 = (0, a.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(eg.id, null != eW ? eW : et.lds)),
      {
        simplifiedSettingsEnabled: e9
      } = (0, F.Z)({
        location: "CallTile"
      }),
      {
        showGameIcon: e2
      } = E.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e8 = (0, a.e7)([Z.Z], () => e2 && null != eW ? Z.Z.findActivity(eW, e => null != e.application_id && e.type === et.IIU.PLAYING) : null, [e2, eW]),
      e7 = (0, a.e7)([M.Z], () => (null == e8 ? void 0 : e8.application_id) != null ? M.Z.getDetectableGame(e8.application_id) : null),
      e5 = (0, a.e7)([f.Z], () => null != e7 && (null == e8 ? void 0 : e8.application_id) != null ? f.Z.getApplication(null == e8 ? void 0 : e8.application_id) : void 0),
      te = (0, j.wV)({
        userId: eW,
        channelId: eg.id
      }),
      tt = (0, j.zU)({
        streamKey: H.type === en.fO.STREAM ? H.id : null,
        channelId: eg.id
      }),
      tn = i.useMemo(() => H.type === en.fO.STREAM ? null != tt && tt : H.type === en.fO.USER && null != te && te, [tt, te, H.type]);
    i.useEffect(() => {
      eM(eS)
    }, [eS]);
    let [tr, ti] = i.useState(!1), to = i.useCallback(() => {
      p.Z.useReducedMotion || ti(!0)
    }, []);
    (0, S.J)(eg, to);
    let tl = i.useCallback(() => {
        null != eW && u.Z.toggleLocalMute(eW, eo.Yn.STREAM)
      }, [eW]),
      ta = i.useCallback(e => {
        null == $ || $(H, e)
      }, [$, H]),
      ts = i.useCallback(e => {
        null == B || B(H, e)
      }, [B, H]),
      tc = i.useCallback((e, t, n) => {
        null == W || W(H, e, t, n)
      }, [W, H]),
      tu = null,
      td = null,
      tp = "";
    switch (H.type) {
      case en.fO.STREAM:
        tu = (0, r.jsx)(q.Z, {
          participant: H,
          selected: eC,
          width: eE,
          fit: ej,
          onVideoResize: eO,
          paused: eT,
          inPopout: ev,
          focused: eS,
          inOverlayPopout: eA
        }), td = (0, r.jsx)(q._, {
          participant: H,
          selected: eC,
          width: eE,
          focused: eS,
          idle: eR,
          premiumIndicator: e1.enabled
        }), tp = el.NW.formatToPlainString(el.t.gHPz3d, {
          streamerName: H.user.username
        });
        break;
      case en.fO.USER:
        tu = (0, r.jsx)(J.Z, {
          channel: eg,
          inCall: ey,
          participant: H,
          fit: ej,
          onVideoResize: eO,
          paused: eT,
          selected: eC,
          width: eE,
          blocked: eI,
          ignored: eP,
          noVideoRender: eN || eY,
          pulseSpeakingIndicator: eL,
          inOverlayPopout: eA
        }), td = (0, r.jsx)(J.T, {
          userId: H.user.id,
          channelId: eg.id
        }), tp = el.NW.formatToPlainString(el.t["iC/x/f"], {
          username: H.user.username
        });
        break;
      case en.fO.ACTIVITY:
        tu = (0, r.jsx)(Y.ZP, {
          interactible: eS,
          participant: H,
          selected: eC,
          channel: eg,
          width: eE
        }), tp = el.NW.formatToPlainString(el.t.YCvOsL, {
          activityName: null == eG ? void 0 : eG.name
        });
        break;
      case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
        tu = (0, r.jsx)(Q.Z, {
          participant: H,
          width: eE,
          channelId: eg.id
        });
        break;
      case en.fO.HIDDEN_STREAM:
        tu = (0, r.jsx)(q.Z, {
          participant: H,
          selected: eC,
          width: eE,
          fit: ej,
          onVideoResize: eO,
          paused: eT,
          inPopout: ev,
          focused: eS,
          inOverlayPopout: eA
        })
    }
    let tf = i.useRef(null),
      th = H.type === en.fO.STREAM ? c.pzj : c.Odl,
      t_ = e9 ? e_ : em;
    return (0, r.jsx)(d.Z, {
      section: et.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsxs)("div", {
        className: l()(ea.wrapper, {
          [ea.ringing]: eQ
        }, ef),
        style: eb,
        onMouseEnter: () => {
          eV(!0)
        },
        onMouseLeave: () => {
          eV(!1)
        },
        children: [tr && H.type === en.fO.STREAM && (0, r.jsx)(N.Z, {
          baseTileRef: tf.current,
          cleanup: () => ti(!1)
        }), (0, r.jsxs)(x.Z, {
          shakeLocation: ei.oZ.VOICE_USER,
          isShaking: eX,
          className: ea.tile,
          children: [(0, r.jsx)(X.Z, {
            ref: tf,
            className: l()(ea.tile, {
              [ea.noBorder]: ex,
              [ea.noInteraction]: null == $,
              [ea.idle]: eR
            }),
            noBorder: ex,
            style: eh,
            participantUserId: eW,
            children: (0, r.jsxs)(c.kL8, {
              "aria-label": tp,
              className: ea.tileChild,
              onDoubleClick: ts,
              onContextMenu: e => tc(e, e9 && H.type === en.fO.STREAM),
              onClick: ta,
              onMouseDown: eu,
              onKeyDown: ep,
              focusProps: {
                offset: 1
              },
              children: [null != e6 && null != eW ? (0, r.jsx)(A.Z, {
                voiceChannelEffect: e6,
                onComplete: () => (0, w.H)(eW),
                userId: eW
              }) : null, H.type === en.fO.USER ? (0, r.jsx)("div", {
                className: ea.voiceChannelEffectsContainer,
                children: (0, r.jsx)(m.Z, {
                  userId: eW,
                  channelId: eg.id,
                  guildId: eg.getGuildId(),
                  containerDimensions: {
                    width: null !== (s = null == tf ? void 0 : null === (n = tf.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== s ? s : 0,
                    height: null !== (g = null == tf ? void 0 : null === (o = tf.current) || void 0 === o ? void 0 : o.clientHeight) && void 0 !== g ? g : 0
                  }
                })
              }) : null, tu, ex ? null : (0, r.jsx)("div", {
                className: ea.indicators,
                children: td
              }), eC ? (0, r.jsx)("div", {
                className: ea.selectedScreen,
                children: (0, r.jsx)(th, {
                  size: "md",
                  color: "currentColor",
                  className: ea.selectedIcon
                })
              }) : null, ed.includes(H.type) ? null : (0, r.jsx)(t_, ec(es({
                focused: eS,
                width: eE,
                inCall: ey,
                participantType: H.type,
                hasVideo: null != eq && eq
              }, eJ), {
                idle: eR,
                platform: e3,
                title: (0, z.Z)(eg, H),
                blocked: eI,
                ignored: eP,
                localVideoDisabled: ez,
                videoToggleState: eK,
                hideAudioIcon: e$,
                onContextMenu: tc,
                onToggleMute: tl,
                participantUserId: eW,
                application: e5,
                secureFramesVerified: tn,
                isHovered: eU
              })), H.type === en.fO.USER && eF ? (0, r.jsx)(O.Z, {
                userId: H.id,
                channelId: eg.id
              }) : null, ey && !ex ? (0, r.jsx)("div", {
                className: l()(ea.border, {
                  [ea.voiceChannelEffect]: !eS && null != e6,
                  [ea.speaking]: eX && !eS
                })
              }) : null]
            })
          }), eD && eZ && eU && (0, r.jsx)(K.Z, {
            currentUserId: eH,
            participant: H
          }), (0, r.jsx)(C.Z, {
            isFiring: ek,
            callTileRef: tf.current
          })]
        })]
      })
    })
  });

function ef(e) {
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
      return (0, r.jsx)(B.Z, {
        className: i
      });
    default:
      return null
  }
}

function eh(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: o,
    compact: a
  } = e;
  return (0, r.jsx)(c.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, s = eu(e, ["onClick"]);
      return (0, r.jsx)(c.zxk, ec(es({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), o(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: l()(ea.overlayButton, {
          [ea.hideWhenInactive]: i,
          [ea.compact]: a
        }),
        innerClassName: ea.overlayButtonInner,
        children: (0, r.jsx)(t, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
ep.displayName = "CallTile";
let e_ = i.memo(e => {
  let {
    idle: t,
    title: n,
    width: o,
    videoToggleState: u,
    blocked: d,
    ignored: p,
    participantType: f,
    participantUserId: h,
    platform: m,
    secureFramesVerified: b,
    onContextMenu: g,
    muted: E,
    deafened: v,
    localMuted: O,
    serverMuted: y,
    serverDeafened: C,
    hasVideo: x,
    hideAudioIcon: N,
    onToggleMute: S
  } = e, I = (0, a.e7)([D.Z], () => null != h && D.Z.isLocalVideoAutoDisabled(h, (0, _.Z)(f)), [h, f]), P = (0, $.N)(o), j = (0, $.K)(o), [T, L] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      t = () => {
        e === H.Z.isOpen() || (e = H.Z.isOpen()) || L(!1)
      };
    return H.Z.addChangeListener(t), () => H.Z.removeChangeListener(t)
  }, []);
  let w = !N && f === en.fO.STREAM && x && (!j || O),
    A = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: o
      } = e;
      return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : o ? c.nRN : null
    }({
      localMuted: O,
      serverMuted: y,
      serverDeafened: C,
      deafened: v,
      muted: E
    });
  return (0, r.jsxs)("div", {
    className: l()(ea.overlayContainer, {
      [ea.compact]: j
    }),
    children: [(0, r.jsx)("div", {
      className: l()(ea.overlayTop, {
        [ea.small]: o < 195
      }),
      children: I || u === et.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: ea.status,
        children: (0, r.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: l()(ea.overlayTitle, ea.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: ea.status,
          children: (0, r.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ea.overlayTitleText,
          children: el.NW.string(el.t.m2Hyj4)
        })]
      }) : null
    }), !P && (0, r.jsxs)("div", {
      className: l()(ea.overlayBottom, {
        [ea.small]: o < 195
      }),
      children: [(0, r.jsxs)(c.Text, {
        className: l()(ea.experimentOverlayTitle, {
          [ea.compact]: j
        }),
        color: "none",
        variant: j ? "text-sm/normal" : "text-md/normal",
        children: [null != A && f === en.fO.USER && (0, r.jsx)(A, {
          className: l()(ea.experimentTitleIcon, {
            [ea.compact]: j
          }),
          size: "xs",
          color: "currentColor"
        }), d ? (0, r.jsx)("div", {
          className: ea.blocked,
          children: (0, r.jsx)(c.t6m, {
            size: "lg",
            className: ea.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, p ? (0, r.jsx)("div", {
          className: ea.ignored,
          children: (0, r.jsx)(c.kZF, {
            size: "lg",
            className: ea.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(ef, {
          participantType: f,
          platform: m,
          className: l()(ea.experimentTitleIcon, {
            [ea.compact]: j
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: ea.overlayTitleText,
          children: n
        }), b && (0, r.jsx)(c.ua7, {
          text: el.NW.string(el.t.ZEem6O),
          children: e => (0, r.jsx)(c.tQf, ec(es({}, e), {
            className: ea.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": el.NW.string(el.t.mR9cf3)
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: ea.overlayButtonContainer,
        children: [(0, r.jsx)(eh, {
          onClick: e => {
            e.stopPropagation(), L(!0), g(e, !0, en.A5.THREE_DOT)
          },
          tooltipText: el.NW.string(el.t["+1H47u"]),
          icon: c.xhG,
          hideWhenInactive: !T,
          compact: j
        }), w && (0, r.jsx)(eh, {
          onClick: S,
          tooltipText: O ? el.NW.string(el.t.YqAjX1) : el.NW.string(el.t["w4m94+"]),
          icon: O ? c.OyP : c.gj8,
          hideWhenInactive: !O && !T,
          compact: j
        })]
      })]
    })]
  })
});
e_.displayName = "CallTileOverlayV2";
let em = i.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: i,
    serverMuted: o,
    serverDeafened: u,
    idle: d,
    title: p,
    width: f,
    hasVideo: h,
    inCall: m,
    localVideoDisabled: b,
    videoToggleState: E,
    focused: v,
    blocked: O,
    ignored: y,
    hideAudioIcon: C,
    participantType: x,
    participantUserId: N,
    onContextMenu: S,
    onToggleMute: I,
    platform: P,
    application: j,
    secureFramesVerified: T
  } = e, L = null, w = null, A = null, R = (0, $.K)(f), k = (0, $.N)(f), M = (0, a.e7)([D.Z], () => null != N && D.Z.isLocalVideoAutoDisabled(N, (0, _.Z)(x)), [N, x]);
  if (!C) {
    if (i && x === en.fO.STREAM && h && !v) L = (0, r.jsx)(c.ua7, {
      text: el.NW.string(el.t.YqAjX1),
      children: e => {
        var {
          onClick: t
        } = e, n = eu(e, ["onClick"]);
        return (0, r.jsx)(c.P3F, ec(es({}, n), {
          onClick: e => {
            e.stopPropagation(), null == t || t(), I()
          },
          className: l()(ea.interactive, ea.toggleMute, ea.status),
          children: (0, r.jsx)(c.OyP, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    });
    else if (i || x !== en.fO.STREAM || !h || R || v) {
      let e;
      u ? e = c.Vm4 : o ? e = c.v0G : n ? e = c.wE8 : i ? e = c.v0G : t && (e = c.nRN), L = null != (L = null != e ? (0, r.jsx)(e, {
        color: s.Z.colors.WHITE
      }) : null) ? (0, r.jsx)("div", {
        className: ea.status,
        children: L
      }) : null
    } else L = (0, r.jsx)(c.ua7, {
      text: el.NW.string(el.t["w4m94+"]),
      children: e => {
        var {
          onClick: t
        } = e, n = eu(e, ["onClick"]);
        return (0, r.jsx)(c.P3F, ec(es({}, n), {
          onClick: e => {
            e.stopPropagation(), null == t || t(), I()
          },
          className: l()(ea.interactive, ea.toggleMute, ea.status),
          children: (0, r.jsx)(c.gj8, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    })
  }
  m && D.Z.supports(eo.AN.VIDEO) || !h ? m && h && b && !M && (w = (0, r.jsx)(c.Amn, {
    size: "md",
    color: "currentColor"
  })) : w = (0, r.jsx)(c.Odl, {
    size: "md",
    color: "currentColor"
  }), x === en.fO.STREAM && !v && h && (A = (0, r.jsx)(c.ua7, {
    text: el.NW.string(el.t["+1H47u"]),
    children: e => {
      var {
        onClick: t
      } = e, n = eu(e, ["onClick"]);
      return (0, r.jsx)(c.P3F, ec(es({}, n), {
        onClick: e => {
          e.stopPropagation(), null == t || t(), S(e)
        },
        className: l()(ea.status, ea.interactive),
        children: (0, r.jsx)(c.xhG, {
          size: "md",
          color: "currentColor"
        })
      }))
    }
  }));
  let Z = x === en.fO.USER && null != j ? (0, r.jsx)(c.ua7, {
    text: el.NW.formatToPlainString(el.t.Sq9xJy, {
      game: j.name
    }),
    children: e => (0, r.jsx)("div", ec(es({}, e), {
      className: l()(ea.gameIconContainer, {
        [ea.gameIconSmall]: f < 500
      }),
      children: (0, r.jsx)(g.Z, {
        className: ea.gameIcon,
        game: j,
        size: g.Z.Sizes.SMALL
      })
    }))
  }) : null;
  return (0, r.jsxs)("div", {
    className: ea.overlayContainer,
    children: [(0, r.jsx)("div", {
      className: l()(ea.overlayTop, {
        [ea.small]: f < 195
      }),
      children: M || E === et.ZUi.AUTO_PROBING ? d ? (0, r.jsx)("div", {
        className: ea.status,
        children: (0, r.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: l()(ea.overlayTitle, ea.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: ea.status,
          children: (0, r.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ea.overlayTitleText,
          children: el.NW.string(el.t.m2Hyj4)
        })]
      }) : null
    }), (0, r.jsxs)("div", {
      className: l()(ea.overlayBottom, {
        [ea.small]: f < 195
      }),
      children: [k ? (0, r.jsx)("div", {}) : (0, r.jsxs)(c.Text, {
        className: l()(ea.overlayTitle, {
          [ea.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [O ? (0, r.jsx)("div", {
          className: ea.blocked,
          children: (0, r.jsx)(c.t6m, {
            size: "lg",
            className: ea.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, y ? (0, r.jsx)("div", {
          className: ea.ignored,
          children: (0, r.jsx)(c.kZF, {
            size: "lg",
            className: ea.blockedIcon
          })
        }) : null, (0, r.jsx)(ef, {
          participantType: x,
          platform: P,
          className: ea.titleIcon
        }), null != p && "" !== p ? (0, r.jsx)("span", {
          className: ea.overlayTitleText,
          children: p
        }) : null, T && (0, r.jsx)(c.ua7, {
          text: el.NW.string(el.t.ZEem6O),
          children: e => (0, r.jsx)(c.tQf, ec(es({}, e), {
            className: ea.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": el.NW.string(el.t.mR9cf3)
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: ea.statusContainer,
        children: [null != w && (0, r.jsx)("div", {
          className: ea.status,
          children: w
        }), L, A, Z]
      })]
    })]
  })
});
em.displayName = "CallTileOverlay";
let eb = y.L,
  eg = ep