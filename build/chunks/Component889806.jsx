/** Chunk was on 1113 **/
/** chunk id: 889806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk676002 = require("./676002.jsx"),
  Chunk811024 = require("./811024.js"),
  Chunk685399 = require("./685399.js"),
  Chunk323073 = require("./323073.js"),
  Chunk963027 = require("./963027.js"),
  Chunk5932 = require("./5932.js"),
  Chunk721592 = require("./721592.js"),
  Chunk454058 = require("./454058.js"),
  Chunk406704 = require("./406704.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk383501 = require("./383501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk964918 = require("./964918.jsx"),
  Chunk557534 = require("./557534.jsx"),
  Chunk68437 = require("./68437.jsx"),
  Chunk166444 = require("./166444.jsx"),
  Chunk813513 = require("./813513.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk728444 = require("./728444.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
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
class U extends Chunk557534.Ay {
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
      className: L.yW,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      selected: n,
      muted: l,
      unread: i,
      hasActiveThreads: a,
      hasMoreActiveThreads: c,
      mentionCount: u,
      connectChannelDropTarget: d,
      connectChannelDragSource: h,
      connectDragPreview: p,
      canReorderChannel: g,
      isSubscriptionGated: b,
      isFavoriteSuggestion: A,
      subtitle: y,
      forceTopLevelThread: O,
      embeddedApps: _,
      resolvedUnreadSetting: x,
      withGuildIcon: j,
      enableActivities: v
    } = this.props, E = v && null != _ && _.length > 0, C = (0, m.M)(y), S = (0, r.jsx)("li", {
      className: s()(this.getClassName(), {
        [L.r9]: this.isDisabled(),
        [L.wH]: n
      }),
      "data-dnd-name": e.name,
      onMouseEnter: c || E ? this.handleMouseEnter : true,
      onMouseLeave: c || E ? this.handleMouseLeave : true,
      children: (0, r.jsx)(o.YNO, {
        targetElementRef: this.channelItemRef,
        position: "right",
        renderPopout: this.renderPopout,
        onRequestClose: this.handleClosePopout,
        shouldShow: c && this.state.shouldShowThreadsPopout || E && this.state.shouldShowActivities,
        children: () => (0, r.jsxs)(P.Ay, {
          ref: this.channelItemRef,
          className: L.Ki,
          channel: e,
          guild: t,
          selected: !A && n,
          muted: l,
          unread: i,
          mentionCount: u,
          hasActiveThreads: a,
          subtitle: null == C ? true : C.subtitle,
          subtitleColor: null == C ? true : C.color,
          onMouseDown: this.handleMouseDown,
          onContextMenu: this.handleContextMenu,
          connectDragPreview: g ? p : null,
          isFavoriteSuggestion: A,
          channelTypeOverride: O ? R.rbe.GUILD_TEXT : true,
          resolvedUnreadSetting: x,
          withGuildIcon: j,
          "aria-label": (0, f.Ay)({
            channel: e,
            unread: i,
            mentionCount: u,
            isSubscriptionGated: b
          }),
          children: [A && (0, r.jsxs)(r.Fragment, {
            children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
          }), !A && (0, r.jsxs)(r.Fragment, {
            children: [this.renderChannelInfo(), this.renderInviteButton(), this.renderEditButton()]
          })]
        })
      })
    });
    return g ? d(h(S)) : S
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      shouldShowThreadsPopout: false,
      shouldShowActivities: false
    }), M(this, "channelItemRef", l.createRef()), M(this, "enterTimer", 0), M(this, "exitTimer", 0), M(this, "handleMouseEnter", () => {
      this.props.channelIsContentGated && null == this.props.embeddedApps || (this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
          shouldShowActivities: true
        }) : this.props.channelIsContentGated || this.setState({
          shouldShowThreadsPopout: true
        })
      }, 200))
    }), M(this, "handleMouseLeave", () => {
      this.resetTextChannelPopoutTimers(), this.exitTimer = setTimeout(() => {
        this.state.shouldShowActivities && this.setState({
          shouldShowActivities: false
        }), this.state.shouldShowThreadsPopout && this.setState({
          shouldShowThreadsPopout: false
        })
      }, 250)
    }), M(this, "handleThreadsPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowThreadsPopout: false
      })
    }), M(this, "handleActivitiesPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowActivities: false
      })
    }), M(this, "handleClosePopout", () => {
      this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose()
    }), M(this, "handleMouseDown", () => {
      this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      c.A.preload(null != t ? t : R.ME, e.id)
    }), M(this, "renderPopout", e => {
      let {
        channel: t,
        sorting: n,
        embeddedApps: l,
        channelIsContentGated: i
      } = this.props, {
        shouldShowActivities: s
      } = this.state;
      return t.isModeratorReportChannel() || i ? null : null != l && l.length > 0 && s && !n ? (0, r.jsx)(w.A, {
        onAction: this.handleActivitiesPopoutClose,
        channel: t
      }) : (0, r.jsx)(I.A, G(k({}, e), {
        channel: this.props.channel
      }))
    }), M(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === R.rbe.GROUP_DM) return void(0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
        return n => (0, r.jsx)(e, G(k({}, n), {
          channel: t,
          selected: true
        }))
      });
      if (t.type === R.rbe.DM) {
        let l = S.default.getUser(t.getRecipientId());
        null != l && (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("29534"), n.e("39778"), n.e("54266")]).then(n.bind(n, 385913));
          return n => (0, r.jsx)(e, G(k({}, n), {
            user: l,
            channel: t,
            showModalItems: false
          }))
        });
        return
      }
      if (t.isModeratorReportChannel()) return void(0, u.L3)(e, async () => {
        let {
          default: e
        } = await n.e("78580").then(n.bind(n, 907647));
        return n => (0, r.jsx)(e, G(k({}, n), {
          channel: t
        }))
      });
      let l = x.A.getGuild(t.getGuildId());
      null != l && (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(n.bind(n, 370372));
        return n => (0, r.jsx)(e, G(k({}, n), {
          channel: t,
          guild: l
        }))
      })
    })
  }
}
let V = (0, Chunk676002.a)(U);

function B(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: l,
    isFavoriteCategory: i,
    muted: s,
    selected: o
  } = e, {
    hasActiveThreads: c,
    hasMoreActiveThreads: u
  } = (0, y.NR)(t), d = (0, a.cf)([E.Ay], () => ({
    unread: E.Ay.hasUnread(t.id),
    ackMessageId: E.Ay.ackMessageId(t.id),
    isLowImportanceMention: E.Ay.getIsMentionLowImportance(t.id)
  })), f = (0, a.bG)([C.Ay], () => C.Ay.resolveUnreadSetting(t)), m = (0, a.cf)([O.A, j.A], () => {
    let e = O.A.getChannel(t.parent_id);
    return {
      canManageChannel: j.A.can(R.xBc.MANAGE_CHANNELS, t),
      canReorderChannel: true !== l && (n.id === D.V || (null != e ? j.A.can(R.xBc.MANAGE_CHANNELS, e) : j.A.can(R.xBc.MANAGE_CHANNELS, n)))
    }
  }), x = (0, a.bG)([A.A], () => A.A.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: S,
    isSubscriptionGated: I
  } = (0, b.A)(t.id), N = (0, a.bG)([C.Ay], () => C.Ay.isFavorite(n.id, t.id)), P = (0, g.vL)(t), w = (0, h.Gp)(t.id), L = (0, T.A)({
    channel: t,
    isChannelCollapsed: false,
    isChannelSelected: o,
    isSubscriptionGated: I,
    needSubscriptionToAccess: S,
    isNewChannel: x,
    muted: s,
    enableActivities: w,
    resolvedUnreadSetting: f
  }), M = (0, p.Ay)(t);
  return (0, a.bG)([v.A, _.Ay], () => v.A.getChannelId() !== t.id && _.Ay.isCurrentUserGuest(t.getGuildId())) ? null : (0, r.jsx)(V, G(k({}, d, m, e), {
    hasActiveThreads: c,
    hasMoreActiveThreads: u,
    isSubscriptionGated: I,
    needSubscriptionToAccess: S,
    isNewChannel: x && e.canBeNewChannel,
    isFavoriteSuggestion: i && !N,
    channelIsContentGated: P,
    channelInfo: L,
    embeddedApps: M,
    resolvedUnreadSetting: f,
    hasChannelInfo: null != L,
    enableActivities: w
  }))
}