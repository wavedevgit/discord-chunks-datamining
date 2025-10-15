/** Chunk was on 66063 **/
/** chunk id: 344516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk670863 = require("./670863.jsx"),
  Chunk382577 = require("./382577.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk476265 = require("./476265.js"),
  Chunk197571 = require("./197571.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class b extends Chunk647438.PureComponent {
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

function Z(e) {
  let t, {
      mediaEngineContext: n,
      speaking: l = false
    } = e,
    {
      inputVolume: h,
      outputVolume: g,
      inputMode: j,
      shortcut: C,
      vadThreshold: T,
      vadAutoThreshold: Z,
      delay: M
    } = (0, s.cj)([c.Z], () => ({
      inputVolume: c.Z.getInputVolume(),
      outputVolume: c.Z.getOutputVolume(),
      inputMode: c.Z.getMode(n),
      shortcut: c.Z.getModeOptions(n).shortcut,
      vadThreshold: c.Z.getModeOptions(n).threshold,
      vadAutoThreshold: c.Z.getModeOptions(n).autoThreshold,
      delay: c.Z.getModeOptions(n).delay
    })),
    A = [{
      value: x.pM4.VOICE_ACTIVITY,
      name: V.intl.string(V.t.cHCEOJ)
    }, {
      value: x.pM4.PUSH_TO_TALK,
      name: V.intl.string(V.t.Q8gkVL)
    }];
  return t = j === x.pM4.PUSH_TO_TALK ? (0, i.jsxs)(o.Kqy, {
    gap: 20,
    children: [(0, i.jsx)(o.gNt, {
      label: V.intl.string(V.t.YkDjVM),
      children: (0, i.jsx)(d.Z, {
        defaultValue: C,
        onChange: e => r.Z.setMode(j, {
          shortcut: e
        }, n)
      })
    }), (0, i.jsx)(o.iRW, {
      label: V.intl.string(V.t.y0ShVt),
      initialValue: M,
      onValueChange: e => r.Z.setMode(j, {
        delay: e
      }, n),
      onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
      maxValue: x.qhL
    })]
  }) : (0, i.jsx)(b, {
    speaking: l,
    inputMode: j,
    threshold: T,
    autoThreshold: Z,
    onThresholdChange: (e, t) => r.Z.setMode(j, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, i.jsxs)(o.Kqy, {
    gap: 20,
    children: [(0, i.jsx)(u.j, {
      label: V.intl.string(V.t.hHMYbb),
      deviceType: m.h7.AUDIO_INPUT,
      location: "VoiceSettingsModal"
    }), (0, i.jsx)(o.iRW, {
      label: V.intl.string(V.t.OX2Bnr),
      initialValue: (0, p.P)(h),
      asValueChanges: e => r.Z.setInputVolume((0, p.A)(e))
    }), (0, i.jsx)(u.j, {
      label: V.intl.string(V.t.dl18zb),
      deviceType: m.h7.AUDIO_OUTPUT,
      location: "VoiceSettingsModal"
    }), (0, i.jsx)(o.iRW, {
      label: V.intl.string(V.t.eATD2B),
      initialValue: (0, p.P)(g),
      maxValue: 200,
      asValueChanges: e => r.Z.setOutputVolume((0, p.A)(e))
    }), (0, i.jsx)(a.E, {
      label: V.intl.string(V.t["pS+K2L"]),
      onChange: e => r.Z.setMode(e, {}, n),
      options: A,
      value: j
    }), t]
  })
}

function M(e) {
  var t;
  return (0, g.Z)(() => {
    null != x.e3s && e.onClose()
  }), (0, i.jsxs)(o.Y0X, {
    transitionState: e.transitionState,
    "aria-label": V.intl.string(V.t.NiTd0e),
    parentComponent: "VoiceSettingsModal",
    children: [(0, i.jsxs)(o.xBx, {
      children: [(0, i.jsxs)(h.Z.Child, {
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          className: C.marginReset,
          children: V.intl.string(V.t.NiTd0e)
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: j.title,
          children: e.title
        })]
      }), (0, i.jsx)(h.Z.Child, {
        grow: 0,
        children: (0, i.jsx)(o.olH, {
          onClick: e.onClose
        })
      })]
    }), (0, i.jsx)(o.hzk, {
      children: (0, i.jsx)(Z, {
        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : m.Yn.DEFAULT
      })
    })]
  })
}