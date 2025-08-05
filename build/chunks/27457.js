/** Chunk was on 70663 **/
n.d(t, {
  BP: () => eo,
  ZP: () => ea
}), n(388685);
var r = n(255367),
  i = n(73800),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(692547),
  c = n(755721),
  u = n(481060),
  d = n(846027),
  h = n(410575),
  p = n(812206),
  f = n(835473),
  g = n(414910),
  m = n(415635),
  b = n(7284),
  _ = n(649739),
  O = n(37091),
  y = n(6572),
  C = n(352978),
  v = n(936847),
  j = n(512384),
  E = n(210975),
  S = n(763296),
  x = n(695346),
  I = n(937995),
  P = n(456631),
  N = n(274459),
  w = n(314897),
  T = n(857192),
  Z = n(77498),
  A = n(131951),
  R = n(158776),
  D = n(979651),
  L = n(574254),
  M = n(374129),
  k = n(639351),
  U = n(584729),
  G = n(334374),
  B = n(849171),
  V = n(607187),
  F = n(833519),
  H = n(462061),
  z = n(623825),
  W = n(839662),
  K = n(981631),
  Y = n(354459),
  q = n(524484),
  X = n(65154),
  Q = n(388032),
  J = n(519417);

function $(e) {
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

function ee(e, t) {
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
let et = [Y.fO.ACTIVITY],
  en = i.memo(e => {
    var t, n, l, s, c;
    let {
      participant: b,
      onDoubleClick: L,
      onContextMenu: M,
      onClick: k,
      onMouseDown: z,
      onKeyDown: en,
      className: er,
      style: ei,
      containerStyle: eo,
      channel: ea,
      width: es,
      inPopout: ec,
      onVideoResize: eu,
      inCall: ed = !1,
      selected: eh = !1,
      noBorder: ep = !1,
      noVideoRender: ef = !1,
      focused: eg = !1,
      blocked: em = !1,
      ignored: eb = !1,
      fit: e_ = C.L.CONTAIN,
      paused: eO = !1,
      pulseSpeakingIndicator: ey = !1,
      forceIdle: eC = !1,
      inOverlayPopout: ev = !1
    } = e, ej = i.useContext(I.h9) || eC, [eE, eS] = i.useState(!1), ex = x.Sb.useSetting(), eI = (0, a.e7)([T.default], () => T.default.isStreamInfoOverlayEnabled), [eP, eN] = i.useState(!1), ew = (0, a.e7)([w.default], () => w.default.getId()), eT = b.type === Y.fO.ACTIVITY ? null : b.user, eZ = null != (l = null == eT ? void 0 : eT.id) ? l : null, [eA] = (0, f.Z)(b.type === Y.fO.ACTIVITY ? [b.applicationId] : []), eR = (0, a.e7)([O.Z], () => O.Z.getEnabled()), eD = (0, a.e7)([A.Z], () => null != eZ && A.Z.isLocalVideoDisabled(eZ, (0, g.Z)(b.type)), [eZ, b.type]), eL = (0, a.e7)([A.Z], () => null != eZ ? A.Z.getVideoToggleState(eZ, (0, g.Z)(b.type)) : K.ZUi.NONE, [eZ, b.type]), eM = eL === K.ZUi.AUTO_PROBING, {
      speaking: ek,
      ringing: eU,
      hasVideo: eG
    } = (0, W.Z)(b, ew), eB = (0, a.e7)([S.Z], () => null !== eZ && S.Z.isUserPlayingSounds(eZ), [eZ]), eV = function(e, t, n) {
      var r, i, l, o;
      let s = t.type !== Y.fO.ACTIVITY ? t.user.id : t.applicationId,
        c = (0, a.cj)([D.Z], () => {
          var e, t, r;
          let i = D.Z.getVoiceState(n, s);
          return {
            muted: null != (e = null == i ? void 0 : i.mute) && e,
            deafened: null != (t = null == i ? void 0 : i.deaf) && t,
            suppressed: null != (r = null == i ? void 0 : i.suppress) && r,
            voiceChannelId: null == i ? void 0 : i.channelId
          }
        }),
        u = (0, a.cj)([A.Z], () => {
          let n = (0, g.Z)(t.type);
          return e === s ? {
            muted: !1,
            deafened: !1
          } : {
            muted: A.Z.isLocalMute(s, n),
            localVideoDisabled: A.Z.isLocalVideoDisabled(s, n),
            localVideoAutoDisabled: A.Z.isLocalVideoAutoDisabled(s, n)
          }
        }, [e, t.type, s]);
      return {
        serverMuted: c.muted,
        serverDeafened: c.deafened,
        suppressed: c.suppressed,
        localMuted: u.muted,
        muted: null != (l = t.type === Y.fO.USER && (null == (r = t.voiceState) ? void 0 : r.isVoiceMuted())) && l,
        deafened: null != (o = t.type === Y.fO.USER && (null == (i = t.voiceState) ? void 0 : i.isVoiceDeafened())) && o
      }
    }(ew, b, ea.getGuildId()), eF = b.type === Y.fO.STREAM && eZ === ew, eH = (0, a.e7)([P.Z], () => b.type === Y.fO.USER && null != eZ ? P.Z.getEffectForUserId(eZ) : null), ez = (0, a.e7)([D.Z], () => D.Z.getVoicePlatformForChannel(ea.id, null != eZ ? eZ : K.lds)), {
      showGameIcon: eW
    } = _.ZP.useExperiment({
      location: "voice_users"
    }, {
      autoTrackExposure: !1
    }), eK = (0, a.e7)([R.Z], () => eW && null != eZ ? R.Z.findActivity(eZ, e => null != e.application_id && e.type === K.IIU.PLAYING) : null, [eW, eZ]), eY = (0, a.e7)([Z.Z], () => (null == eK ? void 0 : eK.application_id) != null ? Z.Z.getDetectableGame(eK.application_id) : null), eq = (0, a.e7)([p.Z], () => null != eY && (null == eK ? void 0 : eK.application_id) != null ? p.Z.getApplication(null == eK ? void 0 : eK.application_id) : void 0), eX = (0, E.wV)({
      userId: eZ,
      channelId: ea.id
    }), eQ = (0, E.zU)({
      streamKey: b.type === Y.fO.STREAM ? b.id : null,
      channelId: ea.id
    }), eJ = i.useMemo(() => b.type === Y.fO.STREAM ? null != eQ && eQ : b.type === Y.fO.USER && null != eX && eX, [eQ, eX, b.type]);
    i.useEffect(() => {
      eS(eg)
    }, [eg]);
    let e$ = i.useCallback(() => {
        null != eZ && d.Z.toggleLocalMute(eZ, X.Yn.STREAM)
      }, [eZ]),
      e0 = i.useCallback(e => {
        null == k || k(b, e)
      }, [k, b]),
      e1 = i.useCallback(e => {
        null == L || L(b, e)
      }, [L, b]),
      e3 = i.useCallback((e, t, n) => {
        null == M || M(b, e, t, n)
      }, [M, b]),
      e4 = null,
      e6 = null,
      e8 = "";
    switch (b.type) {
      case Y.fO.STREAM:
        e4 = (0, r.jsx)(F.Z, {
          participant: b,
          selected: eh,
          width: es,
          fit: e_,
          onVideoResize: eu,
          paused: eO,
          inPopout: ec,
          focused: eg,
          inOverlayPopout: ev
        }), e6 = (0, r.jsx)(F._, {
          participant: b,
          selected: eh,
          width: es,
          focused: eg,
          idle: ej,
          premiumIndicator: !1
        }), e8 = Q.intl.formatToPlainString(Q.t.gHPz3d, {
          streamerName: b.user.username
        });
        break;
      case Y.fO.USER:
        e4 = (0, r.jsx)(H.Z, {
          channel: ea,
          inCall: ed,
          participant: b,
          fit: e_,
          onVideoResize: eu,
          paused: eO,
          selected: eh,
          width: es,
          blocked: em,
          ignored: eb,
          noVideoRender: ef || eM,
          pulseSpeakingIndicator: ey,
          inOverlayPopout: ev
        }), e6 = (0, r.jsx)(H.T, {
          participant: b,
          channelId: ea.id
        }), e8 = Q.intl.formatToPlainString(Q.t["iC/x/f"], {
          username: b.user.username
        });
        break;
      case Y.fO.ACTIVITY:
        e4 = (0, r.jsx)(B.ZP, {
          interactible: eg,
          participant: b,
          selected: eh,
          channel: ea,
          width: es
        }), e8 = Q.intl.formatToPlainString(Q.t.YCvOsL, {
          activityName: null == eA ? void 0 : eA.name
        });
        break;
      case Y.fO.HIDDEN_STREAM:
        e4 = (0, r.jsx)(F.Z, {
          participant: b,
          selected: eh,
          width: es,
          fit: e_,
          onVideoResize: eu,
          paused: eO,
          inPopout: ec,
          focused: eg,
          inOverlayPopout: ev
        })
    }
    let e5 = i.useRef(null),
      e7 = b.type === Y.fO.STREAM ? u.pzj : u.Odl;
    return (0, r.jsx)(h.Z, {
      section: K.jXE.VOICE_CHANNEL_TILE,
      children: (0, r.jsx)("div", {
        className: o()(J.wrapper, {
          [J.ringing]: eU
        }, er),
        style: eo,
        onMouseEnter: () => {
          eN(!0)
        },
        onMouseLeave: () => {
          eN(!1)
        },
        children: (0, r.jsxs)(j.Z, {
          shakeLocation: q.oZ.VOICE_USER,
          isShaking: ek,
          className: J.tile,
          children: [(0, r.jsx)(V.Z, {
            ref: e5,
            className: o()(J.tile, {
              [J.noBorder]: ep,
              [J.noInteraction]: null == k,
              [J.idle]: ej
            }),
            noBorder: ep,
            style: ei,
            participantUserId: eZ,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": e8,
              className: J.tileChild,
              onDoubleClick: e1,
              onContextMenu: e => e3(e, b.type === Y.fO.STREAM),
              onClick: e0,
              onMouseDown: z,
              onKeyDown: en,
              focusProps: {
                offset: 1
              },
              children: [null != eH && null != eZ ? (0, r.jsx)(N.Z, {
                voiceChannelEffect: eH,
                onComplete: () => (0, P.H)(eZ),
                userId: eZ
              }) : null, b.type === Y.fO.USER ? (0, r.jsx)("div", {
                className: J.voiceChannelEffectsContainer,
                children: (0, r.jsx)(m.Z, {
                  userId: eZ,
                  channelId: ea.id,
                  guildId: ea.getGuildId(),
                  containerDimensions: {
                    width: null != (s = null == e5 || null == (t = e5.current) ? void 0 : t.clientWidth) ? s : 0,
                    height: null != (c = null == e5 || null == (n = e5.current) ? void 0 : n.clientHeight) ? c : 0
                  }
                })
              }) : null, e4, ep ? null : (0, r.jsx)("div", {
                className: J.indicators,
                children: e6
              }), eh ? (0, r.jsx)("div", {
                className: J.selectedScreen,
                children: (0, r.jsx)(e7, {
                  size: "md",
                  color: "currentColor",
                  className: J.selectedIcon
                })
              }) : null, et.includes(b.type) ? null : (0, r.jsx)(el, ee($({
                focused: eg,
                width: es,
                inCall: ed,
                participantType: b.type,
                hasVideo: null != eG && eG
              }, eV), {
                idle: ej,
                platform: ez,
                title: (0, U.Z)(ea, b),
                blocked: em,
                ignored: eb,
                localVideoDisabled: eD,
                videoToggleState: eL,
                hideAudioIcon: eF,
                onContextMenu: e3,
                onToggleMute: e$,
                participantUserId: eZ,
                participantDisplayNameStyles: null == eT ? void 0 : eT.displayNameStyles,
                application: eq,
                secureFramesVerified: eJ,
                isHovered: eP
              })), b.type === Y.fO.USER && eR ? (0, r.jsx)(y.Z, {
                userId: b.id,
                channelId: ea.id
              }) : null, ed && !ep ? (0, r.jsx)("div", {
                className: o()(J.border, {
                  [J.voiceChannelEffect]: !eg && (eB || null != eH),
                  [J.speaking]: ek && !eg && !eB
                })
              }) : null]
            })
          }), ex && eI && eP && (0, r.jsx)(G.Z, {
            currentUserId: ew,
            participant: b
          }), (0, r.jsx)(v.Z, {
            isFiring: eE,
            callTileRef: e5.current
          })]
        })
      })
    })
  });

function er(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === Y.fO.STREAM) return n === Y.wR.XBOX ? (0, r.jsx)(k.Z, {
    className: i
  }) : (0, r.jsx)(u.pzj, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case Y.wR.MOBILE:
      return (0, r.jsx)(u.AtH, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case Y.wR.XBOX:
      return (0, r.jsx)(k.Z, {
        className: i
      });
    case Y.wR.PLAYSTATION:
      return (0, r.jsx)(M.Z, {
        className: i
      });
    default:
      return null
  }
}

function ei(e) {
  let {
    icon: t,
    tooltipText: n,
    hideWhenInactive: i,
    onClick: l,
    compact: a
  } = e;
  return (0, r.jsx)(u.ua7, {
    text: n,
    children: e => {
      var {
        onClick: n
      } = e, s = function(e, t) {
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
      }(e, ["onClick"]);
      return (0, r.jsx)(c.zx, ee($({}, s), {
        onClick: e => {
          e.stopPropagation(), null == n || n(), l(e)
        },
        onMouseDown: e => e.preventDefault(),
        color: c.Tt.CUSTOM,
        size: c.Ph.ICON,
        className: o()(J.overlayButton, {
          [J.hideWhenInactive]: i,
          [J.compact]: a
        }),
        innerClassName: J.overlayButtonInner,
        children: (0, r.jsx)(t, {
          size: a ? "xs" : "refresh_sm",
          color: "currentColor"
        })
      }))
    }
  })
}
en.displayName = "CallTile";
let el = i.memo(e => {
  let {
    idle: t,
    title: n,
    width: l,
    focused: c,
    videoToggleState: d,
    blocked: h,
    ignored: p,
    participantType: f,
    participantUserId: m,
    participantDisplayNameStyles: _,
    platform: O,
    secureFramesVerified: y,
    onContextMenu: C,
    muted: v,
    deafened: j,
    localMuted: E,
    serverMuted: S,
    serverDeafened: x,
    hasVideo: I,
    hideAudioIcon: P,
    onToggleMute: N
  } = e, w = (0, a.e7)([A.Z], () => null != m && A.Z.isLocalVideoAutoDisabled(m, (0, g.Z)(f)), [m, f]), T = (0, b.j)({
    displayNameStyles: _
  }), Z = (0, z.N)(l), R = (0, z.K)(l), [D, M] = i.useState(!1);
  i.useEffect(() => {
    let e = !1,
      t = () => {
        e !== L.Z.isOpen() && ((e = L.Z.isOpen()) || M(!1))
      };
    return L.Z.addChangeListener(t), () => L.Z.removeChangeListener(t)
  }, []);
  let k = !P && f === Y.fO.STREAM && I && (!R || E),
    U = function(e) {
      let {
        localMuted: t,
        serverMuted: n,
        serverDeafened: r,
        deafened: i,
        muted: l
      } = e;
      return r ? u.Vm4 : n ? u.v0G : i ? u.wE8 : t ? u.v0G : l ? u.nRN : null
    }({
      localMuted: E,
      serverMuted: S,
      serverDeafened: x,
      deafened: j,
      muted: v
    });
  return (0, r.jsxs)("div", {
    className: o()(J.overlayContainer, {
      [J.compact]: R
    }),
    children: [(0, r.jsx)("div", {
      className: o()(J.overlayTop, {
        [J.small]: l < 195
      }),
      children: w || d === K.ZUi.AUTO_PROBING ? t ? (0, r.jsx)("div", {
        className: J.status,
        children: (0, r.jsx)(u.Amn, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, r.jsxs)("div", {
        className: o()(J.overlayTitle, J.videoDisabledTitle),
        children: [(0, r.jsx)("div", {
          className: J.status,
          children: (0, r.jsx)(u.Amn, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: J.overlayTitleText,
          children: Q.intl.string(Q.t.m2Hyj4)
        })]
      }) : null
    }), !Z && (0, r.jsxs)("div", {
      className: o()(J.overlayBottom, {
        [J.small]: l < 195
      }),
      children: [(0, r.jsxs)(u.Text, {
        className: o()(J.experimentOverlayTitle, {
          [J.compact]: R
        }),
        color: "none",
        variant: R ? "text-sm/normal" : "text-md/normal",
        children: [null != U && f === Y.fO.USER && (0, r.jsx)(U, {
          className: o()(J.experimentTitleIcon, {
            [J.compact]: R
          }),
          size: "xs",
          color: "currentColor"
        }), h ? (0, r.jsx)("div", {
          className: J.blocked,
          children: (0, r.jsx)(u.t6m, {
            size: "lg",
            className: J.blockedIcon,
            color: s.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, p ? (0, r.jsx)("div", {
          className: J.ignored,
          children: (0, r.jsx)(u.kZF, {
            size: "lg",
            className: J.blockedIcon
          })
        }) : null, t ? null : (0, r.jsx)(er, {
          participantType: f,
          platform: O,
          className: o()(J.experimentTitleIcon, {
            [J.compact]: R
          })
        }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
          className: o()(J.overlayTitleText, T),
          children: n
        }), y && (0, r.jsx)(u.ua7, {
          text: Q.intl.string(Q.t.ZEem6O),
          children: e => (0, r.jsx)(u.tQf, ee($({}, e), {
            className: J.secureFramesIcon,
            size: "xs",
            color: s.Z.colors.HEADER_PRIMARY,
            "aria-label": Q.intl.string(Q.t.mR9cf3)
          }))
        })]
      }), !c && (0, r.jsxs)("div", {
        className: J.overlayButtonContainer,
        children: [(0, r.jsx)(ei, {
          onClick: e => {
            e.stopPropagation(), M(!0), C(e, !0, Y.A5.THREE_DOT)
          },
          tooltipText: Q.intl.string(Q.t["+1H47u"]),
          icon: u.xhG,
          hideWhenInactive: !D,
          compact: R
        }), k && (0, r.jsx)(ei, {
          onClick: N,
          tooltipText: E ? Q.intl.string(Q.t.YqAjX1) : Q.intl.string(Q.t["w4m94+"]),
          icon: E ? u.OyP : u.gj8,
          hideWhenInactive: !E && !D,
          compact: R
        })]
      })]
    })]
  })
});
el.displayName = "CallTileOverlay";
let eo = C.L,
  ea = en