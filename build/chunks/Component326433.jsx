/** Chunk was on 60449 **/
/** chunk id: 326433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => C,
  Uz: () => S,
  lm: () => b,
  xu: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function b() {
  let [e, t] = s.useState(false), [n, i] = s.useState(false);

  function l(e, n) {
    t(e), i((n & A.ME.VOICE) === A.ME.VOICE)
  }
  return s.useEffect(() => {
    let e = new c.Ep;
    return e.start(1e3, () => {
      x.A.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop()
    }), () => {
      x.A.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop()
    }
  }, []), {
    volume: e,
    isSpeaking: n
  }
}

function S(e) {
  let {
    isSpeaking: t,
    className: n,
    id: s,
    ariaDescribedBy: l,
    ariaLabelledBy: a,
    disabled: o
  } = e;
  return (0, i.jsx)("div", {
    className: r()(m.$I, n),
    id: s,
    "aria-describedby": l,
    "aria-labelledby": a,
    children: (0, i.jsx)("div", {
      className: r()(m.Jx, m.NU, {
        [m.zY]: t && !o,
        [m.r9]: o
      })
    })
  })
}

function v(e) {
  let {
    volume: t,
    id: n,
    ariaDescribedBy: s,
    ariaLabelledBy: l,
    disabled: o
  } = e, {
    threshold: c,
    autoThreshold: h
  } = (0, a.cf)([x.A], () => ({
    threshold: x.A.getModeOptions().threshold,
    autoThreshold: x.A.getModeOptions().autoThreshold
  })), A = (0, a.bG)([x.A], () => x.A.getMode());
  return (0, i.jsx)("section", {
    className: r()(m.Mo, m.jW),
    id: n,
    "aria-describedby": s,
    "aria-labelledby": l,
    children: (0, i.jsx)(u.Apm, {
      initialValue: c + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => {
        var t;
        return t = -((100 - e) * 1), void g.A.setMode(A, {
          threshold: t,
          autoThreshold: h
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
      children: (0, i.jsxs)("div", {
        className: r()(m.NU, m.TL, m.Jx, j.bar),
        children: [(0, i.jsx)("div", {
          className: r()(m.GS, m.SH),
          style: {
            width: o ? 0 : t + 100 + "%"
          }
        }), (0, i.jsx)("div", {
          className: "grow"
        })]
      })
    })
  })
}

function C() {
  let {
    threshold: e,
    autoThreshold: t
  } = (0, a.cf)([x.A], () => ({
    threshold: x.A.getModeOptions().threshold,
    autoThreshold: x.A.getModeOptions().autoThreshold
  })), {
    inputMode: n,
    automaticVADSupported: s
  } = (0, a.cf)([x.A], () => ({
    inputMode: x.A.getMode(),
    automaticVADSupported: x.A.supports(A.O5.AUTOMATIC_VAD)
  })), {
    volume: l,
    isSpeaking: r
  } = b(), o = (0, a.bG)([x.A], () => x.A.isEnabled());
  return (0, i.jsxs)(u.nVY, {
    label: p.intl.string(p.t["sqUm+k"]),
    className: m.yQ,
    children: [s && (0, i.jsx)(u.dOG, {
      label: p.intl.string(p.t.I1Zuq0),
      checked: t,
      onChange: t => {
        g.A.setMode(n, {
          threshold: e,
          autoThreshold: t
        })
      }
    }), t ? (0, i.jsxs)("section", {
      className: m.Mo,
      children: [(0, i.jsx)(S, {
        isSpeaking: r
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/normal",
        className: O.QB,
        children: p.intl.string(p.t.W3K5Im)
      })]
    }) : (0, i.jsx)(v, {
      volume: l
    }), !o && (0, i.jsx)(u.po8, {
      messageType: u.YCn.WARNING,
      className: O.QB,
      children: p.intl.format(p.t["O13I+O"], {
        onEnableClick: () => g.A.enable(true)
      })
    })]
  })
}