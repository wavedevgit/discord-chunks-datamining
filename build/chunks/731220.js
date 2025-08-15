/** Chunk was on 11298 **/
/** chunk id: 731220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk957115 = require("./957115.js"),
  Chunk257126 = require("./257126.js");

function r(e) {
  let {
    getOptions: t
  } = e, n = l.useMemo(() => {
    let e = t();
    return (0, a.Bi)(e, i.Ef)
  }, [t]), [r, u] = l.useState(null), [s, b] = l.useState(""), [d, o] = l.useState(false), c = l.useCallback(e => {
    o(true), u(e)
  }, []), f = l.useCallback(e => {
    b(e)
  }, []);
  return l.useMemo(() => ({
    options: n,
    selectedOption: r,
    freeformText: s,
    isFreeformEnabled: d,
    selectOption: c,
    onFreeformTextChange: f
  }), [n, r, s, d, c, f])
}