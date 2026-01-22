/** Chunk was on 96531 **/
/** chunk id: 880510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk625841 = require("./625841.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk824744 = require("./824744.js"),
  Chunk319437 = require("./319437.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk64700.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, l.jsx)(o.dOG, {
      label: V.intl.string(V.t.I1Zuq0),
      checked: e,
      onChange: this.handleAutoThresholdChange
    })
  }
  renderSlider() {
    let {
      autoThreshold: e,
      threshold: t
    } = this.props;
    if (!e) return (0, l.jsx)(o.Apm, {
      initialValue: t + 100,
      onValueRender: this.handleValueRender,
      onValueChange: this.handleSensitivityChange,
      label: V.intl.string(V.t["sqUm+k"]),
      hideLabel: true
    })
  }
  render() {
    return (0, l.jsx)("div", {
      className: x.SX,
      children: (0, l.jsxs)(o.D0$, {
        label: V.intl.string(V.t["sqUm+k"]),
        role: "group",
        children: [this.renderAutomaticVADToggle(), this.renderSlider()]
      })
    })
  }
  constructor(...e) {
    super(...e), T(this, "handleAutoThresholdChange", e => {
      let {
        onThresholdChange: t,
        threshold: n
      } = this.props;
      null == t || t(n, e)
    }), T(this, "handleSensitivityChange", e => {
      let {
        onThresholdChange: t,
        autoThreshold: n
      } = this.props;
      null == t || t(-((100 - e) * 1), n)
    })
  }
}

function C(e) {
  let t, {
      mediaEngineContext: n,
      speaking: i = false
    } = e,
    {
      inputVolume: a,
      outputVolume: c,
      inputMode: x,
      shortcut: T,
      vadThreshold: C,
      vadAutoThreshold: b,
      delay: j
    } = (0, s.cf)([h.A], () => ({
      inputVolume: h.A.getInputVolume(),
      outputVolume: h.A.getOutputVolume(),
      inputMode: h.A.getMode(n),
      shortcut: h.A.getModeOptions(n).shortcut,
      vadThreshold: h.A.getModeOptions(n).threshold,
      vadAutoThreshold: h.A.getModeOptions(n).autoThreshold,
      delay: h.A.getModeOptions(n).delay
    })),
    M = [{
      value: p.TBI.VOICE_ACTIVITY,
      name: V.intl.string(V.t.cHCEOJ)
    }, {
      value: p.TBI.PUSH_TO_TALK,
      name: V.intl.string(V.t.Q8gkVL)
    }];
  return t = x === p.TBI.PUSH_TO_TALK ? (0, l.jsxs)(o.BJc, {
    gap: 20,
    children: [(0, l.jsx)(o.D0$, {
      label: V.intl.string(V.t.YkDjVM),
      children: (0, l.jsx)(u.A, {
        defaultValue: T,
        onChange: e => r.A.setMode(x, {
          shortcut: e
        }, n)
      })
    }), (0, l.jsx)(o.Apm, {
      label: V.intl.string(V.t.y0ShVt),
      initialValue: j,
      onValueChange: e => r.A.setMode(x, {
        delay: e
      }, n),
      onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
      maxValue: p.IjB
    })]
  }) : (0, l.jsx)(m, {
    speaking: i,
    inputMode: x,
    threshold: C,
    autoThreshold: b,
    onThresholdChange: (e, t) => r.A.setMode(x, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, l.jsxs)(o.BJc, {
    gap: 20,
    children: [(0, l.jsx)(d.U, {
      label: V.intl.string(V.t.hHMYbb),
      deviceType: A.oh.AUDIO_INPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(o.Apm, {
      label: V.intl.string(V.t.OX2Bnr),
      initialValue: (0, g.M)(a),
      asValueChanges: e => r.A.setInputVolume((0, g.w)(e))
    }), (0, l.jsx)(d.U, {
      label: V.intl.string(V.t.dl18zb),
      deviceType: A.oh.AUDIO_OUTPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(o.Apm, {
      label: V.intl.string(V.t.eATD2B),
      initialValue: (0, g.M)(c),
      maxValue: 200,
      asValueChanges: e => r.A.setOutputVolume((0, g.w)(e))
    }), (0, l.jsx)(o.z6M, {
      label: V.intl.string(V.t["pS+K2L"]),
      onChange: e => r.A.setMode(e, {}, n),
      options: M,
      value: x
    }), t]
  })
}

function b(e) {
  var t;
  return (0, c.A)(() => {
    null != p.QCW && e.onClose()
  }), (0, l.jsx)(a.aFV, {
    title: V.intl.string(V.t.NiTd0e),
    subtitle: e.subtitle,
    actions: true,
    transitionState: e.transitionState,
    onClose: e.onClose,
    children: (0, l.jsx)(C, {
      mediaEngineContext: null != (t = e.mediaEngineContext) ? t : A.x.DEFAULT
    })
  })
}