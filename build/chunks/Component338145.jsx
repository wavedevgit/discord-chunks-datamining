/** Chunk was on 30485 **/
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
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let Chunk993830 = require("./993830.js"),
  Chunk413142 = require("./413142.js"),
  I = {
    page: Chunk652215.liQ.USER_SETTINGS,
    section: Chunk652215.JJy.SETTINGS_VOICE_AND_VIDEO
  };

function O() {
  let t = (0, r.bG)([A.A], () => (0, s.qB1)(A.A.theme));
  return (0, n.jsx)("img", {
    src: t ? g : _,
    width: 48,
    height: 32,
    alt: ""
  })
}
let N = (0, Chunk419954.E2)(Chunk780964.X.VOICE_NOISE_SUPPRESSION_SETTING, {
  useSearchTerms: () => [E.intl.string(E.t.t8Qhib), E.intl.string(E.t.hmfkCi)],
  usePredicate: function() {
    return (0, r.bG)([d.A], () => d.A.isInputProfileCustom() && d.A.isNoiseSuppressionSupported())
  },
  Component: function() {
    let t = l.useCallback(t => {
        a.A.setNoiseCancellation("KRISP" === t, I), a.A.setNoiseSuppression("STANDARD" === t, I)
      }, []),
      {
        noiseCancellation: e,
        noiseSuppression: i,
        isNoiseSuppressionSupported: o,
        isNoiseCancellationSupported: A
      } = (0, r.cf)([d.A], () => ({
        noiseCancellation: d.A.getNoiseCancellation(),
        noiseSuppression: d.A.getNoiseSuppression(),
        isNoiseSuppressionSupported: d.A.isNoiseSuppressionSupported(),
        isNoiseCancellationSupported: d.A.isNoiseCancellationSupported()
      })),
      S = l.useMemo(() => {
        let t = [];
        return A && t.push({
          id: "krisp",
          label: E.intl.string(E.t.rdoNzt),
          value: "KRISP"
        }), o && t.push({
          id: "standard",
          label: E.intl.string(E.t.qXeYHw),
          value: "STANDARD"
        }), t.push({
          id: "disabled",
          label: E.intl.string(E.t.wkYAlz),
          value: "NONE"
        }), t
      }, [A, o]),
      g = A ? E.intl.format(E.t["1q5aTp"], {
        helpArticle: T.A.getArticleURL(c.MVz.NOISE_SUPPRESSION)
      }) : E.intl.string(E.t.OWKjw5);
    return (0, n.jsxs)(s.BJc, {
      direction: "vertical",
      gap: 0,
      children: [(0, n.jsx)(u.l6P, {
        label: E.intl.string(E.t.t8Qhib),
        description: g,
        layout: "horizontal",
        value: e ? "KRISP" : i ? "STANDARD" : "NONE",
        onSelectionChange: t,
        options: S,
        selectionMode: "single",
        fullWidth: true
      }), A && (0, n.jsx)(O, {})]
    })
  }
})