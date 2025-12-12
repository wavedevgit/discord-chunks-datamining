/** Chunk was on 11298 **/
/** chunk id: 124653, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  e: () => r
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk957115 = require("./957115.js"),
  Chunk257126 = require("./257126.js");

function r(t) {
  let {
    getOptions: e
  } = t, n = l.useMemo(() => {
    let t = e();
    return (0, a.Bi)(t, i.Ef)
  }, [e]), [r, u] = l.useState(null), [s, b] = l.useState(""), [d, o] = l.useState(false), v = l.useCallback(t => {
    o(true), u(t)
  }, []), O = l.useCallback(t => {
    b(t)
  }, []);
  return l.useMemo(() => ({
    options: n,
    selectedOption: r,
    freeformText: s,
    isFreeformEnabled: d,
    selectOption: v,
    onFreeformTextChange: O
  }), [n, r, s, d, v, O])
}