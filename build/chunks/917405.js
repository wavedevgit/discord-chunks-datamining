/** Chunk was on 58173 **/
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  i = n.n(o),
  s = n(481060),
  a = n(100527),
  c = n(522651),
  u = n(72416),
  d = n(476221),
  h = n(873596),
  f = n(423516),
  p = n(981631),
  g = n(154451);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
let O = {
    [p.IE4.UNKNOWN]: s.ua7.Colors.BLACK,
    [p.IE4.BAD]: s.ua7.Colors.RED,
    [p.IE4.AVERAGE]: s.ua7.Colors.YELLOW,
    [p.IE4.FINE]: s.ua7.Colors.GREEN
  },
  N = {
    [p.QKv.CONNECTED]: g.rtcConnectionStatusConnected,
    [p.QKv.CONNECTING]: g.rtcConnectionStatusConnecting,
    [p.QKv.ERROR]: g.rtcConnectionStatusError
  },
  b = {
    [p.IE4.FINE]: g.rtcConnectionQualityFine,
    [p.IE4.AVERAGE]: g.rtcConnectionQualityAverage,
    [p.IE4.BAD]: g.rtcConnectionQualityBad,
    [p.IE4.UNKNOWN]: null
  };
class m extends l.PureComponent {
  renderPopoutTarget(e) {
    let t = this.props.channelId;
    return null == t ? e({}) : (0, r.jsx)(s.yRy, {
      renderPopout: this.renderPopout(t),
      position: "top",
      children: e
    })
  }
  renderStatus() {
    let {
      hasVideo: e,
      state: t,
      channelId: n
    } = this.props, {
      connectionStatus: l,
      connectionStatusText: o
    } = d.Z.getStatus(t, e);
    return this.renderPopoutTarget(e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(s.zxk, {
        look: s.zxk.Looks.BLANK,
        size: s.zxk.Sizes.NONE,
        onClick: e => {
          (0, c.v)(a.Z.RTC_PANEL, c.d.CONNECTION_STATUS), null == t || t(e)
        },
        children: (0, r.jsx)(f.Z, {
          text: o,
          textVariant: this.props.connectionStatusTextVariant,
          hasVideo: this.props.hasVideo,
          className: N[l],
          hasConnectedChannel: null != n
        })
      })
    })
  }
  render() {
    let e;
    let {
      quality: t,
      smallPing: n,
      lastPing: l,
      state: o,
      className: a,
      children: c
    } = this.props;
    return o === p.hes.RTC_CONNECTED && (e = (0, r.jsx)(s.ua7, {
      text: t !== p.IE4.UNKNOWN && null != l ? "".concat(l.toFixed(0), " ms") : null,
      color: O[t],
      children: e => (0, r.jsx)(x, v({
        quality: t,
        smallPing: n
      }, e))
    })), (0, r.jsxs)("div", {
      className: g.rtcConnectionStatusWrapper,
      children: [(0, r.jsxs)("div", {
        className: i()(g.rtcConnectionStatus, b[t], a),
        children: [e, (0, r.jsx)("div", {
          className: g.labelWrapper,
          children: this.renderStatus()
        })]
      }), c]
    })
  }
  constructor(...e) {
    super(...e), y(this, "renderPopout", e => t => {
      var n, l;
      return (0, r.jsx)(h.Z, (n = v({}, t), l = l = {
        channelId: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    })
  }
}

function x(e) {
  var {
    quality: t,
    smallPing: n
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["quality", "smallPing"]);
  if (!(0, s.bWb)().enabled) return (0, r.jsx)(u.Z, {
    className: i()(g.ping, {
      [g.smallPing]: n
    }),
    foreground: g.pingForeground
  });
  {
    let e = {
      [p.IE4.FINE]: s.B_b,
      [p.IE4.AVERAGE]: s.hLg,
      [p.IE4.BAD]: s.mbS,
      [p.IE4.UNKNOWN]: s._3e
    } [t];
    return (0, r.jsx)(e, v({
      className: i()(g.ping, {
        [g.smallPing]: n
      })
    }, l))
  }
}
let C = m