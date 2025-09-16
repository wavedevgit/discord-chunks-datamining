/** Chunk was on 11160 **/
/** chunk id: 424785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk888651 = require("./888651.js"),
  Chunk201895 = require("./201895.js"),
  Chunk111028 = require("./111028.jsx"),
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

function H(e, t, n) {
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
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
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
class K extends Chunk98597.ZP {
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
    return (0, Chunk951288.jsx)(Chunk207055.Z, {
      channel: module,
      voiceStates: Chunk647438,
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
      connectUserDropTarget: c,
      connectDragPreview: u,
      canReorderChannel: d,
      canMoveMembers: p,
      stageInstance: h,
      isSubscriptionGated: g,
      needSubscriptionToAccess: m,
      unread: b,
      resolvedUnreadSetting: O,
      mentionCount: y,
      isFavoriteSuggestion: _
    } = this.props, {
      shouldShowGuildVerificationPopout: j
    } = this.state, v = this.getVoiceStatesCount(), x = (0, Chunk951288.jsxs)("li", {
      className: o()(this.getModeClass(), {
        [Chunk55940.disabled]: this.isDisabled()
      }),
      "data-dnd-name": module.name,
      children: [(0, Chunk951288.jsx)(Chunk481060.yRy, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.closeGuildVerificationPopout,
        shouldShow: Chunk431328,
        children: () => (0, Chunk951288.jsx)(Chunk481060.ua7, {
          text: this.getTooltipText(),
          children: l => {
            var {
              onClick: a,
              onContextMenu: s
            } = l, c = function(e, t) {
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
            }(l, ["onClick", "onContextMenu"]);
            return (0, r.jsxs)(L.ZP, W(z({
              ref: this.channelItemRef,
              className: V.iconVisibility,
              iconClassName: o()({
                [F.iconLive]: null != h
              }),
              channel: e,
              selected: !_ && t,
              connected: n,
              unread: n ? b : true,
              resolvedUnreadSetting: O,
              mentionCount: y,
              locked: i,
              onClick: () => {
                this.handleClick(), null == a || a()
              },
              onContextMenu: e => {
                this.handleContextMenu(e), null == s || s()
              },
              connectDragPreview: u,
              subtitle: this.renderSubtitle(),
              isFavoriteSuggestion: _,
              "aria-label": (0, f.ZP)({
                channel: e,
                unread: b,
                mentionCount: y,
                userCount: v,
                isSubscriptionGated: g,
                needSubscriptionToAccess: m
              })
            }, c), {
              children: [_ && this.renderAcceptSuggestionButton(), _ && this.renderRemoveSuggestionButton(), !_ && this.renderOpenChatButton(), !_ && this.renderInviteButton(), !_ && this.renderEditButton(), !_ && this.renderChannelInfo()]
            }))
          }
        })
      }), this.renderVoiceUsers()]
    });
    return Chunk888651 && (x = Chunk475179(Chunk427679)), Chunk146773 && (x = Chunk120356(Chunk442837(Chunk427679))), Chunk427679
  }
  constructor(...e) {
    super(...e), H(this, "channelItemRef", i.createRef()), H(this, "state", {
      shouldShowGuildVerificationPopout: false
    }), H(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: false
      })
    }), H(this, "handleClick", () => {
      let {
        channel: e,
        locked: t,
        connected: n,
        unverifiedAccount: r
      } = this.props, i = e.getGuildId();
      null != i && (0, m.n)(i) && (0, g.hk)(i), r && this.setState({
        shouldShowGuildVerificationPopout: true
      }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, _.Cq)(e), __OVERLAY__ || (0, y.Kh)(e.id)
    }), H(this, "handleClickChat", () => {
      let {
        channel: e,
        locked: t
      } = this.props;
      __OVERLAY__ || t || (0, y.Kh)(e.id)
    }), H(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = I.Z.getGuild(t.getGuildId());
      null != i && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, W(z({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), H(this, "renderPopout", () => {
      let {
        channel: e
      } = this.props, {
        shouldShowGuildVerificationPopout: t
      } = this.state;
      if (t) return (0, r.jsx)(O.Z, {
        type: O.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), H(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(s.ua7, {
        text: B.intl.string(B.t.ZXxLQk),
        children: t => {
          let {
            onMouseEnter: i,
            onMouseLeave: l,
            onFocus: a,
            onBlur: u
          } = t;
          return (0, r.jsx)(s.P3F, {
            className: o()(V.iconItem, n ? V.alwaysShown : null),
            onClick: () => {
              c.Z.updateChatOpen(e.id, true), this.handleClickChat()
            },
            "aria-label": B.intl.string(B.t.ZXxLQk),
            onMouseEnter: i,
            onMouseLeave: l,
            onFocus: a,
            onBlur: u,
            children: (0, r.jsx)(s.kBi, {
              size: "xs",
              color: "currentColor",
              className: V.actionIcon
            })
          })
        }
      })
    }), H(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? B.intl.string(B.t.rZfiNj) : null
    }), H(this, "renderSubtitle", () => {
      var e;
      let t = null == (e = this.props.stageInstance) ? true : e.topic;
      return null == t ? null : (0, r.jsx)(h.Z, {
        children: t
      })
    })
  }
}
let Y = (0, Chunk146773.B)((0, Chunk888651.Q)(K));

function q(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: l,
    collapsed: o,
    voiceStates: s
  } = e, c = (0, a.cj)([w.ZP], () => ({
    unread: w.ZP.hasUnread(n.id),
    mentionCount: w.ZP.getMentionCount(n.id)
  })), u = (0, a.e7)([T.ZP], () => T.ZP.resolveUnreadSetting(n)), d = (0, a.cj)([P.Z, N.Z, Z.Z], () => {
    let e = P.Z.getChannel(n.parent_id),
      r = N.Z.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && Z.Z.can(U.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: true !== i && (t.id === G._ || (null != e ? Z.Z.can(U.Plq.MANAGE_CHANNELS, e) : Z.Z.can(U.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: Z.Z.can(U.Plq.MOVE_MEMBERS, n),
      locked: !Z.Z.can(U.Plq.CONNECT, n),
      bypassLimit: Z.Z.can(U.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), p = (0, a.e7)([S.Z], () => S.Z.isCollapsed(n.parent_id)), f = (0, E.ZP)(n.id), h = (0, a.e7)([x.Z], () => x.Z.getStageInstanceByChannel(n.id), [n.id]), g = (0, j.Rk)(n.id, v.pV.AUDIENCE), {
    isSubscriptionGated: m,
    needSubscriptionToAccess: O
  } = (0, b.Z)(n.id), y = (0, a.e7)([T.ZP], () => T.ZP.isFavorite(t.id, n.id)), _ = (0, C.xJ)(n.id), I = (0, M.Z)({
    channel: n,
    isChannelSelected: false,
    isChannelCollapsed: o,
    voiceStates: s,
    isSubscriptionGated: m,
    needSubscriptionToAccess: O,
    enableConnectedUserLimit: _ || n.userLimit > 0 && n.userLimit < U.xGv
  }), A = e.connected && null == I;
  return (0, r.jsx)(Y, W(z({
    categoryCollapsed: p,
    connectAction: f,
    numAudience: g,
    stageInstance: h,
    isSubscriptionGated: m,
    needSubscriptionToAccess: O
  }, c, d, e), {
    isFavoriteSuggestion: l && !y,
    forceShowButtons: A,
    channelInfo: I,
    resolvedUnreadSetting: u
  }))
}