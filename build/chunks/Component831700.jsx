/** Chunk was on 32118 **/
/** chunk id: 831700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk340541 = require("./340541.js"),
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
      enableHangStatus: i,
      showEmptyChannelTopic: l
    } = this.props, o = null == (e = (0, Chunk873696.D)(this.props.subtitle)) ? true : module.subtitle, {
      hovered: a
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk653577.Z, {
      onClick: this.handleVoiceStatusClick,
      channel: exports,
      connected: require,
      subtitle: o,
      hovered: Chunk442837,
      enableHangStatus: Chunk647438,
      showEmptyChannelTopic: Chunk120356
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
    return (0, Chunk951288.jsx)(Chunk207055.Z, {
      channel: module,
      collapsed: require,
      collapsedMax: 6,
      voiceStates: exports,
      withGuildIcon: Chunk647438,
      tabIndex: Chunk120356,
      location: Chunk981631.Sbl.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == module ? null : (0, Chunk951288.jsx)("div", {
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
      isUserOver: p,
      connectChannelDropTarget: h,
      connectChannelDragSource: f,
      connectUserDropTarget: g,
      connectDragPreview: m,
      canReorderChannel: b,
      canMoveMembers: _,
      showTutorial: v,
      hasActiveEvent: j,
      embeddedApps: x,
      isSubscriptionGated: C,
      isFavoriteSuggestion: E,
      withGuildIcon: S,
      hasStartTime: I
    } = this.props, {
      shouldShowActivities: P,
      shouldShowGuildVerificationPopout: N
    } = this.state, Z = (0, Chunk340541.jW)({
      location: "voice_channel"
    }).entrypoints, T = this.getVoiceStatesCount(), A = (0, Chunk951288.jsxs)("li", {
      ref: this.ref,
      className: o()(this.getModeClass(), {
        [Chunk55940.disabled]: this.isDisabled()
      }),
      "data-dnd-name": module.name,
      children: [(0, Chunk951288.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, Chunk951288.jsx)(Chunk481060.yRy, {
          targetElementRef: this.channelItemRef,
          position: "right",
          renderPopout: this.renderPopout,
          spacing: 0,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: Chunk554747 && !Chunk475179 && !Chunk239091 && !Chunk378844 || Chunk378844,
          children: () => (0, Chunk951288.jsx)(Chunk28664.u, {
            text: this.getTooltipText(),
            children: (0, Chunk951288.jsxs)(Chunk473403.ZP, {
              ref: this.channelItemRef,
              className: Chunk55940.iconVisibility,
              iconClassName: o()({
                [Chunk55940.iconLive]: Chunk557135 || Chunk66999
              }),
              hasActiveEvent: Chunk557135,
              channel: module,
              selected: !Chunk305325 && exports,
              connected: require,
              unread: require ? Chunk647438 : true,
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
                unread: Chunk647438,
                mentionCount: Chunk442837,
                userCount: Chunk763624,
                embeddedActivitiesCount: Chunk873696.length,
                isSubscriptionGated: Chunk446226
              }),
              "aria-describedby": (0, Chunk718589.Z)({
                channel: module,
                embeddedApps: Chunk873696
              }),
              withGuildIcon: Chunk281956,
              children: [Chunk305325 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
              }), !Chunk305325 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                children: [this.renderOpenChatButton(), this.renderInviteButton(), Chunk574176 ? this.renderOptionsButton({
                  onContextMenu: this.handleContextMenu
                }) : this.renderEditButton(), this.renderChannelInfo()]
              })]
            })
          })
        })
      }), this.renderVoiceUsers()]
    });
    return Chunk168611 && (A = Chunk619915(Chunk359110)), Chunk973285 && (A = Chunk146773(Chunk888651(Chunk359110))), Chunk933557 && (A = (0, Chunk951288.jsx)(Chunk155409.Z, {
      childRef: this.ref,
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: false,
      children: Chunk359110
    })), Chunk359110
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
      a && d.Z.updateChatOpen(n.id, true), j.Z.handleVoiceConnect({
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
      null != i && (0, p.jW)(e, async () => {
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
      null != t && (0, S.n)(t) && (0, E.hk)(t), this.handleVoiceConnect()
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
      if (s) return (0, r.jsx)(N.Z, {
        type: N.R.VOICE,
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
        text: J.intl.string(J.t.ZXxLQk),
        children: (0, r.jsx)(u.P3F, {
          className: o()($.iconItem, n ? $.alwaysShown : null),
          onClick: () => {
            d.Z.updateChatOpen(e.id, true), (0, A.Kh)(e.id)
          },
          "aria-label": J.intl.string(J.t.ZXxLQk),
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
      return this.isFull() && !e ? J.intl.string(J.t.rZfiNj) : null
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
  })), d = (0, a.e7)([B.ZP], () => B.ZP.resolveUnreadSetting(n)), p = (0, a.cj)([L.Z, k.Z, G.Z], () => {
    let e = L.Z.getChannel(n.parent_id),
      r = k.Z.getCheck(n.guild_id);
    return {
      canManageChannel: G.Z.can(X.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: true !== i && (t.id === Q._ || (null != e ? G.Z.can(X.Plq.MANAGE_CHANNELS, e) : G.Z.can(X.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: G.Z.can(X.Plq.MOVE_MEMBERS, n),
      locked: !G.Z.can(X.Plq.CONNECT, n),
      bypassLimit: G.Z.can(X.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), h = (0, a.e7)([F.Z], () => F.Z.hasVideo(n.id)), f = (0, g.ZP)(n), m = (0, v.ZP)(n), O = (0, P.qY)(n.id), {
    enabled: y
  } = b.W.useExperiment({
    guildId: t.id,
    location: "VoiceChannel"
  }), j = (0, a.e7)([_.Z], () => !!y && null != _.Z.getStartTime(n), [n, y]), {
    isSubscriptionGated: x,
    needSubscriptionToAccess: E
  } = (0, I.Z)(n.id), S = (0, C.Z)(), N = (0, a.e7)([B.ZP], () => B.ZP.isFavorite(t.id, n.id)), w = e.connected || (null == S ? true : S.channelId) === n.id, {
    enableHangStatus: A,
    showEmptyChannelTopic: R
  } = (0, Z.bN)({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }), {
    enableOpenTIVForPing: D
  } = T.A.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: false
  }), M = (0, z.Z)({
    channel: n,
    isChannelSelected: o,
    isChannelCollapsed: s,
    voiceStates: c,
    isSubscriptionGated: x,
    needSubscriptionToAccess: E,
    enableConnectedUserLimit: true,
    enableActivities: true
  }), V = w && null == M;
  return (0, r.jsx)(ei, en(et({
    channelName: m,
    embeddedApps: f,
    embeddedActivityType: X.IIU.PLAYING,
    video: h,
    hasActiveEvent: null != O,
    isSubscriptionGated: x,
    needSubscriptionToAccess: E
  }, u, p, e), {
    connected: w,
    isFavoriteSuggestion: l && !N,
    forceShowButtons: V,
    channelInfo: M,
    resolvedUnreadSetting: d,
    enableHangStatus: A,
    showEmptyChannelTopic: R,
    enableOpenTIVForPing: D,
    hasChannelInfo: null != M,
    hasStartTime: j
  }))
}