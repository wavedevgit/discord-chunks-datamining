/** Chunk was on 28979 **/
/** chunk id: 585175, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  O: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk326433 = require("./326433.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk15267 = require("./15267.js");
let _ = (0, Chunk419954.E2)(Chunk780964.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
  useSearchTerms: () => [S.intl.string(S.t["sqUm+k"]), S.intl.string(S.t.I1Zuq0), S.intl.string(S.t.nuFtHH)],
  usePredicate: () => (0, r.bG)([o.A], () => o.A.isInputProfileCustom()),
  Component: function() {
    let {
      autoThreshold: t,
      disabled: e
    } = (0, r.cf)([o.A], () => ({
      autoThreshold: o.A.getModeOptions().autoThreshold,
      disabled: o.A.getMode() !== d.TB.VOICE_ACTIVITY
    })), i = l.useCallback(t => {
      let e = o.A.getMode(),
        {
          threshold: i
        } = o.A.getModeOptions();
      u.A.setMode(e, {
        autoThreshold: t,
        threshold: i
      })
    }, []), a = (0, r.bG)([o.A], () => o.A.supports(d.O5.AUTOMATIC_VAD)), {
      volume: T,
      isSpeaking: _
    } = (0, A.lm)(), g = (0, r.bG)([o.A], () => o.A.isEnabled()), c = l.useMemo(() => !g && (0, n.jsx)("div", {
      className: E.B,
      children: (0, n.jsx)(s.wx6, {
        type: "warning",
        children: S.intl.format(S.t["O13I+O"], {
          onEnableClick: () => u.A.enable(true)
        })
      })
    }), [g]), I = l.useMemo(() => t ? S.intl.string(S.t.JsbzjA) : S.intl.string(S.t.MLmyMY), [t]), O = l.useId(), N = l.useId();
    return a ? (0, n.jsxs)("fieldset", {
      "aria-describedby": N,
      children: [(0, n.jsx)(s.AC4, {
        tag: "legend",
        id: O,
        children: S.intl.string(S.t.GByLar)
      }), (0, n.jsx)(s.AC4, {
        id: N,
        children: I
      }), (0, n.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, n.jsx)(s.dOG, {
          disabled: e,
          label: S.intl.string(S.t.lY6j47),
          description: I,
          checked: t,
          onChange: i
        }), t ? (0, n.jsx)(A.Uz, {
          isSpeaking: _,
          className: E.U,
          ariaDescribedBy: N,
          ariaLabelledBy: O,
          disabled: e
        }) : (0, n.jsx)(A.xu, {
          volume: T,
          ariaDescribedBy: N,
          ariaLabelledBy: O,
          disabled: e
        }), c]
      })]
    }) : (0, n.jsxs)(s.BJc, {
      direction: "vertical",
      gap: 8,
      children: [(0, n.jsx)(s.D0$, {
        label: S.intl.string(S.t["sqUm+k"]),
        description: I,
        layout: "vertical",
        children: i => t ? (0, n.jsx)(A.Uz, {
          isSpeaking: _,
          className: E.U,
          id: i.controlId,
          ariaDescribedBy: i.describedById,
          ariaLabelledBy: i.labelId,
          disabled: e
        }) : (0, n.jsx)(A.xu, {
          volume: T,
          id: i.controlId,
          ariaDescribedBy: i.describedById,
          ariaLabelledBy: i.labelId,
          disabled: e
        })
      }), c]
    })
  }
})