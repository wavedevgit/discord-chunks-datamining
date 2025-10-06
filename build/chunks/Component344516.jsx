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
  Chunk191809 = require("./191809.js"),
  Chunk10198 = require("./10198.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class Z extends Chunk647438.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      className: Chunk10198.marginBottom4,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.I1Zuq6),
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
      label: Chunk388032.intl.string(Chunk388032.t["sqUm+v"]),
      hideLabel: true
    })
  }
  render() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk10198.marginBottom20,
      children: (0, Chunk951288.jsxs)(Chunk481060.NIc, {
        label: Chunk388032.intl.string(Chunk388032.t["sqUm+v"]),
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

function b(e) {
  let t, {
      mediaEngineContext: n,
      speaking: i = false
    } = e,
    {
      inputVolume: h,
      outputVolume: c,
      inputMode: m,
      shortcut: C,
      vadThreshold: T,
      vadAutoThreshold: b,
      delay: M
    } = (0, s.cj)([g.Z], () => ({
      inputVolume: g.Z.getInputVolume(),
      outputVolume: g.Z.getOutputVolume(),
      inputMode: g.Z.getMode(n),
      shortcut: g.Z.getModeOptions(n).shortcut,
      vadThreshold: g.Z.getModeOptions(n).threshold,
      vadAutoThreshold: g.Z.getModeOptions(n).autoThreshold,
      delay: g.Z.getModeOptions(n).delay
    })),
    v = [{
      value: x.pM4.VOICE_ACTIVITY,
      name: j.intl.string(j.t.cHCEOD)
    }, {
      value: x.pM4.PUSH_TO_TALK,
      name: j.intl.string(j.t.Q8gkVF)
    }];
  return t = m === x.pM4.PUSH_TO_TALK ? (0, l.jsxs)(o.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(o.NIc, {
      label: j.intl.string(j.t.YkDjVF),
      children: (0, l.jsx)(d.Z, {
        defaultValue: C,
        onChange: e => r.Z.setMode(m, {
          shortcut: e
        }, n)
      })
    }), (0, l.jsx)(o.iRW, {
      label: j.intl.string(j.t.y0ShVl),
      initialValue: M,
      onValueChange: e => r.Z.setMode(m, {
        delay: e
      }, n),
      onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
      maxValue: x.qhL
    })]
  }) : (0, l.jsx)(Z, {
    speaking: i,
    inputMode: m,
    threshold: T,
    autoThreshold: b,
    onThresholdChange: (e, t) => r.Z.setMode(m, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, l.jsxs)(o.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(u.j, {
      label: j.intl.string(j.t.hHMYbW),
      deviceType: V.h7.AUDIO_INPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(o.iRW, {
      label: j.intl.string(j.t.OX2Bnp),
      initialValue: (0, p.P)(h),
      asValueChanges: e => r.Z.setInputVolume((0, p.A)(e))
    }), (0, l.jsx)(u.j, {
      label: j.intl.string(j.t.dl18zc),
      deviceType: V.h7.AUDIO_OUTPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(o.iRW, {
      label: j.intl.string(j.t.eATD2N),
      initialValue: (0, p.P)(c),
      maxValue: 200,
      asValueChanges: e => r.Z.setOutputVolume((0, p.A)(e))
    }), (0, l.jsx)(a.E, {
      label: j.intl.string(j.t["pS+K2N"]),
      onChange: e => r.Z.setMode(e, {}, n),
      options: v,
      value: m
    }), t]
  })
}

function M(e) {
  var t;
  return (0, c.Z)(() => {
    null != x.e3s && e.onClose()
  }), (0, l.jsxs)(o.Y0X, {
    transitionState: e.transitionState,
    "aria-label": j.intl.string(j.t.NiTd0d),
    parentComponent: "VoiceSettingsModal",
    children: [(0, l.jsxs)(o.xBx, {
      children: [(0, l.jsxs)(h.Z.Child, {
        children: [(0, l.jsx)(o.vwX, {
          tag: "h1",
          className: C.marginReset,
          children: j.intl.string(j.t.NiTd0d)
        }), (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: m.title,
          children: e.title
        })]
      }), (0, l.jsx)(h.Z.Child, {
        grow: 0,
        children: (0, l.jsx)(o.olH, {
          onClick: e.onClose
        })
      })]
    }), (0, l.jsx)(o.hzk, {
      children: (0, l.jsx)(b, {
        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : V.Yn.DEFAULT
      })
    })]
  })
}