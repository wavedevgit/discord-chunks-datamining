/** Chunk was on 55196 **/
t.d(l, {
  BP: () => ev,
  ZP: () => ex
}), t(388685);
var n = t(255367),
  i = t(73800),
  s = t(120356),
  r = t.n(s),
  a = t(442837),
  o = t(692547),
  c = t(481060),
  u = t(846027),
  d = t(410575),
  m = t(607070),
  p = t(812206),
  f = t(835473),
  v = t(414910),
  x = t(415635),
  g = t(578976),
  h = t(925329),
  j = t(649739),
  O = t(37091),
  E = t(6572),
  T = t(352978),
  y = t(936847),
  I = t(512384),
  Z = t(33316),
  S = t(576645),
  C = t(210975),
  N = t(695346),
  b = t(937995),
  _ = t(456631),
  R = t(274459),
  A = t(314897),
  P = t(857192),
  k = t(77498),
  D = t(131951),
  w = t(158776),
  M = t(594174),
  V = t(979651),
  z = t(574254),
  U = t(374129),
  L = t(639351),
  G = t(74538),
  Y = t(221241),
  B = t(584729),
  H = t(334374),
  F = t(849171),
  X = t(607187),
  K = t(624834),
  W = t(833519),
  q = t(462061),
  J = t(623825),
  Q = t(839662),
  $ = t(981631),
  ee = t(354459),
  el = t(37113),
  et = t(524484),
  en = t(65154),
  ei = t(388032),
  es = t(519417);

function er(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(l) {
      var n;
      n = t[l], l in e ? Object.defineProperty(e, l, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[l] = n
    })
  }
  return e
}

function ea(e, l) {
  return l = null != l ? l : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : (function(e, l) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(l)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
  }), e
}

function eo(e, l) {
  if (null == e) return {};
  var t, n, i = function(e, l) {
    if (null == e) return {};
    var t, n, i = {},
      s = Object.keys(e);
    for (n = 0; n < s.length; n++) t = s[n], l.indexOf(t) >= 0 || (i[t] = e[t]);
    return i
  }(e, l);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++) t = s[n], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
  }
  return i
}
let ec = [ee.fO.ACTIVITY, ee.fO.PRESENCE_EMBEDDED_ACTIVITY],
  eu = i.memo(e => {
    var l, t, s, o, h;
    let {
      participant: z,
      onDoubleClick: U,
      onContextMenu: L,
      onClick: J,
      onMouseDown: eo,
      onKeyDown: eu,
      className: ed,
      style: em,
      containerStyle: ev,
      channel: ex,
      width: eg,
      inPopout: eh,
      onVideoResize: ej,
      inCall: eO = !1,
      selected: eE = !1,
      noBorder: eT = !1,
      noVideoRender: ey = !1,
      focused: eI = !1,
      blocked: eZ = !1,
      ignored: eS = !1,
      fit: eC = T.L.CONTAIN,
      paused: eN = !1,
      pulseSpeakingIndicator: eb = !1,
      forceIdle: e_ = !1,
      inOverlayPopout: eR = !1
    } = e, eA = i.useContext(b.h9) || e_, [eP, ek] = i.useState(!1), eD = N.Sb.useSetting(), ew = (0, a.e7)([P.default], () => P.default.isStreamInfoOverlayEnabled), [eM, eV] = i.useState(!1), ez = (0, a.e7)([A.default], () => A.default.getId()), eU = (0, a.e7)([M.default], () => M.default.getCurrentUser()), eL = z.type === ee.fO.ACTIVITY ? null : null == (l = z.user) ? void 0 : l.id, [eG] = (0, f.Z)(z.type === ee.fO.ACTIVITY ? [z.applicationId] : []), eY = (0, a.e7)([O.Z], () => O.Z.getEnabled()), eB = (0, a.e7)([D.Z], () => null != eL && D.Z.isLocalVideoDisabled(eL, (0, v.Z)(z.type)), [eL, z.type]), eH = (0, a.e7)([D.Z], () => null != eL ? D.Z.getVideoToggleState(eL, (0, v.Z)(z.type)) : $.ZUi.NONE, [eL, z.type]), eF = eH === $.ZUi.AUTO_PROBING, {
      speaking: eX,
      ringing: eK,
      hasVideo: eW
    } = (0, Q.Z)(z, ez), eq = function(e, l, t) {
      var n, i, s, r;
      let o = l.type !== ee.fO.ACTIVITY ? l.user.id : l.applicationId,
        c = (0, a.cj)([V.Z], () => {
          var e, l, n;
          let i = V.Z.getVoiceState(t, o);
          return {
            muted: null != (e = null == i ? void 0 : i.mute) && e,
            deafened: null != (l = null == i ? void 0 : i.deaf) && l,
            suppressed: null != (n = null == i ? void 0 : i.suppress) && n,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, a.cj)([D.Z], () => {
          let t = (0, v.Z)(l.type);
          return e === o ? {
            muted: !1,
            deafened: !1
          } : {
            muted: D.Z.isLocalMute(o, t),
            localVideoDisabled: D.Z.isLocalVideoDisabled(o, t),
            localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(o, t)
          }
        }, [e, l.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (s = l.type === ee.fO.USER && (null == (n = l.voiceState) ? void 0 : n.isVoiceMuted())) && s,
        deafened: null != (r = l.type === ee.fO.USER && (null == (i = l.voiceState) ? void 0 : i.isVoiceDeafened())) && r
      }
    }(ez, z, ex.getGuildId()), eJ = z.type === ee.fO.STREAM && eL === ez, eQ = G.ZP.isPremium(eU);
    i.useEffect(() => {
      if (eJ && !eQ && null != ex.hdStreamingUntil && new Date(ex.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = D.Z.getGoLiveSource(),
            l = (0, g.s_)(el.LY.RESOLUTION_720, el.ws.FPS_30, e);
          u.Z.setGoLiveSource(l)
        }, new Date(ex.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [eJ, eQ, ex.hdStreamingUntil]);
    let e$ = (0, a.e7)([_.Z], () => z.type === ee.fO.USER && null != eL ? _.Z.getEffectForUserId(eL) : null),
      e0 = (0, a.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(ex.id, null != eL ? eL : $.lds)),
      {
        simplifiedSettingsEnabled: e1
      } = (0, Y.Z)({
        location: "CallTile"
      }),
      {
        showGameIcon: e7
      } = j.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e5 = (0, a.e7)([w.Z], () => e7 && null != eL ? w.Z.findActivity(eL, e => null != e.application_id && e.type === $.IIU.PLAYING) : null, [e7, eL]),
      e4 = (0, a.e7)([k.Z], () => (null == e5 ? void 0 : e5.application_id) != null ? k.Z.getDetectableGame(e5.application_id) : null),
      e3 = (0, a.e7)([p.Z], () => null != e4 && (null == e5 ? void 0 : e5.application_id) != null ? p.Z.getApplication(null == e5 ? void 0 : e5.application_id) : void 0),
      e9 = (0, C.wV)({
        userId: eL,
        channelId: ex.id
      }),
      e8 = (0, C.zU)({
        streamKey: z.type === ee.fO.STREAM ? z.id : null,
        channelId: ex.id
      }),
      e6 = i.useMemo(() => z.type === ee.fO.STREAM ? null != e8 && e8 : z.type === ee.fO.USER && null != e9 && e9, [e8, e9, z.type]);
    i.useEffect(() => {
      ek(eI)
    }, [eI]);
    let [e2, le] = i.useState(!1), ll = i.useCallback(() => {
      m.Z.useReducedMotion || le(!0)
    }, []);
    (0, S.J)(ex, ll);
    let lt = i.useCallback(() => {
        null != eL && u.Z.toggleLocalMute(eL, en.Yn.STREAM)
      }, [eL]),
      ln = i.useCallback(e => {
        null == J || J(z, e)
      }, [J, z]),
      li = i.useCallback(e => {
        null == U || U(z, e)
      }, [U, z]),
      ls = i.useCallback((e, l, t) => {
        null == L || L(z, e, l, t)
      }, [L, z]),
      lr = null,
      la = null,
      lo = "";
    switch (z.type) {
      case ee.fO.STREAM:
        lr = (0, n.jsx)(W.Z, {
          participant: z,
          selected: eE,
          width: eg,
          fit: eC,
          onVideoResize: ej,
          paused: eN,
          inPopout: eh,
          focused: eI,
          inOverlayPopout: eR
        }), la = (0, n.jsx)(W._, {
          participant: z,
          selected: eE,
          width: eg,
          focused: eI,
          idle: eA,
          premiumIndicator: !1
        }), lo = ei.intl.formatToPlainString(ei.t.gHPz3d, {
          streamerName: z.user.username
        });
        break;
      case ee.fO.USER:
        lr = (0, n.jsx)(q.Z, {
          channel: ex,
          inCall: eO,
          participant: z,
          fit: eC,
          onVideoResize: ej,
          paused: eN,
          selected: eE,
          width: eg,
          blocked: eZ,
          ignored: eS,
          noVideoRender: ey || eF,
          pulseSpeakingIndicator: eb,
          inOverlayPopout: eR
        }), la = (0, n.jsx)(q.T, {
          participant: z,
          channelId: ex.id
        }), lo = ei.intl.formatToPlainString(ei.t["iC/x/f"], {
          username: z.user.username
        });
        break;
      case ee.fO.ACTIVITY:
        lr = (0, n.jsx)(F.ZP, {
          interactible: eI,
          participant: z,
          selected: eE,
          channel: ex,
          width: eg
        }), lo = ei.intl.formatToPlainString(ei.t.YCvOsL, {
          activityName: null == eG ? void 0 : eG.name
        });
        break;
      case ee.fO.PRESENCE_EMBEDDED_ACTIVITY:
        lr = (0, n.jsx)(K.Z, {
          participant: z,
          width: eg,
          channelId: ex.id
        });
        break;
      case ee.fO.HIDDEN_STREAM:
        lr = (0, n.jsx)(W.Z, {
          participant: z,
          selected: eE,
          width: eg,
          fit: eC,
          onVideoResize: ej,
          paused: eN,
          inPopout: eh,
          focused: eI,
          inOverlayPopout: eR
        })
    }
    let lc = i.useRef(null),
      lu = z.type === ee.fO.STREAM ? c.pzj : c.Odl,
      ld = e1 ? ep : ef;
    return (0, n.jsx)(d.Z, {
      section: $.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsxs)("div", {
        className: r()(es.wrapper, {
          [es.ringing]: eK
        }, ed),
        style: ev,
        onMouseEnter: () => {
          eV(!0)
        },
        onMouseLeave: () => {
          eV(!1)
        },
        children: [e2 && z.type === ee.fO.STREAM && (0, n.jsx)(Z.Z, {
          baseTileRef: lc.current,
          cleanup: () => le(!1)
        }), (0, n.jsxs)(I.Z, {
          shakeLocation: et.oZ.VOICE_USER,
          isShaking: eX,
          className: es.tile,
          children: [(0, n.jsx)(X.Z, {
            ref: lc,
            className: r()(es.tile, {
              [es.noBorder]: eT,
              [es.noInteraction]: null == J,
              [es.idle]: eA
            }),
            noBorder: eT,
            style: em,
            participantUserId: eL,
            children: (0, n.jsxs)(c.kL8, {
              "aria-label": lo,
              className: es.tileChild,
              onDoubleClick: li,
              onContextMenu: e => ls(e, e1 && z.type === ee.fO.STREAM),
              onClick: ln,
              onMouseDown: eo,
              onKeyDown: eu,
              focusProps: {
                offset: 1
              },
              children: [null != e$ && null != eL ? (0, n.jsx)(R.Z, {
                voiceChannelEffect: e$,
                onComplete: () => (0, _.H)(eL),
                userId: eL
              }) : null, z.type === ee.fO.USER ? (0, n.jsx)("div", {
                className: es.voiceChannelEffectsContainer,
                children: (0, n.jsx)(x.Z, {
                  userId: eL,
                  channelId: ex.id,
                  guildId: ex.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == lc || null == (t = lc.current) ? void 0 : t.clientWidth) ? o : 0,
                    height: null != (h = null == lc || null == (s = lc.current) ? void 0 : s.clientHeight) ? h : 0
                  }
                })
              }) : null, lr, eT ? null : (0, n.jsx)("div", {
                className: es.indicators,
                children: la
              }), eE ? (0, n.jsx)("div", {
                className: es.selectedScreen,
                children: (0, n.jsx)(lu, {
                  size: "md",
                  color: "currentColor",
                  className: es.selectedIcon
                })
              }) : null, ec.includes(z.type) ? null : (0, n.jsx)(ld, ea(er({
                focused: eI,
                width: eg,
                inCall: eO,
                participantType: z.type,
                hasVideo: null != eW && eW
              }, eq), {
                idle: eA,
                platform: e0,
                title: (0, B.Z)(ex, z),
                blocked: eZ,
                ignored: eS,
                localVideoDisabled: eB,
                videoToggleState: eH,
                hideAudioIcon: eJ,
                onContextMenu: ls,
                onToggleMute: lt,
                participantUserId: eL,
                application: e3,
                secureFramesVerified: e6,
                isHovered: eM
              })), z.type === ee.fO.USER && eY ? (0, n.jsx)(E.Z, {
                userId: z.id,
                channelId: ex.id
              }) : null, eO && !eT ? (0, n.jsx)("div", {
                className: r()(es.border, {
                  [es.voiceChannelEffect]: !eI && null != e$,
                  [es.speaking]: eX && !eI
                })
              }) : null]
            })
          }), eD && ew && eM && (0, n.jsx)(H.Z, {
            currentUserId: ez,
            participant: z
          }), (0, n.jsx)(y.Z, {
            isFiring: eP,
            callTileRef: lc.current
          })]
        })]
      })
    })
  });

function ed(e) {
  let {
    participantType: l,
    platform: t,
    className: i
  } = e;
  if (l === ee.fO.STREAM) return t === ee.wR.XBOX ? (0, n.jsx)(L.Z, {
    className: i
  }) : (0, n.jsx)(c.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (t) {
    case ee.wR.MOBILE:
      return (0, n.jsx)(c.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case ee.wR.XBOX:
      return (0, n.jsx)(L.Z, {
        className: i
      });
    case ee.wR.PLAYSTATION:
      return (0, n.jsx)(U.Z, {
        className: i
      });
    default:
      return null
  }
}

function em(e) {
  let {
    icon: l,
    tooltipText: t,
    hideWhenInactive: i,
    onClick: s,
    compact: a
  } = e;
  return (0, n.jsx)(c.ua7, {
    text: t,
    children: e => {
      var {
        onClick: t
      } = e, o = eo(e, ["onClick"]);
      return (0, n.jsx)(c.zxk, ea(er({}, o), {
        onClick: e => {
          e.stopPropagation(), null == t || t(), s(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: r()(es.overlayButton, {
          [es.hideWhenInactive]: i,
          [es.compact]: a
        }),
        innerClassName: es.overlayButtonInner,
        children: (0, n.jsx)(l, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
eu.displayName = "CallTile";
let ep = i.memo(e => {
  let {
    idle: l,
    title: t,
    width: s,
    focused: u,
    videoToggleState: d,
    blocked: m,
    ignored: p,
    participantType: f,
    participantUserId: x,
    platform: g,
    secureFramesVerified: h,
    onContextMenu: j,
    muted: O,
    deafened: E,
    localMuted: T,
    serverMuted: y,
    serverDeafened: I,
    hasVideo: Z,
    hideAudioIcon: S,
    onToggleMute: C
  } = e, N = (0, a.e7)([D.Z], () => null != x && D.Z.isLocalVideoAutoDisabled(x, (0, v.Z)(f)), [x, f]), b = (0, J.N)(s), _ = (0, J.K)(s), [R, A] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      l = () => {
        e !== z.Z.isOpen() && ((e = z.Z.isOpen()) || A(!1))
      };
    return z.Z.addChangeListener(l), () => z.Z.removeChangeListener(l)
  }, []);
  let P = !S && f === ee.fO.STREAM && Z && (!_ || T),
    k = function(e) {
      let {
        localMuted: l,
        serverMuted: t,
        serverDeafened: n,
        deafened: i,
        muted: s
      } = e;
      return n ? c.Vm4 : t ? c.v0G : i ? c.wE8 : l ? c.v0G : s ? c.nRN : null
    }({
      localMuted: T,
      serverMuted: y,
      serverDeafened: I,
      deafened: E,
      muted: O
    });
  return (0, n.jsxs)("div", {
    className: r()(es.overlayContainer, {
      [es.compact]: _
    }),
    children: [(0, n.jsx)("div", {
      className: r()(es.overlayTop, {
        [es.small]: s < 195
      }),
      children: N || d === $.ZUi.AUTO_PROBING ? l ? (0, n.jsx)("div", {
        className: es.status,
        children: (0, n.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: r()(es.overlayTitle, es.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: es.status,
          children: (0, n.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: es.overlayTitleText,
          children: ei.intl.string(ei.t.m2Hyj4)
        })]
      }) : null
    }), !b && (0, n.jsxs)("div", {
      className: r()(es.overlayBottom, {
        [es.small]: s < 195
      }),
      children: [(0, n.jsxs)(c.Text, {
        className: r()(es.experimentOverlayTitle, {
          [es.compact]: _
        }),
        color: "none",
        variant: _ ? "text-sm/normal" : "text-md/normal",
        children: [null != k && f === ee.fO.USER && (0, n.jsx)(k, {
          className: r()(es.experimentTitleIcon, {
            [es.compact]: _
          }),
          size: "xs",
          color: "currentColor"
        }), m ? (0, n.jsx)("div", {
          className: es.blocked,
          children: (0, n.jsx)(c.t6m, {
            size: "lg",
            className: es.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, p ? (0, n.jsx)("div", {
          className: es.ignored,
          children: (0, n.jsx)(c.kZF, {
            size: "lg",
            className: es.blockedIcon
          })
        }) : null, l ? null : (0, n.jsx)(ed, {
          participantType: f,
          platform: g,
          className: r()(es.experimentTitleIcon, {
            [es.compact]: _
          })
        }), null == t || "" === t || l ? null : (0, n.jsx)("span", {
          className: es.overlayTitleText,
          children: t
        }), h && (0, n.jsx)(c.ua7, {
          text: ei.intl.string(ei.t.ZEem6O),
          children: e => (0, n.jsx)(c.tQf, ea(er({}, e), {
            className: es.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": ei.intl.string(ei.t.mR9cf3)
          }))
        })]
      }), !u && (0, n.jsxs)("div", {
        className: es.overlayButtonContainer,
        children: [(0, n.jsx)(em, {
          onClick: e => {
            e.stopPropagation(), A(!0), j(e, !0, ee.A5.THREE_DOT)
          },
          tooltipText: ei.intl.string(ei.t["+1H47u"]),
          icon: c.xhG,
          hideWhenInactive: !R,
          compact: _
        }), P && (0, n.jsx)(em, {
          onClick: C,
          tooltipText: T ? ei.intl.string(ei.t.YqAjX1) : ei.intl.string(ei.t["w4m94+"]),
          icon: T ? c.OyP : c.gj8,
          hideWhenInactive: !T && !R,
          compact: _
        })]
      })]
    })]
  })
});
ep.displayName = "CallTileOverlayV2";
let ef = i.memo(e => {
  let {
    muted: l,
    deafened: t,
    localMuted: i,
    serverMuted: s,
    serverDeafened: u,
    idle: d,
    title: m,
    width: p,
    hasVideo: f,
    inCall: x,
    localVideoDisabled: g,
    videoToggleState: j,
    focused: O,
    blocked: E,
    ignored: T,
    hideAudioIcon: y,
    participantType: I,
    participantUserId: Z,
    onContextMenu: S,
    onToggleMute: C,
    platform: N,
    application: b,
    secureFramesVerified: _
  } = e, R = null, A = null, P = null, k = (0, J.K)(p), w = (0, J.N)(p), M = (0, a.e7)([D.Z], () => null != Z && D.Z.isLocalVideoAutoDisabled(Z, (0, v.Z)(I)), [Z, I]);
  if (!y)
    if (i && I === ee.fO.STREAM && f && !O) R = (0, n.jsx)(c.ua7, {
      text: ei.intl.string(ei.t.YqAjX1),
      children: e => {
        var {
          onClick: l
        } = e, t = eo(e, ["onClick"]);
        return (0, n.jsx)(c.P3F, ea(er({}, t), {
          onClick: e => {
            e.stopPropagation(), null == l || l(), C()
          },
          className: r()(es.interactive, es.toggleMute, es.status),
          children: (0, n.jsx)(c.OyP, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    });
    else if (i || I !== ee.fO.STREAM || !f || k || O) {
    let e;
    u ? e = c.Vm4 : s ? e = c.v0G : t ? e = c.wE8 : i ? e = c.v0G : l && (e = c.nRN), R = null != (R = null != e ? (0, n.jsx)(e, {
      color: o.Z.colors.WHITE
    }) : null) ? (0, n.jsx)("div", {
      className: es.status,
      children: R
    }) : null
  } else R = (0, n.jsx)(c.ua7, {
    text: ei.intl.string(ei.t["w4m94+"]),
    children: e => {
      var {
        onClick: l
      } = e, t = eo(e, ["onClick"]);
      return (0, n.jsx)(c.P3F, ea(er({}, t), {
        onClick: e => {
          e.stopPropagation(), null == l || l(), C()
        },
        className: r()(es.interactive, es.toggleMute, es.status),
        children: (0, n.jsx)(c.gj8, {
          size: "md",
          color: "currentColor"
        })
      }))
    }
  });
  x && D.Z.supports(en.AN.VIDEO) || !f ? x && f && g && !M && (A = (0, n.jsx)(c.Amn, {
    size: "md",
    color: "currentColor"
  })) : A = (0, n.jsx)(c.Odl, {
    size: "md",
    color: "currentColor"
  }), I === ee.fO.STREAM && !O && f && (P = (0, n.jsx)(c.ua7, {
    text: ei.intl.string(ei.t["+1H47u"]),
    children: e => {
      var {
        onClick: l
      } = e, t = eo(e, ["onClick"]);
      return (0, n.jsx)(c.P3F, ea(er({}, t), {
        onClick: e => {
          e.stopPropagation(), null == l || l(), S(e)
        },
        className: r()(es.status, es.interactive),
        children: (0, n.jsx)(c.xhG, {
          size: "md",
          color: "currentColor"
        })
      }))
    }
  }));
  let V = I === ee.fO.USER && null != b ? (0, n.jsx)(c.ua7, {
    text: ei.intl.formatToPlainString(ei.t.Sq9xJy, {
      game: b.name
    }),
    children: e => (0, n.jsx)("div", ea(er({}, e), {
      className: r()(es.gameIconContainer, {
        [es.gameIconSmall]: p < 500
      }),
      children: (0, n.jsx)(h.Z, {
        className: es.gameIcon,
        game: b,
        size: h.Z.Sizes.SMALL
      })
    }))
  }) : null;
  return (0, n.jsxs)("div", {
    className: es.overlayContainer,
    children: [(0, n.jsx)("div", {
      className: r()(es.overlayTop, {
        [es.small]: p < 195
      }),
      children: M || j === $.ZUi.AUTO_PROBING ? d ? (0, n.jsx)("div", {
        className: es.status,
        children: (0, n.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: r()(es.overlayTitle, es.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: es.status,
          children: (0, n.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: es.overlayTitleText,
          children: ei.intl.string(ei.t.m2Hyj4)
        })]
      }) : null
    }), (0, n.jsxs)("div", {
      className: r()(es.overlayBottom, {
        [es.small]: p < 195
      }),
      children: [w ? (0, n.jsx)("div", {}) : (0, n.jsxs)(c.Text, {
        className: r()(es.overlayTitle, {
          [es.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [E ? (0, n.jsx)("div", {
          className: es.blocked,
          children: (0, n.jsx)(c.t6m, {
            size: "lg",
            className: es.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, T ? (0, n.jsx)("div", {
          className: es.ignored,
          children: (0, n.jsx)(c.kZF, {
            size: "lg",
            className: es.blockedIcon
          })
        }) : null, (0, n.jsx)(ed, {
          participantType: I,
          platform: N,
          className: es.titleIcon
        }), null != m && "" !== m ? (0, n.jsx)("span", {
          className: es.overlayTitleText,
          children: m
        }) : null, _ && (0, n.jsx)(c.ua7, {
          text: ei.intl.string(ei.t.ZEem6O),
          children: e => (0, n.jsx)(c.tQf, ea(er({}, e), {
            className: es.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": ei.intl.string(ei.t.mR9cf3)
          }))
        })]
      }), (0, n.jsxs)("div", {
        className: es.statusContainer,
        children: [null != A && (0, n.jsx)("div", {
          className: es.status,
          children: A
        }), R, P, V]
      })]
    })]
  })
});
ef.displayName = "CallTileOverlay";
let ev = T.L,
  ex = eu