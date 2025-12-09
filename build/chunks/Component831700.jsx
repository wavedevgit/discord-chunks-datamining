/** Chunk was on 83037 **/
/** chunk id: 831700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk973285 = require("./973285.js"),
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
  Chunk55940 = require("./55940.js");

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ee(e, t, n[t])
    })
  }
  return e
}

function en(e, t) {
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
class er extends Chunk98597.ZP {
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
    if (require) return Chunk55940.containerUserOver;
    if (null != exports)
      if (module > exports) return Chunk55940.containerDragAfter;
      else return Chunk55940.containerDragBefore;
    return Chunk55940.containerDefault
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      showEmptyChannelTopic: i
    } = this.props, l = null == (e = (0, Chunk873696.D)(this.props.subtitle)) ? true : module.subtitle, {
      hovered: o
    } = this.state;
    return (0, Chunk54381.jsx)(Chunk653577.Z, {
      onClick: this.handleVoiceStatusClick,
      channel: exports,
      connected: require,
      subtitle: Chunk120356,
      hovered: o,
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
      className: Chunk55940.channelInfo,
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
      mentionCount: a,
      locked: s,
      sorting: d,
      isUserOver: f,
      connectChannelDropTarget: h,
      connectChannelDragSource: p,
      connectUserDropTarget: g,
      connectDragPreview: m,
      canReorderChannel: b,
      canMoveMembers: _,
      showTutorial: y,
      hasActiveEvent: j,
      embeddedApps: x,
      isSubscriptionGated: C,
      isFavoriteSuggestion: E,
      withGuildIcon: S,
      hasStartTime: I,
      shouldHighlightChannel: P,
      shouldUseAnimatedWaveform: N
    } = this.props, {
      shouldShowActivities: Z,
      shouldShowGuildVerificationPopout: w
    } = this.state, T = Chunk66999 || Chunk554747, A = this.getVoiceStatesCount(), D = (0, Chunk54381.jsxs)("li", {
      ref: this.ref,
      className: o()(this.getModeClass(), {
        [Chunk55940.disabled]: this.isDisabled(),
        [Chunk55940.voiceChannelHighlightContainer]: Chunk66999
      }),
      "data-dnd-name": module.name,
      children: [Chunk66999 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk55940.voiceChannelHighlightBorder
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk55940.voiceChannelHighlightGlow
        })]
      }), (0, Chunk54381.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, Chunk54381.jsx)(Chunk481060.yRy, {
          targetElementRef: this.channelItemRef,
          position: "right",
          renderPopout: this.renderPopout,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: Chunk378844 && !Chunk475179 && !Chunk239091 && !Chunk574176 || Chunk574176,
          children: () => (0, Chunk54381.jsx)(Chunk28664.u, {
            text: this.getTooltipText(),
            children: (0, Chunk54381.jsxs)(Chunk473403.ZP, {
              ref: this.channelItemRef,
              className: Chunk55940.iconVisibility,
              iconClassName: o()({
                [Chunk55940.iconLive]: Chunk933557 || Chunk281956 || Chunk763624
              }),
              hasActiveEvent: Chunk933557,
              channel: module,
              selected: !Chunk446226 && exports,
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
              isFavoriteSuggestion: Chunk446226,
              "aria-label": (0, Chunk201895.ZP)({
                channel: module,
                unread: Chunk473749,
                mentionCount: Chunk442837,
                userCount: Chunk359110,
                embeddedActivitiesCount: Chunk557135.length,
                isSubscriptionGated: Chunk873696
              }),
              "aria-describedby": (0, Chunk718589.Z)({
                channel: module,
                embeddedApps: Chunk557135
              }),
              withGuildIcon: Chunk305325,
              children: [Chunk446226 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
                children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
              }), !Chunk446226 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
                children: [this.renderOpenChatButton(), this.renderInviteButton(), this.renderEditButton(), this.renderChannelInfo()]
              })]
            })
          })
        })
      }), this.renderVoiceUsers()]
    });
    return Chunk526139 && (D = Chunk619915(Chunk695346)), Chunk973285 && (D = Chunk146773(Chunk888651(Chunk695346))), Chunk168611 && (D = (0, Chunk54381.jsx)(Chunk155409.Z, {
      childRef: this.ref,
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: false,
      children: Chunk695346
    })), Chunk695346
  }
  constructor(...e) {
    super(...e), ee(this, "state", {
      shouldShowActivities: false,
      shouldShowGuildVerificationPopout: false,
      hovered: false
    }), ee(this, "ref", i.createRef()), ee(this, "channelItemRef", i.createRef()), ee(this, "activitiesHideTimeout", new s.V7), ee(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: false
      })
    }), ee(this, "handleVoiceConnect", () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: r,
        needSubscriptionToAccess: i,
        enableOpenTIVForPing: l,
        mentionCount: o
      } = this.props;
      r && this.setState({
        shouldShowGuildVerificationPopout: true
      });
      let a = l && o > 0;
      a && d.Z.updateChatOpen(n.id, true), x.Z.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: i,
        routeDirectlyToChannel: a,
        locked: e
      })
    }), ee(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = M.Z.getGuild(t.getGuildId());
      null != i && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, en(et({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), ee(this, "handleMouseEnter", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: true,
        hovered: true
      })
    }), ee(this, "handleMouseLeave", () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: false,
        hovered: false
      }))
    }), ee(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: false
      })
    }), ee(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, I.n)(t) && (0, S.hk)(t), this.handleVoiceConnect()
    }), ee(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: n
      } = this.props;
      t && (e.stopPropagation(), (0, m.Z)({
        channel: n
      }))
    }), ee(this, "renderPopout", () => {
      let {
        channel: e,
        voiceStates: t,
        sorting: n,
        isUserOver: i,
        selected: l,
        guild: o
      } = this.props, {
        shouldShowActivities: a,
        shouldShowGuildVerificationPopout: s
      } = this.state;
      if (a && !n && !i && !s) {
        let n = D.SE.getSetting().includes(o.id);
        return (0, r.jsx)(K.Z, {
          onAction: this.closePopout,
          guild: o,
          channel: e,
          voiceStates: t,
          isChannelSelected: l,
          shouldShowSettingNudge: n
        })
      }
      if (s) return (0, r.jsx)(Z.Z, {
        type: Z.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), ee(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(c.u, {
        asContainer: true,
        text: J.intl.string(J.t.ZXxLQg),
        children: (0, r.jsx)(u.P3F, {
          className: o()($.iconItem, n ? $.alwaysShown : null),
          onClick: () => {
            d.Z.updateChatOpen(e.id, true), (0, A.Kh)(e.id)
          },
          "aria-label": J.intl.string(J.t.ZXxLQg),
          children: (0, r.jsx)(u.kBi, {
            size: "xs",
            color: "currentColor",
            className: $.actionIcon
          })
        })
      })
    }), ee(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? J.intl.string(J.t.rZfiNq) : null
    })
  }
}
let ei = (0, Chunk146773.B)((0, Chunk888651.Q)(er));

function el(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: l,
    selected: o,
    collapsed: s,
    voiceStates: c
  } = e, u = (0, a.cj)([U.ZP], () => ({
    unread: U.ZP.hasUnread(n.id),
    mentionCount: U.ZP.getMentionCount(n.id)
  })), d = (0, a.e7)([B.ZP], () => B.ZP.resolveUnreadSetting(n)), f = (0, a.cj)([L.Z, k.Z, G.Z], () => {
    let e = L.Z.getChannel(n.parent_id),
      r = k.Z.getCheck(n.guild_id);
    return {
      canManageChannel: G.Z.can(Q.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: true !== i && (t.id === X._ || (null != e ? G.Z.can(Q.Plq.MANAGE_CHANNELS, e) : G.Z.can(Q.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: G.Z.can(Q.Plq.MOVE_MEMBERS, n),
      locked: !G.Z.can(Q.Plq.CONNECT, n),
      bypassLimit: G.Z.can(Q.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), h = (0, a.e7)([F.Z], () => F.Z.hasVideo(n.id)), p = (0, g.ZP)(n), m = (0, j.ZP)(n), O = (0, N.qY)(n.id), {
    enabled: v
  } = b.W.useExperiment({
    guildId: t.id,
    location: "VoiceChannel"
  }), x = (0, a.e7)([y.Z], () => !!v && null != y.Z.getStartTime(n), [n, v]), {
    isSubscriptionGated: C,
    needSubscriptionToAccess: S
  } = (0, P.Z)(n.id), I = (0, E.Z)(), Z = (0, a.e7)([B.ZP], () => B.ZP.isFavorite(t.id, n.id)), A = e.connected || (null == I ? true : I.channelId) === n.id, {
    enableHangStatus: R,
    showEmptyChannelTopic: D
  } = (0, w.bN)({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }), {
    enableOpenTIVForPing: M
  } = T.A.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: false
  }), {
    enableHighlight: V,
    enableWaveformIcon: H
  } = (0, _.M)(t.id, "VoiceChannel"), z = null != c && c.length > 0, K = V && z, Y = H && z, q = (0, W.Z)({
    channel: n,
    isChannelSelected: o,
    isChannelCollapsed: s,
    voiceStates: c,
    isSubscriptionGated: C,
    needSubscriptionToAccess: S,
    enableConnectedUserLimit: true,
    enableActivities: true
  }), J = A && null == q;
  return (0, r.jsx)(ei, en(et({
    channelName: m,
    embeddedApps: p,
    embeddedActivityType: Q.IIU.PLAYING,
    video: h,
    hasActiveEvent: null != O,
    isSubscriptionGated: C,
    needSubscriptionToAccess: S
  }, u, f, e), {
    connected: A,
    isFavoriteSuggestion: l && !Z,
    forceShowButtons: J,
    channelInfo: q,
    resolvedUnreadSetting: d,
    enableHangStatus: R,
    showEmptyChannelTopic: D,
    enableOpenTIVForPing: M,
    hasChannelInfo: null != q,
    hasStartTime: x,
    shouldHighlightChannel: K,
    shouldUseAnimatedWaveform: Y
  }))
}