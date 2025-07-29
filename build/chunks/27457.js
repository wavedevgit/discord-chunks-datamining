/** Chunk was on 47218 **/
n.d(t, {
  BP: () => er,
  ZP: () => eo
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
  Z = n(210975),
  E = n(763296),
  b = n(695346),
  S = n(937995),
  C = n(456631),
  T = n(274459),
  _ = n(314897),
  A = n(857192),
  N = n(77498),
  R = n(131951),
  w = n(158776),
  V = n(979651),
  P = n(574254),
  M = n(374129),
  k = n(639351),
  D = n(584729),
  U = n(334374),
  L = n(849171),
  z = n(607187),
  G = n(833519),
  B = n(462061),
  Y = n(623825),
  H = n(839662),
  F = n(981631),
  X = n(354459),
  K = n(524484),
  W = n(65154),
  q = n(388032),
  Q = n(519417);

function J(e) {
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

function $(e, t) {
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
let ee = [X.fO.ACTIVITY],
  et = i.memo(e => {
    var t, n, r, s, c;
    let {
      participant: P,
      onDoubleClick: M,
      onContextMenu: k,
      onClick: Y,
      onMouseDown: et,
      onKeyDown: en,
      className: el,
      style: er,
      containerStyle: eo,
      channel: ea,
      width: es,
      inPopout: ec,
      onVideoResize: eu,
      inCall: ed = !1,
      selected: ep = !1,
      noBorder: ef = !1,
      noVideoRender: em = !1,
      focused: ev = !1,
      blocked: eh = !1,
      ignored: eg = !1,
      fit: eO = x.L.CONTAIN,
      paused: ey = !1,
      pulseSpeakingIndicator: ex = !1,
      forceIdle: ej = !1,
      inOverlayPopout: eI = !1
    } = e, eZ = i.useContext(S.h9) || ej, [eE, eb] = i.useState(!1), eS = b.Sb.useSetting(), eC = (0, a.e7)([A.default], () => A.default.isStreamInfoOverlayEnabled), [eT, e_] = i.useState(!1), eA = (0, a.e7)([_.default], () => _.default.getId()), eN = P.type === X.fO.ACTIVITY ? null : null == (t = P.user) ? void 0 : t.id, [eR] = (0, m.Z)(P.type === X.fO.ACTIVITY ? [P.applicationId] : []), ew = (0, a.e7)([O.Z], () => O.Z.getEnabled()), eV = (0, a.e7)([R.Z], () => null != eN && R.Z.isLocalVideoDisabled(eN, (0, v.Z)(P.type)), [eN, P.type]), eP = (0, a.e7)([R.Z], () => null != eN ? R.Z.getVideoToggleState(eN, (0, v.Z)(P.type)) : F.ZUi.NONE, [eN, P.type]), eM = eP === F.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: eD,
      hasVideo: eU
    } = (0, H.Z)(P, eA), eL = (0, a.e7)([E.Z], () => null !== eN && E.Z.isUserPlayingSounds(eN), [eN]), ez = function(e, t, n) {
      var l, i, r, o;
      let s = t.type !== X.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([V.Z], () => {
          var e, t, l;
          let i = V.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? void 0 : i.mute) && e,
            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
            suppressed: null != (l = null == i ? void 0 : i.suppress) && l,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, a.cj)([R.Z], () => {
          let n = (0, v.Z)(t.type);
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
        muted: null != (r = t.type === X.fO.USER && (null == (l = t.voiceState) ? void 0 : l.isVoiceMuted())) && r,
        deafened: null != (o = t.type === X.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
      }
    }(eA, P, ea.getGuildId()), eG = P.type === X.fO.STREAM && eN === eA, eB = (0, a.e7)([C.Z], () => P.type === X.fO.USER && null != eN ? C.Z.getEffectForUserId(eN) : null), eY = (0, a.e7)([V.Z], () => V.Z.getVoicePlatformForChannel(ea.id, null != eN ? eN : F.lds)), {
      showGameIcon: eH
    } = g.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: !1
    }), eF = (0, a.e7)([w.Z], () => eH && null != eN ? w.Z.findActivity(eN, e => null != e.application_id && e.type === F.IIU.PLAYING) : null, [eH, eN]), eX = (0, a.e7)([N.Z], () => (null == eF ? void 0 : eF.application_id) != null ? N.Z.getDetectableGame(eF.application_id) : null), eK = (0, a.e7)([f.Z], () => null != eX && (null == eF ? void 0 : eF.application_id) != null ? f.Z.getApplication(null == eF ? void 0 : eF.application_id) : void 0), eW = (0, Z.wV)({
      userId: eN,
      channelId: ea.id
    }), eq = (0, Z.zU)({
      streamKey: P.type === X.fO.STREAM ? P.id : null,
      channelId: ea.id
    }), eQ = i.useMemo(() => P.type === X.fO.STREAM ? null != eq && eq : P.type === X.fO.USER && null != eW && eW, [eq, eW, P.type]);
    i.useEffect(() => {
      eb(ev)
    }, [ev]);
    let eJ = i.useCallback(() => {
        null != eN && d.Z.toggleLocalMute(eN, W.Yn.STREAM)
      }, [eN]),
      e$ = i.useCallback(e => {
        null == Y || Y(P, e)
      }, [Y, P]),
      e0 = i.useCallback(e => {
        null == M || M(P, e)
      }, [M, P]),
      e1 = i.useCallback((e, t, n) => {
        null == k || k(P, e, t, n)
      }, [k, P]),
      e7 = null,
      e5 = null,
      e3 = "";
    switch (P.type) {
      case X.fO.STREAM:
        e7 = (0, l.jsx)(G.Z, {
          participant: P,
          selected: ep,
          width: es,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: eI
        }), e5 = (0, l.jsx)(G._, {
          participant: P,
          selected: ep,
          width: es,
          focused: ev,
          idle: eZ,
          premiumIndicator: !1
        }), e3 = q.intl.formatToPlainString(q.t.gHPz3d, {
          streamerName: P.user.username
        });
        break;
      case X.fO.USER:
        e7 = (0, l.jsx)(B.Z, {
          channel: ea,
          inCall: ed,
          participant: P,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          selected: ep,
          width: es,
          blocked: eh,
          ignored: eg,
          noVideoRender: em || eM,
          pulseSpeakingIndicator: ex,
          inOverlayPopout: eI
        }), e5 = (0, l.jsx)(B.T, {
          participant: P,
          channelId: ea.id
        }), e3 = q.intl.formatToPlainString(q.t["iC/x/f"], {
          username: P.user.username
        });
        break;
      case X.fO.ACTIVITY:
        e7 = (0, l.jsx)(L.ZP, {
          interactible: ev,
          participant: P,
          selected: ep,
          channel: ea,
          width: es
        }), e3 = q.intl.formatToPlainString(q.t.YCvOsL, {
          activityName: null == eR ? void 0 : eR.name
        });
        break;
      case X.fO.HIDDEN_STREAM:
        e7 = (0, l.jsx)(G.Z, {
          participant: P,
          selected: ep,
          width: es,
          fit: eO,
          onVideoResize: eu,
          paused: ey,
          inPopout: ec,
          focused: ev,
          inOverlayPopout: eI
        })
    }
    let e8 = i.useRef(null),
      e4 = P.type === X.fO.STREAM ? u.pzj : u.Odl;
    return (0, l.jsx)(p.Z, {
      section: F.jXE.VOICE_CHANNEL_TILE,
      children: (0, l.jsx)("div", {
        className: o()(Q.wrapper, {
          [Q.ringing]: eD
        }, el),
        style: eo,
        onMouseEnter: () => {
          e_(!0)
        },
        onMouseLeave: () => {
          e_(!1)
        },
        children: (0, l.jsxs)(I.Z, {
          shakeLocation: K.oZ.VOICE_USER,
          isShaking: ek,
          className: Q.tile,
          children: [(0, l.jsx)(z.Z, {
            ref: e8,
            className: o()(Q.tile, {
              [Q.noBorder]: ef,
              [Q.noInteraction]: null == Y,
              [Q.idle]: eZ
            }),
            noBorder: ef,
            style: er,
            participantUserId: eN,
            children: (0, l.jsxs)(u.kL8, {
              "aria-label": e3,
              className: Q.tileChild,
              onDoubleClick: e0,
              onContextMenu: e => e1(e, P.type === X.fO.STREAM),
              onClick: e$,
              onMouseDown: et,
              onKeyDown: en,
              focusProps: {
                offset: 1
              },
              children: [null != eB && null != eN ? (0, l.jsx)(T.Z, {
                voiceChannelEffect: eB,
                onComplete: () => (0, C.H)(eN),
                userId: eN
              }) : null, P.type === X.fO.USER ? (0, l.jsx)("div", {
                className: Q.voiceChannelEffectsContainer,
                children: (0, l.jsx)(h.Z, {
                  userId: eN,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e8 || null == (n = e8.current) ? void 0 : n.clientWidth) ? s : 0,
                    height: null != (c = null == e8 || null == (r = e8.current) ? void 0 : r.clientHeight) ? c : 0
                  }
                })
              }) : null, e7, ef ? null : (0, l.jsx)("div", {
                className: Q.indicators,
                children: e5
              }), ep ? (0, l.jsx)("div", {
                className: Q.selectedScreen,
                children: (0, l.jsx)(e4, {
                  size: "md",
                  color: "currentColor",
                  className: Q.selectedIcon
                })
              }) : null, ee.includes(P.type) ? null : (0, l.jsx)(ei, $(J({
                focused: ev,
                width: es,
                inCall: ed,
                participantType: P.type,
                hasVideo: null != eU && eU
              }, ez), {
                idle: eZ,
                platform: eY,
                title: (0, D.Z)(ea, P),
                blocked: eh,
                ignored: eg,
                localVideoDisabled: eV,
                videoToggleState: eP,
                hideAudioIcon: eG,
                onContextMenu: e1,
                onToggleMute: eJ,
                participantUserId: eN,
                application: eK,
                secureFramesVerified: eQ,
                isHovered: eT
              })), P.type === X.fO.USER && ew ? (0, l.jsx)(y.Z, {
                userId: P.id,
                channelId: ea.id
              }) : null, ed && !ef ? (0, l.jsx)("div", {
                className: o()(Q.border, {
                  [Q.voiceChannelEffect]: !ev && (eL || null != eB),
                  [Q.speaking]: ek && !ev && !eL
                })
              }) : null]
            })
          }), eS && eC && eT && (0, l.jsx)(U.Z, {
            currentUserId: eA,
            participant: P
          }), (0, l.jsx)(j.Z, {
            isFiring: eE,
            callTileRef: e8.current
          })]
        })
      })
    })
  });

function en(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === X.fO.STREAM) return n === X.wR.XBOX ? (0, l.jsx)(k.Z, {
    className: i
  }) : (0, l.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case X.wR.MOBILE:
      return (0, l.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case X.wR.XBOX:
      return (0, l.jsx)(k.Z, {
        className: i
      });
    case X.wR.PLAYSTATION:
      return (0, l.jsx)(M.Z, {
        className: i
      });
    default:
      return null
  }
}

function el(e) {
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
      return (0, l.jsx)(c.zx, $(J({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), r(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Tt.CUSTOM,
        size: c.Ph.ICON,
        className: o()(Q.overlayButton, {
          [Q.hideWhenInactive]: i,
          [Q.compact]: a
        }),
        innerClassName: Q.overlayButtonInner,
        children: (0, l.jsx)(t, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
et.displayName = "CallTile";
let ei = i.memo(e => {
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
    serverMuted: Z,
    serverDeafened: E,
    hasVideo: b,
    hideAudioIcon: S,
    onToggleMute: C
  } = e, T = (0, a.e7)([R.Z], () => null != h && R.Z.isLocalVideoAutoDisabled(h, (0, v.Z)(m)), [h, m]), _ = (0, Y.N)(r), A = (0, Y.K)(r), [N, w] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      t = () => {
        e !== P.Z.isOpen() && ((e = P.Z.isOpen()) || w(!1))
      };
    return P.Z.addChangeListener(t), () => P.Z.removeChangeListener(t)
  }, []);
  let V = !S && m === X.fO.STREAM && b && (!A || I),
    M = function(e) {
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
      serverMuted: Z,
      serverDeafened: E,
      deafened: j,
      muted: x
    });
  return (0, l.jsxs)("div", {
    className: o()(Q.overlayContainer, {
      [Q.compact]: A
    }),
    children: [(0, l.jsx)("div", {
      className: o()(Q.overlayTop, {
        [Q.small]: r < 195
      }),
      children: T || d === F.ZUi.AUTO_PROBING ? t ? (0, l.jsx)("div", {
        className: Q.status,
        children: (0, l.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: o()(Q.overlayTitle, Q.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: Q.status,
          children: (0, l.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: Q.overlayTitleText,
          children: q.intl.string(q.t.m2Hyj4)
        })]
      }) : null
    }), !_ && (0, l.jsxs)("div", {
      className: o()(Q.overlayBottom, {
        [Q.small]: r < 195
      }),
      children: [(0, l.jsxs)(u.Text, {
        className: o()(Q.experimentOverlayTitle, {
          [Q.compact]: A
        }),
        color: "none",
        variant: A ? "text-sm/normal" : "text-md/normal",
        children: [null != M && m === X.fO.USER && (0, l.jsx)(M, {
          className: o()(Q.experimentTitleIcon, {
            [Q.compact]: A
          }),
          size: "xs",
          color: "currentColor"
        }), p ? (0, l.jsx)("div", {
          className: Q.blocked,
          children: (0, l.jsx)(u.t6m, {
            size: "lg",
            className: Q.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, f ? (0, l.jsx)("div", {
          className: Q.ignored,
          children: (0, l.jsx)(u.kZF, {
            size: "lg",
            className: Q.blockedIcon
          })
        }) : null, t ? null : (0, l.jsx)(en, {
          participantType: m,
          platform: g,
          className: o()(Q.experimentTitleIcon, {
            [Q.compact]: A
          })
        }), null == n || "" === n || t ? null : (0, l.jsx)("span", {
          className: Q.overlayTitleText,
          children: n
        }), O && (0, l.jsx)(u.ua7, {
          text: q.intl.string(q.t.ZEem6O),
          children: e => (0, l.jsx)(u.tQf, $(J({}, e), {
            className: Q.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": q.intl.string(q.t.mR9cf3)
          }))
        })]
      }), !c && (0, l.jsxs)("div", {
        className: Q.overlayButtonContainer,
        children: [(0, l.jsx)(el, {
          onClick: e => {
            e.stopPropagation(), w(!0), y(e, !0, X.A5.THREE_DOT)
          },
          tooltipText: q.intl.string(q.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !N,
          compact: A
        }), V && (0, l.jsx)(el, {
          onClick: C,
          tooltipText: I ? q.intl.string(q.t.YqAjX1) : q.intl.string(q.t["w4m94+"]),
          icon: I ? u.OyP : u.gj8,
          hideWhenInactive: !I && !N,
          compact: A
        })]
      })]
    })]
  })
});
ei.displayName = "CallTileOverlay";
let er = x.L,
  eo = et