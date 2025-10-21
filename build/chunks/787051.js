/** Chunk was on 29679 **/
/** chunk id: 787051, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js"),
  Chunk53365 = require("./53365.js");

function a(e) {
  let [t, n] = r.useState(true), [a, s] = r.useState(), [o, c] = r.useState(), d = r.useCallback(async e => {
    n(true), s(true);
    try {
      let t = await l.wZ(e);
      c(t)
    } catch (e) {
      s(new i.Hx(e))
    } finally {
      n(false)
    }
  }, []);
  return r.useEffect(() => {
    d(e)
  }, [e, d]), {
    isLoading: t,
    error: a,
    creatorMonetizationOnboardingMarketing: o
  }
}