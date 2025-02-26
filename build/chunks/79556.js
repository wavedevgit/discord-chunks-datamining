/** Chunk was on 30829 **/
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  a = n(481060),
  s = n(493683),
  c = n(239091),
  u = n(146773),
  d = n(595519),
  p = n(619915),
  h = n(201895),
  f = n(873696),
  g = n(66999),
  m = n(22082),
  b = n(665906),
  v = n(592125),
  y = n(430824),
  O = n(496675),
  j = n(306680),
  _ = n(9156),
  C = n(594174),
  x = n(109446),
  P = n(98597),
  N = n(648501),
  S = n(473403),
  I = n(304471),
  Z = n(981631),
  w = n(647086),
  E = n(436804);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
class R extends P.ZP {
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
      className: E.channelInfo,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      selected: n,
      muted: i,
      unread: o,
      hasActiveThreads: s,
      hasMoreActiveThreads: c,
      mentionCount: u,
      connectChannelDropTarget: d,
      connectChannelDragSource: p,
      connectDragPreview: g,
      canReorderChannel: m,
      isSubscriptionGated: b,
      isFavoriteSuggestion: v,
      subtitle: y,
      forceTopLevelThread: O,
      embeddedApps: j,
      resolvedUnreadSetting: _,
      withGuildIcon: C,
      enableActivities: x
    } = this.props, P = x && null != j && j.length > 0, N = (0, f.D)(y), I = (0, r.jsx)("li", {
      className: l()(this.getClassName(), {
        [E.disabled]: this.isDisabled(),
        [E.selected]: n
      }),
      "data-dnd-name": e.name,
      onMouseEnter: c || P ? this.handleMouseEnter : void 0,
      onMouseLeave: c || P ? this.handleMouseLeave : void 0,
      children: (0, r.jsx)(a.yRy, {
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.handleClosePopout,
        shouldShow: c && this.state.shouldShowThreadsPopout || P && this.state.shouldShowActivities,
        children: () => (0, r.jsxs)(S.Z, {
          className: E.iconVisibility,
          channel: e,
          guild: t,
          selected: !v && n,
          muted: i,
          unread: o,
          mentionCount: u,
          hasActiveThreads: s,
          subtitle: null == N ? void 0 : N.subtitle,
          subtitleColor: null == N ? void 0 : N.color,
          onMouseDown: this.handleMouseDown,
          onContextMenu: this.handleContextMenu,
          connectDragPreview: m ? g : null,
          isFavoriteSuggestion: v,
          channelTypeOverride: O ? Z.d4z.GUILD_TEXT : void 0,
          resolvedUnreadSetting: _,
          withGuildIcon: C,
          "aria-label": (0, h.ZP)({
            channel: e,
            unread: o,
            mentionCount: u,
            isSubscriptionGated: b
          }),
          children: [v && this.renderAcceptSuggestionButton(), v && this.renderRemoveSuggestionButton(), !v && this.renderInviteButton(), !v && this.renderEditButton(), !v && this.renderChannelInfo()]
        })
      })
    });
    return m ? d(p(I)) : I
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      shouldShowThreadsPopout: !1,
      shouldShowActivities: !1
    }), T(this, "enterTimer", 0), T(this, "exitTimer", 0), T(this, "handleMouseEnter", () => {
      (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) && (this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
          shouldShowActivities: !0
        }) : this.props.canShowThreadPreviewForUser && this.setState({
          shouldShowThreadsPopout: !0
        })
      }, 200))
    }), T(this, "handleMouseLeave", () => {
      this.resetTextChannelPopoutTimers(), this.exitTimer = setTimeout(() => {
        this.state.shouldShowActivities && this.setState({
          shouldShowActivities: !1
        }), this.state.shouldShowThreadsPopout && this.setState({
          shouldShowThreadsPopout: !1
        })
      }, 250)
    }), T(this, "handleThreadsPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowThreadsPopout: !1
      })
    }), T(this, "handleActivitiesPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowActivities: !1
      })
    }), T(this, "handleClosePopout", () => {
      this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose()
    }), T(this, "handleMouseDown", () => {
      this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      s.Z.preload(null != t ? t : Z.ME, e.id)
    }), T(this, "renderPopout", e => {
      let {
        channel: t,
        sorting: n,
        embeddedApps: i
      } = this.props, {
        shouldShowActivities: l
      } = this.state;
      return null != i && i.length > 0 && l && !n ? (0, r.jsx)(I.Z, {
        onAction: this.handleActivitiesPopoutClose,
        channel: t
      }) : (0, r.jsx)(x.Z, A(D({}, e), {
        channel: this.props.channel
      }))
    }), T(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === Z.d4z.GROUP_DM) {
        (0, c.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("25421"), n.e("71582")]).then(n.bind(n, 354741));
          return n => (0, r.jsx)(e, A(D({}, n), {
            channel: t,
            selected: !0
          }))
        });
        return
      }
      if (t.type === Z.d4z.DM) {
        let i = C.default.getUser(t.getRecipientId());
        null != i && (0, c.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("98783"), n.e("56826"), n.e("69151")]).then(n.bind(n, 131404));
          return n => (0, r.jsx)(e, A(D({}, n), {
            user: i,
            channel: t,
            showModalItems: !1
          }))
        });
        return
      }
      let i = y.Z.getGuild(t.getGuildId());
      null != i && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
        return n => (0, r.jsx)(e, A(D({}, n), {
          channel: t,
          guild: i
        }))
      })
    })
  }
}
let L = (0, u.B)(R);

function k(e) {
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
  } = (0, b.JQ)(t), h = (0, o.cj)([j.ZP], () => ({
    unread: j.ZP.hasUnread(t.id),
    ackMessageId: j.ZP.ackMessageId(t.id),
    isLowImportanceMention: j.ZP.getIsMentionLowImportance(t.id)
  })), f = (0, o.e7)([_.ZP], () => _.ZP.resolveUnreadSetting(t)), y = (0, o.cj)([v.Z, O.Z], () => {
    let e = v.Z.getChannel(t.parent_id);
    return {
      canManageChannel: O.Z.can(Z.Plq.MANAGE_CHANNELS, t),
      canReorderChannel: !0 !== i && (n.id === w._ || (null != e ? O.Z.can(Z.Plq.MANAGE_CHANNELS, e) : O.Z.can(Z.Plq.MANAGE_CHANNELS, n)))
    }
  }), x = (0, o.e7)([m.Z], () => m.Z.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: P,
    isSubscriptionGated: S
  } = (0, g.Z)(t.id), I = (0, o.e7)([_.ZP], () => _.ZP.isFavorite(n.id, t.id)), E = (0, o.e7)([C.default], () => {
    let e = C.default.getCurrentUser();
    return null != e && (!t.isNSFW() || e.nsfwAllowed)
  }, [t]), T = (0, d.NX)(t.id), R = (0, N.Z)({
    channel: t,
    isChannelCollapsed: !1,
    isChannelSelected: s,
    isSubscriptionGated: S,
    needSubscriptionToAccess: P,
    isNewChannel: x,
    muted: a,
    enableActivities: T,
    resolvedUnreadSetting: f
  }), k = (0, p.ZP)(t);
  return (0, r.jsx)(L, A(D({}, h, y, e), {
    hasActiveThreads: c,
    hasMoreActiveThreads: u,
    isSubscriptionGated: S,
    needSubscriptionToAccess: P,
    isNewChannel: x && e.canBeNewChannel,
    isFavoriteSuggestion: l && !I,
    canShowThreadPreviewForUser: E,
    channelInfo: R,
    embeddedApps: k,
    resolvedUnreadSetting: f,
    hasChannelInfo: null != R,
    enableActivities: T
  }))
}