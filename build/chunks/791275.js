/** Chunk was on 47841 **/
/** chunk id: 791275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk695825 = require("./695825.js");

function l(e) {
  let [t, n] = r.useState(true), [l, s] = r.useState(), [a, c] = r.useState(), o = r.useCallback(async e => {
    n(true), s(true);
    try {
      let t = await i.zW(e);
      c(t)
    } catch (e) {
      s(e)
    } finally {
      n(false)
    }
  }, []);
  return r.useEffect(() => {
    o(e)
  }, [e, o]), {
    isLoading: t,
    error: l,
    highlightedCreatorDetails: a
  }
}