/** Chunk was on 1815 **/
n.d(t, {
  Z: () => e$,
  m: () => eJ
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(374470),
  o = n(442837),
  c = n(704215),
  d = n(846519),
  u = n(400354),
  m = n(652844),
  p = n(747906),
  g = n(789639),
  h = n(930295),
  f = n(481060),
  b = n(355467),
  N = n(239091),
  x = n(230711),
  _ = n(410575),
  E = n(941129),
  j = n(634894),
  C = n(586902),
  O = n(907305),
  v = n(468363),
  S = n(297369),
  T = n(953372),
  I = n(570928),
  y = n(100527),
  A = n(906732),
  P = n(676742),
  R = n(1585),
  D = n(304761),
  Z = n(865427),
  w = n(571250),
  k = n(628581),
  W = n(55311),
  L = n(575175),
  B = n(522651),
  M = n(795318),
  U = n(64220),
  V = n(427217),
  G = n(540059),
  F = n(605236),
  H = n(243778),
  z = n(258609),
  Y = n(427347),
  K = n(331541),
  q = n(850020),
  X = n(516817),
  J = n(332473),
  Q = n(240504),
  $ = n(637906),
  ee = n(39370),
  et = n(19199),
  en = n(866483),
  er = n(14357),
  ei = n(763296),
  es = n(640806),
  ea = n(184301),
  el = n(52538),
  eo = n(861254),
  ec = n(221241),
  ed = n(879815),
  eu = n(294629),
  em = n(875527),
  ep = n(56848),
  eg = n(378441),
  eh = n(358820),
  ef = n(469887),
  eb = n(306609),
  eN = n(199902),
  ex = n(314897),
  e_ = n(592125),
  eE = n(819640),
  ej = n(131951),
  eC = n(19780),
  eO = n(885110),
  ev = n(246946),
  eS = n(594174),
  eT = n(78839),
  eI = n(626135),
  ey = n(768581),
  eA = n(572004),
  eP = n(70956),
  eR = n(74538),
  eD = n(374023),
  eZ = n(51144),
  ew = n(998502),
  ek = n(870569),
  eW = n(345243),
  eL = n(115530),
  eB = n(981631),
  eM = n(215023),
  eU = n(388032),
  eV = n(615866);

function eG(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eG(e, t, n[t])
    })
  }
  return e
}

function eH(e, t) {
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
let ez = ew.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
  eY = 2 * eP.Z.Millis.MINUTE,
  eK = 3 * eP.Z.Millis.SECOND,
  eq = 30 * eP.Z.Millis.DAY;

function eX(e) {
  let {
    speaking: t,
    streaming: n,
    currentUser: i,
    status: s,
    handleMouseLeave: l,
    renderNameTag: o,
    nameplate: c,
    hovered: d
  } = e, u = (0, G.Q3)("RTC Avatar"), {
    coloredIconsEnabled: m
  } = (0, ec.Z)({
    location: "RTC Avatar"
  }), p = (0, P.Z)(null == i ? void 0 : i.avatarDecoration), g = (0, ey.NZ)({
    avatarDecoration: p,
    size: (0, R.y9)(f.EFr.SIZE_32)
  }), h = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE);
  return null == i ? null : (0, r.jsx)(_.Z, {
    object: eB.qAy.AVATAR,
    children: (0, r.jsx)(f.yRy, {
      clickTrap: !0,
      renderPopout: e => {
        let {
          closePopout: t,
          setPopoutRef: n
        } = e;
        return (0, r.jsx)("div", {
          className: eV.accountProfilePopoutWrapper,
          children: (0, r.jsx)(K.Z, {
            currentUser: i,
            onClose: () => {
              l(), null == t || t()
            },
            setPopoutRef: n
          })
        })
      },
      position: "top",
      align: "left",
      animation: f.yRy.Animation.FADE,
      spacing: 14,
      fixed: !0,
      preload: () => (0, ea.Z)(i, void 0, {
        withMutualGuilds: !1,
        withMutualFriends: !1
      }),
      children: e => (0, r.jsxs)(f.P3F, eH(eF({}, e), {
        "aria-label": eU.NW.string(eU.t["3Uj+2t"]),
        className: a()(eV.avatarWrapper, !u && m && eV.experiment),
        children: [(0, r.jsx)(X.Z, {
          nameplate: c,
          hovered: d,
          reverse: !0
        }), (0, r.jsx)(ez, {
          size: u ? f.EFr["SIZE_".concat(h)] : f.EFr.SIZE_32,
          src: i.getAvatarURL(void 0, u ? h - 4 : 32, !1),
          avatarDecoration: g,
          "aria-label": i.username,
          status: n ? eB.Skl.STREAMING : s,
          isSpeaking: t,
          className: eV.avatar
        }), (0, r.jsx)("div", {
          className: a()(eV.nameTag, {
            [eV.canCopy]: eA.wS
          }),
          children: o()
        })]
      }))
    })
  })
}
class eJ extends i.PureComponent {
  get isCopiedStreakGodlike() {
    let {
      copiedStreak: e
    } = this.state;
    return e >= 10
  }
  componentDidUpdate(e) {
    let {
      speakingWhileMuted: t,
      occluded: n
    } = e, {
      speakingWhileMuted: r,
      occluded: i
    } = this.props;
    i !== n && this.handleOccludedChanged(), r !== t && this.handleSpeakingWhileMutedChanged()
  }
  componentWillUnmount() {
    this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop()
  }
  renderCopiedSuccess() {
    let {
      copiedStreak: e
    } = this.state, t = [eU.NW.string(eU.t.MSaeTU), eU.NW.string(eU.t.UmrCw8), eU.NW.string(eU.t.gKE0Ji), eU.NW.string(eU.t["4DSKbm"]), eU.NW.string(eU.t["+8ENdX"]), eU.NW.string(eU.t.GlWHv7), eU.NW.string(eU.t.hIzxU1), eU.NW.string(eU.t["26uMPD"]), eU.NW.string(eU.t.uFs7R0), eU.NW.string(eU.t.bLXdcX), eU.NW.string(eU.t.gPg9fX)], n = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, r.jsx)(f.UkV, {
      isShaking: this.isCopiedStreakGodlike,
      children: t[n]
    })
  }
  renderStatus() {
    let {
      hovered: e
    } = this.state, {
      activities: t,
      activityStatusCleanupEnabled: n,
      applicationStream: i,
      currentUser: s,
      status: a,
      userTag: l,
      voiceActivityStatusEnabled: o,
      voiceChannel: c
    } = this.props;
    if (null == s) return null;
    if ((n || o) && (0, S.Z)({
        activities: t,
        status: a,
        applicationStream: i,
        voiceChannel: o ? c : void 0
      })) return (0, r.jsx)(I.Z, {
      hoverText: l,
      forceHover: e,
      children: (0, r.jsx)(T.Z, {
        user: s,
        activities: t,
        applicationStream: i,
        voiceChannel: o ? c : void 0,
        textClassName: eV.activityStatusText,
        hideTooltip: !0
      })
    });
    let d = null == t ? void 0 : t.find(e => {
      let {
        type: t
      } = e;
      return t === eB.IIU.CUSTOM_STATUS
    });
    return null != d ? (0, r.jsx)(I.Z, {
      hoverText: l,
      forceHover: e,
      children: (0, r.jsx)(V.Z, {
        activity: d,
        emojiClassName: eV.emoji,
        className: eV.customStatus
      })
    }) : null != a && a !== eB.Skl.UNKNOWN && s.isPomelo() ? (0, r.jsx)(I.Z, {
      hoverText: l,
      forceHover: e,
      children: eZ.ZP.humanizeStatus(a)
    }) : l
  }
  renderAvatarWithPopout() {
    let {
      hovered: e
    } = this.state;
    return (0, r.jsx)(eX, eH(eF({}, this.props), {
      hovered: e,
      handleMouseLeave: this.handleMouseLeave,
      renderNameTag: this.renderNameTag
    }))
  }
  renderNameZone() {
    let {
      currentUser: e,
      dismissibleContents: t
    } = this.props;
    return null == e ? null : (0, r.jsx)(H.ZP, {
      contentTypes: t.avatar,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        return t === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP ? (0, r.jsx)(U.Z, {
          markAsDismissed: n,
          children: () => this.renderAvatarWithPopout()
        }) : this.renderAvatarWithPopout()
      }
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return null == e ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: eV.container,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [this.renderNameZone(), (0, r.jsx)(eQ, eH(eF({}, this.props, this.state), {
          handleMouseEnterMute: this.handleMouseEnterMute,
          handleMouseLeaveMute: this.handleMouseLeaveMute,
          handleToggleSelfMute: this.handleToggleSelfMute,
          handleToggleSelfDeaf: this.handleToggleSelfDeaf,
          handleInputAudioContextMenu: this.handleInputAudioContextMenu,
          handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
          handleOpenAccountSettings: this.handleOpenAccountSettings,
          handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu
        }))]
      }), (0, r.jsx)(Y.Z, {})]
    })
  }
  constructor(...e) {
    super(...e), eG(this, "copiedTimeout", new d.V7), eG(this, "copiedDecayTimeout", new d.V7), eG(this, "speakingWhileMutedTooltipTimeout", new d.V7), eG(this, "lastSpeakingWhileMutedNotificationTime", void 0), eG(this, "state", {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }), eG(this, "handleToggleSelfMute", () => {
      let {
        serverMute: e,
        suppress: t,
        selfMute: n
      } = this.props;
      (0, L.Z)(e, t, eB.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.MIC, n)
    }), eG(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e,
        selfDeaf: t
      } = this.props;
      (0, W.Z)(e, eB.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.DEAFEN, !t)
    }), eG(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eG(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.oAB.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      x.Z.open(e, t, n)
    }), eG(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, N.jW)(e, async () => {
        let {
          default: e
        } = await n.e("2535").then(n.bind(n, 923422));
        return n => (0, r.jsx)(e, eH(eF({}, n), {
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride,
          onInteraction: (0, M.u)("UserSettingsCogContextMenu", y.Z.ACCOUNT)
        }))
      })
    }), eG(this, "audioOnInteractionHandler", (0, M.u)("AudioDeviceMenu", y.Z.ACCOUNT)), eG(this, "handleInputAudioContextMenu", (e, t) => {
      (0, N.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 659580));
        return () => (0, r.jsx)(A.Gt, {
          value: t,
          children: this.props.simplifiedCallSettingsEnabled ? (0, r.jsx)(e, {
            onClose: N.Zy,
            renderInputDevices: !0,
            renderInputVolume: !0,
            simplified: !0,
            onInteraction: this.audioOnInteractionHandler
          }) : (0, r.jsx)(e, {
            onClose: N.Zy,
            renderInputDevices: !0,
            renderInputModes: !0,
            renderInputVolume: !0,
            onInteraction: this.audioOnInteractionHandler
          })
        })
      })
    }), eG(this, "handleOutputAudioContextMenu", (e, t) => {
      (0, N.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 659580));
        return () => (0, r.jsx)(A.Gt, {
          value: t,
          children: this.props.simplifiedCallSettingsEnabled ? (0, r.jsx)(e, {
            onClose: N.Zy,
            renderOutputDevices: !0,
            renderOutputVolume: !0,
            simplified: !0,
            onInteraction: this.audioOnInteractionHandler
          }) : (0, r.jsx)(e, {
            onClose: N.Zy,
            renderOutputDevices: !0,
            renderOutputVolume: !0,
            onInteraction: this.audioOnInteractionHandler
          })
        })
      })
    }), eG(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), eG(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), eG(this, "handleMouseEnterMute", () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }), eG(this, "handleMouseLeaveMute", () => {
      this.setState({
        hoveringOnMute: !1
      })
    }), eG(this, "handleCopyTag", () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, eA.JG)(eZ.ZP.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eI.default.track(eB.rMx.TEXT_COPIED, {
        type: "User Tag"
      });
      let r = {
        shouldShowCopiedFeedback: !0,
        shouldShowNametagTooltip: !0
      };
      t || (r.copiedStreak = n + 1), this.setState(r, () => {
        this.copiedTimeout.start(1e3, () => this.setState({
          shouldShowNametagTooltip: !1
        })), this.copiedDecayTimeout.start(2e3, () => this.setState({
          copiedStreak: 0
        }))
      })
    }), eG(this, "handleOccludedChanged", () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }), eG(this, "handleSpeakingWhileMutedChanged", () => {
      let {
        selfMute: e,
        serverMute: t,
        suppress: n,
        speakingWhileMuted: r,
        occluded: i
      } = this.props, {
        hoveringOnMute: s
      } = this.state, a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eY;
      r ? s || !e || t || n || i || !a || this.setState({
        shouldShowSpeakingWhileMutedTooltip: !0
      }, () => {
        this.lastSpeakingWhileMutedNotificationTime = Date.now(), this.speakingWhileMutedTooltipTimeout.start(2e3, () => this.setState({
          shouldShowSpeakingWhileMutedTooltip: !1
        }))
      }) : (this.setState({
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop())
    }), eG(this, "renderNameTag", () => {
      let {
        currentUser: e
      } = this.props;
      return null == e ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: eV.panelTitleContainer,
          children: (0, r.jsx)(eL.Z, {
            children: eZ.ZP.getName(e)
          })
        }), (0, r.jsx)("div", {
          className: eV.panelSubtextContainer,
          children: (0, r.jsx)(eW.Z, {
            children: this.renderStatus()
          })
        })]
      })
    })
  }
}

function eQ(e) {
  let {
    selfDeaf: t,
    selfMute: n,
    awaitingRemote: i,
    serverMute: s,
    serverDeaf: a,
    suppress: l,
    shouldShowSpeakingWhileMutedTooltip: o,
    isEligibleForPomelo: c,
    webBuildOverride: d,
    handleMouseEnterMute: u,
    handleMouseLeaveMute: m,
    handleToggleSelfDeaf: p,
    handleToggleSelfMute: g,
    handleInputAudioContextMenu: h,
    handleOutputAudioContextMenu: b,
    handleOpenAccountSettings: N,
    handleOpenSettingsContextMenu: x,
    dismissibleContents: _
  } = e;
  return (0, r.jsxs)("div", {
    className: eV.buttons,
    children: [(0, r.jsx)(e1, {
      selfMute: n,
      serverMute: s,
      suppress: l,
      awaitingRemote: i,
      tooltipText: o ? eU.NW.string(eU.t["29gnR0"]) : void 0,
      tooltipColor: o ? f.FGA.GREEN : void 0,
      tooltipForceOpen: o || void 0,
      onMouseEnter: u,
      onMouseLeave: m,
      onClick: g,
      onContextMenu: h
    }), (0, r.jsx)(e2, {
      selfDeaf: t,
      serverDeaf: a,
      onClick: p,
      onContextMenu: b,
      awaitingRemote: i
    }), (0, r.jsx)(e0, {
      isEligibleForPomelo: c,
      webBuildOverride: d,
      onClick: N,
      onContextMenu: x,
      dismissibleContents: _.settings
    })]
  })
}

function e$() {
  var e;
  let t = (0, o.e7)([eS.default], () => eS.default.getCurrentUser()),
    n = (0, o.e7)([ex.default], () => ex.default.getId()),
    {
      activities: s,
      streaming: a,
      status: l
    } = (0, o.cj)([eO.Z], () => {
      let e = eO.Z.getActivities();
      return {
        activities: e,
        streaming: null != e.find(e => {
          let {
            type: t
          } = e;
          return t === eB.IIU.STREAMING
        }),
        status: eO.Z.getStatus()
      }
    }),
    d = (0, o.e7)([eN.Z], () => eN.Z.getAnyStreamForUser(n)),
    u = (0, C.Z)({
      userId: n
    }),
    m = eZ.ZP.useUserTag(t, {
      decoration: "never"
    }),
    p = (0, o.e7)([ev.Z], () => ev.Z.hidePersonalInformation),
    g = (0, o.e7)([eC.Z, e_.Z], () => {
      let e = eC.Z.getChannelId();
      return null != e ? e_.Z.getChannel(e) : null
    }),
    {
      mute: h,
      selfMute: N,
      suppress: x
    } = (0, eu.Z)(g),
    {
      selfDeaf: _,
      deaf: S
    } = (0, ed.Z)(g),
    T = (0, o.e7)([D.C], () => {
      var e;
      return (0, Z.fD)() ? null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    I = (0, o.e7)([eT.ZP], () => eT.ZP.getPremiumTypeSubscription()),
    P = (0, o.e7)([ej.Z], () => ej.Z.getSpeakingWhileMuted()),
    R = (0, o.e7)([eE.Z], () => eE.Z.hasLayers()),
    w = (0, f.s9z)(f.JQI) || R || eD.s.isDisallowPopupsSet(),
    k = (0, J.b)(),
    W = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
    L = (0, et.D)(),
    B = (0, E.u)(),
    M = eR.ZP.canUsePremiumGuildMemberProfile(t),
    U = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eM.rL,
    {
      activityStatusCleanupEnabled: V
    } = (0, O.w)({
      location: "Account"
    }),
    {
      voiceActivityStatusEnabled: G
    } = (0, v.U)({
      location: "Account"
    }),
    {
      simplifiedSettingsEnabled: H
    } = (0, ec.Z)({
      location: "Account"
    }),
    Y = "account";
  (0, j.j)({
    location: Y + " auto on",
    autoTrackExposure: !0
  }), (0, j.j)({
    location: Y + " auto off",
    autoTrackExposure: !1
  });
  let K = (0, o.e7)([ei.Z], () => ei.Z.hasHadOtherUserPlaySoundInSession()),
    X = function() {
      let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, o.Wu)([Q.Z], () => [Q.Z.hasFetchedRelevance, Q.Z.profileThemesRelevanceExceeded]),
        [r, s] = (0, o.Wu)([eT.ZP], () => [eT.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eT.ZP.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: a
        } = $.Z.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        l = i.useMemo(() => {
          let e = new Date().getTime();
          return null != s && (s.status === eB.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eq)
        }, [s]);
      return i.useEffect(() => {
        (async () => {
          if (!e && null == n && a) {
            if (!r) {
              await (0, b.ou)();
              return
            }!l && (t || await (0, b.l0)())
          }
        })()
      }, [a, n, e, r, t, l]), !e && !!a && !l && null != n && n
    }(),
    {
      analyticsLocations: ee
    } = (0, A.ZP)(y.Z.ACCOUNT),
    en = (0, q.K)({
      location: "Account",
      user: t
    }),
    er = {
      avatar: [],
      settings: []
    };
  return !w && (X && er.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), L && (1 === B ? er.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : er.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), K && er.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), M && er.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), U && er.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, r.jsx)(A.Gt, {
    value: ee,
    children: (0, r.jsx)(eJ, {
      currentUser: t,
      activities: s,
      applicationStream: d,
      voiceChannel: g,
      dismissibleContents: er,
      userTag: m,
      hidePrivateData: p,
      occluded: w,
      premiumSubscription: I,
      selfDeaf: _,
      selfMute: N,
      serverDeaf: S,
      serverMute: h,
      speaking: u,
      speakingWhileMuted: P,
      status: l,
      streaming: a,
      suppress: x,
      webBuildOverride: T,
      awaitingRemote: W,
      isEligibleForPomelo: k,
      simplifiedCallSettingsEnabled: H,
      activityStatusCleanupEnabled: V,
      voiceActivityStatusEnabled: G,
      nameplate: en
    })
  })
}

function e0(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: i,
    onContextMenu: s,
    dismissibleContents: a
  } = e, l = f.ewm, o = (0, g.i)();
  l = null != t ? f.bgT : n ? f.Ncx : o.Component;
  let [d, u] = (0, H.US)(a);
  return (0, r.jsx)(f.yRy, {
    position: "top",
    align: "center",
    shouldShow: null != d,
    renderPopout: d === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(ee.Z, {}) : d === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(en.Z, {
      markAsDismissed: u
    }) : d === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(er.Z, {
      markAsDismissed: u
    }) : d === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(es.Z, {
      markAsDismissed: u
    }) : d === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(el.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
    children: () => (0, r.jsx)(ek.Z, eF({
      tooltipText: null != t ? eU.NW.formatToPlainString(eU.t.Gzh6ZG, {
        webBuildOverride: t.id
      }) : eU.NW.string(eU.t.cduTBA),
      onClick: i,
      onContextMenu: s,
      icon: (0, r.jsx)(l, {
        size: "refresh_sm"
      })
    }, o.events))
  })
}

function e1(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: s,
    awaitingRemote: c,
    tooltipText: d,
    tooltipColor: u,
    tooltipForceOpen: g,
    onMouseEnter: b,
    onMouseLeave: N,
    onClick: x,
    onContextMenu: _
  } = e, E = t || s || n, j = i.useRef(null), C = (0, m.O)(E ? "unmute" : "mute"), O = (0, p.P)(E ? "unmute" : "mute"), {
    activeVoice: v
  } = (0, eg.o)(), S = null != v, T = (0, ep.z)(v), I = (0, o.e7)([eC.Z], () => eC.Z.isConnected()), {
    Component: P,
    events: R,
    play: D
  } = S ? O : C, Z = n || s ? f.v0G : P, {
    mode: w
  } = (0, eo.ZP)({
    location: "RTC Microphone Button"
  }), {
    coloredIconsEnabled: W
  } = (0, ec.Z)({
    location: "RTC Microphone Button"
  }), L = null != d ? d : (0, k.Z)(t, n, s, c, w === eo.BK.GroupedButtonsRedMic), {
    analyticsLocations: B
  } = (0, A.ZP)(y.Z.AUDIO_INPUT_BUTTON), M = (0, em.Hu)({
    location: y.Z.AUDIO_INPUT_BUTTON,
    autoTrackExposure: !0
  });
  i.useEffect(() => () => D(), [E, D]);
  let U = i.useCallback(e => {
      _(e, B)
    }, [_, B]),
    [V, G] = i.useState(!1),
    F = i.useCallback(e => {
      var t;
      if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null === (t = j.current) || void 0 === t ? void 0 : t.contains(e.target))) return h.F;
      G(!1)
    }, []),
    [H, z] = i.useState(!1);
  return i.useEffect(() => {
    let e;
    return I && S && (e = setTimeout(() => {
      z(!0), e = setTimeout(() => z(!1), eK)
    }, 300)), () => {
      z(!1), clearTimeout(e)
    }
  }, [I]), (0, r.jsx)(A.Gt, {
    value: B,
    children: (0, r.jsxs)("div", {
      ref: j,
      className: a()(eV.micButtonParent, {
        [eV.buttonSpace]: W
      }),
      children: [(0, r.jsx)(ek.Z, {
        tooltipText: L,
        tooltipColor: u,
        tooltipForceOpen: g,
        onMouseEnter: () => {
          b(), R.onMouseEnter()
        },
        onMouseLeave: () => {
          N(), R.onMouseLeave()
        },
        icon: (0, r.jsx)(Z, {
          size: "custom",
          width: 20,
          height: 20,
          color: E ? f.TVs.colors.STATUS_DANGER : "currentColor"
        }),
        iconForeground: E ? eV.strikethrough : null,
        onClick: x,
        onContextMenu: U,
        role: "switch",
        className: M ? eV.micButtonWithMenu : void 0,
        redGlow: E && W,
        "aria-label": eU.NW.string(eU.t["w4m94+"]),
        "aria-checked": E,
        disabled: c
      }), M && (0, r.jsx)(f.yRy, {
        position: "top",
        align: "center",
        animation: f.yRy.Animation.FADE,
        useMouseEnter: !0,
        onRequestOpen: eh.r5,
        onRequestClose: F,
        shouldShow: V,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(eb.l, {
            onSettingsButtonClick: t
          })
        },
        children: (e, t) => {
          var {
            onClick: n
          } = e, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                s = Object.keys(e);
              for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["onClick"]), {
            isShown: s
          } = t;
          let a = s ? f.u04 : f.CJ0;
          return (0, r.jsx)("div", {
            children: (0, r.jsx)(ef.B, {
              onCTA: () => G(!0),
              canBeShown: !s,
              children: (e, t) => (0, r.jsx)(ek.Z, eF({
                tooltipForceOpen: H,
                tooltipColor: H ? f.FGA.GREEN : void 0,
                tooltipContentClassName: H ? eV.voiceFilterWarning : void 0,
                tooltipText: H ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("img", {
                    alt: null != T ? eU.NW.string(T.name) : "",
                    src: null == T ? void 0 : T.iconURL,
                    draggable: !1
                  }), (0, r.jsx)(f.Text, {
                    variant: "text-sm/medium",
                    children: eU.NW.string(eU.t.VlC1dX)
                  })]
                }) : eU.NW.string(eU.t.Hapb4O),
                icon: (0, r.jsx)(a, {
                  className: eV.buttonChevronIcon,
                  size: "custom",
                  width: 12,
                  height: 12,
                  color: W && E ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                }),
                role: "button",
                className: eV.buttonChevron,
                redGlow: E && W,
                "aria-label": eU.NW.string(eU.t.Hapb4O),
                disabled: c,
                onClick: e => {
                  null == t || t(), n(e), G(!V)
                }
              }, i))
            })
          })
        }
      })]
    })
  })
}

function e2(e) {
  let {
    selfDeaf: t,
    serverDeaf: n,
    awaitingRemote: s,
    onClick: l,
    onContextMenu: o
  } = e, c = t || n, {
    Component: d,
    play: m,
    events: {
      onMouseEnter: p,
      onMouseLeave: g
    }
  } = (0, u.l)(c ? "undeafen" : "deafen"), h = n ? f.Vm4 : d, {
    coloredIconsEnabled: b
  } = (0, ec.Z)({
    location: "RTC Microphone Button"
  }), {
    analyticsLocations: N
  } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
  i.useEffect(() => () => m(), [c, m]);
  let x = i.useCallback(e => {
    o(e, N)
  }, [o, N]);
  return (0, r.jsx)(A.Gt, {
    value: N,
    children: (0, r.jsx)(ek.Z, {
      tooltipText: (0, w.Z)(t, n, s),
      onMouseEnter: p,
      onMouseLeave: g,
      icon: (0, r.jsx)(h, {
        size: "custom",
        width: 20,
        height: 20,
        color: c ? f.TVs.colors.STATUS_DANGER : "currentColor"
      }),
      onClick: l,
      onContextMenu: x,
      innerClassName: a()({
        [eV.redIcon]: n
      }),
      iconForeground: c ? eV.strikethrough : null,
      role: "switch",
      redGlow: b && c,
      "aria-label": eU.NW.string(eU.t.wjcRFR),
      "aria-checked": c,
      disabled: s
    })
  })
}