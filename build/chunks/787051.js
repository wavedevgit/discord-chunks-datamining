/** Chunk was on 384 **/
/** chunk id: 787051, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js"),
  Chunk53365 = require("./53365.js");

function s(e) {
  let [t, n] = r.useState(true), [s, a] = r.useState(), [o, c] = r.useState(), u = r.useCallback(async e => {
    n(true), a(true);
    try {
      let t = await l.wZ(e);
      c(t)
    } catch (e) {
      a(new i.Hx(e))
    } finally {
      n(false)
    }
  }, []);
  return r.useEffect(() => {
    u(e)
  }, [e, u]), {
    isLoading: t,
    error: s,
    creatorMonetizationOnboardingMarketing: o
  }
}