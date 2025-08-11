/** Chunk was on 34779 **/
/** chunk id: 79556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.js"),
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
  Chunk109446 = require("./109446.js"),
  Chunk98597 = require("./98597.js"),
  Chunk648501 = require("./648501.js"),
  Chunk473403 = require("./473403.js"),
  Chunk304471 = require("./304471.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk915887 = require("./915887.js");

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
    return null == module ? null : <div className={Chunk915887.channelInfo}>{module}</div>
  }
  render() {
    let {
      channel: e,
      guild: t,
      selected: n,
      muted: i,
      unread: l,
      hasActiveThreads: s,
      hasMoreActiveThreads: c,
      mentionCount: u,
      connectChannelDropTarget: d,
      connectChannelDragSource: h,
      connectDragPreview: p,
      canReorderChannel: f,
      isSubscriptionGated: b,
      isFavoriteSuggestion: _,
      subtitle: y,
      forceTopLevelThread: C,
      embeddedApps: v,
      resolvedUnreadSetting: j,
      withGuildIcon: E,
      enableActivities: S
    } = this.props, x = (0, Chunk340541.jW)({
      location: "text_channel"
    }).entrypoints, I = Chunk9156 && null != Chunk430824 && Chunk430824.length > 0, P = (0, Chunk873696.D)(Chunk665906), N = <li className={o()(this.getClassName(), {
        [Chunk915887.disabled]: this.isDisabled(),
        [Chunk915887.selected]: require
      })} data-dnd-name={module.name} onMouseEnter={Chunk493683 || Chunk109446 ? this.handleMouseEnter : true} onMouseLeave={Chunk493683 || Chunk109446 ? this.handleMouseLeave : true}><Chunk481060.yRy targetElementRef={this.channelItemRef} position={"right"} renderPopout={this.renderPopout} spacing={0} onRequestClose={this.handleClosePopout} shouldShow={Chunk493683 && this.state.shouldShowThreadsPopout || Chunk109446 && this.state.shouldShowActivities}>{() => (0, Chunk255367.jsxs)(Chunk473403.ZP, {
          ref: this.channelItemRef,
          className: Chunk915887.iconVisibility,
          channel: module,
          guild: exports,
          selected: !Chunk22082 && require,
          muted: Chunk73800,
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
          children: [Chunk22082 && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
            children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
          }), !Chunk22082 && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
            children: [this.renderChannelInfo(), Chunk594174 && this.renderOptionsButton({
              onContextMenu: this.handleContextMenu
            }), !Chunk594174 && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
              children: [this.renderInviteButton(), this.renderEditButton()]
            })]
          })]
        })}</Chunk481060.yRy></li>;
    return Chunk622822 ? Chunk146773(Chunk595519(Chunk648501)) : Chunk648501
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      shouldShowThreadsPopout: false,
      shouldShowActivities: false
    }), D(this, "channelItemRef", i.createRef()), D(this, "enterTimer", 0), D(this, "exitTimer", 0), D(this, "handleMouseEnter", () => {
      (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) && (this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
          shouldShowActivities: true
        }) : this.props.canShowThreadPreviewForUser && this.setState({
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
        embeddedApps: i
      } = this.props, {
        shouldShowActivities: l
      } = this.state;
      return t.isModeratorReportChannel() || (0, f.aC)(t) && (0, f.dl)() ? null : null != i && i.length > 0 && l && !n ? <Z.Z onAction={this.handleActivitiesPopoutClose} channel={t} /> : <I.Z{...M(L({}, e), {
        channel: this.props.channel
      })} />
    }), D(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === T.d4z.GROUP_DM) return void(0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("57789"), n.e("2016")]).then(n.bind(n, 354741));
        return n => <e{...M(L({}, n), {
          channel: t,
          selected: true
        })} />
      });
      if (t.type === T.d4z.DM) {
        let i = x.default.getUser(t.getRecipientId());
        null != i && (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("98783"), n.e("57789"), n.e("56826"), n.e("45903")]).then(n.bind(n, 131404));
          return n => <e{...M(L({}, n), {
            user: i,
            channel: t,
            showModalItems: false
          })} />
        });
        return
      }
      if (t.isModeratorReportChannel()) return void(0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("86715").then(n.bind(n, 466676));
        return n => <e{...M(L({}, n), {
          channel: t
        })} />
      });
      let i = v.Z.getGuild(t.getGuildId());
      null != i && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
        return n => <e{...M(L({}, n), {
          channel: t,
          guild: i
        })} />
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
    selected: a
  } = e, {
    hasActiveThreads: c,
    hasMoreActiveThreads: u
  } = (0, y.JQ)(t), d = (0, s.cj)([E.ZP], () => ({
    unread: E.ZP.hasUnread(t.id),
    ackMessageId: E.ZP.ackMessageId(t.id),
    isLowImportanceMention: E.ZP.getIsMentionLowImportance(t.id)
  })), g = (0, s.e7)([S.ZP], () => S.ZP.resolveUnreadSetting(t)), m = (0, s.cj)([C.Z, j.Z], () => {
    let e = C.Z.getChannel(t.parent_id);
    return {
      canManageChannel: j.Z.can(T.Plq.MANAGE_CHANNELS, t),
      canReorderChannel: true !== i && (n.id === A._ || (null != e ? j.Z.can(T.Plq.MANAGE_CHANNELS, e) : j.Z.can(T.Plq.MANAGE_CHANNELS, n)))
    }
  }), O = (0, s.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: v,
    isSubscriptionGated: I
  } = (0, b.Z)(t.id), P = (0, s.e7)([S.ZP], () => S.ZP.isFavorite(n.id, t.id)), w = (0, s.e7)([x.default], () => {
    let e = x.default.getCurrentUser();
    return null != e && (!(0, f.aC)(t) || e.nsfwAllowed)
  }, [t]), Z = (0, h.NX)(t.id), R = (0, N.Z)({
    channel: t,
    isChannelCollapsed: false,
    isChannelSelected: a,
    isSubscriptionGated: I,
    needSubscriptionToAccess: v,
    isNewChannel: O,
    muted: o,
    enableActivities: Z,
    resolvedUnreadSetting: g
  }), D = (0, p.ZP)(t);
  return <U{...M(L({}, d, m, e), {
    hasActiveThreads: c,
    hasMoreActiveThreads: u,
    isSubscriptionGated: I,
    needSubscriptionToAccess: v,
    isNewChannel: O && e.canBeNewChannel,
    isFavoriteSuggestion: l && !P,
    canShowThreadPreviewForUser: w,
    channelInfo: R,
    embeddedApps: D,
    resolvedUnreadSetting: g,
    hasChannelInfo: null != R,
    enableActivities: Z
  })} />
}