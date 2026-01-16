/** Chunk was on 1272 **/
/** chunk id: 242601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ep
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk81239 = require("./81239.js"),
  Chunk782425 = require("./782425.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk846519 = require("./846519.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk239091 = require("./239091.js"),
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
  Chunk972264 = require("./972264.js"),
  Chunk755458 = require("./755458.js"),
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
  Chunk289033 = require("./289033.js");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      el(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
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

function es(e, t) {
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
let ec = "server-settings",
  eu = {
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
class ed extends Chunk473749.PureComponent {
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
    this.setAnimatedValue(0), p.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = w.Z.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = w.Z.getHistory();
    (null == (e = t.state) ? true : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1e3, () => this.setState({
      shouldShowSubscribeTooltip: true
    }))
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), p.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices)
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
      children: (0, r.jsx)(L.Z, {
        tutorialId: ec,
        position: "bottom",
        inlineSpecs: eu,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    }) : t ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderGuildHeaderDropdownButton(e), !e && !i && (0, r.jsx)(u.J2, {
        targetElementRef: this.guildHeaderDropdownButtonRef,
        title: er.intl.string(er.t.Rk2RJk),
        body: er.intl.string(er.t.sFSrFH),
        onRequestClose: this.handleCloseTemplateDirtyTooltip,
        position: "bottom",
        caretConfig: {
          align: "center"
        }
      })]
    }) : i || e ? this.renderGuildHeaderDropdownButton(e) : l ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderGuildHeaderDropdownButton(e), (0, r.jsx)(u.J2, {
        targetElementRef: this.guildHeaderDropdownButtonRef,
        title: er.intl.string(er.t.Q3qa4x),
        body: er.intl.string(er.t.UyHD4O),
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
      bannerVisibleHeight: p,
      communityInfoVisible: f
    } = this.state, g = i || l || a;
    return null == t ? null : (0, r.jsx)(b.Gt, {
      value: o,
      children: (0, r.jsx)(d.KeG, {
        targetElementRef: this.guildHeaderRef,
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: d.yRy.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, I.l)(false)
        },
        spacing: 4,
        children: i => {
          var {
            onClick: l
          } = i, a = es(i, ["onClick"]);
          return (0, r.jsx)(q.ZP, eo(ea({
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
            disableBannerAnimation: g,
            animationOverlayHeight: p
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
    } = this.props, n = null != this.getGuildBannerHash(), r = null != t && (0, W.Z)(t);
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
      } = e,
      a = es(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
    if (t || null == n) return (0, r.jsx)(X.Z, {
      withBannerPadding: null != n && null != this.getGuildBannerHash()
    });
    {
      if (n.features.has($.GuildFeatures.HUB) && !l) return (0, r.jsx)("div", {
        className: ei.hubContainer,
        children: (0, r.jsx)(x.Z, {
          guild: n,
          channel: null != i ? i : U.ZP.getDefaultChannel(n.id)
        })
      });
      let e = n.id === en._ ? K.j : K.E;
      return (0, r.jsx)(e, eo(ea({
        guild: n
      }, a), {
        guildBanner: this.getGuildBannerHash(),
        hasGuildSubheader: this.state.hasGuildSubheader,
        onScroll: null != n && (null != this.getGuildBannerHash() || (0, W.Z)(n)) ? this.pinBannerOrGuildInfo : null
      }))
    }
  }
  render() {
    var e;
    let {
      guild: t
    } = this.props;
    return (0, r.jsxs)("nav", {
      className: ei.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": er.intl.formatToPlainString(er.t.nj5gAZ, {
        guildName: null != (e = null == t ? true : t.name) ? e : ""
      }),
      children: [null != t && this.renderGuildHeader(this.state.hasGuildSubheader), null != t && (0, r.jsx)(J.Z, {
        guild: t,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList()]
    })
  }
  constructor(...e) {
    super(...e), el(this, "historyUnlisten", () => {}), el(this, "guildHeaderRef", i.createRef()), el(this, "guildHeaderDropdownButtonRef", i.createRef()), el(this, "showTimeout", new c.V7), el(this, "state", {
      controller: new l.Controller({
        value: 1,
        immediate: true
      }),
      renderBanner: false,
      bannerVisible: false,
      communityInfoVisible: false,
      shouldShowSubscribeTooltip: false,
      bannerVisibleHeight: 88,
      hasGuildSubheader: false
    }), el(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: true
      }))
    }), el(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, I.l)(!t), this.closeAllHeaderNotices()
    }), el(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, r.jsx)(e, eo(ea({}, n), {
          guild: t
        }))
      })
    }), el(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("9414"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("9536"), n.e("87154"), n.e("33213"), n.e("48363")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, eo(ea({}, n), {
          guild: t
        }))
      })
    }), el(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), el(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, O.zu)(s.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null == (e = this.props.guild) ? true : e.features.has($.GuildFeatures.HUB);
      !t && n && (0, O.Q3)(s.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: et.L.AUTO
      })
    }), el(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: false
      })
    }), el(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && T.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), el(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("87154"), n.e("97368")]).then(n.bind(n, 859432));
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
    }), el(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showRoleSubscriptionUpsell: t,
        showDiscoveryLandingPageSettingsUpsell: n,
        showHubPrivacySettingsTooltip: i,
        showMediaChannelUpsell: l,
        showTierTemplatesUpsell: a,
        shouldRenderGuildPowerupPerkCoachmark: o,
        shouldRenderGameServerHostingPerkAvailableCoachmark: c,
        guild: u
      } = this.props;
      if (null == u) return this.renderGuildHeaderDropdownButton(e);
      let d = [];
      return (i && d.push(s.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), t && d.push(s.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), n && d.push(s.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), o && d.push(s.z.GUILD_POWERUP_PERKS_COACHMARK), c && d.push(s.z.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK), 0 === d.length) ? this.renderGuildHeaderDropdownButton(e) : (l && d.push(s.z.MEDIA_CHANNEL_UPSELL), a && d.push(s.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, r.jsx)(Q.Z, {
        contentTypes: d,
        guild: u,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), el(this, "renderGuildHeaderDropdownButton", e => {
      let t = e ? d.u04 : d.CJ0;
      return (0, r.jsx)(t, {
        ref: this.guildHeaderDropdownButtonRef,
        size: "xs",
        color: "currentColor"
      })
    }), el(this, "setAnimatedValueForBanner", e => {
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
    }), el(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function ep(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: c
  } = e, u = (0, o.e7)([G.Z], () => G.Z.getGuild(n));
  (0, g.J_)(n);
  let p = (0, v.Z)(n),
    f = (0, o.e7)([M.Z], () => M.Z.getGuildDimensions(n).scrollTo),
    T = (0, o.e7)([F.Z], () => F.Z.getChannelId()),
    x = (0, o.e7)([B.Z], () => B.Z.can($.Plq.MANAGE_GUILD, u)),
    w = (0, o.e7)([k.Z], () => k.Z.isUnavailable(n)),
    L = (0, o.e7)([z.default], () => z.default.getCurrentUser()),
    {
      enableStudyGroup: U
    } = (0, j.s)(u),
    W = (0, E.ZP)(e => e.currentlyShown.has(s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [K, q] = i.useState(!W),
    Q = (0, h.Z)(n),
    {
      analyticsLocations: J
    } = (0, b.ZP)(m.Z.GUILD_HEADER);
  i.useEffect(() => {
    n !== Q && q(!W)
  }, [n, Q, W]);
  let [X, en] = (0, E.ZP)(e => [ee.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(et.R.GUILD_HEADER_TOOLTIPS)], a.X), er = (0, _.Z)(u), ei = (0, d.s9z)(d.JQI), el = (0, o.e7)([H.Z], () => H.Z.hasLayers()), ea = (0, o.e7)([R.Z], () => R.Z.shouldShow(ec)), eo = (0, S.Z)(n), es = (null == u ? true : u.features.has($.GuildFeatures.HUB)) === true, eu = x && (null == u ? true : u.features.has($.GuildFeatures.DISCOVERABLE)) === true, ep = (0, o.e7)([N.Z, H.Z], () => null != u && null != L && x && !H.Z.hasLayers() && N.Z.shouldShowGuildTemplateDirtyTooltip(n)), ef = (0, o.e7)([D.Z], () => D.Z.getChannel(c)), {
    isPopoutOpen: eg
  } = (0, I.y)(), eh = null != (t = null == u ? true : u.features.has($.GuildFeatures.COMMUNITY)) && t, em = Y.ZP.isNewUser(L), eb = K && !em;
  (0, y.Z)(u);
  let e_ = (0, O.Nj)(s.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eE = (0, P.Z)(n),
    eO = (0, C.Z)(n),
    ev = (0, o.e7)([F.Z], () => F.Z.getChannelId()),
    eI = (0, o.e7)([V.Z], () => V.Z.desyncedVoiceStatesCount),
    ey = (0, Z.Z)(n),
    eC = (0, A.BU)(n, "GuildSidebar"),
    eS = (0, o.e7)([G.Z], () => {
      var e, t;
      return null != (t = null == (e = G.Z.getGuild(n)) ? true : e.features.has($.GuildFeatures.GAME_SERVERS)) && t
    }, [n]);
  return (0, r.jsx)(ed, {
    guildId: n,
    hideSelectedChannel: l,
    guild: u,
    scrollToChannel: f,
    selectedChannelId: l ? null : c,
    selectedChannel: ef,
    selectedVoiceChannelId: T,
    voiceStates: p,
    rtcConnectedChannelId: ev,
    rtcDesyncedVoiceStatesCount: eI,
    isUnavailable: w,
    user: L,
    hasChannelNotice: null != er || X,
    anyLayerOpen: ei || el,
    showDiscoveryLandingPageSettingsUpsell: eu,
    showGuildHeaderTutorial: ea,
    showGuildTemplateDirtyTooltip: ep,
    showRoleSubscriptionUpsell: eo,
    showHubPrivacySettingsTooltip: es,
    showNewUnreadsBar: eh,
    showMediaChannelUpsell: eE,
    showTierTemplatesUpsell: eO,
    isHeaderPopoutOpen: eg,
    enableStudyGroup: U,
    isGuildHeaderDismissibleTooltipShown: en,
    canShowCoachMarkAtBottom: K,
    headerAnalyticsLocations: J,
    isTutorialHighlightDismissed: e_,
    shouldRenderBurstCoachmark: eb,
    shouldRenderGuildPowerupPerkCoachmark: false === ey,
    shouldRenderGameServerHostingPerkAvailableCoachmark: eC && !eS && false === ey
  })
}