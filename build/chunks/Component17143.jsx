/** Chunk was on 6500 **/
/** chunk id: 17143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I,
  V: () => _.V
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk451988 = require("./451988.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk765671 = require("./765671.js"),
  Chunk123902 = require("./123902.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk265891 = require("./265891.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends Chunk64700.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), y.A.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: r,
      outputVolume: i,
      inputMode: l,
      vadAutoThreshold: a,
      vadThreshold: s,
      location: o,
      isDeafened: c
    } = this.props, u = false;
    e && !c && (m.A.toggleSelfDeaf(), u = true), m.A.setLoopback("mic_test", true), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: true,
      isDetectingInput: true,
      didDeafenUser: u
    }), b.default.track(h.HAw.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: n,
      output_device_name: r,
      output_device_volume: i,
      input_mode: l,
      input_sensitivity_is_automatic: a,
      input_sensitivity_threshold: Math.round(s),
      location: o
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
    t && (n && r && e && m.A.toggleSelfDeaf(), m.A.setLoopback("mic_test", false), this.setState({
      isMicTesting: false,
      didDeafenUser: false
    }), null != this._micTestStartTime && b.default.track(h.HAw.MIC_TESTING_STOPPED, {
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
    return (0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: O.Qe,
      children: n ? i ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: i,
      buttonTest: l = "",
      buttonStop: s = "",
      buttonVariant: o = "secondary",
      isDeafened: c,
      buttonMinWidth: u,
      measureButtonRef: d,
      meterOnly: m = false,
      containerClassName: g
    } = this.props, {
      isMicTesting: y,
      volume: A
    } = this.state, b = e && !y ? v.intl.string(v.t["9viE2A"]) : null;
    y && e && !c && this._micTestStop();
    let h = s.length >= l.length ? s : l;
    return (0, r.jsx)("div", {
      className: a()(O.kL, g),
      children: (0, r.jsx)(f.D0$, {
        label: null != t ? t : true,
        hideLabel: m,
        description: m ? null : n,
        children: (0, r.jsxs)("div", {
          className: O.ak,
          children: [!m && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: O.km,
              "aria-hidden": true,
              children: [(0, r.jsx)(f.Button, {
                buttonRef: d,
                size: "sm",
                variant: o,
                text: h
              }), (0, r.jsx)("div", {
                className: O.qB
              })]
            }), (0, r.jsx)(p.m, {
              text: b,
              children: (0, r.jsx)("div", {
                className: O._o,
                style: null != u ? {
                  minWidth: u
                } : {
                  visibility: "hidden"
                },
                children: (0, r.jsx)(f.Button, {
                  size: "sm",
                  variant: o,
                  text: y ? s : l,
                  onClick: this.handleToggleMicTest,
                  fullWidth: true
                })
              })
            })]
          }), (0, r.jsx)(_.A, {
            progress: y || m ? A + 100 : 0,
            notchBackground: i,
            notchClassName: this.props.notchClassName,
            children: this.renderCaption()
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), j(this, "_initTimeout", new d.Ep), j(this, "_silenceTimeout", new d.Ep), j(this, "_messageTimeout", new d.Ep), j(this, "_micTestStartTime", true), j(this, "state", {
      volume: false,
      isMicTesting: false,
      isDetectingInput: true,
      didDeafenUser: false
    }), j(this, "setupVoiceActivity", () => {
      y.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    }), j(this, "handleVoiceActivity", e => {
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
    }), j(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}

function I(e) {
  var t, n;
  let {
    inputDevice: i,
    outputDevice: l,
    threshold: a,
    autoThreshold: s,
    inputVolume: u,
    outputVolume: d,
    inputMode: p,
    isDeafened: f
  } = (0, c.cf)([y.A], () => {
    let e = y.A.getInputDeviceId(),
      t = y.A.getInputDevices(),
      n = o().find(t, t => {
        let {
          id: n
        } = t;
        return n === e
      }),
      r = y.A.getOutputDeviceId(),
      i = y.A.getOutputDevices(),
      l = o().find(i, e => {
        let {
          id: t
        } = e;
        return t === r
      }),
      {
        threshold: a,
        autoThreshold: s
      } = y.A.getModeOptions(),
      c = y.A.getInputVolume(),
      u = y.A.getOutputVolume();
    return {
      inputDevice: n,
      outputDevice: l,
      threshold: a,
      autoThreshold: s,
      inputVolume: c,
      outputVolume: u,
      inputMode: y.A.getMode(),
      isDeafened: y.A.isSelfDeaf()
    }
  }), m = (0, c.bG)([A.A], () => A.A.isConnected()), {
    ref: _,
    width: b
  } = (0, g.Ay)();
  return (0, r.jsx)(S, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        j(e, t, n[t])
      })
    }
    return e
  }({
    isVoiceConnected: m,
    inputVolume: u,
    outputVolume: d,
    inputMode: p,
    isDeafened: f,
    vadThreshold: a,
    vadAutoThreshold: s,
    inputDeviceName: null != (t = null == i ? true : i.name) ? t : "",
    outputDeviceName: null != (n = null == l ? true : l.name) ? n : "",
    measureButtonRef: _,
    buttonMinWidth: b
  }, e))
}