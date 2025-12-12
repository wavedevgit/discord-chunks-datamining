/** Chunk was on web.js **/
/** chunk id: 464581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk887490 = require("./887490.js");

function o(e, t, n) {
  let o = r.useCallback(e => {
      if (t) returntrue;
      if (true === e.defaultPrevented) returnfalse;
      let r = n(e);
      return r && (e.preventDefault(), e.stopPropagation()), r
    }, [t, n]),
    a = r.useCallback(t => {
      let {
        event: n
      } = t;
      o(n) || (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.bN.focus(e)))
    }, [e, o]);
  return {
    handlePaste: o,
    handleGlobalPaste: a
  }
}