/** Chunk was on 53494 **/
n.d(t, {
  Z: () => en
}), n(47120), n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(442837),
  a = n(846519),
  s = n(481060),
  c = n(475179),
  u = n(239091),
  d = n(146773),
  p = n(888651),
  h = n(619915),
  f = n(339340),
  g = n(201895),
  m = n(718589),
  b = n(933557),
  v = n(557135),
  y = n(873696),
  _ = n(446226),
  O = n(305325),
  j = n(281956),
  C = n(66999),
  x = n(554747),
  S = n(378844),
  P = n(335353),
  I = n(896835),
  N = n(359110),
  Z = n(155409),
  w = n(695346),
  E = n(447564),
  T = n(592125),
  A = n(430824),
  D = n(607744),
  R = n(496675),
  L = n(306680),
  k = n(9156),
  M = n(979651),
  G = n(934415),
  B = n(63063),
  U = n(98597),
  W = n(648501),
  V = n(473403),
  F = n(830993),
  H = n(653577),
  z = n(207055),
  Y = n(981631),
  q = n(647086),
  Q = n(388032),
  K = n(691878);

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
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
class ee extends U.ZP {
  componentWillUnmount() {
    this.activitiesHideTimeout.stop()
  }
  getVoiceStatesCount() {
    var e;
    let {
      voiceStates: t
    } = this.props;
    return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0
  }
  isFull() {
    let {
      channel: e
    } = this.props;
    return (0, G.rY)(e, M.Z, A.Z)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    return n ? K.containerUserOver : null != t ? e > t ? K.containerDragAfter : K.containerDragBefore : K.containerDefault
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n
    } = this.props, i = null === (e = (0, y.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle, {
      hovered: o
    } = this.state;
    return (0, r.jsx)(H.Z, {
      onClick: this.handleVoiceStatusClick,
      channel: t,
      connected: n,
      subtitle: i,
      hovered: o
    })
  }
  renderVoiceUsers() {
    let {
      channel: e,
      voiceStates: t,
      collapsed: n,
      withGuildIcon: i,
      tabIndex: o
    } = this.props;
    return (0, r.jsx)(z.Z, {
      channel: e,
      collapsed: n,
      collapsedMax: 6,
      voiceStates: t,
      withGuildIcon: i,
      tabIndex: o,
      location: Y.Sbl.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, r.jsx)("div", {
      className: K.channelInfo,
      children: e
    })
  }
  renderHDSplashedIcon() {
    let {
      channel: e,
      locked: t
    } = this.props;
    return t || !e.isHDStreamSplashed ? null : (0, r.jsx)(s.ua7, {
      text: Q.NW.string(Q.t.gpF6QU),
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: i,
          onFocus: l,
          onBlur: a
        } = t;
        return (0, r.jsx)(s.P3F, {
          className: o()(K.iconItem, K.alwaysShown),
          onClick: () => {
            (0, I.X)("VoiceChannel") ? (0, E.k)(e, "VoiceChannel") : window.open(B.Z.getArticleURL(Y.BhN.HD_STREAMING_POTION), "_blank")
          },
          "aria-label": Q.NW.string(Q.t.gpF6QU),
          onMouseEnter: n,
          onMouseLeave: i,
          onFocus: l,
          onBlur: a,
          children: (0, r.jsx)(s.hh5, {
            size: "xs",
            color: "currentColor",
            className: K.actionIcon
          })
        })
      }
    })
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      unread: i,
      resolvedUnreadSetting: l,
      mentionCount: a,
      locked: c,
      sorting: u,
      isUserOver: d,
      connectChannelDropTarget: p,
      connectChannelDragSource: h,
      connectUserDropTarget: f,
      connectDragPreview: b,
      canReorderChannel: v,
      canMoveMembers: y,
      showTutorial: _,
      hasActiveEvent: O,
      embeddedApps: j,
      isSubscriptionGated: C,
      isFavoriteSuggestion: x,
      withGuildIcon: S
    } = this.props, {
      shouldShowActivities: I,
      shouldShowGuildVerificationPopout: N
    } = this.state, w = this.getVoiceStatesCount(), E = (0, r.jsxs)("li", {
      className: o()(this.getModeClass(), {
        [K.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, r.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, r.jsx)(s.yRy, {
          position: "right",
          renderPopout: this.renderPopout,
          spacing: 0,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: I && !u && !d && !N || N,
          children: () => (0, r.jsx)(s.ua7, {
            text: this.getTooltipText(),
            children: s => {
              var {
                onClick: u,
                onContextMenu: d
              } = s, p = function(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                  if (null == e) return {};
                  var n, r, i = {},
                    o = Object.keys(e);
                  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                  return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
              }(s, ["onClick", "onContextMenu"]);
              return (0, r.jsx)(P.Z, {
                channel: e,
                children: (0, r.jsxs)(V.ZP, $(X({
                  className: K.iconVisibility,
                  iconClassName: o()({
                    [K.iconLive]: O
                  }),
                  hasActiveEvent: O,
                  channel: e,
                  selected: !x && t,
                  connected: n,
                  unread: n ? i : void 0,
                  resolvedUnreadSetting: l,
                  mentionCount: a,
                  locked: c,
                  subtitle: this.renderSubtitle(),
                  onClick: () => {
                    this.handleClick(), null == u || u()
                  },
                  onContextMenu: e => {
                    this.handleContextMenu(e), null == d || d()
                  },
                  connectDragPreview: b,
                  isFavoriteSuggestion: x,
                  "aria-label": (0, g.ZP)({
                    channel: e,
                    unread: i,
                    mentionCount: a,
                    userCount: w,
                    embeddedActivitiesCount: j.length,
                    isSubscriptionGated: C
                  }),
                  "aria-describedby": (0, m.Z)({
                    channel: e,
                    embeddedApps: j
                  }),
                  withGuildIcon: S
                }, p), {
                  children: [x && this.renderAcceptSuggestionButton(), x && this.renderRemoveSuggestionButton(), !x && this.renderOpenChatButton(), !x && this.renderInviteButton(), !x && this.renderEditButton(), !x && this.renderChannelInfo(), !x && this.renderHDSplashedIcon()]
                }))
              })
            }
          })
        })
      }), this.renderVoiceUsers()]
    });
    return y && (E = f(E)), v && (E = p(h(E))), _ && (E = (0, r.jsx)(Z.Z, {
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: -20,
      children: E
    })), E
  }
  constructor(...e) {
    super(...e), J(this, "state", {
      shouldShowActivities: !1,
      shouldShowGuildVerificationPopout: !1,
      hovered: !1
    }), J(this, "activitiesHideTimeout", new a.V7), J(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: !1
      })
    }), J(this, "handleVoiceConnect", () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: r,
        needSubscriptionToAccess: i
      } = this.props;
      r && this.setState({
        shouldShowGuildVerificationPopout: !0
      }), v.Z.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: i,
        locked: e
      })
    }), J(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = A.Z.getGuild(t.getGuildId());
      null != i && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, $(X({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), J(this, "handleMouseEnter", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !0,
        hovered: !0
      })
    }), J(this, "handleMouseLeave", () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: !1,
        hovered: !1
      }))
    }), J(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !1
      })
    }), J(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, j.n)(t) && (0, O.hk)(t), this.handleVoiceConnect()
    }), J(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: i
      } = this.props;
      t && (e.stopPropagation(), (0, s.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 339340));
        return t => (0, r.jsx)(e, X({
          channel: i
        }, t))
      }, {
        modalKey: f.a
      }))
    }), J(this, "renderPopout", () => {
      let {
        channel: e,
        voiceStates: t,
        sorting: n,
        isUserOver: i,
        selected: o,
        guild: l
      } = this.props, {
        shouldShowActivities: a,
        shouldShowGuildVerificationPopout: s
      } = this.state;
      if (a && !n && !i && !s) {
        let n = w.SE.getSetting().includes(l.id);
        return (0, r.jsx)(F.Z, {
          onAction: this.closePopout,
          guild: l,
          channel: e,
          voiceStates: t,
          isChannelSelected: o,
          shouldShowSettingNudge: n
        })
      }
      if (s) return (0, r.jsx)(S.Z, {
        type: S.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), J(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(s.ua7, {
        text: Q.NW.string(Q.t.ZXxLQk),
        children: t => {
          let {
            onMouseEnter: i,
            onMouseLeave: l,
            onFocus: a,
            onBlur: u
          } = t;
          return (0, r.jsx)(s.P3F, {
            className: o()(K.iconItem, n ? K.alwaysShown : null),
            onClick: () => {
              c.Z.updateChatOpen(e.id, !0), (0, N.Kh)(e.id)
            },
            "aria-label": Q.NW.string(Q.t.ZXxLQk),
            onMouseEnter: i,
            onMouseLeave: l,
            onFocus: a,
            onBlur: u,
            children: (0, r.jsx)(s.kBi, {
              size: "xs",
              color: "currentColor",
              className: K.actionIcon
            })
          })
        }
      })
    }), J(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? Q.NW.string(Q.t.rZfiNj) : null
    })
  }
}
let et = (0, d.B)((0, p.Q)(ee));

function en(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: o,
    selected: a,
    collapsed: s,
    voiceStates: c
  } = e, u = (0, l.cj)([L.ZP], () => ({
    unread: L.ZP.hasUnread(n.id),
    mentionCount: L.ZP.getMentionCount(n.id)
  })), d = (0, l.e7)([k.ZP], () => k.ZP.resolveUnreadSetting(n)), p = (0, l.cj)([T.Z, D.Z, R.Z], () => {
    let e = T.Z.getChannel(n.parent_id),
      r = D.Z.getCheck(n.guild_id);
    return {
      canManageChannel: R.Z.can(Y.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== i && (t.id === q._ || (null != e ? R.Z.can(Y.Plq.MANAGE_CHANNELS, e) : R.Z.can(Y.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: R.Z.can(Y.Plq.MOVE_MEMBERS, n),
      locked: !R.Z.can(Y.Plq.CONNECT, n),
      bypassLimit: R.Z.can(Y.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), f = (0, l.e7)([M.Z], () => M.Z.hasVideo(n.id)), g = (0, h.ZP)(n), m = (0, b.ZP)(n), v = (0, x.qY)(n.id), {
    isSubscriptionGated: y,
    needSubscriptionToAccess: O
  } = (0, C.Z)(n.id), j = (0, _.Z)(), S = (0, l.e7)([k.ZP], () => k.ZP.isFavorite(t.id, n.id)), P = e.connected || (null == j ? void 0 : j.channelId) === n.id, I = (0, W.Z)({
    channel: n,
    isChannelSelected: a,
    isChannelCollapsed: s,
    voiceStates: c,
    isSubscriptionGated: y,
    needSubscriptionToAccess: O,
    enableConnectedUserLimit: !0,
    enableActivities: !0
  }), N = P && null == I;
  return (0, r.jsx)(et, $(X({
    channelName: m,
    embeddedApps: g,
    embeddedActivityType: Y.IIU.PLAYING,
    video: f,
    hasActiveEvent: null != v,
    isSubscriptionGated: y,
    needSubscriptionToAccess: O
  }, u, p, e), {
    connected: P,
    isFavoriteSuggestion: o && !S,
    forceShowButtons: N,
    channelInfo: I,
    resolvedUnreadSetting: d
  }))
}