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
  let [e, t] = i.useState(false), [n, r] = i.useState(false);

  function a(e, n) {
    t(e), r((n & m.Dg.VOICE) === m.Dg.VOICE)
  }
  return i.useEffect(() => {
    let e = new c.V7;
    return e.start(1e3, () => {
      _.Z.getMediaEngine().on(l.aB.VoiceActivity, a), e.stop()
    }), () => {
      _.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, a), e.stop()
    }
  }, []), {
    volume: e,
    isSpeaking: n
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
  } = (0, s.cj)([_.Z], () => ({
    threshold: _.Z.getModeOptions().threshold,
    autoThreshold: _.Z.getModeOptions().autoThreshold
  })), {
    inputMode: n,
    automaticVADSupported: i
  } = (0, s.cj)([_.Z], () => ({
    inputMode: _.Z.getMode(),
    automaticVADSupported: _.Z.supports(m.AN.AUTOMATIC_VAD)
  })), {
    volume: a,
    isSpeaking: o
  } = O(), l = (0, s.e7)([_.Z], () => _.Z.isEnabled());

  function c(e, t) {
    f.Z.setMode(n, {
      threshold: e,
      autoThreshold: t
    })
  }
  return (0, r.jsxs)(d.C3N, {
    label: h.intl.string(h.t["sqUm+k"]),
    className: g.sensitivity,
    children: [i && (0, r.jsx)(d.rsf, {
      label: h.intl.string(h.t.I1Zuq0),
      checked: t,
      onChange: t => c(e, t)
    }), t ? (0, r.jsxs)("section", {
      className: g.inputSensitivityToggle,
      children: [(0, r.jsx)(v, {
        isSpeaking: o
      }), (0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        className: b.marginBottom8,
        children: h.intl.string(h.t.W3K5Im)
      })]
    }) : (0, r.jsx)(S, {
      volume: a
    }), !l && (0, r.jsx)(d.Wn, {
      messageType: d.QYI.WARNING,
      className: b.marginBottom8,
      children: h.intl.format(h.t["O13I+O"], {
        onEnableClick: () => f.Z.enable(true)
      })
    })]
  })
}