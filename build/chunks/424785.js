/** Chunk was on 2928 **/
n.d(t, {
  Z: () => q
}), n(47120), n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  a = n(481060),
  s = n(475179),
  c = n(239091),
  u = n(146773),
  d = n(888651),
  p = n(201895),
  h = n(111028),
  f = n(305325),
  g = n(281956),
  m = n(66999),
  b = n(378844),
  y = n(359110),
  v = n(922482),
  O = n(431328),
  j = n(501655),
  _ = n(427679),
  C = n(368442),
  x = n(201469),
  P = n(680089),
  N = n(592125),
  S = n(430824),
  I = n(607744),
  Z = n(496675),
  E = n(306680),
  w = n(9156),
  T = n(979651),
  A = n(934415),
  D = n(98597),
  R = n(648501),
  L = n(473403),
  M = n(207055),
  k = n(981631),
  G = n(647086),
  U = n(388032),
  B = n(691878),
  W = n(43598);

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
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
class z extends D.ZP {
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
    return (0, A.rY)(e, T.Z, S.Z)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    return n ? B.containerUserOver : null != t ? e > t ? B.containerDragAfter : B.containerDragBefore : B.containerDefault
  }
  renderVoiceUsers() {
    let {
      channel: e,
      collapsed: t,
      tabIndex: n,
      speakerVoiceStates: i,
      numAudience: l
    } = this.props;
    return (0, r.jsx)(M.Z, {
      channel: e,
      voiceStates: i,
      collapsed: t,
      tabIndex: n,
      location: k.Sbl.GUILD_CHANNEL_LIST,
      numAudience: l
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
      locked: i,
      connectChannelDropTarget: o,
      connectChannelDragSource: s,
      connectUserDropTarget: c,
      connectDragPreview: u,
      canReorderChannel: d,
      canMoveMembers: h,
      stageInstance: f,
      isSubscriptionGated: g,
      needSubscriptionToAccess: m,
      unread: b,
      resolvedUnreadSetting: y,
      mentionCount: v,
      isFavoriteSuggestion: O
    } = this.props, {
      shouldShowGuildVerificationPopout: j
    } = this.state, _ = this.getVoiceStatesCount(), C = (0, r.jsxs)("li", {
      className: l()(this.getModeClass(), {
        [B.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, r.jsx)(a.yRy, {
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.closeGuildVerificationPopout,
        shouldShow: j,
        children: () => (0, r.jsx)(a.ua7, {
          text: this.getTooltipText(),
          children: o => {
            var {
              onClick: a,
              onContextMenu: s
            } = o, c = function(e, t) {
              if (null == e) return {};
              var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  l = Object.keys(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
              }
              return i
            }(o, ["onClick", "onContextMenu"]);
            return (0, r.jsxs)(L.Z, H(F({
              className: B.iconVisibility,
              iconClassName: l()({
                [W.iconLive]: null != f
              }),
              channel: e,
              selected: !O && t,
              connected: n,
              unread: n ? b : void 0,
              resolvedUnreadSetting: y,
              mentionCount: v,
              locked: i,
              onClick: () => {
                this.handleClick(), null == a || a()
              },
              onContextMenu: e => {
                this.handleContextMenu(e), null == s || s()
              },
              connectDragPreview: u,
              subtitle: this.renderSubtitle(),
              isFavoriteSuggestion: O,
              "aria-label": (0, p.ZP)({
                channel: e,
                unread: b,
                mentionCount: v,
                userCount: _,
                isSubscriptionGated: g,
                needSubscriptionToAccess: m
              })
            }, c), {
              children: [O && this.renderAcceptSuggestionButton(), O && this.renderRemoveSuggestionButton(), !O && this.renderOpenChatButton(), !O && this.renderInviteButton(), !O && this.renderEditButton(), !O && this.renderChannelInfo()]
            }))
          }
        })
      }), this.renderVoiceUsers()]
    });
    return h && (C = c(C)), d && (C = o(s(C))), C
  }
  constructor(...e) {
    super(...e), V(this, "state", {
      shouldShowGuildVerificationPopout: !1
    }), V(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: !1
      })
    }), V(this, "handleClick", () => {
      let {
        channel: e,
        locked: t,
        connected: n,
        unverifiedAccount: r
      } = this.props, i = e.getGuildId();
      null != i && (0, g.n)(i) && (0, f.hk)(i), r && this.setState({
        shouldShowGuildVerificationPopout: !0
      }), t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, v.Cq)(e), __OVERLAY__ || (0, y.Kh)(e.id)
    }), V(this, "handleClickChat", () => {
      let {
        channel: e,
        locked: t
      } = this.props;
      __OVERLAY__ || t || (0, y.Kh)(e.id)
    }), V(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = S.Z.getGuild(t.getGuildId());
      null != i && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, H(F({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), V(this, "renderPopout", () => {
      let {
        channel: e
      } = this.props, {
        shouldShowGuildVerificationPopout: t
      } = this.state;
      if (t) return (0, r.jsx)(b.Z, {
        type: b.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), V(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, r.jsx)(a.ua7, {
        text: U.NW.string(U.t.ZXxLQk),
        children: t => {
          let {
            onMouseEnter: i,
            onMouseLeave: o,
            onFocus: c,
            onBlur: u
          } = t;
          return (0, r.jsx)(a.P3F, {
            className: l()(B.iconItem, n ? B.alwaysShown : null),
            onClick: () => {
              s.Z.updateChatOpen(e.id, !0), this.handleClickChat()
            },
            "aria-label": U.NW.string(U.t.ZXxLQk),
            onMouseEnter: i,
            onMouseLeave: o,
            onFocus: c,
            onBlur: u,
            children: (0, r.jsx)(a.kBi, {
              size: "xs",
              color: "currentColor",
              className: B.actionIcon
            })
          })
        }
      })
    }), V(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? U.NW.string(U.t.rZfiNj) : null
    }), V(this, "renderSubtitle", () => {
      var e;
      let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
      return null == t ? null : (0, r.jsx)(h.Z, {
        children: t
      })
    })
  }
}
let Y = (0, u.B)((0, d.Q)(z));

function q(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: l,
    collapsed: a,
    voiceStates: s
  } = e, c = (0, o.cj)([E.ZP], () => ({
    unread: E.ZP.hasUnread(n.id),
    mentionCount: E.ZP.getMentionCount(n.id)
  })), u = (0, o.e7)([w.ZP], () => w.ZP.resolveUnreadSetting(n)), d = (0, o.cj)([N.Z, I.Z, Z.Z], () => {
    let e = N.Z.getChannel(n.parent_id),
      r = I.Z.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && Z.Z.can(k.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== i && (t.id === G._ || (null != e ? Z.Z.can(k.Plq.MANAGE_CHANNELS, e) : Z.Z.can(k.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: Z.Z.can(k.Plq.MOVE_MEMBERS, n),
      locked: !Z.Z.can(k.Plq.CONNECT, n),
      bypassLimit: Z.Z.can(k.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !r.canChat
    }
  }), p = (0, o.e7)([P.Z], () => P.Z.isCollapsed(n.parent_id)), h = (0, x.ZP)(n.id), f = (0, o.e7)([_.Z], () => _.Z.getStageInstanceByChannel(n.id), [n.id]), g = (0, O.Rk)(n.id, j.pV.AUDIENCE), {
    isSubscriptionGated: b,
    needSubscriptionToAccess: y
  } = (0, m.Z)(n.id), v = (0, o.e7)([w.ZP], () => w.ZP.isFavorite(t.id, n.id)), S = (0, C.xJ)(n.id), T = (0, R.Z)({
    channel: n,
    isChannelSelected: !1,
    isChannelCollapsed: a,
    voiceStates: s,
    isSubscriptionGated: b,
    needSubscriptionToAccess: y,
    enableConnectedUserLimit: S || n.userLimit > 0 && n.userLimit < k.xGv
  }), A = e.connected && null == T;
  return (0, r.jsx)(Y, H(F({
    categoryCollapsed: p,
    connectAction: h,
    numAudience: g,
    stageInstance: f,
    isSubscriptionGated: b,
    needSubscriptionToAccess: y
  }, c, d, e), {
    isFavoriteSuggestion: l && !v,
    forceShowButtons: A,
    channelInfo: T,
    resolvedUnreadSetting: u
  }))
}