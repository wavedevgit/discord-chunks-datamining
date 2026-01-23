/** Chunk was on 16674 **/
/** chunk id: 82821, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  H: () => a
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk149597 = require("./149597.js"),
  Chunk787392 = require("./787392.js");

function a(e) {
  let {
    userId: t,
    keyToOmit: r
  } = e, a = n.useMemo(() => {
    if (null == r) return null;
    let e = new Uint8Array(r);
    return (0, u.uo)(e)
  }, [r]);
  return (0, l.bG)([i.A], () => {
    let e = i.A.getUserVerifiedKeys(t);
    return null == e ? 0 : Object.keys(e).filter(e => e !== a).length
  }, [a, t])
}