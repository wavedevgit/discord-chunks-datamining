/** Chunk was on 46467 **/
/** chunk id: 424785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk888651 = require("./888651.js"),
  Chunk201895 = require("./201895.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk66999 = require("./66999.js"),
  Chunk378844 = require("./378844.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk922482 = require("./922482.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk427679 = require("./427679.js"),
  Chunk368442 = require("./368442.js"),
  Chunk201469 = require("./201469.js"),
  Chunk680089 = require("./680089.js"),
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
  Chunk207055 = require("./207055.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk55940 = require("./55940.js"),
  Chunk556295 = require("./556295.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
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
class Y extends Chunk98597.ZP {
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
  renderVoiceUsers() {
    let {
      channel: e,
      collapsed: t,
      tabIndex: n,
      speakerVoiceStates: i,
      numAudience: l
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk207055.Z, {
      channel: module,
      voiceStates: Chunk473749,
      collapsed: exports,
      tabIndex: require,
      location: Chunk981631.Sbl.GUILD_CHANNEL_LIST,
      numAudience: Chunk120356
    })
  }
  renderChannelInfo() {
    return this.props.channelInfo
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      locked: i,
      connectChannelDropTarget: l,
      connectChannelDragSource: a,
      connectUserDropTarget: s,
      connectDragPreview: d,
      canReorderChannel: f,
      canMoveMembers: h,
      stageInstance: p,
      isSubscriptionGated: m,
      needSubscriptionToAccess: b,
      unread: _,
      resolvedUnreadSetting: y,
      mentionCount: O,
      isFavoriteSuggestion: v
    } = this.props, {
      shouldShowGuildVerificationPopout: j
    } = this.state, x = this.getVoiceStatesCount(), C = (0, Chunk54381.jsxs)("li", {
      className: o()(this.getModeClass(), {
        [Chunk55940.disabled]: this.isDisabled()
      }),
      "data-dnd-name": module.name,
      children: [(0, Chunk54381.jsx)(Chunk481060.yRy, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        onRequestClose: this.closeGuildVerificationPopout,
        shouldShow: Chunk431328,
        children: () => (0, Chunk54381.jsx)(Chunk28664.u, {
          text: this.getTooltipText(),
          children: (0, Chunk54381.jsxs)(Chunk473403.ZP, {
            ref: this.channelItemRef,
            className: Chunk55940.iconVisibility,
            iconClassName: o()({
              [Chunk556295.iconLive]: null != Chunk888651
            }),
            channel: module,
            selected: !Chunk922482 && exports,
            connected: require,
            unread: require ? Chunk66999 : true,
            resolvedUnreadSetting: Chunk378844,
            mentionCount: Chunk359110,
            locked: Chunk473749,
            onClick: () => {
              this.handleClick()
            },
            onContextMenu: e => {
              this.handleContextMenu(e)
            },
            connectDragPreview: Chunk475179,
            subtitle: this.renderSubtitle(),
            isFavoriteSuggestion: Chunk922482,
            "aria-label": (0, Chunk201895.ZP)({
              channel: module,
              unread: Chunk66999,
              mentionCount: Chunk359110,
              userCount: Chunk501655,
              isSubscriptionGated: Chunk305325,
              needSubscriptionToAccess: Chunk281956
            }),
            children: [Chunk922482 && this.renderAcceptSuggestionButton(), Chunk922482 && this.renderRemoveSuggestionButton(), !Chunk922482 && this.renderOpenChatButton(), !Chunk922482 && this.renderInviteButton(), !Chunk922482 && this.renderEditButton(), !Chunk922482 && this.renderChannelInfo()]
          })
        })
      }), this.renderVoiceUsers()]
    });
    return Chunk146773 && (C = Chunk194983(Chunk427679)), Chunk239091 && (C = Chunk120356(Chunk442837(Chunk427679))), Chunk427679
  }
  constructor(...e) {
    super(...e), W(this, "channelItemRef", i.createRef()), W(this, "state", {
      shouldShowGuildVerificationPopout: false
    }), W(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: false
      })
    }), W(this, "handleClick", () => {
      let {
        channel: e,
        locked: t,
        connected: n,
        unverifiedAccount: r
      } = this.props, i = e.getGuildId();
      null != i && (0, b.n)(i) && (0, m.hk)(i), r && this.setState({
        shouldShowGuildVerificationPopout: true
      }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, v.Cq)(e), __OVERLAY__ || (0, O.Kh)(e.id)
    }), W(this, "handleClickChat", () => {
      let {
        channel: e,
        locked: t
      } = this.props;
      __OVERLAY__ || t || (0, O.Kh)(e.id)
    }), W(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = N.Z.getGuild(t.getGuildId());
      null != i && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, K(z({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), W(this, "renderPopout", () => {
      let {
        channel: e
      } = this.props, {
        shouldShowGuildVerificationPopout: t
      } = this.state;
      if (t) return (0, r.jsx)(y.Z, {
        type: y.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), W(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(c.u, {
        asContainer: true,
        text: F.intl.string(F.t.ZXxLQg),
        children: (0, r.jsx)(u.P3F, {
          className: o()(V.iconItem, n ? V.alwaysShown : null),
          onClick: () => {
            d.Z.updateChatOpen(e.id, true), this.handleClickChat()
          },
          "aria-label": F.intl.string(F.t.ZXxLQg),
          children: (0, r.jsx)(u.kBi, {
            size: "xs",
            color: "currentColor",
            className: V.actionIcon
          })
        })
      })
    }), W(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? F.intl.string(F.t.rZfiNq) : null
    }), W(this, "renderSubtitle", () => {
      var e;
      let t = null == (e = this.props.stageInstance) ? true : e.topic;
      return null == t ? null : (0, r.jsx)(s.Z, {
        children: t
      })
    })
  }
}
let q = (0, Chunk146773.B)((0, Chunk888651.Q)(Y));

function Q(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: l,
    collapsed: o,
    voiceStates: s
  } = e, c = (0, a.cj)([T.ZP], () => ({
    unread: T.ZP.hasUnread(n.id),
    mentionCount: T.ZP.getMentionCount(n.id)
  })), u = (0, a.e7)([A.ZP], () => A.ZP.resolveUnreadSetting(n)), d = (0, a.cj)([P.Z, Z.Z, w.Z], () => {
    let e = P.Z.getChannel(n.parent_id),
      r = Z.Z.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && w.Z.can(U.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: true !== i && (t.id === B._ || (null != e ? w.Z.can(U.Plq.MANAGE_CHANNELS, e) : w.Z.can(U.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: w.Z.can(U.Plq.MOVE_MEMBERS, n),
      locked: !w.Z.can(U.Plq.CONNECT, n),
      bypassLimit: w.Z.can(U.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), f = (0, a.e7)([I.Z], () => I.Z.isCollapsed(n.parent_id)), h = (0, S.ZP)(n.id), p = (0, a.e7)([C.Z], () => C.Z.getStageInstanceByChannel(n.id), [n.id]), g = (0, j.Rk)(n.id, x.pV.AUDIENCE), {
    isSubscriptionGated: m,
    needSubscriptionToAccess: b
  } = (0, _.Z)(n.id), y = (0, a.e7)([A.ZP], () => A.ZP.isFavorite(t.id, n.id)), O = (0, E.xJ)(n.id), v = (0, L.Z)({
    channel: n,
    isChannelSelected: false,
    isChannelCollapsed: o,
    voiceStates: s,
    isSubscriptionGated: m,
    needSubscriptionToAccess: b,
    enableConnectedUserLimit: O || n.userLimit > 0 && n.userLimit < U.xGv
  }), N = e.connected && null == v;
  return (0, r.jsx)(q, K(z({
    categoryCollapsed: f,
    connectAction: h,
    numAudience: g,
    stageInstance: p,
    isSubscriptionGated: m,
    needSubscriptionToAccess: b
  }, c, d, e), {
    isFavoriteSuggestion: l && !y,
    forceShowButtons: N,
    channelInfo: v,
    resolvedUnreadSetting: u
  }))
}