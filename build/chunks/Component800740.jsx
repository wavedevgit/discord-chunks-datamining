/** Chunk was on 51749 **/
/** chunk id: 800740, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk670863 = require("./670863.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk382577 = require("./382577.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607180 = require("./607180.js"),
  Chunk197571 = require("./197571.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class T extends Chunk647438.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      className: Chunk197571.marginBottom4,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.I1Zuq0),
        checked: module,
        onChange: this.handleAutoThresholdChange
      })
    })
  }
  renderSlider() {
    let {
      autoThreshold: e,
      threshold: t
    } = this.props;
    if (!module) return (0, Chunk951288.jsx)(Chunk481060.iRW, {
      initialValue: exports + 100,
      onValueRender: this.handleValueRender,
      onValueChange: this.handleSensitivityChange,
      label: Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
      hideLabel: true
    })
  }
  render() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk197571.marginBottom20,
      children: (0, Chunk951288.jsxs)(Chunk481060.gNt, {
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
      speaking: l = false
    } = e,
    {
      inputVolume: d,
      outputVolume: c,
      inputMode: V,
      shortcut: j,
      vadThreshold: C,
      vadAutoThreshold: b,
      delay: Z
    } = (0, s.cj)([u.Z], () => ({
      inputVolume: u.Z.getInputVolume(),
      outputVolume: u.Z.getOutputVolume(),
      inputMode: u.Z.getMode(n),
      shortcut: u.Z.getModeOptions(n).shortcut,
      vadThreshold: u.Z.getModeOptions(n).threshold,
      vadAutoThreshold: u.Z.getModeOptions(n).autoThreshold,
      delay: u.Z.getModeOptions(n).delay
    })),
    M = [{
      value: p.pM4.VOICE_ACTIVITY,
      name: m.intl.string(m.t.cHCEOJ)
    }, {
      value: p.pM4.PUSH_TO_TALK,
      name: m.intl.string(m.t.Q8gkVL)
    }];
  return t = V === p.pM4.PUSH_TO_TALK ? (0, i.jsxs)(a.Kqy, {
    gap: 20,
    children: [(0, i.jsx)(a.gNt, {
      label: m.intl.string(m.t.YkDjVM),
      children: (0, i.jsx)(r.Z, {
        defaultValue: j,
        onChange: e => o.Z.setMode(V, {
          shortcut: e
        }, n)
      })
    }), (0, i.jsx)(a.iRW, {
      label: m.intl.string(m.t.y0ShVt),
      initialValue: Z,
      onValueChange: e => o.Z.setMode(V, {
        delay: e
      }, n),
      onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
      maxValue: p.qhL
    })]
  }) : (0, i.jsx)(T, {
    speaking: l,
    inputMode: V,
    threshold: C,
    autoThreshold: b,
    onThresholdChange: (e, t) => o.Z.setMode(V, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, i.jsxs)(a.Kqy, {
    gap: 20,
    children: [(0, i.jsx)(h.j, {
      label: m.intl.string(m.t.hHMYbb),
      deviceType: x.h7.AUDIO_INPUT,
      location: "VoiceSettingsModal"
    }), (0, i.jsx)(a.iRW, {
      label: m.intl.string(m.t.OX2Bnr),
      initialValue: (0, g.P)(d),
      asValueChanges: e => o.Z.setInputVolume((0, g.A)(e))
    }), (0, i.jsx)(h.j, {
      label: m.intl.string(m.t.dl18zb),
      deviceType: x.h7.AUDIO_OUTPUT,
      location: "VoiceSettingsModal"
    }), (0, i.jsx)(a.iRW, {
      label: m.intl.string(m.t.eATD2B),
      initialValue: (0, g.P)(c),
      maxValue: 200,
      asValueChanges: e => o.Z.setOutputVolume((0, g.A)(e))
    }), (0, i.jsx)(a.FXm, {
      label: m.intl.string(m.t["pS+K2L"]),
      onChange: e => o.Z.setMode(e, {}, n),
      options: M,
      value: V
    }), t]
  })
}

function Z(e) {
  var t;
  return (0, c.Z)(() => {
    null != p.e3s && e.onClose()
  }), (0, i.jsxs)(a.Y0X, {
    transitionState: e.transitionState,
    "aria-label": m.intl.string(m.t.NiTd0e),
    parentComponent: "VoiceSettingsModal",
    children: [(0, i.jsxs)(a.xBx, {
      children: [(0, i.jsxs)(d.Z.Child, {
        children: [(0, i.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          className: j.marginReset,
          children: m.intl.string(m.t.NiTd0e)
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          className: V.title,
          children: e.title
        })]
      }), (0, i.jsx)(d.Z.Child, {
        grow: 0,
        children: (0, i.jsx)(a.olH, {
          onClick: e.onClose
        })
      })]
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsx)(b, {
        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : x.Yn.DEFAULT
      })
    })]
  })
}