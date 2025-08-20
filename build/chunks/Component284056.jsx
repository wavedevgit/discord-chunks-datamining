/** Chunk was on web.js **/
/** chunk id: 284056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A,
  _: () => Chunk794347._
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk393238 = require("./393238.js"),
  Chunk794347 = require("./794347.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk81272 = require("./81272.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let I = 2e3,
  T = false;
class S extends Chunk647438.PureComponent {
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
    module && !Chunk846519 && (Chunk846027.Z.toggleSelfDeaf(), u = true), Chunk846027.Z.setLoopback("mic_test", true), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: true,
      isDetectingInput: true,
      didDeafenUser: Chunk755721
    }), Chunk626135.default.track(Chunk981631.rMx.MIC_TESTING_STARTED, {
      input_device_name: exports,
      input_device_volume: require,
      output_device_name: Chunk951288,
      output_device_volume: Chunk647438,
      input_mode: Chunk392711,
      input_sensitivity_is_automatic: o,
      input_sensitivity_threshold: Math.round(Chunk442837),
      location: Chunk46973
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
    return (0, Chunk951288.jsx)(Chunk481060.R94, {
      className: Chunk81272.micTestCaption,
      type: Chunk481060.R94.Types.DESCRIPTION,
      children: require ? Chunk647438 ? module : exports : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: i,
      buttonTest: a,
      buttonStop: o,
      buttonClassName: s,
      buttonColor: l,
      isDeafened: c,
      buttonMinWidth: f,
      measureButtonRef: _
    } = this.props, {
      isMicTesting: h,
      volume: m
    } = this.state, g = module && !Chunk131951 ? Chunk388032.intl.string(Chunk388032.t["9viE2N"]) : null;
    Chunk131951 && module && !Chunk846519 && this._micTestStop();
    let E = o.length >= Chunk392711.length ? o : Chunk392711;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk81272.container,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        tag: Chunk481060.RB0.H5,
        className: Chunk81272.title,
        children: exports
      }), null != require && (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk81272.description,
        children: require
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk81272.micTest,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk81272.buttonSizer,
          "aria-hidden": true,
          children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
            buttonRef: Chunk393238,
            grow: true,
            size: Chunk755721.zx.Sizes.SMALL,
            className: Chunk442837,
            color: Chunk46973,
            children: Chunk981631
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk81272.buttonSizerSpacer
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
          text: Chunk626135,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, r.jsx)(u.zx, {
              grow: true,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: n,
              size: u.zx.Sizes.SMALL,
              className: s,
              color: l,
              style: null != f ? {
                minWidth: f
              } : {
                visibility: "hidden"
              },
              children: h ? o : a
            })
          }
        }), (0, Chunk951288.jsx)(Chunk794347.Z, {
          progress: Chunk131951 ? Chunk19780 + 100 : 0,
          notchBackground: Chunk647438,
          children: this.renderCaption()
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), O(this, "_initTimeout", new c.V7), O(this, "_silenceTimeout", new c.V7), O(this, "_messageTimeout", new c.V7), O(this, "_micTestStartTime", true), O(this, "state", {
      volume: T,
      isMicTesting: false,
      isDetectingInput: true,
      didDeafenUser: false
    }), O(this, "setupVoiceActivity", () => {
      h.Z.getMediaEngine().on(l.aB.VoiceActivity, this.handleVoiceActivity)
    }), O(this, "handleVoiceActivity", e => {
      let {
        isMicTesting: t
      } = this.state;
      if (t && e <= T) {
        this._silenceTimeout.isStarted() || this._silenceTimeout.start(I, () => {
          this.setState({
            isDetectingInput: false
          })
        }), this.setState({
          volume: T
        });
        return
      }
      this._silenceTimeout.stop(), this.setState({
        volume: e,
        isDetectingInput: true
      })
    }), O(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}

function A(e) {
  var t, n;
  let {
    inputDevice: i,
    outputDevice: a,
    threshold: l,
    autoThreshold: c,
    inputVolume: u,
    outputVolume: d,
    inputMode: f,
    isDeafened: p
  } = (0, s.cj)([h.Z], () => {
    let e = h.Z.getInputDeviceId(),
      t = h.Z.getInputDevices(),
      n = o().find(t, t => {
        let {
          id: n
        } = t;
        return n === e
      }),
      r = h.Z.getOutputDeviceId(),
      i = h.Z.getOutputDevices(),
      a = o().find(i, e => {
        let {
          id: t
        } = e;
        return t === r
      }),
      {
        threshold: s,
        autoThreshold: l
      } = h.Z.getModeOptions(),
      c = h.Z.getInputVolume(),
      u = h.Z.getOutputVolume();
    return {
      inputDevice: n,
      outputDevice: a,
      threshold: s,
      autoThreshold: l,
      inputVolume: c,
      outputVolume: u,
      inputMode: h.Z.getMode(),
      isDeafened: h.Z.isSelfDeaf()
    }
  }), g = (0, s.e7)([m.Z], () => m.Z.isConnected()), {
    ref: E,
    width: b
  } = (0, _.ZP)();
  return (0, r.jsx)(S, v({
    isVoiceConnected: g,
    inputVolume: u,
    outputVolume: d,
    inputMode: f,
    isDeafened: p,
    vadThreshold: l,
    vadAutoThreshold: c,
    inputDeviceName: null != (t = null == i ? true : i.name) ? t : "",
    outputDeviceName: null != (n = null == a ? true : a.name) ? n : "",
    measureButtonRef: E,
    buttonMinWidth: b
  }, e))
}