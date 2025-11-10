/** Chunk was on 63141 **/
/** chunk id: 244073, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk799899 = require("./799899.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk925549 = require("./925549.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk870569 = require("./870569.jsx"),
  Chunk582642 = require("./582642.jsx"),
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
  Chunk361979 = require("./361979.js"),
  Chunk890332 = require("./890332.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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

function N(e, t) {
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
class D extends Chunk647438.PureComponent {
  handleDisconnect() {
    Chunk287734.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, p.F6)(e, E.default, O.Z), r = null != t ? "".concat(n, " / ").concat(t.name) : n, s = null != t ? t.id : j.ME;
    return (0, i.jsx)(l.rU, {
      to: j.Z5c.CHANNEL(s),
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
      mute: p
    } = this.props;
    return null == Chunk120356 ? null : (0, Chunk951288.jsx)(Chunk518084.ZP.Bar, {
      className: o()(module, Chunk361979.controls, {
        [Chunk361979.unpinned]: !require
      }),
      children: (0, Chunk951288.jsxs)(Chunk518084.ZP.Content, {
        className: o()(exports, Chunk361979.content),
        dynamicSize: true,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk890332.inner,
          children: (0, Chunk951288.jsx)(Chunk481060.yRy, {
            targetElementRef: this.rtcConnectionStatusRef,
            renderPopout: () => this.renderPopout(Chunk120356.id),
            position: "top",
            children: e => (0, i.jsx)(c.P3F, N(T({}, e), {
              innerRef: this.rtcConnectionStatusRef,
              children: (0, i.jsx)(b.Z, {
                channelId: s.id,
                quality: l,
                lastPing: a,
                hasVideo: d,
                state: u,
                children: this.renderChannelLink(s)
              })
            }))
          })
        }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          grow: 0,
          children: [(0, Chunk951288.jsx)(Chunk870569.Z, {
            tooltipText: Chunk933557 ? Chunk388032.intl.string(Chunk388032.t.YqAjXy) : Chunk388032.intl.string(Chunk388032.t.w4m945),
            icon: Chunk933557 ? Chunk481060.nRN : Chunk481060.S6n,
            iconForeground: Chunk933557 ? Chunk361979.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, Chunk951288.jsx)(Chunk870569.Z, {
            tooltipText: Chunk287734 ? Chunk388032.intl.string(Chunk388032.t["2US872"]) : Chunk388032.intl.string(Chunk388032.t.wjcRFX),
            icon: Chunk287734 ? Chunk481060.wE8 : Chunk481060.VWR,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: Chunk287734 ? Chunk361979.strikethrough : null
          }), null == Chunk647438 && (0, Chunk951288.jsx)(Chunk870569.Z, {
            tooltipText: Chunk388032.intl.string(Chunk388032.t["6vrfgt"]),
            onClick: this.handleDisconnect,
            icon: Chunk481060.gkL
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
      return (0, i.jsx)(y.Z, {
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
    l = (0, a.e7)([x.Z], () => null != r && x.Z.hasVideo(r.id)),
    [c, d] = (0, a.Wu)([_.Z], () => [_.Z.isSelfMute(t) || _.Z.isSelfMutedTemporarily(t), _.Z.isSelfDeaf(t)]),
    [u, h, p] = (0, a.Wu)([S.Z], () => [S.Z.getConnectionState(n), S.Z.getLastPing(n), S.Z.getQuality(n)]);
  return (0, i.jsx)(D, N(T({}, s), {
    context: t,
    lobbyId: n,
    channel: r,
    guild: o,
    hasVideo: l,
    mute: c,
    deaf: d,
    connectionState: u,
    lastPing: h,
    quality: p
  }))
}