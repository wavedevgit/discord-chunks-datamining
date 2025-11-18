/** Chunk was on web.js **/
/** chunk id: 269876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => O,
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk558254 = require("./558254.js"),
  Chunk43404 = require("./43404.js"),
  Chunk10198 = require("./10198.js");
let y = (0, Chunk313201.hQ)();

function O() {
  let e, [t, n] = Chunk473749.useState(false),
    [a, _] = Chunk473749.useState(false),
    {
      threshold: O,
      autoThreshold: v
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      threshold: Chunk131951.Z.getModeOptions().threshold,
      autoThreshold: Chunk131951.Z.getModeOptions().autoThreshold
    })),
    I = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()),
    T = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isEnabled());

  function S(e, t) {
    n(e), _((t & h.Dg.VOICE) === h.Dg.VOICE)
  }

  function A(e, t) {
    f.Z.setMode(I, {
      threshold: e,
      autoThreshold: t
    })
  }
  return Chunk473749.useEffect(() => {
    let e = new Chunk846519.V7;
    return module.start(1e3, () => {
      Chunk131951.Z.getMediaEngine().on(Chunk46973.aB.VoiceActivity, S), module.stop()
    }), () => {
      Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, S), module.stop()
    }
  }, []), e = v ? (0, Chunk54381.jsxs)("section", {
    className: Chunk558254.inputSensitivityToggle,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk558254.inputSensitivitySlider,
      children: (0, Chunk54381.jsx)("div", {
        className: o()(Chunk558254.inputSensitivityBar, Chunk558254.sliderBar, {
          [Chunk558254.speaking]: Chunk120356
        })
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk10198.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.W3K5Im)
    })]
  }) : (0, Chunk54381.jsx)("section", {
    className: o()(Chunk558254.inputSensitivityToggle, Chunk558254.manual),
    children: (0, Chunk54381.jsx)(Chunk481060.iRW, {
      initialValue: O + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => A(-((100 - e) * 1), v),
      barStyles: {
        background: Chunk692547.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": y,
      children: (0, Chunk54381.jsxs)("div", {
        className: o()(Chunk558254.sliderBar, Chunk558254.microphone, Chunk558254.inputSensitivityBar, Chunk43404.bar),
        children: [(0, Chunk54381.jsx)("div", {
          className: o()(Chunk558254.fill, Chunk558254.inputSensitivityBarFill),
          style: {
            width: exports + 100 + "%"
          }
        }), (0, Chunk54381.jsx)("div", {
          className: "grow"
        })]
      })
    })
  }), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [module, !T && (0, Chunk54381.jsx)(Chunk481060.Wn, {
      messageType: Chunk481060.QYI.WARNING,
      className: Chunk10198.marginBottom8,
      children: Chunk388032.intl.format(Chunk388032.t["O13I+O"], {
        onEnableClick: () => Chunk846027.Z.enable(true)
      })
    })]
  })
}

function v() {
  let {
    threshold: e,
    autoThreshold: t
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    threshold: Chunk131951.Z.getModeOptions().threshold,
    autoThreshold: Chunk131951.Z.getModeOptions().autoThreshold
  })), {
    inputMode: n,
    automaticVADSupported: i
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputMode: Chunk131951.Z.getMode(),
    automaticVADSupported: Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_VAD)
  }));

  function a(e, t) {
    f.Z.setMode(n, {
      threshold: e,
      autoThreshold: t
    })
  }
  return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
    className: Chunk558254.sensitivity,
    children: [Chunk473749 && (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.I1Zuq0),
      checked: exports,
      onChange: t => a(e, t)
    }), (0, Chunk54381.jsx)(O, {})]
  })
}