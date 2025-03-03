/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => L
}), n(47120);
var i = n(200651),
  r = n(192379),
  s = n(642128),
  o = n(442837),
  a = n(481060),
  l = n(619915),
  c = n(554747),
  d = n(373274),
  u = n(315174),
  h = n(591190),
  p = n(840780),
  f = n(905423),
  g = n(680089),
  m = n(58468),
  y = n(796974),
  _ = n(324067),
  v = n(984933),
  O = n(888369),
  b = n(430824),
  x = n(496675),
  S = n(878884),
  E = n(19780),
  j = n(944486),
  N = n(9156),
  C = n(938475),
  I = n(518084),
  Z = n(669083),
  P = n(711553),
  w = n(981631),
  k = n(647086),
  T = n(388032),
  D = n(153436);

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}
class A extends r.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t
    } = e;
    return null == t || null == t.banner ? {
      renderBanner: !1,
      bannerVisible: !1
    } : null
  }
  componentDidMount() {
    let {
      guildId: e
    } = this.props, {
      scrollTop: t
    } = y.Z.getGuildDimensions(e);
    this.setAnimatedValue(null != t ? t : 0)
  }
  componentDidUpdate(e) {
    let {
      guild: t,
      guildId: n
    } = this.props;
    if (e.guild !== t) {
      let {
        scrollTop: e
      } = y.Z.getGuildDimensions(n);
      this.setAnimatedValue(null != e ? e : 0)
    }
  }
  renderSettings(e) {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(Z.Z, {
      onClose: t
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
    null != t && (null != t.banner || n) && (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e))
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: i,
      controller: r
    } = this.state;
    (e >= 54 && i || e < 54 && !i) && (i = !i), (e >= 78 && !t || e < 78 && t) && (t = !t), n = i, (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: i,
      communityInfoVisible: n
    }), r.update({
      value: Math.min(1, Math.max(0, 1 - e / 78)),
      immediate: !0
    }).start()
  }
  setAnimatedValueForCommunityInfo(e) {
    let {
      communityInfoVisible: t,
      controller: n
    } = this.state;
    (e >= 20 && t || e < 20 && !t) && this.setState({
      communityInfoVisible: !t
    }), n.update({
      value: Math.min(1, Math.max(0, 1 - e / 20)),
      immediate: !0
    }).start()
  }
  render() {
    var e, t;
    let n = this.props,
      {
        onDragStart: r
      } = n,
      s = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            s = Object.keys(e);
          for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(n, ["onDragStart"]),
      {
        guild: o
      } = s,
      {
        controller: l,
        renderBanner: c,
        bannerVisible: f,
        communityInfoVisible: g
      } = this.state,
      m = (null == o ? void 0 : o.id) === k._ ? d.j : d.E;
    return (0, i.jsxs)(P.Z, {
      header: null != o ? (0, i.jsx)(u.ZP, {
        guild: o,
        controller: l,
        renderBanner: c,
        bannerVisible: f,
        className: D.guildHeader,
        headerClassName: D.guildHeaderInner,
        onMouseDown: r,
        disableBannerAnimation: !1,
        communityInfoVisible: g,
        children: (0, i.jsx)(a.yRy, {
          position: "right",
          renderPopout: this.renderSettings,
          children: e => (0, i.jsx)(I.ZP.Icon, R({
            icon: a.ewm,
            label: T.NW.string(T.t["3D5yo6"])
          }, e))
        })
      }) : null,
      children: [(0, i.jsx)("div", {
        className: D.channelList,
        children: null != o ? (0, i.jsx)(m, (e = R({}, s), t = t = {
          guild: o,
          disableManageChannels: !0,
          onScroll: null != o && null != o.banner ? this.handleScroll : null
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e)) : (0, i.jsx)(h.Z, {
          withBannerPadding: !1
        })
      }), null != o && (0, i.jsx)("section", {
        className: D.panels,
        "aria-label": T.NW.string(T.t.StREWF),
        children: (0, i.jsx)(p.Z, {
          guildId: o.id
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      controller: new s.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1
    }), M(this, "handleScroll", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function L(e) {
  var t;
  let {
    guildId: n
  } = e, r = (0, o.e7)([b.Z], () => b.Z.getGuild(n)), s = (0, o.e7)([v.ZP], () => v.ZP.getChannels(n)), a = (0, o.e7)([_.Z], () => _.Z.getCategories(n)), {
    mutedChannels: d,
    collapseMuted: u
  } = (0, o.cj)([N.ZP], () => ({
    mutedChannels: N.ZP.getMutedChannels(n),
    collapseMuted: N.ZP.isGuildCollapsed(n)
  })), h = (0, o.e7)([C.ZP], () => C.ZP.getVoiceStates(n)), p = (0, o.e7)([m.Z], () => m.Z.getCollapsed()), {
    scrollTo: I
  } = (0, o.e7)([y.Z], () => y.Z.getGuildDimensions(n)), Z = (0, f.Z)(e => {
    let {
      channelId: t
    } = e;
    return t
  }), P = (0, o.e7)([j.Z], () => j.Z.getVoiceChannelId()), k = (0, o.e7)([x.Z], () => x.Z.getGuildVersion(n)), T = (0, o.e7)([g.Z], () => g.Z.version), D = (0, o.e7)([O.default], () => O.default.getGuildChangeSentinel(n)), M = (0, l.QN)(null == r ? void 0 : r.id), R = (0, c.gM)(null == r ? void 0 : r.id), L = null !== (t = null == r ? void 0 : r.hasFeature(w.oNc.COMMUNITY)) && void 0 !== t && t, z = (0, o.e7)([E.Z], () => E.Z.getChannelId()), W = (0, o.e7)([S.Z], () => S.Z.desyncedVoiceStatesCount);
  return (0, i.jsx)(A, {
    guildId: n,
    guild: r,
    channels: s,
    categories: a,
    mutedChannels: d,
    scrollToChannel: I,
    selectedChannelId: Z,
    selectedVoiceChannelId: P,
    voiceStates: h,
    rtcConnectedChannelId: z,
    rtcDesyncedVoiceStatesCount: W,
    collapsedChannels: p,
    collapseMuted: u,
    guildReadStateSentinel: D,
    permissionVersion: k,
    categoryCollapseVersion: T,
    embeddedAppsByChannel: M,
    activeEventsByChannel: R,
    showNewUnreadsBar: L,
    optInEnabled: !1
  })
}