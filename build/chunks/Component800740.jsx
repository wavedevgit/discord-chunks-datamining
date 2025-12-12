/** Chunk was on 51749 **/
/** chunk id: 800740, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk670863 = require("./670863.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk382577 = require("./382577.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class T extends Chunk473749.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.I1Zuq0),
      checked: module,
      onChange: this.handleAutoThresholdChange
    })
  }
  renderSlider() {
    let {
      autoThreshold: e,
      threshold: t
    } = this.props;
    if (!module) return (0, Chunk54381.jsx)(Chunk481060.iRW, {
      initialValue: exports + 100,
      onValueRender: this.handleValueRender,
      onValueChange: this.handleSensitivityChange,
      label: Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
      hideLabel: true
    })
  }
  render() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk197571.marginBottom20,
      children: (0, Chunk54381.jsxs)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
        role: "group",
        children: [this.renderAutomaticVADToggle(), this.renderSlider()]
      })
    })
  }
  constructor(...e) {
    super(...e), C(this, "handleAutoThresholdChange", e => {
      let {
        onThresholdChange: t,
        threshold: n
      } = this.props;
      null == t || t(n, e)
    }), C(this, "handleSensitivityChange", e => {
      let {
        onThresholdChange: t,
        autoThreshold: n
      } = this.props;
      null == t || t(-((100 - e) * 1), n)
    })
  }
}

function b(e) {
  let t, {
      mediaEngineContext: n,
      speaking: i = false
    } = e,
    {
      inputVolume: a,
      outputVolume: c,
      inputMode: m,
      shortcut: C,
      vadThreshold: b,
      vadAutoThreshold: j,
      delay: M
    } = (0, s.cj)([h.Z], () => ({
      inputVolume: h.Z.getInputVolume(),
      outputVolume: h.Z.getOutputVolume(),
      inputMode: h.Z.getMode(n),
      shortcut: h.Z.getModeOptions(n).shortcut,
      vadThreshold: h.Z.getModeOptions(n).threshold,
      vadAutoThreshold: h.Z.getModeOptions(n).autoThreshold,
      delay: h.Z.getModeOptions(n).delay
    })),
    Z = [{
      value: p.pM4.VOICE_ACTIVITY,
      name: x.intl.string(x.t.cHCEOJ)
    }, {
      value: p.pM4.PUSH_TO_TALK,
      name: x.intl.string(x.t.Q8gkVL)
    }];
  return t = m === p.pM4.PUSH_TO_TALK ? (0, l.jsxs)(o.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(o.gNt, {
      label: x.intl.string(x.t.YkDjVM),
      children: (0, l.jsx)(u.Z, {
        defaultValue: C,
        onChange: e => r.Z.setMode(m, {
          shortcut: e
        }, n)
      })
    }), (0, l.jsx)(o.iRW, {
      label: x.intl.string(x.t.y0ShVt),
      initialValue: M,
      onValueChange: e => r.Z.setMode(m, {
        delay: e
      }, n),
      onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
      maxValue: p.qhL
    })]
  }) : (0, l.jsx)(T, {
    speaking: i,
    inputMode: m,
    threshold: b,
    autoThreshold: j,
    onThresholdChange: (e, t) => r.Z.setMode(m, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, l.jsxs)(o.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(d.j, {
      label: x.intl.string(x.t.hHMYbb),
      deviceType: V.h7.AUDIO_INPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(o.iRW, {
      label: x.intl.string(x.t.OX2Bnr),
      initialValue: (0, g.P)(a),
      asValueChanges: e => r.Z.setInputVolume((0, g.A)(e))
    }), (0, l.jsx)(d.j, {
      label: x.intl.string(x.t.dl18zb),
      deviceType: V.h7.AUDIO_OUTPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(o.iRW, {
      label: x.intl.string(x.t.eATD2B),
      initialValue: (0, g.P)(c),
      maxValue: 200,
      asValueChanges: e => r.Z.setOutputVolume((0, g.A)(e))
    }), (0, l.jsx)(o.FXm, {
      label: x.intl.string(x.t["pS+K2L"]),
      onChange: e => r.Z.setMode(e, {}, n),
      options: Z,
      value: m
    }), t]
  })
}

function j(e) {
  var t;
  return (0, c.Z)(() => {
    null != p.e3s && e.onClose()
  }), (0, l.jsx)(a.u_l, {
    title: x.intl.string(x.t.NiTd0e),
    subtitle: e.subtitle,
    actions: true,
    transitionState: e.transitionState,
    onClose: e.onClose,
    children: (0, l.jsx)(b, {
      mediaEngineContext: null != (t = e.mediaEngineContext) ? t : V.Yn.DEFAULT
    })
  })
}