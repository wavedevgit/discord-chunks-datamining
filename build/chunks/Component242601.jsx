/** Chunk was on 1272 **/
/** chunk id: 242601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => e_
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
  Chunk524825 = require("./524825.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk846519 = require("./846519.js"),
  Chunk907862 = require("./907862.js"),
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
  Chunk304445 = require("./304445.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk10401 = require("./10401.js"),
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
  Chunk500553 = require("./500553.js");

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function ef(e, t) {
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

function eh(e, t) {
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
let eg = "server-settings",
  em = {
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
class eb extends Chunk647438.PureComponent {
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
        tutorialId: eg,
        position: "bottom",
        inlineSpecs: em,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    }) : t ? (0, r.jsx)(f.ua7, {
      forceOpen: true,
      color: f.FGA.BRAND,
      position: "bottom",
      shouldShow: !e && !i,
      text: ec.intl.string(ec.t.sFSrFB),
      "aria-label": ec.intl.string(ec.t.sFSrFB),
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : i || e ? this.renderGuildHeaderDropdownButton(e) : l ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderGuildHeaderDropdownButton(e), (0, r.jsx)(p.J2, {
        targetElementRef: this.guildHeaderDropdownButtonRef,
        title: ec.intl.string(ec.t["Q3qa4+"]),
        body: ec.intl.string(ec.t.UyHD4O),
        onRequestClose: this.handleCloseSubscribeTooltip,
        position: "bottom",
        caretConfig: {
          align: "center"
        }
      })]
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
    return null == t ? null : (0, L.jW)({
      location: "guild_sidebar"
    }).entrypoints ? (0, r.jsx)(E.Gt, {
      value: o,
      children: (0, r.jsx)(et.ZP, {
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
    }) : (0, r.jsx)(E.Gt, {
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
          } = i, a = eh(i, ["onClick"]);
          return (0, r.jsx)(et.ZP, ef(ep({
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
    } = this.props, n = null != this.getGuildBannerHash(), r = null != t && (0, $.Z)(t);
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
      a = eh(module, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
    if (exports || null == require) return (0, Chunk951288.jsx)(Chunk591190.Z, {
      withBannerPadding: null != require && null != this.getGuildBannerHash()
    });
    {
      if (require.features.has(Chunk981631.oNc.HUB) && !Chunk120356) return (0, Chunk951288.jsx)("div", {
        className: Chunk500553.hubContainer,
        children: (0, Chunk951288.jsx)(Chunk258871.Z, {
          guild: require,
          channel: null != Chunk647438 ? Chunk647438 : Chunk984933.ZP.getDefaultChannel(require.id)
        })
      });
      let e = require.id === Chunk647086._ ? Chunk373274.j : Chunk373274.E;
      return (0, Chunk951288.jsx)(module, ef(ep({
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
      className: Chunk500553.container,
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
    super(...e), ed(this, "historyUnlisten", () => {}), ed(this, "guildHeaderRef", i.createRef()), ed(this, "guildHeaderDropdownButtonRef", i.createRef()), ed(this, "showTimeout", new d.V7), ed(this, "state", {
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
    }), ed(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: true
      }))
    }), ed(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, T.l)(!t), this.closeAllHeaderNotices()
    }), ed(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, g.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, r.jsx)(e, ef(ep({}, n), {
          guild: t
        }))
      })
    }), ed(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, g.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("36599"), n.e("7654"), n.e("58175"), n.e("55616"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("98039"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("90746"), n.e("71512"), n.e("87154"), n.e("33213"), n.e("8417")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, ef(ep({}, n), {
          guild: t
        }))
      })
    }), ed(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), ed(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, C.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null == (e = this.props.guild) ? true : e.features.has(el.oNc.HUB);
      !t && n && (0, C.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: eo.L.AUTO
      })
    }), ed(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: false
      })
    }), ed(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && x.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), ed(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("87154"), n.e("41794")]).then(n.bind(n, 859432));
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
    }), ed(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildPowerupProgressBarUpsell: t,
        showRoleSubscriptionUpsell: n,
        showInviteSplashUpsell: i,
        showDiscoveryLandingPageSettingsUpsell: l,
        showHubPrivacySettingsTooltip: a,
        showMediaChannelUpsell: o,
        showTierTemplatesUpsell: s,
        shouldRenderGuildPowerupPerkCoachmark: c,
        guild: d
      } = this.props;
      if (null == d) return this.renderGuildHeaderDropdownButton(e);
      let p = [];
      return (a && p.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), t && p.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL), n && p.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), i && p.push(u.z.GUILD_HEADER_INVITE_SPLASH), l && p.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), c && p.push(u.z.GUILD_POWERUP_PERKS_COACHMARK), 0 === p.length) ? this.renderGuildHeaderDropdownButton(e) : (o && p.push(u.z.MEDIA_CHANNEL_UPSELL), s && p.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, r.jsx)(en.Z, {
        contentTypes: p,
        guild: d,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), ed(this, "renderGuildHeaderDropdownButton", e => (0, L.jW)({
      location: "guild_sidebar"
    }).entrypoints ? (0, r.jsx)(et.wD, {
      open: e
    }) : (0, r.jsx)(m.Z, {
      open: e,
      className: a()(eu.dropdownButton, {
        [eu.dropdownButtonBannerVisible]: this.state.bannerVisible
      }),
      ref: this.guildHeaderDropdownButtonRef
    })), ed(this, "setAnimatedValueForBanner", e => {
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
    }), ed(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function e_(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: a
  } = e, o = (0, c.e7)([z.Z], () => z.Z.getGuild(n));
  (0, b.J_)(n);
  let d = (0, S.Z)(n),
    p = (0, c.e7)([V.Z], () => V.Z.getGuildDimensions(n).scrollTo),
    h = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
    g = (0, c.e7)([Y.Z], () => Y.Z.can(el.Plq.MANAGE_GUILD, o)),
    m = (0, c.e7)([H.Z], () => H.Z.isUnavailable(n)),
    x = (0, c.e7)([Q.default], () => Q.default.getCurrentUser()),
    {
      enableStudyGroup: w
    } = (0, Z.s)(o),
    L = (0, I.ZP)(e => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [M, U] = i.useState(!L),
    F = (0, _.Z)(n),
    {
      analyticsLocations: $
    } = (0, E.ZP)(O.Z.GUILD_HEADER);
  i.useEffect(() => {
    n !== F && U(!L)
  }, [n, F, L]);
  let [ee, et] = (0, I.ZP)(e => [ea.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eo.R.GUILD_HEADER_TOOLTIPS)], s.X), en = (0, v.Z)(o), er = (0, f.s9z)(f.JQI), ei = (0, c.e7)([W.Z], () => W.Z.hasLayers()), es = (0, c.e7)([G.Z], () => G.Z.shouldShow(eg)), ec = (0, D.cT)(n, "GuildSidebar") && g && (null == o ? true : o.premiumProgressBarEnabled) === false && !J.s.isDisallowPopupsSet(), eu = (0, j.Z)(n), ed = (null == o ? true : o.features.has(el.oNc.HUB)) === true, ep = g && (null == o ? true : o.features.has(el.oNc.DISCOVERABLE)) === true, ef = (0, y.Q)(), eh = (g || (null == o ? true : o.premiumTier) === el.Eu4.NONE) && !J.s.isDisallowPopupsSet() && !ef, em = (0, c.e7)([A.Z, W.Z], () => null != o && null != x && g && !W.Z.hasLayers() && A.Z.shouldShowGuildTemplateDirtyTooltip(n)), e_ = (0, c.e7)([B.Z], () => B.Z.getChannel(a)), {
    isPopoutOpen: eO
  } = (0, T.y)(), eE = null != (t = null == o ? true : o.features.has(el.oNc.COMMUNITY)) && t, ey = X.ZP.isNewUser(x), ev = M && !ey;
  (0, N.Z)(o);
  let eI = (0, C.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eC = (0, R.Z)(n),
    eS = (0, P.Z)(n),
    eT = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
    eN = (0, c.e7)([K.Z], () => K.Z.desyncedVoiceStatesCount),
    eP = (0, k.Z)(n);
  return (0, r.jsx)(eb, {
    guildId: n,
    hideSelectedChannel: l,
    guild: o,
    scrollToChannel: p,
    selectedChannelId: l ? null : a,
    selectedChannel: e_,
    selectedVoiceChannelId: h,
    voiceStates: d,
    rtcConnectedChannelId: eT,
    rtcDesyncedVoiceStatesCount: eN,
    isUnavailable: m,
    user: x,
    hasChannelNotice: null != en || ee,
    anyLayerOpen: er || ei,
    showGuildPowerupProgressBarUpsell: ec,
    showInviteSplashUpsell: eh,
    showDiscoveryLandingPageSettingsUpsell: ep,
    showGuildHeaderTutorial: es,
    showGuildTemplateDirtyTooltip: em,
    showRoleSubscriptionUpsell: eu,
    showHubPrivacySettingsTooltip: ed,
    showNewUnreadsBar: eE,
    showMediaChannelUpsell: eC,
    showTierTemplatesUpsell: eS,
    isHeaderPopoutOpen: eO,
    enableStudyGroup: w,
    isGuildHeaderDismissibleTooltipShown: et,
    canShowCoachMarkAtBottom: M,
    headerAnalyticsLocations: $,
    isTutorialHighlightDismissed: eI,
    shouldRenderBurstCoachmark: ev,
    shouldRenderGuildPowerupPerkCoachmark: false === eP
  })
}