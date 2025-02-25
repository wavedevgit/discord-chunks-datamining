/** Chunk was on 61195 **/
n.d(t, {
  Z: () => I
}), n(47120);
var i = n(200651),
  o = n(192379),
  r = n(120356),
  a = n.n(r),
  l = n(481060),
  c = n(72416),
  s = n(476221),
  u = n(873596),
  d = n(423516),
  _ = n(981631),
  h = n(563286);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let g = {
    [_.IE4.UNKNOWN]: l.ua7.Colors.BLACK,
    [_.IE4.BAD]: l.ua7.Colors.RED,
    [_.IE4.AVERAGE]: l.ua7.Colors.YELLOW,
    [_.IE4.FINE]: l.ua7.Colors.GREEN
  },
  v = {
    [_.QKv.CONNECTED]: h.rtcConnectionStatusConnected,
    [_.QKv.CONNECTING]: h.rtcConnectionStatusConnecting,
    [_.QKv.ERROR]: h.rtcConnectionStatusError
  },
  b = {
    [_.IE4.FINE]: h.rtcConnectionQualityFine,
    [_.IE4.AVERAGE]: h.rtcConnectionQualityAverage,
    [_.IE4.BAD]: h.rtcConnectionQualityBad,
    [_.IE4.UNKNOWN]: null
  };
class y extends o.PureComponent {
  renderPopoutTarget(e) {
    let t = this.props.channelId;
    return null == t ? e({}) : (0, i.jsx)(l.yRy, {
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
      connectionStatus: o,
      connectionStatusText: r
    } = s.Z.getStatus(t, e);
    return this.renderPopoutTarget(e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(l.zxk, {
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        onClick: t,
        children: (0, i.jsx)(d.Z, {
          text: r,
          textVariant: this.props.connectionStatusTextVariant,
          hasVideo: this.props.hasVideo,
          className: v[o],
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
      lastPing: o,
      state: r,
      className: c,
      children: s
    } = this.props;
    return r === _.hes.RTC_CONNECTED && (e = (0, i.jsx)(l.ua7, {
      text: t !== _.IE4.UNKNOWN && null != o ? "".concat(o.toFixed(0), " ms") : null,
      color: g[t],
      children: e => (0, i.jsx)(m, p({
        quality: t,
        smallPing: n
      }, e))
    })), (0, i.jsxs)("div", {
      className: h.rtcConnectionStatusWrapper,
      children: [(0, i.jsxs)("div", {
        className: a()(h.rtcConnectionStatus, b[t], c),
        children: [e, (0, i.jsx)("div", {
          className: h.labelWrapper,
          children: this.renderStatus()
        })]
      }), s]
    })
  }
  constructor(...e) {
    super(...e), f(this, "renderPopout", e => t => {
      var n, o;
      return (0, i.jsx)(u.Z, (n = p({}, t), o = o = {
        channelId: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
      }), n))
    })
  }
}

function m(e) {
  var {
    quality: t,
    smallPing: n
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, i, o = function(e, t) {
      if (null == e) return {};
      var n, i, o = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["quality", "smallPing"]);
  if (!(0, l.bWb)().enabled) return (0, i.jsx)(c.Z, {
    className: a()(h.ping, {
      [h.smallPing]: n
    }),
    foreground: h.pingForeground
  });
  {
    let e = {
      [_.IE4.FINE]: l.B_b,
      [_.IE4.AVERAGE]: l.hLg,
      [_.IE4.BAD]: l.mbS,
      [_.IE4.UNKNOWN]: l._3e
    } [t];
    return (0, i.jsx)(e, p({
      className: a()(h.ping, {
        [h.smallPing]: n
      })
    }, o))
  }
}
let I = y