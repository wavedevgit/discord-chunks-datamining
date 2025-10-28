/** Chunk was on 33622 **/
/** chunk id: 599925, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  L: () => r
});
var Chunk191905 = require("./191905.js"),
  Chunk647438 = require("./647438.js");

function r(e) {
  let a = (0, u.X)({
      usage: "search",
      ...e
    }),
    t = (0, n.useCallback)((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === a.compare(e.slice(0, t.length), t)), [a]),
    r = (0, n.useCallback)((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === a.compare(e.slice(-t.length), t)), [a]),
    i = (0, n.useCallback)((e, t) => {
      if (0 === t.length) returntrue;
      e = e.normalize("NFC");
      let u = 0,
        n = (t = t.normalize("NFC")).length;
      for (; u + n <= e.length; u++) {
        let r = e.slice(u, u + n);
        if (0 === a.compare(t, r)) returntrue
      }
      returnfalse
    }, [a]);
  return (0, n.useMemo)(() => ({
    startsWith: t,
    endsWith: r,
    contains: i
  }), [t, r, i])
}