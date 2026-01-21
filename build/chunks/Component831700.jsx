/** Chunk was on 82124 **/
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
    return null != (e = null == t ? true : t.length) ? e : 0
  }
  isFull() {
    let {
      channel: e
    } = this.props;
    return (0, F.rY)(e, B.Z, M.Z)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return J.containerUserOver;
    if (null != t)
      if (e > t) return J.containerDragAfter;
      else return J.containerDragBefore;
    return J.containerDefault
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      showEmptyChannelTopic: i
    } = this.props, l = null == (e = (0, C.D)(this.props.subtitle)) ? true : e.subtitle, {
      hovered: a
    } = this.state;
    return (0, r.jsx)(K.Z, {
      onClick: this.handleVoiceStatusClick,
      channel: t,
      connected: n,
      subtitle: l,
      hovered: a,
      showEmptyChannelTopic: i
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
    return (0, r.jsx)(Y.Z, {
      channel: e,
      collapsed: n,
      collapsedMax: 6,
      voiceStates: t,
      withGuildIcon: i,
      tabIndex: l,
      location: q.Sbl.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, r.jsx)("div", {
      className: J.channelInfo,
      children: e
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
      isUserOver: p,
      connectChannelDropTarget: f,
      connectChannelDragSource: h,
      connectUserDropTarget: g,
      connectDragPreview: m,
      canReorderChannel: b,
      canMoveMembers: y,
      showTutorial: j,
      hasActiveEvent: x,
      embeddedApps: C,
      isSubscriptionGated: E,
      isFavoriteSuggestion: S,
      withGuildIcon: _,
      hasStartTime: I,
      shouldHighlightChannel: P,
      shouldUseAnimatedWaveform: Z
    } = this.props, {
      shouldShowActivities: N,
      shouldShowGuildVerificationPopout: T
    } = this.state, A = P || Z, R = this.getVoiceStatesCount(), D = (0, r.jsxs)("li", {
      ref: this.ref,
      className: a()(this.getModeClass(), {
        [J.disabled]: this.isDisabled(),
        [J.voiceChannelHighlightContainer]: P
      }),
      "data-dnd-name": e.name,
      children: [P && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: J.voiceChannelHighlightBorder
        }), (0, r.jsx)("div", {
          className: J.voiceChannelHighlightGlow
        })]
      }), (0, r.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, r.jsx)(u.yRy, {
          targetElementRef: this.channelItemRef,
          position: "right",
          renderPopout: this.renderPopout,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: N && !d && !p && !T || T,
          children: () => (0, r.jsx)(c.u, {
            text: this.getTooltipText(),
            children: (0, r.jsxs)(z.ZP, {
              ref: this.channelItemRef,
              className: J.iconVisibility,
              iconClassName: a()({
                [J.iconLive]: x || I || A
              }),
              hasActiveEvent: x,
              channel: e,
              selected: !S && t,
              connected: n,
              unread: n ? i : true,
              resolvedUnreadSetting: l,
              mentionCount: o,
              locked: s,
              subtitle: this.renderSubtitle(),
              onClick: () => {
                this.handleClick()
              },
              onContextMenu: e => {
                this.handleContextMenu(e)
              },
              connectDragPreview: m,
              isFavoriteSuggestion: S,
              "aria-label": (0, v.ZP)({
                channel: e,
                unread: i,
                mentionCount: o,
                userCount: R,
                embeddedActivitiesCount: C.length,
                isSubscriptionGated: E
              }),
              "aria-describedby": (0, O.Z)({
                channel: e,
                embeddedApps: C
              }),
              withGuildIcon: _,
              children: [S && (0, r.jsxs)(r.Fragment, {
                children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
              }), !S && (0, r.jsxs)(r.Fragment, {
                children: [this.renderOpenChatButton(), this.renderInviteButton(), this.renderEditButton(), this.renderChannelInfo()]
              })]
            })
          })
        })
      }), this.renderVoiceUsers()]
    });
    return y && (D = g(D)), b && (D = f(h(D))), j && (D = (0, r.jsx)(w.Z, {
      childRef: this.ref,
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: false,
      children: D
    })), D
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
      o && d.Z.updateChatOpen(n.id, true), x.Z.handleVoiceConnect({
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
      null != i && (0, p.jW)(e, async () => {
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
      null != t && (0, _.n)(t) && (0, S.hk)(t), this.handleVoiceConnect()
    }), $(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: n
      } = this.props;
      t && (e.stopPropagation(), (0, m.Z)({
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
      if (s) return (0, r.jsx)(Z.Z, {
        type: Z.R.VOICE,
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
        text: Q.intl.string(Q.t.ZXxLQg),
        children: (0, r.jsx)(u.P3F, {
          className: a()(J.iconItem, n ? J.alwaysShown : null),
          onClick: () => {
            d.Z.updateChatOpen(e.id, true), (0, A.Kh)(e.id)
          },
          "aria-label": Q.intl.string(Q.t.ZXxLQg),
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
      return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNq) : null
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
  } = e, u = (0, o.cj)([U.ZP], () => ({
    unread: U.ZP.hasUnread(n.id),
    mentionCount: U.ZP.getMentionCount(n.id)
  })), d = (0, o.e7)([G.ZP], () => G.ZP.resolveUnreadSetting(n)), p = (0, o.cj)([D.Z, k.Z, L.Z], () => {
    let e = D.Z.getChannel(n.parent_id),
      r = k.Z.getCheck(n.guild_id);
    return {
      canManageChannel: L.Z.can(q.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: true !== i && (t.id === X._ || (null != e ? L.Z.can(q.Plq.MANAGE_CHANNELS, e) : L.Z.can(q.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: L.Z.can(q.Plq.MOVE_MEMBERS, n),
      locked: !L.Z.can(q.Plq.CONNECT, n),
      bypassLimit: L.Z.can(q.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), f = (0, o.e7)([B.Z], () => B.Z.hasVideo(n.id)), h = (0, g.ZP)(n), m = (0, j.ZP)(n), v = (0, P.qY)(n.id), O = (0, o.e7)([y.Z], () => null != y.Z.getStartTime(n), [n]), {
    isSubscriptionGated: x,
    needSubscriptionToAccess: C
  } = (0, I.Z)(n.id), S = (0, E.Z)(), _ = (0, o.e7)([G.ZP], () => G.ZP.isFavorite(t.id, n.id)), Z = e.connected || (null == S ? true : S.channelId) === n.id, {
    enableHangStatus: A,
    showEmptyChannelTopic: w
  } = (0, N.bN)({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }), {
    enableOpenTIVForPing: R
  } = T.A.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: false
  }), {
    enableHighlight: M,
    enableWaveformIcon: F
  } = (0, b.M)(t.id, "VoiceChannel"), H = null != c && c.length > 0, z = M && H, W = F && H, K = (0, V.Z)({
    channel: n,
    isChannelSelected: a,
    isChannelCollapsed: s,
    voiceStates: c,
    isSubscriptionGated: x,
    needSubscriptionToAccess: C,
    enableConnectedUserLimit: true,
    enableActivities: true
  }), Y = Z && null == K;
  return (0, r.jsx)(er, et(ee({
    channelName: m,
    embeddedApps: h,
    embeddedActivityType: q.IIU.PLAYING,
    video: f,
    hasActiveEvent: null != v,
    isSubscriptionGated: x,
    needSubscriptionToAccess: C
  }, u, p, e), {
    connected: Z,
    isFavoriteSuggestion: l && !_,
    forceShowButtons: Y,
    channelInfo: K,
    resolvedUnreadSetting: d,
    enableHangStatus: A,
    showEmptyChannelTopic: w,
    enableOpenTIVForPing: R,
    hasChannelInfo: null != K,
    hasStartTime: O,
    shouldHighlightChannel: z,
    shouldUseAnimatedWaveform: W
  }))
}