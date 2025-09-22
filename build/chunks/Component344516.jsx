/** Chunk was on 66063 **/
/** chunk id: 344516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
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
  Chunk476265 = require("./476265.js"),
  Chunk197571 = require("./197571.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let M = (0, Chunk313201.hQ)(),
  b = (0, Chunk313201.hQ)(),
  A = (0, Chunk313201.hQ)();
class N extends Chunk647438.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: t => (0, i.jsxs)(c.Z, {
        className: v.marginBottom4,
        children: [(0, i.jsx)(o.vwX, {
          tag: o.RB0.H3,
          children: (0, i.jsx)("label", {
            htmlFor: t,
            children: C.intl.string(C.t.I1Zuq6)
          })
        }), (0, i.jsx)(r.T2, {
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
      "aria-label": Chunk388032.intl.string(Chunk388032.t["sqUm+v"])
    })
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t["sqUm+v"]),
      className: Chunk197571.marginBottom8,
      children: [this.renderAutomaticVADToggle(), this.renderSlider()]
    })
  }
  constructor(...e) {
    super(...e), Z(this, "handleAutoThresholdChange", e => {
      let {
        onThresholdChange: t,
        threshold: n
      } = this.props;
      null == t || t(n, e)
    }), Z(this, "handleSensitivityChange", e => {
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
      speaking: r = false
    } = e,
    {
      inputVolume: c,
      outputVolume: u,
      inputMode: x,
      shortcut: T,
      vadThreshold: Z,
      vadAutoThreshold: O,
      delay: B
    } = (0, s.cj)([m.Z], () => ({
      inputVolume: m.Z.getInputVolume(),
      outputVolume: m.Z.getOutputVolume(),
      inputMode: m.Z.getMode(n),
      shortcut: m.Z.getModeOptions(n).shortcut,
      vadThreshold: m.Z.getModeOptions(n).threshold,
      vadAutoThreshold: m.Z.getModeOptions(n).autoThreshold,
      delay: m.Z.getModeOptions(n).delay
    })),
    S = [{
      value: j.pM4.VOICE_ACTIVITY,
      name: C.intl.string(C.t.cHCEOD)
    }, {
      value: j.pM4.PUSH_TO_TALK,
      name: C.intl.string(C.t.Q8gkVF)
    }];
  return t = x === j.pM4.PUSH_TO_TALK ? (0, i.jsxs)(l.Fragment, {
    children: [(0, i.jsx)(o.xJW, {
      title: C.intl.string(C.t.YkDjVF),
      className: v.marginBottom20,
      children: (0, i.jsx)(h.Z, {
        defaultValue: T,
        onChange: e => d.Z.setMode(x, {
          shortcut: e
        }, n)
      })
    }), (0, i.jsxs)("div", {
      className: v.marginBottom8,
      children: [(0, i.jsx)(o.vwX, {
        id: M,
        children: C.intl.string(C.t.y0ShVl)
      }), (0, i.jsx)(o.iRW, {
        initialValue: B,
        onValueChange: e => d.Z.setMode(x, {
          delay: e
        }, n),
        onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
        maxValue: j.qhL,
        "aria-labelledby": M
      })]
    })]
  }) : (0, i.jsx)(N, {
    speaking: r,
    inputMode: x,
    threshold: Z,
    autoThreshold: O,
    onThresholdChange: (e, t) => d.Z.setMode(x, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, i.jsxs)(l.Fragment, {
    children: [(0, i.jsx)(o.xJW, {
      title: C.intl.string(C.t.hHMYbW),
      className: v.marginBottom20,
      children: (0, i.jsx)(g.j, {
        deviceType: V.h7.AUDIO_INPUT,
        location: "VoiceSettingsModal"
      })
    }), (0, i.jsxs)("div", {
      className: v.marginBottom20,
      children: [(0, i.jsx)(o.vwX, {
        id: b,
        children: C.intl.string(C.t.OX2Bnp)
      }), (0, i.jsx)(o.iRW, {
        initialValue: (0, p.P)(c),
        asValueChanges: e => d.Z.setInputVolume((0, p.A)(e)),
        "aria-labelledby": b
      })]
    }), (0, i.jsx)(o.xJW, {
      title: C.intl.string(C.t.dl18zc),
      className: v.marginBottom20,
      children: (0, i.jsx)(g.j, {
        deviceType: V.h7.AUDIO_OUTPUT,
        location: "VoiceSettingsModal"
      })
    }), (0, i.jsxs)("div", {
      className: v.marginBottom20,
      children: [(0, i.jsx)(o.vwX, {
        id: A,
        children: C.intl.string(C.t.eATD2N)
      }), (0, i.jsx)(o.iRW, {
        initialValue: (0, p.P)(u),
        maxValue: 200,
        asValueChanges: e => d.Z.setOutputVolume((0, p.A)(e)),
        "aria-labelledby": A
      })]
    }), (0, i.jsx)(o.xJW, {
      title: C.intl.string(C.t["pS+K2N"]),
      className: v.marginBottom20,
      children: (0, i.jsx)(a.E, {
        onChange: e => d.Z.setMode(e, {}, n),
        options: S,
        value: x
      })
    }), t]
  })
}

function B(e) {
  var t;
  return (0, x.Z)(() => {
    null != j.e3s && e.onClose()
  }), (0, i.jsxs)(o.Y0X, {
    transitionState: e.transitionState,
    "aria-label": C.intl.string(C.t.NiTd0d),
    parentComponent: "VoiceSettingsModal",
    children: [(0, i.jsxs)(o.xBx, {
      children: [(0, i.jsxs)(c.Z.Child, {
        children: [(0, i.jsx)(o.vwX, {
          tag: "h1",
          className: v.marginReset,
          children: C.intl.string(C.t.NiTd0d)
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: T.title,
          children: e.title
        })]
      }), (0, i.jsx)(c.Z.Child, {
        grow: 0,
        children: (0, i.jsx)(o.olH, {
          onClick: e.onClose
        })
      })]
    }), (0, i.jsx)(o.hzk, {
      children: (0, i.jsx)(O, {
        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : V.Yn.DEFAULT
      })
    })]
  })
}