/** Chunk was on 82510 **/
n.d(t, {
  BP: () => eu,
  ZP: () => ed
}), n(388685);
var r = n(255367),
  l = n(73800),
  i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(692547),
  c = n(481060),
  u = n(846027),
  d = n(410575),
  f = n(607070),
  p = n(812206),
  m = n(835473),
  h = n(414910),
  v = n(415635),
  O = n(578976),
  g = n(649739),
  j = n(37091),
  x = n(6572),
  y = n(352978),
  b = n(936847),
  Z = n(512384),
  S = n(33316),
  I = n(576645),
  C = n(210975),
  E = n(695346),
  w = n(937995),
  T = n(456631),
  N = n(274459),
  _ = n(314897),
  P = n(857192),
  A = n(77498),
  R = n(131951),
  k = n(158776),
  M = n(594174),
  D = n(979651),
  V = n(574254),
  L = n(374129),
  U = n(639351),
  z = n(74538),
  B = n(584729),
  F = n(334374),
  G = n(849171),
  Y = n(607187),
  H = n(833519),
  W = n(462061),
  K = n(623825),
  X = n(839662),
  q = n(981631),
  J = n(354459),
  Q = n(37113),
  $ = n(524484),
  ee = n(65154),
  et = n(388032),
  en = n(519417);

function er(e) {
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

function el(e, t) {
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
let ei = [J.fO.ACTIVITY],
  ea = l.memo(e => {
    var t, n, i, s, V;
    let {
      participant: L,
      onDoubleClick: U,
      onContextMenu: K,
      onClick: ea,
      onMouseDown: eo,
      onKeyDown: es,
      className: eu,
      style: ed,
      containerStyle: ef,
      channel: ep,
      width: em,
      inPopout: eh,
      onVideoResize: ev,
      inCall: eO = !1,
      selected: eg = !1,
      noBorder: ej = !1,
      noVideoRender: ex = !1,
      focused: ey = !1,
      blocked: eb = !1,
      ignored: eZ = !1,
      fit: eS = y.L.CONTAIN,
      paused: eI = !1,
      pulseSpeakingIndicator: eC = !1,
      forceIdle: eE = !1,
      inOverlayPopout: ew = !1
    } = e, eT = l.useContext(w.h9) || eE, [eN, e_] = l.useState(!1), eP = E.Sb.useSetting(), eA = (0, o.e7)([P.default], () => P.default.isStreamInfoOverlayEnabled), [eR, ek] = l.useState(!1), eM = (0, o.e7)([_.default], () => _.default.getId()), eD = (0, o.e7)([M.default], () => M.default.getCurrentUser()), eV = L.type === J.fO.ACTIVITY ? null : null == (t = L.user) ? void 0 : t.id, [eL] = (0, m.Z)(L.type === J.fO.ACTIVITY ? [L.applicationId] : []), eU = (0, o.e7)([j.Z], () => j.Z.getEnabled()), ez = (0, o.e7)([R.Z], () => null != eV && R.Z.isLocalVideoDisabled(eV, (0, h.Z)(L.type)), [eV, L.type]), eB = (0, o.e7)([R.Z], () => null != eV ? R.Z.getVideoToggleState(eV, (0, h.Z)(L.type)) : q.ZUi.NONE, [eV, L.type]), eF = eB === q.ZUi.AUTO_PROBING, {
      speaking: eG,
      ringing: eY,
      hasVideo: eH
    } = (0, X.Z)(L, eM), eW = function(e, t, n) {
      var r, l, i, a;
      let s = t.type !== J.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, o.cj)([D.Z], () => {
          var e, t, r;
          let l = D.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == l ? void 0 : l.mute) && e,
            deafened: null != (t = null == l ? void 0 : l.deaf) && t,
            suppressed: null != (r = null == l ? void 0 : l.suppress) && r,
            voiceChannelId: null == l ? void 0 : l.channelId
          }
        }),
        u = (0, o.cj)([R.Z], () => {
          let n = (0, h.Z)(t.type);
          return e === s ? {
            muted: !1,
            deafened: !1
          } : {
            muted: R.Z.isLocalMute(s, n),
            localVideoDisabled: R.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: R.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (i = t.type === J.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && i,
        deafened: null != (a = t.type === J.fO.USER && (null == (l = t.voiceState) ? void 0 : l.isVoiceDeafened())) && a
      }
    }(eM, L, ep.getGuildId()), eK = L.type === J.fO.STREAM && eV === eM, eX = z.ZP.isPremium(eD);
    l.useEffect(() => {
      if (eK && !eX && null != ep.hdStreamingUntil && new Date(ep.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = R.Z.getGoLiveSource(),
            t = (0, O.s_)(Q.LY.RESOLUTION_720, Q.ws.FPS_30, e);
          u.Z.setGoLiveSource(t)
        }, new Date(ep.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [eK, eX, ep.hdStreamingUntil]);
    let eq = (0, o.e7)([T.Z], () => L.type === J.fO.USER && null != eV ? T.Z.getEffectForUserId(eV) : null),
      eJ = (0, o.e7)([D.Z], () => D.Z.getVoicePlatformForChannel(ep.id, null != eV ? eV : q.lds)),
      {
        showGameIcon: eQ
      } = g.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e$ = (0, o.e7)([k.Z], () => eQ && null != eV ? k.Z.findActivity(eV, e => null != e.application_id && e.type === q.IIU.PLAYING) : null, [eQ, eV]),
      e0 = (0, o.e7)([A.Z], () => (null == e$ ? void 0 : e$.application_id) != null ? A.Z.getDetectableGame(e$.application_id) : null),
      e1 = (0, o.e7)([p.Z], () => null != e0 && (null == e$ ? void 0 : e$.application_id) != null ? p.Z.getApplication(null == e$ ? void 0 : e$.application_id) : void 0),
      e5 = (0, C.wV)({
        userId: eV,
        channelId: ep.id
      }),
      e3 = (0, C.zU)({
        streamKey: L.type === J.fO.STREAM ? L.id : null,
        channelId: ep.id
      }),
      e7 = l.useMemo(() => L.type === J.fO.STREAM ? null != e3 && e3 : L.type === J.fO.USER && null != e5 && e5, [e3, e5, L.type]);
    l.useEffect(() => {
      e_(ey)
    }, [ey]);
    let [e8, e6] = l.useState(!1), e4 = l.useCallback(() => {
      f.Z.useReducedMotion || e6(!0)
    }, []);
    (0, I.J)(ep, e4);
    let e2 = l.useCallback(() => {
        null != eV && u.Z.toggleLocalMute(eV, ee.Yn.STREAM)
      }, [eV]),
      e9 = l.useCallback(e => {
        null == ea || ea(L, e)
      }, [ea, L]),
      te = l.useCallback(e => {
        null == U || U(L, e)
      }, [U, L]),
      tt = l.useCallback((e, t, n) => {
        null == K || K(L, e, t, n)
      }, [K, L]),
      tn = null,
      tr = null,
      tl = "";
    switch (L.type) {
      case J.fO.STREAM:
        tn = (0, r.jsx)(H.Z, {
          participant: L,
          selected: eg,
          width: em,
          fit: eS,
          onVideoResize: ev,
          paused: eI,
          inPopout: eh,
          focused: ey,
          inOverlayPopout: ew
        }), tr = (0, r.jsx)(H._, {
          participant: L,
          selected: eg,
          width: em,
          focused: ey,
          idle: eT,
          premiumIndicator: !1
        }), tl = et.intl.formatToPlainString(et.t.gHPz3d, {
          streamerName: L.user.username
        });
        break;
      case J.fO.USER:
        tn = (0, r.jsx)(W.Z, {
          channel: ep,
          inCall: eO,
          participant: L,
          fit: eS,
          onVideoResize: ev,
          paused: eI,
          selected: eg,
          width: em,
          blocked: eb,
          ignored: eZ,
          noVideoRender: ex || eF,
          pulseSpeakingIndicator: eC,
          inOverlayPopout: ew
        }), tr = (0, r.jsx)(W.T, {
          participant: L,
          channelId: ep.id
        }), tl = et.intl.formatToPlainString(et.t["iC/x/f"], {
          username: L.user.username
        });
        break;
      case J.fO.ACTIVITY:
        tn = (0, r.jsx)(G.ZP, {
          interactible: ey,
          participant: L,
          selected: eg,
          channel: ep,
          width: em
        }), tl = et.intl.formatToPlainString(et.t.YCvOsL, {
          activityName: null == eL ? void 0 : eL.name
        });
        break;
      case J.fO.HIDDEN_STREAM:
        tn = (0, r.jsx)(H.Z, {
          participant: L,
          selected: eg,
          width: em,
          fit: eS,
          onVideoResize: ev,
          paused: eI,
          inPopout: eh,
          focused: ey,
          inOverlayPopout: ew
        })
    }
    let ti = l.useRef(null),
      ta = L.type === J.fO.STREAM ? c.pzj : c.Odl;
    return (0, r.jsx)(d.Z, {
      section: q.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsxs)("div", {
        className: a()(en.wrapper, {
          [en.ringing]: eY
        }, eu),
        style: ef,
        onMouseEnter: () => {
          ek(!0)
        },
        onMouseLeave: () => {
          ek(!1)
        },
        children: [e8 && L.type === J.fO.STREAM && (0, r.jsx)(S.Z, {
          baseTileRef: ti.current,
          cleanup: () => e6(!1)
        }), (0, r.jsxs)(Z.Z, {
          shakeLocation: $.oZ.VOICE_USER,
          isShaking: eG,
          className: en.tile,
          children: [(0, r.jsx)(Y.Z, {
            ref: ti,
            className: a()(en.tile, {
              [en.noBorder]: ej,
              [en.noInteraction]: null == ea,
              [en.idle]: eT
            }),
            noBorder: ej,
            style: ed,
            participantUserId: eV,
            children: (0, r.jsxs)(c.kL8, {
              "aria-label": tl,
              className: en.tileChild,
              onDoubleClick: te,
              onContextMenu: e => tt(e, L.type === J.fO.STREAM),
              onClick: e9,
              onMouseDown: eo,
              onKeyDown: es,
              focusProps: {
                offset: 1
              },
              children: [null != eq && null != eV ? (0, r.jsx)(N.Z, {
                voiceChannelEffect: eq,
                onComplete: () => (0, T.H)(eV),
                userId: eV
              }) : null, L.type === J.fO.USER ? (0, r.jsx)("div", {
                className: en.voiceChannelEffectsContainer,
                children: (0, r.jsx)(v.Z, {
                  userId: eV,
                  channelId: ep.id,
                  guildId: ep.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == ti || null == (n = ti.current) ? void 0 : n.clientWidth) ? s : 0,
                    height: null != (V = null == ti || null == (i = ti.current) ? void 0 : i.clientHeight) ? V : 0
                  }
                })
              }) : null, tn, ej ? null : (0, r.jsx)("div", {
                className: en.indicators,
                children: tr
              }), eg ? (0, r.jsx)("div", {
                className: en.selectedScreen,
                children: (0, r.jsx)(ta, {
                  size: "md",
                  color: "currentColor",
                  className: en.selectedIcon
                })
              }) : null, ei.includes(L.type) ? null : (0, r.jsx)(ec, el(er({
                focused: ey,
                width: em,
                inCall: eO,
                participantType: L.type,
                hasVideo: null != eH && eH
              }, eW), {
                idle: eT,
                platform: eJ,
                title: (0, B.Z)(ep, L),
                blocked: eb,
                ignored: eZ,
                localVideoDisabled: ez,
                videoToggleState: eB,
                hideAudioIcon: eK,
                onContextMenu: tt,
                onToggleMute: e2,
                participantUserId: eV,
                application: e1,
                secureFramesVerified: e7,
                isHovered: eR
              })), L.type === J.fO.USER && eU ? (0, r.jsx)(x.Z, {
                userId: L.id,
                channelId: ep.id
              }) : null, eO && !ej ? (0, r.jsx)("div", {
                className: a()(en.border, {
                  [en.voiceChannelEffect]: !ey && null != eq,
                  [en.speaking]: eG && !ey
                })
              }) : null]
            })
          }), eP && eA && eR && (0, r.jsx)(F.Z, {
            currentUserId: eM,
            participant: L
          }), (0, r.jsx)(b.Z, {
            isFiring: eN,
            callTileRef: ti.current
          })]
        })]
      })
    })
  });

function eo(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === J.fO.STREAM) return n === J.wR.XBOX ? (0, r.jsx)(U.Z, {
    className: l
  }) : (0, r.jsx)(c.pzj, {
    size: "md",
    color: "currentColor",
    className: l
  });
  switch (n) {
    case J.wR.MOBILE:
      return (0, r.jsx)(c.AtH, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    case J.wR.XBOX:
      return (0, r.jsx)(U.Z, {
        className: l
      });
    case J.wR.PLAYSTATION:
      return (0, r.jsx)(L.Z, {
        className: l
      });
    default:
      return null
  }
}

function es(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: l,
    onClick: i,
    compact: o
  } = e;
  return (0, r.jsx)(c.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, s = function(e, t) {
        if (null == e) return {};
        var n, r, l = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
          return l
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
        }
        return l
      }(e, ["onClick"]);
      return (0, r.jsx)(c.zxk, el(er({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), i(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Ttl.CUSTOM,
        size: c.PhG.ICON,
        className: a()(en.overlayButton, {
          [en.hideWhenInactive]: l,
          [en.compact]: o
        }),
        innerClassName: en.overlayButtonInner,
        children: (0, r.jsx)(t, {
          size: o ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
ea.displayName = "CallTile";
let ec = l.memo(e => {
  let {
    idle: t,
    title: n,
    width: i,
    focused: u,
    videoToggleState: d,
    blocked: f,
    ignored: p,
    participantType: m,
    participantUserId: v,
    platform: O,
    secureFramesVerified: g,
    onContextMenu: j,
    muted: x,
    deafened: y,
    localMuted: b,
    serverMuted: Z,
    serverDeafened: S,
    hasVideo: I,
    hideAudioIcon: C,
    onToggleMute: E
  } = e, w = (0, o.e7)([R.Z], () => null != v && R.Z.isLocalVideoAutoDisabled(v, (0, h.Z)(m)), [v, m]), T = (0, K.N)(i), N = (0, K.K)(i), [_, P] = l.useState(!1);
  l.useEffect(() => {
    let e = !1,
      t = () => {
        e !== V.Z.isOpen() && ((e = V.Z.isOpen()) || P(!1))
      };
    return V.Z.addChangeListener(t), () => V.Z.removeChangeListener(t)
  }, []);
  let A = !C && m === J.fO.STREAM && I && (!N || b),
    k = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: l,
        muted: i
      } = e;
      return r ? c.Vm4 : n ? c.v0G : l ? c.wE8 : t ? c.v0G : i ? c.nRN : null
    }({
      localMuted: b,
      serverMuted: Z,
      serverDeafened: S,
      deafened: y,
      muted: x
    });
  return (0, r.jsxs)("div", {
    className: a()(en.overlayContainer, {
      [en.compact]: N
    }),
    children: [(0, r.jsx)("div", {
      className: a()(en.overlayTop, {
        [en.small]: i < 195
      }),
      children: w || d === q.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: en.status,
        children: (0, r.jsx)(c.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: a()(en.overlayTitle, en.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: en.status,
          children: (0, r.jsx)(c.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: en.overlayTitleText,
          children: et.intl.string(et.t.m2Hyj4)
        })]
      }) : null
    }), !T && (0, r.jsxs)("div", {
      className: a()(en.overlayBottom, {
        [en.small]: i < 195
      }),
      children: [(0, r.jsxs)(c.Text, {
        className: a()(en.experimentOverlayTitle, {
          [en.compact]: N
        }),
        color: "none",
        variant: N ? "text-sm/normal" : "text-md/normal",
        children: [null != k && m === J.fO.USER && (0, r.jsx)(k, {
          className: a()(en.experimentTitleIcon, {
            [en.compact]: N
          }),
          size: "xs",
          color: "currentColor"
        }), f ? (0, r.jsx)("div", {
          className: en.blocked,
          children: (0, r.jsx)(c.t6m, {
            size: "lg",
            className: en.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, p ? (0, r.jsx)("div", {
          className: en.ignored,
          children: (0, r.jsx)(c.kZF, {
            size: "lg",
            className: en.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(eo, {
          participantType: m,
          platform: O,
          className: a()(en.experimentTitleIcon, {
            [en.compact]: N
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: en.overlayTitleText,
          children: n
        }), g && (0, r.jsx)(c.ua7, {
          text: et.intl.string(et.t.ZEem6O),
          children: e => (0, r.jsx)(c.tQf, el(er({}, e), {
            className: en.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": et.intl.string(et.t.mR9cf3)
          }))
        })]
      }), !u && (0, r.jsxs)("div", {
        className: en.overlayButtonContainer,
        children: [(0, r.jsx)(es, {
          onClick: e => {
            e.stopPropagation(), P(!0), j(e, !0, J.A5.THREE_DOT)
          },
          tooltipText: et.intl.string(et.t["+1H47u"]),
          icon: c.xhG,
          hideWhenInactive: !_,
          compact: N
        }), A && (0, r.jsx)(es, {
          onClick: E,
          tooltipText: b ? et.intl.string(et.t.YqAjX1) : et.intl.string(et.t["w4m94+"]),
          icon: b ? c.OyP : c.gj8,
          hideWhenInactive: !b && !_,
          compact: N
        })]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let eu = y.L,
  ed = ea