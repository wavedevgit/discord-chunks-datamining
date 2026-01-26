/** Chunk was on 39048 **/
/** chunk id: 586243, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk181658 = require("./181658.js"),
  Chunk493540 = require("./493540.js");

function s(e) {
  let [t, n] = r.useState(), [s, a] = r.useState(false), [o, c] = r.useState(false);
  return {
    error: t,
    loading: s,
    createEnableRequest: r.useCallback(async () => {
      if (null != e) {
        a(true), n(true), c(false);
        try {
          await l.gO(e), c(true)
        } catch (e) {
          n(new i.A(e))
        } finally {
          a(false)
        }
      }
    }, [e]),
    submittedRequest: o
  }
}