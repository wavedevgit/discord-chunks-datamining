/** Chunk was on web.js **/
/** chunk id: 269876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846519 = require("./846519.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192294 = require("./192294.js"),
  Chunk89079 = require("./89079.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");
let O = (0, Chunk313201.hQ)();

function v() {
  let [e, t] = Chunk647438.useState(false), [n, a] = Chunk647438.useState(false), {
    threshold: v,
    autoThreshold: I
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    threshold: Chunk131951.Z.getModeOptions().threshold,
    autoThreshold: Chunk131951.Z.getModeOptions().autoThreshold
  })), {
    inputMode: S,
    automaticVADSupported: T,
    isEnabled: A
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputMode: Chunk131951.Z.getMode(),
    automaticVADSupported: Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_VAD),
    isEnabled: Chunk131951.Z.isEnabled()
  }));

  function C(e, n) {
    t(e), a((n & h.Dg.VOICE) === h.Dg.VOICE)
  }

  function N(e, t) {
    f.Z.setMode(S, {
      threshold: e,
      autoThreshold: t
    })
  }
  Chunk647438.useEffect(() => {
    let e = new Chunk846519.V7;
    return module.start(1e3, () => {
      Chunk131951.Z.getMediaEngine().on(Chunk46973.aB.VoiceActivity, C), module.stop()
    }), () => {
      Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, C), module.stop()
    }
  }, []);
  let R = (0, Chunk951288.jsx)("section", {
    className: o()(Chunk192294.inputSensitivityToggle, Chunk192294.manual),
    children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
      initialValue: v + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => N(-((100 - e) * 1), I),
      barStyles: {
        background: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": O,
      children: (0, Chunk951288.jsxs)("div", {
        className: o()(Chunk192294.sliderBar, Chunk192294.microphone, Chunk192294.inputSensitivityBar, Chunk89079.bar),
        children: [(0, Chunk951288.jsx)("div", {
          className: o()(Chunk192294.fill, Chunk192294.inputSensitivityBarFill),
          style: {
            width: module + 100 + "%"
          }
        }), (0, Chunk951288.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return I && (R = (0, Chunk951288.jsxs)("section", {
    className: Chunk192294.inputSensitivityToggle,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk192294.inputSensitivitySlider,
      children: (0, Chunk951288.jsx)("div", {
        className: o()(Chunk192294.inputSensitivityBar, Chunk192294.sliderBar, {
          [Chunk192294.speaking]: require
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.W3K5Ii)
    })]
  })), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    title: Chunk388032.intl.string(Chunk388032.t["sqUm+v"]),
    titleId: O,
    className: Chunk192294.sensitivity,
    children: [T && (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: e => (0, r.jsxs)("div", {
        className: o()(b.horizontal, y.marginBottom4),
        children: [(0, r.jsx)(d.vwX, {
          tag: d.RB0.H3,
          className: y.marginReset,
          children: (0, r.jsx)("label", {
            htmlFor: e,
            children: m.intl.string(m.t.I1Zuq6)
          })
        }), (0, r.jsx)(d.rsf, {
          id: e,
          checked: I,
          onChange: e => N(v, e)
        })]
      })
    }), R, !A && (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: o()(Chunk192294.inputDisabledWarning, Chunk197571.marginBottom8),
      children: Chunk388032.intl.format(Chunk388032.t["O13I+P"], {
        onEnableClick: () => Chunk846027.Z.enable(true)
      })
    })]
  })
}