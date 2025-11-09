/** Chunk was on web.js **/
/** chunk id: 130067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N,
  _: () => Chunk794347._
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk865588 = require("./865588.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let T = 2e3,
  A = false;
class C extends Chunk647438.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, this.handleVoiceActivity)
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
    module && !Chunk442837 && (Chunk846027.Z.toggleSelfDeaf(), u = true), Chunk846027.Z.setLoopback("mic_test", true), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: true,
      isDetectingInput: true,
      didDeafenUser: Chunk46973
    }), Chunk626135.default.track(Chunk981631.rMx.MIC_TESTING_STARTED, {
      input_device_name: exports,
      input_device_volume: require,
      output_device_name: Chunk951288,
      output_device_volume: Chunk647438,
      input_mode: Chunk120356,
      input_sensitivity_is_automatic: o,
      input_sensitivity_threshold: Math.round(Chunk392711),
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
    exports && (require && Chunk951288 && module && Chunk846027.Z.toggleSelfDeaf(), Chunk846027.Z.setLoopback("mic_test", false), this.setState({
      isMicTesting: false,
      didDeafenUser: false
    }), null != this._micTestStartTime && Chunk626135.default.track(Chunk981631.rMx.MIC_TESTING_STOPPED, {
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
    return (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: Chunk865588.micTestCaption,
      children: require ? Chunk647438 ? module : exports : null
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
      meterOnly: p = false,
      containerClassName: h
    } = this.props, {
      isMicTesting: g,
      volume: E
    } = this.state, b = module && !Chunk131951 ? Chunk388032.intl.string(Chunk388032.t["9viE2A"]) : null;
    Chunk131951 && module && !Chunk442837 && this._micTestStop();
    let y = Chunk392711.length >= Chunk120356.length ? Chunk392711 : Chunk120356;
    return (0, Chunk951288.jsx)("div", {
      className: o()(Chunk865588.container, Chunk393238),
      children: (0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: null != exports ? exports : true,
        hideLabel: Chunk846027,
        description: Chunk846027 ? null : require,
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk865588.micTest,
          children: [!Chunk846027 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsxs)("div", {
              className: Chunk865588.buttonSizer,
              "aria-hidden": true,
              children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
                buttonRef: Chunk846519,
                size: "sm",
                variant: l,
                text: Chunk981631
              }), (0, Chunk951288.jsx)("div", {
                className: Chunk865588.buttonSizerSpacer
              })]
            }), (0, Chunk951288.jsx)(Chunk28664.u, {
              text: Chunk626135,
              children: (0, Chunk951288.jsx)("div", {
                className: Chunk865588.buttonWrapper,
                style: null != Chunk46973 ? {
                  minWidth: Chunk46973
                } : {
                  visibility: "hidden"
                },
                children: (0, Chunk951288.jsx)(Chunk481060.Button, {
                  size: "sm",
                  variant: l,
                  text: Chunk131951 ? Chunk392711 : Chunk120356,
                  onClick: this.handleToggleMicTest,
                  fullWidth: true
                })
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk794347.Z, {
            progress: Chunk131951 || Chunk846027 ? Chunk19780 + 100 : 0,
            notchBackground: Chunk647438,
            notchClassName: this.props.notchClassName,
            children: this.renderCaption()
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "_initTimeout", new d.V7), I(this, "_silenceTimeout", new d.V7), I(this, "_messageTimeout", new d.V7), I(this, "_micTestStartTime", true), I(this, "state", {
      volume: A,
      isMicTesting: false,
      isDetectingInput: true,
      didDeafenUser: false
    }), I(this, "setupVoiceActivity", () => {
      g.Z.getMediaEngine().on(u.aB.VoiceActivity, this.handleVoiceActivity)
    }), I(this, "handleVoiceActivity", e => {
      let {
        isMicTesting: t
      } = this.state;
      if (t && e <= A) {
        this._silenceTimeout.isStarted() || this._silenceTimeout.start(T, () => {
          this.setState({
            isDetectingInput: false
          })
        }), this.setState({
          volume: A
        });
        return
      }
      this._silenceTimeout.stop(), this.setState({
        volume: e,
        isDetectingInput: true
      })
    }), I(this, "handleToggleMicTest", () => {
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
    isDeafened: _
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
  }), p = (0, c.e7)([E.Z], () => E.Z.isConnected()), {
    ref: m,
    width: b
  } = (0, h.ZP)();
  return (0, r.jsx)(C, S({
    isVoiceConnected: p,
    inputVolume: u,
    outputVolume: d,
    inputMode: f,
    isDeafened: _,
    vadThreshold: o,
    vadAutoThreshold: s,
    inputDeviceName: null != (t = null == i ? true : i.name) ? t : "",
    outputDeviceName: null != (n = null == a ? true : a.name) ? n : "",
    measureButtonRef: m,
    buttonMinWidth: b
  }, e))
}