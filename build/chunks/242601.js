/** Chunk was on 1272 **/
n.d(t, {
  Z: () => eI
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(392711),
  s = n.n(a),
  c = n(642128),
  u = n(232713),
  d = n(442837),
  p = n(704215),
  h = n(846519),
  f = n(481060),
  g = n(570140),
  m = n(239091),
  b = n(269128),
  _ = n(711237),
  E = n(110924),
  O = n(100527),
  N = n(906732),
  v = n(211242),
  y = n(785203),
  I = n(745837),
  C = n(13228),
  S = n(540059),
  T = n(211644),
  P = n(605236),
  j = n(243778),
  A = n(492162),
  Z = n(818634),
  x = n(596557),
  L = n(817520),
  w = n(999309),
  R = n(408987),
  D = n(130734),
  k = n(499137),
  M = n(258871),
  U = n(972264),
  G = n(11352),
  W = n(304445),
  V = n(344185),
  B = n(155409),
  H = n(10401),
  F = n(970731),
  z = n(210887),
  Y = n(592125),
  K = n(796974),
  q = n(486472),
  Q = n(984933),
  X = n(650774),
  J = n(430824),
  $ = n(819640),
  ee = n(496675),
  et = n(878884),
  en = n(19780),
  er = n(594174),
  ei = n(74538),
  el = n(374023),
  eo = n(373274),
  ea = n(315174),
  es = n(577718),
  ec = n(156978),
  eu = n(591190),
  ed = n(981631),
  ep = n(652785),
  eh = n(921944),
  ef = n(647086),
  eg = n(388032),
  em = n(925003);

function eb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function e_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eb(e, t, n[t])
    })
  }
  return e
}

function eE(e, t) {
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

function eO(e, t) {
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
let eN = "server-settings",
  ev = {
    origin: {
      x: -8,
      y: -48
    },
    targetWidth: 40,
    targetHeight: 40,
    offset: {
      x: 0,
      y: 0
    }
  };
class ey extends i.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t,
      hasChannelNotice: n
    } = e;
    return null == t || null == t.banner || n ? {
      renderBanner: !1,
      bannerVisible: !1
    } : null
  }
  componentDidMount() {
    var e;
    this.setAnimatedValue(0), g.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = W.Z.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = W.Z.getHistory();
    (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1e3, () => this.setState({
      shouldShowSubscribeTooltip: !0
    }))
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), g.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices)
  }
  getGuildBannerHash() {
    let {
      guild: e,
      hasChannelNotice: t
    } = this.props;
    return null == e || t ? null : e.banner
  }
  renderGuildHeaderNotices(e) {
    let {
      showGuildTemplateDirtyTooltip: t,
      showGuildHeaderTutorial: n,
      anyLayerOpen: i
    } = this.props, {
      shouldShowSubscribeTooltip: l
    } = this.state;
    return n ? (0, r.jsx)("div", {
      onClick: t => e ? null : t.stopPropagation(),
      children: (0, r.jsx)(B.Z, {
        tutorialId: eN,
        position: "bottom",
        inlineSpecs: ev,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    }) : t ? (0, r.jsx)(f.ua7, {
      forceOpen: !0,
      color: f.FGA.BRAND,
      position: "bottom",
      shouldShow: !e && !i,
      text: eg.NW.string(eg.t.sFSrFB),
      "aria-label": eg.NW.string(eg.t.sFSrFB),
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : i || e ? this.renderGuildHeaderDropdownButton(e) : l ? (0, r.jsx)(f.yRy, {
      renderPopout: () => (0, r.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(F.ZP, {
          header: eg.NW.string(eg.t["Q3qa4+"]),
          content: eg.NW.string(eg.t.UyHD4O),
          buttonCTA: eg.NW.string(eg.t.U9PrMz),
          onClick: this.handleCloseSubscribeTooltip
        })
      }),
      position: "bottom",
      align: "center",
      animation: f.yRy.Animation.TRANSLATE,
      shouldShow: !0,
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : this.renderGuildHeaderUpsellPopout(e)
  }
  renderGuildHeader(e) {
    let {
      guild: t,
      isHeaderPopoutOpen: n,
      showGuildHeaderTutorial: i,
      showGuildTemplateDirtyTooltip: l,
      isGuildHeaderDismissibleTooltipShown: o,
      headerAnalyticsLocations: a,
      isRefreshEnabled: s
    } = this.props, {
      controller: c,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: p,
      communityInfoVisible: h
    } = this.state, g = i || l || o;
    return null == t ? null : (0, r.jsx)(N.Gt, {
      value: a,
      children: (0, r.jsx)(f.KeG, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: f.yRy.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, Z.l)(!1)
        },
        spacing: s ? 4 : 8,
        children: i => {
          var {
            onClick: l
          } = i, o = eO(i, ["onClick"]);
          return (0, r.jsx)(ea.ZP, eE(e_({
            guild: t,
            controller: c,
            renderBanner: u,
            hasSubheader: e,
            bannerVisible: d,
            communityInfoVisible: h,
            guildBanner: this.getGuildBannerHash(),
            onClick: this.handleHeaderMenuToggle,
            onContextMenu: this.handleHeaderContextMenu,
            disableBannerAnimation: g,
            animationOverlayHeight: p
          }, o), {
            children: this.renderGuildHeaderNotices(n)
          }))
        }
      })
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null != this.getGuildBannerHash(), r = null == t ? void 0 : t.hasCommunityInfoSubheader();
    null != t && (n || r) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e))
  }
  setAnimatedValueForGuildInfo(e) {
    let {
      communityInfoVisible: t,
      controller: n
    } = this.state;
    (e >= 20 && t || e < 20 && !t) && (t = !t), t !== this.state.communityInfoVisible && this.setState({
      communityInfoVisible: t
    }), n.update({
      value: Math.min(1, Math.max(0, 1 - e / 20)),
      immediate: !0
    }).start()
  }
  renderChannelList() {
    let e = this.props,
      {
        isUnavailable: t,
        guild: n,
        selectedChannel: i,
        enableStudyGroup: l
      } = e,
      o = eO(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
    if (t || null == n) return (0, r.jsx)(eu.Z, {
      withBannerPadding: null != n && null != this.getGuildBannerHash()
    });
    if (n.hasFeature(ed.oNc.HUB) && !l) return (0, r.jsx)("div", {
      className: em.hubContainer,
      children: (0, r.jsx)(M.Z, {
        guild: n,
        channel: null != i ? i : Q.ZP.getDefaultChannel(n.id)
      })
    });
    {
      let e = n.id === ef._ ? eo.j : eo.E;
      return (0, r.jsx)(e, eE(e_({
        guild: n
      }, o), {
        guildBanner: this.getGuildBannerHash(),
        hasGuildSubheader: this.state.hasGuildSubheader,
        onScroll: null != n && (null != this.getGuildBannerHash() || n.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
      }))
    }
  }
  renderFooter() {
    let {
      shouldRenderClipsEducation: e
    } = this.props;
    return (0, r.jsx)(j.ZP, {
      contentTypes: [],
      children: t => {
        let {
          visibleContent: n
        } = t;
        return e ? (0, r.jsx)(I.Z, {}) : null
      }
    })
  }
  render() {
    let {
      guild: e,
      footerAnalyticsLocations: t
    } = this.props;
    return (0, r.jsxs)("nav", {
      className: em.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": eg.NW.formatToPlainString(eg.t.nj5gAQ, {
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, r.jsx)(ec.Z, {
        guild: e,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList(), (0, r.jsx)(N.Gt, {
        value: t,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), eb(this, "historyUnlisten", () => {}), eb(this, "showTimeout", new h.V7), eb(this, "state", {
      controller: new c.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1,
      shouldShowSubscribeTooltip: !1,
      bannerVisibleHeight: (this.props.isRefreshEnabled, 88),
      hasGuildSubheader: !1
    }), eb(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }), eb(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, Z.l)(!t), this.closeAllHeaderNotices()
    }), eb(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, r.jsx)(e, eE(e_({}, n), {
          guild: t
        }))
      })
    }), eb(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, m.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("7654"), n.e("44156"), n.e("23682"), n.e("6850"), n.e("16114"), n.e("58227"), n.e("44088"), n.e("10396"), n.e("69760"), n.e("33213"), n.e("67892")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, eE(e_({}, n), {
          guild: t
        }))
      })
    }), eb(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), eb(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, P.un)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ed.oNc.HUB);
      !t && n && (0, P.EW)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: eh.L.AUTO
      })
    }), eb(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }), eb(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && R.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), eb(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("69760"), n.e("54132")]).then(n.bind(n, 859432));
      return t => {
        let {
          closePopout: n
        } = t, {
          guild: i
        } = this.props;
        return null != i && (0, r.jsx)(e, {
          onClose: n,
          guild: i
        })
      }
    }), eb(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildBoostingProgressBarUpsell: t,
        showGuildBoostingProgressBarSizeUpsell: n,
        showRoleSubscriptionUpsell: i,
        showInviteSplashUpsell: l,
        showDiscoveryLandingPageSettingsUpsell: o,
        showHubPrivacySettingsTooltip: a,
        showActiveThreadsNotice: s,
        showGuildSoundboardPermissionUpsell: c,
        showMediaChannelUpsell: u,
        showTierTemplatesUpsell: d,
        shouldRenderCustomNotificationSoundsCoachmark: h,
        guild: f,
        theme: g
      } = this.props;
      if (null == f) return this.renderGuildHeaderDropdownButton(e);
      let m = [];
      return (a && m.push(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && m.push(p.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && m.push(p.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && m.push(p.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && m.push(p.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && m.push(p.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && m.push(p.z.GUILD_HEADER_INVITE_SPLASH), o && m.push(p.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === m.length) ? this.renderGuildHeaderDropdownButton(e) : (u && m.push(p.z.MEDIA_CHANNEL_UPSELL), d && m.push(p.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), h && m.push(p.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK), (0, r.jsx)(es.Z, {
        contentTypes: m,
        theme: g,
        guild: f,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), eb(this, "renderGuildHeaderDropdownButton", e => (0, r.jsx)(b.Z, {
      open: e,
      className: o()(em.dropdownButton, {
        [em.dropdownButtonBannerVisible]: this.state.bannerVisible
      })
    })), eb(this, "setAnimatedValueForBanner", e => {
      let t = (this.props.isRefreshEnabled, 88),
        n = this.props.isRefreshEnabled ? 88 : 64,
        {
          renderBanner: r,
          communityInfoVisible: i,
          bannerVisible: l,
          bannerVisibleHeight: o,
          controller: a
        } = this.state;
      (e >= n && l || e < n && !l) && (l = !l), (e >= t && !r || e < t && r) && (r = !r), o = Math.max(t - e, 0), i = l, (r !== this.state.renderBanner || l !== this.state.bannerVisible || o !== this.state.bannerVisibleHeight || i !== this.state.communityInfoVisible) && this.setState({
        renderBanner: r,
        bannerVisible: l,
        bannerVisibleHeight: o,
        communityInfoVisible: i
      }), a.update({
        value: Math.min(1, Math.max(0, 1 - e / t)),
        immediate: !0
      }).start()
    }), eb(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function eI(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: o
  } = e, a = (0, d.e7)([J.Z], () => J.Z.getGuild(n));
  (0, _.J_)(n);
  let c = (0, A.Z)(n),
    h = (0, d.e7)([K.Z], () => K.Z.getGuildDimensions(n).scrollTo),
    g = (0, d.e7)([en.Z], () => en.Z.getChannelId()),
    [m, b, I] = (0, d.Wu)([ee.Z], () => [ee.Z.can(ed.Plq.MANAGE_GUILD, a), ee.Z.can(ed.Plq.MANAGE_ROLES, a), ee.Z.can(ed.Plq.MANAGE_THREADS, a)]),
    j = (0, d.e7)([q.Z], () => q.Z.isUnavailable(n)),
    R = (0, d.e7)([er.default], () => er.default.getCurrentUser()),
    M = (0, d.e7)([z.Z], () => z.Z.darkSidebar ? ed.BRd.DARK : z.Z.theme),
    {
      enableStudyGroup: W
    } = (0, k.s)(a),
    B = (0, T.ZP)(e => e.currentlyShown.has(p.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [F, Q] = i.useState(!B),
    eo = (0, E.Z)(n),
    {
      analyticsLocations: ea
    } = (0, N.ZP)(O.Z.GUILD_HEADER),
    {
      analyticsLocations: es
    } = (0, N.ZP)(O.Z.GUILD_CHANNEL_LIST_FOOTER);
  i.useEffect(() => {
    n !== eo && Q(!B)
  }, [n, eo, B]);
  let [ec, eu] = (0, T.ZP)(e => [ep.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eh.R.GUILD_HEADER_TOOLTIPS)], u.X), ef = (0, y.Z)(a), eg = (0, f.s9z)(f.JQI), em = (0, d.e7)([$.Z], () => $.Z.hasLayers()), eb = (0, d.e7)([H.Z], () => H.Z.shouldShow(eN)), e_ = m && (null == a ? void 0 : a.premiumProgressBarEnabled) === !1 && !el.s.isDisallowPopupsSet(), eE = (0, d.e7)([X.Z], () => X.Z.getMemberCount(n)), eO = m && null != eE && eE >= 30 && (null == a ? void 0 : a.premiumProgressBarEnabled) === !1 && !el.s.isDisallowPopupsSet(), ev = b && null != a && (a.hasFeature(ed.oNc.COMMUNITY) || null != eE && eE > 50), eI = (0, w.Z)(n), eC = (null == a ? void 0 : a.hasFeature(ed.oNc.HUB)) === !0, eS = m && (null == a ? void 0 : a.hasFeature(ed.oNc.DISCOVERABLE)) === !0, eT = (0, v.Q)(), eP = (m || (null == a ? void 0 : a.premiumTier) === ed.Eu4.NONE) && !el.s.isDisallowPopupsSet() && !eT, ej = (0, d.e7)([D.Z, $.Z], () => null != a && null != R && m && !$.Z.hasLayers() && D.Z.shouldShowGuildTemplateDirtyTooltip(n)), eA = (0, d.e7)([Y.Z], () => Y.Z.getChannel(o)), {
    isPopoutOpen: eZ
  } = (0, Z.y)(), ex = null !== (t = null == a ? void 0 : a.hasFeature(ed.oNc.COMMUNITY)) && void 0 !== t && t, eL = (0, d.e7)([V.Z], () => !s().isEmpty(V.Z.getThreadsForGuild(n))), ew = ei.ZP.isNewUser(R), eR = F && !ew, eD = (0, C.Z)(R);
  (0, x.Z)(a);
  let ek = (0, P.wE)(p.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eM = (0, U.Z)(n),
    eU = (0, L.Z)(n),
    eG = (0, d.e7)([en.Z], () => en.Z.getChannelId()),
    eW = (0, d.e7)([et.Z], () => et.Z.desyncedVoiceStatesCount),
    eV = G.Y.useExperiment({
      location: "GuildSidebar"
    }, {
      autoTrackExposure: !0
    }).enabled,
    eB = (0, S.Q3)("GuildSidebar");
  return (0, r.jsx)(ey, {
    guildId: n,
    hideSelectedChannel: l,
    guild: a,
    scrollToChannel: h,
    selectedChannelId: l ? null : o,
    selectedChannel: eA,
    selectedVoiceChannelId: g,
    voiceStates: c,
    rtcConnectedChannelId: eG,
    rtcDesyncedVoiceStatesCount: eW,
    isUnavailable: j,
    theme: M,
    user: R,
    hasChannelNotice: null != ef || ec,
    anyLayerOpen: eg || em,
    showGuildBoostingProgressBarUpsell: e_,
    showGuildBoostingProgressBarSizeUpsell: eO,
    showInviteSplashUpsell: eP,
    showDiscoveryLandingPageSettingsUpsell: eS,
    showGuildHeaderTutorial: eb,
    showGuildTemplateDirtyTooltip: ej,
    showRoleSubscriptionUpsell: eI,
    showHubPrivacySettingsTooltip: eC,
    showNewUnreadsBar: ex,
    showActiveThreadsNotice: I && null != eE && eE >= 200 && eL,
    showGuildSoundboardPermissionUpsell: ev,
    showMediaChannelUpsell: eM,
    showTierTemplatesUpsell: eU,
    isHeaderPopoutOpen: eZ,
    enableStudyGroup: W,
    isGuildHeaderDismissibleTooltipShown: eu,
    canShowCoachMarkAtBottom: F,
    headerAnalyticsLocations: ea,
    footerAnalyticsLocations: es,
    shouldRenderClipsEducation: eD,
    isTutorialHighlightDismissed: ek,
    shouldRenderBurstCoachmark: eR,
    shouldRenderCustomNotificationSoundsCoachmark: eV,
    isRefreshEnabled: eB
  })
}