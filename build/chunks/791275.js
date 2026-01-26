/** Chunk was on 39048 **/
/** chunk id: 791275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk695825 = require("./695825.js");

function l(e) {
  let [t, n] = r.useState(true), [l, s] = r.useState(), [a, o] = r.useState(), c = r.useCallback(async e => {
    n(true), s(true);
    try {
      let t = await i.zW(e);
      o(t)
    } catch (e) {
      s(e)
    } finally {
      n(false)
    }
  }, []);
  return r.useEffect(() => {
    c(e)
  }, [e, c]), {
    isLoading: t,
    error: l,
    highlightedCreatorDetails: a
  }
}