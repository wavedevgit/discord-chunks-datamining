/** Chunk was on web.js **/
/** chunk id: 670184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => a
});
var Chunk74172 = require("./74172.js"),
  Chunk64700 = require("./64700.js");

function a(e) {
  let t = (0, r.Q)({
      usage: "search",
      ...e
    }),
    n = (0, i.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(0, n.length), n)), [t]),
    a = (0, i.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(-n.length), n)), [t]),
    o = (0, i.useCallback)((e, n) => {
      if (0 === n.length) returntrue;
      e = e.normalize("NFC");
      let r = 0,
        i = (n = n.normalize("NFC")).length;
      for (; r + i <= e.length; r++) {
        let a = e.slice(r, r + i);
        if (0 === t.compare(n, a)) returntrue
      }
      returnfalse
    }, [t]);
  return (0, i.useMemo)(() => ({
    startsWith: n,
    endsWith: a,
    contains: o
  }), [n, a, o])
}