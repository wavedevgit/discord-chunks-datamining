/** Chunk was on 9452 **/
/** chunk id: 339063, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.ON)(Chunk313789.n.CLIPS_PHRASES, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.JIze0o), Chunk388032.intl.string(Chunk388032.t.dA2fYk)],
  usePredicate: () => {
    let {
      enableAdvancedSignals: t
    } = Chunk924557.NV.useExperiment({
      location: "clips_phrases_setting"
    }, {
      autoTrackExposure: false
    });
    return module
  },
  render: () => {
    let t = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().autoClipPhrases),
      [e, n] = Chunk473749.useState(module.join(", ")),
      a = Chunk473749.useMemo(() => (0, Chunk392711.debounce)(t => {
        let e = t.split(",").map(t => t.trim()).filter(t => t.length > 0);
        c.a2(e)
      }, 200), []),
      d = Chunk473749.useCallback(t => {
        n(t), a(t)
      }, [Chunk924557]);
    return (0, Chunk54381.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.JIze0o),
      description: Chunk388032.intl.string(Chunk388032.t.dA2fYk),
      layout: "vertical",
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        value: exports,
        onChange: Chunk509613
      })
    })
  }
})