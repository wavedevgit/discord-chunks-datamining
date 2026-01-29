/** Chunk was on 84018 **/
/** chunk id: 335022, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk685399 = require("./685399.js"),
  Chunk508654 = require("./508654.js"),
  Chunk885631 = require("./885631.js"),
  Chunk487401 = require("./487401.jsx"),
  Chunk952790 = require("./952790.jsx"),
  Chunk846930 = require("./846930.jsx"),
  Chunk355205 = require("./355205.jsx"),
  Chunk366811 = require("./366811.js"),
  Chunk924985 = require("./924985.js"),
  Chunk945886 = require("./945886.js"),
  Chunk72314 = require("./72314.js"),
  Chunk769765 = require("./769765.js"),
  Chunk808728 = require("./808728.js"),
  Chunk458294 = require("./458294.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk584569 = require("./584569.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk607567 = require("./607567.js"),
  Chunk855790 = require("./855790.jsx"),
  Chunk714977 = require("./714977.jsx"),
  Chunk439817 = require("./439817.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk852388 = require("./852388.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}
class G extends Chunk64700.PureComponent {
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
    } = _.A.getGuildDimensions(e);
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
      } = _.A.getGuildDimensions(n);
      this.setAnimatedValue(null != e ? e : 0)
    }
  }
  renderSettings(e) {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(N.A, {
      onClose: t
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null != t && (0, d.A)(t);
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
      } = n,
      s = function(e, t) {
        if (null == e) return {};
        var n, i, r, s = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
          return s
        }
        if (s = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
              s = Object.getOwnPropertyNames(e);
            for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
          }(e, t), Object.getOwnPropertySymbols)
          for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
        return s
      }(n, ["onDragStart"]),
      {
        guild: l
      } = s,
      {
        controller: a,
        renderBanner: c,
        bannerVisible: d,
        communityInfoVisible: g
      } = this.state,
      y = (null == l ? true : l.id) === D.V ? u.T : u.B;
    return (0, i.jsxs)(T.A, {
      header: null != l ? (0, i.jsx)(p.Ay, {
        guild: l,
        controller: a,
        renderBanner: c,
        bannerVisible: d,
        className: k.F,
        headerClassName: k.D8,
        onMouseDown: r,
        disableBannerAnimation: false,
        communityInfoVisible: g,
        children: (0, i.jsx)(o.YNO, {
          targetElementRef: this.settingsIconRef,
          position: "right",
          renderPopout: this.renderSettings,
          children: e => (0, i.jsx)(w.Ay.Icon, M({
            ref: this.settingsIconRef,
            icon: o.Zes,
            label: R.intl.string(R.t["3D5yo/"])
          }, e))
        })
      }) : null,
      children: [(0, i.jsx)("div", {
        className: k.o5,
        children: null != l ? (0, i.jsx)(y, (e = M({}, s), t = t = {
          guild: l,
          disableManageChannels: true,
          onScroll: null != l && null != l.banner ? this.handleScroll : null
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e)) : (0, i.jsx)(h.A, {
          withBannerPadding: false
        })
      }), null != l && (0, i.jsx)("section", {
        className: k.C3,
        "aria-label": R.intl.string(R.t.StREWK),
        children: (0, i.jsx)(f.A, {
          guildId: l.id
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), L(this, "settingsIconRef", r.createRef()), L(this, "state", {
      controller: new s.Controller({
        value: 1,
        immediate: true
      }),
      renderBanner: false,
      bannerVisible: false,
      communityInfoVisible: false
    }), L(this, "handleScroll", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function U(e) {
  var t;
  let {
    guildId: n
  } = e, r = (0, l.bG)([v.A], () => v.A.getGuild(n)), s = (0, l.bG)([A.Ay], () => A.Ay.getChannels(n)), o = (0, l.bG)([b.A], () => b.A.getCategories(n)), {
    mutedChannels: d,
    collapseMuted: u
  } = (0, l.cf)([C.Ay], () => ({
    mutedChannels: C.Ay.getMutedChannels(n),
    collapseMuted: C.Ay.isGuildCollapsed(n)
  })), p = (0, l.bG)([I.Ay], () => I.Ay.getVoiceStates(n)), h = (0, l.bG)([m.A], () => m.A.getCollapsed()), {
    scrollTo: f
  } = (0, l.bG)([_.A], () => _.A.getGuildDimensions(n)), w = (0, g.A)(e => {
    let {
      channelId: t
    } = e;
    return t
  }), N = (0, l.bG)([j.A], () => j.A.getVoiceChannelId()), T = (0, l.bG)([E.A], () => E.A.getGuildVersion(n)), D = (0, l.bG)([y.A], () => y.A.version), R = (0, l.bG)([O.default], () => O.default.getGuildChangeSentinel(n)), k = (0, a.a1)(null == r ? true : r.id), L = (0, c.vj)(null == r ? true : r.id), M = null != (t = null == r ? true : r.features.has(P.GuildFeatures.COMMUNITY)) && t, U = (0, l.bG)([S.A], () => S.A.getChannelId()), V = (0, l.bG)([x.A], () => x.A.desyncedVoiceStatesCount);
  return (0, i.jsx)(G, {
    guildId: n,
    guild: r,
    channels: s,
    categories: o,
    mutedChannels: d,
    scrollToChannel: f,
    selectedChannelId: w,
    selectedVoiceChannelId: N,
    voiceStates: p,
    rtcConnectedChannelId: U,
    rtcDesyncedVoiceStatesCount: V,
    collapsedChannels: h,
    collapseMuted: u,
    guildReadStateSentinel: R,
    permissionVersion: T,
    categoryCollapseVersion: D,
    embeddedAppsByChannel: k,
    activeEventsByChannel: L,
    showNewUnreadsBar: M,
    optInEnabled: false
  })
}