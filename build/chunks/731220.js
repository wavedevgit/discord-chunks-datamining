/** Chunk was on 11298 **/
/** chunk id: 731220, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  e: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk957115 = require("./957115.js"),
  Chunk257126 = require("./257126.js");

function r(e) {
  let {
    getOptions: t
  } = e, l = n.useMemo(() => {
    let e = t();
    return (0, a.Bi)(e, i.Ef)
  }, [t]), [r, u] = n.useState(null), [s, b] = n.useState(""), [d, o] = n.useState(false), f = n.useCallback(e => {
    o(true), u(e)
  }, []), c = n.useCallback(e => {
    b(e)
  }, []);
  return n.useMemo(() => ({
    options: l,
    selectedOption: r,
    freeformText: s,
    isFreeformEnabled: d,
    selectOption: f,
    onFreeformTextChange: c
  }), [l, r, s, d, f, c])
}