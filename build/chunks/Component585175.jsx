/** Chunk was on 30485 **/
/** chunk id: 585175, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  O: () => L
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
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk15267 = require("./15267.js"),
  Chunk785294 = require("./785294.js");
let C = (0, Chunk915089.Ld)();

function b(t) {
  let {
    isSpeaking: e,
    className: i,
    id: l,
    ariaDescribedBy: s,
    ariaLabelledBy: u,
    disabled: a
  } = t;
  return (0, n.jsx)("div", {
    className: r()(O.$I, i),
    id: l,
    "aria-describedby": s,
    "aria-labelledby": u,
    children: (0, n.jsx)("div", {
      className: r()(O.Jx, O.NU, {
        [O.zY]: e && !a,
        [O.r9]: a
      })
    })
  })
}

function p(t) {
  let {
    volume: e,
    id: i,
    ariaDescribedBy: l,
    ariaLabelledBy: s,
    disabled: a
  } = t, {
    threshold: o,
    autoThreshold: S
  } = (0, u.cf)([E.A], () => ({
    threshold: E.A.getModeOptions().threshold,
    autoThreshold: E.A.getModeOptions().autoThreshold
  })), c = (0, u.bG)([E.A], () => E.A.getMode());
  return (0, n.jsx)("section", {
    className: r()(O.Mo, O.jW),
    id: i,
    "aria-describedby": l,
    "aria-labelledby": s,
    children: (0, n.jsx)(T.Apm, {
      initialValue: o + 100,
      onValueRender: t => "".concat((-((100 - t) * 1)).toFixed(0), "dB"),
      onValueChange: t => {
        var e;
        return e = -((100 - t) * 1), void A.A.setMode(c, {
          threshold: e,
          autoThreshold: S
        })
      },
      barStyles: {
        background: d.A.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: d.A.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": C,
      disabled: a,
      children: (0, n.jsxs)("div", {
        className: r()(O.NU, O.TL, O.Jx, N.bar),
        children: [(0, n.jsx)("div", {
          className: r()(O.GS, O.SH),
          style: {
            width: a ? 0 : e + 100 + "%"
          }
        }), (0, n.jsx)("div", {
          className: "grow"
        })]
      })
    })
  })
}
let L = (0, Chunk419954.E2)(Chunk780964.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
  useSearchTerms: () => [I.intl.string(I.t["sqUm+k"]), I.intl.string(I.t.I1Zuq0), I.intl.string(I.t.nuFtHH)],
  usePredicate: () => (0, u.bG)([E.A], () => E.A.isInputProfileCustom()),
  Component: function() {
    let {
      autoThreshold: t,
      disabled: e
    } = (0, u.cf)([E.A], () => ({
      autoThreshold: E.A.getModeOptions().autoThreshold,
      disabled: E.A.getMode() !== _.TB.VOICE_ACTIVITY
    })), i = l.useCallback(t => {
      let e = E.A.getMode(),
        {
          threshold: i
        } = E.A.getModeOptions();
      A.A.setMode(e, {
        autoThreshold: t,
        threshold: i
      })
    }, []), s = (0, u.bG)([E.A], () => E.A.supports(_.O5.AUTOMATIC_VAD)), {
      volume: r,
      isSpeaking: d
    } = function() {
      let [t, e] = l.useState(false), [i, n] = l.useState(false);

      function s(t, i) {
        e(t), n((i & _.ME.VOICE) === _.ME.VOICE)
      }
      return l.useEffect(() => {
        let t = new o.Ep;
        return t.start(1e3, () => {
          E.A.getMediaEngine().on(a.bg.VoiceActivity, s), t.stop()
        }), () => {
          E.A.getMediaEngine().removeListener(a.bg.VoiceActivity, s), t.stop()
        }
      }, []), {
        volume: t,
        isSpeaking: i
      }
    }(), S = (0, u.bG)([E.A], () => E.A.isEnabled()), c = l.useMemo(() => !S && (0, n.jsx)("div", {
      className: O.B4,
      children: (0, n.jsx)(T.wx6, {
        type: "warning",
        children: I.intl.format(I.t["O13I+O"], {
          onEnableClick: () => A.A.enable(true)
        })
      })
    }), [S]), g = l.useMemo(() => t ? I.intl.string(I.t.JsbzjA) : I.intl.string(I.t.MLmyMY), [t]), N = l.useId(), C = l.useId();
    return s ? (0, n.jsxs)("fieldset", {
      "aria-describedby": C,
      children: [(0, n.jsx)(T.AC4, {
        tag: "legend",
        id: N,
        children: I.intl.string(I.t.GByLar)
      }), (0, n.jsx)(T.AC4, {
        id: C,
        children: g
      }), (0, n.jsxs)(T.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(T.dOG, {
          disabled: e,
          label: I.intl.string(I.t.lY6j47),
          description: g,
          checked: t,
          onChange: i
        }), t ? (0, n.jsx)(b, {
          isSpeaking: d,
          className: O.UJ,
          ariaDescribedBy: C,
          ariaLabelledBy: N,
          disabled: e
        }) : (0, n.jsx)(p, {
          volume: r,
          ariaDescribedBy: C,
          ariaLabelledBy: N,
          disabled: e
        }), c]
      })]
    }) : (0, n.jsxs)(T.BJc, {
      direction: "vertical",
      gap: 8,
      children: [(0, n.jsx)(T.D0$, {
        label: I.intl.string(I.t["sqUm+k"]),
        description: g,
        layout: "vertical",
        children: i => t ? (0, n.jsx)(b, {
          isSpeaking: d,
          className: O.UJ,
          id: i.controlId,
          ariaDescribedBy: i.describedById,
          ariaLabelledBy: i.labelId,
          disabled: e
        }) : (0, n.jsx)(p, {
          volume: r,
          id: i.controlId,
          ariaDescribedBy: i.describedById,
          ariaLabelledBy: i.labelId,
          disabled: e
        })
      }), c]
    })
  }
})