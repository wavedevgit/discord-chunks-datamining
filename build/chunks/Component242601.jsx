/** Chunk was on 1272 **/
/** chunk id: 242601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eO
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk524825 = require("./524825.js"),
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
  Chunk691698 = require("./691698.js"),
  Chunk639777 = require("./639777.js"),
  Chunk11352 = require("./11352.js"),
  Chunk304445 = require("./304445.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk10401 = require("./10401.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk796974 = require("./796974.js"),
  Chunk486472 = require("./486472.js"),
  Chunk984933 = require("./984933.js"),
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
  Chunk971606 = require("./971606.js");

function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ep(e, t, n[t])
    })
  }
  return e
}

function eh(e, t) {
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

function eg(e, t) {
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
let em = "server-settings",
  eb = {
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
class e_ extends Chunk647438.PureComponent {
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
      children: (0, r.jsx)(U.Z, {
        tutorialId: em,
        position: "bottom",
        inlineSpecs: eb,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    }) : t ? (0, r.jsx)(p.ua7, {
      forceOpen: true,
      color: p.FGA.BRAND,
      position: "bottom",
      shouldShow: !e && !i,
      text: eu.intl.string(eu.t.sFSrFB),
      "aria-label": eu.intl.string(eu.t.sFSrFB),
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : i || e ? this.renderGuildHeaderDropdownButton(e) : l ? (0, r.jsx)(p.yRy, {
      targetElementRef: this.guildHeaderDropdownButtonRef,
      renderPopout: () => (0, r.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(B.ZP, {
          header: eu.intl.string(eu.t["Q3qa4+"]),
          content: eu.intl.string(eu.t.UyHD4O),
          buttonCTA: eu.intl.string(eu.t.U9PrMz),
          onClick: this.handleCloseSubscribeTooltip
        })
      }),
      position: "bottom",
      align: "center",
      animation: p.yRy.Animation.TRANSLATE,
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
      communityInfoVisible: f
    } = this.state, h = i || l || a;
    return null == t ? null : (0, w.jW)({
      location: "guild_sidebar"
    }).entrypoints ? (0, r.jsx)(O.Gt, {
      value: o,
      children: (0, r.jsx)(en.ZP, {
        guild: t,
        controller: s,
        renderBanner: c,
        hasSubheader: e,
        bannerVisible: u,
        communityInfoVisible: f,
        guildBanner: this.getGuildBannerHash(),
        onContextMenu: this.handleHeaderContextMenu,
        disableBannerAnimation: h,
        animationOverlayHeight: d,
        children: this.renderGuildHeaderNotices(n)
      })
    }) : (0, r.jsx)(O.Gt, {
      value: o,
      children: (0, r.jsx)(p.KeG, {
        targetElementRef: this.guildHeaderRef,
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: p.yRy.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, S.l)(false)
        },
        spacing: 4,
        children: i => {
          var {
            onClick: l
          } = i, a = eg(i, ["onClick"]);
          return (0, r.jsx)(en.ZP, eh(ef({
            ref: this.guildHeaderRef,
            guild: t,
            controller: s,
            renderBanner: c,
            hasSubheader: e,
            bannerVisible: u,
            communityInfoVisible: f,
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
    } = this.props, n = null != this.getGuildBannerHash(), r = null != t && (0, ee.Z)(t);
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
      a = eg(module, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
    if (exports || null == require) return (0, Chunk951288.jsx)(Chunk591190.Z, {
      withBannerPadding: null != require && null != this.getGuildBannerHash()
    });
    {
      if (require.features.has(Chunk981631.oNc.HUB) && !Chunk120356) return (0, Chunk951288.jsx)("div", {
        className: Chunk971606.hubContainer,
        children: (0, Chunk951288.jsx)(Chunk258871.Z, {
          guild: require,
          channel: null != Chunk647438 ? Chunk647438 : Chunk984933.ZP.getDefaultChannel(require.id)
        })
      });
      let e = require.id === Chunk647086._ ? Chunk373274.j : Chunk373274.E;
      return (0, Chunk951288.jsx)(module, eh(ef({
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
    return (0, Chunk951288.jsxs)("nav", {
      className: Chunk971606.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t.nj5gAQ, {
        guildName: null != (e = null == exports ? true : exports.name) ? module : ""
      }),
      children: [null != exports && this.renderGuildHeader(this.state.hasGuildSubheader), null != exports && (0, Chunk951288.jsx)(Chunk156978.Z, {
        guild: exports,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList()]
    })
  }
  constructor(...e) {
    super(...e), ep(this, "historyUnlisten", () => {}), ep(this, "guildHeaderRef", i.createRef()), ep(this, "guildHeaderDropdownButtonRef", i.createRef()), ep(this, "showTimeout", new d.V7), ep(this, "state", {
      controller: new o.Controller({
        value: 1,
        immediate: true
      }),
      renderBanner: false,
      bannerVisible: false,
      communityInfoVisible: false,
      shouldShowSubscribeTooltip: false,
      bannerVisibleHeight: 88,
      hasGuildSubheader: false
    }), ep(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: true
      }))
    }), ep(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, S.l)(!t), this.closeAllHeaderNotices()
    }), ep(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, h.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, r.jsx)(e, eh(ef({}, n), {
          guild: t
        }))
      })
    }), ep(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("1806"), n.e("36599"), n.e("60962"), n.e("58175"), n.e("55616"), n.e("7654"), n.e("44156"), n.e("47463"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("42926"), n.e("88479"), n.e("87154"), n.e("33213"), n.e("23744")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, eh(ef({}, n), {
          guild: t
        }))
      })
    }), ep(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), ep(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, I.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null == (e = this.props.guild) ? true : e.features.has(ea.oNc.HUB);
      !t && n && (0, I.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: es.L.AUTO
      })
    }), ep(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: false
      })
    }), ep(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && j.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), ep(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("87154"), n.e("45141")]).then(n.bind(n, 859432));
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
    }), ep(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildPowerupProgressBarUpsell: t,
        showRoleSubscriptionUpsell: n,
        showInviteSplashUpsell: i,
        showDiscoveryLandingPageSettingsUpsell: l,
        showHubPrivacySettingsTooltip: a,
        showMediaChannelUpsell: o,
        showTierTemplatesUpsell: s,
        shouldRenderCustomNotificationSoundsCoachmark: c,
        shouldRenderGuildPowerupPerkCoachmark: d,
        guild: p
      } = this.props;
      if (null == p) return this.renderGuildHeaderDropdownButton(e);
      let f = [];
      return (a && f.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), t && f.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL), n && f.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), i && f.push(u.z.GUILD_HEADER_INVITE_SPLASH), l && f.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), d && f.push(u.z.GUILD_POWERUP_PERKS_COACHMARK), 0 === f.length) ? this.renderGuildHeaderDropdownButton(e) : (o && f.push(u.z.MEDIA_CHANNEL_UPSELL), s && f.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), c && f.push(u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK), (0, r.jsx)(er.Z, {
        contentTypes: f,
        guild: p,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), ep(this, "renderGuildHeaderDropdownButton", e => (0, w.jW)({
      location: "guild_sidebar"
    }).entrypoints ? (0, r.jsx)(en.wD, {
      open: e
    }) : (0, r.jsx)(g.Z, {
      open: e,
      className: a()(ed.dropdownButton, {
        [ed.dropdownButtonBannerVisible]: this.state.bannerVisible
      }),
      ref: this.guildHeaderDropdownButtonRef
    })), ep(this, "setAnimatedValueForBanner", e => {
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
    }), ep(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function eO(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: a
  } = e, o = (0, c.e7)([W.Z], () => W.Z.getGuild(n));
  (0, m.J_)(n);
  let d = (0, C.Z)(n),
    f = (0, c.e7)([H.Z], () => H.Z.getGuildDimensions(n).scrollTo),
    h = (0, c.e7)([Q.Z], () => Q.Z.getChannelId()),
    g = (0, c.e7)([K.Z], () => K.Z.can(ea.Plq.MANAGE_GUILD, o)),
    j = (0, c.e7)([F.Z], () => F.Z.isUnavailable(n)),
    Z = (0, c.e7)([X.default], () => X.default.getCurrentUser()),
    {
      enableStudyGroup: w
    } = (0, A.s)(o),
    M = (0, v.ZP)(e => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [U, B] = i.useState(!M),
    z = (0, b.Z)(n),
    {
      analyticsLocations: ee
    } = (0, O.ZP)(_.Z.GUILD_HEADER);
  i.useEffect(() => {
    n !== z && B(!M)
  }, [n, z, M]);
  let [et, en] = (0, v.ZP)(e => [eo.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(es.R.GUILD_HEADER_TOOLTIPS)], s.X), er = (0, y.Z)(o), ei = (0, p.s9z)(p.JQI), el = (0, c.e7)([Y.Z], () => Y.Z.hasLayers()), ec = (0, c.e7)([G.Z], () => G.Z.shouldShow(em)), eu = (0, R.cT)(n, "GuildSidebar") && g && (null == o ? true : o.premiumProgressBarEnabled) === false && !$.s.isDisallowPopupsSet(), ed = (0, P.Z)(n), ep = (null == o ? true : o.features.has(ea.oNc.HUB)) === true, ef = g && (null == o ? true : o.features.has(ea.oNc.DISCOVERABLE)) === true, eh = (0, E.Q)(), eg = (g || (null == o ? true : o.premiumTier) === ea.Eu4.NONE) && !$.s.isDisallowPopupsSet() && !eh, eb = (0, c.e7)([x.Z, Y.Z], () => null != o && null != Z && g && !Y.Z.hasLayers() && x.Z.shouldShowGuildTemplateDirtyTooltip(n)), eO = (0, c.e7)([V.Z], () => V.Z.getChannel(a)), {
    isPopoutOpen: eE
  } = (0, S.y)(), ey = null != (t = null == o ? true : o.features.has(ea.oNc.COMMUNITY)) && t, ev = J.ZP.isNewUser(Z), eI = U && !ev;
  (0, N.Z)(o);
  let eC = (0, I.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eS = (0, L.Z)(n),
    eN = (0, T.Z)(n),
    eT = (0, c.e7)([Q.Z], () => Q.Z.getChannelId()),
    eP = (0, c.e7)([q.Z], () => q.Z.desyncedVoiceStatesCount),
    ej = k.Y.useExperiment({
      location: "GuildSidebar"
    }, {
      autoTrackExposure: true
    }).enabled,
    ex = (0, D.Z)(n);
  return (0, r.jsx)(e_, {
    guildId: n,
    hideSelectedChannel: l,
    guild: o,
    scrollToChannel: f,
    selectedChannelId: l ? null : a,
    selectedChannel: eO,
    selectedVoiceChannelId: h,
    voiceStates: d,
    rtcConnectedChannelId: eT,
    rtcDesyncedVoiceStatesCount: eP,
    isUnavailable: j,
    user: Z,
    hasChannelNotice: null != er || et,
    anyLayerOpen: ei || el,
    showGuildPowerupProgressBarUpsell: eu,
    showInviteSplashUpsell: eg,
    showDiscoveryLandingPageSettingsUpsell: ef,
    showGuildHeaderTutorial: ec,
    showGuildTemplateDirtyTooltip: eb,
    showRoleSubscriptionUpsell: ed,
    showHubPrivacySettingsTooltip: ep,
    showNewUnreadsBar: ey,
    showMediaChannelUpsell: eS,
    showTierTemplatesUpsell: eN,
    isHeaderPopoutOpen: eE,
    enableStudyGroup: w,
    isGuildHeaderDismissibleTooltipShown: en,
    canShowCoachMarkAtBottom: U,
    headerAnalyticsLocations: ee,
    isTutorialHighlightDismissed: eC,
    shouldRenderBurstCoachmark: eI,
    shouldRenderCustomNotificationSoundsCoachmark: ej,
    shouldRenderGuildPowerupPerkCoachmark: false === ex
  })
}