/** Chunk was on 75708 **/
/** chunk id: 284056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O,
  _: () => Chunk794347._
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
  Chunk283806 = require("./283806.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class C extends Chunk73800.PureComponent {
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
      outputDeviceName: i,
      outputVolume: r,
      inputMode: s,
      vadAutoThreshold: a,
      vadThreshold: l,
      location: o,
      isDeafened: c
    } = this.props, d = false;
    module && !Chunk846519 && (Chunk846027.Z.toggleSelfDeaf(), d = true), Chunk846027.Z.setLoopback("mic_test", true), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: true,
      isDetectingInput: true,
      didDeafenUser: Chunk755721
    }), Chunk626135.default.track(Chunk981631.rMx.MIC_TESTING_STARTED, {
      input_device_name: exports,
      input_device_volume: require,
      output_device_name: Chunk255367,
      output_device_volume: Chunk73800,
      input_mode: Chunk392711,
      input_sensitivity_is_automatic: a,
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
      isDeafened: i
    } = this.props;
    exports && (require && Chunk255367 && module && Chunk846027.Z.toggleSelfDeaf(), Chunk846027.Z.setLoopback("mic_test", false), this.setState({
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
      isDetectingInput: r
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk481060.R94, {
      className: Chunk283806.micTestCaption,
      type: Chunk481060.R94.Types.DESCRIPTION,
      children: require ? Chunk73800 ? module : exports : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: r,
      buttonTest: s,
      buttonStop: a,
      buttonClassName: l,
      buttonColor: o,
      isDeafened: c,
      buttonMinWidth: m,
      measureButtonRef: p
    } = this.props, {
      isMicTesting: h,
      volume: f
    } = this.state, b = module && !Chunk131951 ? Chunk388032.intl.string(Chunk388032.t["9viE2N"]) : null;
    Chunk131951 && module && !Chunk846519 && this._micTestStop();
    let x = a.length >= Chunk392711.length ? a : Chunk392711;
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk283806.container,
      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
        tag: Chunk481060.RB0.H5,
        className: Chunk283806.title,
        children: exports
      }), null != require && (0, Chunk255367.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk283806.description,
        children: require
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk283806.micTest,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk283806.buttonSizer,
          "aria-hidden": true,
          children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
            buttonRef: Chunk393238,
            grow: true,
            size: Chunk755721.zx.Sizes.SMALL,
            className: Chunk442837,
            color: Chunk46973,
            children: Chunk981631
          }), (0, Chunk255367.jsx)("div", {
            className: Chunk283806.buttonSizerSpacer
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
          text: Chunk626135,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, i.jsx)(d.zx, {
              grow: true,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: n,
              size: d.zx.Sizes.SMALL,
              className: l,
              color: o,
              style: null != m ? {
                minWidth: m
              } : {
                visibility: "hidden"
              },
              children: h ? a : s
            })
          }
        }), (0, Chunk255367.jsx)(Chunk794347.Z, {
          progress: Chunk131951 ? Chunk19780 + 100 : 0,
          notchBackground: Chunk73800,
          children: this.renderCaption()
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "_initTimeout", new c.V7), E(this, "_silenceTimeout", new c.V7), E(this, "_messageTimeout", new c.V7), E(this, "_micTestStartTime", true), E(this, "state", {
      volume: false,
      isMicTesting: false,
      isDetectingInput: true,
      didDeafenUser: false
    }), E(this, "setupVoiceActivity", () => {
      h.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity)
    }), E(this, "handleVoiceActivity", e => {
      let {
        isMicTesting: t
      } = this.state;
      if (t && e <= false) {
        this._silenceTimeout.isStarted() || this._silenceTimeout.start(2e3, () => {
          this.setState({
            isDetectingInput: false
          })
        }), this.setState({
          volume: false
        });
        return
      }
      this._silenceTimeout.stop(), this.setState({
        volume: e,
        isDetectingInput: true
      })
    }), E(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}

function O(e) {
  var t, n;
  let {
    inputDevice: r,
    outputDevice: s,
    threshold: o,
    autoThreshold: c,
    inputVolume: d,
    outputVolume: u,
    inputMode: m,
    isDeafened: g
  } = (0, l.cj)([h.Z], () => {
    let e = h.Z.getInputDeviceId(),
      t = h.Z.getInputDevices(),
      n = a().find(t, t => {
        let {
          id: n
        } = t;
        return n === e
      }),
      i = h.Z.getOutputDeviceId(),
      r = h.Z.getOutputDevices(),
      s = a().find(r, e => {
        let {
          id: t
        } = e;
        return t === i
      }),
      {
        threshold: l,
        autoThreshold: o
      } = h.Z.getModeOptions(),
      c = h.Z.getInputVolume(),
      d = h.Z.getOutputVolume();
    return {
      inputDevice: n,
      outputDevice: s,
      threshold: l,
      autoThreshold: o,
      inputVolume: c,
      outputVolume: d,
      inputMode: h.Z.getMode(),
      isDeafened: h.Z.isSelfDeaf()
    }
  }), b = (0, l.e7)([f.Z], () => f.Z.isConnected()), {
    ref: x,
    width: _
  } = (0, p.ZP)();
  return (0, i.jsx)(C, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        E(e, t, n[t])
      })
    }
    return e
  }({
    isVoiceConnected: b,
    inputVolume: d,
    outputVolume: u,
    inputMode: m,
    isDeafened: g,
    vadThreshold: o,
    vadAutoThreshold: c,
    inputDeviceName: null != (t = null == r ? true : r.name) ? t : "",
    outputDeviceName: null != (n = null == s ? true : s.name) ? n : "",
    measureButtonRef: x,
    buttonMinWidth: _
  }, e))
}