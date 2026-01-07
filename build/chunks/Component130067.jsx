/** Chunk was on web.js **/
/** chunk id: 130067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N,
  _: () => h._
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk393238 = require("./393238.js"),
  Chunk794347 = require("./794347.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740218 = require("./740218.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}
let T = 2e3,
  C = false;
class A extends Chunk473749.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), g.Z.getMediaEngine().removeListener(u.aB.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: r,
      outputVolume: i,
      inputMode: a,
      vadAutoThreshold: o,
      vadThreshold: s,
      location: l,
      isDeafened: c
    } = this.props, u = false;
    e && !c && (_.Z.toggleSelfDeaf(), u = true), _.Z.setLoopback("mic_test", true), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: true,
      isDetectingInput: true,
      didDeafenUser: u
    }), b.default.track(y.rMx.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: n,
      output_device_name: r,
      output_device_volume: i,
      input_mode: a,
      input_sensitivity_is_automatic: o,
      input_sensitivity_threshold: Math.round(s),
      location: l
    })
  }
  _micTestStop() {
    let {
      didDeafenUser: e,
      isMicTesting: t
    } = this.state, {
      isVoiceConnected: n,
      isDeafened: r
    } = this.props;
    t && (n && r && e && _.Z.toggleSelfDeaf(), _.Z.setLoopback("mic_test", false), this.setState({
      isMicTesting: false,
      didDeafenUser: false
    }), null != this._micTestStartTime && b.default.track(y.rMx.MIC_TESTING_STOPPED, {
      testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
    }))
  }
  renderCaption() {
    let {
      captionVoice: e,
      captionNoVoice: t
    } = this.props, {
      isMicTesting: n,
      isDetectingInput: i
    } = this.state;
    return (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: v.micTestCaption,
      children: n ? i ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: i,
      buttonTest: a = "",
      buttonStop: s = "",
      buttonVariant: l = "secondary",
      isDeafened: c,
      buttonMinWidth: u,
      measureButtonRef: d,
      meterOnly: _ = false,
      containerClassName: m
    } = this.props, {
      isMicTesting: g,
      volume: E
    } = this.state, b = e && !g ? O.intl.string(O.t["9viE2A"]) : null;
    g && e && !c && this._micTestStop();
    let y = s.length >= a.length ? s : a;
    return (0, r.jsx)("div", {
      className: o()(v.container, m),
      children: (0, r.jsx)(p.gNt, {
        label: null != t ? t : true,
        hideLabel: _,
        description: _ ? null : n,
        children: (0, r.jsxs)("div", {
          className: v.micTest,
          children: [!_ && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: v.buttonSizer,
              "aria-hidden": true,
              children: [(0, r.jsx)(p.Button, {
                buttonRef: d,
                size: "sm",
                variant: l,
                text: y
              }), (0, r.jsx)("div", {
                className: v.buttonSizerSpacer
              })]
            }), (0, r.jsx)(f.u, {
              text: b,
              children: (0, r.jsx)("div", {
                className: v.buttonWrapper,
                style: null != u ? {
                  minWidth: u
                } : {
                  visibility: "hidden"
                },
                children: (0, r.jsx)(p.Button, {
                  size: "sm",
                  variant: l,
                  text: g ? s : a,
                  onClick: this.handleToggleMicTest,
                  fullWidth: true
                })
              })
            })]
          }), (0, r.jsx)(h.Z, {
            progress: g || _ ? E + 100 : 0,
            notchBackground: i,
            notchClassName: this.props.notchClassName,
            children: this.renderCaption()
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), S(this, "_initTimeout", new d.V7), S(this, "_silenceTimeout", new d.V7), S(this, "_messageTimeout", new d.V7), S(this, "_micTestStartTime", true), S(this, "state", {
      volume: C,
      isMicTesting: false,
      isDetectingInput: true,
      didDeafenUser: false
    }), S(this, "setupVoiceActivity", () => {
      g.Z.getMediaEngine().on(u.aB.VoiceActivity, this.handleVoiceActivity)
    }), S(this, "handleVoiceActivity", e => {
      let {
        isMicTesting: t
      } = this.state;
      if (t && e <= C) {
        this._silenceTimeout.isStarted() || this._silenceTimeout.start(T, () => {
          this.setState({
            isDetectingInput: false
          })
        }), this.setState({
          volume: C
        });
        return
      }
      this._silenceTimeout.stop(), this.setState({
        volume: e,
        isDetectingInput: true
      })
    }), S(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}

function N(e) {
  var t, n;
  let {
    inputDevice: i,
    outputDevice: a,
    threshold: o,
    autoThreshold: s,
    inputVolume: u,
    outputVolume: d,
    inputMode: f,
    isDeafened: p
  } = (0, c.cj)([g.Z], () => {
    let e = g.Z.getInputDeviceId(),
      t = g.Z.getInputDevices(),
      n = l().find(t, t => {
        let {
          id: n
        } = t;
        return n === e
      }),
      r = g.Z.getOutputDeviceId(),
      i = g.Z.getOutputDevices(),
      a = l().find(i, e => {
        let {
          id: t
        } = e;
        return t === r
      }),
      {
        threshold: o,
        autoThreshold: s
      } = g.Z.getModeOptions(),
      c = g.Z.getInputVolume(),
      u = g.Z.getOutputVolume();
    return {
      inputDevice: n,
      outputDevice: a,
      threshold: o,
      autoThreshold: s,
      inputVolume: c,
      outputVolume: u,
      inputMode: g.Z.getMode(),
      isDeafened: g.Z.isSelfDeaf()
    }
  }), _ = (0, c.e7)([E.Z], () => E.Z.isConnected()), {
    ref: h,
    width: b
  } = (0, m.ZP)();
  return (0, r.jsx)(A, I({
    isVoiceConnected: _,
    inputVolume: u,
    outputVolume: d,
    inputMode: f,
    isDeafened: p,
    vadThreshold: o,
    vadAutoThreshold: s,
    inputDeviceName: null != (t = null == i ? true : i.name) ? t : "",
    outputDeviceName: null != (n = null == a ? true : a.name) ? n : "",
    measureButtonRef: h,
    buttonMinWidth: b
  }, e))
}