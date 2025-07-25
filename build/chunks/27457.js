/** Chunk was on 47218 **/
n.d(t, {
  BP: () => ei,
  ZP: () => er
}), n(388685);
var l = n(255367),
  i = n(73800),
  r = n(120356),
  o = n.n(r),
  a = n(442837),
  s = n(692547),
  c = n(755721),
  u = n(481060),
  d = n(846027),
  p = n(410575),
  f = n(812206),
  m = n(835473),
  v = n(414910),
  h = n(415635),
  g = n(649739),
  O = n(37091),
  y = n(6572),
  x = n(352978),
  j = n(936847),
  I = n(512384),
  E = n(210975),
  b = n(695346),
  Z = n(937995),
  C = n(456631),
  S = n(274459),
  T = n(314897),
  _ = n(857192),
  A = n(77498),
  N = n(131951),
  R = n(158776),
  w = n(979651),
  V = n(574254),
  M = n(374129),
  P = n(639351),
  k = n(584729),
  D = n(334374),
  U = n(849171),
  L = n(607187),
  z = n(833519),
  G = n(462061),
  B = n(623825),
  Y = n(839662),
  H = n(981631),
  F = n(354459),
  X = n(524484),
  K = n(65154),
  W = n(388032),
  q = n(519417);

function Q(e) {
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

function J(e, t) {
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
let $ = [F.fO.ACTIVITY],
  ee = i.memo(e => {
    var t, n, r, s, c;
    let {
      participant: V,
      onDoubleClick: M,
      onContextMenu: P,
      onClick: B,
      onMouseDown: ee,
      onKeyDown: et,
      className: en,
      style: ei,
      containerStyle: er,
      channel: eo,
      width: ea,
      inPopout: es,
      onVideoResize: ec,
      inCall: eu = !1,
      selected: ed = !1,
      noBorder: ep = !1,
      noVideoRender: ef = !1,
      focused: em = !1,
      blocked: ev = !1,
      ignored: eh = !1,
      fit: eg = x.L.CONTAIN,
      paused: eO = !1,
      pulseSpeakingIndicator: ey = !1,
      forceIdle: ex = !1,
      inOverlayPopout: ej = !1
    } = e, eI = i.useContext(Z.h9) || ex, [eE, eb] = i.useState(!1), eZ = b.Sb.useSetting(), eC = (0, a.e7)([_.default], () => _.default.isStreamInfoOverlayEnabled), [eS, eT] = i.useState(!1), e_ = (0, a.e7)([T.default], () => T.default.getId()), eA = V.type === F.fO.ACTIVITY ? null : null == (t = V.user) ? void 0 : t.id, [eN] = (0, m.Z)(V.type === F.fO.ACTIVITY ? [V.applicationId] : []), eR = (0, a.e7)([O.Z], () => O.Z.getEnabled()), ew = (0, a.e7)([N.Z], () => null != eA && N.Z.isLocalVideoDisabled(eA, (0, v.Z)(V.type)), [eA, V.type]), eV = (0, a.e7)([N.Z], () => null != eA ? N.Z.getVideoToggleState(eA, (0, v.Z)(V.type)) : H.ZUi.NONE, [eA, V.type]), eM = eV === H.ZUi.AUTO_PROBING, {
      speaking: eP,
      ringing: ek,
      hasVideo: eD
    } = (0, Y.Z)(V, e_), eU = function(e, t, n) {
      var l, i, r, o;
      let s = t.type !== F.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([w.Z], () => {
          var e, t, l;
          let i = w.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? void 0 : i.mute) && e,
            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
            suppressed: null != (l = null == i ? void 0 : i.suppress) && l,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, a.cj)([N.Z], () => {
          let n = (0, v.Z)(t.type);
          return e === s ? {
            muted: !1,
            deafened: !1
          } : {
            muted: N.Z.isLocalMute(s, n),
            localVideoDisabled: N.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: N.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (r = t.type === F.fO.USER && (null == (l = t.voiceState) ? void 0 : l.isVoiceMuted())) && r,
        deafened: null != (o = t.type === F.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
      }
    }(e_, V, eo.getGuildId()), eL = V.type === F.fO.STREAM && eA === e_, ez = (0, a.e7)([C.Z], () => V.type === F.fO.USER && null != eA ? C.Z.getEffectForUserId(eA) : null), eG = (0, a.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(eo.id, null != eA ? eA : H.lds)), {
      showGameIcon: eB
    } = g.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: !1
    }), eY = (0, a.e7)([R.Z], () => eB && null != eA ? R.Z.findActivity(eA, e => null != e.application_id && e.type === H.IIU.PLAYING) : null, [eB, eA]), eH = (0, a.e7)([A.Z], () => (null == eY ? void 0 : eY.application_id) != null ? A.Z.getDetectableGame(eY.application_id) : null), eF = (0, a.e7)([f.Z], () => null != eH && (null == eY ? void 0 : eY.application_id) != null ? f.Z.getApplication(null == eY ? void 0 : eY.application_id) : void 0), eX = (0, E.wV)({
      userId: eA,
      channelId: eo.id
    }), eK = (0, E.zU)({
      streamKey: V.type === F.fO.STREAM ? V.id : null,
      channelId: eo.id
    }), eW = i.useMemo(() => V.type === F.fO.STREAM ? null != eK && eK : V.type === F.fO.USER && null != eX && eX, [eK, eX, V.type]);
    i.useEffect(() => {
      eb(em)
    }, [em]);
    let eq = i.useCallback(() => {
        null != eA && d.Z.toggleLocalMute(eA, K.Yn.STREAM)
      }, [eA]),
      eQ = i.useCallback(e => {
        null == B || B(V, e)
      }, [B, V]),
      eJ = i.useCallback(e => {
        null == M || M(V, e)
      }, [M, V]),
      e$ = i.useCallback((e, t, n) => {
        null == P || P(V, e, t, n)
      }, [P, V]),
      e0 = null,
      e1 = null,
      e5 = "";
    switch (V.type) {
      case F.fO.STREAM:
        e0 = (0, l.jsx)(z.Z, {
          participant: V,
          selected: ed,
          width: ea,
          fit: eg,
          onVideoResize: ec,
          paused: eO,
          inPopout: es,
          focused: em,
          inOverlayPopout: ej
        }), e1 = (0, l.jsx)(z._, {
          participant: V,
          selected: ed,
          width: ea,
          focused: em,
          idle: eI,
          premiumIndicator: !1
        }), e5 = W.intl.formatToPlainString(W.t.gHPz3d, {
          streamerName: V.user.username
        });
        break;
      case F.fO.USER:
        e0 = (0, l.jsx)(G.Z, {
          channel: eo,
          inCall: eu,
          participant: V,
          fit: eg,
          onVideoResize: ec,
          paused: eO,
          selected: ed,
          width: ea,
          blocked: ev,
          ignored: eh,
          noVideoRender: ef || eM,
          pulseSpeakingIndicator: ey,
          inOverlayPopout: ej
        }), e1 = (0, l.jsx)(G.T, {
          participant: V,
          channelId: eo.id
        }), e5 = W.intl.formatToPlainString(W.t["iC/x/f"], {
          username: V.user.username
        });
        break;
      case F.fO.ACTIVITY:
        e0 = (0, l.jsx)(U.ZP, {
          interactible: em,
          participant: V,
          selected: ed,
          channel: eo,
          width: ea
        }), e5 = W.intl.formatToPlainString(W.t.YCvOsL, {
          activityName: null == eN ? void 0 : eN.name
        });
        break;
      case F.fO.HIDDEN_STREAM:
        e0 = (0, l.jsx)(z.Z, {
          participant: V,
          selected: ed,
          width: ea,
          fit: eg,
          onVideoResize: ec,
          paused: eO,
          inPopout: es,
          focused: em,
          inOverlayPopout: ej
        })
    }
    let e7 = i.useRef(null),
      e3 = V.type === F.fO.STREAM ? u.pzj : u.Odl;
    return (0, l.jsx)(p.Z, {
      section: H.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: o()(q.wrapper, {
          [q.ringing]: ek
        }, en),
        style: er,
        onMouseEnter: () => {
          eT(!0)
        },
        onMouseLeave: () => {
          eT(!1)
        },
        children: (0, l.jsxs)(I.Z, {
          shakeLocation: X.oZ.VOICE_USER,
          isShaking: eP,
          className: q.tile,
          children: [(0, l.jsx)(L.Z, {
            ref: e7,
            className: o()(q.tile, {
              [q.noBorder]: ep,
              [q.noInteraction]: null == B,
              [q.idle]: eI
            }),
            noBorder: ep,
            style: ei,
            participantUserId: eA,
            children: (0, l.jsxs)(u.kL8, {
              "aria-label": e5,
              className: q.tileChild,
              onDoubleClick: eJ,
              onContextMenu: e => e$(e, V.type === F.fO.STREAM),
              onClick: eQ,
              onMouseDown: ee,
              onKeyDown: et,
              focusProps: {
                offset: 1
              },
              children: [null != ez && null != eA ? (0, l.jsx)(S.Z, {
                voiceChannelEffect: ez,
                onComplete: () => (0, C.H)(eA),
                userId: eA
              }) : null, V.type === F.fO.USER ? (0, l.jsx)("div", {
                className: q.voiceChannelEffectsContainer,
                children: (0, l.jsx)(h.Z, {
                  userId: eA,
                  channelId: eo.id,
                  guildId: eo.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e7 || null == (n = e7.current) ? void 0 : n.clientWidth) ? s : 0,
                    height: null != (c = null == e7 || null == (r = e7.current) ? void 0 : r.clientHeight) ? c : 0
                  }
                })
              }) : null, e0, ep ? null : (0, l.jsx)("div", {
                className: q.indicators,
                children: e1
              }), ed ? (0, l.jsx)("div", {
                className: q.selectedScreen,
                children: (0, l.jsx)(e3, {
                  size: "md",
                  color: "currentColor",
                  className: q.selectedIcon
                })
              }) : null, $.includes(V.type) ? null : (0, l.jsx)(el, J(Q({
                focused: em,
                width: ea,
                inCall: eu,
                participantType: V.type,
                hasVideo: null != eD && eD
              }, eU), {
                idle: eI,
                platform: eG,
                title: (0, k.Z)(eo, V),
                blocked: ev,
                ignored: eh,
                localVideoDisabled: ew,
                videoToggleState: eV,
                hideAudioIcon: eL,
                onContextMenu: e$,
                onToggleMute: eq,
                participantUserId: eA,
                application: eF,
                secureFramesVerified: eW,
                isHovered: eS
              })), V.type === F.fO.USER && eR ? (0, l.jsx)(y.Z, {
                userId: V.id,
                channelId: eo.id
              }) : null, eu && !ep ? (0, l.jsx)("div", {
                className: o()(q.border, {
                  [q.voiceChannelEffect]: !em && null != ez,
                  [q.speaking]: eP && !em
                })
              }) : null]
            })
          }), eZ && eC && eS && (0, l.jsx)(D.Z, {
            currentUserId: e_,
            participant: V
          }), (0, l.jsx)(j.Z, {
            isFiring: eE,
            callTileRef: e7.current
          })]
        })
      })
    })
  });

function et(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === F.fO.STREAM) return n === F.wR.XBOX ? (0, l.jsx)(P.Z, {
    className: i
  }) : (0, l.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case F.wR.MOBILE:
      return (0, l.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case F.wR.XBOX:
      return (0, l.jsx)(P.Z, {
        className: i
      });
    case F.wR.PLAYSTATION:
      return (0, l.jsx)(M.Z, {
        className: i
      });
    default:
      return null
  }
}

function en(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: r,
    compact: a
  } = e;
  return (0, l.jsx)(u.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, s = function(e, t) {
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
      return (0, l.jsx)(c.zx, J(Q({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), r(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Tt.CUSTOM,
        size: c.Ph.ICON,
        className: o()(q.overlayButton, {
          [q.hideWhenInactive]: i,
          [q.compact]: a
        }),
        innerClassName: q.overlayButtonInner,
        children: (0, l.jsx)(t, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
ee.displayName = "CallTile";
let el = i.memo(e => {
  let {
    idle: t,
    title: n,
    width: r,
    focused: c,
    videoToggleState: d,
    blocked: p,
    ignored: f,
    participantType: m,
    participantUserId: h,
    platform: g,
    secureFramesVerified: O,
    onContextMenu: y,
    muted: x,
    deafened: j,
    localMuted: I,
    serverMuted: E,
    serverDeafened: b,
    hasVideo: Z,
    hideAudioIcon: C,
    onToggleMute: S
  } = e, T = (0, a.e7)([N.Z], () => null != h && N.Z.isLocalVideoAutoDisabled(h, (0, v.Z)(m)), [h, m]), _ = (0, B.N)(r), A = (0, B.K)(r), [R, w] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      t = () => {
        e !== V.Z.isOpen() && ((e = V.Z.isOpen()) || w(!1))
      };
    return V.Z.addChangeListener(t), () => V.Z.removeChangeListener(t)
  }, []);
  let M = !C && m === F.fO.STREAM && Z && (!A || I),
    P = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: l,
        deafened: i,
        muted: r
      } = e;
      return l ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : r ? u.nRN : null
    }({
      localMuted: I,
      serverMuted: E,
      serverDeafened: b,
      deafened: j,
      muted: x
    });
  return (0, l.jsxs)("div", {
    className: o()(q.overlayContainer, {
      [q.compact]: A
    }),
    children: [(0, l.jsx)("div", {
      className: o()(q.overlayTop, {
        [q.small]: r < 195
      }),
      children: T || d === H.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: q.status,
        children: (0, l.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: o()(q.overlayTitle, q.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: q.status,
          children: (0, l.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: q.overlayTitleText,
          children: W.intl.string(W.t.m2Hyj4)
        })]
      }) : null
    }), !_ && (0, l.jsxs)("div", {
      className: o()(q.overlayBottom, {
        [q.small]: r < 195
      }),
      children: [(0, l.jsxs)(u.Text, {
        className: o()(q.experimentOverlayTitle, {
          [q.compact]: A
        }),
        color: "none",
        variant: A ? "text-sm/normal" : "text-md/normal",
        children: [null != P && m === F.fO.USER && (0, l.jsx)(P, {
          className: o()(q.experimentTitleIcon, {
            [q.compact]: A
          }),
          size: "xs",
          color: "currentColor"
        }), p ? (0, l.jsx)("div", {
          className: q.blocked,
          children: (0, l.jsx)(u.t6m, {
            size: "lg",
            className: q.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, f ? (0, l.jsx)("div", {
          className: q.ignored,
          children: (0, l.jsx)(u.kZF, {
            size: "lg",
            className: q.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(et, {
          participantType: m,
          platform: g,
          className: o()(q.experimentTitleIcon, {
            [q.compact]: A
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: q.overlayTitleText,
          children: n
        }), O && (0, l.jsx)(u.ua7, {
          text: W.intl.string(W.t.ZEem6O),
          children: e => (0, l.jsx)(u.tQf, J(Q({}, e), {
            className: q.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": W.intl.string(W.t.mR9cf3)
          }))
        })]
      }), !c && (0, l.jsxs)("div", {
        className: q.overlayButtonContainer,
        children: [(0, l.jsx)(en, {
          onClick: e => {
            e.stopPropagation(), w(!0), y(e, !0, F.A5.THREE_DOT)
          },
          tooltipText: W.intl.string(W.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !R,
          compact: A
        }), M && (0, l.jsx)(en, {
          onClick: S,
          tooltipText: I ? W.intl.string(W.t.YqAjX1) : W.intl.string(W.t["w4m94+"]),
          icon: I ? u.OyP : u.gj8,
          hideWhenInactive: !I && !R,
          compact: A
        })]
      })]
    })]
  })
});
el.displayName = "CallTileOverlay";
let ei = x.L,
  er = ee