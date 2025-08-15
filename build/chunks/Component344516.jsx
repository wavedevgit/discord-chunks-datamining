/** Chunk was on 66063 **/
/** chunk id: 344516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = (0, Chunk313201.hQ)(),
  Z = (0, Chunk313201.hQ)(),
  M = (0, Chunk313201.hQ)();
class b extends Chunk647438.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: t => (0, i.jsxs)(d.Z, {
        className: C.marginBottom4,
        children: [(0, i.jsx)(a.vwX, {
          tag: a.RB0.H3,
          children: (0, i.jsx)("label", {
            htmlFor: t,
            children: j.intl.string(j.t.I1Zuq6)
          })
        }), (0, i.jsx)(a.rsf, {
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

function A(e) {
  let t, {
      mediaEngineContext: n,
      speaking: d = false
    } = e,
    {
      inputVolume: h,
      outputVolume: u,
      inputMode: V,
      shortcut: T,
      vadThreshold: A,
      vadAutoThreshold: N,
      delay: O
    } = (0, s.cj)([g.Z], () => ({
      inputVolume: g.Z.getInputVolume(),
      outputVolume: g.Z.getOutputVolume(),
      inputMode: g.Z.getMode(n),
      shortcut: g.Z.getModeOptions(n).shortcut,
      vadThreshold: g.Z.getModeOptions(n).threshold,
      vadAutoThreshold: g.Z.getModeOptions(n).autoThreshold,
      delay: g.Z.getModeOptions(n).delay
    })),
    B = [{
      value: m.pM4.VOICE_ACTIVITY,
      name: j.intl.string(j.t.cHCEOD)
    }, {
      value: m.pM4.PUSH_TO_TALK,
      name: j.intl.string(j.t.Q8gkVF)
    }];
  return t = V === m.pM4.PUSH_TO_TALK ? (0, i.jsxs)(l.Fragment, {
    children: [(0, i.jsx)(a.xJW, {
      title: j.intl.string(j.t.YkDjVF),
      className: C.marginBottom20,
      children: (0, i.jsx)(o.Z, {
        defaultValue: T,
        onChange: e => r.Z.setMode(V, {
          shortcut: e
        }, n)
      })
    }), (0, i.jsxs)(a.xJW, {
      className: C.marginBottom8,
      children: [(0, i.jsx)(a.vwX, {
        id: v,
        children: j.intl.string(j.t.y0ShVl)
      }), (0, i.jsx)(a.iRW, {
        initialValue: O,
        onValueChange: e => r.Z.setMode(V, {
          delay: e
        }, n),
        onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
        maxValue: m.qhL,
        "aria-labelledby": v
      })]
    })]
  }) : (0, i.jsx)(b, {
    speaking: d,
    inputMode: V,
    threshold: A,
    autoThreshold: N,
    onThresholdChange: (e, t) => r.Z.setMode(V, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, i.jsxs)(l.Fragment, {
    children: [(0, i.jsx)(a.xJW, {
      title: j.intl.string(j.t.hHMYbW),
      className: C.marginBottom20,
      children: (0, i.jsx)(c.j, {
        deviceType: p.h7.AUDIO_INPUT,
        location: "VoiceSettingsModal"
      })
    }), (0, i.jsxs)(a.xJW, {
      className: C.marginBottom20,
      children: [(0, i.jsx)(a.vwX, {
        id: Z,
        children: j.intl.string(j.t.OX2Bnp)
      }), (0, i.jsx)(a.iRW, {
        initialValue: (0, x.P)(h),
        asValueChanges: e => r.Z.setInputVolume((0, x.A)(e)),
        "aria-labelledby": Z
      })]
    }), (0, i.jsx)(a.xJW, {
      title: j.intl.string(j.t.dl18zc),
      className: C.marginBottom20,
      children: (0, i.jsx)(c.j, {
        deviceType: p.h7.AUDIO_OUTPUT,
        location: "VoiceSettingsModal"
      })
    }), (0, i.jsxs)(a.xJW, {
      className: C.marginBottom20,
      children: [(0, i.jsx)(a.vwX, {
        id: M,
        children: j.intl.string(j.t.eATD2N)
      }), (0, i.jsx)(a.iRW, {
        initialValue: (0, x.P)(u),
        maxValue: 200,
        asValueChanges: e => r.Z.setOutputVolume((0, x.A)(e)),
        "aria-labelledby": M
      })]
    }), (0, i.jsx)(a.xJW, {
      title: j.intl.string(j.t["pS+K2N"]),
      className: C.marginBottom20,
      children: (0, i.jsx)(a.FXm, {
        onChange: e => {
          let {
            value: t
          } = e;
          return r.Z.setMode(t, {}, n)
        },
        options: B,
        value: V
      })
    }), t]
  })
}

function N(e) {
  var t;
  return (0, u.Z)(() => {
    null != m.e3s && e.onClose()
  }), (0, i.jsxs)(a.Y0X, {
    transitionState: e.transitionState,
    "aria-label": j.intl.string(j.t.NiTd0d),
    parentComponent: "VoiceSettingsModal",
    children: [(0, i.jsxs)(a.xBx, {
      children: [(0, i.jsxs)(d.Z.Child, {
        children: [(0, i.jsx)(a.vwX, {
          tag: "h1",
          className: C.marginReset,
          children: j.intl.string(j.t.NiTd0d)
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
      children: (0, i.jsx)(A, {
        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : p.Yn.DEFAULT
      })
    })]
  })
}