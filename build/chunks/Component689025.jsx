/** Chunk was on 97492 **/
/** chunk id: 689025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => J
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    if (n) return B.ZS;
    if (null != t)
      if (e > t) return B.mU;
      else return B.TR;
    return B.fx
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
      location: V.ThZ.GUILD_CHANNEL_LIST,
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
      connectChannelDragSource: s,
      connectUserDropTarget: o,
      connectDragPreview: d,
      canReorderChannel: f,
      canMoveMembers: p,
      stageInstance: h,
      isSubscriptionGated: g,
      needSubscriptionToAccess: m,
      unread: A,
      resolvedUnreadSetting: y,
      mentionCount: O,
      isFavoriteSuggestion: j
    } = this.props, {
      shouldShowGuildVerificationPopout: v
    } = this.state, x = this.getVoiceStatesCount(), E = (0, r.jsxs)("li", {
      className: a()(this.getModeClass(), {
        [B.r9]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, r.jsx)(u.YNO, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        onRequestClose: this.closeGuildVerificationPopout,
        shouldShow: v,
        children: () => (0, r.jsx)(c.m, {
          text: this.getTooltipText(),
          children: (0, r.jsxs)(k.Ay, {
            ref: this.channelItemRef,
            className: B.Ki,
            iconClassName: a()({
              [K.G]: null != h
            }),
            channel: e,
            selected: !j && t,
            connected: n,
            unread: n ? A : true,
            resolvedUnreadSetting: y,
            mentionCount: O,
            locked: l,
            onClick: () => {
              this.handleClick()
            },
            onContextMenu: e => {
              this.handleContextMenu(e)
            },
            connectDragPreview: d,
            subtitle: this.renderSubtitle(),
            isFavoriteSuggestion: j,
            "aria-label": (0, b.Ay)({
              channel: e,
              unread: A,
              mentionCount: O,
              userCount: x,
              isSubscriptionGated: g,
              needSubscriptionToAccess: m
            }),
            children: [j && this.renderAcceptSuggestionButton(), j && this.renderRemoveSuggestionButton(), !j && this.renderOpenChatButton(), !j && this.renderInviteButton(), !j && this.renderEditButton(), !j && this.renderChannelInfo()]
          })
        })
      }), this.renderVoiceUsers()]
    });
    return p && (E = o(E)), f && (E = i(s(E))), E
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
      null != l && (0, m.V)(l) && (0, g.Ze)(l), r && this.setState({
        shouldShowGuildVerificationPopout: true
      }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, j.av)(e), __OVERLAY__ || (0, O.iN)(e.id)
    }), W(this, "handleClickChat", () => {
      let {
        channel: e,
        locked: t
      } = this.props;
      __OVERLAY__ || t || (0, O.iN)(e.id)
    }), W(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = N.A.getGuild(t.getGuildId());
      null != l && (0, f.L3)(e, async () => {
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
        text: H.intl.string(H.t.ZXxLQg),
        children: (0, r.jsx)(u.DUT, {
          className: a()(B.Xs, n ? B.Tf : null),
          onClick: () => {
            d.A.updateChatOpen(e.id, true), this.handleClickChat()
          },
          "aria-label": H.intl.string(H.t.ZXxLQg),
          children: (0, r.jsx)(u.oyn, {
            size: "xs",
            color: "currentColor",
            className: B.gE
          })
        })
      })
    }), W(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? H.intl.string(H.t.rZfiNq) : null
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
    collapsed: a,
    voiceStates: o
  } = e, c = (0, s.cf)([w.Ay], () => ({
    unread: w.Ay.hasUnread(n.id),
    mentionCount: w.Ay.getMentionCount(n.id)
  })), u = (0, s.bG)([R.Ay], () => R.Ay.resolveUnreadSetting(n)), d = (0, s.cf)([I.A, T.A, P.A], () => {
    let e = I.A.getChannel(n.parent_id),
      r = T.A.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && P.A.can(V.xBc.MANAGE_CHANNELS, n),
      canReorderChannel: true !== l && (t.id === F.V || (null != e ? P.A.can(V.xBc.MANAGE_CHANNELS, e) : P.A.can(V.xBc.MANAGE_CHANNELS, t))),
      canMoveMembers: P.A.can(V.xBc.MOVE_MEMBERS, n),
      locked: !P.A.can(V.xBc.CONNECT, n),
      bypassLimit: P.A.can(V.xBc.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), f = (0, s.bG)([S.A], () => S.A.isCollapsed(n.parent_id)), p = (0, C.Ay)(n.id), h = (0, s.bG)([E.A], () => E.A.getStageInstanceByChannel(n.id), [n.id]), b = (0, v.zy)(n.id, x.ip.AUDIENCE), {
    isSubscriptionGated: g,
    needSubscriptionToAccess: m
  } = (0, A.A)(n.id), y = (0, s.bG)([R.Ay], () => R.Ay.isFavorite(t.id, n.id)), O = (0, _.xn)(n.id), j = (0, G.A)({
    channel: n,
    isChannelSelected: false,
    isChannelCollapsed: a,
    voiceStates: o,
    isSubscriptionGated: g,
    needSubscriptionToAccess: m,
    enableConnectedUserLimit: O || n.userLimit > 0 && n.userLimit < V.RCc
  }), N = e.connected && null == j;
  return (0, r.jsx)(X, Y(z({
    categoryCollapsed: f,
    connectAction: p,
    numAudience: b,
    stageInstance: h,
    isSubscriptionGated: g,
    needSubscriptionToAccess: m
  }, c, d, e), {
    isFavoriteSuggestion: i && !y,
    forceShowButtons: N,
    channelInfo: j,
    resolvedUnreadSetting: u
  }))
}