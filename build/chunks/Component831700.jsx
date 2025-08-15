/** Chunk was on 85362 **/
/** chunk id: 831700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk888651 = require("./888651.js"),
  Chunk619915 = require("./619915.js"),
  Chunk117358 = require("./117358.jsx"),
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

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Q(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
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
class ee extends Chunk98597.ZP {
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
      allowChannelTopic: l
    } = this.props, o = null == (e = (0, Chunk873696.D)(this.props.subtitle)) ? true : module.subtitle, {
      hovered: a
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk653577.Z, {
      onClick: this.handleVoiceStatusClick,
      channel: exports,
      connected: require,
      subtitle: o,
      hovered: Chunk442837,
      enableHangStatus: Chunk73800,
      allowChannelTopic: Chunk120356
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
    return (0, Chunk255367.jsx)(Chunk207055.Z, {
      channel: module,
      collapsed: require,
      collapsedMax: 6,
      voiceStates: exports,
      withGuildIcon: Chunk73800,
      tabIndex: Chunk120356,
      location: Chunk981631.Sbl.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == module ? null : (0, Chunk255367.jsx)("div", {
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
      sorting: u,
      isUserOver: d,
      connectChannelDropTarget: p,
      connectChannelDragSource: f,
      connectUserDropTarget: h,
      connectDragPreview: g,
      canReorderChannel: _,
      canMoveMembers: O,
      showTutorial: y,
      hasActiveEvent: v,
      embeddedApps: j,
      isSubscriptionGated: C,
      isFavoriteSuggestion: E,
      withGuildIcon: x
    } = this.props, {
      shouldShowActivities: S,
      shouldShowGuildVerificationPopout: I
    } = this.state, N = (0, Chunk340541.jW)({
      location: "voice_channel"
    }).entrypoints, w = this.getVoiceStatesCount(), T = (0, Chunk255367.jsxs)("li", {
      ref: this.ref,
      className: o()(this.getModeClass(), {
        [Chunk55940.disabled]: this.isDisabled()
      }),
      "data-dnd-name": module.name,
      children: [(0, Chunk255367.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, Chunk255367.jsx)(Chunk481060.yRy, {
          targetElementRef: this.channelItemRef,
          position: "right",
          renderPopout: this.renderPopout,
          spacing: 0,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: Chunk378844 && !Chunk475179 && !Chunk239091 && !Chunk574176 || Chunk574176,
          children: () => (0, Chunk255367.jsx)(Chunk481060.ua7, {
            text: this.getTooltipText(),
            children: c => {
              var {
                onClick: u,
                onContextMenu: d
              } = c, p = function(e, t) {
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
              }(c, ["onClick", "onContextMenu"]);
              return (0, r.jsxs)(H.ZP, $(J({
                ref: this.channelItemRef,
                className: X.iconVisibility,
                iconClassName: o()({
                  [X.iconLive]: v
                }),
                hasActiveEvent: v,
                channel: e,
                selected: !E && t,
                connected: n,
                unread: n ? i : true,
                resolvedUnreadSetting: l,
                mentionCount: a,
                locked: s,
                subtitle: this.renderSubtitle(),
                onClick: () => {
                  this.handleClick(), null == u || u()
                },
                onContextMenu: e => {
                  this.handleContextMenu(e), null == d || d()
                },
                connectDragPreview: g,
                isFavoriteSuggestion: E,
                "aria-label": (0, m.ZP)({
                  channel: e,
                  unread: i,
                  mentionCount: a,
                  userCount: w,
                  embeddedActivitiesCount: j.length,
                  isSubscriptionGated: C
                }),
                "aria-describedby": (0, b.Z)({
                  channel: e,
                  embeddedApps: j
                }),
                withGuildIcon: x
              }, p), {
                children: [E && (0, r.jsxs)(r.Fragment, {
                  children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
                }), !E && (0, r.jsxs)(r.Fragment, {
                  children: [this.renderOpenChatButton(), this.renderInviteButton(), N ? this.renderOptionsButton({
                    onContextMenu: this.handleContextMenu
                  }) : this.renderEditButton(), this.renderChannelInfo()]
                })]
              }))
            }
          })
        })
      }), this.renderVoiceUsers()]
    });
    return Chunk557135 && (T = Chunk619915(Chunk695346)), Chunk933557 && (T = Chunk146773(Chunk888651(Chunk695346))), Chunk873696 && (T = (0, Chunk255367.jsx)(Chunk155409.Z, {
      childRef: this.ref,
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: false,
      children: Chunk695346
    })), Chunk695346
  }
  constructor(...e) {
    super(...e), Q(this, "state", {
      shouldShowActivities: false,
      shouldShowGuildVerificationPopout: false,
      hovered: false
    }), Q(this, "ref", i.createRef()), Q(this, "channelItemRef", i.createRef()), Q(this, "activitiesHideTimeout", new s.V7), Q(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: false
      })
    }), Q(this, "handleVoiceConnect", () => {
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
      a && u.Z.updateChatOpen(n.id, true), O.Z.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: i,
        routeDirectlyToChannel: a,
        locked: e
      })
    }), Q(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = R.Z.getGuild(t.getGuildId());
      null != i && (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, $(J({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), Q(this, "handleMouseEnter", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: true,
        hovered: true
      })
    }), Q(this, "handleMouseLeave", () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: false,
        hovered: false
      }))
    }), Q(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: false
      })
    }), Q(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, C.n)(t) && (0, j.hk)(t), this.handleVoiceConnect()
    }), Q(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: n
      } = this.props;
      t && (e.stopPropagation(), (0, g.Z)({
        channel: n
      }))
    }), Q(this, "renderPopout", () => {
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
        let n = T.SE.getSetting().includes(o.id);
        return (0, r.jsx)(F.Z, {
          onAction: this.closePopout,
          guild: o,
          channel: e,
          voiceStates: t,
          isChannelSelected: l,
          shouldShowSettingNudge: n
        })
      }
      if (s) return (0, r.jsx)(S.Z, {
        type: S.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), Q(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(c.ua7, {
        text: q.intl.string(q.t.ZXxLQk),
        children: t => {
          let {
            onMouseEnter: i,
            onMouseLeave: l,
            onFocus: a,
            onBlur: s
          } = t;
          return (0, r.jsx)(c.P3F, {
            className: o()(X.iconItem, n ? X.alwaysShown : null),
            onClick: () => {
              u.Z.updateChatOpen(e.id, true), (0, w.Kh)(e.id)
            },
            "aria-label": q.intl.string(q.t.ZXxLQk),
            onMouseEnter: i,
            onMouseLeave: l,
            onFocus: a,
            onBlur: s,
            children: (0, r.jsx)(c.kBi, {
              size: "xs",
              color: "currentColor",
              className: X.actionIcon
            })
          })
        }
      })
    }), Q(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? q.intl.string(q.t.rZfiNj) : null
    })
  }
}
let et = (0, Chunk146773.B)((0, Chunk888651.Q)(ee));

function en(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: l,
    selected: o,
    collapsed: s,
    voiceStates: c
  } = e, u = (0, a.cj)([M.ZP], () => ({
    unread: M.ZP.hasUnread(n.id),
    mentionCount: M.ZP.getMentionCount(n.id)
  })), d = (0, a.e7)([k.ZP], () => k.ZP.resolveUnreadSetting(n)), p = (0, a.cj)([A.Z, D.Z, L.Z], () => {
    let e = A.Z.getChannel(n.parent_id),
      r = D.Z.getCheck(n.guild_id);
    return {
      canManageChannel: L.Z.can(K.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: true !== i && (t.id === Y._ || (null != e ? L.Z.can(K.Plq.MANAGE_CHANNELS, e) : L.Z.can(K.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: L.Z.can(K.Plq.MOVE_MEMBERS, n),
      locked: !L.Z.can(K.Plq.CONNECT, n),
      bypassLimit: L.Z.can(K.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), f = (0, a.e7)([U.Z], () => U.Z.hasVideo(n.id)), g = (0, h.ZP)(n), m = (0, _.ZP)(n), b = (0, x.qY)(n.id), {
    isSubscriptionGated: O,
    needSubscriptionToAccess: y
  } = (0, E.Z)(n.id), j = (0, v.Z)(), C = (0, a.e7)([k.ZP], () => k.ZP.isFavorite(t.id, n.id)), S = e.connected || (null == j ? true : j.channelId) === n.id, {
    enableHangStatus: P,
    allowChannelTopic: w
  } = I.n.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: false
  }), {
    enableOpenTIVForPing: Z
  } = N.A.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }), T = (0, V.Z)({
    channel: n,
    isChannelSelected: o,
    isChannelCollapsed: s,
    voiceStates: c,
    isSubscriptionGated: O,
    needSubscriptionToAccess: y,
    enableConnectedUserLimit: true,
    enableActivities: true
  }), R = S && null == T;
  return (0, r.jsx)(et, $(J({
    channelName: m,
    embeddedApps: g,
    embeddedActivityType: K.IIU.PLAYING,
    video: f,
    hasActiveEvent: null != b,
    isSubscriptionGated: O,
    needSubscriptionToAccess: y
  }, u, p, e), {
    connected: S,
    isFavoriteSuggestion: l && !C,
    forceShowButtons: R,
    channelInfo: T,
    resolvedUnreadSetting: d,
    enableHangStatus: P,
    allowChannelTopic: w,
    enableOpenTIVForPing: Z
  }))
}