/** Chunk was on 66063 **/
/** chunk id: 344516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk19217 = require("./19217.jsx"),
  Chunk886025 = require("./886025.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk382577 = require("./382577.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk191809 = require("./191809.js"),
  Chunk10198 = require("./10198.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class A extends Chunk647438.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: t => (0, l.jsxs)(g.Z, {
        className: M.marginBottom4,
        children: [(0, l.jsx)(h.vwX, {
          tag: h.RB0.H3,
          children: (0, l.jsx)("label", {
            htmlFor: t,
            children: Z.intl.string(Z.t.I1Zuq6)
          })
        }), (0, l.jsx)(d.T2, {
          id: t,
          checked: e,
          onChange: this.handleAutoThresholdChange
        })]
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
    return (0, Chunk951288.jsxs)(Chunk19217.C, {
      label: Chunk388032.intl.string(Chunk388032.t["sqUm+v"]),
      className: Chunk10198.marginBottom20,
      children: [this.renderAutomaticVADToggle(), this.renderSlider()]
    })
  }
  constructor(...e) {
    super(...e), v(this, "handleAutoThresholdChange", e => {
      let {
        onThresholdChange: t,
        threshold: n
      } = this.props;
      null == t || t(n, e)
    }), v(this, "handleSensitivityChange", e => {
      let {
        onThresholdChange: t,
        autoThreshold: n
      } = this.props;
      null == t || t(-((100 - e) * 1), n)
    })
  }
}

function O(e) {
  let t, {
      mediaEngineContext: n,
      speaking: i = false
    } = e,
    {
      inputVolume: o,
      outputVolume: d,
      inputMode: g,
      shortcut: p,
      vadThreshold: j,
      vadAutoThreshold: b,
      delay: M
    } = (0, s.cj)([m.Z], () => ({
      inputVolume: m.Z.getInputVolume(),
      outputVolume: m.Z.getOutputVolume(),
      inputMode: m.Z.getMode(n),
      shortcut: m.Z.getModeOptions(n).shortcut,
      vadThreshold: m.Z.getModeOptions(n).threshold,
      vadAutoThreshold: m.Z.getModeOptions(n).autoThreshold,
      delay: m.Z.getModeOptions(n).delay
    })),
    v = [{
      value: C.pM4.VOICE_ACTIVITY,
      name: Z.intl.string(Z.t.cHCEOD)
    }, {
      value: C.pM4.PUSH_TO_TALK,
      name: Z.intl.string(Z.t.Q8gkVF)
    }];
  return t = g === C.pM4.PUSH_TO_TALK ? (0, l.jsxs)(h.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(r.N, {
      label: Z.intl.string(Z.t.YkDjVF),
      children: (0, l.jsx)(c.Z, {
        defaultValue: p,
        onChange: e => u.Z.setMode(g, {
          shortcut: e
        }, n)
      })
    }), (0, l.jsx)(h.iRW, {
      label: Z.intl.string(Z.t.y0ShVl),
      initialValue: M,
      onValueChange: e => u.Z.setMode(g, {
        delay: e
      }, n),
      onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
      maxValue: C.qhL
    })]
  }) : (0, l.jsx)(A, {
    speaking: i,
    inputMode: g,
    threshold: j,
    autoThreshold: b,
    onThresholdChange: (e, t) => u.Z.setMode(g, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, l.jsxs)(h.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(x.j, {
      label: Z.intl.string(Z.t.hHMYbW),
      deviceType: T.h7.AUDIO_INPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(h.iRW, {
      label: Z.intl.string(Z.t.OX2Bnp),
      initialValue: (0, V.P)(o),
      asValueChanges: e => u.Z.setInputVolume((0, V.A)(e))
    }), (0, l.jsx)(x.j, {
      label: Z.intl.string(Z.t.dl18zc),
      deviceType: T.h7.AUDIO_OUTPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(h.iRW, {
      label: Z.intl.string(Z.t.eATD2N),
      initialValue: (0, V.P)(d),
      maxValue: 200,
      asValueChanges: e => u.Z.setOutputVolume((0, V.A)(e))
    }), (0, l.jsx)(a.E, {
      label: Z.intl.string(Z.t["pS+K2N"]),
      onChange: e => u.Z.setMode(e, {}, n),
      options: v,
      value: g
    }), t]
  })
}

function S(e) {
  var t;
  return (0, j.Z)(() => {
    null != C.e3s && e.onClose()
  }), (0, l.jsxs)(h.Y0X, {
    transitionState: e.transitionState,
    "aria-label": Z.intl.string(Z.t.NiTd0d),
    parentComponent: "VoiceSettingsModal",
    children: [(0, l.jsxs)(h.xBx, {
      children: [(0, l.jsxs)(g.Z.Child, {
        children: [(0, l.jsx)(h.vwX, {
          tag: "h1",
          className: M.marginReset,
          children: Z.intl.string(Z.t.NiTd0d)
        }), (0, l.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: b.title,
          children: e.title
        })]
      }), (0, l.jsx)(g.Z.Child, {
        grow: 0,
        children: (0, l.jsx)(h.olH, {
          onClick: e.onClose
        })
      })]
    }), (0, l.jsx)(h.hzk, {
      children: (0, l.jsx)(O, {
        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : T.Yn.DEFAULT
      })
    })]
  })
}