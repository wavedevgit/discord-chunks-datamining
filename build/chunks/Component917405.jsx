/** Chunk was on 82096 **/
/** chunk id: 917405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk522651 = require("./522651.js"),
  Chunk476221 = require("./476221.js"),
  Chunk873596 = require("./873596.jsx"),
  Chunk423516 = require("./423516.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk683560 = require("./683560.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let O = {
    [Chunk981631.QKv.CONNECTED]: Chunk683560.rtcConnectionStatusConnected,
    [Chunk981631.QKv.CONNECTING]: Chunk683560.rtcConnectionStatusConnecting,
    [Chunk981631.QKv.ERROR]: Chunk683560.rtcConnectionStatusError
  },
  N = {
    [Chunk981631.IE4.FINE]: Chunk683560.rtcConnectionQualityFine,
    [Chunk981631.IE4.AVERAGE]: Chunk683560.rtcConnectionQualityAverage,
    [Chunk981631.IE4.BAD]: Chunk683560.rtcConnectionQualityBad,
    [Chunk981631.IE4.UNKNOWN]: null
  },
  y = {
    [Chunk981631.IE4.FINE]: Chunk481060.B_b,
    [Chunk981631.IE4.AVERAGE]: Chunk481060.hLg,
    [Chunk981631.IE4.BAD]: Chunk481060.mbS,
    [Chunk981631.IE4.UNKNOWN]: Chunk481060._3e
  };

function b(e) {
  var {
    quality: t,
    largePing: n
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["quality", "largePing"]);
  let i = y[t];
  return (0, r.jsx)(i, p({
    className: o()(g.ping, {
      [g.largePing]: n
    })
  }, l))
}

function x(e) {
  let {
    quality: t,
    lastPing: n,
    state: i,
    className: y,
    children: x,
    channelId: E,
    childrenAsSubtitle: m,
    connectionStatusTextVariant: C,
    hasVideo: v
  } = e, T = l.useRef(null), j = i === h.hes.RTC_CONNECTED, I = l.useCallback(e => {
    var t, n;
    return (0, r.jsx)(d.Z, (t = p({}, e), n = n = {
      channelId: E
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [E]), {
    connectionStatus: _,
    connectionStatusText: S
  } = u.Z.getStatus(i, v);
  return (0, r.jsxs)("div", {
    className: g.rtcConnectionStatusWrapper,
    children: [(0, r.jsxs)("div", {
      className: o()(g.rtcConnectionStatus, N[t], y),
      children: [j && (0, r.jsx)(s.ua7, {
        text: t !== h.IE4.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
        children: e => (0, r.jsx)(b, p({
          quality: t,
          largePing: m
        }, e))
      }), (0, r.jsxs)("div", {
        className: g.labelWrapper,
        children: [(0, r.jsx)(s.yRy, {
          targetElementRef: T,
          renderPopout: I,
          position: "top",
          children: e => {
            let {
              onClick: t
            } = e;
            return (0, r.jsx)(s.P3F, {
              innerRef: T,
              onClick: e => {
                (0, c.v)(a.Z.RTC_PANEL, c.d.CONNECTION_STATUS), t(e)
              },
              children: (0, r.jsx)(f.Z, {
                text: S,
                textVariant: C,
                hasVideo: v,
                className: O[_],
                hasConnectedChannel: null != E
              })
            })
          }
        }), m ? x : null]
      })]
    }), m ? null : x]
  })
}