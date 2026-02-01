/** Chunk was on 36059 **/
/** chunk id: 17143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  V: () => v.V
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  c = require.n(Chunk735438),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk64700.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), g.A.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: i,
      outputVolume: r,
      inputMode: o,
      vadAutoThreshold: l,
      vadThreshold: s,
      location: c,
      isDeafened: a
    } = this.props, u = false;
    e && !a && (m.A.toggleSelfDeaf(), u = true), m.A.setLoopback("mic_test", true), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: true,
      isDetectingInput: true,
      didDeafenUser: u
    }), O.default.track(y.HAw.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: n,
      output_device_name: i,
      output_device_volume: r,
      input_mode: o,
      input_sensitivity_is_automatic: l,
      input_sensitivity_threshold: Math.round(s),
      location: c
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
    t && (n && i && e && m.A.toggleSelfDeaf(), m.A.setLoopback("mic_test", false), this.setState({
      isMicTesting: false,
      didDeafenUser: false
    }), null != this._micTestStartTime && O.default.track(y.HAw.MIC_TESTING_STOPPED, {
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
    return (0, i.jsx)(h.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: x.Qe,
      children: n ? r ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: r,
      buttonTest: o = "",
      buttonStop: s = "",
      buttonVariant: c = "secondary",
      isDeafened: a,
      buttonMinWidth: u,
      measureButtonRef: d,
      meterOnly: m = false,
      containerClassName: f
    } = this.props, {
      isMicTesting: g,
      volume: b
    } = this.state, O = e && !g ? j.intl.string(j.t["9viE2A"]) : null;
    g && e && !a && this._micTestStop();
    let y = s.length >= o.length ? s : o;
    return (0, i.jsx)("div", {
      className: l()(x.kL, f),
      children: (0, i.jsx)(h.D0$, {
        label: null != t ? t : true,
        hideLabel: m,
        description: m ? null : n,
        children: (0, i.jsxs)("div", {
          className: x.ak,
          children: [!m && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
              className: x.km,
              "aria-hidden": true,
              children: [(0, i.jsx)(h.Button, {
                buttonRef: d,
                size: "sm",
                variant: c,
                text: y
              }), (0, i.jsx)("div", {
                className: x.qB
              })]
            }), (0, i.jsx)(p.m, {
              text: O,
              children: (0, i.jsx)("div", {
                className: x._o,
                style: null != u ? {
                  minWidth: u
                } : {
                  visibility: "hidden"
                },
                children: (0, i.jsx)(h.Button, {
                  size: "sm",
                  variant: c,
                  text: g ? s : o,
                  onClick: this.handleToggleMicTest,
                  fullWidth: true
                })
              })
            })]
          }), (0, i.jsx)(v.A, {
            progress: g || m ? b + 100 : 0,
            notchBackground: r,
            notchClassName: this.props.notchClassName,
            children: this.renderCaption()
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), w(this, "_initTimeout", new d.Ep), w(this, "_silenceTimeout", new d.Ep), w(this, "_messageTimeout", new d.Ep), w(this, "_micTestStartTime", true), w(this, "state", {
      volume: false,
      isMicTesting: false,
      isDetectingInput: true,
      didDeafenUser: false
    }), w(this, "setupVoiceActivity", () => {
      g.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    }), w(this, "handleVoiceActivity", e => {
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
    }), w(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}

function A(e) {
  var t, n;
  let {
    inputDevice: r,
    outputDevice: o,
    threshold: l,
    autoThreshold: s,
    inputVolume: u,
    outputVolume: d,
    inputMode: p,
    isDeafened: h
  } = (0, a.cf)([g.A], () => {
    let e = g.A.getInputDeviceId(),
      t = g.A.getInputDevices(),
      n = c().find(t, t => {
        let {
          id: n
        } = t;
        return n === e
      }),
      i = g.A.getOutputDeviceId(),
      r = g.A.getOutputDevices(),
      o = c().find(r, e => {
        let {
          id: t
        } = e;
        return t === i
      }),
      {
        threshold: l,
        autoThreshold: s
      } = g.A.getModeOptions(),
      a = g.A.getInputVolume(),
      u = g.A.getOutputVolume();
    return {
      inputDevice: n,
      outputDevice: o,
      threshold: l,
      autoThreshold: s,
      inputVolume: a,
      outputVolume: u,
      inputMode: g.A.getMode(),
      isDeafened: g.A.isSelfDeaf()
    }
  }), m = (0, a.bG)([b.A], () => b.A.isConnected()), {
    ref: v,
    width: O
  } = (0, f.Ay)();
  return (0, i.jsx)(_, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        w(e, t, n[t])
      })
    }
    return e
  }({
    isVoiceConnected: m,
    inputVolume: u,
    outputVolume: d,
    inputMode: p,
    isDeafened: h,
    vadThreshold: l,
    vadAutoThreshold: s,
    inputDeviceName: null != (t = null == r ? true : r.name) ? t : "",
    outputDeviceName: null != (n = null == o ? true : o.name) ? n : "",
    measureButtonRef: v,
    buttonMinWidth: O
  }, e))
}