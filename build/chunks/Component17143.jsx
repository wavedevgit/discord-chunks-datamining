/** Chunk was on 40198 **/
/** chunk id: 17143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  V: () => g.V
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class x extends Chunk64700.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), v.A.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: i,
      outputVolume: r,
      inputMode: o,
      vadAutoThreshold: s,
      vadThreshold: l,
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
      input_sensitivity_is_automatic: s,
      input_sensitivity_threshold: Math.round(l),
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
      className: _.Qe,
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
      buttonStop: l = "",
      buttonVariant: c = "secondary",
      isDeafened: a,
      buttonMinWidth: u,
      measureButtonRef: p,
      meterOnly: m = false,
      containerClassName: f
    } = this.props, {
      isMicTesting: v,
      volume: b
    } = this.state, O = e && !v ? j.intl.string(j.t["9viE2A"]) : null;
    v && e && !a && this._micTestStop();
    let y = l.length >= o.length ? l : o;
    return (0, i.jsx)("div", {
      className: s()(_.kL, f),
      children: (0, i.jsx)(h.D0$, {
        label: null != t ? t : true,
        hideLabel: m,
        description: m ? null : n,
        children: (0, i.jsxs)("div", {
          className: _.ak,
          children: [!m && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
              className: _.km,
              "aria-hidden": true,
              children: [(0, i.jsx)(h.Button, {
                buttonRef: p,
                size: "sm",
                variant: c,
                text: y
              }), (0, i.jsx)("div", {
                className: _.qB
              })]
            }), (0, i.jsx)(d.m, {
              text: O,
              children: (0, i.jsx)("div", {
                className: _._o,
                style: null != u ? {
                  minWidth: u
                } : {
                  visibility: "hidden"
                },
                children: (0, i.jsx)(h.Button, {
                  size: "sm",
                  variant: c,
                  text: v ? l : o,
                  onClick: this.handleToggleMicTest,
                  fullWidth: true
                })
              })
            })]
          }), (0, i.jsx)(g.A, {
            progress: v || m ? b + 100 : 0,
            notchBackground: r,
            notchClassName: this.props.notchClassName,
            children: this.renderCaption()
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), D(this, "_initTimeout", new p.Ep), D(this, "_silenceTimeout", new p.Ep), D(this, "_messageTimeout", new p.Ep), D(this, "_micTestStartTime", true), D(this, "state", {
      volume: false,
      isMicTesting: false,
      isDetectingInput: true,
      didDeafenUser: false
    }), D(this, "setupVoiceActivity", () => {
      v.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity)
    }), D(this, "handleVoiceActivity", e => {
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
    }), D(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}

function A(e) {
  var t, n;
  let {
    inputDevice: r,
    outputDevice: o,
    threshold: s,
    autoThreshold: l,
    inputVolume: u,
    outputVolume: p,
    inputMode: d,
    isDeafened: h
  } = (0, a.cf)([v.A], () => {
    let e = v.A.getInputDeviceId(),
      t = v.A.getInputDevices(),
      n = c().find(t, t => {
        let {
          id: n
        } = t;
        return n === e
      }),
      i = v.A.getOutputDeviceId(),
      r = v.A.getOutputDevices(),
      o = c().find(r, e => {
        let {
          id: t
        } = e;
        return t === i
      }),
      {
        threshold: s,
        autoThreshold: l
      } = v.A.getModeOptions(),
      a = v.A.getInputVolume(),
      u = v.A.getOutputVolume();
    return {
      inputDevice: n,
      outputDevice: o,
      threshold: s,
      autoThreshold: l,
      inputVolume: a,
      outputVolume: u,
      inputMode: v.A.getMode(),
      isDeafened: v.A.isSelfDeaf()
    }
  }), m = (0, a.bG)([b.A], () => b.A.isConnected()), {
    ref: g,
    width: O
  } = (0, f.Ay)();
  return (0, i.jsx)(x, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        D(e, t, n[t])
      })
    }
    return e
  }({
    isVoiceConnected: m,
    inputVolume: u,
    outputVolume: p,
    inputMode: d,
    isDeafened: h,
    vadThreshold: s,
    vadAutoThreshold: l,
    inputDeviceName: null != (t = null == r ? true : r.name) ? t : "",
    outputDeviceName: null != (n = null == o ? true : o.name) ? n : "",
    measureButtonRef: g,
    buttonMinWidth: O
  }, e))
}