/** Chunk was on 77069 **/
/** chunk id: 782134, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  q: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk269876 = require("./269876.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk130081 = require("./130081.js");
let _ = (0, Chunk509613.ON)(Chunk313789.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
  useSearchTerms: () => [E.intl.string(E.t["sqUm+k"]), E.intl.string(E.t.I1Zuq0), E.intl.string(E.t.nuFtHH)],
  usePredicate: () => (0, u.e7)([o.Z], () => {
    let t = o.Z.getMode(),
      e = o.Z.isInputProfileCustom();
    return t === c.pM.VOICE_ACTIVITY && e
  }),
  Component: function() {
    let t = (0, u.e7)([o.Z], () => o.Z.getModeOptions().autoThreshold),
      e = l.useCallback(t => {
        let e = o.Z.getMode(),
          {
            threshold: n
          } = o.Z.getModeOptions();
        r.Z.setMode(e, {
          autoThreshold: t,
          threshold: n
        })
      }, []),
      n = (0, u.e7)([o.Z], () => o.Z.supports(c.AN.AUTOMATIC_VAD)),
      {
        volume: a,
        isSpeaking: T
      } = (0, S.Kq)(),
      _ = (0, u.e7)([o.Z], () => o.Z.isEnabled()),
      g = l.useMemo(() => !_ && (0, i.jsx)("div", {
        className: d.noInputDevicesDetectedWarning,
        children: (0, i.jsx)(s.M14, {
          type: "warning",
          children: E.intl.format(E.t["O13I+O"], {
            onEnableClick: () => r.Z.enable(true)
          })
        })
      }), [_]),
      I = l.useMemo(() => t ? E.intl.string(E.t.JsbzjA) : E.intl.string(E.t.MLmyMY), [t]),
      A = l.useId(),
      N = l.useId();
    return n ? (0, i.jsxs)("fieldset", {
      "aria-describedby": N,
      children: [(0, i.jsx)(s.nn4, {
        tag: "legend",
        id: A,
        children: E.intl.string(E.t.GByLar)
      }), (0, i.jsx)(s.nn4, {
        id: N,
        children: I
      }), (0, i.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, i.jsx)(s.rsf, {
          label: E.intl.string(E.t.lY6j47),
          description: I,
          checked: t,
          onChange: e
        }), t ? (0, i.jsx)(S.NP, {
          isSpeaking: T,
          className: d.autoThresholdSlider,
          ariaDescribedBy: N,
          ariaLabelledBy: A
        }) : (0, i.jsx)(S.t8, {
          volume: a,
          ariaDescribedBy: N,
          ariaLabelledBy: A
        }), g]
      })]
    }) : (0, i.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 8,
      children: [(0, i.jsx)(s.gNt, {
        label: E.intl.string(E.t["sqUm+k"]),
        description: I,
        layout: "vertical",
        children: e => t ? (0, i.jsx)(S.NP, {
          isSpeaking: T,
          className: d.autoThresholdSlider,
          id: e.controlId,
          ariaDescribedBy: e.describedById,
          ariaLabelledBy: e.labelId
        }) : (0, i.jsx)(S.t8, {
          volume: a,
          id: e.controlId,
          ariaDescribedBy: e.describedById,
          ariaLabelledBy: e.labelId
        })
      }), g]
    })
  }
})