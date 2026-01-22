/** Chunk was on web.js **/
/** chunk id: 126455, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk711371 = require("./711371.js");

function a(e, t, n) {
  let a = r.useCallback(e => {
      if (t) returntrue;
      if (true === e.defaultPrevented) returnfalse;
      let r = n(e);
      return r && (e.preventDefault(), e.stopPropagation()), r
    }, [t, n]),
    s = r.useCallback(t => {
      let {
        event: n
      } = t;
      a(n) || (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.VW.focus(e)))
    }, [e, a]);
  return {
    handlePaste: a,
    handleGlobalPaste: s
  }
}