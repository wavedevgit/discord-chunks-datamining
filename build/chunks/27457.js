/** Chunk was on 55196 **/
t.d(l, {
  BP: () => eh,
  ZP: () => eg
}), t(47120);
var n = t(200651),
  i = t(192379),
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
  h = t(578976),
  g = t(925329),
  j = t(649739),
  O = t(37091),
  N = t(6572),
  E = t(352978),
  T = t(936847),
  y = t(512384),
  Z = t(33316),
  I = t(576645),
  S = t(6242),
  C = t(757692),
  b = t(210975),
  _ = t(695346),
  R = t(937995),
  A = t(456631),
  P = t(274459),
  k = t(314897),
  D = t(857192),
  M = t(77498),
  w = t(131951),
  V = t(158776),
  z = t(594174),
  U = t(979651),
  L = t(574254),
  G = t(374129),
  W = t(639351),
  Y = t(74538),
  B = t(221241),
  H = t(584729),
  F = t(334374),
  X = t(849171),
  K = t(607187),
  q = t(624834),
  J = t(833519),
  Q = t(462061),
  $ = t(623825),
  ee = t(839662),
  el = t(981631),
  et = t(354459),
  en = t(37113),
  ei = t(524484),
  es = t(65154),
  er = t(388032),
  ea = t(230808);

function eo(e) {
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

function ec(e, l) {
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

function eu(e, l) {
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
let ed = [et.fO.ACTIVITY, et.fO.PRESENCE_EMBEDDED_ACTIVITY],
  em = i.memo(e => {
    var l, t, s, o, g;
    let {
      participant: L,
      onDoubleClick: G,
      onContextMenu: W,
      onClick: $,
      onMouseDown: eu,
      onKeyDown: em,
      className: ep,
      style: ef,
      containerStyle: eh,
      channel: eg,
      width: ej,
      inPopout: eO,
      onVideoResize: eN,
      inCall: eE = !1,
      selected: eT = !1,
      noBorder: ey = !1,
      noVideoRender: eZ = !1,
      focused: eI = !1,
      blocked: eS = !1,
      ignored: eC = !1,
      fit: eb = E.L.CONTAIN,
      paused: e_ = !1,
      pulseSpeakingIndicator: eR = !1,
      forceIdle: eA = !1,
      inOverlayPopout: eP = !1
    } = e, ek = i.useContext(R.h9) || eA, [eD, eM] = i.useState(!1), ew = _.Sb.useSetting(), eV = (0, a.e7)([D.default], () => D.default.isStreamInfoOverlayEnabled), [ez, eU] = i.useState(!1), eL = (0, a.e7)([k.default], () => k.default.getId()), eG = (0, a.e7)([z.default], () => z.default.getCurrentUser()), eW = L.type === et.fO.ACTIVITY ? null : null === (l = L.user) || void 0 === l ? void 0 : l.id, [eY] = (0, f.Z)(L.type === et.fO.ACTIVITY ? [L.applicationId] : []), eB = (0, a.e7)([O.Z], () => O.Z.getEnabled()), eH = (0, a.e7)([w.Z], () => null != eW && w.Z.isLocalVideoDisabled(eW, (0, v.Z)(L.type)), [eW, L.type]), eF = (0, a.e7)([w.Z], () => null != eW ? w.Z.getVideoToggleState(eW, (0, v.Z)(L.type)) : el.ZUi.NONE, [eW, L.type]), eX = eF === el.ZUi.AUTO_PROBING, {
      speaking: eK,
      ringing: eq,
      hasVideo: eJ
    } = (0, ee.Z)(L, eL), eQ = function(e, l, t) {
      var n, i, s, r;
      let o = l.type !== et.fO.ACTIVITY ? l.user.id : l.applicationId,
        c = (0, a.cj)([U.Z], () => {
          var e, l, n;
          let i = U.Z.getVoiceState(t, o);
          return {
            muted: null !== (e = null == i ? void 0 : i.mute) && void 0 !== e && e,
            deafened: null !== (l = null == i ? void 0 : i.deaf) && void 0 !== l && l,
            suppressed: null !== (n = null == i ? void 0 : i.suppress) && void 0 !== n && n,
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
        muted: null !== (s = l.type === et.fO.USER && (null === (n = l.voiceState) || void 0 === n ? void 0 : n.isVoiceMuted())) && void 0 !== s && s,
        deafened: null !== (r = l.type === et.fO.USER && (null === (i = l.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== r && r
      }
    }(eL, L, eg.getGuildId()), e$ = L.type === et.fO.STREAM && eW === eL, e0 = Y.ZP.isPremium(eG);
    i.useEffect(() => {
      if (e$ && !e0 && null != eg.hdStreamingUntil && new Date(eg.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = w.Z.getGoLiveSource(),
            l = (0, h.s_)(en.LY.RESOLUTION_720, en.ws.FPS_30, e);
          u.Z.setGoLiveSource(l)
        }, new Date(eg.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [e$, e0, eg.hdStreamingUntil]);
    let e1 = (0, C.o)(L, eG),
      e7 = (0, S.lL)("CallTile", !0, eG, e1),
      e4 = (0, a.e7)([A.Z], () => L.type === et.fO.USER && null != eW ? A.Z.getEffectForUserId(eW) : null),
      e9 = (0, a.e7)([U.Z], () => U.Z.getVoicePlatformForChannel(eg.id, null != eW ? eW : el.lds)),
      {
        simplifiedSettingsEnabled: e5
      } = (0, B.Z)({
        location: "CallTile"
      }),
      {
        showGameIcon: e3
      } = j.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e2 = (0, a.e7)([V.Z], () => e3 && null != eW ? V.Z.findActivity(eW, e => null != e.application_id && e.type === el.IIU.PLAYING) : null, [e3, eW]),
      e6 = (0, a.e7)([M.Z], () => (null == e2 ? void 0 : e2.application_id) != null ? M.Z.getDetectableGame(e2.application_id) : null),
      e8 = (0, a.e7)([p.Z], () => null != e6 && (null == e2 ? void 0 : e2.application_id) != null ? p.Z.getApplication(null == e2 ? void 0 : e2.application_id) : void 0),
      le = (0, b.wV)({
        userId: eW,
        channelId: eg.id
      }),
      ll = (0, b.zU)({
        streamKey: L.type === et.fO.STREAM ? L.id : null,
        channelId: eg.id
      }),
      lt = i.useMemo(() => L.type === et.fO.STREAM ? null != ll && ll : L.type === et.fO.USER && null != le && le, [ll, le, L.type]);
    i.useEffect(() => {
      eM(eI)
    }, [eI]);
    let [ln, li] = i.useState(!1), ls = i.useCallback(() => {
      m.Z.useReducedMotion || li(!0)
    }, []);
    (0, I.J)(eg, ls);
    let lr = i.useCallback(() => {
        null != eW && u.Z.toggleLocalMute(eW, es.Yn.STREAM)
      }, [eW]),
      la = i.useCallback(e => {
        null == $ || $(L, e)
      }, [$, L]),
      lo = i.useCallback(e => {
        null == G || G(L, e)
      }, [G, L]),
      lc = i.useCallback((e, l, t) => {
        null == W || W(L, e, l, t)
      }, [W, L]),
      lu = null,
      ld = null,
      lm = "";
    switch (L.type) {
      case et.fO.STREAM:
        lu = (0, n.jsx)(J.Z, {
          participant: L,
          selected: eT,
          width: ej,
          fit: eb,
          onVideoResize: eN,
          paused: e_,
          inPopout: eO,
          focused: eI,
          inOverlayPopout: eP
        }), ld = (0, n.jsx)(J._, {
          participant: L,
          selected: eT,
          width: ej,
          focused: eI,
          idle: ek,
          premiumIndicator: e7.enabled
        }), lm = er.NW.formatToPlainString(er.t.gHPz3d, {
          streamerName: L.user.username
        });
        break;
      case et.fO.USER:
        lu = (0, n.jsx)(Q.Z, {
          channel: eg,
          inCall: eE,
          participant: L,
          fit: eb,
          onVideoResize: eN,
          paused: e_,
          selected: eT,
          width: ej,
          blocked: eS,
          ignored: eC,
          noVideoRender: eZ || eX,
          pulseSpeakingIndicator: eR,
          inOverlayPopout: eP
        }), ld = (0, n.jsx)(Q.T, {
          participant: L,
          channelId: eg.id
        }), lm = er.NW.formatToPlainString(er.t["iC/x/f"], {
          username: L.user.username
        });
        break;
      case et.fO.ACTIVITY:
        lu = (0, n.jsx)(X.ZP, {
          interactible: eI,
          participant: L,
          selected: eT,
          channel: eg,
          width: ej
        }), lm = er.NW.formatToPlainString(er.t.YCvOsL, {
          activityName: null == eY ? void 0 : eY.name
        });
        break;
      case et.fO.PRESENCE_EMBEDDED_ACTIVITY:
        lu = (0, n.jsx)(q.Z, {
          participant: L,
          width: ej,
          channelId: eg.id
        });
        break;
      case et.fO.HIDDEN_STREAM:
        lu = (0, n.jsx)(J.Z, {
          participant: L,
          selected: eT,
          width: ej,
          fit: eb,
          onVideoResize: eN,
          paused: e_,
          inPopout: eO,
          focused: eI,
          inOverlayPopout: eP
        })
    }
    let lp = i.useRef(null),
      lf = L.type === et.fO.STREAM ? c.pzj : c.Odl,
      lv = e5 ? ev : ex;
    return (0, n.jsx)(d.Z, {
      section: el.jXE.VOICE_CHANNEL_TILE,
      children: (0, n.jsxs)("div", {
        className: r()(ea.wrapper, {
          [ea.ringing]: eq
        }, ep),
        style: eh,
        onMouseEnter: () => {
          eU(!0)
        },
        onMouseLeave: () => {
          eU(!1)
        },
        children: [ln && L.type === et.fO.STREAM && (0, n.jsx)(Z.Z, {
          baseTileRef: lp.current,
          cleanup: () => li(!1)
        }), (0, n.jsxs)(y.Z, {
          shakeLocation: ei.oZ.VOICE_USER,
          isShaking: eK,
          className: ea.tile,
          children: [(0, n.jsx)(K.Z, {
            ref: lp,
            className: r()(ea.tile, {
              [ea.noBorder]: ey,
              [ea.noInteraction]: null == $,
              [ea.idle]: ek
            }),
            noBorder: ey,
            style: ef,
            participantUserId: eW,
            children: (0, n.jsxs)(c.kL8, {
              "aria-label": lm,
              className: ea.tileChild,
              onDoubleClick: lo,
              onContextMenu: e => lc(e, e5 && L.type === et.fO.STREAM),
              onClick: la,
              onMouseDown: eu,
              onKeyDown: em,
              focusProps: {
                offset: 1
              },
              children: [null != e4 && null != eW ? (0, n.jsx)(P.Z, {
                voiceChannelEffect: e4,
                onComplete: () => (0, A.H)(eW),
                userId: eW
              }) : null, L.type === et.fO.USER ? (0, n.jsx)("div", {
                className: ea.voiceChannelEffectsContainer,
                children: (0, n.jsx)(x.Z, {
                  userId: eW,
                  channelId: eg.id,
                  guildId: eg.getGuildId(),
                  containerDimensions: {
                    width: null !== (o = null == lp ? void 0 : null === (t = lp.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== o ? o : 0,
                    height: null !== (g = null == lp ? void 0 : null === (s = lp.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== g ? g : 0
                  }
                })
              }) : null, lu, ey ? null : (0, n.jsx)("div", {
                className: ea.indicators,
                children: ld
              }), eT ? (0, n.jsx)("div", {
                className: ea.selectedScreen,
                children: (0, n.jsx)(lf, {
                  size: "md",
                  color: "currentColor",
                  className: ea.selectedIcon
                })
              }) : null, ed.includes(L.type) ? null : (0, n.jsx)(lv, ec(eo({
                focused: eI,
                width: ej,
                inCall: eE,
                participantType: L.type,
                hasVideo: null != eJ && eJ
              }, eQ), {
                idle: ek,
                platform: e9,
                title: (0, H.Z)(eg, L),
                blocked: eS,
                ignored: eC,
                localVideoDisabled: eH,
                videoToggleState: eF,
                hideAudioIcon: e$,
                onContextMenu: lc,
                onToggleMute: lr,
                participantUserId: eW,
                application: e8,
                secureFramesVerified: lt,
                isHovered: ez
              })), L.type === et.fO.USER && eB ? (0, n.jsx)(N.Z, {
                userId: L.id,
                channelId: eg.id
              }) : null, eE && !ey ? (0, n.jsx)("div", {
                className: r()(ea.border, {
                  [ea.voiceChannelEffect]: !eI && null != e4,
                  [ea.speaking]: eK && !eI
                })
              }) : null]
            })
          }), ew && eV && ez && (0, n.jsx)(F.Z, {
            currentUserId: eL,
            participant: L
          }), (0, n.jsx)(T.Z, {
            isFiring: eD,
            callTileRef: lp.current
          })]
        })]
      })
    })
  });

function ep(e) {
  let {
    participantType: l,
    platform: t,
    className: i
  } = e;
  if (l === et.fO.STREAM) return t === et.wR.XBOX ? (0, n.jsx)(W.Z, {
    className: i
  }) : (0, n.jsx)(c.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (t) {
    case et.wR.MOBILE:
      return (0, n.jsx)(c.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case et.wR.XBOX:
      return (0, n.jsx)(W.Z, {
        className: i
      });
    case et.wR.PLAYSTATION:
      return (0, n.jsx)(G.Z, {
        className: i
      });
    default:
      return null
  }
}

function ef(e) {
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
      } = e, o = eu(e, ["onClick"]);
      return (0, n.jsx)(c.zxk, ec(eo({}, o), {
        onClick: e => {
          e.stopPropagation(), null == t || t(), s(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: r()(ea.overlayButton, {
          [ea.hideWhenInactive]: i,
          [ea.compact]: a
        }),
        innerClassName: ea.overlayButtonInner,
        children: (0, n.jsx)(l, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
em.displayName = "CallTile";
let ev = i.memo(e => {
  let {
    idle: l,
    title: t,
    width: s,
    videoToggleState: u,
    blocked: d,
    ignored: m,
    participantType: p,
    participantUserId: f,
    platform: x,
    secureFramesVerified: h,
    onContextMenu: g,
    muted: j,
    deafened: O,
    localMuted: N,
    serverMuted: E,
    serverDeafened: T,
    hasVideo: y,
    hideAudioIcon: Z,
    onToggleMute: I
  } = e, S = (0, a.e7)([w.Z], () => null != f && w.Z.isLocalVideoAutoDisabled(f, (0, v.Z)(p)), [f, p]), C = (0, $.N)(s), b = (0, $.K)(s), [_, R] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      l = () => {
        e === L.Z.isOpen() || (e = L.Z.isOpen()) || R(!1)
      };
    return L.Z.addChangeListener(l), () => L.Z.removeChangeListener(l)
  }, []);
  let A = !Z && p === et.fO.STREAM && y && (!b || N),
    P = function(e) {
      let {
        localMuted: l,
        serverMuted: t,
        serverDeafened: n,
        deafened: i,
        muted: s
      } = e;
      return n ? c.Vm4 : t ? c.v0G : i ? c.wE8 : l ? c.v0G : s ? c.nRN : null
    }({
      localMuted: N,
      serverMuted: E,
      serverDeafened: T,
      deafened: O,
      muted: j
    });
  return (0, n.jsxs)("div", {
    className: r()(ea.overlayContainer, {
      [ea.compact]: b
    }),
    children: [(0, n.jsx)("div", {
      className: r()(ea.overlayTop, {
        [ea.small]: s < 195
      }),
      children: S || u === el.ZUi.AUTO_PROBING ? l ? (0, n.jsx)("div", {
        className: ea.status,
        children: (0, n.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: r()(ea.overlayTitle, ea.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: ea.status,
          children: (0, n.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ea.overlayTitleText,
          children: er.NW.string(er.t.m2Hyj4)
        })]
      }) : null
    }), !C && (0, n.jsxs)("div", {
      className: r()(ea.overlayBottom, {
        [ea.small]: s < 195
      }),
      children: [(0, n.jsxs)(c.Text, {
        className: r()(ea.experimentOverlayTitle, {
          [ea.compact]: b
        }),
        color: "none",
        variant: b ? "text-sm/normal" : "text-md/normal",
        children: [null != P && p === et.fO.USER && (0, n.jsx)(P, {
          className: r()(ea.experimentTitleIcon, {
            [ea.compact]: b
          }),
          size: "xs",
          color: "currentColor"
        }), d ? (0, n.jsx)("div", {
          className: ea.blocked,
          children: (0, n.jsx)(c.t6m, {
            size: "lg",
            className: ea.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, m ? (0, n.jsx)("div", {
          className: ea.ignored,
          children: (0, n.jsx)(c.kZF, {
            size: "lg",
            className: ea.blockedIcon
          })
        }) : null, l ? null : (0, n.jsx)(ep, {
          participantType: p,
          platform: x,
          className: r()(ea.experimentTitleIcon, {
            [ea.compact]: b
          })
        }), null == t || "" === t || l ? null : (0, n.jsx)("span", {
          className: ea.overlayTitleText,
          children: t
        }), h && (0, n.jsx)(c.ua7, {
          text: er.NW.string(er.t.ZEem6O),
          children: e => (0, n.jsx)(c.tQf, ec(eo({}, e), {
            className: ea.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": er.NW.string(er.t.mR9cf3)
          }))
        })]
      }), (0, n.jsxs)("div", {
        className: ea.overlayButtonContainer,
        children: [(0, n.jsx)(ef, {
          onClick: e => {
            e.stopPropagation(), R(!0), g(e, !0, et.A5.THREE_DOT)
          },
          tooltipText: er.NW.string(er.t["+1H47u"]),
          icon: c.xhG,
          hideWhenInactive: !_,
          compact: b
        }), A && (0, n.jsx)(ef, {
          onClick: I,
          tooltipText: N ? er.NW.string(er.t.YqAjX1) : er.NW.string(er.t["w4m94+"]),
          icon: N ? c.OyP : c.gj8,
          hideWhenInactive: !N && !_,
          compact: b
        })]
      })]
    })]
  })
});
ev.displayName = "CallTileOverlayV2";
let ex = i.memo(e => {
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
    localVideoDisabled: h,
    videoToggleState: j,
    focused: O,
    blocked: N,
    ignored: E,
    hideAudioIcon: T,
    participantType: y,
    participantUserId: Z,
    onContextMenu: I,
    onToggleMute: S,
    platform: C,
    application: b,
    secureFramesVerified: _
  } = e, R = null, A = null, P = null, k = (0, $.K)(p), D = (0, $.N)(p), M = (0, a.e7)([w.Z], () => null != Z && w.Z.isLocalVideoAutoDisabled(Z, (0, v.Z)(y)), [Z, y]);
  if (!T) {
    if (i && y === et.fO.STREAM && f && !O) R = (0, n.jsx)(c.ua7, {
      text: er.NW.string(er.t.YqAjX1),
      children: e => {
        var {
          onClick: l
        } = e, t = eu(e, ["onClick"]);
        return (0, n.jsx)(c.P3F, ec(eo({}, t), {
          onClick: e => {
            e.stopPropagation(), null == l || l(), S()
          },
          className: r()(ea.interactive, ea.toggleMute, ea.status),
          children: (0, n.jsx)(c.OyP, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    });
    else if (i || y !== et.fO.STREAM || !f || k || O) {
      let e;
      u ? e = c.Vm4 : s ? e = c.v0G : t ? e = c.wE8 : i ? e = c.v0G : l && (e = c.nRN), R = null != (R = null != e ? (0, n.jsx)(e, {
        color: o.Z.colors.WHITE
      }) : null) ? (0, n.jsx)("div", {
        className: ea.status,
        children: R
      }) : null
    } else R = (0, n.jsx)(c.ua7, {
      text: er.NW.string(er.t["w4m94+"]),
      children: e => {
        var {
          onClick: l
        } = e, t = eu(e, ["onClick"]);
        return (0, n.jsx)(c.P3F, ec(eo({}, t), {
          onClick: e => {
            e.stopPropagation(), null == l || l(), S()
          },
          className: r()(ea.interactive, ea.toggleMute, ea.status),
          children: (0, n.jsx)(c.gj8, {
            size: "md",
            color: "currentColor"
          })
        }))
      }
    })
  }
  x && w.Z.supports(es.AN.VIDEO) || !f ? x && f && h && !M && (A = (0, n.jsx)(c.Amn, {
    size: "md",
    color: "currentColor"
  })) : A = (0, n.jsx)(c.Odl, {
    size: "md",
    color: "currentColor"
  }), y === et.fO.STREAM && !O && f && (P = (0, n.jsx)(c.ua7, {
    text: er.NW.string(er.t["+1H47u"]),
    children: e => {
      var {
        onClick: l
      } = e, t = eu(e, ["onClick"]);
      return (0, n.jsx)(c.P3F, ec(eo({}, t), {
        onClick: e => {
          e.stopPropagation(), null == l || l(), I(e)
        },
        className: r()(ea.status, ea.interactive),
        children: (0, n.jsx)(c.xhG, {
          size: "md",
          color: "currentColor"
        })
      }))
    }
  }));
  let V = y === et.fO.USER && null != b ? (0, n.jsx)(c.ua7, {
    text: er.NW.formatToPlainString(er.t.Sq9xJy, {
      game: b.name
    }),
    children: e => (0, n.jsx)("div", ec(eo({}, e), {
      className: r()(ea.gameIconContainer, {
        [ea.gameIconSmall]: p < 500
      }),
      children: (0, n.jsx)(g.Z, {
        className: ea.gameIcon,
        game: b,
        size: g.Z.Sizes.SMALL
      })
    }))
  }) : null;
  return (0, n.jsxs)("div", {
    className: ea.overlayContainer,
    children: [(0, n.jsx)("div", {
      className: r()(ea.overlayTop, {
        [ea.small]: p < 195
      }),
      children: M || j === el.ZUi.AUTO_PROBING ? d ? (0, n.jsx)("div", {
        className: ea.status,
        children: (0, n.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, n.jsxs)("div", {
        className: r()(ea.overlayTitle, ea.videoDisabledTitle),
        children: [(0, n.jsx)("div", {
          className: ea.status,
          children: (0, n.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ea.overlayTitleText,
          children: er.NW.string(er.t.m2Hyj4)
        })]
      }) : null
    }), (0, n.jsxs)("div", {
      className: r()(ea.overlayBottom, {
        [ea.small]: p < 195
      }),
      children: [D ? (0, n.jsx)("div", {}) : (0, n.jsxs)(c.Text, {
        className: r()(ea.overlayTitle, {
          [ea.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [N ? (0, n.jsx)("div", {
          className: ea.blocked,
          children: (0, n.jsx)(c.t6m, {
            size: "lg",
            className: ea.blockedIcon,
            color: o.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, E ? (0, n.jsx)("div", {
          className: ea.ignored,
          children: (0, n.jsx)(c.kZF, {
            size: "lg",
            className: ea.blockedIcon
          })
        }) : null, (0, n.jsx)(ep, {
          participantType: y,
          platform: C,
          className: ea.titleIcon
        }), null != m && "" !== m ? (0, n.jsx)("span", {
          className: ea.overlayTitleText,
          children: m
        }) : null, _ && (0, n.jsx)(c.ua7, {
          text: er.NW.string(er.t.ZEem6O),
          children: e => (0, n.jsx)(c.tQf, ec(eo({}, e), {
            className: ea.secureFramesIcon,
            size: "xs",
            color: o.Z.colors.HEADER_PRIMARY,
            "aria-label": er.NW.string(er.t.mR9cf3)
          }))
        })]
      }), (0, n.jsxs)("div", {
        className: ea.statusContainer,
        children: [null != A && (0, n.jsx)("div", {
          className: ea.status,
          children: A
        }), R, P, V]
      })]
    })]
  })
});
ex.displayName = "CallTileOverlay";
let eh = E.L,
  eg = em