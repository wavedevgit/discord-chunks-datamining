/** Chunk was on 77069 **/
/** chunk id: 782134, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  q: () => E
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
let E = (0, Chunk509613.ON)(Chunk313789.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["sqUm+k"]), Chunk388032.intl.string(Chunk388032.t.I1Zuq0), Chunk388032.intl.string(Chunk388032.t.nuFtHH)],
  usePredicate: () => (0, Chunk442837.e7)([Chunk131951.Z], () => {
    let t = Chunk131951.Z.getMode(),
      e = Chunk131951.Z.isInputProfileCustom();
    return module === Chunk65154.pM.VOICE_ACTIVITY && exports
  }),
  Component: function() {
    let t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getModeOptions().autoThreshold),
      e = Chunk473749.useCallback(t => {
        let e = o.Z.getMode(),
          {
            threshold: n
          } = o.Z.getModeOptions();
        r.Z.setMode(e, {
          autoThreshold: t,
          threshold: n
        })
      }, []),
      n = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_VAD)),
      {
        volume: a,
        isSpeaking: c
      } = (0, Chunk269876.Kq)(),
      E = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isEnabled()),
      I = Chunk473749.useMemo(() => !E && (0, Chunk54381.jsx)("div", {
        className: Chunk130081.noInputDevicesDetectedWarning,
        children: (0, Chunk54381.jsx)(Chunk793030.M14, {
          type: "warning",
          children: Chunk388032.intl.format(Chunk388032.t["O13I+O"], {
            onEnableClick: () => Chunk846027.Z.enable(true)
          })
        })
      }), [E]),
      _ = Chunk473749.useMemo(() => module ? Chunk388032.intl.string(Chunk388032.t.JsbzjA) : Chunk388032.intl.string(Chunk388032.t.MLmyMY), [module]),
      O = Chunk473749.useId(),
      N = Chunk473749.useId();
    return require ? (0, Chunk54381.jsxs)("fieldset", {
      "aria-describedby": N,
      children: [(0, Chunk54381.jsx)(Chunk793030.nn4, {
        tag: "legend",
        id: O,
        children: Chunk388032.intl.string(Chunk388032.t.GByLar)
      }), (0, Chunk54381.jsx)(Chunk793030.nn4, {
        id: N,
        children: _
      }), (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk793030.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.lY6j47),
          description: _,
          checked: module,
          onChange: exports
        }), module ? (0, Chunk54381.jsx)(Chunk269876.NP, {
          isSpeaking: Chunk313789,
          className: Chunk130081.autoThresholdSlider,
          ariaDescribedBy: N,
          ariaLabelledBy: O
        }) : (0, Chunk54381.jsx)(Chunk269876.t8, {
          volume: Chunk509613,
          ariaDescribedBy: N,
          ariaLabelledBy: O
        }), I]
      })]
    }) : (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
      direction: "vertical",
      gap: 8,
      children: [(0, Chunk54381.jsx)(Chunk793030.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t["sqUm+k"]),
        description: _,
        layout: "vertical",
        children: e => t ? (0, i.jsx)(S.NP, {
          isSpeaking: c,
          className: g.autoThresholdSlider,
          id: e.controlId,
          ariaDescribedBy: e.describedById,
          ariaLabelledBy: e.labelId
        }) : (0, i.jsx)(S.t8, {
          volume: a,
          id: e.controlId,
          ariaDescribedBy: e.describedById,
          ariaLabelledBy: e.labelId
        })
      }), I]
    })
  }
})