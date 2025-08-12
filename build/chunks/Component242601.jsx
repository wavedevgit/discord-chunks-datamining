/** Chunk was on 1272 **/
/** chunk id: 242601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eS
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk717976 = require("./717976.js"),
  Chunk94171 = require("./94171.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk239091 = require("./239091.js"),
  Chunk269128 = require("./269128.jsx"),
  Chunk711237 = require("./711237.js"),
  Chunk110924 = require("./110924.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk785203 = require("./785203.js"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk492162 = require("./492162.js"),
  Chunk43740 = require("./43740.js"),
  Chunk596557 = require("./596557.jsx"),
  Chunk817520 = require("./817520.js"),
  Chunk999309 = require("./999309.js"),
  Chunk408987 = require("./408987.js"),
  Chunk130734 = require("./130734.js"),
  Chunk499137 = require("./499137.js"),
  Chunk258871 = require("./258871.jsx"),
  Chunk340541 = require("./340541.js"),
  Chunk972264 = require("./972264.js"),
  Chunk639777 = require("./639777.js"),
  Chunk761700 = require("./761700.js"),
  Chunk11352 = require("./11352.js"),
  Chunk304445 = require("./304445.js"),
  Chunk984802 = require("./984802.js"),
  Chunk344185 = require("./344185.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk10401 = require("./10401.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk592125 = require("./592125.js"),
  Chunk796974 = require("./796974.js"),
  Chunk486472 = require("./486472.js"),
  Chunk984933 = require("./984933.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk496675 = require("./496675.js"),
  Chunk878884 = require("./878884.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk374023 = require("./374023.js"),
  Chunk598056 = require("./598056.js"),
  Chunk373274 = require("./373274.jsx"),
  Chunk315174 = require("./315174.jsx"),
  Chunk577718 = require("./577718.jsx"),
  Chunk156978 = require("./156978.jsx"),
  Chunk591190 = require("./591190.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk652785 = require("./652785.js"),
  Chunk921944 = require("./921944.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk580682 = require("./580682.js");

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      e_(e, t, n[t])
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

function ey(e, t) {
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
let ev = "server-settings",
  eI = {
    origin: {
      x: false,
      y: false
    },
    targetWidth: 40,
    targetHeight: 40,
    offset: {
      x: 0,
      y: 0
    }
  };
class eC extends Chunk73800.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t,
      hasChannelNotice: n
    } = e;
    return null == t || null == t.banner || n ? {
      renderBanner: false,
      bannerVisible: false
    } : null
  }
  componentDidMount() {
    var e;
    this.setAnimatedValue(0), Chunk570140.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = Chunk304445.Z.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = Chunk304445.Z.getHistory();
    (null == (e = exports.state) ? true : module.shouldShowSubscribeTooltip) && this.showTimeout.start(1e3, () => this.setState({
      shouldShowSubscribeTooltip: true
    }))
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), Chunk570140.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices)
  }
  getGuildBannerHash() {
    let {
      guild: e,
      hasChannelNotice: t
    } = this.props;
    return null == module || exports ? null : module.banner
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
      children: (0, r.jsx)(H.Z, {
        tutorialId: ev,
        position: "bottom",
        inlineSpecs: eI,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    }) : t ? (0, r.jsx)(f.ua7, {
      forceOpen: true,
      color: f.FGA.BRAND,
      position: "bottom",
      shouldShow: !e && !i,
      text: em.intl.string(em.t.sFSrFB),
      "aria-label": em.intl.string(em.t.sFSrFB),
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : i || e ? this.renderGuildHeaderDropdownButton(e) : l ? (0, r.jsx)(f.yRy, {
      targetElementRef: this.guildHeaderDropdownButtonRef,
      renderPopout: () => (0, r.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(z.ZP, {
          header: em.intl.string(em.t["Q3qa4+"]),
          content: em.intl.string(em.t.UyHD4O),
          buttonCTA: em.intl.string(em.t.U9PrMz),
          onClick: this.handleCloseSubscribeTooltip
        })
      }),
      position: "bottom",
      align: "center",
      animation: f.yRy.Animation.TRANSLATE,
      shouldShow: true,
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : this.renderGuildHeaderUpsellPopout(e)
  }
  renderGuildHeader(e) {
    let {
      guild: t,
      isHeaderPopoutOpen: n,
      showGuildHeaderTutorial: i,
      showGuildTemplateDirtyTooltip: l,
      isGuildHeaderDismissibleTooltipShown: a,
      headerAnalyticsLocations: o
    } = this.props, {
      controller: s,
      renderBanner: c,
      bannerVisible: u,
      bannerVisibleHeight: d,
      communityInfoVisible: p
    } = this.state, h = i || l || a;
    return null == t ? null : (0, R.jW)({
      location: "guild_sidebar"
    }).entrypoints ? (0, r.jsx)(y.Gt, {
      value: o,
      children: (0, r.jsx)(es.ZP, {
        guild: t,
        controller: s,
        renderBanner: c,
        hasSubheader: e,
        bannerVisible: u,
        communityInfoVisible: p,
        guildBanner: this.getGuildBannerHash(),
        onContextMenu: this.handleHeaderContextMenu,
        disableBannerAnimation: h,
        animationOverlayHeight: d,
        children: this.renderGuildHeaderNotices(n)
      })
    }) : (0, r.jsx)(y.Gt, {
      value: o,
      children: (0, r.jsx)(f.KeG, {
        targetElementRef: this.guildHeaderRef,
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: f.yRy.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, T.l)(false)
        },
        spacing: 4,
        children: i => {
          var {
            onClick: l
          } = i, a = ey(i, ["onClick"]);
          return (0, r.jsx)(es.ZP, eE(eO({
            ref: this.guildHeaderRef,
            guild: t,
            controller: s,
            renderBanner: c,
            hasSubheader: e,
            bannerVisible: u,
            communityInfoVisible: p,
            guildBanner: this.getGuildBannerHash(),
            onClick: this.handleHeaderMenuToggle,
            onContextMenu: this.handleHeaderContextMenu,
            disableBannerAnimation: h,
            animationOverlayHeight: d
          }, a), {
            children: this.renderGuildHeaderNotices(n)
          }))
        }
      })
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null != this.getGuildBannerHash(), r = null != t && (0, ea.Z)(t);
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
      immediate: true
    }).start()
  }
  renderChannelList() {
    let e = this.props,
      {
        isUnavailable: t,
        guild: n,
        selectedChannel: i,
        enableStudyGroup: l
      } = module,
      a = ey(module, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
    if (exports || null == require) return (0, Chunk255367.jsx)(Chunk591190.Z, {
      withBannerPadding: null != require && null != this.getGuildBannerHash()
    });
    {
      if (require.features.has(Chunk981631.oNc.HUB) && !Chunk120356) return (0, Chunk255367.jsx)("div", {
        className: Chunk580682.hubContainer,
        children: (0, Chunk255367.jsx)(Chunk258871.Z, {
          guild: require,
          channel: null != Chunk73800 ? Chunk73800 : Chunk984933.ZP.getDefaultChannel(require.id)
        })
      });
      let e = require.id === Chunk647086._ ? Chunk373274.j : Chunk373274.E;
      return (0, Chunk255367.jsx)(module, eE(eO({
        guild: require
      }, a), {
        guildBanner: this.getGuildBannerHash(),
        hasGuildSubheader: this.state.hasGuildSubheader,
        onScroll: null != require && (null != this.getGuildBannerHash() || (0, Chunk598056.Z)(require)) ? this.pinBannerOrGuildInfo : null
      }))
    }
  }
  render() {
    var e;
    let {
      guild: t
    } = this.props;
    return (0, Chunk255367.jsxs)("nav", {
      className: Chunk580682.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t.nj5gAQ, {
        guildName: null != (e = null == exports ? true : exports.name) ? module : ""
      }),
      children: [null != exports && this.renderGuildHeader(this.state.hasGuildSubheader), null != exports && (0, Chunk255367.jsx)(Chunk156978.Z, {
        guild: exports,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList()]
    })
  }
  constructor(...e) {
    super(...e), e_(this, "historyUnlisten", () => {}), e_(this, "guildHeaderRef", i.createRef()), e_(this, "guildHeaderDropdownButtonRef", i.createRef()), e_(this, "showTimeout", new h.V7), e_(this, "state", {
      controller: new c.Controller({
        value: 1,
        immediate: true
      }),
      renderBanner: false,
      bannerVisible: false,
      communityInfoVisible: false,
      shouldShowSubscribeTooltip: false,
      bannerVisibleHeight: 88,
      hasGuildSubheader: false
    }), e_(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: true
      }))
    }), e_(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, T.l)(!t), this.closeAllHeaderNotices()
    }), e_(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, r.jsx)(e, eE(eO({}, n), {
          guild: t
        }))
      })
    }), e_(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, m.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("1806"), n.e("7654"), n.e("58175"), n.e("44156"), n.e("8725"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("20087"), n.e("5533"), n.e("87154"), n.e("33213"), n.e("65356")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, eE(eO({}, n), {
          guild: t
        }))
      })
    }), e_(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), e_(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, S.zu)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null == (e = this.props.guild) ? true : e.features.has(ep.oNc.HUB);
      !t && n && (0, S.Q3)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ef.L.AUTO
      })
    }), e_(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: false
      })
    }), e_(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && Z.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), e_(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("87154"), n.e("94617")]).then(n.bind(n, 859432));
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
    }), e_(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildBoostingProgressBarUpsell: t,
        showGuildBoostingProgressBarSizeUpsell: n,
        showRoleSubscriptionUpsell: i,
        showInviteSplashUpsell: l,
        showDiscoveryLandingPageSettingsUpsell: a,
        showHubPrivacySettingsTooltip: o,
        showActiveThreadsNotice: s,
        showMediaChannelUpsell: c,
        showTierTemplatesUpsell: u,
        shouldRenderCustomNotificationSoundsCoachmark: d,
        shouldRenderGuildPowerupPerkCoachmark: h,
        shouldRenderBoosterEnhancedRoleColorsCoachmark: f,
        guild: g,
        theme: m
      } = this.props;
      if (null == g) return this.renderGuildHeaderDropdownButton(e);
      let b = [];
      return (o && b.push(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && b.push(p.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && b.push(p.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && b.push(p.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && b.push(p.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), l && b.push(p.z.GUILD_HEADER_INVITE_SPLASH), a && b.push(p.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), h && b.push(p.z.GUILD_POWERUP_PERKS_COACHMARK), f && b.push(p.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK), 0 === b.length) ? this.renderGuildHeaderDropdownButton(e) : (c && b.push(p.z.MEDIA_CHANNEL_UPSELL), u && b.push(p.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), d && b.push(p.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK), (0, r.jsx)(ec.Z, {
        contentTypes: b,
        theme: m,
        guild: g,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), e_(this, "renderGuildHeaderDropdownButton", e => (0, R.jW)({
      location: "guild_sidebar"
    }).entrypoints ? (0, r.jsx)(es.wD, {
      open: e
    }) : (0, r.jsx)(b.Z, {
      open: e,
      className: a()(eb.dropdownButton, {
        [eb.dropdownButtonBannerVisible]: this.state.bannerVisible
      }),
      ref: this.guildHeaderDropdownButtonRef
    })), e_(this, "setAnimatedValueForBanner", e => {
      let {
        renderBanner: t,
        communityInfoVisible: n,
        bannerVisible: r,
        bannerVisibleHeight: i,
        controller: l
      } = this.state;
      (e >= 88 && r || e < 88 && !r) && (r = !r), (e >= 88 && !t || e < 88 && t) && (t = !t), i = Math.max(88 - e, 0), n = r, (t !== this.state.renderBanner || r !== this.state.bannerVisible || i !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
        renderBanner: t,
        bannerVisible: r,
        bannerVisibleHeight: i,
        communityInfoVisible: n
      }), l.update({
        value: Math.min(1, Math.max(0, 1 - e / 88)),
        immediate: true
      }).start()
    }), e_(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function eS(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: a
  } = e, o = (0, d.e7)([J.Z], () => J.Z.getGuild(n));
  (0, _.J_)(n);
  let c = (0, N.Z)(n),
    h = (0, d.e7)([K.Z], () => K.Z.getGuildDimensions(n).scrollTo),
    g = (0, d.e7)([en.Z], () => en.Z.getChannelId()),
    [m, b] = (0, d.Wu)([ee.Z], () => [ee.Z.can(ep.Plq.MANAGE_GUILD, o), ee.Z.can(ep.Plq.MANAGE_THREADS, o)]),
    Z = (0, d.e7)([q.Z], () => q.Z.isUnavailable(n)),
    L = (0, d.e7)([er.default], () => er.default.getCurrentUser()),
    R = (0, V.Ll)(),
    G = (0, d.e7)([W.Z], () => null != R ? R : W.Z.theme),
    {
      enableStudyGroup: H
    } = (0, w.s)(o),
    z = (0, C.ZP)(e => e.currentlyShown.has(p.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [X, ea] = i.useState(!z),
    eo = (0, O.Z)(n),
    {
      analyticsLocations: es
    } = (0, y.ZP)(E.Z.GUILD_HEADER);
  i.useEffect(() => {
    n !== eo && ea(!z)
  }, [n, eo, z]);
  let [ec, eu] = (0, C.ZP)(e => [eh.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ef.R.GUILD_HEADER_TOOLTIPS)], u.X), ed = (0, I.Z)(o), eg = (0, f.s9z)(f.JQI), em = (0, d.e7)([$.Z], () => $.Z.hasLayers()), eb = (0, d.e7)([F.Z], () => F.Z.shouldShow(ev)), e_ = m && (null == o ? true : o.premiumProgressBarEnabled) === false && !el.s.isDisallowPopupsSet(), eO = (0, d.e7)([Q.Z], () => Q.Z.getMemberCount(n)), eE = m && null != eO && eO >= 30 && (null == o ? true : o.premiumProgressBarEnabled) === false && !el.s.isDisallowPopupsSet(), ey = (0, x.Z)(n), eI = (null == o ? true : o.features.has(ep.oNc.HUB)) === true, eS = m && (null == o ? true : o.features.has(ep.oNc.DISCOVERABLE)) === true, eN = (0, v.Q)(), eT = (m || (null == o ? true : o.premiumTier) === ep.Eu4.NONE) && !el.s.isDisallowPopupsSet() && !eN, eP = (0, d.e7)([A.Z, $.Z], () => null != o && null != L && m && !$.Z.hasLayers() && A.Z.shouldShowGuildTemplateDirtyTooltip(n)), ej = (0, d.e7)([Y.Z], () => Y.Z.getChannel(a)), {
    isPopoutOpen: ex
  } = (0, T.y)(), eZ = null != (t = null == o ? true : o.features.has(ep.oNc.COMMUNITY)) && t, eA = (0, d.e7)([B.Z], () => !s().isEmpty(B.Z.getThreadsForGuild(n))), ew = ei.ZP.isNewUser(L), eL = X && !ew;
  (0, P.Z)(o);
  let eR = (0, S.Nj)(p.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eD = (0, D.Z)(n),
    ek = (0, j.Z)(n),
    eM = (0, d.e7)([en.Z], () => en.Z.getChannelId()),
    eU = (0, d.e7)([et.Z], () => et.Z.desyncedVoiceStatesCount),
    eG = U.Y.useExperiment({
      location: "GuildSidebar"
    }, {
      autoTrackExposure: true
    }).enabled,
    eV = (0, k.Z)(n),
    eB = (0, M.Z)(null == L ? true : L.id, n) && (null == o ? true : o.premiumProgressBarEnabled) === false;
  return (0, r.jsx)(eC, {
    guildId: n,
    hideSelectedChannel: l,
    guild: o,
    scrollToChannel: h,
    selectedChannelId: l ? null : a,
    selectedChannel: ej,
    selectedVoiceChannelId: g,
    voiceStates: c,
    rtcConnectedChannelId: eM,
    rtcDesyncedVoiceStatesCount: eU,
    isUnavailable: Z,
    theme: G,
    user: L,
    hasChannelNotice: null != ed || ec,
    anyLayerOpen: eg || em,
    showGuildBoostingProgressBarUpsell: e_,
    showGuildBoostingProgressBarSizeUpsell: eE,
    showInviteSplashUpsell: eT,
    showDiscoveryLandingPageSettingsUpsell: eS,
    showGuildHeaderTutorial: eb,
    showGuildTemplateDirtyTooltip: eP,
    showRoleSubscriptionUpsell: ey,
    showHubPrivacySettingsTooltip: eI,
    showNewUnreadsBar: eZ,
    showActiveThreadsNotice: b && null != eO && eO >= 200 && eA,
    showMediaChannelUpsell: eD,
    showTierTemplatesUpsell: ek,
    isHeaderPopoutOpen: ex,
    enableStudyGroup: H,
    isGuildHeaderDismissibleTooltipShown: eu,
    canShowCoachMarkAtBottom: X,
    headerAnalyticsLocations: es,
    isTutorialHighlightDismissed: eR,
    shouldRenderBurstCoachmark: eL,
    shouldRenderCustomNotificationSoundsCoachmark: eG,
    shouldRenderGuildPowerupPerkCoachmark: false === eV,
    shouldRenderBoosterEnhancedRoleColorsCoachmark: eB
  })
}