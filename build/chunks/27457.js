/** Chunk was on 51424 **/
n.d(t, {
  BP: () => eh,
  ZP: () => eg
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(692547),
  c = n(481060),
  u = n(846027),
  d = n(410575),
  _ = n(607070),
  E = n(812206),
  p = n(835473),
  m = n(414910),
  f = n(415635),
  h = n(578976),
  g = n(925329),
  O = n(649739),
  N = n(37091),
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
  j = n(314897),
  k = n(857192),
  M = n(77498),
  Z = n(131951),
  U = n(158776),
  w = n(594174),
  V = n(979651),
  F = n(574254),
  G = n(374129),
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
    var t, n, l, s, g;
    let {
      participant: F,
      onDoubleClick: G,
      onContextMenu: W,
      onClick: $,
      onMouseDown: eu,
      onKeyDown: e_,
      className: eE,
      style: ep,
      containerStyle: eh,
      channel: eg,
      width: eO,
      inPopout: eN,
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
    } = e, ej = i.useContext(x.h9) || eD, [ek, eM] = i.useState(!1), eZ = v.Sb.useSetting(), eU = (0, a.e7)([k.default], () => k.default.isStreamInfoOverlayEnabled), [ew, eV] = i.useState(!1), eF = (0, a.e7)([j.default], () => j.default.getId()), eG = (0, a.e7)([w.default], () => w.default.getCurrentUser()), eW = F.type === en.fO.ACTIVITY ? null : null === (t = F.user) || void 0 === t ? void 0 : t.id, [eB] = (0, p.Z)(F.type === en.fO.ACTIVITY ? [F.applicationId] : []), eH = (0, a.e7)([N.Z], () => N.Z.getEnabled()), ez = (0, a.e7)([Z.Z], () => null != eW && Z.Z.isLocalVideoDisabled(eW, (0, m.Z)(F.type)), [eW, F.type]), eY = (0, a.e7)([Z.Z], () => null != eW ? Z.Z.getVideoToggleState(eW, (0, m.Z)(F.type)) : et.ZUi.NONE, [eW, F.type]), eK = eY === et.ZUi.AUTO_PROBING, {
      speaking: eX,
      ringing: eq,
      hasVideo: eQ
    } = (0, ee.Z)(F, eF), eJ = function(e, t, n) {
      var r, i, l, o;
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
        u = (0, a.cj)([Z.Z], () => {
          let n = (0, m.Z)(t.type);
          return e === s ? {
            muted: !1,
            deafened: !1
          } : {
            muted: Z.Z.isLocalMute(s, n),
            localVideoDisabled: Z.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: Z.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null !== (l = t.type === en.fO.USER && (null === (r = t.voiceState) || void 0 === r ? void 0 : r.isVoiceMuted())) && void 0 !== l && l,
        deafened: null !== (o = t.type === en.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== o && o
      }
    }(eF, F, eg.getGuildId()), e$ = F.type === en.fO.STREAM && eW === eF, e0 = B.ZP.isPremium(eG);
    i.useEffect(() => {
      if (e$ && !e0 && null != eg.hdStreamingUntil && new Date(eg.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = Z.Z.getGoLiveSource(),
            t = (0, h.s_)(er.LY.RESOLUTION_720, er.ws.FPS_30, e);
          u.Z.setGoLiveSource(t)
        }, new Date(eg.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [e$, e0, eg.hdStreamingUntil]);
    let e4 = (0, R.o)(F, eG),
      e1 = (0, P.lL)("CallTile", !0, eG, e4),
      e3 = (0, a.e7)([D.Z], () => F.type === en.fO.USER && null != eW ? D.Z.getEffectForUserId(eW) : null),
      e6 = (0, a.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(eg.id, null != eW ? eW : et.lds)),
      {
        simplifiedSettingsEnabled: e2
      } = (0, H.Z)({
        location: "CallTile"
      }),
      {
        showGameIcon: e9
      } = O.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e8 = (0, a.e7)([U.Z], () => e9 && null != eW ? U.Z.findActivity(eW, e => null != e.application_id && e.type === et.IIU.PLAYING) : null, [e9, eW]),
      e7 = (0, a.e7)([M.Z], () => (null == e8 ? void 0 : e8.application_id) != null ? M.Z.getDetectableGame(e8.application_id) : null),
      e5 = (0, a.e7)([E.Z], () => null != e7 && (null == e8 ? void 0 : e8.application_id) != null ? E.Z.getApplication(null == e8 ? void 0 : e8.application_id) : void 0),
      te = (0, A.wV)({
        userId: eW,
        channelId: eg.id,
        location: "CallTile"
      }),
      tt = (0, A.zU)({
        streamKey: F.type === en.fO.STREAM ? F.id : null,
        channelId: eg.id,
        location: "CallTile"
      }),
      tn = i.useMemo(() => F.type === en.fO.STREAM ? null != tt && tt : F.type === en.fO.USER && null != te && te, [tt, te, F.type]);
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
      ta = i.useCallback(e => {
        null == $ || $(F, e)
      }, [$, F]),
      ts = i.useCallback(e => {
        null == G || G(F, e)
      }, [G, F]),
      tc = i.useCallback((e, t, n) => {
        null == W || W(F, e, t, n)
      }, [W, F]),
      tu = null,
      td = null,
      t_ = "";
    switch (F.type) {
      case en.fO.STREAM:
        tu = (0, r.jsx)(Q.Z, {
          participant: F,
          selected: eT,
          width: eO,
          fit: eA,
          onVideoResize: eI,
          paused: ev,
          inPopout: eN,
          focused: ey,
          inOverlayPopout: eL
        }), td = (0, r.jsx)(Q._, {
          participant: F,
          selected: eT,
          width: eO,
          focused: ey,
          idle: ej,
          premiumIndicator: e1.enabled
        }), t_ = eo.NW.formatToPlainString(eo.t.gHPz3d, {
          streamerName: F.user.username
        });
        break;
      case en.fO.USER:
        tu = (0, r.jsx)(J.Z, {
          channel: eg,
          inCall: eb,
          participant: F,
          fit: eA,
          onVideoResize: eI,
          paused: ev,
          selected: eT,
          width: eO,
          blocked: eP,
          ignored: eR,
          noVideoRender: eS || eK,
          pulseSpeakingIndicator: ex,
          inOverlayPopout: eL
        }), td = (0, r.jsx)(J.T, {
          userId: F.user.id,
          channelId: eg.id
        }), t_ = eo.NW.formatToPlainString(eo.t["iC/x/f"], {
          username: F.user.username
        });
        break;
      case en.fO.ACTIVITY:
        tu = (0, r.jsx)(K.ZP, {
          interactible: ey,
          participant: F,
          selected: eT,
          channel: eg,
          width: eO
        }), t_ = eo.NW.formatToPlainString(eo.t.YCvOsL, {
          activityName: null == eB ? void 0 : eB.name
        });
        break;
      case en.fO.PRESENCE_EMBEDDED_ACTIVITY:
        tu = (0, r.jsx)(q.Z, {
          participant: F,
          width: eO,
          channelId: eg.id
        });
        break;
      case en.fO.HIDDEN_STREAM:
        tu = (0, r.jsx)(Q.Z, {
          participant: F,
          selected: eT,
          width: eO,
          fit: eA,
          onVideoResize: eI,
          paused: ev,
          inPopout: eN,
          focused: ey,
          inOverlayPopout: eL
        })
    }
    let tE = i.useRef(null),
      tp = F.type === en.fO.STREAM ? c.pzj : c.Odl,
      tm = e2 ? em : ef;
    return (0, r.jsx)(d.Z, {
      section: et.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsxs)("div", {
        className: o()(ea.wrapper, {
          [ea.ringing]: eq
        }, eE),
        style: eh,
        onMouseEnter: () => {
          eV(!0)
        },
        onMouseLeave: () => {
          eV(!1)
        },
        children: [tr && F.type === en.fO.STREAM && (0, r.jsx)(S.Z, {
          baseTileRef: tE.current,
          cleanup: () => ti(!1)
        }), (0, r.jsxs)(C.Z, {
          shakeLocation: ei.oZ.VOICE_USER,
          isShaking: eX,
          className: ea.tile,
          children: [(0, r.jsx)(X.Z, {
            ref: tE,
            className: o()(ea.tile, {
              [ea.noBorder]: eC,
              [ea.noInteraction]: null == $,
              [ea.idle]: ej
            }),
            noBorder: eC,
            style: ep,
            participantUserId: eW,
            children: (0, r.jsxs)(c.kL8, {
              "aria-label": t_,
              className: ea.tileChild,
              onDoubleClick: ts,
              onContextMenu: e => tc(e, e2 && F.type === en.fO.STREAM),
              onClick: ta,
              onMouseDown: eu,
              onKeyDown: e_,
              focusProps: {
                offset: 1
              },
              children: [null != e3 && null != eW ? (0, r.jsx)(L.Z, {
                voiceChannelEffect: e3,
                onComplete: () => (0, D.H)(eW),
                userId: eW
              }) : null, F.type === en.fO.USER ? (0, r.jsx)("div", {
                className: ea.voiceChannelEffectsContainer,
                children: (0, r.jsx)(f.Z, {
                  userId: eW,
                  channelId: eg.id,
                  guildId: eg.getGuildId(),
                  containerDimensions: {
                    width: null !== (s = null == tE ? void 0 : null === (n = tE.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== s ? s : 0,
                    height: null !== (g = null == tE ? void 0 : null === (l = tE.current) || void 0 === l ? void 0 : l.clientHeight) && void 0 !== g ? g : 0
                  }
                })
              }) : null, tu, eC ? null : (0, r.jsx)("div", {
                className: ea.indicators,
                children: td
              }), eT ? (0, r.jsx)("div", {
                className: ea.selectedScreen,
                children: (0, r.jsx)(tp, {
                  size: "md",
                  color: "currentColor",
                  className: ea.selectedIcon
                })
              }) : null, ed.includes(F.type) ? null : (0, r.jsx)(tm, ec(es({
                focused: ey,
                width: eO,
                inCall: eb,
                participantType: F.type,
                hasVideo: null != eQ && eQ
              }, eJ), {
                idle: ej,
                platform: e6,
                title: (0, z.Z)(eg, F),
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
              })), F.type === en.fO.USER && eH ? (0, r.jsx)(I.Z, {
                userId: F.id,
                channelId: eg.id
              }) : null, eb && !eC ? (0, r.jsx)("div", {
                className: o()(ea.border, {
                  [ea.voiceChannelEffect]: !ey && null != e3,
                  [ea.speaking]: eX && !ey
                })
              }) : null]
            })
          }), eZ && eU && ew && (0, r.jsx)(Y.Z, {
            currentUserId: eF,
            participant: F
          }), (0, r.jsx)(T.Z, {
            isFiring: ek,
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
      return (0, r.jsx)(G.Z, {
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
    hideWhenInactive: i,
    onClick: l
  } = e;
  return (0, r.jsx)(c.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, a = eu(e, ["onClick"]);
      return (0, r.jsx)(c.zxk, ec(es({}, a), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), l(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: o()(ea.overlayButton, {
          [ea.hideWhenInactive]: i
        }),
        innerClassName: ea.overlayButtonInner,
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
    platform: f,
    secureFramesVerified: h,
    onContextMenu: g,
    muted: O,
    deafened: N,
    localMuted: I,
    serverMuted: b,
    serverDeafened: T,
    hasVideo: C,
    hideAudioIcon: S,
    onToggleMute: y
  } = e, P = (0, a.e7)([Z.Z], () => null != p && Z.Z.isLocalVideoAutoDisabled(p, (0, m.Z)(E)), [p, E]), R = (0, $.N)(l), A = (0, $.K)(l), [v, x] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      t = () => {
        e === F.Z.isOpen() || (e = F.Z.isOpen()) || x(!1)
      };
    return F.Z.addChangeListener(t), () => F.Z.removeChangeListener(t)
  }, []);
  let D = !S && E === en.fO.STREAM && C && (!A || I),
    L = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: l
      } = e;
      return r ? c.Vm4 : n ? c.v0G : i ? c.wE8 : t ? c.v0G : l ? c.nRN : null
    }({
      localMuted: I,
      serverMuted: b,
      serverDeafened: T,
      deafened: N,
      muted: O
    });
  return (0, r.jsxs)("div", {
    className: ea.overlayContainer,
    children: [(0, r.jsx)("div", {
      className: o()(ea.overlayTop, {
        [ea.small]: l < 195
      }),
      children: P || u === et.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: ea.status,
        children: (0, r.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(ea.overlayTitle, ea.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: ea.status,
          children: (0, r.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ea.overlayTitleText,
          children: eo.NW.string(eo.t.m2Hyj4)
        })]
      }) : null
    }), !R && (0, r.jsxs)("div", {
      className: o()(ea.overlayBottom, {
        [ea.small]: l < 195
      }),
      children: [(0, r.jsxs)(c.Text, {
        className: o()(ea.experimentOverlayTitle, {
          [ea.idle]: t && !1
        }),
        color: "none",
        variant: "text-md/normal",
        children: [null != L && E === en.fO.USER && (0, r.jsx)(L, {
          className: ea.experimentTitleIcon,
          size: "xs",
          color: "currentColor"
        }), d ? (0, r.jsx)("div", {
          className: ea.blocked,
          children: (0, r.jsx)(c.t6m, {
            size: "lg",
            className: ea.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, _ ? (0, r.jsx)("div", {
          className: ea.ignored,
          children: (0, r.jsx)(c.kZF, {
            size: "lg",
            className: ea.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(eE, {
          participantType: E,
          platform: f,
          className: ea.experimentTitleIcon
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: ea.experimentOverlayTitleText,
          children: n
        }), h && (0, r.jsx)(c.ua7, {
          text: eo.NW.string(eo.t.ZEem6O),
          children: e => (0, r.jsx)(c.tQf, ec(es({}, e), {
            className: ea.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": eo.NW.string(eo.t.mR9cf3)
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: ea.overlayButtonContainer,
        children: [D && (0, r.jsx)(ep, {
          onClick: y,
          tooltipText: I ? eo.NW.string(eo.t.YqAjX1) : eo.NW.string(eo.t["w4m94+"]),
          icon: I ? c.OyP : c.gj8,
          hideWhenInactive: !I
        }), (0, r.jsx)(ep, {
          onClick: e => {
            e.stopPropagation(), x(!0), g(e, !0, en.A5.THREE_DOT)
          },
          tooltipText: eo.NW.string(eo.t["+1H47u"]),
          icon: c.xhG,
          hideWhenInactive: !v
        })]
      })]
    })]
  })
});
em.displayName = "CallTileOverlayV2";
let ef = i.memo(e => {
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
    inCall: f,
    localVideoDisabled: h,
    videoToggleState: O,
    focused: N,
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
  } = e, x = null, D = null, L = null, j = (0, $.K)(E), k = (0, $.N)(E), M = (0, a.e7)([Z.Z], () => null != S && Z.Z.isLocalVideoAutoDisabled(S, (0, m.Z)(C)), [S, C]), U = (0, c.bWb)().enabled;
  if (!T) {
    if (i && C === en.fO.STREAM && p && !N) x = (0, r.jsx)(c.ua7, {
      text: eo.NW.string(eo.t.YqAjX1),
      children: e => {
        var {
          onClick: t
        } = e, n = eu(e, ["onClick"]);
        return (0, r.jsx)(c.P3F, ec(es({}, n), {
          onClick: e => {
            e.stopPropagation(), null == t || t(), P()
          },
          className: o()(ea.interactive, ea.toggleMute, ea.status),
          children: (0, r.jsx)(c.OyP, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    });
    else if (i || C !== en.fO.STREAM || !p || j || N) {
      if (U) {
        let e;
        u ? e = c.Vm4 : l ? e = c.v0G : n ? e = c.wE8 : i ? e = c.v0G : t && (e = c.nRN), x = null != e ? (0, r.jsx)(e, {
          color: s.Z.colors.WHITE
        }) : null
      } else if (n || t || i) {
        let e = n ? c.wE8 : c.nRN;
        x = (0, r.jsx)(e, {
          color: "currentColor"
        })
      }
      x = null != x ? (0, r.jsx)("div", {
        className: ea.status,
        children: x
      }) : null
    } else x = (0, r.jsx)(c.ua7, {
      text: eo.NW.string(eo.t["w4m94+"]),
      children: e => {
        var {
          onClick: t
        } = e, n = eu(e, ["onClick"]);
        return (0, r.jsx)(c.P3F, ec(es({}, n), {
          onClick: e => {
            e.stopPropagation(), null == t || t(), P()
          },
          className: o()(ea.interactive, ea.toggleMute, ea.status),
          children: (0, r.jsx)(c.gj8, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    })
  }
  f && Z.Z.supports(el.AN.VIDEO) || !p ? f && p && h && !M && (D = (0, r.jsx)(c.Amn, {
    size: "md",
    color: "currentColor",
    colorClass: ea.localMuteStrikethrough
  })) : D = (0, r.jsx)(c.Odl, {
    size: "md",
    color: "currentColor"
  }), C === en.fO.STREAM && !N && p && (L = (0, r.jsx)(c.ua7, {
    text: eo.NW.string(eo.t["+1H47u"]),
    children: e => {
      var {
        onClick: t
      } = e, n = eu(e, ["onClick"]);
      return (0, r.jsx)(c.P3F, ec(es({}, n), {
        onClick: e => {
          e.stopPropagation(), null == t || t(), y(e)
        },
        className: o()(ea.status, ea.interactive),
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
    children: e => (0, r.jsx)("div", ec(es({}, e), {
      className: o()(ea.gameIconContainer, {
        [ea.gameIconSmall]: E < 500
      }),
      children: (0, r.jsx)(g.Z, {
        className: ea.gameIcon,
        game: A,
        size: g.Z.Sizes.SMALL
      })
    }))
  }) : null;
  return (0, r.jsxs)("div", {
    className: ea.overlayContainer,
    children: [(0, r.jsx)("div", {
      className: o()(ea.overlayTop, {
        [ea.small]: E < 195
      }),
      children: M || O === et.ZUi.AUTO_PROBING ? d ? (0, r.jsx)("div", {
        className: ea.status,
        children: (0, r.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(ea.overlayTitle, ea.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: ea.status,
          children: (0, r.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ea.overlayTitleText,
          children: eo.NW.string(eo.t.m2Hyj4)
        })]
      }) : null
    }), (0, r.jsxs)("div", {
      className: o()(ea.overlayBottom, {
        [ea.small]: E < 195
      }),
      children: [k ? (0, r.jsx)("div", {}) : (0, r.jsxs)(c.Text, {
        className: o()(ea.overlayTitle, {
          [ea.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [I ? (0, r.jsx)("div", {
          className: ea.blocked,
          children: (0, r.jsx)(c.t6m, {
            size: "lg",
            className: ea.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, b ? (0, r.jsx)("div", {
          className: ea.ignored,
          children: (0, r.jsx)(c.kZF, {
            size: "lg",
            className: ea.blockedIcon
          })
        }) : null, (0, r.jsx)(eE, {
          participantType: C,
          platform: R,
          className: ea.titleIcon
        }), null != _ && "" !== _ ? (0, r.jsx)("span", {
          className: ea.overlayTitleText,
          children: _
        }) : null, v && (0, r.jsx)(c.ua7, {
          text: eo.NW.string(eo.t.ZEem6O),
          children: e => (0, r.jsx)(c.tQf, ec(es({}, e), {
            className: ea.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": eo.NW.string(eo.t.mR9cf3)
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: ea.statusContainer,
        children: [null != D && (0, r.jsx)("div", {
          className: ea.status,
          children: D
        }), x, L, w]
      })]
    })]
  })
});
ef.displayName = "CallTileOverlay";
let eh = b.L,
  eg = e_