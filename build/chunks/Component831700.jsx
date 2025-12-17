/** Chunk was on 67000 **/
/** chunk id: 831700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ei
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk888651 = require("./888651.js"),
  Chunk619915 = require("./619915.js"),
  Chunk117358 = require("./117358.jsx"),
  Chunk526139 = require("./526139.js"),
  Chunk168611 = require("./168611.js"),
  Chunk201895 = require("./201895.js"),
  Chunk718589 = require("./718589.js"),
  Chunk933557 = require("./933557.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk873696 = require("./873696.js"),
  Chunk446226 = require("./446226.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk66999 = require("./66999.js"),
  Chunk554747 = require("./554747.js"),
  Chunk378844 = require("./378844.jsx"),
  Chunk574176 = require("./574176.js"),
  Chunk763624 = require("./763624.js"),
  Chunk359110 = require("./359110.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk607744 = require("./607744.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js"),
  Chunk98597 = require("./98597.jsx"),
  Chunk648501 = require("./648501.jsx"),
  Chunk473403 = require("./473403.jsx"),
  Chunk830993 = require("./830993.jsx"),
  Chunk653577 = require("./653577.jsx"),
  Chunk207055 = require("./207055.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk642915 = require("./642915.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}

function et(e, t) {
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
class en extends Chunk98597.ZP {
  componentWillUnmount() {
    this.activitiesHideTimeout.stop()
  }
  getVoiceStatesCount() {
    var e;
    let {
      voiceStates: t
    } = this.props;
    return null != (e = null == exports ? true : exports.length) ? module : 0
  }
  isFull() {
    let {
      channel: e
    } = this.props;
    return (0, Chunk934415.rY)(module, Chunk979651.Z, Chunk430824.Z)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (require) return Chunk642915.containerUserOver;
    if (null != exports)
      if (module > exports) return Chunk642915.containerDragAfter;
      else return Chunk642915.containerDragBefore;
    return Chunk642915.containerDefault
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      showEmptyChannelTopic: i
    } = this.props, l = null == (e = (0, Chunk873696.D)(this.props.subtitle)) ? true : module.subtitle, {
      hovered: a
    } = this.state;
    return (0, Chunk54381.jsx)(Chunk653577.Z, {
      onClick: this.handleVoiceStatusClick,
      channel: exports,
      connected: require,
      subtitle: Chunk120356,
      hovered: a,
      showEmptyChannelTopic: Chunk473749
    })
  }
  renderVoiceUsers() {
    let {
      channel: e,
      voiceStates: t,
      collapsed: n,
      withGuildIcon: i,
      tabIndex: l
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk207055.Z, {
      channel: module,
      collapsed: require,
      collapsedMax: 6,
      voiceStates: exports,
      withGuildIcon: Chunk473749,
      tabIndex: Chunk120356,
      location: Chunk981631.Sbl.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == module ? null : (0, Chunk54381.jsx)("div", {
      className: Chunk642915.channelInfo,
      children: module
    })
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      unread: i,
      resolvedUnreadSetting: l,
      mentionCount: o,
      locked: s,
      sorting: d,
      isUserOver: f,
      connectChannelDropTarget: h,
      connectChannelDragSource: p,
      connectUserDropTarget: g,
      connectDragPreview: b,
      canReorderChannel: m,
      canMoveMembers: y,
      showTutorial: j,
      hasActiveEvent: C,
      embeddedApps: x,
      isSubscriptionGated: E,
      isFavoriteSuggestion: S,
      withGuildIcon: I,
      hasStartTime: _,
      shouldHighlightChannel: P,
      shouldUseAnimatedWaveform: N
    } = this.props, {
      shouldShowActivities: Z,
      shouldShowGuildVerificationPopout: w
    } = this.state, T = Chunk554747 || Chunk378844, R = this.getVoiceStatesCount(), D = (0, Chunk54381.jsxs)("li", {
      ref: this.ref,
      className: a()(this.getModeClass(), {
        [Chunk642915.disabled]: this.isDisabled(),
        [Chunk642915.voiceChannelHighlightContainer]: Chunk554747
      }),
      "data-dnd-name": module.name,
      children: [Chunk554747 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk642915.voiceChannelHighlightBorder
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk642915.voiceChannelHighlightGlow
        })]
      }), (0, Chunk54381.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, Chunk54381.jsx)(Chunk481060.yRy, {
          targetElementRef: this.channelItemRef,
          position: "right",
          renderPopout: this.renderPopout,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: Chunk574176 && !Chunk475179 && !Chunk239091 && !Chunk763624 || Chunk763624,
          children: () => (0, Chunk54381.jsx)(Chunk28664.u, {
            text: this.getTooltipText(),
            children: (0, Chunk54381.jsxs)(Chunk473403.ZP, {
              ref: this.channelItemRef,
              className: Chunk642915.iconVisibility,
              iconClassName: a()({
                [Chunk642915.iconLive]: Chunk557135 || Chunk66999 || Chunk359110
              }),
              hasActiveEvent: Chunk557135,
              channel: module,
              selected: !Chunk305325 && exports,
              connected: require,
              unread: require ? Chunk473749 : true,
              resolvedUnreadSetting: Chunk120356,
              mentionCount: Chunk442837,
              locked: Chunk846519,
              subtitle: this.renderSubtitle(),
              onClick: () => {
                this.handleClick()
              },
              onContextMenu: e => {
                this.handleContextMenu(e)
              },
              connectDragPreview: Chunk117358,
              isFavoriteSuggestion: Chunk305325,
              "aria-label": (0, Chunk201895.ZP)({
                channel: module,
                unread: Chunk473749,
                mentionCount: Chunk442837,
                userCount: Chunk695346,
                embeddedActivitiesCount: Chunk873696.length,
                isSubscriptionGated: Chunk446226
              }),
              "aria-describedby": (0, Chunk718589.Z)({
                channel: module,
                embeddedApps: Chunk873696
              }),
              withGuildIcon: Chunk281956,
              children: [Chunk305325 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
                children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
              }), !Chunk305325 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
                children: [this.renderOpenChatButton(), this.renderInviteButton(), this.renderEditButton(), this.renderChannelInfo()]
              })]
            })
          })
        })
      }), this.renderVoiceUsers()]
    });
    return Chunk168611 && (D = Chunk619915(Chunk592125)), Chunk526139 && (D = Chunk146773(Chunk888651(Chunk592125))), Chunk933557 && (D = (0, Chunk54381.jsx)(Chunk155409.Z, {
      childRef: this.ref,
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: false,
      children: Chunk592125
    })), Chunk592125
  }
  constructor(...e) {
    super(...e), $(this, "state", {
      shouldShowActivities: false,
      shouldShowGuildVerificationPopout: false,
      hovered: false
    }), $(this, "ref", i.createRef()), $(this, "channelItemRef", i.createRef()), $(this, "activitiesHideTimeout", new s.V7), $(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: false
      })
    }), $(this, "handleVoiceConnect", () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: r,
        needSubscriptionToAccess: i,
        enableOpenTIVForPing: l,
        mentionCount: a
      } = this.props;
      r && this.setState({
        shouldShowGuildVerificationPopout: true
      });
      let o = l && a > 0;
      o && d.Z.updateChatOpen(n.id, true), C.Z.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: i,
        routeDirectlyToChannel: o,
        locked: e
      })
    }), $(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = M.Z.getGuild(t.getGuildId());
      null != i && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, et(ee({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), $(this, "handleMouseEnter", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: true,
        hovered: true
      })
    }), $(this, "handleMouseLeave", () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: false,
        hovered: false
      }))
    }), $(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: false
      })
    }), $(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, I.n)(t) && (0, S.hk)(t), this.handleVoiceConnect()
    }), $(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: n
      } = this.props;
      t && (e.stopPropagation(), (0, b.Z)({
        channel: n
      }))
    }), $(this, "renderPopout", () => {
      let {
        channel: e,
        voiceStates: t,
        sorting: n,
        isUserOver: i,
        selected: l,
        guild: a
      } = this.props, {
        shouldShowActivities: o,
        shouldShowGuildVerificationPopout: s
      } = this.state;
      if (o && !n && !i && !s) {
        let n = R.SE.getSetting().includes(a.id);
        return (0, r.jsx)(W.Z, {
          onAction: this.closePopout,
          guild: a,
          channel: e,
          voiceStates: t,
          isChannelSelected: l,
          shouldShowSettingNudge: n
        })
      }
      if (s) return (0, r.jsx)(N.Z, {
        type: N.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), $(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(c.u, {
        asContainer: true,
        text: X.intl.string(X.t.ZXxLQg),
        children: (0, r.jsx)(u.P3F, {
          className: a()(J.iconItem, n ? J.alwaysShown : null),
          onClick: () => {
            d.Z.updateChatOpen(e.id, true), (0, T.Kh)(e.id)
          },
          "aria-label": X.intl.string(X.t.ZXxLQg),
          children: (0, r.jsx)(u.kBi, {
            size: "xs",
            color: "currentColor",
            className: J.actionIcon
          })
        })
      })
    }), $(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? X.intl.string(X.t.rZfiNq) : null
    })
  }
}
let er = (0, Chunk146773.B)((0, Chunk888651.Q)(en));

function ei(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: l,
    selected: a,
    collapsed: s,
    voiceStates: c
  } = e, u = (0, o.cj)([G.ZP], () => ({
    unread: G.ZP.hasUnread(n.id),
    mentionCount: G.ZP.getMentionCount(n.id)
  })), d = (0, o.e7)([U.ZP], () => U.ZP.resolveUnreadSetting(n)), f = (0, o.cj)([D.Z, L.Z, k.Z], () => {
    let e = D.Z.getChannel(n.parent_id),
      r = L.Z.getCheck(n.guild_id);
    return {
      canManageChannel: k.Z.can(q.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: true !== i && (t.id === Q._ || (null != e ? k.Z.can(q.Plq.MANAGE_CHANNELS, e) : k.Z.can(q.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: k.Z.can(q.Plq.MOVE_MEMBERS, n),
      locked: !k.Z.can(q.Plq.CONNECT, n),
      bypassLimit: k.Z.can(q.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), h = (0, o.e7)([B.Z], () => B.Z.hasVideo(n.id)), p = (0, g.ZP)(n), b = (0, j.ZP)(n), O = (0, P.qY)(n.id), v = (0, o.e7)([y.Z], () => null != y.Z.getStartTime(n), [n]), {
    isSubscriptionGated: C,
    needSubscriptionToAccess: x
  } = (0, _.Z)(n.id), S = (0, E.Z)(), I = (0, o.e7)([U.ZP], () => U.ZP.isFavorite(t.id, n.id)), N = e.connected || (null == S ? true : S.channelId) === n.id, {
    enableHangStatus: T,
    showEmptyChannelTopic: A
  } = (0, Z.bN)({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }), {
    enableOpenTIVForPing: R
  } = w.A.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: false
  }), {
    enableHighlight: M,
    enableWaveformIcon: F
  } = (0, m.M)(t.id, "VoiceChannel"), V = null != c && c.length > 0, z = M && V, W = F && V, K = (0, H.Z)({
    channel: n,
    isChannelSelected: a,
    isChannelCollapsed: s,
    voiceStates: c,
    isSubscriptionGated: C,
    needSubscriptionToAccess: x,
    enableConnectedUserLimit: true,
    enableActivities: true
  }), Y = N && null == K;
  return (0, r.jsx)(er, et(ee({
    channelName: b,
    embeddedApps: p,
    embeddedActivityType: q.IIU.PLAYING,
    video: h,
    hasActiveEvent: null != O,
    isSubscriptionGated: C,
    needSubscriptionToAccess: x
  }, u, f, e), {
    connected: N,
    isFavoriteSuggestion: l && !I,
    forceShowButtons: Y,
    channelInfo: K,
    resolvedUnreadSetting: d,
    enableHangStatus: T,
    showEmptyChannelTopic: A,
    enableOpenTIVForPing: R,
    hasChannelInfo: null != K,
    hasStartTime: v,
    shouldHighlightChannel: z,
    shouldUseAnimatedWaveform: W
  }))
}