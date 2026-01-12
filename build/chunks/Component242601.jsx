/** Chunk was on 1272 **/
/** chunk id: 242601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk620389 = require("./620389.js"),
  Chunk55160 = require("./55160.js"),
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

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
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

function eo(e, t) {
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
let es = "server-settings",
  ec = {
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
class eu extends Chunk473749.PureComponent {
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
    this.setAnimatedValue(0), p.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = A.Z.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = A.Z.getHistory();
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
      children: (0, r.jsx)(w.Z, {
        tutorialId: es,
        position: "bottom",
        inlineSpecs: ec,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    }) : t ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderGuildHeaderDropdownButton(e), !e && !i && (0, r.jsx)(u.J2, {
        targetElementRef: this.guildHeaderDropdownButtonRef,
        title: en.intl.string(en.t.Rk2RJk),
        body: en.intl.string(en.t.sFSrFH),
        onRequestClose: this.handleCloseTemplateDirtyTooltip,
        position: "bottom",
        caretConfig: {
          align: "center"
        }
      })]
    }) : i || e ? this.renderGuildHeaderDropdownButton(e) : l ? (0, r.jsxs)(r.Fragment, {
      children: [this.renderGuildHeaderDropdownButton(e), (0, r.jsx)(u.J2, {
        targetElementRef: this.guildHeaderDropdownButtonRef,
        title: en.intl.string(en.t.Q3qa4x),
        body: en.intl.string(en.t.UyHD4O),
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
          (0, y.l)(false)
        },
        spacing: 4,
        children: i => {
          var {
            onClick: l
          } = i, a = eo(i, ["onClick"]);
          return (0, r.jsx)(K.ZP, ea(el({
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
    } = this.props, n = null != this.getGuildBannerHash(), r = null != t && (0, Y.Z)(t);
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
      a = eo(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
    if (t || null == n) return (0, r.jsx)(J.Z, {
      withBannerPadding: null != n && null != this.getGuildBannerHash()
    });
    {
      if (n.features.has(X.GuildFeatures.HUB) && !l) return (0, r.jsx)("div", {
        className: er.hubContainer,
        children: (0, r.jsx)(P.Z, {
          guild: n,
          channel: null != i ? i : k.ZP.getDefaultChannel(n.id)
        })
      });
      let e = n.id === et._ ? W.j : W.E;
      return (0, r.jsx)(e, ea(el({
        guild: n
      }, a), {
        guildBanner: this.getGuildBannerHash(),
        hasGuildSubheader: this.state.hasGuildSubheader,
        onScroll: null != n && (null != this.getGuildBannerHash() || (0, Y.Z)(n)) ? this.pinBannerOrGuildInfo : null
      }))
    }
  }
  render() {
    var e;
    let {
      guild: t
    } = this.props;
    return (0, r.jsxs)("nav", {
      className: er.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": en.intl.formatToPlainString(en.t.nj5gAZ, {
        guildName: null != (e = null == t ? true : t.name) ? e : ""
      }),
      children: [null != t && this.renderGuildHeader(this.state.hasGuildSubheader), null != t && (0, r.jsx)(Q.Z, {
        guild: t,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList()]
    })
  }
  constructor(...e) {
    super(...e), ei(this, "historyUnlisten", () => {}), ei(this, "guildHeaderRef", i.createRef()), ei(this, "guildHeaderDropdownButtonRef", i.createRef()), ei(this, "showTimeout", new c.V7), ei(this, "state", {
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
    }), ei(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: true
      }))
    }), ei(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, y.l)(!t), this.closeAllHeaderNotices()
    }), ei(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, 652171));
        return n => (0, r.jsx)(e, ea(el({}, n), {
          guild: t
        }))
      })
    }), ei(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("9414"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("9536"), n.e("87154"), n.e("33213"), n.e("48363")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, ea(el({}, n), {
          guild: t
        }))
      })
    }), ei(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), ei(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, O.zu)(s.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null == (e = this.props.guild) ? true : e.features.has(X.GuildFeatures.HUB);
      !t && n && (0, O.Q3)(s.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ee.L.AUTO
      })
    }), ei(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: false
      })
    }), ei(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && T.Z.hideGuildTemplateDirtyTooltip(e.id)
    }), ei(this, "renderMenuPopout", async () => {
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
    }), ei(this, "renderGuildHeaderUpsellPopout", e => {
      let {
        showRoleSubscriptionUpsell: t,
        showDiscoveryLandingPageSettingsUpsell: n,
        showHubPrivacySettingsTooltip: i,
        showMediaChannelUpsell: l,
        showTierTemplatesUpsell: a,
        shouldRenderGuildPowerupPerkCoachmark: o,
        guild: c
      } = this.props;
      if (null == c) return this.renderGuildHeaderDropdownButton(e);
      let u = [];
      return (i && u.push(s.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), t && u.push(s.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), n && u.push(s.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), o && u.push(s.z.GUILD_POWERUP_PERKS_COACHMARK), 0 === u.length) ? this.renderGuildHeaderDropdownButton(e) : (l && u.push(s.z.MEDIA_CHANNEL_UPSELL), a && u.push(s.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, r.jsx)(q.Z, {
        contentTypes: u,
        guild: c,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), ei(this, "renderGuildHeaderDropdownButton", e => {
      let t = e ? d.u04 : d.CJ0;
      return (0, r.jsx)(t, {
        ref: this.guildHeaderDropdownButtonRef,
        size: "xs",
        color: "currentColor"
      })
    }), ei(this, "setAnimatedValueForBanner", e => {
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
    }), ei(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function ed(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: c
  } = e, u = (0, o.e7)([U.Z], () => U.Z.getGuild(n));
  (0, g.J_)(n);
  let p = (0, v.Z)(n),
    f = (0, o.e7)([D.Z], () => D.Z.getGuildDimensions(n).scrollTo),
    T = (0, o.e7)([V.Z], () => V.Z.getChannelId()),
    P = (0, o.e7)([H.Z], () => H.Z.can(X.Plq.MANAGE_GUILD, u)),
    A = (0, o.e7)([M.Z], () => M.Z.isUnavailable(n)),
    w = (0, o.e7)([F.default], () => F.default.getCurrentUser()),
    {
      enableStudyGroup: k
    } = (0, j.s)(u),
    Y = (0, E.ZP)(e => e.currentlyShown.has(s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [W, K] = i.useState(!Y),
    q = (0, h.Z)(n),
    {
      analyticsLocations: Q
    } = (0, b.ZP)(m.Z.GUILD_HEADER);
  i.useEffect(() => {
    n !== q && K(!Y)
  }, [n, q, Y]);
  let [J, et] = (0, E.ZP)(e => [$.XN.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ee.R.GUILD_HEADER_TOOLTIPS)], a.X), en = (0, _.Z)(u), er = (0, d.s9z)(d.JQI), ei = (0, o.e7)([G.Z], () => G.Z.hasLayers()), el = (0, o.e7)([L.Z], () => L.Z.shouldShow(es)), ea = (0, S.Z)(n), eo = (null == u ? true : u.features.has(X.GuildFeatures.HUB)) === true, ec = P && (null == u ? true : u.features.has(X.GuildFeatures.DISCOVERABLE)) === true, ed = (0, o.e7)([N.Z, G.Z], () => null != u && null != w && P && !G.Z.hasLayers() && N.Z.shouldShowGuildTemplateDirtyTooltip(n)), ep = (0, o.e7)([R.Z], () => R.Z.getChannel(c)), {
    isPopoutOpen: ef
  } = (0, y.y)(), eg = null != (t = null == u ? true : u.features.has(X.GuildFeatures.COMMUNITY)) && t, eh = z.ZP.isNewUser(w), em = W && !eh;
  (0, I.Z)(u);
  let eb = (0, O.Nj)(s.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    e_ = (0, x.Z)(n),
    eE = (0, C.Z)(n),
    eO = (0, o.e7)([V.Z], () => V.Z.getChannelId()),
    ev = (0, o.e7)([B.Z], () => B.Z.desyncedVoiceStatesCount),
    ey = (0, Z.Z)(n);
  return (0, r.jsx)(eu, {
    guildId: n,
    hideSelectedChannel: l,
    guild: u,
    scrollToChannel: f,
    selectedChannelId: l ? null : c,
    selectedChannel: ep,
    selectedVoiceChannelId: T,
    voiceStates: p,
    rtcConnectedChannelId: eO,
    rtcDesyncedVoiceStatesCount: ev,
    isUnavailable: A,
    user: w,
    hasChannelNotice: null != en || J,
    anyLayerOpen: er || ei,
    showDiscoveryLandingPageSettingsUpsell: ec,
    showGuildHeaderTutorial: el,
    showGuildTemplateDirtyTooltip: ed,
    showRoleSubscriptionUpsell: ea,
    showHubPrivacySettingsTooltip: eo,
    showNewUnreadsBar: eg,
    showMediaChannelUpsell: e_,
    showTierTemplatesUpsell: eE,
    isHeaderPopoutOpen: ef,
    enableStudyGroup: k,
    isGuildHeaderDismissibleTooltipShown: et,
    canShowCoachMarkAtBottom: W,
    headerAnalyticsLocations: Q,
    isTutorialHighlightDismissed: eb,
    shouldRenderBurstCoachmark: em,
    shouldRenderGuildPowerupPerkCoachmark: false === ey
  })
}