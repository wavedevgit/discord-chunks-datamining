/** Chunk was on 66536 **/
/** chunk id: 191485, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  L: () => r
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk930932 = require("./930932.js"),
  Chunk472715 = require("./472715.js");

function r(e) {
  let {
    getOptions: t
  } = e, l = n.useMemo(() => {
    let e = t();
    return (0, a.ed)(e, i.ZJ)
  }, [t]), [r, u] = n.useState(null), [s, d] = n.useState(""), [b, O] = n.useState(false), o = n.useCallback(e => {
    O(true), u(e)
  }, []), v = n.useCallback(e => {
    d(e)
  }, []);
  return n.useMemo(() => ({
    options: l,
    selectedOption: r,
    freeformText: s,
    isFreeformEnabled: b,
    selectOption: o,
    onFreeformTextChange: v
  }), [l, r, s, b, o, v])
}