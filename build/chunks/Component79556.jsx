/** Chunk was on 81985 **/
/** chunk id: 79556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
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
    return null == e ? null : (0, r.jsx)("div", {
      className: w.channelInfo,
      children: e
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
      connectChannelDragSource: p,
      connectDragPreview: f,
      canReorderChannel: h,
      isSubscriptionGated: b,
      isFavoriteSuggestion: y,
      subtitle: v,
      forceTopLevelThread: O,
      embeddedApps: j,
      resolvedUnreadSetting: x,
      withGuildIcon: C,
      enableActivities: E
    } = this.props, S = E && null != j && j.length > 0, _ = (0, m.D)(v), I = (0, r.jsx)("li", {
      className: a()(this.getClassName(), {
        [w.disabled]: this.isDisabled(),
        [w.selected]: n
      }),
      "data-dnd-name": e.name,
      onMouseEnter: c || S ? this.handleMouseEnter : true,
      onMouseLeave: c || S ? this.handleMouseLeave : true,
      children: (0, r.jsx)(s.yRy, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        onRequestClose: this.handleClosePopout,
        shouldShow: c && this.state.shouldShowThreadsPopout || S && this.state.shouldShowActivities,
        children: () => (0, r.jsxs)(Z.ZP, {
          ref: this.channelItemRef,
          className: w.iconVisibility,
          channel: e,
          guild: t,
          selected: !y && n,
          muted: i,
          unread: l,
          mentionCount: u,
          hasActiveThreads: o,
          subtitle: null == _ ? true : _.subtitle,
          subtitleColor: null == _ ? true : _.color,
          onMouseDown: this.handleMouseDown,
          onContextMenu: this.handleContextMenu,
          connectDragPreview: h ? f : null,
          isFavoriteSuggestion: y,
          channelTypeOverride: O ? T.d4z.GUILD_TEXT : true,
          resolvedUnreadSetting: x,
          withGuildIcon: C,
          "aria-label": (0, g.ZP)({
            channel: e,
            unread: l,
            mentionCount: u,
            isSubscriptionGated: b
          }),
          children: [y && (0, r.jsxs)(r.Fragment, {
            children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
          }), !y && (0, r.jsxs)(r.Fragment, {
            children: [this.renderChannelInfo(), this.renderInviteButton(), this.renderEditButton()]
          })]
        })
      })
    });
    return h ? d(p(I)) : I
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
      c.Z.preload(null != t ? t : T.ME, e.id)
    }), R(this, "renderPopout", e => {
      let {
        channel: t,
        sorting: n,
        embeddedApps: i,
        channelIsContentGated: l
      } = this.props, {
        shouldShowActivities: a
      } = this.state;
      return t.isModeratorReportChannel() || l ? null : null != i && i.length > 0 && a && !n ? (0, r.jsx)(N.Z, {
        onAction: this.handleActivitiesPopoutClose,
        channel: t
      }) : (0, r.jsx)(_.Z, M(D({}, e), {
        channel: this.props.channel
      }))
    }), R(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === T.d4z.GROUP_DM) return void(0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, r.jsx)(e, M(D({}, n), {
          channel: t,
          selected: true
        }))
      });
      if (t.type === T.d4z.DM) {
        let i = S.default.getUser(t.getRecipientId());
        null != i && (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("4040"), n.e("56826"), n.e("93896")]).then(n.bind(n, 131404));
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
let L = (0, Chunk146773.B)(k);

function U(e) {
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
  } = (0, v.JQ)(t), d = (0, o.cj)([C.ZP], () => ({
    unread: C.ZP.hasUnread(t.id),
    ackMessageId: C.ZP.ackMessageId(t.id),
    isLowImportanceMention: C.ZP.getIsMentionLowImportance(t.id)
  })), g = (0, o.e7)([E.ZP], () => E.ZP.resolveUnreadSetting(t)), m = (0, o.cj)([O.Z, x.Z], () => {
    let e = O.Z.getChannel(t.parent_id);
    return {
      canManageChannel: x.Z.can(T.Plq.MANAGE_CHANNELS, t),
      canReorderChannel: true !== i && (n.id === A._ || (null != e ? x.Z.can(T.Plq.MANAGE_CHANNELS, e) : x.Z.can(T.Plq.MANAGE_CHANNELS, n)))
    }
  }), j = (0, o.e7)([y.Z], () => y.Z.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: S,
    isSubscriptionGated: _
  } = (0, b.Z)(t.id), I = (0, o.e7)([E.ZP], () => E.ZP.isFavorite(n.id, t.id)), Z = (0, h.$5)(t), N = (0, p.NX)(t.id), w = (0, P.Z)({
    channel: t,
    isChannelCollapsed: false,
    isChannelSelected: s,
    isSubscriptionGated: _,
    needSubscriptionToAccess: S,
    isNewChannel: j,
    muted: a,
    enableActivities: N,
    resolvedUnreadSetting: g
  }), R = (0, f.ZP)(t);
  return (0, r.jsx)(L, M(D({}, d, m, e), {
    hasActiveThreads: c,
    hasMoreActiveThreads: u,
    isSubscriptionGated: _,
    needSubscriptionToAccess: S,
    isNewChannel: j && e.canBeNewChannel,
    isFavoriteSuggestion: l && !I,
    channelIsContentGated: Z,
    channelInfo: w,
    embeddedApps: R,
    resolvedUnreadSetting: g,
    hasChannelInfo: null != w,
    enableActivities: N
  }))
}