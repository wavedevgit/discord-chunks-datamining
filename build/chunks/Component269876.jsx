/** Chunk was on web.js **/
/** chunk id: 269876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kq: () => O,
  NP: () => v,
  ZP: () => I,
  t8: () => S
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
  Chunk948913 = require("./948913.js"),
  Chunk440326 = require("./440326.js"),
  Chunk478411 = require("./478411.js");
let y = (0, Chunk313201.hQ)();

function O() {
  let [e, t] = Chunk473749.useState(false), [n, r] = Chunk473749.useState(false);

  function a(e, n) {
    t(e), r((n & m.Dg.VOICE) === m.Dg.VOICE)
  }
  return Chunk473749.useEffect(() => {
    let e = new Chunk846519.V7;
    return module.start(1e3, () => {
      Chunk131951.Z.getMediaEngine().on(Chunk46973.aB.VoiceActivity, Chunk120356), module.stop()
    }), () => {
      Chunk131951.Z.getMediaEngine().removeListener(Chunk46973.aB.VoiceActivity, Chunk120356), module.stop()
    }
  }, []), {
    volume: module,
    isSpeaking: require
  }
}

function v(e) {
  let {
    isSpeaking: t,
    className: n,
    id: i,
    ariaDescribedBy: a,
    ariaLabelledBy: s
  } = e;
  return (0, r.jsx)("div", {
    className: o()(g.inputSensitivitySlider, n),
    id: i,
    "aria-describedby": a,
    "aria-labelledby": s,
    children: (0, r.jsx)("div", {
      className: o()(g.inputSensitivityBar, g.sliderBar, {
        [g.speaking]: t
      })
    })
  })
}

function S(e) {
  let {
    volume: t,
    id: n,
    ariaDescribedBy: i,
    ariaLabelledBy: a
  } = e, {
    threshold: l,
    autoThreshold: c
  } = (0, s.cj)([_.Z], () => ({
    threshold: _.Z.getModeOptions().threshold,
    autoThreshold: _.Z.getModeOptions().autoThreshold
  })), p = (0, s.e7)([_.Z], () => _.Z.getMode());

  function m(e, t) {
    f.Z.setMode(p, {
      threshold: e,
      autoThreshold: t
    })
  }
  return (0, r.jsx)("section", {
    className: o()(g.inputSensitivityToggle, g.manual),
    id: n,
    "aria-describedby": i,
    "aria-labelledby": a,
    children: (0, r.jsx)(d.iRW, {
      initialValue: l + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => m(-((100 - e) * 1), c),
      barStyles: {
        background: u.Z.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: u.Z.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": y,
      children: (0, r.jsxs)("div", {
        className: o()(g.sliderBar, g.microphone, g.inputSensitivityBar, E.bar),
        children: [(0, r.jsx)("div", {
          className: o()(g.fill, g.inputSensitivityBarFill),
          style: {
            width: t + 100 + "%"
          }
        }), (0, r.jsx)("div", {
          className: "grow"
        })]
      })
    })
  })
}

function I() {
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
  })), {
    volume: a,
    isSpeaking: o
  } = O(), l = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isEnabled());

  function c(e, t) {
    f.Z.setMode(n, {
      threshold: e,
      autoThreshold: t
    })
  }
  return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
    className: Chunk948913.sensitivity,
    children: [Chunk473749 && (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.I1Zuq0),
      checked: exports,
      onChange: t => c(e, t)
    }), exports ? (0, Chunk54381.jsxs)("section", {
      className: Chunk948913.inputSensitivityToggle,
      children: [(0, Chunk54381.jsx)(v, {
        isSpeaking: o
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk478411.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.W3K5Im)
      })]
    }) : (0, Chunk54381.jsx)(S, {
      volume: Chunk120356
    }), !Chunk46973 && (0, Chunk54381.jsx)(Chunk481060.Wn, {
      messageType: Chunk481060.QYI.WARNING,
      className: Chunk478411.marginBottom8,
      children: Chunk388032.intl.format(Chunk388032.t["O13I+O"], {
        onEnableClick: () => Chunk846027.Z.enable(true)
      })
    })]
  })
}