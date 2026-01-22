/** Chunk was on 97492 **/
/** chunk id: 422361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => el
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk442433 = require("./442433.js"),
  Chunk676002 = require("./676002.jsx"),
  Chunk296216 = require("./296216.js"),
  Chunk685399 = require("./685399.js"),
  Chunk271683 = require("./271683.jsx"),
  Chunk186369 = require("./186369.js"),
  Chunk725613 = require("./725613.js"),
  Chunk963027 = require("./963027.js"),
  Chunk844262 = require("./844262.js"),
  Chunk47167 = require("./47167.js"),
  Chunk262763 = require("./262763.jsx"),
  Chunk5932 = require("./5932.js"),
  Chunk857253 = require("./857253.js"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk721592 = require("./721592.js"),
  Chunk508654 = require("./508654.js"),
  Chunk214660 = require("./214660.jsx"),
  Chunk140547 = require("./140547.js"),
  Chunk159426 = require("./159426.js"),
  Chunk378570 = require("./378570.js"),
  Chunk728321 = require("./728321.jsx"),
  Chunk253932 = require("./253932.js"),
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
  Chunk439282 = require("./439282.jsx"),
  Chunk562991 = require("./562991.jsx"),
  Chunk588224 = require("./588224.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk728444 = require("./728444.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}

function et(e, t) {
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
class en extends Chunk557534.Ay {
  componentWillUnmount() {
    this.activitiesHideTimeout.stop()
  }
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
    return (0, H.Pd)(e, F.A, L.A)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return Z.ZS;
    if (null != t)
      if (e > t) return Z.mU;
      else return Z.TR;
    return Z.fx
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      showEmptyChannelTopic: l
    } = this.props, i = null == (e = (0, x.M)(this.props.subtitle)) ? true : e.subtitle, {
      hovered: a
    } = this.state;
    return (0, r.jsx)(Y.A, {
      onClick: this.handleVoiceStatusClick,
      channel: t,
      connected: n,
      subtitle: i,
      hovered: a,
      showEmptyChannelTopic: l
    })
  }
  renderVoiceUsers() {
    let {
      channel: e,
      voiceStates: t,
      collapsed: n,
      withGuildIcon: l,
      tabIndex: i
    } = this.props;
    return (0, r.jsx)(q.A, {
      channel: e,
      collapsed: n,
      collapsedMax: 6,
      voiceStates: t,
      withGuildIcon: l,
      tabIndex: i,
      location: X.ThZ.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, r.jsx)("div", {
      className: Z.yW,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      unread: l,
      resolvedUnreadSetting: i,
      mentionCount: s,
      locked: o,
      sorting: d,
      isUserOver: f,
      connectChannelDropTarget: p,
      connectChannelDragSource: h,
      connectUserDropTarget: b,
      connectDragPreview: g,
      canReorderChannel: m,
      canMoveMembers: A,
      showTutorial: j,
      hasActiveEvent: v,
      embeddedApps: x,
      isSubscriptionGated: E,
      isFavoriteSuggestion: _,
      withGuildIcon: C,
      hasStartTime: S,
      shouldHighlightChannel: I,
      shouldUseAnimatedWaveform: N
    } = this.props, {
      shouldShowActivities: T,
      shouldShowGuildVerificationPopout: P
    } = this.state, w = I || N, D = this.getVoiceStatesCount(), M = (0, r.jsxs)("li", {
      ref: this.ref,
      className: a()(this.getModeClass(), {
        [Z.r9]: this.isDisabled(),
        [Z.fy]: I
      }),
      "data-dnd-name": e.name,
      children: [I && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: Z.UQ
        }), (0, r.jsx)("div", {
          className: Z.l0
        })]
      }), (0, r.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, r.jsx)(u.YNO, {
          targetElementRef: this.channelItemRef,
          position: "right",
          renderPopout: this.renderPopout,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: T && !d && !f && !P || P,
          children: () => (0, r.jsx)(c.m, {
            text: this.getTooltipText(),
            children: (0, r.jsxs)(W.Ay, {
              ref: this.channelItemRef,
              className: Z.Ki,
              iconClassName: a()({
                [Z.Gj]: v || S || w
              }),
              hasActiveEvent: v,
              channel: e,
              selected: !_ && t,
              connected: n,
              unread: n ? l : true,
              resolvedUnreadSetting: i,
              mentionCount: s,
              locked: o,
              subtitle: this.renderSubtitle(),
              onClick: () => {
                this.handleClick()
              },
              onContextMenu: e => {
                this.handleContextMenu(e)
              },
              connectDragPreview: g,
              isFavoriteSuggestion: _,
              "aria-label": (0, y.Ay)({
                channel: e,
                unread: l,
                mentionCount: s,
                userCount: D,
                embeddedActivitiesCount: x.length,
                isSubscriptionGated: E
              }),
              "aria-describedby": (0, O.A)({
                channel: e,
                embeddedApps: x
              }),
              withGuildIcon: C,
              children: [_ && (0, r.jsxs)(r.Fragment, {
                children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
              }), !_ && (0, r.jsxs)(r.Fragment, {
                children: [this.renderOpenChatButton(), this.renderInviteButton(), this.renderEditButton(), this.renderChannelInfo()]
              })]
            })
          })
        })
      }), this.renderVoiceUsers()]
    });
    return A && (M = b(M)), m && (M = p(h(M))), j && (M = (0, r.jsx)(R.A, {
      childRef: this.ref,
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: false,
      children: M
    })), M
  }
  constructor(...e) {
    super(...e), $(this, "state", {
      shouldShowActivities: false,
      shouldShowGuildVerificationPopout: false,
      hovered: false
    }), $(this, "ref", l.createRef()), $(this, "channelItemRef", l.createRef()), $(this, "activitiesHideTimeout", new o.Ep), $(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: false
      })
    }), $(this, "handleVoiceConnect", () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: r,
        needSubscriptionToAccess: l,
        enableOpenTIVForPing: i,
        mentionCount: a
      } = this.props;
      r && this.setState({
        shouldShowGuildVerificationPopout: true
      });
      let s = i && a > 0;
      s && d.A.updateChatOpen(n.id, true), v.A.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: l,
        routeDirectlyToChannel: s,
        locked: e
      })
    }), $(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = L.A.getGuild(t.getGuildId());
      null != l && (0, f.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("53378")]).then(n.bind(n, 698193));
        return n => (0, r.jsx)(e, et(ee({}, n), {
          channel: t,
          guild: l
        }))
      })
    }), $(this, "handleMouseEnter", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: true,
        hovered: true
      })
    }), $(this, "handleMouseLeave", () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: false,
        hovered: false
      }))
    }), $(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: false
      })
    }), $(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, C.V)(t) && (0, _.Ze)(t), this.handleVoiceConnect()
    }), $(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: n
      } = this.props;
      t && (e.stopPropagation(), (0, g.A)({
        channel: n
      }))
    }), $(this, "renderPopout", () => {
      let {
        channel: e,
        voiceStates: t,
        sorting: n,
        isUserOver: l,
        selected: i,
        guild: a
      } = this.props, {
        shouldShowActivities: s,
        shouldShowGuildVerificationPopout: o
      } = this.state;
      if (s && !n && !l && !o) {
        let n = D.JG.getSetting().includes(a.id);
        return (0, r.jsx)(z.A, {
          onAction: this.closePopout,
          guild: a,
          channel: e,
          voiceStates: t,
          isChannelSelected: i,
          shouldShowSettingNudge: n
        })
      }
      if (o) return (0, r.jsx)(N.A, {
        type: N.H.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), $(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(c.m, {
        asContainer: true,
        text: Q.intl.string(Q.t.ZXxLQg),
        children: (0, r.jsx)(u.DUT, {
          className: a()(Z.Xs, n ? Z.Tf : null),
          onClick: () => {
            d.A.updateChatOpen(e.id, true), (0, w.iN)(e.id)
          },
          "aria-label": Q.intl.string(Q.t.ZXxLQg),
          children: (0, r.jsx)(u.oyn, {
            size: "xs",
            color: "currentColor",
            className: Z.gE
          })
        })
      })
    }), $(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNq) : null
    })
  }
}
let er = (0, Chunk676002.a)((0, Chunk296216.F)(en));

function el(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: l,
    isFavoriteCategory: i,
    selected: a,
    collapsed: o,
    voiceStates: c
  } = e, u = (0, s.cf)([U.Ay], () => ({
    unread: U.Ay.hasUnread(n.id),
    mentionCount: U.Ay.getMentionCount(n.id)
  })), d = (0, s.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)), f = (0, s.cf)([M.A, G.A, k.A], () => {
    let e = M.A.getChannel(n.parent_id),
      r = G.A.getCheck(n.guild_id);
    return {
      canManageChannel: k.A.can(X.xBc.MANAGE_CHANNELS, n),
      canReorderChannel: true !== l && (t.id === J.V || (null != e ? k.A.can(X.xBc.MANAGE_CHANNELS, e) : k.A.can(X.xBc.MANAGE_CHANNELS, t))),
      canMoveMembers: k.A.can(X.xBc.MOVE_MEMBERS, n),
      locked: !k.A.can(X.xBc.CONNECT, n),
      bypassLimit: k.A.can(X.xBc.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), p = (0, s.bG)([F.A], () => F.A.hasVideo(n.id)), h = (0, b.Ay)(n), g = (0, j.Ay)(n), y = (0, I.Qs)(n.id), O = (0, s.bG)([A.A], () => null != A.A.getStartTime(n), [n]), {
    isSubscriptionGated: v,
    needSubscriptionToAccess: x
  } = (0, S.A)(n.id), _ = (0, E.A)(), C = (0, s.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)), N = e.connected || (null == _ ? true : _.channelId) === n.id, {
    enableHangStatus: w,
    showEmptyChannelTopic: R
  } = (0, T.$j)({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }), {
    enableOpenTIVForPing: D
  } = P.m.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: false
  }), {
    enableHighlight: L,
    enableWaveformIcon: H
  } = (0, m.b)(t.id, "VoiceChannel"), B = null != c && c.length > 0, W = L && B, z = H && B, Y = (0, K.A)({
    channel: n,
    isChannelSelected: a,
    isChannelCollapsed: o,
    voiceStates: c,
    isSubscriptionGated: v,
    needSubscriptionToAccess: x,
    enableConnectedUserLimit: true,
    enableActivities: true
  }), q = N && null == Y;
  return (0, r.jsx)(er, et(ee({
    channelName: g,
    embeddedApps: h,
    embeddedActivityType: X.$pd.PLAYING,
    video: p,
    hasActiveEvent: null != y,
    isSubscriptionGated: v,
    needSubscriptionToAccess: x
  }, u, f, e), {
    connected: N,
    isFavoriteSuggestion: i && !C,
    forceShowButtons: q,
    channelInfo: Y,
    resolvedUnreadSetting: d,
    enableHangStatus: w,
    showEmptyChannelTopic: R,
    enableOpenTIVForPing: D,
    hasChannelInfo: null != Y,
    hasStartTime: O,
    shouldHighlightChannel: W,
    shouldUseAnimatedWaveform: z
  }))
}