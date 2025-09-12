/** Chunk was on 60831 **/
/** chunk id: 917405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk522651 = require("./522651.js"),
  Chunk476221 = require("./476221.js"),
  Chunk873596 = require("./873596.jsx"),
  Chunk423516 = require("./423516.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk445233 = require("./445233.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let E = {
    [Chunk981631.QKv.CONNECTED]: Chunk445233.rtcConnectionStatusConnected,
    [Chunk981631.QKv.CONNECTING]: Chunk445233.rtcConnectionStatusConnecting,
    [Chunk981631.QKv.ERROR]: Chunk445233.rtcConnectionStatusError
  },
  N = {
    [Chunk981631.IE4.FINE]: Chunk445233.rtcConnectionQualityFine,
    [Chunk981631.IE4.AVERAGE]: Chunk445233.rtcConnectionQualityAverage,
    [Chunk981631.IE4.BAD]: Chunk445233.rtcConnectionQualityBad,
    [Chunk981631.IE4.UNKNOWN]: null
  },
  O = {
    [Chunk981631.IE4.FINE]: Chunk481060.B_b,
    [Chunk981631.IE4.AVERAGE]: Chunk481060.hLg,
    [Chunk981631.IE4.BAD]: Chunk481060.mbS,
    [Chunk981631.IE4.UNKNOWN]: Chunk481060._3e
  };

function y(e) {
  var {
    quality: t,
    largePing: n
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, l, i = function(e, t) {
      if (null == e) return {};
      var n, l, i = {},
        r = Object.keys(e);
      for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["quality", "largePing"]);
  let r = O[t];
  return (0, l.jsx)(r, p({
    className: a()(h.ping, {
      [h.largePing]: n
    })
  }, i))
}

function C(e) {
  let {
    quality: t,
    lastPing: n,
    state: r,
    className: O,
    children: C,
    channelId: _,
    childrenAsSubtitle: T,
    connectionStatusTextVariant: m,
    hasVideo: I
  } = e, S = i.useRef(null), b = r === g.hes.RTC_CONNECTED, v = i.useCallback(e => {
    var t, n;
    return (0, l.jsx)(d.Z, (t = p({}, e), n = n = {
      channelId: _
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [_]), {
    connectionStatus: x,
    connectionStatusText: P
  } = c.Z.getStatus(r, I);
  return (0, l.jsxs)("div", {
    className: h.rtcConnectionStatusWrapper,
    children: [(0, l.jsxs)("div", {
      className: a()(h.rtcConnectionStatus, N[t], O),
      children: [b && (0, l.jsx)(o.ua7, {
        text: t !== g.IE4.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
        children: e => (0, l.jsx)(y, p({
          quality: t,
          largePing: T
        }, e))
      }), (0, l.jsxs)("div", {
        className: h.labelWrapper,
        children: [(0, l.jsx)(o.yRy, {
          targetElementRef: S,
          renderPopout: v,
          position: "top",
          children: e => {
            let {
              onClick: t
            } = e;
            return (0, l.jsx)(o.P3F, {
              innerRef: S,
              onClick: e => {
                (0, u.v)(s.Z.RTC_PANEL, u.d.CONNECTION_STATUS), t(e)
              },
              children: (0, l.jsx)(f.Z, {
                text: P,
                textVariant: m,
                hasVideo: I,
                className: E[x],
                hasConnectedChannel: null != _
              })
            })
          }
        }), T ? C : null]
      })]
    }), T ? null : C]
  })
}