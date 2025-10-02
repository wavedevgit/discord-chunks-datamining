/** Chunk was on 69310 **/
/** chunk id: 79556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk595519 = require("./595519.js"),
  Chunk619915 = require("./619915.js"),
  Chunk622822 = require("./622822.js"),
  Chunk201895 = require("./201895.js"),
  Chunk873696 = require("./873696.js"),
  Chunk66999 = require("./66999.js"),
  Chunk340541 = require("./340541.js"),
  Chunk22082 = require("./22082.js"),
  Chunk665906 = require("./665906.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk109446 = require("./109446.jsx"),
  Chunk98597 = require("./98597.jsx"),
  Chunk648501 = require("./648501.jsx"),
  Chunk473403 = require("./473403.jsx"),
  Chunk304471 = require("./304471.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk33082 = require("./33082.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
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
class k extends Chunk98597.ZP {
  componentWillUnmount() {
    this.resetTextChannelPopoutTimers()
  }
  resetTextChannelPopoutTimers() {
    clearTimeout(this.enterTimer), clearTimeout(this.exitTimer)
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == module ? null : (0, Chunk951288.jsx)("div", {
      className: Chunk33082.channelInfo,
      children: module
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      selected: n,
      muted: i,
      unread: l,
      hasActiveThreads: a,
      hasMoreActiveThreads: c,
      mentionCount: u,
      connectChannelDropTarget: d,
      connectChannelDragSource: p,
      connectDragPreview: f,
      canReorderChannel: h,
      isSubscriptionGated: b,
      isFavoriteSuggestion: O,
      subtitle: y,
      forceTopLevelThread: v,
      embeddedApps: j,
      resolvedUnreadSetting: x,
      withGuildIcon: C,
      enableActivities: E
    } = this.props, S = (0, Chunk340541.jW)({
      location: "text_channel"
    }).entrypoints, P = Chunk9156 && null != Chunk430824 && Chunk430824.length > 0, I = (0, Chunk873696.D)(Chunk665906), N = (0, Chunk951288.jsx)("li", {
      className: o()(this.getClassName(), {
        [Chunk33082.disabled]: this.isDisabled(),
        [Chunk33082.selected]: require
      }),
      "data-dnd-name": module.name,
      onMouseEnter: Chunk493683 || Chunk109446 ? this.handleMouseEnter : true,
      onMouseLeave: Chunk493683 || Chunk109446 ? this.handleMouseLeave : true,
      children: (0, Chunk951288.jsx)(Chunk481060.yRy, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.handleClosePopout,
        shouldShow: Chunk493683 && this.state.shouldShowThreadsPopout || Chunk109446 && this.state.shouldShowActivities,
        children: () => (0, Chunk951288.jsxs)(Chunk473403.ZP, {
          ref: this.channelItemRef,
          className: Chunk33082.iconVisibility,
          channel: module,
          guild: exports,
          selected: !Chunk22082 && require,
          muted: Chunk647438,
          unread: Chunk120356,
          mentionCount: Chunk239091,
          hasActiveThreads: Chunk442837,
          subtitle: null == Chunk98597 ? true : Chunk98597.subtitle,
          subtitleColor: null == Chunk98597 ? true : Chunk98597.color,
          onMouseDown: this.handleMouseDown,
          onContextMenu: this.handleContextMenu,
          connectDragPreview: Chunk622822 ? Chunk619915 : null,
          isFavoriteSuggestion: Chunk22082,
          channelTypeOverride: Chunk592125 ? Chunk981631.d4z.GUILD_TEXT : true,
          resolvedUnreadSetting: Chunk496675,
          withGuildIcon: Chunk306680,
          "aria-label": (0, Chunk201895.ZP)({
            channel: module,
            unread: Chunk120356,
            mentionCount: Chunk239091,
            isSubscriptionGated: Chunk66999
          }),
          children: [Chunk22082 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
          }), !Chunk22082 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [this.renderChannelInfo(), Chunk594174 && this.renderOptionsButton({
              onContextMenu: this.handleContextMenu
            }), !Chunk594174 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
              children: [this.renderInviteButton(), this.renderEditButton()]
            })]
          })]
        })
      })
    });
    return Chunk622822 ? Chunk146773(Chunk595519(Chunk648501)) : Chunk648501
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      shouldShowThreadsPopout: false,
      shouldShowActivities: false
    }), D(this, "channelItemRef", i.createRef()), D(this, "enterTimer", 0), D(this, "exitTimer", 0), D(this, "handleMouseEnter", () => {
      this.props.channelIsContentGated && null == this.props.embeddedApps || (this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
          shouldShowActivities: true
        }) : this.props.channelIsContentGated || this.setState({
          shouldShowThreadsPopout: true
        })
      }, 200))
    }), D(this, "handleMouseLeave", () => {
      this.resetTextChannelPopoutTimers(), this.exitTimer = setTimeout(() => {
        this.state.shouldShowActivities && this.setState({
          shouldShowActivities: false
        }), this.state.shouldShowThreadsPopout && this.setState({
          shouldShowThreadsPopout: false
        })
      }, 250)
    }), D(this, "handleThreadsPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowThreadsPopout: false
      })
    }), D(this, "handleActivitiesPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowActivities: false
      })
    }), D(this, "handleClosePopout", () => {
      this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose()
    }), D(this, "handleMouseDown", () => {
      this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      c.Z.preload(null != t ? t : T.ME, e.id)
    }), D(this, "renderPopout", e => {
      let {
        channel: t,
        sorting: n,
        embeddedApps: i,
        channelIsContentGated: l
      } = this.props, {
        shouldShowActivities: o
      } = this.state;
      return t.isModeratorReportChannel() || l ? null : null != i && i.length > 0 && o && !n ? (0, r.jsx)(Z.Z, {
        onAction: this.handleActivitiesPopoutClose,
        channel: t
      }) : (0, r.jsx)(P.Z, M(L({}, e), {
        channel: this.props.channel
      }))
    }), D(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === T.d4z.GROUP_DM) return void(0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, r.jsx)(e, M(L({}, n), {
          channel: t,
          selected: true
        }))
      });
      if (t.type === T.d4z.DM) {
        let i = S.default.getUser(t.getRecipientId());
        null != i && (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("98783"), n.e("56826"), n.e("55599")]).then(n.bind(n, 131404));
          return n => (0, r.jsx)(e, M(L({}, n), {
            user: i,
            channel: t,
            showModalItems: false
          }))
        });
        return
      }
      if (t.isModeratorReportChannel()) return void(0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("86715").then(n.bind(n, 466676));
        return n => (0, r.jsx)(e, M(L({}, n), {
          channel: t
        }))
      });
      let i = j.Z.getGuild(t.getGuildId());
      null != i && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
        return n => (0, r.jsx)(e, M(L({}, n), {
          channel: t,
          guild: i
        }))
      })
    })
  }
}
let U = (0, Chunk146773.B)(k);

function G(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: i,
    isFavoriteCategory: l,
    muted: o,
    selected: s
  } = e, {
    hasActiveThreads: c,
    hasMoreActiveThreads: u
  } = (0, y.JQ)(t), d = (0, a.cj)([C.ZP], () => ({
    unread: C.ZP.hasUnread(t.id),
    ackMessageId: C.ZP.ackMessageId(t.id),
    isLowImportanceMention: C.ZP.getIsMentionLowImportance(t.id)
  })), g = (0, a.e7)([E.ZP], () => E.ZP.resolveUnreadSetting(t)), m = (0, a.cj)([v.Z, x.Z], () => {
    let e = v.Z.getChannel(t.parent_id);
    return {
      canManageChannel: x.Z.can(T.Plq.MANAGE_CHANNELS, t),
      canReorderChannel: true !== i && (n.id === A._ || (null != e ? x.Z.can(T.Plq.MANAGE_CHANNELS, e) : x.Z.can(T.Plq.MANAGE_CHANNELS, n)))
    }
  }), _ = (0, a.e7)([O.Z], () => O.Z.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: j,
    isSubscriptionGated: S
  } = (0, b.Z)(t.id), P = (0, a.e7)([E.ZP], () => E.ZP.isFavorite(n.id, t.id)), I = (0, h.$5)(t), w = (0, p.NX)(t.id), Z = (0, N.Z)({
    channel: t,
    isChannelCollapsed: false,
    isChannelSelected: s,
    isSubscriptionGated: S,
    needSubscriptionToAccess: j,
    isNewChannel: _,
    muted: o,
    enableActivities: w,
    resolvedUnreadSetting: g
  }), R = (0, f.ZP)(t);
  return (0, r.jsx)(U, M(L({}, d, m, e), {
    hasActiveThreads: c,
    hasMoreActiveThreads: u,
    isSubscriptionGated: S,
    needSubscriptionToAccess: j,
    isNewChannel: _ && e.canBeNewChannel,
    isFavoriteSuggestion: l && !P,
    channelIsContentGated: I,
    channelInfo: Z,
    embeddedApps: R,
    resolvedUnreadSetting: g,
    hasChannelInfo: null != Z,
    enableActivities: w
  }))
}