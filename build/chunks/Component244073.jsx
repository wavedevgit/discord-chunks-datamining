/** Chunk was on 63141 **/
/** chunk id: 244073, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk319498 = require("./319498.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk925549 = require("./925549.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk870569 = require("./870569.jsx"),
  Chunk345243 = require("./345243.jsx"),
  Chunk873596 = require("./873596.jsx"),
  Chunk917405 = require("./917405.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk362446 = require("./362446.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978440 = require("./978440.js"),
  Chunk424126 = require("./424126.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class D extends Chunk473749.PureComponent {
  handleDisconnect() {
    h.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, f.F6)(e, x.default, E.Z), r = null != t ? "".concat(n, " / ").concat(t.name) : n, s = null != t ? t.id : _.ME;
    return (0, i.jsx)(l.rU, {
      to: _.Z5c.CHANNEL(s),
      onClick: t => {
        t.stopPropagation(), u.Z.channelListScrollTo(s, e.id)
      },
      children: (0, i.jsx)(m.Z, {
        className: P.channel,
        children: r
      })
    })
  }
  render() {
    let {
      className: e,
      contentClassName: t,
      pinned: n,
      lobbyId: r,
      channel: s,
      quality: l,
      lastPing: a,
      hasVideo: d,
      connectionState: u,
      deaf: h,
      mute: f
    } = this.props;
    return null == s ? null : (0, i.jsx)(j.ZP.Bar, {
      className: o()(e, I.controls, {
        [I.unpinned]: !n
      }),
      children: (0, i.jsxs)(j.ZP.Content, {
        className: o()(t, I.content),
        dynamicSize: true,
        children: [(0, i.jsx)("div", {
          className: P.inner,
          children: (0, i.jsx)(c.yRy, {
            targetElementRef: this.rtcConnectionStatusRef,
            renderPopout: () => this.renderPopout(s.id),
            position: "top",
            children: e => (0, i.jsx)(c.P3F, T(N({}, e), {
              innerRef: this.rtcConnectionStatusRef,
              children: (0, i.jsx)(y.Z, {
                channelId: s.id,
                quality: l,
                lastPing: a,
                hasVideo: d,
                state: u,
                children: this.renderChannelLink(s)
              })
            }))
          })
        }), (0, i.jsxs)(p.Z, {
          grow: 0,
          children: [(0, i.jsx)(g.Z, {
            tooltipText: f ? C.intl.string(C.t.YqAjXy) : C.intl.string(C.t.w4m945),
            icon: f ? c.nRN : c.S6n,
            iconForeground: f ? I.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(g.Z, {
            tooltipText: h ? C.intl.string(C.t["2US872"]) : C.intl.string(C.t.wjcRFX),
            icon: h ? c.wE8 : c.VWR,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: h ? I.strikethrough : null
          }), null == r && (0, i.jsx)(g.Z, {
            tooltipText: C.intl.string(C.t["6vrfgt"]),
            onClick: this.handleDisconnect,
            icon: c.gkL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), w(this, "rtcConnectionStatusRef", r.createRef()), w(this, "handleToggleSelfMute", () => {
      let {
        context: e
      } = this.props;
      d.Z.toggleSelfMute({
        context: e,
        location: "Overlay Controls"
      })
    }), w(this, "handleToggleSelfDeaf", () => {
      let {
        context: e
      } = this.props;
      d.Z.toggleSelfDeaf({
        context: e,
        location: "Overlay Controls"
      })
    }), w(this, "renderPopout", e => {
      let {
        lobbyId: t
      } = this.props;
      return (0, i.jsx)(b.Z, {
        channelId: e,
        lobbyId: t,
        isOverlay: true
      })
    })
  }
}

function k(e) {
  var {
    context: t,
    lobbyId: n,
    channel: r
  } = e, s = function(e, t) {
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
  }(e, ["context", "lobbyId", "channel"]);
  let o = (0, a.e7)([v.Z], () => v.Z.getGuild(null == r ? true : r.getGuildId())),
    l = (0, a.e7)([S.Z], () => null != r && S.Z.hasVideo(r.id)),
    [c, d] = (0, a.Wu)([O.Z], () => [O.Z.isSelfMute(t) || O.Z.isSelfMutedTemporarily(t), O.Z.isSelfDeaf(t)]),
    [u, h, f] = (0, a.Wu)([Z.Z], () => [Z.Z.getConnectionState(n), Z.Z.getLastPing(n), Z.Z.getQuality(n)]);
  return (0, i.jsx)(D, T(N({}, s), {
    context: t,
    lobbyId: n,
    channel: r,
    guild: o,
    hasVideo: l,
    mute: c,
    deaf: d,
    connectionState: u,
    lastPing: h,
    quality: f
  }))
}