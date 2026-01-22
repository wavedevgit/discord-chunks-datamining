/** Chunk was on 28979 **/
/** chunk id: 338145, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  w: () => N
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

function O() {
  let t = (0, r.bG)([d.A], () => (0, s.qB1)(d.A.theme));
  return (0, n.jsx)("img", {
    src: t ? c : I,
    width: 48,
    height: 32,
    alt: ""
  })
}
let N = (0, Chunk419954.E2)(Chunk780964.X.VOICE_NOISE_SUPPRESSION_SETTING, {
  useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
  usePredicate: function() {
    return (0, r.bG)([T.A], () => T.A.isInputProfileCustom() && T.A.isNoiseSuppressionSupported())
  },
  Component: function() {
    let t = l.useCallback(t => {
        a.A.setNoiseCancellation(t === E.ls.KRISP, E.Us), a.A.setNoiseSuppression(t === E.ls.STANDARD, E.Us)
      }, []),
      {
        noiseCancellation: e,
        noiseSuppression: i,
        isNoiseSuppressionSupported: o,
        isNoiseCancellationSupported: d
      } = (0, r.cf)([T.A], () => ({
        noiseCancellation: T.A.getNoiseCancellation(),
        noiseSuppression: T.A.getNoiseSuppression(),
        isNoiseSuppressionSupported: T.A.isNoiseSuppressionSupported(),
        isNoiseCancellationSupported: T.A.isNoiseCancellationSupported()
      })),
      S = i ? E.ls.STANDARD : E.ls.NONE,
      c = e ? E.ls.KRISP : S,
      I = l.useMemo(() => {
        let t = [];
        return d && t.push({
          id: "krisp",
          label: g.intl.string(g.t.rdoNzt),
          value: E.ls.KRISP
        }), o && t.push({
          id: "standard",
          label: g.intl.string(g.t.qXeYHw),
          value: E.ls.STANDARD
        }), t.push({
          id: "disabled",
          label: g.intl.string(g.t.wkYAlz),
          value: E.ls.NONE
        }), t
      }, [d, o]),
      N = d ? g.intl.format(g.t["1q5aTp"], {
        helpArticle: A.A.getArticleURL(_.MVz.NOISE_SUPPRESSION)
      }) : g.intl.string(g.t.OWKjw5);
    return (0, n.jsxs)(s.BJc, {
      direction: "vertical",
      gap: 0,
      children: [(0, n.jsx)(u.l6P, {
        label: g.intl.string(g.t.t8Qhib),
        description: N,
        layout: "horizontal",
        value: c,
        onSelectionChange: t,
        options: I,
        selectionMode: "single",
        fullWidth: true
      }), d && (0, n.jsx)(O, {})]
    })
  }
})