/** Chunk was on 47841 **/
/** chunk id: 893148, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js"),
  Chunk493540 = require("./493540.js");

function s(e) {
  let [t, n] = r.useState(true), [s, a] = r.useState(), [c, o] = r.useState(), d = r.useCallback(async e => {
    n(true), a(true);
    try {
      let t = await l.P(e);
      o(t)
    } catch (e) {
      a(new i.LG(e))
    } finally {
      n(false)
    }
  }, []);
  return r.useEffect(() => {
    d(e)
  }, [e, d]), {
    isLoading: t,
    error: s,
    creatorMonetizationOnboardingMarketing: c
  }
}