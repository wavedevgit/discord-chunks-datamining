/** Chunk was on web.js **/
/** chunk id: 269876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846519 = require("./846519.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk558254 = require("./558254.js"),
  Chunk43404 = require("./43404.js"),
  Chunk465106 = require("./465106.js"),
  Chunk10198 = require("./10198.js");
let v = (0, Chunk313201.hQ)();

function I() {
  let [e, t] = Chunk647438.useState(false), [n, a] = Chunk647438.useState(false), {
    threshold: I,
    autoThreshold: T
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    threshold: Chunk131951.Z.getModeOptions().threshold,
    autoThreshold: Chunk131951.Z.getModeOptions().autoThreshold
  })), {
    inputMode: S,
    automaticVADSupported: A,
    isEnabled: C
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputMode: Chunk131951.Z.getMode(),
    automaticVADSupported: Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_VAD),
    isEnabled: Chunk131951.Z.isEnabled()
  }));

  function N(e, n) {
    t(e), a((n & m.Dg.VOICE) === m.Dg.VOICE)
  }

  function R(e, t) {
    _.Z.setMode(S, {
      threshold: e,
      autoThreshold: t
    })
  }
  Chunk647438.useEffect(() => {
    let e = new Chunk846519.V7;
    return module.start(1e3, () => {
      Chunk131951.Z.getMediaEngine().on(Chunk46973.aB.VoiceActivity, N), module.stop()
    }), () => {
      Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, N), module.stop()
    }
  }, []);
  let P = (0, Chunk951288.jsx)("section", {
    className: o()(Chunk558254.inputSensitivityToggle, Chunk558254.manual),
    children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
      initialValue: I + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => R(-((100 - e) * 1), T),
      barStyles: {
        background: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": v,
      children: (0, Chunk951288.jsxs)("div", {
        className: o()(Chunk558254.sliderBar, Chunk558254.microphone, Chunk558254.inputSensitivityBar, Chunk43404.bar),
        children: [(0, Chunk951288.jsx)("div", {
          className: o()(Chunk558254.fill, Chunk558254.inputSensitivityBarFill),
          style: {
            width: module + 100 + "%"
          }
        }), (0, Chunk951288.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return T && (P = (0, Chunk951288.jsxs)("section", {
    className: Chunk558254.inputSensitivityToggle,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk558254.inputSensitivitySlider,
      children: (0, Chunk951288.jsx)("div", {
        className: o()(Chunk558254.inputSensitivityBar, Chunk558254.sliderBar, {
          [Chunk558254.speaking]: require
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk10198.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.W3K5Ii)
    })]
  })), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    title: Chunk388032.intl.string(Chunk388032.t["sqUm+v"]),
    titleId: v,
    className: Chunk558254.sensitivity,
    children: [A && (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: e => (0, r.jsxs)("div", {
        className: o()(y.horizontal, O.marginBottom4),
        children: [(0, r.jsx)(f.vwX, {
          tag: f.RB0.H3,
          className: O.marginReset,
          children: (0, r.jsx)("label", {
            htmlFor: e,
            children: g.intl.string(g.t.I1Zuq6)
          })
        }), (0, r.jsx)(d.T2, {
          id: e,
          checked: T,
          onChange: e => R(I, e)
        })]
      })
    }), P, !C && (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: o()(Chunk558254.inputDisabledWarning, Chunk10198.marginBottom8),
      children: Chunk388032.intl.format(Chunk388032.t["O13I+P"], {
        onEnableClick: () => Chunk846027.Z.enable(true)
      })
    })]
  })
}