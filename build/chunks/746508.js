/** Chunk was on 1272 **/
n.d(t, {
  Z: () => e$
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(512722),
  s = n.n(a),
  c = n(568611),
  u = n(442837),
  d = n(592471),
  p = n(749280),
  h = n(864094),
  f = n(75735),
  g = n(382600),
  m = n(481060),
  b = n(846027),
  _ = n(239091),
  E = n(925549),
  O = n(284056),
  N = n(730749),
  v = n(2052),
  y = n(40851),
  I = n(317381),
  C = n(596040),
  S = n(588580),
  T = n(374065),
  P = n(451576),
  A = n(119315),
  j = n(403404),
  Z = n(100527),
  x = n(906732),
  L = n(424602),
  w = n(793865),
  R = n(522651),
  D = n(795318),
  k = n(933557),
  M = n(600164),
  U = n(540059),
  G = n(258609),
  W = n(446226),
  V = n(935261),
  B = n(74299),
  H = n(803647),
  F = n(142497),
  z = n(810788),
  Y = n(160404),
  K = n(703656),
  q = n(917405),
  Q = n(641015),
  X = n(848543),
  J = n(565799),
  $ = n(501655),
  ee = n(368442),
  et = n(600518),
  en = n(485287),
  er = n(754277),
  ei = n(590415),
  el = n(695346),
  eo = n(221241),
  ea = n(923973),
  es = n(829750),
  ec = n(189771),
  eu = n(544384),
  ed = n(560688),
  ep = n(127608),
  eh = n(76021),
  ef = n(173507),
  eg = n(25827),
  em = n(199902),
  eb = n(314897),
  e_ = n(592125),
  eE = n(430824),
  eO = n(819640),
  eN = n(131951),
  ev = n(496675),
  ey = n(19780),
  eI = n(699516),
  eC = n(594174),
  eS = n(979651),
  eT = n(938475),
  eP = n(626135),
  eA = n(63063),
  ej = n(51144),
  eZ = n(870569),
  ex = n(345243),
  eL = n(594117),
  ew = n(226323),
  eR = n(981631),
  eD = n(354459),
  ek = n(190378),
  eM = n(388032),
  eU = n(963085),
  eG = n(802138);

function eW(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eW(e, t, n[t])
    })
  }
  return e
}

function eB(e, t) {
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

function eH(e, t) {
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

function eF(e) {
  let t = e.currentTarget;
  eP.default.track(eR.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eR.jXE.NOISE_CANCELLATION_POPOUT
    }
  })
}

function ez() {
  let e = i.useRef(null);
  (0, m.Tbt)(e), i.useEffect(() => {
    eP.default.track(eR.rMx.OPEN_POPOUT, {
      type: eR.jXE.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, u.e7)([eN.Z], () => eN.Z.getNoiseCancellation());
  return (0, r.jsxs)("div", {
    ref: e,
    className: eU.noiseCancellationPopout,
    children: [(0, r.jsx)(m.j7V, {
      hideBorder: !0,
      className: eG.marginBottom4,
      value: t,
      onChange: () => b.Z.setNoiseCancellation(!t, {
        section: eR.jXE.NOISE_CANCELLATION_POPOUT
      }),
      note: eM.NW.string(eM.t.uKdWn5),
      children: eM.NW.string(eM.t.WGWHv7)
    }), (0, r.jsx)(O.Z, {
      title: eM.NW.string(eM.t.JdUas7),
      notchBackground: O._.BLACK,
      buttonTest: eM.NW.string(eM.t["sG+MGh"]),
      buttonStop: eM.NW.string(eM.t.Yp3SbG),
      buttonClassName: eU.micTestButton,
      buttonColor: m.zxk.Colors.PRIMARY,
      location: {
        section: eR.jXE.NOISE_CANCELLATION_POPOUT
      }
    }), (0, r.jsx)(m.vwX, {
      tag: m.RB0.H5,
      className: o()(eG.marginBottom8, eG.marginTop20),
      children: eM.NW.string(eM.t.k6h1Fx)
    }), (0, r.jsxs)(M.Z, {
      justify: M.Z.Justify.BETWEEN,
      className: eU.__invalid_footer,
      children: [(0, r.jsx)(m.eee, {
        href: eR.EYA.KRISP,
        onClick: e => eF(e),
        children: (0, r.jsx)("div", {
          className: eU.krispLogo
        })
      }), (0, r.jsx)(m.eee, {
        href: eA.Z.getArticleURL(eR.BhN.NOISE_SUPPRESSION),
        className: eU.krispLink,
        onClick: e => eF(e),
        children: eM.NW.string(eM.t.hvVgAQ)
      })]
    })]
  })
}

function eY() {
  let {
    parentAnalyticsLocation: e
  } = (0, x.ZP)(), t = (0, u.e7)([er.Z], () => er.Z.isMuted()), n = t ? eM.NW.string(eM.t.ScHlfn) : eM.NW.string(eM.t.zqxfra);
  return (0, r.jsx)(eZ.Z, {
    "aria-label": n,
    tooltipText: n,
    icon: t ? m.xjP : m.RZG,
    onClick: () => {
      (0, R.v)(e, R.d.STAGE_MUSIC, t), (0, et.v)(!t)
    }
  })
}

function eK(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, {
    parentAnalyticsLocation: a
  } = (0, x.ZP)(), s = (0, U.Q3)("ConnectedVideoButton"), {
    coloredIconsEnabled: c,
    simplifiedSettingsEnabled: d
  } = (0, eo.Z)({
    location: "ConnectedVideoButton"
  }), p = (0, ea.Z)(), h = (0, ec.Z)(t), g = (0, u.e7)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForLocation(I.ZP.getConnectedActivityLocation())), _ = (0, Q.Z)(t), {
    reachedLimit: E,
    limit: O
  } = (0, es.Z)(t), N = i.useCallback(() => {
    (0, ed.Z)()
  }, []), v = (0, y.bp)(), C = i.useCallback(e => {
    if (eN.Z.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      b.Z.setVideoEnabled(e), e && (0, K.uL)(eR.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eR.ME, t.id))
    };
    (0, R.v)(a, R.d.CAMERA, e), e ? (0, ef.Z)(n, v) : n()
  }, [t, v, a]), S = g || n || _, {
    Component: T,
    play: P,
    events: A
  } = (0, f.o)(p.enabled ? "disable" : "enable");
  return i.useEffect(() => () => P(), [p.enabled, P]), (0, r.jsx)(eg.Z, eB(eV({
    onChange: C,
    onCameraUnavailable: N,
    hasPermission: h,
    channelLimit: O,
    channelLimitReached: E
  }, p), {
    enabled: !l && p.enabled,
    children: e => {
      var {
        unavailable: t,
        isActive: n,
        label: i,
        iconComponent: l
      } = e, a = eH(e, ["unavailable", "isActive", "label", "iconComponent"]);
      let u = (0, r.jsx)(T, {
        size: s ? "md" : "sm",
        className: o()(eU.buttonIcon, {
          [eU.withText]: !S
        }),
        color: "currentColor"
      });
      return (0, r.jsx)(m.yRy, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(w.Z, {
            onClose: t,
            simplified: d,
            onInteraction: (0, D.u)("VideoDeviceMenu", "RTCConnection")
          })
        },
        position: "top",
        align: "center",
        animation: m.yRy.Animation.FADE,
        children: (e, l) => {
          var {
            onClick: d
          } = e, p = eH(e, ["onClick"]), {
            isShown: h
          } = l;
          return (0, r.jsx)(m.ua7, {
            text: i,
            children: e => (0, r.jsx)(m.zxk, eB(eV({}, a, e, p), {
              onClick: t => {
                var n;
                a.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), h && d(t)
              },
              onMouseEnter: () => {
                var t, n;
                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = p.onMouseEnter) || void 0 === n || n.call(p), A.onMouseEnter()
              },
              onMouseLeave: () => {
                var t;
                null === (t = e.onMouseLeave) || void 0 === t || t.call(e), A.onMouseLeave()
              },
              onContextMenu: t => {
                var n;
                d(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
              },
              size: s ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL,
              className: o()(c ? eU.experimentButton : eU.button, eU.buttonColor, {
                [eU.buttonActive]: n,
                [eU.fauxDisabled]: t,
                [eU.disabled]: a.disabled
              }),
              innerClassName: eU.buttonContents,
              wrapperClassName: eU.button,
              fullWidth: !0,
              children: S ? u : (0, r.jsxs)(M.Z, {
                align: M.Z.Align.CENTER,
                children: [u, eM.NW.string(eM.t.FlNoSU)]
              })
            }))
          })
        }
      })
    }
  }))
}

function eq(e) {
  let t, n, {
      channel: i,
      enableActivities: l
    } = e,
    a = (0, U.Q3)("ConnectedActivityButton"),
    {
      coloredIconsEnabled: s
    } = (0, eo.Z)({
      location: "ConnectedActivityButton"
    }),
    c = (0, y.bp)(),
    {
      analyticsLocations: h,
      parentAnalyticsLocation: f
    } = (0, x.ZP)(),
    g = c === eR.IlC.POPOUT,
    b = (0, T.KF)(i.id),
    _ = (0, T.g5)(b),
    {
      userInActivity: E
    } = (0, u.cj)([I.ZP], () => ({
      userInActivity: null != I.ZP.getSelfEmbeddedActivityForChannel(i.id)
    })),
    O = (0, v.O)(),
    N = (0, S.a)(),
    C = b !== T.jy.CAN_LAUNCH,
    {
      enabled: P
    } = L.nS.useExperiment({
      location: "RTCConnection"
    }, {
      autoTrackExposure: !0
    }),
    {
      Component: Z,
      events: w,
      play: D
    } = (0, d.s)(),
    {
      Component: k,
      events: M,
      play: G
    } = (0, p.w)();
  return (P ? (t = M, n = G) : (t = w, n = D), l) ? (0, r.jsx)(m.ua7, {
    text: _,
    children: e => (0, r.jsxs)(m.zxk, eB(eV(eB(eV({}, e), {
      fullWidth: !0,
      size: a ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL
    }), t), {
      onClick: () => {
        var t;
        n(), (0, j.Z)({
          channel: i,
          guildId: i.guild_id,
          locationObject: O.location,
          openInPopout: g,
          analyticsLocations: h,
          opensAppLauncherModal: !0
        }), null === (t = e.onClick) || void 0 === t || t.call(e), (0, R.v)(f, R.d.ACTIVITY)
      },
      onMouseEnter: () => {
        var n;
        t.onMouseEnter(), null == e || null === (n = e.onMouseEnter) || void 0 === n || n.call(e)
      },
      onMouseLeave: () => {
        var n;
        t.onMouseLeave(), null == e || null === (n = e.onMouseLeave) || void 0 === n || n.call(e)
      },
      disabled: C,
      className: o()(s && E ? eU.experimentButton : eU.button, eU.buttonColor, {
        [eU.buttonActive]: E,
        [eU.disabled]: C
      }),
      innerClassName: eU.buttonContents,
      wrapperClassName: eU.button,
      children: [N ? (0, r.jsx)(A.r, {
        top: -1,
        right: -1
      }) : null, P ? (0, r.jsx)(k, {
        size: a ? "md" : "sm",
        color: "currentColor",
        className: eU.buttonIcon
      }) : (0, r.jsx)(Z, {
        size: a ? "md" : "sm",
        color: "currentColor",
        className: eU.buttonIcon
      })]
    }))
  }) : null
}

function eQ(e) {
  let t, {
      channel: n,
      canGoLive: l,
      enableActivities: a,
      disabled: s
    } = e,
    {
      parentAnalyticsLocation: c
    } = (0, x.ZP)(),
    d = (0, U.Q3)("ConnectedStreamButton"),
    {
      coloredIconsEnabled: p
    } = (0, eo.Z)({
      location: "ConnectedStreamButton"
    }),
    f = (0, u.e7)([eC.default], () => eC.default.getCurrentUser()),
    g = (0, u.Wu)([em.Z], () => em.Z.getAllActiveStreams()),
    b = (0, ec.Z)(n),
    _ = n.getGuildId(),
    E = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(n.id)),
    O = (0, Q.Z)(n),
    N = i.useCallback(() => {
      (0, eh.Z)(_, n.id, eR.jXE.ACTIVITY_PANEL)
    }, [_, n.id]),
    v = g.find(e => e.ownerId === (null == f ? void 0 : f.id)),
    y = (0, eu.E)(n, f, g);
  t = null == v ? l ? N : ep.Z : () => (0, H.Z)(v);
  let C = null != v || y.length > 0,
    S = b ? eM.NW.string(eM.t.fjBNo6) : eM.NW.string(eM.t.uQn9Bw),
    T = E || a || O,
    P = null != v,
    {
      Component: A,
      events: j,
      play: Z
    } = (0, h.P)(P ? "disable" : "enable");
  i.useEffect(() => () => Z(), [Z, P]);
  let L = (0, r.jsx)(A, {
    size: d ? "md" : "sm",
    color: "currentColor",
    className: o()(eU.buttonIcon, {
      [eU.withText]: !T
    })
  });
  return (0, r.jsx)(m.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(eu.Z, {
        channel: n,
        currentUser: f,
        activeStreams: g,
        onClose: t,
        handleGoLive: l ? N : ep.Z,
        onInteraction: (0, D.u)("ManageStreamsMenu", "RTCConnection", {
          entrypoint: eD.A5.OTHER_BUTTON
        })
      })
    },
    position: "top",
    align: "center",
    animation: m.yRy.Animation.FADE,
    children: e => {
      var {
        onClick: n,
        onMouseEnter: i
      } = e, l = eH(e, ["onClick", "onMouseEnter"]);
      return (0, r.jsx)(m.ua7, {
        text: S,
        children: e => (0, r.jsx)(m.zxk, eB(eV(eB(eV({}, e), {
          size: d ? m.zxk.Sizes.MEDIUM : m.zxk.Sizes.SMALL,
          onClick: r => {
            var i;
            (0, R.v)(c, R.d.STREAM, null == v), C ? n(r) : t(), null === (i = e.onClick) || void 0 === i || i.call(e)
          },
          disabled: !b || s,
          className: o()(p ? eU.experimentButton : eU.button, eU.buttonColor, {
            [eU.buttonActive]: null != v,
            [eU.disabled]: !b || s
          })
        }), C ? l : null), {
          onMouseEnter: () => {
            var t;
            null == i || i(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), j.onMouseEnter()
          },
          onMouseLeave: () => {
            var t;
            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), j.onMouseLeave()
          },
          innerClassName: eU.buttonContents,
          wrapperClassName: eU.button,
          children: T ? L : (0, r.jsxs)(M.Z, {
            align: M.Z.Align.CENTER,
            children: [L, eM.NW.string(eM.t["r0/+v7"])]
          })
        }))
      })
    }
  })
}
class eX extends i.PureComponent {
  renderConnectionStatus() {
    let e;
    let {
      channel: t,
      guild: n,
      rtcConnectionQuality: i,
      rtcConnectionState: l,
      rtcConnectionLastPing: o,
      hasVideo: a
    } = this.props;
    if (null == t) return null;
    let s = (0, k.F6)(t, eC.default, eI.Z);
    return null != n ? (e = eR.Z5c.CHANNEL(n.id, t.id), s = "".concat(s, " / ").concat(n.name)) : e = eR.Z5c.CHANNEL(eR.ME, t.id), (0, r.jsx)(q.Z, {
      channelId: t.id,
      quality: i,
      state: l,
      lastPing: o,
      hasVideo: a,
      children: (0, r.jsx)(m.tEY, {
        children: (0, r.jsx)(c.rU, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, r.jsx)(ex.Z, {
            className: eU.channel,
            children: this.props.isVisualRefreshEnabled ? (0, r.jsx)(m.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              lineClamp: 1,
              children: s
            }) : s
          })
        })
      })
    })
  }
  renderNoiseCancellation() {
    let {
      noiseCancellationActive: e,
      noiseCancellationError: t,
      hasLayers: n,
      remoteVoiceState: i,
      channel: l,
      voiceStates: o
    } = this.props;
    return null != i ? null : (null == l ? void 0 : l.isGuildStageVoice()) && null == o.find(e => e.user.id === eb.default.getId() && (0, ei.gf)(e.voiceState) === ei.xO.ON_STAGE) && (0, en.U5)(l.id) ? (0, r.jsx)(eY, {}) : !n && t ? (0, r.jsx)(m.ua7, {
      text: eM.NW.string(eM.t["i+SO/f"]),
      tooltipClassName: eU.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, r.jsx)(eZ.Z, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: m.oIc
        })
      }
    }) : (0, r.jsx)(m.yRy, {
      position: "top",
      align: "center",
      renderPopout: () => (0, r.jsx)(ez, {}),
      children: (t, n) => {
        let {
          isShown: i
        } = n;
        return (0, r.jsx)(eJ, {
          popoutProps: t,
          isShown: i,
          noiseCancellationActive: e
        })
      }
    }, "krisp-popout")
  }
  renderVoiceStates() {
    let {
      channel: e,
      voiceStates: t,
      showVoiceStates: n
    } = this.props;
    return null != e && n && 0 !== t.length ? (0, r.jsx)(ew.Z, {
      voiceStates: t,
      channel: e,
      className: eU.voiceUsers
    }) : null
  }
  renderChannelButtons() {
    let {
      channel: e,
      canGoLive: t,
      remoteVoiceState: n,
      enableActivities: i,
      voiceStates: l,
      selfStream: a,
      isPrivateChannelWithEnabledActivities: s
    } = this.props;
    if (null == e || null != n) return null;
    let c = eb.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, ee.tu)(e.guild_id) || !t) return null;
      let n = l.find(e => e.user.id === c);
      if (null == n || n.voiceState.suppress) return null
    }
    let u = (e.isGuildVoice() || s) && i,
      {
        reachedLimit: d
      } = (0, es.t)(e),
      p = (0, ee.xJ)(e.id);
    return (0, r.jsxs)("div", {
      className: eU.actionButtons,
      children: [(0, r.jsx)(eK, {
        channel: e,
        enableActivities: u,
        disabled: !p && d
      }), (0, r.jsx)(eQ, {
        channel: e,
        canGoLive: t,
        enableActivities: u,
        disabled: e.isGuildStageVoice() && (p && null == a || !p && d)
      }), u ? (0, r.jsx)(eq, {
        channel: e,
        enableActivities: i
      }) : null, (0, Q.Z)(e) ? (0, r.jsx)(X.Z, {
        className: o()(eU.button, eU.buttonColor),
        innerClassName: eU.buttonContents,
        iconClassName: eU.buttonIcon,
        channel: e
      }) : null]
    })
  }
  render() {
    let {
      channel: e,
      noiseCancellationSupported: t,
      shouldShowVoicePanelIntroduction: n
    } = this.props;
    return null == e ? null : (0, r.jsx)(m.yRy, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: m.yRy.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, r.jsxs)("div", {
        className: eU.container,
        children: [(0, r.jsxs)(M.Z, {
          className: eU.connection,
          align: M.Z.Align.CENTER,
          children: [(0, r.jsx)("div", {
            className: eU.inner,
            children: this.renderConnectionStatus()
          }), (0, r.jsxs)(M.Z, {
            grow: 0,
            shrink: 0,
            className: eU.voiceButtonsContainer,
            children: [t ? this.renderNoiseCancellation() : null, (0, r.jsx)(eL.Z, {
              channel: e
            })]
          })]
        }), this.renderVoiceStates(), this.renderChannelButtons()]
      })
    })
  }
  constructor(...e) {
    super(...e), eW(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: n,
        channel: r
      } = this.props;
      s()(null != r, "Channel is null during navigation click"), e.stopPropagation(), E.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eR.ME, r.id), (0, R.v)(Z.Z.RTC_PANEL, R.d.CHANNEL_LINK)
    }), eW(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t,
        analyticsLocations: i
      } = this.props;
      (0, _.jW)(e, async () => {
        let {
          default: e
        } = await n.e("56944").then(n.bind(n, 600830));
        return n => (0, r.jsx)(x.Gt, {
          value: i,
          children: (0, r.jsx)(e, eB(eV({}, n), {
            channel: t,
            onInteraction: (0, D.u)("RTCConnectionMenu", "RTCConnection")
          }))
        })
      })
    }), eW(this, "handleCloseVoicePanelIntroduction", () => {
      F.Kw(ek.v.VOICE_PANEL_INTRODUCTION)
    }), eW(this, "renderVoicePanelIntroduction", () => (0, r.jsxs)("div", {
      className: o()(eU.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, r.jsx)(m.X6q, {
        className: eU.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eM.NW.string(eM.t["ba/rLy"])
      }), (0, r.jsx)(m.Text, {
        className: eU.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eM.NW.string(eM.t.Ne1Ee3)
      }), (0, r.jsx)(m.zxk, {
        className: eU.voicePanelIntroductionButton,
        color: m.zxk.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eM.NW.string(eM.t.shaBeH)
      })]
    }))
  }
}

function eJ(e) {
  let {
    popoutProps: t,
    isShown: n,
    noiseCancellationActive: l
  } = e, {
    parentAnalyticsLocation: o
  } = (0, x.ZP)(), {
    play: a,
    Component: s,
    events: c
  } = (0, g.P)(l ? "disable" : "enable");
  return i.useEffect(() => () => a(), [l, a]), (0, r.jsx)(eZ.Z, eB(eV({}, t), {
    onClick: e => {
      (0, R.v)(o, R.d.KRISP, !l), t.onClick(e)
    },
    onMouseEnter: () => {
      var e;
      null === (e = t.onMouseEnter) || void 0 === e || e.call(t), c.onMouseEnter()
    },
    onMouseLeave: () => {
      c.onMouseLeave()
    },
    tooltipClassName: eU.noiseCancellationTooltip,
    tooltipText: n ? null : eM.NW.string(eM.t.vFiCS0),
    icon: (0, r.jsx)(s, {
      size: "refresh_sm"
    })
  }))
}
let e$ = (0, N.Z)(function(e) {
  let t = (0, U.Q3)("ConnectedRTCConnection"),
    {
      coloredIconsEnabled: n
    } = (0, eo.Z)({
      location: "ConnectedRTCConnection"
    }),
    l = (0, W.Z)(),
    o = (0, u.e7)([G.Z], () => G.Z.getAwaitingRemoteSessionInfo()),
    a = (0, u.e7)([eC.default], () => eC.default.getCurrentUser()),
    s = (0, u.cj)([ey.Z], () => null != l ? {
      channelId: l.channelId,
      rtcConnectionQuality: eR.IE4.FINE,
      rtcConnectionState: eR.hes.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: ey.Z.getChannelId(),
      rtcConnectionQuality: ey.Z.getQuality(),
      rtcConnectionState: ey.Z.getState(),
      rtcConnectionLastPing: ey.Z.getLastPing()
    }),
    {
      channelId: c
    } = s,
    d = eH(s, ["channelId"]),
    p = (0, u.e7)([e_.Z], () => e_.Z.getChannel(c), [c]),
    h = null == p ? void 0 : p.getGuildId(),
    f = (0, u.e7)([eE.Z], () => eE.Z.getGuild(h), [h]),
    g = (0, u.cj)([eN.Z], () => ({
      noiseCancellationSupported: eN.Z.isNoiseCancellationSupported(),
      noiseCancellationActive: eN.Z.getNoiseCancellation(),
      noiseCancellationError: eN.Z.isNoiseCancellationError(),
      canGoLive: (0, B.Z)(eN.Z)
    })),
    b = (0, u.e7)([eN.Z, z.Z], () => z.Z.hasHotspot(ek.v.VOICE_PANEL_INTRODUCTION) && (0, ej.EO)(a) && !eN.Z.isInteractionRequired() && !(null == p ? void 0 : p.isGuildStageVoice())),
    _ = (0, u.e7)([eS.Z], () => null != c && eS.Z.hasVideo(c), [c]),
    E = (0, u.e7)([em.Z], () => em.Z.getCurrentUserActiveStream()),
    O = (0, u.e7)([eO.Z], () => eO.Z.hasLayers()),
    N = (0, u.e7)([Y.Z], () => Y.Z.isViewingRoles(h)),
    v = (0, u.e7)([ev.Z], () => N && !ev.Z.can(eR.Plq.VIEW_CHANNEL, p), [N, p]),
    y = el.Fg.useSetting(),
    [I, S, T] = (0, u.Wu)([eT.ZP, J.Z], () => (null == p ? void 0 : p.isGuildStageVoice()) ? [J.Z.getMutableParticipants(p.id, $.pV.SPEAKER), J.Z.getParticipantsVersion(p.id), null] : [null, null, null != p ? eT.ZP.getVoiceStatesForChannel(p) : null], [p]),
    A = i.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == I ? void 0 : I.map(e => {
        let {
          user: t,
          userNick: n,
          voiceState: r
        } = e;
        return {
          user: t,
          nick: n,
          voiceState: r
        }
      })) && void 0 !== e ? e : T) && void 0 !== t ? t : []
    }, [I, S, T]),
    [j, L] = i.useState(!1);
  i.useEffect(() => {
    (N || v) && L(!1)
  }, [N, v, L]);
  let {
    analyticsLocations: w
  } = (0, x.ZP)(Z.Z.RTC_PANEL), R = (0, C.Z)(null != h ? h : eR.lds, null == p ? void 0 : p.id), D = (0, P.Z)(null == p ? void 0 : p.id);
  return (0, r.jsx)(x.Gt, {
    value: w,
    children: (0, r.jsxs)("div", {
      className: eU.wrapper,
      children: [null != l || null != o ? (0, r.jsx)(V.Z, {
        voiceState: l,
        awaitingRemoteSessionInfo: o
      }) : null, (0, r.jsx)(eX, eB(eV({}, e, g, d), {
        enableActivities: R,
        remoteVoiceState: l,
        guild: f,
        channel: p,
        hasVideo: _,
        selfStream: E,
        hasLayers: O,
        voiceStates: A,
        showVoiceStates: y,
        shouldShowVoicePanelIntroduction: b,
        isPrivateChannelWithEnabledActivities: D,
        analyticsLocations: w,
        isVisualRefreshEnabled: t,
        coloredIconsEnabled: n
      })), !j && N && null != h ? (0, r.jsxs)("div", {
        className: eU.viewAsRolesWarning,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-sm/normal",
          className: eU.viewAsRolesWarningText,
          children: v ? eM.NW.string(eM.t.efjuQE) : eM.NW.string(eM.t.br8H2N)
        }), (0, r.jsx)(m.zxk, {
          className: eU.viewAsRolesWarningButton,
          size: m.zxk.Sizes.MIN,
          onClick: () => {
            L(!0)
          },
          children: eM.NW.string(eM.t.WAI6xs)
        })]
      }) : null]
    })
  })
})