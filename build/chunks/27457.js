/** Chunk was on 82510 **/
n.d(t, {
  BP: () => ed,
  ZP: () => ef
}), n(388685);
var r = n(255367),
  l = n(73800),
  i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(692547),
  c = n(755721),
  u = n(481060),
  d = n(846027),
  f = n(410575),
  p = n(607070),
  m = n(812206),
  h = n(835473),
  v = n(414910),
  O = n(415635),
  g = n(578976),
  j = n(649739),
  x = n(37091),
  y = n(6572),
  b = n(352978),
  Z = n(936847),
  S = n(512384),
  I = n(33316),
  C = n(576645),
  E = n(210975),
  w = n(695346),
  T = n(937995),
  N = n(456631),
  _ = n(274459),
  P = n(314897),
  A = n(857192),
  R = n(77498),
  M = n(131951),
  k = n(158776),
  D = n(594174),
  V = n(979651),
  L = n(574254),
  U = n(374129),
  z = n(639351),
  B = n(74538),
  F = n(584729),
  G = n(334374),
  Y = n(849171),
  H = n(607187),
  W = n(833519),
  K = n(462061),
  X = n(623825),
  q = n(839662),
  J = n(981631),
  Q = n(354459),
  $ = n(37113),
  ee = n(524484),
  et = n(65154),
  en = n(388032),
  er = n(519417);

function el(e) {
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

function ei(e, t) {
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
let ea = [Q.fO.ACTIVITY],
  eo = l.memo(e => {
    var t, n, i, s, c;
    let {
      participant: L,
      onDoubleClick: U,
      onContextMenu: z,
      onClick: X,
      onMouseDown: eo,
      onKeyDown: es,
      className: ec,
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
      fit: eS = b.L.CONTAIN,
      paused: eI = !1,
      pulseSpeakingIndicator: eC = !1,
      forceIdle: eE = !1,
      inOverlayPopout: ew = !1
    } = e, eT = l.useContext(T.h9) || eE, [eN, e_] = l.useState(!1), eP = w.Sb.useSetting(), eA = (0, o.e7)([A.default], () => A.default.isStreamInfoOverlayEnabled), [eR, eM] = l.useState(!1), ek = (0, o.e7)([P.default], () => P.default.getId()), eD = (0, o.e7)([D.default], () => D.default.getCurrentUser()), eV = L.type === Q.fO.ACTIVITY ? null : null == (t = L.user) ? void 0 : t.id, [eL] = (0, h.Z)(L.type === Q.fO.ACTIVITY ? [L.applicationId] : []), eU = (0, o.e7)([x.Z], () => x.Z.getEnabled()), ez = (0, o.e7)([M.Z], () => null != eV && M.Z.isLocalVideoDisabled(eV, (0, v.Z)(L.type)), [eV, L.type]), eB = (0, o.e7)([M.Z], () => null != eV ? M.Z.getVideoToggleState(eV, (0, v.Z)(L.type)) : J.ZUi.NONE, [eV, L.type]), eF = eB === J.ZUi.AUTO_PROBING, {
      speaking: eG,
      ringing: eY,
      hasVideo: eH
    } = (0, q.Z)(L, ek), eW = function(e, t, n) {
      var r, l, i, a;
      let s = t.type !== Q.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, o.cj)([V.Z], () => {
          var e, t, r;
          let l = V.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == l ? void 0 : l.mute) && e,
            deafened: null != (t = null == l ? void 0 : l.deaf) && t,
            suppressed: null != (r = null == l ? void 0 : l.suppress) && r,
            voiceChannelId: null == l ? void 0 : l.channelId
          }
        }),
        u = (0, o.cj)([M.Z], () => {
          let n = (0, v.Z)(t.type);
          return e === s ? {
            muted: !1,
            deafened: !1
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
        muted: null != (i = t.type === Q.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && i,
        deafened: null != (a = t.type === Q.fO.USER && (null == (l = t.voiceState) ? void 0 : l.isVoiceDeafened())) && a
      }
    }(ek, L, ep.getGuildId()), eK = L.type === Q.fO.STREAM && eV === ek, eX = B.ZP.isPremium(eD);
    l.useEffect(() => {
      if (eK && !eX && null != ep.hdStreamingUntil && new Date(ep.hdStreamingUntil) > new Date) {
        let e = setTimeout(() => {
          let e = M.Z.getGoLiveSource(),
            t = (0, g.s_)($.LY.RESOLUTION_720, $.ws.FPS_30, e);
          d.Z.setGoLiveSource(t)
        }, new Date(ep.hdStreamingUntil).getTime() - Date.now());
        return () => clearTimeout(e)
      }
    }, [eK, eX, ep.hdStreamingUntil]);
    let eq = (0, o.e7)([N.Z], () => L.type === Q.fO.USER && null != eV ? N.Z.getEffectForUserId(eV) : null),
      eJ = (0, o.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(ep.id, null != eV ? eV : J.lds)),
      {
        showGameIcon: eQ
      } = j.ZP.useExperiment({
        location: "voice_users"
      }, {
        autoTrackExposure: !1
      }),
      e$ = (0, o.e7)([k.Z], () => eQ && null != eV ? k.Z.findActivity(eV, e => null != e.application_id && e.type === J.IIU.PLAYING) : null, [eQ, eV]),
      e0 = (0, o.e7)([R.Z], () => (null == e$ ? void 0 : e$.application_id) != null ? R.Z.getDetectableGame(e$.application_id) : null),
      e1 = (0, o.e7)([m.Z], () => null != e0 && (null == e$ ? void 0 : e$.application_id) != null ? m.Z.getApplication(null == e$ ? void 0 : e$.application_id) : void 0),
      e5 = (0, E.wV)({
        userId: eV,
        channelId: ep.id
      }),
      e3 = (0, E.zU)({
        streamKey: L.type === Q.fO.STREAM ? L.id : null,
        channelId: ep.id
      }),
      e7 = l.useMemo(() => L.type === Q.fO.STREAM ? null != e3 && e3 : L.type === Q.fO.USER && null != e5 && e5, [e3, e5, L.type]);
    l.useEffect(() => {
      e_(ey)
    }, [ey]);
    let [e8, e6] = l.useState(!1), e4 = l.useCallback(() => {
      p.Z.useReducedMotion || e6(!0)
    }, []);
    (0, C.J)(ep, e4);
    let e2 = l.useCallback(() => {
        null != eV && d.Z.toggleLocalMute(eV, et.Yn.STREAM)
      }, [eV]),
      e9 = l.useCallback(e => {
        null == X || X(L, e)
      }, [X, L]),
      te = l.useCallback(e => {
        null == U || U(L, e)
      }, [U, L]),
      tt = l.useCallback((e, t, n) => {
        null == z || z(L, e, t, n)
      }, [z, L]),
      tn = null,
      tr = null,
      tl = "";
    switch (L.type) {
      case Q.fO.STREAM:
        tn = (0, r.jsx)(W.Z, {
          participant: L,
          selected: eg,
          width: em,
          fit: eS,
          onVideoResize: ev,
          paused: eI,
          inPopout: eh,
          focused: ey,
          inOverlayPopout: ew
        }), tr = (0, r.jsx)(W._, {
          participant: L,
          selected: eg,
          width: em,
          focused: ey,
          idle: eT,
          premiumIndicator: !1
        }), tl = en.intl.formatToPlainString(en.t.gHPz3d, {
          streamerName: L.user.username
        });
        break;
      case Q.fO.USER:
        tn = (0, r.jsx)(K.Z, {
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
        }), tr = (0, r.jsx)(K.T, {
          participant: L,
          channelId: ep.id
        }), tl = en.intl.formatToPlainString(en.t["iC/x/f"], {
          username: L.user.username
        });
        break;
      case Q.fO.ACTIVITY:
        tn = (0, r.jsx)(Y.ZP, {
          interactible: ey,
          participant: L,
          selected: eg,
          channel: ep,
          width: em
        }), tl = en.intl.formatToPlainString(en.t.YCvOsL, {
          activityName: null == eL ? void 0 : eL.name
        });
        break;
      case Q.fO.HIDDEN_STREAM:
        tn = (0, r.jsx)(W.Z, {
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
      ta = L.type === Q.fO.STREAM ? u.pzj : u.Odl;
    return (0, r.jsx)(f.Z, {
      section: J.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsxs)("div", {
        className: a()(er.wrapper, {
          [er.ringing]: eY
        }, ec),
        style: ef,
        onMouseEnter: () => {
          eM(!0)
        },
        onMouseLeave: () => {
          eM(!1)
        },
        children: [e8 && L.type === Q.fO.STREAM && (0, r.jsx)(I.Z, {
          baseTileRef: ti.current,
          cleanup: () => e6(!1)
        }), (0, r.jsxs)(S.Z, {
          shakeLocation: ee.oZ.VOICE_USER,
          isShaking: eG,
          className: er.tile,
          children: [(0, r.jsx)(H.Z, {
            ref: ti,
            className: a()(er.tile, {
              [er.noBorder]: ej,
              [er.noInteraction]: null == X,
              [er.idle]: eT
            }),
            noBorder: ej,
            style: ed,
            participantUserId: eV,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": tl,
              className: er.tileChild,
              onDoubleClick: te,
              onContextMenu: e => tt(e, L.type === Q.fO.STREAM),
              onClick: e9,
              onMouseDown: eo,
              onKeyDown: es,
              focusProps: {
                offset: 1
              },
              children: [null != eq && null != eV ? (0, r.jsx)(_.Z, {
                voiceChannelEffect: eq,
                onComplete: () => (0, N.H)(eV),
                userId: eV
              }) : null, L.type === Q.fO.USER ? (0, r.jsx)("div", {
                className: er.voiceChannelEffectsContainer,
                children: (0, r.jsx)(O.Z, {
                  userId: eV,
                  channelId: ep.id,
                  guildId: ep.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == ti || null == (n = ti.current) ? void 0 : n.clientWidth) ? s : 0,
                    height: null != (c = null == ti || null == (i = ti.current) ? void 0 : i.clientHeight) ? c : 0
                  }
                })
              }) : null, tn, ej ? null : (0, r.jsx)("div", {
                className: er.indicators,
                children: tr
              }), eg ? (0, r.jsx)("div", {
                className: er.selectedScreen,
                children: (0, r.jsx)(ta, {
                  size: "md",
                  color: "currentColor",
                  className: er.selectedIcon
                })
              }) : null, ea.includes(L.type) ? null : (0, r.jsx)(eu, ei(el({
                focused: ey,
                width: em,
                inCall: eO,
                participantType: L.type,
                hasVideo: null != eH && eH
              }, eW), {
                idle: eT,
                platform: eJ,
                title: (0, F.Z)(ep, L),
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
              })), L.type === Q.fO.USER && eU ? (0, r.jsx)(y.Z, {
                userId: L.id,
                channelId: ep.id
              }) : null, eO && !ej ? (0, r.jsx)("div", {
                className: a()(er.border, {
                  [er.voiceChannelEffect]: !ey && null != eq,
                  [er.speaking]: eG && !ey
                })
              }) : null]
            })
          }), eP && eA && eR && (0, r.jsx)(G.Z, {
            currentUserId: ek,
            participant: L
          }), (0, r.jsx)(Z.Z, {
            isFiring: eN,
            callTileRef: ti.current
          })]
        })]
      })
    })
  });

function es(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === Q.fO.STREAM) return n === Q.wR.XBOX ? (0, r.jsx)(z.Z, {
    className: l
  }) : (0, r.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: l
  });
  switch (n) {
    case Q.wR.MOBILE:
      return (0, r.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: l
      });
    case Q.wR.XBOX:
      return (0, r.jsx)(z.Z, {
        className: l
      });
    case Q.wR.PLAYSTATION:
      return (0, r.jsx)(U.Z, {
        className: l
      });
    default:
      return null
  }
}

function ec(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: l,
    onClick: i,
    compact: o
  } = e;
  return (0, r.jsx)(u.ua7, {
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
      return (0, r.jsx)(c.zx, ei(el({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), i(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Tt.CUSTOM,
        size: c.Ph.ICON,
        className: a()(er.overlayButton, {
          [er.hideWhenInactive]: l,
          [er.compact]: o
        }),
        innerClassName: er.overlayButtonInner,
        children: (0, r.jsx)(t, {
          size: o ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
eo.displayName = "CallTile";
let eu = l.memo(e => {
  let {
    idle: t,
    title: n,
    width: i,
    focused: c,
    videoToggleState: d,
    blocked: f,
    ignored: p,
    participantType: m,
    participantUserId: h,
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
  } = e, w = (0, o.e7)([M.Z], () => null != h && M.Z.isLocalVideoAutoDisabled(h, (0, v.Z)(m)), [h, m]), T = (0, X.N)(i), N = (0, X.K)(i), [_, P] = l.useState(!1);
  l.useEffect(() => {
    let e = !1,
      t = () => {
        e !== L.Z.isOpen() && ((e = L.Z.isOpen()) || P(!1))
      };
    return L.Z.addChangeListener(t), () => L.Z.removeChangeListener(t)
  }, []);
  let A = !C && m === Q.fO.STREAM && I && (!N || b),
    R = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: l,
        muted: i
      } = e;
      return r ? u.Vm4 : n ? u.v0G : l ? u.wE8 : t ? u.v0G : i ? u.nRN : null
    }({
      localMuted: b,
      serverMuted: Z,
      serverDeafened: S,
      deafened: y,
      muted: x
    });
  return (0, r.jsxs)("div", {
    className: a()(er.overlayContainer, {
      [er.compact]: N
    }),
    children: [(0, r.jsx)("div", {
      className: a()(er.overlayTop, {
        [er.small]: i < 195
      }),
      children: w || d === J.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
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
          children: en.intl.string(en.t.m2Hyj4)
        })]
      }) : null
    }), !T && (0, r.jsxs)("div", {
      className: a()(er.overlayBottom, {
        [er.small]: i < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: a()(er.experimentOverlayTitle, {
          [er.compact]: N
        }),
        color: "none",
        variant: N ? "text-sm/normal" : "text-md/normal",
        children: [null != R && m === Q.fO.USER && (0, r.jsx)(R, {
          className: a()(er.experimentTitleIcon, {
            [er.compact]: N
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
        }) : null, p ? (0, r.jsx)("div", {
          className: er.ignored,
          children: (0, r.jsx)(u.kZF, {
            size: "lg",
            className: er.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(es, {
          participantType: m,
          platform: O,
          className: a()(er.experimentTitleIcon, {
            [er.compact]: N
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: er.overlayTitleText,
          children: n
        }), g && (0, r.jsx)(u.ua7, {
          text: en.intl.string(en.t.ZEem6O),
          children: e => (0, r.jsx)(u.tQf, ei(el({}, e), {
            className: er.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": en.intl.string(en.t.mR9cf3)
          }))
        })]
      }), !c && (0, r.jsxs)("div", {
        className: er.overlayButtonContainer,
        children: [(0, r.jsx)(ec, {
          onClick: e => {
            e.stopPropagation(), P(!0), j(e, !0, Q.A5.THREE_DOT)
          },
          tooltipText: en.intl.string(en.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !_,
          compact: N
        }), A && (0, r.jsx)(ec, {
          onClick: E,
          tooltipText: b ? en.intl.string(en.t.YqAjX1) : en.intl.string(en.t["w4m94+"]),
          icon: b ? u.OyP : u.gj8,
          hideWhenInactive: !b && !_,
          compact: N
        })]
      })]
    })]
  })
});
eu.displayName = "CallTileOverlay";
let ed = b.L,
  ef = eo