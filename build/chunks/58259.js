/** Chunk was on 384 **/
/** chunk id: 58259, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk479531 = require("./479531.js"),
  Chunk53365 = require("./53365.js");

function s(e) {
  let [t, n] = r.useState(), [s, a] = r.useState(false), [o, c] = r.useState(false);
  return {
    error: t,
    loading: s,
    createEnableRequest: r.useCallback(async () => {
      if (null != e) {
        a(true), n(true), c(false);
        try {
          await l.He(e), c(true)
        } catch (e) {
          n(new i.Z(e))
        } finally {
          a(false)
        }
      }
    }, [e]),
    submittedRequest: o
  }
}