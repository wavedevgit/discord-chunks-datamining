/** Chunk was on 77069 **/
/** chunk id: 833682, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => O
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk63063 = require("./63063.js"),
  Chunk210887 = require("./210887.js"),
  Chunk313789 = require("./313789.js"),
  Chunk803567 = require("./803567.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let Chunk775322 = require("./775322.js"),
  Chunk353385 = require("./353385.js");

function A() {
  let t = (0, u.e7)([c.Z], () => (0, s.apv)(c.Z.theme));
  return (0, i.jsx)("img", {
    src: t ? I : N,
    width: 48,
    height: 32,
    alt: ""
  })
}
let O = (0, Chunk509613.ON)(Chunk313789.n.VOICE_NOISE_SUPPRESSION_SETTING, {
  useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
  usePredicate: function() {
    return (0, u.e7)([T.Z], () => T.Z.isInputProfileCustom() && T.Z.isNoiseSuppressionSupported())
  },
  Component: function() {
    let t = l.useCallback(t => {
        a.Z.setNoiseCancellation(t === d.Q4.KRISP, d.MP), a.Z.setNoiseSuppression(t === d.Q4.STANDARD, d.MP)
      }, []),
      {
        noiseCancellation: e,
        noiseSuppression: n,
        isNoiseSuppressionSupported: o,
        isNoiseCancellationSupported: c
      } = (0, u.cj)([T.Z], () => ({
        noiseCancellation: T.Z.getNoiseCancellation(),
        noiseSuppression: T.Z.getNoiseSuppression(),
        isNoiseSuppressionSupported: T.Z.isNoiseSuppressionSupported(),
        isNoiseCancellationSupported: T.Z.isNoiseCancellationSupported()
      })),
      E = n ? d.Q4.STANDARD : d.Q4.NONE,
      I = e ? d.Q4.KRISP : E,
      N = l.useMemo(() => {
        let t = [];
        return c && t.push({
          label: g.intl.string(g.t.rdoNzt),
          value: d.Q4.KRISP
        }), o && t.push({
          label: g.intl.string(g.t.qXeYHw),
          value: d.Q4.STANDARD
        }), t.push({
          label: g.intl.string(g.t.wkYAlz),
          value: d.Q4.NONE
        }), t
      }, [c, o]),
      O = c ? g.intl.format(g.t["1q5aTp"], {
        helpArticle: S.Z.getArticleURL(_.BhN.NOISE_SUPPRESSION)
      }) : g.intl.string(g.t.OWKjw5);
    return (0, i.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 0,
      children: [(0, i.jsx)(r.y6, {
        label: g.intl.string(g.t.t8Qhib),
        description: O,
        layout: "horizontal",
        value: I,
        onChange: t,
        options: N
      }), c && (0, i.jsx)(A, {})]
    })
  }
})