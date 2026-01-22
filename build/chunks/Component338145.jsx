/** Chunk was on 28979 **/
/** chunk id: 338145, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  w: () => O
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk975571 = require("./975571.js"),
  Chunk544028 = require("./544028.js"),
  Chunk780964 = require("./780964.js"),
  Chunk130222 = require("./130222.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let Chunk993830 = require("./993830.js"),
  Chunk413142 = require("./413142.js");

function N() {
  let t = (0, r.bG)([S.A], () => (0, s.qB1)(S.A.theme));
  return (0, n.jsx)("img", {
    src: t ? g : c,
    width: 48,
    height: 32,
    alt: ""
  })
}
let O = (0, Chunk419954.E2)(Chunk780964.X.VOICE_NOISE_SUPPRESSION_SETTING, {
  useSearchTerms: () => [I.intl.string(I.t.t8Qhib), I.intl.string(I.t.hmfkCi)],
  usePredicate: function() {
    return (0, r.bG)([T.A], () => T.A.isInputProfileCustom() && T.A.isNoiseSuppressionSupported())
  },
  Component: function() {
    let t = l.useCallback(t => {
        a.A.setNoiseCancellation(t === d.ls.KRISP, d.Us), a.A.setNoiseSuppression(t === d.ls.STANDARD, d.Us)
      }, []),
      {
        noiseCancellation: e,
        noiseSuppression: i,
        isNoiseSuppressionSupported: o,
        isNoiseCancellationSupported: S
      } = (0, r.cf)([T.A], () => ({
        noiseCancellation: T.A.getNoiseCancellation(),
        noiseSuppression: T.A.getNoiseSuppression(),
        isNoiseSuppressionSupported: T.A.isNoiseSuppressionSupported(),
        isNoiseCancellationSupported: T.A.isNoiseCancellationSupported()
      })),
      E = i ? d.ls.STANDARD : d.ls.NONE,
      g = e ? d.ls.KRISP : E,
      c = l.useMemo(() => {
        let t = [];
        return S && t.push({
          id: "krisp",
          label: I.intl.string(I.t.rdoNzt),
          value: d.ls.KRISP
        }), o && t.push({
          id: "standard",
          label: I.intl.string(I.t.qXeYHw),
          value: d.ls.STANDARD
        }), t.push({
          id: "disabled",
          label: I.intl.string(I.t.wkYAlz),
          value: d.ls.NONE
        }), t
      }, [S, o]),
      O = S ? I.intl.format(I.t["1q5aTp"], {
        helpArticle: A.A.getArticleURL(_.MVz.NOISE_SUPPRESSION)
      }) : I.intl.string(I.t.OWKjw5);
    return (0, n.jsxs)(s.BJc, {
      direction: "vertical",
      gap: 0,
      children: [(0, n.jsx)(u.l6P, {
        label: I.intl.string(I.t.t8Qhib),
        description: O,
        layout: "horizontal",
        value: g,
        onSelectionChange: t,
        options: c,
        selectionMode: "single",
        fullWidth: true
      }), S && (0, n.jsx)(N, {})]
    })
  }
})