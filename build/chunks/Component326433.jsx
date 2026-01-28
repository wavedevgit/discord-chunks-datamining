/** Chunk was on 60667 **/
/** chunk id: 326433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => T,
  Uz: () => O,
  lm: () => x,
  xu: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk451988 = require("./451988.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk915089 = require("./915089.js"),
  Chunk430452 = require("./430452.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk90444 = require("./90444.js"),
  Chunk785294 = require("./785294.js"),
  Chunk473169 = require("./473169.js");
let E = (0, Chunk915089.Ld)();

function x() {
  let [e, t] = i.useState(false), [n, r] = i.useState(false);

  function l(e, n) {
    t(e), r((n & g.ME.VOICE) === g.ME.VOICE)
  }
  return i.useEffect(() => {
    let e = new c.Ep;
    return e.start(1e3, () => {
      m.A.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop()
    }), () => {
      m.A.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop()
    }
  }, []), {
    volume: e,
    isSpeaking: n
  }
}

function O(e) {
  let {
    isSpeaking: t,
    className: n,
    id: i,
    ariaDescribedBy: l,
    ariaLabelledBy: a,
    disabled: o
  } = e;
  return (0, r.jsx)("div", {
    className: s()(f.$I, n),
    id: i,
    "aria-describedby": l,
    "aria-labelledby": a,
    children: (0, r.jsx)("div", {
      className: s()(f.Jx, f.NU, {
        [f.zY]: t && !o,
        [f.r9]: o
      })
    })
  })
}

function C(e) {
  let {
    volume: t,
    id: n,
    ariaDescribedBy: i,
    ariaLabelledBy: l,
    disabled: o
  } = e, {
    threshold: c,
    autoThreshold: p
  } = (0, a.cf)([m.A], () => ({
    threshold: m.A.getModeOptions().threshold,
    autoThreshold: m.A.getModeOptions().autoThreshold
  })), g = (0, a.bG)([m.A], () => m.A.getMode());
  return (0, r.jsx)("section", {
    className: s()(f.Mo, f.jW),
    id: n,
    "aria-describedby": i,
    "aria-labelledby": l,
    children: (0, r.jsx)(u.Apm, {
      initialValue: c + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => {
        var t;
        return t = -((100 - e) * 1), void _.A.setMode(g, {
          threshold: t,
          autoThreshold: p
        })
      },
      barStyles: {
        background: d.A.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: d.A.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": E,
      disabled: o,
      children: (0, r.jsxs)("div", {
        className: s()(f.NU, f.TL, f.Jx, h.bar),
        children: [(0, r.jsx)("div", {
          className: s()(f.GS, f.SH),
          style: {
            width: o ? 0 : t + 100 + "%"
          }
        }), (0, r.jsx)("div", {
          className: "grow"
        })]
      })
    })
  })
}

function T() {
  let {
    threshold: e,
    autoThreshold: t
  } = (0, a.cf)([m.A], () => ({
    threshold: m.A.getModeOptions().threshold,
    autoThreshold: m.A.getModeOptions().autoThreshold
  })), {
    inputMode: n,
    automaticVADSupported: i
  } = (0, a.cf)([m.A], () => ({
    inputMode: m.A.getMode(),
    automaticVADSupported: m.A.supports(g.O5.AUTOMATIC_VAD)
  })), {
    volume: l,
    isSpeaking: s
  } = x(), o = (0, a.bG)([m.A], () => m.A.isEnabled());
  return (0, r.jsxs)(u.nVY, {
    label: A.intl.string(A.t["sqUm+k"]),
    className: f.yQ,
    children: [i && (0, r.jsx)(u.dOG, {
      label: A.intl.string(A.t.I1Zuq0),
      checked: t,
      onChange: t => {
        _.A.setMode(n, {
          threshold: e,
          autoThreshold: t
        })
      }
    }), t ? (0, r.jsxs)("section", {
      className: f.Mo,
      children: [(0, r.jsx)(O, {
        isSpeaking: s
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        className: b.QB,
        children: A.intl.string(A.t.W3K5Im)
      })]
    }) : (0, r.jsx)(C, {
      volume: l
    }), !o && (0, r.jsx)(u.po8, {
      messageType: u.YCn.WARNING,
      className: b.QB,
      children: A.intl.format(A.t["O13I+O"], {
        onEnableClick: () => _.A.enable(true)
      })
    })]
  })
}