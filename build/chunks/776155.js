/** Chunk was on 384 **/
/** chunk id: 776155, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk295141 = require("./295141.js");

function l(e) {
  let [t, n] = r.useState(true), [l, s] = r.useState(), [a, o] = r.useState(), c = r.useCallback(async e => {
    n(true), s(true);
    try {
      let t = await i.HT(e);
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