/** Chunk was on 33397 **/
/** chunk id: 540247, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  P: () => a
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk974167 = require("./974167.js"),
  Chunk651941 = require("./651941.js");

function a(e) {
  let {
    userId: t,
    keyToOmit: r
  } = e, a = n.useMemo(() => {
    if (null == r) return null;
    let e = new Uint8Array(r);
    return (0, i.MK)(e)
  }, [r]);
  return (0, l.e7)([u.Z], () => {
    let e = u.Z.getUserVerifiedKeys(t);
    return null == e ? 0 : Object.keys(e).filter(e => e !== a).length
  }, [a, t])
}