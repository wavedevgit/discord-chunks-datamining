/** Chunk was on 63141 **/
/** chunk id: 178528, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk236726 = require("./236726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk619915 = require("./619915.js"),
  Chunk554747 = require("./554747.js"),
  Chunk598056 = require("./598056.js"),
  Chunk373274 = require("./373274.jsx"),
  Chunk315174 = require("./315174.jsx"),
  Chunk591190 = require("./591190.jsx"),
  Chunk840780 = require("./840780.jsx"),
  Chunk905423 = require("./905423.js"),
  Chunk680089 = require("./680089.js"),
  Chunk58468 = require("./58468.js"),
  Chunk796974 = require("./796974.js"),
  Chunk324067 = require("./324067.js"),
  Chunk984933 = require("./984933.js"),
  Chunk888369 = require("./888369.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk878884 = require("./878884.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk938475 = require("./938475.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk312186 = require("./312186.jsx"),
  Chunk711553 = require("./711553.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk139901 = require("./139901.js");

function A(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}
class M extends Chunk473749.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t
    } = e;
    return null == t || null == t.banner ? {
      renderBanner: false,
      bannerVisible: false
    } : null
  }
  componentDidMount() {
    let {
      guildId: e
    } = this.props, {
      scrollTop: t
    } = Chunk796974.Z.getGuildDimensions(module);
    this.setAnimatedValue(null != exports ? exports : 0)
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
    return (0, i.jsx)(w.Z, {
      onClose: t
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null != t && (0, d.Z)(t);
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
      immediate: true
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
      immediate: true
    }).start()
  }
  render() {
    var e, t;
    let n = this.props,
      {
        onDragStart: r
      } = require,
      a = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            a = Object.keys(e);
          for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(require, ["onDragStart"]),
      {
        guild: s
      } = Chunk236726,
      {
        controller: l,
        renderBanner: c,
        bannerVisible: d,
        communityInfoVisible: g
      } = this.state,
      b = (null == Chunk442837 ? true : Chunk442837.id) === Chunk647086._ ? Chunk373274.j : Chunk373274.E;
    return (0, Chunk54381.jsxs)(Chunk711553.Z, {
      header: null != Chunk442837 ? (0, Chunk54381.jsx)(Chunk315174.ZP, {
        guild: Chunk442837,
        controller: Chunk619915,
        renderBanner: Chunk554747,
        bannerVisible: Chunk598056,
        className: Chunk139901.guildHeader,
        headerClassName: Chunk139901.guildHeaderInner,
        onMouseDown: Chunk473749,
        disableBannerAnimation: false,
        communityInfoVisible: Chunk905423,
        children: (0, Chunk54381.jsx)(Chunk481060.yRy, {
          targetElementRef: this.settingsIconRef,
          position: "right",
          renderPopout: this.renderSettings,
          children: e => (0, i.jsx)(P.ZP.Icon, L({
            ref: this.settingsIconRef,
            icon: o.ewm,
            label: k.intl.string(k.t["3D5yo/"])
          }, e))
        })
      }) : null,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk139901.channelList,
        children: null != Chunk442837 ? (0, Chunk54381.jsx)(Chunk680089, (e = L({}, Chunk236726), t = t = {
          guild: Chunk442837,
          disableManageChannels: true,
          onScroll: null != Chunk442837 && null != Chunk442837.banner ? this.handleScroll : null
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(exports)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), module)) : (0, Chunk54381.jsx)(Chunk591190.Z, {
          withBannerPadding: false
        })
      }), null != Chunk442837 && (0, Chunk54381.jsx)("section", {
        className: Chunk139901.panels,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.StREWK),
        children: (0, Chunk54381.jsx)(Chunk840780.Z, {
          guildId: Chunk442837.id
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), A(this, "settingsIconRef", r.createRef()), A(this, "state", {
      controller: new a.Controller({
        value: 1,
        immediate: true
      }),
      renderBanner: false,
      bannerVisible: false,
      communityInfoVisible: false
    }), A(this, "handleScroll", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function z(e) {
  var t;
  let {
    guildId: n
  } = e, r = (0, s.e7)([x.Z], () => x.Z.getGuild(n)), a = (0, s.e7)([O.ZP], () => O.ZP.getChannels(n)), o = (0, s.e7)([v.Z], () => v.Z.getCategories(n)), {
    mutedChannels: d,
    collapseMuted: u
  } = (0, s.cj)([C.ZP], () => ({
    mutedChannels: C.ZP.getMutedChannels(n),
    collapseMuted: C.ZP.isGuildCollapsed(n)
  })), f = (0, s.e7)([I.ZP], () => I.ZP.getVoiceStates(n)), h = (0, s.e7)([m.Z], () => m.Z.getCollapsed()), {
    scrollTo: p
  } = (0, s.e7)([y.Z], () => y.Z.getGuildDimensions(n)), P = (0, g.Z)(e => {
    let {
      channelId: t
    } = e;
    return t
  }), w = (0, s.e7)([j.Z], () => j.Z.getVoiceChannelId()), N = (0, s.e7)([S.Z], () => S.Z.getGuildVersion(n)), D = (0, s.e7)([b.Z], () => b.Z.version), k = (0, s.e7)([E.default], () => E.default.getGuildChangeSentinel(n)), R = (0, l.QN)(null == r ? true : r.id), A = (0, c.gM)(null == r ? true : r.id), L = null != (t = null == r ? true : r.features.has(T.GuildFeatures.COMMUNITY)) && t, z = (0, s.e7)([Z.Z], () => Z.Z.getChannelId()), V = (0, s.e7)([_.Z], () => _.Z.desyncedVoiceStatesCount);
  return (0, i.jsx)(M, {
    guildId: n,
    guild: r,
    channels: a,
    categories: o,
    mutedChannels: d,
    scrollToChannel: p,
    selectedChannelId: P,
    selectedVoiceChannelId: w,
    voiceStates: f,
    rtcConnectedChannelId: z,
    rtcDesyncedVoiceStatesCount: V,
    collapsedChannels: h,
    collapseMuted: u,
    guildReadStateSentinel: k,
    permissionVersion: N,
    categoryCollapseVersion: D,
    embeddedAppsByChannel: R,
    activeEventsByChannel: A,
    showNewUnreadsBar: L,
    optInEnabled: false
  })
}