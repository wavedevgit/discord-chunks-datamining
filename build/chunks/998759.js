/** Chunk was on 46115 **/
/** chunk id: 998759, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  z: () => l
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk827762 = require("./827762.js"),
  Chunk149597 = require("./149597.js");

function l(e) {
  let {
    fingerprintBase64: t,
    chunkSize: r,
    desiredLength: l
  } = e, a = n.useMemo(() => {
    if (null == t || "" === t) return null;
    let e = c.toByteArray(t),
      n = (0, o.DB)(e, l, r);
    if (null == n) return null;
    let a = RegExp(".{1,".concat(r, "}"), "g"),
      s = n.match(a);
    return null == s ? null : Array.from(s)
  }, [r, t, l]);
  if (null != t && "" !== t && null == a) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
  return a
}