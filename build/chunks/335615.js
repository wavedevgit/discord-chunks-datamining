/** Chunk was on 71611 **/
n.d(t, {
  Z: () => ec
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(392711),
  s = n.n(a),
  c = n(91192),
  u = n(924826),
  d = n(873546),
  p = n(876215),
  h = n(442837),
  f = n(902704),
  m = n(481060),
  g = n(239091),
  b = n(941028),
  _ = n(144144),
  C = n(276264),
  v = n(607070),
  y = n(100527),
  x = n(367907),
  j = n(906732),
  O = n(493324),
  N = n(611064),
  E = n(677432),
  I = n(178762),
  P = n(868671),
  S = n(82295),
  Z = n(91218),
  T = n(313201),
  A = n(540059),
  w = n(623624),
  R = n(518738),
  M = n(570096),
  k = n(155409),
  L = n(184301),
  D = n(347475),
  W = n(662594),
  U = n(430824),
  B = n(111583),
  F = n(594174),
  H = n(585483),
  G = n(823379),
  V = n(51144),
  z = n(998502),
  q = n(981631),
  Y = n(388032),
  K = n(920915);

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
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

function $(e, t) {
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
}
let ee = z.ZP.getEnableHardwareAcceleration(),
  et = 44 + C.x,
  en = {
    origin: {
      x: 38,
      y: 11
    },
    targetWidth: 232,
    targetHeight: 40,
    offset: {
      x: 0,
      y: 0
    }
  };
class er extends i.Component {
  shouldComponentUpdate(e) {
    return !(0, f.Z)(this.props, e, ["channelId"])
  }
  render() {
    let e = this.props,
      {
        colorString: t,
        colorRoleName: n,
        isOwner: i,
        nick: l,
        user: o,
        currentUser: a,
        activities: s,
        applicationStream: c,
        status: u,
        channel: p,
        guildId: h,
        isTyping: f,
        isMobileOnline: g,
        premiumSince: b
      } = e,
      _ = $(e, ["colorString", "colorRoleName", "isOwner", "nick", "user", "currentUser", "activities", "applicationStream", "status", "channel", "guildId", "isTyping", "isMobileOnline", "premiumSince"]),
      v = null != b ? new Date(b) : null;
    return (0, r.jsx)(m.yRy, {
      preload: () => (0, L.Z)(o, {
        channelId: p.id,
        guildId: h
      }),
      renderPopout: this.renderUserPopout,
      position: d.tq ? "window_center" : "left",
      spacing: 16,
      onShiftClick: this.handleShiftClick,
      children: (e, d) => {
        let {
          isShown: m
        } = d;
        return (0, r.jsx)(C.Z, Q({
          className: K.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: ee,
          user: o,
          currentUser: a,
          nick: l,
          status: u,
          activities: s,
          applicationStream: c,
          isOwner: i,
          premiumSince: v,
          colorString: t,
          colorRoleName: n,
          isTyping: f,
          channel: p,
          guildId: h,
          isMobile: g,
          onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
          selected: m,
          itemProps: _
        }, e))
      }
    })
  }
  constructor(...e) {
    super(...e), X(this, "renderUserContextMenu", e => {
      (0, g.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("97589"), n.e("7717"), n.e("83944")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, J(Q({}, t), {
          user: this.props.user,
          guildId: this.props.guildId,
          channel: this.props.channel,
          showMediaItems: !0
        }))
      })
    }), X(this, "handleShiftClick", () => {
      let {
        user: e,
        channel: t
      } = this.props, n = "@".concat(V.ZP.getUserTag(e, {
        decoration: "never"
      })), r = "<@".concat(e.id, ">");
      H.S.dispatchToLastSubscribed(q.CkL.INSERT_TEXT, {
        plainText: n,
        rawText: r
      }), _.Z.startTyping(t.id)
    }), X(this, "openGuildSubscriptionModal", e => {
      let {
        guildId: t
      } = this.props;
      null != t && (e.stopPropagation(), (0, w.f)({
        guildId: t,
        location: {
          section: q.jXE.MEMBER_LIST,
          object: q.qAy.BOOST_GEM_ICON
        }
      }))
    }), X(this, "renderUserPopout", e => (0, r.jsx)(D.Z, J(Q({}, e), {
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      roleId: this.props.colorRoleId
    })))
  }
}
let ei = i.memo(e => {
    let {
      colorRoleId: t
    } = e, n = $(e, ["colorRoleId"]), {
      channel: i,
      user: l,
      index: o
    } = e, a = (0, c.JA)("".concat(o)), s = (0, h.e7)([B.Z], () => B.Z.isTyping(i.id, l.id)), u = (0, h.e7)([F.default], () => F.default.getCurrentUser()), d = (0, h.e7)([U.Z], () => {
      var e;
      return null != t ? null === (e = U.Z.getRole(i.guild_id, t)) || void 0 === e ? void 0 : e.name : void 0
    }, [i, t]);
    return (0, r.jsx)(er, J(Q({}, n, a), {
      isTyping: s,
      currentUser: u,
      colorRoleName: d
    }))
  }),
  el = i.memo(function(e) {
    let {
      id: t,
      title: n,
      count: i,
      guildId: l
    } = e, o = (0, R.p9)({
      roleId: t,
      guildId: l,
      size: 16
    });
    return t === q.Skl.UNKNOWN ? (0, r.jsx)("div", {
      className: K.membersGroup,
      children: (0, r.jsx)("div", {
        className: K.memberGroupsPlaceholder
      })
    }) : (0, r.jsxs)(S.Z, {
      className: K.membersGroup,
      children: [(0, r.jsx)(m.nn4, {
        children: Y.NW.format(Y.t.UaqbkZ, {
          title: n,
          count: i
        })
      }), (0, r.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != o ? (0, r.jsx)(Z.Z, Q({
          className: K.roleIcon
        }, o)) : null, n, " — ", i]
      })]
    })
  });

function eo(e) {
  let {
    index: t
  } = e, n = (0, c.JA)("".concat(t));
  return (0, r.jsx)(C.Z, {
    itemProps: n
  })
}
class ea extends i.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, O.$)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen()
  }
  getContentFeedAdjustedDimensions(e) {
    let {
      height: t,
      rowHeight: n,
      y: r
    } = e, i = this.getContentFeedHeight(), l = Math.max(0, t - Math.max(0, i - r)), o = Math.floor(l / n);
    return {
      height: l,
      rowHeight: n,
      rowsVisible: o,
      y: Math.max(0, r - i)
    }
  }
  getDimensions() {
    let e = this._list;
    if (null == e) return {
      y: 0,
      height: 0,
      rowHeight: 0
    };
    let {
      offsetHeight: t,
      scrollTop: n
    } = e.getScrollerState(), {
      rowHeight: r
    } = this.props, i = Math.floor(t / r);
    return this.getContentFeedAdjustedDimensions({
      height: t,
      rowHeight: r,
      rowsVisible: i,
      y: n
    })
  }
  render() {
    let {
      groups: e,
      listId: t,
      channel: n
    } = this.props;
    return (0, r.jsx)(m.Wdt, {
      children: i => (0, r.jsx)(T.FG, {
        children: l => (0, r.jsx)("aside", {
          className: o()(K.membersWrap, K.hiddenMembers),
          "aria-labelledby": l,
          children: (0, r.jsx)(m.y5t, {
            component: (0, r.jsx)(m.nn4, {
              children: (0, r.jsx)(m.H, {
                id: l,
                children: Y.NW.format(Y.t.JBQxV1, {
                  channel: n.name
                })
              })
            }),
            children: (0, r.jsx)(c.SJ, {
              children: n => {
                var {
                  ref: l,
                  role: a
                } = n, s = $(n, ["ref", "role"]);
                return (0, r.jsx)(m.aVo, Q({
                  innerRole: a,
                  innerAriaLabel: Y.NW.string(Y.t["9Oq93t"]),
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: o()(K.members, {
                    [K.fullWidth]: d.tq
                  }),
                  paddingTop: 0,
                  sectionHeight: 40,
                  rowHeight: this.getRowHeightComputer(),
                  renderSection: this.renderSection,
                  renderRow: this.renderRow,
                  sections: e.map(e => e.count),
                  onScroll: this.handleScroll,
                  fade: !0,
                  customTheme: !0
                }, s, i), t)
              }
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), X(this, "_list", null), X(this, "_areActivitiesExperimentallyHidden", !1), X(this, "lastReportedAnalyticsChannel", void 0), X(this, "setList", e => {
      this._list = e, this.props.listRef.current = e
    }), X(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: l
      } = this.props, o = n[t];
      return (0, N.R)(o) ? (0, i.createElement)(N.Z, J(Q({}, o), {
        key: "section-".concat(t)
      })) : 0 === t ? (0, r.jsx)(k.Z, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: en,
        children: (0, r.jsx)(el, J(Q({}, o), {
          guildId: l.guild_id
        }))
      }, "section-".concat(t)) : (0, i.createElement)(el, J(Q({}, o), {
        key: "section-".concat(t),
        guildId: l.guild_id
      }))
    }), X(this, "getRowProps", e => {
      let {
        groups: t,
        rows: n
      } = this.props, r = t[e.section];
      if (null == r) return null;
      let {
        index: i
      } = r;
      return null == i || "row" !== e.type ? null : n[i + 1 + e.row]
    }), X(this, "renderRow", e => {
      let {
        section: t,
        row: n,
        rowIndex: i
      } = e, {
        channel: l
      } = this.props, o = this.getRowProps(e);
      if (null != o) {
        if (o.type === W.so.MEMBER && "user" in o) {
          let {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: a,
            isOwner: s,
            isMobileOnline: c,
            nick: u,
            activities: d,
            applicationStream: p,
            premiumSince: h
          } = o;
          return (0, r.jsx)(ei, {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: a,
            isOwner: s,
            nick: u,
            activities: this._areActivitiesExperimentallyHidden ? [] : d,
            applicationStream: p,
            channel: l,
            guildId: l.guild_id,
            premiumSince: h,
            isMobileOnline: c,
            index: i
          }, "member-".concat(o.user.id))
        }
        if (o.type === W.so.CONTENT_INVENTORY) {
          let e = "content-inventory-".concat(o.entry.id);
          null != o.entry.original_id && (e += "-".concat(o.entry.original_id));
          let t = (0, r.jsx)(I.ZP, J(Q({}, o), {
            channel: this.props.channel,
            index: i
          }), e);
          return o.entry.content_type === p.s.LEADERBOARD ? (0, r.jsx)(M.N, {
            children: t
          }, e) : t
        }
        if (o.type === W.so.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(E.Z, {}, "content-inventory-hidden-entry")
      }
      return (0, r.jsx)(eo, {
        index: i
      }, "placeholder-".concat(t, ":").concat(n))
    }), X(this, "handleScroll", () => {
      this.updateSubscription(), this.updateMaxContentFeedRowSeen()
    }), X(this, "updateMaxContentFeedRowSeen", s().debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        offsetHeight: t,
        scrollTop: n
      } = e.getScrollerState();
      this.props.updateMaxContentFeedRowSeen(n + t - 40)
    }, 50)), X(this, "getContentFeedGroup", () => {
      let e = this.props.groups[P.T];
      if ((0, N.R)(e)) return e
    }), X(this, "hasContentFeed", () => null != this.getContentFeedGroup()), X(this, "getRowHeightComputer", () => {
      let e = this.getContentFeedGroup(),
        {
          rowHeight: t
        } = this.props;
      if (null != e) {
        let {
          rows: n
        } = this.props, r = e.index;
        return function(e, i) {
          if (e === P.T) {
            let e = n[r + 1 + i];
            return (0, I.iZ)(e)
          }
          return t
        }
      }
      return t
    }), X(this, "getContentFeedHeight", () => {
      let e = this.getContentFeedGroup();
      return null != e ? e.feedHeight + 40 : 0
    }), X(this, "updateSubscription", s().debounce(() => {
      if (null == this._list) return;
      let {
        channel: e
      } = this.props, {
        rowHeight: t,
        y: n,
        height: r
      } = this.getDimensions();
      (0, b.TV)({
        guildId: e.guild_id,
        channelId: e.id,
        y: n,
        height: r,
        rowHeight: t
      })
    }, 50)), X(this, "trackMemberListViewed", () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (void 0 === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== P.T));
      let r = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(G.lm);
      if (0 === r.length) return;
      let i = r.reduce((e, t) => (t.type !== W.so.MEMBER || (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === q.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++), e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, x.ZP.trackWithMetadata(q.rMx.MEMBER_LIST_VIEWED, Q({}, i))
    })
  }
}

function es(e) {
  let {
    channel: t,
    className: n
  } = e, {
    analyticsLocations: l
  } = (0, j.ZP)(y.Z.MEMBER_LIST), a = (0, h.e7)([v.Z], () => v.Z.keyboardModeEnabled), s = (0, h.cj)([W.ZP], () => W.ZP.getProps(t.guild_id, t.id)), {
    rows: d,
    groups: p,
    version: f,
    updateMaxRowSeen: g
  } = (0, P.H)({
    memberStoreProps: s,
    channelId: t.id,
    guildId: t.guild_id
  }), b = i.useRef(null), _ = (0, A.Q3)("ChannelMembers"), {
    density: C
  } = (0, m.TCT)(), x = _ ? "compact" === C ? 42 : 50 : et, O = i.useCallback((e, t) => {
    let n = b.current;
    if (null == n) return;
    let r = parseInt(t, 10),
      [i, l] = n.getSectionRowFromIndex(r),
      o = 0 === i && 0 === l ? x : 0;
    n.scrollToIndex({
      section: i,
      row: l,
      padding: o,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          })
        })
      }
    })
  }, [x]), N = i.useCallback(() => new Promise(e => {
    let t = b.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), E = i.useCallback(() => new Promise(e => {
    let t = b.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), I = (0, u.ZP)({
    id: "members-".concat(t.id),
    setFocus: O,
    isEnabled: a,
    scrollToStart: N,
    scrollToEnd: E
  });
  return (0, r.jsx)(j.Gt, {
    value: l,
    children: (0, r.jsx)("div", {
      className: o()(K.container, n),
      children: (0, r.jsx)(c.bG, {
        navigator: I,
        children: (0, r.jsx)(ea, J(Q({}, e, s), {
          version: f,
          groups: p,
          rows: d,
          listRef: b,
          updateMaxContentFeedRowSeen: g,
          rowHeight: x
        }))
      })
    })
  })
}

function ec(e) {
  let {
    channel: t,
    className: n
  } = e, l = i.useDeferredValue(t);
  return i.useMemo(() => (0, r.jsx)(es, {
    channel: l,
    className: n
  }), [l, n])
}