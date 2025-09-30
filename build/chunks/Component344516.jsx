/** Chunk was on 66063 **/
/** chunk id: 344516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
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
  Chunk476265 = require("./476265.js"),
  Chunk197571 = require("./197571.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class M extends Chunk647438.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: t => (0, l.jsxs)(c.Z, {
        className: b.marginBottom4,
        children: [(0, l.jsx)(d.vwX, {
          tag: d.RB0.H3,
          children: (0, l.jsx)("label", {
            htmlFor: t,
            children: T.intl.string(T.t.I1Zuq6)
          })
        }), (0, l.jsx)(r.T2, {
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
    return (0, Chunk951288.jsx)("div", {
      className: Chunk197571.marginBottom20,
      children: (0, Chunk951288.jsxs)(Chunk886025.N, {
        label: Chunk388032.intl.string(Chunk388032.t["sqUm+v"]),
        role: "group",
        children: [this.renderAutomaticVADToggle(), this.renderSlider()]
      })
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

function A(e) {
  let t, {
      mediaEngineContext: n,
      speaking: i = false
    } = e,
    {
      inputVolume: r,
      outputVolume: c,
      inputMode: g,
      shortcut: x,
      vadThreshold: Z,
      vadAutoThreshold: b,
      delay: v
    } = (0, s.cj)([j.Z], () => ({
      inputVolume: j.Z.getInputVolume(),
      outputVolume: j.Z.getOutputVolume(),
      inputMode: j.Z.getMode(n),
      shortcut: j.Z.getModeOptions(n).shortcut,
      vadThreshold: j.Z.getModeOptions(n).threshold,
      vadAutoThreshold: j.Z.getModeOptions(n).autoThreshold,
      delay: j.Z.getModeOptions(n).delay
    })),
    A = [{
      value: V.pM4.VOICE_ACTIVITY,
      name: T.intl.string(T.t.cHCEOD)
    }, {
      value: V.pM4.PUSH_TO_TALK,
      name: T.intl.string(T.t.Q8gkVF)
    }];
  return t = g === V.pM4.PUSH_TO_TALK ? (0, l.jsxs)(d.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(o.N, {
      label: T.intl.string(T.t.YkDjVF),
      children: (0, l.jsx)(u.Z, {
        defaultValue: x,
        onChange: e => h.Z.setMode(g, {
          shortcut: e
        }, n)
      })
    }), (0, l.jsx)(d.iRW, {
      label: T.intl.string(T.t.y0ShVl),
      initialValue: v,
      onValueChange: e => h.Z.setMode(g, {
        delay: e
      }, n),
      onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
      maxValue: V.qhL
    })]
  }) : (0, l.jsx)(M, {
    speaking: i,
    inputMode: g,
    threshold: Z,
    autoThreshold: b,
    onThresholdChange: (e, t) => h.Z.setMode(g, {
      threshold: e,
      autoThreshold: t
    }, n)
  }), (0, l.jsxs)(d.Kqy, {
    gap: 20,
    children: [(0, l.jsx)(p.j, {
      label: T.intl.string(T.t.hHMYbW),
      deviceType: C.h7.AUDIO_INPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(d.iRW, {
      label: T.intl.string(T.t.OX2Bnp),
      initialValue: (0, m.P)(r),
      asValueChanges: e => h.Z.setInputVolume((0, m.A)(e))
    }), (0, l.jsx)(p.j, {
      label: T.intl.string(T.t.dl18zc),
      deviceType: C.h7.AUDIO_OUTPUT,
      location: "VoiceSettingsModal"
    }), (0, l.jsx)(d.iRW, {
      label: T.intl.string(T.t.eATD2N),
      initialValue: (0, m.P)(c),
      maxValue: 200,
      asValueChanges: e => h.Z.setOutputVolume((0, m.A)(e))
    }), (0, l.jsx)(a.E, {
      label: T.intl.string(T.t["pS+K2N"]),
      onChange: e => h.Z.setMode(e, {}, n),
      options: A,
      value: g
    }), t]
  })
}

function O(e) {
  var t;
  return (0, x.Z)(() => {
    null != V.e3s && e.onClose()
  }), (0, l.jsxs)(d.Y0X, {
    transitionState: e.transitionState,
    "aria-label": T.intl.string(T.t.NiTd0d),
    parentComponent: "VoiceSettingsModal",
    children: [(0, l.jsxs)(d.xBx, {
      children: [(0, l.jsxs)(c.Z.Child, {
        children: [(0, l.jsx)(d.vwX, {
          tag: "h1",
          className: b.marginReset,
          children: T.intl.string(T.t.NiTd0d)
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: Z.title,
          children: e.title
        })]
      }), (0, l.jsx)(c.Z.Child, {
        grow: 0,
        children: (0, l.jsx)(d.olH, {
          onClick: e.onClose
        })
      })]
    }), (0, l.jsx)(d.hzk, {
      children: (0, l.jsx)(A, {
        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : C.Yn.DEFAULT
      })
    })]
  })
}