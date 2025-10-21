/** Chunk was on web.js **/
/** chunk id: 269876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
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
  Chunk197571 = require("./197571.js");
let y = (0, Chunk313201.hQ)();

function O() {
  let [e, t] = Chunk647438.useState(false), [n, a] = Chunk647438.useState(false), {
    threshold: _,
    autoThreshold: O
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    threshold: Chunk131951.Z.getModeOptions().threshold,
    autoThreshold: Chunk131951.Z.getModeOptions().autoThreshold
  })), {
    inputMode: v,
    automaticVADSupported: I,
    isEnabled: T
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputMode: Chunk131951.Z.getMode(),
    automaticVADSupported: Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_VAD),
    isEnabled: Chunk131951.Z.isEnabled()
  }));

  function S(e, n) {
    t(e), a((n & h.Dg.VOICE) === h.Dg.VOICE)
  }

  function A(e, t) {
    f.Z.setMode(v, {
      threshold: e,
      autoThreshold: t
    })
  }
  Chunk647438.useEffect(() => {
    let e = new Chunk846519.V7;
    return module.start(1e3, () => {
      Chunk131951.Z.getMediaEngine().on(Chunk46973.aB.VoiceActivity, S), module.stop()
    }), () => {
      Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, S), module.stop()
    }
  }, []);
  let C = (0, Chunk951288.jsx)("section", {
    className: o()(Chunk192294.inputSensitivityToggle, Chunk192294.manual),
    children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
      initialValue: Chunk313201 + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => A(-((100 - e) * 1), O),
      barStyles: {
        background: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": y,
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
  return O && (C = (0, Chunk951288.jsxs)("section", {
    className: Chunk192294.inputSensitivityToggle,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk192294.inputSensitivitySlider,
      children: (0, Chunk951288.jsx)("div", {
        className: o()(Chunk192294.inputSensitivityBar, Chunk192294.sliderBar, {
          [Chunk192294.speaking]: require
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.W3K5Im)
    })]
  })), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
    className: Chunk192294.sensitivity,
    children: [I && (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.I1Zuq0),
      checked: O,
      onChange: e => A(_, e)
    }), C, !T && (0, Chunk951288.jsx)(Chunk481060.Wn, {
      messageType: Chunk481060.QYI.WARNING,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.format(Chunk388032.t["O13I+O"], {
        onEnableClick: () => Chunk846027.Z.enable(true)
      })
    })]
  })
}