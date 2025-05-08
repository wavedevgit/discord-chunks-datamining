/** Chunk was on 55196 **/
t.d(l, {
  BP: () => ef,
  ZP: () => ev
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
  y = t(6572),
  T = t(352978),
  Z = t(936847),
  S = t(512384),
  E = t(33316),
  I = t(576645),
  C = t(210975),
  N = t(695346),
  b = t(937995),
  _ = t(456631),
  R = t(274459),
  A = t(314897),
  P = t(857192),
  k = t(77498),
  w = t(131951),
  M = t(158776),
  V = t(594174),
  D = t(979651),
  z = t(574254),
  U = t(374129),
  L = t(639351),
  G = t(74538),
  Y = t(221241),
  H = t(584729),
  F = t(334374),
  B = t(849171),
  X = t(607187),
  K = t(833519),
  W = t(462061),
  q = t(623825),
  J = t(839662),
  Q = t(981631),
  $ = t(354459),
  ee = t(37113),
  el = t(524484),
  et = t(65154),
  en = t(388032),
  ei = t(519417);

function es(e) {
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

function er(e, l) {
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

function ea(e, l) {
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
let eo = [$.fO.ACTIVITY],
  ec = i.memo(e => {
    var l, t, s, o, h;
    let {
      participant: z,
      onDoubleClick: U,
      onContextMenu: L,
      onClick: q,
      onMouseDown: ea,
      onKeyDown: ec,
      className: eu,
      style: ed,
      containerStyle: ef,
      channel: ev,
      width: ex,
      inPopout: eg,
      onVideoResize: eh,
      inCall: ej = !1,
      selected: eO = !1,
      noBorder: ey = !1,
      noVideoRender: eT = !1,
      focused: eZ = !1,
      blocked: eS = !1,
      ignored: eE = !1,
      fit: eI = T.L.CONTAIN,
      paused: eC = !1,
      pulseSpeakingIndicator: eN = !1,
      forceIdle: eb = !1,
      inOverlayPopout: e_ = !1
    } = e, eR = i.useContext(b.h9) || eb, [eA, eP] = i.useState(!1), ek = N.Sb.useSetting(), ew = (0, a.e7)([P.default], () => P.default.isStreamInfoOverlayEnabled), [eM, eV] = i.useState(!1), eD = (0, a.e7)([A.default], () => A.default.getId()), ez = (0, a.e7)([V.default], () => V.default.getCurrentUser()), eU = z.type === $.fO.ACTIVITY ? null : null == (l = z.user) ? void 0 : l.id, [eL] = (0, f.Z)(z.type === $.fO.ACTIVITY ? [z.applicationId] : []), eG = (0, a.e7)([O.Z], () => O.Z.getEnabled()), eY = (0, a.e7)([w.Z], () => null != eU && w.Z.isLocalVideoDisabled(eU, (0, v.Z)(z.type)), [eU, z.type]), eH = (0, a.e7)([w.Z], () => null != eU ? w.Z.getVideoToggleState(eU, (0, v.Z)(z.type)) : Q.ZUi.NONE, [eU, z.type]), eF = eH === Q.ZUi.AUTO_PROBING, {
      speaking: eB,
      ringing: eX,
      hasVideo: eK
    } = (0, J.Z)(z, eD), eW = function(e, l, t) {
      var n, i, s, r;
      let o = l.type !== $.fO.ACTIVITY ? l.user.id : l.applicationId,
        c = (0, a.cj)([D.Z], () => {
          var e, l, n;
          let i = D.Z.getVoiceState(t, o);
          return {
            muted: null != (e = null == i ? void 0 : i.mute) && e,
            deafened: null != (l = null == i ? void 0 : i.deaf) && l,
            suppressed: null != (n = null == i ? void 0 : i.suppress) && n,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, a.cj)([w.Z], () => {
          let t = (0, v.Z)(l.type);
          return e === o ? {
            muted: !1,
            deafened: !1
          } : {
            muted: w.Z.isLocalMute(o, t),
            localVideoDisabled: w.Z.isLocalVideoDisabled(o, t),
            localVideoAutoDisabled: w.Z.isLocalVideoAutoDisabled(o, t)
          }
        }, [e, l.type, o]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (s = l.type === $.fO.USER && (null == (n = l.voiceState) ? void 0 : n.isVoiceMuted())) && s,
        deafened: null != (r = l.type === $.fO.USER && (null == (i = l.voiceState) ? void 0 : i.isVoiceDeafened())) && r
      }
    }(eD, z, ev.getGuildId()), eq = z.type === $.fO.STREAM && eU === eD, eJ = G.ZP.isPremium(ez);
    i.useEffect(() => {
      if (eq && !eJ && null != ev.hdStreamingUntil && new Date(ev.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = w.Z.getGoLiveSource(),
            l = (0, g.s_)(ee.LY.RESOLUTION_720, ee.ws.FPS_30, e);
          u.Z.setGoLiveSource(l)
        }, new Date(ev.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [eq, eJ, ev.hdStreamingUntil]);
    let eQ = (0, a.e7)([_.Z], () => z.type === $.fO.USER && null != eU ? _.Z.getEffectForUserId(eU) : null),
      e$ = (0, a.e7)([D.Z], () => D.Z.getVoicePlatformForChannel(ev.id, null != eU ? eU : Q.lds)),
      {
        simplifiedSettingsEnabled: e0
      } = (0, Y.Z)({
        location: "CallTile"
      }),
      {
        showGameIcon: e1
      } = j.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e7 = (0, a.e7)([M.Z], () => e1 && null != eU ? M.Z.findActivity(eU, e => null != e.application_id && e.type === Q.IIU.PLAYING) : null, [e1, eU]),
      e5 = (0, a.e7)([k.Z], () => (null == e7 ? void 0 : e7.application_id) != null ? k.Z.getDetectableGame(e7.application_id) : null),
      e4 = (0, a.e7)([p.Z], () => null != e5 && (null == e7 ? void 0 : e7.application_id) != null ? p.Z.getApplication(null == e7 ? void 0 : e7.application_id) : void 0),
      e3 = (0, C.wV)({
        userId: eU,
        channelId: ev.id
      }),
      e9 = (0, C.zU)({
        streamKey: z.type === $.fO.STREAM ? z.id : null,
        channelId: ev.id
      }),
      e8 = i.useMemo(() => z.type === $.fO.STREAM ? null != e9 && e9 : z.type === $.fO.USER && null != e3 && e3, [e9, e3, z.type]);
    i.useEffect(() => {
      eP(eZ)
    }, [eZ]);
    let [e6, e2] = i.useState(!1), le = i.useCallback(() => {
      m.Z.useReducedMotion || e2(!0)
    }, []);
    (0, I.J)(ev, le);
    let ll = i.useCallback(() => {
        null != eU && u.Z.toggleLocalMute(eU, et.Yn.STREAM)
      }, [eU]),
      lt = i.useCallback(e => {
        null == q || q(z, e)
      }, [q, z]),
      ln = i.useCallback(e => {
        null == U || U(z, e)
      }, [U, z]),
      li = i.useCallback((e, l, t) => {
        null == L || L(z, e, l, t)
      }, [L, z]),
      ls = null,
      lr = null,
      la = "";
    switch (z.type) {
      case $.fO.STREAM:
        ls = (0, n.jsx)(K.Z, {
          participant: z,
          selected: eO,
          width: ex,
          fit: eI,
          onVideoResize: eh,
          paused: eC,
          inPopout: eg,
          focused: eZ,
          inOverlayPopout: e_
        }), lr = (0, n.jsx)(K._, {
          participant: z,
          selected: eO,
          width: ex,
          focused: eZ,
          idle: eR,
          premiumIndicator: !1
        }), la = en.intl.formatToPlainString(en.t.gHPz3d, {
          streamerName: z.user.username
        });
        break;
      case $.fO.USER:
        ls = (0, n.jsx)(W.Z, {
          channel: ev,
          inCall: ej,
          participant: z,
          fit: eI,
          onVideoResize: eh,
          paused: eC,
          selected: eO,
          width: ex,
          blocked: eS,
          ignored: eE,
          noVideoRender: eT || eF,
          pulseSpeakingIndicator: eN,
          inOverlayPopout: e_
        }), lr = (0, n.jsx)(W.T, {
          participant: z,
          channelId: ev.id
        }), la = en.intl.formatToPlainString(en.t["iC/x/f"], {
          username: z.user.username
        });
        break;
      case $.fO.ACTIVITY:
        ls = (0, n.jsx)(B.ZP, {
          interactible: eZ,
          participant: z,
          selected: eO,
          channel: ev,
          width: ex
        }), la = en.intl.formatToPlainString(en.t.YCvOsL, {
          activityName: null == eL ? void 0 : eL.name
        });
        break;
      case $.fO.HIDDEN_STREAM:
        ls = (0, n.jsx)(K.Z, {
          participant: z,
          selected: eO,
          width: ex,
          fit: eI,
          onVideoResize: eh,
          paused: eC,
          inPopout: eg,
          focused: eZ,
          inOverlayPopout: e_
        })
    }
    let lo = i.useRef(null),
      lc = z.type === $.fO.STREAM ? c.pzj : c.Odl,
      lu = e0 ? em : ep;
    return (0, n.jsx)(d.Z, {
      section: Q.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsxs)("div", {
        className: r()(ei.wrapper, {
          [ei.ringing]: eX
        }, eu),
        style: ef,
        onMouseEnter: () => {
          eV(!0)
        },
        onMouseLeave: () => {
          eV(!1)
        },
        children: [e6 && z.type === $.fO.STREAM && (0, n.jsx)(E.Z, {
          baseTileRef: lo.current,
          cleanup: () => e2(!1)
        }), (0, n.jsxs)(S.Z, {
          shakeLocation: el.oZ.VOICE_USER,
          isShaking: eB,
          className: ei.tile,
          children: [(0, n.jsx)(X.Z, {
            ref: lo,
            className: r()(ei.tile, {
              [ei.noBorder]: ey,
              [ei.noInteraction]: null == q,
              [ei.idle]: eR
            }),
            noBorder: ey,
            style: ed,
            participantUserId: eU,
            children: (0, n.jsxs)(c.kL8, {
              "aria-label": la,
              className: ei.tileChild,
              onDoubleClick: ln,
              onContextMenu: e => li(e, e0 && z.type === $.fO.STREAM),
              onClick: lt,
              onMouseDown: ea,
              onKeyDown: ec,
              focusProps: {
                offset: 1
              },
              children: [null != eQ && null != eU ? (0, n.jsx)(R.Z, {
                voiceChannelEffect: eQ,
                onComplete: () => (0, _.H)(eU),
                userId: eU
              }) : null, z.type === $.fO.USER ? (0, n.jsx)("div", {
                className: ei.voiceChannelEffectsContainer,
                children: (0, n.jsx)(x.Z, {
                  userId: eU,
                  channelId: ev.id,
                  guildId: ev.getGuildId(),
                  containerDimensions: {
                    width: null != (o = null == lo || null == (t = lo.current) ? void 0 : t.clientWidth) ? o : 0,
                    height: null != (h = null == lo || null == (s = lo.current) ? void 0 : s.clientHeight) ? h : 0
                  }
                })
              }) : null, ls, ey ? null : (0, n.jsx)("div", {
                className: ei.indicators,
                children: lr
              }), eO ? (0, n.jsx)("div", {
                className: ei.selectedScreen,
                children: (0, n.jsx)(lc, {
                  size: "md",
                  color: "currentColor",
                  className: ei.selectedIcon
                })
              }) : null, eo.includes(z.type) ? null : (0, n.jsx)(lu, er(es({
                focused: eZ,
                width: ex,
                inCall: ej,
                participantType: z.type,
                hasVideo: null != eK && eK
              }, eW), {
                idle: eR,
                platform: e$,
                title: (0, H.Z)(ev, z),
                blocked: eS,
                ignored: eE,
                localVideoDisabled: eY,
                videoToggleState: eH,
                hideAudioIcon: eq,
                onContextMenu: li,
                onToggleMute: ll,
                participantUserId: eU,
                application: e4,
                secureFramesVerified: e8,
                isHovered: eM
              })), z.type === $.fO.USER && eG ? (0, n.jsx)(y.Z, {
                userId: z.id,
                channelId: ev.id
              }) : null, ej && !ey ? (0, n.jsx)("div", {
                className: r()(ei.border, {
                  [ei.voiceChannelEffect]: !eZ && null != eQ,
                  [ei.speaking]: eB && !eZ
                })
              }) : null]
            })
          }), ek && ew && eM && (0, n.jsx)(F.Z, {
            currentUserId: eD,
            participant: z
          }), (0, n.jsx)(Z.Z, {
            isFiring: eA,
            callTileRef: lo.current
          })]
        })]
      })
    })
  });

function eu(e) {
  let {
    participantType: l,
    platform: t,
    className: i
  } = e;
  if (l === $.fO.STREAM) return t === $.wR.XBOX ? (0, n.jsx)(L.Z, {
    className: i
  }) : (0, n.jsx)(c.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (t) {
    case $.wR.MOBILE:
      return (0, n.jsx)(c.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case $.wR.XBOX:
      return (0, n.jsx)(L.Z, {
        className: i
      });
    case $.wR.PLAYSTATION:
      return (0, n.jsx)(U.Z, {
        className: i
      });
    default:
      return null
  }
}

function ed(e) {
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
      } = e, o = ea(e, ["onClick"]);
      return (0, n.jsx)(c.zxk, er(es({}, o), {
        onClick: e => {
          e.stopPropagation(), null == t || t(), s(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: r()(ei.overlayButton, {
          [ei.hideWhenInactive]: i,
          [ei.compact]: a
        }),
        innerClassName: ei.overlayButtonInner,
        children: (0, n.jsx)(l, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
ec.displayName = "CallTile";
let em = i.memo(e => {
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
    deafened: y,
    localMuted: T,
    serverMuted: Z,
    serverDeafened: S,
    hasVideo: E,
    hideAudioIcon: I,
    onToggleMute: C
  } = e, N = (0, a.e7)([w.Z], () => null != x && w.Z.isLocalVideoAutoDisabled(x, (0, v.Z)(f)), [x, f]), b = (0, q.N)(s), _ = (0, q.K)(s), [R, A] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      l = () => {
        e !== z.Z.isOpen() && ((e = z.Z.isOpen()) || A(!1))
      };
    return z.Z.addChangeListener(l), () => z.Z.removeChangeListener(l)
  }, []);
  let P = !I && f === $.fO.STREAM && E && (!_ || T),
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
      serverMuted: Z,
      serverDeafened: S,
      deafened: y,
      muted: O
    });
  return (0, n.jsxs)("div", {
    className: r()(ei.overlayContainer, {
      [ei.compact]: _
    }),
    children: [(0, n.jsx)("div", {
      className: r()(ei.overlayTop, {
        [ei.small]: s < 195
      }),
      children: N || d === Q.ZUi.AUTO_PROBING ? l ? (0, n.jsx)("div", {
        className: ei.status,
        children: (0, n.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: r()(ei.overlayTitle, ei.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: ei.status,
          children: (0, n.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ei.overlayTitleText,
          children: en.intl.string(en.t.m2Hyj4)
        })]
      }) : null
    }), !b && (0, n.jsxs)("div", {
      className: r()(ei.overlayBottom, {
        [ei.small]: s < 195
      }),
      children: [(0, n.jsxs)(c.Text, {
        className: r()(ei.experimentOverlayTitle, {
          [ei.compact]: _
        }),
        color: "none",
        variant: _ ? "text-sm/normal" : "text-md/normal",
        children: [null != k && f === $.fO.USER && (0, n.jsx)(k, {
          className: r()(ei.experimentTitleIcon, {
            [ei.compact]: _
          }),
          size: "xs",
          color: "currentColor"
        }), m ? (0, n.jsx)("div", {
          className: ei.blocked,
          children: (0, n.jsx)(c.t6m, {
            size: "lg",
            className: ei.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, p ? (0, n.jsx)("div", {
          className: ei.ignored,
          children: (0, n.jsx)(c.kZF, {
            size: "lg",
            className: ei.blockedIcon
          })
        }) : null, l ? null : (0, n.jsx)(eu, {
          participantType: f,
          platform: g,
          className: r()(ei.experimentTitleIcon, {
            [ei.compact]: _
          })
        }), null == t || "" === t || l ? null : (0, n.jsx)("span", {
          className: ei.overlayTitleText,
          children: t
        }), h && (0, n.jsx)(c.ua7, {
          text: en.intl.string(en.t.ZEem6O),
          children: e => (0, n.jsx)(c.tQf, er(es({}, e), {
            className: ei.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": en.intl.string(en.t.mR9cf3)
          }))
        })]
      }), !u && (0, n.jsxs)("div", {
        className: ei.overlayButtonContainer,
        children: [(0, n.jsx)(ed, {
          onClick: e => {
            e.stopPropagation(), A(!0), j(e, !0, $.A5.THREE_DOT)
          },
          tooltipText: en.intl.string(en.t["+1H47u"]),
          icon: c.xhG,
          hideWhenInactive: !R,
          compact: _
        }), P && (0, n.jsx)(ed, {
          onClick: C,
          tooltipText: T ? en.intl.string(en.t.YqAjX1) : en.intl.string(en.t["w4m94+"]),
          icon: T ? c.OyP : c.gj8,
          hideWhenInactive: !T && !R,
          compact: _
        })]
      })]
    })]
  })
});
em.displayName = "CallTileOverlayV2";
let ep = i.memo(e => {
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
    blocked: y,
    ignored: T,
    hideAudioIcon: Z,
    participantType: S,
    participantUserId: E,
    onContextMenu: I,
    onToggleMute: C,
    platform: N,
    application: b,
    secureFramesVerified: _
  } = e, R = null, A = null, P = null, k = (0, q.K)(p), M = (0, q.N)(p), V = (0, a.e7)([w.Z], () => null != E && w.Z.isLocalVideoAutoDisabled(E, (0, v.Z)(S)), [E, S]);
  if (!Z)
    if (i && S === $.fO.STREAM && f && !O) R = (0, n.jsx)(c.ua7, {
      text: en.intl.string(en.t.YqAjX1),
      children: e => {
        var {
          onClick: l
        } = e, t = ea(e, ["onClick"]);
        return (0, n.jsx)(c.P3F, er(es({}, t), {
          onClick: e => {
            e.stopPropagation(), null == l || l(), C()
          },
          className: r()(ei.interactive, ei.toggleMute, ei.status),
          children: (0, n.jsx)(c.OyP, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    });
    else if (i || S !== $.fO.STREAM || !f || k || O) {
    let e;
    u ? e = c.Vm4 : s ? e = c.v0G : t ? e = c.wE8 : i ? e = c.v0G : l && (e = c.nRN), R = null != (R = null != e ? (0, n.jsx)(e, {
      color: o.Z.colors.WHITE
    }) : null) ? (0, n.jsx)("div", {
      className: ei.status,
      children: R
    }) : null
  } else R = (0, n.jsx)(c.ua7, {
    text: en.intl.string(en.t["w4m94+"]),
    children: e => {
      var {
        onClick: l
      } = e, t = ea(e, ["onClick"]);
      return (0, n.jsx)(c.P3F, er(es({}, t), {
        onClick: e => {
          e.stopPropagation(), null == l || l(), C()
        },
        className: r()(ei.interactive, ei.toggleMute, ei.status),
        children: (0, n.jsx)(c.gj8, {
          size: "md",
          color: "currentColor"
        })
      }))
    }
  });
  x && w.Z.supports(et.AN.VIDEO) || !f ? x && f && g && !V && (A = (0, n.jsx)(c.Amn, {
    size: "md",
    color: "currentColor"
  })) : A = (0, n.jsx)(c.Odl, {
    size: "md",
    color: "currentColor"
  }), S === $.fO.STREAM && !O && f && (P = (0, n.jsx)(c.ua7, {
    text: en.intl.string(en.t["+1H47u"]),
    children: e => {
      var {
        onClick: l
      } = e, t = ea(e, ["onClick"]);
      return (0, n.jsx)(c.P3F, er(es({}, t), {
        onClick: e => {
          e.stopPropagation(), null == l || l(), I(e)
        },
        className: r()(ei.status, ei.interactive),
        children: (0, n.jsx)(c.xhG, {
          size: "md",
          color: "currentColor"
        })
      }))
    }
  }));
  let D = S === $.fO.USER && null != b ? (0, n.jsx)(c.ua7, {
    text: en.intl.formatToPlainString(en.t.Sq9xJy, {
      game: b.name
    }),
    children: e => (0, n.jsx)("div", er(es({}, e), {
      className: r()(ei.gameIconContainer, {
        [ei.gameIconSmall]: p < 500
      }),
      children: (0, n.jsx)(h.Z, {
        className: ei.gameIcon,
        game: b,
        size: h.Z.Sizes.SMALL
      })
    }))
  }) : null;
  return (0, n.jsxs)("div", {
    className: ei.overlayContainer,
    children: [(0, n.jsx)("div", {
      className: r()(ei.overlayTop, {
        [ei.small]: p < 195
      }),
      children: V || j === Q.ZUi.AUTO_PROBING ? d ? (0, n.jsx)("div", {
        className: ei.status,
        children: (0, n.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: r()(ei.overlayTitle, ei.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: ei.status,
          children: (0, n.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ei.overlayTitleText,
          children: en.intl.string(en.t.m2Hyj4)
        })]
      }) : null
    }), (0, n.jsxs)("div", {
      className: r()(ei.overlayBottom, {
        [ei.small]: p < 195
      }),
      children: [M ? (0, n.jsx)("div", {}) : (0, n.jsxs)(c.Text, {
        className: r()(ei.overlayTitle, {
          [ei.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [y ? (0, n.jsx)("div", {
          className: ei.blocked,
          children: (0, n.jsx)(c.t6m, {
            size: "lg",
            className: ei.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, T ? (0, n.jsx)("div", {
          className: ei.ignored,
          children: (0, n.jsx)(c.kZF, {
            size: "lg",
            className: ei.blockedIcon
          })
        }) : null, (0, n.jsx)(eu, {
          participantType: S,
          platform: N,
          className: ei.titleIcon
        }), null != m && "" !== m ? (0, n.jsx)("span", {
          className: ei.overlayTitleText,
          children: m
        }) : null, _ && (0, n.jsx)(c.ua7, {
          text: en.intl.string(en.t.ZEem6O),
          children: e => (0, n.jsx)(c.tQf, er(es({}, e), {
            className: ei.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": en.intl.string(en.t.mR9cf3)
          }))
        })]
      }), (0, n.jsxs)("div", {
        className: ei.statusContainer,
        children: [null != A && (0, n.jsx)("div", {
          className: ei.status,
          children: A
        }), R, P, D]
      })]
    })]
  })
});
ep.displayName = "CallTileOverlay";
let ef = T.L,
  ev = ec