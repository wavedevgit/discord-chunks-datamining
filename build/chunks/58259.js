/** Chunk was on 29679 **/
/** chunk id: 58259, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk479531 = require("./479531.js"),
  Chunk53365 = require("./53365.js");

function a(e) {
  let [t, n] = r.useState(), [a, s] = r.useState(false), [o, c] = r.useState(false);
  return {
    error: t,
    loading: a,
    createEnableRequest: r.useCallback(async () => {
      if (null != e) {
        s(true), n(true), c(false);
        try {
          await l.He(e), c(true)
        } catch (e) {
          n(new i.Z(e))
        } finally {
          s(false)
        }
      }
    }, [e]),
    submittedRequest: o
  }
}