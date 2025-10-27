/** Chunk was on web.js **/
/** chunk id: 599925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a
});
var Chunk191905 = require("./191905.js"),
  Chunk647438 = require("./647438.js");

function a(e) {
  let t = (0, r.X)({
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