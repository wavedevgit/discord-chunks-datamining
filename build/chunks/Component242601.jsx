/** Chunk was on 1272 **/
/** chunk id: 242601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => e_
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636606 = require("./636606.js"),
  Chunk55160 = require("./55160.js"),
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
  Chunk536687 = require("./536687.js"),
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
  Chunk971606 = require("./971606.js");

function eu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eu(e, t, n[t])
    })
  }
  return e
}

function ep(e, t) {
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

function ef(e, t) {
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
let eh = "server-settings",
  eg = {
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
class em extends Chunk473749.PureComponent {
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
      children: (0, r.jsx)(k.Z, {
        tutorialId: eh,
        position: "bottom",
        inlineSpecs: eg,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    }) : t ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderGuildHeaderDropdownButton(e), !e && !i && (0, r.jsx)(p.J2, {
        targetElementRef: this.guildHeaderDropdownButtonRef,
        title: eo.intl.string(eo.t.Rk2RJk),
        body: eo.intl.string(eo.t.sFSrFH),
        onRequestClose: this.handleCloseTemplateDirtyTooltip,
        position: "bottom",
        caretConfig: {
          align: "center"
        }
      })]
    }) : i || e ? this.renderGuildHeaderDropdownButton(e) : l ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderGuildHeaderDropdownButton(e), (0, r.jsx)(p.J2, {
        targetElementRef: this.guildHeaderDropdownButtonRef,
        title: eo.intl.string(eo.t.Q3qa4x),
        body: eo.intl.string(eo.t.UyHD4O),
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
      headerAnalyticsLocations: s
    } = this.props, {
      controller: o,
      renderBanner: c,
      bannerVisible: u,
      bannerVisibleHeight: d,
      communityInfoVisible: p
    } = this.state, h = i || l || a;
    return null == t ? null : (0, r.jsx)(O.Gt, {
      value: s,
      children: (0, r.jsx)(f.KeG, {
        targetElementRef: this.guildHeaderRef,
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: f.yRy.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, S.l)(false)
        },
        spacing: 4,
        children: i => {
          var {
            onClick: l
          } = i, a = ef(i, ["onClick"]);
          return (0, r.jsx)(ee.ZP, ep(ed({
            ref: this.guildHeaderRef,
            guild: t,
            controller: o,
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
    } = this.props, n = null != this.getGuildBannerHash(), r = null != t && (0, X.Z)(t);
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
      a = ef(module, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
    if (exports || null == require) return (0, Chunk54381.jsx)(Chunk591190.Z, {
      withBannerPadding: null != require && null != this.getGuildBannerHash()
    });
    {
      if (require.features.has(Chunk981631.GuildFeatures.HUB) && !Chunk120356) return (0, Chunk54381.jsx)("div", {
        className: Chunk971606.hubContainer,
        children: (0, Chunk54381.jsx)(Chunk258871.Z, {
          guild: require,
          channel: null != Chunk473749 ? Chunk473749 : Chunk984933.ZP.getDefaultChannel(require.id)
        })
      });
      let e = require.id === Chunk647086._ ? Chunk373274.j : Chunk373274.E;
      return (0, Chunk54381.jsx)(module, ep(ed({
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
    return (0, Chunk54381.jsxs)("nav", {
      className: Chunk971606.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t.nj5gAZ, {
        guildName: null != (e = null == exports ? true : exports.name) ? module : ""
      }),
      children: [null != exports && this.renderGuildHeader(this.state.hasGuildSubheader), null != exports && (0, Chunk54381.jsx)(Chunk156978.Z, {
        guild: exports,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList()]
    })
  }
  constructor(...e) {
    super(...e), eu(this, "historyUnlisten", () => {}), eu(this, "guildHeaderRef", i.createRef()), eu(this, "guildHeaderDropdownButtonRef", i.createRef()), eu(this, "showTimeout", new d.V7), eu(this, "state", {
      controller: new s.Controller({
        value: 1,
        immediate: true
      }),
      renderBanner: false,
      bannerVisible: false,
      communityInfoVisible: false,
      shouldShowSubscribeTooltip: false,
      bannerVisibleHeight: 88,
      hasGuildSubheader: false
    }), eu(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: true
      }))
    }), eu(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, S.l)(!t), this.closeAllHeaderNotices()
    }), eu(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, g.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, r.jsx)(e, ep(ed({}, n), {
          guild: t
        }))
      })
    }), eu(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, g.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("70363"), n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("384"), n.e("87154"), n.e("33213"), n.e("1289")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, ep(ed({}, n), {
          guild: t
        }))
      })
    }), eu(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), eu(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, I.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null == (e = this.props.guild) ? true : e.features.has(ei.GuildFeatures.HUB);
      !t && n && (0, I.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ea.L.AUTO
      })
    }), eu(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: false
      })
    }), eu(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && P.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), eu(this, "renderMenuPopout", async () => {
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
    }), eu(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showGuildPowerupProgressBarUpsell: t,
        showRoleSubscriptionUpsell: n,
        showDiscoveryLandingPageSettingsUpsell: i,
        showHubPrivacySettingsTooltip: l,
        showMediaChannelUpsell: a,
        showTierTemplatesUpsell: s,
        shouldRenderGuildPowerupPerkCoachmark: o,
        guild: c
      } = this.props;
      if (null == c) return this.renderGuildHeaderDropdownButton(e);
      let d = [];
      return (l && d.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), t && d.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL), n && d.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), i && d.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), o && d.push(u.z.GUILD_POWERUP_PERKS_COACHMARK), 0 === d.length) ? this.renderGuildHeaderDropdownButton(e) : (a && d.push(u.z.MEDIA_CHANNEL_UPSELL), s && d.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, r.jsx)(et.Z, {
        contentTypes: d,
        guild: c,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), eu(this, "renderGuildHeaderDropdownButton", e => (0, w.LK)({
      location: "guild_sidebar"
    }).isGuildEntrypointEnabled ? (0, r.jsx)(ee.wD, {
      open: e
    }) : (0, r.jsx)(m.Z, {
      open: e,
      className: a()(ec.dropdownButton, {
        [ec.dropdownButtonBannerVisible]: this.state.bannerVisible
      }),
      ref: this.guildHeaderDropdownButtonRef
    })), eu(this, "setAnimatedValueForBanner", e => {
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
    }), eu(this, "pinBannerOrGuildInfo", e => {
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
  } = e, s = (0, c.e7)([F.Z], () => F.Z.getGuild(n));
  (0, _.J_)(n);
  let d = (0, C.Z)(n),
    p = (0, c.e7)([B.Z], () => B.Z.getGuildDimensions(n).scrollTo),
    h = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
    g = (0, c.e7)([Y.Z], () => Y.Z.can(ei.Plq.MANAGE_GUILD, s)),
    m = (0, c.e7)([H.Z], () => H.Z.isUnavailable(n)),
    P = (0, c.e7)([K.default], () => K.default.getCurrentUser()),
    {
      enableStudyGroup: Z
    } = (0, A.s)(s),
    w = (0, v.ZP)(e => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [M, k] = i.useState(!w),
    V = (0, b.Z)(n),
    {
      analyticsLocations: X
    } = (0, O.ZP)(E.Z.GUILD_HEADER);
  i.useEffect(() => {
    n !== V && k(!w)
  }, [n, V, w]);
  let [$, ee] = (0, v.ZP)(e => [el.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ea.R.GUILD_HEADER_TOOLTIPS)], o.X), et = (0, y.Z)(s), en = (0, f.s9z)(f.JQI), er = (0, c.e7)([z.Z], () => z.Z.hasLayers()), es = (0, c.e7)([U.Z], () => U.Z.shouldShow(eh)), eo = (0, R.cT)(n, "GuildSidebar") && g && (null == s ? true : s.premiumProgressBarEnabled) === false && !J.s.isDisallowPopupsSet(), ec = (0, j.Z)(n), eu = (null == s ? true : s.features.has(ei.GuildFeatures.HUB)) === true, ed = g && (null == s ? true : s.features.has(ei.GuildFeatures.DISCOVERABLE)) === true, ep = (0, c.e7)([x.Z, z.Z], () => null != s && null != P && g && !z.Z.hasLayers() && x.Z.shouldShowGuildTemplateDirtyTooltip(n)), ef = (0, c.e7)([G.Z], () => G.Z.getChannel(a)), {
    isPopoutOpen: eg
  } = (0, S.y)(), e_ = null != (t = null == s ? true : s.features.has(ei.GuildFeatures.COMMUNITY)) && t, eb = Q.ZP.isNewUser(P), eE = M && !eb;
  (0, T.Z)(s);
  let eO = (0, I.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    ey = (0, L.Z)(n),
    ev = (0, N.Z)(n),
    eI = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
    eC = (0, c.e7)([W.Z], () => W.Z.desyncedVoiceStatesCount),
    eS = (0, D.Z)(n);
  return (0, r.jsx)(em, {
    guildId: n,
    hideSelectedChannel: l,
    guild: s,
    scrollToChannel: p,
    selectedChannelId: l ? null : a,
    selectedChannel: ef,
    selectedVoiceChannelId: h,
    voiceStates: d,
    rtcConnectedChannelId: eI,
    rtcDesyncedVoiceStatesCount: eC,
    isUnavailable: m,
    user: P,
    hasChannelNotice: null != et || $,
    anyLayerOpen: en || er,
    showGuildPowerupProgressBarUpsell: eo,
    showDiscoveryLandingPageSettingsUpsell: ed,
    showGuildHeaderTutorial: es,
    showGuildTemplateDirtyTooltip: ep,
    showRoleSubscriptionUpsell: ec,
    showHubPrivacySettingsTooltip: eu,
    showNewUnreadsBar: e_,
    showMediaChannelUpsell: ey,
    showTierTemplatesUpsell: ev,
    isHeaderPopoutOpen: eg,
    enableStudyGroup: Z,
    isGuildHeaderDismissibleTooltipShown: ee,
    canShowCoachMarkAtBottom: M,
    headerAnalyticsLocations: X,
    isTutorialHighlightDismissed: eO,
    shouldRenderBurstCoachmark: eE,
    shouldRenderGuildPowerupPerkCoachmark: false === eS
  })
}