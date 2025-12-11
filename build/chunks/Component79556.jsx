/** Chunk was on 82477 **/
/** chunk id: 79556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk642915 = require("./642915.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
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
class L extends Chunk98597.ZP {
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
    return null == module ? null : (0, Chunk54381.jsx)("div", {
      className: Chunk642915.channelInfo,
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
      hasActiveThreads: o,
      hasMoreActiveThreads: c,
      mentionCount: u,
      connectChannelDropTarget: d,
      connectChannelDragSource: f,
      connectDragPreview: h,
      canReorderChannel: p,
      isSubscriptionGated: m,
      isFavoriteSuggestion: y,
      subtitle: O,
      forceTopLevelThread: v,
      embeddedApps: j,
      resolvedUnreadSetting: C,
      withGuildIcon: x,
      enableActivities: E
    } = this.props, S = Chunk9156 && null != Chunk430824 && Chunk430824.length > 0, I = (0, Chunk873696.D)(Chunk665906), _ = (0, Chunk54381.jsx)("li", {
      className: a()(this.getClassName(), {
        [Chunk642915.disabled]: this.isDisabled(),
        [Chunk642915.selected]: require
      }),
      "data-dnd-name": module.name,
      onMouseEnter: Chunk493683 || Chunk594174 ? this.handleMouseEnter : true,
      onMouseLeave: Chunk493683 || Chunk594174 ? this.handleMouseLeave : true,
      children: (0, Chunk54381.jsx)(Chunk481060.yRy, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        onRequestClose: this.handleClosePopout,
        shouldShow: Chunk493683 && this.state.shouldShowThreadsPopout || Chunk594174 && this.state.shouldShowActivities,
        children: () => (0, Chunk54381.jsxs)(Chunk473403.ZP, {
          ref: this.channelItemRef,
          className: Chunk642915.iconVisibility,
          channel: module,
          guild: exports,
          selected: !Chunk22082 && require,
          muted: Chunk473749,
          unread: Chunk120356,
          mentionCount: Chunk239091,
          hasActiveThreads: Chunk442837,
          subtitle: null == Chunk109446 ? true : Chunk109446.subtitle,
          subtitleColor: null == Chunk109446 ? true : Chunk109446.color,
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
          children: [Chunk22082 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
            children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
          }), !Chunk22082 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
            children: [this.renderChannelInfo(), this.renderInviteButton(), this.renderEditButton()]
          })]
        })
      })
    });
    return Chunk622822 ? Chunk146773(Chunk595519(Chunk98597)) : Chunk98597
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      shouldShowThreadsPopout: false,
      shouldShowActivities: false
    }), R(this, "channelItemRef", i.createRef()), R(this, "enterTimer", 0), R(this, "exitTimer", 0), R(this, "handleMouseEnter", () => {
      this.props.channelIsContentGated && null == this.props.embeddedApps || (this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
          shouldShowActivities: true
        }) : this.props.channelIsContentGated || this.setState({
          shouldShowThreadsPopout: true
        })
      }, 200))
    }), R(this, "handleMouseLeave", () => {
      this.resetTextChannelPopoutTimers(), this.exitTimer = setTimeout(() => {
        this.state.shouldShowActivities && this.setState({
          shouldShowActivities: false
        }), this.state.shouldShowThreadsPopout && this.setState({
          shouldShowThreadsPopout: false
        })
      }, 250)
    }), R(this, "handleThreadsPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowThreadsPopout: false
      })
    }), R(this, "handleActivitiesPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowActivities: false
      })
    }), R(this, "handleClosePopout", () => {
      this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose()
    }), R(this, "handleMouseDown", () => {
      this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      c.Z.preload(null != t ? t : w.ME, e.id)
    }), R(this, "renderPopout", e => {
      let {
        channel: t,
        sorting: n,
        embeddedApps: i,
        channelIsContentGated: l
      } = this.props, {
        shouldShowActivities: a
      } = this.state;
      return t.isModeratorReportChannel() || l ? null : null != i && i.length > 0 && a && !n ? (0, r.jsx)(Z.Z, {
        onAction: this.handleActivitiesPopoutClose,
        channel: t
      }) : (0, r.jsx)(I.Z, M(D({}, e), {
        channel: this.props.channel
      }))
    }), R(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === w.d4z.GROUP_DM) return void(0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, r.jsx)(e, M(D({}, n), {
          channel: t,
          selected: true
        }))
      });
      if (t.type === w.d4z.DM) {
        let i = S.default.getUser(t.getRecipientId());
        null != i && (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("66165"), n.e("56826"), n.e("93896")]).then(n.bind(n, 131404));
          return n => (0, r.jsx)(e, M(D({}, n), {
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
        return n => (0, r.jsx)(e, M(D({}, n), {
          channel: t
        }))
      });
      let i = j.Z.getGuild(t.getGuildId());
      null != i && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
        return n => (0, r.jsx)(e, M(D({}, n), {
          channel: t,
          guild: i
        }))
      })
    })
  }
}
let k = (0, Chunk146773.B)(L);

function G(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: i,
    isFavoriteCategory: l,
    muted: a,
    selected: s
  } = e, {
    hasActiveThreads: c,
    hasMoreActiveThreads: u
  } = (0, O.JQ)(t), d = (0, o.cj)([x.ZP], () => ({
    unread: x.ZP.hasUnread(t.id),
    ackMessageId: x.ZP.ackMessageId(t.id),
    isLowImportanceMention: x.ZP.getIsMentionLowImportance(t.id)
  })), g = (0, o.e7)([E.ZP], () => E.ZP.resolveUnreadSetting(t)), b = (0, o.cj)([v.Z, C.Z], () => {
    let e = v.Z.getChannel(t.parent_id);
    return {
      canManageChannel: C.Z.can(w.Plq.MANAGE_CHANNELS, t),
      canReorderChannel: true !== i && (n.id === T._ || (null != e ? C.Z.can(w.Plq.MANAGE_CHANNELS, e) : C.Z.can(w.Plq.MANAGE_CHANNELS, n)))
    }
  }), j = (0, o.e7)([y.Z], () => y.Z.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: S,
    isSubscriptionGated: I
  } = (0, m.Z)(t.id), _ = (0, o.e7)([E.ZP], () => E.ZP.isFavorite(n.id, t.id)), N = (0, p.$5)(t), Z = (0, f.NX)(t.id), A = (0, P.Z)({
    channel: t,
    isChannelCollapsed: false,
    isChannelSelected: s,
    isSubscriptionGated: I,
    needSubscriptionToAccess: S,
    isNewChannel: j,
    muted: a,
    enableActivities: Z,
    resolvedUnreadSetting: g
  }), R = (0, h.ZP)(t);
  return (0, r.jsx)(k, M(D({}, d, b, e), {
    hasActiveThreads: c,
    hasMoreActiveThreads: u,
    isSubscriptionGated: I,
    needSubscriptionToAccess: S,
    isNewChannel: j && e.canBeNewChannel,
    isFavoriteSuggestion: l && !_,
    channelIsContentGated: N,
    channelInfo: A,
    embeddedApps: R,
    resolvedUnreadSetting: g,
    hasChannelInfo: null != A,
    enableActivities: Z
  }))
}