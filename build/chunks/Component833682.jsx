/** Chunk was on 9452 **/
/** chunk id: 833682, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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

function N() {
  let t = (0, Chunk442837.e7)([Chunk210887.Z], () => (0, Chunk793030.apv)(Chunk210887.Z.theme));
  return (0, Chunk54381.jsx)("img", {
    src: module ? Chunk775322 : Chunk353385,
    width: 48,
    height: 32,
    alt: ""
  })
}

function f() {
  let t = Chunk473749.useCallback(t => {
      a.Z.setNoiseCancellation(t === T.Q4.KRISP, T.MP), a.Z.setNoiseSuppression(t === T.Q4.STANDARD, T.MP)
    }, []),
    {
      noiseCancellation: e,
      noiseSuppression: n,
      isNoiseSuppressionSupported: o,
      isNoiseCancellationSupported: E
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      noiseCancellation: Chunk131951.Z.getNoiseCancellation(),
      noiseSuppression: Chunk131951.Z.getNoiseSuppression(),
      isNoiseSuppressionSupported: Chunk131951.Z.isNoiseSuppressionSupported(),
      isNoiseCancellationSupported: Chunk131951.Z.isNoiseCancellationSupported()
    })),
    S = require ? Chunk803567.Q4.STANDARD : Chunk803567.Q4.NONE,
    O = exports ? Chunk803567.Q4.KRISP : Chunk313789,
    _ = Chunk473749.useMemo(() => {
      let t = [];
      return Chunk210887 && module.push({
        label: Chunk388032.intl.string(Chunk388032.t.rdoNzt),
        value: Chunk803567.Q4.KRISP
      }), Chunk509613 && module.push({
        label: Chunk388032.intl.string(Chunk388032.t.qXeYHw),
        value: Chunk803567.Q4.STANDARD
      }), module.push({
        label: Chunk388032.intl.string(Chunk388032.t.wkYAlz),
        value: Chunk803567.Q4.NONE
      }), module
    }, [Chunk210887, Chunk509613]),
    f = Chunk210887 ? Chunk388032.intl.format(Chunk388032.t["1q5aTp"], {
      helpArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NOISE_SUPPRESSION)
    }) : Chunk388032.intl.string(Chunk388032.t.OWKjw5);
  return (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
    direction: "vertical",
    gap: 0,
    children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.t8Qhib),
      description: f,
      layout: "horizontal",
      value: Chunk775322,
      onChange: module,
      options: Chunk353385
    }), Chunk210887 && (0, Chunk54381.jsx)(N, {})]
  })
}
let A = (0, Chunk509613.ON)(Chunk313789.n.VOICE_NOISE_SUPPRESSION_SETTING, {
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isInputProfileCustom() && Chunk131951.Z.isNoiseSuppressionSupported())
  },
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.t8Qhib), Chunk388032.intl.string(Chunk388032.t.hmfkCi)],
  render: () => (0, Chunk54381.jsx)(f, {})
})