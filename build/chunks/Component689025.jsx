/** Chunk was on 41727 **/
/** chunk id: 689025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => J
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk442433 = require("./442433.js"),
  Chunk676002 = require("./676002.jsx"),
  Chunk296216 = require("./296216.js"),
  Chunk963027 = require("./963027.js"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk721592 = require("./721592.js"),
  Chunk214660 = require("./214660.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk323443 = require("./323443.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js"),
  Chunk446600 = require("./446600.js"),
  Chunk96566 = require("./96566.js"),
  Chunk175452 = require("./175452.js"),
  Chunk924985 = require("./924985.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk834942 = require("./834942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk977997 = require("./977997.js"),
  Chunk147036 = require("./147036.js"),
  Chunk557534 = require("./557534.jsx"),
  Chunk68437 = require("./68437.jsx"),
  Chunk166444 = require("./166444.jsx"),
  Chunk588224 = require("./588224.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk728444 = require("./728444.js"),
  Chunk834201 = require("./834201.js");

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

function Y(e, t) {
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
class q extends Chunk557534.Ay {
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
    return (0, M.Pd)(e, D.A, N.A)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return H.ZS;
    if (null != t)
      if (e > t) return H.mU;
      else return H.TR;
    return H.fx
  }
  renderVoiceUsers() {
    let {
      channel: e,
      collapsed: t,
      tabIndex: n,
      speakerVoiceStates: l,
      numAudience: i
    } = this.props;
    return (0, r.jsx)(U.A, {
      channel: e,
      voiceStates: l,
      collapsed: t,
      tabIndex: n,
      location: B.ThZ.GUILD_CHANNEL_LIST,
      numAudience: i
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
      locked: l,
      connectChannelDropTarget: i,
      connectChannelDragSource: a,
      connectUserDropTarget: o,
      connectDragPreview: d,
      canReorderChannel: p,
      canMoveMembers: h,
      stageInstance: f,
      isSubscriptionGated: m,
      needSubscriptionToAccess: b,
      unread: A,
      resolvedUnreadSetting: y,
      mentionCount: _,
      isFavoriteSuggestion: O
    } = this.props, {
      shouldShowGuildVerificationPopout: j
    } = this.state, v = this.getVoiceStatesCount(), x = (0, r.jsxs)("li", {
      className: s()(this.getModeClass(), {
        [H.r9]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, r.jsx)(u.YNO, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        onRequestClose: this.closeGuildVerificationPopout,
        shouldShow: j,
        children: () => (0, r.jsx)(c.m, {
          text: this.getTooltipText(),
          children: (0, r.jsxs)(G.Ay, {
            ref: this.channelItemRef,
            className: H.Ki,
            iconClassName: s()({
              [K.G]: null != f
            }),
            channel: e,
            selected: !O && t,
            connected: n,
            unread: n ? A : true,
            resolvedUnreadSetting: y,
            mentionCount: _,
            locked: l,
            onClick: () => {
              this.handleClick()
            },
            onContextMenu: e => {
              this.handleContextMenu(e)
            },
            connectDragPreview: d,
            subtitle: this.renderSubtitle(),
            isFavoriteSuggestion: O,
            "aria-label": (0, g.Ay)({
              channel: e,
              unread: A,
              mentionCount: _,
              userCount: v,
              isSubscriptionGated: m,
              needSubscriptionToAccess: b
            }),
            children: [O && this.renderAcceptSuggestionButton(), O && this.renderRemoveSuggestionButton(), !O && this.renderOpenChatButton(), !O && this.renderInviteButton(), !O && this.renderEditButton(), !O && this.renderChannelInfo()]
          })
        })
      }), this.renderVoiceUsers()]
    });
    return h && (x = o(x)), p && (x = i(a(x))), x
  }
  constructor(...e) {
    super(...e), W(this, "channelItemRef", l.createRef()), W(this, "state", {
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
      } = this.props, l = e.getGuildId();
      null != l && (0, b.V)(l) && (0, m.Ze)(l), r && this.setState({
        shouldShowGuildVerificationPopout: true
      }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, O.av)(e), __OVERLAY__ || (0, _.iN)(e.id)
    }), W(this, "handleClickChat", () => {
      let {
        channel: e,
        locked: t
      } = this.props;
      __OVERLAY__ || t || (0, _.iN)(e.id)
    }), W(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = N.A.getGuild(t.getGuildId());
      null != l && (0, p.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("53378")]).then(n.bind(n, 698193));
        return n => (0, r.jsx)(e, Y(z({}, n), {
          channel: t,
          guild: l
        }))
      })
    }), W(this, "renderPopout", () => {
      let {
        channel: e
      } = this.props, {
        shouldShowGuildVerificationPopout: t
      } = this.state;
      if (t) return (0, r.jsx)(y.A, {
        type: y.H.VOICE,
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
      if (!t) return (0, r.jsx)(c.m, {
        asContainer: true,
        text: F.intl.string(F.t.ZXxLQg),
        children: (0, r.jsx)(u.DUT, {
          className: s()(H.Xs, n ? H.Tf : null),
          onClick: () => {
            d.A.updateChatOpen(e.id, true), this.handleClickChat()
          },
          "aria-label": F.intl.string(F.t.ZXxLQg),
          children: (0, r.jsx)(u.oyn, {
            size: "xs",
            color: "currentColor",
            className: H.gE
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
      return null == t ? null : (0, r.jsx)(o.A, {
        children: t
      })
    })
  }
}
let X = (0, Chunk676002.a)((0, Chunk296216.F)(q));

function J(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: l,
    isFavoriteCategory: i,
    collapsed: s,
    voiceStates: o
  } = e, c = (0, a.cf)([w.Ay], () => ({
    unread: w.Ay.hasUnread(n.id),
    mentionCount: w.Ay.getMentionCount(n.id)
  })), u = (0, a.bG)([R.Ay], () => R.Ay.resolveUnreadSetting(n)), d = (0, a.cf)([I.A, T.A, P.A], () => {
    let e = I.A.getChannel(n.parent_id),
      r = T.A.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && P.A.can(B.xBc.MANAGE_CHANNELS, n),
      canReorderChannel: true !== l && (t.id === V.V || (null != e ? P.A.can(B.xBc.MANAGE_CHANNELS, e) : P.A.can(B.xBc.MANAGE_CHANNELS, t))),
      canMoveMembers: P.A.can(B.xBc.MOVE_MEMBERS, n),
      locked: !P.A.can(B.xBc.CONNECT, n),
      bypassLimit: P.A.can(B.xBc.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), p = (0, a.bG)([S.A], () => S.A.isCollapsed(n.parent_id)), h = (0, C.Ay)(n.id), f = (0, a.bG)([x.A], () => x.A.getStageInstanceByChannel(n.id), [n.id]), g = (0, j.zy)(n.id, v.ip.AUDIENCE), {
    isSubscriptionGated: m,
    needSubscriptionToAccess: b
  } = (0, A.A)(n.id), y = (0, a.bG)([R.Ay], () => R.Ay.isFavorite(t.id, n.id)), _ = (0, E.xn)(n.id), O = (0, k.A)({
    channel: n,
    isChannelSelected: false,
    isChannelCollapsed: s,
    voiceStates: o,
    isSubscriptionGated: m,
    needSubscriptionToAccess: b,
    enableConnectedUserLimit: _ || n.userLimit > 0 && n.userLimit < B.RCc
  }), N = e.connected && null == O;
  return (0, r.jsx)(X, Y(z({
    categoryCollapsed: p,
    connectAction: h,
    numAudience: g,
    stageInstance: f,
    isSubscriptionGated: m,
    needSubscriptionToAccess: b
  }, c, d, e), {
    isFavoriteSuggestion: i && !y,
    forceShowButtons: N,
    channelInfo: O,
    resolvedUnreadSetting: u
  }))
}