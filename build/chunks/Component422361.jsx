/** Chunk was on 78528 **/
/** chunk id: 422361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ei
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  Chunk338234 = require("./338234.js"),
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

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ee(e, t, n[t])
    })
  }
  return e
}

function en(e, t) {
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
class er extends Chunk557534.Ay {
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
    return (0, F.Pd)(e, V.A, L.A)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return $.ZS;
    if (null != t)
      if (e > t) return $.mU;
      else return $.TR;
    return $.fx
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      showEmptyChannelTopic: l
    } = this.props, i = null == (e = (0, v.M)(this.props.subtitle)) ? true : e.subtitle, {
      hovered: s
    } = this.state;
    return (0, r.jsx)(q.A, {
      onClick: this.handleVoiceStatusClick,
      channel: t,
      connected: n,
      subtitle: i,
      hovered: s,
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
    return (0, r.jsx)(X.A, {
      channel: e,
      collapsed: n,
      collapsedMax: 6,
      voiceStates: t,
      withGuildIcon: l,
      tabIndex: i,
      location: J.ThZ.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, r.jsx)("div", {
      className: $.yW,
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
      mentionCount: a,
      locked: o,
      sorting: d,
      isUserOver: p,
      connectChannelDropTarget: h,
      connectChannelDragSource: f,
      connectUserDropTarget: g,
      connectDragPreview: m,
      canReorderChannel: b,
      canMoveMembers: A,
      showTutorial: O,
      hasActiveEvent: j,
      embeddedApps: v,
      isSubscriptionGated: x,
      isFavoriteSuggestion: E,
      withGuildIcon: C,
      hasStartTime: S,
      shouldHighlightChannel: I,
      shouldUseAnimatedWaveform: N
    } = this.props, {
      shouldShowGuildVerificationPopout: T
    } = this.state, {
      enableUserHoverActivities: P
    } = (0, H.Uw)({
      guildId: e.guild_id,
      location: "VoiceChannel"
    }), w = I || N, D = this.getVoiceStatesCount(), M = (0, r.jsxs)("li", {
      ref: this.ref,
      className: s()(this.getModeClass(), {
        [$.r9]: this.isDisabled(),
        [$.fy]: I
      }),
      "data-dnd-name": e.name,
      children: [I && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: $.UQ
        }), (0, r.jsx)("div", {
          className: $.l0
        })]
      }), (0, r.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, r.jsx)(u.YNO, {
          targetElementRef: this.channelItemRef,
          position: "right",
          renderPopout: this.renderPopout,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: T || !P && this.state.shouldShowActivities && !d && !p,
          children: () => (0, r.jsx)(c.m, {
            text: this.getTooltipText(),
            children: (0, r.jsxs)(z.Ay, {
              ref: this.channelItemRef,
              className: $.Ki,
              iconClassName: s()({
                [$.Gj]: j || S || w
              }),
              hasActiveEvent: j,
              channel: e,
              selected: !E && t,
              connected: n,
              unread: n ? l : true,
              resolvedUnreadSetting: i,
              mentionCount: a,
              locked: o,
              subtitle: this.renderSubtitle(),
              onClick: () => {
                this.handleClick()
              },
              onContextMenu: e => {
                this.handleContextMenu(e)
              },
              connectDragPreview: m,
              isFavoriteSuggestion: E,
              "aria-label": (0, y.Ay)({
                channel: e,
                unread: l,
                mentionCount: a,
                userCount: D,
                embeddedActivitiesCount: v.length,
                isSubscriptionGated: x
              }),
              "aria-describedby": (0, _.A)({
                channel: e,
                embeddedApps: v
              }),
              withGuildIcon: C,
              children: [E && (0, r.jsxs)(r.Fragment, {
                children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
              }), !E && (0, r.jsxs)(r.Fragment, {
                children: [this.renderOpenChatButton(), this.renderInviteButton(), this.renderEditButton(), this.renderChannelInfo()]
              })]
            })
          })
        })
      }), this.renderVoiceUsers()]
    });
    return A && (M = g(M)), b && (M = h(f(M))), O && (M = (0, r.jsx)(R.A, {
      childRef: this.ref,
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: false,
      children: M
    })), M
  }
  constructor(...e) {
    super(...e), ee(this, "state", {
      shouldShowActivities: false,
      shouldShowGuildVerificationPopout: false,
      hovered: false
    }), ee(this, "ref", l.createRef()), ee(this, "channelItemRef", l.createRef()), ee(this, "activitiesHideTimeout", new o.Ep), ee(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: false
      })
    }), ee(this, "handleVoiceConnect", () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: r,
        needSubscriptionToAccess: l,
        enableOpenTIVForPing: i,
        mentionCount: s
      } = this.props;
      r && this.setState({
        shouldShowGuildVerificationPopout: true
      });
      let a = i && s > 0;
      a && d.A.updateChatOpen(n.id, true), j.A.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: l,
        routeDirectlyToChannel: a,
        locked: e
      })
    }), ee(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = L.A.getGuild(t.getGuildId());
      null != l && (0, p.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("53378")]).then(n.bind(n, 698193));
        return n => (0, r.jsx)(e, en(et({}, n), {
          channel: t,
          guild: l
        }))
      })
    }), ee(this, "handleMouseEnter", () => {
      let {
        enableUserHoverActivities: e
      } = (0, H.Uw)({
        guildId: this.props.channel.guild_id,
        location: "VoiceChannel"
      });
      e ? this.setState({
        hovered: true
      }) : (this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: true,
        hovered: true
      }))
    }), ee(this, "handleMouseLeave", () => {
      let {
        enableUserHoverActivities: e
      } = (0, H.Uw)({
        guildId: this.props.channel.guild_id,
        location: "VoiceChannel"
      });
      e ? this.setState({
        hovered: false
      }) : this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: false,
        hovered: false
      }))
    }), ee(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: false
      })
    }), ee(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, C.V)(t) && (0, E.Ze)(t), this.handleVoiceConnect()
    }), ee(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: n
      } = this.props;
      t && (e.stopPropagation(), (0, m.A)({
        channel: n
      }))
    }), ee(this, "renderPopout", () => {
      let {
        channel: e,
        voiceStates: t,
        sorting: n,
        isUserOver: l,
        selected: i,
        guild: s
      } = this.props, {
        shouldShowActivities: a,
        shouldShowGuildVerificationPopout: o
      } = this.state, {
        enableUserHoverActivities: c
      } = (0, H.Uw)({
        guildId: e.guild_id,
        location: "VoiceChannel"
      });
      if (o) return (0, r.jsx)(N.A, {
        type: N.H.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      if (!c && a && !n && !l) {
        let n = D.JG.getSetting().includes(s.id);
        return (0, r.jsx)(Y.A, {
          onAction: this.closePopout,
          guild: s,
          channel: e,
          voiceStates: t,
          isChannelSelected: i,
          shouldShowSettingNudge: n
        })
      }
      return null
    }), ee(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(c.m, {
        asContainer: true,
        text: Z.intl.string(Z.t.ZXxLQg),
        children: (0, r.jsx)(u.DUT, {
          className: s()($.Xs, n ? $.Tf : null),
          onClick: () => {
            d.A.updateChatOpen(e.id, true), (0, w.iN)(e.id)
          },
          "aria-label": Z.intl.string(Z.t.ZXxLQg),
          children: (0, r.jsx)(u.oyn, {
            size: "xs",
            color: "currentColor",
            className: $.gE
          })
        })
      })
    }), ee(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? Z.intl.string(Z.t.rZfiNq) : null
    })
  }
}
let el = (0, Chunk676002.a)((0, Chunk296216.F)(er));

function ei(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: l,
    isFavoriteCategory: i,
    selected: s,
    collapsed: o,
    voiceStates: c
  } = e, u = (0, a.cf)([U.Ay], () => ({
    unread: U.Ay.hasUnread(n.id),
    mentionCount: U.Ay.getMentionCount(n.id)
  })), d = (0, a.bG)([B.Ay], () => B.Ay.resolveUnreadSetting(n)), p = (0, a.cf)([M.A, k.A, G.A], () => {
    let e = M.A.getChannel(n.parent_id),
      r = k.A.getCheck(n.guild_id);
    return {
      canManageChannel: G.A.can(J.xBc.MANAGE_CHANNELS, n),
      canReorderChannel: true !== l && (t.id === Q.V || (null != e ? G.A.can(J.xBc.MANAGE_CHANNELS, e) : G.A.can(J.xBc.MANAGE_CHANNELS, t))),
      canMoveMembers: G.A.can(J.xBc.MOVE_MEMBERS, n),
      locked: !G.A.can(J.xBc.CONNECT, n),
      bypassLimit: G.A.can(J.xBc.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), h = (0, a.bG)([V.A], () => V.A.hasVideo(n.id)), f = (0, g.Ay)(n), m = (0, O.Ay)(n), y = (0, I.Qs)(n.id), _ = (0, a.bG)([A.A], () => null != A.A.getStartTime(n), [n]), {
    isSubscriptionGated: j,
    needSubscriptionToAccess: v
  } = (0, S.A)(n.id), E = (0, x.A)(), C = (0, a.bG)([B.Ay], () => B.Ay.isFavorite(t.id, n.id)), N = e.connected || (null == E ? true : E.channelId) === n.id, {
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
    enableWaveformIcon: F
  } = (0, b.b)(t.id, "VoiceChannel"), H = null != c && c.length > 0, K = L && H, z = F && H, Y = (0, W.A)({
    channel: n,
    isChannelSelected: s,
    isChannelCollapsed: o,
    voiceStates: c,
    isSubscriptionGated: j,
    needSubscriptionToAccess: v,
    enableConnectedUserLimit: true,
    enableActivities: true
  }), q = N && null == Y;
  return (0, r.jsx)(el, en(et({
    channelName: m,
    embeddedApps: f,
    embeddedActivityType: J.$pd.PLAYING,
    video: h,
    hasActiveEvent: null != y,
    isSubscriptionGated: j,
    needSubscriptionToAccess: v
  }, u, p, e), {
    connected: N,
    isFavoriteSuggestion: i && !C,
    forceShowButtons: q,
    channelInfo: Y,
    resolvedUnreadSetting: d,
    enableHangStatus: w,
    showEmptyChannelTopic: R,
    enableOpenTIVForPing: D,
    hasChannelInfo: null != Y,
    hasStartTime: _,
    shouldHighlightChannel: K,
    shouldUseAnimatedWaveform: z
  }))
}