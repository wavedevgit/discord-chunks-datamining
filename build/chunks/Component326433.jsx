/** Chunk was on web.js **/
/** chunk id: 326433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => S,
  Uz: () => A,
  lm: () => O,
  xu: () => v
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
let y = (0, Chunk915089.Ld)();

function O() {
  let [e, t] = i.useState(false), [n, r] = i.useState(false);

  function a(e, n) {
    t(e), r((n & h.ME.VOICE) === h.ME.VOICE)
  }
  return i.useEffect(() => {
    let e = new c.Ep;
    return e.start(1e3, () => {
      _.A.getMediaEngine().on(l.bg.VoiceActivity, a), e.stop()
    }), () => {
      _.A.getMediaEngine().removeListener(l.bg.VoiceActivity, a), e.stop()
    }
  }, []), {
    volume: e,
    isSpeaking: n
  }
}

function A(e) {
  let {
    isSpeaking: t,
    className: n,
    id: i,
    ariaDescribedBy: a,
    ariaLabelledBy: o,
    disabled: l
  } = e;
  return (0, r.jsx)("div", {
    className: s()(g.$I, n),
    id: i,
    "aria-describedby": a,
    "aria-labelledby": o,
    children: (0, r.jsx)("div", {
      className: s()(g.Jx, g.NU, {
        [g.zY]: t && !l,
        [g.r9]: l
      })
    })
  })
}

function v(e) {
  let {
    volume: t,
    id: n,
    ariaDescribedBy: i,
    ariaLabelledBy: a,
    disabled: l
  } = e, {
    threshold: c,
    autoThreshold: p
  } = (0, o.cf)([_.A], () => ({
    threshold: _.A.getModeOptions().threshold,
    autoThreshold: _.A.getModeOptions().autoThreshold
  })), h = (0, o.bG)([_.A], () => _.A.getMode());

  function m(e, t) {
    f.A.setMode(h, {
      threshold: e,
      autoThreshold: t
    })
  }
  return (0, r.jsx)("section", {
    className: s()(g.Mo, g.jW),
    id: n,
    "aria-describedby": i,
    "aria-labelledby": a,
    children: (0, r.jsx)(d.Apm, {
      initialValue: c + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => m(-((100 - e) * 1), p),
      barStyles: {
        background: u.A.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: u.A.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": y,
      disabled: l,
      children: (0, r.jsxs)("div", {
        className: s()(g.NU, g.TL, g.Jx, E.bar),
        children: [(0, r.jsx)("div", {
          className: s()(g.GS, g.SH),
          style: {
            width: l ? 0 : t + 100 + "%"
          }
        }), (0, r.jsx)("div", {
          className: "grow"
        })]
      })
    })
  })
}

function S() {
  let {
    threshold: e,
    autoThreshold: t
  } = (0, o.cf)([_.A], () => ({
    threshold: _.A.getModeOptions().threshold,
    autoThreshold: _.A.getModeOptions().autoThreshold
  })), {
    inputMode: n,
    automaticVADSupported: i
  } = (0, o.cf)([_.A], () => ({
    inputMode: _.A.getMode(),
    automaticVADSupported: _.A.supports(h.O5.AUTOMATIC_VAD)
  })), {
    volume: a,
    isSpeaking: s
  } = O(), l = (0, o.bG)([_.A], () => _.A.isEnabled());

  function c(e, t) {
    f.A.setMode(n, {
      threshold: e,
      autoThreshold: t
    })
  }
  return (0, r.jsxs)(d.nVY, {
    label: m.intl.string(m.t["sqUm+k"]),
    className: g.yQ,
    children: [i && (0, r.jsx)(d.dOG, {
      label: m.intl.string(m.t.I1Zuq0),
      checked: t,
      onChange: t => c(e, t)
    }), t ? (0, r.jsxs)("section", {
      className: g.Mo,
      children: [(0, r.jsx)(A, {
        isSpeaking: s
      }), (0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        className: b.QB,
        children: m.intl.string(m.t.W3K5Im)
      })]
    }) : (0, r.jsx)(v, {
      volume: a
    }), !l && (0, r.jsx)(d.po8, {
      messageType: d.YCn.WARNING,
      className: b.QB,
      children: m.intl.format(m.t["O13I+O"], {
        onEnableClick: () => f.A.enable(true)
      })
    })]
  })
}