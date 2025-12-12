/** Chunk was on web.js **/
/** chunk id: 130067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N,
  _: () => Chunk794347._
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk953620 = require("./953620.js");

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
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: r,
      outputVolume: i,
      inputMode: o,
      vadAutoThreshold: a,
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
      output_device_name: Chunk54381,
      output_device_volume: Chunk473749,
      input_mode: Chunk120356,
      input_sensitivity_is_automatic: a,
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
    exports && (require && Chunk54381 && module && Chunk846027.Z.toggleSelfDeaf(), Chunk846027.Z.setLoopback("mic_test", false), this.setState({
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
    return (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: Chunk953620.micTestCaption,
      children: require ? Chunk473749 ? module : exports : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: i,
      buttonTest: o = "",
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
    } = this.state, b = module && !Chunk131951 ? Chunk388032.intl.string(Chunk388032.t["9viE2A"]) : null;
    Chunk131951 && module && !Chunk442837 && this._micTestStop();
    let y = Chunk392711.length >= Chunk120356.length ? Chunk392711 : Chunk120356;
    return (0, Chunk54381.jsx)("div", {
      className: a()(Chunk953620.container, Chunk393238),
      children: (0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: null != exports ? exports : true,
        hideLabel: Chunk846027,
        description: Chunk846027 ? null : require,
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk953620.micTest,
          children: [!Chunk846027 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
            children: [(0, Chunk54381.jsxs)("div", {
              className: Chunk953620.buttonSizer,
              "aria-hidden": true,
              children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
                buttonRef: Chunk846519,
                size: "sm",
                variant: l,
                text: Chunk981631
              }), (0, Chunk54381.jsx)("div", {
                className: Chunk953620.buttonSizerSpacer
              })]
            }), (0, Chunk54381.jsx)(Chunk28664.u, {
              text: Chunk626135,
              children: (0, Chunk54381.jsx)("div", {
                className: Chunk953620.buttonWrapper,
                style: null != Chunk46973 ? {
                  minWidth: Chunk46973
                } : {
                  visibility: "hidden"
                },
                children: (0, Chunk54381.jsx)(Chunk481060.Button, {
                  size: "sm",
                  variant: l,
                  text: Chunk131951 ? Chunk392711 : Chunk120356,
                  onClick: this.handleToggleMicTest,
                  fullWidth: true
                })
              })
            })]
          }), (0, Chunk54381.jsx)(Chunk794347.Z, {
            progress: Chunk131951 || Chunk846027 ? Chunk19780 + 100 : 0,
            notchBackground: Chunk473749,
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
    outputDevice: o,
    threshold: a,
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
      o = l().find(i, e => {
        let {
          id: t
        } = e;
        return t === r
      }),
      {
        threshold: a,
        autoThreshold: s
      } = g.Z.getModeOptions(),
      c = g.Z.getInputVolume(),
      u = g.Z.getOutputVolume();
    return {
      inputDevice: n,
      outputDevice: o,
      threshold: a,
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
    vadThreshold: a,
    vadAutoThreshold: s,
    inputDeviceName: null != (t = null == i ? true : i.name) ? t : "",
    outputDeviceName: null != (n = null == o ? true : o.name) ? n : "",
    measureButtonRef: h,
    buttonMinWidth: b
  }, e))
}