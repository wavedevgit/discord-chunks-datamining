/** Chunk was on 84018 **/
/** chunk id: 31284, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk758879 = require("./758879.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk951001 = require("./951001.js"),
  Chunk956793 = require("./956793.js"),
  Chunk47167 = require("./47167.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk42473 = require("./42473.jsx"),
  Chunk994314 = require("./994314.jsx"),
  Chunk241847 = require("./241847.jsx"),
  Chunk178442 = require("./178442.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk572487 = require("./572487.js"),
  Chunk855790 = require("./855790.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk737398 = require("./737398.js"),
  Chunk255259 = require("./255259.js");

function N(e, t, n) {
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
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
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
class D extends Chunk64700.PureComponent {
  handleDisconnect() {
    h.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, p.m1)(e, v.default, _.A), r = null != t ? "".concat(n, " / ").concat(t.name) : n, s = null != t ? t.id : j.ME;
    return (0, i.jsx)(o.N_, {
      to: j.BVt.CHANNEL(s),
      onClick: t => {
        t.stopPropagation(), u.A.channelListScrollTo(s, e.id)
      },
      children: (0, i.jsx)(y.A, {
        className: w.Ix,
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
      quality: o,
      lastPing: a,
      hasVideo: d,
      connectionState: u,
      deaf: h,
      mute: p
    } = this.props;
    return null == s ? null : (0, i.jsx)(S.Ay.Bar, {
      className: l()(e, C.ne, {
        [C.CW]: !n
      }),
      children: (0, i.jsxs)(S.Ay.Content, {
        className: l()(t, C.Qs),
        dynamicSize: true,
        children: [(0, i.jsx)("div", {
          className: w.vW,
          children: (0, i.jsx)(c.YNO, {
            targetElementRef: this.rtcConnectionStatusRef,
            renderPopout: () => this.renderPopout(s.id),
            position: "top",
            children: e => (0, i.jsx)(c.DUT, P(T({}, e), {
              innerRef: this.rtcConnectionStatusRef,
              children: (0, i.jsx)(m.A, {
                channelId: s.id,
                quality: o,
                lastPing: a,
                hasVideo: d,
                state: u,
                children: this.renderChannelLink(s)
              })
            }))
          })
        }), (0, i.jsxs)(f.A, {
          grow: 0,
          children: [(0, i.jsx)(g.A, {
            tooltipText: p ? I.intl.string(I.t.YqAjXy) : I.intl.string(I.t.w4m945),
            icon: p ? c.z0P : c.cNw,
            iconForeground: p ? C.of : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(g.A, {
            tooltipText: h ? I.intl.string(I.t["2US872"]) : I.intl.string(I.t.wjcRFX),
            icon: h ? c.cQT : c.LoC,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: h ? C.of : null
          }), null == r && (0, i.jsx)(g.A, {
            tooltipText: I.intl.string(I.t["6vrfgt"]),
            onClick: this.handleDisconnect,
            icon: c.zWQ
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), N(this, "rtcConnectionStatusRef", r.createRef()), N(this, "handleToggleSelfMute", () => {
      let {
        context: e
      } = this.props;
      d.A.toggleSelfMute({
        context: e,
        location: "Overlay Controls"
      })
    }), N(this, "handleToggleSelfDeaf", () => {
      let {
        context: e
      } = this.props;
      d.A.toggleSelfDeaf({
        context: e,
        location: "Overlay Controls"
      })
    }), N(this, "renderPopout", e => {
      let {
        lobbyId: t
      } = this.props;
      return (0, i.jsx)(A.A, {
        channelId: e,
        lobbyId: t,
        isOverlay: true
      })
    })
  }
}

function R(e) {
  let {
    context: t,
    lobbyId: n,
    channel: r
  } = e, s = function(e, t) {
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
  }(e, ["context", "lobbyId", "channel"]), l = (0, a.bG)([b.A], () => b.A.getGuild(null == r ? true : r.getGuildId())), o = (0, a.bG)([E.A], () => null != r && E.A.hasVideo(r.id)), [c, d] = (0, a.yK)([O.A], () => [O.A.isSelfMute(t) || O.A.isSelfMutedTemporarily(t), O.A.isSelfDeaf(t)]), [u, h, p] = (0, a.yK)([x.A], () => [x.A.getConnectionState(n), x.A.getLastPing(n), x.A.getQuality(n)]);
  return (0, i.jsx)(D, P(T({}, s), {
    context: t,
    lobbyId: n,
    channel: r,
    guild: l,
    hasVideo: o,
    mute: c,
    deaf: d,
    connectionState: u,
    lastPing: h,
    quality: p
  }))
}