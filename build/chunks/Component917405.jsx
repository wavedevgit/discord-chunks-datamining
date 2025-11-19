/** Chunk was on 60831 **/
/** chunk id: 917405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk522651 = require("./522651.js"),
  Chunk476221 = require("./476221.js"),
  Chunk873596 = require("./873596.jsx"),
  Chunk423516 = require("./423516.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk445233 = require("./445233.js");

function E(e) {
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
let N = {
    [Chunk981631.QKv.CONNECTED]: Chunk445233.rtcConnectionStatusConnected,
    [Chunk981631.QKv.CONNECTING]: Chunk445233.rtcConnectionStatusConnecting,
    [Chunk981631.QKv.ERROR]: Chunk445233.rtcConnectionStatusError
  },
  O = {
    [Chunk981631.IE4.FINE]: Chunk445233.rtcConnectionQualityFine,
    [Chunk981631.IE4.AVERAGE]: Chunk445233.rtcConnectionQualityAverage,
    [Chunk981631.IE4.BAD]: Chunk445233.rtcConnectionQualityBad,
    [Chunk981631.IE4.UNKNOWN]: null
  },
  y = {
    [Chunk981631.IE4.FINE]: Chunk481060.B_b,
    [Chunk981631.IE4.AVERAGE]: Chunk481060.hLg,
    [Chunk981631.IE4.BAD]: Chunk481060.mbS,
    [Chunk981631.IE4.UNKNOWN]: Chunk481060._3e
  };

function C(e) {
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
  let r = y[t];
  return (0, l.jsx)(r, E({
    className: a()(p.ping, {
      [p.largePing]: n
    })
  }, i))
}

function _(e) {
  let {
    quality: t,
    lastPing: n,
    state: r,
    className: y,
    children: _,
    channelId: T,
    childrenAsSubtitle: m,
    connectionStatusTextVariant: I,
    hasVideo: S
  } = e, b = i.useRef(null), v = r === h.hes.RTC_CONNECTED, x = i.useCallback(e => {
    var t, n;
    return (0, l.jsx)(f.Z, (t = E({}, e), n = n = {
      channelId: T
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
  }, [T]), {
    connectionStatus: P,
    connectionStatusText: Z
  } = d.Z.getStatus(r, S);
  return (0, l.jsxs)("div", {
    className: p.rtcConnectionStatusWrapper,
    children: [(0, l.jsxs)("div", {
      className: a()(p.rtcConnectionStatus, O[t], y),
      children: [v && (0, l.jsx)(o.u, {
        text: t !== h.IE4.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
        children: (0, l.jsx)(C, {
          quality: t,
          largePing: m
        })
      }), (0, l.jsxs)("div", {
        className: p.labelWrapper,
        children: [(0, l.jsx)(s.yRy, {
          targetElementRef: b,
          renderPopout: x,
          position: "top",
          children: e => {
            let {
              onClick: t
            } = e;
            return (0, l.jsx)(s.P3F, {
              innerRef: b,
              onClick: e => {
                (0, c.v)(u.Z.RTC_PANEL, c.d.CONNECTION_STATUS), t(e)
              },
              children: (0, l.jsx)(g.Z, {
                text: Z,
                textVariant: I,
                hasVideo: S,
                className: N[P],
                hasConnectedChannel: null != T
              })
            })
          }
        }), m ? _ : null]
      })]
    }), m ? null : _]
  })
}